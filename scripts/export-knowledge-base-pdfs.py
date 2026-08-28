#!/usr/bin/env python3
"""Build source-faithful portfolio knowledge-base PDFs."""
from __future__ import annotations

import hashlib, json, re, shutil, subprocess
from pathlib import Path

from lxml import html
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, Image, KeepTogether, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parent.parent
PUBLIC, DIST, OUTPUT, TMP = ROOT / 'public', ROOT / 'dist', ROOT / 'output/pdf/knowledge-base', ROOT / '.tmp/pdfs/knowledge-base'
CASES = [('sales-workbench-ai', 'sales-workbench-ai.pdf'), ('ai-research-architecture', 'ai-research-architecture.pdf'), ('global-data-analytics', 'global-data-analytics.pdf'), ('one-report', 'one-report.pdf'), ('hitachi-energy-partner-portal', 'hitachi-energy-partner-portal.pdf'), ('cisco-customer-insights', 'cisco-customer-insights.pdf')]

def text(element): return re.sub(r'\s+', ' ', ''.join(element.itertext())).strip()
def esc(value): return value.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
def slug(value): return re.sub('[^a-z0-9]+', '-', value.lower().replace('&','and')).strip('-')
def classes(element): return set(element.get('class','').split())
def source_path(src):
    path = PUBLIC / src.lstrip('/')
    if not src.startswith('/assets/') or not path.is_file(): raise FileNotFoundError(f'Missing asset: {src}')
    return path

