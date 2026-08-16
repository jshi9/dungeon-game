(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="174",_l=0,Sa=1,vl=2,xl=0,Io=1,Ml=2,hn=3,wn=0,Ie=1,Ut=2,bn=0,hi=1,Es=2,ya=3,ba=4,Sl=5,Bn=100,yl=101,bl=102,El=103,wl=104,Tl=200,Al=201,Rl=202,Cl=203,cr=204,hr=205,Pl=206,Ll=207,Dl=208,Il=209,Ul=210,Fl=211,Nl=212,Ol=213,Bl=214,dr=0,ur=1,fr=2,fi=3,pr=4,mr=5,gr=6,_r=7,Uo=0,kl=1,zl=2,En=0,Gl=1,Hl=2,Vl=3,Wl=4,Xl=5,ql=6,Yl=7,Fo=300,pi=301,mi=302,vr=303,xr=304,Cs=306,ki=1e3,zn=1001,Mr=1002,ce=1003,$l=1004,Xi=1005,tn=1006,Is=1007,Gn=1008,fn=1009,No=1010,Oo=1011,zi=1012,jr=1013,Hn=1014,en=1015,Gi=1016,Jr=1017,Qr=1018,gi=1020,Bo=35902,ko=1021,zo=1022,He=1023,Go=1024,Ho=1025,di=1026,_i=1027,ta=1028,ea=1029,Vo=1030,na=1031,ia=1033,_s=33776,vs=33777,xs=33778,Ms=33779,Sr=35840,yr=35841,br=35842,Er=35843,wr=36196,Tr=37492,Ar=37496,Rr=37808,Cr=37809,Pr=37810,Lr=37811,Dr=37812,Ir=37813,Ur=37814,Fr=37815,Nr=37816,Or=37817,Br=37818,kr=37819,zr=37820,Gr=37821,Ss=36492,Hr=36494,Vr=36495,Wo=36283,Wr=36284,Xr=36285,qr=36286,Zl=3200,Kl=3201,Xo=0,jl=1,yn="",xe="srgb",vi="srgb-linear",ws="linear",ne="srgb",Xn=7680,Ea=519,Jl=512,Ql=513,tc=514,qo=515,ec=516,nc=517,ic=518,sc=519,wa=35044,Ta="300 es",dn=2e3,Ts=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Ni=Math.PI/180,xi=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function sa(s,t){return(s%t+t)%t}function rc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ac(s,t,e){return s!==t?(e-s)/(t-s):0}function Oi(s,t,e){return(1-e)*s+e*t}function oc(s,t,e,n){return Oi(s,t,1-Math.exp(-e*n))}function lc(s,t=1){return t-Math.abs(sa(s,t*2)-t)}function cc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uc(s,t){return s+Math.random()*(t-s)}function fc(s){return s*(.5-Math.random())}function pc(s){s!==void 0&&(Aa=s);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mc(s){return s*Ni}function gc(s){return s*xi}function _c(s){return(s&s-1)===0&&s!==0}function vc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*u,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oe={DEG2RAD:Ni,RAD2DEG:xi,generateUUID:yi,clamp:Wt,euclideanModulo:sa,mapLinear:rc,inverseLerp:ac,lerp:Oi,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:hc,randInt:dc,randFloat:uc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:_c,ceilPowerOfTwo:vc,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Mc,normalize:Ae,denormalize:ai};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],b=i[4],x=i[7],P=i[2],R=i[5],A=i[8];return r[0]=a*_+o*E+l*P,r[3]=a*m+o*b+l*R,r[6]=a*p+o*x+l*A,r[1]=c*_+h*E+f*P,r[4]=c*m+h*b+f*R,r[7]=c*p+h*x+f*A,r[2]=d*_+u*E+g*P,r[5]=d*m+u*b+g*R,r[8]=d*p+u*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Ot;function Yo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sc(){const s=As("canvas");return s.style.display="block",s}const Ra={};function Fn(s){s in Ra||(Ra[s]=!0,console.warn(s))}function yc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ec(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ca=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wc(){const s={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(i.r=un(i.r),i.g=un(i.g),i.b=un(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vi]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),s}const Jt=wc();function un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ui(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qn;class Tc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=As("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class ra{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fs(i[a].image)):r.push(Fs(i[a]))}else r=Fs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rc=0;class Ee extends Si{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=zn,i=zn,r=tn,a=Gn,o=He,l=fn,c=Ee.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=yi(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Fo;Ee.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(u+1)/2,P=(p+1)/2,R=(h+d)/4,A=(f+_)/4,L=(g+m)/4;return b>x&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=A/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=L/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=L/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cc extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ra(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $o extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pc extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let m=1-o;const p=l*d+c*u+h*g+f*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const x=o*E;if(l=l*m+d*x,c=c*m+u*x,h=h*m+g*x,f=f*m+_*x,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-o*u,t[e+2]=c*g+h*u+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new U,La=new Ke;class Vn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Yi.subVectors(this.max,Ai),Yn.subVectors(t.a,Ai),$n.subVectors(t.b,Ai),Zn.subVectors(t.c,Ai),mn.subVectors($n,Yn),gn.subVectors(Zn,$n),Cn.subVectors(Yn,Zn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Cn.z,Cn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Cn.z,0,-Cn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Cn.y,Cn.x,0];return!Os(e,Yn,$n,Zn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,Yn,$n,Zn,Yi))?!1:($i.crossVectors(mn,gn),e=[$i.x,$i.y,$i.z],Os(e,Yn,$n,Zn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new U,new U,new U,new U,new U,new U,new U,new U],qe=new U,qi=new Vn,Yn=new U,$n=new U,Zn=new U,mn=new U,gn=new U,Cn=new U,Ai=new U,Yi=new U,$i=new U,Pn=new U;function Os(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lc=new Vn,Ri=new U,Bs=new U;class bi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Bs)),this.expandByPoint(Ri.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new U,ks=new U,Zi=new U,_n=new U,zs=new U,Ki=new U,Gs=new U;class aa{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ks.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(ks);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zi),o=_n.dot(this.direction),l=-_n.dot(Zi),c=_n.lengthSq(),h=Math.abs(1-a*a);let f,d,u,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ks).addScaledVector(Zi,d),u}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){zs.subVectors(e,t),Ki.subVectors(n,t),Gs.crossVectors(zs,Ki);let a=this.direction.dot(Gs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const l=o*this.direction.dot(Ki.crossVectors(_n,Ki));if(l<0)return null;const c=o*this.direction.dot(zs.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(Gs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,i,r,a,o,l,c,h,f,d,u,g,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,d,u,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,f,d,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,u=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d+_*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,u=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dc,t,Ic)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),vn.crossVectors(n,Fe),vn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),vn.crossVectors(n,Fe)),vn.normalize(),ji.crossVectors(Fe,vn),i[0]=vn.x,i[4]=ji.x,i[8]=Fe.x,i[1]=vn.y,i[5]=ji.y,i[9]=Fe.y,i[2]=vn.z,i[6]=ji.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],x=n[11],P=n[15],R=i[0],A=i[4],L=i[8],y=i[12],M=i[1],T=i[5],z=i[9],B=i[13],H=i[2],q=i[6],$=i[10],Z=i[14],W=i[3],tt=i[7],rt=i[11],at=i[15];return r[0]=a*R+o*M+l*H+c*W,r[4]=a*A+o*T+l*q+c*tt,r[8]=a*L+o*z+l*$+c*rt,r[12]=a*y+o*B+l*Z+c*at,r[1]=h*R+f*M+d*H+u*W,r[5]=h*A+f*T+d*q+u*tt,r[9]=h*L+f*z+d*$+u*rt,r[13]=h*y+f*B+d*Z+u*at,r[2]=g*R+_*M+m*H+p*W,r[6]=g*A+_*T+m*q+p*tt,r[10]=g*L+_*z+m*$+p*rt,r[14]=g*y+_*B+m*Z+p*at,r[3]=E*R+b*M+x*H+P*W,r[7]=E*A+b*T+x*q+P*tt,r[11]=E*L+b*z+x*$+P*rt,r[15]=E*y+b*B+x*Z+P*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*u-n*l*u)+_*(+e*l*u-e*c*d+r*a*d-i*a*u+i*c*h-r*l*h)+m*(+e*c*f-e*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-i*o*h-e*l*f+e*o*d+i*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=f*m*c-_*d*c+_*l*u-o*m*u-f*l*p+o*d*p,b=g*d*c-h*m*c-g*l*u+a*m*u+h*l*p-a*d*p,x=h*_*c-g*f*c+g*o*u-a*_*u-h*o*p+a*f*p,P=g*f*l-h*_*l-g*o*d+a*_*d+h*o*m-a*f*m,R=e*E+n*b+i*x+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*d*r-f*m*r-_*i*u+n*m*u+f*i*p-n*d*p)*A,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*u-n*l*u)*A,t[4]=b*A,t[5]=(h*m*r-g*d*r+g*i*u-e*m*u-h*i*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*u+e*l*u)*A,t[8]=x*A,t[9]=(g*f*r-h*_*r-g*n*u+e*_*u+h*n*p-e*f*p)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*u-e*o*u)*A,t[12]=P*A,t[13]=(h*_*i-g*f*i+g*n*d-e*_*d-h*n*m+e*f*m)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,g=r*f,_=a*h,m=a*f,p=o*f,E=l*c,b=l*h,x=l*f,P=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(u+x)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(u-x)*R,i[5]=(1-(d+p))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(g+b)*A,i[9]=(m-E)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Kn.set(i[0],i[1],i[2]).length();const a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/a,f=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=f,Ye.elements[9]*=f,Ye.elements[10]*=f,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let u,g;if(o===dn)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ts)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=dn){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-r),d=(e+t)*c,u=(n+i)*h;let g,_;if(o===dn)g=(a+r)*f,_=-2*f;else if(o===Ts)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new U,Ye=new Kt,Dc=new U(0,0,0),Ic=new U(1,1,1),vn=new U,ji=new U,Fe=new U,Da=new Kt,Ia=new Ke;class De{constructor(t=0,e=0,n=0,i=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class oa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uc=0;const Ua=new U,jn=new Ke,on=new Kt,Ji=new U,Ci=new U,Fc=new U,Nc=new Ke,Fa=new U(1,0,0),Na=new U(0,1,0),Oa=new U(0,0,1),Ba={type:"added"},Oc={type:"removed"},Jn={type:"childadded",child:null},Hs={type:"childremoved",child:null};class he extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new U,e=new De,n=new Ke,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ot}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Na,t)}rotateZ(t){return this.rotateOnAxis(Oa,t)}translateOnAxis(t,e){return Ua.copy(t).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Na,t)}translateZ(t){return this.translateOnAxis(Oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ci,Ji,this.up):on.lookAt(Ji,Ci,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(on),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oc),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new U(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new U,ln=new U,Vs=new U,cn=new U,Qn=new U,ti=new U,ka=new U,Ws=new U,Xs=new U,qs=new U,Ys=new se,$s=new se,Zs=new se;class Ze{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),ln.subVectors(n,e),Vs.subVectors(t,e);const a=$e.dot($e),o=$e.dot(ln),l=$e.dot(Vs),c=ln.dot(ln),h=ln.dot(Vs),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ys.setScalar(0),$s.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(t,e),$s.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ys,r.x),a.addScaledVector($s,r.y),a.addScaledVector(Zs,r.z),a}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),ln.subVectors(t,e),$e.cross(ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),$e.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Qn.subVectors(i,n),ti.subVectors(r,n),Ws.subVectors(t,n);const l=Qn.dot(Ws),c=ti.dot(Ws);if(l<=0&&c<=0)return e.copy(n);Xs.subVectors(t,i);const h=Qn.dot(Xs),f=ti.dot(Xs);if(h>=0&&f<=h)return e.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Qn,a);qs.subVectors(t,r);const u=Qn.dot(qs),g=ti.dot(qs);if(g>=0&&u<=g)return e.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ti,o);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return ka.subVectors(r,i),o=(f-h)/(f-h+(u-g)),e.copy(i).addScaledVector(ka,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Ks(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=sa(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ks(a,r,t+1/3),this.g=Ks(a,r,t),this.b=Ks(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=Zo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Wt(be.r*255,0,255))*65536+Math.round(Wt(be.g*255,0,255))*256+Math.round(Wt(be.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=xe){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Qi);const n=Oi(xn.h,Qi.h,e),i=Oi(xn.s,Qi.s,e),r=Oi(xn.l,Qi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Bt;Bt.NAMES=Zo;let Bc=0;class Ei extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=hi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=hr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cr&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class je extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new U,ts=new qt;let kc=0;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class Ko extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jo extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zc=0;const ze=new Kt,js=new he,ei=new U,Ne=new Vn,Pi=new Vn,ve=new U;class we extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yo(t)?jo:Ko)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ne.min,Pi.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,Pi.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(Pi.min),Ne.expandByPoint(Pi.max))}Ne.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),ve.add(ei)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,f=new U,d=new qt,u=new qt,g=new qt,_=new U,m=new U;function p(L,y,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const T=1/(u.x*g.y-g.x*u.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(T),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(T),o[L].add(_),o[y].add(_),o[M].add(_),l[L].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],T=M.start,z=M.count;for(let B=T,H=T+z;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new U,x=new U,P=new U,R=new U;function A(L){P.fromBufferAttribute(i,L),R.copy(P);const y=o[L];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(R,y);const T=x.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,T)}for(let L=0,y=E.length;L<y;++L){const M=E[L],T=M.start,z=M.count;for(let B=T,H=T+z;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Ve(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new Kt,Ln=new aa,es=new bi,Ga=new U,ns=new U,is=new U,ss=new U,Js=new U,rs=new U,Ha=new U,as=new U;class X extends he{constructor(t=new we,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Js.fromBufferAttribute(f,t),a?rs.addScaledVector(Js,h):rs.addScaledVector(Js.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(es.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(es,Ga)===null||Ln.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(za.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let x=E,P=b;x<P;x+=3){const R=o.getX(x),A=o.getX(x+1),L=o.getX(x+2);i=os(this,p,t,n,c,h,f,R,A,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);i=os(this,a,t,n,c,h,f,E,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=E,P=b;x<P;x+=3){const R=x,A=x+1,L=x+2;i=os(this,p,t,n,c,h,f,R,A,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,x=m+2;i=os(this,a,t,n,c,h,f,E,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Gc(s,t,e,n,i,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===wn,o),l===null)return null;as.copy(o),as.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:s}}function os(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ns),s.getVertexPosition(l,is),s.getVertexPosition(c,ss);const h=Gc(s,t,e,n,ns,is,ss,Ha);if(h){const f=new U;Ze.getBarycoord(Ha,ns,is,ss,f),i&&(h.uv=Ze.getInterpolatedAttribute(i,o,l,c,f,new qt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,o,l,c,f,new qt)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Ze.getNormal(ns,is,ss,d.normal),h.face=d,h.barycoord=f}return h}class ot extends we{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function g(_,m,p,E,b,x,P,R,A,L,y){const M=x/A,T=P/L,z=x/2,B=P/2,H=R/2,q=A+1,$=L+1;let Z=0,W=0;const tt=new U;for(let rt=0;rt<$;rt++){const at=rt*T-B;for(let At=0;At<q;At++){const wt=At*M-z;tt[_]=wt*E,tt[m]=at*b,tt[p]=H,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(At/A),f.push(1-rt/L),Z+=1}}for(let rt=0;rt<L;rt++)for(let at=0;at<A;at++){const At=d+at+q*rt,wt=d+at+q*(rt+1),K=d+(at+1)+q*(rt+1),it=d+(at+1)+q*rt;l.push(At,wt,it),l.push(wt,K,it),W+=6}o.addGroup(u,W,y),u+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Mi(s[e]);for(const i in n)t[i]=n[i]}return t}function Hc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jo(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Vc={clone:Mi,merge:Re};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qo extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new U,Va=new qt,Wa=new qt;class Le extends Qo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Va,Wa),e.subVectors(Wa,Va)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class qc extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Le(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Le(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Le(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Le(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Le(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Le(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tl extends Ee{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:bn});r.uniforms.tEquirect.value=e;const a=new X(i,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=tn),new qc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Gt extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $c={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($c)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class la{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new la(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Rs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class el extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zc extends Ee{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ce,h=ce,f,d){super(null,a,o,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa extends Ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const si=new Kt,qa=new Kt,ls=[],Ya=new Vn,Kc=new Kt,Li=new X,Di=new bi;class nl extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,si),Ya.copy(t.boundingBox).applyMatrix4(si),this.boundingBox.union(Ya)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,si),Di.copy(t.boundingSphere).applyMatrix4(si),this.boundingSphere.union(Di)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),t.ray.intersectsSphere(Di)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,si),qa.multiplyMatrices(n,si),Li.matrixWorld=qa,Li.raycast(t,ls);for(let a=0,o=ls.length;a<o;a++){const l=ls[a];l.instanceId=r,l.object=this,e.push(l)}ls.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(i*this.count),i,this.count,ta,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tr=new U,jc=new U,Jc=new Ot;class Nn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tr.subVectors(n,e).cross(jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jc.getNormalMatrix(t),i=this.coplanarPoint(tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new bi,cs=new U;class ca{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-u,x-p).normalize(),n[1].setComponents(l+r,d+c,m+u,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+E).normalize(),n[3].setComponents(l-a,d-h,m-g,x-E).normalize(),n[4].setComponents(l-o,d-f,m-_,x-b).normalize(),e===dn)n[5].setComponents(l+o,d+f,m+_,x+b).normalize();else if(e===Ts)n[5].setComponents(o,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $a=new Kt,Yr=new aa,hs=new bi,ds=new U;class Qc extends he{constructor(t=new we,e=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(i),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;$a.copy(i).invert(),Yr.copy(t.ray).applyMatrix4($a);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,_=u;g<_;g++){const m=c.getX(g);ds.fromBufferAttribute(f,m),Za(ds,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,_=u;g<_;g++)ds.fromBufferAttribute(f,g),Za(ds,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Za(s,t,e,n,i,r,a){const o=Yr.distanceSqToPoint(s);if(o<e){const l=new U;Yr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ys extends Ee{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Ee{constructor(t,e,n,i,r,a,o,l,c,h=di){if(h!==di&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=Hn),n===void 0&&h===_i&&(n=gi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ce,this.minFilter=l!==void 0?l:ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ge extends we{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],d=[],u=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(u,2));function E(){const x=new U,P=new U;let R=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const y=[],M=L/r,T=M*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,H=B*l+o,q=Math.sin(H),$=Math.cos(H);P.x=T*q,P.y=-M*n+m,P.z=T*$,f.push(P.x,P.y,P.z),x.set(q,A,$).normalize(),d.push(x.x,x.y,x.z),u.push(B,1-M),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<r;y++){const M=_[y][L],T=_[y+1][L],z=_[y+1][L+1],B=_[y][L+1];(t>0||y!==0)&&(h.push(M,T,B),R+=3),(e>0||y!==r-1)&&(h.push(T,z,B),R+=3)}c.addGroup(p,R,0),p+=R}function b(x){const P=g,R=new qt,A=new U;let L=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,m*M,0),d.push(0,M,0),u.push(.5,.5),g++;const T=g;for(let z=0;z<=i;z++){const H=z/i*l+o,q=Math.cos(H),$=Math.sin(H);A.x=y*$,A.y=m*M,A.z=y*q,f.push(A.x,A.y,A.z),d.push(0,M,0),R.x=q*.5+.5,R.y=$*.5*M+.5,u.push(R.x,R.y),g++}for(let z=0;z<i;z++){const B=P+z,H=T+z;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bi extends Ge{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ce extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,d=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<c;b++){const x=b*f-r;g.push(x,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,x=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;u.push(b,x,R),u.push(x,P,R)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class ha extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,d=new U,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const R=P/e;f.x=-t*Math.cos(i+R*r)*Math.sin(a+b*o),f.y=t*Math.cos(a+b*o),f.z=t*Math.sin(i+R*r)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-b),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=h[p][E+1],x=h[p][E],P=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&u.push(b,x,R),(p!==n-1||l<Math.PI)&&u.push(x,P,R)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oi extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new U,f=new U,d=new U;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const _=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const _=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,E=(i+1)*u+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ft extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class th extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eh extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hi extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nh extends Hi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const er=new Kt,Ka=new U,ja=new U;class da{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ka),ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ja),e.updateMatrixWorld(),er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ih extends da{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=xi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class sh extends Hi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ja=new Kt,Ii=new U,nr=new U;class rh extends da{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ii),nr.copy(n.position),nr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nr),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),Ja.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja)}}class nn extends Hi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ua extends Qo{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ah extends da{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qa extends Hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oh extends Hi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lh extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ch{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=to(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=to();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function to(){return performance.now()}const eo=new Kt;class hh{constructor(t,e,n=0,i=1/0){this.ray=new aa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eo),this}intersectObject(t,e=!0,n=[]){return $r(t,this,n,e),n.sort(no),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)$r(t[i],this,n,e);return n.sort(no),n}}function no(s,t){return s.distance-t.distance}function $r(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)$r(r[a],t,e,!0)}}function io(s,t,e,n){const i=dh(n);switch(e){case ko:return s*t;case Go:return s*t;case Ho:return s*t*2;case ta:return s*t/i.components*i.byteLength;case ea:return s*t/i.components*i.byteLength;case Vo:return s*t*2/i.components*i.byteLength;case na:return s*t*2/i.components*i.byteLength;case zo:return s*t*3/i.components*i.byteLength;case He:return s*t*4/i.components*i.byteLength;case ia:return s*t*4/i.components*i.byteLength;case _s:case vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xs:case Ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yr:case Er:return Math.max(s,16)*Math.max(t,8)/4;case Sr:case br:return Math.max(s,8)*Math.max(t,8)/2;case wr:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ss:case Hr:case Vr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wo:case Wr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xr:case qr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dh(s){switch(s){case fn:case No:return{byteLength:1,components:1};case zi:case Oo:case Gi:return{byteLength:2,components:1};case Jr:case Qr:return{byteLength:2,components:4};case Hn:case jr:case en:return{byteLength:4,components:1};case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const _=f[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
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
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Th=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nh=`#define PI 3.141592653589793
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
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,dd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eu=`#ifdef USE_SKINNING
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
#endif`,iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ru=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,au=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#ifdef USE_TRANSMISSION
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fu=`uniform sampler2D t2D;
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
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`#include <common>
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
}`,xu=`#if DEPTH_PACKING == 3200
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
}`,Mu=`#define DISTANCE
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
}`,Su=`#define DISTANCE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`uniform float scale;
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
}`,wu=`uniform vec3 diffuse;
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
}`,Tu=`#include <common>
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
}`,Au=`uniform vec3 diffuse;
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
}`,Ru=`#define LAMBERT
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
}`,Cu=`#define LAMBERT
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
}`,Pu=`#define MATCAP
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
}`,Lu=`#define MATCAP
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
}`,Iu=`#define NORMAL
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
}`,Uu=`#define PHONG
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
}`,Fu=`#define PHONG
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
}`,Nu=`#define STANDARD
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
}`,Ou=`#define STANDARD
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
}`,ku=`#define TOON
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
}`,Gu=`uniform vec3 diffuse;
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
}`,Hu=`#include <common>
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
}`,Vu=`uniform vec3 color;
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
}`,Wu=`uniform float rotation;
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
}`,zt={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:_h,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:Sh,batching_vertex:yh,begin_vertex:bh,beginnormal_vertex:Eh,bsdfs:wh,iridescence_fragment:Th,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Fh,common:Nh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:kh,displacementmap_vertex:zh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Hh,colorspace_fragment:Vh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:rd,envmap_vertex:Zh,fog_vertex:Kh,fog_pars_vertex:jh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:dd,lights_fragment_begin:ud,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:yd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:wd,morphcolor_vertex:Td,morphnormal_vertex:Ad,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Pd,normal_fragment_maps:Ld,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:zd,packing:Gd,premultiplied_alpha_fragment:Hd,project_vertex:Vd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Zd,shadowmap_vertex:Kd,shadowmask_pars_fragment:jd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:tu,skinnormal_vertex:eu,specularmap_fragment:nu,specularmap_pars_fragment:iu,tonemapping_fragment:su,tonemapping_pars_fragment:ru,transmission_fragment:au,transmission_pars_fragment:ou,uv_pars_fragment:lu,uv_pars_vertex:cu,uv_vertex:hu,worldpos_vertex:du,background_vert:uu,background_frag:fu,backgroundCube_vert:pu,backgroundCube_frag:mu,cube_vert:gu,cube_frag:_u,depth_vert:vu,depth_frag:xu,distanceRGBA_vert:Mu,distanceRGBA_frag:Su,equirect_vert:yu,equirect_frag:bu,linedashed_vert:Eu,linedashed_frag:wu,meshbasic_vert:Tu,meshbasic_frag:Au,meshlambert_vert:Ru,meshlambert_frag:Cu,meshmatcap_vert:Pu,meshmatcap_frag:Lu,meshnormal_vert:Du,meshnormal_frag:Iu,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Nu,meshphysical_frag:Ou,meshtoon_vert:Bu,meshtoon_frag:ku,points_vert:zu,points_frag:Gu,shadow_vert:Hu,shadow_frag:Vu,sprite_vert:Wu,sprite_frag:Xu},ct={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Qe={basic:{uniforms:Re([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([ct.common,ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([ct.lights,ct.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Qe.physical={uniforms:Re([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const us={r:0,b:0,g:0},In=new De,qu=new Kt;function Yu(s,t,e,n,i,r,a){const o=new Bt(0);let l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1;const P=g(b);P===null?p(o,l):P&&P.isColor&&(p(P,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===Cs)?(h===void 0&&(h=new X(new ot(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Mi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),In.copy(x.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qu.makeRotationFromEuler(In)),h.material.toneMapped=Jt.getTransfer(P.colorSpace)!==ne,(f!==P||d!==P.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=P,d=P.version,u=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new X(new Ce(2,2),new pn({name:"BackgroundMaterial",uniforms:Mi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(P.colorSpace)!==ne,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(us,Jo(s)),n.buffers.color.setClear(us.r,us.g,us.b,x,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:E}}function $u(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,T,z,B,H){let q=!1;const $=f(B,z,T);r!==$&&(r=$,c(r.object)),q=u(M,B,z,H),q&&g(M,B,z,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(M,T,z,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function f(M,T,z){const B=z.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let q=H[T.id];q===void 0&&(q={},H[T.id]=q);let $=q[B];return $===void 0&&($=d(l()),q[B]=$),$}function d(M){const T=[],z=[],B=[];for(let H=0;H<e;H++)T[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function u(M,T,z,B){const H=r.attributes,q=T.attributes;let $=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){const rt=H[W];let at=q[W];if(at===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),rt===void 0||rt.attribute!==at||at&&rt.data!==at.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(M,T,z,B){const H={},q=T.attributes;let $=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){let rt=q[W];rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const at={};at.attribute=rt,rt&&rt.data&&(at.data=rt.data),H[W]=at,$++}r.attributes=H,r.attributesNum=$,r.index=B}function _(){const M=r.newAttributes;for(let T=0,z=M.length;T<z;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const z=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;z[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),H[M]!==T&&(s.vertexAttribDivisor(M,T),H[M]=T)}function E(){const M=r.newAttributes,T=r.enabledAttributes;for(let z=0,B=T.length;z<B;z++)T[z]!==M[z]&&(s.disableVertexAttribArray(z),T[z]=0)}function b(M,T,z,B,H,q,$){$===!0?s.vertexAttribIPointer(M,T,z,H,q):s.vertexAttribPointer(M,T,z,B,H,q)}function x(M,T,z,B){_();const H=B.attributes,q=z.getAttributes(),$=T.defaultAttributeValues;for(const Z in q){const W=q[Z];if(W.location>=0){let tt=H[Z];if(tt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const rt=tt.normalized,at=tt.itemSize,At=t.get(tt);if(At===void 0)continue;const wt=At.buffer,K=At.type,it=At.bytesPerElement,et=K===s.INT||K===s.UNSIGNED_INT||tt.gpuType===jr;if(tt.isInterleavedBufferAttribute){const lt=tt.data,gt=lt.stride,Xt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let yt=0;yt<W.locationSize;yt++)p(W.location+yt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let yt=0;yt<W.locationSize;yt++)m(W.location+yt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let yt=0;yt<W.locationSize;yt++)b(W.location+yt,at/W.locationSize,K,rt,gt*it,(Xt+at/W.locationSize*yt)*it,et)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let lt=0;lt<W.locationSize;lt++)b(W.location+lt,at/W.locationSize,K,rt,at*it,at/W.locationSize*lt*it,et)}}else if($!==void 0){const rt=$[Z];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(W.location,rt);break;case 3:s.vertexAttrib3fv(W.location,rt);break;case 4:s.vertexAttrib4fv(W.location,rt);break;default:s.vertexAttrib1fv(W.location,rt)}}}}E()}function P(){L();for(const M in n){const T=n[M];for(const z in T){const B=T[z];for(const H in B)h(B[H].object),delete B[H];delete T[z]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const z in T){const B=T[z];for(const H in B)h(B[H].object),delete B[H];delete T[z]}delete n[M.id]}function A(M){for(const T in n){const z=n[T];if(z[M.id]===void 0)continue;const B=z[M.id];for(const H in B)h(B[H].object),delete B[H];delete z[M.id]}}function L(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Zu(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ku(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==He&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function ju(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Nn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,b=E*4;let x=p.clippingState||null;l.value=x,x=h(g,d,b,u);for(let P=0;P!==b;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=u;b!==_;++b,x+=4)a.copy(f[b]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ju(s){let t=new WeakMap;function e(a,o){return o===vr?a.mapping=pi:o===xr&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vr||o===xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const li=4,so=[.125,.215,.35,.446,.526,.582],kn=20,ir=new ua,ro=new Bt;let sr=null,rr=0,ar=0,or=!1;const On=(1+Math.sqrt(5))/2,ri=1/On,ao=[new U(-On,ri,0),new U(On,ri,0),new U(-ri,0,On),new U(ri,0,On),new U(0,On,-ri),new U(0,On,ri),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Qu=new U;class oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qu}=r;sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sr,rr,ar),this._renderer.xr.enabled=or,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Gi,format:He,colorSpace:vi,depthBuffer:!1},i=lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(r)),this._blurMaterial=ef(r,t,e)}return i}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,i,r){const l=new Le(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(ro),f.toneMapping=En,f.autoClear=!1;const g=new je({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),_=new X(new ot,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(ro),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const x=this._cubeSize;fs(i,b*x,E>2?x:0,x,x),f.setRenderTarget(i),m&&f.render(_,l),f.render(t,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pi||t.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ao[(i-r-1)%ao.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new X(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const p=[];let E=0;for(let A=0;A<kn;++A){const L=A/_,y=Math.exp(-L*L/2);p.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[i],P=3*x*(i>b-li?i-b+li:0),R=4*(this._cubeSize-x);fs(e,P,R,3*x,2*x),l.setRenderTarget(e),l.render(f,ir)}}function tf(s){const t=[],e=[],n=[];let i=s;const r=s-li+1+so.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-li?l=so[a-s+li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*u),b=new Float32Array(m*g*u),x=new Float32Array(p*g*u);for(let R=0;R<u;R++){const A=R%3*2/3-1,L=R>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(y,_*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const P=new we;P.setAttribute("position",new Ve(E,_)),P.setAttribute("uv",new Ve(b,m)),P.setAttribute("faceIndex",new Ve(x,p)),t.push(P),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lo(s,t,e){const n=new Tn(s,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ef(s,t,e){const n=new Float32Array(kn),i=new U(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function co(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ho(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vr||l===xr,h=l===pi||l===mi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new oo(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new oo(s)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rf(s,t,e,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const u in d)t.update(d[u],s.ARRAY_BUFFER)}function c(f){const d=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const E=u.array;_=u.version;for(let b=0,x=E.length;b<x;b+=3){const P=E[b+0],R=E[b+1],A=E[b+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,x=E.length/3-1;b<x;b+=3){const P=b+0,R=b+1,A=b+2;d.push(P,R,R,A,A,P)}}else return;const m=new(Yo(d)?jo:Ko)(d,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function af(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*a,g),e.update(u,n,g))}function h(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=u[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function of(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,t,e){const n=new WeakMap,i=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var u=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=o.attributes.position.count*x,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*R*4*f),L=new $o(A,P,R,f);L.type=en,L.needsUpdate=!0;const y=x*4;for(let T=0;T<f;T++){const z=p[T],B=E[T],H=b[T],q=P*R*4*T;for(let $=0;$<z.count;$++){const Z=$*y;g===!0&&(i.fromBufferAttribute(z,$),A[q+Z+0]=i.x,A[q+Z+1]=i.y,A[q+Z+2]=i.z,A[q+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,$),A[q+Z+4]=i.x,A[q+Z+5]=i.y,A[q+Z+6]=i.z,A[q+Z+7]=0),m===!0&&(i.fromBufferAttribute(H,$),A[q+Z+8]=i.x,A[q+Z+9]=i.y,A[q+Z+10]=i.z,A[q+Z+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:L,size:new qt(P,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function cf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const al=new Ee,uo=new sl(1,1),ol=new $o,ll=new Pc,cl=new tl,fo=[],po=[],mo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=fo[i];if(r===void 0&&(r=new Float32Array(i),fo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ps(s,t){let e=po[t];e===void 0&&(e=new Int32Array(t),po[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;_o.set(n),s.uniformMatrix2fv(this.addr,!1,_o),ge(e,n)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;go.set(n),s.uniformMatrix3fv(this.addr,!1,go),ge(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;mo.set(n),s.uniformMatrix4fv(this.addr,!1,mo),ge(e,n)}}function _f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(uo.compareFunction=qo,r=uo):r=al,e.setTexture2D(t||r,i)}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ll,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cl,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ol,i)}function Cf(s){switch(s){case 5126:return hf;case 35664:return df;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return yf;case 36295:return bf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}function Pf(s,t){s.uniform1fv(this.addr,t)}function Lf(s,t){const e=wi(t,this.size,2);s.uniform2fv(this.addr,e)}function Df(s,t){const e=wi(t,this.size,3);s.uniform3fv(this.addr,e)}function If(s,t){const e=wi(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Nf(s,t){const e=wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Of(s,t){s.uniform1iv(this.addr,t)}function Bf(s,t){s.uniform2iv(this.addr,t)}function kf(s,t){s.uniform3iv(this.addr,t)}function zf(s,t){s.uniform4iv(this.addr,t)}function Gf(s,t){s.uniform1uiv(this.addr,t)}function Hf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Wf(s,t){s.uniform4uiv(this.addr,t)}function Xf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||al,r[a])}function qf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ll,r[a])}function Yf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cl,r[a])}function $f(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ol,r[a])}function Zf(s){switch(s){case 5126:return Pf;case 35664:return Lf;case 35665:return Df;case 35666:return If;case 35674:return Uf;case 35675:return Ff;case 35676:return Nf;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return kf;case 35669:case 35673:return zf;case 5125:return Gf;case 36294:return Hf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return $f}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cf(e.type)}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}}class Jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const lr=/(\w+)(\])?(\[|\.)?/g;function vo(s,t){s.seq.push(t),s.map[t.id]=t}function Qf(s,t,e){const n=s.name,i=n.length;for(lr.lastIndex=0;;){const r=lr.exec(n),a=lr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){vo(e,c===void 0?new Kf(o,s,t):new jf(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Jf(o),vo(e,f)),e=f}}}class bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Qf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function xo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tp=37297;let ep=0;function np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Mo=new Ot;function ip(s){Jt._getMatrix(Mo,Jt.workingColorSpace,s);const t=`mat3( ${Mo.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case ws:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function So(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+np(s.getShaderSource(t),a)}else return i}function sp(s,t){const e=ip(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rp(s,t){let e;switch(t){case Gl:e="Linear";break;case Hl:e="Reinhard";break;case Vl:e="Cineon";break;case Wl:e="ACESFilmic";break;case ql:e="AgX";break;case Yl:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new U;function ap(){Jt.getLuminanceCoefficients(ps);const s=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function lp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Fi(s){return s!==""}function yo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(s){return s.replace(hp,up)}const dp=new Map;function up(s,t){let e=zt[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zr(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eo(s){return s.replace(fp,pp)}function pp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function xp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=mp(e),c=gp(e),h=_p(e),f=vp(e),d=xp(e),u=op(e),g=lp(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`)):(m=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?zt.tonemapping_pars_fragment:"",e.toneMapping!==En?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Zr(a),a=yo(a,e),a=bo(a,e),o=Zr(o),o=yo(o,e),o=bo(o,e),a=Eo(a),o=Eo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,x=E+p+o,P=xo(i,i.VERTEX_SHADER,b),R=xo(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(T){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(R).trim();let q=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,R);else{const Z=So(i,P,"vertex"),W=So(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+Z+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&($=!1);$&&(T.diagnostics={runnable:q,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(P),i.deleteShader(R),L=new bs(i,_),y=cp(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,tp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ep++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let Sp=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ep(s,t,e,n,i,r,a){const o=new oa,l=new yp,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,T,z,B){const H=z.fog,q=B.geometry,$=y.isMeshStandardMaterial?z.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),W=Z&&Z.mapping===Cs?Z.image.height:null,tt=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=rt!==void 0?rt.length:0;let At=0;q.morphAttributes.position!==void 0&&(At=1),q.morphAttributes.normal!==void 0&&(At=2),q.morphAttributes.color!==void 0&&(At=3);let wt,K,it,et;if(tt){const ee=Qe[tt];wt=ee.vertexShader,K=ee.fragmentShader}else wt=y.vertexShader,K=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),et=l.getFragmentShaderID(y);const lt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Xt=B.isInstancedMesh===!0,yt=B.isBatchedMesh===!0,oe=!!y.map,ae=!!y.matcap,Ct=!!Z,C=!!y.aoMap,_e=!!y.lightMap,Vt=!!y.bumpMap,Dt=!!y.normalMap,bt=!!y.displacementMap,Ht=!!y.emissiveMap,St=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,k=y.clearcoat>0,J=y.dispersion>0,I=y.iridescence>0,D=y.sheen>0,j=y.transmission>0,ut=v&&!!y.anisotropyMap,_t=k&&!!y.clearcoatMap,$t=k&&!!y.clearcoatNormalMap,st=k&&!!y.clearcoatRoughnessMap,vt=I&&!!y.iridescenceMap,Rt=I&&!!y.iridescenceThicknessMap,Pt=D&&!!y.sheenColorMap,xt=D&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,kt=!!y.specularColorMap,re=!!y.specularIntensityMap,F=j&&!!y.transmissionMap,ht=j&&!!y.thicknessMap,Y=!!y.gradientMap,Q=!!y.alphaMap,pt=y.alphaTest>0,ft=!!y.alphaHash,Nt=!!y.extensions;let de=En;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(de=s.toneMapping);const Se={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:K,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:et,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:yt,batchingColor:yt&&B._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&B.instanceColor!==null,instancingMorph:Xt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:vi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:ae,envMap:Ct,envMapMode:Ct&&Z.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:_e,bumpMap:Vt,normalMap:Dt,displacementMap:d&&bt,emissiveMap:Ht,normalMapObjectSpace:Dt&&y.normalMapType===jl,normalMapTangentSpace:Dt&&y.normalMapType===Xo,metalnessMap:St,roughnessMap:w,anisotropy:v,anisotropyMap:ut,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:$t,clearcoatRoughnessMap:st,dispersion:J,iridescence:I,iridescenceMap:vt,iridescenceThicknessMap:Rt,sheen:D,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:kt,specularIntensityMap:re,transmission:j,transmissionMap:F,thicknessMap:ht,gradientMap:Y,opaque:y.transparent===!1&&y.blending===hi&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:ft,combine:y.combine,mapUv:oe&&_(y.map.channel),aoMapUv:C&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:Vt&&_(y.bumpMap.channel),normalMapUv:Dt&&_(y.normalMap.channel),displacementMapUv:bt&&_(y.displacementMap.channel),emissiveMapUv:Ht&&_(y.emissiveMap.channel),metalnessMapUv:St&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(y.sheenRoughnessMap.channel),specularMapUv:Yt&&_(y.specularMap.channel),specularColorMapUv:kt&&_(y.specularColorMap.channel),specularIntensityMapUv:re&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Dt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(oe||Q),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:At,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)M.push(T),M.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const M=g[y.type];let T;if(M){const z=Qe[M];T=Vc.clone(z.uniforms)}else T=y.uniforms;return T}function P(y,M){let T;for(let z=0,B=h.length;z<B;z++){const H=h[z];if(H.cacheKey===M){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Mp(s,M,y,r),h.push(T)),T}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:L}}function wp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function To(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ao(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,d,u,g,_,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,d,u,g,_,m){const p=a(f,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(f,d,u,g,_,m){const p=a(f,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Tp),n.length>1&&n.sort(d||To),i.length>1&&i.sort(d||To)}function h(){for(let f=t,d=s.length;f<d;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ap(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ao,s.set(n,[a])):i>=r.length?(a=new Ao,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pp=0;function Lp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dp(s){const t=new Rp,e=Cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new Kt,a=new Kt;function o(c){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,E=0,b=0,x=0,P=0,R=0,A=0;c.sort(Lp);for(let y=0,M=c.length;y<M;y++){const T=c[y],z=T.color,B=T.intensity,H=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*B,f+=z.g*B,d+=z.b*B;else if(T.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(T.sh.coefficients[$],B);A++}else if(T.isDirectionalLight){const $=t.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Z=T.shadow,W=e.get(T);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=T.shadow.matrix,E++}n.directional[u]=$,u++}else if(T.isSpotLight){const $=t.get(T);$.position.setFromMatrixPosition(T.matrixWorld),$.color.copy(z).multiplyScalar(B),$.distance=H,$.coneCos=Math.cos(T.angle),$.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),$.decay=T.decay,n.spot[_]=$;const Z=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,Z.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=Z.matrix,T.castShadow){const W=e.get(T);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=q,x++}_++}else if(T.isRectAreaLight){const $=t.get(T);$.color.copy(z).multiplyScalar(B),$.halfWidth.set(T.width*.5,0,0),$.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=$,m++}else if(T.isPointLight){const $=t.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),$.distance=T.distance,$.decay=T.decay,T.castShadow){const Z=T.shadow,W=e.get(T);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=$,g++}else if(T.isHemisphereLight){const $=t.get(T);$.skyColor.copy(T.color).multiplyScalar(B),$.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.directionalLength=u,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=A,n.version=Pp++)}function l(c,h){let f=0,d=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=n.spot[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ro(s){const t=new Dp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ip(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Ro(s),t.set(i,[o])):r>=a.length?(o=new Ro(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
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
}`;function Np(s,t,e){let n=new ca;const i=new qt,r=new qt,a=new se,o=new th({depthPacking:Kl}),l=new eh,c={},h=e.maxTextureSize,f={[wn]:Ie,[Ie]:wn,[Ut]:Ut},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Up,fragmentShader:Fp}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let p=this.type;this.render=function(R,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==hn&&this.type===hn,H=p===hn&&this.type!==hn;for(let q=0,$=R.length;q<$;q++){const Z=R[q],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();if(i.multiply(tt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y)),W.map===null||B===!0||H===!0){const at=this.type!==hn?{minFilter:ce,magFilter:ce}:{};W.map!==null&&W.map.dispose(),W.map=new Tn(i.x,i.y,at),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const rt=W.getViewportCount();for(let at=0;at<rt;at++){const At=W.getViewport(at);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),z.viewport(a),W.updateMatrices(Z,at),n=W.getFrustum(),x(A,L,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===hn&&E(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,T)};function E(R,A){const L=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Tn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,L,d,_,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,L,u,_,null)}function b(R,A,L,y){let M=null;const T=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=L.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,B=A.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let q=H[B];q===void 0&&(q=M.clone(),H[B]=q,A.addEventListener("dispose",P)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,y===hn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=L}return M}function x(R,A,L,y,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===hn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const B=t.update(R),H=R.material;if(Array.isArray(H)){const q=B.groups;for(let $=0,Z=q.length;$<Z;$++){const W=q[$],tt=H[W.materialIndex];if(tt&&tt.visible){const rt=b(R,tt,y,M);R.onBeforeShadow(s,R,A,L,B,rt,W),s.renderBufferDirect(L,null,B,rt,R,W),R.onAfterShadow(s,R,A,L,B,rt,W)}}}else if(H.visible){const q=b(R,H,y,M);R.onBeforeShadow(s,R,A,L,B,q,null),s.renderBufferDirect(L,null,B,q,R,null),R.onAfterShadow(s,R,A,L,B,q,null)}}const z=R.children;for(let B=0,H=z.length;B<H;B++)x(z[B],A,L,y,M)}function P(R){R.target.removeEventListener("dispose",P);for(const L in c){const y=c[L],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Op={[dr]:ur,[fr]:gr,[pr]:_r,[fi]:mr,[ur]:dr,[gr]:fr,[_r]:pr,[mr]:fi};function Bp(s,t){function e(){let F=!1;const ht=new se;let Y=null;const Q=new se(0,0,0,0);return{setMask:function(pt){Y!==pt&&!F&&(s.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){F=pt},setClear:function(pt,ft,Nt,de,Se){Se===!0&&(pt*=de,ft*=de,Nt*=de),ht.set(pt,ft,Nt,de),Q.equals(ht)===!1&&(s.clearColor(pt,ft,Nt,de),Q.copy(ht))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,Y=null,Q=null,pt=null;return{setReversed:function(ft){if(ht!==ft){const Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const de=pt;pt=null,this.setClear(de)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?lt(s.DEPTH_TEST):gt(s.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!F&&(s.depthMask(ft),Y=ft)},setFunc:function(ft){if(ht&&(ft=Op[ft]),Q!==ft){switch(ft){case dr:s.depthFunc(s.NEVER);break;case ur:s.depthFunc(s.ALWAYS);break;case fr:s.depthFunc(s.LESS);break;case fi:s.depthFunc(s.LEQUAL);break;case pr:s.depthFunc(s.EQUAL);break;case mr:s.depthFunc(s.GEQUAL);break;case gr:s.depthFunc(s.GREATER);break;case _r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ft}},setLocked:function(ft){F=ft},setClear:function(ft){pt!==ft&&(ht&&(ft=1-ft),s.clearDepth(ft),pt=ft)},reset:function(){F=!1,Y=null,Q=null,pt=null,ht=!1}}}function i(){let F=!1,ht=null,Y=null,Q=null,pt=null,ft=null,Nt=null,de=null,Se=null;return{setTest:function(ee){F||(ee?lt(s.STENCIL_TEST):gt(s.STENCIL_TEST))},setMask:function(ee){ht!==ee&&!F&&(s.stencilMask(ee),ht=ee)},setFunc:function(ee,We,sn){(Y!==ee||Q!==We||pt!==sn)&&(s.stencilFunc(ee,We,sn),Y=ee,Q=We,pt=sn)},setOp:function(ee,We,sn){(ft!==ee||Nt!==We||de!==sn)&&(s.stencilOp(ee,We,sn),ft=ee,Nt=We,de=sn)},setLocked:function(ee){F=ee},setClear:function(ee){Se!==ee&&(s.clearStencil(ee),Se=ee)},reset:function(){F=!1,ht=null,Y=null,Q=null,pt=null,ft=null,Nt=null,de=null,Se=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,E=null,b=null,x=null,P=null,R=null,A=new Bt(0,0,0),L=0,y=!1,M=null,T=null,z=null,B=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=Z>=2);let tt=null,rt={};const at=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),wt=new se().fromArray(at),K=new se().fromArray(At);function it(F,ht,Y,Q){const pt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(F,ft),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Y;Nt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ht+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ft}const et={};et[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc(fi),Vt(!1),Dt(Sa),lt(s.CULL_FACE),C(bn);function lt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function gt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Xt(F,ht){return f[F]!==ht?(s.bindFramebuffer(F,ht),f[F]=ht,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ht),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function yt(F,ht){let Y=u,Q=!1;if(F){Y=d.get(ht),Y===void 0&&(Y=[],d.set(ht,Y));const pt=F.textures;if(Y.length!==pt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Nt=pt.length;ft<Nt;ft++)Y[ft]=s.COLOR_ATTACHMENT0+ft;Y.length=pt.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function oe(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const ae={[Bn]:s.FUNC_ADD,[yl]:s.FUNC_SUBTRACT,[bl]:s.FUNC_REVERSE_SUBTRACT};ae[El]=s.MIN,ae[wl]=s.MAX;const Ct={[Tl]:s.ZERO,[Al]:s.ONE,[Rl]:s.SRC_COLOR,[cr]:s.SRC_ALPHA,[Ul]:s.SRC_ALPHA_SATURATE,[Dl]:s.DST_COLOR,[Pl]:s.DST_ALPHA,[Cl]:s.ONE_MINUS_SRC_COLOR,[hr]:s.ONE_MINUS_SRC_ALPHA,[Il]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Fl]:s.CONSTANT_COLOR,[Nl]:s.ONE_MINUS_CONSTANT_COLOR,[Ol]:s.CONSTANT_ALPHA,[Bl]:s.ONE_MINUS_CONSTANT_ALPHA};function C(F,ht,Y,Q,pt,ft,Nt,de,Se,ee){if(F===bn){_===!0&&(gt(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),F!==Sl){if(F!==m||ee!==y){if((p!==Bn||x!==Bn)&&(s.blendEquation(s.FUNC_ADD),p=Bn,x=Bn),ee)switch(F){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.ONE,s.ONE);break;case ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,b=null,P=null,R=null,A.set(0,0,0),L=0,m=F,y=ee}return}pt=pt||ht,ft=ft||Y,Nt=Nt||Q,(ht!==p||pt!==x)&&(s.blendEquationSeparate(ae[ht],ae[pt]),p=ht,x=pt),(Y!==E||Q!==b||ft!==P||Nt!==R)&&(s.blendFuncSeparate(Ct[Y],Ct[Q],Ct[ft],Ct[Nt]),E=Y,b=Q,P=ft,R=Nt),(de.equals(A)===!1||Se!==L)&&(s.blendColor(de.r,de.g,de.b,Se),A.copy(de),L=Se),m=F,y=!1}function _e(F,ht){F.side===Ut?gt(s.CULL_FACE):lt(s.CULL_FACE);let Y=F.side===Ie;ht&&(Y=!Y),Vt(Y),F.blending===hi&&F.transparent===!1?C(bn):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;o.setTest(Q),Q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function Dt(F){F!==_l?(lt(s.CULL_FACE),F!==T&&(F===Sa?s.cullFace(s.BACK):F===vl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):gt(s.CULL_FACE),T=F}function bt(F){F!==z&&($&&s.lineWidth(F),z=F)}function Ht(F,ht,Y){F?(lt(s.POLYGON_OFFSET_FILL),(B!==ht||H!==Y)&&(s.polygonOffset(ht,Y),B=ht,H=Y)):gt(s.POLYGON_OFFSET_FILL)}function St(F){F?lt(s.SCISSOR_TEST):gt(s.SCISSOR_TEST)}function w(F){F===void 0&&(F=s.TEXTURE0+q-1),tt!==F&&(s.activeTexture(F),tt=F)}function v(F,ht,Y){Y===void 0&&(tt===null?Y=s.TEXTURE0+q-1:Y=tt);let Q=rt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},rt[Y]=Q),(Q.type!==F||Q.texture!==ht)&&(tt!==Y&&(s.activeTexture(Y),tt=Y),s.bindTexture(F,ht||et[F]),Q.type=F,Q.texture=ht)}function k(){const F=rt[tt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(F){wt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),wt.copy(F))}function xt(F){K.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function Yt(F,ht){let Y=c.get(ht);Y===void 0&&(Y=new WeakMap,c.set(ht,Y));let Q=Y.get(F);Q===void 0&&(Q=s.getUniformBlockIndex(ht,F.name),Y.set(F,Q))}function kt(F,ht){const Q=c.get(ht).get(F);l.get(ht)!==Q&&(s.uniformBlockBinding(ht,Q,F.__bindingPointIndex),l.set(ht,Q))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,rt={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,E=null,b=null,x=null,P=null,R=null,A=new Bt(0,0,0),L=0,y=!1,M=null,T=null,z=null,B=null,H=null,wt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:gt,bindFramebuffer:Xt,drawBuffers:yt,useProgram:oe,setBlending:C,setMaterial:_e,setFlipSided:Vt,setCullFace:Dt,setLineWidth:bt,setPolygonOffset:Ht,setScissorTest:St,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:I,texImage2D:vt,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:kt,texStorage2D:$t,texStorage3D:st,texSubImage2D:D,texSubImage3D:j,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Pt,viewport:xt,reset:re}}function kp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return u?new OffscreenCanvas(w,v):As("canvas")}function _(w,v,k){let J=1;const I=St(w);if((I.width>k||I.height>k)&&(J=k/Math.max(I.width,I.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const D=Math.floor(J*I.width),j=Math.floor(J*I.height);f===void 0&&(f=g(D,j));const ut=v?g(D,j):f;return ut.width=D,ut.height=j,ut.getContext("2d").drawImage(w,0,0,D,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+D+"x"+j+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,v,k,J,I=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let D=v;if(v===s.RED&&(k===s.FLOAT&&(D=s.R32F),k===s.HALF_FLOAT&&(D=s.R16F),k===s.UNSIGNED_BYTE&&(D=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(D=s.R8UI),k===s.UNSIGNED_SHORT&&(D=s.R16UI),k===s.UNSIGNED_INT&&(D=s.R32UI),k===s.BYTE&&(D=s.R8I),k===s.SHORT&&(D=s.R16I),k===s.INT&&(D=s.R32I)),v===s.RG&&(k===s.FLOAT&&(D=s.RG32F),k===s.HALF_FLOAT&&(D=s.RG16F),k===s.UNSIGNED_BYTE&&(D=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(D=s.RG8UI),k===s.UNSIGNED_SHORT&&(D=s.RG16UI),k===s.UNSIGNED_INT&&(D=s.RG32UI),k===s.BYTE&&(D=s.RG8I),k===s.SHORT&&(D=s.RG16I),k===s.INT&&(D=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(D=s.RGB8UI),k===s.UNSIGNED_SHORT&&(D=s.RGB16UI),k===s.UNSIGNED_INT&&(D=s.RGB32UI),k===s.BYTE&&(D=s.RGB8I),k===s.SHORT&&(D=s.RGB16I),k===s.INT&&(D=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(D=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(D=s.RGBA16UI),k===s.UNSIGNED_INT&&(D=s.RGBA32UI),k===s.BYTE&&(D=s.RGBA8I),k===s.SHORT&&(D=s.RGBA16I),k===s.INT&&(D=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(D=s.RGB9_E5),v===s.RGBA){const j=I?ws:Jt.getTransfer(J);k===s.FLOAT&&(D=s.RGBA32F),k===s.HALF_FLOAT&&(D=s.RGBA16F),k===s.UNSIGNED_BYTE&&(D=j===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(D=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(D=s.RGB5_A1)}return(D===s.R16F||D===s.R32F||D===s.RG16F||D===s.RG32F||D===s.RGBA16F||D===s.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function x(w,v){let k;return w?v===null||v===Hn||v===gi?k=s.DEPTH24_STENCIL8:v===en?k=s.DEPTH32F_STENCIL8:v===zi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===gi?k=s.DEPTH_COMPONENT24:v===en?k=s.DEPTH_COMPONENT32F:v===zi&&(k=s.DEPTH_COMPONENT16),k}function P(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ce&&w.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){const v=w.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),M(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,J=d.get(k);if(J){const I=J[v.__cacheKey];I.usedTimes--,I.usedTimes===0&&y(w),Object.keys(J).length===0&&d.delete(k)}n.remove(w)}function y(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const k=w.source,J=d.get(k);delete J[v.__cacheKey],a.memory.textures--}function M(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let I=0;I<v.__webglFramebuffer[J].length;I++)s.deleteFramebuffer(v.__webglFramebuffer[J][I]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let J=0,I=k.length;J<I;J++){const D=n.get(k[J]);D.__webglTexture&&(s.deleteTexture(D.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(w)}let T=0;function z(){T=0}function B(){const w=T;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),T+=1,w}function H(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function q(w,v){const k=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,w,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function $(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){K(k,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function Z(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){K(k,w,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function W(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){it(k,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const tt={[ki]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Mr]:s.MIRRORED_REPEAT},rt={[ce]:s.NEAREST,[$l]:s.NEAREST_MIPMAP_NEAREST,[Xi]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Is]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},at={[Jl]:s.NEVER,[sc]:s.ALWAYS,[Ql]:s.LESS,[qo]:s.LEQUAL,[tc]:s.EQUAL,[ic]:s.GEQUAL,[ec]:s.GREATER,[nc]:s.NOTEQUAL};function At(w,v){if(v.type===en&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===Is||v.magFilter===Xi||v.magFilter===Gn||v.minFilter===tn||v.minFilter===Is||v.minFilter===Xi||v.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,tt[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,tt[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,tt[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,rt[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,rt[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ce||v.minFilter!==Xi&&v.minFilter!==Gn||v.type===en&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function wt(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));const J=v.source;let I=d.get(J);I===void 0&&(I={},d.set(J,I));const D=H(v);if(D!==w.__cacheKey){I[D]===void 0&&(I[D]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),I[D].usedTimes++;const j=I[w.__cacheKey];j!==void 0&&(I[w.__cacheKey].usedTimes--,j.usedTimes===0&&y(v)),w.__cacheKey=D,w.__webglTexture=I[D].texture}return k}function K(w,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const I=wt(w,v),D=v.source;e.bindTexture(J,w.__webglTexture,s.TEXTURE0+k);const j=n.get(D);if(D.version!==j.__version||I===!0){e.activeTexture(s.TEXTURE0+k);const ut=Jt.getPrimaries(Jt.workingColorSpace),_t=v.colorSpace===yn?null:Jt.getPrimaries(v.colorSpace),$t=v.colorSpace===yn||ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=_(v.image,!1,i.maxTextureSize);st=Ht(v,st);const vt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let Pt=b(v.internalFormat,vt,Rt,v.colorSpace,v.isVideoTexture);At(J,v);let xt;const Yt=v.mipmaps,kt=v.isVideoTexture!==!0,re=j.__version===void 0||I===!0,F=D.dataReady,ht=P(v,st);if(v.isDepthTexture)Pt=x(v.format===_i,v.type),re&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Rt,null));else if(v.isDataTexture)if(Yt.length>0){kt&&re&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,Yt[0].width,Yt[0].height);for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Rt,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,vt,Rt,xt.data);v.generateMipmaps=!1}else kt?(re&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,st.width,st.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,vt,Rt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Rt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Pt,Yt[0].width,Yt[0].height,st.depth);for(let Y=0,Q=Yt.length;Y<Q;Y++)if(xt=Yt[Y],v.format!==He)if(vt!==null)if(kt){if(F)if(v.layerUpdates.size>0){const pt=io(xt.width,xt.height,v.format,v.type);for(const ft of v.layerUpdates){const Nt=xt.data.subarray(ft*pt/xt.data.BYTES_PER_ELEMENT,(ft+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ft,xt.width,xt.height,1,vt,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,Rt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,xt.width,xt.height,st.depth,0,vt,Rt,xt.data)}else{kt&&re&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,Yt[0].width,Yt[0].height);for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],v.format!==He?vt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Rt,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,xt.width,xt.height,0,vt,Rt,xt.data)}else if(v.isDataArrayTexture)if(kt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Pt,st.width,st.height,st.depth),F)if(v.layerUpdates.size>0){const Y=io(st.width,st.height,v.format,v.type);for(const Q of v.layerUpdates){const pt=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Rt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Rt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,vt,Rt,st.data);else if(v.isData3DTexture)kt?(re&&e.texStorage3D(s.TEXTURE_3D,ht,Pt,st.width,st.height,st.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Rt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,vt,Rt,st.data);else if(v.isFramebufferTexture){if(re)if(kt)e.texStorage2D(s.TEXTURE_2D,ht,Pt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let pt=0;pt<ht;pt++)e.texImage2D(s.TEXTURE_2D,pt,Pt,Y,Q,0,vt,Rt,null),Y>>=1,Q>>=1}}else if(Yt.length>0){if(kt&&re){const Y=St(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Pt,Y.width,Y.height)}for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt,Rt,xt):e.texImage2D(s.TEXTURE_2D,Y,Pt,vt,Rt,xt);v.generateMipmaps=!1}else if(kt){if(re){const Y=St(st);e.texStorage2D(s.TEXTURE_2D,ht,Pt,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Rt,st)}else e.texImage2D(s.TEXTURE_2D,0,Pt,vt,Rt,st);m(v)&&p(J),j.__version=D.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function it(w,v,k){if(v.image.length!==6)return;const J=wt(w,v),I=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const D=n.get(I);if(I.version!==D.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const j=Jt.getPrimaries(Jt.workingColorSpace),ut=v.colorSpace===yn?null:Jt.getPrimaries(v.colorSpace),_t=v.colorSpace===yn||j===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const $t=v.isCompressedTexture||v.image[0].isCompressedTexture,st=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!$t&&!st?vt[Q]=_(v.image[Q],!0,i.maxCubemapSize):vt[Q]=st?v.image[Q].image:v.image[Q],vt[Q]=Ht(v,vt[Q]);const Rt=vt[0],Pt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Yt=b(v.internalFormat,Pt,xt,v.colorSpace),kt=v.isVideoTexture!==!0,re=D.__version===void 0||J===!0,F=I.dataReady;let ht=P(v,Rt);At(s.TEXTURE_CUBE_MAP,v);let Y;if($t){kt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){Y=vt[Q].mipmaps;for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];v.format!==He?Pt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,ft.width,ft.height,Pt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,ft.width,ft.height,Pt,xt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Yt,ft.width,ft.height,0,Pt,xt,ft.data)}}}else{if(Y=v.mipmaps,kt&&re){Y.length>0&&ht++;const Q=St(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Pt,xt,vt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,vt[Q].width,vt[Q].height,0,Pt,xt,vt[Q].data);for(let pt=0;pt<Y.length;pt++){const Nt=Y[pt].image[Q].image;kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Nt.width,Nt.height,Pt,xt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Yt,Nt.width,Nt.height,0,Pt,xt,Nt.data)}}else{kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,xt,vt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Pt,xt,vt[Q]);for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Pt,xt,ft.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Yt,Pt,xt,ft.image[Q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),D.__version=I.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function et(w,v,k,J,I,D){const j=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),_t=b(k.internalFormat,j,ut,k.colorSpace),$t=n.get(v),st=n.get(k);if(st.__renderTarget=v,!$t.__hasExternalTextures){const vt=Math.max(1,v.width>>D),Rt=Math.max(1,v.height>>D);I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?e.texImage3D(I,D,_t,vt,Rt,v.depth,0,j,ut,null):e.texImage2D(I,D,_t,vt,Rt,0,j,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Dt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,I,st.__webglTexture,0,Vt(v)):(I===s.TEXTURE_2D||I>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,I,st.__webglTexture,D),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(w,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const J=v.depthTexture,I=J&&J.isDepthTexture?J.type:null,D=x(v.stencilBuffer,I),j=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Vt(v);Dt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,D,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,D,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,D,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,w)}else{const J=v.textures;for(let I=0;I<J.length;I++){const D=J[I],j=r.convert(D.format,D.colorSpace),ut=r.convert(D.type),_t=b(D.internalFormat,j,ut,D.colorSpace),$t=Vt(v);k&&Dt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,_t,v.width,v.height):Dt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,_t,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,_t,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const I=J.__webglTexture,D=Vt(v);if(v.depthTexture.format===di)Dt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0,D):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0);else if(v.depthTexture.format===_i)Dt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0,D):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Xt(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const I=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",I)};J.addEventListener("dispose",I),v.__depthDisposeCallback=I}v.__boundDepthTexture=J}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),lt(v.__webglDepthbuffer[J],w,!1);else{const I=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,D),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,D)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),lt(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,I),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,I)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(w,v,k){const J=n.get(w);v!==void 0&&et(J.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Xt(w)}function oe(w){const v=w.texture,k=n.get(w),J=n.get(v);w.addEventListener("dispose",A);const I=w.textures,D=w.isWebGLCubeRenderTarget===!0,j=I.length>1;if(j||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,a.memory.textures++),D){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let _t=0;_t<v.mipmaps.length;_t++)k.__webglFramebuffer[ut][_t]=s.createFramebuffer()}else k.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)k.__webglFramebuffer[ut]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(j)for(let ut=0,_t=I.length;ut<_t;ut++){const $t=n.get(I[ut]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Dt(w)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<I.length;ut++){const _t=I[ut];k.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const $t=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),vt=b(_t.internalFormat,$t,st,_t.colorSpace,w.isXRRenderTarget===!0),Rt=Vt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,vt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(D){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),At(s.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)et(k.__webglFramebuffer[ut][_t],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else et(k.__webglFramebuffer[ut],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){for(let ut=0,_t=I.length;ut<_t;ut++){const $t=I[ut],st=n.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),At(s.TEXTURE_2D,$t),et(k.__webglFramebuffer,w,$t,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),At(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)et(k.__webglFramebuffer[_t],w,v,s.COLOR_ATTACHMENT0,ut,_t);else et(k.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}w.depthBuffer&&Xt(w)}function ae(w){const v=w.textures;for(let k=0,J=v.length;k<J;k++){const I=v[k];if(m(I)){const D=E(w),j=n.get(I).__webglTexture;e.bindTexture(D,j),p(D),e.unbindTexture()}}}const Ct=[],C=[];function _e(w){if(w.samples>0){if(Dt(w)===!1){const v=w.textures,k=w.width,J=w.height;let I=s.COLOR_BUFFER_BIT;const D=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=n.get(w),ut=v.length>1;if(ut)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,j.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(I|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(I|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const $t=n.get(v[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,I,s.NEAREST),l===!0&&(Ct.length=0,C.length=0,Ct.push(s.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ct.push(D),C.push(D),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const $t=n.get(v[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,j.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Vt(w){return Math.min(i.maxSamples,w.samples)}function Dt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ht(w,v){const k=w.colorSpace,J=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==vi&&k!==yn&&(Jt.getTransfer(k)===ne?(J!==He||I!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=yt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Dt}function zp(s,t){function e(n,i=yn){let r;const a=Jt.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===Jr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===No)return s.BYTE;if(n===Oo)return s.SHORT;if(n===zi)return s.UNSIGNED_SHORT;if(n===jr)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===ko)return s.ALPHA;if(n===zo)return s.RGB;if(n===He)return s.RGBA;if(n===Go)return s.LUMINANCE;if(n===Ho)return s.LUMINANCE_ALPHA;if(n===di)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===ta)return s.RED;if(n===ea)return s.RED_INTEGER;if(n===Vo)return s.RG;if(n===na)return s.RG_INTEGER;if(n===ia)return s.RGBA_INTEGER;if(n===_s||n===vs||n===xs||n===Ms)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sr||n===yr||n===br||n===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wr||n===Tr||n===Ar)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wr||n===Tr)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ar)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ir||n===Ur||n===Fr||n===Nr||n===Or||n===Br||n===kr||n===zr||n===Gr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ir)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ur)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ss||n===Hr||n===Vr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ss)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Wr||n===Xr||n===qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ss)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
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

}`;class Vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:Gp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends Si{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const _=new Vp,m=e.getContextAttributes();let p=null,E=null;const b=[],x=[],P=new qt;let R=null;const A=new Le;A.viewport=new se;const L=new Le;L.viewport=new se;const y=[A,L],M=new lh;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=b[K];return it===void 0&&(it=new Qs,b[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=b[K];return it===void 0&&(it=new Qs,b[K]=it),it.getGripSpace()},this.getHand=function(K){let it=b[K];return it===void 0&&(it=new Qs,b[K]=it),it.getHandSpace()};function B(K){const it=x.indexOf(K.inputSource);if(it===-1)return;const et=b[it];et!==void 0&&(et.update(K.inputSource,K.frame,c||a),et.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let K=0;K<b.length;K++){const it=x[K];it!==null&&(x[K]=null,b[K].disconnect(it))}T=null,z=null,_.reset(),t.setRenderTarget(p),u=null,d=null,f=null,i=null,E=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,lt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?_i:di,lt=m.stencil?gi:Hn);const Xt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Xt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Tn(d.textureWidth,d.textureHeight,{format:He,type:fn,depthTexture:new sl(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Tn(u.framebufferWidth,u.framebufferHeight,{format:He,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let it=0;it<K.removed.length;it++){const et=K.removed[it],lt=x.indexOf(et);lt>=0&&(x[lt]=null,b[lt].disconnect(et))}for(let it=0;it<K.added.length;it++){const et=K.added[it];let lt=x.indexOf(et);if(lt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=x.length){x.push(et),lt=Xt;break}else if(x[Xt]===null){x[Xt]=et,lt=Xt;break}if(lt===-1)break}const gt=b[lt];gt&&gt.connect(et)}}const $=new U,Z=new U;function W(K,it,et){$.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(et.matrixWorld);const lt=$.distanceTo(Z),gt=it.projectionMatrix.elements,Xt=et.projectionMatrix.elements,yt=gt[14]/(gt[10]-1),oe=gt[14]/(gt[10]+1),ae=(gt[9]+1)/gt[5],Ct=(gt[9]-1)/gt[5],C=(gt[8]-1)/gt[0],_e=(Xt[8]+1)/Xt[0],Vt=yt*C,Dt=yt*_e,bt=lt/(-C+_e),Ht=bt*-C;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ht),K.translateZ(bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const St=yt+bt,w=oe+bt,v=Vt-Ht,k=Dt+(lt-Ht),J=ae*oe/w*St,I=Ct*oe/w*St;K.projectionMatrix.makePerspective(v,k,J,I,St,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,et=K.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(et=_.depthFar)),M.near=L.near=A.near=it,M.far=L.far=A.far=et,(T!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far),A.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const lt=K.parent,gt=M.cameras;tt(M,lt);for(let Xt=0;Xt<gt.length;Xt++)tt(gt[Xt],lt);gt.length===2?W(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),rt(K,M,lt)};function rt(K,it,et){et===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(et.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let at=null;function At(K,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const et=h.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let lt=!1;et.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let yt=0;yt<et.length;yt++){const oe=et[yt];let ae=null;if(u!==null)ae=u.getViewport(oe);else{const C=f.getViewSubImage(d,oe);ae=C.viewport,yt===0&&(t.setRenderTargetTextures(E,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(E))}let Ct=y[yt];Ct===void 0&&(Ct=new Le,Ct.layers.enable(yt),Ct.viewport=new se,y[yt]=Ct),Ct.matrix.fromArray(oe.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(oe.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(ae.x,ae.y,ae.width,ae.height),yt===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Ct)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const yt=f.getDepthInformation(et[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,i.renderState)}}for(let et=0;et<b.length;et++){const lt=x[et],gt=b[et];lt!==null&&gt!==void 0&&gt.update(lt,it,c||a)}at&&at(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const wt=new rl;wt.setAnimationLoop(At),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const Un=new De,Xp=new Kt;function qp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jo(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,x=E.envMapRotation;b&&(m.envMap.value=b,Un.copy(x),Un.x*=-1,Un.y*=-1,Un.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),m.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Un)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const x=b.program;n.uniformBlockBinding(E,x)}function c(E,b){let x=i[E.id];x===void 0&&(g(E),x=h(E),i[E.id]=x,E.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(E,P);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){const b=f();E.__bindingPointIndex=b;const x=s.createBuffer(),P=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],x=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,A=x.length;R<A;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,M=L.length;y<M;y++){const T=L[y];if(u(T,R,y,P)===!0){const z=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let q=0;q<B.length;q++){const $=B[q],Z=_($);typeof $=="number"||typeof $=="boolean"?(T.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,z+H,T.__data)):$.isMatrix3?(T.__data[0]=$.elements[0],T.__data[1]=$.elements[1],T.__data[2]=$.elements[2],T.__data[3]=0,T.__data[4]=$.elements[3],T.__data[5]=$.elements[4],T.__data[6]=$.elements[5],T.__data[7]=0,T.__data[8]=$.elements[6],T.__data[9]=$.elements[7],T.__data[10]=$.elements[8],T.__data[11]=0):($.toArray(T.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(E,b,x,P){const R=E.value,A=b+"_"+x;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const L=P[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const b=E.uniforms;let x=0;const P=16;for(let A=0,L=b.length;A<L;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,T=y.length;M<T;M++){const z=y[M],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,q=B.length;H<q;H++){const $=B[H],Z=_($),W=x%P,tt=W%Z.boundary,rt=W+tt;x+=tt,rt!==0&&P-rt<Z.storage&&(x+=P-rt),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const R=x%P;return R>0&&(x+=P-R),E.__size=x,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class $p{constructor(t={}){const{canvas:e=Sc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=En,this.toneMappingExposure=1;const x=this;let P=!1,R=0,A=0,L=null,y=-1,M=null;const T=new se,z=new se;let B=null;const H=new Bt(0);let q=0,$=e.width,Z=e.height,W=1,tt=null,rt=null;const at=new se(0,0,$,Z),At=new se(0,0,$,Z);let wt=!1;const K=new ca;let it=!1,et=!1;this.transmissionResolutionScale=1;const lt=new Kt,gt=new Kt,Xt=new U,yt=new se,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ct(){return L===null?W:1}let C=n;function _e(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const N="webgl2";if(C=_e(N,S),C===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Vt,Dt,bt,Ht,St,w,v,k,J,I,D,j,ut,_t,$t,st,vt,Rt,Pt,xt,Yt,kt,re,F;function ht(){Vt=new sf(C),Vt.init(),kt=new zp(C,Vt),Dt=new Ku(C,Vt,t,kt),bt=new Bp(C,Vt),Dt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),Ht=new of(C),St=new wp,w=new kp(C,Vt,bt,St,Dt,kt,Ht),v=new Ju(x),k=new nf(x),J=new uh(C),re=new $u(C,J),I=new rf(C,J,Ht,re),D=new cf(C,I,J,Ht),Pt=new lf(C,Dt,w),st=new ju(St),j=new Ep(x,v,k,Vt,Dt,re,st),ut=new qp(x,St),_t=new Ap,$t=new Ip(Vt),Rt=new Yu(x,v,k,bt,D,u,l),vt=new Np(x,D,Dt),F=new Yp(C,Ht,Dt,bt),xt=new Zu(C,Vt,Ht),Yt=new af(C,Vt,Ht),Ht.programs=j.programs,x.capabilities=Dt,x.extensions=Vt,x.properties=St,x.renderLists=_t,x.shadowMap=vt,x.state=bt,x.info=Ht}ht();const Y=new Wp(x,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize($,Z,!1))},this.getSize=function(S){return S.set($,Z)},this.setSize=function(S,N,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,Z=N,e.width=Math.floor(S*W),e.height=Math.floor(N*W),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($*W,Z*W).floor()},this.setDrawingBufferSize=function(S,N,G){$=S,Z=N,W=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(at)},this.setViewport=function(S,N,G,V){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,N,G,V),bt.viewport(T.copy(at).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(At)},this.setScissor=function(S,N,G,V){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,N,G,V),bt.scissor(z.copy(At).multiplyScalar(W).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(S){bt.setScissorTest(wt=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,G=!0){let V=0;if(S){let O=!1;if(L!==null){const nt=L.texture.format;O=nt===ia||nt===na||nt===ea}if(O){const nt=L.texture.type,dt=nt===fn||nt===Hn||nt===zi||nt===gi||nt===Jr||nt===Qr,mt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Lt=mt.r,It=mt.g,Et=mt.b;dt?(g[0]=Lt,g[1]=It,g[2]=Et,g[3]=Mt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Lt,_[1]=It,_[2]=Et,_[3]=Mt,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}N&&(V|=C.DEPTH_BUFFER_BIT),G&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Rt.dispose(),_t.dispose(),$t.dispose(),St.dispose(),v.dispose(),k.dispose(),D.dispose(),re.dispose(),F.dispose(),j.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",pa),Y.removeEventListener("sessionend",ma),An.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=Ht.autoReset,N=vt.enabled,G=vt.autoUpdate,V=vt.needsUpdate,O=vt.type;ht(),Ht.autoReset=S,vt.enabled=N,vt.autoUpdate=G,vt.needsUpdate=V,vt.type=O}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const N=S.target;N.removeEventListener("dispose",Nt),de(N)}function de(S){Se(S),St.remove(S)}function Se(S){const N=St.get(S).programs;N!==void 0&&(N.forEach(function(G){j.releaseProgram(G)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,V,O,nt){N===null&&(N=oe);const dt=O.isMesh&&O.matrixWorld.determinant()<0,mt=dl(S,N,G,V,O);bt.setMaterial(V,dt);let Mt=G.index,Lt=1;if(V.wireframe===!0){if(Mt=I.getWireframeAttribute(G),Mt===void 0)return;Lt=2}const It=G.drawRange,Et=G.attributes.position;let Zt=It.start*Lt,Qt=(It.start+It.count)*Lt;nt!==null&&(Zt=Math.max(Zt,nt.start*Lt),Qt=Math.min(Qt,(nt.start+nt.count)*Lt)),Mt!==null?(Zt=Math.max(Zt,0),Qt=Math.min(Qt,Mt.count)):Et!=null&&(Zt=Math.max(Zt,0),Qt=Math.min(Qt,Et.count));const fe=Qt-Zt;if(fe<0||fe===1/0)return;re.setup(O,V,mt,G,Mt);let ue,jt=xt;if(Mt!==null&&(ue=J.get(Mt),jt=Yt,jt.setIndex(ue)),O.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*Ct()),jt.setMode(C.LINES)):jt.setMode(C.TRIANGLES);else if(O.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*Ct()),O.isLineSegments?jt.setMode(C.LINES):O.isLineLoop?jt.setMode(C.LINE_LOOP):jt.setMode(C.LINE_STRIP)}else O.isPoints?jt.setMode(C.POINTS):O.isSprite&&jt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Fn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Tt=O._multiDrawStarts,Me=O._multiDrawCounts,te=O._multiDrawCount,Xe=Mt?J.get(Mt).bytesPerElement:1,Wn=St.get(V).currentProgram.getUniforms();for(let Ue=0;Ue<te;Ue++)Wn.setValue(C,"_gl_DrawID",Ue),jt.render(Tt[Ue]/Xe,Me[Ue])}else if(O.isInstancedMesh)jt.renderInstances(Zt,fe,O.count);else if(G.isInstancedBufferGeometry){const Tt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Me=Math.min(G.instanceCount,Tt);jt.renderInstances(Zt,fe,Me)}else jt.render(Zt,fe)};function ee(S,N,G){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Wi(S,N,G),S.side=wn,S.needsUpdate=!0,Wi(S,N,G),S.side=Ut):Wi(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),p=$t.get(G),p.init(N),b.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const mt=nt[dt];ee(mt,G,O),V.add(mt)}else ee(nt,G,O),V.add(nt)}),p=b.pop(),V},this.compileAsync=function(S,N,G=null){const V=this.compile(S,N,G);return new Promise(O=>{function nt(){if(V.forEach(function(dt){St.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){O(S);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let We=null;function sn(S){We&&We(S)}function pa(){An.stop()}function ma(){An.start()}const An=new rl;An.setAnimationLoop(sn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(S){We=S,Y.setAnimationLoop(S),S===null?An.stop():An.start()},Y.addEventListener("sessionstart",pa),Y.addEventListener("sessionend",ma),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,L),p=$t.get(S,b.length),p.init(N),b.push(p),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(gt),et=this.localClippingEnabled,it=st.init(this.clippingPlanes,et),m=_t.get(S,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Ls(nt,N,-1/0,x.sortObjects)}Ls(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,rt),ae=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ae&&Rt.addToRenderList(m,S),this.info.render.frame++,it===!0&&st.beginShadows();const G=p.state.shadowsArray;vt.render(G,S,N),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const nt=N.cameras;if(O.length>0)for(let dt=0,mt=nt.length;dt<mt;dt++){const Mt=nt[dt];_a(V,O,S,Mt)}ae&&Rt.render(S);for(let dt=0,mt=nt.length;dt<mt;dt++){const Mt=nt[dt];ga(m,S,Mt,Mt.viewport)}}else O.length>0&&_a(V,O,S,N),ae&&Rt.render(S),ga(m,S,N);L!==null&&A===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,N),re.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],it===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ls(S,N,G,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){V&&yt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const dt=D.update(S),mt=S.material;mt.visible&&m.push(S,dt,mt,G,yt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const dt=D.update(S),mt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),yt.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),yt.copy(dt.boundingSphere.center)),yt.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(mt)){const Mt=dt.groups;for(let Lt=0,It=Mt.length;Lt<It;Lt++){const Et=Mt[Lt],Zt=mt[Et.materialIndex];Zt&&Zt.visible&&m.push(S,dt,Zt,G,yt.z,Et)}}else mt.visible&&m.push(S,dt,mt,G,yt.z,null)}}const nt=S.children;for(let dt=0,mt=nt.length;dt<mt;dt++)Ls(nt[dt],N,G,V)}function ga(S,N,G,V){const O=S.opaque,nt=S.transmissive,dt=S.transparent;p.setupLightsView(G),it===!0&&st.setGlobalState(x.clippingPlanes,G),V&&bt.viewport(T.copy(V)),O.length>0&&Vi(O,N,G),nt.length>0&&Vi(nt,N,G),dt.length>0&&Vi(dt,N,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function _a(S,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Tn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Gi:fn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[V.id],dt=V.viewport||T;nt.setSize(dt.z*x.transmissionResolutionScale,dt.w*x.transmissionResolutionScale);const mt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(H),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Rt.render(G);const Mt=x.toneMapping;x.toneMapping=En;const Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),it===!0&&st.setGlobalState(x.clippingPlanes,V),Vi(S,G,V),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Et=0,Zt=N.length;Et<Zt;Et++){const Qt=N[Et],fe=Qt.object,ue=Qt.geometry,jt=Qt.material,Tt=Qt.group;if(jt.side===Ut&&fe.layers.test(V.layers)){const Me=jt.side;jt.side=Ie,jt.needsUpdate=!0,va(fe,G,V,ue,jt,Tt),jt.side=Me,jt.needsUpdate=!0,It=!0}}It===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(mt),x.setClearColor(H,q),Lt!==void 0&&(V.viewport=Lt),x.toneMapping=Mt}function Vi(S,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,nt=S.length;O<nt;O++){const dt=S[O],mt=dt.object,Mt=dt.geometry,Lt=V===null?dt.material:V,It=dt.group;mt.layers.test(G.layers)&&va(mt,N,G,Mt,Lt,It)}}function va(S,N,G,V,O,nt){S.onBeforeRender(x,N,G,V,O,nt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,N,G,V,S,nt),O.transparent===!0&&O.side===Ut&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,x.renderBufferDirect(G,N,V,O,S,nt),O.side=wn,O.needsUpdate=!0,x.renderBufferDirect(G,N,V,O,S,nt),O.side=Ut):x.renderBufferDirect(G,N,V,O,S,nt),S.onAfterRender(x,N,G,V,O,nt)}function Wi(S,N,G){N.isScene!==!0&&(N=oe);const V=St.get(S),O=p.state.lights,nt=p.state.shadowsArray,dt=O.state.version,mt=j.getParameters(S,O.state,nt,N,G),Mt=j.getProgramCacheKey(mt);let Lt=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?k:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Nt),Lt=new Map,V.programs=Lt);let It=Lt.get(Mt);if(It!==void 0){if(V.currentProgram===It&&V.lightsStateVersion===dt)return Ma(S,mt),It}else mt.uniforms=j.getUniforms(S),S.onBeforeCompile(mt,x),It=j.acquireProgram(mt,Mt),Lt.set(Mt,It),V.uniforms=mt.uniforms;const Et=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=st.uniform),Ma(S,mt),V.needsLights=fl(S),V.lightsStateVersion=dt,V.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=It,V.uniformsList=null,It}function xa(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=bs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ma(S,N){const G=St.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function dl(S,N,G,V,O){N.isScene!==!0&&(N=oe),w.resetTextureUnits();const nt=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,mt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vi,Mt=(V.isMeshStandardMaterial?k:v).get(V.envMap||dt),Lt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,Qt=!!G.morphAttributes.color;let fe=En;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=x.toneMapping);const ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=ue!==void 0?ue.length:0,Tt=St.get(V),Me=p.state.lights;if(it===!0&&(et===!0||S!==M)){const Te=S===M&&V.id===y;st.setState(V,S,Te)}let te=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Me.state.version||Tt.outputColorSpace!==mt||O.isBatchedMesh&&Tt.batching===!1||!O.isBatchedMesh&&Tt.batching===!0||O.isBatchedMesh&&Tt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Tt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Tt.instancing===!1||!O.isInstancedMesh&&Tt.instancing===!0||O.isSkinnedMesh&&Tt.skinning===!1||!O.isSkinnedMesh&&Tt.skinning===!0||O.isInstancedMesh&&Tt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Tt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Tt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Tt.instancingMorph===!1&&O.morphTexture!==null||Tt.envMap!==Mt||V.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Lt||Tt.vertexTangents!==It||Tt.morphTargets!==Et||Tt.morphNormals!==Zt||Tt.morphColors!==Qt||Tt.toneMapping!==fe||Tt.morphTargetsCount!==jt)&&(te=!0):(te=!0,Tt.__version=V.version);let Xe=Tt.currentProgram;te===!0&&(Xe=Wi(V,N,O));let Wn=!1,Ue=!1,Ti=!1;const le=Xe.getUniforms(),Be=Tt.uniforms;if(bt.useProgram(Xe.program)&&(Wn=!0,Ue=!0,Ti=!0),V.id!==y&&(y=V.id,Ue=!0),Wn||M!==S){bt.buffers.depth.getReversed()?(lt.copy(S.projectionMatrix),bc(lt),Ec(lt),le.setValue(C,"projectionMatrix",lt)):le.setValue(C,"projectionMatrix",S.projectionMatrix),le.setValue(C,"viewMatrix",S.matrixWorldInverse);const Pe=le.map.cameraPosition;Pe!==void 0&&Pe.setValue(C,Xt.setFromMatrixPosition(S.matrixWorld)),Dt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ue=!0,Ti=!0)}if(O.isSkinnedMesh){le.setOptional(C,O,"bindMatrix"),le.setOptional(C,O,"bindMatrixInverse");const Te=O.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),le.setValue(C,"boneTexture",Te.boneTexture,w))}O.isBatchedMesh&&(le.setOptional(C,O,"batchingTexture"),le.setValue(C,"batchingTexture",O._matricesTexture,w),le.setOptional(C,O,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",O._indirectTexture,w),le.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",O._colorsTexture,w));const ke=G.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Pt.update(O,G,Xe),(Ue||Tt.receiveShadow!==O.receiveShadow)&&(Tt.receiveShadow=O.receiveShadow,le.setValue(C,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Be.envMap.value=Mt,Be.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Be.envMapIntensity.value=N.environmentIntensity),Ue&&(le.setValue(C,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&ul(Be,Ti),nt&&V.fog===!0&&ut.refreshFogUniforms(Be,nt),ut.refreshMaterialUniforms(Be,V,W,Z,p.state.transmissionRenderTarget[S.id]),bs.upload(C,xa(Tt),Be,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(bs.upload(C,xa(Tt),Be,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(C,"center",O.center),le.setValue(C,"modelViewMatrix",O.modelViewMatrix),le.setValue(C,"normalMatrix",O.normalMatrix),le.setValue(C,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Te=V.uniformsGroups;for(let Pe=0,Ds=Te.length;Pe<Ds;Pe++){const Rn=Te[Pe];F.update(Rn,Xe),F.bind(Rn,Xe)}}return Xe}function ul(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function fl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,G){St.get(S.texture).__webglTexture=N,St.get(S.depthTexture).__webglTexture=G;const V=St.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const G=St.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const pl=C.createFramebuffer();this.setRenderTarget=function(S,N=0,G=0){L=S,R=N,A=G;let V=!0,O=null,nt=!1,dt=!1;if(S){const Mt=St.get(S);if(Mt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Mt.__hasExternalTextures)w.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&St.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const It=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[N])?O=It[N][G]:O=It[N],nt=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?O=St.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[G]:O=It,T.copy(S.viewport),z.copy(S.scissor),B=S.scissorTest}else T.copy(at).multiplyScalar(W).floor(),z.copy(At).multiplyScalar(W).floor(),B=wt;if(G!==0&&(O=pl),bt.bindFramebuffer(C.FRAMEBUFFER,O)&&V&&bt.drawBuffers(S,O),bt.viewport(T),bt.scissor(z),bt.setScissorTest(B),nt){const Mt=St.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,G)}else if(dt){const Mt=St.get(S.texture),Lt=N;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.__webglTexture,G,Lt)}else if(S!==null&&G!==0){const Mt=St.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mt.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(S,N,G,V,O,nt,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){bt.bindFramebuffer(C.FRAMEBUFFER,mt);try{const Mt=S.texture,Lt=Mt.format,It=Mt.type;if(!Dt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&G>=0&&G<=S.height-O&&C.readPixels(N,G,V,O,kt.convert(Lt),kt.convert(It),nt)}finally{const Mt=L!==null?St.get(L).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,V,O,nt,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){const Mt=S.texture,Lt=Mt.format,It=Mt.type;if(!Dt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&G>=0&&G<=S.height-O){bt.bindFramebuffer(C.FRAMEBUFFER,mt);const Et=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(N,G,V,O,kt.convert(Lt),kt.convert(It),0);const Zt=L!==null?St.get(L).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,Zt);const Qt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await yc(C,Qt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(Et),C.deleteSync(Qt),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,G=0){S.isTexture!==!0&&(Fn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(S.image.width*V),nt=Math.floor(S.image.height*V),dt=N!==null?N.x:0,mt=N!==null?N.y:0;w.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,dt,mt,O,nt),bt.unbindTexture()};const ml=C.createFramebuffer(),gl=C.createFramebuffer();this.copyTextureToTexture=function(S,N,G=null,V=null,O=0,nt=null){S.isTexture!==!0&&(Fn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],nt=arguments[3]||0,G=null),nt===null&&(O!==0?(Fn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=O,O=0):nt=0);let dt,mt,Mt,Lt,It,Et,Zt,Qt,fe;const ue=S.isCompressedTexture?S.mipmaps[nt]:S.image;if(G!==null)dt=G.max.x-G.min.x,mt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,It=G.min.y,Et=G.isBox3?G.min.z:0;else{const ke=Math.pow(2,-O);dt=Math.floor(ue.width*ke),mt=Math.floor(ue.height*ke),S.isDataArrayTexture?Mt=ue.depth:S.isData3DTexture?Mt=Math.floor(ue.depth*ke):Mt=1,Lt=0,It=0,Et=0}V!==null?(Zt=V.x,Qt=V.y,fe=V.z):(Zt=0,Qt=0,fe=0);const jt=kt.convert(N.format),Tt=kt.convert(N.type);let Me;N.isData3DTexture?(w.setTexture3D(N,0),Me=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Me=C.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Me=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const te=C.getParameter(C.UNPACK_ROW_LENGTH),Xe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ue=C.getParameter(C.UNPACK_SKIP_ROWS),Ti=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Et);const le=S.isDataArrayTexture||S.isData3DTexture,Be=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const ke=St.get(S),Te=St.get(N),Pe=St.get(ke.__renderTarget),Ds=St.get(Te.__renderTarget);bt.bindFramebuffer(C.READ_FRAMEBUFFER,Pe.__webglFramebuffer),bt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Rn=0;Rn<Mt;Rn++)le&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(S).__webglTexture,O,Et+Rn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(N).__webglTexture,nt,fe+Rn)),C.blitFramebuffer(Lt,It,dt,mt,Zt,Qt,dt,mt,C.DEPTH_BUFFER_BIT,C.NEAREST);bt.bindFramebuffer(C.READ_FRAMEBUFFER,null),bt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||St.has(S)){const ke=St.get(S),Te=St.get(N);bt.bindFramebuffer(C.READ_FRAMEBUFFER,ml),bt.bindFramebuffer(C.DRAW_FRAMEBUFFER,gl);for(let Pe=0;Pe<Mt;Pe++)le?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ke.__webglTexture,O,Et+Pe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ke.__webglTexture,O),Be?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.__webglTexture,nt,fe+Pe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,nt),O!==0?C.blitFramebuffer(Lt,It,dt,mt,Zt,Qt,dt,mt,C.COLOR_BUFFER_BIT,C.NEAREST):Be?C.copyTexSubImage3D(Me,nt,Zt,Qt,fe+Pe,Lt,It,dt,mt):C.copyTexSubImage2D(Me,nt,Zt,Qt,Lt,It,dt,mt);bt.bindFramebuffer(C.READ_FRAMEBUFFER,null),bt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Be?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Me,nt,Zt,Qt,fe,dt,mt,Mt,jt,Tt,ue.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,nt,Zt,Qt,fe,dt,mt,Mt,jt,ue.data):C.texSubImage3D(Me,nt,Zt,Qt,fe,dt,mt,Mt,jt,Tt,ue):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,nt,Zt,Qt,dt,mt,jt,Tt,ue.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,nt,Zt,Qt,ue.width,ue.height,jt,ue.data):C.texSubImage2D(C.TEXTURE_2D,nt,Zt,Qt,dt,mt,jt,Tt,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,te),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ti),nt===0&&N.generateMipmaps&&C.generateMipmap(Me),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G=null,V=null,O=0){return S.isTexture!==!0&&(Fn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],O=arguments[4]||0),Fn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,G,V,O)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,bt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Zp{progress=0;isTransitioning=!1;duration=.8;elapsed=0;onMidpointCallback=null;onCompleteCallback=null;hasTriggeredMidpoint=!1;startTransition(t,e,n=.8){this.isTransitioning||(this.isTransitioning=!0,this.progress=0,this.elapsed=0,this.duration=n,this.onMidpointCallback=t,this.onCompleteCallback=e??null,this.hasTriggeredMidpoint=!1)}update(t){this.isTransitioning&&(this.elapsed+=t,this.progress=Math.min(1,this.elapsed/this.duration),this.progress>=.5&&!this.hasTriggeredMidpoint&&(this.hasTriggeredMidpoint=!0,this.onMidpointCallback&&this.onMidpointCallback()),this.progress>=1&&(this.isTransitioning=!1,this.progress=0,this.onCompleteCallback&&this.onCompleteCallback()))}getWipeAmount(){return this.isTransitioning?this.progress<.5?this.progress*2:(1-this.progress)*2:0}}class Kp{renderer;renderTarget;internalWidth=640;internalHeight=360;blitScene;blitCamera;blitMaterial;blitQuad;transitionManager;constructor(t){this.internalWidth=t.internalWidth??640,this.internalHeight=t.internalHeight??360,this.transitionManager=new Zp,this.renderer=new $p({canvas:t.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xl,this.renderer.outputColorSpace=xe,this.renderer.setPixelRatio(1),this.renderTarget=new Tn(this.internalWidth,this.internalHeight,{minFilter:ce,magFilter:ce,generateMipmaps:!1,format:He,colorSpace:xe,depthBuffer:!0,stencilBuffer:!1}),this.blitScene=new el,this.blitCamera=new ua(-1,1,1,-1,0,1);const e=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,n=`
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
    `;this.blitMaterial=new pn({uniforms:{tDiffuse:{value:this.renderTarget.texture},uResolution:{value:new qt(this.internalWidth,this.internalHeight)},uWipeProgress:{value:0},uShowCrosshair:{value:1}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1});const i=new Ce(2,2);this.blitQuad=new X(i,this.blitMaterial),this.blitScene.add(this.blitQuad),this.resize()}setCrosshairVisible(t){this.blitMaterial.uniforms.uShowCrosshair.value=t?1:0}setResolution(t,e){this.internalWidth=t,this.internalHeight=e,this.renderTarget.setSize(t,e),this.blitMaterial.uniforms.uResolution.value.set(t,e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1)}render(t,e,n){this.transitionManager.update(n),this.blitMaterial.uniforms.uWipeProgress.value=this.transitionManager.getWipeAmount(),this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCamera)}}class Sn{root;camera;perspective="FPP";mouseSensitivity=1;fov=72;targetPosition=new U;currentPosition=new U;yaw=0;targetYaw=0;pitch=0;targetPitch=0;distance=14;targetDistance=14;minDistance=4;maxDistance=26;followSpeed=18;rotateSpeed=2.5;isDraggingRightMouse=!1;previousMouseX=0;previousMouseY=0;static MAX_PITCH=Math.PI/2-.08;constructor(t={}){this.perspective=t.perspective??"FPP",this.mouseSensitivity=t.mouseSensitivity??1,this.fov=t.fov??72,this.root=new Gt,this.root.name="CameraRigRoot",this.camera=new Le(this.fov,16/9,.05,250),this.camera.name="MainCamera",this.camera.rotation.order="YXZ",this.root.add(this.camera),this.setPerspective(this.perspective,!0),this.bindInputs()}setFov(t){this.fov=Oe.clamp(t,40,100),this.camera.fov=this.fov,this.camera.updateProjectionMatrix()}setPerspective(t,e=!1){this.perspective=t,t==="FPP"?(this.targetDistance=0,this.distance=0,this.camera.fov=this.fov,this.camera.near=.05,this.camera.updateProjectionMatrix()):(this.targetDistance=14,e&&(this.distance=14),this.camera.fov=this.fov,this.camera.near=.1,this.camera.updateProjectionMatrix()),this.updateRigTransforms()}setMouseSensitivity(t){this.mouseSensitivity=Oe.clamp(t,.2,5)}updateRigTransforms(){const t=Math.cos(this.pitch),e=Math.sin(this.pitch),n=Math.cos(this.yaw),r=-Math.sin(this.yaw)*t,a=e,o=-n*t;if(this.perspective==="FPP")this.camera.position.set(this.targetPosition.x,this.targetPosition.y,this.targetPosition.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");else{const l=this.currentPosition;this.camera.position.set(l.x-r*this.distance,l.y-a*this.distance,l.z-o*this.distance),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}bindInputs(){window.addEventListener("mousemove",t=>{if(document.pointerLockElement!==null)this.yaw-=t.movementX*this.mouseSensitivity*.002,this.pitch-=t.movementY*this.mouseSensitivity*.002,this.pitch=Math.max(-Sn.MAX_PITCH,Math.min(Sn.MAX_PITCH,this.pitch)),this.targetYaw=this.yaw,this.targetPitch=this.pitch,this.updateRigTransforms();else if(this.perspective==="TPP"&&this.isDraggingRightMouse){const n=t.clientX-this.previousMouseX,i=t.clientY-this.previousMouseY;this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,this.targetYaw-=n*.006*this.mouseSensitivity,this.targetPitch-=i*.006*this.mouseSensitivity,this.targetPitch=Math.max(-Sn.MAX_PITCH,Math.min(Sn.MAX_PITCH,this.targetPitch)),this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.updateRigTransforms()}}),window.addEventListener("mousedown",t=>{this.perspective==="TPP"&&t.button===2&&(this.isDraggingRightMouse=!0,this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,t.preventDefault())}),window.addEventListener("mouseup",t=>{t.button===2&&(this.isDraggingRightMouse=!1)}),window.addEventListener("contextmenu",t=>{t.preventDefault()}),window.addEventListener("wheel",t=>{this.perspective==="TPP"&&(this.targetDistance+=Math.sign(t.deltaY)*1.5,this.targetDistance=Oe.clamp(this.targetDistance,this.minDistance,this.maxDistance))},{passive:!0})}setTarget(t,e,n){this.perspective==="FPP"?this.targetPosition.set(t,e+1.65,n):this.targetPosition.set(t,e+1.2,n)}getYaw(){return this.yaw}getPitch(){return this.pitch}update(t,e=0,n=0,i=!1,r=!1){const a=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;i&&(this.targetYaw+=this.rotateSpeed*a),r&&(this.targetYaw-=this.rotateSpeed*a),Math.abs(e)>.15&&(this.targetYaw-=e*this.rotateSpeed*a*1.5),Math.abs(n)>.15&&(this.targetPitch-=n*this.rotateSpeed*a*1.2,this.targetPitch=Math.max(-Sn.MAX_PITCH,Math.min(Sn.MAX_PITCH,this.targetPitch))),this.perspective==="FPP"?(this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.currentPosition.copy(this.targetPosition)):(this.yaw=Oe.damp(this.yaw,this.targetYaw,16,a),this.pitch=Oe.damp(this.pitch,this.targetPitch,16,a),this.distance=Oe.damp(this.distance,this.targetDistance,14,a),this.currentPosition.copy(this.targetPosition)),this.updateRigTransforms()}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}}class jp{scene;mode="surface";hemiLight;dirLight;dirLightTarget;librarySunLight;librarySunTarget;dungeonAmbient;surfaceFog;dungeonFog;libraryFog;surfaceBgColor=new Bt(9159658);dungeonBgColor=new Bt(657426);libraryBgColor=new Bt(1708827);constructor(t){this.scene=t,this.hemiLight=new nh(16775917,4010020,.95),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new Qa(16775126,1.8),this.dirLight.position.set(28,42,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.bias=-5e-4;const e=26;this.dirLight.shadow.camera.left=-e,this.dirLight.shadow.camera.right=e,this.dirLight.shadow.camera.top=e,this.dirLight.shadow.camera.bottom=-e,this.dirLightTarget=new he,this.scene.add(this.dirLightTarget),this.dirLight.target=this.dirLightTarget,this.scene.add(this.dirLight),this.librarySunLight=new Qa(16773332,2.8),this.librarySunLight.position.set(0,22,38),this.librarySunLight.castShadow=!0,this.librarySunLight.shadow.mapSize.width=2048,this.librarySunLight.shadow.mapSize.height=2048,this.librarySunLight.shadow.camera.near=1,this.librarySunLight.shadow.camera.far=80,this.librarySunLight.shadow.bias=-.001;const n=24;this.librarySunLight.shadow.camera.left=-n,this.librarySunLight.shadow.camera.right=n,this.librarySunLight.shadow.camera.top=n,this.librarySunLight.shadow.camera.bottom=-n,this.librarySunTarget=new he,this.librarySunTarget.position.set(0,2,14),this.scene.add(this.librarySunTarget),this.librarySunLight.target=this.librarySunTarget,this.scene.add(this.librarySunLight),this.dungeonAmbient=new oh(16771272,1.2),this.scene.add(this.dungeonAmbient),this.surfaceFog=new la(9159658,.01),this.dungeonFog=new Rs(394510,18,95),this.libraryFog=new Rs(1708827,28,100),this.setMode("surface")}setMode(t){this.mode=t,t==="surface"?(this.scene.background=this.surfaceBgColor,this.scene.fog=this.surfaceFog,this.hemiLight.color.setHex(16775917),this.hemiLight.groundColor.setHex(4010020),this.hemiLight.intensity=.95,this.dirLight.intensity=1.8,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=.1,this.dungeonAmbient.color.setHex(4997726)):t==="dungeon"?(this.scene.background=this.dungeonBgColor,this.scene.fog=this.dungeonFog,this.hemiLight.color.setHex(5918832),this.hemiLight.groundColor.setHex(2761248),this.hemiLight.intensity=.35,this.dirLight.intensity=0,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=1.2,this.dungeonAmbient.color.setHex(4997726)):(this.scene.background=this.libraryBgColor,this.scene.fog=this.libraryFog,this.hemiLight.color.setHex(16774107),this.hemiLight.groundColor.setHex(5847850),this.hemiLight.intensity=1.65,this.dirLight.intensity=0,this.librarySunLight.intensity=3.2,this.dungeonAmbient.intensity=1.85,this.dungeonAmbient.color.setHex(16770236))}updateSunPosition(t){this.mode==="surface"&&(this.dirLight.position.set(t.x+28,t.y+42,t.z+20),this.dirLightTarget.position.copy(t))}}class Jp{textures;materials;constructor(){this.initTextures(),this.initMaterials()}createCanvas(t=16,e=16){const n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,[n,i]}wrapTexture(t){const e=new ys(t);return e.magFilter=ce,e.minFilter=ce,e.generateMipmaps=!1,e.colorSpace=xe,e.wrapS=ki,e.wrapT=ki,e}initTextures(){const[t,e]=this.createCanvas(16,16),n=["#4d8234","#559138","#42702c","#5da33e","#3c6427"];for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();e.fillStyle=j>.8?n[3]:j>.5?n[1]:j>.2?n[0]:n[2],e.fillRect(D,I,1,1)}e.fillStyle="#6ab847",e.fillRect(3,4,1,2),e.fillRect(11,2,1,2),e.fillRect(8,12,1,2),e.fillRect(14,9,1,2);const[i,r]=this.createCanvas(16,16),a=["#6e4c29","#5e3e20","#7a552e","#52361b","#855d33"];for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();r.fillStyle=j>.6?a[0]:j>.3?a[1]:j>.1?a[2]:a[3],r.fillRect(D,I,1,1)}for(let I=0;I<16;I++){const D=I%3===0?4:I%2===0?3:2;for(let j=0;j<D;j++)r.fillStyle=j===0?"#5da33e":"#4d8234",r.fillRect(I,j,1,1);I*7%5===0&&D<5&&(r.fillStyle="#3c6427",r.fillRect(I,D,1,1))}const[o,l]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();l.fillStyle=j>.7?a[4]:j>.4?a[0]:j>.2?a[1]:a[3],l.fillRect(D,I,1,1)}l.fillStyle="#9e7347",l.fillRect(4,7,2,1),l.fillRect(11,12,1,2);const[c,h]=this.createCanvas(16,16),f=["#737984","#616773","#808794","#555b66"];for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();h.fillStyle=j>.7?f[2]:j>.4?f[0]:j>.2?f[1]:f[3],h.fillRect(D,I,1,1)}h.fillStyle="#33373f",h.fillRect(0,0,16,1),h.fillRect(0,8,16,1),h.fillRect(0,0,1,8),h.fillRect(8,0,1,8),h.fillRect(4,8,1,8),h.fillRect(12,8,1,8);const[d,u]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();u.fillStyle=j>.6?"#6e737d":j>.3?"#5b606a":"#4e525a",u.fillRect(D,I,1,1)}u.fillStyle="#383b42",u.fillRect(2,2,4,1),u.fillRect(2,2,1,4),u.fillRect(8,6,5,1),u.fillRect(8,6,1,4),u.fillRect(3,10,4,1),u.fillRect(11,12,4,1);const[g,_]=this.createCanvas(16,16),m=["#8d633b","#7a5430","#9c6f44","#6c4929"];for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();_.fillStyle=j>.7?m[2]:j>.4?m[0]:j>.2?m[1]:m[3],_.fillRect(D,I,1,1)}_.fillStyle="#4a3018",_.fillRect(0,0,16,1),_.fillRect(0,4,16,1),_.fillRect(0,8,16,1),_.fillRect(0,12,16,1),_.fillRect(5,0,1,4),_.fillRect(11,4,1,4),_.fillRect(3,8,1,4),_.fillRect(13,12,1,4);const[p,E]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();E.fillStyle=j>.5?"#5c3d21":"#4d3219",E.fillRect(D,I,1,1)}E.fillStyle="#3b2512",E.fillRect(0,0,16,2),E.fillRect(0,14,16,2),E.fillRect(0,0,2,16),E.fillRect(14,0,2,16);const[b,x]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();x.fillStyle=j>.7?"#2a6ec4":j>.4?"#215aa4":"#1a4987",x.fillRect(D,I,1,1)}x.fillStyle="#5dade2",x.fillRect(2,3,4,1),x.fillRect(10,7,5,1),x.fillRect(4,12,6,1),x.fillRect(12,14,3,1);const[P,R]=this.createCanvas(16,16),A=["#d8be7b","#ccb06e","#dfc788","#bfa260"];for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();R.fillStyle=j>.7?A[2]:j>.4?A[0]:j>.2?A[1]:A[3],R.fillRect(D,I,1,1)}const[L,y]=this.createCanvas(16,16);y.fillStyle="#831e1e",y.fillRect(0,0,16,16),y.fillStyle="#cda250",y.fillRect(1,1,14,1),y.fillRect(1,14,14,1),y.fillRect(1,1,1,14),y.fillRect(14,1,1,14),y.fillStyle="#651414",y.fillRect(3,3,10,10);for(let I=4;I<12;I+=2)for(let D=4;D<12;D+=2)y.fillStyle="#7a1919",y.fillRect(D,I,1,1);const[M,T]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();T.fillStyle=j>.6?"#545863":j>.3?"#42454f":"#33363f",T.fillRect(D,I,1,1)}T.fillStyle="#787d8c",T.fillRect(1,1,14,1),T.fillRect(1,1,1,14);const[z,B]=this.createCanvas(16,16);B.fillStyle="#2d4b3b",B.fillRect(0,0,16,16),B.fillStyle="#e8e8e8",B.fillRect(2,1,12,4),B.fillStyle="#c4c4c4",B.fillRect(2,4,12,1),B.fillStyle="#22382c",B.fillRect(0,6,16,1),B.fillStyle="#39604b",B.fillRect(0,7,16,1);const[H,q]=this.createCanvas(16,16);q.fillStyle="#754a24",q.fillRect(0,0,16,16),q.fillStyle="#ffe9b3",q.fillRect(2,2,12,12),q.fillStyle="#8b6534",q.fillRect(8,2,1,12),q.fillRect(2,8,12,1);const[$,Z]=this.createCanvas(16,16);Z.fillStyle="#d4be88",Z.fillRect(0,0,16,16),Z.fillStyle="#8a5d2a",Z.fillRect(0,0,16,1),Z.fillRect(0,15,16,1),Z.fillStyle="#4a351d",Z.fillRect(3,4,5,3),Z.fillRect(4,7,6,2);const[W,tt]=this.createCanvas(16,16);tt.fillStyle="#4e331c",tt.fillRect(0,0,16,16),tt.fillStyle="#382210",tt.fillRect(0,0,16,1),tt.fillRect(0,7,16,2),tt.fillRect(0,15,16,1);const rt=["#9e2b2b","#2b4b8a","#2d6b38","#8a5e2b","#6d3284","#3b3b44","#c98a2c"];let at=1;for(;at<15;){const I=at%2===0?2:1,D=5+Math.floor(Math.sin(at*3)*1.5),j=rt[at*3%rt.length];tt.fillStyle=j,tt.fillRect(at,7-D,I,D),at%3===0&&(tt.fillStyle="#ffd700",tt.fillRect(at,7-D+1,I,1),tt.fillRect(at,5,I,1)),at+=I}for(at=1;at<15;){const I=at%3===0?2:1,D=5+Math.floor(Math.cos(at*4)*1.5),j=rt[(at*5+2)%rt.length];tt.fillStyle=j,tt.fillRect(at,15-D,I,D),at%2===0&&(tt.fillStyle="#e5c158",tt.fillRect(at,15-D+1,I,1)),at+=I}const[At,wt]=this.createCanvas(16,16);wt.fillStyle="#2d1b38",wt.fillRect(0,0,16,16),wt.fillStyle="#1c1024",wt.fillRect(0,0,16,2),wt.fillRect(0,7,16,2),wt.fillRect(0,14,16,2);const K=["#1d4370","#5a1d70","#701d2d","#1d705c","#c28b17"];for(let I=1;I<15;I+=2)wt.fillStyle=K[I*2%K.length],wt.fillRect(I,2,2,5),wt.fillRect(I,9,2,5),wt.fillStyle="#8ce8ff",wt.fillRect(I+1,4,1,1),wt.fillStyle="#ffd269",wt.fillRect(I,11,1,1);const[it,et]=this.createCanvas(16,32);et.fillStyle="#1a2b58",et.fillRect(0,0,16,30),et.fillStyle="#e8b835",et.fillRect(1,1,14,1),et.fillRect(1,1,1,28),et.fillRect(14,1,1,28),et.fillStyle="#0f1a38",et.fillRect(0,30,8,2),et.fillRect(8,30,8,2),et.clearRect(4,28,8,4),et.fillStyle="#f7cb45",et.fillRect(6,6,4,4),et.fillRect(5,7,1,2),et.fillRect(10,7,1,2),et.fillStyle="#ffffff",et.fillRect(6,5,4,1),et.fillStyle="#f7cb45",et.fillRect(7,10,3,7),et.fillRect(4,8,2,2),et.fillRect(3,7,1,2),et.fillRect(5,11,2,2),et.fillRect(3,12,2,1),et.fillRect(6,17,2,4),et.fillRect(4,20,3,2),et.fillRect(9,17,3,3),et.fillRect(11,19,2,2),et.fillRect(10,12,1,4),et.fillRect(11,11,2,2),et.fillRect(13,9,2,3);const[lt,gt]=this.createCanvas(16,32);gt.fillStyle="#6b1318",gt.fillRect(0,0,16,30),gt.fillStyle="#d4a839",gt.fillRect(1,1,14,1),gt.fillRect(1,1,1,28),gt.fillRect(14,1,1,28),gt.fillStyle="#f7d057",gt.fillRect(7,5,2,18),gt.fillRect(4,9,8,2),gt.fillRect(6,4,4,1),gt.fillRect(6,23,4,1),gt.fillRect(3,8,1,4),gt.fillRect(12,8,1,4);const[Xt,yt]=this.createCanvas(16,32);yt.fillStyle="#22252c",yt.fillRect(0,0,16,32);const oe=["#ad2626","#1e4887","#1f7048","#b8891d","#5d2678","#267874"];for(let I=2;I<30;I+=3)for(let D=2;D<14;D+=3)yt.fillStyle=oe[(D*4+I*2)%oe.length],yt.fillRect(D,I,2,2);yt.fillStyle="#15171c",yt.fillRect(0,0,16,2),yt.fillRect(0,30,16,2),yt.fillRect(0,0,2,32),yt.fillRect(14,0,2,32),yt.fillRect(7,0,2,32),yt.fillRect(0,15,16,2);const[ae,Ct]=this.createCanvas(16,16);Ct.fillStyle="#7a7f8a",Ct.fillRect(0,0,8,8),Ct.fillRect(8,8,8,8),Ct.fillStyle="#5c616b",Ct.fillRect(8,0,8,8),Ct.fillRect(0,8,8,8),Ct.fillStyle="#363940",Ct.fillRect(0,0,16,1),Ct.fillRect(0,8,16,1),Ct.fillRect(0,0,1,16),Ct.fillRect(8,0,1,16);const[C,_e]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=D%4===0?"#4a4f58":D%4===1?"#767c87":"#616773";_e.fillStyle=j,_e.fillRect(D,I,1,1)}_e.fillStyle="#383d45",_e.fillRect(0,0,16,1),_e.fillRect(0,15,16,1);const[Vt,Dt]=this.createCanvas(16,16);Dt.fillStyle="#224a73",Dt.fillRect(0,0,16,16),Dt.fillStyle="#8f7743",Dt.fillRect(3,3,5,4),Dt.fillRect(2,5,4,5),Dt.fillRect(9,4,5,3),Dt.fillRect(10,8,4,5),Dt.fillStyle="#dfb550",Dt.fillRect(0,7,16,1);const[bt,Ht]=this.createCanvas(16,16);Ht.fillStyle="#c7b28b",Ht.fillRect(0,0,16,16),Ht.fillStyle="#614620",Ht.fillRect(0,0,16,1),Ht.fillRect(0,15,16,1),Ht.fillRect(0,0,1,16),Ht.fillRect(15,0,1,16),Ht.fillStyle="#3b250d",Ht.fillRect(3,4,10,2),Ht.fillRect(4,8,8,2),Ht.fillRect(5,12,6,2);const St=I=>{const[D,j]=this.createCanvas(64,16);return j.fillStyle="#331d0d",j.fillRect(0,0,64,16),j.fillStyle="#a87d3b",j.fillRect(1,1,62,14),j.fillStyle="#241409",j.fillRect(2,2,60,12),j.fillStyle="#fce59f",j.font="bold 9px monospace",j.textAlign="center",j.textBaseline="middle",j.fillText(I,32,8),this.wrapTexture(D)},[w,v]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();v.fillStyle=j>.5?"#362112":"#2a190c",v.fillRect(D,I,1,1)}v.fillStyle="#1c1007",v.fillRect(0,0,16,1),v.fillRect(0,15,16,1);const[k,J]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let D=0;D<16;D++){const j=Math.random();J.fillStyle=j>.6?"#d9a84e":j>.3?"#b88937":"#946c25",J.fillRect(D,I,1,1)}J.fillStyle="#ffe08a",J.fillRect(0,0,16,2),this.textures={grassTop:this.wrapTexture(t),grassSide:this.wrapTexture(i),dirt:this.wrapTexture(o),stoneBrick:this.wrapTexture(c),cobblestone:this.wrapTexture(d),woodPlanks:this.wrapTexture(g),woodBeam:this.wrapTexture(p),water:this.wrapTexture(b),sand:this.wrapTexture(P),carpetRed:this.wrapTexture(L),iron:this.wrapTexture(M),bedGreen:this.wrapTexture(z),windowLattice:this.wrapTexture(H),mapScroll:this.wrapTexture($),bookshelfDense:this.wrapTexture(W),bookshelfRare:this.wrapTexture(At),heraldicLionBanner:this.wrapTexture(it),heraldicCrossBanner:this.wrapTexture(lt),stainedGlassGothic:this.wrapTexture(Xt),stoneTileFloor:this.wrapTexture(ae),carvedStonePillar:this.wrapTexture(C),globeTexture:this.wrapTexture(Vt),inscriptionPlaque:this.wrapTexture(bt),plaqueHistoria:St("HISTORIA"),plaquePhilosophia:St("PHILOSOPHIA"),plaqueScientia:St("SCIENTIA"),plaqueTheologia:St("THEOLOGIA"),plaqueArcanum:St("ARCANUM"),plaqueMythologia:St("MYTHOLOGIA"),darkOak:this.wrapTexture(w),brassMetal:this.wrapTexture(k)}}initMaterials(){this.materials={grassTop:new Ft({map:this.textures.grassTop,roughness:.85,metalness:.05,side:Ut}),grassSide:new Ft({map:this.textures.grassSide,roughness:.85,metalness:.05,side:Ut}),dirt:new Ft({map:this.textures.dirt,roughness:.95,metalness:0,side:Ut}),stoneBrick:new Ft({map:this.textures.stoneBrick,roughness:.8,metalness:.1,side:Ut}),cobblestone:new Ft({map:this.textures.cobblestone,roughness:.85,metalness:.1,side:Ut}),woodPlanks:new Ft({map:this.textures.woodPlanks,roughness:.75,metalness:.05,side:Ut}),woodBeam:new Ft({map:this.textures.woodBeam,roughness:.8,metalness:.05,side:Ut}),water:new Ft({map:this.textures.water,roughness:.15,metalness:.2,side:Ut,transparent:!0,opacity:.85}),sand:new Ft({map:this.textures.sand,roughness:.95,metalness:0,side:Ut}),carpetRed:new Ft({map:this.textures.carpetRed,roughness:.9,metalness:0,side:Ut}),iron:new Ft({map:this.textures.iron,roughness:.4,metalness:.7,side:Ut}),bedGreen:new Ft({map:this.textures.bedGreen,roughness:.85,metalness:0,side:Ut}),windowLattice:new Ft({map:this.textures.windowLattice,emissive:new Bt(16766330),emissiveIntensity:.4,roughness:.3,side:Ut}),mapScroll:new Ft({map:this.textures.mapScroll,roughness:.9,side:Ut}),bookshelfDense:new Ft({map:this.textures.bookshelfDense,roughness:.75,metalness:.05,side:Ut}),bookshelfRare:new Ft({map:this.textures.bookshelfRare,roughness:.65,metalness:.15,emissive:new Bt(3809876),emissiveIntensity:.25,side:Ut}),heraldicLionBanner:new Ft({map:this.textures.heraldicLionBanner,roughness:.9,metalness:.1,side:Ut}),heraldicCrossBanner:new Ft({map:this.textures.heraldicCrossBanner,roughness:.9,metalness:.1,side:Ut}),stainedGlassGothic:new Ft({map:this.textures.stainedGlassGothic,emissive:new Bt(16766085),emissiveIntensity:.75,roughness:.2,side:Ut}),stoneTileFloor:new Ft({map:this.textures.stoneTileFloor,roughness:.7,metalness:.1,side:Ut}),carvedStonePillar:new Ft({map:this.textures.carvedStonePillar,roughness:.8,metalness:.08,side:Ut}),globeTexture:new Ft({map:this.textures.globeTexture,roughness:.6,metalness:.2,side:Ut}),inscriptionPlaque:new Ft({map:this.textures.inscriptionPlaque,roughness:.85,metalness:.05,side:Ut}),plaqueHistoria:new Ft({map:this.textures.plaqueHistoria,roughness:.6,metalness:.2,side:Ut}),plaquePhilosophia:new Ft({map:this.textures.plaquePhilosophia,roughness:.6,metalness:.2,side:Ut}),plaqueScientia:new Ft({map:this.textures.plaqueScientia,roughness:.6,metalness:.2,side:Ut}),plaqueTheologia:new Ft({map:this.textures.plaqueTheologia,roughness:.6,metalness:.2,side:Ut}),plaqueArcanum:new Ft({map:this.textures.plaqueArcanum,roughness:.6,metalness:.2,side:Ut}),plaqueMythologia:new Ft({map:this.textures.plaqueMythologia,roughness:.6,metalness:.2,side:Ut}),darkOak:new Ft({map:this.textures.darkOak,roughness:.8,metalness:.05,side:Ut}),brassMetal:new Ft({map:this.textures.brassMetal,roughness:.35,metalness:.8,side:Ut})}}bookSpineMatCache=new Map;createBookMaterial(t,e="#ffd88a"){const n=`${t}_${e}`;if(this.bookSpineMatCache.has(n))return this.bookSpineMatCache.get(n);const[i,r]=this.createCanvas(16,16);r.fillStyle=t,r.fillRect(0,0,16,16),r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(0,0,16,1),r.fillRect(0,15,16,1),r.fillRect(0,0,1,16),r.fillRect(15,0,1,16),r.fillStyle=e,r.fillRect(2,3,12,1),r.fillRect(2,12,12,1),r.fillStyle="rgba(0,0,0,0.4)",r.fillRect(5,7,6,3),r.fillStyle=e,r.fillRect(6,8,4,1);const a=this.wrapTexture(i),o=new Ft({map:a,roughness:.6,metalness:.15});return this.bookSpineMatCache.set(n,o),o}}const hl=Math.sqrt(3),Qp=.5*(hl-1),Ui=(3-hl)/6,Co=s=>Math.floor(s)|0,Po=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Lo(s=Math.random){const t=tm(s),e=new Float64Array(t).map(i=>Po[i%12*2]),n=new Float64Array(t).map(i=>Po[i%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*Qp,f=Co(r+h),d=Co(a+h),u=(f+d)*Ui,g=f-u,_=d-u,m=r-g,p=a-_;let E,b;m>p?(E=1,b=0):(E=0,b=1);const x=m-E+Ui,P=p-b+Ui,R=m-1+2*Ui,A=p-1+2*Ui,L=f&255,y=d&255;let M=.5-m*m-p*p;if(M>=0){const B=L+t[y],H=e[B],q=n[B];M*=M,o=M*M*(H*m+q*p)}let T=.5-x*x-P*P;if(T>=0){const B=L+E+t[y+b],H=e[B],q=n[B];T*=T,l=T*T*(H*x+q*P)}let z=.5-R*R-A*A;if(z>=0){const B=L+1+t[y+1],H=e[B],q=n[B];z*=z,c=z*z*(H*R+q*A)}return 70*(o+l+c)}}function tm(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class em{noise2D;moistureNoise2D;baseFrequency=.015;octaves=4;persistence=.5;lacunarity=2;heightScale=10;stepHeight=1;waterLevel=1;constructor(t=12345){const e=this.createPrng(t);this.noise2D=Lo(e),this.moistureNoise2D=Lo(this.createPrng(t+9999))}createPrng(t){let e=t%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}getSample(t,e){let n=1,i=this.baseFrequency,r=0,a=0;for(let m=0;m<this.octaves;m++)r+=this.noise2D(t*i,e*i)*n,a+=n,n*=this.persistence,i*=this.lacunarity;const o=(r/a+1)*.5,c=Math.pow(o,1.3)*this.heightScale,h=Math.floor(c/this.stepHeight),f=Math.max(0,h*this.stepHeight),d=f<=this.waterLevel,u=d?this.waterLevel:f,g=(this.moistureNoise2D(t*.01,e*.01)+1)*.5;let _="grass";return d?_="water":f===this.waterLevel+this.stepHeight&&g<.4?_="sand":f>=10?_="snow":f>=9?_="stone":_="grass",{height:u,rawHeight:c,biome:_,isWater:d}}}class nm{chunkX;chunkZ;size;group;meshGroup;noise;atlas;constructor(t,e,n,i,r){this.chunkX=t,this.chunkZ=e,this.size=n,this.noise=i,this.atlas=r,this.group=new Gt,this.meshGroup=new Gt,this.group.add(this.meshGroup),this.buildChunk()}buildChunk(){const t=this.chunkX*this.size,e=this.chunkZ*this.size,n=[],i=[];for(let l=-1;l<=this.size;l++){n[l+1]=[],i[l+1]=[];for(let c=-1;c<=this.size;c++){const h=this.noise.getSample(t+c,e+l);n[l+1][c+1]=h.height,i[l+1][c+1]=h.biome}}const r={grassTop:{positions:[],uvs:[],normals:[]},grassSide:{positions:[],uvs:[],normals:[]},dirt:{positions:[],uvs:[],normals:[]},stone:{positions:[],uvs:[],normals:[]},sand:{positions:[],uvs:[],normals:[]},water:{positions:[],uvs:[],normals:[]}},a=(l,c,h,f,d,u,g=[1,1])=>{const _=r[l];_&&(_.positions.push(...c,...h,...f),_.normals.push(...u,...u,...u),_.uvs.push(0,0,0,g[1],g[0],g[1]),_.positions.push(...c,...f,...d),_.normals.push(...u,...u,...u),_.uvs.push(0,0,g[0],g[1],g[0],0))};for(let l=0;l<this.size;l++)for(let c=0;c<this.size;c++){const h=n[l+1][c+1],f=i[l+1][c+1],d=t+c,u=e+l;let g="grassTop";f==="water"?g="water":f==="sand"?g="sand":g="grassTop",a(g,[d,h,u],[d,h,u+1],[d+1,h,u+1],[d+1,h,u],[0,1,0],[1,1]);const _=n[l][c+1];if(h>_){const b=h-_,x=f==="stone"?"stone":b>1?"dirt":"grassSide";a(x,[d+1,h,u],[d+1,_,u],[d,_,u],[d,h,u],[0,0,-1],[1,b])}const m=n[l+2][c+1];if(h>m){const b=h-m,x=f==="stone"?"stone":b>1?"dirt":"grassSide";a(x,[d,h,u+1],[d,m,u+1],[d+1,m,u+1],[d+1,h,u+1],[0,0,1],[1,b])}const p=n[l+1][c];if(h>p){const b=h-p,x=f==="stone"?"stone":b>1?"dirt":"grassSide";a(x,[d,h,u],[d,p,u],[d,p,u+1],[d,h,u+1],[-1,0,0],[1,b])}const E=n[l+1][c+2];if(h>E){const b=h-E,x=f==="stone"?"stone":b>1?"dirt":"grassSide";a(x,[d+1,h,u+1],[d+1,E,u+1],[d+1,E,u],[d+1,h,u],[1,0,0],[1,b])}if(f==="grass"&&h>this.noise.waterLevel){const b=Math.sin(d*12.9898+u*78.233)*43758.5453,x=b-Math.floor(b);x>.94?this.createPineTree(d+.5,h,u+.5):x>.88&&x<=.9&&this.createBoulder(d+.5,h,u+.5)}}const o={grassTop:this.atlas.materials.grassTop,grassSide:this.atlas.materials.grassSide,dirt:this.atlas.materials.dirt,stone:this.atlas.materials.cobblestone,sand:this.atlas.materials.sand,water:this.atlas.materials.water};for(const[l,c]of Object.entries(r)){if(c.positions.length===0)continue;const h=new we;h.setAttribute("position",new ie(c.positions,3)),h.setAttribute("normal",new ie(c.normals,3)),h.setAttribute("uv",new ie(c.uvs,2));const f=new X(h,o[l]);f.castShadow=l!=="water",f.receiveShadow=!0,this.meshGroup.add(f)}}createPineTree(t,e,n){const i=new ot(.35,1.2,.35),r=new X(i,this.atlas.materials.woodBeam);r.position.set(t,e+.6,n),r.castShadow=!0,r.receiveShadow=!0,this.meshGroup.add(r);const a=[{size:1.4,h:.7,py:1.3},{size:1,h:.6,py:1.8},{size:.6,h:.6,py:2.3}];for(const o of a){const l=new ot(o.size,o.h,o.size),c=new X(l,this.atlas.materials.grassTop);c.position.set(t,e+o.py,n),c.castShadow=!0,c.receiveShadow=!0,this.meshGroup.add(c)}}createBoulder(t,e,n){const i=new ot(.7,.5,.7),r=new X(i,this.atlas.materials.cobblestone);r.position.set(t,e+.25,n),r.castShadow=!0,r.receiveShadow=!0,this.meshGroup.add(r)}dispose(){this.meshGroup.traverse(t=>{t instanceof X&&t.geometry.dispose()}),this.group.clear()}}class im{scene;noise;atlas;chunkSize=16;renderRadius=3;activeChunks=new Map;container;constructor(t,e){this.scene=t,this.atlas=e,this.noise=new em(42),this.container=new Gt,this.container.name="SurfaceWorld",this.scene.add(this.container)}update(t,e){const n=Math.floor(t/this.chunkSize),i=Math.floor(e/this.chunkSize),r=new Set;for(let a=-this.renderRadius;a<=this.renderRadius;a++)for(let o=-this.renderRadius;o<=this.renderRadius;o++){const l=n+o,c=i+a,h=`${l},${c}`;if(r.add(h),!this.activeChunks.has(h)){const f=new nm(l,c,this.chunkSize,this.noise,this.atlas);this.activeChunks.set(h,f),this.container.add(f.group)}}for(const[a,o]of this.activeChunks.entries())r.has(a)||(this.container.remove(o.group),o.dispose(),this.activeChunks.delete(a))}getElevation(t,e){return this.noise.getSample(t,e).height}setVisible(t){this.container.visible=t}}class ci{rect;left=null;right=null;room=null;constructor(t){this.rect=t}isLeaf(){return!this.left&&!this.right}split(t){if(!this.isLeaf())return!1;let e=Math.random()>.5;this.rect.w>this.rect.h&&this.rect.w/this.rect.h>=1.25?e=!1:this.rect.h>this.rect.w&&this.rect.h/this.rect.w>=1.25&&(e=!0);const n=(e?this.rect.h:this.rect.w)-t;if(n<=t)return!1;const i=Math.floor(t+Math.random()*(n-t));return e?(this.left=new ci({x:this.rect.x,z:this.rect.z,w:this.rect.w,h:i}),this.right=new ci({x:this.rect.x,z:this.rect.z+i,w:this.rect.w,h:this.rect.h-i})):(this.left=new ci({x:this.rect.x,z:this.rect.z,w:i,h:this.rect.h}),this.right=new ci({x:this.rect.x+i,z:this.rect.z,w:this.rect.w-i,h:this.rect.h})),!0}createRooms(t,e){const n=[];let i=0;const r=a=>{if(a.isLeaf()){const l=Math.max(t,a.rect.w-2),c=Math.max(t,a.rect.h-2),h=Math.max(t,Math.floor(t+Math.random()*(l-t+1))),f=Math.max(t,Math.floor(t+Math.random()*(c-t+1))),d=a.rect.x+Math.floor((a.rect.w-h)/2),u=a.rect.z+Math.floor((a.rect.h-f)/2),g=e[i%e.length];a.room={id:i++,x:d,z:u,w:h,h:f,type:g,doors:[]},n.push(a.room)}else a.left&&r(a.left),a.right&&r(a.right)};return r(this),n}getRoom(){if(this.room)return this.room;let t=null,e=null;return this.left&&(t=this.left.getRoom()),this.right&&(e=this.right.getRoom()),t||e}}class sm{width;height;tiles;rooms=[];corridors=[];spawnPoint={x:0,z:0};constructor(t=48,e=48){this.width=t,this.height=e,this.tiles=Array.from({length:e},()=>Array(t).fill(0)),this.generate()}generate(){const t=new ci({x:1,z:1,w:this.width-2,h:this.height-2}),e=10,n=7,i=[t];for(let a=0;a<4;a++){const o=[];for(const l of i)l.split(e)&&(l.left&&o.push(l.left),l.right&&o.push(l.right));if(o.length===0)break;i.length=0,i.push(...o)}const r=["quarters","hall","armory","cellar","shrine"];this.rooms=t.createRooms(n,r);for(const a of this.rooms)for(let o=a.z;o<a.z+a.h;o++)for(let l=a.x;l<a.x+a.w;l++)o>=0&&o<this.height&&l>=0&&l<this.width&&(this.tiles[o][l]=1);this.createCorridors(t);for(const a of this.corridors)this.carveCorridor(a.x1,a.z1,a.x2,a.z2);for(let a=0;a<this.height;a++)for(let o=0;o<this.width;o++)this.tiles[a][o]===0&&this.isAdjacentToFloor(o,a)&&(this.tiles[a][o]=2);if(this.rooms.length>0){const a=this.rooms[0];this.spawnPoint={x:a.x+Math.floor(a.w/2),z:a.z+Math.floor(a.h/2)}}}isAdjacentToFloor(t,e){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++){if(i===0&&n===0)continue;const r=t+i,a=e+n;if(r>=0&&r<this.width&&a>=0&&a<this.height&&this.tiles[a][r]===1)return!0}return!1}createCorridors(t){if(!t.isLeaf()&&t.left&&t.right){const e=t.left.getRoom(),n=t.right.getRoom();if(e&&n){const i=Math.floor(e.x+e.w/2),r=Math.floor(e.z+e.h/2),a=Math.floor(n.x+n.w/2),o=Math.floor(n.z+n.h/2);this.corridors.push({x1:i,z1:r,x2:a,z2:o})}this.createCorridors(t.left),this.createCorridors(t.right)}}carveCorridor(t,e,n,i){let r=t,a=e;for(;r!==n;)r>=0&&r<this.width&&a>=0&&a<this.height&&(this.tiles[a][r]=1),r+=r<n?1:-1;for(;a!==i;)r>=0&&r<this.width&&a>=0&&a<this.height&&(this.tiles[a][r]=1),a+=a<i?1:-1}}class rm{atlas;constructor(t){this.atlas=t}createBed(){const t=new Gt;t.name="Bed";const e=new ot(1.2,.4,1.8),n=new X(e,this.atlas.materials.bedGreen);n.position.set(0,.35,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new ot(1.3,.9,.12),r=new X(i,this.atlas.materials.woodBeam);r.position.set(0,.45,-.9),r.castShadow=!0,t.add(r);const a=new ot(1.3,.6,.12),o=new X(a,this.atlas.materials.woodBeam);o.position.set(0,.3,.9),o.castShadow=!0,t.add(o);const l=new ot(.12,.95,.12),c=[[-.6,.475,-.9],[.6,.475,-.9],[-.6,.35,.9],[.6,.35,.9]];for(const h of c){const f=new X(l,this.atlas.materials.woodBeam);f.position.set(h[0],h[1],h[2]),f.castShadow=!0,t.add(f)}return t}createDrawer(){const t=new Gt;t.name="Drawer";const e=new ot(.75,.75,.6),n=new X(e,this.atlas.materials.woodPlanks);n.position.set(0,.375,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new ot(.82,.08,.68),r=new X(i,this.atlas.materials.woodBeam);r.position.set(0,.77,0),r.castShadow=!0,t.add(r);const a=new ot(.2,.04,.04),o=new X(a,this.atlas.materials.iron);o.position.set(0,.52,.31);const l=new X(a,this.atlas.materials.iron);return l.position.set(0,.25,.31),t.add(o,l),t}createWardrobe(){const t=new Gt;t.name="Wardrobe";const e=new ot(1.2,1.9,.7),n=new X(e,this.atlas.materials.woodPlanks);n.position.set(0,.95,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new ot(1.3,.1,.76),r=new X(i,this.atlas.materials.woodBeam);r.position.set(0,1.9,0),r.castShadow=!0,t.add(r);const a=new ot(.08,.08,.04),o=new X(a,this.atlas.materials.iron);o.position.set(-.55,1.4,.36);const l=new X(a,this.atlas.materials.iron);return l.position.set(-.55,.5,.36),t.add(o,l),t}createTableSet(){const t=new Gt;t.name="TableSet";const e=new ot(1.5,.1,.9),n=new X(e,this.atlas.materials.bedGreen);n.position.set(0,.7,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new ot(.08,.7,.08),r=[[-.65,.35,-.35],[.65,.35,-.35],[-.65,.35,.35],[.65,.35,.35]];for(const l of r){const c=new X(i,this.atlas.materials.woodBeam);c.position.set(l[0],l[1],l[2]),c.castShadow=!0,t.add(c)}const a=this.createChair();a.position.set(-.9,0,0),a.rotation.y=Math.PI/2,t.add(a);const o=this.createChair();return o.position.set(.9,0,0),o.rotation.y=-Math.PI/2,t.add(o),t}createChair(){const t=new Gt,e=new X(new ot(.42,.06,.42),this.atlas.materials.woodPlanks);e.position.set(0,.42,0),e.castShadow=!0,t.add(e);const n=new X(new ot(.42,.45,.06),this.atlas.materials.woodBeam);n.position.set(0,.65,-.18),n.castShadow=!0,t.add(n);const i=new ot(.05,.42,.05),r=[[-.18,.21,-.18],[.18,.21,-.18],[-.18,.21,.18],[.18,.21,.18]];for(const a of r){const o=new X(i,this.atlas.materials.woodBeam);o.position.set(a[0],a[1],a[2]),o.castShadow=!0,t.add(o)}return t}createCarpet(t,e){const n=new Ce(t,e),i=new X(n,this.atlas.materials.carpetRed);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}createTorch(t,e,n){const i=new Gt;i.position.set(t,e,n);const r=new ot(.12,.35,.2),a=new X(r,this.atlas.materials.iron);a.position.set(0,0,.1),i.add(a);const o=new ot(.08,.5,.08),l=new X(o,this.atlas.materials.woodBeam);l.position.set(0,.15,.2),l.rotation.x=.2,i.add(l);const c=new ot(.15,.22,.15),h=new je({color:16768358}),f=new X(c,h);f.position.set(0,.42,.25),i.add(f);const d=new nn(16760388,4.5,24,1.05);d.position.set(0,.5,.3),d.castShadow=!0,d.shadow.bias=-.002,d.shadow.mapSize.width=512,d.shadow.mapSize.height=512,i.add(d);const u={light:d,baseIntensity:4.5,flickerSpeed:7+Math.random()*5,flickerPhase:Math.random()*Math.PI*2,position:new U(t,e+.5,n+.3)};return{group:i,lightInfo:u}}createWindow(t,e,n){const i=new Gt;i.position.set(t,e,n);const r=new X(new Ce(1.6,1.2),this.atlas.materials.windowLattice);r.position.set(0,0,.02),i.add(r);const a=new nn(16774608,5.5,16,1.05);return a.position.set(0,0,.5),i.add(a),i}createMapScroll(t,e,n){const i=new X(new Ce(1.4,.9),this.atlas.materials.mapScroll);return i.position.set(t,e,n+.02),i}createChest(t,e,n){const i=new Gt;i.position.set(t,e,n);const r=new X(new ot(.7,.45,.5),this.atlas.materials.woodPlanks);r.position.set(0,.225,0),r.castShadow=!0,i.add(r);const a=new X(new ot(.72,.18,.52),this.atlas.materials.woodBeam);a.position.set(0,.5,0),a.castShadow=!0,i.add(a);const o=new X(new ot(.1,.12,.05),this.atlas.materials.iron);return o.position.set(0,.38,.27),i.add(o),i}}class am{scene;atlas;dungeon;container;propsFactory;torchLights=[];solidGrid;constructor(t,e,n=48,i=48){this.scene=t,this.atlas=e,this.propsFactory=new rm(e),this.dungeon=new sm(n,i),this.container=new Gt,this.container.name="DungeonWorld",this.solidGrid=Array.from({length:i},()=>Array(n).fill(!1)),this.scene.add(this.container),this.build3DMap()}build3DMap(){const e=[],n=[],i=[],r=[],a=[],o=[],l=[],c=[],h=[],f=(d,u,g,_,m,p,E,b,x=[1,1])=>{d.push(..._,...m,...p),g.push(...b,...b,...b),u.push(0,0,x[0],0,x[0],x[1]),d.push(..._,...p,...E),g.push(...b,...b,...b),u.push(0,0,x[0],x[1],0,x[1])};for(let d=0;d<this.dungeon.height;d++)for(let u=0;u<this.dungeon.width;u++){const g=this.dungeon.tiles[d][u];g===1?(f(e,n,i,[u,0,d],[u+1,0,d],[u+1,0,d+1],[u,0,d+1],[0,1,0]),this.solidGrid[d][u]=!1):g===2?(this.solidGrid[d][u]=!0,d+1<this.dungeon.height&&this.dungeon.tiles[d+1][u]===1&&f(r,a,o,[u+1,2.8,d+1],[u+1,0,d+1],[u,0,d+1],[u,2.8,d+1],[0,0,1],[1,2.8]),d-1>=0&&this.dungeon.tiles[d-1][u]===1&&f(r,a,o,[u,2.8,d],[u,0,d],[u+1,0,d],[u+1,2.8,d],[0,0,-1],[1,2.8]),u-1>=0&&this.dungeon.tiles[d][u-1]===1&&f(r,a,o,[u,2.8,d+1],[u,0,d+1],[u,0,d],[u,2.8,d],[-1,0,0],[1,2.8]),u+1<this.dungeon.width&&this.dungeon.tiles[d][u+1]===1&&f(r,a,o,[u+1,2.8,d],[u+1,0,d],[u+1,0,d+1],[u+1,2.8,d+1],[1,0,0],[1,2.8]),f(l,c,h,[u,2.8,d],[u+1,2.8,d],[u+1,2.8,d+1],[u,2.8,d+1],[0,1,0])):this.solidGrid[d][u]=!0}if(e.length>0){const d=new we;d.setAttribute("position",new ie(e,3)),d.setAttribute("normal",new ie(i,3)),d.setAttribute("uv",new ie(n,2));const u=new X(d,this.atlas.materials.woodPlanks);u.receiveShadow=!0,this.container.add(u)}if(r.length>0){const d=new we;d.setAttribute("position",new ie(r,3)),d.setAttribute("normal",new ie(o,3)),d.setAttribute("uv",new ie(a,2));const u=new X(d,this.atlas.materials.stoneBrick);u.castShadow=!0,u.receiveShadow=!0,this.container.add(u)}if(l.length>0){const d=new we;d.setAttribute("position",new ie(l,3)),d.setAttribute("normal",new ie(h,3)),d.setAttribute("uv",new ie(c,2));const u=new X(d,this.atlas.materials.woodBeam);u.castShadow=!0,this.container.add(u)}this.populateRooms()}populateRooms(){if(this.dungeon.rooms.length===0)return;const t=this.dungeon.rooms[0];this.decorateQuartersRoom(t);for(let e=1;e<this.dungeon.rooms.length;e++){const n=this.dungeon.rooms[e];this.decorateProceduralRoom(n)}}decorateQuartersRoom(t){const e=t.x+t.w/2,n=t.z+t.h/2,i=this.propsFactory.createBed();i.position.set(t.x+1.2,0,t.z+1.6),this.container.add(i);const r=this.propsFactory.createDrawer();r.position.set(t.x+2.5,0,t.z+.8),this.container.add(r);const a=this.propsFactory.createWardrobe();a.position.set(t.x+t.w-1.2,0,t.z+1.8),this.container.add(a);const o=this.propsFactory.createBed();o.position.set(t.x+t.w-2.8,0,t.z+1.6),this.container.add(o);const l=this.propsFactory.createDrawer();l.position.set(t.x+t.w-4.1,0,t.z+.8),this.container.add(l);const c=this.propsFactory.createTableSet();c.position.set(e-.5,0,t.z+1.8),this.container.add(c);const h=this.propsFactory.createCarpet(t.w*.65,t.h*.4);h.position.set(e,.01,n+1),this.container.add(h);const f=this.propsFactory.createMapScroll(t.x+2,1.8,t.z);this.container.add(f);const d=this.propsFactory.createWindow(t.x+t.w-3.2,1.8,t.z);this.container.add(d);const u=this.propsFactory.createTorch(t.x+4.2,1.6,t.z);this.container.add(u.group),this.torchLights.push(u.lightInfo),this.setSolidBox(t.x+.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-3.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-1.8,t.z+1,1.2,1)}decorateProceduralRoom(t){const e=t.x+t.w/2,n=t.z+t.h/2,i=this.propsFactory.createTorch(e,1.6,t.z);if(this.container.add(i.group),this.torchLights.push(i.lightInfo),t.type==="armory"){const r=this.propsFactory.createChest(t.x+1.2,0,t.z+1.2),a=this.propsFactory.createChest(t.x+2.2,0,t.z+1.2);this.container.add(r,a),this.setSolidBox(t.x+.8,t.z+.8,2,1)}else if(t.type==="hall"){const r=this.propsFactory.createCarpet(t.w*.5,t.h*.5);r.position.set(e,.01,n),this.container.add(r);const a=this.propsFactory.createTableSet();a.position.set(e,0,n),this.container.add(a),this.setSolidBox(e-1,n-.6,2,1.2)}else if(t.type==="cellar"){const r=this.propsFactory.createChest(t.x+t.w-1.5,0,t.z+t.h-1.5);this.container.add(r)}}setSolidBox(t,e,n,i){const r=Math.max(0,Math.floor(t)),a=Math.min(this.dungeon.width-1,Math.floor(t+n)),o=Math.max(0,Math.floor(e)),l=Math.min(this.dungeon.height-1,Math.floor(e+i));for(let c=o;c<=l;c++)for(let h=r;h<=a;h++)this.solidGrid[c][h]=!0}isSolid(t,e){const n=Math.floor(t),i=Math.floor(e);return n<0||n>=this.dungeon.width||i<0||i>=this.dungeon.height?!0:this.solidGrid[i][n]}updateTorches(t){for(const e of this.torchLights){const n=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.6+Math.cos(t*(e.flickerSpeed*1.7)+e.flickerPhase*2)*.3;e.light.intensity=Math.max(3.2,e.baseIntensity+n)}}setVisible(t){this.container.visible=t}}class Je{static sessionSeed=Math.floor(Math.random()*1e7);static CLASSIFICATIONS={Fiction:["High Fantasy","Gothic Tales","Fables & Parables","Epic Poetry"],"Non-Fiction":["Biography","Autobiography","History","Self-Help & Personal Growth","General Knowledge & Trivia","Science & Technology","Travel & Culture","Academics"],"Academic Texts & Grammar":["Ancient Linguistics & Lexicons","Classical Rhetoric","Aristotelian Logic","Cartography & Geometry"],"Professional Manuals":["Master Stonemasonry","Cathedral Architecture","Herbalism & Apothecary","Alchemical Metallurgy","Tactical Siegecraft"],"Breakthroughs & Theories":["Celestial Mechanics","Etheric Resonance Theory","Elemental Transmutation","Chrono-Geometric Principles"],Dissertations:["Theological Treatise","Metaphysical Inquiries","Subterranean Excavations","Cryptographic Syntheses"],"Mysticism & Magic":["Astral Pyromancy","Void Weaving","Sacred Runic Inscriptions","Divination & Starlight Scrying"],"Tales & Mythology":["Legends of the First Age","Chronicles of the Golden Lion","The Sunken Kingdoms","Behemoths of the Deep"]};static CLASSIC_TITLES={Fiction:["The Chronicles of Wessex","Poems of the Minstrels","Song of the Wounded Stag","The Knight of the Silver Shield","The Phantom of the Cloister","The Winter King"],"Non-Fiction":["Historia Britanniae","The Lives of Saints","Tacitus Annales","The Art of War","Chronicles of the Crusades","Gesta Danorum","Chronicon Saxonicum","On Virtue and Honor"],"Academic Texts & Grammar":["Geometria","De Officiis Regum","Grammatica Antiqua","The Oxford Lexicon","Ars Grammatica","The Canon of Dialectic","De Interpretatione"],"Professional Manuals":["Herbarius","De Medicina","Treatise on Archery","Liber Florum","Master Stonemasonry","Compendium Architecturae","Apothecary Formulary"],"Breakthroughs & Theories":["Astronomia","Philosophia Naturalis","The Harmonies of the Spheres","Treatise on Etheric Flow","Chrono-Geometric Axioms","Optics of the Prism"],Dissertations:["De Rerum Natura","Compendium Theologiae","Epistemology of the Light","Speculum Humanae Salvationis","The Subterranean Vaults: A Study","Treatise on Free Will"],"Mysticism & Magic":["Ars Magica","Liber Alchimia","The Emerald Tablet","Malleus Arcanum","Grimoire of Starlight","The Seven Sacred Seals","The Book of Shadows"],"Tales & Mythology":["Celtic Myths & Legends","The Book of Kells","Tales of the Golden Lion","The Primordial Slumber","Legends of the High Barrows","The Sunken Spires of Alderia"]};static TITLE_PATTERNS=["The Codex of [Adjective] [Noun]","Treatise on [Concept]","Memoirs of a [Profession]","The Principles of [Concept]","Chronicles of [Noun]","A Scholar's Guide to [Concept]","The Lost Gospel of [ProperName]","Observations on [Adjective] [Noun]","The Architecture of [Noun]","An Inquiry into [Concept]","Discourses on [Adjective] [Concept]","The Secrets of [Noun]","A Compendium of [Adjective] [Concept]","The Seven Pillars of [Concept]","Meditations upon [Noun]","Visions of [ProperName] and the [Noun]"];static ADJECTIVES=["Arcane","Ancient","Celestial","Forgotten","Gilded","Immutable","Shadowed","Verdant","Astral","Hallowed","Primordial","Luminescent","Forbidden","Eternal","Sacred","Subterranean","Obsidian","Iron-Bound"];static NOUNS=["Wessex","Alderia","the Cathedral","the High Archons","the Starlight","the Nether Depths","the Golden Lion","the Sunken Kingdom","the Sacred Oak","the Astral Loom","the Silver Flame","the Whispering Vaults","the Seven Veils"];static CONCEPTS=["Etheric Geometry","Astral Pyromancy","Living Stone & Mortar","Celestial Harmonics","Temporal Flux","Alchemical Transmutation","Herbal Panaceas","Rhetorical Eloquence","Metaphysical Equilibrium","Dungeon Fortifications","Sacred Geometry","Linguistic Roots of the First Tongue"];static PROFESSIONS=["Cathedral Scribe","Royal Alchemist","Master Stonecutter","Astral Cartographer","Grand Inquisitor","Herbal Apothecary","Cryptographic Scholar","High Archon","Dungeon Architect","Knight Chronicler","Void Watcher","Master Clockmaker"];static PROPER_NAMES=["Valerius","Seraphina","Ignatius","Morvath","Aurelius","Zephyrus","Eleanor","Balthazar","Cassian","Mirella","Lucian","Theodosia","Eldred","Vespera","Gideon","Roderick","Bramwell","Yvaine"];static AUTHORS_SUFFIX=["of Oakhaven","of the Iron Quill","the Stargazer","of Sunken Alderia","the Sightless","of House Lionheart","the Elder","of the High Spire","Arch-Scholar of Veritas","Venerable Keeper of Scrolls","Master Artificer"];static ERAS=["The First Age of Dawn (Year 312)","Era of the Great Schism (Year 784)","The Golden Century of the Lion (Year 1102)","Age of the Obsidian Eclipse (Year 1340)","Reign of Archon Aurelius IX (Year 1415)","The Silent Interregnum (Year 988)","Dawn of the Cathedral Archives (Year 1204)","The Third Solstice Reformation (Year 1520)"];static COVER_COLORS=["#1c2841","#5c1417","#1b3b28","#402415","#152e42","#5a2166","#273b32","#6b1b22","#1d2d3d","#1c1c1f","#4a3319"];static ACCENT_COLORS=["#ffd88a","#e6c280","#fce59f","#ffeaad","#d4af37"];static createPrng(t){let e=t+this.sessionSeed>>>0;return function(){let n=e+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}static generateBook(t,e){const n=this.createPrng(t),i=Object.keys(this.CLASSIFICATIONS),r=i[Math.floor(n()*i.length)],a=this.CLASSIFICATIONS[r],o=a[Math.floor(n()*a.length)];let l=e;if(!l)if(n()<.35){const p=this.CLASSIC_TITLES[r];l=p[Math.floor(n()*p.length)]}else l=this.generateTitle(n,r);const c=this.PROPER_NAMES[Math.floor(n()*this.PROPER_NAMES.length)],h=this.AUTHORS_SUFFIX[Math.floor(n()*this.AUTHORS_SUFFIX.length)],f=`${c} ${h}`,d=this.ERAS[Math.floor(n()*this.ERAS.length)],u=this.COVER_COLORS[Math.floor(n()*this.COVER_COLORS.length)],g=this.ACCENT_COLORS[Math.floor(n()*this.ACCENT_COLORS.length)],_=3+Math.floor(n()*3),m=[];for(let p=1;p<=_;p++)m.push({chapterTitle:this.generateChapterHeading(r,p,n),pageNumber:p,content:this.generatePageText(r,o,p,_,n,l)});return{id:`book_${t}_${r.replace(/\s+/g,"_")}`,title:l,author:f,era:d,classification:r,subgenre:o,coverColor:u,accentColor:g,pages:m}}static generateTitle(t,e){const n=this.TITLE_PATTERNS[Math.floor(t()*this.TITLE_PATTERNS.length)],i=this.ADJECTIVES[Math.floor(t()*this.ADJECTIVES.length)],r=this.NOUNS[Math.floor(t()*this.NOUNS.length)],a=this.CONCEPTS[Math.floor(t()*this.CONCEPTS.length)],o=this.PROFESSIONS[Math.floor(t()*this.PROFESSIONS.length)],l=this.PROPER_NAMES[Math.floor(t()*this.PROPER_NAMES.length)];let c=n.replace("[Adjective]",i).replace("[Noun]",r).replace("[Concept]",a).replace("[Profession]",o).replace("[ProperName]",l);return e==="Professional Manuals"&&!c.includes("Manual")&&!c.includes("Guide")&&!c.includes("Treatise")?c=`Manual of ${a}`:e==="Academic Texts & Grammar"&&!c.includes("Grammar")&&!c.includes("Lexicon")&&!c.includes("Guide")?c=`Lexicon of ${i} Syntax`:e==="Dissertations"&&(c=`Dissertation: ${c}`),c}static generateChapterHeading(t,e,n){const r=["I","II","III","IV","V","VI"][e-1]||`${e}`,a={Fiction:["The Threshold of Twilight","The Shadow in the Cloister","The Oath of Iron and Ash","The Awakening of the High Tower","Song of the Wounded Stag"],"Non-Fiction":["Chronological Foundations","The Siege of the Outer Walls","Cultural Artifacts of Alderia","Anatomy of Statecraft","The Great Reconstruction"],"Academic Texts & Grammar":["Morphology of Ancient Dialects","Rules of Classical Syntax","Etymological Transpositions","Orthography of Sacred Runes","The Canon of Dialectic"],"Professional Manuals":["Preparation of Mortar & Keystones","Thermal Tempering of Knight Blades","Harvesting Lunar Nightshade","Foundations of Arch Buttresses","Standard Operating Protocols"],"Breakthroughs & Theories":["The Hypothesis of Etheric Flow","Mathematical Geometries of Astral Spheres","Observation of Particle Flux","Harmonic Resonance Theorems","Empirical Corroborations"],Dissertations:["Theological Axioms of the Light","Epistemology of the Subterranean Mind","Excavation Findings at Level VII","Cryptographic Analysis of the Vault Seal","Synthesis & Concluding Theses"],"Mysticism & Magic":["Igniting the Inner Hearth Flame","Invocations to the Starlight Wardens","Weaving the Wards of Protection","The Seven Veils of the Void","Rituals of Ascension"],"Tales & Mythology":["The Primordial Slumber of the Earth","When the Lion Roared Over Silverpeak","The Tragedy of the Sunken Spires","The Celestial Falcon and the Wyrm","Epilogue: The Eternal Vigil"]},o=a[t]||a.Fiction,l=o[Math.min(e-1,o.length-1)];return`CHAPTER ${r}: ${l.toUpperCase()}`}static generatePageText(t,e,n,i,r,a){if(n===1)return`To the noble scholars, seekers of truth, and wanderers of the Grand Cathedral Library:

"Within these vaulted stone chambers lies the collective heartbeat of forgotten empires. He who reads with an earnest mind shall inherit the wisdom of a thousand architects."

This manuscript, cataloged under the archival classification of ${t.toUpperCase()} (${e}), is preserved under the perpetual seal of the High Cathedral Archons. May no reckless hand defile its vellum leaves.`;if(n===i)return`Here ends this volume of ${a}.

"The candle flame may flicker into shadow, yet the illuminated word remains carved into the immutable stone of memory."

Transcribed by hand upon linen vellum in the scriptorium of the Grand Nave. Bound with oak boards, tanned leather, and brass clasps. Verified by the Keeper of the Sacred Archives.`;const o={Fiction:['The iron gates groaned as the knight drew his greatsword. Beyond the courtyard, the shadow of the cathedral towered against the blood-red moon. "We stand here not for glory," whispered Sir Morvath, "but so the light beyond the mountains never fades."',"Through the subterranean crypts, the chanting began. It was not words of sorrow, but a resonant hymn that shook the mortar between the granite slabs. Down below, the vault doors glowed with golden runes."],"Non-Fiction":["In the year 1102 of the Solar Calendar, the Guild of Architects laid the first cornerstone of the Grand Nave. Over three hundred stonemasons labored through frost and tempest, carving the fluted pillars from the granite quarries of the Silverpeak range.","Trade routes spanning the southern straits brought manuscripts inscribed upon dyed calfskin and papyrus scrolls from the Sunken Kingdoms. These records formed the nucleus of the High Library's archival collection."],"Academic Texts & Grammar":["In classical Alderian syntax, the imperative mood carries an intrinsic reverence for the light. Verbs describing creation and construction require the prefix 'Ael-', denoting divine inspiration, whereas verbs of ruin require 'Vor-'.","The declension of sacred nouns follows the triadic rule: Nominative of Presence, Genitive of Ancestry, and Dative of Legacy. Consider the inscription upon the western apse: 'Ael-Veritas Omnia Vincit'."],"Professional Manuals":["To properly temper a cathedral arch key-stone: Ensure the mortise is chisel-dressed with a crosshatch pattern of thirty-two grooves per cubit. The mortar must comprise slaked lime, crushed quartz, and powdered basalt.","When distilling Lunar Nightshade: Harvest the leaves only when the second moon ascends above the cathedral spires. Heat gently within a copper alembic until the vapor turns from violet to shimmering silver."],"Breakthroughs & Theories":["The Etheric Resonance Theory posits that stone, light, and harmonic sound are manifestations of a singular celestial vibration. When church bells strike the resonant pitch of F-sharp, the ambient magical field stabilizes.","By observing the orbital precession of the Astral Spheres through the cathedral's meridian brass line, we establish that the subterranean dungeon labyrinth mirrors the constellations above with exact symmetry."],Dissertations:["The thesis proposes that the subterranean chambers beneath Level IV were not constructed as dungeons, but as an inverted cathedral designed to channel celestial radiation into the deep mantle of the world.","A rigorous cryptographic analysis of the runic plaques reveals a recursive cipher. Each Latin category header (HISTORIA, ARCANUM) serves as a key to decipher the celestial coordinate grid of the dungeon vault."],"Mysticism & Magic":["Draw the circle of warding using powdered cinnabar and pulverized silver. Inscribe the four cardinal sigils: Ignis at the East, Terra at the South, Aer at the West, and Aqua at the North. Breathe three times and ignite the hearth candle.","To summon the astral luminescence: Clear the mind of mortal dread. Visualize the stained-glass lancet windows of the High Nave catching the first ray of dawn. The flame within the hand will burn with heatless golden brilliance."],"Tales & Mythology":["Before the high spires were raised, when the realm was shrouded in eternal mist, the Great Golden Lion walked the primeval forests. Where his golden paws touched the soil, veins of luminescent stone crystallized.","It is written that in the end of days, when the last candle in the library flickers out, the stone gargoyles perched upon the cathedral battlements shall take flight to herald the rebirth of the dawn."]},l=o[t]||o.Fiction;return l[(n-2)%l.length]}}class ms{static spineCache=new Map;static pageSideMat=null;static leatherBackMatCache=new Map;static getSpineTexture(t,e=!1){const n=`${t.id}_${t.coverColor}_${t.accentColor}_${e?"H":"V"}`;if(this.spineCache.has(n))return this.spineCache.get(n);const i=e?128:48,r=e?32:96,a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d",{willReadFrequently:!0});o.imageSmoothingEnabled=!1,e?this.drawHorizontalSpine(o,i,r,t):this.drawVerticalSpine(o,i,r,t);const l=new ys(a);return l.magFilter=ce,l.minFilter=ce,l.generateMipmaps=!1,l.colorSpace=xe,this.spineCache.set(n,l),l}static getBookMaterials(t,e=!1,n=-1){const i=this.getSpineTexture(t,e),r=new Ft({map:i,roughness:.5,metalness:.25}),a=this.getLeatherCoverMaterial(t.coverColor),o=this.getPageEdgeMaterial(),l=n===-1;return[l?r:o,l?o:r,e?a:o,e?a:o,a,a]}static getPageEdgeMaterial(){if(!this.pageSideMat){const t=document.createElement("canvas");t.width=16,t.height=16;const e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#dfd3ad",e.fillRect(0,0,16,16),e.fillStyle="rgba(160, 140, 100, 0.45)";for(let i=1;i<16;i+=2)e.fillRect(0,i,16,1);const n=new ys(t);n.magFilter=ce,n.minFilter=ce,n.colorSpace=xe,this.pageSideMat=new Ft({map:n,roughness:.9,metalness:.05})}return this.pageSideMat}static getLeatherCoverMaterial(t){if(this.leatherBackMatCache.has(t))return this.leatherBackMatCache.get(t);const e=document.createElement("canvas");e.width=16,e.height=16;const n=e.getContext("2d");n.imageSmoothingEnabled=!1,n.fillStyle=t,n.fillRect(0,0,16,16),n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(2,2,4,4),n.fillRect(9,3,5,3),n.fillRect(3,10,6,4),n.fillRect(11,11,3,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16);const i=new ys(e);i.magFilter=ce,i.minFilter=ce,i.colorSpace=xe;const r=new Ft({map:i,roughness:.7,metalness:.1});return this.leatherBackMatCache.set(t,r),r}static drawVerticalSpine(t,e,n,i){t.fillStyle=i.coverColor,t.fillRect(0,0,e,n);const r=t.createLinearGradient(0,0,e,0);r.addColorStop(0,"rgba(0, 0, 0, 0.45)"),r.addColorStop(.2,"rgba(0, 0, 0, 0.05)"),r.addColorStop(.8,"rgba(0, 0, 0, 0.05)"),r.addColorStop(1,"rgba(0, 0, 0, 0.45)"),t.fillStyle=r,t.fillRect(0,0,e,n);const a=i.accentColor||"#ffd88a",o="#91712a",l="#fff2b8";t.fillStyle=o,t.strokeRect(1.5,1.5,e-3,n-3),t.fillStyle=a,t.strokeRect(2.5,2.5,e-5,n-5),t.strokeStyle=o,t.strokeRect(5.5,5.5,e-11,n-11),t.strokeStyle=a,t.strokeRect(6.5,6.5,e-13,n-13),this.drawCornerBrackets(t,4,4,e-8,n-8,a,l),[12,38,58,84].forEach(u=>{t.fillStyle="rgba(0, 0, 0, 0.6)",t.fillRect(3,u-1,e-6,4),t.fillStyle=a,t.fillRect(3,u,e-6,2),t.fillStyle=l,t.fillRect(4,u,e-8,1)});const h=this.determineEmblem(i),f=e/2,d=n-22;this.drawEmblem(t,f,d,h,a,l),this.drawSpineTitle(t,e/2,25,i.title,l,o)}static drawHorizontalSpine(t,e,n,i){t.fillStyle=i.coverColor,t.fillRect(0,0,e,n);const r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,"rgba(0, 0, 0, 0.4)"),r.addColorStop(.2,"rgba(0, 0, 0, 0.05)"),r.addColorStop(.8,"rgba(0, 0, 0, 0.05)"),r.addColorStop(1,"rgba(0, 0, 0, 0.4)"),t.fillStyle=r,t.fillRect(0,0,e,n);const a=i.accentColor||"#ffd88a",o="#91712a",l="#fff2b8";t.strokeStyle=o,t.strokeRect(1.5,1.5,e-3,n-3),t.strokeStyle=a,t.strokeRect(2.5,2.5,e-5,n-5),t.fillStyle=a,t.fillRect(4,2,3,n-4),t.fillRect(e-7,2,3,n-4);const c=this.determineEmblem(i);this.drawEmblem(t,16,n/2,c,a,l),this.drawEmblem(t,e-16,n/2,"cross",a,l),t.fillStyle="#000000",t.font='bold 9px "Cinzel", Georgia, serif',t.textAlign="center",t.textBaseline="middle";const h=i.title.length>20?i.title.slice(0,18)+"…":i.title;t.fillText(h.toUpperCase(),e/2+1,n/2+1),t.fillStyle=l,t.fillText(h.toUpperCase(),e/2,n/2)}static drawCornerBrackets(t,e,n,i,r,a,o){t.fillStyle=a,t.fillRect(e,n,4,1),t.fillRect(e,n,1,4),t.fillRect(e+1,n+1,2,2),t.fillRect(e+i-4,n,4,1),t.fillRect(e+i-1,n,1,4),t.fillRect(e+i-3,n+1,2,2),t.fillRect(e,n+r-1,4,1),t.fillRect(e,n+r-4,1,4),t.fillRect(e+1,n+r-3,2,2),t.fillRect(e+i-4,n+r-1,4,1),t.fillRect(e+i-1,n+r-4,1,4),t.fillRect(e+i-3,n+r-3,2,2),t.fillStyle=o,t.fillRect(e+1,n+1,1,1),t.fillRect(e+i-2,n+1,1,1),t.fillRect(e+1,n+r-2,1,1),t.fillRect(e+i-2,n+r-2,1,1)}static drawSpineTitle(t,e,n,i,r,a){t.save(),t.fillStyle="#000000",t.textAlign="center",t.textBaseline="middle";const o=i.split(" "),l=[];let c="";for(const u of o)(c+" "+u).trim().length<=10?c=(c+" "+u).trim():(c&&l.push(c),c=u);c&&l.push(c);const h=l.slice(0,3),f=6.5,d=n-(h.length-1)*f/2;t.font='bold 6.5px "Cinzel", "Courier New", serif',h.forEach((u,g)=>{const _=d+g*f;t.fillStyle="rgba(0,0,0,0.85)",t.fillText(u.toUpperCase(),e+.8,_+.8),t.fillStyle=r,t.fillText(u.toUpperCase(),e,_)}),t.restore()}static determineEmblem(t){const e=t.classification;return e==="Tales & Mythology"?"lion":e==="Mysticism & Magic"?"moon_stars":e==="Academic Texts & Grammar"?"celtic":e==="Breakthroughs & Theories"?"compass":e==="Professional Manuals"?"tree":e==="Dissertations"?"pillar":e==="Fiction"?"sword":"cross"}static drawEmblem(t,e,n,i,r,a){switch(t.save(),t.translate(Math.round(e),Math.round(n)),t.fillStyle="rgba(0,0,0,0.4)",t.fillRect(-7,-7,14,14),t.strokeStyle=r,t.strokeRect(-6.5,-6.5,13,13),t.fillStyle=r,i){case"lion":t.fillRect(-2,-4,4,3),t.fillRect(-3,-1,6,4),t.fillRect(-4,-3,2,2),t.fillRect(2,-2,2,2),t.fillRect(-3,3,2,3),t.fillRect(1,3,2,3),t.fillStyle=a,t.fillRect(-1,-4,2,1);break;case"cross":case"celtic":t.fillRect(-1,-5,2,10),t.fillRect(-4,-2,8,2),t.fillStyle=a,t.fillRect(-2,-3,4,4),t.fillRect(-1,-6,2,1);break;case"moon_stars":t.fillRect(-3,-4,3,8),t.fillRect(0,-3,2,6),t.clearRect(-1,-2,2,4),t.fillStyle=a,t.fillRect(2,-4,2,2),t.fillRect(3,2,2,2);break;case"pillar":t.fillRect(-4,-4,8,2),t.fillRect(-2,-2,4,6),t.fillRect(-4,3,8,2);break;case"sword":t.fillRect(-1,-5,2,7),t.fillRect(-4,1,8,1),t.fillRect(-1,2,2,2),t.fillStyle=a,t.fillRect(-1,4,2,1);break;case"compass":t.fillRect(-1,-5,2,10),t.fillRect(-5,-1,10,2),t.fillStyle=a,t.fillRect(-2,-2,4,4);break;case"tree":case"flower":t.fillRect(-1,-4,2,8),t.fillRect(-4,-2,8,2),t.fillRect(-3,-4,6,2),t.fillStyle=a,t.fillRect(-1,-5,2,2);break;default:t.fillRect(-1,-4,2,8),t.fillRect(-4,-1,8,2),t.fillStyle=a,t.fillRect(-2,-2,4,4);break}t.restore()}}class om{scene;atlas;container;chandeliers=[];candleSconces=[];globeSphereMesh;dustParticles;raycastableBooks=[];width=14;length=40;ceilingHeight=13;unitBoxGeom;constructor(t,e){this.scene=t,this.atlas=e,this.container=new Gt,this.container.name="GrandCathedralLibrary",this.scene.add(this.container),this.unitBoxGeom=new ot(1,1,1),this.buildCathedralArchitecture(),this.buildModularBookshelfWallsAndInstancedBooks(),this.buildRollingLadders(),this.buildUpperBalconiesAndStairs(),this.buildStudyDesksAndBenches(),this.buildCelestialGlobe(),this.buildGrandChandeliers(),this.buildWallCandleSconces(),this.buildHeraldicBannersAndPlaques(),this.buildStainedGlassAndVolumetricLightRays(),this.buildFloatingDustParticles(),this.container.updateMatrixWorld(!0)}setVisible(t){this.container.visible=t}freezeStatic(t){t.matrixAutoUpdate=!1,t.updateMatrix(),t.frustumCulled=!1}buildCathedralArchitecture(){const t=new Ce(this.width,this.length),e=new X(t,this.atlas.materials.stoneTileFloor);e.rotation.x=-Math.PI/2,e.position.set(0,0,16),e.receiveShadow=!0,this.freezeStatic(e),this.container.add(e);const n=new Ce(3.2,this.length-2),i=new X(n,this.atlas.materials.carpetRed);i.rotation.x=-Math.PI/2,i.position.set(0,.02,16),i.receiveShadow=!0,this.freezeStatic(i),this.container.add(i);const r=new Ce(this.width,this.length),a=new X(r,this.atlas.materials.stoneBrick);a.rotation.x=Math.PI/2,a.position.set(0,this.ceilingHeight,16),this.freezeStatic(a),this.container.add(a);const o=new ot(this.width,this.ceilingHeight,1),l=new X(o,this.atlas.materials.stoneBrick);l.position.set(0,this.ceilingHeight/2,36),l.castShadow=!0,l.receiveShadow=!0,this.freezeStatic(l);const c=new X(o,this.atlas.materials.stoneBrick);c.position.set(0,this.ceilingHeight/2,-4),c.castShadow=!0,c.receiveShadow=!0,this.freezeStatic(c),this.container.add(l,c);const h=[0,6,12,18,24,30],f=this.ceilingHeight,d=new Ge(.55,.65,f,12),u=new ot(1.4,.6,1.4);h.forEach(g=>{const _=new X(d,this.atlas.materials.carvedStonePillar);_.position.set(-4.3,f/2,g),_.castShadow=!0,_.receiveShadow=!0,this.freezeStatic(_);const m=new X(d,this.atlas.materials.carvedStonePillar);m.position.set(4.3,f/2,g),m.castShadow=!0,m.receiveShadow=!0,this.freezeStatic(m);const p=new X(u,this.atlas.materials.stoneBrick);p.position.set(-4.3,f-.3,g),this.freezeStatic(p);const E=new X(u,this.atlas.materials.stoneBrick);E.position.set(4.3,f-.3,g),this.freezeStatic(E),this.container.add(_,m,p,E)})}buildModularBookshelfWallsAndInstancedBooks(){const t=[this.atlas.materials.plaqueHistoria,this.atlas.materials.plaquePhilosophia,this.atlas.materials.plaqueScientia,this.atlas.materials.plaqueTheologia,this.atlas.materials.plaqueArcanum,this.atlas.materials.plaqueMythologia],e=5.5,n=6,i=[.8,1.6,2.4,3.2,4],r=.65,a=[];[-1,1].forEach(o=>{const l=o*6.5;for(let c=0;c<n;c++){const h=-1.5+c*e,f=new ot(.12,4.4,e-.2),d=new X(f,this.atlas.materials.darkOak);d.position.set(l+o*.28,2.2,h+e/2),d.castShadow=!0,d.receiveShadow=!0,this.freezeStatic(d),this.container.add(d);const u=new ot(.35,4.5,.35),g=new X(u,this.atlas.materials.darkOak);g.position.set(l,2.25,h),g.castShadow=!0,this.freezeStatic(g);const _=new X(u,this.atlas.materials.darkOak);_.position.set(l,2.25,h+e),_.castShadow=!0,this.freezeStatic(_),this.container.add(g,_);const m=new ot(.4,.45,e),p=new X(m,this.atlas.materials.darkOak);p.position.set(l,4.35,h+e/2),this.freezeStatic(p),this.container.add(p);const E=t[c%t.length],b=new Ce(1.8,.45),x=new X(b,E);x.position.set(l-o*.22,4.35,h+e/2),x.rotation.y=o===-1?Math.PI/2:-Math.PI/2,this.freezeStatic(x),this.container.add(x),i.forEach((P,R)=>{const A=new ot(r,.08,e-.15),L=new X(A,this.atlas.materials.darkOak);L.position.set(l,P,h+e/2),L.castShadow=!0,L.receiveShadow=!0,this.freezeStatic(L),this.container.add(L);const y=h+.22,M=h+e-.22;let T=y,z=0;for(;T<M;){const B=(o+2)*1e5+c*1e4+R*1e3+z*19,H=Je.createPrng(B),q=M-T;if(q<.07)break;if(H()<.14&&q>=.38){const Z=2+Math.floor(H()*2),W=.28+H()*.06,tt=.38+H()*.05,rt=.08+H()*.02,at=T+W/2;for(let At=0;At<Z;At++){const wt=B+At*37,K=Je.generateBook(wt),it=P+.04+At*rt+rt/2,et=new Kt,lt=new U(l-o*.06,it,at),gt=new De(0,(H()-.5)*.08,0),Xt=new U(tt,rt,W),yt=new Ke().setFromEuler(gt);et.compose(lt,yt,Xt),a.push({bookData:K,matrix:et,isHorizontal:!0,side:o})}T+=W+.015}else{const Z=.08+H()*.06,W=.52+H()*.2,tt=.38+H()*.06,rt=T+Z/2,at=P+.04+W/2,At=Je.generateBook(B),wt=new Kt,K=new U(l-o*.06,at,rt),it=new De(H()<.16?(H()-.5)*.08:0,0,0),et=new U(tt,W,Z),lt=new Ke().setFromEuler(it);wt.compose(K,lt,et),a.push({bookData:At,matrix:wt,isHorizontal:!1,side:o}),T+=Z+.004}z++}})}}),this.createInstancedBookMeshes(a)}createInstancedBookMeshes(t){const e=new Map;for(const n of t){const i=`${n.side}_${n.isHorizontal?"H":"V"}_${n.bookData.coverColor}`;if(!e.has(i)){const r=ms.getBookMaterials(n.bookData,n.isHorizontal,n.side);e.set(i,{materials:r,instances:[]})}e.get(i).instances.push(n)}e.forEach(({materials:n,instances:i})=>{const r=i.length,a=new nl(this.unitBoxGeom,n,r),o=[];for(let l=0;l<r;l++)a.setMatrixAt(l,i[l].matrix),o.push(i[l].bookData);a.userData={isInstancedBooks:!0,books:o},a.instanceMatrix.needsUpdate=!0,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,this.raycastableBooks.push(a),this.container.add(a)})}buildRollingLadders(){[{side:-1,z:6.5,height:4.4},{side:1,z:22.5,height:4.4}].forEach(({side:e,z:n,height:i})=>{const r=new Gt,a=.65,o=.24,l=new ot(.06,i,.1),c=new X(l,this.atlas.materials.darkOak);c.position.set(0,i/2,-a/2),c.castShadow=!0;const h=new X(l,this.atlas.materials.darkOak);h.position.set(0,i/2,a/2),h.castShadow=!0,r.add(c,h);const f=11,d=new Ge(.025,.025,a,6);for(let b=1;b<f;b++){const x=b/f*(i-.4),P=new X(d,this.atlas.materials.woodPlanks);P.position.set(0,x,0),P.rotation.x=Math.PI/2,P.castShadow=!0,r.add(P)}const u=new Ge(.06,.06,.04,8),g=new X(u,this.atlas.materials.brassMetal);g.position.set(0,.04,-a/2),g.rotation.z=Math.PI/2;const _=new X(u,this.atlas.materials.brassMetal);_.position.set(0,.04,a/2),_.rotation.z=Math.PI/2,r.add(g,_);const m=new oi(.06,.02,6,12,Math.PI),p=new X(m,this.atlas.materials.brassMetal);p.position.set(-e*.05,i-.1,-a/2),r.add(p);const E=e*(6.5-.5);r.position.set(E,0,n),r.rotation.z=e*o,this.freezeStatic(r),this.container.add(r)})}buildUpperBalconiesAndStairs(){const n=this.length-2,i=new ot(2.4,.25,n),r=new X(i,this.atlas.materials.woodPlanks);r.position.set(-5.6,4.5,16),r.receiveShadow=!0,this.freezeStatic(r);const a=new X(i,this.atlas.materials.woodPlanks);a.position.set(5.6,4.5,16),a.receiveShadow=!0,this.freezeStatic(a);const o=new ot(.12,.85,n),l=new X(o,this.atlas.materials.darkOak);l.position.set(-4.4,4.5+.55,16),l.castShadow=!0,this.freezeStatic(l);const c=new X(o,this.atlas.materials.darkOak);c.position.set(4.4,4.5+.55,16),c.castShadow=!0,this.freezeStatic(c),[0,6,12,18,24,30].forEach(p=>{const E=new ot(1.2,.8,.4),b=new X(E,this.atlas.materials.darkOak);b.position.set(-4.9,4.5-.4,p),b.castShadow=!0,this.freezeStatic(b);const x=new X(E,this.atlas.materials.darkOak);x.position.set(4.9,4.5-.4,p),x.castShadow=!0,this.freezeStatic(x),this.container.add(b,x)});const f=4.3,d=new ot(.7,f,n),u=new X(d,this.atlas.materials.darkOak);u.position.set(-6.6,4.5+f/2+.15,16),u.castShadow=!0,this.freezeStatic(u);const g=new X(d,this.atlas.materials.darkOak);g.position.set(6.6,4.5+f/2+.15,16),g.castShadow=!0,this.freezeStatic(g),this.container.add(r,a,l,c,u,g);const _=[5.3,6.1,6.9,7.7],m=[];[-1,1].forEach(p=>{const E=p*6.5;_.forEach((b,x)=>{const P=new ot(.65,.08,n),R=new X(P,this.atlas.materials.darkOak);R.position.set(E,b,16),R.receiveShadow=!0,this.freezeStatic(R),this.container.add(R);let A=-.8;const L=32.8;let y=0;for(;A<L;){const M=(p+5)*2e5+x*1e4+y*23,T=Je.createPrng(M),z=L-A;if(z<.07)break;if(T()<.12&&z>=.38){const H=2+Math.floor(T()*2),q=.28+T()*.06,$=.38+T()*.05,Z=.08+T()*.02,W=A+q/2;for(let tt=0;tt<H;tt++){const rt=M+tt*41,at=Je.generateBook(rt),At=b+.04+tt*Z+Z/2,wt=new Kt,K=new U(E-p*.06,At,W),it=new De(0,(T()-.5)*.08,0),et=new U($,Z,q);wt.compose(K,new Ke().setFromEuler(it),et),m.push({bookData:at,matrix:wt,isHorizontal:!0,side:p})}A+=q+.015}else{const H=.08+T()*.06,q=.52+T()*.2,$=.38+T()*.06,Z=A+H/2,W=b+.04+q/2,tt=Je.generateBook(M),rt=new Kt,at=new U(E-p*.06,W,Z),At=new De(T()<.16?(T()-.5)*.08:0,0,0),wt=new U($,q,H);rt.compose(at,new Ke().setFromEuler(At),wt),m.push({bookData:tt,matrix:rt,isHorizontal:!1,side:p}),A+=H+.004}y++}})}),this.createInstancedBookMeshes(m),this.buildStaircase(-4.8,2,4.5),this.buildStaircase(4.8,24,4.5)}buildStaircase(t,e,n){const r=n/12,a=.35,o=1.4;for(let l=0;l<12;l++){const c=new ot(o,r,a),h=new X(c,this.atlas.materials.woodPlanks);h.position.set(t,(l+.5)*r,e+l*a),h.castShadow=!0,h.receiveShadow=!0,this.freezeStatic(h),this.container.add(h)}}buildStudyDesksAndBenches(){[{x:-2.3,z:4,seed:101,title:"Tome of Astral Pyromancy"},{x:2.3,z:8,seed:202,title:"The Chronicles of Sunken Alderia"},{x:-2.3,z:12,seed:303,title:"Treatise on Living Stone & Mortar"},{x:2.3,z:18,seed:404,title:"The Sacred Rites of the Golden Lion"},{x:-2.3,z:24,seed:505,title:"Secrets of the Clockwork Heavens"},{x:2.3,z:30,seed:606,title:"The Lost Gospel of Veritas"}].forEach(e=>{const n=new Gt;n.position.set(e.x,0,e.z);const i=new X(new ot(1.8,.12,1),this.atlas.materials.darkOak);i.position.set(0,.85,0),i.castShadow=!0,i.receiveShadow=!0,n.add(i);const r=new ot(.12,.85,.12);[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([L,y])=>{const M=new X(r,this.atlas.materials.darkOak);M.position.set(L,.425,y),M.castShadow=!0,n.add(M)});const o=new X(new ot(1.6,.08,.45),this.atlas.materials.darkOak);o.position.set(0,.5,-.75),o.castShadow=!0;const l=new X(new ot(.1,.5,.35),this.atlas.materials.darkOak);l.position.set(-.6,.25,-.75);const c=new X(new ot(.1,.5,.35),this.atlas.materials.darkOak);c.position.set(.6,.25,-.75),n.add(o,l,c);const h=new X(new Ge(.06,.08,.04,8),this.atlas.materials.brassMetal);h.position.set(-.65,.93,.25);const f=new X(new Ge(.03,.03,.22,8),new Ft({color:16775910,roughness:.4}));f.position.set(-.65,1.06,.25);const d=new X(new Bi(.02,.06,6),new je({color:16755234}));d.position.set(-.65,1.2,.25),n.add(h,f,d);const u=new nn(16762214,4.2,14,1.1);u.position.set(-.65,1.25,.25),u.castShadow=!0,u.shadow.bias=-.002,u.shadow.mapSize.width=256,u.shadow.mapSize.height=256,n.add(u),this.candleSconces.push({light:u,baseIntensity:4.2,flickerSpeed:4+Math.random()*3,flickerPhase:Math.random()*Math.PI*2});const g=Je.generateBook(e.seed,e.title),_=new ot(.55,.06,.38),m=ms.getBookMaterials(g,!0,1),p=new X(_,m);p.position.set(0,.94,0),p.rotation.y=(Math.random()-.5)*.2,p.castShadow=!0,p.userData={isBook:!0,bookData:g,originalColor:g.coverColor},this.raycastableBooks.push(p),n.add(p);const E=Je.generateBook(e.seed+1e3),b=ms.getBookMaterials(E,!0,1),x=new X(new ot(.28,.06,.38),b);x.position.set(.6,.94,-.2),x.userData={isBook:!0,bookData:E,originalColor:E.coverColor},this.raycastableBooks.push(x);const P=Je.generateBook(e.seed+2e3),R=ms.getBookMaterials(P,!0,1),A=new X(new ot(.26,.05,.35),R);A.position.set(.6,.995,-.2),A.rotation.y=.18,A.userData={isBook:!0,bookData:P,originalColor:P.coverColor},this.raycastableBooks.push(A),n.add(x,A),this.container.add(n)})}buildCelestialGlobe(){const t=new Gt;t.position.set(0,0,14);const e=new Ge(1,1.15,.6,8),n=new X(e,this.atlas.materials.darkOak);n.position.set(0,.3,0),n.castShadow=!0,n.receiveShadow=!0,this.freezeStatic(n),t.add(n);const i=new oi(1,.07,8,24),r=new X(i,this.atlas.materials.brassMetal);r.position.set(0,1.45,0),r.rotation.y=Math.PI/4,r.castShadow=!0,t.add(r);const a=new ha(.82,16,16);this.globeSphereMesh=new X(a,this.atlas.materials.globeTexture),this.globeSphereMesh.position.set(0,1.45,0),this.globeSphereMesh.castShadow=!0,t.add(this.globeSphereMesh);const o=new nn(16771757,3.2,12,1.1);o.position.set(0,1.45,0),t.add(o);const l=Je.generateBook(99999,"The Celestial Atlas of the Spheres");this.globeSphereMesh.userData={isBook:!0,bookData:l,originalColor:"#f7d583"},this.raycastableBooks.push(this.globeSphereMesh),this.container.add(t)}buildGrandChandeliers(){[4,16,28].forEach((e,n)=>{const i=new Gt;i.position.set(0,8,e);const r=new Ge(.04,.04,5,6),a=new X(r,this.atlas.materials.iron);a.position.set(0,2.5,0),i.add(a);const o=new X(new oi(1.7,.08,8,20),this.atlas.materials.iron);o.rotation.x=Math.PI/2,i.add(o);const l=new X(new oi(.95,.06,8,16),this.atlas.materials.iron);l.rotation.x=Math.PI/2,l.position.set(0,.45,0),i.add(l);for(let h=0;h<8;h++){const f=h/8*Math.PI*2,d=Math.cos(f)*1.7,u=Math.sin(f)*1.7,g=new X(new Ge(.04,.04,.28,6),new Ft({color:16775910,roughness:.4}));g.position.set(d,.14,u),i.add(g);const _=new X(new Bi(.03,.08,6),new je({color:16755234}));_.position.set(d,.32,u),i.add(_)}const c=new nn(16758861,5.8,26,1.1);c.position.set(0,.3,0),c.castShadow=!0,c.shadow.bias=-.003,c.shadow.mapSize.width=512,c.shadow.mapSize.height=512,i.add(c),this.chandeliers.push({group:i,light:c,baseIntensity:5.8,flickerSpeed:3.5+n*.8,flickerPhase:n*1.5}),this.container.add(i)})}buildWallCandleSconces(){[3,9,15,21,27,33].forEach((e,n)=>{[-1,1].forEach(i=>{const r=i*4.3,a=2.4,o=new Gt;o.position.set(r-i*.45,a,e);const l=new ot(.2,.08,.08),c=new X(l,this.atlas.materials.brassMetal);o.add(c);const h=new Ge(.035,.035,.25,6),f=new X(h,new Ft({color:16775910,roughness:.4}));f.position.set(-i*.1,.15,0),o.add(f);const d=new X(new Bi(.025,.06,6),new je({color:16755234}));d.position.set(-i*.1,.3,0),o.add(d);const u=new nn(16760405,3.6,15,1.1);u.position.set(-i*.1,.32,0),u.castShadow=!0,u.shadow.bias=-.002,u.shadow.mapSize.width=256,u.shadow.mapSize.height=256,o.add(u),this.candleSconces.push({light:u,baseIntensity:3.6,flickerSpeed:4.5+n*.6,flickerPhase:n*.9+i}),this.container.add(o)})})}buildHeraldicBannersAndPlaques(){const t=[5,11,17,23,29],e=new Ce(1.1,2.4);t.forEach((n,i)=>{const r=i%2===0?this.atlas.materials.heraldicLionBanner:this.atlas.materials.heraldicCrossBanner,a=new X(e,r);a.position.set(-4.34,3.4,n),a.rotation.y=Math.PI/2,this.freezeStatic(a);const o=new X(e,r);o.position.set(4.34,3.4,n),o.rotation.y=-Math.PI/2,this.freezeStatic(o),this.container.add(a,o)})}buildStainedGlassAndVolumetricLightRays(){const t=new Ce(5.2,8.5),e=new X(t,this.atlas.materials.stainedGlassGothic);e.position.set(0,7.5,35.4),e.rotation.y=Math.PI,this.freezeStatic(e),this.container.add(e);const n=new je({color:16772822,transparent:!0,opacity:.32,side:Ut,depthWrite:!1,blending:Es}),i=new Ce(4.5,24),r=new X(i,n);r.position.set(0,6,22),r.rotation.set(-.72,0,0),this.freezeStatic(r);const a=new X(i,n);a.position.set(-2.8,6,22),a.rotation.set(-.72,-.15,-.1),this.freezeStatic(a);const o=new X(i,n);o.position.set(2.8,6,22),o.rotation.set(-.72,.15,.1),this.freezeStatic(o);const l=new X(i,n);l.position.set(0,6,22),l.rotation.set(-.72,0,Math.PI/2),this.freezeStatic(l),this.container.add(r,a,o,l)}buildFloatingDustParticles(){const e=new Float32Array(960);for(let r=0;r<320;r++)e[r*3+0]=(Math.random()-.5)*12,e[r*3+1]=.5+Math.random()*10.5,e[r*3+2]=(Math.random()-.5)*36+16;const n=new we;n.setAttribute("position",new Ve(e,3));const i=new il({color:16773324,size:.14,transparent:!0,opacity:.85,blending:Es,depthWrite:!1});this.dustParticles=new Qc(n,i),this.container.add(this.dustParticles)}getElevation(t,e,n=0){if(Math.abs(t- -4.8)<.85&&e>=2&&e<=6.2){const i=(e-2)/4.2;return Math.max(0,Math.min(4.5,i*4.5))}if(Math.abs(t-4.8)<.85&&e>=24&&e<=28.2){const i=(e-24)/4.199999999999999;return Math.max(0,Math.min(4.5,i*4.5))}return n>=3&&(t<=-4.4||t>=4.4)&&e>=-3&&e<=35?4.5:0}isBlocked(t,e,n=0){if(t<=-6.2||t>=6.2||e<=-3.2||e>=35.2)return!0;if(n<3){const i=[0,6,12,18,24,30];for(const l of i)if(Math.abs(e-l)<.65&&(Math.abs(t- -4.3)<.65||Math.abs(t-4.3)<.65))return!0;const r=t-0,a=e-14;if(r*r+a*a<1.1*1.1)return!0;const o=[4,8,12,18,24,30];for(const l of o)if(Math.abs(e-l)<.75&&(Math.abs(t- -2.3)<1.1||Math.abs(t-2.3)<1.1))return!0}return!1}update(t){if(this.globeSphereMesh&&(this.globeSphereMesh.rotation.y=t*.25),this.chandeliers.forEach(e=>{const n=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.35+Math.cos(t*8)*.15;e.light.intensity=Math.max(3.5,e.baseIntensity+n)}),this.candleSconces.forEach(e=>{const n=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.25+Math.sin(t*11)*.1;e.light.intensity=Math.max(2.2,e.baseIntensity+n)}),this.dustParticles){const e=this.dustParticles.geometry.attributes.position,n=e.count;for(let i=0;i<n;i++){let r=e.getY(i)-.003;r<.5&&(r=11),e.setY(i,r);const a=e.getX(i)+Math.sin(t*.5+i)*.002;e.setX(i,a)}e.needsUpdate=!0}}}class lm{group;bodyGroup;fpsViewmodelGroup;camera;flashlightSpot;flashlightTarget;flashlightForwardLight;flashlightBulbLight;fpsFlashlight;fpsLantern;fpsLanternLight;fpsSword;fpsShield;leftLegPivot;rightLegPivot;leftArmPivot;rightArmPivot;torsoMesh;leftPauldron;rightPauldron;headGroup;tppFlashlight;tppLantern;tppLanternLight;tppSword;tppShield;isFirstPerson=!1;activeItemId="flashlight";baseLanternIntensity=5;walkTime=0;constructor(t,e){this.camera=e,this.group=new Gt,this.group.name="PlayerCharacter",this.flashlightSpot=new sh(16777215,48,160,Math.PI/3.2,.25,.85),this.flashlightSpot.position.set(0,0,0),this.flashlightSpot.castShadow=!0,this.flashlightSpot.shadow.bias=-.001,this.flashlightSpot.shadow.mapSize.width=1024,this.flashlightSpot.shadow.mapSize.height=1024,this.flashlightTarget=new he,this.flashlightTarget.name="FlashlightTarget",this.flashlightTarget.position.set(0,0,-50),this.flashlightSpot.target=this.flashlightTarget,this.flashlightForwardLight=new nn(16777215,6,45,1),this.flashlightForwardLight.position.set(0,0,-6),this.flashlightBulbLight=new nn(16777215,4.5,16,1.1),this.flashlightBulbLight.position.set(.24,-.2,-.42),this.fpsViewmodelGroup=new Gt,this.fpsViewmodelGroup.name="FPS_Viewmodel",this.fpsFlashlight=new Gt,this.fpsFlashlight.position.set(.24,-.2,-.42),this.fpsFlashlight.rotation.set(.04,-.04,0);const n=new X(new ot(.08,.08,.28),t.materials.iron),i=new X(new ot(.12,.12,.08),t.materials.iron);i.position.set(0,0,-.18);const r=new X(new ot(.1,.1,.02),new je({color:16777215}));r.position.set(0,0,-.22),this.fpsFlashlight.add(n,i,r),this.fpsViewmodelGroup.add(this.fpsFlashlight),this.fpsLantern=new Gt,this.fpsLantern.position.set(.28,-.22,-.46);const a=new X(new ot(.14,.22,.14),t.materials.iron),o=new X(new ot(.1,.16,.1),new je({color:16769674}));this.fpsLantern.add(a,o),this.fpsLanternLight=new nn(16764518,5,30,1.05),this.fpsLanternLight.position.set(0,0,0),this.fpsLanternLight.castShadow=!0,this.fpsLantern.add(this.fpsLanternLight),this.fpsViewmodelGroup.add(this.fpsLantern),this.fpsSword=new Gt,this.fpsSword.position.set(.26,-.24,-.42),this.fpsSword.rotation.set(-.45,.2,-.1);const l=new X(new ot(.06,.75,.03),t.materials.iron);l.position.set(0,.38,0);const c=new X(new ot(.22,.04,.06),t.materials.iron),h=new X(new ot(.05,.18,.05),t.materials.woodBeam);h.position.set(0,-.1,0),this.fpsSword.add(l,c,h),this.fpsViewmodelGroup.add(this.fpsSword),this.fpsShield=new Gt,this.fpsShield.position.set(-.28,-.22,-.42),this.fpsShield.rotation.set(.1,.35,-.1);const f=new X(new ot(.48,.6,.05),t.materials.woodPlanks),d=new X(new ot(.15,.15,.08),t.materials.iron);d.position.set(0,0,.03),this.fpsShield.add(f,d),this.fpsViewmodelGroup.add(this.fpsShield),this.camera&&(this.camera.add(this.fpsViewmodelGroup),this.camera.add(this.flashlightSpot),this.camera.add(this.flashlightTarget),this.camera.add(this.flashlightForwardLight),this.camera.add(this.flashlightBulbLight)),this.bodyGroup=new Gt,this.bodyGroup.name="TPP_PlayerBody",this.group.add(this.bodyGroup);const u=t.materials.iron,g=new Ft({color:2237998,roughness:.8,side:Ut}),_=new Ft({color:14262374,roughness:.6,side:Ut}),m=new Ft({color:1775650,roughness:.9,side:Ut});this.leftLegPivot=new Gt,this.leftLegPivot.position.set(-.16,.7,0);const p=new X(new ot(.2,.7,.22),g);p.position.set(0,-.35,0),p.castShadow=!0,p.receiveShadow=!0,this.leftLegPivot.add(p),this.bodyGroup.add(this.leftLegPivot),this.rightLegPivot=new Gt,this.rightLegPivot.position.set(.16,.7,0);const E=new X(new ot(.2,.7,.22),g);E.position.set(0,-.35,0),E.castShadow=!0,E.receiveShadow=!0,this.rightLegPivot.add(E),this.bodyGroup.add(this.rightLegPivot),this.torsoMesh=new X(new ot(.52,.7,.36),u),this.torsoMesh.position.set(0,1.05,0),this.torsoMesh.castShadow=!0,this.torsoMesh.receiveShadow=!0,this.bodyGroup.add(this.torsoMesh);const b=new ot(.22,.2,.4);this.leftPauldron=new X(b,u),this.leftPauldron.position.set(-.35,1.35,0),this.leftPauldron.castShadow=!0,this.rightPauldron=new X(b,u),this.rightPauldron.position.set(.35,1.35,0),this.rightPauldron.castShadow=!0,this.bodyGroup.add(this.leftPauldron,this.rightPauldron);const x=new ot(.16,.58,.18);this.leftArmPivot=new Gt,this.leftArmPivot.position.set(-.36,1.35,0);const P=new X(x,g);P.position.set(0,-.29,0),P.castShadow=!0,this.leftArmPivot.add(P),this.bodyGroup.add(this.leftArmPivot),this.rightArmPivot=new Gt,this.rightArmPivot.position.set(.36,1.35,0);const R=new X(x,g);R.position.set(0,-.29,0),R.castShadow=!0,this.rightArmPivot.add(R),this.bodyGroup.add(this.rightArmPivot),this.headGroup=new Gt,this.headGroup.position.set(0,1.62,0);const A=new X(new ot(.38,.38,.38),_);A.castShadow=!0;const L=new X(new ot(.42,.24,.42),m);L.position.set(0,.14,-.02),L.castShadow=!0,this.headGroup.add(A,L),this.bodyGroup.add(this.headGroup),this.tppFlashlight=new Gt,this.tppFlashlight.position.set(.42,.85,.25);const y=new X(new ot(.12,.12,.36),t.materials.iron);y.castShadow=!0;const M=new X(new ot(.16,.16,.1),t.materials.iron);M.position.set(0,0,-.22),M.castShadow=!0;const T=new X(new ot(.13,.13,.02),new je({color:16777215}));T.position.set(0,0,-.27),this.tppFlashlight.add(y,M,T),this.bodyGroup.add(this.tppFlashlight),this.tppLantern=new Gt,this.tppLantern.position.set(.44,.85,.3);const z=new X(new ot(.16,.26,.16),t.materials.iron),B=new X(new ot(.12,.18,.12),new je({color:16769674}));this.tppLantern.add(z,B),this.tppLanternLight=new nn(16764518,5,30,1.05),this.tppLanternLight.position.set(0,0,0),this.tppLanternLight.castShadow=!0,this.tppLantern.add(this.tppLanternLight),this.bodyGroup.add(this.tppLantern),this.tppSword=new Gt,this.tppSword.position.set(.42,.85,.35),this.tppSword.rotation.set(-.3,0,.2);const H=new X(new ot(.08,.85,.04),t.materials.iron);H.position.set(0,.42,0),H.castShadow=!0;const q=new X(new ot(.26,.05,.08),t.materials.iron),$=new X(new ot(.06,.2,.06),t.materials.woodBeam);$.position.set(0,-.12,0),this.tppSword.add(H,q,$),this.bodyGroup.add(this.tppSword),this.tppShield=new Gt,this.tppShield.position.set(-.46,.95,.15),this.tppShield.rotation.set(0,-.3,0);const Z=new X(new ot(.55,.7,.06),t.materials.woodPlanks);Z.castShadow=!0;const W=new X(new ot(.18,.18,.1),t.materials.iron);W.position.set(0,0,.04),this.tppShield.add(Z,W),this.bodyGroup.add(this.tppShield),this.setActiveItem("flashlight"),this.setFirstPerson(!0)}attachToCamera(t){this.camera=t,this.fpsViewmodelGroup.parent!==t&&(t.add(this.fpsViewmodelGroup),t.add(this.flashlightSpot),t.add(this.flashlightTarget),t.add(this.flashlightForwardLight),t.add(this.flashlightBulbLight))}setActiveItem(t){this.activeItemId=t;const e=t==="flashlight",n=t==="lantern",i=t==="sword",r=t==="shield";this.fpsFlashlight.visible=e,this.fpsLantern.visible=n,this.fpsSword.visible=i,this.fpsShield.visible=r||i,this.tppFlashlight.visible=e,this.tppLantern.visible=n,this.tppSword.visible=i,this.tppShield.visible=r||i,this.flashlightSpot.visible=e,this.flashlightForwardLight.visible=e,this.flashlightBulbLight.visible=e,this.fpsLanternLight.visible=n&&this.isFirstPerson,this.tppLanternLight.visible=n&&!this.isFirstPerson}setFirstPerson(t){this.isFirstPerson=t,this.fpsViewmodelGroup.visible=t,this.bodyGroup.visible=!t,this.setActiveItem(this.activeItemId)}updateLightAim(t,e){}updateAnimation(t,e,n){const i=Number.isFinite(e)&&e>0?Math.min(e,.1):.016,r=Number.isFinite(n)&&n>0?Math.min(n,3):1;if(t){this.walkTime+=i*r*10;const a=Math.sin(this.walkTime)*.65;this.leftLegPivot.rotation.x=a,this.rightLegPivot.rotation.x=-a,this.leftArmPivot.rotation.x=-a*.7,this.rightArmPivot.rotation.x=a*.7,this.bodyGroup.position.y=Math.abs(Math.sin(this.walkTime*2))*.05;const o=-Math.abs(Math.cos(this.walkTime))*.012,l=Math.sin(this.walkTime)*.012;this.fpsViewmodelGroup.position.set(l,o,0),this.tppFlashlight.rotation.z=Math.sin(this.walkTime)*.15,this.tppFlashlight.position.y=.85+Math.cos(this.walkTime)*.03,this.tppLantern.rotation.z=Math.sin(this.walkTime)*.2,this.tppLantern.position.y=.85+Math.cos(this.walkTime)*.03}else this.leftLegPivot.rotation.x*=.82,this.rightLegPivot.rotation.x*=.82,this.leftArmPivot.rotation.x*=.82,this.rightArmPivot.rotation.x*=.82,this.bodyGroup.position.y*=.82,this.fpsViewmodelGroup.position.lerp(new U(0,0,0),10*i),this.tppFlashlight.rotation.z*=.82,this.tppFlashlight.position.y=.85,this.tppLantern.rotation.z*=.82,this.tppLantern.position.y=.85;if(this.activeItemId==="lantern"){const a=Math.sin(this.walkTime*3)*.25,o=this.baseLanternIntensity+a;this.isFirstPerson?this.fpsLanternLight.intensity=o:this.tppLanternLight.intensity=o}}}class cm{model;position=new U(0,0,0);velocity=new U(0,0,0);moveSpeed=5.5;sprintMultiplier=1.5;acceleration=18;deceleration=22;maxStepHeight=1.05;playerRadius=.35;keys={};isMoving=!1;facingAngle=0;targetFacingAngle=0;perspective="FPP";isInputPaused=!1;surfaceManager;dungeonManager;libraryManager;currentMode="surface";constructor(t){this.model=t,this.bindKeyboard()}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}setPerspective(t){this.perspective=t,this.model.setFirstPerson(t==="FPP")}setPosition(t,e,n){this.position.set(t,e,n),this.model.group.position.copy(this.position)}getGamepadInput(){const t=navigator.getGamepads?navigator.getGamepads():[],e=Array.from(t).find(r=>r!==null&&r.connected);if(!e)return{moveX:0,moveZ:0,rightStickX:0,rightStickY:0,sprint:!1,jump:!1,switchMode:!1,switchView:!1};const n=.15,i=r=>Math.abs(r)>n?r:0;return{moveX:i(e.axes[0]??0),moveZ:i(e.axes[1]??0),rightStickX:i(e.axes[2]??0),rightStickY:i(e.axes[3]??0),sprint:!!e.buttons[0]?.pressed,jump:!!e.buttons[1]?.pressed,switchMode:!!e.buttons[2]?.pressed,switchView:!!e.buttons[3]?.pressed}}update(t,e){const n=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;if(this.isInputPaused){this.velocity.x=Oe.damp(this.velocity.x,0,this.deceleration,n),this.velocity.z=Oe.damp(this.velocity.z,0,this.deceleration,n),this.isMoving=!1,this.applyMovementAndCollisions(n),this.model.group.position.copy(this.position),this.model.updateAnimation(!1,n,0);return}let i=0,r=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(i-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(i+=1);let a=!!(this.keys.ShiftLeft||this.keys.ShiftRight);const o=this.getGamepadInput();Math.hypot(o.moveX,o.moveZ)>.1&&(i=o.moveX,r=o.moveZ),o.sprint&&(a=!0);const l=Math.hypot(i,r);l>1&&(i/=l,r/=l),this.isMoving=l>.05;const c=-Math.sin(e),h=-Math.cos(e),f=Math.cos(e),d=-Math.sin(e),u=f*i+c*-r,g=d*i+h*-r,_=this.isMoving?this.moveSpeed*(a?this.sprintMultiplier:1):0,m=u*_,p=g*_,E=this.isMoving?this.acceleration:this.deceleration;if(this.velocity.x=Oe.damp(this.velocity.x,m,E,n),this.velocity.z=Oe.damp(this.velocity.z,p,E,n),this.applyMovementAndCollisions(n),this.perspective==="FPP")this.facingAngle=e,this.model.group.rotation.y=e;else{if(this.isMoving){this.targetFacingAngle=Math.atan2(this.velocity.x,this.velocity.z);let x=this.targetFacingAngle-this.facingAngle;for(;x<-Math.PI;)x+=Math.PI*2;for(;x>Math.PI;)x-=Math.PI*2;this.facingAngle+=x*Math.min(1,14*n)}this.model.group.rotation.y=this.facingAngle}this.model.group.position.copy(this.position);const b=Math.hypot(this.velocity.x,this.velocity.z)/this.moveSpeed;this.model.updateAnimation(this.isMoving,n,b)}getFootprintGroundHeight(t,e,n){if(!this.surfaceManager)return 0;const i=this.playerRadius,r=i*.7071,a=[{x:t,z:e},{x:t,z:e-i},{x:t,z:e+i},{x:t+i,z:e},{x:t-i,z:e},{x:t+r,z:e-r},{x:t-r,z:e-r},{x:t+r,z:e+r},{x:t-r,z:e+r}];let o=-1/0;const l=this.surfaceManager.getElevation(t,e);for(const c of a){const h=this.surfaceManager.getElevation(c.x,c.z);h<=n+this.maxStepHeight+.1&&h>o&&(o=h)}return o===-1/0?l:o}isWallBlocked(t,e,n){if(!this.surfaceManager)return!1;const i=this.playerRadius,r=i*.7071,a=[{x:t,z:e-i},{x:t,z:e+i},{x:t+i,z:e},{x:t-i,z:e},{x:t+r,z:e-r},{x:t-r,z:e-r},{x:t+r,z:e+r},{x:t-r,z:e+r}];for(const o of a)if(this.surfaceManager.getElevation(o.x,o.z)>n+this.maxStepHeight+.1)return!0;return!1}applyMovementAndCollisions(t){const e=this.velocity.x*t,n=this.velocity.z*t;if(this.currentMode==="surface"&&this.surfaceManager){const i=this.position.x+e;this.isWallBlocked(i,this.position.z,this.position.y)||(this.position.x=i);const a=this.position.z+n;this.isWallBlocked(this.position.x,a,this.position.y)||(this.position.z=a);const l=this.getFootprintGroundHeight(this.position.x,this.position.z,this.position.y);this.position.y=Oe.damp(this.position.y,l,20,t),this.position.y<l&&(this.position.y=l)}else if(this.currentMode==="dungeon"&&this.dungeonManager){const i=this.playerRadius,r=this.position.x+e;this.dungeonManager.isSolid(r-i,this.position.z-i)||this.dungeonManager.isSolid(r+i,this.position.z-i)||this.dungeonManager.isSolid(r-i,this.position.z+i)||this.dungeonManager.isSolid(r+i,this.position.z+i)||(this.position.x=r);const o=this.position.z+n;this.dungeonManager.isSolid(this.position.x-i,o-i)||this.dungeonManager.isSolid(this.position.x+i,o-i)||this.dungeonManager.isSolid(this.position.x-i,o+i)||this.dungeonManager.isSolid(this.position.x+i,o+i)||(this.position.z=o),this.position.y=0}else if(this.currentMode==="library"&&this.libraryManager){const i=this.playerRadius,r=this.position.x+e;this.libraryManager.getElevation(r,this.position.z,this.position.y)>this.position.y+this.maxStepHeight||this.libraryManager.isBlocked(r-i,this.position.z,this.position.y)||this.libraryManager.isBlocked(r+i,this.position.z,this.position.y)||(this.position.x=r);const c=this.position.z+n;this.libraryManager.getElevation(this.position.x,c,this.position.y)>this.position.y+this.maxStepHeight||this.libraryManager.isBlocked(this.position.x,c-i,this.position.y)||this.libraryManager.isBlocked(this.position.x,c+i,this.position.y)||(this.position.z=c);const u=this.libraryManager.getElevation(this.position.x,this.position.z,this.position.y);(u<=this.position.y+this.maxStepHeight+.1||u<this.position.y)&&(this.position.y=Oe.damp(this.position.y,u,20,t),this.position.y<u&&(this.position.y=u))}}}const hm=[{id:"flashlight",name:"High-Power Flashlight",icon:"🔦",description:"Ultra-bright directional beam"},{id:"lantern",name:"Brass Lantern",icon:"🏮",description:"Warm 360° omnidirectional light"},{id:"sword",name:"Iron Broadsword",icon:"⚔️",description:"Hand-forged knight blade"},{id:"shield",name:"Oak Shield",icon:"🛡️",description:"Reinforced iron-banded shield"},{id:"potion",name:"Health Elixir",icon:"🧪",count:3,description:"Restores vitality and stamina"},{id:"compass",name:"Golden Compass",icon:"🧭",description:"Points towards dungeon center"},{id:"key",name:"Dungeon Key",icon:"🔑",count:1,description:"Opens heavy iron-bound doors"},{id:"bread",name:"Field Rations",icon:"🍞",count:5,description:"Hearty adventurer bread"}];class dm{root;callbacks;modeBtn;viewBadgeEl;posValueEl;chunkValueEl;yawValueEl;fpsValueEl;gamepadBadgeEl;hotbarLabelEl;hotbarSlotsContainer;bookHoverBadgeEl;hoverTitleEl;hoverCategoryEl;musicToastEl;musicTitleEl;musicSubtitleEl;musicToastTimer=null;items=[...hm];selectedIndex=-1;frameCount=0;lastFpsUpdate=performance.now();constructor(t,e){this.root=t,this.callbacks=e,this.buildDOM()}buildDOM(){this.root.innerHTML=`
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
    `,this.modeBtn=this.root.querySelector("#btn-mode-toggle"),this.viewBadgeEl=this.root.querySelector("#hud-view-badge"),this.posValueEl=this.root.querySelector("#tel-pos"),this.chunkValueEl=this.root.querySelector("#tel-chunk"),this.yawValueEl=this.root.querySelector("#tel-yaw"),this.fpsValueEl=this.root.querySelector("#tel-fps"),this.gamepadBadgeEl=this.root.querySelector("#tel-gamepad"),this.hotbarLabelEl=this.root.querySelector("#hotbar-item-label"),this.hotbarSlotsContainer=this.root.querySelector("#hotbar-slots"),this.bookHoverBadgeEl=this.root.querySelector("#hud-book-hover-badge"),this.hoverTitleEl=this.root.querySelector("#hover-book-title"),this.hoverCategoryEl=this.root.querySelector("#hover-book-category"),this.musicToastEl=this.root.querySelector("#hud-music-toast"),this.musicTitleEl=this.root.querySelector("#music-title"),this.musicSubtitleEl=this.root.querySelector("#music-subtitle"),this.modeBtn.addEventListener("click",()=>{this.callbacks.onToggleMode()}),this.root.querySelector("#btn-fullscreen").addEventListener("click",()=>{this.callbacks.onToggleFullscreen()}),this.renderHotbar(),this.setPerspective("FPP")}showBookHover(t){this.hoverTitleEl.textContent=t.title,this.hoverCategoryEl.textContent=`${t.classification.toUpperCase()} • ${t.subgenre.toUpperCase()}`,this.bookHoverBadgeEl.classList.remove("hidden")}hideBookHover(){this.bookHoverBadgeEl.classList.add("hidden")}showNowPlaying(t,e){this.musicTitleEl.textContent=t,this.musicSubtitleEl.textContent=e,this.musicToastEl.classList.remove("hidden"),this.musicToastTimer!==null&&window.clearTimeout(this.musicToastTimer),this.musicToastTimer=window.setTimeout(()=>{this.musicToastEl.classList.add("hidden")},5500)}renderHotbar(){this.hotbarSlotsContainer.innerHTML="",this.items.forEach((t,e)=>{const n=document.createElement("div");n.className=`hotbar-slot ${e===this.selectedIndex?"active":""}`,n.title=`${t.name}: ${t.description} (Press ${e+1} to toggle)`,n.innerHTML=`
        <span class="slot-number">${e+1}</span>
        <span class="slot-icon">${t.icon}</span>
        ${t.count&&t.count>1?`<span class="slot-count">${t.count}</span>`:""}
      `,n.addEventListener("click",i=>{i.stopPropagation(),this.selectSlot(e)}),this.hotbarSlotsContainer.appendChild(n)}),this.updateActiveLabel()}selectSlot(t){if(t<0||t>=this.items.length)return;if(this.selectedIndex===t){this.selectedIndex=-1,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach(r=>r.classList.remove("active")),this.updateActiveLabel(),this.callbacks.onSelectItem&&this.callbacks.onSelectItem(null,-1);return}this.selectedIndex=t,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach((i,r)=>{r===t?i.classList.add("active"):i.classList.remove("active")}),this.updateActiveLabel();const n=this.items[t];this.callbacks.onSelectItem&&this.callbacks.onSelectItem(n,t)}selectNextSlot(){const t=this.selectedIndex===-1?0:(this.selectedIndex+1)%this.items.length;this.selectSlot(t)}selectPrevSlot(){const t=this.selectedIndex===-1?this.items.length-1:(this.selectedIndex-1+this.items.length)%this.items.length;this.selectSlot(t)}getSelectedItem(){return this.selectedIndex<0||this.selectedIndex>=this.items.length?null:this.items[this.selectedIndex]}updateActiveLabel(){const t=this.getSelectedItem();t?(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent=`${t.icon} ${t.name.toUpperCase()}`,this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop")):(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent="✋ UNEQUIPPED (EMPTY HANDS)",this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop"))}setMode(t){t==="surface"?(this.modeBtn.innerHTML="<span>☀️ MAP: SURFACE</span>",this.modeBtn.classList.remove("active-mode")):t==="dungeon"?(this.modeBtn.innerHTML="<span>🏰 MAP: DUNGEON</span>",this.modeBtn.classList.add("active-mode")):(this.modeBtn.innerHTML="<span>📚 MAP: GRAND LIBRARY</span>",this.modeBtn.classList.add("active-mode"))}setPerspective(t){this.viewBadgeEl.textContent=t}updateTelemetry(t,e,n,i,r,a){this.posValueEl.textContent=`X: ${t.toFixed(1)} Y: ${e.toFixed(1)} Z: ${n.toFixed(1)}`,this.chunkValueEl.textContent=`[${i}, ${r}]`;let o=a*180/Math.PI;o=(o%360+360)%360,this.yawValueEl.textContent=`${o.toFixed(0)}°`,this.frameCount++;const l=performance.now();if(l-this.lastFpsUpdate>=500){const f=Math.round(this.frameCount*1e3/(l-this.lastFpsUpdate));this.fpsValueEl.textContent=`${f} FPS`,this.frameCount=0,this.lastFpsUpdate=l}const c=navigator.getGamepads?navigator.getGamepads():[];Array.from(c).some(f=>f!==null&&f.connected)?(this.gamepadBadgeEl.textContent="CONNECTED",this.gamepadBadgeEl.className="gamepad-badge connected"):(this.gamepadBadgeEl.textContent="DISCONNECTED",this.gamepadBadgeEl.className="gamepad-badge disconnected")}}class um{element;callbacks;isOpen=!1;constructor(t){this.callbacks=t,this.buildDOM()}buildDOM(){this.element=document.createElement("div"),this.element.id="settings-modal-overlay",this.element.className="modal-overlay",this.element.style.display="none";let t=70,e=1,n=70;try{const i=localStorage.getItem("retro3d_fov");i&&(t=Math.max(40,Math.min(100,parseInt(i,10)||70)));const r=localStorage.getItem("retro3d_sens");r&&(e=Math.max(.5,Math.min(3,parseFloat(r)||1)));const a=localStorage.getItem("retro3d_music_vol");a&&(n=Math.max(0,Math.min(100,parseInt(a,10)||70)))}catch{}this.element.innerHTML=`
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
              <span id="val-music-vol" class="setting-value-badge">${n}%</span>
            </div>
            <input id="slider-music-vol" type="range" min="0" max="100" step="5" value="${n}" class="retro-slider" />
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
    `,document.body.appendChild(this.element),this.bindEvents()}bindEvents(){const t=this.element.querySelector("#btn-fpp"),e=this.element.querySelector("#btn-tpp"),n=this.element.querySelector("#slider-fov"),i=this.element.querySelector("#val-fov"),r=this.element.querySelector("#slider-sensitivity"),a=this.element.querySelector("#val-sensitivity"),o=this.element.querySelector("#slider-music-vol"),l=this.element.querySelector("#val-music-vol"),c=this.element.querySelector("#modal-select-resolution"),h=this.element.querySelector("#btn-modal-close-x"),f=this.element.querySelector("#btn-resume-game");t.addEventListener("click",()=>{t.classList.add("active-mode"),e.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("FPP")}),e.addEventListener("click",()=>{e.classList.add("active-mode"),t.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("TPP")}),n.addEventListener("input",()=>{const d=parseInt(n.value,10);i.textContent=`${d}°`;try{localStorage.setItem("retro3d_fov",String(d))}catch{}this.callbacks.onFovChange(d)}),r.addEventListener("input",()=>{const d=parseFloat(r.value);a.textContent=`${d.toFixed(1)}x`;try{localStorage.setItem("retro3d_sens",String(d))}catch{}this.callbacks.onSensitivityChange(d)}),o.addEventListener("input",()=>{const d=parseInt(o.value,10);l.textContent=`${d}%`;try{localStorage.setItem("retro3d_music_vol",String(d))}catch{}this.callbacks.onMusicVolumeChange&&this.callbacks.onMusicVolumeChange(d/100)}),c.addEventListener("change",()=>{const[d,u]=c.value.split("x").map(Number);this.callbacks.onResolutionChange(d,u)}),h.addEventListener("click",()=>this.hide()),f.addEventListener("click",()=>this.hide()),this.element.addEventListener("click",d=>{d.target===this.element&&this.hide()})}setPerspectiveUI(t){const e=this.element.querySelector("#btn-fpp"),n=this.element.querySelector("#btn-tpp");t==="FPP"?(e?.classList.add("active-mode"),n?.classList.remove("active-mode")):(n?.classList.add("active-mode"),e?.classList.remove("active-mode"))}show(){this.isOpen=!0,this.element.style.display="flex"}hide(){this.isOpen&&(this.isOpen=!1,this.element.style.display="none",this.callbacks.onClose())}toggle(){this.isOpen?this.hide():this.show()}}class fm{overlayEl;modalEl;currentBook=null;currentPageIndex=0;isOpen=!1;callbacks;constructor(t){this.callbacks=t,this.overlayEl=document.createElement("div"),this.overlayEl.id="book-reader-overlay",this.overlayEl.className="book-reader-overlay hidden",this.modalEl=document.createElement("div"),this.modalEl.className="book-reader-container",this.overlayEl.appendChild(this.modalEl),document.body.appendChild(this.overlayEl),this.bindEvents()}bindEvents(){this.overlayEl.addEventListener("click",t=>{t.target===this.overlayEl&&this.close()}),window.addEventListener("keydown",t=>{if(this.isOpen){if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),this.close();return}t.code==="ArrowRight"||t.code==="KeyD"||t.code==="PageDown"?(t.preventDefault(),this.nextPage()):(t.code==="ArrowLeft"||t.code==="KeyA"||t.code==="PageUp")&&(t.preventDefault(),this.prevPage())}},{capture:!0})}open(t){this.currentBook=t,this.currentPageIndex=0,this.isOpen=!0,this.overlayEl.classList.remove("hidden"),document.exitPointerLock(),this.render()}close(){this.isOpen&&(this.isOpen=!1,this.overlayEl.classList.add("hidden"),this.callbacks.onClose())}getIsOpen(){return this.isOpen}nextPage(){this.currentBook&&this.currentPageIndex+2<this.currentBook.pages.length&&(this.currentPageIndex+=2,this.render())}prevPage(){this.currentPageIndex>=2&&(this.currentPageIndex-=2,this.render())}render(){if(!this.currentBook)return;const t=this.currentBook,e=t.pages[this.currentPageIndex],n=t.pages[this.currentPageIndex+1],i=this.currentPageIndex>0,r=this.currentPageIndex+2<t.pages.length;this.modalEl.innerHTML=`
      <div class="book-leather-binding" style="border-color: ${t.coverColor};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page">
            <div class="page-inner">
              ${this.currentPageIndex===0?`
                <div class="book-title-header">
                  <div class="book-category-tag">${t.classification.toUpperCase()} • ${t.subgenre.toUpperCase()}</div>
                  <h1 class="book-title">${t.title}</h1>
                  <div class="book-author">By <em>${t.author}</em></div>
                  <div class="book-era">${t.era}</div>
                  <div class="ornate-divider">❦ ════════ ❧</div>
                </div>
              `:`
                <div class="chapter-header">${e?.chapterTitle??""}</div>
              `}

              <div class="page-body-text">
                ${e?this.formatBodyText(e.content):""}
              </div>

              <div class="page-footer">
                <span class="page-num">${e?e.pageNumber:""}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER FOLD -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page">
            <div class="page-inner">
              <div class="chapter-header">${n?.chapterTitle??""}</div>

              <div class="page-body-text">
                ${n?this.formatBodyText(n.content):'<div class="blank-page-note">~ End of Volume ~</div>'}
              </div>

              <div class="page-footer">
                <span class="page-num">${n?n.pageNumber:""}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER CONTROLS -->
        <div class="book-nav-bar">
          <button id="btn-prev-page" class="retro-btn nav-page-btn" ${i?"":"disabled"}>
            ◀ PREVIOUS
          </button>

          <span class="page-indicator">Pages ${this.currentPageIndex+1}-${Math.min(this.currentPageIndex+2,t.pages.length)} of ${t.pages.length}</span>

          <button id="btn-next-page" class="retro-btn nav-page-btn" ${r?"":"disabled"}>
            NEXT ▶
          </button>

          <button id="btn-close-book" class="retro-btn close-book-btn">
            ✕ CLOSE (ESC)
          </button>
        </div>
      </div>
    `,this.modalEl.querySelector("#btn-prev-page")?.addEventListener("click",a=>{a.stopPropagation(),this.prevPage()}),this.modalEl.querySelector("#btn-next-page")?.addEventListener("click",a=>{a.stopPropagation(),this.nextPage()}),this.modalEl.querySelector("#btn-close-book")?.addEventListener("click",a=>{a.stopPropagation(),this.close()})}formatBodyText(t){return t.split(`

`).map((n,i)=>{if(i===0){const r=n.charAt(0),a=n.slice(1);return`<p class="first-paragraph"><span class="drop-cap">${r}</span>${a.replace(/\n/g,"<br/>")}</p>`}return`<p>${n.replace(/\n/g,"<br/>")}</p>`}).join("")}}const gs={C2:65.41,D2:73.42,E2:82.41,F2:87.31,G2:98,A2:110,B2:123.47,C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880,B5:987.77,C6:1046.5,D6:1174.66},Do=[{id:"scribes_vigil",title:"The Scribe's Vigil",subtitle:"Medieval Lute & Solitary Wood Flute in D Dorian",tempoBpm:64,totalBeats:48,notesDrone:[{note:"D2",time:0,duration:16,gain:.35},{note:"A2",time:0,duration:16,gain:.25},{note:"C2",time:16,duration:16,gain:.35},{note:"G2",time:16,duration:16,gain:.25},{note:"D2",time:32,duration:16,gain:.35},{note:"A2",time:32,duration:16,gain:.25}],notesLute:[{note:"D3",time:0,duration:1.5},{note:"A3",time:1,duration:1.2},{note:"F4",time:2,duration:1.2},{note:"E4",time:3,duration:1.2},{note:"D4",time:4,duration:1.5},{note:"A3",time:5,duration:1.2},{note:"F4",time:6,duration:1.2},{note:"G4",time:7,duration:1.2},{note:"A4",time:8,duration:2},{note:"F4",time:10,duration:1.2},{note:"E4",time:12,duration:1.5},{note:"D4",time:14,duration:2},{note:"C3",time:16,duration:1.5},{note:"G3",time:17,duration:1.2},{note:"E4",time:18,duration:1.2},{note:"D4",time:19,duration:1.2},{note:"C4",time:20,duration:1.5},{note:"G3",time:21,duration:1.2},{note:"E4",time:22,duration:1.2},{note:"G4",time:23,duration:1.2},{note:"F4",time:24,duration:2},{note:"E4",time:26,duration:1.5},{note:"D4",time:28,duration:1.5},{note:"C4",time:30,duration:2},{note:"D3",time:32,duration:2},{note:"A3",time:33,duration:1.5},{note:"F4",time:34,duration:1.5},{note:"E4",time:36,duration:1.5},{note:"F4",time:38,duration:1.5},{note:"A4",time:40,duration:2},{note:"G4",time:42,duration:1.5},{note:"D4",time:44,duration:4}],notesFlute:[{note:"A4",time:4,duration:3.5},{note:"G4",time:8,duration:2},{note:"F4",time:10,duration:2},{note:"E4",time:12,duration:4},{note:"C5",time:20,duration:3},{note:"B4",time:23,duration:2},{note:"A4",time:25,duration:3},{note:"G4",time:28,duration:4},{note:"D5",time:34,duration:3.5},{note:"E5",time:38,duration:2},{note:"F5",time:40,duration:2.5},{note:"E5",time:42.5,duration:2},{note:"D5",time:44.5,duration:3.5}]},{id:"golden_lion_hymn",title:"Hymn of the Golden Lion",subtitle:"Cathedral Organ, Harp & Resonant Chimes in A Minor",tempoBpm:56,totalBeats:48,notesOrgan:[{note:"A2",time:0,duration:12,gain:.35},{note:"E3",time:0,duration:12,gain:.28},{note:"C4",time:0,duration:12,gain:.22},{note:"G2",time:12,duration:12,gain:.35},{note:"D3",time:12,duration:12,gain:.28},{note:"B3",time:12,duration:12,gain:.22},{note:"F2",time:24,duration:12,gain:.35},{note:"C3",time:24,duration:12,gain:.28},{note:"A3",time:24,duration:12,gain:.22},{note:"E2",time:36,duration:6,gain:.35},{note:"B2",time:36,duration:6,gain:.28},{note:"A2",time:42,duration:6,gain:.4},{note:"E3",time:42,duration:6,gain:.3}],notesLute:[{note:"A3",time:0,duration:2},{note:"C4",time:1.5,duration:2},{note:"E4",time:3,duration:2},{note:"A4",time:4.5,duration:2},{note:"C5",time:6,duration:3},{note:"B4",time:9,duration:2},{note:"G3",time:12,duration:2},{note:"B3",time:13.5,duration:2},{note:"D4",time:15,duration:2},{note:"G4",time:16.5,duration:2},{note:"B4",time:18,duration:3},{note:"A4",time:21,duration:2},{note:"F3",time:24,duration:2},{note:"A3",time:25.5,duration:2},{note:"C4",time:27,duration:2},{note:"F4",time:28.5,duration:2},{note:"A4",time:30,duration:3},{note:"G4",time:33,duration:2},{note:"E3",time:36,duration:2},{note:"G3",time:37.5,duration:2},{note:"B3",time:39,duration:2},{note:"E4",time:40.5,duration:2},{note:"A3",time:42,duration:6}],notesFlute:[{note:"E5",time:3,duration:3.5},{note:"A5",time:7,duration:4},{note:"G5",time:15,duration:3},{note:"D5",time:19,duration:4},{note:"C5",time:27,duration:3.5},{note:"E5",time:31,duration:4},{note:"B4",time:37,duration:3},{note:"A4",time:41,duration:6}]},{id:"echoes_alexandria",title:"Echoes of Alexandria",subtitle:"Contemplative Lute Solos & Distant Flute Harmonics in E Minor",tempoBpm:60,totalBeats:48,notesDrone:[{note:"E2",time:0,duration:24,gain:.3},{note:"B2",time:0,duration:24,gain:.25},{note:"A2",time:24,duration:12,gain:.3},{note:"E2",time:36,duration:12,gain:.35}],notesLute:[{note:"E3",time:0,duration:2},{note:"B3",time:1,duration:1.5},{note:"G4",time:2,duration:1.5},{note:"F4",time:3.5,duration:1.5},{note:"E4",time:5,duration:2},{note:"G4",time:6.5,duration:1.5},{note:"B4",time:8,duration:2.5},{note:"A4",time:10.5,duration:1.5},{note:"G4",time:12,duration:2},{note:"F4",time:14,duration:2},{note:"E4",time:16,duration:3},{note:"D4",time:19,duration:2},{note:"A3",time:24,duration:2},{note:"E4",time:25.5,duration:1.5},{note:"C4",time:27,duration:1.5},{note:"B3",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"E4",time:33,duration:2.5},{note:"D4",time:35.5,duration:2},{note:"E3",time:38,duration:2},{note:"B3",time:39.5,duration:1.5},{note:"G4",time:41,duration:2},{note:"E4",time:43,duration:5}],notesFlute:[{note:"B4",time:5,duration:3},{note:"E5",time:8.5,duration:3.5},{note:"D5",time:13,duration:2.5},{note:"B4",time:16,duration:4},{note:"A4",time:27,duration:3},{note:"C5",time:30.5,duration:3},{note:"B4",time:34,duration:3.5},{note:"G4",time:40,duration:2.5},{note:"F4",time:42.5,duration:2},{note:"E4",time:44.5,duration:3.5}]},{id:"starchamber_canticle",title:"The Star-Chamber Canticle",subtitle:"Peaceful Cathedral Flute & Harp Polyphony in G Dorian",tempoBpm:58,totalBeats:48,notesOrgan:[{note:"G2",time:0,duration:16,gain:.32},{note:"D3",time:0,duration:16,gain:.25},{note:"F2",time:16,duration:16,gain:.32},{note:"C3",time:16,duration:16,gain:.25},{note:"G2",time:32,duration:16,gain:.35},{note:"D3",time:32,duration:16,gain:.28}],notesLute:[{note:"G3",time:0,duration:1.8},{note:"D4",time:1.2,duration:1.5},{note:"B3",time:2.4,duration:1.5},{note:"C4",time:3.6,duration:1.5},{note:"D4",time:4.8,duration:2},{note:"F4",time:6.5,duration:1.5},{note:"G4",time:8,duration:2.5},{note:"F4",time:11,duration:2},{note:"D4",time:13,duration:2},{note:"C4",time:15,duration:2},{note:"F3",time:16,duration:1.8},{note:"C4",time:17.5,duration:1.5},{note:"A3",time:19,duration:1.5},{note:"B3",time:20.5,duration:1.5},{note:"C4",time:22,duration:2},{note:"E4",time:24,duration:1.5},{note:"F4",time:26,duration:2.5},{note:"E4",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"G3",time:32,duration:2},{note:"D4",time:33.5,duration:1.5},{note:"F4",time:35,duration:1.5},{note:"G4",time:37,duration:3},{note:"A4",time:40,duration:2.5},{note:"G4",time:43,duration:5}],notesFlute:[{note:"D5",time:4,duration:3.5},{note:"G5",time:8,duration:4},{note:"F5",time:13,duration:3},{note:"D5",time:16.5,duration:4},{note:"C5",time:22,duration:3.5},{note:"F5",time:26,duration:3.5},{note:"E5",time:30,duration:3},{note:"G5",time:36,duration:3.5},{note:"A5",time:40,duration:2.5},{note:"G5",time:43,duration:4.5}]}];class pm{ctx=null;masterGain=null;reverbConvolver=null;isMuted=!1;volume=.7;isPlaying=!1;isLibraryMode=!1;shuffledPlaylist=[];currentTrackIndex=0;scheduleTimer=null;onTrackChange;constructor(){this.initPlaylist()}initPlaylist(){const t=Do.map((e,n)=>n);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}this.shuffledPlaylist=t,this.currentTrackIndex=0}ensureAudioContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.reverbConvolver=this.createCathedralReverb(this.ctx);const e=this.ctx.createGain();e.gain.setValueAtTime(.7,this.ctx.currentTime);const n=this.ctx.createGain();n.gain.setValueAtTime(.65,this.ctx.currentTime),this.masterGain.connect(e),e.connect(this.ctx.destination),this.reverbConvolver&&(this.masterGain.connect(this.reverbConvolver),this.reverbConvolver.connect(n),n.connect(this.ctx.destination))}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}createCathedralReverb(t){const e=t.sampleRate,n=e*3.2,i=2.8,r=t.createBuffer(2,n,e),a=r.getChannelData(0),o=r.getChannelData(1);for(let c=0;c<n;c++){const h=c/e,f=Math.exp(-h*i),d=(Math.random()*2-1)*f,u=(Math.random()*2-1)*f;a[c]=d,o[c]=u}const l=t.createConvolver();return l.buffer=r,l}setVolume(t){this.volume=mm(t,0,1),this.ctx&&this.masterGain&&this.isLibraryMode&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.1)}setMuted(t){if(this.isMuted=t,this.ctx&&this.masterGain){const e=this.isMuted||!this.isLibraryMode?1e-4:this.volume;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.2)}}setLibraryMode(t){this.isLibraryMode=t,t?(this.ensureAudioContext(),this.isPlaying||this.playNextShuffledTrack(),this.ctx&&this.masterGain&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,1.2)):this.ctx&&this.masterGain&&this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,1)}playNextShuffledTrack(){if(!this.ensureAudioContext()||!this.ctx||!this.masterGain)return;this.shuffledPlaylist.length===0&&this.initPlaylist();const t=this.shuffledPlaylist[this.currentTrackIndex],e=Do[t];this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this.initPlaylist(),this.onTrackChange&&this.onTrackChange(e.title,e.subtitle),this.scheduleTrack(e)}scheduleTrack(t){if(!this.ctx||!this.masterGain)return;this.isPlaying=!0;const e=this.ctx.currentTime+.1,n=60/t.tempoBpm,i=t.totalBeats*n;t.notesLute&&t.notesLute.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playLuteString(r.note,a,o,r.gain??.45)}),t.notesFlute&&t.notesFlute.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playFluteNote(r.note,a,o,r.gain??.35)}),t.notesOrgan&&t.notesOrgan.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playOrganNote(r.note,a,o,r.gain??.3)}),t.notesDrone&&t.notesDrone.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playDroneNote(r.note,a,o,r.gain??.3)}),this.scheduleTimer!==null&&window.clearTimeout(this.scheduleTimer),this.scheduleTimer=window.setTimeout(()=>{this.isLibraryMode?this.playNextShuffledTrack():this.isPlaying=!1},(i+1.5)*1e3)}playLuteString(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=gs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="triangle",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(r*2,e);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(Math.min(2800,r*5),e),l.frequency.exponentialRampToValueAtTime(Math.max(400,r*1.5),e+n);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(i*.4,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),o.connect(l),l.connect(c),c.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+n+.05),o.stop(e+n+.05)}playFluteNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=gs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.frequency.setValueAtTime(5.2,e),this.ctx.createGain().gain.setValueAtTime(r*.015,e),o.connect(a.frequency);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1900,e);const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(i*.35,e+.12),h.gain.setValueAtTime(i*.32,e+n-.25),h.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(c),c.connect(h),h.connect(this.masterGain),o.start(e),a.start(e),o.stop(e+n),a.stop(e+n+.05)}playOrganNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=gs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.type="triangle",o.frequency.setValueAtTime(r*2,e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(i*.28,e+.25),l.gain.setValueAtTime(i*.25,e+n-.3),l.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(l),o.connect(l),l.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+n+.1),o.stop(e+n+.1)}playDroneNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=gs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(i*.35,e+.8),o.gain.setValueAtTime(i*.3,e+n-1),o.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(o),o.connect(this.masterGain),a.start(e),a.stop(e+n+.2)}}function mm(s,t,e){return Math.max(t,Math.min(e,s))}class gm{raycaster;camera;canvas;scene;callbacks;mouseNDC=new qt(0,0);isPointerLocked=!1;hoveredBookData=null;hoveredKey=null;highlightMesh;tempMatrix=new Kt;tempPos=new U;tempQuat=new Ke;tempScale=new U;lastCheckTime=0;checkIntervalMs=33;lastCameraPos=new U;lastCameraQuat=new Ke;pendingTargetBooks=[];maxDistance=6.5;isEnabled=!0;constructor(t,e,n,i){this.scene=t,this.camera=e,this.canvas=n,this.callbacks=i,this.raycaster=new hh,this.raycaster.far=this.maxDistance;const r=new ot(1,1,1),a=new Ft({color:16771763,emissive:16573855,emissiveIntensity:.85,transparent:!0,opacity:.55,roughness:.3,metalness:.4,depthTest:!0,depthWrite:!1});this.highlightMesh=new X(r,a),this.highlightMesh.visible=!1,this.highlightMesh.renderOrder=999,this.scene.add(this.highlightMesh),this.bindEvents()}bindEvents(){document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement!==null,this.isPointerLocked&&this.mouseNDC.set(0,0)}),window.addEventListener("mousemove",t=>{if(this.isEnabled){if(!this.isPointerLocked){const e=this.canvas.getBoundingClientRect();this.mouseNDC.x=(t.clientX-e.left)/e.width*2-1,this.mouseNDC.y=-((t.clientY-e.top)/e.height*2-1)}this.performRaycast(this.pendingTargetBooks)}}),this.canvas.addEventListener("click",t=>{this.isEnabled&&(this.performRaycast(this.pendingTargetBooks,!0),this.hoveredBookData&&(t.preventDefault(),t.stopPropagation(),this.callbacks.onSelectBook(this.hoveredBookData)))})}update(t){if(this.pendingTargetBooks=t,!this.isEnabled||t.length===0){this.clearHover();return}const e=performance.now();if(!(e-this.lastCheckTime<this.checkIntervalMs)){if(this.isPointerLocked){const n=this.camera.position.distanceToSquared(this.lastCameraPos),i=2*Math.acos(Math.abs(Oe.clamp(this.camera.quaternion.dot(this.lastCameraQuat),-1,1)));if(n<1e-4&&i<.002)return;this.lastCameraPos.copy(this.camera.position),this.lastCameraQuat.copy(this.camera.quaternion)}this.lastCheckTime=e,this.performRaycast(t)}}performRaycast(t,e=!1){if(!this.isEnabled||t.length===0){this.clearHover();return}this.isPointerLocked?this.raycaster.setFromCamera(new qt(0,0),this.camera):this.raycaster.setFromCamera(this.mouseNDC,this.camera);const n=this.raycaster.intersectObjects(t,!1);if(n.length>0){const i=n[0],r=i.object;if(r instanceof nl&&i.instanceId!==void 0){const a=r.userData?.books;if(a&&i.instanceId<a.length&&i.distance<=this.maxDistance){const o=a[i.instanceId],l=`inst_${r.id}_${i.instanceId}`;(this.hoveredKey!==l||e)&&(this.hoveredKey=l,this.hoveredBookData=o,r.getMatrixAt(i.instanceId,this.tempMatrix),this.tempMatrix.premultiply(r.matrixWorld),this.tempMatrix.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03),this.highlightMesh.visible=!0,this.callbacks.onHoverBook(o));return}}if(r instanceof X){const a=r.userData?.bookData;if(a&&i.distance<=this.maxDistance){const o=`mesh_${r.id}`;if(this.hoveredKey!==o||e){if(this.hoveredKey=o,this.hoveredBookData=a,r.matrixWorld.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),r.geometry.boundingBox){const l=new U;r.geometry.boundingBox.getSize(l),this.highlightMesh.scale.set(l.x*1.03,l.y*1.03,l.z*1.03)}else this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03);this.highlightMesh.visible=!0,this.callbacks.onHoverBook(a)}return}}}this.clearHover()}clearHover(){(this.hoveredBookData||this.highlightMesh.visible)&&(this.hoveredBookData=null,this.hoveredKey=null,this.highlightMesh.visible=!1,this.callbacks.onHoverBook(null))}getHoveredBook(){return this.hoveredBookData}}class _m{canvas;hudRoot;scene;clock;renderPipeline;cameraRig;lightingManager;atlas;surfaceManager;dungeonManager;libraryManager;musicManager;interactionRaycaster;characterModel;characterController;hud;settingsModal;bookReaderModal;currentMode="surface";currentPerspective="FPP";surfacePlayerPos=new U(0,0,0);dungeonPlayerPos=new U(0,0,0);libraryPlayerPos=new U(0,0,-1);keys={};constructor(t,e){this.canvas=t,this.hudRoot=e,this.scene=new el,this.clock=new ch,this.renderPipeline=new Kp({canvas:this.canvas,internalWidth:640,internalHeight:360}),this.atlas=new Jp,this.lightingManager=new jp(this.scene),this.cameraRig=new Sn({perspective:"FPP",mouseSensitivity:1}),this.scene.add(this.cameraRig.root),this.surfaceManager=new im(this.scene,this.atlas),this.dungeonManager=new am(this.scene,this.atlas,48,48),this.libraryManager=new om(this.scene,this.atlas),this.musicManager=new pm,this.characterModel=new lm(this.atlas,this.cameraRig.camera),this.scene.add(this.characterModel.group),this.characterController=new cm(this.characterModel),this.characterController.surfaceManager=this.surfaceManager,this.characterController.dungeonManager=this.dungeonManager,this.characterController.libraryManager=this.libraryManager;const n=this.surfaceManager.getElevation(0,0);this.surfacePlayerPos.set(0,n,0);const i=this.dungeonManager.dungeon.spawnPoint;this.dungeonPlayerPos.set(i.x+.5,0,i.z+.5),this.libraryPlayerPos.set(0,0,-1),this.settingsModal=new um({onPerspectiveChange:a=>this.setPerspective(a),onSensitivityChange:a=>this.cameraRig.setMouseSensitivity(a),onFovChange:a=>this.cameraRig.setFov(a),onResolutionChange:(a,o)=>this.renderPipeline.setResolution(a,o),onMusicVolumeChange:a=>this.musicManager.setVolume(a),onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.bookReaderModal=new fm({onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.interactionRaycaster=new gm(this.scene,this.cameraRig.camera,this.canvas,{onHoverBook:a=>{a&&this.currentMode==="library"&&!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?this.hud.showBookHover(a):this.hud.hideBookHover()},onSelectBook:a=>{this.currentMode==="library"&&!this.settingsModal.isOpen&&this.openBookReader(a)}});try{const a=localStorage.getItem("retro3d_fov");if(a){const c=parseInt(a,10);!isNaN(c)&&c>=40&&c<=100&&this.cameraRig.setFov(c)}const o=localStorage.getItem("retro3d_sens");if(o){const c=parseFloat(o);!isNaN(c)&&c>=.5&&c<=3&&this.cameraRig.setMouseSensitivity(c)}const l=localStorage.getItem("retro3d_music_vol");if(l){const c=parseInt(l,10);!isNaN(c)&&c>=0&&c<=100&&this.musicManager.setVolume(c/100)}}catch{}this.hud=new dm(this.hudRoot,{onToggleMode:()=>this.switchModeWithTransition(),onSelectResolution:(a,o)=>this.renderPipeline.setResolution(a,o),onToggleFullscreen:()=>this.toggleFullscreen(),onSelectItem:a=>this.characterModel.setActiveItem(a?a.id:null)}),this.musicManager.onTrackChange=(a,o)=>{this.hud.showNowPlaying(a,o)},this.bindEvents(),this.setMode("surface",!0),this.setPerspective("FPP");const r=this.hud.getSelectedItem();this.characterModel.setActiveItem(r?r.id:null)}bindEvents(){window.addEventListener("resize",()=>{this.renderPipeline.resize(),this.cameraRig.setAspect(window.innerWidth/window.innerHeight)}),this.canvas.addEventListener("click",()=>{this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen&&!this.interactionRaycaster.getHoveredBook()&&this.canvas.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==null?document.body.classList.add("pointer-locked"):document.body.classList.remove("pointer-locked")}),window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),t.code==="Escape"||t.code==="KeyO"){if(this.bookReaderModal.getIsOpen()){this.bookReaderModal.close();return}t.preventDefault(),t.stopPropagation(),this.toggleSettings();return}if(t.code==="KeyN"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()){t.preventDefault(),this.currentMode!=="library"?this.switchModeWithTransition("library"):this.switchModeWithTransition("surface");return}if(t.code==="KeyM"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.switchModeWithTransition(),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&t.code.startsWith("Digit")){const e=parseInt(t.code.replace("Digit",""),10);e>=1&&e<=8&&this.hud.selectSlot(e-1)}t.code==="KeyF"&&!this.settingsModal.isOpen&&this.toggleFullscreen()},{capture:!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}openBookReader(t){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.interactionRaycaster.clearHover(),this.hud.hideBookHover(),this.bookReaderModal.open(t)}openSettings(){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.settingsModal.show()}closeSettings(){this.characterController.isInputPaused=!1,this.settingsModal.hide(),this.canvas.requestPointerLock()}toggleSettings(){this.settingsModal.isOpen?this.closeSettings():this.openSettings()}setPerspective(t){this.currentPerspective=t,this.cameraRig.setPerspective(t),this.characterController.setPerspective(t),this.hud.setPerspective(t),this.settingsModal.setPerspectiveUI(t),this.renderPipeline.setCrosshairVisible(t==="FPP"),this.characterModel.setFirstPerson(t==="FPP"),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.canvas.requestPointerLock()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}switchModeWithTransition(t){if(this.renderPipeline?.transitionManager?.isTransitioning)return;let e;t?e=t:this.currentMode==="surface"?e="dungeon":this.currentMode==="dungeon"?e="library":e="surface",this.renderPipeline.transitionManager.startTransition(()=>{this.setMode(e)},()=>{},.7)}setMode(t,e=!1){if(this.characterController&&(this.currentMode==="surface"?this.surfacePlayerPos.copy(this.characterController.position):this.currentMode==="dungeon"?this.dungeonPlayerPos.copy(this.characterController.position):this.libraryPlayerPos.copy(this.characterController.position),this.characterController.currentMode=t),this.currentMode=t,this.lightingManager&&this.lightingManager.setMode(t),this.musicManager&&this.musicManager.setLibraryMode(t==="library"),t==="surface"){this.surfaceManager&&this.surfaceManager.setVisible(!0),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=2,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=2,this.characterModel.fpsLanternLight.distance=20),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=2,this.characterModel.tppLanternLight.distance=20));const n=this.surfacePlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z),this.surfaceManager&&this.surfaceManager.update(n.x,n.z)}else if(t==="dungeon"){this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!0),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=5,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=5,this.characterModel.fpsLanternLight.distance=30),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=5,this.characterModel.tppLanternLight.distance=30));const n=this.dungeonPlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z)}else{this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!0),this.characterModel&&(this.characterModel.baseLanternIntensity=4,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=4,this.characterModel.fpsLanternLight.distance=25),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=4,this.characterModel.tppLanternLight.distance=25));const n=this.libraryPlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z)}e&&this.cameraRig&&this.characterController&&(this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition)),this.hud&&this.hud.setMode(t)}start(){const t=()=>{requestAnimationFrame(t),this.tick()};t()}tick(){const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime(),n=this.characterController.getGamepadInput(),i=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyQ,r=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyE;this.characterController.update(t,this.cameraRig.getYaw()),this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.update(t,n.rightStickX,n.rightStickY,i,r),this.currentMode==="surface"?(this.surfaceManager.update(this.characterController.position.x,this.characterController.position.z),this.lightingManager.updateSunPosition(this.characterController.position),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):this.currentMode==="dungeon"?(this.dungeonManager.updateTorches(e),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):(this.libraryManager.update(e),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?(this.interactionRaycaster.isEnabled=!0,this.interactionRaycaster.update(this.libraryManager.raycastableBooks)):(this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover())),this.renderPipeline.render(this.scene,this.cameraRig.camera,t);const a=Math.floor(this.characterController.position.x/16),o=Math.floor(this.characterController.position.z/16);this.hud.updateTelemetry(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z,a,o,this.cameraRig.getYaw())}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("game-canvas"),t=document.getElementById("hud-root");if(!s||!t){console.error("Failed to find #game-canvas or #hud-root in DOM.");return}new _m(s,t).start(),console.log("Retro-3D Dungeon & Surface Engine initialized successfully.")});
