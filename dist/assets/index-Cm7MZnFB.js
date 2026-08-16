(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="174",Ml=0,ya=1,Sl=2,Fo=1,No=2,hi=3,Ti=0,Ue=1,Wt=2,Ei=0,un=1,Hn=2,ba=3,Ea=4,yl=5,Gi=100,bl=101,El=102,wl=103,Tl=104,Al=200,Rl=201,Cl=202,Pl=203,dr=204,ur=205,Ll=206,Il=207,Dl=208,Ul=209,Fl=210,Nl=211,Ol=212,kl=213,Bl=214,fr=0,pr=1,mr=2,gn=3,gr=4,_r=5,vr=6,xr=7,Oo=0,Gl=1,zl=2,wi=0,Hl=1,Vl=2,Wl=3,$l=4,Xl=5,ql=6,Yl=7,ko=300,_n=301,vn=302,Mr=303,Sr=304,Ls=306,Vn=1e3,Hi=1001,yr=1002,he=1003,Zl=1004,Zn=1005,ii=1006,Fs=1007,Vi=1008,fi=1009,Bo=1010,Go=1011,Wn=1012,Qr=1013,Wi=1014,ni=1015,$n=1016,ta=1017,ea=1018,xn=1020,zo=35902,Ho=1021,Vo=1022,We=1023,Wo=1024,$o=1025,fn=1026,Mn=1027,ia=1028,na=1029,Xo=1030,sa=1031,ra=1033,Ms=33776,Ss=33777,ys=33778,bs=33779,br=35840,Er=35841,wr=35842,Tr=35843,Ar=36196,Rr=37492,Cr=37496,Pr=37808,Lr=37809,Ir=37810,Dr=37811,Ur=37812,Fr=37813,Nr=37814,Or=37815,kr=37816,Br=37817,Gr=37818,zr=37819,Hr=37820,Vr=37821,Es=36492,Wr=36494,$r=36495,qo=36283,Xr=36284,qr=36285,Yr=36286,Kl=3200,jl=3201,Yo=0,Jl=1,yi="",xe="srgb",Sn="srgb-linear",As="linear",se="srgb",qi=7680,wa=519,Ql=512,tc=513,ec=514,Zo=515,ic=516,nc=517,sc=518,rc=519,Ta=35044,Aa="300 es",di=2e3,Rs=2001;class En{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const Gn=Math.PI/180,yn=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function $t(r,t,e){return Math.max(t,Math.min(e,r))}function aa(r,t){return(r%t+t)%t}function ac(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function oc(r,t,e){return r!==t?(e-r)/(t-r):0}function zn(r,t,e){return(1-e)*r+e*t}function lc(r,t,e,i){return zn(r,t,1-Math.exp(-e*i))}function cc(r,t=1){return t-Math.abs(aa(r,t*2)-t)}function hc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function dc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function uc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function fc(r,t){return r+Math.random()*(t-r)}function pc(r){return r*(.5-Math.random())}function mc(r){r!==void 0&&(Ra=r);let t=Ra+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gc(r){return r*Gn}function _c(r){return r*yn}function vc(r){return(r&r-1)===0&&r!==0}function xc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sc(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ke={DEG2RAD:Gn,RAD2DEG:yn,generateUUID:wn,clamp:$t,euclideanModulo:aa,mapLinear:ac,inverseLerp:oc,lerp:zn,damp:lc,pingpong:cc,smoothstep:hc,smootherstep:dc,randInt:uc,randFloat:fc,randFloatSpread:pc,seededRandom:mc,degToRad:gc,radToDeg:_c,isPowerOfTwo:vc,ceilPowerOfTwo:xc,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Sc,normalize:Re,denormalize:cn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,n,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],E=n[1],b=n[4],M=n[7],P=n[2],R=n[5],A=n[8];return s[0]=a*_+o*E+l*P,s[3]=a*m+o*b+l*R,s[6]=a*p+o*M+l*A,s[1]=c*_+h*E+u*P,s[4]=c*m+h*b+u*R,s[7]=c*p+h*M+u*A,s[2]=d*_+f*E+g*P,s[5]=d*m+f*b+g*R,s[8]=d*p+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(h*e-n*l)*_,t[5]=(n*s-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Ot;function Ko(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Cs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yc(){const r=Cs("canvas");return r.style.display="block",r}const Ca={};function Oi(r){r in Ca||(Ca[r]=!0,console.warn(r))}function bc(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Ec(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wc(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tc(){const r={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(n.r=ui(n.r),n.g=ui(n.g),n.b=ui(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(n.r=pn(n.r),n.g=pn(n.g),n.b=pn(n.b))),n},fromWorkingColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},toWorkingColorSpace:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===yi?As:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Sn]:{primaries:t,whitePoint:i,transfer:As,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:i,transfer:se,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),r}const te=Tc();function ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi;class Ac{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Cs("canvas")),Yi.width=t.width,Yi.height=t.height;const i=Yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rc=0;class oa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Os(n[a].image)):s.push(Os(n[a]))}else s=Os(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Os(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ac.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class we extends En{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,i=Hi,n=Hi,s=ii,a=Vi,o=We,l=fi,c=we.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=wn(),this.name="",this.source=new oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=ko;we.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,n=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(f+1)/2,P=(p+1)/2,R=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return b>M&&b>P?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=R/i,s=A/i):M>P?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=R/n,s=C/n):P<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(P),i=A/s,n=C/s),this.set(i,n,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pc extends En{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new we(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new oa(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Pc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class jo extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=he,this.minFilter=he,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lc extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=he,this.minFilter=he,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const M=o*E;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new U,Ia=new Qe;class $i{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(s,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kn.copy(i.boundingBox)),Kn.applyMatrix4(t.matrixWorld),this.union(Kn)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pn),jn.subVectors(this.max,Pn),Zi.subVectors(t.a,Pn),Ki.subVectors(t.b,Pn),ji.subVectors(t.c,Pn),mi.subVectors(Ki,Zi),gi.subVectors(ji,Ki),Pi.subVectors(Zi,ji);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Pi.z,Pi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Pi.z,0,-Pi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Pi.y,Pi.x,0];return!Bs(e,Zi,Ki,ji,jn)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Zi,Ki,ji,jn))?!1:(Jn.crossVectors(mi,gi),e=[Jn.x,Jn.y,Jn.z],Bs(e,Zi,Ki,ji,jn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],Ye=new U,Kn=new $i,Zi=new U,Ki=new U,ji=new U,mi=new U,gi=new U,Pi=new U,Pn=new U,jn=new U,Jn=new U,Li=new U;function Bs(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Li.fromArray(r,s);const o=n.x*Math.abs(Li.x)+n.y*Math.abs(Li.y)+n.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ic=new $i,Ln=new U,Gs=new U;class Tn{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ic.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ln.subVectors(t,this.center);const e=Ln.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ln,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ln.copy(t.center).add(Gs)),this.expandByPoint(Ln.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new U,zs=new U,Qn=new U,_i=new U,Hs=new U,ts=new U,Vs=new U;class la{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zs.copy(t).add(e).multiplyScalar(.5),Qn.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(zs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Qn),o=_i.dot(this.direction),l=-_i.dot(Qn),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(zs).addScaledVector(Qn,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),n=ai.dot(ai)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,n,s){Hs.subVectors(e,t),ts.subVectors(i,t),Vs.crossVectors(Hs,ts);let a=this.direction.dot(Vs),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(ts.crossVectors(_i,ts));if(l<0)return null;const c=o*this.direction.dot(Hs.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(Vs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dc,t,Uc)}lookAt(t,e,i){const n=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),vi.crossVectors(i,Ne),vi.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),vi.crossVectors(i,Ne)),vi.normalize(),es.crossVectors(Ne,vi),n[0]=vi.x,n[4]=es.x,n[8]=Ne.x,n[1]=vi.y,n[5]=es.y,n[9]=Ne.y,n[2]=vi.z,n[6]=es.z,n[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],b=i[7],M=i[11],P=i[15],R=n[0],A=n[4],C=n[8],y=n[12],v=n[1],T=n[5],B=n[9],G=n[13],V=n[2],$=n[6],Y=n[10],K=n[14],H=n[3],nt=n[7],et=n[11],ot=n[15];return s[0]=a*R+o*v+l*V+c*H,s[4]=a*A+o*T+l*$+c*nt,s[8]=a*C+o*B+l*Y+c*et,s[12]=a*y+o*G+l*K+c*ot,s[1]=h*R+u*v+d*V+f*H,s[5]=h*A+u*T+d*$+f*nt,s[9]=h*C+u*B+d*Y+f*et,s[13]=h*y+u*G+d*K+f*ot,s[2]=g*R+_*v+m*V+p*H,s[6]=g*A+_*T+m*$+p*nt,s[10]=g*C+_*B+m*Y+p*et,s[14]=g*y+_*G+m*K+p*ot,s[3]=E*R+b*v+M*V+P*H,s[7]=E*A+b*T+M*$+P*nt,s[11]=E*C+b*B+M*Y+P*et,s[15]=E*y+b*G+M*K+P*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+_*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=e*E+i*b+n*M+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*p-i*d*p)*A,t[2]=(o*m*s-_*l*s+_*n*c-i*m*c-o*n*p+i*l*p)*A,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*A,t[4]=b*A,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*A,t[6]=(g*l*s-a*m*s-g*n*c+e*m*c+a*n*p-e*l*p)*A,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*A,t[8]=M*A,t[9]=(g*u*s-h*_*s-g*i*f+e*_*f+h*i*p-e*u*p)*A,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*p+e*o*p)*A,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*A,t[12]=P*A,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*A,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*m-e*o*m)*A,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,E=l*c,b=l*h,M=l*u,P=i.x,R=i.y,A=i.z;return n[0]=(1-(_+p))*P,n[1]=(f+M)*P,n[2]=(g-b)*P,n[3]=0,n[4]=(f-M)*R,n[5]=(1-(d+p))*R,n[6]=(m+E)*R,n[7]=0,n[8]=(g+b)*A,n[9]=(m-E)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=Ji.set(n[0],n[1],n[2]).length();const a=Ji.set(n[4],n[5],n[6]).length(),o=Ji.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ze.copy(this);const c=1/s,h=1/a,u=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=di){const l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let f,g;if(o===di)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Rs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=di){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h;let g,_;if(o===di)g=(a+s)*u,_=-2*u;else if(o===Rs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ji=new U,Ze=new jt,Dc=new U(0,0,0),Uc=new U(1,1,1),vi=new U,es=new U,Ne=new U,Da=new jt,Ua=new Qe;class De{constructor(t=0,e=0,i=0,n=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class ca{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fc=0;const Fa=new U,Qi=new Qe,oi=new jt,is=new U,In=new U,Nc=new U,Oc=new Qe,Na=new U(1,0,0),Oa=new U(0,1,0),ka=new U(0,0,1),Ba={type:"added"},kc={type:"removed"},tn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class de extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new U,e=new De,i=new Qe,n=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Na,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(ka,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Na,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?is.copy(t):is.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(In,is,this.up):oi.lookAt(is,In,this.up),this.quaternion.setFromRotationMatrix(oi),n&&(oi.extractRotation(n.matrixWorld),Qi.setFromRotationMatrix(oi),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),tn.child=t,this.dispatchEvent(tn),tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),tn.child=t,this.dispatchEvent(tn),tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,t,Nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,Oc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}de.DEFAULT_UP=new U(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new U,li=new U,$s=new U,ci=new U,en=new U,nn=new U,Ga=new U,Xs=new U,qs=new U,Ys=new U,Zs=new ae,Ks=new ae,js=new ae;class Je{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ke.subVectors(t,e),n.cross(Ke);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ke.subVectors(n,e),li.subVectors(i,e),$s.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(li),l=Ke.dot($s),c=li.dot(li),h=li.dot($s),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Zs.setScalar(0),Ks.setScalar(0),js.setScalar(0),Zs.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,i),js.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Zs,s.x),a.addScaledVector(Ks,s.y),a.addScaledVector(js,s.z),a}static isFrontFacing(t,e,i,n){return Ke.subVectors(i,e),li.subVectors(t,e),Ke.cross(li).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Ke.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;en.subVectors(n,i),nn.subVectors(s,i),Xs.subVectors(t,i);const l=en.dot(Xs),c=nn.dot(Xs);if(l<=0&&c<=0)return e.copy(i);qs.subVectors(t,n);const h=en.dot(qs),u=nn.dot(qs);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(en,a);Ys.subVectors(t,s);const f=en.dot(Ys),g=nn.dot(Ys);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(nn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ga.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Ga,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(en,a).addScaledVector(nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Js(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=aa(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Js(a,s,t+1/3),this.g=Js(a,s,t),this.b=Js(a,s,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=xe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const i=Jo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return te.fromWorkingColorSpace(be.copy(this),t),Math.round($t(be.r*255,0,255))*65536+Math.round($t(be.g*255,0,255))*256+Math.round($t(be.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(be.copy(this),e);const i=be.r,n=be.g,s=be.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=xe){te.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,n=be.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(ns);const i=zn(xi.h,ns.h,e),n=zn(xi.s,ns.s,e),s=zn(xi.l,ns.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new zt;zt.NAMES=Jo;let Bc=0;class An extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=un,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=ur,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==un&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dr&&(i.blendSrc=this.blendSrc),this.blendDst!==ur&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,ss=new Xt;let Gc=0;class $e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ta,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}}class Qo extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class tl extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zc=0;const ze=new jt,Qs=new de,sn=new U,Oe=new $i,Dn=new $i,ve=new U;class Te extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ko(t)?tl:Qo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,i){return ze.makeTranslation(t,e,i),this.applyMatrix4(ze),this}scale(t,e,i){return ze.makeScale(t,e,i),this.applyMatrix4(ze),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sn).negate(),this.translate(sn.x,sn.y,sn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,Dn.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,Dn.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(Dn.min),Oe.expandByPoint(Dn.max))}Oe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(sn.fromBufferAttribute(t,c),ve.add(sn)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new U,l[C]=new U;const c=new U,h=new U,u=new U,d=new Xt,f=new Xt,g=new Xt,_=new U,m=new U;function p(C,y,v){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[C].add(_),o[y].add(_),o[v].add(_),l[C].add(m),l[y].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,y=E.length;C<y;++C){const v=E[C],T=v.start,B=v.count;for(let G=T,V=T+B;G<V;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const b=new U,M=new U,P=new U,R=new U;function A(C){P.fromBufferAttribute(n,C),R.copy(P);const y=o[C];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(R,y);const T=M.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,T)}for(let C=0,y=E.length;C<y;++C){const v=E[C],T=v.start,B=v.count;for(let G=T,V=T+B;G<V;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new jt,Ii=new la,rs=new Tn,Ha=new U,as=new U,os=new U,ls=new U,tr=new U,cs=new U,Va=new U,hs=new U;class D extends de{constructor(t=new Te,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(tr.fromBufferAttribute(u,t),a?cs.addScaledVector(tr,h):cs.addScaledVector(tr.sub(e),h))}e.add(cs)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(s),Ii.copy(t.ray).recast(t.near),!(rs.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(rs,Ha)===null||Ii.origin.distanceToSquared(Ha)>(t.far-t.near)**2))&&(za.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(za),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,P=b;M<P;M+=3){const R=o.getX(M),A=o.getX(M+1),C=o.getX(M+2);n=ds(this,p,t,i,c,h,u,R,A,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);n=ds(this,a,t,i,c,h,u,E,b,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,P=b;M<P;M+=3){const R=M,A=M+1,C=M+2;n=ds(this,p,t,i,c,h,u,R,A,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,M=m+2;n=ds(this,a,t,i,c,h,u,E,b,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Hc(r,t,e,i,n,s,a,o){let l;if(t.side===Ue?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Ti,o),l===null)return null;hs.copy(o),hs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:r}}function ds(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,as),r.getVertexPosition(l,os),r.getVertexPosition(c,ls);const h=Hc(r,t,e,i,as,os,ls,Va);if(h){const u=new U;Je.getBarycoord(Va,as,os,ls,u),n&&(h.uv=Je.getInterpolatedAttribute(n,o,l,c,u,new Xt)),s&&(h.uv1=Je.getInterpolatedAttribute(s,o,l,c,u,new Xt)),a&&(h.normal=Je.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Je.getNormal(as,os,ls,d.normal),h.face=d,h.barycoord=u}return h}class it extends Te{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,E,b,M,P,R,A,C,y){const v=M/A,T=P/C,B=M/2,G=P/2,V=R/2,$=A+1,Y=C+1;let K=0,H=0;const nt=new U;for(let et=0;et<Y;et++){const ot=et*T-G;for(let pt=0;pt<$;pt++){const Ft=pt*v-B;nt[_]=Ft*E,nt[m]=ot*b,nt[p]=V,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(pt/A),u.push(1-et/C),K+=1}}for(let et=0;et<C;et++)for(let ot=0;ot<A;ot++){const pt=d+ot+$*et,Ft=d+ot+$*(et+1),J=d+(ot+1)+$*(et+1),Z=d+(ot+1)+$*et;l.push(pt,Ft,Z),l.push(Ft,J,Z),H+=6}o.addGroup(f,H,y),f+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ce(r){const t={};for(let e=0;e<r.length;e++){const i=bn(r[e]);for(const n in i)t[n]=i[n]}return t}function Vc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function el(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Wc={clone:bn,merge:Ce};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bn(t.uniforms),this.uniformsGroups=Vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class il extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new U,Wa=new Xt,$a=new Xt;class Ie extends il{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yn*2*Math.atan(Math.tan(Gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,$a),e.subVectors($a,Wa)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rn=-90,an=1;class qc extends de{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ie(rn,an,t,e);n.layers=this.layers,this.add(n);const s=new Ie(rn,an,t,e);s.layers=this.layers,this.add(s);const a=new Ie(rn,an,t,e);a.layers=this.layers,this.add(a);const o=new Ie(rn,an,t,e);o.layers=this.layers,this.add(o);const l=new Ie(rn,an,t,e);l.layers=this.layers,this.add(l);const c=new Ie(rn,an,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nl extends we{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_n,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new nl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new it(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Ei});s.uniforms.tEquirect.value=e;const a=new D(n,s),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=ii),new qc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class Pt extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ps{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new Ps(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sl extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kc extends we{constructor(t=null,e=1,i=1,n,s,a,o,l,c=he,h=he,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa extends $e{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const on=new jt,qa=new jt,us=[],Ya=new $i,jc=new jt,Un=new D,Fn=new Tn;class rl extends D{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,jc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,on),Ya.copy(t.boundingBox).applyMatrix4(on),this.boundingBox.union(Ya)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,on),Fn.copy(t.boundingSphere).applyMatrix4(on),this.boundingSphere.union(Fn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Un.geometry=this.geometry,Un.material=this.material,Un.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fn.copy(this.boundingSphere),Fn.applyMatrix4(i),t.ray.intersectsSphere(Fn)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,on),qa.multiplyMatrices(i,on),Un.matrixWorld=qa,Un.raycast(t,us);for(let a=0,o=us.length;a<o;a++){const l=us[a];l.instanceId=s,l.object=this,e.push(l)}us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kc(new Float32Array(n*this.count),n,this.count,ia,ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ir=new U,Jc=new U,Qc=new Ot;class ki{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=ir.subVectors(i,e).cross(Jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ir),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qc.getNormalMatrix(t),n=this.coplanarPoint(ir).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Tn,fs=new U;class da{constructor(t=new ki,e=new ki,i=new ki,n=new ki,s=new ki,a=new ki){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di){const i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],_=n[10],m=n[11],p=n[12],E=n[13],b=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,m-f,M-p).normalize(),i[1].setComponents(l+s,d+c,m+f,M+p).normalize(),i[2].setComponents(l+a,d+h,m+g,M+E).normalize(),i[3].setComponents(l-a,d-h,m-g,M-E).normalize(),i[4].setComponents(l-o,d-u,m-_,M-b).normalize(),e===di)i[5].setComponents(l+o,d+u,m+_,M+b).normalize();else if(e===Rs)i[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(fs.x=n.normal.x>0?t.max.x:t.min.x,fs.y=n.normal.y>0?t.max.y:t.min.y,fs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Za=new jt,Zr=new la,ps=new Tn,ms=new U;class th extends de{constructor(t=new Te,e=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(n),ps.radius+=s,t.ray.intersectsSphere(ps)===!1)return;Za.copy(n).invert(),Zr.copy(t.ray).applyMatrix4(Za);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ms.fromBufferAttribute(u,m),Ka(ms,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ms.fromBufferAttribute(u,g),Ka(ms,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ka(r,t,e,i,n,s,a){const o=Zr.distanceSqToPoint(r);if(o<e){const l=new U;Zr.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ws extends we{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ol extends we{constructor(t,e,i,n,s,a,o,l,c,h=fn){if(h!==fn&&h!==Mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fn&&(i=Wi),i===void 0&&h===Mn&&(i=xn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yt extends Te{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function E(){const M=new U,P=new U;let R=0;const A=(e-t)/i;for(let C=0;C<=s;C++){const y=[],v=C/s,T=v*(e-t)+t;for(let B=0;B<=n;B++){const G=B/n,V=G*l+o,$=Math.sin(V),Y=Math.cos(V);P.x=T*$,P.y=-v*i+m,P.z=T*Y,u.push(P.x,P.y,P.z),M.set($,A,Y).normalize(),d.push(M.x,M.y,M.z),f.push(G,1-v),y.push(g++)}_.push(y)}for(let C=0;C<n;C++)for(let y=0;y<s;y++){const v=_[y][C],T=_[y+1][C],B=_[y+1][C+1],G=_[y][C+1];(t>0||y!==0)&&(h.push(v,T,G),R+=3),(e>0||y!==s-1)&&(h.push(T,B,G),R+=3)}c.addGroup(p,R,0),p+=R}function b(M){const P=g,R=new Xt,A=new U;let C=0;const y=M===!0?t:e,v=M===!0?1:-1;for(let B=1;B<=n;B++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const T=g;for(let B=0;B<=n;B++){const V=B/n*l+o,$=Math.cos(V),Y=Math.sin(V);A.x=y*Y,A.y=m*v,A.z=y*$,u.push(A.x,A.y,A.z),d.push(0,v,0),R.x=$*.5+.5,R.y=Y*.5*v+.5,f.push(R.x,R.y),g++}for(let B=0;B<n;B++){const G=P+B,V=T+B;M===!0?h.push(V,V+1,G):h.push(V+1,V,G),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends Yt{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ee extends Te{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<c;b++){const M=b*u-s;g.push(M,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,M=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;f.push(b,M,R),f.push(M,P,R)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class bi extends Te{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],b=p/i;let M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(n+R*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(n+R*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+M,1-b),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const b=h[p][E+1],M=h[p][E],P=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&f.push(b,M,R),(p!==i-1||l<Math.PI)&&f.push(M,P,R)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class He extends Te{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,E=(n+1)*f+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lt extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eh extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ih extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xn extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nh extends Xn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const nr=new jt,ja=new U,Ja=new U;class ua{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(ja),Ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ja),e.updateMatrixWorld(),nr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sh extends ua{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=yn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class rh extends Xn{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Qa=new jt,Nn=new U,sr=new U;class ah extends ua{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Nn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nn),sr.copy(i.position),sr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(sr),i.updateMatrixWorld(),n.makeTranslation(-Nn.x,-Nn.y,-Nn.z),Qa.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa)}}class Ve extends Xn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fa extends il{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class oh extends ua{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class to extends Xn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lh extends Xn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ch extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class hh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eo(){return performance.now()}const io=new jt;class dh{constructor(t,e,i=0,n=1/0){this.ray=new la(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return io.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(io),this}intersectObject(t,e=!0,i=[]){return Kr(t,this,i,e),i.sort(no),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Kr(t[n],this,i,e);return i.sort(no),i}}function no(r,t){return r.distance-t.distance}function Kr(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Kr(s[a],t,e,!0)}}function so(r,t,e,i){const n=uh(i);switch(e){case Ho:return r*t;case Wo:return r*t;case $o:return r*t*2;case ia:return r*t/n.components*n.byteLength;case na:return r*t/n.components*n.byteLength;case Xo:return r*t*2/n.components*n.byteLength;case sa:return r*t*2/n.components*n.byteLength;case Vo:return r*t*3/n.components*n.byteLength;case We:return r*t*4/n.components*n.byteLength;case ra:return r*t*4/n.components*n.byteLength;case Ms:case Ss:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ys:case bs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Er:case Tr:return Math.max(r,16)*Math.max(t,8)/4;case br:case wr:return Math.max(r,8)*Math.max(t,8)/2;case Ar:case Rr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Or:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case kr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Br:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zr:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hr:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Es:case Wr:case $r:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qo:case Xr:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qr:case Yr:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uh(r){switch(r){case fi:case Bo:return{byteLength:1,components:1};case Wn:case Go:case $n:return{byteLength:2,components:1};case ta:case ea:return{byteLength:2,components:4};case Wi:case Qr:case ni:return{byteLength:4,components:1};case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ll(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fh(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,au=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ou=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Su=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Au=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ku=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:xh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:yh,batching_vertex:bh,begin_vertex:Eh,beginnormal_vertex:wh,bsdfs:Th,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ih,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Fh,color_vertex:Nh,common:Oh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:Gh,displacementmap_vertex:zh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:$h,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:ad,envmap_vertex:Kh,fog_vertex:jh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:id,lights_lambert_fragment:nd,lights_lambert_pars_fragment:sd,lights_pars_begin:rd,lights_toon_fragment:od,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:hd,lights_physical_fragment:dd,lights_physical_pars_fragment:ud,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:Md,map_pars_fragment:Sd,map_particle_fragment:yd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:wd,morphinstance_vertex:Td,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ud,normal_vertex:Fd,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:Gd,opaque_fragment:zd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:$d,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Kd,shadowmap_vertex:jd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:tu,skinning_vertex:eu,skinnormal_vertex:iu,specularmap_fragment:nu,specularmap_pars_fragment:su,tonemapping_fragment:ru,tonemapping_pars_fragment:au,transmission_fragment:ou,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:hu,uv_vertex:du,worldpos_vertex:uu,background_vert:fu,background_frag:pu,backgroundCube_vert:mu,backgroundCube_frag:gu,cube_vert:_u,cube_frag:vu,depth_vert:xu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:yu,equirect_vert:bu,equirect_frag:Eu,linedashed_vert:wu,linedashed_frag:Tu,meshbasic_vert:Au,meshbasic_frag:Ru,meshlambert_vert:Cu,meshlambert_frag:Pu,meshmatcap_vert:Lu,meshmatcap_frag:Iu,meshnormal_vert:Du,meshnormal_frag:Uu,meshphong_vert:Fu,meshphong_frag:Nu,meshphysical_vert:Ou,meshphysical_frag:ku,meshtoon_vert:Bu,meshtoon_frag:Gu,points_vert:zu,points_frag:Hu,shadow_vert:Vu,shadow_frag:Wu,sprite_vert:$u,sprite_frag:Xu},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ei={basic:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ce([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ce([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ce([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ce([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ce([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ce([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ce([at.common,at.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ce([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ei.physical={uniforms:Ce([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const gs={r:0,b:0,g:0},Ui=new De,qu=new jt;function Yu(r,t,e,i,n,s,a){const o=new zt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1;const P=g(b);P===null?p(o,l):P&&P.isColor&&(p(P,1),M=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===Ls)?(h===void 0&&(h=new D(new it(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:bn(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ui.copy(M.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qu.makeRotationFromEuler(Ui)),h.material.toneMapped=te.getTransfer(P.colorSpace)!==se,(u!==P||d!==P.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new D(new Ee(2,2),new pi({name:"BackgroundMaterial",uniforms:bn(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=te.getTransfer(P.colorSpace)!==se,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=P,d=P.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(gs,el(r)),i.buffers.color.setClear(gs.r,gs.g,gs.b,M,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:E}}function Zu(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(v,T,B,G,V){let $=!1;const Y=u(G,B,T);s!==Y&&(s=Y,c(s.object)),$=f(v,G,B,V),$&&g(v,G,B,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(v,T,B,G),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,T,B){const G=B.wireframe===!0;let V=i[v.id];V===void 0&&(V={},i[v.id]=V);let $=V[T.id];$===void 0&&($={},V[T.id]=$);let Y=$[G];return Y===void 0&&(Y=d(l()),$[G]=Y),Y}function d(v){const T=[],B=[],G=[];for(let V=0;V<e;V++)T[V]=0,B[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:G,object:v,attributes:{},index:null}}function f(v,T,B,G){const V=s.attributes,$=T.attributes;let Y=0;const K=B.getAttributes();for(const H in K)if(K[H].location>=0){const et=V[H];let ot=$[H];if(ot===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function g(v,T,B,G){const V={},$=T.attributes;let Y=0;const K=B.getAttributes();for(const H in K)if(K[H].location>=0){let et=$[H];et===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),V[H]=ot,Y++}s.attributes=V,s.attributesNum=Y,s.index=G}function _(){const v=s.newAttributes;for(let T=0,B=v.length;T<B;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){const B=s.newAttributes,G=s.enabledAttributes,V=s.attributeDivisors;B[v]=1,G[v]===0&&(r.enableVertexAttribArray(v),G[v]=1),V[v]!==T&&(r.vertexAttribDivisor(v,T),V[v]=T)}function E(){const v=s.newAttributes,T=s.enabledAttributes;for(let B=0,G=T.length;B<G;B++)T[B]!==v[B]&&(r.disableVertexAttribArray(B),T[B]=0)}function b(v,T,B,G,V,$,Y){Y===!0?r.vertexAttribIPointer(v,T,B,V,$):r.vertexAttribPointer(v,T,B,G,V,$)}function M(v,T,B,G){_();const V=G.attributes,$=B.getAttributes(),Y=T.defaultAttributeValues;for(const K in $){const H=$[K];if(H.location>=0){let nt=V[K];if(nt===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const et=nt.normalized,ot=nt.itemSize,pt=t.get(nt);if(pt===void 0)continue;const Ft=pt.buffer,J=pt.type,Z=pt.bytesPerElement,dt=J===r.INT||J===r.UNSIGNED_INT||nt.gpuType===Qr;if(nt.isInterleavedBufferAttribute){const Q=nt.data,yt=Q.stride,Rt=nt.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)p(H.location+Et,Q.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<H.locationSize;Et++)m(H.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let Et=0;Et<H.locationSize;Et++)b(H.location+Et,ot/H.locationSize,J,et,yt*Z,(Rt+ot/H.locationSize*Et)*Z,dt)}else{if(nt.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,nt.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let Q=0;Q<H.locationSize;Q++)b(H.location+Q,ot/H.locationSize,J,et,ot*Z,ot/H.locationSize*Q*Z,dt)}}else if(Y!==void 0){const et=Y[K];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(H.location,et);break;case 3:r.vertexAttrib3fv(H.location,et);break;case 4:r.vertexAttrib4fv(H.location,et);break;default:r.vertexAttrib1fv(H.location,et)}}}}E()}function P(){C();for(const v in i){const T=i[v];for(const B in T){const G=T[B];for(const V in G)h(G[V].object),delete G[V];delete T[B]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const T=i[v.id];for(const B in T){const G=T[B];for(const V in G)h(G[V].object),delete G[V];delete T[B]}delete i[v.id]}function A(v){for(const T in i){const B=i[T];if(B[v.id]===void 0)continue;const G=B[v.id];for(const V in G)h(G[V].object),delete G[V];delete B[v.id]}}function C(){y(),a=!0,s!==n&&(s=n,c(s.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Ku(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ju(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==We&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function Ju(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new ki,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const E=s?0:i,b=E*4;let M=p.clippingState||null;l.value=M,M=h(g,d,b,f);for(let P=0;P!==b;++P)M[P]=e[P];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==_;++b,M+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qu(r){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=_n:o===Sr&&(a.mapping=vn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const hn=4,ro=[.125,.215,.35,.446,.526,.582],zi=20,rr=new fa,ao=new zt;let ar=null,or=0,lr=0,cr=!1;const Bi=(1+Math.sqrt(5))/2,ln=1/Bi,oo=[new U(-Bi,ln,0),new U(Bi,ln,0),new U(-ln,0,Bi),new U(ln,0,Bi),new U(0,Bi,-ln),new U(0,Bi,ln),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],tf=new U;class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=tf}=s;ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,or,lr),this._renderer.xr.enabled=cr,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_n||t.mapping===vn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:$n,format:We,colorSpace:Sn,depthBuffer:!1},n=co(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(s)),this._blurMaterial=nf(s,t,e)}return n}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,i,n,s){const l=new Ie(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ao),u.toneMapping=wi,u.autoClear=!1;const g=new ti({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new D(new it,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(ao),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const M=this._cubeSize;_s(n,b*M,E>2?M:0,M,M),u.setRenderTarget(n),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===_n||t.mapping===vn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new D(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,rr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=oo[(n-s-1)%oo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new D(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let E=0;for(let A=0;A<zi;++A){const C=A/_,y=Math.exp(-C*C/2);p.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const M=this._sizeLods[n],P=3*M*(n>b-hn?n-b+hn:0),R=4*(this._cubeSize-M);_s(e,P,R,3*M,2*M),l.setRenderTarget(e),l.render(u,rr)}}function ef(r){const t=[],e=[],i=[];let n=r;const s=r-hn+1+ro.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-hn?l=ro[a-r+hn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,C=R>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(y,_*g*R),b.set(d,m*g*R);const v=[R,R,R,R,R,R];M.set(v,p*g*R)}const P=new Te;P.setAttribute("position",new $e(E,_)),P.setAttribute("uv",new $e(b,m)),P.setAttribute("faceIndex",new $e(M,p)),t.push(P),n>hn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function co(r,t,e){const i=new Ai(r,t,e);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function nf(r,t,e){const i=new Float32Array(zi),n=new U(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ho(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function uo(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mr||l===Sr,h=l===_n||l===vn;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new lo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new lo(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function rf(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Oi("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function af(r,t,e,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,M=E.length;b<M;b+=3){const P=E[b+0],R=E[b+1],A=E[b+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const P=b+0,R=b+1,A=b+2;d.push(P,R,R,A,A,P)}}else return;const m=new(Ko(d)?tl:Qo)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function of(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function cf(r,t,e){const i=new WeakMap,n=new ae;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let v=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*R*4*u),C=new jo(A,P,R,u);C.type=ni,C.needsUpdate=!0;const y=M*4;for(let T=0;T<u;T++){const B=p[T],G=E[T],V=b[T],$=P*R*4*T;for(let Y=0;Y<B.count;Y++){const K=Y*y;g===!0&&(n.fromBufferAttribute(B,Y),A[$+K+0]=n.x,A[$+K+1]=n.y,A[$+K+2]=n.z,A[$+K+3]=0),_===!0&&(n.fromBufferAttribute(G,Y),A[$+K+4]=n.x,A[$+K+5]=n.y,A[$+K+6]=n.z,A[$+K+7]=0),m===!0&&(n.fromBufferAttribute(V,Y),A[$+K+8]=n.x,A[$+K+9]=n.y,A[$+K+10]=n.z,A[$+K+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new Xt(P,R)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hf(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const cl=new we,fo=new ol(1,1),hl=new jo,dl=new Lc,ul=new nl,po=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Rn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=po[n];if(s===void 0&&(s=new Float32Array(n),po[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Is(r,t){let e=mo[t];e===void 0&&(e=new Int32Array(t),mo[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function df(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function ff(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function pf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function mf(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;vo.set(i),r.uniformMatrix2fv(this.addr,!1,vo),_e(e,i)}}function gf(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;_o.set(i),r.uniformMatrix3fv(this.addr,!1,_o),_e(e,i)}}function _f(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;go.set(i),r.uniformMatrix4fv(this.addr,!1,go),_e(e,i)}}function vf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),_e(e,t)}}function Mf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),_e(e,t)}}function Sf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),_e(e,t)}}function yf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),_e(e,t)}}function Ef(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),_e(e,t)}}function wf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),_e(e,t)}}function Tf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(fo.compareFunction=Zo,s=fo):s=cl,e.setTexture2D(t||s,n)}function Af(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||dl,n)}function Rf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ul,n)}function Cf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hl,n)}function Pf(r){switch(r){case 5126:return df;case 35664:return uf;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return yf;case 36294:return bf;case 36295:return Ef;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}function Lf(r,t){r.uniform1fv(this.addr,t)}function If(r,t){const e=Rn(t,this.size,2);r.uniform2fv(this.addr,e)}function Df(r,t){const e=Rn(t,this.size,3);r.uniform3fv(this.addr,e)}function Uf(r,t){const e=Rn(t,this.size,4);r.uniform4fv(this.addr,e)}function Ff(r,t){const e=Rn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Nf(r,t){const e=Rn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Of(r,t){const e=Rn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kf(r,t){r.uniform1iv(this.addr,t)}function Bf(r,t){r.uniform2iv(this.addr,t)}function Gf(r,t){r.uniform3iv(this.addr,t)}function zf(r,t){r.uniform4iv(this.addr,t)}function Hf(r,t){r.uniform1uiv(this.addr,t)}function Vf(r,t){r.uniform2uiv(this.addr,t)}function Wf(r,t){r.uniform3uiv(this.addr,t)}function $f(r,t){r.uniform4uiv(this.addr,t)}function Xf(r,t,e){const i=this.cache,n=t.length,s=Is(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||cl,s[a])}function qf(r,t,e){const i=this.cache,n=t.length,s=Is(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||dl,s[a])}function Yf(r,t,e){const i=this.cache,n=t.length,s=Is(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ul,s[a])}function Zf(r,t,e){const i=this.cache,n=t.length,s=Is(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||hl,s[a])}function Kf(r){switch(r){case 5126:return Lf;case 35664:return If;case 35665:return Df;case 35666:return Uf;case 35674:return Ff;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return Bf;case 35668:case 35672:return Gf;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Vf;case 36295:return Wf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Zf}}class jf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Pf(e.type)}}class Jf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kf(e.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function xo(r,t){r.seq.push(t),r.map[t.id]=t}function tp(r,t,e){const i=r.name,n=i.length;for(hr.lastIndex=0;;){const s=hr.exec(i),a=hr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){xo(e,c===void 0?new jf(o,r,t):new Jf(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Qf(o),xo(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);tp(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Mo(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const ep=37297;let ip=0;function np(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const So=new Ot;function sp(r){te._getMatrix(So,te.workingColorSpace,r);const t=`mat3( ${So.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case As:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yo(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+np(r.getShaderSource(t),a)}else return n}function rp(r,t){const e=sp(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ap(r,t){let e;switch(t){case Hl:e="Linear";break;case Vl:e="Reinhard";break;case Wl:e="Cineon";break;case $l:e="ACESFilmic";break;case ql:e="AgX";break;case Yl:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vs=new U;function op(){te.getLuminanceCoefficients(vs);const r=vs.x.toFixed(4),t=vs.y.toFixed(4),e=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bn).join(`
`)}function cp(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hp(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Bn(r){return r!==""}function bo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(r){return r.replace(dp,fp)}const up=new Map;function fp(r,t){let e=Gt[t];if(e===void 0){const i=up.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(r){return r.replace(pp,mp)}function mp(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function To(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gp(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===No?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _n:case vn:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vn:t="ENVMAP_MODE_REFRACTION";break}return t}function xp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Sp(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gp(e),c=_p(e),h=vp(e),u=xp(e),d=Mp(e),f=lp(e),g=cp(s),_=n.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bn).join(`
`),p.length>0&&(p+=`
`)):(m=[To(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bn).join(`
`),p=[To(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==wi?ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bn).join(`
`)),a=jr(a),a=bo(a,e),a=Eo(a,e),o=jr(o),o=bo(o,e),o=Eo(o,e),a=wo(a),o=wo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,M=E+p+o,P=Mo(n,n.VERTEX_SHADER,b),R=Mo(n,n.FRAGMENT_SHADER,M);n.attachShader(_,P),n.attachShader(_,R),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(T){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(_).trim(),G=n.getShaderInfoLog(P).trim(),V=n.getShaderInfoLog(R).trim();let $=!0,Y=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,P,R);else{const K=yo(n,P,"vertex"),H=yo(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+K+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||V==="")&&(Y=!1);Y&&(T.diagnostics={runnable:$,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:p}})}n.deleteShader(P),n.deleteShader(R),C=new Ts(n,_),y=hp(n,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(_,ep)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ip++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let yp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ep(t),e.set(t,i)),i}}class Ep{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function wp(r,t,e,i,n,s,a){const o=new ca,l=new bp,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,T,B,G){const V=B.fog,$=G.geometry,Y=y.isMeshStandardMaterial?B.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),H=K&&K.mapping===Ls?K.image.height:null,nt=g[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ot=et!==void 0?et.length:0;let pt=0;$.morphAttributes.position!==void 0&&(pt=1),$.morphAttributes.normal!==void 0&&(pt=2),$.morphAttributes.color!==void 0&&(pt=3);let Ft,J,Z,dt;if(nt){const ne=ei[nt];Ft=ne.vertexShader,J=ne.fragmentShader}else Ft=y.vertexShader,J=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),dt=l.getFragmentShaderID(y);const Q=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),Rt=G.isInstancedMesh===!0,Et=G.isBatchedMesh===!0,ce=!!y.map,kt=!!y.matcap,Ht=!!K,L=!!y.aoMap,Pe=!!y.lightMap,At=!!y.bumpMap,Vt=!!y.normalMap,mt=!!y.displacementMap,Jt=!!y.emissiveMap,bt=!!y.metalnessMap,w=!!y.roughnessMap,x=y.anisotropy>0,W=y.clearcoat>0,I=y.dispersion>0,O=y.iridescence>0,N=y.sheen>0,_t=y.transmission>0,ht=x&&!!y.anisotropyMap,vt=W&&!!y.clearcoatMap,Zt=W&&!!y.clearcoatNormalMap,rt=W&&!!y.clearcoatRoughnessMap,xt=O&&!!y.iridescenceMap,Ct=O&&!!y.iridescenceThicknessMap,It=N&&!!y.sheenColorMap,Mt=N&&!!y.sheenRoughnessMap,qt=!!y.specularMap,Bt=!!y.specularColorMap,oe=!!y.specularIntensityMap,F=_t&&!!y.transmissionMap,lt=_t&&!!y.thicknessMap,j=!!y.gradientMap,tt=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,Nt=!!y.extensions;let ue=wi;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Se={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:Ft,fragmentShader:J,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Et,batchingColor:Et&&G._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&G.instanceColor!==null,instancingMorph:Rt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Sn,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:kt,envMap:Ht,envMapMode:Ht&&K.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Pe,bumpMap:At,normalMap:Vt,displacementMap:d&&mt,emissiveMap:Jt,normalMapObjectSpace:Vt&&y.normalMapType===Jl,normalMapTangentSpace:Vt&&y.normalMapType===Yo,metalnessMap:bt,roughnessMap:w,anisotropy:x,anisotropyMap:ht,clearcoat:W,clearcoatMap:vt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:rt,dispersion:I,iridescence:O,iridescenceMap:xt,iridescenceThicknessMap:Ct,sheen:N,sheenColorMap:It,sheenRoughnessMap:Mt,specularMap:qt,specularColorMap:Bt,specularIntensityMap:oe,transmission:_t,transmissionMap:F,thicknessMap:lt,gradientMap:j,opaque:y.transparent===!1&&y.blending===un&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:ce&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:At&&_(y.bumpMap.channel),normalMapUv:Vt&&_(y.normalMap.channel),displacementMapUv:mt&&_(y.displacementMap.channel),emissiveMapUv:Jt&&_(y.emissiveMap.channel),metalnessMapUv:bt&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(y.sheenRoughnessMap.channel),specularMapUv:qt&&_(y.specularMap.channel),specularColorMapUv:Bt&&_(y.specularColorMap.channel),specularIntensityMapUv:oe&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:lt&&_(y.thicknessMap.channel),alphaMapUv:tt&&_(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Vt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(ce||tt),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:pt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wt,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)v.push(T),v.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(E(v,y),b(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const v=g[y.type];let T;if(v){const B=ei[v];T=Wc.clone(B.uniforms)}else T=y.uniforms;return T}function P(y,v){let T;for(let B=0,G=h.length;B<G;B++){const V=h[B];if(V.cacheKey===v){T=V,++T.usedTimes;break}}return T===void 0&&(T=new Sp(r,v,y,s),h.push(T)),T}function R(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:C}}function Tp(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Ap(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ao(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ro(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ap),i.length>1&&i.sort(d||Ao),n.length>1&&n.sort(d||Ao)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Rp(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new Ro,r.set(i,[a])):n>=s.length?(a=new Ro,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Cp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Pp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Lp=0;function Ip(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dp(r){const t=new Cp,e=Pp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const n=new U,s=new jt,a=new jt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,b=0,M=0,P=0,R=0,A=0;c.sort(Ip);for(let y=0,v=c.length;y<v;y++){const T=c[y],B=T.color,G=T.intensity,V=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=B.r*G,u+=B.g*G,d+=B.b*G;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(T.sh.coefficients[Y],G);A++}else if(T.isDirectionalLight){const Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,H=e.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=T.shadow.matrix,E++}i.directional[f]=Y,f++}else if(T.isSpotLight){const Y=t.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(B).multiplyScalar(G),Y.distance=V,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,i.spot[_]=Y;const K=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,K.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[_]=K.matrix,T.castShadow){const H=e.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=$,M++}_++}else if(T.isRectAreaLight){const Y=t.get(T);Y.color.copy(B).multiplyScalar(G),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=Y,m++}else if(T.isPointLight){const Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const K=T.shadow,H=e.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=T.shadow.matrix,b++}i.point[g]=Y,g++}else if(T.isHemisphereLight){const Y=t.get(T);Y.skyColor.copy(T.color).multiplyScalar(G),Y.groundColor.copy(T.groundColor).multiplyScalar(G),i.hemi[p]=Y,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=A,i.version=Lp++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Co(r){const t=new Dp(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Up(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Co(r),t.set(n,[o])):s>=a.length?(o=new Co(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(r,t,e){let i=new da;const n=new Xt,s=new Xt,a=new ae,o=new eh({depthPacking:jl}),l=new ih,c={},h=e.maxTextureSize,u={[Ti]:Ue,[Ue]:Ti,[Wt]:Wt},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Fp,fragmentShader:Np}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let p=this.type;this.render=function(R,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Ei),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==hi&&this.type===hi,V=p===hi&&this.type!==hi;for(let $=0,Y=R.length;$<Y;$++){const K=R[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const nt=H.getFrameExtents();if(n.multiply(nt),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/nt.x),n.x=s.x*nt.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/nt.y),n.y=s.y*nt.y,H.mapSize.y=s.y)),H.map===null||G===!0||V===!0){const ot=this.type!==hi?{minFilter:he,magFilter:he}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(n.x,n.y,ot),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const et=H.getViewportCount();for(let ot=0;ot<et;ot++){const pt=H.getViewport(ot);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),B.viewport(a),H.updateMatrices(K,ot),i=H.getFrustum(),M(A,C,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&E(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,T)};function E(R,A){const C=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ai(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,C,f,_,null)}function b(R,A,C,y){let v=null;const T=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)v=T;else if(v=C.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=v.uuid,G=A.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let $=V[G];$===void 0&&($=v.clone(),V[G]=$,A.addEventListener("dispose",P)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,y===hi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=r.properties.get(v);B.light=C}return v}function M(R,A,C,y,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===hi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const G=t.update(R),V=R.material;if(Array.isArray(V)){const $=G.groups;for(let Y=0,K=$.length;Y<K;Y++){const H=$[Y],nt=V[H.materialIndex];if(nt&&nt.visible){const et=b(R,nt,y,v);R.onBeforeShadow(r,R,A,C,G,et,H),r.renderBufferDirect(C,null,G,et,R,H),R.onAfterShadow(r,R,A,C,G,et,H)}}}else if(V.visible){const $=b(R,V,y,v);R.onBeforeShadow(r,R,A,C,G,$,null),r.renderBufferDirect(C,null,G,$,R,null),R.onAfterShadow(r,R,A,C,G,$,null)}}const B=R.children;for(let G=0,V=B.length;G<V;G++)M(B[G],A,C,y,v)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const y=c[C],v=R.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const kp={[fr]:pr,[mr]:vr,[gr]:xr,[gn]:_r,[pr]:fr,[vr]:mr,[xr]:gr,[_r]:gn};function Bp(r,t){function e(){let F=!1;const lt=new ae;let j=null;const tt=new ae(0,0,0,0);return{setMask:function(ft){j!==ft&&!F&&(r.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){F=ft},setClear:function(ft,ut,Nt,ue,Se){Se===!0&&(ft*=ue,ut*=ue,Nt*=ue),lt.set(ft,ut,Nt,ue),tt.equals(lt)===!1&&(r.clearColor(ft,ut,Nt,ue),tt.copy(lt))},reset:function(){F=!1,j=null,tt.set(-1,0,0,0)}}}function i(){let F=!1,lt=!1,j=null,tt=null,ft=null;return{setReversed:function(ut){if(lt!==ut){const Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ft;ft=null,this.setClear(ue)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?Q(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(ut){j!==ut&&!F&&(r.depthMask(ut),j=ut)},setFunc:function(ut){if(lt&&(ut=kp[ut]),tt!==ut){switch(ut){case fr:r.depthFunc(r.NEVER);break;case pr:r.depthFunc(r.ALWAYS);break;case mr:r.depthFunc(r.LESS);break;case gn:r.depthFunc(r.LEQUAL);break;case gr:r.depthFunc(r.EQUAL);break;case _r:r.depthFunc(r.GEQUAL);break;case vr:r.depthFunc(r.GREATER);break;case xr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=ut}},setLocked:function(ut){F=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),r.clearDepth(ut),ft=ut)},reset:function(){F=!1,j=null,tt=null,ft=null,lt=!1}}}function n(){let F=!1,lt=null,j=null,tt=null,ft=null,ut=null,Nt=null,ue=null,Se=null;return{setTest:function(ne){F||(ne?Q(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!F&&(r.stencilMask(ne),lt=ne)},setFunc:function(ne,Xe,si){(j!==ne||tt!==Xe||ft!==si)&&(r.stencilFunc(ne,Xe,si),j=ne,tt=Xe,ft=si)},setOp:function(ne,Xe,si){(ut!==ne||Nt!==Xe||ue!==si)&&(r.stencilOp(ne,Xe,si),ut=ne,Nt=Xe,ue=si)},setLocked:function(ne){F=ne},setClear:function(ne){Se!==ne&&(r.clearStencil(ne),Se=ne)},reset:function(){F=!1,lt=null,j=null,tt=null,ft=null,ut=null,Nt=null,ue=null,Se=null}}}const s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,M=null,P=null,R=null,A=new zt(0,0,0),C=0,y=!1,v=null,T=null,B=null,G=null,V=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=K>=2);let nt=null,et={};const ot=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),Ft=new ae().fromArray(ot),J=new ae().fromArray(pt);function Z(F,lt,j,tt){const ft=new Uint8Array(4),ut=r.createTexture();r.bindTexture(F,ut),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<j;Nt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(lt+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ut}const dt={};dt[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(r.DEPTH_TEST),a.setFunc(gn),At(!1),Vt(ya),Q(r.CULL_FACE),L(Ei);function Q(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function yt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Rt(F,lt){return u[F]!==lt?(r.bindFramebuffer(F,lt),u[F]=lt,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=lt),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function Et(F,lt){let j=f,tt=!1;if(F){j=d.get(lt),j===void 0&&(j=[],d.set(lt,j));const ft=F.textures;if(j.length!==ft.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)j[ut]=r.COLOR_ATTACHMENT0+ut;j.length=ft.length,tt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,tt=!0);tt&&r.drawBuffers(j)}function ce(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const kt={[Gi]:r.FUNC_ADD,[bl]:r.FUNC_SUBTRACT,[El]:r.FUNC_REVERSE_SUBTRACT};kt[wl]=r.MIN,kt[Tl]=r.MAX;const Ht={[Al]:r.ZERO,[Rl]:r.ONE,[Cl]:r.SRC_COLOR,[dr]:r.SRC_ALPHA,[Fl]:r.SRC_ALPHA_SATURATE,[Dl]:r.DST_COLOR,[Ll]:r.DST_ALPHA,[Pl]:r.ONE_MINUS_SRC_COLOR,[ur]:r.ONE_MINUS_SRC_ALPHA,[Ul]:r.ONE_MINUS_DST_COLOR,[Il]:r.ONE_MINUS_DST_ALPHA,[Nl]:r.CONSTANT_COLOR,[Ol]:r.ONE_MINUS_CONSTANT_COLOR,[kl]:r.CONSTANT_ALPHA,[Bl]:r.ONE_MINUS_CONSTANT_ALPHA};function L(F,lt,j,tt,ft,ut,Nt,ue,Se,ne){if(F===Ei){_===!0&&(yt(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),F!==yl){if(F!==m||ne!==y){if((p!==Gi||M!==Gi)&&(r.blendEquation(r.FUNC_ADD),p=Gi,M=Gi),ne)switch(F){case un:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hn:r.blendFunc(r.ONE,r.ONE);break;case ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ea:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case un:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ea:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,b=null,P=null,R=null,A.set(0,0,0),C=0,m=F,y=ne}return}ft=ft||lt,ut=ut||j,Nt=Nt||tt,(lt!==p||ft!==M)&&(r.blendEquationSeparate(kt[lt],kt[ft]),p=lt,M=ft),(j!==E||tt!==b||ut!==P||Nt!==R)&&(r.blendFuncSeparate(Ht[j],Ht[tt],Ht[ut],Ht[Nt]),E=j,b=tt,P=ut,R=Nt),(ue.equals(A)===!1||Se!==C)&&(r.blendColor(ue.r,ue.g,ue.b,Se),A.copy(ue),C=Se),m=F,y=!1}function Pe(F,lt){F.side===Wt?yt(r.CULL_FACE):Q(r.CULL_FACE);let j=F.side===Ue;lt&&(j=!j),At(j),F.blending===un&&F.transparent===!1?L(Ei):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){v!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),v=F)}function Vt(F){F!==Ml?(Q(r.CULL_FACE),F!==T&&(F===ya?r.cullFace(r.BACK):F===Sl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),T=F}function mt(F){F!==B&&(Y&&r.lineWidth(F),B=F)}function Jt(F,lt,j){F?(Q(r.POLYGON_OFFSET_FILL),(G!==lt||V!==j)&&(r.polygonOffset(lt,j),G=lt,V=j)):yt(r.POLYGON_OFFSET_FILL)}function bt(F){F?Q(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function w(F){F===void 0&&(F=r.TEXTURE0+$-1),nt!==F&&(r.activeTexture(F),nt=F)}function x(F,lt,j){j===void 0&&(nt===null?j=r.TEXTURE0+$-1:j=nt);let tt=et[j];tt===void 0&&(tt={type:void 0,texture:void 0},et[j]=tt),(tt.type!==F||tt.texture!==lt)&&(nt!==j&&(r.activeTexture(j),nt=j),r.bindTexture(F,lt||dt[F]),tt.type=F,tt.texture=lt)}function W(){const F=et[nt];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function I(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){Ft.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function Mt(F){J.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function qt(F,lt){let j=c.get(lt);j===void 0&&(j=new WeakMap,c.set(lt,j));let tt=j.get(F);tt===void 0&&(tt=r.getUniformBlockIndex(lt,F.name),j.set(F,tt))}function Bt(F,lt){const tt=c.get(lt).get(F);l.get(lt)!==tt&&(r.uniformBlockBinding(lt,tt,F.__bindingPointIndex),l.set(lt,tt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,et={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,M=null,P=null,R=null,A=new zt(0,0,0),C=0,y=!1,v=null,T=null,B=null,G=null,V=null,Ft.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:yt,bindFramebuffer:Rt,drawBuffers:Et,useProgram:ce,setBlending:L,setMaterial:Pe,setFlipSided:At,setCullFace:Vt,setLineWidth:mt,setPolygonOffset:Jt,setScissorTest:bt,activeTexture:w,bindTexture:x,unbindTexture:W,compressedTexImage2D:I,compressedTexImage3D:O,texImage2D:xt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:N,texSubImage3D:_t,compressedTexSubImage2D:ht,compressedTexSubImage3D:vt,scissor:It,viewport:Mt,reset:oe}}function Gp(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Cs("canvas")}function _(w,x,W){let I=1;const O=bt(w);if((O.width>W||O.height>W)&&(I=W/Math.max(O.width,O.height)),I<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const N=Math.floor(I*O.width),_t=Math.floor(I*O.height);u===void 0&&(u=g(N,_t));const ht=x?g(N,_t):u;return ht.width=N,ht.height=_t,ht.getContext("2d").drawImage(w,0,0,N,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+N+"x"+_t+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(w,x,W,I,O=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let N=x;if(x===r.RED&&(W===r.FLOAT&&(N=r.R32F),W===r.HALF_FLOAT&&(N=r.R16F),W===r.UNSIGNED_BYTE&&(N=r.R8)),x===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(N=r.R8UI),W===r.UNSIGNED_SHORT&&(N=r.R16UI),W===r.UNSIGNED_INT&&(N=r.R32UI),W===r.BYTE&&(N=r.R8I),W===r.SHORT&&(N=r.R16I),W===r.INT&&(N=r.R32I)),x===r.RG&&(W===r.FLOAT&&(N=r.RG32F),W===r.HALF_FLOAT&&(N=r.RG16F),W===r.UNSIGNED_BYTE&&(N=r.RG8)),x===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(N=r.RG8UI),W===r.UNSIGNED_SHORT&&(N=r.RG16UI),W===r.UNSIGNED_INT&&(N=r.RG32UI),W===r.BYTE&&(N=r.RG8I),W===r.SHORT&&(N=r.RG16I),W===r.INT&&(N=r.RG32I)),x===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(N=r.RGB8UI),W===r.UNSIGNED_SHORT&&(N=r.RGB16UI),W===r.UNSIGNED_INT&&(N=r.RGB32UI),W===r.BYTE&&(N=r.RGB8I),W===r.SHORT&&(N=r.RGB16I),W===r.INT&&(N=r.RGB32I)),x===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(N=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(N=r.RGBA16UI),W===r.UNSIGNED_INT&&(N=r.RGBA32UI),W===r.BYTE&&(N=r.RGBA8I),W===r.SHORT&&(N=r.RGBA16I),W===r.INT&&(N=r.RGBA32I)),x===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(N=r.RGB9_E5),x===r.RGBA){const _t=O?As:te.getTransfer(I);W===r.FLOAT&&(N=r.RGBA32F),W===r.HALF_FLOAT&&(N=r.RGBA16F),W===r.UNSIGNED_BYTE&&(N=_t===se?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(N=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(N=r.RGB5_A1)}return(N===r.R16F||N===r.R32F||N===r.RG16F||N===r.RG32F||N===r.RGBA16F||N===r.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function M(w,x){let W;return w?x===null||x===Wi||x===xn?W=r.DEPTH24_STENCIL8:x===ni?W=r.DEPTH32F_STENCIL8:x===Wn&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===xn?W=r.DEPTH_COMPONENT24:x===ni?W=r.DEPTH_COMPONENT32F:x===Wn&&(W=r.DEPTH_COMPONENT16),W}function P(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==he&&w.minFilter!==ii?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),C(x),x.isVideoTexture&&h.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),v(x)}function C(w){const x=i.get(w);if(x.__webglInit===void 0)return;const W=w.source,I=d.get(W);if(I){const O=I[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&y(w),Object.keys(I).length===0&&d.delete(W)}i.remove(w)}function y(w){const x=i.get(w);r.deleteTexture(x.__webglTexture);const W=w.source,I=d.get(W);delete I[x.__cacheKey],a.memory.textures--}function v(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(x.__webglFramebuffer[I]))for(let O=0;O<x.__webglFramebuffer[I].length;O++)r.deleteFramebuffer(x.__webglFramebuffer[I][O]);else r.deleteFramebuffer(x.__webglFramebuffer[I]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[I])}else{if(Array.isArray(x.__webglFramebuffer))for(let I=0;I<x.__webglFramebuffer.length;I++)r.deleteFramebuffer(x.__webglFramebuffer[I]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let I=0;I<x.__webglColorRenderbuffer.length;I++)x.__webglColorRenderbuffer[I]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[I]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=w.textures;for(let I=0,O=W.length;I<O;I++){const N=i.get(W[I]);N.__webglTexture&&(r.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(W[I])}i.remove(w)}let T=0;function B(){T=0}function G(){const w=T;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),T+=1,w}function V(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function $(w,x){const W=i.get(w);if(w.isVideoTexture&&mt(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){const I=w.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,w,x);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+x)}function Y(w,x){const W=i.get(w);if(w.version>0&&W.__version!==w.version){J(W,w,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+x)}function K(w,x){const W=i.get(w);if(w.version>0&&W.__version!==w.version){J(W,w,x);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+x)}function H(w,x){const W=i.get(w);if(w.version>0&&W.__version!==w.version){Z(W,w,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+x)}const nt={[Vn]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[yr]:r.MIRRORED_REPEAT},et={[he]:r.NEAREST,[Zl]:r.NEAREST_MIPMAP_NEAREST,[Zn]:r.NEAREST_MIPMAP_LINEAR,[ii]:r.LINEAR,[Fs]:r.LINEAR_MIPMAP_NEAREST,[Vi]:r.LINEAR_MIPMAP_LINEAR},ot={[Ql]:r.NEVER,[rc]:r.ALWAYS,[tc]:r.LESS,[Zo]:r.LEQUAL,[ec]:r.EQUAL,[sc]:r.GEQUAL,[ic]:r.GREATER,[nc]:r.NOTEQUAL};function pt(w,x){if(x.type===ni&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ii||x.magFilter===Fs||x.magFilter===Zn||x.magFilter===Vi||x.minFilter===ii||x.minFilter===Fs||x.minFilter===Zn||x.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,nt[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,nt[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,nt[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,et[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,et[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===he||x.minFilter!==Zn&&x.minFilter!==Vi||x.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ft(w,x){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const I=x.source;let O=d.get(I);O===void 0&&(O={},d.set(I,O));const N=V(x);if(N!==w.__cacheKey){O[N]===void 0&&(O[N]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),O[N].usedTimes++;const _t=O[w.__cacheKey];_t!==void 0&&(O[w.__cacheKey].usedTimes--,_t.usedTimes===0&&y(x)),w.__cacheKey=N,w.__webglTexture=O[N].texture}return W}function J(w,x,W){let I=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(I=r.TEXTURE_3D);const O=Ft(w,x),N=x.source;e.bindTexture(I,w.__webglTexture,r.TEXTURE0+W);const _t=i.get(N);if(N.version!==_t.__version||O===!0){e.activeTexture(r.TEXTURE0+W);const ht=te.getPrimaries(te.workingColorSpace),vt=x.colorSpace===yi?null:te.getPrimaries(x.colorSpace),Zt=x.colorSpace===yi||ht===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=_(x.image,!1,n.maxTextureSize);rt=Jt(x,rt);const xt=s.convert(x.format,x.colorSpace),Ct=s.convert(x.type);let It=b(x.internalFormat,xt,Ct,x.colorSpace,x.isVideoTexture);pt(I,x);let Mt;const qt=x.mipmaps,Bt=x.isVideoTexture!==!0,oe=_t.__version===void 0||O===!0,F=N.dataReady,lt=P(x,rt);if(x.isDepthTexture)It=M(x.format===Mn,x.type),oe&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,It,rt.width,rt.height,0,xt,Ct,null));else if(x.isDataTexture)if(qt.length>0){Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,lt,It,qt[0].width,qt[0].height);for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],Bt?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(r.TEXTURE_2D,j,It,Mt.width,Mt.height,0,xt,Ct,Mt.data);x.generateMipmaps=!1}else Bt?(oe&&e.texStorage2D(r.TEXTURE_2D,lt,It,rt.width,rt.height),F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Ct,rt.data)):e.texImage2D(r.TEXTURE_2D,0,It,rt.width,rt.height,0,xt,Ct,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,It,qt[0].width,qt[0].height,rt.depth);for(let j=0,tt=qt.length;j<tt;j++)if(Mt=qt[j],x.format!==We)if(xt!==null)if(Bt){if(F)if(x.layerUpdates.size>0){const ft=so(Mt.width,Mt.height,x.format,x.type);for(const ut of x.layerUpdates){const Nt=Mt.data.subarray(ut*ft/Mt.data.BYTES_PER_ELEMENT,(ut+1)*ft/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ut,Mt.width,Mt.height,1,xt,Nt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,rt.depth,xt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,It,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,rt.depth,xt,Ct,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,It,Mt.width,Mt.height,rt.depth,0,xt,Ct,Mt.data)}else{Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,lt,It,qt[0].width,qt[0].height);for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],x.format!==We?xt!==null?Bt?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(r.TEXTURE_2D,j,It,Mt.width,Mt.height,0,xt,Ct,Mt.data)}else if(x.isDataArrayTexture)if(Bt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,It,rt.width,rt.height,rt.depth),F)if(x.layerUpdates.size>0){const j=so(rt.width,rt.height,x.format,x.type);for(const tt of x.layerUpdates){const ft=rt.data.subarray(tt*j/rt.data.BYTES_PER_ELEMENT,(tt+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,xt,Ct,ft)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ct,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,xt,Ct,rt.data);else if(x.isData3DTexture)Bt?(oe&&e.texStorage3D(r.TEXTURE_3D,lt,It,rt.width,rt.height,rt.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ct,rt.data)):e.texImage3D(r.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,xt,Ct,rt.data);else if(x.isFramebufferTexture){if(oe)if(Bt)e.texStorage2D(r.TEXTURE_2D,lt,It,rt.width,rt.height);else{let j=rt.width,tt=rt.height;for(let ft=0;ft<lt;ft++)e.texImage2D(r.TEXTURE_2D,ft,It,j,tt,0,xt,Ct,null),j>>=1,tt>>=1}}else if(qt.length>0){if(Bt&&oe){const j=bt(qt[0]);e.texStorage2D(r.TEXTURE_2D,lt,It,j.width,j.height)}for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],Bt?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,xt,Ct,Mt):e.texImage2D(r.TEXTURE_2D,j,It,xt,Ct,Mt);x.generateMipmaps=!1}else if(Bt){if(oe){const j=bt(rt);e.texStorage2D(r.TEXTURE_2D,lt,It,j.width,j.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Ct,rt)}else e.texImage2D(r.TEXTURE_2D,0,It,xt,Ct,rt);m(x)&&p(I),_t.__version=N.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,W){if(x.image.length!==6)return;const I=Ft(w,x),O=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+W);const N=i.get(O);if(O.version!==N.__version||I===!0){e.activeTexture(r.TEXTURE0+W);const _t=te.getPrimaries(te.workingColorSpace),ht=x.colorSpace===yi?null:te.getPrimaries(x.colorSpace),vt=x.colorSpace===yi||_t===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Zt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Zt&&!rt?xt[tt]=_(x.image[tt],!0,n.maxCubemapSize):xt[tt]=rt?x.image[tt].image:x.image[tt],xt[tt]=Jt(x,xt[tt]);const Ct=xt[0],It=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type),qt=b(x.internalFormat,It,Mt,x.colorSpace),Bt=x.isVideoTexture!==!0,oe=N.__version===void 0||I===!0,F=O.dataReady;let lt=P(x,Ct);pt(r.TEXTURE_CUBE_MAP,x);let j;if(Zt){Bt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,qt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){j=xt[tt].mipmaps;for(let ft=0;ft<j.length;ft++){const ut=j[ft];x.format!==We?It!==null?Bt?F&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,It,Mt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,qt,ut.width,ut.height,0,It,Mt,ut.data)}}}else{if(j=x.mipmaps,Bt&&oe){j.length>0&&lt++;const tt=bt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Bt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,It,Mt,xt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,xt[tt].width,xt[tt].height,0,It,Mt,xt[tt].data);for(let ft=0;ft<j.length;ft++){const Nt=j[ft].image[tt].image;Bt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Nt.width,Nt.height,It,Mt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,qt,Nt.width,Nt.height,0,It,Mt,Nt.data)}}else{Bt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,Mt,xt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,It,Mt,xt[tt]);for(let ft=0;ft<j.length;ft++){const ut=j[ft];Bt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,It,Mt,ut.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,qt,It,Mt,ut.image[tt])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),N.__version=O.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function dt(w,x,W,I,O,N){const _t=s.convert(W.format,W.colorSpace),ht=s.convert(W.type),vt=b(W.internalFormat,_t,ht,W.colorSpace),Zt=i.get(x),rt=i.get(W);if(rt.__renderTarget=x,!Zt.__hasExternalTextures){const xt=Math.max(1,x.width>>N),Ct=Math.max(1,x.height>>N);O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?e.texImage3D(O,N,vt,xt,Ct,x.depth,0,_t,ht,null):e.texImage2D(O,N,vt,xt,Ct,0,_t,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),Vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,O,rt.__webglTexture,0,At(x)):(O===r.TEXTURE_2D||O>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,O,rt.__webglTexture,N),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(w,x,W){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const I=x.depthTexture,O=I&&I.isDepthTexture?I.type:null,N=M(x.stencilBuffer,O),_t=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=At(x);Vt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,N,x.width,x.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,N,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,N,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,w)}else{const I=x.textures;for(let O=0;O<I.length;O++){const N=I[O],_t=s.convert(N.format,N.colorSpace),ht=s.convert(N.type),vt=b(N.internalFormat,_t,ht,N.colorSpace),Zt=At(x);W&&Vt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,vt,x.width,x.height):Vt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,vt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,vt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=i.get(x.depthTexture);I.__renderTarget=x,(!I.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const O=I.__webglTexture,N=At(x);if(x.depthTexture.format===fn)Vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,O,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,O,0);else if(x.depthTexture.format===Mn)Vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,O,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const x=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const I=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),I){const O=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,I.removeEventListener("dispose",O)};I.addEventListener("dispose",O),x.__depthDisposeCallback=O}x.__boundDepthTexture=I}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");yt(x.__webglFramebuffer,w)}else if(W){x.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[I]),x.__webglDepthbuffer[I]===void 0)x.__webglDepthbuffer[I]=r.createRenderbuffer(),Q(x.__webglDepthbuffer[I],w,!1);else{const O=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=x.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,N),r.framebufferRenderbuffer(r.FRAMEBUFFER,O,r.RENDERBUFFER,N)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Q(x.__webglDepthbuffer,w,!1);else{const I=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,O),r.framebufferRenderbuffer(r.FRAMEBUFFER,I,r.RENDERBUFFER,O)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(w,x,W){const I=i.get(w);x!==void 0&&dt(I.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Rt(w)}function ce(w){const x=w.texture,W=i.get(w),I=i.get(x);w.addEventListener("dispose",A);const O=w.textures,N=w.isWebGLCubeRenderTarget===!0,_t=O.length>1;if(_t||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=x.version,a.memory.textures++),N){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let vt=0;vt<x.mipmaps.length;vt++)W.__webglFramebuffer[ht][vt]=r.createFramebuffer()}else W.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)W.__webglFramebuffer[ht]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(_t)for(let ht=0,vt=O.length;ht<vt;ht++){const Zt=i.get(O[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&Vt(w)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<O.length;ht++){const vt=O[ht];W.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const Zt=s.convert(vt.format,vt.colorSpace),rt=s.convert(vt.type),xt=b(vt.internalFormat,Zt,rt,vt.colorSpace,w.isXRRenderTarget===!0),Ct=At(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,xt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),pt(r.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)dt(W.__webglFramebuffer[ht][vt],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else dt(W.__webglFramebuffer[ht],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ht=0,vt=O.length;ht<vt;ht++){const Zt=O[ht],rt=i.get(Zt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),pt(r.TEXTURE_2D,Zt),dt(W.__webglFramebuffer,w,Zt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(Zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,I.__webglTexture),pt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)dt(W.__webglFramebuffer[vt],w,x,r.COLOR_ATTACHMENT0,ht,vt);else dt(W.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}w.depthBuffer&&Rt(w)}function kt(w){const x=w.textures;for(let W=0,I=x.length;W<I;W++){const O=x[W];if(m(O)){const N=E(w),_t=i.get(O).__webglTexture;e.bindTexture(N,_t),p(N),e.unbindTexture()}}}const Ht=[],L=[];function Pe(w){if(w.samples>0){if(Vt(w)===!1){const x=w.textures,W=w.width,I=w.height;let O=r.COLOR_BUFFER_BIT;const N=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=i.get(w),ht=x.length>1;if(ht)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(O|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(O|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[vt]);const Zt=i.get(x[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,W,I,0,0,W,I,O,r.NEAREST),l===!0&&(Ht.length=0,L.length=0,Ht.push(r.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ht.push(N),L.push(N),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,_t.__webglColorRenderbuffer[vt]);const Zt=i.get(x[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function At(w){return Math.min(n.maxSamples,w.samples)}function Vt(w){const x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Jt(w,x){const W=w.colorSpace,I=w.format,O=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Sn&&W!==yi&&(te.getTransfer(W)===se?(I!==We||O!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Et,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Vt}function zp(r,t){function e(i,n=yi){let s;const a=te.getTransfer(n);if(i===fi)return r.UNSIGNED_BYTE;if(i===ta)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ea)return r.UNSIGNED_SHORT_5_5_5_1;if(i===zo)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Bo)return r.BYTE;if(i===Go)return r.SHORT;if(i===Wn)return r.UNSIGNED_SHORT;if(i===Qr)return r.INT;if(i===Wi)return r.UNSIGNED_INT;if(i===ni)return r.FLOAT;if(i===$n)return r.HALF_FLOAT;if(i===Ho)return r.ALPHA;if(i===Vo)return r.RGB;if(i===We)return r.RGBA;if(i===Wo)return r.LUMINANCE;if(i===$o)return r.LUMINANCE_ALPHA;if(i===fn)return r.DEPTH_COMPONENT;if(i===Mn)return r.DEPTH_STENCIL;if(i===ia)return r.RED;if(i===na)return r.RED_INTEGER;if(i===Xo)return r.RG;if(i===sa)return r.RG_INTEGER;if(i===ra)return r.RGBA_INTEGER;if(i===Ms||i===Ss||i===ys||i===bs)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===br||i===Er||i===wr||i===Tr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===br)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Er)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ar||i===Rr||i===Cr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ar||i===Rr)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pr||i===Lr||i===Ir||i===Dr||i===Ur||i===Fr||i===Nr||i===Or||i===kr||i===Br||i===Gr||i===zr||i===Hr||i===Vr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ir)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ur)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Or)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Br)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vr)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Es||i===Wr||i===$r)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Es)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$r)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qo||i===Xr||i===qr||i===Yr)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Es)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new we,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pi({vertexShader:Hp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Ee(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends En{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Wp,m=e.getContextAttributes();let p=null,E=null;const b=[],M=[],P=new Xt;let R=null;const A=new Ie;A.viewport=new ae;const C=new Ie;C.viewport=new ae;const y=[A,C],v=new ch;let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=b[J];return Z===void 0&&(Z=new er,b[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=b[J];return Z===void 0&&(Z=new er,b[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=b[J];return Z===void 0&&(Z=new er,b[J]=Z),Z.getHandSpace()};function G(J){const Z=M.indexOf(J.inputSource);if(Z===-1)return;const dt=b[Z];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||a),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",$);for(let J=0;J<b.length;J++){const Z=M[J];Z!==null&&(M[J]=null,b[J].disconnect(Z))}T=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,E=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",V),n.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Q=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?Mn:fn,Q=m.stencil?xn:Wi);const Rt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Rt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ai(d.textureWidth,d.textureHeight,{format:We,type:fi,depthTexture:new ol(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,dt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ai(f.framebufferWidth,f.framebufferHeight,{format:We,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ft.setContext(n),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(J){for(let Z=0;Z<J.removed.length;Z++){const dt=J.removed[Z],Q=M.indexOf(dt);Q>=0&&(M[Q]=null,b[Q].disconnect(dt))}for(let Z=0;Z<J.added.length;Z++){const dt=J.added[Z];let Q=M.indexOf(dt);if(Q===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=M.length){M.push(dt),Q=Rt;break}else if(M[Rt]===null){M[Rt]=dt,Q=Rt;break}if(Q===-1)break}const yt=b[Q];yt&&yt.connect(dt)}}const Y=new U,K=new U;function H(J,Z,dt){Y.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(dt.matrixWorld);const Q=Y.distanceTo(K),yt=Z.projectionMatrix.elements,Rt=dt.projectionMatrix.elements,Et=yt[14]/(yt[10]-1),ce=yt[14]/(yt[10]+1),kt=(yt[9]+1)/yt[5],Ht=(yt[9]-1)/yt[5],L=(yt[8]-1)/yt[0],Pe=(Rt[8]+1)/Rt[0],At=Et*L,Vt=Et*Pe,mt=Q/(-L+Pe),Jt=mt*-L;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Jt),J.translateZ(mt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),yt[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const bt=Et+mt,w=ce+mt,x=At-Jt,W=Vt+(Q-Jt),I=kt*ce/w*bt,O=Ht*ce/w*bt;J.projectionMatrix.makePerspective(x,W,I,O,bt,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function nt(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let Z=J.near,dt=J.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),v.near=C.near=A.near=Z,v.far=C.far=A.far=dt,(T!==v.near||B!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,B=v.far),A.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const Q=J.parent,yt=v.cameras;nt(v,Q);for(let Rt=0;Rt<yt.length;Rt++)nt(yt[Rt],Q);yt.length===2?H(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),et(J,v,Q)};function et(J,Z,dt){dt===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yn*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ot=null;function pt(J,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Q=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let Et=0;Et<dt.length;Et++){const ce=dt[Et];let kt=null;if(f!==null)kt=f.getViewport(ce);else{const L=u.getViewSubImage(d,ce);kt=L.viewport,Et===0&&(t.setRenderTargetTextures(E,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(E))}let Ht=y[Et];Ht===void 0&&(Ht=new Ie,Ht.layers.enable(Et),Ht.viewport=new ae,y[Et]=Ht),Ht.matrix.fromArray(ce.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ce.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(kt.x,kt.y,kt.width,kt.height),Et===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(Ht)}const yt=n.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const Et=u.getDepthInformation(dt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,n.renderState)}}for(let dt=0;dt<b.length;dt++){const Q=M[dt],yt=b[dt];Q!==null&&yt!==void 0&&yt.update(Q,Z,c||a)}ot&&ot(J,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ft=new ll;Ft.setAnimationLoop(pt),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}}const Fi=new De,Xp=new jt;function qp(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,el(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,E,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Yp(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function c(E,b){let M=n[E.id];M===void 0&&(g(E),M=h(E),n[E.id]=M,E.addEventListener("dispose",m));const P=b.program;i.updateUBOMapping(E,P);const R=t.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function h(E){const b=u();E.__bindingPointIndex=b;const M=r.createBuffer(),P=E.__size,R=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,P,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=n[E.id],M=E.uniforms,P=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let R=0,A=M.length;R<A;R++){const C=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,v=C.length;y<v;y++){const T=C[y];if(f(T,R,y,P)===!0){const B=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let $=0;$<G.length;$++){const Y=G[$],K=_(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,B+V,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,b,M,P){const R=E.value,A=b+"_"+M;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const C=P[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(E){const b=E.uniforms;let M=0;const P=16;for(let A=0,C=b.length;A<C;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,T=y.length;v<T;v++){const B=y[v],G=Array.isArray(B.value)?B.value:[B.value];for(let V=0,$=G.length;V<$;V++){const Y=G[V],K=_(Y),H=M%P,nt=H%K.boundary,et=H+nt;M+=nt,et!==0&&P-et<K.storage&&(M+=P-et),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=K.storage}}}const R=M%P;return R>0&&(M+=P-R),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function p(){for(const E in n)r.deleteBuffer(n[E]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Zp{constructor(t={}){const{canvas:e=yc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=wi,this.toneMappingExposure=1;const M=this;let P=!1,R=0,A=0,C=null,y=-1,v=null;const T=new ae,B=new ae;let G=null;const V=new zt(0);let $=0,Y=e.width,K=e.height,H=1,nt=null,et=null;const ot=new ae(0,0,Y,K),pt=new ae(0,0,Y,K);let Ft=!1;const J=new da;let Z=!1,dt=!1;this.transmissionResolutionScale=1;const Q=new jt,yt=new jt,Rt=new U,Et=new ae,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Ht(){return C===null?H:1}let L=i;function Pe(S,k){return e.getContext(S,k)}try{const S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jr}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){const k="webgl2";if(L=Pe(k,S),L===null)throw Pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let At,Vt,mt,Jt,bt,w,x,W,I,O,N,_t,ht,vt,Zt,rt,xt,Ct,It,Mt,qt,Bt,oe,F;function lt(){At=new rf(L),At.init(),Bt=new zp(L,At),Vt=new ju(L,At,t,Bt),mt=new Bp(L,At),Vt.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Jt=new lf(L),bt=new Tp,w=new Gp(L,At,mt,bt,Vt,Bt,Jt),x=new Qu(M),W=new sf(M),I=new fh(L),oe=new Zu(L,I),O=new af(L,I,Jt,oe),N=new hf(L,O,I,Jt),It=new cf(L,Vt,w),rt=new Ju(bt),_t=new wp(M,x,W,At,Vt,oe,rt),ht=new qp(M,bt),vt=new Rp,Zt=new Up(At),Ct=new Yu(M,x,W,mt,N,f,l),xt=new Op(M,N,Vt),F=new Yp(L,Jt,Vt,mt),Mt=new Ku(L,At,Jt),qt=new of(L,At,Jt),Jt.programs=_t.programs,M.capabilities=Vt,M.extensions=At,M.properties=bt,M.renderLists=vt,M.shadowMap=xt,M.state=mt,M.info=Jt}lt();const j=new $p(M,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=At.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=At.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(Y,K,!1))},this.getSize=function(S){return S.set(Y,K)},this.setSize=function(S,k,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,K=k,e.width=Math.floor(S*H),e.height=Math.floor(k*H),X===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(Y*H,K*H).floor()},this.setDrawingBufferSize=function(S,k,X){Y=S,K=k,H=X,e.width=Math.floor(S*X),e.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(ot)},this.setViewport=function(S,k,X,q){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,k,X,q),mt.viewport(T.copy(ot).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(pt)},this.setScissor=function(S,k,X,q){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,k,X,q),mt.scissor(B.copy(pt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(S){mt.setScissorTest(Ft=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){et=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,X=!0){let q=0;if(S){let z=!1;if(C!==null){const st=C.texture.format;z=st===ra||st===sa||st===na}if(z){const st=C.texture.type,ct=st===fi||st===Wi||st===Wn||st===xn||st===ta||st===ea,gt=Ct.getClearColor(),St=Ct.getClearAlpha(),Dt=gt.r,Ut=gt.g,wt=gt.b;ct?(g[0]=Dt,g[1]=Ut,g[2]=wt,g[3]=St,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Dt,_[1]=Ut,_[2]=wt,_[3]=St,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}k&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ct.dispose(),vt.dispose(),Zt.dispose(),bt.dispose(),x.dispose(),W.dispose(),N.dispose(),oe.dispose(),F.dispose(),_t.dispose(),j.dispose(),j.removeEventListener("sessionstart",ma),j.removeEventListener("sessionend",ga),Ri.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=Jt.autoReset,k=xt.enabled,X=xt.autoUpdate,q=xt.needsUpdate,z=xt.type;lt(),Jt.autoReset=S,xt.enabled=k,xt.autoUpdate=X,xt.needsUpdate=q,xt.type=z}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const k=S.target;k.removeEventListener("dispose",Nt),ue(k)}function ue(S){Se(S),bt.remove(S)}function Se(S){const k=bt.get(S).programs;k!==void 0&&(k.forEach(function(X){_t.releaseProgram(X)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,q,z,st){k===null&&(k=ce);const ct=z.isMesh&&z.matrixWorld.determinant()<0,gt=pl(S,k,X,q,z);mt.setMaterial(q,ct);let St=X.index,Dt=1;if(q.wireframe===!0){if(St=O.getWireframeAttribute(X),St===void 0)return;Dt=2}const Ut=X.drawRange,wt=X.attributes.position;let Kt=Ut.start*Dt,ee=(Ut.start+Ut.count)*Dt;st!==null&&(Kt=Math.max(Kt,st.start*Dt),ee=Math.min(ee,(st.start+st.count)*Dt)),St!==null?(Kt=Math.max(Kt,0),ee=Math.min(ee,St.count)):wt!=null&&(Kt=Math.max(Kt,0),ee=Math.min(ee,wt.count));const pe=ee-Kt;if(pe<0||pe===1/0)return;oe.setup(z,q,gt,X,St);let fe,Qt=Mt;if(St!==null&&(fe=I.get(St),Qt=qt,Qt.setIndex(fe)),z.isMesh)q.wireframe===!0?(mt.setLineWidth(q.wireframeLinewidth*Ht()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(z.isLine){let Tt=q.linewidth;Tt===void 0&&(Tt=1),mt.setLineWidth(Tt*Ht()),z.isLineSegments?Qt.setMode(L.LINES):z.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else z.isPoints?Qt.setMode(L.POINTS):z.isSprite&&Qt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Tt=z._multiDrawStarts,Me=z._multiDrawCounts,ie=z._multiDrawCount,qe=St?I.get(St).bytesPerElement:1,Xi=bt.get(q).currentProgram.getUniforms();for(let Fe=0;Fe<ie;Fe++)Xi.setValue(L,"_gl_DrawID",Fe),Qt.render(Tt[Fe]/qe,Me[Fe])}else if(z.isInstancedMesh)Qt.renderInstances(Kt,pe,z.count);else if(X.isInstancedBufferGeometry){const Tt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,Tt);Qt.renderInstances(Kt,pe,Me)}else Qt.render(Kt,pe)};function ne(S,k,X){S.transparent===!0&&S.side===Wt&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,Yn(S,k,X),S.side=Ti,S.needsUpdate=!0,Yn(S,k,X),S.side=Wt):Yn(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),p=Zt.get(X),p.init(k),b.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),S!==X&&S.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const st=z.material;if(st)if(Array.isArray(st))for(let ct=0;ct<st.length;ct++){const gt=st[ct];ne(gt,X,z),q.add(gt)}else ne(st,X,z),q.add(st)}),p=b.pop(),q},this.compileAsync=function(S,k,X=null){const q=this.compile(S,k,X);return new Promise(z=>{function st(){if(q.forEach(function(ct){bt.get(ct).currentProgram.isReady()&&q.delete(ct)}),q.size===0){z(S);return}setTimeout(st,10)}At.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Xe=null;function si(S){Xe&&Xe(S)}function ma(){Ri.stop()}function ga(){Ri.start()}const Ri=new ll;Ri.setAnimationLoop(si),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){Xe=S,j.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},j.addEventListener("sessionstart",ma),j.addEventListener("sessionend",ga),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,k,C),p=Zt.get(S,b.length),p.init(k),b.push(p),yt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(yt),dt=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,dt),m=vt.get(S,E.length),m.init(),E.push(m),j.enabled===!0&&j.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&Ds(st,k,-1/0,M.sortObjects)}Ds(S,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(nt,et),kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,kt&&Ct.addToRenderList(m,S),this.info.render.frame++,Z===!0&&rt.beginShadows();const X=p.state.shadowsArray;xt.render(X,S,k),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const st=k.cameras;if(z.length>0)for(let ct=0,gt=st.length;ct<gt;ct++){const St=st[ct];va(q,z,S,St)}kt&&Ct.render(S);for(let ct=0,gt=st.length;ct<gt;ct++){const St=st[ct];_a(m,S,St,St.viewport)}}else z.length>0&&va(q,z,S,k),kt&&Ct.render(S),_a(m,S,k);C!==null&&A===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(M,S,k),oe.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],Z===!0&&rt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ds(S,k,X,q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){q&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);const ct=N.update(S),gt=S.material;gt.visible&&m.push(S,ct,gt,X,Et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){const ct=N.update(S),gt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Et.copy(ct.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(gt)){const St=ct.groups;for(let Dt=0,Ut=St.length;Dt<Ut;Dt++){const wt=St[Dt],Kt=gt[wt.materialIndex];Kt&&Kt.visible&&m.push(S,ct,Kt,X,Et.z,wt)}}else gt.visible&&m.push(S,ct,gt,X,Et.z,null)}}const st=S.children;for(let ct=0,gt=st.length;ct<gt;ct++)Ds(st[ct],k,X,q)}function _a(S,k,X,q){const z=S.opaque,st=S.transmissive,ct=S.transparent;p.setupLightsView(X),Z===!0&&rt.setGlobalState(M.clippingPlanes,X),q&&mt.viewport(T.copy(q)),z.length>0&&qn(z,k,X),st.length>0&&qn(st,k,X),ct.length>0&&qn(ct,k,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function va(S,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ai(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?$n:fi,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const st=p.state.transmissionRenderTarget[q.id],ct=q.viewport||T;st.setSize(ct.z*M.transmissionResolutionScale,ct.w*M.transmissionResolutionScale);const gt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(V),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),kt&&Ct.render(X);const St=M.toneMapping;M.toneMapping=wi;const Dt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Z===!0&&rt.setGlobalState(M.clippingPlanes,q),qn(S,X,q),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let wt=0,Kt=k.length;wt<Kt;wt++){const ee=k[wt],pe=ee.object,fe=ee.geometry,Qt=ee.material,Tt=ee.group;if(Qt.side===Wt&&pe.layers.test(q.layers)){const Me=Qt.side;Qt.side=Ue,Qt.needsUpdate=!0,xa(pe,X,q,fe,Qt,Tt),Qt.side=Me,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}M.setRenderTarget(gt),M.setClearColor(V,$),Dt!==void 0&&(q.viewport=Dt),M.toneMapping=St}function qn(S,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,st=S.length;z<st;z++){const ct=S[z],gt=ct.object,St=ct.geometry,Dt=q===null?ct.material:q,Ut=ct.group;gt.layers.test(X.layers)&&xa(gt,k,X,St,Dt,Ut)}}function xa(S,k,X,q,z,st){S.onBeforeRender(M,k,X,q,z,st),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(M,k,X,q,S,st),z.transparent===!0&&z.side===Wt&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,M.renderBufferDirect(X,k,q,z,S,st),z.side=Ti,z.needsUpdate=!0,M.renderBufferDirect(X,k,q,z,S,st),z.side=Wt):M.renderBufferDirect(X,k,q,z,S,st),S.onAfterRender(M,k,X,q,z,st)}function Yn(S,k,X){k.isScene!==!0&&(k=ce);const q=bt.get(S),z=p.state.lights,st=p.state.shadowsArray,ct=z.state.version,gt=_t.getParameters(S,z.state,st,k,X),St=_t.getProgramCacheKey(gt);let Dt=q.programs;q.environment=S.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(S.isMeshStandardMaterial?W:x).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Nt),Dt=new Map,q.programs=Dt);let Ut=Dt.get(St);if(Ut!==void 0){if(q.currentProgram===Ut&&q.lightsStateVersion===ct)return Sa(S,gt),Ut}else gt.uniforms=_t.getUniforms(S),S.onBeforeCompile(gt,M),Ut=_t.acquireProgram(gt,St),Dt.set(St,Ut),q.uniforms=gt.uniforms;const wt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=rt.uniform),Sa(S,gt),q.needsLights=gl(S),q.lightsStateVersion=ct,q.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMap.value=z.state.directionalShadowMap,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotShadowMap.value=z.state.spotShadowMap,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMap.value=z.state.pointShadowMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ut,q.uniformsList=null,Ut}function Ma(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Sa(S,k){const X=bt.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function pl(S,k,X,q,z){k.isScene!==!0&&(k=ce),w.resetTextureUnits();const st=k.fog,ct=q.isMeshStandardMaterial?k.environment:null,gt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sn,St=(q.isMeshStandardMaterial?W:x).get(q.envMap||ct),Dt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ut=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,ee=!!X.morphAttributes.color;let pe=wi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=M.toneMapping);const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=fe!==void 0?fe.length:0,Tt=bt.get(q),Me=p.state.lights;if(Z===!0&&(dt===!0||S!==v)){const Ae=S===v&&q.id===y;rt.setState(q,S,Ae)}let ie=!1;q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Me.state.version||Tt.outputColorSpace!==gt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==St||q.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==rt.numPlanes||Tt.numIntersection!==rt.numIntersection)||Tt.vertexAlphas!==Dt||Tt.vertexTangents!==Ut||Tt.morphTargets!==wt||Tt.morphNormals!==Kt||Tt.morphColors!==ee||Tt.toneMapping!==pe||Tt.morphTargetsCount!==Qt)&&(ie=!0):(ie=!0,Tt.__version=q.version);let qe=Tt.currentProgram;ie===!0&&(qe=Yn(q,k,z));let Xi=!1,Fe=!1,Cn=!1;const le=qe.getUniforms(),Be=Tt.uniforms;if(mt.useProgram(qe.program)&&(Xi=!0,Fe=!0,Cn=!0),q.id!==y&&(y=q.id,Fe=!0),Xi||v!==S){mt.buffers.depth.getReversed()?(Q.copy(S.projectionMatrix),Ec(Q),wc(Q),le.setValue(L,"projectionMatrix",Q)):le.setValue(L,"projectionMatrix",S.projectionMatrix),le.setValue(L,"viewMatrix",S.matrixWorldInverse);const Le=le.map.cameraPosition;Le!==void 0&&Le.setValue(L,Rt.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Fe=!0,Cn=!0)}if(z.isSkinnedMesh){le.setOptional(L,z,"bindMatrix"),le.setOptional(L,z,"bindMatrixInverse");const Ae=z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),le.setValue(L,"boneTexture",Ae.boneTexture,w))}z.isBatchedMesh&&(le.setOptional(L,z,"batchingTexture"),le.setValue(L,"batchingTexture",z._matricesTexture,w),le.setOptional(L,z,"batchingIdTexture"),le.setValue(L,"batchingIdTexture",z._indirectTexture,w),le.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&le.setValue(L,"batchingColorTexture",z._colorsTexture,w));const Ge=X.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&It.update(z,X,qe),(Fe||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,le.setValue(L,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Be.envMap.value=St,Be.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Be.envMapIntensity.value=k.environmentIntensity),Fe&&(le.setValue(L,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&ml(Be,Cn),st&&q.fog===!0&&ht.refreshFogUniforms(Be,st),ht.refreshMaterialUniforms(Be,q,H,K,p.state.transmissionRenderTarget[S.id]),Ts.upload(L,Ma(Tt),Be,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(L,Ma(Tt),Be,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(L,"center",z.center),le.setValue(L,"modelViewMatrix",z.modelViewMatrix),le.setValue(L,"normalMatrix",z.normalMatrix),le.setValue(L,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ae=q.uniformsGroups;for(let Le=0,Us=Ae.length;Le<Us;Le++){const Ci=Ae[Le];F.update(Ci,qe),F.bind(Ci,qe)}}return qe}function ml(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function gl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,k,X){bt.get(S.texture).__webglTexture=k,bt.get(S.depthTexture).__webglTexture=X;const q=bt.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const X=bt.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const _l=L.createFramebuffer();this.setRenderTarget=function(S,k=0,X=0){C=S,R=k,A=X;let q=!0,z=null,st=!1,ct=!1;if(S){const St=bt.get(S);if(St.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(St.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(St.__hasExternalTextures)w.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const wt=S.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&bt.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const Ut=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?z=Ut[k][X]:z=Ut[k],st=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?z=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[X]:z=Ut,T.copy(S.viewport),B.copy(S.scissor),G=S.scissorTest}else T.copy(ot).multiplyScalar(H).floor(),B.copy(pt).multiplyScalar(H).floor(),G=Ft;if(X!==0&&(z=_l),mt.bindFramebuffer(L.FRAMEBUFFER,z)&&q&&mt.drawBuffers(S,z),mt.viewport(T),mt.scissor(B),mt.setScissorTest(G),st){const St=bt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,X)}else if(ct){const St=bt.get(S.texture),Dt=k;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.__webglTexture,X,Dt)}else if(S!==null&&X!==0){const St=bt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(S,k,X,q,z,st,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){mt.bindFramebuffer(L.FRAMEBUFFER,gt);try{const St=S.texture,Dt=St.format,Ut=St.type;if(!Vt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-q&&X>=0&&X<=S.height-z&&L.readPixels(k,X,q,z,Bt.convert(Dt),Bt.convert(Ut),st)}finally{const St=C!==null?bt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(S,k,X,q,z,st,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const St=S.texture,Dt=St.format,Ut=St.type;if(!Vt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-q&&X>=0&&X<=S.height-z){mt.bindFramebuffer(L.FRAMEBUFFER,gt);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(k,X,q,z,Bt.convert(Dt),Bt.convert(Ut),0);const Kt=C!==null?bt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,Kt);const ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bc(L,ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(wt),L.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,X=0){S.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(S.image.width*q),st=Math.floor(S.image.height*q),ct=k!==null?k.x:0,gt=k!==null?k.y:0;w.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ct,gt,z,st),mt.unbindTexture()};const vl=L.createFramebuffer(),xl=L.createFramebuffer();this.copyTextureToTexture=function(S,k,X=null,q=null,z=0,st=null){S.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],k=arguments[2],st=arguments[3]||0,X=null),st===null&&(z!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=z,z=0):st=0);let ct,gt,St,Dt,Ut,wt,Kt,ee,pe;const fe=S.isCompressedTexture?S.mipmaps[st]:S.image;if(X!==null)ct=X.max.x-X.min.x,gt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Ut=X.min.y,wt=X.isBox3?X.min.z:0;else{const Ge=Math.pow(2,-z);ct=Math.floor(fe.width*Ge),gt=Math.floor(fe.height*Ge),S.isDataArrayTexture?St=fe.depth:S.isData3DTexture?St=Math.floor(fe.depth*Ge):St=1,Dt=0,Ut=0,wt=0}q!==null?(Kt=q.x,ee=q.y,pe=q.z):(Kt=0,ee=0,pe=0);const Qt=Bt.convert(k.format),Tt=Bt.convert(k.type);let Me;k.isData3DTexture?(w.setTexture3D(k,0),Me=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Me=L.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const ie=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xi=L.getParameter(L.UNPACK_SKIP_PIXELS),Fe=L.getParameter(L.UNPACK_SKIP_ROWS),Cn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);const le=S.isDataArrayTexture||S.isData3DTexture,Be=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Ge=bt.get(S),Ae=bt.get(k),Le=bt.get(Ge.__renderTarget),Us=bt.get(Ae.__renderTarget);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Le.__webglFramebuffer),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Ci=0;Ci<St;Ci++)le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(S).__webglTexture,z,wt+Ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,st,pe+Ci)),L.blitFramebuffer(Dt,Ut,ct,gt,Kt,ee,ct,gt,L.DEPTH_BUFFER_BIT,L.NEAREST);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||bt.has(S)){const Ge=bt.get(S),Ae=bt.get(k);mt.bindFramebuffer(L.READ_FRAMEBUFFER,vl),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,xl);for(let Le=0;Le<St;Le++)le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,z,wt+Le):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,z),Be?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,st,pe+Le):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,st),z!==0?L.blitFramebuffer(Dt,Ut,ct,gt,Kt,ee,ct,gt,L.COLOR_BUFFER_BIT,L.NEAREST):Be?L.copyTexSubImage3D(Me,st,Kt,ee,pe+Le,Dt,Ut,ct,gt):L.copyTexSubImage2D(Me,st,Kt,ee,Dt,Ut,ct,gt);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Be?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Me,st,Kt,ee,pe,ct,gt,St,Qt,Tt,fe.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,st,Kt,ee,pe,ct,gt,St,Qt,fe.data):L.texSubImage3D(Me,st,Kt,ee,pe,ct,gt,St,Qt,Tt,fe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,Kt,ee,ct,gt,Qt,Tt,fe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,Kt,ee,fe.width,fe.height,Qt,fe.data):L.texSubImage2D(L.TEXTURE_2D,st,Kt,ee,ct,gt,Qt,Tt,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cn),st===0&&k.generateMipmaps&&L.generateMipmap(Me),mt.unbindTexture()},this.copyTextureToTexture3D=function(S,k,X=null,q=null,z=0){return S.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,S=arguments[2],k=arguments[3],z=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,X,q,z)},this.initRenderTarget=function(S){bt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,mt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Kp{progress=0;isTransitioning=!1;duration=.8;elapsed=0;onMidpointCallback=null;onCompleteCallback=null;hasTriggeredMidpoint=!1;startTransition(t,e,i=.8){this.isTransitioning||(this.isTransitioning=!0,this.progress=0,this.elapsed=0,this.duration=i,this.onMidpointCallback=t,this.onCompleteCallback=e??null,this.hasTriggeredMidpoint=!1)}update(t){this.isTransitioning&&(this.elapsed+=t,this.progress=Math.min(1,this.elapsed/this.duration),this.progress>=.5&&!this.hasTriggeredMidpoint&&(this.hasTriggeredMidpoint=!0,this.onMidpointCallback&&this.onMidpointCallback()),this.progress>=1&&(this.isTransitioning=!1,this.progress=0,this.onCompleteCallback&&this.onCompleteCallback()))}getWipeAmount(){return this.isTransitioning?this.progress<.5?this.progress*2:(1-this.progress)*2:0}}class jp{renderer;renderTarget;internalWidth=640;internalHeight=360;blitScene;blitCamera;blitMaterial;blitQuad;transitionManager;constructor(t){this.internalWidth=t.internalWidth??640,this.internalHeight=t.internalHeight??360,this.transitionManager=new Kp,this.renderer=new Zp({canvas:t.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=No,this.renderer.outputColorSpace=xe,this.renderer.setPixelRatio(1),this.renderTarget=new Ai(this.internalWidth,this.internalHeight,{minFilter:he,magFilter:he,generateMipmaps:!1,format:We,colorSpace:xe,depthBuffer:!0,stencilBuffer:!1}),this.blitScene=new sl,this.blitCamera=new fa(-1,1,1,-1,0,1);const e=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,i=`
      uniform sampler2D tDiffuse;
      uniform vec2 uResolution;
      uniform float uWipeProgress;
      uniform float uShowCrosshair;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(tDiffuse, vUv);

        // 1. In-Engine Dynamic Color-Inverting Crosshair (Rendered in Native Pixel Grid)
        if (uShowCrosshair > 0.5) {
          vec2 pixelCoord = floor(vUv * uResolution);
          vec2 center = floor(uResolution * 0.5);
          vec2 d = abs(pixelCoord - center);

          // 4 ticks: 1 pixel wide, 5 pixels long, 2 pixel gap from center
          bool isVerticalTick = (d.x == 0.0 && d.y >= 2.0 && d.y <= 6.0);
          bool isHorizontalTick = (d.y == 0.0 && d.x >= 2.0 && d.x <= 6.0);

          if (isVerticalTick || isHorizontalTick) {
            color.rgb = abs(vec3(1.0) - color.rgb);
          }
        }

        // 2. Retro Diamond-Grid Screen-Wipe Transition Effect
        if (uWipeProgress > 0.001) {
          vec2 gridCount = vec2(32.0, 18.0);
          vec2 cellUv = fract(vUv * gridCount);
          vec2 cellIndex = floor(vUv * gridCount);

          float stagger = (cellIndex.x + cellIndex.y) / (gridCount.x + gridCount.y) * 0.3;
          float adjustedProgress = clamp((uWipeProgress - stagger * 0.5) / (1.0 - 0.5 * 0.3), 0.0, 1.0);
          float diamondDist = abs(cellUv.x - 0.5) + abs(cellUv.y - 0.5);

          if (diamondDist < adjustedProgress * 1.1) {
            color = vec4(0.03, 0.02, 0.05, 1.0);
          }
        }

        gl_FragColor = color;
      }
    `;this.blitMaterial=new pi({uniforms:{tDiffuse:{value:this.renderTarget.texture},uResolution:{value:new Xt(this.internalWidth,this.internalHeight)},uWipeProgress:{value:0},uShowCrosshair:{value:1}},vertexShader:e,fragmentShader:i,depthTest:!1,depthWrite:!1});const n=new Ee(2,2);this.blitQuad=new D(n,this.blitMaterial),this.blitScene.add(this.blitQuad),this.resize()}setCrosshairVisible(t){this.blitMaterial.uniforms.uShowCrosshair.value=t?1:0}setResolution(t,e){this.internalWidth=t,this.internalHeight=e,this.renderTarget.setSize(t,e),this.blitMaterial.uniforms.uResolution.value.set(t,e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1)}render(t,e,i){this.transitionManager.update(i),this.blitMaterial.uniforms.uWipeProgress.value=this.transitionManager.getWipeAmount(),this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCamera)}}class Si{root;camera;perspective="FPP";mouseSensitivity=1;fov=72;targetPosition=new U;currentPosition=new U;yaw=0;targetYaw=0;pitch=0;targetPitch=0;distance=14;targetDistance=14;minDistance=4;maxDistance=26;followSpeed=18;rotateSpeed=2.5;isDraggingRightMouse=!1;previousMouseX=0;previousMouseY=0;static MAX_PITCH=Math.PI/2-.08;constructor(t={}){this.perspective=t.perspective??"FPP",this.mouseSensitivity=t.mouseSensitivity??1,this.fov=t.fov??72,this.root=new Pt,this.root.name="CameraRigRoot",this.camera=new Ie(this.fov,16/9,.05,250),this.camera.name="MainCamera",this.camera.rotation.order="YXZ",this.root.add(this.camera),this.setPerspective(this.perspective,!0),this.bindInputs()}setFov(t){this.fov=ke.clamp(t,40,100),this.camera.fov=this.fov,this.camera.updateProjectionMatrix()}setPerspective(t,e=!1){this.perspective=t,t==="FPP"?(this.targetDistance=0,this.distance=0,this.camera.fov=this.fov,this.camera.near=.05,this.camera.updateProjectionMatrix()):(this.targetDistance=14,e&&(this.distance=14),this.camera.fov=this.fov,this.camera.near=.1,this.camera.updateProjectionMatrix()),this.updateRigTransforms()}setMouseSensitivity(t){this.mouseSensitivity=ke.clamp(t,.2,5)}updateRigTransforms(){const t=Math.cos(this.pitch),e=Math.sin(this.pitch),i=Math.cos(this.yaw),s=-Math.sin(this.yaw)*t,a=e,o=-i*t;if(this.perspective==="FPP")this.camera.position.set(this.targetPosition.x,this.targetPosition.y,this.targetPosition.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");else{const l=this.currentPosition;this.camera.position.set(l.x-s*this.distance,l.y-a*this.distance,l.z-o*this.distance),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}bindInputs(){window.addEventListener("mousemove",t=>{if(document.pointerLockElement!==null)this.yaw-=t.movementX*this.mouseSensitivity*.002,this.pitch-=t.movementY*this.mouseSensitivity*.002,this.pitch=Math.max(-Si.MAX_PITCH,Math.min(Si.MAX_PITCH,this.pitch)),this.targetYaw=this.yaw,this.targetPitch=this.pitch,this.updateRigTransforms();else if(this.perspective==="TPP"&&this.isDraggingRightMouse){const i=t.clientX-this.previousMouseX,n=t.clientY-this.previousMouseY;this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,this.targetYaw-=i*.006*this.mouseSensitivity,this.targetPitch-=n*.006*this.mouseSensitivity,this.targetPitch=Math.max(-Si.MAX_PITCH,Math.min(Si.MAX_PITCH,this.targetPitch)),this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.updateRigTransforms()}}),window.addEventListener("mousedown",t=>{this.perspective==="TPP"&&t.button===2&&(this.isDraggingRightMouse=!0,this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,t.preventDefault())}),window.addEventListener("mouseup",t=>{t.button===2&&(this.isDraggingRightMouse=!1)}),window.addEventListener("contextmenu",t=>{t.preventDefault()}),window.addEventListener("wheel",t=>{this.perspective==="TPP"&&(this.targetDistance+=Math.sign(t.deltaY)*1.5,this.targetDistance=ke.clamp(this.targetDistance,this.minDistance,this.maxDistance))},{passive:!0})}setTarget(t,e,i){this.perspective==="FPP"?this.targetPosition.set(t,e+1.65,i):this.targetPosition.set(t,e+1.2,i)}getYaw(){return this.yaw}getPitch(){return this.pitch}update(t,e=0,i=0,n=!1,s=!1){const a=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;n&&(this.targetYaw+=this.rotateSpeed*a),s&&(this.targetYaw-=this.rotateSpeed*a),Math.abs(e)>.15&&(this.targetYaw-=e*this.rotateSpeed*a*1.5),Math.abs(i)>.15&&(this.targetPitch-=i*this.rotateSpeed*a*1.2,this.targetPitch=Math.max(-Si.MAX_PITCH,Math.min(Si.MAX_PITCH,this.targetPitch))),this.perspective==="FPP"?(this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.currentPosition.copy(this.targetPosition)):(this.yaw=ke.damp(this.yaw,this.targetYaw,16,a),this.pitch=ke.damp(this.pitch,this.targetPitch,16,a),this.distance=ke.damp(this.distance,this.targetDistance,14,a),this.currentPosition.copy(this.targetPosition)),this.updateRigTransforms()}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}}class Jp{scene;mode="surface";hemiLight;dirLight;dirLightTarget;librarySunLight;librarySunTarget;dungeonAmbient;surfaceFog;dungeonFog;libraryFog;surfaceBgColor=new zt(9159658);dungeonBgColor=new zt(657426);libraryBgColor=new zt(525836);constructor(t){this.scene=t,this.hemiLight=new nh(16775917,4010020,.95),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new to(16775126,1.8),this.dirLight.position.set(28,42,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.bias=-5e-4;const e=26;this.dirLight.shadow.camera.left=-e,this.dirLight.shadow.camera.right=e,this.dirLight.shadow.camera.top=e,this.dirLight.shadow.camera.bottom=-e,this.dirLightTarget=new de,this.scene.add(this.dirLightTarget),this.dirLight.target=this.dirLightTarget,this.scene.add(this.dirLight),this.librarySunLight=new to(16772822,2.4),this.librarySunLight.position.set(0,24,38),this.librarySunLight.castShadow=!0,this.librarySunLight.shadow.mapSize.width=2048,this.librarySunLight.shadow.mapSize.height=2048,this.librarySunLight.shadow.camera.near=1,this.librarySunLight.shadow.camera.far=85,this.librarySunLight.shadow.bias=-.001;const i=26;this.librarySunLight.shadow.camera.left=-i,this.librarySunLight.shadow.camera.right=i,this.librarySunLight.shadow.camera.top=i,this.librarySunLight.shadow.camera.bottom=-i,this.librarySunTarget=new de,this.librarySunTarget.position.set(0,2,16),this.scene.add(this.librarySunTarget),this.librarySunLight.target=this.librarySunTarget,this.scene.add(this.librarySunLight),this.dungeonAmbient=new lh(3286072,.25),this.scene.add(this.dungeonAmbient),this.surfaceFog=new ha(9159658,.01),this.dungeonFog=new Ps(394510,18,95),this.libraryFog=new Ps(525836,22,75),this.setMode("surface")}setMode(t){this.mode=t,t==="surface"?(this.scene.background=this.surfaceBgColor,this.scene.fog=this.surfaceFog,this.hemiLight.color.setHex(16775917),this.hemiLight.groundColor.setHex(4010020),this.hemiLight.intensity=.95,this.dirLight.intensity=1.8,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=.1,this.dungeonAmbient.color.setHex(4997726)):t==="dungeon"?(this.scene.background=this.dungeonBgColor,this.scene.fog=this.dungeonFog,this.hemiLight.color.setHex(5918832),this.hemiLight.groundColor.setHex(2761248),this.hemiLight.intensity=.35,this.dirLight.intensity=0,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=1.2,this.dungeonAmbient.color.setHex(4997726)):(this.scene.background=this.libraryBgColor,this.scene.fog=this.libraryFog,this.hemiLight.color.setHex(4339792),this.hemiLight.groundColor.setHex(1577488),this.hemiLight.intensity=.28,this.dirLight.intensity=0,this.librarySunLight.intensity=2.4,this.dungeonAmbient.intensity=.25,this.dungeonAmbient.color.setHex(3286072))}updateSunPosition(t){this.mode==="surface"&&(this.dirLight.position.set(t.x+28,t.y+42,t.z+20),this.dirLightTarget.position.copy(t))}}class Qp{textures;materials;constructor(){this.initTextures(),this.initMaterials()}createCanvas(t=16,e=16){const i=document.createElement("canvas");i.width=t,i.height=e;const n=i.getContext("2d",{willReadFrequently:!0});return n.imageSmoothingEnabled=!1,[i,n]}wrapTexture(t){const e=new ws(t);return e.magFilter=he,e.minFilter=he,e.generateMipmaps=!1,e.colorSpace=xe,e.wrapS=Vn,e.wrapT=Vn,e}initTextures(){const[t,e]=this.createCanvas(16,16),i=["#4d8234","#559138","#42702c","#5da33e","#3c6427"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();e.fillStyle=N>.8?i[3]:N>.5?i[1]:N>.2?i[0]:i[2],e.fillRect(O,I,1,1)}e.fillStyle="#6ab847",e.fillRect(3,4,1,2),e.fillRect(11,2,1,2),e.fillRect(8,12,1,2),e.fillRect(14,9,1,2);const[n,s]=this.createCanvas(16,16),a=["#6e4c29","#5e3e20","#7a552e","#52361b","#855d33"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();s.fillStyle=N>.6?a[0]:N>.3?a[1]:N>.1?a[2]:a[3],s.fillRect(O,I,1,1)}for(let I=0;I<16;I++){const O=I%3===0?4:I%2===0?3:2;for(let N=0;N<O;N++)s.fillStyle=N===0?"#5da33e":"#4d8234",s.fillRect(I,N,1,1);I*7%5===0&&O<5&&(s.fillStyle="#3c6427",s.fillRect(I,O,1,1))}const[o,l]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();l.fillStyle=N>.7?a[4]:N>.4?a[0]:N>.2?a[1]:a[3],l.fillRect(O,I,1,1)}l.fillStyle="#9e7347",l.fillRect(4,7,2,1),l.fillRect(11,12,1,2);const[c,h]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin(O*.5)*Math.cos(I*.5);h.fillStyle=N>.3?"#6e7480":N>-.3?"#585e6a":"#494e58",h.fillRect(O,I,1,1)}h.fillStyle="#262930",h.fillRect(0,0,32,1),h.fillRect(0,16,32,1),h.fillRect(0,0,1,16),h.fillRect(16,0,1,16),h.fillRect(8,16,1,16),h.fillRect(24,16,1,16),h.fillStyle="#828896",h.fillRect(1,1,14,1),h.fillRect(17,1,14,1),h.fillRect(9,17,14,1),h.fillRect(25,17,6,1);const[u,d]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();d.fillStyle=N>.6?"#6e737d":N>.3?"#5b606a":"#4e525a",d.fillRect(O,I,1,1)}d.fillStyle="#383b42",d.fillRect(2,2,4,1),d.fillRect(2,2,1,4),d.fillRect(8,6,5,1),d.fillRect(8,6,1,4),d.fillRect(3,10,4,1),d.fillRect(11,12,4,1);const[f,g]=this.createCanvas(16,16),_=["#8d633b","#7a5430","#9c6f44","#6c4929"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();g.fillStyle=N>.7?_[2]:N>.4?_[0]:N>.2?_[1]:_[3],g.fillRect(O,I,1,1)}g.fillStyle="#4a3018",g.fillRect(0,0,16,1),g.fillRect(0,4,16,1),g.fillRect(0,8,16,1),g.fillRect(0,12,16,1),g.fillRect(5,0,1,4),g.fillRect(11,4,1,4),g.fillRect(3,8,1,4),g.fillRect(13,12,1,4);const[m,p]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();p.fillStyle=N>.5?"#5c3d21":"#4d3219",p.fillRect(O,I,1,1)}p.fillStyle="#3b2512",p.fillRect(0,0,16,2),p.fillRect(0,14,16,2),p.fillRect(0,0,2,16),p.fillRect(14,0,2,16);const[E,b]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();b.fillStyle=N>.7?"#2a6ec4":N>.4?"#215aa4":"#1a4987",b.fillRect(O,I,1,1)}b.fillStyle="#5dade2",b.fillRect(2,3,4,1),b.fillRect(10,7,5,1),b.fillRect(4,12,6,1),b.fillRect(12,14,3,1);const[M,P]=this.createCanvas(16,16),R=["#d8be7b","#ccb06e","#dfc788","#bfa260"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();P.fillStyle=N>.7?R[2]:N>.4?R[0]:N>.2?R[1]:R[3],P.fillRect(O,I,1,1)}const[A,C]=this.createCanvas(32,32);C.fillStyle="#80141a",C.fillRect(0,0,32,32);for(let I=0;I<32;I+=2)for(let O=0;O<32;O+=2)C.fillStyle=(O+I)%4===0?"#680e14":"#941920",C.fillRect(O,I,1,1);C.fillStyle="#d4af37",C.fillRect(2,2,28,1),C.fillRect(2,29,28,1),C.fillRect(2,2,1,28),C.fillRect(29,2,1,28),C.fillStyle="#ffd700",C.fillRect(4,4,24,1),C.fillRect(4,27,24,1),C.fillRect(4,4,1,24),C.fillRect(27,4,1,24),C.fillStyle="#ffd700",C.fillRect(15,12,2,8),C.fillRect(12,15,8,2),C.fillRect(14,14,4,4);const[y,v]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();v.fillStyle=N>.6?"#545863":N>.3?"#42454f":"#33363f",v.fillRect(O,I,1,1)}v.fillStyle="#787d8c",v.fillRect(1,1,14,1),v.fillRect(1,1,1,14);const[T,B]=this.createCanvas(16,16);B.fillStyle="#2d4b3b",B.fillRect(0,0,16,16),B.fillStyle="#e8e8e8",B.fillRect(2,1,12,4),B.fillStyle="#c4c4c4",B.fillRect(2,4,12,1),B.fillStyle="#22382c",B.fillRect(0,6,16,1),B.fillStyle="#39604b",B.fillRect(0,7,16,1);const[G,V]=this.createCanvas(16,16);V.fillStyle="#754a24",V.fillRect(0,0,16,16),V.fillStyle="#ffe9b3",V.fillRect(2,2,12,12),V.fillStyle="#8b6534",V.fillRect(8,2,1,12),V.fillRect(2,8,12,1);const[$,Y]=this.createCanvas(16,16);Y.fillStyle="#d4be88",Y.fillRect(0,0,16,16),Y.fillStyle="#8a5d2a",Y.fillRect(0,0,16,1),Y.fillRect(0,15,16,1),Y.fillStyle="#4a351d",Y.fillRect(3,4,5,3),Y.fillRect(4,7,6,2);const[K,H]=this.createCanvas(16,16);H.fillStyle="#362112",H.fillRect(0,0,16,16),H.fillStyle="#201208",H.fillRect(0,0,16,1),H.fillRect(0,7,16,2),H.fillRect(0,15,16,1);const nt=["#8b181e","#1c3761","#1d5334","#542d17","#521c63","#222226","#8c6227"];let et=1;for(;et<15;){const I=et%2===0?2:1,O=5+Math.floor(Math.sin(et*3)*1.5),N=nt[et*3%nt.length];H.fillStyle=N,H.fillRect(et,7-O,I,O),et%3===0&&(H.fillStyle="#ffd700",H.fillRect(et,7-O+1,I,1),H.fillRect(et,5,I,1)),et+=I}for(et=1;et<15;){const I=et%3===0?2:1,O=5+Math.floor(Math.cos(et*4)*1.5),N=nt[(et*5+2)%nt.length];H.fillStyle=N,H.fillRect(et,15-O,I,O),et%2===0&&(H.fillStyle="#e5b84c",H.fillRect(et,15-O+1,I,1)),et+=I}const[ot,pt]=this.createCanvas(16,16);pt.fillStyle="#22142a",pt.fillRect(0,0,16,16),pt.fillStyle="#140a1c",pt.fillRect(0,0,16,2),pt.fillRect(0,7,16,2),pt.fillRect(0,14,16,2);const Ft=["#162d4d","#421654","#591624","#164d40","#9c6f14"];for(let I=1;I<15;I+=2)pt.fillStyle=Ft[I*2%Ft.length],pt.fillRect(I,2,2,5),pt.fillRect(I,9,2,5),pt.fillStyle="#8ce8ff",pt.fillRect(I+1,4,1,1),pt.fillStyle="#ffd269",pt.fillRect(I,11,1,1);const[J,Z]=this.createCanvas(32,64);Z.fillStyle="#142247",Z.fillRect(0,0,32,60),Z.fillStyle="#d4af37",Z.fillRect(2,2,28,2),Z.fillRect(2,2,2,56),Z.fillRect(28,2,2,56),Z.fillStyle="#ffd700",Z.fillRect(4,4,24,1),Z.fillRect(4,4,1,52),Z.fillRect(27,4,1,52),Z.fillStyle="#0b1329",Z.fillRect(0,60,16,4),Z.fillRect(16,60,16,4),Z.clearRect(8,56,16,8),Z.fillStyle="#f5cb42",Z.fillRect(2,58,4,6),Z.fillRect(26,58,4,6),Z.fillStyle="#ffffff",Z.fillRect(12,10,8,3),Z.fillRect(10,8,3,2),Z.fillRect(15,8,2,2),Z.fillRect(19,8,3,2),Z.fillStyle="#ffd700",Z.fillRect(11,13,10,8),Z.fillRect(9,15,3,4),Z.fillRect(20,15,3,4),Z.fillRect(13,21,6,14),Z.fillRect(7,17,5,4),Z.fillRect(5,15,3,3),Z.fillRect(9,23,5,3),Z.fillRect(5,24,4,3),Z.fillRect(11,35,4,8),Z.fillRect(7,41,6,4),Z.fillRect(17,35,6,6),Z.fillRect(21,39,5,4),Z.fillRect(19,25,2,8),Z.fillRect(21,23,4,4),Z.fillRect(25,19,4,6);const[dt,Q]=this.createCanvas(32,64);Q.fillStyle="#6e1218",Q.fillRect(0,0,32,60),Q.fillStyle="#d4af37",Q.fillRect(2,2,28,2),Q.fillRect(2,2,2,56),Q.fillRect(28,2,2,56),Q.fillStyle="#ffd700",Q.fillRect(4,4,24,1),Q.fillRect(4,4,1,52),Q.fillRect(27,4,1,52),Q.fillStyle="#42090d",Q.fillRect(0,60,16,4),Q.fillRect(16,60,16,4),Q.clearRect(8,56,16,8),Q.fillStyle="#f5cb42",Q.fillRect(2,58,4,6),Q.fillRect(26,58,4,6),Q.fillStyle="#ffd700",Q.fillRect(14,10,4,36),Q.fillRect(8,18,16,4),Q.fillRect(12,8,8,2),Q.fillRect(12,46,8,2),Q.fillRect(6,16,2,8),Q.fillRect(24,16,2,8),Q.fillStyle="#8ae5ff",Q.fillRect(15,19,2,2);const[yt,Rt]=this.createCanvas(32,64);Rt.fillStyle="#181b22",Rt.fillRect(0,0,32,64);const Et=["#ad1f1f","#19498a","#1e7345","#c29219","#631f7d","#1f7d73"];for(let I=4;I<60;I+=4)for(let O=4;O<28;O+=4)Rt.fillStyle=Et[(O*3+I*5)%Et.length],Rt.fillRect(O,I,3,3);Rt.fillStyle="#0f1116",Rt.fillRect(0,0,32,4),Rt.fillRect(0,60,32,4),Rt.fillRect(0,0,4,64),Rt.fillRect(28,0,4,64),Rt.fillRect(14,0,4,64),Rt.fillRect(0,30,32,4);const[ce,kt]=this.createCanvas(32,32);kt.fillStyle="#6e7482",kt.fillRect(0,0,16,16),kt.fillRect(16,16,16,16),kt.fillStyle="#454a54",kt.fillRect(16,0,16,16),kt.fillRect(0,16,16,16),kt.fillStyle="#858b99",kt.fillRect(3,4,4,1),kt.fillRect(6,9,5,1),kt.fillRect(19,20,5,1),kt.fillRect(24,25,4,1),kt.fillStyle="#21242b",kt.fillRect(0,0,32,1),kt.fillRect(0,16,32,1),kt.fillRect(0,0,1,32),kt.fillRect(16,0,1,32);const[Ht,L]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=O%8;let _t="#616773";N===0?_t="#363a42":N===1?_t="#4a505c":N===2||N===3?_t="#7a8190":N===4?_t="#8c93a3":N===5||N===6?_t="#6b7280":_t="#424752",L.fillStyle=_t,L.fillRect(O,I,1,1)}L.fillStyle="#2c3038",L.fillRect(0,0,32,2),L.fillRect(0,30,32,2);const[Pe,At]=this.createCanvas(32,32);At.fillStyle="#1c3e66",At.fillRect(0,0,32,32),At.fillStyle="#947a46",At.fillRect(5,6,9,8),At.fillRect(4,10,8,10),At.fillRect(18,8,10,7),At.fillRect(20,16,8,10),At.fillStyle="#e5b84c",At.fillRect(0,15,32,2),At.fillRect(15,0,2,32),At.fillStyle="#ffffff",At.fillRect(8,4,1,1),At.fillRect(24,6,1,1),At.fillRect(10,26,1,1),At.fillRect(26,24,1,1);const[Vt,mt]=this.createCanvas(16,16);mt.fillStyle="#c7b28b",mt.fillRect(0,0,16,16),mt.fillStyle="#614620",mt.fillRect(0,0,16,1),mt.fillRect(0,15,16,1),mt.fillRect(0,0,1,16),mt.fillRect(15,0,1,16),mt.fillStyle="#3b250d",mt.fillRect(3,4,10,2),mt.fillRect(4,8,8,2),mt.fillRect(5,12,6,2);const Jt=I=>{const[O,N]=this.createCanvas(64,16);return N.fillStyle="#261408",N.fillRect(0,0,64,16),N.fillStyle="#a87d3b",N.fillRect(1,1,62,14),N.fillStyle="#1c0d05",N.fillRect(2,2,60,12),N.fillStyle="#fce59f",N.font="bold 9px monospace",N.textAlign="center",N.textBaseline="middle",N.fillText(I,32,8),this.wrapTexture(O)},[bt,w]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin(I*.8+O*.1);w.fillStyle=N>.4?"#3d2515":N>-.3?"#2e1b0e":"#221308",w.fillRect(O,I,1,1)}w.fillStyle="#150a04",w.fillRect(0,0,32,1),w.fillRect(0,31,32,1);const[x,W]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin((O+I)*.3);W.fillStyle=N>.5?"#f3cb62":N>0?"#d4a337":"#9e731b",W.fillRect(O,I,1,1)}W.fillStyle="#fff0a6",W.fillRect(0,0,32,2),this.textures={grassTop:this.wrapTexture(t),grassSide:this.wrapTexture(n),dirt:this.wrapTexture(o),stoneBrick:this.wrapTexture(c),cobblestone:this.wrapTexture(u),woodPlanks:this.wrapTexture(f),woodBeam:this.wrapTexture(m),water:this.wrapTexture(E),sand:this.wrapTexture(M),carpetRed:this.wrapTexture(A),iron:this.wrapTexture(y),bedGreen:this.wrapTexture(T),windowLattice:this.wrapTexture(G),mapScroll:this.wrapTexture($),bookshelfDense:this.wrapTexture(K),bookshelfRare:this.wrapTexture(ot),heraldicLionBanner:this.wrapTexture(J),heraldicCrossBanner:this.wrapTexture(dt),stainedGlassGothic:this.wrapTexture(yt),stoneTileFloor:this.wrapTexture(ce),carvedStonePillar:this.wrapTexture(Ht),globeTexture:this.wrapTexture(Pe),inscriptionPlaque:this.wrapTexture(Vt),plaqueHistoria:Jt("HISTORIA"),plaquePhilosophia:Jt("PHILOSOPHIA"),plaqueScientia:Jt("SCIENTIA"),plaqueTheologia:Jt("THEOLOGIA"),plaqueArcanum:Jt("ARCANUM"),plaqueMythologia:Jt("MYTHOLOGIA"),darkOak:this.wrapTexture(bt),brassMetal:this.wrapTexture(x)}}initMaterials(){this.materials={grassTop:new Lt({map:this.textures.grassTop,roughness:.85,metalness:.05,side:Wt}),grassSide:new Lt({map:this.textures.grassSide,roughness:.85,metalness:.05,side:Wt}),dirt:new Lt({map:this.textures.dirt,roughness:.95,metalness:0,side:Wt}),stoneBrick:new Lt({map:this.textures.stoneBrick,roughness:.65,metalness:.1,side:Wt}),cobblestone:new Lt({map:this.textures.cobblestone,roughness:.85,metalness:.1,side:Wt}),woodPlanks:new Lt({map:this.textures.woodPlanks,roughness:.65,metalness:.05,side:Wt}),woodBeam:new Lt({map:this.textures.woodBeam,roughness:.7,metalness:.05,side:Wt}),water:new Lt({map:this.textures.water,roughness:.1,metalness:.1,transparent:!0,opacity:.8}),sand:new Lt({map:this.textures.sand,roughness:.9,metalness:0}),carpetRed:new Lt({map:this.textures.carpetRed,roughness:.75,metalness:.15,side:Wt}),iron:new Lt({map:this.textures.iron,roughness:.45,metalness:.7}),bedGreen:new Lt({map:this.textures.bedGreen,roughness:.8,metalness:0}),windowLattice:new Lt({map:this.textures.windowLattice,roughness:.5,metalness:.1,transparent:!0}),mapScroll:new Lt({map:this.textures.mapScroll,roughness:.9,metalness:0,side:Wt}),bookshelfDense:new Lt({map:this.textures.bookshelfDense,roughness:.6,metalness:.15}),bookshelfRare:new Lt({map:this.textures.bookshelfRare,roughness:.5,metalness:.25}),heraldicLionBanner:new Lt({map:this.textures.heraldicLionBanner,roughness:.6,metalness:.2,side:Wt}),heraldicCrossBanner:new Lt({map:this.textures.heraldicCrossBanner,roughness:.6,metalness:.2,side:Wt}),stainedGlassGothic:new Lt({map:this.textures.stainedGlassGothic,roughness:.15,metalness:.1,transparent:!0,opacity:.92,side:Wt,emissive:new zt(16772822),emissiveIntensity:.35}),stoneTileFloor:new Lt({map:this.textures.stoneTileFloor,roughness:.55,metalness:.12,side:Wt}),carvedStonePillar:new Lt({map:this.textures.carvedStonePillar,roughness:.6,metalness:.1,side:Wt}),globeTexture:new Lt({map:this.textures.globeTexture,roughness:.4,metalness:.25,emissive:new zt(13938487),emissiveIntensity:.15}),inscriptionPlaque:new Lt({map:this.textures.inscriptionPlaque,roughness:.6,metalness:.2,side:Wt}),plaqueHistoria:new Lt({map:this.textures.plaqueHistoria,roughness:.5,metalness:.3,side:Wt}),plaquePhilosophia:new Lt({map:this.textures.plaquePhilosophia,roughness:.5,metalness:.3,side:Wt}),plaqueScientia:new Lt({map:this.textures.plaqueScientia,roughness:.5,metalness:.3,side:Wt}),plaqueTheologia:new Lt({map:this.textures.plaqueTheologia,roughness:.5,metalness:.3,side:Wt}),plaqueArcanum:new Lt({map:this.textures.plaqueArcanum,roughness:.5,metalness:.3,side:Wt}),plaqueMythologia:new Lt({map:this.textures.plaqueMythologia,roughness:.5,metalness:.3,side:Wt}),darkOak:new Lt({map:this.textures.darkOak,roughness:.6,metalness:.08,side:Wt}),brassMetal:new Lt({map:this.textures.brassMetal,roughness:.35,metalness:.65,side:Wt})}}}const fl=Math.sqrt(3),tm=.5*(fl-1),On=(3-fl)/6,Po=r=>Math.floor(r)|0,Lo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Io(r=Math.random){const t=em(r),e=new Float64Array(t).map(n=>Lo[n%12*2]),i=new Float64Array(t).map(n=>Lo[n%12*2+1]);return function(s,a){let o=0,l=0,c=0;const h=(s+a)*tm,u=Po(s+h),d=Po(a+h),f=(u+d)*On,g=u-f,_=d-f,m=s-g,p=a-_;let E,b;m>p?(E=1,b=0):(E=0,b=1);const M=m-E+On,P=p-b+On,R=m-1+2*On,A=p-1+2*On,C=u&255,y=d&255;let v=.5-m*m-p*p;if(v>=0){const G=C+t[y],V=e[G],$=i[G];v*=v,o=v*v*(V*m+$*p)}let T=.5-M*M-P*P;if(T>=0){const G=C+E+t[y+b],V=e[G],$=i[G];T*=T,l=T*T*(V*M+$*P)}let B=.5-R*R-A*A;if(B>=0){const G=C+1+t[y+1],V=e[G],$=i[G];B*=B,c=B*B*(V*R+$*A)}return 70*(o+l+c)}}function em(r){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const n=i+~~(r()*(256-i)),s=e[i];e[i]=e[n],e[n]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}class im{noise2D;moistureNoise2D;baseFrequency=.015;octaves=4;persistence=.5;lacunarity=2;heightScale=10;stepHeight=1;waterLevel=1;constructor(t=12345){const e=this.createPrng(t);this.noise2D=Io(e),this.moistureNoise2D=Io(this.createPrng(t+9999))}createPrng(t){let e=t%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}getSample(t,e){let i=1,n=this.baseFrequency,s=0,a=0;for(let m=0;m<this.octaves;m++)s+=this.noise2D(t*n,e*n)*i,a+=i,i*=this.persistence,n*=this.lacunarity;const o=(s/a+1)*.5,c=Math.pow(o,1.3)*this.heightScale,h=Math.floor(c/this.stepHeight),u=Math.max(0,h*this.stepHeight),d=u<=this.waterLevel,f=d?this.waterLevel:u,g=(this.moistureNoise2D(t*.01,e*.01)+1)*.5;let _="grass";return d?_="water":u===this.waterLevel+this.stepHeight&&g<.4?_="sand":u>=10?_="snow":u>=9?_="stone":_="grass",{height:f,rawHeight:c,biome:_,isWater:d}}}class nm{chunkX;chunkZ;size;group;meshGroup;noise;atlas;constructor(t,e,i,n,s){this.chunkX=t,this.chunkZ=e,this.size=i,this.noise=n,this.atlas=s,this.group=new Pt,this.meshGroup=new Pt,this.group.add(this.meshGroup),this.buildChunk()}buildChunk(){const t=this.chunkX*this.size,e=this.chunkZ*this.size,i=[],n=[];for(let l=-1;l<=this.size;l++){i[l+1]=[],n[l+1]=[];for(let c=-1;c<=this.size;c++){const h=this.noise.getSample(t+c,e+l);i[l+1][c+1]=h.height,n[l+1][c+1]=h.biome}}const s={grassTop:{positions:[],uvs:[],normals:[]},grassSide:{positions:[],uvs:[],normals:[]},dirt:{positions:[],uvs:[],normals:[]},stone:{positions:[],uvs:[],normals:[]},sand:{positions:[],uvs:[],normals:[]},water:{positions:[],uvs:[],normals:[]}},a=(l,c,h,u,d,f,g=[1,1])=>{const _=s[l];_&&(_.positions.push(...c,...h,...u),_.normals.push(...f,...f,...f),_.uvs.push(0,0,0,g[1],g[0],g[1]),_.positions.push(...c,...u,...d),_.normals.push(...f,...f,...f),_.uvs.push(0,0,g[0],g[1],g[0],0))};for(let l=0;l<this.size;l++)for(let c=0;c<this.size;c++){const h=i[l+1][c+1],u=n[l+1][c+1],d=t+c,f=e+l;let g="grassTop";u==="water"?g="water":u==="sand"?g="sand":g="grassTop",a(g,[d,h,f],[d,h,f+1],[d+1,h,f+1],[d+1,h,f],[0,1,0],[1,1]);const _=i[l][c+1];if(h>_){const b=h-_,M=u==="stone"?"stone":b>1?"dirt":"grassSide";a(M,[d+1,h,f],[d+1,_,f],[d,_,f],[d,h,f],[0,0,-1],[1,b])}const m=i[l+2][c+1];if(h>m){const b=h-m,M=u==="stone"?"stone":b>1?"dirt":"grassSide";a(M,[d,h,f+1],[d,m,f+1],[d+1,m,f+1],[d+1,h,f+1],[0,0,1],[1,b])}const p=i[l+1][c];if(h>p){const b=h-p,M=u==="stone"?"stone":b>1?"dirt":"grassSide";a(M,[d,h,f],[d,p,f],[d,p,f+1],[d,h,f+1],[-1,0,0],[1,b])}const E=i[l+1][c+2];if(h>E){const b=h-E,M=u==="stone"?"stone":b>1?"dirt":"grassSide";a(M,[d+1,h,f+1],[d+1,E,f+1],[d+1,E,f],[d+1,h,f],[1,0,0],[1,b])}if(u==="grass"&&h>this.noise.waterLevel){const b=Math.sin(d*12.9898+f*78.233)*43758.5453,M=b-Math.floor(b);M>.94?this.createPineTree(d+.5,h,f+.5):M>.88&&M<=.9&&this.createBoulder(d+.5,h,f+.5)}}const o={grassTop:this.atlas.materials.grassTop,grassSide:this.atlas.materials.grassSide,dirt:this.atlas.materials.dirt,stone:this.atlas.materials.cobblestone,sand:this.atlas.materials.sand,water:this.atlas.materials.water};for(const[l,c]of Object.entries(s)){if(c.positions.length===0)continue;const h=new Te;h.setAttribute("position",new re(c.positions,3)),h.setAttribute("normal",new re(c.normals,3)),h.setAttribute("uv",new re(c.uvs,2));const u=new D(h,o[l]);u.castShadow=l!=="water",u.receiveShadow=!0,this.meshGroup.add(u)}}createPineTree(t,e,i){const n=new it(.35,1.2,.35),s=new D(n,this.atlas.materials.woodBeam);s.position.set(t,e+.6,i),s.castShadow=!0,s.receiveShadow=!0,this.meshGroup.add(s);const a=[{size:1.4,h:.7,py:1.3},{size:1,h:.6,py:1.8},{size:.6,h:.6,py:2.3}];for(const o of a){const l=new it(o.size,o.h,o.size),c=new D(l,this.atlas.materials.grassTop);c.position.set(t,e+o.py,i),c.castShadow=!0,c.receiveShadow=!0,this.meshGroup.add(c)}}createBoulder(t,e,i){const n=new it(.7,.5,.7),s=new D(n,this.atlas.materials.cobblestone);s.position.set(t,e+.25,i),s.castShadow=!0,s.receiveShadow=!0,this.meshGroup.add(s)}dispose(){this.meshGroup.traverse(t=>{t instanceof D&&t.geometry.dispose()}),this.group.clear()}}class sm{scene;noise;atlas;chunkSize=16;renderRadius=3;activeChunks=new Map;container;constructor(t,e){this.scene=t,this.atlas=e,this.noise=new im(42),this.container=new Pt,this.container.name="SurfaceWorld",this.scene.add(this.container)}update(t,e){const i=Math.floor(t/this.chunkSize),n=Math.floor(e/this.chunkSize),s=new Set;for(let a=-this.renderRadius;a<=this.renderRadius;a++)for(let o=-this.renderRadius;o<=this.renderRadius;o++){const l=i+o,c=n+a,h=`${l},${c}`;if(s.add(h),!this.activeChunks.has(h)){const u=new nm(l,c,this.chunkSize,this.noise,this.atlas);this.activeChunks.set(h,u),this.container.add(u.group)}}for(const[a,o]of this.activeChunks.entries())s.has(a)||(this.container.remove(o.group),o.dispose(),this.activeChunks.delete(a))}getElevation(t,e){return this.noise.getSample(t,e).height}setVisible(t){this.container.visible=t}}class dn{rect;left=null;right=null;room=null;constructor(t){this.rect=t}isLeaf(){return!this.left&&!this.right}split(t){if(!this.isLeaf())return!1;let e=Math.random()>.5;this.rect.w>this.rect.h&&this.rect.w/this.rect.h>=1.25?e=!1:this.rect.h>this.rect.w&&this.rect.h/this.rect.w>=1.25&&(e=!0);const i=(e?this.rect.h:this.rect.w)-t;if(i<=t)return!1;const n=Math.floor(t+Math.random()*(i-t));return e?(this.left=new dn({x:this.rect.x,z:this.rect.z,w:this.rect.w,h:n}),this.right=new dn({x:this.rect.x,z:this.rect.z+n,w:this.rect.w,h:this.rect.h-n})):(this.left=new dn({x:this.rect.x,z:this.rect.z,w:n,h:this.rect.h}),this.right=new dn({x:this.rect.x+n,z:this.rect.z,w:this.rect.w-n,h:this.rect.h})),!0}createRooms(t,e){const i=[];let n=0;const s=a=>{if(a.isLeaf()){const l=Math.max(t,a.rect.w-2),c=Math.max(t,a.rect.h-2),h=Math.max(t,Math.floor(t+Math.random()*(l-t+1))),u=Math.max(t,Math.floor(t+Math.random()*(c-t+1))),d=a.rect.x+Math.floor((a.rect.w-h)/2),f=a.rect.z+Math.floor((a.rect.h-u)/2),g=e[n%e.length];a.room={id:n++,x:d,z:f,w:h,h:u,type:g,doors:[]},i.push(a.room)}else a.left&&s(a.left),a.right&&s(a.right)};return s(this),i}getRoom(){if(this.room)return this.room;let t=null,e=null;return this.left&&(t=this.left.getRoom()),this.right&&(e=this.right.getRoom()),t||e}}class rm{width;height;tiles;rooms=[];corridors=[];spawnPoint={x:0,z:0};constructor(t=48,e=48){this.width=t,this.height=e,this.tiles=Array.from({length:e},()=>Array(t).fill(0)),this.generate()}generate(){const t=new dn({x:1,z:1,w:this.width-2,h:this.height-2}),e=10,i=7,n=[t];for(let a=0;a<4;a++){const o=[];for(const l of n)l.split(e)&&(l.left&&o.push(l.left),l.right&&o.push(l.right));if(o.length===0)break;n.length=0,n.push(...o)}const s=["quarters","hall","armory","cellar","shrine"];this.rooms=t.createRooms(i,s);for(const a of this.rooms)for(let o=a.z;o<a.z+a.h;o++)for(let l=a.x;l<a.x+a.w;l++)o>=0&&o<this.height&&l>=0&&l<this.width&&(this.tiles[o][l]=1);this.createCorridors(t);for(const a of this.corridors)this.carveCorridor(a.x1,a.z1,a.x2,a.z2);for(let a=0;a<this.height;a++)for(let o=0;o<this.width;o++)this.tiles[a][o]===0&&this.isAdjacentToFloor(o,a)&&(this.tiles[a][o]=2);if(this.rooms.length>0){const a=this.rooms[0];this.spawnPoint={x:a.x+Math.floor(a.w/2),z:a.z+Math.floor(a.h/2)}}}isAdjacentToFloor(t,e){for(let i=-1;i<=1;i++)for(let n=-1;n<=1;n++){if(n===0&&i===0)continue;const s=t+n,a=e+i;if(s>=0&&s<this.width&&a>=0&&a<this.height&&this.tiles[a][s]===1)return!0}return!1}createCorridors(t){if(!t.isLeaf()&&t.left&&t.right){const e=t.left.getRoom(),i=t.right.getRoom();if(e&&i){const n=Math.floor(e.x+e.w/2),s=Math.floor(e.z+e.h/2),a=Math.floor(i.x+i.w/2),o=Math.floor(i.z+i.h/2);this.corridors.push({x1:n,z1:s,x2:a,z2:o})}this.createCorridors(t.left),this.createCorridors(t.right)}}carveCorridor(t,e,i,n){let s=t,a=e;for(;s!==i;)s>=0&&s<this.width&&a>=0&&a<this.height&&(this.tiles[a][s]=1),s+=s<i?1:-1;for(;a!==n;)s>=0&&s<this.width&&a>=0&&a<this.height&&(this.tiles[a][s]=1),a+=a<n?1:-1}}class am{atlas;constructor(t){this.atlas=t}createBed(){const t=new Pt;t.name="Bed";const e=new it(1.2,.4,1.8),i=new D(e,this.atlas.materials.bedGreen);i.position.set(0,.35,0),i.castShadow=!0,i.receiveShadow=!0,t.add(i);const n=new it(1.3,.9,.12),s=new D(n,this.atlas.materials.woodBeam);s.position.set(0,.45,-.9),s.castShadow=!0,t.add(s);const a=new it(1.3,.6,.12),o=new D(a,this.atlas.materials.woodBeam);o.position.set(0,.3,.9),o.castShadow=!0,t.add(o);const l=new it(.12,.95,.12),c=[[-.6,.475,-.9],[.6,.475,-.9],[-.6,.35,.9],[.6,.35,.9]];for(const h of c){const u=new D(l,this.atlas.materials.woodBeam);u.position.set(h[0],h[1],h[2]),u.castShadow=!0,t.add(u)}return t}createDrawer(){const t=new Pt;t.name="Drawer";const e=new it(.75,.75,.6),i=new D(e,this.atlas.materials.woodPlanks);i.position.set(0,.375,0),i.castShadow=!0,i.receiveShadow=!0,t.add(i);const n=new it(.82,.08,.68),s=new D(n,this.atlas.materials.woodBeam);s.position.set(0,.77,0),s.castShadow=!0,t.add(s);const a=new it(.2,.04,.04),o=new D(a,this.atlas.materials.iron);o.position.set(0,.52,.31);const l=new D(a,this.atlas.materials.iron);return l.position.set(0,.25,.31),t.add(o,l),t}createWardrobe(){const t=new Pt;t.name="Wardrobe";const e=new it(1.2,1.9,.7),i=new D(e,this.atlas.materials.woodPlanks);i.position.set(0,.95,0),i.castShadow=!0,i.receiveShadow=!0,t.add(i);const n=new it(1.3,.1,.76),s=new D(n,this.atlas.materials.woodBeam);s.position.set(0,1.9,0),s.castShadow=!0,t.add(s);const a=new it(.08,.08,.04),o=new D(a,this.atlas.materials.iron);o.position.set(-.55,1.4,.36);const l=new D(a,this.atlas.materials.iron);return l.position.set(-.55,.5,.36),t.add(o,l),t}createTableSet(){const t=new Pt;t.name="TableSet";const e=new it(1.5,.1,.9),i=new D(e,this.atlas.materials.bedGreen);i.position.set(0,.7,0),i.castShadow=!0,i.receiveShadow=!0,t.add(i);const n=new it(.08,.7,.08),s=[[-.65,.35,-.35],[.65,.35,-.35],[-.65,.35,.35],[.65,.35,.35]];for(const l of s){const c=new D(n,this.atlas.materials.woodBeam);c.position.set(l[0],l[1],l[2]),c.castShadow=!0,t.add(c)}const a=this.createChair();a.position.set(-.9,0,0),a.rotation.y=Math.PI/2,t.add(a);const o=this.createChair();return o.position.set(.9,0,0),o.rotation.y=-Math.PI/2,t.add(o),t}createChair(){const t=new Pt,e=new D(new it(.42,.06,.42),this.atlas.materials.woodPlanks);e.position.set(0,.42,0),e.castShadow=!0,t.add(e);const i=new D(new it(.42,.45,.06),this.atlas.materials.woodBeam);i.position.set(0,.65,-.18),i.castShadow=!0,t.add(i);const n=new it(.05,.42,.05),s=[[-.18,.21,-.18],[.18,.21,-.18],[-.18,.21,.18],[.18,.21,.18]];for(const a of s){const o=new D(n,this.atlas.materials.woodBeam);o.position.set(a[0],a[1],a[2]),o.castShadow=!0,t.add(o)}return t}createCarpet(t,e){const i=new Ee(t,e),n=new D(i,this.atlas.materials.carpetRed);return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n}createTorch(t,e,i){const n=new Pt;n.position.set(t,e,i);const s=new it(.12,.35,.2),a=new D(s,this.atlas.materials.iron);a.position.set(0,0,.1),n.add(a);const o=new it(.08,.5,.08),l=new D(o,this.atlas.materials.woodBeam);l.position.set(0,.15,.2),l.rotation.x=.2,n.add(l);const c=new it(.15,.22,.15),h=new ti({color:16768358}),u=new D(c,h);u.position.set(0,.42,.25),n.add(u);const d=new Ve(16760388,4.5,24,1.05);d.position.set(0,.5,.3),d.castShadow=!0,d.shadow.bias=-.002,d.shadow.mapSize.width=512,d.shadow.mapSize.height=512,n.add(d);const f={light:d,baseIntensity:4.5,flickerSpeed:7+Math.random()*5,flickerPhase:Math.random()*Math.PI*2,position:new U(t,e+.5,i+.3)};return{group:n,lightInfo:f}}createWindow(t,e,i){const n=new Pt;n.position.set(t,e,i);const s=new D(new Ee(1.6,1.2),this.atlas.materials.windowLattice);s.position.set(0,0,.02),n.add(s);const a=new Ve(16774608,5.5,16,1.05);return a.position.set(0,0,.5),n.add(a),n}createMapScroll(t,e,i){const n=new D(new Ee(1.4,.9),this.atlas.materials.mapScroll);return n.position.set(t,e,i+.02),n}createChest(t,e,i){const n=new Pt;n.position.set(t,e,i);const s=new D(new it(.7,.45,.5),this.atlas.materials.woodPlanks);s.position.set(0,.225,0),s.castShadow=!0,n.add(s);const a=new D(new it(.72,.18,.52),this.atlas.materials.woodBeam);a.position.set(0,.5,0),a.castShadow=!0,n.add(a);const o=new D(new it(.1,.12,.05),this.atlas.materials.iron);return o.position.set(0,.38,.27),n.add(o),n}}class om{scene;atlas;dungeon;container;propsFactory;torchLights=[];solidGrid;constructor(t,e,i=48,n=48){this.scene=t,this.atlas=e,this.propsFactory=new am(e),this.dungeon=new rm(i,n),this.container=new Pt,this.container.name="DungeonWorld",this.solidGrid=Array.from({length:n},()=>Array(i).fill(!1)),this.scene.add(this.container),this.build3DMap()}build3DMap(){const e=[],i=[],n=[],s=[],a=[],o=[],l=[],c=[],h=[],u=(d,f,g,_,m,p,E,b,M=[1,1])=>{d.push(..._,...m,...p),g.push(...b,...b,...b),f.push(0,0,M[0],0,M[0],M[1]),d.push(..._,...p,...E),g.push(...b,...b,...b),f.push(0,0,M[0],M[1],0,M[1])};for(let d=0;d<this.dungeon.height;d++)for(let f=0;f<this.dungeon.width;f++){const g=this.dungeon.tiles[d][f];g===1?(u(e,i,n,[f,0,d],[f+1,0,d],[f+1,0,d+1],[f,0,d+1],[0,1,0]),this.solidGrid[d][f]=!1):g===2?(this.solidGrid[d][f]=!0,d+1<this.dungeon.height&&this.dungeon.tiles[d+1][f]===1&&u(s,a,o,[f+1,2.8,d+1],[f+1,0,d+1],[f,0,d+1],[f,2.8,d+1],[0,0,1],[1,2.8]),d-1>=0&&this.dungeon.tiles[d-1][f]===1&&u(s,a,o,[f,2.8,d],[f,0,d],[f+1,0,d],[f+1,2.8,d],[0,0,-1],[1,2.8]),f-1>=0&&this.dungeon.tiles[d][f-1]===1&&u(s,a,o,[f,2.8,d+1],[f,0,d+1],[f,0,d],[f,2.8,d],[-1,0,0],[1,2.8]),f+1<this.dungeon.width&&this.dungeon.tiles[d][f+1]===1&&u(s,a,o,[f+1,2.8,d],[f+1,0,d],[f+1,0,d+1],[f+1,2.8,d+1],[1,0,0],[1,2.8]),u(l,c,h,[f,2.8,d],[f+1,2.8,d],[f+1,2.8,d+1],[f,2.8,d+1],[0,1,0])):this.solidGrid[d][f]=!0}if(e.length>0){const d=new Te;d.setAttribute("position",new re(e,3)),d.setAttribute("normal",new re(n,3)),d.setAttribute("uv",new re(i,2));const f=new D(d,this.atlas.materials.woodPlanks);f.receiveShadow=!0,this.container.add(f)}if(s.length>0){const d=new Te;d.setAttribute("position",new re(s,3)),d.setAttribute("normal",new re(o,3)),d.setAttribute("uv",new re(a,2));const f=new D(d,this.atlas.materials.stoneBrick);f.castShadow=!0,f.receiveShadow=!0,this.container.add(f)}if(l.length>0){const d=new Te;d.setAttribute("position",new re(l,3)),d.setAttribute("normal",new re(h,3)),d.setAttribute("uv",new re(c,2));const f=new D(d,this.atlas.materials.woodBeam);f.castShadow=!0,this.container.add(f)}this.populateRooms()}populateRooms(){if(this.dungeon.rooms.length===0)return;const t=this.dungeon.rooms[0];this.decorateQuartersRoom(t);for(let e=1;e<this.dungeon.rooms.length;e++){const i=this.dungeon.rooms[e];this.decorateProceduralRoom(i)}}decorateQuartersRoom(t){const e=t.x+t.w/2,i=t.z+t.h/2,n=this.propsFactory.createBed();n.position.set(t.x+1.2,0,t.z+1.6),this.container.add(n);const s=this.propsFactory.createDrawer();s.position.set(t.x+2.5,0,t.z+.8),this.container.add(s);const a=this.propsFactory.createWardrobe();a.position.set(t.x+t.w-1.2,0,t.z+1.8),this.container.add(a);const o=this.propsFactory.createBed();o.position.set(t.x+t.w-2.8,0,t.z+1.6),this.container.add(o);const l=this.propsFactory.createDrawer();l.position.set(t.x+t.w-4.1,0,t.z+.8),this.container.add(l);const c=this.propsFactory.createTableSet();c.position.set(e-.5,0,t.z+1.8),this.container.add(c);const h=this.propsFactory.createCarpet(t.w*.65,t.h*.4);h.position.set(e,.01,i+1),this.container.add(h);const u=this.propsFactory.createMapScroll(t.x+2,1.8,t.z);this.container.add(u);const d=this.propsFactory.createWindow(t.x+t.w-3.2,1.8,t.z);this.container.add(d);const f=this.propsFactory.createTorch(t.x+4.2,1.6,t.z);this.container.add(f.group),this.torchLights.push(f.lightInfo),this.setSolidBox(t.x+.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-3.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-1.8,t.z+1,1.2,1)}decorateProceduralRoom(t){const e=t.x+t.w/2,i=t.z+t.h/2,n=this.propsFactory.createTorch(e,1.6,t.z);if(this.container.add(n.group),this.torchLights.push(n.lightInfo),t.type==="armory"){const s=this.propsFactory.createChest(t.x+1.2,0,t.z+1.2),a=this.propsFactory.createChest(t.x+2.2,0,t.z+1.2);this.container.add(s,a),this.setSolidBox(t.x+.8,t.z+.8,2,1)}else if(t.type==="hall"){const s=this.propsFactory.createCarpet(t.w*.5,t.h*.5);s.position.set(e,.01,i),this.container.add(s);const a=this.propsFactory.createTableSet();a.position.set(e,0,i),this.container.add(a),this.setSolidBox(e-1,i-.6,2,1.2)}else if(t.type==="cellar"){const s=this.propsFactory.createChest(t.x+t.w-1.5,0,t.z+t.h-1.5);this.container.add(s)}}setSolidBox(t,e,i,n){const s=Math.max(0,Math.floor(t)),a=Math.min(this.dungeon.width-1,Math.floor(t+i)),o=Math.max(0,Math.floor(e)),l=Math.min(this.dungeon.height-1,Math.floor(e+n));for(let c=o;c<=l;c++)for(let h=s;h<=a;h++)this.solidGrid[c][h]=!0}isSolid(t,e){const i=Math.floor(t),n=Math.floor(e);return i<0||i>=this.dungeon.width||n<0||n>=this.dungeon.height?!0:this.solidGrid[n][i]}updateTorches(t){for(const e of this.torchLights){const i=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.6+Math.cos(t*(e.flickerSpeed*1.7)+e.flickerPhase*2)*.3;e.light.intensity=Math.max(3.2,e.baseIntensity+i)}}setVisible(t){this.container.visible=t}}class lm{static generateUniqueProof(t,e,i,n,s,a){const o=t.toLowerCase();return o.includes("logic")||o.includes("linguistic")||o.includes("rhetoric")||o.includes("philology")||o.includes("dialect")?this.generateLogicProof(e,i,n,s,a):o.includes("celestial")||o.includes("astronom")||o.includes("astral")||o.includes("orbital")||o.includes("starlight")?this.generateAstronomyProof(e,i,n,s,a):o.includes("crypt")||o.includes("cipher")||o.includes("runic")||o.includes("seal")||o.includes("inversion")?this.generateCryptoProof(e,i,n,s,a):o.includes("metallurgy")||o.includes("alchem")||o.includes("smelt")||o.includes("crucible")||o.includes("thermodynamic")?this.generateMetallurgyProof(e,i,n,s,a):o.includes("optics")||o.includes("prism")||o.includes("wave")||o.includes("resonance")||o.includes("dispersion")||o.includes("light")?this.generateOpticsProof(e,i,n,s,a):this.generateArchitectureProof(e,i,n,s,a)}static generateLogicProof(t,e,i,n,s){const a=[{theoremHeader:`THEOREM ${this.toRoman(t+1)}: MODAL SYLLOGISTIC SOUNDNESS IN ${i.toUpperCase()}`,premiseText:"Let proposition $\\mathcal{P}(x)$ and modal predicate $\\mathcal{Q}(x)$ be defined over the universe of discourse $\\mathcal{U}$:",primaryEquation:"$$\\forall x \\in \\mathcal{U} \\; [\\mathcal{M}(x) \\implies \\mathcal{P}(x)] \\quad \\land \\quad \\forall x \\in \\mathcal{U} \\; [\\mathcal{S}(x) \\implies \\mathcal{M}(x)]$$",stepHeader:"[FORMAL DEDUCTIVE DERIVATION]:",stepLines:["1. Universal Instantiation for canonical instance $k \\in \\mathcal{U}$:","$$\\mathcal{M}(k) \\implies \\mathcal{P}(k) \\quad \\text{and} \\quad \\mathcal{S}(k) \\implies \\mathcal{M}(k)$$","2. Applying hypothetical transitive deduction (Modus Barbara):","$$\\mathcal{S}(k) \\implies \\mathcal{P}(k) \\implies \\forall x \\; [\\mathcal{S}(x) \\implies \\mathcal{P}(x)]$$"],secondaryEquation:`$$\\therefore \\text{Omne } \\mathcal{S} \\text{ est } \\mathcal{P} \\quad [\\text{Preserved by the Scribes of } ${n}]$$`,conclusionText:`This confirms that dialectical soundness is invariant under semantic translation across ${i}.`,qedText:"Quod Erat Demonstrandum • Q.E.D."},{theoremHeader:`LEMMA ${this.toRoman(t+1)}: GRAMMATICAL SYNTAX TRANSFORM TENSOR`,premiseText:"Let root dialect vector $\\vec{w} = [v_1, v_2]^T$ undergo morphological declension through inflection operator $\\mathbf{T}_{\\text{case}}$:",primaryEquation:"$$\\mathbf{T}_{\\text{case}} \\vec{w} = \\begin{bmatrix} \\cos(\\phi_k) & -\\sin(\\phi_k) \\\\ \\sin(\\phi_k) & \\cos(\\phi_k) \\end{bmatrix} \\begin{bmatrix} w_{\\text{nom}} \\\\ w_{\\text{gen}} \\end{bmatrix} = \\begin{bmatrix} w_{\\text{abl}} \\\\ w_{\\text{acc}} \\end{bmatrix}$$",stepHeader:"[PHONETIC EIGENVALUE RESOLUTION]:",stepLines:[`1. Calculate characteristic root determinant for inflection angle $\\phi_k = \\frac{${(t+2)*15}^\\circ}{2}$:`],matrixEquation:"$$\\det(\\mathbf{T} - \\lambda \\mathbf{I}) = \\lambda^2 - 2\\lambda\\cos(\\phi_k) + 1 = 0 \\implies \\lambda_{1,2} = e^{\\pm i \\phi_k}$$",secondaryEquation:`$$\\sum_{j=1}^{${t+3}} |w_j|^2 = \\text{Norm}(\\vec{w}) = 1.0000$$`,conclusionText:`Phonological conservation holds with zero loss of semantic information in ${i}.`,qedText:"Quod Erat Demonstrandum • Q.E.D."}];return a[(s+t)%a.length]}static generateAstronomyProof(t,e,i,n,s){const a=(.012+s%7*.008+t*.005).toFixed(4),o=(38.4+s%11*1.3+t*2.1).toFixed(2),l=(1.42+t*.35).toFixed(2);return{theoremHeader:`THEOREM ${this.toRoman(t+1)}: HARMONIC MERIDIAN PRECESSION OF ${i.toUpperCase()}`,premiseText:`Let $\\Psi(t)$ denote the celestial gimbal angle of the ${this.toRoman(t+1)} astrolabe ring at semi-major axis $a = ${l} \\ \\text{AU}$:`,primaryEquation:`$$\\oint_{\\mathcal{S}} \\nabla \\Psi \\cdot d\\vec{A} = \\frac{4\\pi G \\cdot \\mathcal{M}_{\\odot}}{\\sqrt{1 - \\frac{2GM}{r c_e^2}}} \\cdot \\cos\\left(\\frac{${(t+1)*3} \\pi}{12}\\right)$$`,stepHeader:"[SECULAR PERIHELION SHIFT DERIVATION]:",stepLines:[`1. Integrate the relativistic potential perturbation with orbital eccentricity $e = ${a}$:`],matrixEquation:"$$\\Delta \\Psi_{\\text{prec}} = \\int_{0}^{2\\pi} \\frac{3 G \\mathcal{M}}{c^2 a (1 - e^2)} \\, d\\theta = \\frac{6 \\pi G \\mathcal{M}}{c^2 a (1 - e^2)}$$",secondaryEquation:`$$\\Delta \\Psi_{\\text{measured}} = ${o}'' \\text{ per century} \\quad [\\text{Calibrated at } ${n}]$$`,conclusionText:`Observational ephemerides in ${i} confirm non-decaying orbital stability.`,qedText:"Quod Erat Demonstrandum • Q.E.D."}}static generateCryptoProof(t,e,i,n,s){const a=61+s%13*6+t*12,o=53+s%11*6+t*18,l=a*o,c=(a-1)*(o-1),h=65537;return{theoremHeader:`PROPOSITION ${this.toRoman(t+1)}: RECURSIVE VAULT SEAL INVERSION IN ${i.toUpperCase()}`,premiseText:`Let the seal inscription on the ${this.toRoman(t+1)} vault gate be encrypted by modular exponentiation:`,primaryEquation:`$$C \\equiv M^{${h}} \\pmod{${l}}, \\quad \\text{where } N = ${a} \\cdot ${o} \\quad \\text{and} \\quad \\gcd(${h}, \\phi(N)) = 1$$`,stepHeader:"[PROOF OF INVERTIBILITY & PRIVATE KEY EXTRACTION]:",stepLines:[`1. By Euler's Totient Theorem: $\\phi(N) = (${a} - 1)(${o} - 1) = ${c}$.`,`2. Solve congruence $e \\cdot d \\equiv 1 \\pmod{\\phi(N)} \\implies e \\cdot d = 1 + k \\cdot ${c}$:`],matrixEquation:`$$C^d \\equiv (M^e)^d \\equiv M^{1 + k \\phi(N)} \\equiv M \\cdot (M^{\\phi(N)})^k \\equiv M \\pmod{${l}}$$`,secondaryEquation:`$$\\therefore M \\equiv C^d \\pmod{${l}} \\quad [\\text{Vault Inversion Seal Guaranteed by } ${n}]$$`,conclusionText:`This guarantees that the cryptographic locks of ${i} cannot be forged without the private exponent.`,qedText:"Quod Erat Demonstrandum • Q.E.D."}}static generateMetallurgyProof(t,e,i,n,s){const a=1100+s%15*25+t*75,o=-280-s%9*15-t*20,l=(95.2+s%7*3.4+t*4.2).toFixed(1),c=Math.round(Math.abs(o)*1e3/parseFloat(l)),h=Math.round(c-273.15);return{theoremHeader:`FORMULA ${this.toRoman(t+1)}: STOICHIOMETRIC DAMASCUS MATRIX SMELTING`,premiseText:`In the crucible blast hearths of ${i} at operating temperature $\\Delta T = ${a}^\\circ \\text{C}$ ($${a+273} \\ \\text{K}$):`,primaryEquation:`$$${t+2}\\text{Fe}_{(\\alpha)} + ${t+1}\\text{C}_{(\\text{graphite})} + \\text{W} \\xrightarrow{\\Delta H = ${o} \\ \\text{kJ/mol}} \\text{Fe}_{${t+2}}\\text{W}\\text{C}_{${t+1}} \\downarrow \\ (\\text{Adamantine Steel})$$`,stepHeader:"[GIBBS SPONTANEOUS CRYSTALLIZATION DERIVATION]:",stepLines:[`1. Compute Gibbs free energy $\\Delta G^\\circ(T) = \\Delta H^\\circ - T \\Delta S^\\circ$ with $\\Delta S^\\circ = +${l} \\ \\text{J/(mol}\\cdot\\text{K)}$:`],matrixEquation:`$$\\Delta G^\\circ(T) = ${o*1e3} + ${l} \\cdot T \\ \\text{J/mol}$$`,secondaryEquation:`$$T_{\\text{critical}} = \\frac{${Math.abs(o)*1e3}}{${l}} = ${c} \\ \\text{K} \\equiv ${h}^\\circ\\text{C}$$`,conclusionText:`Because $T_{\\text{operating}} (${a}^\\circ\\text{C}) < ${h}^\\circ\\text{C}$, $\\Delta G < 0$, proving spontaneous crystallization in ${n}.`,qedText:"Quod Erat Demonstrandum • Q.E.D."}}static generateOpticsProof(t,e,i,n,s){const a=480+s%18*12+t*35,o=(299.79+s%5*.05).toFixed(2),l=42+s%8*2+t*3;return{theoremHeader:`AXIOM ${this.toRoman(t+1)}: ETHERIC WAVE DISPERSION & SPECTRAL CONTINUITY`,premiseText:`In a homogeneous vitreous prism in ${i} with apex angle $\\alpha = ${l}^\\circ$, wave packet $\\Phi(x,t)$ at $\\lambda = ${a} \\ \\text{nm}$ satisfies:`,primaryEquation:`$$\\frac{\\partial^2 \\Phi}{\\partial t^2} - c_e^2 \\nabla^2 \\Phi + \\mu_0^2 \\Phi^3 = 0, \\quad \\text{where } c_e = ${o} \\times 10^6 \\ \\text{m/s}$$`,stepHeader:"[GROUP & PHASE VELOCITY RESOLUTION]:",stepLines:["1. Calculate Phase Velocity $v_p = \\frac{\\omega}{k}$ and Group Velocity $v_g = \\frac{d\\omega}{dk}$:"],matrixEquation:"$$v_p = c_e \\sqrt{1 + \\frac{\\mu_0^2 A_0^2}{c_e^2 k^2}} > c_e \\quad \\text{and} \\quad v_g = \\frac{c_e^2 k}{\\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}} < c_e$$",secondaryEquation:`$$\\therefore v_p \\cdot v_g = c_e^2 \\equiv ${Math.round(parseFloat(o)**2)} \\times 10^{12} \\ \\text{m}^2/\\text{s}^2 \\quad [\\text{Verified at } ${n}]$$`,conclusionText:"Energy conservation holds across the refractive boundary without attenuation.",qedText:"Quod Erat Demonstrandum • Q.E.D."}}static generateArchitectureProof(t,e,i,n,s){const a=35+s%5*5+t*3,o=(36.5+s%15*1.8+t*4.2).toFixed(1),l=(24.2+s%10*1.1+t*1.5).toFixed(1),c=(12.4+s%7*.8+t*1.2).toFixed(1);return{theoremHeader:`LEMMA ${this.toRoman(t+1)}: EQUILIBRIUM RESOLUTION OF THE POINTED ARCH IN ${i.toUpperCase()}`,premiseText:`For a cathedral vault span of $L = ${c} \\ \\text{m}$ at apex thrust angle $\\alpha = ${a}^\\circ$, keystone compressive stress must satisfy:`,primaryEquation:`$$\\sigma_{\\text{keystone}} = \\frac{\\gamma_{\\text{stone}} \\cdot V_{\\text{vault}}}{2 \\sin(${a}^\\circ) \\cdot d_{\\text{buttress}}} \\le [\\sigma_{\\text{granite}}] = ${o} \\ \\text{MPa}$$`,stepHeader:"[2x2 BIAXIAL STRESS ROTATION MATRIX]:",stepLines:["1. Resolve orthogonal equilibrium vectors against the flying buttress abutment:"],matrixEquation:`$$\\begin{bmatrix} \\cos(${a}^\\circ) & -\\sin(${a}^\\circ) \\\\ \\sin(${a}^\\circ) & \\cos(${a}^\\circ) \\end{bmatrix} \\begin{bmatrix} F_{\\text{vertical}} \\\\ F_{\\text{lateral}} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\rho g R^2}{2} \\end{bmatrix}$$`,secondaryEquation:`$$T_{\\text{horizontal}} = \\int_{0}^{\\pi/${t+3}} \\rho g R^2 \\cos(\\theta) \\, d\\theta = \\rho g R^2 \\left(1 - \\frac{\\sqrt{2}}{2}\\right)$$`,conclusionText:`This establishes a verified ${l}% reduction in lateral wall thrust for arches of ${n}.`,qedText:"Quod Erat Demonstrandum • Q.E.D."}}static toRoman(t){const e=[[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];let i="",n=t;for(const[s,a]of e)for(;n>=s;)i+=a,n-=s;return i||`${t}`}}class je{static sessionSeed=Math.floor(Math.random()*1e7);static CLASSIFICATIONS={Fiction:["High Fantasy","Gothic Tales","Fables & Parables","Epic Poetry","Chivalric Romance","Courtly Allegories"],"Non-Fiction":["Biography & Memoirs","Cartography & Expeditions","Chronicles of Antiquity","Statecraft & Jurisprudence","Natural Philosophy","Science & Technology","Travelogues of the Great Sea","Academics & Curricula"],"Academic Texts & Grammar":["Ancient Linguistics & Lexicons","Classical Rhetoric & Oratory","Aristotelian Logic & Dialectics","Cartography & Spatial Geometry","Sacred Arithmetic & Ratios","Philology of the First Tongue"],"Professional Manuals":["Master Stonemasonry & Vaulting","Cathedral & Fortress Architecture","Herbalism & Field Apothecary","Alchemical Metallurgy & Smelting","Tactical Siegecraft & Ballistics","Horology & Precision Clockmaking","Vellum Curing & Bookbinding"],"Breakthroughs & Theories":["Celestial Mechanics & Orbitals","Etheric Resonance & Wave Dynamics","Elemental Transmutation Kinetics","Chrono-Geometric Field Axioms","Optics & Prism Light Dispersion","Thermodynamics of Crucible Steels"],Dissertations:["Theological Axioms of the Light","Metaphysical Inquiries on Form","Subterranean Strata Excavations","Cryptographic Analysis of Archon Seals","Epistemology of Objective Truth","The Doctrine of Cosmic Equilibrium"],"Mysticism & Magic":["Astral Pyromancy & Fire Wards","Void Weaving & Spatial Foldings","Sacred Runic Glyph Inscriptions","Divination & Starlight Ephemerides","Hermetic Matrix Binding & Seals","The Rites of the Equinoctial Gate"],"Tales & Mythology":["Legends of the Primordial Dawn","Chronicles of the Sunken Spires","Mythos of the Silver Falcon","Ballads of the Wandering King","Sagas of the High Barrows","The Great Vigil of the Star-Watchers"]};static FIRST_NAMES=["Aurelius","Cassian","Valerius","Ignatius","Theodosia","Claudius","Severus","Octavius","Tiberius","Marcellus","Decimus","Lucian","Felix","Hadrian","Titus","Antoninus","Aurelia","Gideon","Branok","Rhiannon","Gawain","Isolde","Gareth","Kaelen","Cormac","Torin","Morvath","Arthur","Percival","Bedivere","Cador","Elowen","Bryn","Meredith","Taliesin","Zephyrus","Alexios","Irene","Basil","Leontios","Demetrios","Theophano","Konstantinos","Helene","Andronikos","Niketas","Kassandra","Thales","Eudoxia","Herakleios","Zenobia","Roderick","Eldred","Bramwell","Aldhelm","Sigurd","Wulfric","Ethelwulf","Hildegard","Alistair","Gunther","Berengar","Conrad","Anselm","Wulfstan","Godric","Rowena","Dietrich","Darius","Farhan","Cyrus","Soraya","Navid","Roxana","Bahram","Zal","Yasmin","Seraphina","Mirella","Vespera","Yvaine","Azrael","Malakor","Zephyrine","Solara","Balthazar"];static SURNAMES_AND_EPITHETS=["of Oakhaven","of the Iron Quill","the Stargazer","of Sunken Alderia","the Sightless","of House Lionheart","the Elder","of the High Spire","Arch-Scholar of Veritas","Venerable Keeper of Scrolls","Master Artificer","of the Obsidian Gate","the Clockmaker of Val-Doran","of the Silver Crescent","Chronicler of Wessex","of the Whispering Sands","the Cartographer of Marid-Khar","the Alchemist of Caelum-Vara","of the Northern Marches","Keeper of the Solstice Vaults","of the Amber Coast","the Void-Weaver","of House Ravenshade","Master of the Gilded Chisel","the Silent Archimandrite","of St. Jude the Confessor","of the Seven Towers","the Geometer of Silverpeak","of the Aethelgard Scriptorium","the Astrolabist of Dun-Mora","the Epigrapher of Khorsabad","the Metallurgist of Iron-Spire","of House Vesperia","the Luminary of Thalassia","of the Frostholm Scriptorium","the Sovereign Exarch","of the Solstice Reach"];static ORGANIZATIONS=["The Guild of Master Astrolabists","The Order of the Silver Compass","The Brotherhood of the Obsidian Chisel","The Collegium of Celestial Mechanics","The Scriptorium of the Whispering Sands","The Conclave of Hermetic Philologists","The Society of Subterranean Antiquarians","The Academy of Lunar Pyromancy","The Fellowship of the Iron Clavicle","The Syndicate of Amber Cartographers","The Sovereign Synod of Veritas","The Covenant of the Seven Lanterns","The Guild of Master Mason-Artificers","The High Council of Caelum-Vara","The Monastic Order of St. Anselm","The Scholarly Circle of the Solstice Star","The Royal Society of Natural Philosophy","The Archival Scribes of Oakhaven","The Guild of Clockmakers and Horologists","The Sisterhood of the Silver Loom","The Alchemical Guild of the Crucible","The Cartographic Guild of Thalassia","The Cathedral Chapter of Marid-Khar","The Venerable Academy of Aethelgard","The Custodians of the Obsidian Vault"];static REALMS_AND_CITIES=["Alderia","Caelum-Vara","Thalassia","Silverpeak","Oakhaven","Nether-Ghyll","Solstice Reach","Val-Doran","Aethelgard","Marid-Khar","Vesperia","Lunaria","Wessex","Ravenhall","Dun-Mora","Myth-Drannor","Khorsabad","Al-Zafira","Zephyrion","Astragard","Iron-Spire","Sunken Alderia","The High Barrows","Frostholm","Amber-Glen","Elyria","Veridiana","Crescent Isle","Barrow-Downs"];static ERAS=["The First Age of Dawn (Year 312)","Era of the Great Schism (Year 784)","The Golden Century of the Lion (Year 1102)","Age of the Obsidian Eclipse (Year 1340)","Reign of Archon Aurelius IX (Year 1415)","The Silent Interregnum (Year 988)","Dawn of the Cathedral Archives (Year 1204)","The Third Solstice Reformation (Year 1520)","Era of the Clockwork Spire (Year 1288)","Age of the Silver Armada (Year 1056)","The Great Deluge of Nether-Ghyll (Year 640)","The Council of Seven Crowns (Year 1392)","The Solstice Concordat (Year 1478)","Reign of Grand Magister Valerius (Year 892)","The High Renaissance of Caelum-Vara (Year 1560)"];static TITLE_TEMPLATES=["The Codex of [Adjective] [Noun]","Treatise on [Concept]","The Principles of [Concept] in [Realm]","Chronicles of [Noun]","A Scholar's Guide to [Concept]","The Architecture of [Noun]","Observations on [Adjective] [Concept]","Discourses on [Adjective] [Noun]","Calculations and Geometries of [Concept]","The Seven Pillars of [Concept]","Meditations upon [Adjective] [Noun]","Compendium of [Concept] and [Concept2]","The Hermetic Secrets of [Realm]","The Natural History of [Realm]","Foundations of [Adjective] [Concept]","The Annals of [Realm]","Axioms of [Concept] and [Noun]","The Ephemeris of [Adjective] Spheres"];static SUBTITLE_TEMPLATES=["An Archival Inquiry into the Foundational Principles of [Realm]","A Comprehensive Discourse for the Masters of [Organization]","Transcribed from the Earliest Manuscripts of [Realm]","With Mathematical Proofs, Sacred Geometry, and Generative Vector Diagrams","Being a Faithful Record Preserved in [Realm] during [Era]","Compiled in the High Scriptorium of [Organization]","A Systematic Treatise for Seekers of Illuminated Truth across [Realm]"];static ADJECTIVES=["Arcane","Ancient","Celestial","Forgotten","Gilded","Immutable","Shadowed","Verdant","Astral","Hallowed","Primordial","Luminescent","Forbidden","Eternal","Sacred","Subterranean","Obsidian","Iron-Bound","Ethereal","Sovereign","Resonant","Chrono-Spatial","Meridian","Vitreous"];static NOUNS=["the High Spire","the Iron Vault","the Astral Loom","the Sacred Oak","the Silver Flame","the Whispering Crypts","the Seven Veils","the Golden Lion","the Celestial Horizon","the Great Meridian","the Monolith","the Clockwork Heavens","the Living Granite","the Sunken Kingdom","the Silver Raven","the Prismatic Arch"];static CONCEPTS=["Biaxial Vault Stress","Celestial Precession","Etheric Wave Flow","Alchemical Transmutation","Sacred Geometry","Pointed Arch Buttresses","Modular Cryptography","Prism Refraction Optics","Living Stone Mortar","Aristotelian Logic","Cardinal Matrix Eigenvalues","Thermal Damascus Smelting","Astrolabe Calibration","Zodiac Orbital Mechanics","Linguistic Roots of the First Tongue"];static COVER_COLORS=["#82181e","#9e1c25","#631317","#1c3761","#14294a","#26497d","#1d5334","#133d25","#2b6942","#542d17","#6b3a1e","#7a4422","#521c63","#6a2280","#3e134d","#184e57","#206670","#222226","#18181b","#8c6227","#a3722e","#8c3823","#732b1a","#2c3e50"];static ACCENT_COLORS=["#ffd700","#e5b84c","#9a7838","#d1d7e3","#c86d49","#dfd2b5","#c09853"];static createPrng(t){let e=t+this.sessionSeed>>>0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}static generateBook(t,e){const i=this.createPrng(t),n=Object.keys(this.CLASSIFICATIONS),s=n[Math.floor(i()*n.length)],a=this.CLASSIFICATIONS[s],o=a[Math.floor(i()*a.length)],l=this.REALMS_AND_CITIES[Math.floor(i()*this.REALMS_AND_CITIES.length)],c=this.ORGANIZATIONS[Math.floor(i()*this.ORGANIZATIONS.length)],h=this.ERAS[Math.floor(i()*this.ERAS.length)];let u=e;u||(u=this.generateGenerativeTitle(i,l,o));const f=this.SUBTITLE_TEMPLATES[Math.floor(i()*this.SUBTITLE_TEMPLATES.length)].replace("[Realm]",l).replace("[Organization]",c).replace("[Era]",h),g=this.FIRST_NAMES[Math.floor(i()*this.FIRST_NAMES.length)],_=this.SURNAMES_AND_EPITHETS[Math.floor(i()*this.SURNAMES_AND_EPITHETS.length)],m=`${g} ${_}`,p=this.COVER_COLORS[Math.floor(i()*this.COVER_COLORS.length)],E=this.ACCENT_COLORS[Math.floor(i()*this.ACCENT_COLORS.length)],b=this.isStemSubject(s,o,u,f),M=["garamond","gothic","scriptorium","crimson","mystic"],P=["compact","regular","relaxed"];let R=b?i()<.6?"crimson":"garamond":M[Math.floor(i()*M.length)],A=b?i()<.5?"compact":"regular":P[Math.floor(i()*P.length)],C="standard",y="academic-treatise";o.includes("Poetry")||o.includes("Ballads")?(C="verse",y="epic-verse"):o.includes("Lexicons")||o.includes("Philology")?(C=i()<.5?"two-column":"standard",y="academic-treatise"):s==="Professional Manuals"?(C=i()<.4?"marginalia":"standard",y="technical-manual"):s==="Mysticism & Magic"?(C=i()<.45?"illuminated":"standard",y="mystic-grimoire"):s==="Dissertations"?(C=i()<.35?"marginalia":"standard",y=i()<.4?"philosophical-dialogue":"academic-treatise"):s==="Non-Fiction"&&(y=b?"academic-treatise":"chronicle-history");const v=4+Math.floor(i()*3),T=[];T.push({pageType:"half-title",chapterTitle:"",pageNumber:1,content:`





${u.toUpperCase()}

❦`}),T.push({pageType:"frontispiece",chapterTitle:"FRONTISPIECE",pageNumber:2,content:this.generateFrontispieceText(s,l,c,i)}),T.push({pageType:"title-page",chapterTitle:"TITLE PAGE",pageNumber:3,content:`${u.toUpperCase()}

— ${f} —


BY
${m.toUpperCase()}


ARCHIVAL CLASSIFICATION: ${s.toUpperCase()}
ACADEMIC DISCIPLINE: ${o.toUpperCase()}


❦ ══════════════════ ❧
PUBLISHED UNDER THE AEGIS OF ${c.toUpperCase()}
ARCHIVES OF ${l.toUpperCase()} • ${h.toUpperCase()}`});const B=`MS-${1e3+Math.floor(i()*9e3)}-${l.slice(0,4).toUpperCase()}-${10+Math.floor(i()*90)}`;T.push({pageType:"copyright",chapterTitle:"ARCHIVAL NOTICE",pageNumber:4,content:`ARCHIVAL REPOSITORY OF ${l.toUpperCase()}
Preserved under the Perpetual Edict of ${c}.

Manuscript Registry Code: ${B}
Academic Discipline: ${o}
Catalog Location: Bay ${1+t%6}, Tier ${1+t%5}
Historical Era: ${h}

Hand-transcribed upon Linen Vellum with Iron-Gall Ink.
Bound in Calfskin with Cast Brass Hardware.

All rights reserved. Inscribed by the Scribes of ${l}.`}),T.push({pageType:"dedication",chapterTitle:"DEDICATION",pageNumber:5,content:this.generateDedication(g,l,i)});const G=this.generateForeword(s,u,m,l,c,1,i),V=this.generateForeword(s,u,m,l,c,2,i);T.push({pageType:"toc",chapterTitle:"TABLE OF CONTENTS",pageNumber:6,content:""}),T.push({pageType:"foreword",chapterTitle:"PREFACE TO THE ARCHIVAL EDITION",pageNumber:7,content:G}),T.push({pageType:"foreword",chapterTitle:"PREFACE (CONTINUED)",pageNumber:8,content:V}),T.push({pageType:"prologue",chapterTitle:"PROLOGUE: FOUNDATIONAL PREMISES",pageNumber:9,content:this.generatePrologue(s,o,u,l,c,b,i)});const $=[{title:"Frontispiece & Title Page",page:2},{title:"Preface & Archival Commentary",page:7},{title:"Prologue",page:9}],Y=this.getChapterTitlesForBook(s,o,v,i);let K=10;for(let H=0;H<v;H++){const nt=Y[H];$.push({title:nt,page:K});const et=2+Math.floor(i()*2);for(let ot=1;ot<=et;ot++){const pt=this.generateFittedChapterPageContent(s,o,y,H,ot,et,u,nt,l,c,b,t+H*1013+ot*97,i);T.push({pageType:"chapter",chapterTitle:`CHAPTER ${this.toRoman(H+1)}: ${nt.toUpperCase()}`,pageNumber:K,content:pt,headerText:`${u.toUpperCase()} • CHAPTER ${this.toRoman(H+1)}`,hasMathProof:b&&ot===2,marginalNote:C==="marginalia"&&ot===1?`Glosa ${this.toRoman(H+1)}: Inscriptum in ${l}.`:void 0}),K++}}return $.push({title:"Epilogue",page:K}),T.push({pageType:"epilogue",chapterTitle:"EPILOGUE: THE ETERNAL HORIZON",pageNumber:K,content:this.generateEpilogue(s,u,m,l,c,i),headerText:`${u.toUpperCase()} • EPILOGUE`}),K++,$.push({title:"Acknowledgments",page:K}),T.push({pageType:"acknowledgments",chapterTitle:"ACKNOWLEDGMENTS",pageNumber:K,content:this.generateAcknowledgments(m,l,c,i)}),K++,$.push({title:"Appendix: Scholarly Notes",page:K}),T.push({pageType:"appendix",chapterTitle:"APPENDIX & SCHOLARLY NOTES",pageNumber:K,content:this.generateAppendix(s,l,i)}),K++,$.push({title:"Glossary of Terms",page:K}),T.push({pageType:"glossary",chapterTitle:"GLOSSARY OF TERMS",pageNumber:K,content:this.generateGlossary(s,i)}),K++,$.push({title:"Author Biography",page:K}),T.push({pageType:"author-bio",chapterTitle:"ABOUT THE AUTHOR",pageNumber:K,content:this.generateAuthorBio(m,h,l,c,s,i)}),T[5].content=this.formatTableOfContents($),{id:`book_${t}_${s.replace(/\s+/g,"_")}`,title:u,subtitle:f,author:m,era:h,classification:s,subgenre:o,coverColor:p,accentColor:E,pages:T,fontFamily:R,fontSize:A,layoutFormat:C,writingStyle:y,isSTEM:b}}static isStemSubject(t,e,i,n){if(t==="Breakthroughs & Theories"||t==="Academic Texts & Grammar"&&(e.includes("Geometry")||e.includes("Logic")||e.includes("Arithmetic"))||t==="Professional Manuals"&&(e.includes("Architecture")||e.includes("Stonemasonry")||e.includes("Metallurgy")||e.includes("Clockmaking"))||t==="Dissertations"&&(e.includes("Cryptographic")||e.includes("Metaphysical"))||e.includes("Science")||e.includes("Natural Philosophy")||e.includes("Celestial")||e.includes("Resonance"))return!0;const s=`${i} ${n} ${e}`.toLowerCase();return["geometry","geometria","astronomia","mechanics","optics","calculus","ratio","theory","architecture","stonemasonry","metallurgy","alchemy","principles","cipher","cryptographic","harmonic","sphere","equations","vectors","flux","clockwork","astrolabe","proofs"].some(o=>s.includes(o))}static generateGenerativeTitle(t,e,i){if(i.includes("Linguistics")||i.includes("Philology")){const c=[`Lexicon of Classical Dialects in ${e}`,"Morphology and Syntax of the Ancient Tongue",`Etymological Roots of Ancient ${e}`,"Grammatica Antiqua of the High Scriptorium","The Phonetics of the First Inscriptions"];return c[Math.floor(t()*c.length)]}if(i.includes("Logic")||i.includes("Rhetoric")){const c=["The Canon of Dialectic and Syllogistic Inference",`Treatise on Modal Logic in ${e}`,"Discourses on Formal Demonstration","The Organon of Veritas and Proof","Axiomatic Structures of Classical Thought"];return c[Math.floor(t()*c.length)]}const n=this.TITLE_TEMPLATES[Math.floor(t()*this.TITLE_TEMPLATES.length)],s=this.ADJECTIVES[Math.floor(t()*this.ADJECTIVES.length)],a=this.NOUNS[Math.floor(t()*this.NOUNS.length)],o=this.CONCEPTS[Math.floor(t()*this.CONCEPTS.length)],l=this.CONCEPTS[(Math.floor(t()*this.CONCEPTS.length)+1)%this.CONCEPTS.length];return n.replace("[Adjective]",s).replace("[Noun]",a).replace("[Concept]",o).replace("[Concept2]",l).replace("[Realm]",e)}static formatTableOfContents(t){let e=`TABLE OF CONTENTS

`;return t.forEach(i=>{const n=" . ".repeat(Math.max(2,14-Math.floor(i.title.length/2)));e+=`${i.title.toUpperCase()}${n}${i.page}
`}),e}static generateFrontispieceText(t,e,i,n){const s={Fiction:"IN TENEBRIS LUX LUCET • IN SHADOWS THE LIGHT SHINES","Non-Fiction":"HISTORIA MAGISTRA VITAE • HISTORY IS THE TEACHER OF LIFE","Academic Texts & Grammar":"SCIENTIA IPSA POTESTAS EST • KNOWLEDGE ITSELF IS POWER","Professional Manuals":"MANU FACTUM ET LAPIDE STRUCTUM • BUILT BY HAND AND STONE","Breakthroughs & Theories":"PER ARDUA AD ASTRA • THROUGH STRUGGLE TO THE STARS",Dissertations:"VERITAS OMNIA VINCIT • TRUTH CONQUERS ALL","Mysticism & Magic":"IGNIS ET ASTRALIS ORDO • FIRE AND THE CELESTIAL ORDER","Tales & Mythology":"SEMPER VIGILANS • EVER WATCHFUL ACROSS THE AGES"};return`
       ╔══════════════════════════════════╗
       ║             ⚜  ⚜  ⚜              ║
       ║           ╔══════════╗           ║
       ║           ║  ✦    ✦  ║           ║
       ║        ╔══╩══════════╩══╗        ║
       ║        ║   ⚔  🏛  ⚔   ║        ║
       ║        ╚══╦══════════╦══╝        ║
       ║           ║  ✦    ✦  ║           ║
       ║           ╚══════════╝           ║
       ║             ❦  ❧  ❦              ║
       ╚══════════════════════════════════╝
    

"${s[t]||s.Fiction}"

Illuminated under the Authority of ${i} in ${e}.`}static generateDedication(t,e,i){const n=[`To the master craftsmen and architects of ${e}, whose chisel marks and geometrical canons remain our eternal guide.`,`For Lady ${this.FIRST_NAMES[Math.floor(i()*this.FIRST_NAMES.length)]}, who preserved the midnight oil and defended these manuscripts during the winter tempests of ${e}.`,`To the seekers of empirical truth across the cloisters of ${e}, holding a solitary candle against the darkness.`,`Dedicated to Chancellor ${t} of the High Council, who sheltered these scrolls in the stone vaults.`,"For those who dare to decipher the starlight, and who recognize the divine geometry underlying every stone."];return`





"${n[Math.floor(i()*n.length)]}"

— The Author`}static generateForeword(t,e,i,n,s,a,o){const l=`${this.FIRST_NAMES[Math.floor(o()*this.FIRST_NAMES.length)]} ${this.SURNAMES_AND_EPITHETS[Math.floor(o()*this.SURNAMES_AND_EPITHETS.length)]}`;return a===1?`It is with profound reverence that ${s} presents this archival edition of ${e}. For generations, the original parchment folios lay securely preserved within the stone chests of ${n}, shielded from the elements and the turbulence of forgotten wars.

The author, ${i}, was a celebrated authority in ${t.toLowerCase()}. Applying rigorous observation, sacred proportion, and empirical discipline, their conclusions continue to illuminate scholars across the civilized realms.

As the reader turns these leaves, remember that wisdom is not a passive heirloom, but an active covenant between past and present.`:`In preparing this definitive codex, the scribes of ${s} have carefully verified every citation against the original calfskin folios. Minor annotations in the margins have been preserved, for they reveal the living intellectual debate that surrounded this work.

May this treatise inspire all scholars who walk these silent cloisters. Let the candle burn bright upon the study desk, and let no word of truth be forgotten.

— Prefect ${l}
Custodian of the Archives of ${n}`}static generatePrologue(t,e,i,n,s,a,o){const l=a?`

The mathematical derivations and technical figures contained within these pages have been verified using the calibrated instruments of ${s}. Let no reader assume that geometry is detached from reality; for every equation inscribed upon these leaves reflects the exact physical laws governing keystones, etheric resonance, and planetary orbits.`:`

Let the reader cast aside trivial distractions and step across the threshold into the deeper mysteries of ${t.toLowerCase()}. May the illuminated wisdom of the past grant insight into the unfolding destiny of ${n}.`;return`Before the first cornerstone was laid in the ancient city of ${n}, the principles of ${e.toLowerCase()} had already been decreed by the first masters. It is written that the cosmos speaks in a language of resonance, proportion, and light.

Within this volume of ${i}, we endeavor to bridge the chasm between ancient lore and empirical truth. Every observation recorded herein has been verified within the consecrated halls of ${s}.${l}`}static getChapterTitlesForBook(t,e,i,n){if(e.includes("Linguistics")||e.includes("Philology"))return["Morphology of Ancient Dialects","Rules of Classical Syntax","Etymological Transpositions","Orthography of Sacred Inscriptions","Phonetic Inflections in the First Tongue","Syntactical Syntheses"].slice(0,i);if(e.includes("Logic")||e.includes("Rhetoric"))return["The Canon of Syllogistic Inference","Modus Barbara and Modal Validity","Dialectical Refutation of Paradox","Axiomatic Foundations of Truth","The Structure of Sound Propositions","Formal Deductions"].slice(0,i);const s={Fiction:["The Threshold of Twilight","The Shadow in the Cloister","The Oath of Iron and Ash","The Awakening of the High Tower","Song of the Wounded Stag","The Battle of the North Gate"],"Non-Fiction":["Chronological Foundations","The Siege of the Outer Walls","Cultural Artifacts of Antiquity","Anatomy of Statecraft","The Great Reconstruction","Trade Across the Southern Straits"],"Academic Texts & Grammar":["Morphology of Ancient Dialects","Rules of Classical Syntax","Etymological Transpositions","Orthography of Sacred Runes","The Canon of Dialectic","Rhetorical Figures in Formal Discourse"],"Professional Manuals":["Preparation of Mortar & Keystones","Thermal Tempering of Knight Blades","Harvesting Lunar Nightshade","Foundations of Arch Buttresses","Standard Operating Protocols","Purification of Heavy Metals"],"Breakthroughs & Theories":["The Hypothesis of Etheric Flow","Mathematical Geometries of Astral Spheres","Observation of Particle Flux","Harmonic Resonance Theorems","Empirical Corroborations","The Prism Refraction Axiom"],Dissertations:["Theological Axioms of the Light","Epistemology of the Subterranean Mind","Excavation Findings at Level VII","Cryptographic Analysis of the Vault Seal","Synthesis & Concluding Theses","The Doctrine of Causality"],"Mysticism & Magic":["Igniting the Inner Hearth Flame","Invocations to the Starlight Wardens","Weaving the Wards of Protection","The Seven Veils of the Void","Rituals of Ascension","Alchemical Transmutation of the Spirit"],"Tales & Mythology":["The Primordial Slumber of the Earth","When the Lion Roared Over Silverpeak","The Tragedy of the Sunken Spires","The Celestial Falcon and the Wyrm","Legends of the High Barrows","The Song of the First King"]};return(s[t]||s.Fiction).slice(0,i)}static generateFittedChapterPageContent(t,e,i,n,s,a,o,l,c,h,u,d,f){if(i==="epic-verse"){const _=[`When shadows lengthen o'er the silent stone,
And solemn winds through empty cloisters moan,
The ancient guardians take their vigilant stand,
With silver blades unsheathed in righteous hand.`,`Behold the golden sun across the nave,
Where once the banner of the sovereign gave
Its proud salute unto the vaulted skies,
Before the stars in silent slumber rise.`,`No mortal iron can break the sacred seal,
Nor turn aside the truth that stones reveal;
From deep foundations to the spire on high,
The bells of ${c} shall never die.`,`Through iron gates where ancient monarchs trod,
Beneath the vaulted firmament of God,
The silent scrolls their mystic light bestow,
While centuries in solemn cadence flow.`],m=_[n%_.length],p=_[(n+1)%_.length];return`[VERSE CANTO ${n+1}]

${m}

${p}

❦ ════════════════════ ❧

*Refrain: "Hark to the chime that echoes in the deep, where forgotten kings their ancient vigil keep."*`}if(u)if(s===1){const _=["GOTHIC_ARCH","ASTROLABE_MERIDIAN","OPTICAL_PRISM","ALCHEMICAL_CRUCIBLE","CIPHER_LATTICE","WAVE_DISPERSION","VAULT_FLOORPLAN","SYLLOGISM_EULER"];let m=_[(d+n)%_.length];n===0&&(e.includes("Linguistics")||e.includes("Logic")?m="SYLLOGISM_EULER":e.includes("Celestial")||e.includes("Astral")?m="ASTROLABE_MERIDIAN":e.includes("Optics")||e.includes("Light")?m="OPTICAL_PRISM":e.includes("Metallurgy")||e.includes("Smelting")?m="ALCHEMICAL_CRUCIBLE":e.includes("Cryptographic")||e.includes("Runic")?m="CIPHER_LATTICE":e.includes("Wave")||e.includes("Resonance")?m="WAVE_DISPERSION":m="GOTHIC_ARCH");const p=`${m.replace(/_/g," ")} IN ${c.toUpperCase()}`,E=`Fig ${n+1}.1 — Verified in the Scriptorium of ${h}.`,b=[`To establish the empirical foundations of ${l.toLowerCase()}, the scholars of ${h} conducted precise measurements across the observatories of ${c}. Every structural and mathematical relation observed conforms strictly to invariant physical laws:`,`When analyzing the primary harmonics of ${l.toLowerCase()}, natural philosophers at ${h} demonstrated that continuous equilibrium is preserved along all boundary surfaces in ${c}:`,`An investigation into the foundational axioms of ${l.toLowerCase()} reveals that empirical observations recorded in ${c} match theoretical predictions within an experimental variance of less than $0.05\\%$:`],M=b[n%b.length],P=`[SVG_DIAGRAM:${m}:${p}:${E}:${d}]`;return`${M}

${P}`}else if(s===2){const _=lm.generateUniqueProof(e,n,s,c,h,d);let m=`[${_.theoremHeader}]

${_.premiseText}

${_.primaryEquation}

${_.stepHeader}

${_.stepLines.join(`

`)}`;return _.matrixEquation&&(m+=`

${_.matrixEquation}`),_.secondaryEquation&&(m+=`

${_.secondaryEquation}`),m+=`

${_.conclusionText}

[${_.qedText}]`,m}else{const _=[`Table of Verified Empirical Constants (${c})
• Primary Harmonic Modulus: ${(1.24+n*.18).toFixed(2)} GPa
• Critical Boundary Flux: ${(48.2+n*3.5).toFixed(1)} N/m²
• Resonant Wave Velocity: ${312+n*45} m/s
• Temperature Threshold: ${850+n*125}°C`,`Table of Observational Ephemerides (${h})
• Radial Meridian Offset: +${(.042+n*.008).toFixed(3)} rad
• Angular Precession Index: ${(24.5+n*2.1).toFixed(1)} arcsec
• Gravitational Curvature: ${(9.806+n*.012).toFixed(3)} m/s²
• Optical Transmittance: ${(98.4-n*.6).toFixed(1)}%`],m=_[n%_.length],p=`Following the mathematical validation derived in the preceding section, the data recorded above verifies that the physical systems of ${c} remain in steady-state equilibrium throughout all operational cycles.`;return`${m}

${p}`}const g=`${this.FIRST_NAMES[Math.floor(f()*this.FIRST_NAMES.length)]} ${this.SURNAMES_AND_EPITHETS[Math.floor(f()*this.SURNAMES_AND_EPITHETS.length)]}`;if(s===1){const _=`The historical records preserved within the archives of ${h} provide an extraordinary perspective upon ${l.toLowerCase()}. In the chronicles of ${c}, it is recorded that during Chapter ${this.toRoman(n+1)}, the council addressed key reforms.

Scholars and statecraft masters gathered within the stone cloisters to draft foundational edicts that would preserve order for centuries to come. Each decree was sealed with the signet of the High Chapter.`,m=`Eyewitness accounts describe how delegates from every guild assembled to resolve the great debate. As Arch-Scholar ${g} noted: "A crown may pass in a single night of battle, but the enduring truth carved into stone remains eternal."

Let us proceed to examine the specific articles of agreement.`;return`${_}

${m}`}else if(s===a){const _=`In concluding this analysis of ${l.toLowerCase()}, we recognize the enduring legacy left by the chroniclers of ${c}. The peace established during this era allowed philosophy and architecture to flourish across the provinces.

The monuments and archival codices that survive stand as silent witnesses to the triumph of wisdom over discord.`,m=`As the midnight bell strikes across the cloisters of ${h}, we bring this chapter to a close. In the subsequent section, we shall examine the secondary sources and correspondence preserved in the vault.

Finis Sectionis • May the light of truth never fade in ${c}.`;return`${_}

${m}`}else return`${`Furthermore, an examination of the secondary artifacts discovered during excavations in ${c} reveals fascinating cultural nuances. The ceremonial bronze chalices demonstrate that the craftsmen of ${h} possessed advanced metallurgical casting techniques.

Each inscription was carefully rendered in the classical script of the First Tongue, utilizing poetic meter that celebrated vigilance and duty.`}

Comparative studies conducted across neighboring archives further corroborate these findings, revealing an exchange of illuminated folios that bound the northern and southern realms in mutual prosperity.`}static generateEpilogue(t,e,i,n,s,a){return`Here terminates the core exposition of ${e}.

"The candle flame upon the reading desk may flicker and fade as the night deepens, but the illuminated word inscribed upon parchment remains forever impervious to the decay of time."

Through wars, schisms, and the silent passage of centuries, the insights of ${i} have endured within ${n}. May those who walk the halls of ${s} continue to seek, to question, and to preserve the heritage of ${t.toLowerCase()}.

Finis Coronat Opus • The End Crowns the Work.`}static generateAcknowledgments(t,e,i,n){return`The author wishes to express gratitude to:

• The High Chapter of ${i} for granting access to the sequestered vaults of ${e}.

• Master Scribe ${t} of the Iron Quill for meticulous transcription and correction of the draft leaves.

• The Guild of Illuminators for the gold-leaf drop caps, frontispiece engraving, and hand-tooled binding.

• Fellow scholars of ${e}, whose rigorous debates provided the intellectual crucible in which these ideas were refined.`}static generateAppendix(t,e,i){return`APPENDIX: HISTORICAL CITATIONS & COMPARATIVE CHRONOLOGY

1. Codex ${e} (Vol. IV, fol. 112r) — Primary source for the architectural dimensions of the first cathedral.

2. The Solstice Ephemeris (Year 1104) — Astronomical tables recording the celestial alignment of the meridian rings.

3. Liber Alchimia (MS-842) — Reference formulas for the preservation of oak gall ink and calfskin vellum.

4. Edict of the High Council of ${e} — Decreeing the perpetual preservation of all manuscripts.

All documents are held in the secure archives and may be inspected by petition.`}static generateGlossary(t,e){return`GLOSSARY OF TERMS

• Alembic: A classical distillation apparatus consisting of a cucurbit and helm.

• Apse: The semicircular vaulted recess at the eastern sanctuary of the cathedral.

• Clerestory: The upper tier of walls pierced with stained-glass lancet windows.

• Drop-Cap: An oversized, illuminated initial capital letter opening a chapter.

• Keystones: The central wedge-shaped stone locking an arch into place.

• Vellum: Fine parchment prepared from calfskin, noted for its durability.

• Wainscot: Polished dark oak paneling lining the lower interior stone walls.`}static generateAuthorBio(t,e,i,n,s,a){return`ABOUT THE AUTHOR

${t} was one of the most distinguished scholars of ${e} within ${i}. Appointed Senior Chronicler of ${n} at the age of thirty-two, they authored over twenty treatises on ${s.toLowerCase()}, architecture, and natural philosophy.

Their pioneering work in archival preservation established standards still practiced today. When not writing in their cell overlooking the cloisters of ${i}, they could be found lecturing before the Guild of Architects.

Their memory is preserved in the marble inscription plaque upon the southern ambulatory: "Sapientia Aeterna" (Eternal Wisdom).`}static toRoman(t){const e=[[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];let i="",n=t;for(const[s,a]of e)for(;n>=s;)i+=a,n-=s;return i||`${t}`}}class kn{static spineCache=new Map;static pageSideMat=null;static leatherBackMatCache=new Map;static getSpineTexture(t,e=!1){const i=`${t.id}_${t.coverColor}_${t.accentColor}_${e?"H":"V"}`;if(this.spineCache.has(i))return this.spineCache.get(i);const n=e?128:48,s=e?32:96,a=document.createElement("canvas");a.width=n,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});o.imageSmoothingEnabled=!1,e?this.drawHorizontalSpine(o,n,s,t):this.drawVerticalSpine(o,n,s,t);const l=new ws(a);return l.magFilter=he,l.minFilter=he,l.generateMipmaps=!1,l.colorSpace=xe,this.spineCache.set(i,l),l}static getBookMaterials(t,e=!1,i=-1){const n=this.getSpineTexture(t,e);let s=.55,a=.2;switch(t.accentColor){case"#ffd700":s=.38,a=.45;break;case"#d1d7e3":s=.32,a=.55;break;case"#c86d49":s=.42,a=.48;break;case"#e5b84c":s=.5,a=.3;break;case"#9a7838":s=.68,a=.18;break;case"#1a1614":s=.88,a=.02;break;case"#dfd2b5":s=.82,a=.05;break}const o=new Lt({map:n,roughness:s,metalness:a}),l=this.getLeatherCoverMaterial(t.coverColor),c=this.getPageEdgeMaterial(),h=i===-1;return[h?o:c,h?c:o,e?l:c,e?l:c,l,l]}static getPageEdgeMaterial(){if(!this.pageSideMat){const t=document.createElement("canvas");t.width=16,t.height=16;const e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#dfd3ad",e.fillRect(0,0,16,16),e.fillStyle="rgba(160, 140, 100, 0.45)";for(let n=1;n<16;n+=2)e.fillRect(0,n,16,1);const i=new ws(t);i.magFilter=he,i.minFilter=he,i.colorSpace=xe,this.pageSideMat=new Lt({map:i,roughness:.85,metalness:.05})}return this.pageSideMat}static getLeatherCoverMaterial(t){if(this.leatherBackMatCache.has(t))return this.leatherBackMatCache.get(t);const e=document.createElement("canvas");e.width=16,e.height=16;const i=e.getContext("2d");i.imageSmoothingEnabled=!1,i.fillStyle=t,i.fillRect(0,0,16,16),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(2,2,4,4),i.fillRect(9,3,5,3),i.fillRect(3,10,6,4),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,0,16,1),i.fillRect(0,15,16,1),i.fillRect(0,0,1,16),i.fillRect(15,0,1,16);const n=new ws(e);n.magFilter=he,n.minFilter=he,n.colorSpace=xe;const s=new Lt({map:n,roughness:.65,metalness:.08});return this.leatherBackMatCache.set(t,s),s}static drawVerticalSpine(t,e,i,n){t.fillStyle=n.coverColor,t.fillRect(0,0,e,i);const s=t.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0, 0, 0, 0.45)"),s.addColorStop(.18,"rgba(0, 0, 0, 0.0)"),s.addColorStop(.82,"rgba(0, 0, 0, 0.0)"),s.addColorStop(1,"rgba(0, 0, 0, 0.45)"),t.fillStyle=s,t.fillRect(0,0,e,i);const a=n.accentColor||"#ffd700",o=a==="#1a1614";o?(t.strokeStyle="rgba(0, 0, 0, 0.45)",t.strokeRect(2.5,2.5,e-5,i-5)):(t.strokeStyle="rgba(0, 0, 0, 0.35)",t.strokeRect(1.5,1.5,e-3,i-3),t.strokeStyle=a,t.strokeRect(2.5,2.5,e-5,i-5)),this.drawCornerBrackets(t,3,3,e-6,i-6,a),[12,38,58,84].forEach(d=>{t.fillStyle="rgba(0, 0, 0, 0.5)",t.fillRect(4,d-1,e-8,3),t.fillStyle=o?"rgba(0, 0, 0, 0.6)":a,t.fillRect(4,d,e-8,1)});const c=this.determineEmblem(n),h=e/2,u=i-22;this.drawEmblem(t,h,u,c,a),this.drawSpineTitle(t,e/2,25,n.title,a,o)}static drawHorizontalSpine(t,e,i,n){t.fillStyle=n.coverColor,t.fillRect(0,0,e,i);const s=t.createLinearGradient(0,0,0,i);s.addColorStop(0,"rgba(0, 0, 0, 0.4)"),s.addColorStop(.2,"rgba(0, 0, 0, 0.0)"),s.addColorStop(.8,"rgba(0, 0, 0, 0.0)"),s.addColorStop(1,"rgba(0, 0, 0, 0.4)"),t.fillStyle=s,t.fillRect(0,0,e,i);const a=n.accentColor||"#ffd700",o=a==="#1a1614";t.strokeStyle=o?"rgba(0, 0, 0, 0.5)":a,t.strokeRect(2.5,2.5,e-5,i-5);const l=this.determineEmblem(n);this.drawEmblem(t,16,i/2,l,a),this.drawEmblem(t,e-16,i/2,"cross",a),t.font='bold 9px "Cinzel", Georgia, serif',t.textAlign="center",t.textBaseline="middle";const c=n.title.length>20?n.title.slice(0,18)+"…":n.title;t.fillStyle="rgba(0, 0, 0, 0.7)",t.fillText(c.toUpperCase(),e/2+1,i/2+1),t.fillStyle=o?"rgba(0, 0, 0, 0.75)":a,t.fillText(c.toUpperCase(),e/2,i/2)}static drawCornerBrackets(t,e,i,n,s,a){t.fillStyle=a,t.fillRect(e,i,3,1),t.fillRect(e,i,1,3),t.fillRect(e+n-3,i,3,1),t.fillRect(e+n-1,i,1,3),t.fillRect(e,i+s-1,3,1),t.fillRect(e,i+s-3,1,3),t.fillRect(e+n-3,i+s-1,3,1),t.fillRect(e+n-1,i+s-3,1,3)}static drawSpineTitle(t,e,i,n,s,a){t.save(),t.textAlign="center",t.textBaseline="middle";const o=n.split(" "),l=[];let c="";for(const f of o)(c+" "+f).trim().length<=10?c=(c+" "+f).trim():(c&&l.push(c),c=f);c&&l.push(c);const h=l.slice(0,3),u=7,d=i-(h.length-1)*u/2;t.font='bold 7px "Cinzel", Georgia, serif',h.forEach((f,g)=>{const _=d+g*u;t.fillStyle="rgba(0, 0, 0, 0.75)",t.fillText(f.toUpperCase(),e+1,_+1),t.fillStyle=a?"rgba(0, 0, 0, 0.75)":s,t.fillText(f.toUpperCase(),e,_)}),t.restore()}static determineEmblem(t){switch(t.classification){case"Fiction":return"sword";case"Non-Fiction":return"cross";case"Academic Texts & Grammar":return"celtic";case"Professional Manuals":return"tree";case"Breakthroughs & Theories":return"compass";case"Dissertations":return"pillar";case"Mysticism & Magic":return"moon_stars";case"Tales & Mythology":return"lion";default:return"crest"}}static drawEmblem(t,e,i,n,s){switch(t.fillStyle=s,n){case"lion":t.fillRect(e-3,i-5,5,2),t.fillRect(e-2,i-3,5,5),t.fillRect(e-4,i-1,2,2),t.fillRect(e+2,i-2,2,3),t.fillRect(e-3,i+2,2,3),t.fillRect(e+1,i+2,2,3),t.fillRect(e+3,i-4,1,4);break;case"cross":case"celtic":t.fillRect(e-1,i-6,2,12),t.fillRect(e-4,i-3,8,2),t.fillRect(e-3,i-5,6,1),t.fillRect(e-3,i+5,6,1);break;case"moon_stars":t.fillRect(e-4,i-4,2,8),t.fillRect(e-2,i-5,3,1),t.fillRect(e-2,i+4,3,1),t.fillRect(e+2,i-1,2,2);break;case"sword":t.fillRect(e,i-6,1,12),t.fillRect(e-3,i+2,7,1),t.fillRect(e-1,i+5,3,1);break;case"pillar":t.fillRect(e-4,i-5,8,2),t.fillRect(e-2,i-3,4,7),t.fillRect(e-4,i+4,8,2);break;case"compass":t.fillRect(e,i-5,1,10),t.fillRect(e-5,i,10,1),t.fillRect(e-2,i-2,4,4);break;case"tree":default:t.fillRect(e,i-1,1,6),t.fillRect(e-3,i-4,6,3),t.fillRect(e-2,i-5,4,1);break}}}class cm{scene;atlas;container;animatedLights=[];globeSphereMesh;dustParticles;raycastableBooks=[];width=14;length=40;ceilingHeight=13;unitBoxGeom;deskPositions=[{x:-2.3,z:4},{x:2.3,z:8},{x:-2.3,z:12},{x:2.3,z:18},{x:-2.3,z:24},{x:2.3,z:30}];cratePositions=[{x:-3.8,z:33.5},{x:3.8,z:33.5}];constructor(t,e){this.scene=t,this.atlas=e,this.container=new Pt,this.container.name="GrandCathedralLibrary",this.scene.add(this.container),this.unitBoxGeom=new it(1,1,1),this.buildCathedralArchitecture(),this.buildGothicRibbedVaultArches(),this.buildModularBookshelfWallsAndInstancedBooks(),this.buildRollingLadders(),this.buildUpperBalconiesAndStairs(),this.buildStudyDesksAndBenches(),this.buildCelestialGlobe(),this.buildGrandChandeliers(),this.buildWallCandleSconces(),this.buildHeraldicBannersAndPlaques(),this.buildFloorClutterAndPiles(),this.buildStainedGlassAndVolumetricLightRays(),this.buildFloatingDustParticles()}setVisible(t){this.container.visible=t}ensureVisible(t){t.frustumCulled=!1}buildCathedralArchitecture(){const t=new Ee(this.width,this.length),e=new D(t,this.atlas.materials.stoneTileFloor);e.rotation.x=-Math.PI/2,e.position.set(0,0,16),e.receiveShadow=!0,this.ensureVisible(e),this.container.add(e);const i=new Ee(3.4,this.length-2),n=new D(i,this.atlas.materials.carpetRed);n.rotation.x=-Math.PI/2,n.position.set(0,.02,16),n.receiveShadow=!0,this.ensureVisible(n),this.container.add(n);const s=new Ee(3.4,.25),a=new D(s,this.atlas.materials.brassMetal);a.rotation.x=-Math.PI/2,a.position.set(0,.025,35.1);const o=new D(s,this.atlas.materials.brassMetal);o.rotation.x=-Math.PI/2,o.position.set(0,.025,-3.1),this.container.add(a,o);const l=new Ee(this.width,this.length),c=new D(l,this.atlas.materials.stoneBrick);c.rotation.x=Math.PI/2,c.position.set(0,this.ceilingHeight,16),this.ensureVisible(c),this.container.add(c);const h=new it(this.width,this.ceilingHeight,1),u=new D(h,this.atlas.materials.stoneBrick);u.position.set(0,this.ceilingHeight/2,36),u.castShadow=!0,u.receiveShadow=!0,this.ensureVisible(u);const d=new D(h,this.atlas.materials.stoneBrick);d.position.set(0,this.ceilingHeight/2,-4),d.castShadow=!0,d.receiveShadow=!0,this.ensureVisible(d);const f=new it(this.width,1.2,.15),g=new D(f,this.atlas.materials.darkOak);g.position.set(0,.6,35.4);const _=new D(f,this.atlas.materials.darkOak);_.position.set(0,.6,-3.4),this.container.add(u,d,g,_);const m=[0,6,12,18,24,30],p=this.ceilingHeight,E=.52,b=new Yt(.8,.88,.7,8),M=new Yt(E,E,p-1.4,12),P=new Yt(E+.04,E+.04,.12,12),R=new it(1.5,.7,1.5);m.forEach(A=>{[-4.3,4.3].forEach(C=>{const y=new Pt;y.position.set(C,0,A);const v=new D(b,this.atlas.materials.carvedStonePillar);v.position.set(0,.35,0),v.receiveShadow=!0;const T=new D(M,this.atlas.materials.carvedStonePillar);T.position.set(0,(p-1.4)/2+.7,0),T.castShadow=!0,T.receiveShadow=!0;const B=new D(P,this.atlas.materials.iron);B.position.set(0,2.4,0);const G=new D(P,this.atlas.materials.iron);G.position.set(0,4.8,0);const V=new D(R,this.atlas.materials.stoneBrick);V.position.set(0,p-.35,0),y.add(v,T,B,G,V),this.ensureVisible(y),this.container.add(y)})})}buildGothicRibbedVaultArches(){[0,6,12,18,24,30].forEach(e=>{const i=new Pt;i.position.set(0,0,e);const n=8.6,s=4,a=14;for(let c=0;c<a;c++){const h=c/a,u=(c+1)/a,d=-n/2+h*n,f=-n/2+u*n,g=this.ceilingHeight-.7-Math.pow(Math.abs(d)/(n/2),1.6)*s,_=this.ceilingHeight-.7-Math.pow(Math.abs(f)/(n/2),1.6)*s,m=Math.hypot(f-d,_-g),p=Math.atan2(_-g,f-d),E=new it(m+.05,.45,.55),b=new D(E,this.atlas.materials.stoneBrick);b.position.set((d+f)/2,(g+_)/2,0),b.rotation.z=p,i.add(b)}const o=new D(new it(.85,.75,.75),this.atlas.materials.stoneBrick);o.position.set(0,this.ceilingHeight-.7,0);const l=new D(new it(.5,.5,.8),this.atlas.materials.brassMetal);l.position.set(0,this.ceilingHeight-.7,0),i.add(o,l),this.ensureVisible(i),this.container.add(i)})}buildModularBookshelfWallsAndInstancedBooks(){const t=[this.atlas.materials.plaqueHistoria,this.atlas.materials.plaquePhilosophia,this.atlas.materials.plaqueScientia,this.atlas.materials.plaqueTheologia,this.atlas.materials.plaqueArcanum,this.atlas.materials.plaqueMythologia],e=5.5,i=6,n=[.8,1.6,2.4,3.2,4],s=.6,a=[];[-1,1].forEach(o=>{const l=o*6.5;for(let c=0;c<i;c++){const h=-1.5+c*e,u=new it(.08,4.4,e-.1),d=new D(u,this.atlas.materials.darkOak);d.position.set(o*6.82,2.2,h+e/2),d.receiveShadow=!0,this.ensureVisible(d),this.container.add(d);const f=new it(.35,4.5,.35),g=new D(f,this.atlas.materials.darkOak);g.position.set(l,2.25,h),this.ensureVisible(g);const _=new D(f,this.atlas.materials.darkOak);_.position.set(l,2.25,h+e),this.ensureVisible(_),this.container.add(g,_);const m=new it(.45,.45,e),p=new D(m,this.atlas.materials.darkOak);p.position.set(l,4.35,h+e/2),this.ensureVisible(p),this.container.add(p);const E=t[c%t.length],b=new Ee(1.8,.45),M=new D(b,E);M.position.set(l-o*.24,4.35,h+e/2),M.rotation.y=o===-1?Math.PI/2:-Math.PI/2,this.ensureVisible(M),this.container.add(M),n.forEach((P,R)=>{const A=new it(s,.08,e-.15),C=new D(A,this.atlas.materials.darkOak);C.position.set(o*6.55,P,h+e/2),C.receiveShadow=!0,this.ensureVisible(C),this.container.add(C);const y=h+.22,v=h+e-.22;let T=y,B=0;for(;T<v;){const G=(o===-1?1e6:2e6)+c*8e4+R*1e4+B*109+31,V=je.createPrng(G),$=v-T;if($<.07)break;if(V()<.14&&$>=.38){const K=2+Math.floor(V()*2),H=.28+V()*.06,nt=.38+V()*.05,et=.08+V()*.02,ot=T+H/2;for(let pt=0;pt<K;pt++){const Ft=G+pt*1013+7,J=je.generateBook(Ft),Z=P+.04+pt*et+et/2,dt=new jt,Q=new U(o*6.55,Z,ot),yt=new De(0,(V()-.5)*.08,0),Rt=new U(nt,et,H),Et=new Qe().setFromEuler(yt);dt.compose(Q,Et,Rt),a.push({bookData:J,matrix:dt,isHorizontal:!0,side:o})}T+=H+.015}else{const K=.08+V()*.06,H=.52+V()*.2,nt=.38+V()*.06,et=T+K/2,ot=P+.04+H/2,pt=G+43,Ft=je.generateBook(pt),J=new jt,Z=new U(o*6.55,ot,et),dt=new De(V()<.16?(V()-.5)*.08:0,0,0),Q=new U(nt,H,K),yt=new Qe().setFromEuler(dt);J.compose(Z,yt,Q),a.push({bookData:Ft,matrix:J,isHorizontal:!1,side:o}),T+=K+.004}B++}})}}),this.createInstancedBookMeshes(a)}createInstancedBookMeshes(t){const e=new Map;for(const i of t){const n=`${i.side}_${i.isHorizontal?"H":"V"}_${i.bookData.coverColor}_${i.bookData.accentColor}`;if(!e.has(n)){const s=kn.getBookMaterials(i.bookData,i.isHorizontal,i.side);e.set(n,{materials:s,instances:[]})}e.get(n).instances.push(i)}e.forEach(({materials:i,instances:n})=>{const s=n.length,a=new rl(this.unitBoxGeom,i,s),o=[];for(let l=0;l<s;l++)a.setMatrixAt(l,n[l].matrix),o.push(n[l].bookData);a.userData={isInstancedBooks:!0,books:o},a.instanceMatrix.needsUpdate=!0,a.receiveShadow=!0,a.frustumCulled=!1,this.raycastableBooks.push(a),this.container.add(a)})}buildRollingLadders(){[-1,1].forEach(e=>{const i=new Yt(.025,.025,33,8),n=new D(i,this.atlas.materials.brassMetal);n.position.set(e*6.22,4.35,15),n.rotation.x=Math.PI/2,this.ensureVisible(n),this.container.add(n)}),[{side:-1,z:1.25,height:4.45},{side:1,z:22.5,height:4.45}].forEach(({side:e,z:i,height:n})=>{const s=new Pt,a=.65,o=.16,l=new it(.06,n,.1),c=new D(l,this.atlas.materials.darkOak);c.position.set(0,n/2,-a/2);const h=new D(l,this.atlas.materials.darkOak);h.position.set(0,n/2,a/2),s.add(c,h);const u=11,d=new Yt(.025,.025,a,6);for(let b=1;b<u;b++){const M=b/u*(n-.4),P=new D(d,this.atlas.materials.woodPlanks);P.position.set(0,M,0),P.rotation.x=Math.PI/2,s.add(P)}const f=new Yt(.06,.06,.04,8),g=new D(f,this.atlas.materials.brassMetal);g.position.set(0,.04,-a/2),g.rotation.z=Math.PI/2;const _=new D(f,this.atlas.materials.brassMetal);_.position.set(0,.04,a/2),_.rotation.z=Math.PI/2,s.add(g,_);const m=new He(.05,.018,6,12,Math.PI),p=new D(m,this.atlas.materials.brassMetal);p.position.set(-e*.04,n-.1,-a/2);const E=new D(m,this.atlas.materials.brassMetal);E.position.set(-e*.04,n-.1,a/2),s.add(p,E),s.position.set(e*5.85,0,i),s.rotation.z=e*o,this.ensureVisible(s),this.container.add(s)})}buildUpperBalconiesAndStairs(){const n=new it(2,.15,30.5),s=new D(n,this.atlas.materials.woodPlanks);s.position.set(-5.7,4.5-.075,18.75),s.receiveShadow=!0,this.ensureVisible(s);const a=new D(n,this.atlas.materials.woodPlanks);a.position.set(5.7,4.5-.075,18.75),a.receiveShadow=!0,this.ensureVisible(a);const o=new it(.1,.85,30.5),l=new D(o,this.atlas.materials.darkOak);l.position.set(-4.7,4.5+.425,18.75),this.ensureVisible(l);const c=new D(o,this.atlas.materials.darkOak);c.position.set(4.7,4.5+.425,18.75),this.ensureVisible(c);const h=new Yt(.035,.035,30.5,8),u=new D(h,this.atlas.materials.brassMetal);u.position.set(-4.7,4.5+.88,18.75),u.rotation.x=Math.PI/2;const d=new D(h,this.atlas.materials.brassMetal);d.position.set(4.7,4.5+.88,18.75),d.rotation.x=Math.PI/2,[6,12,18,24,30].forEach(m=>{const p=new it(.6,.55,.35),E=new D(p,this.atlas.materials.darkOak);E.position.set(-4.8,4.5-.45,m),this.ensureVisible(E);const b=new D(p,this.atlas.materials.darkOak);b.position.set(4.8,4.5-.45,m),this.ensureVisible(b),this.container.add(E,b)}),this.container.add(s,a,l,c,u,d);const g=[5.35,6.25,7.15,8.05],_=[];[-1,1].forEach(m=>{const p=new it(.55,.2,30.5),E=new D(p,this.atlas.materials.darkOak);E.position.set(m*6.58,4.5+.1,18.75),this.container.add(E);const b=new it(.06,4.3,30.5),M=new D(b,this.atlas.materials.darkOak);M.position.set(m*6.85,4.5+2.15,18.75),M.receiveShadow=!0,this.ensureVisible(M),this.container.add(M);for(let A=3.5;A<=34;A+=5.5){const C=new it(.4,4.3,.35),y=new D(C,this.atlas.materials.darkOak);y.position.set(m*6.58,4.5+2.15,A),this.ensureVisible(y),this.container.add(y)}const P=new it(.5,.4,30.5),R=new D(P,this.atlas.materials.darkOak);R.position.set(m*6.58,4.5+4.25,18.75),this.ensureVisible(R),this.container.add(R),g.forEach((A,C)=>{const y=new it(.5,.08,30.5),v=new D(y,this.atlas.materials.darkOak);v.position.set(m*6.58,A,18.75),v.receiveShadow=!0,this.ensureVisible(v),this.container.add(v);let T=3.8;const B=33.6;let G=0;for(;T<B;){const V=(m===-1?3e6:4e6)+C*8e4+G*109+17,$=je.createPrng(V),Y=B-T;if(Y<.07)break;if($()<.12&&Y>=.38){const H=2+Math.floor($()*2),nt=.26+$()*.05,et=.32+$()*.04,ot=.07+$()*.02,pt=T+nt/2;for(let Ft=0;Ft<H;Ft++){const J=V+Ft*1013+7,Z=je.generateBook(J),dt=A+.04+Ft*ot+ot/2,Q=new jt,yt=new U(m*6.58,dt,pt),Rt=new De(0,($()-.5)*.08,0),Et=new U(et,ot,nt);Q.compose(yt,new Qe().setFromEuler(Rt),Et),_.push({bookData:Z,matrix:Q,isHorizontal:!0,side:m})}T+=nt+.015}else{const H=.08+$()*.05,nt=.44+$()*.18,et=.32+$()*.04,ot=T+H/2,pt=A+.04+nt/2,Ft=V+43,J=je.generateBook(Ft),Z=new jt,dt=new U(m*6.58,pt,ot),Q=new De($()<.16?($()-.5)*.08:0,0,0),yt=new U(et,nt,H);Z.compose(dt,new Qe().setFromEuler(Q),yt),_.push({bookData:J,matrix:Z,isHorizontal:!1,side:m}),T+=H+.004}G++}})}),this.createInstancedBookMeshes(_),this.buildGrandIntegratedStaircase(-5.2,-2.8,3.5,4.5,-1),this.buildGrandIntegratedStaircase(5.2,-2.8,3.5,4.5,1)}buildGrandIntegratedStaircase(t,e,i,n,s){const a=new Pt,o=18,l=i-e,c=l/o,h=n/o,u=1.35;for(let B=0;B<o;B++){const G=e+(B+.5)*c,V=0,$=(B+1)*h,Y=B<4?(4-B)*.12:0,K=u+Y,H=t-s*(Y/2),nt=new it(K,$-V,c),et=new D(nt,this.atlas.materials.stoneBrick);et.position.set(H,$/2,G),et.receiveShadow=!0,a.add(et);const ot=new it(K+.06,.06,c+.04),pt=new D(ot,this.atlas.materials.darkOak);pt.position.set(H,$-.03,G),pt.receiveShadow=!0,a.add(pt);const Ft=s*(4.7-(B<4?(4-B)*.15:0));if(B%2===0){const J=new Yt(.025,.025,.85,6),Z=new D(J,this.atlas.materials.darkOak);Z.position.set(Ft,$+.425,G),a.add(Z)}}const d=Math.hypot(l,n),f=Math.atan2(n,l),g=new Yt(.035,.035,d,8),_=new D(g,this.atlas.materials.brassMetal);_.position.set(s*4.7,n/2+.88,(e+i)/2),_.rotation.x=Math.PI/2-f,a.add(_);const m=s*4.1,p=new it(.2,1.15,.2),E=new D(p,this.atlas.materials.darkOak);E.position.set(m,.575,e);const b=new D(new bi(.1,8,8),this.atlas.materials.brassMetal);b.position.set(m,1.2,e);const M=new D(new it(.18,.26,.18),this.atlas.materials.brassMetal);M.position.set(m,1.42,e);const P=new Ve(16760405,3.2,7,1.4);P.position.set(m,1.45,e),this.animatedLights.push({light:P,baseIntensity:3.2,flickerSpeed:4.2+(s>0?.5:0),flickerPhase:s>0?1:0}),a.add(E,b,M,P);const R=0,A=-e/l*n,C=new D(new it(.7,.65,.85),this.atlas.materials.carvedStonePillar);C.position.set(s*4.3,A-.25,R),C.receiveShadow=!0;const y=new D(new it(.1,.12,.95),this.atlas.materials.iron);y.position.set(s*4.3,A+.15,R),a.add(C,y);const v=new D(p,this.atlas.materials.darkOak);v.position.set(s*4.7,n+.575,i);const T=new D(new bi(.1,8,8),this.atlas.materials.brassMetal);T.position.set(s*4.7,n+1.2,i),a.add(v,T),this.ensureVisible(a),this.container.add(a)}buildStudyDesksAndBenches(){[{x:-2.3,z:4,seed:101,title:"Tome of Astral Pyromancy"},{x:2.3,z:8,seed:202,title:"The Chronicles of Sunken Alderia"},{x:-2.3,z:12,seed:303,title:"Treatise on Living Stone & Mortar"},{x:2.3,z:18,seed:404,title:"The Sacred Rites of the Golden Lion"},{x:-2.3,z:24,seed:505,title:"Secrets of the Clockwork Heavens"},{x:2.3,z:30,seed:606,title:"The Lost Gospel of Veritas"}].forEach((e,i)=>{const n=new Pt;n.position.set(e.x,0,e.z);const s=new D(new it(1.8,.12,1),this.atlas.materials.darkOak);s.position.set(0,.85,0),s.receiveShadow=!0,n.add(s);const a=new it(.12,.85,.12),o=new it(.13,.06,.13);[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([Y,K])=>{const H=new D(a,this.atlas.materials.darkOak);H.position.set(Y,.425,K);const nt=new D(o,this.atlas.materials.brassMetal);nt.position.set(Y,.03,K),n.add(H,nt)});const c=new D(new it(1.6,.08,.45),this.atlas.materials.darkOak);c.position.set(0,.5,-.75);const h=new D(new it(.1,.5,.35),this.atlas.materials.darkOak);h.position.set(-.6,.25,-.75);const u=new D(new it(.1,.5,.35),this.atlas.materials.darkOak);u.position.set(.6,.25,-.75),n.add(c,h,u);const d=this.buildDeskCandelabra();d.position.set(-.65,.91,.25),n.add(d);const f=new Ve(16765542,3.8,6.5,1.5);f.position.set(-.65,1.35,.25),n.add(f),this.animatedLights.push({light:f,baseIntensity:3.8,flickerSpeed:4.5+i*.7,flickerPhase:i*1.2});const g=new Pt;g.position.set(-.45,.91,-.28);const _=new D(new Yt(.04,.05,.07,8),new Lt({color:1579552,roughness:.2,metalness:.8}));_.position.set(0,.035,0);const m=new D(new Yt(.005,.015,.26,6),new Lt({color:16117468,roughness:.6}));m.position.set(.02,.12,0),m.rotation.z=-.35,g.add(_,m),n.add(g);const p=new D(new Yt(.03,.03,.32,8),this.atlas.materials.mapScroll);p.position.set(.45,.94,.3),p.rotation.z=Math.PI/2,p.rotation.y=.4,n.add(p);const E=new Pt;E.position.set(-.25,.92,-.25),E.rotation.y=.6;const b=new D(new He(.06,.01,8,16),this.atlas.materials.brassMetal);b.rotation.x=Math.PI/2;const M=new D(new Yt(.055,.055,.005,12),new Lt({color:15464447,transparent:!0,opacity:.4,roughness:.1})),P=new D(new Yt(.012,.012,.14,6),this.atlas.materials.darkOak);P.position.set(0,0,.12),P.rotation.x=Math.PI/2,E.add(b,M,P),n.add(E);const R=je.generateBook(e.seed,e.title),A=new it(.55,.06,.38),C=kn.getBookMaterials(R,!0,1),y=new D(A,C);y.position.set(0,.94,0),y.rotation.y=(Math.random()-.5)*.2,y.userData={isBook:!0,bookData:R,originalColor:R.coverColor},this.raycastableBooks.push(y),n.add(y);const v=je.generateBook(e.seed+1e3),T=kn.getBookMaterials(v,!0,1),B=new D(new it(.28,.06,.38),T);B.position.set(.6,.94,-.2),B.userData={isBook:!0,bookData:v,originalColor:v.coverColor},this.raycastableBooks.push(B);const G=je.generateBook(e.seed+2e3),V=kn.getBookMaterials(G,!0,1),$=new D(new it(.26,.05,.35),V);$.position.set(.6,.995,-.2),$.rotation.y=.18,$.userData={isBook:!0,bookData:G,originalColor:G.coverColor},this.raycastableBooks.push($),n.add(B,$),this.ensureVisible(n),this.container.add(n)})}buildDeskCandelabra(){const t=new Pt,e=new D(new Yt(.08,.1,.04,8),this.atlas.materials.brassMetal),i=new D(new Yt(.02,.025,.22,8),this.atlas.materials.brassMetal);i.position.set(0,.11,0);const n=new He(.1,.015,6,12,Math.PI),s=new D(n,this.atlas.materials.brassMetal);s.position.set(0,.18,0),t.add(e,i,s);const a=[{x:0,y:.22},{x:-.1,y:.18},{x:.1,y:.18}],o=new Yt(.035,.02,.02,8),l=new Yt(.022,.022,.18,6),c=new mn(.022,.06,6),h=new ti({color:16765542}),u=new Lt({color:16775910,roughness:.4});return a.forEach(d=>{const f=new D(o,this.atlas.materials.brassMetal);f.position.set(d.x,d.y+.01,0);const g=new D(l,u);g.position.set(d.x,d.y+.1,0);const _=new D(c,h);_.position.set(d.x,d.y+.21,0),t.add(f,g,_)}),t}buildCelestialGlobe(){const t=new Pt;t.position.set(0,0,14);const e=new Yt(1,1.25,.6,8),i=new D(e,this.atlas.materials.darkOak);i.position.set(0,.3,0),i.receiveShadow=!0;const n=new D(new Yt(1.02,1.02,.08,8),this.atlas.materials.brassMetal);n.position.set(0,.56,0),t.add(i,n),[0,Math.PI/2,Math.PI,Math.PI*3/2].forEach(d=>{const f=new D(new it(.12,.8,.12),this.atlas.materials.brassMetal);f.position.set(Math.cos(d)*.7,.95,Math.sin(d)*.7),t.add(f)});const a=new D(new He(1.05,.07,8,24),this.atlas.materials.brassMetal);a.position.set(0,1.55,0),a.rotation.y=Math.PI/4;const o=new D(new He(1.05,.06,8,24),this.atlas.materials.brassMetal);o.position.set(0,1.55,0),o.rotation.x=Math.PI/2;const l=new D(new He(1.08,.08,8,24),this.atlas.materials.brassMetal);l.position.set(0,1.55,0),l.rotation.set(.4,.4,0);const c=new bi(.84,16,16);this.globeSphereMesh=new D(c,this.atlas.materials.globeTexture),this.globeSphereMesh.position.set(0,1.55,0);const h=new Ve(16771757,6.5,12,1.4);h.position.set(0,1.55,0),t.add(a,o,l,this.globeSphereMesh,h),this.animatedLights.push({light:h,baseIntensity:6.5,flickerSpeed:1.8,flickerPhase:0});const u=je.generateBook(99999,"The Celestial Atlas of the Spheres");this.globeSphereMesh.userData={isBook:!0,bookData:u,originalColor:"#f7d583"},this.raycastableBooks.push(this.globeSphereMesh),this.ensureVisible(t),this.container.add(t)}buildGrandChandeliers(){[4,16,28].forEach((e,i)=>{const n=new Pt;n.position.set(0,6.2,e);const s=new Yt(.04,.04,6.8,6),a=new D(s,this.atlas.materials.iron);a.position.set(0,3.4,0),n.add(a);const o=new D(new Yt(.06,.06,1.4,8),this.atlas.materials.iron);o.position.set(0,.2,0);const l=new D(new bi(.18,8,8),this.atlas.materials.brassMetal);l.position.set(0,-.5,0),n.add(o,l);const c=new D(new He(1.8,.09,8,24),this.atlas.materials.iron);c.rotation.x=Math.PI/2,n.add(c);const h=new D(new He(1,.07,8,16),this.atlas.materials.iron);h.rotation.x=Math.PI/2,h.position.set(0,.45,0),n.add(h);const u=(f,g,_)=>{for(let m=0;m<_;m++){const p=m/_*Math.PI*2,E=Math.cos(p)*f,b=Math.sin(p)*f,M=new D(new Yt(.05,.03,.03,8),this.atlas.materials.brassMetal);M.position.set(E,g+.015,b);const P=new D(new Yt(.04,.04,.26,6),new Lt({color:16775910,roughness:.4}));P.position.set(E,g+.14,b);const R=new D(new mn(.03,.08,6),new ti({color:16765542}));R.position.set(E,g+.3,b),n.add(M,P,R)}};u(1.8,0,10),u(1,.45,6);const d=new Ve(16760405,12,16,1.3);d.position.set(0,0,0),n.add(d),this.animatedLights.push({light:d,baseIntensity:12,flickerSpeed:3.2+i*.8,flickerPhase:i*1.4}),this.ensureVisible(n),this.container.add(n)})}buildWallCandleSconces(){[3,9,15,21,27,33].forEach((e,i)=>{const n=new Ve(16758869,3.6,8.5,1.5);n.position.set(-4.1,2.5,e),this.container.add(n);const s=new Ve(16758869,3.6,8.5,1.5);s.position.set(4.1,2.5,e),this.container.add(s),this.animatedLights.push({light:n,baseIntensity:3.6,flickerSpeed:4+i*.5,flickerPhase:i},{light:s,baseIntensity:3.6,flickerSpeed:4.2+i*.5,flickerPhase:i+.5}),[-1,1].forEach(a=>{const o=a*4.3,l=2.4,c=new Pt;c.position.set(o-a*.45,l,e);const h=new D(new it(.06,.35,.18),this.atlas.materials.iron),u=new D(new it(.24,.05,.05),this.atlas.materials.iron);u.position.set(-a*.12,.05,0),c.add(h,u),[-.08,.08].forEach(d=>{const f=new D(new Yt(.04,.02,.02,6),this.atlas.materials.brassMetal);f.position.set(-a*.22,.07,d);const g=new D(new Yt(.03,.03,.22,6),new Lt({color:16775910,roughness:.4}));g.position.set(-a*.22,.18,d);const _=new D(new mn(.025,.06,6),new ti({color:16765542}));_.position.set(-a*.22,.31,d),c.add(f,g,_)}),this.ensureVisible(c),this.container.add(c)})})}buildHeraldicBannersAndPlaques(){const t=[5,11,17,23,29],e=new Ee(1.2,2.6);t.forEach((i,n)=>{const s=n%2===0?this.atlas.materials.heraldicLionBanner:this.atlas.materials.heraldicCrossBanner,a=new Yt(.025,.025,1.4,8),o=new bi(.045,6,6);[-1,1].forEach(l=>{const c=new Pt;c.position.set(l*4.34,3.4,i),c.rotation.y=l===-1?Math.PI/2:-Math.PI/2;const h=new D(e,s);h.position.set(0,-.6,.02);const u=new D(a,this.atlas.materials.brassMetal);u.rotation.z=Math.PI/2,u.position.set(0,.7,.04);const d=new D(o,this.atlas.materials.brassMetal);d.position.set(-.7,.7,.04);const f=new D(o,this.atlas.materials.brassMetal);f.position.set(.7,.7,.04),c.add(h,u,d,f),this.ensureVisible(c),this.container.add(c)})})}buildFloorClutterAndPiles(){[{x:-3.8,z:6.8,seed:801},{x:3.8,z:12.8,seed:802},{x:-3.8,z:24.8,seed:803},{x:3.8,z:30.8,seed:804}].forEach(e=>{const i=new Pt;i.position.set(e.x,0,e.z);const n=3;for(let s=0;s<n;s++){const a=je.generateBook(e.seed+s*53),o=kn.getBookMaterials(a,!0,1),l=new D(new it(.38,.07,.52),o);l.position.set(s%2*.04,.035+s*.07,s%3*.02),l.rotation.y=s*.18,l.userData={isBook:!0,bookData:a,originalColor:a.coverColor},this.raycastableBooks.push(l),i.add(l)}this.ensureVisible(i),this.container.add(i)}),this.cratePositions.forEach(e=>{const i=new Pt;i.position.set(e.x,0,e.z);const n=new D(new it(.85,.75,.85),this.atlas.materials.woodPlanks);n.position.set(0,.375,0),n.receiveShadow=!0;const s=new it(.12,.12,.12);[[-.42,.74,-.42],[.42,.74,-.42],[-.42,.74,.42],[.42,.74,.42]].forEach(([l,c,h])=>{const u=new D(s,this.atlas.materials.brassMetal);u.position.set(l,c,h),i.add(u)});const o=new D(new Yt(.04,.04,.55,8),this.atlas.materials.mapScroll);o.position.set(.1,.79,0),o.rotation.z=Math.PI/2,o.rotation.y=.3,i.add(n,o),this.ensureVisible(i),this.container.add(i)})}buildStainedGlassAndVolumetricLightRays(){const t=new Ee(5.2,8.5),e=new D(t,this.atlas.materials.stainedGlassGothic);e.position.set(0,7.5,35.4),e.rotation.y=Math.PI,this.ensureVisible(e),this.container.add(e);const i=new ti({color:16772822,transparent:!0,opacity:.14,side:Wt,depthWrite:!1,blending:Hn}),n=new Ee(4.5,24),s=new D(n,i);s.position.set(0,6,22),s.rotation.set(-.72,0,0),this.ensureVisible(s);const a=new D(n,i);a.position.set(-2.8,6,22),a.rotation.set(-.72,-.15,-.1),this.ensureVisible(a);const o=new D(n,i);o.position.set(2.8,6,22),o.rotation.set(-.72,.15,.1),this.ensureVisible(o),this.container.add(s,a,o)}buildFloatingDustParticles(){const e=new Float32Array(600);for(let s=0;s<200;s++)e[s*3+0]=(Math.random()-.5)*12,e[s*3+1]=.5+Math.random()*10.5,e[s*3+2]=(Math.random()-.5)*36+16;const i=new Te;i.setAttribute("position",new $e(e,3));const n=new al({color:16771256,size:.035,transparent:!0,opacity:.5,blending:Hn,depthWrite:!1});this.dustParticles=new th(i,n),this.container.add(this.dustParticles)}getElevation(t,e,i=0){const n=t>=-6.1&&t<=-3.8,s=t>=3.8&&t<=6.1;if((n||s)&&e>=-2.8&&e<=3.5){const a=(e- -2.8)/6.3;return Math.max(0,Math.min(4.5,a*4.5))}return i>=2.5&&e>=3.5&&e<=34.5&&(n||s)?4.5:0}isBlocked(t,e,i=0){if(t<=-6.1||t>=6.1||e<=-3.2||e>=34.8)return!0;if(i>=2.5)return e>=3.5&&e<=34.5&&t>-4.6&&t<4.6||t<-6.1||t>6.1;const n=[6,12,18,24,30];for(const o of n)if(Math.abs(e-o)<.65&&(Math.abs(t- -4.3)<.65||Math.abs(t-4.3)<.65))return!0;const s=t-0,a=e-14;if(s*s+a*a<1.15*1.15)return!0;for(const o of this.deskPositions)if(Math.abs(t-o.x)<.95&&Math.abs(e-o.z)<.65)return!0;for(const o of this.cratePositions)if(Math.abs(t-o.x)<.55&&Math.abs(e-o.z)<.55)return!0;return(t<-6.1||t>6.1)&&e>=-1.5&&e<=34}update(t){if(this.globeSphereMesh&&(this.globeSphereMesh.rotation.y=t*.25),this.animatedLights.forEach(e=>{const i=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.35+Math.cos(t*9+e.flickerPhase)*.15;e.light.intensity=Math.max(.8,e.baseIntensity+i)}),this.dustParticles){const e=this.dustParticles.geometry.attributes.position,i=e.count;for(let n=0;n<i;n++){let s=e.getY(n)-.002;s<.5&&(s=11),e.setY(n,s);const a=e.getX(n)+Math.sin(t*.4+n)*.0015;e.setX(n,a)}e.needsUpdate=!0}}}class hm{group;bodyGroup;fpsViewmodelGroup;camera;flashlightSpot;flashlightTarget;flashlightForwardLight;flashlightBulbLight;cameraLanternLight;get fpsLanternLight(){return this.cameraLanternLight}fpsFlashlight;fpsLantern;fpsSword;fpsShield;leftLegPivot;rightLegPivot;leftArmPivot;rightArmPivot;torsoMesh;leftPauldron;rightPauldron;headGroup;tppFlashlight;tppLantern;tppLanternLight;tppSword;tppShield;isFirstPerson=!1;activeItemId=null;baseLanternIntensity=22;walkTime=0;constructor(t,e){this.camera=e,this.group=new Pt,this.group.name="PlayerCharacter",this.flashlightSpot=new rh(16777215,48,160,Math.PI/3.2,.25,.85),this.flashlightSpot.position.set(0,0,0),this.flashlightSpot.castShadow=!0,this.flashlightSpot.shadow.bias=-.001,this.flashlightSpot.shadow.mapSize.width=1024,this.flashlightSpot.shadow.mapSize.height=1024,this.flashlightTarget=new de,this.flashlightTarget.name="FlashlightTarget",this.flashlightTarget.position.set(0,0,-50),this.flashlightSpot.target=this.flashlightTarget,this.flashlightForwardLight=new Ve(16777215,6,45,1),this.flashlightForwardLight.position.set(0,0,-6),this.flashlightBulbLight=new Ve(16777215,4.5,16,1.1),this.flashlightBulbLight.position.set(.24,-.2,-.42),this.cameraLanternLight=new Ve(16758852,this.baseLanternIntensity,34,1.2),this.cameraLanternLight.position.set(.24,-.18,-.42),this.cameraLanternLight.castShadow=!1,this.cameraLanternLight.visible=!1,this.fpsViewmodelGroup=new Pt,this.fpsViewmodelGroup.name="FPS_Viewmodel",this.fpsFlashlight=new Pt,this.fpsFlashlight.position.set(.24,-.2,-.42),this.fpsFlashlight.rotation.set(.04,-.04,0);const i=new D(new it(.08,.08,.28),t.materials.iron),n=new D(new it(.12,.12,.08),t.materials.iron);n.position.set(0,0,-.18);const s=new D(new it(.1,.1,.02),new ti({color:16777215}));s.position.set(0,0,-.22),this.fpsFlashlight.add(i,n,s),this.fpsViewmodelGroup.add(this.fpsFlashlight),this.fpsLantern=this.buildOrnateLantern(t,!0),this.fpsLantern.position.set(.26,-.24,-.46),this.fpsLantern.rotation.set(.06,-.08,.02),this.fpsViewmodelGroup.add(this.fpsLantern),this.fpsSword=new Pt,this.fpsSword.position.set(.26,-.24,-.42),this.fpsSword.rotation.set(-.45,.2,-.1);const a=new D(new it(.06,.75,.03),t.materials.iron);a.position.set(0,.38,0);const o=new D(new it(.22,.04,.06),t.materials.iron),l=new D(new it(.05,.18,.05),t.materials.woodBeam);l.position.set(0,-.1,0),this.fpsSword.add(a,o,l),this.fpsViewmodelGroup.add(this.fpsSword),this.fpsShield=new Pt,this.fpsShield.position.set(-.28,-.22,-.42),this.fpsShield.rotation.set(.1,.35,-.1);const c=new D(new it(.48,.6,.05),t.materials.woodPlanks),h=new D(new it(.15,.15,.08),t.materials.iron);h.position.set(0,0,.03),this.fpsShield.add(c,h),this.fpsViewmodelGroup.add(this.fpsShield),this.camera&&(this.camera.add(this.fpsViewmodelGroup),this.camera.add(this.flashlightSpot),this.camera.add(this.flashlightTarget),this.camera.add(this.flashlightForwardLight),this.camera.add(this.flashlightBulbLight),this.camera.add(this.cameraLanternLight)),this.bodyGroup=new Pt,this.bodyGroup.name="TPP_PlayerBody",this.group.add(this.bodyGroup);const u=t.materials.iron,d=new Lt({color:2237998,roughness:.8,side:Wt}),f=new Lt({color:14262374,roughness:.6,side:Wt}),g=new Lt({color:1775650,roughness:.9,side:Wt});this.leftLegPivot=new Pt,this.leftLegPivot.position.set(-.16,.7,0);const _=new D(new it(.2,.7,.22),d);_.position.set(0,-.35,0),_.castShadow=!0,_.receiveShadow=!0,this.leftLegPivot.add(_),this.bodyGroup.add(this.leftLegPivot),this.rightLegPivot=new Pt,this.rightLegPivot.position.set(.16,.7,0);const m=new D(new it(.2,.7,.22),d);m.position.set(0,-.35,0),m.castShadow=!0,m.receiveShadow=!0,this.rightLegPivot.add(m),this.bodyGroup.add(this.rightLegPivot),this.torsoMesh=new D(new it(.52,.7,.36),u),this.torsoMesh.position.set(0,1.05,0),this.torsoMesh.castShadow=!0,this.torsoMesh.receiveShadow=!0,this.bodyGroup.add(this.torsoMesh);const p=new it(.22,.2,.4);this.leftPauldron=new D(p,u),this.leftPauldron.position.set(-.35,1.35,0),this.leftPauldron.castShadow=!0,this.rightPauldron=new D(p,u),this.rightPauldron.position.set(.35,1.35,0),this.rightPauldron.castShadow=!0,this.bodyGroup.add(this.leftPauldron,this.rightPauldron);const E=new it(.16,.58,.18);this.leftArmPivot=new Pt,this.leftArmPivot.position.set(-.36,1.35,0);const b=new D(E,u);b.position.set(0,-.26,0),b.castShadow=!0,this.leftArmPivot.add(b),this.bodyGroup.add(this.leftArmPivot),this.rightArmPivot=new Pt,this.rightArmPivot.position.set(.36,1.35,0);const M=new D(E,u);M.position.set(0,-.26,0),M.castShadow=!0,this.rightArmPivot.add(M),this.bodyGroup.add(this.rightArmPivot),this.headGroup=new Pt,this.headGroup.position.set(0,1.55,0);const P=new D(new it(.38,.38,.38),f);P.castShadow=!0;const R=new D(new it(.42,.24,.42),g);R.position.set(0,.14,-.02),R.castShadow=!0,this.headGroup.add(P,R),this.bodyGroup.add(this.headGroup),this.tppFlashlight=new Pt,this.tppFlashlight.position.set(.42,.85,.25);const A=new D(new it(.12,.12,.36),t.materials.iron);A.castShadow=!0;const C=new D(new it(.16,.16,.1),t.materials.iron);C.position.set(0,0,-.22),C.castShadow=!0;const y=new D(new it(.13,.13,.02),new ti({color:16777215}));y.position.set(0,0,-.27),this.tppFlashlight.add(A,C,y),this.bodyGroup.add(this.tppFlashlight),this.tppLantern=this.buildOrnateLantern(t,!1),this.tppLantern.position.set(.44,.85,.3),this.tppLanternLight=new Ve(16758852,18,34,1.2),this.tppLanternLight.position.set(0,.1,0),this.tppLanternLight.castShadow=!1,this.tppLanternLight.visible=!1,this.tppLantern.add(this.tppLanternLight),this.bodyGroup.add(this.tppLantern),this.tppSword=new Pt,this.tppSword.position.set(.42,.85,.35),this.tppSword.rotation.set(-.3,0,.2);const v=new D(new it(.08,.85,.04),t.materials.iron);v.position.set(0,.42,0),v.castShadow=!0;const T=new D(new it(.26,.05,.08),t.materials.iron),B=new D(new it(.06,.2,.06),t.materials.woodBeam);B.position.set(0,-.12,0),this.tppSword.add(v,T,B),this.bodyGroup.add(this.tppSword),this.tppShield=new Pt,this.tppShield.position.set(-.46,.95,.15),this.tppShield.rotation.set(0,-.3,0);const G=new D(new it(.55,.7,.06),t.materials.woodPlanks);G.castShadow=!0;const V=new D(new it(.18,.18,.1),t.materials.iron);V.position.set(0,0,.04),this.tppShield.add(G,V),this.bodyGroup.add(this.tppShield),this.setActiveItem(null),this.setFirstPerson(!0)}buildOrnateLantern(t,e){const i=new Pt,n=e?1:1.15,s=t.materials.brassMetal,a=t.materials.iron,o=new Lt({color:16775910,transparent:!0,opacity:.45,roughness:.1,metalness:.1,depthWrite:!1}),l=new Lt({color:16775387,roughness:.45}),c=new ti({color:16759586}),h=new ti({color:16768358,transparent:!0,opacity:.65,blending:Hn,depthWrite:!1}),u=new D(new it(.14*n,.03*n,.14*n),s);u.position.set(0,.015*n,0),i.add(u),[[-.05,-.05],[.05,-.05],[-.05,.05],[.05,.05]].forEach(([y,v])=>{const T=new D(new it(.025*n,.015*n,.025*n),a);T.position.set(y*n,.007*n,v*n),i.add(T)});const f=new it(.015*n,.16*n,.015*n);[[-.055,-.055],[.055,-.055],[-.055,.055],[.055,.055]].forEach(([y,v])=>{const T=new D(f,s);T.position.set(y*n,.11*n,v*n),i.add(T)});const _=new D(new it(.11*n,.15*n,.11*n),o);_.position.set(0,.11*n,0),i.add(_);const m=new D(new Yt(.02*n,.02*n,.05*n,6),l);m.position.set(0,.055*n,0);const p=new D(new Yt(.003*n,.003*n,.015*n,4),a);p.position.set(0,.085*n,0);const E=new D(new mn(.02*n,.055*n,6),c);E.position.set(0,.11*n,0);const b=new D(new bi(.04*n,8,8),h);b.position.set(0,.11*n,0),i.add(m,p,E,b);const M=new D(new it(.145*n,.025*n,.145*n),s);M.position.set(0,.195*n,0);const P=new D(new it(.1*n,.035*n,.1*n),s);P.position.set(0,.22*n,0);const R=new D(new Yt(.025*n,.035*n,.035*n,8),s);R.position.set(0,.25*n,0);const A=new D(new He(.028*n,.006*n,6,12),s);A.position.set(0,.285*n,0);const C=new D(new He(.065*n,.005*n,6,14,Math.PI),a);return C.position.set(0,.2*n,0),C.rotation.z=Math.PI/2,i.add(M,P,R,A,C),i}attachToCamera(t){this.camera=t,this.fpsViewmodelGroup.parent!==t&&(t.add(this.fpsViewmodelGroup),t.add(this.flashlightSpot),t.add(this.flashlightTarget),t.add(this.flashlightForwardLight),t.add(this.flashlightBulbLight),t.add(this.cameraLanternLight))}setActiveItem(t){this.activeItemId=t;const e=t==="flashlight",i=t==="lantern",n=t==="sword",s=t==="shield";this.fpsFlashlight.visible=e,this.fpsLantern.visible=i,this.fpsSword.visible=n,this.fpsShield.visible=s||n,this.tppFlashlight.visible=e,this.tppLantern.visible=i,this.tppSword.visible=n,this.tppShield.visible=s||n,this.flashlightSpot.visible=e,this.flashlightForwardLight.visible=e,this.flashlightBulbLight.visible=e,this.cameraLanternLight.visible=i&&this.isFirstPerson,this.tppLanternLight.visible=i&&!this.isFirstPerson}setFirstPerson(t){this.isFirstPerson=t,this.fpsViewmodelGroup.visible=t,this.bodyGroup.visible=!t,this.setActiveItem(this.activeItemId)}updateLightAim(t,e){}updateAnimation(t,e,i){const n=Number.isFinite(e)&&e>0?Math.min(e,.1):.016,s=Number.isFinite(i)&&i>0?Math.min(i,3):1;if(this.walkTime+=n,t){const a=this.walkTime*s*10,o=Math.sin(a)*.65;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-o*.7,this.rightArmPivot.rotation.x=o*.7,this.bodyGroup.position.y=Math.abs(Math.sin(a*2))*.05;const l=-Math.abs(Math.cos(a))*.012,c=Math.sin(a)*.012;this.fpsViewmodelGroup.position.set(c,l,0),this.tppFlashlight.rotation.z=Math.sin(a)*.15,this.tppFlashlight.position.y=.85+Math.cos(a)*.03,this.tppLantern.rotation.z=Math.sin(a)*.2,this.tppLantern.position.y=.85+Math.cos(a)*.03}else this.leftLegPivot.rotation.x*=.82,this.rightLegPivot.rotation.x*=.82,this.leftArmPivot.rotation.x*=.82,this.rightArmPivot.rotation.x*=.82,this.bodyGroup.position.y*=.82,this.fpsViewmodelGroup.position.lerp(new U(0,0,0),10*n),this.tppFlashlight.rotation.z*=.82,this.tppFlashlight.position.y=.85,this.tppLantern.rotation.z*=.82,this.tppLantern.position.y=.85;if(this.activeItemId==="lantern"){const a=Math.sin(this.walkTime*7.5)*1.5+Math.cos(this.walkTime*13)*.8,o=Math.max(12,this.baseLanternIntensity+a);this.isFirstPerson?this.cameraLanternLight.intensity=o:this.tppLanternLight.intensity=o}}}class dm{model;position=new U(0,0,0);velocity=new U(0,0,0);moveSpeed=5.5;sprintMultiplier=1.5;acceleration=18;deceleration=22;maxStepHeight=1.05;playerRadius=.35;keys={};isMoving=!1;facingAngle=0;targetFacingAngle=0;perspective="FPP";isInputPaused=!1;surfaceManager;dungeonManager;libraryManager;currentMode="surface";constructor(t){this.model=t,this.bindKeyboard()}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}setPerspective(t){this.perspective=t,this.model.setFirstPerson(t==="FPP")}setPosition(t,e,i){this.position.set(t,e,i),this.model.group.position.copy(this.position)}getGamepadInput(){const t=navigator.getGamepads?navigator.getGamepads():[],e=Array.from(t).find(s=>s!==null&&s.connected);if(!e)return{moveX:0,moveZ:0,rightStickX:0,rightStickY:0,sprint:!1,jump:!1,switchMode:!1,switchView:!1};const i=.15,n=s=>Math.abs(s)>i?s:0;return{moveX:n(e.axes[0]??0),moveZ:n(e.axes[1]??0),rightStickX:n(e.axes[2]??0),rightStickY:n(e.axes[3]??0),sprint:!!e.buttons[0]?.pressed,jump:!!e.buttons[1]?.pressed,switchMode:!!e.buttons[2]?.pressed,switchView:!!e.buttons[3]?.pressed}}update(t,e){const i=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;if(this.isInputPaused){this.velocity.x=ke.damp(this.velocity.x,0,this.deceleration,i),this.velocity.z=ke.damp(this.velocity.z,0,this.deceleration,i),this.isMoving=!1,this.applyMovementAndCollisions(i),this.model.group.position.copy(this.position),this.model.updateAnimation(!1,i,0);return}let n=0,s=0;(this.keys.KeyW||this.keys.ArrowUp)&&(s-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(s+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(n+=1);let a=!!(this.keys.ShiftLeft||this.keys.ShiftRight);const o=this.getGamepadInput();Math.hypot(o.moveX,o.moveZ)>.1&&(n=o.moveX,s=o.moveZ),o.sprint&&(a=!0);const l=Math.hypot(n,s);l>1&&(n/=l,s/=l),this.isMoving=l>.05;const c=-Math.sin(e),h=-Math.cos(e),u=Math.cos(e),d=-Math.sin(e),f=u*n+c*-s,g=d*n+h*-s,_=this.isMoving?this.moveSpeed*(a?this.sprintMultiplier:1):0,m=f*_,p=g*_,E=this.isMoving?this.acceleration:this.deceleration;if(this.velocity.x=ke.damp(this.velocity.x,m,E,i),this.velocity.z=ke.damp(this.velocity.z,p,E,i),this.applyMovementAndCollisions(i),this.perspective==="FPP")this.facingAngle=e,this.model.group.rotation.y=e;else{if(this.isMoving){this.targetFacingAngle=Math.atan2(this.velocity.x,this.velocity.z);let M=this.targetFacingAngle-this.facingAngle;for(;M<-Math.PI;)M+=Math.PI*2;for(;M>Math.PI;)M-=Math.PI*2;this.facingAngle+=M*Math.min(1,14*i)}this.model.group.rotation.y=this.facingAngle}this.model.group.position.copy(this.position);const b=Math.hypot(this.velocity.x,this.velocity.z)/this.moveSpeed;this.model.updateAnimation(this.isMoving,i,b)}getFootprintGroundHeight(t,e,i){if(!this.surfaceManager)return 0;const n=this.playerRadius,s=n*.7071,a=[{x:t,z:e},{x:t,z:e-n},{x:t,z:e+n},{x:t+n,z:e},{x:t-n,z:e},{x:t+s,z:e-s},{x:t-s,z:e-s},{x:t+s,z:e+s},{x:t-s,z:e+s}];let o=-1/0;const l=this.surfaceManager.getElevation(t,e);for(const c of a){const h=this.surfaceManager.getElevation(c.x,c.z);h<=i+this.maxStepHeight+.1&&h>o&&(o=h)}return o===-1/0?l:o}isWallBlocked(t,e,i){if(!this.surfaceManager)return!1;const n=this.playerRadius,s=n*.7071,a=[{x:t,z:e-n},{x:t,z:e+n},{x:t+n,z:e},{x:t-n,z:e},{x:t+s,z:e-s},{x:t-s,z:e-s},{x:t+s,z:e+s},{x:t-s,z:e+s}];for(const o of a)if(this.surfaceManager.getElevation(o.x,o.z)>i+this.maxStepHeight+.1)return!0;return!1}applyMovementAndCollisions(t){const e=this.velocity.x*t,i=this.velocity.z*t;if(this.currentMode==="surface"&&this.surfaceManager){const n=this.position.x+e;this.isWallBlocked(n,this.position.z,this.position.y)||(this.position.x=n);const a=this.position.z+i;this.isWallBlocked(this.position.x,a,this.position.y)||(this.position.z=a);const l=this.getFootprintGroundHeight(this.position.x,this.position.z,this.position.y);this.position.y=ke.damp(this.position.y,l,20,t),this.position.y<l&&(this.position.y=l)}else if(this.currentMode==="dungeon"&&this.dungeonManager){const n=this.playerRadius,s=this.position.x+e;this.dungeonManager.isSolid(s-n,this.position.z-n)||this.dungeonManager.isSolid(s+n,this.position.z-n)||this.dungeonManager.isSolid(s-n,this.position.z+n)||this.dungeonManager.isSolid(s+n,this.position.z+n)||(this.position.x=s);const o=this.position.z+i;this.dungeonManager.isSolid(this.position.x-n,o-n)||this.dungeonManager.isSolid(this.position.x+n,o-n)||this.dungeonManager.isSolid(this.position.x-n,o+n)||this.dungeonManager.isSolid(this.position.x+n,o+n)||(this.position.z=o),this.position.y=0}else if(this.currentMode==="library"&&this.libraryManager){const n=this.playerRadius,s=this.position.x+e;this.libraryManager.getElevation(s,this.position.z,this.position.y)>this.position.y+.8||this.libraryManager.isBlocked(s-n,this.position.z,this.position.y)||this.libraryManager.isBlocked(s+n,this.position.z,this.position.y)||(this.position.x=s);const c=this.position.z+i;this.libraryManager.getElevation(this.position.x,c,this.position.y)>this.position.y+.8||this.libraryManager.isBlocked(this.position.x,c-n,this.position.y)||this.libraryManager.isBlocked(this.position.x,c+n,this.position.y)||(this.position.z=c);const f=this.libraryManager.getElevation(this.position.x,this.position.z,this.position.y);this.position.y=ke.damp(this.position.y,f,24,t),Math.abs(this.position.y-f)<.05&&(this.position.y=f)}}}const um=[{id:"flashlight",name:"High-Power Flashlight",icon:"🔦",description:"Ultra-bright directional beam"},{id:"lantern",name:"Ornate Brass Lantern",icon:"🏮",description:"Cozy 360° warm candlelight glow"},{id:"sword",name:"Iron Broadsword",icon:"⚔️",description:"Hand-forged knight blade"},{id:"shield",name:"Oak Shield",icon:"🛡️",description:"Reinforced iron-banded shield"},{id:"potion",name:"Health Elixir",icon:"🧪",count:3,description:"Restores vitality and stamina"},{id:"compass",name:"Golden Compass",icon:"🧭",description:"Points towards dungeon center"},{id:"key",name:"Dungeon Key",icon:"🔑",count:1,description:"Opens heavy iron-bound doors"},{id:"bread",name:"Field Rations",icon:"🍞",count:5,description:"Hearty adventurer bread"}];class fm{root;callbacks;modeBtn;viewBadgeEl;posValueEl;chunkValueEl;yawValueEl;fpsValueEl;gamepadBadgeEl;hotbarLabelEl;hotbarSlotsContainer;bookHoverBadgeEl;hoverTitleEl;hoverCategoryEl;musicToastEl;musicTitleEl;musicSubtitleEl;musicToastTimer=null;items=[...um];selectedIndex=-1;frameCount=0;lastFpsUpdate=performance.now();constructor(t,e){this.root=t,this.callbacks=e,this.buildDOM()}buildDOM(){this.root.innerHTML=`
      <header class="hud-top-bar">
        <div class="retro-panel hud-title">
          <span>⚔️ RETRO-3D ENGINE</span>
          <span id="hud-view-badge" class="key-badge">FPP</span>
        </div>

        <div class="hud-controls-group">
          <button id="btn-mode-toggle" class="retro-panel retro-btn">
            <span>☀️ MAP: SURFACE</span>
          </button>

          <button id="btn-fullscreen" class="retro-panel retro-btn" title="Toggle Fullscreen (F)">
            <span>⛶ FULLSCREEN</span>
          </button>
        </div>
      </header>

      <!-- Top Center Music Now Playing Notification -->
      <div id="hud-music-toast" class="hud-music-toast hidden">
        <span class="music-icon">🎵</span>
        <div class="music-info">
          <div id="music-title" class="music-title">The Scribe's Vigil</div>
          <div id="music-subtitle" class="music-subtitle">Medieval Lute & Flute</div>
        </div>
      </div>

      <!-- Center-Screen Raycast Book Hover Badge -->
      <div id="hud-book-hover-badge" class="hud-book-hover-badge hidden">
        <span class="book-hover-icon">📖</span>
        <div class="book-hover-info">
          <div id="hover-book-title" class="hover-book-title">The Codex of Veritas</div>
          <div id="hover-book-category" class="hover-book-category">NON-FICTION • HISTORY</div>
        </div>
        <span class="hover-click-prompt">CLICK TO READ</span>
      </div>

      <!-- Center-Bottom Pixel Inventory Hotbar -->
      <div class="hud-hotbar-container">
        <div id="hotbar-item-label" class="hotbar-item-label" style="display: none;"></div>
        <div id="hotbar-slots" class="hotbar-slots-wrapper retro-panel">
          <!-- Populated by renderHotbar() -->
        </div>
      </div>

      <footer class="hud-bottom-bar">
        <div class="retro-panel">
          <ul class="telemetry-list">
            <li class="telemetry-item">
              <span class="telemetry-label">PLAYER POS:</span>
              <span id="tel-pos" class="telemetry-value">X: 0.0 Y: 0.0 Z: 0.0</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">CHUNK:</span>
              <span id="tel-chunk" class="telemetry-value">[0, 0]</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">CAM YAW:</span>
              <span id="tel-yaw" class="telemetry-value">0.0°</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">RENDER FPS:</span>
              <span id="tel-fps" class="telemetry-value">60 FPS</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">GAMEPAD:</span>
              <span id="tel-gamepad" class="gamepad-badge disconnected">DISCONNECTED</span>
            </li>
          </ul>
        </div>

        <div class="retro-panel controls-guide">
          <div><span class="key-badge">Click Book</span> : Read &nbsp;|&nbsp; <span class="key-badge">1</span>-<span class="key-badge">8</span> : Items &nbsp;|&nbsp; <span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move</div>
          <div><span class="key-badge">M</span> : Switch Map &nbsp;|&nbsp; <span class="key-badge">N</span> : Grand Library &nbsp;|&nbsp; <span class="key-badge">Esc</span> : Settings</div>
        </div>
      </footer>
    `,this.modeBtn=this.root.querySelector("#btn-mode-toggle"),this.viewBadgeEl=this.root.querySelector("#hud-view-badge"),this.posValueEl=this.root.querySelector("#tel-pos"),this.chunkValueEl=this.root.querySelector("#tel-chunk"),this.yawValueEl=this.root.querySelector("#tel-yaw"),this.fpsValueEl=this.root.querySelector("#tel-fps"),this.gamepadBadgeEl=this.root.querySelector("#tel-gamepad"),this.hotbarLabelEl=this.root.querySelector("#hotbar-item-label"),this.hotbarSlotsContainer=this.root.querySelector("#hotbar-slots"),this.bookHoverBadgeEl=this.root.querySelector("#hud-book-hover-badge"),this.hoverTitleEl=this.root.querySelector("#hover-book-title"),this.hoverCategoryEl=this.root.querySelector("#hover-book-category"),this.musicToastEl=this.root.querySelector("#hud-music-toast"),this.musicTitleEl=this.root.querySelector("#music-title"),this.musicSubtitleEl=this.root.querySelector("#music-subtitle"),this.modeBtn.addEventListener("click",()=>{this.callbacks.onToggleMode()}),this.root.querySelector("#btn-fullscreen").addEventListener("click",()=>{this.callbacks.onToggleFullscreen()}),this.renderHotbar(),this.setPerspective("FPP")}showBookHover(t){this.hoverTitleEl.textContent=t.title,this.hoverCategoryEl.textContent=`${t.classification.toUpperCase()} • ${t.subgenre.toUpperCase()}`,this.bookHoverBadgeEl.classList.remove("hidden")}hideBookHover(){this.bookHoverBadgeEl.classList.add("hidden")}showNowPlaying(t,e){this.musicTitleEl.textContent=t,this.musicSubtitleEl.textContent=e,this.musicToastEl.classList.remove("hidden"),this.musicToastTimer!==null&&window.clearTimeout(this.musicToastTimer),this.musicToastTimer=window.setTimeout(()=>{this.musicToastEl.classList.add("hidden")},5500)}renderHotbar(){this.hotbarSlotsContainer.innerHTML="",this.items.forEach((t,e)=>{const i=document.createElement("div");i.className=`hotbar-slot ${e===this.selectedIndex?"active":""}`,i.title=`${t.name}: ${t.description} (Press ${e+1} to toggle)`,i.innerHTML=`
        <span class="slot-number">${e+1}</span>
        <span class="slot-icon">${t.icon}</span>
        ${t.count&&t.count>1?`<span class="slot-count">${t.count}</span>`:""}
      `,i.addEventListener("click",n=>{n.stopPropagation(),this.selectSlot(e)}),this.hotbarSlotsContainer.appendChild(i)}),this.updateActiveLabel()}selectSlot(t){if(t<0||t>=this.items.length)return;if(this.selectedIndex===t){this.selectedIndex=-1,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach(s=>s.classList.remove("active")),this.updateActiveLabel(),this.callbacks.onSelectItem&&this.callbacks.onSelectItem(null,-1);return}this.selectedIndex=t,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach((n,s)=>{s===t?n.classList.add("active"):n.classList.remove("active")}),this.updateActiveLabel();const i=this.items[t];this.callbacks.onSelectItem&&this.callbacks.onSelectItem(i,t)}selectNextSlot(){const t=this.selectedIndex===-1?0:(this.selectedIndex+1)%this.items.length;this.selectSlot(t)}selectPrevSlot(){const t=this.selectedIndex===-1?this.items.length-1:(this.selectedIndex-1+this.items.length)%this.items.length;this.selectSlot(t)}getSelectedItem(){return this.selectedIndex<0||this.selectedIndex>=this.items.length?null:this.items[this.selectedIndex]}updateActiveLabel(){const t=this.getSelectedItem();t?(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent=`${t.icon} ${t.name.toUpperCase()}`,this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop")):(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent="✋ UNEQUIPPED (EMPTY HANDS)",this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop"))}setMode(t){t==="surface"?(this.modeBtn.innerHTML="<span>☀️ MAP: SURFACE</span>",this.modeBtn.classList.remove("active-mode")):t==="dungeon"?(this.modeBtn.innerHTML="<span>🏰 MAP: DUNGEON</span>",this.modeBtn.classList.add("active-mode")):(this.modeBtn.innerHTML="<span>📚 MAP: GRAND LIBRARY</span>",this.modeBtn.classList.add("active-mode"))}setPerspective(t){this.viewBadgeEl.textContent=t}updateTelemetry(t,e,i,n,s,a){this.posValueEl.textContent=`X: ${t.toFixed(1)} Y: ${e.toFixed(1)} Z: ${i.toFixed(1)}`,this.chunkValueEl.textContent=`[${n}, ${s}]`;let o=a*180/Math.PI;o=(o%360+360)%360,this.yawValueEl.textContent=`${o.toFixed(0)}°`,this.frameCount++;const l=performance.now();if(l-this.lastFpsUpdate>=500){const u=Math.round(this.frameCount*1e3/(l-this.lastFpsUpdate));this.fpsValueEl.textContent=`${u} FPS`,this.frameCount=0,this.lastFpsUpdate=l}const c=navigator.getGamepads?navigator.getGamepads():[];Array.from(c).some(u=>u!==null&&u.connected)?(this.gamepadBadgeEl.textContent="CONNECTED",this.gamepadBadgeEl.className="gamepad-badge connected"):(this.gamepadBadgeEl.textContent="DISCONNECTED",this.gamepadBadgeEl.className="gamepad-badge disconnected")}}class pm{element;callbacks;isOpen=!1;constructor(t){this.callbacks=t,this.buildDOM()}buildDOM(){this.element=document.createElement("div"),this.element.id="settings-modal-overlay",this.element.className="modal-overlay",this.element.style.display="none";let t=70,e=1,i=70;try{const n=localStorage.getItem("retro3d_fov");n&&(t=Math.max(40,Math.min(100,parseInt(n,10)||70)));const s=localStorage.getItem("retro3d_sens");s&&(e=Math.max(.5,Math.min(3,parseFloat(s)||1)));const a=localStorage.getItem("retro3d_music_vol");a&&(i=Math.max(0,Math.min(100,parseInt(a,10)||70)))}catch{}this.element.innerHTML=`
      <div class="retro-modal retro-panel">
        <div class="modal-header">
          <h2>⚙️ GAME SETTINGS</h2>
          <button id="btn-modal-close-x" class="retro-btn modal-close-x" title="Close Settings (Esc / O)">✕</button>
        </div>

        <div class="modal-body">
          <!-- Perspective Option -->
          <div class="setting-row">
            <label class="setting-label">CAMERA PERSPECTIVE</label>
            <div class="btn-toggle-group">
              <button id="btn-fpp" class="retro-btn active-mode">First Person (FPP)</button>
              <button id="btn-tpp" class="retro-btn">Third Person (TPP)</button>
            </div>
          </div>

          <!-- Field of View (FOV) -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">FIELD OF VIEW (FOV)</label>
              <span id="val-fov" class="setting-value-badge">${t}°</span>
            </div>
            <input id="slider-fov" type="range" min="40" max="100" step="1" value="${t}" class="retro-slider" />
          </div>

          <!-- Mouse Sensitivity -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MOUSE SENSITIVITY</label>
              <span id="val-sensitivity" class="setting-value-badge">${e.toFixed(1)}x</span>
            </div>
            <input id="slider-sensitivity" type="range" min="0.5" max="3.0" step="0.1" value="${e}" class="retro-slider" />
          </div>

          <!-- Ambient Music Volume -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MEDIEVAL AMBIENT MUSIC</label>
              <span id="val-music-vol" class="setting-value-badge">${i}%</span>
            </div>
            <input id="slider-music-vol" type="range" min="0" max="100" step="5" value="${i}" class="retro-slider" />
          </div>

          <!-- Resolution Selector -->
          <div class="setting-row">
            <label class="setting-label">INTERNAL RENDER TARGET</label>
            <select id="modal-select-resolution" class="retro-select">
              <option value="640x360" selected>640x360 (Standard Pixel 16:9)</option>
              <option value="320x180">320x180 (Ultra Retro Pixel)</option>
              <option value="960x540">960x540 (High-Def Pixel)</option>
            </select>
          </div>

          <!-- Controls Reference -->
          <div class="setting-row controls-summary">
            <label class="setting-label">QUICK CONTROLS</label>
            <ul class="controls-list">
              <li><span class="key-badge">Click Screen</span> : Lock Mouse Look / Read</li>
              <li><span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move / Strafe</li>
              <li><span class="key-badge">N</span> : Grand Library &nbsp;|&nbsp; <span class="key-badge">E</span> : Read Books</li>
              <li><span class="key-badge">Shift</span> : Sprint &nbsp;|&nbsp; <span class="key-badge">M</span> : Switch Map</li>
              <li><span class="key-badge">Esc</span> / <span class="key-badge">O</span> : Settings Menu</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer">
          <button id="btn-resume-game" class="retro-btn btn-primary-resume">▶ RESUME / CLOSE</button>
        </div>
      </div>
    `,document.body.appendChild(this.element),this.bindEvents()}bindEvents(){const t=this.element.querySelector("#btn-fpp"),e=this.element.querySelector("#btn-tpp"),i=this.element.querySelector("#slider-fov"),n=this.element.querySelector("#val-fov"),s=this.element.querySelector("#slider-sensitivity"),a=this.element.querySelector("#val-sensitivity"),o=this.element.querySelector("#slider-music-vol"),l=this.element.querySelector("#val-music-vol"),c=this.element.querySelector("#modal-select-resolution"),h=this.element.querySelector("#btn-modal-close-x"),u=this.element.querySelector("#btn-resume-game");t.addEventListener("click",()=>{t.classList.add("active-mode"),e.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("FPP")}),e.addEventListener("click",()=>{e.classList.add("active-mode"),t.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("TPP")}),i.addEventListener("input",()=>{const d=parseInt(i.value,10);n.textContent=`${d}°`;try{localStorage.setItem("retro3d_fov",String(d))}catch{}this.callbacks.onFovChange(d)}),s.addEventListener("input",()=>{const d=parseFloat(s.value);a.textContent=`${d.toFixed(1)}x`;try{localStorage.setItem("retro3d_sens",String(d))}catch{}this.callbacks.onSensitivityChange(d)}),o.addEventListener("input",()=>{const d=parseInt(o.value,10);l.textContent=`${d}%`;try{localStorage.setItem("retro3d_music_vol",String(d))}catch{}this.callbacks.onMusicVolumeChange&&this.callbacks.onMusicVolumeChange(d/100)}),c.addEventListener("change",()=>{const[d,f]=c.value.split("x").map(Number);this.callbacks.onResolutionChange(d,f)}),h.addEventListener("click",()=>this.hide()),u.addEventListener("click",()=>this.hide()),this.element.addEventListener("click",d=>{d.target===this.element&&this.hide()})}setPerspectiveUI(t){const e=this.element.querySelector("#btn-fpp"),i=this.element.querySelector("#btn-tpp");t==="FPP"?(e?.classList.add("active-mode"),i?.classList.remove("active-mode")):(i?.classList.add("active-mode"),e?.classList.remove("active-mode"))}show(){this.isOpen=!0,this.element.style.display="flex"}hide(){this.isOpen&&(this.isOpen=!1,this.element.style.display="none",this.callbacks.onClose())}toggle(){this.isOpen?this.hide():this.show()}}class Do{static generateDiagram(t,e,i,n){const s=t.toUpperCase();let a="";s.includes("GOTHIC")||s.includes("ARCH")||s.includes("KEYSTONE")||s.includes("STRESS")||s.includes("MASONRY")?a=this.renderGothicArchSvg(n):s.includes("ASTROLABE")||s.includes("CELESTIAL")||s.includes("MERIDIAN")||s.includes("ORBITAL")||s.includes("ASTRAL")?a=this.renderAstrolabeSvg(n):s.includes("CRUCIBLE")||s.includes("ALCHEMICAL")||s.includes("RETORT")||s.includes("METALLURGY")||s.includes("SMELTING")?a=this.renderCrucibleSvg(n):s.includes("PRISM")||s.includes("OPTICAL")||s.includes("REFRACTION")||s.includes("DISPERSION")||s.includes("LIGHT")?a=this.renderOpticalPrismSvg(n):s.includes("CIPHER")||s.includes("LATTICE")||s.includes("RUNIC")||s.includes("CRYPT")||s.includes("SEAL")?a=this.renderCipherLatticeSvg(n):s.includes("WAVE")||s.includes("HARMONIC")||s.includes("RESONANCE")||s.includes("ETHERIC")?a=this.renderWaveDispersionSvg(n):s.includes("FLOORPLAN")||s.includes("VAULT")||s.includes("DUNGEON")||s.includes("BLUEPRINT")?a=this.renderVaultFloorplanSvg(n):a=this.renderSyllogismEulerSvg(n);const o=a.replace(/[\r\n]+/g," ").replace(/\s{2,}/g," ").trim(),l=i?`<div class="diagram-caption">❧ ${i}</div>`:"";return`<div class="medieval-diagram-box"><div class="diagram-title">✦ ${e} ✦</div><div class="diagram-svg-container">${o}</div>${l}</div>`}static renderGothicArchSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9e2a1e" />
          </marker>
          <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1b4970" />
          </marker>
        </defs>

        <!-- Baseline Floor -->
        <line x1="30" y1="135" x2="350" y2="135" stroke="#4a2e18" stroke-width="2" stroke-dasharray="4,3" />
        <text x="190" y="148" font-family="Georgia, serif" font-size="8.5" fill="#5a3818" text-anchor="middle">Level Y=0 (Paved Marble Nave Foundation)</text>

        <!-- Vertical Impost Columns -->
        <rect x="70" y="70" width="24" height="65" fill="#e8d5b5" stroke="#4a2e18" stroke-width="1.5" />
        <rect x="286" y="70" width="24" height="65" fill="#e8d5b5" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Pointed Arch Voussoir Ribs -->
        <path d="M82,70 A140,140 0 0,1 190,18 A140,140 0 0,1 298,70" fill="none" stroke="#4a2e18" stroke-width="2.5" />
        <path d="M94,70 A120,120 0 0,1 190,32 A120,120 0 0,1 286,70" fill="none" stroke="#4a2e18" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Keystone Block at Apex -->
        <polygon points="178,14 202,14 198,34 182,34" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />
        <text x="190" y="10" font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="bold" fill="#731f14" text-anchor="middle">Keystone [σ = 48.5 MPa]</text>

        <!-- Compressive Force Vector F_c (Red Arrow along Rib) -->
        <line x1="182" y1="36" x2="115" y2="82" stroke="#9e2a1e" stroke-width="2" marker-end="url(#arrowRed)" />
        <text x="135" y="52" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#9e2a1e">F_compressive</text>

        <!-- Lateral Thrust Vector T_h (Blue Arrow to Right Abutment) -->
        <line x1="298" y1="70" x2="345" y2="70" stroke="#1b4970" stroke-width="2" marker-end="url(#arrowBlue)" />
        <text x="325" y="62" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#1b4970">T_thrust</text>

        <!-- Center Angle Arc α = 45° -->
        <path d="M190,70 L230,70 A40,40 0 0,0 218,42 Z" fill="rgba(122,85,24,0.15)" stroke="#7a5518" stroke-width="1" />
        <text x="238" y="58" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#7a5518">α = 45°12'</text>
        <line x1="190" y1="20" x2="190" y2="135" stroke="#7a5518" stroke-width="0.8" stroke-dasharray="2,2" />
      </svg>
    `}static renderAstrolabeSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowAst" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8c581e" />
          </marker>
        </defs>

        <!-- Outer Brass Mater Ring -->
        <circle cx="190" cy="78" r="66" fill="none" stroke="#5a3818" stroke-width="2.5" />
        <circle cx="190" cy="78" r="60" fill="rgba(245,230,200,0.3)" stroke="#7a4e20" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Meridian Tilted Ellipse (Equinoctial Precession Ring) -->
        <ellipse cx="190" cy="78" rx="60" ry="24" transform="rotate(-23.5 190 78)" fill="none" stroke="#943124" stroke-width="2" />

        <!-- Celestial Coordinate Axes -->
        <line x1="190" y1="10" x2="190" y2="146" stroke="#4a2e18" stroke-width="1.2" stroke-dasharray="3,3" />
        <line x1="120" y1="78" x2="260" y2="78" stroke="#4a2e18" stroke-width="1.2" stroke-dasharray="3,3" />

        <!-- Center Pivot Finial Pin -->
        <circle cx="190" cy="78" r="4.5" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Fixed Star Markers (Spica, Vega) -->
        <polygon points="160,54 162,59 167,59 163,62 165,67 160,64 155,67 157,62 153,59 158,59" fill="#9e2a1e" />
        <text x="142" y="50" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#9e2a1e">Vega (α-Lyr)</text>

        <polygon points="228,88 230,93 235,93 231,96 233,101 228,98 223,101 225,96 221,93 226,93" fill="#1b4970" />
        <text x="238" y="94" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#1b4970">Spica (α-Vir)</text>

        <!-- Precession Rotation Vector -->
        <path d="M245,55 A60,60 0 0,1 252,85" fill="none" stroke="#8c581e" stroke-width="2" marker-end="url(#arrowAst)" />
        <text x="256" y="68" font-family="Georgia, serif" font-size="9" font-weight="bold" fill="#6d4414">ω_prec</text>

        <!-- Axis Labels -->
        <text x="190" y="8" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#4a2e18" text-anchor="middle">North Celestial Pole (Nadir Y)</text>
      </svg>
    `}static renderCrucibleSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#b83218" />
            <stop offset="60%" stop-color="#e38c20" />
            <stop offset="100%" stop-color="#f5df58" />
          </linearGradient>
        </defs>

        <!-- Tripod Furnace Stand -->
        <path d="M105,140 L120,95 L170,95 L185,140" fill="none" stroke="#3d2919" stroke-width="2.2" />
        <line x1="113" y1="118" x2="177" y2="118" stroke="#3d2919" stroke-width="1.5" />

        <!-- Transmutation Hearth Fire -->
        <path d="M130,136 Q145,102 145,115 Q148,98 152,112 Q158,100 160,136 Z" fill="url(#flameGrad)" />

        <!-- Alembic Cucurbit Flask -->
        <circle cx="145" cy="72" r="28" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.8" />
        <rect x="140" y="24" width="10" height="24" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Curved Condenser Delivery Neck -->
        <path d="M145,26 C155,10 210,12 245,70 L255,90" fill="none" stroke="#4a2e18" stroke-width="2.5" />

        <!-- Receiver Flask on Stand -->
        <path d="M246,90 L264,90 L278,132 L232,132 Z" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.8" />
        <rect x="228" y="132" width="54" height="6" fill="#8c581e" stroke="#3d2919" stroke-width="1" />

        <!-- Alchemical Symbols -->
        <text x="145" y="78" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#781a0e" text-anchor="middle">☉</text>
        <text x="255" y="122" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#1b4970" text-anchor="middle">☿</text>

        <text x="60" y="50" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#5a3d24">🜂 Vapor Condenser</text>
        <text x="275" y="60" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#5a3d24">Reflux Column</text>
        <text x="290" y="120" font-family="Georgia, serif" font-size="8" fill="#781a0e">ΔG &lt; 0 (Precipitate)</text>
      </svg>
    `}static renderOpticalPrismSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangular Optical Glass Prism -->
        <polygon points="190,16 110,132 270,132" fill="rgba(230,240,250,0.5)" stroke="#3a4856" stroke-width="2" />

        <!-- Incident White Light Beam -->
        <line x1="30" y1="88" x2="148" y2="76" stroke="#8c6227" stroke-width="2.5" />
        <text x="35" y="76" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#6d4f1c">Incident Ray (λ=589nm)</text>

        <!-- Refracted Rays inside Glass -->
        <line x1="148" y1="76" x2="226" y2="72" stroke="#c42518" stroke-width="1.5" />
        <line x1="148" y1="76" x2="230" y2="82" stroke="#256b35" stroke-width="1.5" />
        <line x1="148" y1="76" x2="234" y2="92" stroke="#5d1ea8" stroke-width="1.5" />

        <!-- Dispersed Spectral Rays exiting right face -->
        <line x1="226" y1="72" x2="350" y2="48" stroke="#bd1a0d" stroke-width="2" />
        <text x="355" y="52" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#bd1a0d">Red (700nm)</text>

        <line x1="230" y1="82" x2="350" y2="78" stroke="#2b753a" stroke-width="2" />
        <text x="355" y="82" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#2b753a">Green (530nm)</text>

        <line x1="234" y1="92" x2="350" y2="114" stroke="#5d1ea8" stroke-width="2" />
        <text x="355" y="118" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#5d1ea8">Violet (400nm)</text>

        <!-- Angle of Dispersion Annotations -->
        <path d="M250,72 A35,35 0 0,1 254,94" fill="none" stroke="#4a2e18" stroke-width="1" stroke-dasharray="2,2" />
        <text x="260" y="86" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#4a2e18">δθ = 3°42'</text>
      </svg>
    `}static renderCipherLatticeSvg(t){const e=[["𝒩₁₁","ᚱ","ᚦ","𝒩₁₄"],["𝒩₂₁","✦","✦","𝒩₂₄"],["𝒩₃₁","✦","✦","𝒩₃₄"],["𝒩₄₁","ᛋ","ᛏ","𝒩₄₄"]];let i="";for(let n=0;n<4;n++)for(let s=0;s<4;s++){const a=115+s*38,o=14+n*32,l=(n===1||n===2)&&(s===1||s===2);i+=`<rect x="${a}" y="${o}" width="36" height="30" fill="${l?"rgba(166, 36, 36, 0.12)":"rgba(215, 185, 140, 0.25)"}" stroke="#5a3818" stroke-width="1.2" rx="2" /><text x="${a+18}" y="${o+20}" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="bold" fill="${l?"#8c2418":"#3d2510"}" text-anchor="middle">${e[n][s]}</text>`}return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        ${i}
        <rect x="110" y="10" width="158" height="134" fill="none" stroke="#8c6227" stroke-width="2" rx="4" />
        <text x="55" y="45" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#6d4414">Det(M) = 65537</text>
        <text x="45" y="80" font-family="Georgia, serif" font-size="8" fill="#7a2a1a">Modular Hash:</text>
        <text x="45" y="94" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#7a2a1a">H(M) ≡ M^e (mod N)</text>
        <text x="278" y="45" font-family="Georgia, serif" font-size="8" fill="#1b4970">GCD(e, φ(N)) = 1</text>
        <text x="278" y="80" font-family="Georgia, serif" font-size="8" font-weight="bold" fill="#1b4970">Key Inversion:</text>
        <text x="278" y="94" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#1b4970">d ≡ e⁻¹ (mod φ(N))</text>
      </svg>
    `}static renderWaveDispersionSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowWave" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4a2e18" />
          </marker>
        </defs>

        <!-- Coordinate Axes -->
        <line x1="40" y1="80" x2="350" y2="80" stroke="#4a2e18" stroke-width="1.4" marker-end="url(#arrowWave)" />
        <line x1="60" y1="140" x2="60" y2="15" stroke="#4a2e18" stroke-width="1.4" marker-end="url(#arrowWave)" />
        <text x="355" y="84" font-family="Georgia, serif" font-size="8.5" fill="#4a2e18">t</text>
        <text x="60" y="10" font-family="Georgia, serif" font-size="8.5" fill="#4a2e18" text-anchor="middle">Ψ(x,t)</text>

        <!-- Waveform Envelope -->
        <path d="M60,35 Q190,18 330,68" fill="none" stroke="#9e2a1e" stroke-width="1.4" stroke-dasharray="3,3" />
        <path d="M60,125 Q190,142 330,92" fill="none" stroke="#9e2a1e" stroke-width="1.4" stroke-dasharray="3,3" />

        <!-- Carrier Wave -->
        <path d="M60,80 Q75,35 90,80 T120,80 T150,80 T180,80 T210,80 T240,80 T270,80 T300,80 T330,80" fill="none" stroke="#1b4970" stroke-width="2" />

        <!-- Velocity Indicators -->
        <line x1="160" y1="40" x2="220" y2="40" stroke="#8c581e" stroke-width="2" marker-end="url(#arrowWave)" />
        <text x="190" y="32" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#8c581e" text-anchor="middle">Group Velocity v_g</text>

        <text x="90" y="142" font-family="Georgia, serif" font-size="8" fill="#1b4970">λ₁ = 432 Hz</text>
        <text x="230" y="142" font-family="Georgia, serif" font-size="8" fill="#1b4970">λ₂ = 864 Hz [v_p · v_g = c_e²]</text>
      </svg>
    `}static renderVaultFloorplanSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="280" height="110" fill="rgba(240,225,195,0.4)" stroke="#4a2e18" stroke-width="2" />

        <!-- Groin Diagonals -->
        <line x1="50" y1="20" x2="143" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="143" y1="20" x2="50" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="143" y1="20" x2="236" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="236" y1="20" x2="143" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="236" y1="20" x2="330" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="330" y1="20" x2="236" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />

        <!-- Footings -->
        <rect x="137" y="16" width="12" height="8" fill="#3b2010" />
        <rect x="137" y="126" width="12" height="8" fill="#3b2010" />
        <rect x="230" y="16" width="12" height="8" fill="#3b2010" />
        <rect x="230" y="126" width="12" height="8" fill="#3b2010" />

        <line x1="40" y1="75" x2="340" y2="75" stroke="#9e2a1e" stroke-width="1" stroke-dasharray="4,2" />
        <text x="190" y="72" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#9e2a1e" text-anchor="middle">Principal Cathedral Nave Axis</text>

        <!-- Compass -->
        <circle cx="310" cy="45" r="12" fill="rgba(255,255,255,0.7)" stroke="#4a2e18" stroke-width="1" />
        <polygon points="310,35 313,45 307,45" fill="#9e2a1e" />
        <polygon points="310,55 313,45 307,45" fill="#4a2e18" />
        <text x="310" y="32" font-family="'Cinzel', Georgia, serif" font-size="7" font-weight="bold" fill="#9e2a1e" text-anchor="middle">N</text>
      </svg>
    `}static renderSyllogismEulerSvg(t){return`
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="190" cy="78" r="66" fill="rgba(215, 185, 140, 0.25)" stroke="#5a3818" stroke-width="1.8" />
        <text x="190" y="24" font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="bold" fill="#5a3818" text-anchor="middle">Major Premise: Predicate Term (P)</text>

        <circle cx="190" cy="85" r="44" fill="rgba(166, 36, 36, 0.12)" stroke="#943124" stroke-width="1.5" />
        <text x="190" y="52" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#943124" text-anchor="middle">Middle Term (M)</text>

        <circle cx="190" cy="95" r="22" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />
        <text x="190" y="98" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#2e1a0c" text-anchor="middle">Subject (S)</text>

        <text x="45" y="65" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#4a2e18">1. Omne M est P</text>
        <text x="45" y="80" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#4a2e18">2. Omne S est M</text>
        <line x1="45" y1="86" x2="120" y2="86" stroke="#4a2e18" stroke-width="1" />
        <text x="45" y="100" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#943124">∴ Omne S est P</text>

        <text x="275" y="82" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#6d4414">Modus Barbara</text>
        <text x="275" y="96" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#6d4414">Universal Affirmative</text>
      </svg>
    `}}class mm{overlayEl;modalEl;currentBook=null;currentPageIndex=0;isOpen=!1;onCloseCallback;constructor(t){t?.onClose&&(this.onCloseCallback=t.onClose),this.overlayEl=document.createElement("div"),this.overlayEl.id="book-reader-overlay",this.overlayEl.className="book-reader-overlay hidden",this.modalEl=document.createElement("div"),this.modalEl.className="book-reader-container",this.overlayEl.appendChild(this.modalEl),document.body.appendChild(this.overlayEl),this.bindEvents()}bindEvents(){this.overlayEl.addEventListener("click",t=>{t.target===this.overlayEl&&this.close()}),window.addEventListener("keydown",t=>{if(this.isOpen){if(t.code==="Escape"||t.code==="KeyE"){t.preventDefault(),t.stopPropagation(),this.close();return}t.code==="ArrowRight"||t.code==="KeyD"||t.code==="PageDown"||t.code==="Space"?(t.preventDefault(),this.nextPage()):(t.code==="ArrowLeft"||t.code==="KeyA"||t.code==="PageUp")&&(t.preventDefault(),this.prevPage())}},{capture:!0})}open(t,e){this.currentBook=t,this.currentPageIndex=0,this.isOpen=!0,e&&(this.onCloseCallback=e),this.overlayEl.classList.remove("hidden"),document.exitPointerLock(),this.render()}close(){this.isOpen&&(this.isOpen=!1,this.overlayEl.classList.add("hidden"),this.onCloseCallback&&this.onCloseCallback())}getIsOpen(){return this.isOpen}nextPage(){this.currentBook&&this.currentPageIndex+2<this.currentBook.pages.length&&(this.currentPageIndex+=2,this.render())}prevPage(){this.currentPageIndex>=2&&(this.currentPageIndex-=2,this.render())}render(){if(!this.currentBook)return;const t=this.currentBook,e=t.pages[this.currentPageIndex]||null,i=t.pages[this.currentPageIndex+1]||null,n=this.currentPageIndex>0,s=this.currentPageIndex+2<t.pages.length;this.modalEl.innerHTML=`
      <div class="book-leather-binding" style="border-color: ${t.coverColor||"#5a301a"};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page">
            <div class="page-inner">
              ${e?this.renderPageContent(e,t,!0):""}
              <div class="page-footer">
                <span class="page-num">${e&&e.pageType!=="half-title"?e.pageNumber:""}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER CREASE -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page">
            <div class="page-inner">
              ${i?this.renderPageContent(i,t,!1):'<div class="blank-page-note">~ End of Volume ~</div>'}
              <div class="page-footer">
                <span class="page-num">${i?i.pageNumber:""}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM NAVIGATION BAR -->
        <div class="book-nav-bar">
          <div class="nav-left-group">
            <button id="btn-prev-page" class="retro-btn nav-page-btn" ${n?"":"disabled"}>
              ◀ PREVIOUS
            </button>
          </div>

          <div class="nav-center-group">
            <span class="page-indicator">Pages ${this.currentPageIndex+1}–${Math.min(this.currentPageIndex+2,t.pages.length)} of ${t.pages.length}</span>
          </div>

          <div class="nav-right-group">
            <button id="btn-next-page" class="retro-btn nav-page-btn" ${s?"":"disabled"}>
              NEXT ▶
            </button>
            <button id="btn-close-book" class="retro-btn close-book-btn">
              ✕ CLOSE (ESC)
            </button>
          </div>
        </div>
      </div>
    `,this.modalEl.querySelector("#btn-prev-page")?.addEventListener("click",a=>{a.stopPropagation(),this.prevPage()}),this.modalEl.querySelector("#btn-next-page")?.addEventListener("click",a=>{a.stopPropagation(),this.nextPage()}),this.modalEl.querySelector("#btn-close-book")?.addEventListener("click",a=>{a.stopPropagation(),this.close()})}renderPageContent(t,e,i){switch(t.pageType){case"half-title":return`
          <div class="page-half-title">
            <div class="half-title-text">${t.content.replace(/\n/g,"<br/>")}</div>
          </div>
        `;case"frontispiece":return`
          <div class="page-frontispiece">
            <div class="frontispiece-ascii">${t.content}</div>
          </div>
        `;case"title-page":return`
          <div class="page-title-page">
            <div class="book-category-tag">${e.classification.toUpperCase()} • ${e.subgenre.toUpperCase()}</div>
            <h1 class="book-main-title">${e.title}</h1>
            <div class="book-subtitle">— ${e.subtitle} —</div>
            <div class="ornate-divider">❦ ════════ ❧</div>
            <div class="book-author-lead">BY</div>
            <div class="book-author-name">${e.author}</div>
            <div class="book-era-tag">${e.era}</div>
            <div class="book-press-imprint">Archival Repository • ${e.subgenre}</div>
          </div>
        `;case"copyright":return`
          <div class="page-copyright">
            <div class="copyright-header">ARCHIVAL CATALOGUE NOTICE</div>
            <div class="copyright-body">${t.content.replace(/\n/g,"<br/>")}</div>
          </div>
        `;case"dedication":return`
          <div class="page-dedication">
            <div class="dedication-content">${t.content.replace(/\n/g,"<br/>")}</div>
          </div>
        `;case"toc":return`
          <div class="page-toc">
            <div class="chapter-header">TABLE OF CONTENTS</div>
            <div class="toc-list">${this.formatTocList(t.content)}</div>
          </div>
        `;default:return`
          <div class="chapter-header">${t.chapterTitle||""}</div>
          <div class="page-body-text">
            ${this.formatBodyText(t.content)}
          </div>
        `}}formatTocList(t){return t.split(`
`).filter(i=>i.trim().length>0&&!i.includes("TABLE OF CONTENTS")).map(i=>{const n=i.split(/\s*\.\s*\.\s*/);if(n.length>=2){const s=n[0].trim(),a=n[n.length-1].trim();return`
            <div class="toc-row-link">
              <span class="toc-title">${s}</span>
              <span class="toc-dots"></span>
              <span class="toc-page-badge">${a}</span>
            </div>
          `}return`<div class="toc-row-link"><span class="toc-title">${i}</span></div>`}).join("")}formatBodyText(t){return t.split(`

`).map((i,n)=>{const s=i.trim();if(!s)return"";if(s.startsWith("[SVG_DIAGRAM:")){const o=s.slice(1,-1).split(":"),l=o[1]||"GOTHIC_ARCH",c=o[2]||"ILLUMINATED SCHEMATIC",h=o[3]||"",u=parseInt(o[4])||101;return Do.generateDiagram(l,c,h,u)}if(s.startsWith('<div class="medieval-diagram-box">')||s.startsWith("<svg"))return s;if(s.startsWith("[DIAGRAM:")||s.startsWith("[FIGURE:"))return this.formatDiagramBlock(s);if(s.startsWith("Table of Verified")||s.startsWith("Table of Observational")||s.startsWith("Table of "))return this.formatDataTable(s);if(s.startsWith("[THEOREM")||s.startsWith("[LEMMA")||s.startsWith("[AXIOM")||s.startsWith("[PROPOSITION")||s.startsWith("[FORMULA"))return this.formatMathBlock(s);if(s.startsWith("[MATHEMATICAL DERIVATION")||s.startsWith("[STRUCTURAL RESOLUTION")||s.startsWith("[CRYSTALLINE GIBBS")||s.startsWith("[EIGENVALUE DECOMPOSITION")||s.startsWith("[FORMAL DEDUCTIVE")||s.startsWith("[PROOF"))return this.formatMathBlock(s);if(s.startsWith("[VERSE CANTO")||s.startsWith("[SECTION")||s.startsWith("[DISPUTATIO"))return`<div class="special-section-header">✦ ${s.slice(1,s.indexOf("]"))} ✦</div>`;if(s.startsWith("$$")&&s.endsWith("$$")){const o=s.slice(2,-2).trim();return`<div class="math-display-eq">${Ni.renderEquation(o)}</div>`}if(s==="[Q.E.D. • Quod Erat Demonstrandum]"||s==="[Q.E.D.]")return'<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>';const a=Ni.renderInlineAndBlocks(s);if(n===0&&!s.startsWith("*")&&!s.startsWith("•")&&!s.startsWith("[")&&!s.startsWith("╔")&&!s.startsWith("<")){const o=a.charAt(0),l=a.slice(1);return`<p class="first-paragraph"><span class="drop-cap">${o}</span>${l.replace(/\n/g,"<br/>")}</p>`}return`<p>${a.replace(/\n/g,"<br/>")}</p>`}).join("")}formatDiagramBlock(t){const e=t.split(`
`);let i="ILLUMINATED SCHEMATIC",n="";for(const s of e){const a=s.trim();a.startsWith("[DIAGRAM:")||a.startsWith("[FIGURE:")?i=a.replace(/^\[(DIAGRAM|FIGURE):\s*/,"").replace(/\]$/,"").trim():(a.startsWith("[CAPTION:")||a.startsWith("Caption:"))&&(n=a.replace(/^\[?CAPTION:\s*/i,"").replace(/\]$/,"").trim())}return Do.generateDiagram(i,i,n,101)}formatDataTable(t){const e=t.split(`
`).filter(a=>a.trim().length>0),i=e[0].replace(/:$/,"").trim(),n=e.slice(1);let s="";for(const a of n){const o=a.replace(/^•\s*/,"").trim(),l=o.split(":");if(l.length>=2){const c=l[0].trim(),h=l.slice(1).join(":").trim();s+=`
          <div class="data-table-row">
            <span class="data-param-name">${Ni.renderInlineAndBlocks(c)}</span>
            <span class="data-param-dots"></span>
            <span class="data-param-val">${Ni.renderInlineAndBlocks(h)}</span>
          </div>
        `}else s+=`<div class="data-table-row">${Ni.renderInlineAndBlocks(o)}</div>`}return`
      <div class="medieval-data-table-card">
        <div class="data-table-header">⚜ ${i}</div>
        <div class="data-table-body">${s}</div>
      </div>
    `}formatMathBlock(t){const e=t.split(`
`);let i='<div class="math-proof-card">';for(let n=0;n<e.length;n++){const s=e[n].trim();if(s)if(s.startsWith("[")&&s.endsWith("]")){const a=s.slice(1,-1);a.includes("Q.E.D")||a.includes("Quod Erat")?i+=`<div class="math-qed-badge">❦ ${a}</div>`:i+=`<div class="math-theorem-header">✦ ${a} ✦</div>`}else if(s.startsWith("$$")&&s.endsWith("$$")){const a=s.slice(2,-2).trim();i+=`<div class="math-display-eq">${Ni.renderEquation(a)}</div>`}else i+=`<div class="math-proof-line">${Ni.renderInlineAndBlocks(s)}</div>`}return i+="</div>",i}}class Ni{static renderInlineAndBlocks(t){let e=t.replace(/\$\$([\s\S]+?)\$\$/g,(i,n)=>`<div class="math-display-eq">${this.renderEquation(n.trim())}</div>`);return e=e.replace(/\$([^\$\n]+?)\$/g,(i,n)=>`<span class="math-inline-eq">${this.renderEquation(n.trim())}</span>`),e}static renderEquation(t){let e=t.trim();return e=e.replace(/\r?\n/g," "),(e.includes("\\begin{bmatrix}")||e.includes("\\begin{pmatrix}"))&&(e=this.renderMatrices(e)),e=e.replace(/\\text\{([^{}]+)\}/g,'<span class="math-text">$1</span>'),e=e.replace(/\\pmod\{([^{}]+)\}/g,'<span class="math-text"> (mod $1)</span>'),e=e.replace(/\\left\s*\(/g,'<span class="math-delim">(</span>'),e=e.replace(/\\right\s*\)/g,'<span class="math-delim">)</span>'),e=e.replace(/\\left\s*\[/g,'<span class="math-delim">[</span>'),e=e.replace(/\\right\s*\]/g,'<span class="math-delim">]</span>'),e=e.replace(/\\left\s*\\\{/g,'<span class="math-delim">{</span>'),e=e.replace(/\\right\s*\\\}/g,'<span class="math-delim">}</span>'),e=this.replaceFractions(e),e=e.replace(/\\sqrt\{([^{}]+)\}/g,'<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>'),e=e.replace(/\\sqrt\s*([0-9a-zA-Z]+)/g,'<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>'),e=e.replace(/\\vec\{([^{}]+)\}/g,'<span class="math-vec"><span class="math-vec-arrow">&rarr;</span><span class="math-vec-base">$1</span></span>'),e=e.replace(/\\hat\{([^{}]+)\}/g,'<span class="math-hat"><span class="math-hat-sym">^</span><span class="math-vec-base">$1</span></span>'),e=e.replace(/\\oint_\{?\\mathcal\{S\}\}?/g,'<span class="math-op">&conint;</span><sub class="math-sub">𝒮</sub>'),e=e.replace(/\\oint/g,'<span class="math-op">&conint;</span>'),e=e.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g,'<span class="math-op">&int;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>'),e=e.replace(/\\int_([0-9a-zA-Z\\]+)\^([0-9a-zA-Z\\]+)/g,'<span class="math-op">&int;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>'),e=e.replace(/\\int/g,'<span class="math-op">&int;</span>'),e=e.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g,'<span class="math-op">&sum;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>'),e=e.replace(/\\sum/g,'<span class="math-op">&sum;</span>'),e=e.replace(/\\prod/g,'<span class="math-op">&prod;</span>'),e=e.replace(/\\nabla\^2/g,'&nabla;<sup class="math-sup">2</sup>'),e=e.replace(/\\nabla/g,"&nabla;"),e=e.replace(/\\partial/g,"&part;"),e=e.replace(/\\xrightarrow\{([^}]+)\}/g,'<span class="math-arrow-labeled">&mdash;&mdash;($1)&rarr;</span>'),e=e.replace(/\\gcd\b/g,'<span class="math-func">gcd</span>'),e=e.replace(/\\det\b/g,'<span class="math-func">det</span>'),e=e.replace(/\\cos\b/g,'<span class="math-func">cos</span>'),e=e.replace(/\\sin\b/g,'<span class="math-func">sin</span>'),e=e.replace(/\\ln\b/g,'<span class="math-func">ln</span>'),e=e.replace(/\\exp\b/g,'<span class="math-func">exp</span>'),e=e.replace(/\\tan\b/g,'<span class="math-func">tan</span>'),e=e.replace(/\\alpha\b/g,"α"),e=e.replace(/\\beta\b/g,"β"),e=e.replace(/\\gamma\b/g,"γ"),e=e.replace(/\\theta\b/g,"θ"),e=e.replace(/\\lambda\b/g,"λ"),e=e.replace(/\\mu\b/g,"μ"),e=e.replace(/\\nu\b/g,"ν"),e=e.replace(/\\omega\b/g,"ω"),e=e.replace(/\\kappa\b/g,"κ"),e=e.replace(/\\sigma\b/g,"σ"),e=e.replace(/\\tau\b/g,"τ"),e=e.replace(/\\phi\b/g,"ϕ"),e=e.replace(/\\rho\b/g,"ρ"),e=e.replace(/\\pi\b/g,"π"),e=e.replace(/\\Psi\b/g,"Ψ"),e=e.replace(/\\Phi\b/g,"Φ"),e=e.replace(/\\Omega\b/g,"Ω"),e=e.replace(/\\Delta\b/g,"Δ"),e=e.replace(/\\mathbb\{Z\}/g,"ℤ"),e=e.replace(/\\mathbb\{R\}/g,"ℝ"),e=e.replace(/\\mathcal\{D\}/g,"𝒟"),e=e.replace(/\\mathcal\{M\}_\{?\\odot\}?/g,'ℳ<sub class="math-sub">☉</sub>'),e=e.replace(/\\mathcal\{N\}/g,"𝒩"),e=e.replace(/\\mathcal\{H\}/g,"ℋ"),e=e.replace(/\\mathcal\{S\}/g,"𝒮"),e=e.replace(/\\mathcal\{F\}/g,"ℱ"),e=e.replace(/\\le\b/g,"&le;"),e=e.replace(/\\ge\b/g,"&ge;"),e=e.replace(/\\pm\b/g,"&plusmn;"),e=e.replace(/\\cdot\b/g,"&sdot;"),e=e.replace(/\\times\b/g,"&times;"),e=e.replace(/\\equiv\b/g,"&equiv;"),e=e.replace(/\\approx\b/g,"&asymp;"),e=e.replace(/\\neq\b/g,"&ne;"),e=e.replace(/\\forall\b/g,"&forall;"),e=e.replace(/\\exists\b/g,"&exist;"),e=e.replace(/\\in\b/g,"&isin;"),e=e.replace(/\\land\b/g,"&and;"),e=e.replace(/\\lor\b/g,"&or;"),e=e.replace(/\\neg\b/g,"&not;"),e=e.replace(/\\vdash\b/g,"&#8866;"),e=e.replace(/\\implies\b/g,"&rArr;"),e=e.replace(/\\therefore\b/g,"&there4;"),e=e.replace(/\\downarrow\b/g,"&darr;"),e=e.replace(/\\uparrow\b/g,"&uarr;"),e=e.replace(/\\circ\b/g,"&deg;"),e=e.replace(/\^\{([^{}]+)\}/g,'<sup class="math-sup">$1</sup>'),e=e.replace(/\^([0-9a-zA-Z°]+)/g,'<sup class="math-sup">$1</sup>'),e=e.replace(/_\{([^{}]+)\}/g,'<sub class="math-sub">$1</sub>'),e=e.replace(/_([0-9a-zA-Z]+)/g,'<sub class="math-sub">$1</sub>'),e=e.replace(/\\qquad/g,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"),e=e.replace(/\\quad/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),e=e.replace(/\\,/g,"&nbsp;"),e=e.replace(/\\;/g,"&nbsp;&nbsp;"),e=e.replace(/\\ /g,"&nbsp;"),e}static replaceFractions(t){let e="",i=t;for(;e!==i&&i.includes("\\frac");)e=i,i=i.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,(n,s,a)=>`<span class="math-frac"><span class="math-num">${s}</span><span class="math-den">${a}</span></span>`);return i}static renderMatrices(t){return t.replace(/\\begin\{([bp]matrix)\}([\s\S]*?)\\end\{\1\}/g,(e,i,n)=>{const s=i==="bmatrix",a=n.split("\\\\");let o=`<span class="math-matrix-wrapper"><table class="math-matrix-table ${s?"bmatrix":"pmatrix"}"><tbody>`;for(const l of a){if(!l.trim())continue;o+="<tr>";const c=l.split("&");for(const h of c)o+=`<td>${this.renderEquation(h.trim())}</td>`;o+="</tr>"}return o+="</tbody></table></span>",o})}}const xs={C2:65.41,D2:73.42,E2:82.41,F2:87.31,G2:98,A2:110,B2:123.47,C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880,B5:987.77,C6:1046.5,D6:1174.66},Uo=[{id:"scribes_vigil",title:"The Scribe's Vigil",subtitle:"Medieval Lute & Solitary Wood Flute in D Dorian",tempoBpm:64,totalBeats:48,notesDrone:[{note:"D2",time:0,duration:16,gain:.35},{note:"A2",time:0,duration:16,gain:.25},{note:"C2",time:16,duration:16,gain:.35},{note:"G2",time:16,duration:16,gain:.25},{note:"D2",time:32,duration:16,gain:.35},{note:"A2",time:32,duration:16,gain:.25}],notesLute:[{note:"D3",time:0,duration:1.5},{note:"A3",time:1,duration:1.2},{note:"F4",time:2,duration:1.2},{note:"E4",time:3,duration:1.2},{note:"D4",time:4,duration:1.5},{note:"A3",time:5,duration:1.2},{note:"F4",time:6,duration:1.2},{note:"G4",time:7,duration:1.2},{note:"A4",time:8,duration:2},{note:"F4",time:10,duration:1.2},{note:"E4",time:12,duration:1.5},{note:"D4",time:14,duration:2},{note:"C3",time:16,duration:1.5},{note:"G3",time:17,duration:1.2},{note:"E4",time:18,duration:1.2},{note:"D4",time:19,duration:1.2},{note:"C4",time:20,duration:1.5},{note:"G3",time:21,duration:1.2},{note:"E4",time:22,duration:1.2},{note:"G4",time:23,duration:1.2},{note:"F4",time:24,duration:2},{note:"E4",time:26,duration:1.5},{note:"D4",time:28,duration:1.5},{note:"C4",time:30,duration:2},{note:"D3",time:32,duration:2},{note:"A3",time:33,duration:1.5},{note:"F4",time:34,duration:1.5},{note:"E4",time:36,duration:1.5},{note:"F4",time:38,duration:1.5},{note:"A4",time:40,duration:2},{note:"G4",time:42,duration:1.5},{note:"D4",time:44,duration:4}],notesFlute:[{note:"A4",time:4,duration:3.5},{note:"G4",time:8,duration:2},{note:"F4",time:10,duration:2},{note:"E4",time:12,duration:4},{note:"C5",time:20,duration:3},{note:"B4",time:23,duration:2},{note:"A4",time:25,duration:3},{note:"G4",time:28,duration:4},{note:"D5",time:34,duration:3.5},{note:"E5",time:38,duration:2},{note:"F5",time:40,duration:2.5},{note:"E5",time:42.5,duration:2},{note:"D5",time:44.5,duration:3.5}]},{id:"golden_lion_hymn",title:"Hymn of the Golden Lion",subtitle:"Cathedral Organ, Harp & Resonant Chimes in A Minor",tempoBpm:56,totalBeats:48,notesOrgan:[{note:"A2",time:0,duration:12,gain:.35},{note:"E3",time:0,duration:12,gain:.28},{note:"C4",time:0,duration:12,gain:.22},{note:"G2",time:12,duration:12,gain:.35},{note:"D3",time:12,duration:12,gain:.28},{note:"B3",time:12,duration:12,gain:.22},{note:"F2",time:24,duration:12,gain:.35},{note:"C3",time:24,duration:12,gain:.28},{note:"A3",time:24,duration:12,gain:.22},{note:"E2",time:36,duration:6,gain:.35},{note:"B2",time:36,duration:6,gain:.28},{note:"A2",time:42,duration:6,gain:.4},{note:"E3",time:42,duration:6,gain:.3}],notesLute:[{note:"A3",time:0,duration:2},{note:"C4",time:1.5,duration:2},{note:"E4",time:3,duration:2},{note:"A4",time:4.5,duration:2},{note:"C5",time:6,duration:3},{note:"B4",time:9,duration:2},{note:"G3",time:12,duration:2},{note:"B3",time:13.5,duration:2},{note:"D4",time:15,duration:2},{note:"G4",time:16.5,duration:2},{note:"B4",time:18,duration:3},{note:"A4",time:21,duration:2},{note:"F3",time:24,duration:2},{note:"A3",time:25.5,duration:2},{note:"C4",time:27,duration:2},{note:"F4",time:28.5,duration:2},{note:"A4",time:30,duration:3},{note:"G4",time:33,duration:2},{note:"E3",time:36,duration:2},{note:"G3",time:37.5,duration:2},{note:"B3",time:39,duration:2},{note:"E4",time:40.5,duration:2},{note:"A3",time:42,duration:6}],notesFlute:[{note:"E5",time:3,duration:3.5},{note:"A5",time:7,duration:4},{note:"G5",time:15,duration:3},{note:"D5",time:19,duration:4},{note:"C5",time:27,duration:3.5},{note:"E5",time:31,duration:4},{note:"B4",time:37,duration:3},{note:"A4",time:41,duration:6}]},{id:"echoes_alexandria",title:"Echoes of Alexandria",subtitle:"Contemplative Lute Solos & Distant Flute Harmonics in E Minor",tempoBpm:60,totalBeats:48,notesDrone:[{note:"E2",time:0,duration:24,gain:.3},{note:"B2",time:0,duration:24,gain:.25},{note:"A2",time:24,duration:12,gain:.3},{note:"E2",time:36,duration:12,gain:.35}],notesLute:[{note:"E3",time:0,duration:2},{note:"B3",time:1,duration:1.5},{note:"G4",time:2,duration:1.5},{note:"F4",time:3.5,duration:1.5},{note:"E4",time:5,duration:2},{note:"G4",time:6.5,duration:1.5},{note:"B4",time:8,duration:2.5},{note:"A4",time:10.5,duration:1.5},{note:"G4",time:12,duration:2},{note:"F4",time:14,duration:2},{note:"E4",time:16,duration:3},{note:"D4",time:19,duration:2},{note:"A3",time:24,duration:2},{note:"E4",time:25.5,duration:1.5},{note:"C4",time:27,duration:1.5},{note:"B3",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"E4",time:33,duration:2.5},{note:"D4",time:35.5,duration:2},{note:"E3",time:38,duration:2},{note:"B3",time:39.5,duration:1.5},{note:"G4",time:41,duration:2},{note:"E4",time:43,duration:5}],notesFlute:[{note:"B4",time:5,duration:3},{note:"E5",time:8.5,duration:3.5},{note:"D5",time:13,duration:2.5},{note:"B4",time:16,duration:4},{note:"A4",time:27,duration:3},{note:"C5",time:30.5,duration:3},{note:"B4",time:34,duration:3.5},{note:"G4",time:40,duration:2.5},{note:"F4",time:42.5,duration:2},{note:"E4",time:44.5,duration:3.5}]},{id:"starchamber_canticle",title:"The Star-Chamber Canticle",subtitle:"Peaceful Cathedral Flute & Harp Polyphony in G Dorian",tempoBpm:58,totalBeats:48,notesOrgan:[{note:"G2",time:0,duration:16,gain:.32},{note:"D3",time:0,duration:16,gain:.25},{note:"F2",time:16,duration:16,gain:.32},{note:"C3",time:16,duration:16,gain:.25},{note:"G2",time:32,duration:16,gain:.35},{note:"D3",time:32,duration:16,gain:.28}],notesLute:[{note:"G3",time:0,duration:1.8},{note:"D4",time:1.2,duration:1.5},{note:"B3",time:2.4,duration:1.5},{note:"C4",time:3.6,duration:1.5},{note:"D4",time:4.8,duration:2},{note:"F4",time:6.5,duration:1.5},{note:"G4",time:8,duration:2.5},{note:"F4",time:11,duration:2},{note:"D4",time:13,duration:2},{note:"C4",time:15,duration:2},{note:"F3",time:16,duration:1.8},{note:"C4",time:17.5,duration:1.5},{note:"A3",time:19,duration:1.5},{note:"B3",time:20.5,duration:1.5},{note:"C4",time:22,duration:2},{note:"E4",time:24,duration:1.5},{note:"F4",time:26,duration:2.5},{note:"E4",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"G3",time:32,duration:2},{note:"D4",time:33.5,duration:1.5},{note:"F4",time:35,duration:1.5},{note:"G4",time:37,duration:3},{note:"A4",time:40,duration:2.5},{note:"G4",time:43,duration:5}],notesFlute:[{note:"D5",time:4,duration:3.5},{note:"G5",time:8,duration:4},{note:"F5",time:13,duration:3},{note:"D5",time:16.5,duration:4},{note:"C5",time:22,duration:3.5},{note:"F5",time:26,duration:3.5},{note:"E5",time:30,duration:3},{note:"G5",time:36,duration:3.5},{note:"A5",time:40,duration:2.5},{note:"G5",time:43,duration:4.5}]}];class gm{ctx=null;masterGain=null;reverbConvolver=null;isMuted=!1;volume=.7;isPlaying=!1;isLibraryMode=!1;shuffledPlaylist=[];currentTrackIndex=0;scheduleTimer=null;onTrackChange;constructor(){this.initPlaylist()}initPlaylist(){const t=Uo.map((e,i)=>i);for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}this.shuffledPlaylist=t,this.currentTrackIndex=0}ensureAudioContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.reverbConvolver=this.createCathedralReverb(this.ctx);const e=this.ctx.createGain();e.gain.setValueAtTime(.7,this.ctx.currentTime);const i=this.ctx.createGain();i.gain.setValueAtTime(.65,this.ctx.currentTime),this.masterGain.connect(e),e.connect(this.ctx.destination),this.reverbConvolver&&(this.masterGain.connect(this.reverbConvolver),this.reverbConvolver.connect(i),i.connect(this.ctx.destination))}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}createCathedralReverb(t){const e=t.sampleRate,i=e*3.2,n=2.8,s=t.createBuffer(2,i,e),a=s.getChannelData(0),o=s.getChannelData(1);for(let c=0;c<i;c++){const h=c/e,u=Math.exp(-h*n),d=(Math.random()*2-1)*u,f=(Math.random()*2-1)*u;a[c]=d,o[c]=f}const l=t.createConvolver();return l.buffer=s,l}setVolume(t){this.volume=_m(t,0,1),this.ctx&&this.masterGain&&this.isLibraryMode&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.1)}setMuted(t){if(this.isMuted=t,this.ctx&&this.masterGain){const e=this.isMuted||!this.isLibraryMode?1e-4:this.volume;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.2)}}setLibraryMode(t){this.isLibraryMode=t,t?(this.ensureAudioContext(),this.isPlaying||this.playNextShuffledTrack(),this.ctx&&this.masterGain&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,1.2)):this.ctx&&this.masterGain&&this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,1)}playNextShuffledTrack(){if(!this.ensureAudioContext()||!this.ctx||!this.masterGain)return;this.shuffledPlaylist.length===0&&this.initPlaylist();const t=this.shuffledPlaylist[this.currentTrackIndex],e=Uo[t];this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this.initPlaylist(),this.onTrackChange&&this.onTrackChange(e.title,e.subtitle),this.scheduleTrack(e)}scheduleTrack(t){if(!this.ctx||!this.masterGain)return;this.isPlaying=!0;const e=this.ctx.currentTime+.1,i=60/t.tempoBpm,n=t.totalBeats*i;t.notesLute&&t.notesLute.forEach(s=>{const a=e+s.time*i,o=s.duration*i;this.playLuteString(s.note,a,o,s.gain??.45)}),t.notesFlute&&t.notesFlute.forEach(s=>{const a=e+s.time*i,o=s.duration*i;this.playFluteNote(s.note,a,o,s.gain??.35)}),t.notesOrgan&&t.notesOrgan.forEach(s=>{const a=e+s.time*i,o=s.duration*i;this.playOrganNote(s.note,a,o,s.gain??.3)}),t.notesDrone&&t.notesDrone.forEach(s=>{const a=e+s.time*i,o=s.duration*i;this.playDroneNote(s.note,a,o,s.gain??.3)}),this.scheduleTimer!==null&&window.clearTimeout(this.scheduleTimer),this.scheduleTimer=window.setTimeout(()=>{this.isLibraryMode?this.playNextShuffledTrack():this.isPlaying=!1},(n+1.5)*1e3)}playLuteString(t,e,i,n){if(!this.ctx||!this.masterGain)return;const s=xs[t];if(!s)return;const a=this.ctx.createOscillator();a.type="triangle",a.frequency.setValueAtTime(s,e);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(s*2,e);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(Math.min(2800,s*5),e),l.frequency.exponentialRampToValueAtTime(Math.max(400,s*1.5),e+i);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(n*.4,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(l),o.connect(l),l.connect(c),c.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+i+.05),o.stop(e+i+.05)}playFluteNote(t,e,i,n){if(!this.ctx||!this.masterGain)return;const s=xs[t];if(!s)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e);const o=this.ctx.createOscillator();o.frequency.setValueAtTime(5.2,e),this.ctx.createGain().gain.setValueAtTime(s*.015,e),o.connect(a.frequency);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1900,e);const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(n*.35,e+.12),h.gain.setValueAtTime(n*.32,e+i-.25),h.gain.linearRampToValueAtTime(1e-4,e+i),a.connect(c),c.connect(h),h.connect(this.masterGain),o.start(e),a.start(e),o.stop(e+i),a.stop(e+i+.05)}playOrganNote(t,e,i,n){if(!this.ctx||!this.masterGain)return;const s=xs[t];if(!s)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e);const o=this.ctx.createOscillator();o.type="triangle",o.frequency.setValueAtTime(s*2,e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(n*.28,e+.25),l.gain.setValueAtTime(n*.25,e+i-.3),l.gain.linearRampToValueAtTime(1e-4,e+i),a.connect(l),o.connect(l),l.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+i+.1),o.stop(e+i+.1)}playDroneNote(t,e,i,n){if(!this.ctx||!this.masterGain)return;const s=xs[t];if(!s)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n*.35,e+.8),o.gain.setValueAtTime(n*.3,e+i-1),o.gain.linearRampToValueAtTime(1e-4,e+i),a.connect(o),o.connect(this.masterGain),a.start(e),a.stop(e+i+.2)}}function _m(r,t,e){return Math.max(t,Math.min(e,r))}class vm{raycaster;camera;canvas;scene;callbacks;mouseNDC=new Xt(0,0);isPointerLocked=!1;hoveredBookData=null;hoveredKey=null;highlightMesh;tempMatrix=new jt;tempPos=new U;tempQuat=new Qe;tempScale=new U;lastCheckTime=0;checkIntervalMs=33;lastCameraPos=new U;lastCameraQuat=new Qe;pendingTargetBooks=[];maxDistance=6.5;isEnabled=!0;constructor(t,e,i,n){this.scene=t,this.camera=e,this.canvas=i,this.callbacks=n,this.raycaster=new dh,this.raycaster.far=this.maxDistance;const s=new it(1,1,1),a=new Lt({color:16771763,emissive:16573855,emissiveIntensity:.85,transparent:!0,opacity:.55,roughness:.3,metalness:.4,depthTest:!0,depthWrite:!1});this.highlightMesh=new D(s,a),this.highlightMesh.visible=!1,this.highlightMesh.renderOrder=999,this.scene.add(this.highlightMesh),this.bindEvents()}bindEvents(){document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement!==null,this.isPointerLocked&&this.mouseNDC.set(0,0)}),window.addEventListener("mousemove",t=>{if(this.isEnabled){if(!this.isPointerLocked){const e=this.canvas.getBoundingClientRect();this.mouseNDC.x=(t.clientX-e.left)/e.width*2-1,this.mouseNDC.y=-((t.clientY-e.top)/e.height*2-1)}this.performRaycast(this.pendingTargetBooks)}}),this.canvas.addEventListener("click",t=>{this.isEnabled&&(this.performRaycast(this.pendingTargetBooks,!0),this.hoveredBookData&&(t.preventDefault(),t.stopPropagation(),this.callbacks.onSelectBook(this.hoveredBookData)))})}update(t){if(this.pendingTargetBooks=t,!this.isEnabled||t.length===0){this.clearHover();return}const e=performance.now();if(!(e-this.lastCheckTime<this.checkIntervalMs)){if(this.isPointerLocked){const i=this.camera.position.distanceToSquared(this.lastCameraPos),n=2*Math.acos(Math.abs(ke.clamp(this.camera.quaternion.dot(this.lastCameraQuat),-1,1)));if(i<1e-4&&n<.002)return;this.lastCameraPos.copy(this.camera.position),this.lastCameraQuat.copy(this.camera.quaternion)}this.lastCheckTime=e,this.performRaycast(t)}}performRaycast(t,e=!1){if(!this.isEnabled||t.length===0){this.clearHover();return}this.isPointerLocked?this.raycaster.setFromCamera(new Xt(0,0),this.camera):this.raycaster.setFromCamera(this.mouseNDC,this.camera);const i=this.raycaster.intersectObjects(t,!1);if(i.length>0){const n=i[0],s=n.object;if(s instanceof rl&&n.instanceId!==void 0){const a=s.userData?.books;if(a&&n.instanceId<a.length&&n.distance<=this.maxDistance){const o=a[n.instanceId],l=`inst_${s.id}_${n.instanceId}`;(this.hoveredKey!==l||e)&&(this.hoveredKey=l,this.hoveredBookData=o,s.getMatrixAt(n.instanceId,this.tempMatrix),this.tempMatrix.premultiply(s.matrixWorld),this.tempMatrix.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03),this.highlightMesh.visible=!0,this.callbacks.onHoverBook(o));return}}if(s instanceof D){const a=s.userData?.bookData;if(a&&n.distance<=this.maxDistance){const o=`mesh_${s.id}`;if(this.hoveredKey!==o||e){if(this.hoveredKey=o,this.hoveredBookData=a,s.matrixWorld.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),s.geometry.boundingBox){const l=new U;s.geometry.boundingBox.getSize(l),this.highlightMesh.scale.set(l.x*1.03,l.y*1.03,l.z*1.03)}else this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03);this.highlightMesh.visible=!0,this.callbacks.onHoverBook(a)}return}}}this.clearHover()}clearHover(){(this.hoveredBookData||this.highlightMesh.visible)&&(this.hoveredBookData=null,this.hoveredKey=null,this.highlightMesh.visible=!1,this.callbacks.onHoverBook(null))}getHoveredBook(){return this.hoveredBookData}}class xm{canvas;hudRoot;scene;clock;renderPipeline;cameraRig;lightingManager;atlas;surfaceManager;dungeonManager;libraryManager;musicManager;interactionRaycaster;characterModel;characterController;hud;settingsModal;bookReaderModal;currentMode="surface";currentPerspective="FPP";surfacePlayerPos=new U(0,0,0);dungeonPlayerPos=new U(0,0,0);libraryPlayerPos=new U(0,0,-1);keys={};constructor(t,e){this.canvas=t,this.hudRoot=e,this.scene=new sl,this.clock=new hh,this.renderPipeline=new jp({canvas:this.canvas,internalWidth:640,internalHeight:360}),this.atlas=new Qp,this.lightingManager=new Jp(this.scene),this.cameraRig=new Si({perspective:"FPP",mouseSensitivity:1}),this.scene.add(this.cameraRig.root),this.surfaceManager=new sm(this.scene,this.atlas),this.dungeonManager=new om(this.scene,this.atlas,48,48),this.libraryManager=new cm(this.scene,this.atlas),this.musicManager=new gm,this.characterModel=new hm(this.atlas,this.cameraRig.camera),this.scene.add(this.characterModel.group),this.characterController=new dm(this.characterModel),this.characterController.surfaceManager=this.surfaceManager,this.characterController.dungeonManager=this.dungeonManager,this.characterController.libraryManager=this.libraryManager;const i=this.surfaceManager.getElevation(0,0);this.surfacePlayerPos.set(0,i,0);const n=this.dungeonManager.dungeon.spawnPoint;this.dungeonPlayerPos.set(n.x+.5,0,n.z+.5),this.libraryPlayerPos.set(0,0,-1),this.settingsModal=new pm({onPerspectiveChange:a=>this.setPerspective(a),onSensitivityChange:a=>this.cameraRig.setMouseSensitivity(a),onFovChange:a=>this.cameraRig.setFov(a),onResolutionChange:(a,o)=>this.renderPipeline.setResolution(a,o),onMusicVolumeChange:a=>this.musicManager.setVolume(a),onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.bookReaderModal=new mm({onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.interactionRaycaster=new vm(this.scene,this.cameraRig.camera,this.canvas,{onHoverBook:a=>{a&&this.currentMode==="library"&&!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?this.hud.showBookHover(a):this.hud.hideBookHover()},onSelectBook:a=>{this.currentMode==="library"&&!this.settingsModal.isOpen&&this.openBookReader(a)}});try{const a=localStorage.getItem("retro3d_fov");if(a){const c=parseInt(a,10);!isNaN(c)&&c>=40&&c<=100&&this.cameraRig.setFov(c)}const o=localStorage.getItem("retro3d_sens");if(o){const c=parseFloat(o);!isNaN(c)&&c>=.5&&c<=3&&this.cameraRig.setMouseSensitivity(c)}const l=localStorage.getItem("retro3d_music_vol");if(l){const c=parseInt(l,10);!isNaN(c)&&c>=0&&c<=100&&this.musicManager.setVolume(c/100)}}catch{}this.hud=new fm(this.hudRoot,{onToggleMode:()=>this.switchModeWithTransition(),onSelectResolution:(a,o)=>this.renderPipeline.setResolution(a,o),onToggleFullscreen:()=>this.toggleFullscreen(),onSelectItem:a=>this.characterModel.setActiveItem(a?a.id:null)}),this.musicManager.onTrackChange=(a,o)=>{this.hud.showNowPlaying(a,o)},this.bindEvents(),this.setMode("surface",!0),this.setPerspective("FPP");const s=this.hud.getSelectedItem();this.characterModel.setActiveItem(s?s.id:null)}bindEvents(){window.addEventListener("resize",()=>{this.renderPipeline.resize(),this.cameraRig.setAspect(window.innerWidth/window.innerHeight)}),this.canvas.addEventListener("click",()=>{this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen&&!this.interactionRaycaster.getHoveredBook()&&this.canvas.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==null?document.body.classList.add("pointer-locked"):document.body.classList.remove("pointer-locked")}),window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),t.code==="Escape"||t.code==="KeyO"){if(this.bookReaderModal.getIsOpen()){this.bookReaderModal.close();return}t.preventDefault(),t.stopPropagation(),this.toggleSettings();return}if(t.code==="KeyN"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()){t.preventDefault(),this.currentMode!=="library"?this.switchModeWithTransition("library"):this.switchModeWithTransition("surface");return}if(t.code==="KeyM"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.switchModeWithTransition(),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&t.code.startsWith("Digit")){const e=parseInt(t.code.replace("Digit",""),10);e>=1&&e<=8&&this.hud.selectSlot(e-1)}t.code==="KeyF"&&!this.settingsModal.isOpen&&this.toggleFullscreen()},{capture:!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}openBookReader(t){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.interactionRaycaster.clearHover(),this.hud.hideBookHover(),this.bookReaderModal.open(t)}openSettings(){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.settingsModal.show()}closeSettings(){this.characterController.isInputPaused=!1,this.settingsModal.hide(),this.canvas.requestPointerLock()}toggleSettings(){this.settingsModal.isOpen?this.closeSettings():this.openSettings()}setPerspective(t){this.currentPerspective=t,this.cameraRig.setPerspective(t),this.characterController.setPerspective(t),this.hud.setPerspective(t),this.settingsModal.setPerspectiveUI(t),this.renderPipeline.setCrosshairVisible(t==="FPP"),this.characterModel.setFirstPerson(t==="FPP"),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.canvas.requestPointerLock()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}switchModeWithTransition(t){if(this.renderPipeline?.transitionManager?.isTransitioning)return;let e;t?e=t:this.currentMode==="surface"?e="dungeon":this.currentMode==="dungeon"?e="library":e="surface",this.renderPipeline.transitionManager.startTransition(()=>{this.setMode(e)},()=>{},.7)}setMode(t,e=!1){if(this.characterController&&(this.currentMode==="surface"?this.surfacePlayerPos.copy(this.characterController.position):this.currentMode==="dungeon"?this.dungeonPlayerPos.copy(this.characterController.position):this.libraryPlayerPos.copy(this.characterController.position),this.characterController.currentMode=t),this.currentMode=t,this.lightingManager&&this.lightingManager.setMode(t),this.musicManager&&this.musicManager.setLibraryMode(t==="library"),t==="surface"){this.surfaceManager&&this.surfaceManager.setVisible(!0),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=16,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=16,this.characterModel.fpsLanternLight.distance=30),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=16,this.characterModel.tppLanternLight.distance=30));const i=this.surfacePlayerPos;this.characterController&&this.characterController.setPosition(i.x,i.y,i.z),this.surfaceManager&&this.surfaceManager.update(i.x,i.z)}else if(t==="dungeon"){this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!0),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=22,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=22,this.characterModel.fpsLanternLight.distance=34),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=22,this.characterModel.tppLanternLight.distance=34));const i=this.dungeonPlayerPos;this.characterController&&this.characterController.setPosition(i.x,i.y,i.z)}else{this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!0),this.characterModel&&(this.characterModel.baseLanternIntensity=22,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=22,this.characterModel.fpsLanternLight.distance=34),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=22,this.characterModel.tppLanternLight.distance=34));const i=this.libraryPlayerPos;this.characterController&&this.characterController.setPosition(i.x,i.y,i.z)}e&&this.cameraRig&&this.characterController&&(this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition)),this.hud&&this.hud.setMode(t)}start(){const t=()=>{requestAnimationFrame(t),this.tick()};t()}tick(){const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime(),i=this.characterController.getGamepadInput(),n=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyQ,s=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyE;this.characterController.update(t,this.cameraRig.getYaw()),this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.update(t,i.rightStickX,i.rightStickY,n,s),this.currentMode==="surface"?(this.surfaceManager.update(this.characterController.position.x,this.characterController.position.z),this.lightingManager.updateSunPosition(this.characterController.position),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):this.currentMode==="dungeon"?(this.dungeonManager.updateTorches(e),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):(this.libraryManager.update(e),this.lightingManager.updateSunPosition(this.characterController.position),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?(this.interactionRaycaster.isEnabled=!0,this.interactionRaycaster.update(this.libraryManager.raycastableBooks)):(this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover())),this.renderPipeline.render(this.scene,this.cameraRig.camera,t);const a=Math.floor(this.characterController.position.x/16),o=Math.floor(this.characterController.position.z/16);this.hud.updateTelemetry(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z,a,o,this.cameraRig.getYaw())}}window.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("game-canvas"),t=document.getElementById("hud-root");if(!r||!t){console.error("Failed to find #game-canvas or #hud-root in DOM.");return}new xm(r,t).start(),console.log("Retro-3D Dungeon & Surface Engine initialized successfully.")});