def font():
    for candidate in ['/System/Library/Fonts/Supplemental/Arial Unicode.ttf', '/System/Library/Fonts/Supplemental/Arial.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
        if Path(candidate).is_file():
            pdfmetrics.registerFont(TTFont('KnowledgeSans', candidate)); return 'KnowledgeSans'
    return 'Helvetica'

FONT = font(); BASE = getSampleStyleSheet()['BodyText']
S = {
 'title': ParagraphStyle('title', parent=BASE, fontName=FONT, fontSize=22, leading=27, spaceAfter=12),
 'source': ParagraphStyle('source', parent=BASE, fontName=FONT, fontSize=9, leading=13, textColor=colors.HexColor('#555555'), spaceAfter=16),
 'h2': ParagraphStyle('h2', parent=BASE, fontName=FONT, fontSize=15, leading=19, spaceBefore=16, spaceAfter=7),
 'h3': ParagraphStyle('h3', parent=BASE, fontName=FONT, fontSize=12, leading=16, spaceBefore=12, spaceAfter=6),
 'body': ParagraphStyle('body', parent=BASE, fontName=FONT, fontSize=10, leading=14, spaceAfter=8),
 'meta': ParagraphStyle('meta', parent=BASE, fontName=FONT, fontSize=9, leading=13, spaceAfter=3),
 'media': ParagraphStyle('media', parent=BASE, fontName=FONT, fontSize=8.5, leading=12, textColor=colors.HexColor('#444444'), spaceAfter=12),
}

def fallback(video):
    TMP.mkdir(parents=True, exist_ok=True); destination = TMP / f'{hashlib.sha256(str(video).encode()).hexdigest()[:16]}.png'
    if not destination.exists(): subprocess.run(['ffmpeg','-y','-i',str(video),'-frames:v','1',str(destination)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return destination

def record(element):
    media = element if element.tag in {'img','video'} else next(iter(element.xpath('.//img | .//video')), None)
    if media is None: return None
    src = media.get('src','')
    if not src.startswith('/assets/') or src.endswith('.svg'): return None
    original, displayed, label = source_path(src), None, 'Image'
    fallback_used = False
    if media.tag == 'video':
        poster = media.get('poster')
        displayed, label = (source_path(poster), 'Video poster') if poster else (fallback(original), 'Video first-frame fallback (no supplied poster)')
        fallback_used = not bool(poster)
    else: displayed = original
    captions = element.xpath('.//figcaption') if element.tag == 'figure' else []
    return {'type':'media','kind':media.tag,'source_asset':src,'displayed_asset':str(displayed.relative_to(ROOT)) if displayed.is_relative_to(ROOT) else str(displayed),'fallback_frame':fallback_used,'label':label,'alt_text':media.get('alt') or media.get('aria-label') or '','caption':text(captions[0]) if captions else '','path':displayed}

def case_blocks(article):
    blocks=[]
    def walk(node):
        if node.tag in {'script','style','svg','nav'} or 'case-navigation' in classes(node): return
        if node.tag == 'figure':
            item=record(node)
            if item: blocks.append(item)
            return
        if node.tag in {'img','video'}:
            item=record(node)
            if item: blocks.append(item)
            return
        if node.tag in {'h1','h2','h3','h4','h5','h6'}:
            if text(node): blocks.append({'type':'heading','level':int(node.tag[1]),'text':text(node)})
            return
        if node.tag == 'p' and text(node): blocks.append({'type':'paragraph','text':text(node)}); return
        if node.tag == 'li' and text(node): blocks.append({'type':'bullet','text':text(node)}); return
        if node.tag == 'dl':
            items=node.xpath('./div')
            for item in items:
                term, definition = item.xpath('./dt'), item.xpath('./dd')
                if term and definition: blocks.append({'type':'meta','label':text(term[0]),'text':text(definition[0])})
            return
        for child in node: walk(child)
    walk(article); return blocks

def gallery_blocks(article):
    heading=article.xpath('./div[contains(@class,"gallery-project-info")]//h2')[0]; title=text(heading)
    year=article.xpath('./div[contains(@class,"gallery-project-info")]//time')[0]; blocks=[{'type':'meta','label':'Year','text':text(year)}]
    for paragraph in article.xpath('./div[contains(@class,"gallery-project-info")]//p'): blocks.append({'type':'paragraph','text':text(paragraph)})
    for artifact in article.xpath('./div[contains(@class,"gallery-artifact")]'):
        item=record(artifact)
        if item: blocks.append(item)
    return title, blocks

def image(path):
    reader=ImageReader(str(path)); width,height=reader.getSize(); ratio=min((6.75*inch)/width,(7*inch)/height,1)
    return Image(str(path), width=width*ratio, height=height*ratio)

def build(path,title,source,blocks):
    story=[Paragraph(esc(title),S['title']),Paragraph(f'Source: {esc(source)}',S['source']),HRFlowable(width='100%',thickness=.5,color=colors.HexColor('#999999')),Spacer(1,10)]
    skip_title=True
    for block in blocks:
        if block['type']=='heading':
            if skip_title and block['level']==1 and block['text']==title: skip_title=False; continue
            skip_title=False; story.append(Paragraph(esc(block['text']), S['h2'] if block['level']<=2 else S['h3']))
        elif block['type']=='paragraph': story.append(Paragraph(esc(block['text']),S['body']))
        elif block['type']=='bullet': story.append(Paragraph('• '+esc(block['text']),S['body']))
        elif block['type']=='meta': story.append(Paragraph(f'<b>{esc(block["label"])}:</b> {esc(block["text"])}',S['meta']))
        else:
            details=[block['label']]
            if block['alt_text']: details.append('Alt text: '+block['alt_text'])
            if block['caption']: details.append('Caption: '+block['caption'])
            details.append('Source asset: '+block['source_asset'])
            story.append(KeepTogether([image(block['path']),Spacer(1,4),Paragraph(esc(' | '.join(details)),S['media'])]))
    SimpleDocTemplate(str(path),pagesize=letter,leftMargin=.7*inch,rightMargin=.7*inch,topMargin=.65*inch,bottomMargin=.65*inch,title=title,author='Sakshat Goyal Portfolio knowledge-base export').build(story)

def entry(pdf,title,source,blocks):
    return {'file':str(pdf.relative_to(OUTPUT)),'title':title,'source':source,'page_count':len(PdfReader(str(pdf)).pages),'sha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'media':[{k:v for k,v in b.items() if k not in {'type','path'}} for b in blocks if b['type']=='media']}

def main():
    shutil.rmtree(OUTPUT,ignore_errors=True); (OUTPUT/'case-studies').mkdir(parents=True); (OUTPUT/'gallery-projects').mkdir(parents=True)
    subprocess.run(['node','./node_modules/astro/astro.js','build'],cwd=ROOT,check=True)
    entries=[]
    for route,filename in CASES:
        document=html.parse(str(DIST/'work'/route/'index.html')); article=document.xpath('//article[contains(@class,"case-study")]')[0]; title=text(article.xpath('.//h1')[0]); blocks=case_blocks(article); pdf=OUTPUT/'case-studies'/filename; build(pdf,title,f'/work/{route}/',blocks); entries.append(entry(pdf,title,f'/work/{route}/',blocks))
    document=html.parse(str(DIST/'index.html'))
    for article in document.xpath('//article[contains(@class,"gallery-project")]'):
        title,blocks=gallery_blocks(article); pdf=OUTPUT/'gallery-projects'/f'{slug(title)}.pdf'; build(pdf,title,'/#gallery',blocks); entries.append(entry(pdf,title,'/#gallery',blocks))
    if len(entries)!=15: raise RuntimeError(f'Expected 15 PDFs, found {len(entries)}')
    (OUTPUT/'manifest.json').write_text(json.dumps({'document_count':15,'documents':entries},indent=2)+'\n')

if __name__=='__main__': main()
