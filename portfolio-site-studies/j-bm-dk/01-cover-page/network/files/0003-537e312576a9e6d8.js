var K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
function sha256hex(m){
function r(v,n){return(v>>>n)|(v<<(32-n))}
var b=[],i;for(i=0;i<m.length;i++){var c=m.charCodeAt(i);if(c<128)b.push(c);else if(c<2048){b.push(192|(c>>6));b.push(128|(c&63))}else{b.push(224|(c>>12));b.push(128|((c>>6)&63));b.push(128|(c&63))}}
var l=b.length*8;b.push(128);while(b.length%64!==56)b.push(0);
b.push(0,0,0,0,(l>>>24)&0xff,(l>>>16)&0xff,(l>>>8)&0xff,l&0xff);
var h0=0x6a09e667,h1=0xbb67ae85,h2=0x3c6ef372,h3=0xa54ff53a,h4=0x510e527f,h5=0x9b05688c,h6=0x1f83d9ab,h7=0x5be0cd19;
for(var o=0;o<b.length;o+=64){var w=[];for(i=0;i<16;i++)w[i]=(b[o+i*4]<<24)|(b[o+i*4+1]<<16)|(b[o+i*4+2]<<8)|b[o+i*4+3];
for(i=16;i<64;i++){var s0=(r(w[i-15],7))^(r(w[i-15],18))^(w[i-15]>>>3);var s1=(r(w[i-2],17))^(r(w[i-2],19))^(w[i-2]>>>10);w[i]=(w[i-16]+s0+w[i-7]+s1)|0}
var a=h0,B=h1,C=h2,D2=h3,e=h4,f=h5,g=h6,h=h7;
for(i=0;i<64;i++){var S1=(r(e,6))^(r(e,11))^(r(e,25));var ch=(e&f)^((~e)&g);var t1=(h+S1+ch+K[i]+w[i])|0;var S0=(r(a,2))^(r(a,13))^(r(a,22));var mj=(a&B)^(a&C)^(B&C);var t2=(S0+mj)|0;h=g;g=f;f=e;e=(D2+t1)|0;D2=C;C=B;B=a;a=(t1+t2)|0}
h0=(h0+a)|0;h1=(h1+B)|0;h2=(h2+C)|0;h3=(h3+D2)|0;h4=(h4+e)|0;h5=(h5+f)|0;h6=(h6+g)|0;h7=(h7+h)|0}
var hex="";[h0,h1,h2,h3,h4,h5,h6,h7].forEach(function(v){for(var j=28;j>=0;j-=4)hex+="0123456789abcdef".charAt((v>>j)&0xf)});
return hex}
function lz(h){var b=0;for(var i=0;i<h.length;i++){var n=parseInt(h[i],16);if(n===0)b+=4;else{if(n<2)b+=3;else if(n<4)b+=2;else if(n<8)b+=1;break}}return b}
onmessage=function(e){var T=e.data.token,D=e.data.difficulty,n=0;for(;;){if(lz(sha256hex(T+':'+n))>=D){postMessage({type:'found',nonce:n});return}if((n&16383)===0)postMessage({type:'progress'});n++}};