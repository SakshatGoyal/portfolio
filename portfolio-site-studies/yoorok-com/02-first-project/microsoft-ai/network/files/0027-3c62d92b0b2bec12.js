import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./index-BX8mwHR9.js";var p=`/wp-content/themes/wp-base-theme/dist/assets/LDR_RG01_0-Cx9G0smZ.png`,m=.5,h=`ontouchstart`in window||navigator.msMaxTouchPoints>0;function g(e){var t=e.substring(1).split(``);return t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t=`0x`+t.join(``),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var _=`
    #version 300 es
    precision highp float;
    in vec3 position;
    in vec2 uv;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    out vec2 vUv;
    void main(void) {
        vUv = uv;
        gl_Position = uPMatrix * uMVMatrix * vec4( position, 1.0 );
    }
`,v={useFastBokeh:!0,useBokeh:!0,useVignette:!0,useSine:!0,useShatter:!0,resolution:[window.innerWidth*m,window.innerHeight*m],samplingMethod:1,blueNoiseSamplingMethod:5,useGammaCorrection:!1,blueNoiseResolution:[256,256],background:{color:`#FFAAA5`},vignette:{color:`#4a0035`,radius:.354,falloff:1,displace:0,mix:1,angle:0,skew:.54,positionX:.603,positionY:.38},sine:{frequency:.35,amplitude:1.18,falloff:.5,rotation:0,phase:0,speed:.1,mixRadius:1,trackMouse:0},shatter:{pos:[.5,.5],scale:.534,amount:1,angle:44,radius:1,skew:.84,mixRadius:1,mixRadiusInvert:0},bokeh:{mixRadius:1,trackMouse:0,radius:.754,tilt:.5},output:{color:`#FFD198`}},y=class extends c{swapBuffers(){let e=this.bufferRead;this.bufferRead=this.bufferWrite,this.bufferWrite=e}created(){this.last=performance.now(),this.frameIndex=0,this.viewport=n.create(),this.elapsed=0,this.pointerScale=0,this.smoothedPointerScale=0,this.mouseObj={x:0,y:0},this.pointer=[0,0],this.mouseObjX=0,this.mouseObjY=0,this.uniforms={},this.defines={},this.time=0,this.resolution=[window.innerWidth*m,window.innerHeight*m],this.onPointerMove=this.onPointerMove.bind(this),this.onScroll=this.onScroll.bind(this),this.siteSettingsMotionChange=this.siteSettingsMotionChange.bind(this),this.isScrolling=!1,this.scrollIdleTimeout=null,this.currVignetteColor=[0,0,0],this.currBackgroundColor=[0,0,0],this.currOutputColor=[0,0,0]}onScroll(){this.isScrolling=!0,this.scrollIdleTimeout&&clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=setTimeout(()=>{this.isScrolling=!1,this.scrollIdleTimeout=null},150)}onPointerMove(e){let t=r(this),n=h&&e.touches?e.touches[0]||e.changedTouches[0]:e;this.mouseObjX=n.pageX-t.left,this.mouseObjY=n.pageY-t.top,this.hasPointerMoved||(this.hasPointerMoved=!0,this.mouseObj.x=this.mouseObjX,this.mouseObj.y=this.mouseObjY)}resize(){let e=window.innerWidth*1*m,t=window.innerHeight*1*m;this.$canvas&&(this.renderer?.setPixelRatio(1),this.renderer?.resize(window.innerWidth*m,window.innerHeight*m),this.resolution=[e,t],v.resolution[0]=e,v.resolution[1]=t,this.bufferRead?.resize(e,t),this.bufferWrite?.resize(e,t),this.backgroundBuffer?.resize(e,t),this.updateViewport(),this.bufferReadSD?.resize(e,t),this.bufferWriteSD?.resize(e,t))}siteSettingsMotionChange(e){this.stopped=e.detail===`off`}detached(){document.removeEventListener(`site_settings_motion`,this.siteSettingsMotionChange),this._pauseOnScroll&&window.removeEventListener(`scroll`,this.onScroll,{passive:!0,capture:!0}),this.scrollIdleTimeout&&=(clearTimeout(this.scrollIdleTimeout),null)}setColors(e){e.vignetteColor&&(this.vignetteColor=g(e.vignetteColor)),e.backgroundColor&&(this.backgroundColor=g(e.backgroundColor)),e.outputColor&&(this.outputColor=g(e.outputColor))}attached(){this.hasAttribute(`force-center`)&&(this.forceCenter=!0),this.vignetteColor=g(this.getAttribute(`data-vignette-color`)||v.vignette.color),this.backgroundColor=g(this.getAttribute(`data-background-color`)||v.background.color),this.outputColor=g(this.getAttribute(`data-output-color`)||v.output.color),this.currVignetteColor=this.vignetteColor,this.currBackgroundColor=this.backgroundColor,this.currOutputColor=this.outputColor,this.pointer=n.fromValues(.5,.5),this.currPointer=n.fromValues(.5,.5),document.addEventListener(`site_settings_motion`,this.siteSettingsMotionChange,!1),this._pauseOnScroll=this.hasAttribute(`pause-on-scroll`),this._pauseOnScroll&&window.addEventListener(`scroll`,this.onScroll,{passive:!0,capture:!0}),this.initWebgl(),document.addEventListener(`mousemove`,this.onPointerMove,!1),this.resize()}initWebgl(){this.resolution=[],this.$canvas=this.querySelector(`canvas`),this.$canvas.style.transform=`translateZ(0)`,this.renderer=new t({canvas:this.$canvas}),window.addEventListener(`pointermove`,e=>{let t=this.renderer.canvas.getBoundingClientRect(),r=(e.clientX-t.left)/t.width,i=1-(e.clientY-t.top)/t.height;n.set(this.pointer,r,i)}),this.uniforms={},this.defines={},this.bufferScene=new a,this.bufferScene.uniforms=Object.assign(this.uniforms,this.bufferScene.uniforms),this.bufferScene.defines=Object.assign(this.defines,this.bufferScene.defines),this.bufferCamera=new o({left:-1/2,right:1/2,top:1/2,bottom:-1/2,near:1,far:4e3,type:`ortho`,orbitControl:!1,lookAt:[0,0,100],position:[0,0,-100]}),this.bufferCamera.updateMatrix(),this.bufferCamera.updateWorldMatrix(),this.bufferCamera.updateProjectionMatrix(),this.bufferPlane=new e,this.bufferPlane.geometry=new d(this.renderer.gl,{width:1,height:1,depth:1}),this.bufferScene.add(this.bufferPlane),this.outputMaterial=new u(this.renderer.gl,{vertexShader:_,depthTest:!1,blend:!0,fragmentShader:`
                #version 300 es
                precision highp float;
                in vec2 vUv;
                out vec4 fragColor;
                uniform sampler2D tBgTexture;
                uniform vec3 uBgColor;
                uniform sampler2D tInput;
                uniform vec3 uOutputColor;
                uniform vec3 uVignetteColor;
                uniform int uLoaded;
                vec3 overlay(vec3 base, vec3 blend) {
                    return mix(
                        2.0 * base * blend,
                        1.0 - 2.0 * (1.0 - base) * (1.0 - blend),
                        step(0.5, base)
                    );
                }
                void main() {
                    if (uLoaded != 1) {
                        fragColor = vec4(197./255., 136./255., 122./255., 1.);
                    }
                    else {
                        vec3 bgTex = uLoaded == 1 ? texture(tBgTexture, vUv).rgb : vec3(1.) ;
                        // Mix bg color with image background
                        vec3 base = mix(
                            uBgColor,
                            overlay( uBgColor, bgTex ),
                            0.61
                        );
                        /* Add the vignette + bokeh+overlay + color */ 
                        vec3 clearColor = uOutputColor;
                        vec3 blend      = mix(clearColor, texture(tInput, vUv).rgb, texture(tInput, vUv).a);
                        vec3 mixedColor = base * blend;
                        fragColor.rgb   = mix(base, mixedColor, 0.26);
                        fragColor.a     = 1.;
                        fragColor.rgb = base * mix(vec3(1.), blend, 0.26);
                    }
                }
            `}),this.backgroundMaterial=new u(this.renderer.gl,{vertexShader:_,depthTest:!1,blend:!0,fragmentShader:`
                #version 300 es
                precision highp float;
                in vec2 vUv;
                out vec4 fragColor;
                uniform vec3 uBgColor;
                void main() {
                    fragColor.rgb = uBgColor;
                    fragColor.a   = 1.;
                }
            `}),this.vignetteMaterial=new u(this.renderer.gl,{vertexShader:_,blend:!0,fragmentShader:`
                #version 300 es
                precision highp float;
                #define TWO_PI 6.28318530718
                in vec2 vUv;
                out vec4 fragColor;
                uniform float uRadius;
                uniform float uFalloff;
                uniform float uMix;
                uniform float uDisplace;
                uniform float uSkew;
                uniform float uAngle;
                uniform vec3 uVignetteColor;
                uniform float uColorAlpha;
                uniform vec2 uPos;
                uniform sampler2D tInput;
                uniform vec2 uResolution;
                uniform sampler2D tBgTexture;
                uniform vec3 uClearColor;
                mat2 rot(float a) {
                    return mat2(cos(a),-sin(a),sin(a),cos(a));
                }
                void main() {
                    vec2 uv = vUv;
                    vec4 color = vec4(vec3(1.), 0.);
                    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                    float displacement = (luma - 0.5) * uDisplace * 0.5;
                    vec2 aspectRatio = vec2(uResolution.x/uResolution.y, 1.0);
                    vec2 skew = vec2(uSkew, 1.0 - uSkew);
                    float halfRadius = uRadius * 0.5;
                    float innerEdge = halfRadius - uFalloff * halfRadius * 0.5;
                    float outerEdge = halfRadius + uFalloff * halfRadius * 0.5;
                    vec2 pos = uPos;
                    vec2 scaledUV = uv * aspectRatio * rot(uAngle * TWO_PI) * skew;
                    vec2 scaledPos = pos * aspectRatio * rot(uAngle * TWO_PI) * skew;
                    float radius = distance(scaledUV, scaledPos);
                    float falloff = smoothstep(innerEdge + displacement, outerEdge + displacement, radius);
                    fragColor = mix(vec4(uClearColor, 0.), vec4(uVignetteColor, 1.), falloff);
                }
            `,depthTest:!1}),this.sineMaterial=new u(this.renderer.gl,{depthTest:!1,blend:!0,vertexShader:_,fragmentShader:`
                #version 300 es
                precision mediump float;
                #define PI 3.141592
                #define PI3 1.04709283144
                in vec2 vUv;
                uniform sampler2D tInput;
                uniform float uMixRadius;
                uniform vec2 uPos;
                uniform float uFrequency;
                uniform float uAmplitude;
                uniform float uRotation;
                uniform float uTime;
                uniform vec2 uResolution;
                uniform vec2 uMousePos;
                uniform float uTrackMouse;
                out vec4 fragColor;
                void main() {  
                    vec2 uv = vUv;
                    vec2 waveCoord = vUv.xy * 2.0 - 1.0;
                    float time = uTime * 0.25;
                    float frequency = 20.0 * uFrequency;
                    float amp = uAmplitude * 0.2;
                    float waveX = sin((waveCoord.y + uPos.y) * frequency + (time * PI3)) * amp;
                    float waveY = sin((waveCoord.x - uPos.x) * frequency + (time * PI3)) * amp;
                    waveCoord.xy += vec2(mix(waveX, 0., uRotation), mix(0., waveY, uRotation));
                    vec2 finalUV = waveCoord * 0.5 + 0.5;
                    float aspectRatio = uResolution.x/uResolution.y;
                    vec2 mPos = uPos + mix(vec2(0), (uMousePos-0.5), uTrackMouse);
                    vec2 pos = mix(uPos, mPos, floor(uMixRadius));
                    float dist = (max(0.,1.-distance(uv * vec2(aspectRatio, 1), mPos * vec2(aspectRatio, 1)) * 4. * (1. - uMixRadius)));
                    uv = mix(uv, finalUV, dist);
                    fragColor = texture(tInput, uv);
                }`}),this.shatterMaterial=new u(this.renderer.gl,{vertexShader:_,blend:!0,fragmentShader:`
                #version 300 es
                precision mediump float;
                // Adapted From https://www.unicorn.studio/edit/g3lEVXT6g6U6duHP3YRy?from=template
                #define PI 3.14159265359
                in vec2 vUv;
                uniform sampler2D tInput;
                uniform float uAmount;
                uniform float uSpread;
                uniform float uAngle;
                uniform float uTime;
                uniform float uSkew;
                uniform vec2 uPos;
                uniform vec2 uResolution;
                uniform float uMixRadius;
                uniform int uMixRadiusInvert;
                uniform int uEasing;
                uniform vec2 uMousePos;
                uniform float uTrackMouse;
                vec2 random2( vec2 p ) {
                    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
                }
                mat2 rot(float a) {
                    return mat2(cos(a),-sin(a),sin(a),cos(a));
                }
                out vec4 fragColor;
                void main() {
                    vec2 uv = vUv;
                    float aspectRatio = uResolution.x/uResolution.y;
                    vec2 skew = mix(vec2(1), vec2(1, 0), uSkew);
                    vec2 st = (uv - uPos) * vec2(aspectRatio, 1.) * 50. * uAmount;
                    st = st * rot(uAngle * 2. * PI) * skew;
                    vec2 i_st = floor(st);
                    vec2 f_st = fract(st);
                    float m_dist = 15.;   
                    vec2 m_point;         
                    vec2 d;
                    for (int j=-1; j<=1; j++ ) {
                        for (int i=-1; i<=1; i++ ) {
                            vec2 neighbor = vec2(float(i),float(j));
                            vec2 point = random2(i_st + neighbor);
                            point = 0.5 + 0.5 * sin(5. + uTime * 0.2 + 6.2831*point);
                            vec2 diff = neighbor + point - f_st;
                            float dist = length(diff);
                            if( dist < m_dist ) {
                                m_dist = dist;
                                m_point = point;
                                d = diff;
                            }
                        }
                    }
                    vec2 offset = (m_point * 0.2 * uSpread * 2.) - (uSpread * 0.2);
                    vec2 mPos   = uPos + mix(vec2(0), (uMousePos-0.5), uTrackMouse);
                    vec2 pos    = mix(uPos, mPos, floor(uMixRadius));
                    // float dist  = ease(uEasing, max(0.,1.-distance(uv * vec2(aspectRatio, 1), mPos * vec2(aspectRatio, 1)) * 4. * (1. - uMixRadius)));
                    float dist  = (max(0.,1.-distance(uv * vec2(aspectRatio, 1), mPos * vec2(aspectRatio, 1)) * 4. * (1. - uMixRadius)));
                    vec4 color = texture(tInput, uv + offset * dist);
                    fragColor = color;
                }
            `,depthTest:!1}),this.bokehMaterialFast=new u(this.renderer.gl,{vertexShader:_,blend:!0,fragmentShader:`
                #version 300 es
                precision highp float;
                in vec2 vUv;
                out vec4 fragColor;
                #define PI 3.14159265
                #define PI2 6.28318530718
                #define ITERATIONS 50.0
                #define GOLDEN_ANGLE 2.39996323
                uniform sampler2D tInput;
                uniform sampler2D tBgTexture;
                uniform sampler2D tBlueNoise;
                uniform float uAmount;
                uniform float uTilt;
                uniform float uTime;
                uniform vec2 uPos;
                uniform int uPass;
                uniform vec2 uResolution;
                uniform vec2 uMousePos;
                uniform float uTrackMouse;
                uniform vec2 uBlueNoiseResolution;
                vec2 Sample(in float theta, inout float r) {
                    r += 1.0 / r;
                    return (r-1.0) * vec2(cos(theta), sin(theta));
                }
                float getBlueNoiseOffset(vec2 st) {
                    ivec2 texSize = ivec2(uBlueNoiseResolution);
                    vec4 blueNoise = texelFetch(tBlueNoise, ivec2(fract(st * (uResolution)/vec2(texSize) * vec2(texSize.x/texSize.y, 1.0)) * vec2(texSize)) % texSize, 0);
                    return mod((blueNoise.r - 0.5) * PI2, PI2);
                }
                // Adapted From https://www.unicorn.studio/edit/g3lEVXT6g6U6duHP3YRy?from=template
                // Replaced the large switch() with Golden Ratio Angle approach (see Sample() method)
                vec4 Bokeh(sampler2D tex, vec2 uv, float blurRadius) {
                    vec3 accumulatedColor = vec3(0.0);
                    vec3 accumulatedWeights = vec3(0.0);
                    float accumulatedAlpha = 0.0;
                    float aspectRatio = uResolution.x / uResolution.y;
                    vec2 pixelSize = vec2(1.0 / aspectRatio, 1.0) * 0.04 * 0.075;
                    float r = 1.0;
                    float noiseOffset = (getBlueNoiseOffset(uv) - 0.5) * 0.01;  
                    float noiseAngle = noiseOffset * PI2;
                    mat2 rotationMatrix = mat2(
                        cos(noiseAngle), -sin(noiseAngle),
                        sin(noiseAngle), cos(noiseAngle)
                    );
                    for (float j = 0.0; j < GOLDEN_ANGLE * ITERATIONS; j += GOLDEN_ANGLE) {
                        vec2 offset = Sample(j, r) * pixelSize;
                        float jitterAmount = 0.05 * (sin(j * 0.1) * 0.5 + 0.5);
                        offset *= 1.0 + jitterAmount * sin(j * 0.7 + noiseOffset);
                        vec2 sampleOffset = rotationMatrix * offset;
                        vec4 colorSample = texture(tex, uv + sampleOffset);
                        vec3 bokehWeight = vec3(5.0) + pow(colorSample.rgb, vec3(9.0)) * 150.0;
                        accumulatedAlpha += colorSample.a;
                        accumulatedColor += colorSample.rgb * bokehWeight;
                        accumulatedWeights += bokehWeight;
                    }
                    return vec4(accumulatedColor / accumulatedWeights, accumulatedAlpha / ITERATIONS);
                }
                void main() {
                    vec2 uv = vUv;
                    if(uAmount == 0.0) {
                        fragColor = vec4(0.0);
                        return;
                    }
                    vec2 pos = uPos + mix(vec2(0), (uMousePos-0.5), uTrackMouse);
                    float dis = distance(uv, pos) * 1000.0;
                    float tilt = mix(1.0 - dis * 0.001, dis * 0.001, uTilt);
                    float blurRadius = uAmount * tilt;
                    fragColor = Bokeh(tInput, uv, blurRadius);
                }
            `,depthTest:!1}),this.outputRenderPass=new s(this.renderer),this.composer=new l(this.renderer),this.blankBuffer=new i(this.renderer.gl,{width:1,height:1,linear:!1}),this.bufferRead=new i(this.renderer.gl,{width:1,height:1,linear:!0}),this.bufferWrite=new i(this.renderer.gl,{width:1,height:1,linear:!0}),this.backgroundBuffer=new i(this.renderer.gl,{width:1,height:1,linear:!0}),this.blueNoiseTex=f.fromUrl(this.renderer.gl,p,{wrapS:this.renderer.gl.REPEAT,wrapT:this.renderer.gl.REPEAT,linear:!0}),this.backgroundSrc=this.getAttribute(`background-src`)||`/wp-content/themes/wp-base-theme/dist/assets/orange-gradient-CGeZ4tof.png`,this.currentTextureName=`default`,this.textures={default:f.fromUrl(this.renderer.gl,this.backgroundSrc,{useImageBitmap:v.useImageBitmap,wrapS:this.renderer.gl.REPEAT,wrapT:this.renderer.gl.REPEAT,linear:!0,anisotropy:8,onLoaded:()=>{this.isLoaded=!0}})}}updateViewport(){let e=window.innerWidth*m,t=window.innerHeight*m;n.set(this.viewport,t,e)}update(){if(this.isScrolling){this.last=performance.now();return}let e=this.stopped?1:.1;this.currVignetteColor[0]+=(this.vignetteColor[0]-this.currVignetteColor[0])*e,this.currVignetteColor[1]+=(this.vignetteColor[1]-this.currVignetteColor[1])*e,this.currVignetteColor[2]+=(this.vignetteColor[2]-this.currVignetteColor[2])*e,this.currBackgroundColor[0]+=(this.backgroundColor[0]-this.currBackgroundColor[0])*e,this.currBackgroundColor[1]+=(this.backgroundColor[1]-this.currBackgroundColor[1])*e,this.currBackgroundColor[2]+=(this.backgroundColor[2]-this.currBackgroundColor[2])*e,this.currOutputColor[0]+=(this.outputColor[0]-this.currOutputColor[0])*e,this.currOutputColor[1]+=(this.outputColor[1]-this.currOutputColor[1])*e,this.currOutputColor[2]+=(this.outputColor[2]-this.currOutputColor[2])*e,this.updateViewport();let t=performance.now(),n=t-this.last;!this.stopped&&!this.forceCenter?(this.currPointer[0]+=(this.pointer[0]-this.currPointer[0])*e,this.currPointer[1]+=(this.pointer[1]-this.currPointer[1])*e):(this.currPointer[0]=.5,this.currPointer[1]=.5),this.stopped||(this.elapsed+=n/1e3*2),this.last=t,this.uniforms.uFresnelMethod=v.fresnelMethod,this.uniforms.uResolution=v.resolution,this.uniforms.tBNDS=this.blueNoiseTex,this.uniforms.tBlueNoiseResolution=v.blueNoiseResolution,this.uniforms.frameIndex=this.frameIndex,this.uniforms.uSamplingMethod=v.samplingMethod,this.uniforms.uBNSamplingMethod=v.blueNoiseSamplingMethod;let r=this.currOutputColor;this.bufferPlane.material=this.backgroundMaterial,this.backgroundMaterial.setUniform(`uBgColor`,this.currBackgroundColor),this.renderer.clearColor(0,0,0,0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.backgroundBuffer),this.bufferPlane.material=this.backgroundMaterial,this.backgroundMaterial.setUniform(`uBgColor`,this.currBackgroundColor),this.renderer.clearColor(0,0,0,0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.blankBuffer),this.swapBuffers(),v.useVignette&&(this.bufferPlane.material=this.vignetteMaterial,this.vignetteMaterial.setUniform(`tBgTexture`,this.textures[this.currentTextureName]),this.vignetteMaterial.setUniform(`tInput`,this.blankBuffer),this.vignetteMaterial.setUniform(`uResolution`,v.resolution),this.vignetteMaterial.setUniform(`uRadius`,v.vignette.radius),this.vignetteMaterial.setUniform(`uFalloff`,v.vignette.falloff),this.vignetteMaterial.setUniform(`uVignetteColor`,this.currVignetteColor),this.vignetteMaterial.setUniform(`uColorAlpha`,1),this.vignetteMaterial.setUniform(`uDisplace`,v.vignette.displace),this.vignetteMaterial.setUniform(`uMix`,v.vignette.mix),this.vignetteMaterial.setUniform(`uAngle`,v.vignette.angle),this.vignetteMaterial.setUniform(`uSkew`,v.vignette.skew),this.vignetteMaterial.setUniform(`uPos`,this.currPointer),this.vignetteMaterial.setUniform(`uClearColor`,this.currBackgroundColor),this.renderer.clearColor(r[0],r[1],r[2],0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.bufferWrite),this.swapBuffers()),v.useSine&&(this.bufferPlane.material=this.sineMaterial,this.sineMaterial.setUniform(`tInput`,this.bufferRead),this.sineMaterial.setUniform(`uResolution`,v.resolution),this.sineMaterial.setUniform(`uTime`,this.elapsed),this.sineMaterial.setUniform(`uPos`,[.5,.5]),this.sineMaterial.setUniform(`uFrequency`,v.sine.frequency),this.sineMaterial.setUniform(`uAmplitude`,v.sine.amplitude),this.sineMaterial.setUniform(`uFalloff`,v.sine.falloff),this.sineMaterial.setUniform(`uRotation`,v.sine.rotation),this.sineMaterial.setUniform(`uPhase`,v.sine.phase),this.sineMaterial.setUniform(`uSpeed`,v.sine.speed),this.sineMaterial.setUniform(`uMixRadius`,v.sine.mixRadius),this.sineMaterial.setUniform(`uTrackMouse`,v.sine.trackMouse),this.renderer.clearColor(r[0],r[1],r[2],0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.bufferWrite),this.swapBuffers()),v.useShatter&&(this.bufferPlane.material=this.shatterMaterial,this.shatterMaterial.setUniform(`tInput`,this.bufferRead),this.shatterMaterial.setUniform(`uResolution`,v.resolution),this.shatterMaterial.setUniform(`uRadius`,v.shatter.radius),this.shatterMaterial.setUniform(`uAngle`,v.shatter.angle/360),this.shatterMaterial.setUniform(`uAmount`,v.shatter.scale),this.shatterMaterial.setUniform(`uSpread`,v.shatter.amount),this.shatterMaterial.setUniform(`uEasing`,v.shatter.easing),this.shatterMaterial.setUniform(`uSkew`,v.shatter.skew),this.shatterMaterial.setUniform(`uTime`,this.elapsed),this.shatterMaterial.setUniform(`uPos`,[.5,.5]),this.shatterMaterial.setUniform(`uMixRadius`,v.shatter.mixRadius||1),this.shatterMaterial.setUniform(`uSkew`,v.shatter.skew||0),this.renderer.clearColor(r[0],r[1],r[2],0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.bufferWrite),this.swapBuffers()),v.useBokeh&&(this.bufferPlane.material=this.bokehMaterialFast,this.bokehMaterialFast.setUniform(`tInput`,this.bufferRead),this.bokehMaterialFast.setUniform(`tBgTexture`,this.backgroundBuffer),this.bokehMaterialFast.setUniform(`tBlueNoise`,this.blueNoiseTex),this.bokehMaterialFast.setUniform(`uBlueNoiseResolution`,v.blueNoiseResolution),this.bokehMaterialFast.setUniform(`uResolution`,[v.resolution[0],v.resolution[1]]),this.bokehMaterialFast.setUniform(`uAmount`,v.bokeh.radius),this.bokehMaterialFast.setUniform(`uTilt`,v.bokeh.tilt),this.bokehMaterialFast.setUniform(`uTime`,this.elapsed),this.bokehMaterialFast.setUniform(`uPos`,[.5,.5]),this.bokehMaterialFast.setUniform(`uMixRadius`,v.bokeh.mixRadius||1),this.bokehMaterialFast.setUniform(`uPass`,0),this.renderer.clearColor(r[0],r[1],r[2],0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera,this.bufferWrite),this.swapBuffers()),this.bufferPlane.material=this.outputMaterial,this.outputMaterial.setUniform(`uLoaded`,+!!this.isLoaded),this.outputMaterial.setUniform(`tBgTexture`,this.textures[this.currentTextureName]),this.outputMaterial.setUniform(`tInput`,this.bufferRead),this.outputMaterial.setUniform(`uOutputColor`,this.currOutputColor),this.outputMaterial.setUniform(`uBgColor`,this.currBackgroundColor),this.renderer.clearColor(this.currBackgroundColor[0],this.currBackgroundColor[1],this.currBackgroundColor[2],0),this.renderer.clear(),this.renderer.render(this.bufferScene,this.bufferCamera),this.stopped||this.frameIndex++}};customElements.define(`block-gl`,y);export{y as default};
//# sourceMappingURL=BlockGL-C6UCNICu.js.map