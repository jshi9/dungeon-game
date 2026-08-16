(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="174",xl=0,ya=1,Ml=2,Uo=1,Fo=2,dn=3,wn=0,Ue=1,Wt=2,En=0,di=1,zi=2,ba=3,Ea=4,Sl=5,kn=100,yl=101,bl=102,El=103,Tl=104,wl=200,Al=201,Rl=202,Cl=203,dr=204,ur=205,Pl=206,Ll=207,Il=208,Dl=209,Ul=210,Fl=211,Nl=212,Ol=213,Bl=214,fr=0,pr=1,mr=2,mi=3,gr=4,_r=5,vr=6,xr=7,No=0,kl=1,Gl=2,Tn=0,zl=1,Hl=2,Vl=3,Wl=4,Xl=5,$l=6,ql=7,Oo=300,gi=301,_i=302,Mr=303,Sr=304,Ls=306,Hi=1e3,zn=1001,yr=1002,he=1003,Yl=1004,Yi=1005,nn=1006,Fs=1007,Hn=1008,pn=1009,Bo=1010,ko=1011,Vi=1012,Qr=1013,Wn=1014,sn=1015,Wi=1016,ta=1017,ea=1018,vi=1020,Go=35902,zo=1021,Ho=1022,Ve=1023,Vo=1024,Wo=1025,ui=1026,xi=1027,na=1028,ia=1029,Xo=1030,sa=1031,ra=1033,Ms=33776,Ss=33777,ys=33778,bs=33779,br=35840,Er=35841,Tr=35842,wr=35843,Ar=36196,Rr=37492,Cr=37496,Pr=37808,Lr=37809,Ir=37810,Dr=37811,Ur=37812,Fr=37813,Nr=37814,Or=37815,Br=37816,kr=37817,Gr=37818,zr=37819,Hr=37820,Vr=37821,Es=36492,Wr=36494,Xr=36495,$o=36283,$r=36284,qr=36285,Yr=36286,Zl=3200,Kl=3201,qo=0,jl=1,bn="",xe="srgb",Mi="srgb-linear",As="linear",se="srgb",qn=7680,Ta=519,Jl=512,Ql=513,tc=514,Yo=515,ec=516,nc=517,ic=518,sc=519,wa=35044,Aa="300 es",un=2e3,Rs=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const ki=Math.PI/180,Si=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function aa(s,t){return(s%t+t)%t}function rc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ac(s,t,e){return s!==t?(e-s)/(t-s):0}function Gi(s,t,e){return(1-e)*s+e*t}function oc(s,t,e,n){return Gi(s,t,1-Math.exp(-e*n))}function lc(s,t=1){return t-Math.abs(aa(s,t*2)-t)}function cc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uc(s,t){return s+Math.random()*(t-s)}function fc(s){return s*(.5-Math.random())}function pc(s){s!==void 0&&(Ra=s);let t=Ra+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mc(s){return s*ki}function gc(s){return s*Si}function _c(s){return(s&s-1)===0&&s!==0}function vc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*d,l*u,l*h,o*c);break;case"YZY":s.set(l*h,o*d,l*u,o*c);break;case"ZXZ":s.set(l*u,l*h,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:ki,RAD2DEG:Si,generateUUID:Ei,clamp:Xt,euclideanModulo:aa,mapLinear:rc,inverseLerp:ac,lerp:Gi,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:hc,randInt:dc,randFloat:uc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:_c,ceilPowerOfTwo:vc,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Mc,normalize:Re,denormalize:li};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],b=i[4],v=i[7],P=i[2],R=i[5],w=i[8];return r[0]=a*_+o*E+l*P,r[3]=a*m+o*b+l*R,r[6]=a*p+o*v+l*w,r[1]=c*_+d*E+u*P,r[4]=c*m+d*b+u*R,r[7]=c*p+d*v+u*w,r[2]=h*_+f*E+g*P,r[5]=h*m+f*b+g*R,r[8]=h*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=e*u+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-d*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(d*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Ot;function Zo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sc(){const s=Cs("canvas");return s.style.display="block",s}const Ca={};function Nn(s){s in Ca||(Ca[s]=!0,console.warn(s))}function yc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ec(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tc(){const s={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?As:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mi]:{primaries:t,whitePoint:n,transfer:As,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),s}const te=Tc();function fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yn;class wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Cs("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fn(e[n]/255)*255):e[n]=fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class oa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Os(i[a].image)):r.push(Os(i[a]))}else r=Os(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Os(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rc=0;class Te extends bi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=zn,i=zn,r=nn,a=Hn,o=Ve,l=pn,c=Te.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Ei(),this.name="",this.source=new oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Oo;Te.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(f+1)/2,P=(p+1)/2,R=(d+h)/4,w=(u+_)/4,C=(g+m)/4;return b>v&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=w/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=w/r,i=C/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(h-d)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cc extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new oa(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ko extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==h||c!==f||d!==g){let m=1-o;const p=l*h+c*f+d*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const v=o*E;if(l=l*m+h*v,c=c*m+f*v,d=d*m+g*v,u=u*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=P,c*=P,d*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+d*u+l*f-c*h,t[e+1]=l*g+d*h+c*u-o*f,t[e+2]=c*g+d*f+o*h-l*u,t[e+3]=d*g-o*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),u=o(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),d=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=i+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new U,Ia=new Qe;class Xn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),Ki.subVectors(this.max,Ci),Zn.subVectors(t.a,Ci),Kn.subVectors(t.b,Ci),jn.subVectors(t.c,Ci),gn.subVectors(Kn,Zn),_n.subVectors(jn,Kn),Pn.subVectors(Zn,jn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!ks(e,Zn,Kn,jn,Ki)||(e=[1,0,0,0,1,0,0,0,1],!ks(e,Zn,Kn,jn,Ki))?!1:(ji.crossVectors(gn,_n),e=[ji.x,ji.y,ji.z],ks(e,Zn,Kn,jn,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new U,new U,new U,new U,new U,new U,new U,new U],qe=new U,Zi=new Xn,Zn=new U,Kn=new U,jn=new U,gn=new U,_n=new U,Pn=new U,Ci=new U,Ki=new U,ji=new U,Ln=new U;function ks(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ln.fromArray(s,r);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),d=n.dot(Ln);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Lc=new Xn,Pi=new U,Gs=new U;class Ti{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Gs)),this.expandByPoint(Pi.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new U,zs=new U,Ji=new U,vn=new U,Hs=new U,Qi=new U,Vs=new U;class la{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zs.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(zs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ji),o=vn.dot(this.direction),l=-vn.dot(Ji),c=vn.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const _=1/d;u*=_,h*=_,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zs).addScaledVector(Ji,h),f}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){Hs.subVectors(e,t),Qi.subVectors(n,t),Vs.crossVectors(Hs,Qi);let a=this.direction.dot(Vs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(Qi.crossVectors(vn,Qi));if(l<0)return null;const c=o*this.direction.dot(Hs.cross(vn));if(c<0||l+c>a)return null;const d=-o*vn.dot(Vs);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,i,r,a,o,l,c,d,u,h,f,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,d,u,h,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,d,u,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const h=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,f=l*u,g=c*d,_=c*u;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,f=l*u,g=c*d,_=c*u;e[0]=h-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*u,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=_-h*u,e[8]=g*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*u+g,e[10]=h-_*u}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+_,e[5]=a*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*d,e[10]=_*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ic,t,Dc)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),xn.crossVectors(n,Ne),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),xn.crossVectors(n,Ne)),xn.normalize(),ts.crossVectors(Ne,xn),i[0]=xn.x,i[4]=ts.x,i[8]=Ne.x,i[1]=xn.y,i[5]=ts.y,i[9]=Ne.y,i[2]=xn.z,i[6]=ts.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],v=n[11],P=n[15],R=i[0],w=i[4],C=i[8],y=i[12],x=i[1],A=i[5],G=i[9],z=i[13],H=i[2],X=i[6],Y=i[10],J=i[14],V=i[3],it=i[7],nt=i[11],ft=i[15];return r[0]=a*R+o*x+l*H+c*V,r[4]=a*w+o*A+l*X+c*it,r[8]=a*C+o*G+l*Y+c*nt,r[12]=a*y+o*z+l*J+c*ft,r[1]=d*R+u*x+h*H+f*V,r[5]=d*w+u*A+h*X+f*it,r[9]=d*C+u*G+h*Y+f*nt,r[13]=d*y+u*z+h*J+f*ft,r[2]=g*R+_*x+m*H+p*V,r[6]=g*w+_*A+m*X+p*it,r[10]=g*C+_*G+m*Y+p*nt,r[14]=g*y+_*z+m*J+p*ft,r[3]=E*R+b*x+v*H+P*V,r[7]=E*w+b*A+v*X+P*it,r[11]=E*C+b*G+v*Y+P*nt,r[15]=E*y+b*z+v*J+P*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*h+n*c*h+i*o*f-n*l*f)+_*(+e*l*f-e*c*h+r*a*h-i*a*f+i*c*d-r*l*d)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*d-n*c*d)+p*(-i*o*d-e*l*u+e*o*h+i*a*u-n*a*h+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*h*c+_*l*f-o*m*f-u*l*p+o*h*p,b=g*h*c-d*m*c-g*l*f+a*m*f+d*l*p-a*h*p,v=d*_*c-g*u*c+g*o*f-a*_*f-d*o*p+a*u*p,P=g*u*l-d*_*l-g*o*h+a*_*h+d*o*m-a*u*m,R=e*E+n*b+i*v+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=E*w,t[1]=(_*h*r-u*m*r-_*i*f+n*m*f+u*i*p-n*h*p)*w,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(u*l*r-o*h*r-u*i*c+n*h*c+o*i*f-n*l*f)*w,t[4]=b*w,t[5]=(d*m*r-g*h*r+g*i*f-e*m*f-d*i*p+e*h*p)*w,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*h*r-d*l*r+d*i*c-e*h*c-a*i*f+e*l*f)*w,t[8]=v*w,t[9]=(g*u*r-d*_*r-g*n*f+e*_*f+d*n*p-e*u*p)*w,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(d*o*r-a*u*r-d*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=P*w,t[13]=(d*_*i-g*u*i+g*n*h-e*_*h-d*n*m+e*u*m)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-d*o*i+d*n*l-e*u*l-a*n*h+e*o*h)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,g=r*u,_=a*d,m=a*u,p=o*u,E=l*c,b=l*d,v=l*u,P=n.x,R=n.y,w=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(h+p))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(g+b)*w,i[9]=(m-E)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Jn.set(i[0],i[1],i[2]).length();const a=Jn.set(i[4],i[5],i[6]).length(),o=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,d=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=un){const l=this.elements,c=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(o===un)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=un){const l=this.elements,c=1/(e-t),d=1/(n-i),u=1/(a-r),h=(e+t)*c,f=(n+i)*d;let g,_;if(o===un)g=(a+r)*u,_=-2*u;else if(o===Rs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new U,Ye=new jt,Ic=new U(0,0,0),Dc=new U(1,1,1),xn=new U,ts=new U,Ne=new U,Da=new jt,Ua=new Qe;class De{constructor(t=0,e=0,n=0,i=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class ca{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uc=0;const Fa=new U,Qn=new Qe,ln=new jt,es=new U,Li=new U,Fc=new U,Nc=new Qe,Na=new U(1,0,0),Oa=new U(0,1,0),Ba=new U(0,0,1),ka={type:"added"},Oc={type:"removed"},ti={type:"childadded",child:null},Ws={type:"childremoved",child:null};class de extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new U,e=new De,n=new Qe,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Na,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Na,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Li,es,this.up):ln.lookAt(es,Li,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(ln),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ka),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ka),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new U(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new U,cn=new U,Xs=new U,hn=new U,ei=new U,ni=new U,Ga=new U,$s=new U,qs=new U,Ys=new U,Zs=new ae,Ks=new ae,js=new ae;class je{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),cn.subVectors(n,e),Xs.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(cn),l=Ze.dot(Xs),c=cn.dot(cn),d=cn.dot(Xs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Zs.setScalar(0),Ks.setScalar(0),js.setScalar(0),Zs.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),js.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Zs,r.x),a.addScaledVector(Ks,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),cn.subVectors(t,e),Ze.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ze.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ei.subVectors(i,n),ni.subVectors(r,n),$s.subVectors(t,n);const l=ei.dot($s),c=ni.dot($s);if(l<=0&&c<=0)return e.copy(n);qs.subVectors(t,i);const d=ei.dot(qs),u=ni.dot(qs);if(d>=0&&u<=d)return e.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ei,a);Ys.subVectors(t,r);const f=ei.dot(Ys),g=ni.dot(Ys);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ni,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Ga.subVectors(r,i),o=(u-d)/(u-d+(f-g)),e.copy(i).addScaledVector(Ga,o);const p=1/(m+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(ei,a).addScaledVector(ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Js(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=aa(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Js(a,r,t+1/3),this.g=Js(a,r,t),this.b=Js(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=jo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return te.fromWorkingColorSpace(be.copy(this),t),Math.round(Xt(be.r*255,0,255))*65536+Math.round(Xt(be.g*255,0,255))*256+Math.round(Xt(be.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=xe){te.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(ns);const n=Gi(Mn.h,ns.h,e),i=Gi(Mn.s,ns.s,e),r=Gi(Mn.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new zt;zt.NAMES=jo;let Bc=0;class wi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=di,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=ur,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,is=new $t;let kc=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class Jo extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qo extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gc=0;const ze=new jt,Qs=new de,ii=new U,Oe=new Xn,Ii=new Xn,ve=new U;class we extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?Qo:Jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,Ii.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,Ii.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(Ii.min),Oe.expandByPoint(Ii.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ve.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(t,c),ve.add(ii)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new U,l[C]=new U;const c=new U,d=new U,u=new U,h=new $t,f=new $t,g=new $t,_=new U,m=new U;function p(C,y,x){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(A),o[C].add(_),o[y].add(_),o[x].add(_),l[C].add(m),l[y].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,y=E.length;C<y;++C){const x=E[C],A=x.start,G=x.count;for(let z=A,H=A+G;z<H;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new U,v=new U,P=new U,R=new U;function w(C){P.fromBufferAttribute(i,C),R.copy(P);const y=o[C];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),v.crossVectors(R,y);const A=v.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,A)}for(let C=0,y=E.length;C<y;++C){const x=E[C],A=x.start,G=x.count;for(let z=A,H=A+G;z<H;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,u=new U;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new We(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new jt,In=new la,ss=new Ti,Ha=new U,rs=new U,as=new U,os=new U,tr=new U,ls=new U,Va=new U,cs=new U;class D extends de{constructor(t=new we,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(tr.fromBufferAttribute(u,t),a?ls.addScaledVector(tr,d):ls.addScaledVector(tr.sub(e),d))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(ss.containsPoint(In.origin)===!1&&(In.intersectSphere(ss,Ha)===null||In.origin.distanceToSquared(Ha)>(t.far-t.near)**2))&&(za.copy(r).invert(),In.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=b;v<P;v+=3){const R=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);i=hs(this,p,t,n,c,d,u,R,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);i=hs(this,a,t,n,c,d,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=b;v<P;v+=3){const R=v,w=v+1,C=v+2;i=hs(this,p,t,n,c,d,u,R,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,v=m+2;i=hs(this,a,t,n,c,d,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zc(s,t,e,n,i,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===wn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:s}}function hs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,as),s.getVertexPosition(c,os);const d=zc(s,t,e,n,rs,as,os,Va);if(d){const u=new U;je.getBarycoord(Va,rs,as,os,u),i&&(d.uv=je.getInterpolatedAttribute(i,o,l,c,u,new $t)),r&&(d.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new $t)),a&&(d.normal=je.getInterpolatedAttribute(a,o,l,c,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};je.getNormal(rs,as,os,h.normal),d.face=h,d.barycoord=u}return d}class et extends we{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,E,b,v,P,R,w,C,y){const x=v/w,A=P/C,G=v/2,z=P/2,H=R/2,X=w+1,Y=C+1;let J=0,V=0;const it=new U;for(let nt=0;nt<Y;nt++){const ft=nt*A-z;for(let St=0;St<X;St++){const Ft=St*x-G;it[_]=Ft*E,it[m]=ft*b,it[p]=H,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=R>0?1:-1,d.push(it.x,it.y,it.z),u.push(St/w),u.push(1-nt/C),J+=1}}for(let nt=0;nt<C;nt++)for(let ft=0;ft<w;ft++){const St=h+ft+X*nt,Ft=h+ft+X*(nt+1),j=h+(ft+1)+X*(nt+1),Z=h+(ft+1)+X*nt;l.push(St,Ft,Z),l.push(Ft,j,Z),V+=6}o.addGroup(f,V,y),f+=V,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=yi(s[e]);for(const i in n)t[i]=n[i]}return t}function Hc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Vc={clone:yi,merge:Ce};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class el extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new U,Wa=new $t,Xa=new $t;class Ie extends el{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Si*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Si*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class $c extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(si,ri,t,e);i.layers=this.layers,this.add(i);const r=new Ie(si,ri,t,e);r.layers=this.layers,this.add(r);const a=new Ie(si,ri,t,e);a.layers=this.layers,this.add(a);const o=new Ie(si,ri,t,e);o.layers=this.layers,this.add(o);const l=new Ie(si,ri,t,e);l.layers=this.layers,this.add(l);const c=new Ie(si,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nl extends Te{constructor(t,e,n,i,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qc extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new et(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:En});r.uniforms.tEquirect.value=e;const a=new D(i,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=nn),new $c(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Pt extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yc={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ps{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Ps(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class il extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zc extends Te{constructor(t=null,e=1,n=1,i,r,a,o,l,c=he,d=he,u,h){super(null,a,o,l,c,d,i,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a extends We{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ai=new jt,qa=new jt,ds=[],Ya=new Xn,Kc=new jt,Di=new D,Ui=new Ti;class sl extends D{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),Ya.copy(t.boundingBox).applyMatrix4(ai),this.boundingBox.union(Ya)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),Ui.copy(t.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(Ui)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),t.ray.intersectsSphere(Ui)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ai),qa.multiplyMatrices(n,ai),Di.matrixWorld=qa,Di.raycast(t,ds);for(let a=0,o=ds.length;a<o;a++){const l=ds[a];l.instanceId=r,l.object=this,e.push(l)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(i*this.count),i,this.count,na,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nr=new U,jc=new U,Jc=new Ot;class On{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jc.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Ti,us=new U;class da{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,a=new On){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],b=i[14],v=i[15];if(n[0].setComponents(l-r,h-c,m-f,v-p).normalize(),n[1].setComponents(l+r,h+c,m+f,v+p).normalize(),n[2].setComponents(l+a,h+d,m+g,v+E).normalize(),n[3].setComponents(l-a,h-d,m-g,v-E).normalize(),n[4].setComponents(l-o,h-u,m-_,v-b).normalize(),e===un)n[5].setComponents(l+o,h+u,m+_,v+b).normalize();else if(e===Rs)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Za=new jt,Zr=new la,fs=new Ti,ps=new U;class Qc extends de{constructor(t=new we,e=new rl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;Za.copy(i).invert(),Zr.copy(t.ray).applyMatrix4(Za);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);ps.fromBufferAttribute(u,m),Ka(ps,m,l,i,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ps.fromBufferAttribute(u,g),Ka(ps,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ka(s,t,e,n,i,r,a){const o=Zr.distanceSqToPoint(s);if(o<e){const l=new U;Zr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ts extends Te{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends Te{constructor(t,e,n,i,r,a,o,l,c,d=ui){if(d!==ui&&d!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ui&&(n=Wn),n===void 0&&d===xi&&(n=vi),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yt extends we{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function E(){const v=new U,P=new U;let R=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const y=[],x=C/r,A=x*(e-t)+t;for(let G=0;G<=i;G++){const z=G/i,H=z*l+o,X=Math.sin(H),Y=Math.cos(H);P.x=A*X,P.y=-x*n+m,P.z=A*Y,u.push(P.x,P.y,P.z),v.set(X,w,Y).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-x),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){const x=_[y][C],A=_[y+1][C],G=_[y+1][C+1],z=_[y][C+1];(t>0||y!==0)&&(d.push(x,A,z),R+=3),(e>0||y!==r-1)&&(d.push(A,G,z),R+=3)}c.addGroup(p,R,0),p+=R}function b(v){const P=g,R=new $t,w=new U;let C=0;const y=v===!0?t:e,x=v===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*x,0),h.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let G=0;G<=i;G++){const H=G/i*l+o,X=Math.cos(H),Y=Math.sin(H);w.x=y*Y,w.y=m*x,w.z=y*X,u.push(w.x,w.y,w.z),h.push(0,x,0),R.x=X*.5+.5,R.y=Y*.5*x+.5,f.push(R.x,R.y),g++}for(let G=0;G<i;G++){const z=P+G,H=A+G;v===!0?d.push(H,H+1,z):d.push(H+1,H,z),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pi extends Yt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ee extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,u=t/o,h=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const E=p*h-a;for(let b=0;b<c;b++){const v=b*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,v=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;f.push(b,v,R),f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vn extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new U,h=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(i+R*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+R*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(R+v,1-b),E.push(c++)}d.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=d[p][E+1],v=d[p][E],P=d[p+1][E],R=d[p+1][E+1];(p!==0||a>0)&&f.push(b,v,R),(p!==n-1||l<Math.PI)&&f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class He extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],d=new U,u=new U,h=new U;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lt extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class th extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eh extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xi extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nh extends Xi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ir=new jt,ja=new U,Ja=new U;class ua{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(ja),Ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ja),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ih extends ua{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Si*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class sh extends Xi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Qa=new jt,Fi=new U,sr=new U;class rh extends ua{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fi),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),i.makeTranslation(-Fi.x,-Fi.y,-Fi.z),Qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa)}}class Je extends Xi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fa extends el{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ah extends ua{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class to extends Xi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oh extends Xi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lh extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ch{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eo(){return performance.now()}const no=new jt;class hh{constructor(t,e,n=0,i=1/0){this.ray=new la(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return no.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(no),this}intersectObject(t,e=!0,n=[]){return Kr(t,this,n,e),n.sort(io),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kr(t[i],this,n,e);return n.sort(io),n}}function io(s,t){return s.distance-t.distance}function Kr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Kr(r[a],t,e,!0)}}function so(s,t,e,n){const i=dh(n);switch(e){case zo:return s*t;case Vo:return s*t;case Wo:return s*t*2;case na:return s*t/i.components*i.byteLength;case ia:return s*t/i.components*i.byteLength;case Xo:return s*t*2/i.components*i.byteLength;case sa:return s*t*2/i.components*i.byteLength;case Ho:return s*t*3/i.components*i.byteLength;case Ve:return s*t*4/i.components*i.byteLength;case ra:return s*t*4/i.components*i.byteLength;case Ms:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ys:case bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Er:case wr:return Math.max(s,16)*Math.max(t,8)/4;case br:case Tr:return Math.max(s,8)*Math.max(t,8)/2;case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Or:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case kr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Es:case Wr:case Xr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $o:case $r:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qr:case Yr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dh(s){switch(s){case pn:case Bo:return{byteLength:1,components:1};case Vi:case ko:case Wi:return{byteLength:2,components:1};case ta:case ea:return{byteLength:2,components:4};case Wn:case Qr:case sn:return{byteLength:4,components:1};case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uh(s){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var fh=`#ifdef USE_ALPHAHASH
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
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
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,wu=`#include <common>
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
}`,Iu=`#define NORMAL
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
}`,Du=`#define NORMAL
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
}`,Gu=`uniform float size;
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
}`,zu=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:_h,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:Sh,batching_vertex:yh,begin_vertex:bh,beginnormal_vertex:Eh,bsdfs:Th,iridescence_fragment:wh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Ih,color_pars_fragment:Dh,color_pars_vertex:Uh,color_vertex:Fh,common:Nh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:kh,displacementmap_vertex:Gh,emissivemap_fragment:zh,emissivemap_pars_fragment:Hh,colorspace_fragment:Vh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:$h,envmap_pars_fragment:qh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:rd,envmap_vertex:Zh,fog_vertex:Kh,fog_pars_vertex:jh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:dd,lights_fragment_begin:ud,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:yd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:Td,morphcolor_vertex:wd,morphnormal_vertex:Ad,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Pd,normal_fragment_maps:Ld,normal_pars_fragment:Id,normal_pars_vertex:Dd,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:Gd,packing:zd,premultiplied_alpha_fragment:Hd,project_vertex:Vd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Kd,shadowmask_pars_fragment:jd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:tu,skinnormal_vertex:eu,specularmap_fragment:nu,specularmap_pars_fragment:iu,tonemapping_fragment:su,tonemapping_pars_fragment:ru,transmission_fragment:au,transmission_pars_fragment:ou,uv_pars_fragment:lu,uv_pars_vertex:cu,uv_vertex:hu,worldpos_vertex:du,background_vert:uu,background_frag:fu,backgroundCube_vert:pu,backgroundCube_frag:mu,cube_vert:gu,cube_frag:_u,depth_vert:vu,depth_frag:xu,distanceRGBA_vert:Mu,distanceRGBA_frag:Su,equirect_vert:yu,equirect_frag:bu,linedashed_vert:Eu,linedashed_frag:Tu,meshbasic_vert:wu,meshbasic_frag:Au,meshlambert_vert:Ru,meshlambert_frag:Cu,meshmatcap_vert:Pu,meshmatcap_frag:Lu,meshnormal_vert:Iu,meshnormal_frag:Du,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Nu,meshphysical_frag:Ou,meshtoon_vert:Bu,meshtoon_frag:ku,points_vert:Gu,points_frag:zu,shadow_vert:Hu,shadow_frag:Vu,sprite_vert:Wu,sprite_frag:Xu},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},en={basic:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ce([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ce([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ce([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ce([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ce([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ce([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ce([at.common,at.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ce([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ms={r:0,b:0,g:0},Un=new De,$u=new jt;function qu(s,t,e,n,i,r,a){const o=new zt(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const P=g(b);P===null?p(o,l):P&&P.isColor&&(p(P,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===Ls)?(d===void 0&&(d=new D(new et(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:yi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Un.copy(v.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($u.makeRotationFromEuler(Un)),d.material.toneMapped=te.getTransfer(P.colorSpace)!==se,(u!==P||h!==P.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=P,h=P.version,f=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new D(new Ee(2,2),new mn({name:"BackgroundMaterial",uniforms:yi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(P.colorSpace)!==se,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(ms,tl(s)),n.buffers.color.setClear(ms.r,ms.g,ms.b,v,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:E}}function Yu(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(x,A,G,z,H){let X=!1;const Y=u(z,G,A);r!==Y&&(r=Y,c(r.object)),X=f(x,z,G,H),X&&g(x,z,G,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(x,A,G,z),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function u(x,A,G){const z=G.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let X=H[A.id];X===void 0&&(X={},H[A.id]=X);let Y=X[z];return Y===void 0&&(Y=h(l()),X[z]=Y),Y}function h(x){const A=[],G=[],z=[];for(let H=0;H<e;H++)A[H]=0,G[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,A,G,z){const H=r.attributes,X=A.attributes;let Y=0;const J=G.getAttributes();for(const V in J)if(J[V].location>=0){const nt=H[V];let ft=X[V];if(ft===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),nt===void 0||nt.attribute!==ft||ft&&nt.data!==ft.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(x,A,G,z){const H={},X=A.attributes;let Y=0;const J=G.getAttributes();for(const V in J)if(J[V].location>=0){let nt=X[V];nt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));const ft={};ft.attribute=nt,nt&&nt.data&&(ft.data=nt.data),H[V]=ft,Y++}r.attributes=H,r.attributesNum=Y,r.index=z}function _(){const x=r.newAttributes;for(let A=0,G=x.length;A<G;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const G=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;G[x]=1,z[x]===0&&(s.enableVertexAttribArray(x),z[x]=1),H[x]!==A&&(s.vertexAttribDivisor(x,A),H[x]=A)}function E(){const x=r.newAttributes,A=r.enabledAttributes;for(let G=0,z=A.length;G<z;G++)A[G]!==x[G]&&(s.disableVertexAttribArray(G),A[G]=0)}function b(x,A,G,z,H,X,Y){Y===!0?s.vertexAttribIPointer(x,A,G,H,X):s.vertexAttribPointer(x,A,G,z,H,X)}function v(x,A,G,z){_();const H=z.attributes,X=G.getAttributes(),Y=A.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let it=H[J];if(it===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const nt=it.normalized,ft=it.itemSize,St=t.get(it);if(St===void 0)continue;const Ft=St.buffer,j=St.type,Z=St.bytesPerElement,ht=j===s.INT||j===s.UNSIGNED_INT||it.gpuType===Qr;if(it.isInterleavedBufferAttribute){const Q=it.data,bt=Q.stride,Rt=it.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<V.locationSize;Et++)p(V.location+Et,Q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<V.locationSize;Et++)m(V.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let Et=0;Et<V.locationSize;Et++)b(V.location+Et,ft/V.locationSize,j,nt,bt*Z,(Rt+ft/V.locationSize*Et)*Z,ht)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,it.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let Q=0;Q<V.locationSize;Q++)b(V.location+Q,ft/V.locationSize,j,nt,ft*Z,ft/V.locationSize*Q*Z,ht)}}else if(Y!==void 0){const nt=Y[J];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(V.location,nt);break;case 3:s.vertexAttrib3fv(V.location,nt);break;case 4:s.vertexAttrib4fv(V.location,nt);break;default:s.vertexAttrib1fv(V.location,nt)}}}}E()}function P(){C();for(const x in n){const A=n[x];for(const G in A){const z=A[G];for(const H in z)d(z[H].object),delete z[H];delete A[G]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const G in A){const z=A[G];for(const H in z)d(z[H].object),delete z[H];delete A[G]}delete n[x.id]}function w(x){for(const A in n){const G=n[A];if(G[x.id]===void 0)continue;const z=G[x.id];for(const H in z)d(z[H].object),delete z[H];delete G[x.id]}}function C(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Zu(s,t,e){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*h[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ku(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Ve&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==pn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==sn&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:P,maxSamples:R}}function ju(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new On,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const E=r?0:n,b=E*4;let v=p.clippingState||null;l.value=v,v=d(g,h,b,f);for(let P=0;P!==b;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ju(s){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=gi:o===Sr&&(a.mapping=_i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ci=4,ro=[.125,.215,.35,.446,.526,.582],Gn=20,rr=new fa,ao=new zt;let ar=null,or=0,lr=0,cr=!1;const Bn=(1+Math.sqrt(5))/2,oi=1/Bn,oo=[new U(-Bn,oi,0),new U(Bn,oi,0),new U(-oi,0,Bn),new U(oi,0,Bn),new U(0,Bn,-oi),new U(0,Bn,oi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Qu=new U;class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qu}=r;ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,or,lr),this._renderer.xr.enabled=cr,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Wi,format:Ve,colorSpace:Mi,depthBuffer:!1},i=co(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(r)),this._blurMaterial=ef(r,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,i,r){const l=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ao),u.toneMapping=Tn,u.autoClear=!1;const g=new tn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new D(new et,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(ao),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[E]));const v=this._cubeSize;gs(i,b*v,E>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gi||t.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new D(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oo[(i-r-1)%oo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new D(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const p=[];let E=0;for(let w=0;w<Gn;++w){const C=w/_,y=Math.exp(-C*C/2);p.push(y),w===0?E+=y:w<m&&(E+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const v=this._sizeLods[i],P=3*v*(i>b-ci?i-b+ci:0),R=4*(this._cubeSize-v);gs(e,P,R,3*v,2*v),l.setRenderTarget(e),l.render(u,rr)}}function tf(s){const t=[],e=[],n=[];let i=s;const r=s-ci+1+ro.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ci?l=ro[a-s+ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,C=R>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];E.set(y,_*g*R),b.set(h,m*g*R);const x=[R,R,R,R,R,R];v.set(x,p*g*R)}const P=new we;P.setAttribute("position",new We(E,_)),P.setAttribute("uv",new We(b,m)),P.setAttribute("faceIndex",new We(v,p)),t.push(P),i>ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function co(s,t,e){const n=new An(s,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ef(s,t,e){const n=new Float32Array(Gn),i=new U(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function ho(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function uo(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mr||l===Sr,d=l===gi||l===_i;if(c||d){let u=t.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new lo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new lo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Nn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rf(s,t,e,n){const i={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)t.update(h[f],s.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,v=E.length;b<v;b+=3){const P=E[b+0],R=E[b+1],w=E[b+2];h.push(P,R,R,w,w,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const P=b+0,R=b+1,w=b+2;h.push(P,R,R,w,w,P)}}else return;const m=new(Zo(h)?Qo:Jo)(h,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function af(s,t,e){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*a),e.update(f,n,1)}function c(h,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,h*a,g),e.update(f,n,g))}function d(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(h,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function of(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,t,e){const n=new WeakMap,i=new ae;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=o.attributes.position.count*v,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*R*4*u),C=new Ko(w,P,R,u);C.type=sn,C.needsUpdate=!0;const y=v*4;for(let A=0;A<u;A++){const G=p[A],z=E[A],H=b[A],X=P*R*4*A;for(let Y=0;Y<G.count;Y++){const J=Y*y;g===!0&&(i.fromBufferAttribute(G,Y),w[X+J+0]=i.x,w[X+J+1]=i.y,w[X+J+2]=i.z,w[X+J+3]=0),_===!0&&(i.fromBufferAttribute(z,Y),w[X+J+4]=i.x,w[X+J+5]=i.y,w[X+J+6]=i.z,w[X+J+7]=0),m===!0&&(i.fromBufferAttribute(H,Y),w[X+J+8]=i.x,w[X+J+9]=i.y,w[X+J+10]=i.z,w[X+J+11]=H.itemSize===4?i.w:1)}}h={count:u,texture:C,size:new $t(P,R)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function cf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=t.get(l,d);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const ll=new Te,fo=new al(1,1),cl=new Ko,hl=new Pc,dl=new nl,po=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Ai(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=po[i];if(r===void 0&&(r=new Float32Array(i),po[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Is(s,t){let e=mo[t];e===void 0&&(e=new Int32Array(t),mo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;vo.set(n),s.uniformMatrix2fv(this.addr,!1,vo),_e(e,n)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;_o.set(n),s.uniformMatrix3fv(this.addr,!1,_o),_e(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;go.set(n),s.uniformMatrix4fv(this.addr,!1,go),_e(e,n)}}function _f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fo.compareFunction=Yo,r=fo):r=ll,e.setTexture2D(t||r,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hl,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dl,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cl,i)}function Cf(s){switch(s){case 5126:return hf;case 35664:return df;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return yf;case 36295:return bf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}function Pf(s,t){s.uniform1fv(this.addr,t)}function Lf(s,t){const e=Ai(t,this.size,2);s.uniform2fv(this.addr,e)}function If(s,t){const e=Ai(t,this.size,3);s.uniform3fv(this.addr,e)}function Df(s,t){const e=Ai(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=Ai(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=Ai(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Nf(s,t){const e=Ai(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Of(s,t){s.uniform1iv(this.addr,t)}function Bf(s,t){s.uniform2iv(this.addr,t)}function kf(s,t){s.uniform3iv(this.addr,t)}function Gf(s,t){s.uniform4iv(this.addr,t)}function zf(s,t){s.uniform1uiv(this.addr,t)}function Hf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Wf(s,t){s.uniform4uiv(this.addr,t)}function Xf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ll,r[a])}function $f(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hl,r[a])}function qf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dl,r[a])}function Yf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||cl,r[a])}function Zf(s){switch(s){case 5126:return Pf;case 35664:return Lf;case 35665:return If;case 35666:return Df;case 35674:return Uf;case 35675:return Ff;case 35676:return Nf;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return kf;case 35669:case 35673:return Gf;case 5125:return zf;case 36294:return Hf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cf(e.type)}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}}class Jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function xo(s,t){s.seq.push(t),s.map[t.id]=t}function Qf(s,t,e){const n=s.name,i=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),a=hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xo(e,c===void 0?new Kf(o,s,t):new jf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Jf(o),xo(e,u)),e=u}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Qf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Mo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tp=37297;let ep=0;function np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const So=new Ot;function ip(s){te._getMatrix(So,te.workingColorSpace,s);const t=`mat3( ${So.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case As:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+np(s.getShaderSource(t),a)}else return i}function sp(s,t){const e=ip(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rp(s,t){let e;switch(t){case zl:e="Linear";break;case Hl:e="Reinhard";break;case Vl:e="Cineon";break;case Wl:e="ACESFilmic";break;case $l:e="AgX";break;case ql:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _s=new U;function ap(){te.getLuminanceCoefficients(_s);const s=_s.x.toFixed(4),t=_s.y.toFixed(4),e=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function lp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Bi(s){return s!==""}function bo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(hp,up)}const dp=new Map;function up(s,t){let e=Gt[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(s){return s.replace(fp,pp)}function pp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wo(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function mp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case No:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case Gl:t="ENVMAP_BLENDING_ADD";break}return t}function xp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=mp(e),c=gp(e),d=_p(e),u=vp(e),h=xp(e),f=op(e),g=lp(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),p.length>0&&(p+=`
`)):(m=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=jr(a),a=bo(a,e),a=Eo(a,e),o=jr(o),o=bo(o,e),o=Eo(o,e),a=To(a),o=To(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,v=E+p+o,P=Mo(i,i.VERTEX_SHADER,b),R=Mo(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(A){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(R).trim();let X=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,R);else{const J=yo(i,P,"vertex"),V=yo(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+J+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||H==="")&&(Y=!1);Y&&(A.diagnostics={runnable:X,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(P),i.deleteShader(R),C=new ws(i,_),y=cp(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,tp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ep++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let Sp=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ep(s,t,e,n,i,r,a){const o=new ca,l=new yp,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,A,G,z){const H=G.fog,X=z.geometry,Y=y.isMeshStandardMaterial?G.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),V=J&&J.mapping===Ls?J.image.height:null,it=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=nt!==void 0?nt.length:0;let St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let Ft,j,Z,ht;if(it){const ie=en[it];Ft=ie.vertexShader,j=ie.fragmentShader}else Ft=y.vertexShader,j=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),ht=l.getFragmentShaderID(y);const Q=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,ce=!!y.map,Bt=!!y.matcap,Ht=!!J,L=!!y.aoMap,Pe=!!y.lightMap,At=!!y.bumpMap,Vt=!!y.normalMap,pt=!!y.displacementMap,Jt=!!y.emissiveMap,yt=!!y.metalnessMap,T=!!y.roughnessMap,M=y.anisotropy>0,W=y.clearcoat>0,I=y.dispersion>0,O=y.iridescence>0,N=y.sheen>0,gt=y.transmission>0,ct=M&&!!y.anisotropyMap,_t=W&&!!y.clearcoatMap,Zt=W&&!!y.clearcoatNormalMap,rt=W&&!!y.clearcoatRoughnessMap,vt=O&&!!y.iridescenceMap,Ct=O&&!!y.iridescenceThicknessMap,It=N&&!!y.sheenColorMap,xt=N&&!!y.sheenRoughnessMap,qt=!!y.specularMap,kt=!!y.specularColorMap,oe=!!y.specularIntensityMap,F=gt&&!!y.transmissionMap,ot=gt&&!!y.thicknessMap,K=!!y.gradientMap,tt=!!y.alphaMap,ut=y.alphaTest>0,dt=!!y.alphaHash,Nt=!!y.extensions;let ue=Tn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Se={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Ft,fragmentShader:j,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:Bt,envMap:Ht,envMapMode:Ht&&J.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Pe,bumpMap:At,normalMap:Vt,displacementMap:h&&pt,emissiveMap:Jt,normalMapObjectSpace:Vt&&y.normalMapType===jl,normalMapTangentSpace:Vt&&y.normalMapType===qo,metalnessMap:yt,roughnessMap:T,anisotropy:M,anisotropyMap:ct,clearcoat:W,clearcoatMap:_t,clearcoatNormalMap:Zt,clearcoatRoughnessMap:rt,dispersion:I,iridescence:O,iridescenceMap:vt,iridescenceThicknessMap:Ct,sheen:N,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:qt,specularColorMap:kt,specularIntensityMap:oe,transmission:gt,transmissionMap:F,thicknessMap:ot,gradientMap:K,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:ut,alphaHash:dt,combine:y.combine,mapUv:ce&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:At&&_(y.bumpMap.channel),normalMapUv:Vt&&_(y.normalMap.channel),displacementMapUv:pt&&_(y.displacementMap.channel),emissiveMapUv:Jt&&_(y.emissiveMap.channel),metalnessMapUv:yt&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(y.sheenRoughnessMap.channel),specularMapUv:qt&&_(y.specularMap.channel),specularColorMapUv:kt&&_(y.specularColorMap.channel),specularIntensityMapUv:oe&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ot&&_(y.thicknessMap.channel),alphaMapUv:tt&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Vt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(ce||tt),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:St,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wt,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(E(x,y),b(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const x=g[y.type];let A;if(x){const G=en[x];A=Vc.clone(G.uniforms)}else A=y.uniforms;return A}function P(y,x){let A;for(let G=0,z=d.length;G<z;G++){const H=d[G];if(H.cacheKey===x){A=H,++A.usedTimes;break}}return A===void 0&&(A=new Mp(s,x,y,r),d.push(A)),A}function R(y){if(--y.usedTimes===0){const x=d.indexOf(y);d[x]=d[d.length-1],d.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:C}}function Tp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ao(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ro(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,h,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,h,f,g,_,m){const p=a(u,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,h,f,g,_,m){const p=a(u,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||wp),n.length>1&&n.sort(h||Ao),i.length>1&&i.sort(h||Ao)}function d(){for(let u=t,h=s.length;u<h;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function Ap(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ro,s.set(n,[a])):i>=r.length?(a=new Ro,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pp=0;function Lp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ip(s){const t=new Rp,e=Cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new jt,a=new jt;function o(c){let d=0,u=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,b=0,v=0,P=0,R=0,w=0;c.sort(Lp);for(let y=0,x=c.length;y<x;y++){const A=c[y],G=A.color,z=A.intensity,H=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=G.r*z,u+=G.g*z,h+=G.b*z;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],z);w++}else if(A.isDirectionalLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,V=e.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=A.shadow.matrix,E++}n.directional[f]=Y,f++}else if(A.isSpotLight){const Y=t.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(G).multiplyScalar(z),Y.distance=H,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[_]=Y;const J=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,J.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,A.castShadow){const V=e.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(A.isRectAreaLight){const Y=t.get(A);Y.color.copy(G).multiplyScalar(z),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=Y,m++}else if(A.isPointLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const J=A.shadow,V=e.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=Y,g++}else if(A.isHemisphereLight){const Y=t.get(A);Y.skyColor.copy(A.color).multiplyScalar(z),Y.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=w,n.version=Pp++)}function l(c,d){let u=0,h=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Co(s){const t=new Ip(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Co(s),t.set(i,[o])):r>=a.length?(o=new Co(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Up=`void main() {
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
}`;function Np(s,t,e){let n=new da;const i=new $t,r=new $t,a=new ae,o=new th({depthPacking:Kl}),l=new eh,c={},d=e.maxTextureSize,u={[wn]:Ue,[Ue]:wn,[Wt]:Wt},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Up,fragmentShader:Fp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let p=this.type;this.render=function(R,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),G=s.state;G.setBlending(En),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=p!==dn&&this.type===dn,H=p===dn&&this.type!==dn;for(let X=0,Y=R.length;X<Y;X++){const J=R[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/it.x),i.x=r.x*it.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/it.y),i.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||z===!0||H===!0){const ft=this.type!==dn?{minFilter:he,magFilter:he}:{};V.map!==null&&V.map.dispose(),V.map=new An(i.x,i.y,ft),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const nt=V.getViewportCount();for(let ft=0;ft<nt;ft++){const St=V.getViewport(ft);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),G.viewport(a),V.updateMatrices(J,ft),n=V.getFrustum(),v(w,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===dn&&E(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,x,A)};function E(R,w){const C=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(i.x,i.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,C,h,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function b(R,w,C,y){let x=null;const A=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=x.uuid,z=w.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let X=H[z];X===void 0&&(X=x.clone(),H[z]=X,w.addEventListener("dispose",P)),x=X}if(x.visible=w.visible,x.wireframe=w.wireframe,y===dn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:u[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=C}return x}function v(R,w,C,y,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const z=t.update(R),H=R.material;if(Array.isArray(H)){const X=z.groups;for(let Y=0,J=X.length;Y<J;Y++){const V=X[Y],it=H[V.materialIndex];if(it&&it.visible){const nt=b(R,it,y,x);R.onBeforeShadow(s,R,w,C,z,nt,V),s.renderBufferDirect(C,null,z,nt,R,V),R.onAfterShadow(s,R,w,C,z,nt,V)}}}else if(H.visible){const X=b(R,H,y,x);R.onBeforeShadow(s,R,w,C,z,X,null),s.renderBufferDirect(C,null,z,X,R,null),R.onAfterShadow(s,R,w,C,z,X,null)}}const G=R.children;for(let z=0,H=G.length;z<H;z++)v(G[z],w,C,y,x)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const y=c[C],x=R.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Op={[fr]:pr,[mr]:vr,[gr]:xr,[mi]:_r,[pr]:fr,[vr]:mr,[xr]:gr,[_r]:mi};function Bp(s,t){function e(){let F=!1;const ot=new ae;let K=null;const tt=new ae(0,0,0,0);return{setMask:function(ut){K!==ut&&!F&&(s.colorMask(ut,ut,ut,ut),K=ut)},setLocked:function(ut){F=ut},setClear:function(ut,dt,Nt,ue,Se){Se===!0&&(ut*=ue,dt*=ue,Nt*=ue),ot.set(ut,dt,Nt,ue),tt.equals(ot)===!1&&(s.clearColor(ut,dt,Nt,ue),tt.copy(ot))},reset:function(){F=!1,K=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,K=null,tt=null,ut=null;return{setReversed:function(dt){if(ot!==dt){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}ot=dt},getReversed:function(){return ot},setTest:function(dt){dt?Q(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(dt){K!==dt&&!F&&(s.depthMask(dt),K=dt)},setFunc:function(dt){if(ot&&(dt=Op[dt]),tt!==dt){switch(dt){case fr:s.depthFunc(s.NEVER);break;case pr:s.depthFunc(s.ALWAYS);break;case mr:s.depthFunc(s.LESS);break;case mi:s.depthFunc(s.LEQUAL);break;case gr:s.depthFunc(s.EQUAL);break;case _r:s.depthFunc(s.GEQUAL);break;case vr:s.depthFunc(s.GREATER);break;case xr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=dt}},setLocked:function(dt){F=dt},setClear:function(dt){ut!==dt&&(ot&&(dt=1-dt),s.clearDepth(dt),ut=dt)},reset:function(){F=!1,K=null,tt=null,ut=null,ot=!1}}}function i(){let F=!1,ot=null,K=null,tt=null,ut=null,dt=null,Nt=null,ue=null,Se=null;return{setTest:function(ie){F||(ie?Q(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(ie){ot!==ie&&!F&&(s.stencilMask(ie),ot=ie)},setFunc:function(ie,Xe,rn){(K!==ie||tt!==Xe||ut!==rn)&&(s.stencilFunc(ie,Xe,rn),K=ie,tt=Xe,ut=rn)},setOp:function(ie,Xe,rn){(dt!==ie||Nt!==Xe||ue!==rn)&&(s.stencilOp(ie,Xe,rn),dt=ie,Nt=Xe,ue=rn)},setLocked:function(ie){F=ie},setClear:function(ie){Se!==ie&&(s.clearStencil(ie),Se=ie)},reset:function(){F=!1,ot=null,K=null,tt=null,ut=null,dt=null,Nt=null,ue=null,Se=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,P=null,R=null,w=new zt(0,0,0),C=0,y=!1,x=null,A=null,G=null,z=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=J>=2);let it=null,nt={};const ft=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Ft=new ae().fromArray(ft),j=new ae().fromArray(St);function Z(F,ot,K,tt){const ut=new Uint8Array(4),dt=s.createTexture();s.bindTexture(F,dt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<K;Nt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(ot+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return dt}const ht={};ht[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(mi),At(!1),Vt(ya),Q(s.CULL_FACE),L(En);function Q(F){d[F]!==!0&&(s.enable(F),d[F]=!0)}function bt(F){d[F]!==!1&&(s.disable(F),d[F]=!1)}function Rt(F,ot){return u[F]!==ot?(s.bindFramebuffer(F,ot),u[F]=ot,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ot),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function Et(F,ot){let K=f,tt=!1;if(F){K=h.get(ot),K===void 0&&(K=[],h.set(ot,K));const ut=F.textures;if(K.length!==ut.length||K[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Nt=ut.length;dt<Nt;dt++)K[dt]=s.COLOR_ATTACHMENT0+dt;K.length=ut.length,tt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,tt=!0);tt&&s.drawBuffers(K)}function ce(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Bt={[kn]:s.FUNC_ADD,[yl]:s.FUNC_SUBTRACT,[bl]:s.FUNC_REVERSE_SUBTRACT};Bt[El]=s.MIN,Bt[Tl]=s.MAX;const Ht={[wl]:s.ZERO,[Al]:s.ONE,[Rl]:s.SRC_COLOR,[dr]:s.SRC_ALPHA,[Ul]:s.SRC_ALPHA_SATURATE,[Il]:s.DST_COLOR,[Pl]:s.DST_ALPHA,[Cl]:s.ONE_MINUS_SRC_COLOR,[ur]:s.ONE_MINUS_SRC_ALPHA,[Dl]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Fl]:s.CONSTANT_COLOR,[Nl]:s.ONE_MINUS_CONSTANT_COLOR,[Ol]:s.CONSTANT_ALPHA,[Bl]:s.ONE_MINUS_CONSTANT_ALPHA};function L(F,ot,K,tt,ut,dt,Nt,ue,Se,ie){if(F===En){_===!0&&(bt(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),F!==Sl){if(F!==m||ie!==y){if((p!==kn||v!==kn)&&(s.blendEquation(s.FUNC_ADD),p=kn,v=kn),ie)switch(F){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,b=null,P=null,R=null,w.set(0,0,0),C=0,m=F,y=ie}return}ut=ut||ot,dt=dt||K,Nt=Nt||tt,(ot!==p||ut!==v)&&(s.blendEquationSeparate(Bt[ot],Bt[ut]),p=ot,v=ut),(K!==E||tt!==b||dt!==P||Nt!==R)&&(s.blendFuncSeparate(Ht[K],Ht[tt],Ht[dt],Ht[Nt]),E=K,b=tt,P=dt,R=Nt),(ue.equals(w)===!1||Se!==C)&&(s.blendColor(ue.r,ue.g,ue.b,Se),w.copy(ue),C=Se),m=F,y=!1}function Pe(F,ot){F.side===Wt?bt(s.CULL_FACE):Q(s.CULL_FACE);let K=F.side===Ue;ot&&(K=!K),At(K),F.blending===di&&F.transparent===!1?L(En):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){x!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),x=F)}function Vt(F){F!==xl?(Q(s.CULL_FACE),F!==A&&(F===ya?s.cullFace(s.BACK):F===Ml?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),A=F}function pt(F){F!==G&&(Y&&s.lineWidth(F),G=F)}function Jt(F,ot,K){F?(Q(s.POLYGON_OFFSET_FILL),(z!==ot||H!==K)&&(s.polygonOffset(ot,K),z=ot,H=K)):bt(s.POLYGON_OFFSET_FILL)}function yt(F){F?Q(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function T(F){F===void 0&&(F=s.TEXTURE0+X-1),it!==F&&(s.activeTexture(F),it=F)}function M(F,ot,K){K===void 0&&(it===null?K=s.TEXTURE0+X-1:K=it);let tt=nt[K];tt===void 0&&(tt={type:void 0,texture:void 0},nt[K]=tt),(tt.type!==F||tt.texture!==ot)&&(it!==K&&(s.activeTexture(K),it=K),s.bindTexture(F,ot||ht[F]),tt.type=F,tt.texture=ot)}function W(){const F=nt[it];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function I(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){Ft.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function xt(F){j.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function qt(F,ot){let K=c.get(ot);K===void 0&&(K=new WeakMap,c.set(ot,K));let tt=K.get(F);tt===void 0&&(tt=s.getUniformBlockIndex(ot,F.name),K.set(F,tt))}function kt(F,ot){const tt=c.get(ot).get(F);l.get(ot)!==tt&&(s.uniformBlockBinding(ot,tt,F.__bindingPointIndex),l.set(ot,tt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,nt={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,P=null,R=null,w=new zt(0,0,0),C=0,y=!1,x=null,A=null,G=null,z=null,H=null,Ft.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:bt,bindFramebuffer:Rt,drawBuffers:Et,useProgram:ce,setBlending:L,setMaterial:Pe,setFlipSided:At,setCullFace:Vt,setLineWidth:pt,setPolygonOffset:Jt,setScissorTest:yt,activeTexture:T,bindTexture:M,unbindTexture:W,compressedTexImage2D:I,compressedTexImage3D:O,texImage2D:vt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:N,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:It,viewport:xt,reset:oe}}function kp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Cs("canvas")}function _(T,M,W){let I=1;const O=yt(T);if((O.width>W||O.height>W)&&(I=W/Math.max(O.width,O.height)),I<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const N=Math.floor(I*O.width),gt=Math.floor(I*O.height);u===void 0&&(u=g(N,gt));const ct=M?g(N,gt):u;return ct.width=N,ct.height=gt,ct.getContext("2d").drawImage(T,0,0,N,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+N+"x"+gt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,M,W,I,O=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let N=M;if(M===s.RED&&(W===s.FLOAT&&(N=s.R32F),W===s.HALF_FLOAT&&(N=s.R16F),W===s.UNSIGNED_BYTE&&(N=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(N=s.R8UI),W===s.UNSIGNED_SHORT&&(N=s.R16UI),W===s.UNSIGNED_INT&&(N=s.R32UI),W===s.BYTE&&(N=s.R8I),W===s.SHORT&&(N=s.R16I),W===s.INT&&(N=s.R32I)),M===s.RG&&(W===s.FLOAT&&(N=s.RG32F),W===s.HALF_FLOAT&&(N=s.RG16F),W===s.UNSIGNED_BYTE&&(N=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(N=s.RG8UI),W===s.UNSIGNED_SHORT&&(N=s.RG16UI),W===s.UNSIGNED_INT&&(N=s.RG32UI),W===s.BYTE&&(N=s.RG8I),W===s.SHORT&&(N=s.RG16I),W===s.INT&&(N=s.RG32I)),M===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(N=s.RGB8UI),W===s.UNSIGNED_SHORT&&(N=s.RGB16UI),W===s.UNSIGNED_INT&&(N=s.RGB32UI),W===s.BYTE&&(N=s.RGB8I),W===s.SHORT&&(N=s.RGB16I),W===s.INT&&(N=s.RGB32I)),M===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(N=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(N=s.RGBA16UI),W===s.UNSIGNED_INT&&(N=s.RGBA32UI),W===s.BYTE&&(N=s.RGBA8I),W===s.SHORT&&(N=s.RGBA16I),W===s.INT&&(N=s.RGBA32I)),M===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(N=s.RGB9_E5),M===s.RGBA){const gt=O?As:te.getTransfer(I);W===s.FLOAT&&(N=s.RGBA32F),W===s.HALF_FLOAT&&(N=s.RGBA16F),W===s.UNSIGNED_BYTE&&(N=gt===se?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(N=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(N=s.RGB5_A1)}return(N===s.R16F||N===s.R32F||N===s.RG16F||N===s.RG32F||N===s.RGBA16F||N===s.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function v(T,M){let W;return T?M===null||M===Wn||M===vi?W=s.DEPTH24_STENCIL8:M===sn?W=s.DEPTH32F_STENCIL8:M===Vi&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===vi?W=s.DEPTH_COMPONENT24:M===sn?W=s.DEPTH_COMPONENT32F:M===Vi&&(W=s.DEPTH_COMPONENT16),W}function P(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==he&&T.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&d.delete(M)}function w(T){const M=T.target;M.removeEventListener("dispose",w),x(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const W=T.source,I=h.get(W);if(I){const O=I[M.__cacheKey];O.usedTimes--,O.usedTimes===0&&y(T),Object.keys(I).length===0&&h.delete(W)}n.remove(T)}function y(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const W=T.source,I=h.get(W);delete I[M.__cacheKey],a.memory.textures--}function x(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(M.__webglFramebuffer[I]))for(let O=0;O<M.__webglFramebuffer[I].length;O++)s.deleteFramebuffer(M.__webglFramebuffer[I][O]);else s.deleteFramebuffer(M.__webglFramebuffer[I]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[I])}else{if(Array.isArray(M.__webglFramebuffer))for(let I=0;I<M.__webglFramebuffer.length;I++)s.deleteFramebuffer(M.__webglFramebuffer[I]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let I=0;I<M.__webglColorRenderbuffer.length;I++)M.__webglColorRenderbuffer[I]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[I]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=T.textures;for(let I=0,O=W.length;I<O;I++){const N=n.get(W[I]);N.__webglTexture&&(s.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(W[I])}n.remove(T)}let A=0;function G(){A=0}function z(){const T=A;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),A+=1,T}function H(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function X(T,M){const W=n.get(T);if(T.isVideoTexture&&pt(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){const I=T.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,T,M);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function Y(T,M){const W=n.get(T);if(T.version>0&&W.__version!==T.version){j(W,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function J(T,M){const W=n.get(T);if(T.version>0&&W.__version!==T.version){j(W,T,M);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function V(T,M){const W=n.get(T);if(T.version>0&&W.__version!==T.version){Z(W,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const it={[Hi]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},nt={[he]:s.NEAREST,[Yl]:s.NEAREST_MIPMAP_NEAREST,[Yi]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Fs]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},ft={[Jl]:s.NEVER,[sc]:s.ALWAYS,[Ql]:s.LESS,[Yo]:s.LEQUAL,[tc]:s.EQUAL,[ic]:s.GEQUAL,[ec]:s.GREATER,[nc]:s.NOTEQUAL};function St(T,M){if(M.type===sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===Fs||M.magFilter===Yi||M.magFilter===Hn||M.minFilter===nn||M.minFilter===Fs||M.minFilter===Yi||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,it[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,it[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,it[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,nt[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,nt[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===he||M.minFilter!==Yi&&M.minFilter!==Hn||M.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ft(T,M){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const I=M.source;let O=h.get(I);O===void 0&&(O={},h.set(I,O));const N=H(M);if(N!==T.__cacheKey){O[N]===void 0&&(O[N]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),O[N].usedTimes++;const gt=O[T.__cacheKey];gt!==void 0&&(O[T.__cacheKey].usedTimes--,gt.usedTimes===0&&y(M)),T.__cacheKey=N,T.__webglTexture=O[N].texture}return W}function j(T,M,W){let I=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=s.TEXTURE_3D);const O=Ft(T,M),N=M.source;e.bindTexture(I,T.__webglTexture,s.TEXTURE0+W);const gt=n.get(N);if(N.version!==gt.__version||O===!0){e.activeTexture(s.TEXTURE0+W);const ct=te.getPrimaries(te.workingColorSpace),_t=M.colorSpace===bn?null:te.getPrimaries(M.colorSpace),Zt=M.colorSpace===bn||ct===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=_(M.image,!1,i.maxTextureSize);rt=Jt(M,rt);const vt=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type);let It=b(M.internalFormat,vt,Ct,M.colorSpace,M.isVideoTexture);St(I,M);let xt;const qt=M.mipmaps,kt=M.isVideoTexture!==!0,oe=gt.__version===void 0||O===!0,F=N.dataReady,ot=P(M,rt);if(M.isDepthTexture)It=v(M.format===xi,M.type),oe&&(kt?e.texStorage2D(s.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,vt,Ct,null));else if(M.isDataTexture)if(qt.length>0){kt&&oe&&e.texStorage2D(s.TEXTURE_2D,ot,It,qt[0].width,qt[0].height);for(let K=0,tt=qt.length;K<tt;K++)xt=qt[K],kt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,K,It,xt.width,xt.height,0,vt,Ct,xt.data);M.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(s.TEXTURE_2D,ot,It,rt.width,rt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,vt,Ct,rt.data)):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,vt,Ct,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,It,qt[0].width,qt[0].height,rt.depth);for(let K=0,tt=qt.length;K<tt;K++)if(xt=qt[K],M.format!==Ve)if(vt!==null)if(kt){if(F)if(M.layerUpdates.size>0){const ut=so(xt.width,xt.height,M.format,M.type);for(const dt of M.layerUpdates){const Nt=xt.data.subarray(dt*ut/xt.data.BYTES_PER_ELEMENT,(dt+1)*ut/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,dt,xt.width,xt.height,1,vt,Nt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,rt.depth,vt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,It,xt.width,xt.height,rt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,rt.depth,vt,Ct,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,It,xt.width,xt.height,rt.depth,0,vt,Ct,xt.data)}else{kt&&oe&&e.texStorage2D(s.TEXTURE_2D,ot,It,qt[0].width,qt[0].height);for(let K=0,tt=qt.length;K<tt;K++)xt=qt[K],M.format!==Ve?vt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,Ct,xt.data):e.texImage2D(s.TEXTURE_2D,K,It,xt.width,xt.height,0,vt,Ct,xt.data)}else if(M.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,It,rt.width,rt.height,rt.depth),F)if(M.layerUpdates.size>0){const K=so(rt.width,rt.height,M.format,M.type);for(const tt of M.layerUpdates){const ut=rt.data.subarray(tt*K/rt.data.BYTES_PER_ELEMENT,(tt+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,vt,Ct,ut)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,Ct,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,vt,Ct,rt.data);else if(M.isData3DTexture)kt?(oe&&e.texStorage3D(s.TEXTURE_3D,ot,It,rt.width,rt.height,rt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,Ct,rt.data)):e.texImage3D(s.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,vt,Ct,rt.data);else if(M.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(s.TEXTURE_2D,ot,It,rt.width,rt.height);else{let K=rt.width,tt=rt.height;for(let ut=0;ut<ot;ut++)e.texImage2D(s.TEXTURE_2D,ut,It,K,tt,0,vt,Ct,null),K>>=1,tt>>=1}}else if(qt.length>0){if(kt&&oe){const K=yt(qt[0]);e.texStorage2D(s.TEXTURE_2D,ot,It,K.width,K.height)}for(let K=0,tt=qt.length;K<tt;K++)xt=qt[K],kt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,vt,Ct,xt):e.texImage2D(s.TEXTURE_2D,K,It,vt,Ct,xt);M.generateMipmaps=!1}else if(kt){if(oe){const K=yt(rt);e.texStorage2D(s.TEXTURE_2D,ot,It,K.width,K.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ct,rt)}else e.texImage2D(s.TEXTURE_2D,0,It,vt,Ct,rt);m(M)&&p(I),gt.__version=N.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Z(T,M,W){if(M.image.length!==6)return;const I=Ft(T,M),O=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+W);const N=n.get(O);if(O.version!==N.__version||I===!0){e.activeTexture(s.TEXTURE0+W);const gt=te.getPrimaries(te.workingColorSpace),ct=M.colorSpace===bn?null:te.getPrimaries(M.colorSpace),_t=M.colorSpace===bn||gt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Zt&&!rt?vt[tt]=_(M.image[tt],!0,i.maxCubemapSize):vt[tt]=rt?M.image[tt].image:M.image[tt],vt[tt]=Jt(M,vt[tt]);const Ct=vt[0],It=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),qt=b(M.internalFormat,It,xt,M.colorSpace),kt=M.isVideoTexture!==!0,oe=N.__version===void 0||I===!0,F=O.dataReady;let ot=P(M,Ct);St(s.TEXTURE_CUBE_MAP,M);let K;if(Zt){kt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,qt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){K=vt[tt].mipmaps;for(let ut=0;ut<K.length;ut++){const dt=K[ut];M.format!==Ve?It!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,dt.width,dt.height,It,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,dt.width,dt.height,It,xt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,qt,dt.width,dt.height,0,It,xt,dt.data)}}}else{if(K=M.mipmaps,kt&&oe){K.length>0&&ot++;const tt=yt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,It,xt,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,vt[tt].width,vt[tt].height,0,It,xt,vt[tt].data);for(let ut=0;ut<K.length;ut++){const Nt=K[ut].image[tt].image;kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,Nt.width,Nt.height,It,xt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,qt,Nt.width,Nt.height,0,It,xt,Nt.data)}}else{kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,xt,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,It,xt,vt[tt]);for(let ut=0;ut<K.length;ut++){const dt=K[ut];kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,It,xt,dt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,qt,It,xt,dt.image[tt])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),N.__version=O.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ht(T,M,W,I,O,N){const gt=r.convert(W.format,W.colorSpace),ct=r.convert(W.type),_t=b(W.internalFormat,gt,ct,W.colorSpace),Zt=n.get(M),rt=n.get(W);if(rt.__renderTarget=M,!Zt.__hasExternalTextures){const vt=Math.max(1,M.width>>N),Ct=Math.max(1,M.height>>N);O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?e.texImage3D(O,N,_t,vt,Ct,M.depth,0,gt,ct,null):e.texImage2D(O,N,_t,vt,Ct,0,gt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Vt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,I,O,rt.__webglTexture,0,At(M)):(O===s.TEXTURE_2D||O>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,I,O,rt.__webglTexture,N),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(T,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){const I=M.depthTexture,O=I&&I.isDepthTexture?I.type:null,N=v(M.stencilBuffer,O),gt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=At(M);Vt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,N,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,N,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,N,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,T)}else{const I=M.textures;for(let O=0;O<I.length;O++){const N=I[O],gt=r.convert(N.format,N.colorSpace),ct=r.convert(N.type),_t=b(N.internalFormat,gt,ct,N.colorSpace),Zt=At(M);W&&Vt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,_t,M.width,M.height):Vt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,_t,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_t,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=n.get(M.depthTexture);I.__renderTarget=M,(!I.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const O=I.__webglTexture,N=At(M);if(M.depthTexture.format===ui)Vt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0);else if(M.depthTexture.format===xi)Vt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Rt(T){const M=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const I=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){const O=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",O)};I.addEventListener("dispose",O),M.__depthDisposeCallback=O}M.__boundDepthTexture=I}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");bt(M.__webglFramebuffer,T)}else if(W){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=s.createRenderbuffer(),Q(M.__webglDepthbuffer[I],T,!1);else{const O=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer[I];s.bindRenderbuffer(s.RENDERBUFFER,N),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,N)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Q(M.__webglDepthbuffer,T,!1);else{const I=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,O)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(T,M,W){const I=n.get(T);M!==void 0&&ht(I.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Rt(T)}function ce(T){const M=T.texture,W=n.get(T),I=n.get(M);T.addEventListener("dispose",w);const O=T.textures,N=T.isWebGLCubeRenderTarget===!0,gt=O.length>1;if(gt||(I.__webglTexture===void 0&&(I.__webglTexture=s.createTexture()),I.__version=M.version,a.memory.textures++),N){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let _t=0;_t<M.mipmaps.length;_t++)W.__webglFramebuffer[ct][_t]=s.createFramebuffer()}else W.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)W.__webglFramebuffer[ct]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(gt)for(let ct=0,_t=O.length;ct<_t;ct++){const Zt=n.get(O[ct]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Vt(T)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ct=0;ct<O.length;ct++){const _t=O[ct];W.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ct]);const Zt=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),vt=b(_t.internalFormat,Zt,rt,_t.colorSpace,T.isXRRenderTarget===!0),Ct=At(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,vt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,W.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(N){e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture),St(s.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)ht(W.__webglFramebuffer[ct][_t],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else ht(W.__webglFramebuffer[ct],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,_t=O.length;ct<_t;ct++){const Zt=O[ct],rt=n.get(Zt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),St(s.TEXTURE_2D,Zt),ht(W.__webglFramebuffer,T,Zt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,I.__webglTexture),St(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)ht(W.__webglFramebuffer[_t],T,M,s.COLOR_ATTACHMENT0,ct,_t);else ht(W.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}T.depthBuffer&&Rt(T)}function Bt(T){const M=T.textures;for(let W=0,I=M.length;W<I;W++){const O=M[W];if(m(O)){const N=E(T),gt=n.get(O).__webglTexture;e.bindTexture(N,gt),p(N),e.unbindTexture()}}}const Ht=[],L=[];function Pe(T){if(T.samples>0){if(Vt(T)===!1){const M=T.textures,W=T.width,I=T.height;let O=s.COLOR_BUFFER_BIT;const N=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(T),ct=M.length>1;if(ct)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(O|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(O|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[_t]);const Zt=n.get(M[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,W,I,0,0,W,I,O,s.NEAREST),l===!0&&(Ht.length=0,L.length=0,Ht.push(s.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push(N),L.push(N),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,gt.__webglColorRenderbuffer[_t]);const Zt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function At(T){return Math.min(i.maxSamples,T.samples)}function Vt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(T){const M=a.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}function Jt(T,M){const W=T.colorSpace,I=T.format,O=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==Mi&&W!==bn&&(te.getTransfer(W)===se?(I!==Ve||O!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Et,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Vt}function Gp(s,t){function e(n,i=bn){let r;const a=te.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===ta)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ea)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return s.BYTE;if(n===ko)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===Qr)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Wi)return s.HALF_FLOAT;if(n===zo)return s.ALPHA;if(n===Ho)return s.RGB;if(n===Ve)return s.RGBA;if(n===Vo)return s.LUMINANCE;if(n===Wo)return s.LUMINANCE_ALPHA;if(n===ui)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===na)return s.RED;if(n===ia)return s.RED_INTEGER;if(n===Xo)return s.RG;if(n===sa)return s.RG_INTEGER;if(n===ra)return s.RGBA_INTEGER;if(n===Ms||n===Ss||n===ys||n===bs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===br||n===Er||n===Tr||n===wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ar||n===Rr||n===Cr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ar||n===Rr)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pr||n===Lr||n===Ir||n===Dr||n===Ur||n===Fr||n===Nr||n===Or||n===Br||n===kr||n===Gr||n===zr||n===Hr||n===Vr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ir)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Or)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===Wr||n===Xr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===$r||n===qr||n===Yr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const zp=`
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

}`;class Vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:zp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends bi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const _=new Vp,m=e.getContextAttributes();let p=null,E=null;const b=[],v=[],P=new $t;let R=null;const w=new Ie;w.viewport=new ae;const C=new Ie;C.viewport=new ae;const y=[w,C],x=new lh;let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=b[j];return Z===void 0&&(Z=new er,b[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=b[j];return Z===void 0&&(Z=new er,b[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=b[j];return Z===void 0&&(Z=new er,b[j]=Z),Z.getHandSpace()};function z(j){const Z=v.indexOf(j.inputSource);if(Z===-1)return;const ht=b[Z];ht!==void 0&&(ht.update(j.inputSource,j.frame,c||a),ht.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let j=0;j<b.length;j++){const Z=v[j];Z!==null&&(v[j]=null,b[j].disconnect(Z))}A=null,G=null,_.reset(),t.setRenderTarget(p),f=null,h=null,u=null,i=null,E=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Q=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?xi:ui,Q=m.stencil?vi:Wn);const Rt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(Rt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new An(h.textureWidth,h.textureHeight,{format:Ve,type:pn,depthTexture:new al(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new An(f.framebufferWidth,f.framebufferHeight,{format:Ve,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(j){for(let Z=0;Z<j.removed.length;Z++){const ht=j.removed[Z],Q=v.indexOf(ht);Q>=0&&(v[Q]=null,b[Q].disconnect(ht))}for(let Z=0;Z<j.added.length;Z++){const ht=j.added[Z];let Q=v.indexOf(ht);if(Q===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=v.length){v.push(ht),Q=Rt;break}else if(v[Rt]===null){v[Rt]=ht,Q=Rt;break}if(Q===-1)break}const bt=b[Q];bt&&bt.connect(ht)}}const Y=new U,J=new U;function V(j,Z,ht){Y.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ht.matrixWorld);const Q=Y.distanceTo(J),bt=Z.projectionMatrix.elements,Rt=ht.projectionMatrix.elements,Et=bt[14]/(bt[10]-1),ce=bt[14]/(bt[10]+1),Bt=(bt[9]+1)/bt[5],Ht=(bt[9]-1)/bt[5],L=(bt[8]-1)/bt[0],Pe=(Rt[8]+1)/Rt[0],At=Et*L,Vt=Et*Pe,pt=Q/(-L+Pe),Jt=pt*-L;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Jt),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const yt=Et+pt,T=ce+pt,M=At-Jt,W=Vt+(Q-Jt),I=Bt*ce/T*yt,O=Ht*ce/T*yt;j.projectionMatrix.makePerspective(M,W,I,O,yt,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Z=j.near,ht=j.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),x.near=C.near=w.near=Z,x.far=C.far=w.far=ht,(A!==x.near||G!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,G=x.far),w.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const Q=j.parent,bt=x.cameras;it(x,Q);for(let Rt=0;Rt<bt.length;Rt++)it(bt[Rt],Q);bt.length===2?V(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),nt(j,x,Q)};function nt(j,Z,ht){ht===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Si*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ft=null;function St(j,Z){if(d=Z.getViewerPose(c||a),g=Z,d!==null){const ht=d.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Q=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,Q=!0);for(let Et=0;Et<ht.length;Et++){const ce=ht[Et];let Bt=null;if(f!==null)Bt=f.getViewport(ce);else{const L=u.getViewSubImage(h,ce);Bt=L.viewport,Et===0&&(t.setRenderTargetTextures(E,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(E))}let Ht=y[Et];Ht===void 0&&(Ht=new Ie,Ht.layers.enable(Et),Ht.viewport=new ae,y[Et]=Ht),Ht.matrix.fromArray(ce.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ce.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Et===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Q===!0&&x.cameras.push(Ht)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Et=u.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,i.renderState)}}for(let ht=0;ht<b.length;ht++){const Q=v[ht],bt=b[ht];Q!==null&&bt!==void 0&&bt.update(Q,Z,c||a)}ft&&ft(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ft=new ol;Ft.setAnimationLoop(St),this.setAnimationLoop=function(j){ft=j},this.dispose=function(){}}}const Fn=new De,Xp=new jt;function $p(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Fn.copy(v),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Fn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=i[E.id];v===void 0&&(g(E),v=d(E),i[E.id]=v,E.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(E,P);const R=t.render.frame;r[E.id]!==R&&(h(E),r[E.id]=R)}function d(E){const b=u();E.__bindingPointIndex=b;const v=s.createBuffer(),P=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=i[E.id],v=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,w=v.length;R<w;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,x=C.length;y<x;y++){const A=C[y];if(f(A,R,y,P)===!0){const G=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let X=0;X<z.length;X++){const Y=z[X],J=_(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,G+H,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,b,v,P){const R=E.value,w=b+"_"+v;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const C=P[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(E){const b=E.uniforms;let v=0;const P=16;for(let w=0,C=b.length;w<C;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,A=y.length;x<A;x++){const G=y[x],z=Array.isArray(G.value)?G.value:[G.value];for(let H=0,X=z.length;H<X;H++){const Y=z[H],J=_(Y),V=v%P,it=V%J.boundary,nt=V+it;v+=it,nt!==0&&P-nt<J.storage&&(v+=P-nt),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}const R=v%P;return R>0&&(v+=P-R),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Yp{constructor(t={}){const{canvas:e=Sc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Tn,this.toneMappingExposure=1;const v=this;let P=!1,R=0,w=0,C=null,y=-1,x=null;const A=new ae,G=new ae;let z=null;const H=new zt(0);let X=0,Y=e.width,J=e.height,V=1,it=null,nt=null;const ft=new ae(0,0,Y,J),St=new ae(0,0,Y,J);let Ft=!1;const j=new da;let Z=!1,ht=!1;this.transmissionResolutionScale=1;const Q=new jt,bt=new jt,Rt=new U,Et=new ae,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Ht(){return C===null?V:1}let L=n;function Pe(S,B){return e.getContext(S,B)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jr}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const B="webgl2";if(L=Pe(B,S),L===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let At,Vt,pt,Jt,yt,T,M,W,I,O,N,gt,ct,_t,Zt,rt,vt,Ct,It,xt,qt,kt,oe,F;function ot(){At=new sf(L),At.init(),kt=new Gp(L,At),Vt=new Ku(L,At,t,kt),pt=new Bp(L,At),Vt.reverseDepthBuffer&&h&&pt.buffers.depth.setReversed(!0),Jt=new of(L),yt=new Tp,T=new kp(L,At,pt,yt,Vt,kt,Jt),M=new Ju(v),W=new nf(v),I=new uh(L),oe=new Yu(L,I),O=new rf(L,I,Jt,oe),N=new cf(L,O,I,Jt),It=new lf(L,Vt,T),rt=new ju(yt),gt=new Ep(v,M,W,At,Vt,oe,rt),ct=new $p(v,yt),_t=new Ap,Zt=new Dp(At),Ct=new qu(v,M,W,pt,N,f,l),vt=new Np(v,N,Vt),F=new qp(L,Jt,Vt,pt),xt=new Zu(L,At,Jt),qt=new af(L,At,Jt),Jt.programs=gt.programs,v.capabilities=Vt,v.extensions=At,v.properties=yt,v.renderLists=_t,v.shadowMap=vt,v.state=pt,v.info=Jt}ot();const K=new Wp(v,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=At.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=At.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(Y,J,!1))},this.getSize=function(S){return S.set(Y,J)},this.setSize=function(S,B,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,J=B,e.width=Math.floor(S*V),e.height=Math.floor(B*V),$===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Y*V,J*V).floor()},this.setDrawingBufferSize=function(S,B,$){Y=S,J=B,V=$,e.width=Math.floor(S*$),e.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(ft)},this.setViewport=function(S,B,$,q){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,B,$,q),pt.viewport(A.copy(ft).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,B,$,q){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,B,$,q),pt.scissor(G.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(S){pt.setScissorTest(Ft=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,$=!0){let q=0;if(S){let k=!1;if(C!==null){const st=C.texture.format;k=st===ra||st===sa||st===ia}if(k){const st=C.texture.type,lt=st===pn||st===Wn||st===Vi||st===vi||st===ta||st===ea,mt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Dt=mt.r,Ut=mt.g,Tt=mt.b;lt?(g[0]=Dt,g[1]=Ut,g[2]=Tt,g[3]=Mt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Dt,_[1]=Ut,_[2]=Tt,_[3]=Mt,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}B&&(q|=L.DEPTH_BUFFER_BIT),$&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Ct.dispose(),_t.dispose(),Zt.dispose(),yt.dispose(),M.dispose(),W.dispose(),N.dispose(),oe.dispose(),F.dispose(),gt.dispose(),K.dispose(),K.removeEventListener("sessionstart",ma),K.removeEventListener("sessionend",ga),Rn.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=Jt.autoReset,B=vt.enabled,$=vt.autoUpdate,q=vt.needsUpdate,k=vt.type;ot(),Jt.autoReset=S,vt.enabled=B,vt.autoUpdate=$,vt.needsUpdate=q,vt.type=k}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const B=S.target;B.removeEventListener("dispose",Nt),ue(B)}function ue(S){Se(S),yt.remove(S)}function Se(S){const B=yt.get(S).programs;B!==void 0&&(B.forEach(function($){gt.releaseProgram($)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,q,k,st){B===null&&(B=ce);const lt=k.isMesh&&k.matrixWorld.determinant()<0,mt=fl(S,B,$,q,k);pt.setMaterial(q,lt);let Mt=$.index,Dt=1;if(q.wireframe===!0){if(Mt=O.getWireframeAttribute($),Mt===void 0)return;Dt=2}const Ut=$.drawRange,Tt=$.attributes.position;let Kt=Ut.start*Dt,ee=(Ut.start+Ut.count)*Dt;st!==null&&(Kt=Math.max(Kt,st.start*Dt),ee=Math.min(ee,(st.start+st.count)*Dt)),Mt!==null?(Kt=Math.max(Kt,0),ee=Math.min(ee,Mt.count)):Tt!=null&&(Kt=Math.max(Kt,0),ee=Math.min(ee,Tt.count));const pe=ee-Kt;if(pe<0||pe===1/0)return;oe.setup(k,q,mt,$,Mt);let fe,Qt=xt;if(Mt!==null&&(fe=I.get(Mt),Qt=qt,Qt.setIndex(fe)),k.isMesh)q.wireframe===!0?(pt.setLineWidth(q.wireframeLinewidth*Ht()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(k.isLine){let wt=q.linewidth;wt===void 0&&(wt=1),pt.setLineWidth(wt*Ht()),k.isLineSegments?Qt.setMode(L.LINES):k.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else k.isPoints?Qt.setMode(L.POINTS):k.isSprite&&Qt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Nn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const wt=k._multiDrawStarts,Me=k._multiDrawCounts,ne=k._multiDrawCount,$e=Mt?I.get(Mt).bytesPerElement:1,$n=yt.get(q).currentProgram.getUniforms();for(let Fe=0;Fe<ne;Fe++)$n.setValue(L,"_gl_DrawID",Fe),Qt.render(wt[Fe]/$e,Me[Fe])}else if(k.isInstancedMesh)Qt.renderInstances(Kt,pe,k.count);else if($.isInstancedBufferGeometry){const wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,wt);Qt.renderInstances(Kt,pe,Me)}else Qt.render(Kt,pe)};function ie(S,B,$){S.transparent===!0&&S.side===Wt&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,qi(S,B,$),S.side=wn,S.needsUpdate=!0,qi(S,B,$),S.side=Wt):qi(S,B,$)}this.compile=function(S,B,$=null){$===null&&($=S),p=Zt.get($),p.init(B),b.push(p),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==$&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const st=k.material;if(st)if(Array.isArray(st))for(let lt=0;lt<st.length;lt++){const mt=st[lt];ie(mt,$,k),q.add(mt)}else ie(st,$,k),q.add(st)}),p=b.pop(),q},this.compileAsync=function(S,B,$=null){const q=this.compile(S,B,$);return new Promise(k=>{function st(){if(q.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&q.delete(lt)}),q.size===0){k(S);return}setTimeout(st,10)}At.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Xe=null;function rn(S){Xe&&Xe(S)}function ma(){Rn.stop()}function ga(){Rn.start()}const Rn=new ol;Rn.setAnimationLoop(rn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(S){Xe=S,K.setAnimationLoop(S),S===null?Rn.stop():Rn.start()},K.addEventListener("sessionstart",ma),K.addEventListener("sessionend",ga),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,C),p=Zt.get(S,b.length),p.init(B),b.push(p),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(bt),ht=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,ht),m=_t.get(S,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&Ds(st,B,-1/0,v.sortObjects)}Ds(S,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,nt),Bt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Bt&&Ct.addToRenderList(m,S),this.info.render.frame++,Z===!0&&rt.beginShadows();const $=p.state.shadowsArray;vt.render($,S,B),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const st=B.cameras;if(k.length>0)for(let lt=0,mt=st.length;lt<mt;lt++){const Mt=st[lt];va(q,k,S,Mt)}Bt&&Ct.render(S);for(let lt=0,mt=st.length;lt<mt;lt++){const Mt=st[lt];_a(m,S,Mt,Mt.viewport)}}else k.length>0&&va(q,k,S,B),Bt&&Ct.render(S),_a(m,S,B);C!==null&&w===0&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,B),oe.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],Z===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ds(S,B,$,q){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){q&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const lt=N.update(S),mt=S.material;mt.visible&&m.push(S,lt,mt,$,Et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const lt=N.update(S),mt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const Mt=lt.groups;for(let Dt=0,Ut=Mt.length;Dt<Ut;Dt++){const Tt=Mt[Dt],Kt=mt[Tt.materialIndex];Kt&&Kt.visible&&m.push(S,lt,Kt,$,Et.z,Tt)}}else mt.visible&&m.push(S,lt,mt,$,Et.z,null)}}const st=S.children;for(let lt=0,mt=st.length;lt<mt;lt++)Ds(st[lt],B,$,q)}function _a(S,B,$,q){const k=S.opaque,st=S.transmissive,lt=S.transparent;p.setupLightsView($),Z===!0&&rt.setGlobalState(v.clippingPlanes,$),q&&pt.viewport(A.copy(q)),k.length>0&&$i(k,B,$),st.length>0&&$i(st,B,$),lt.length>0&&$i(lt,B,$),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function va(S,B,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new An(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Wi:pn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const st=p.state.transmissionRenderTarget[q.id],lt=q.viewport||A;st.setSize(lt.z*v.transmissionResolutionScale,lt.w*v.transmissionResolutionScale);const mt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&Ct.render($);const Mt=v.toneMapping;v.toneMapping=Tn;const Dt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Z===!0&&rt.setGlobalState(v.clippingPlanes,q),$i(S,$,q),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,Kt=B.length;Tt<Kt;Tt++){const ee=B[Tt],pe=ee.object,fe=ee.geometry,Qt=ee.material,wt=ee.group;if(Qt.side===Wt&&pe.layers.test(q.layers)){const Me=Qt.side;Qt.side=Ue,Qt.needsUpdate=!0,xa(pe,$,q,fe,Qt,wt),Qt.side=Me,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}v.setRenderTarget(mt),v.setClearColor(H,X),Dt!==void 0&&(q.viewport=Dt),v.toneMapping=Mt}function $i(S,B,$){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,st=S.length;k<st;k++){const lt=S[k],mt=lt.object,Mt=lt.geometry,Dt=q===null?lt.material:q,Ut=lt.group;mt.layers.test($.layers)&&xa(mt,B,$,Mt,Dt,Ut)}}function xa(S,B,$,q,k,st){S.onBeforeRender(v,B,$,q,k,st),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(v,B,$,q,S,st),k.transparent===!0&&k.side===Wt&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,v.renderBufferDirect($,B,q,k,S,st),k.side=wn,k.needsUpdate=!0,v.renderBufferDirect($,B,q,k,S,st),k.side=Wt):v.renderBufferDirect($,B,q,k,S,st),S.onAfterRender(v,B,$,q,k,st)}function qi(S,B,$){B.isScene!==!0&&(B=ce);const q=yt.get(S),k=p.state.lights,st=p.state.shadowsArray,lt=k.state.version,mt=gt.getParameters(S,k.state,st,B,$),Mt=gt.getProgramCacheKey(mt);let Dt=q.programs;q.environment=S.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(S.isMeshStandardMaterial?W:M).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Nt),Dt=new Map,q.programs=Dt);let Ut=Dt.get(Mt);if(Ut!==void 0){if(q.currentProgram===Ut&&q.lightsStateVersion===lt)return Sa(S,mt),Ut}else mt.uniforms=gt.getUniforms(S),S.onBeforeCompile(mt,v),Ut=gt.acquireProgram(mt,Mt),Dt.set(Mt,Ut),q.uniforms=mt.uniforms;const Tt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),Sa(S,mt),q.needsLights=ml(S),q.lightsStateVersion=lt,q.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ut,q.uniformsList=null,Ut}function Ma(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=ws.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Sa(S,B){const $=yt.get(S);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function fl(S,B,$,q,k){B.isScene!==!0&&(B=ce),T.resetTextureUnits();const st=B.fog,lt=q.isMeshStandardMaterial?B.environment:null,mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mi,Mt=(q.isMeshStandardMaterial?W:M).get(q.envMap||lt),Dt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ut=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Tt=!!$.morphAttributes.position,Kt=!!$.morphAttributes.normal,ee=!!$.morphAttributes.color;let pe=Tn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=fe!==void 0?fe.length:0,wt=yt.get(q),Me=p.state.lights;if(Z===!0&&(ht===!0||S!==x)){const Ae=S===x&&q.id===y;rt.setState(q,S,Ae)}let ne=!1;q.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Me.state.version||wt.outputColorSpace!==mt||k.isBatchedMesh&&wt.batching===!1||!k.isBatchedMesh&&wt.batching===!0||k.isBatchedMesh&&wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&wt.instancing===!1||!k.isInstancedMesh&&wt.instancing===!0||k.isSkinnedMesh&&wt.skinning===!1||!k.isSkinnedMesh&&wt.skinning===!0||k.isInstancedMesh&&wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&wt.instancingMorph===!1&&k.morphTexture!==null||wt.envMap!==Mt||q.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Ut||wt.morphTargets!==Tt||wt.morphNormals!==Kt||wt.morphColors!==ee||wt.toneMapping!==pe||wt.morphTargetsCount!==Qt)&&(ne=!0):(ne=!0,wt.__version=q.version);let $e=wt.currentProgram;ne===!0&&($e=qi(q,B,k));let $n=!1,Fe=!1,Ri=!1;const le=$e.getUniforms(),ke=wt.uniforms;if(pt.useProgram($e.program)&&($n=!0,Fe=!0,Ri=!0),q.id!==y&&(y=q.id,Fe=!0),$n||x!==S){pt.buffers.depth.getReversed()?(Q.copy(S.projectionMatrix),bc(Q),Ec(Q),le.setValue(L,"projectionMatrix",Q)):le.setValue(L,"projectionMatrix",S.projectionMatrix),le.setValue(L,"viewMatrix",S.matrixWorldInverse);const Le=le.map.cameraPosition;Le!==void 0&&Le.setValue(L,Rt.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Fe=!0,Ri=!0)}if(k.isSkinnedMesh){le.setOptional(L,k,"bindMatrix"),le.setOptional(L,k,"bindMatrixInverse");const Ae=k.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),le.setValue(L,"boneTexture",Ae.boneTexture,T))}k.isBatchedMesh&&(le.setOptional(L,k,"batchingTexture"),le.setValue(L,"batchingTexture",k._matricesTexture,T),le.setOptional(L,k,"batchingIdTexture"),le.setValue(L,"batchingIdTexture",k._indirectTexture,T),le.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(L,"batchingColorTexture",k._colorsTexture,T));const Ge=$.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&It.update(k,$,$e),(Fe||wt.receiveShadow!==k.receiveShadow)&&(wt.receiveShadow=k.receiveShadow,le.setValue(L,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ke.envMap.value=Mt,ke.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(ke.envMapIntensity.value=B.environmentIntensity),Fe&&(le.setValue(L,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&pl(ke,Ri),st&&q.fog===!0&&ct.refreshFogUniforms(ke,st),ct.refreshMaterialUniforms(ke,q,V,J,p.state.transmissionRenderTarget[S.id]),ws.upload(L,Ma(wt),ke,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ws.upload(L,Ma(wt),ke,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(L,"center",k.center),le.setValue(L,"modelViewMatrix",k.modelViewMatrix),le.setValue(L,"normalMatrix",k.normalMatrix),le.setValue(L,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ae=q.uniformsGroups;for(let Le=0,Us=Ae.length;Le<Us;Le++){const Cn=Ae[Le];F.update(Cn,$e),F.bind(Cn,$e)}}return $e}function pl(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function ml(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,B,$){yt.get(S.texture).__webglTexture=B,yt.get(S.depthTexture).__webglTexture=$;const q=yt.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){const $=yt.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const gl=L.createFramebuffer();this.setRenderTarget=function(S,B=0,$=0){C=S,R=B,w=$;let q=!0,k=null,st=!1,lt=!1;if(S){const Mt=yt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Mt.__hasExternalTextures)T.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Tt=S.depthTexture;if(Mt.__boundDepthTexture!==Tt){if(Tt!==null&&yt.has(Tt)&&(S.width!==Tt.image.width||S.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);const Ut=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[B])?k=Ut[B][$]:k=Ut[B],st=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?k=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[$]:k=Ut,A.copy(S.viewport),G.copy(S.scissor),z=S.scissorTest}else A.copy(ft).multiplyScalar(V).floor(),G.copy(St).multiplyScalar(V).floor(),z=Ft;if($!==0&&(k=gl),pt.bindFramebuffer(L.FRAMEBUFFER,k)&&q&&pt.drawBuffers(S,k),pt.viewport(A),pt.scissor(G),pt.setScissorTest(z),st){const Mt=yt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,$)}else if(lt){const Mt=yt.get(S.texture),Dt=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,$,Dt)}else if(S!==null&&$!==0){const Mt=yt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,$)}y=-1},this.readRenderTargetPixels=function(S,B,$,q,k,st,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){pt.bindFramebuffer(L.FRAMEBUFFER,mt);try{const Mt=S.texture,Dt=Mt.format,Ut=Mt.type;if(!Vt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-q&&$>=0&&$<=S.height-k&&L.readPixels(B,$,q,k,kt.convert(Dt),kt.convert(Ut),st)}finally{const Mt=C!==null?yt.get(C).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,B,$,q,k,st,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const Mt=S.texture,Dt=Mt.format,Ut=Mt.type;if(!Vt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-q&&$>=0&&$<=S.height-k){pt.bindFramebuffer(L.FRAMEBUFFER,mt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(B,$,q,k,kt.convert(Dt),kt.convert(Ut),0);const Kt=C!==null?yt.get(C).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,Kt);const ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yc(L,ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(Tt),L.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,$=0){S.isTexture!==!0&&(Nn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);const q=Math.pow(2,-$),k=Math.floor(S.image.width*q),st=Math.floor(S.image.height*q),lt=B!==null?B.x:0,mt=B!==null?B.y:0;T.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,lt,mt,k,st),pt.unbindTexture()};const _l=L.createFramebuffer(),vl=L.createFramebuffer();this.copyTextureToTexture=function(S,B,$=null,q=null,k=0,st=null){S.isTexture!==!0&&(Nn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],B=arguments[2],st=arguments[3]||0,$=null),st===null&&(k!==0?(Nn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=k,k=0):st=0);let lt,mt,Mt,Dt,Ut,Tt,Kt,ee,pe;const fe=S.isCompressedTexture?S.mipmaps[st]:S.image;if($!==null)lt=$.max.x-$.min.x,mt=$.max.y-$.min.y,Mt=$.isBox3?$.max.z-$.min.z:1,Dt=$.min.x,Ut=$.min.y,Tt=$.isBox3?$.min.z:0;else{const Ge=Math.pow(2,-k);lt=Math.floor(fe.width*Ge),mt=Math.floor(fe.height*Ge),S.isDataArrayTexture?Mt=fe.depth:S.isData3DTexture?Mt=Math.floor(fe.depth*Ge):Mt=1,Dt=0,Ut=0,Tt=0}q!==null?(Kt=q.x,ee=q.y,pe=q.z):(Kt=0,ee=0,pe=0);const Qt=kt.convert(B.format),wt=kt.convert(B.type);let Me;B.isData3DTexture?(T.setTexture3D(B,0),Me=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),Me=L.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),Me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ne=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$n=L.getParameter(L.UNPACK_SKIP_PIXELS),Fe=L.getParameter(L.UNPACK_SKIP_ROWS),Ri=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tt);const le=S.isDataArrayTexture||S.isData3DTexture,ke=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const Ge=yt.get(S),Ae=yt.get(B),Le=yt.get(Ge.__renderTarget),Us=yt.get(Ae.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,Le.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Cn=0;Cn<Mt;Cn++)le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(S).__webglTexture,k,Tt+Cn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(B).__webglTexture,st,pe+Cn)),L.blitFramebuffer(Dt,Ut,lt,mt,Kt,ee,lt,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||yt.has(S)){const Ge=yt.get(S),Ae=yt.get(B);pt.bindFramebuffer(L.READ_FRAMEBUFFER,_l),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,vl);for(let Le=0;Le<Mt;Le++)le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,k,Tt+Le):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,k),ke?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,st,pe+Le):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,st),k!==0?L.blitFramebuffer(Dt,Ut,lt,mt,Kt,ee,lt,mt,L.COLOR_BUFFER_BIT,L.NEAREST):ke?L.copyTexSubImage3D(Me,st,Kt,ee,pe+Le,Dt,Ut,lt,mt):L.copyTexSubImage2D(Me,st,Kt,ee,Dt,Ut,lt,mt);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ke?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Me,st,Kt,ee,pe,lt,mt,Mt,Qt,wt,fe.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,st,Kt,ee,pe,lt,mt,Mt,Qt,fe.data):L.texSubImage3D(Me,st,Kt,ee,pe,lt,mt,Mt,Qt,wt,fe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,Kt,ee,lt,mt,Qt,wt,fe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,Kt,ee,fe.width,fe.height,Qt,fe.data):L.texSubImage2D(L.TEXTURE_2D,st,Kt,ee,lt,mt,Qt,wt,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$n),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ri),st===0&&B.generateMipmaps&&L.generateMipmap(Me),pt.unbindTexture()},this.copyTextureToTexture3D=function(S,B,$=null,q=null,k=0){return S.isTexture!==!0&&(Nn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,S=arguments[2],B=arguments[3],k=arguments[4]||0),Nn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,$,q,k)},this.initRenderTarget=function(S){yt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,pt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Zp{progress=0;isTransitioning=!1;duration=.8;elapsed=0;onMidpointCallback=null;onCompleteCallback=null;hasTriggeredMidpoint=!1;startTransition(t,e,n=.8){this.isTransitioning||(this.isTransitioning=!0,this.progress=0,this.elapsed=0,this.duration=n,this.onMidpointCallback=t,this.onCompleteCallback=e??null,this.hasTriggeredMidpoint=!1)}update(t){this.isTransitioning&&(this.elapsed+=t,this.progress=Math.min(1,this.elapsed/this.duration),this.progress>=.5&&!this.hasTriggeredMidpoint&&(this.hasTriggeredMidpoint=!0,this.onMidpointCallback&&this.onMidpointCallback()),this.progress>=1&&(this.isTransitioning=!1,this.progress=0,this.onCompleteCallback&&this.onCompleteCallback()))}getWipeAmount(){return this.isTransitioning?this.progress<.5?this.progress*2:(1-this.progress)*2:0}}class Kp{renderer;renderTarget;internalWidth=640;internalHeight=360;blitScene;blitCamera;blitMaterial;blitQuad;transitionManager;constructor(t){this.internalWidth=t.internalWidth??640,this.internalHeight=t.internalHeight??360,this.transitionManager=new Zp,this.renderer=new Yp({canvas:t.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fo,this.renderer.outputColorSpace=xe,this.renderer.setPixelRatio(1),this.renderTarget=new An(this.internalWidth,this.internalHeight,{minFilter:he,magFilter:he,generateMipmaps:!1,format:Ve,colorSpace:xe,depthBuffer:!0,stencilBuffer:!1}),this.blitScene=new il,this.blitCamera=new fa(-1,1,1,-1,0,1);const e=`
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
    `;this.blitMaterial=new mn({uniforms:{tDiffuse:{value:this.renderTarget.texture},uResolution:{value:new $t(this.internalWidth,this.internalHeight)},uWipeProgress:{value:0},uShowCrosshair:{value:1}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1});const i=new Ee(2,2);this.blitQuad=new D(i,this.blitMaterial),this.blitScene.add(this.blitQuad),this.resize()}setCrosshairVisible(t){this.blitMaterial.uniforms.uShowCrosshair.value=t?1:0}setResolution(t,e){this.internalWidth=t,this.internalHeight=e,this.renderTarget.setSize(t,e),this.blitMaterial.uniforms.uResolution.value.set(t,e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1)}render(t,e,n){this.transitionManager.update(n),this.blitMaterial.uniforms.uWipeProgress.value=this.transitionManager.getWipeAmount(),this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCamera)}}class yn{root;camera;perspective="FPP";mouseSensitivity=1;fov=72;targetPosition=new U;currentPosition=new U;yaw=0;targetYaw=0;pitch=0;targetPitch=0;distance=14;targetDistance=14;minDistance=4;maxDistance=26;followSpeed=18;rotateSpeed=2.5;isDraggingRightMouse=!1;previousMouseX=0;previousMouseY=0;static MAX_PITCH=Math.PI/2-.08;constructor(t={}){this.perspective=t.perspective??"FPP",this.mouseSensitivity=t.mouseSensitivity??1,this.fov=t.fov??72,this.root=new Pt,this.root.name="CameraRigRoot",this.camera=new Ie(this.fov,16/9,.05,250),this.camera.name="MainCamera",this.camera.rotation.order="YXZ",this.root.add(this.camera),this.setPerspective(this.perspective,!0),this.bindInputs()}setFov(t){this.fov=Be.clamp(t,40,100),this.camera.fov=this.fov,this.camera.updateProjectionMatrix()}setPerspective(t,e=!1){this.perspective=t,t==="FPP"?(this.targetDistance=0,this.distance=0,this.camera.fov=this.fov,this.camera.near=.05,this.camera.updateProjectionMatrix()):(this.targetDistance=14,e&&(this.distance=14),this.camera.fov=this.fov,this.camera.near=.1,this.camera.updateProjectionMatrix()),this.updateRigTransforms()}setMouseSensitivity(t){this.mouseSensitivity=Be.clamp(t,.2,5)}updateRigTransforms(){const t=Math.cos(this.pitch),e=Math.sin(this.pitch),n=Math.cos(this.yaw),r=-Math.sin(this.yaw)*t,a=e,o=-n*t;if(this.perspective==="FPP")this.camera.position.set(this.targetPosition.x,this.targetPosition.y,this.targetPosition.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");else{const l=this.currentPosition;this.camera.position.set(l.x-r*this.distance,l.y-a*this.distance,l.z-o*this.distance),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}bindInputs(){window.addEventListener("mousemove",t=>{if(document.pointerLockElement!==null)this.yaw-=t.movementX*this.mouseSensitivity*.002,this.pitch-=t.movementY*this.mouseSensitivity*.002,this.pitch=Math.max(-yn.MAX_PITCH,Math.min(yn.MAX_PITCH,this.pitch)),this.targetYaw=this.yaw,this.targetPitch=this.pitch,this.updateRigTransforms();else if(this.perspective==="TPP"&&this.isDraggingRightMouse){const n=t.clientX-this.previousMouseX,i=t.clientY-this.previousMouseY;this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,this.targetYaw-=n*.006*this.mouseSensitivity,this.targetPitch-=i*.006*this.mouseSensitivity,this.targetPitch=Math.max(-yn.MAX_PITCH,Math.min(yn.MAX_PITCH,this.targetPitch)),this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.updateRigTransforms()}}),window.addEventListener("mousedown",t=>{this.perspective==="TPP"&&t.button===2&&(this.isDraggingRightMouse=!0,this.previousMouseX=t.clientX,this.previousMouseY=t.clientY,t.preventDefault())}),window.addEventListener("mouseup",t=>{t.button===2&&(this.isDraggingRightMouse=!1)}),window.addEventListener("contextmenu",t=>{t.preventDefault()}),window.addEventListener("wheel",t=>{this.perspective==="TPP"&&(this.targetDistance+=Math.sign(t.deltaY)*1.5,this.targetDistance=Be.clamp(this.targetDistance,this.minDistance,this.maxDistance))},{passive:!0})}setTarget(t,e,n){this.perspective==="FPP"?this.targetPosition.set(t,e+1.65,n):this.targetPosition.set(t,e+1.2,n)}getYaw(){return this.yaw}getPitch(){return this.pitch}update(t,e=0,n=0,i=!1,r=!1){const a=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;i&&(this.targetYaw+=this.rotateSpeed*a),r&&(this.targetYaw-=this.rotateSpeed*a),Math.abs(e)>.15&&(this.targetYaw-=e*this.rotateSpeed*a*1.5),Math.abs(n)>.15&&(this.targetPitch-=n*this.rotateSpeed*a*1.2,this.targetPitch=Math.max(-yn.MAX_PITCH,Math.min(yn.MAX_PITCH,this.targetPitch))),this.perspective==="FPP"?(this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.currentPosition.copy(this.targetPosition)):(this.yaw=Be.damp(this.yaw,this.targetYaw,16,a),this.pitch=Be.damp(this.pitch,this.targetPitch,16,a),this.distance=Be.damp(this.distance,this.targetDistance,14,a),this.currentPosition.copy(this.targetPosition)),this.updateRigTransforms()}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}}class jp{scene;mode="surface";hemiLight;dirLight;dirLightTarget;librarySunLight;librarySunTarget;dungeonAmbient;surfaceFog;dungeonFog;libraryFog;surfaceBgColor=new zt(9159658);dungeonBgColor=new zt(657426);libraryBgColor=new zt(525836);constructor(t){this.scene=t,this.hemiLight=new nh(16775917,4010020,.95),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new to(16775126,1.8),this.dirLight.position.set(28,42,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.bias=-5e-4;const e=26;this.dirLight.shadow.camera.left=-e,this.dirLight.shadow.camera.right=e,this.dirLight.shadow.camera.top=e,this.dirLight.shadow.camera.bottom=-e,this.dirLightTarget=new de,this.scene.add(this.dirLightTarget),this.dirLight.target=this.dirLightTarget,this.scene.add(this.dirLight),this.librarySunLight=new to(16772822,2.4),this.librarySunLight.position.set(0,24,38),this.librarySunLight.castShadow=!0,this.librarySunLight.shadow.mapSize.width=2048,this.librarySunLight.shadow.mapSize.height=2048,this.librarySunLight.shadow.camera.near=1,this.librarySunLight.shadow.camera.far=85,this.librarySunLight.shadow.bias=-.001;const n=26;this.librarySunLight.shadow.camera.left=-n,this.librarySunLight.shadow.camera.right=n,this.librarySunLight.shadow.camera.top=n,this.librarySunLight.shadow.camera.bottom=-n,this.librarySunTarget=new de,this.librarySunTarget.position.set(0,2,16),this.scene.add(this.librarySunTarget),this.librarySunLight.target=this.librarySunTarget,this.scene.add(this.librarySunLight),this.dungeonAmbient=new oh(3286072,.25),this.scene.add(this.dungeonAmbient),this.surfaceFog=new ha(9159658,.01),this.dungeonFog=new Ps(394510,18,95),this.libraryFog=new Ps(525836,22,75),this.setMode("surface")}setMode(t){this.mode=t,t==="surface"?(this.scene.background=this.surfaceBgColor,this.scene.fog=this.surfaceFog,this.hemiLight.color.setHex(16775917),this.hemiLight.groundColor.setHex(4010020),this.hemiLight.intensity=.95,this.dirLight.intensity=1.8,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=.1,this.dungeonAmbient.color.setHex(4997726)):t==="dungeon"?(this.scene.background=this.dungeonBgColor,this.scene.fog=this.dungeonFog,this.hemiLight.color.setHex(5918832),this.hemiLight.groundColor.setHex(2761248),this.hemiLight.intensity=.35,this.dirLight.intensity=0,this.librarySunLight.intensity=0,this.dungeonAmbient.intensity=1.2,this.dungeonAmbient.color.setHex(4997726)):(this.scene.background=this.libraryBgColor,this.scene.fog=this.libraryFog,this.hemiLight.color.setHex(4339792),this.hemiLight.groundColor.setHex(1577488),this.hemiLight.intensity=.28,this.dirLight.intensity=0,this.librarySunLight.intensity=2.4,this.dungeonAmbient.intensity=.25,this.dungeonAmbient.color.setHex(3286072))}updateSunPosition(t){this.mode==="surface"&&(this.dirLight.position.set(t.x+28,t.y+42,t.z+20),this.dirLightTarget.position.copy(t))}}class Jp{textures;materials;constructor(){this.initTextures(),this.initMaterials()}createCanvas(t=16,e=16){const n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,[n,i]}wrapTexture(t){const e=new Ts(t);return e.magFilter=he,e.minFilter=he,e.generateMipmaps=!1,e.colorSpace=xe,e.wrapS=Hi,e.wrapT=Hi,e}initTextures(){const[t,e]=this.createCanvas(16,16),n=["#4d8234","#559138","#42702c","#5da33e","#3c6427"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();e.fillStyle=N>.8?n[3]:N>.5?n[1]:N>.2?n[0]:n[2],e.fillRect(O,I,1,1)}e.fillStyle="#6ab847",e.fillRect(3,4,1,2),e.fillRect(11,2,1,2),e.fillRect(8,12,1,2),e.fillRect(14,9,1,2);const[i,r]=this.createCanvas(16,16),a=["#6e4c29","#5e3e20","#7a552e","#52361b","#855d33"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();r.fillStyle=N>.6?a[0]:N>.3?a[1]:N>.1?a[2]:a[3],r.fillRect(O,I,1,1)}for(let I=0;I<16;I++){const O=I%3===0?4:I%2===0?3:2;for(let N=0;N<O;N++)r.fillStyle=N===0?"#5da33e":"#4d8234",r.fillRect(I,N,1,1);I*7%5===0&&O<5&&(r.fillStyle="#3c6427",r.fillRect(I,O,1,1))}const[o,l]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();l.fillStyle=N>.7?a[4]:N>.4?a[0]:N>.2?a[1]:a[3],l.fillRect(O,I,1,1)}l.fillStyle="#9e7347",l.fillRect(4,7,2,1),l.fillRect(11,12,1,2);const[c,d]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin(O*.5)*Math.cos(I*.5);d.fillStyle=N>.3?"#6e7480":N>-.3?"#585e6a":"#494e58",d.fillRect(O,I,1,1)}d.fillStyle="#262930",d.fillRect(0,0,32,1),d.fillRect(0,16,32,1),d.fillRect(0,0,1,16),d.fillRect(16,0,1,16),d.fillRect(8,16,1,16),d.fillRect(24,16,1,16),d.fillStyle="#828896",d.fillRect(1,1,14,1),d.fillRect(17,1,14,1),d.fillRect(9,17,14,1),d.fillRect(25,17,6,1);const[u,h]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();h.fillStyle=N>.6?"#6e737d":N>.3?"#5b606a":"#4e525a",h.fillRect(O,I,1,1)}h.fillStyle="#383b42",h.fillRect(2,2,4,1),h.fillRect(2,2,1,4),h.fillRect(8,6,5,1),h.fillRect(8,6,1,4),h.fillRect(3,10,4,1),h.fillRect(11,12,4,1);const[f,g]=this.createCanvas(16,16),_=["#8d633b","#7a5430","#9c6f44","#6c4929"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();g.fillStyle=N>.7?_[2]:N>.4?_[0]:N>.2?_[1]:_[3],g.fillRect(O,I,1,1)}g.fillStyle="#4a3018",g.fillRect(0,0,16,1),g.fillRect(0,4,16,1),g.fillRect(0,8,16,1),g.fillRect(0,12,16,1),g.fillRect(5,0,1,4),g.fillRect(11,4,1,4),g.fillRect(3,8,1,4),g.fillRect(13,12,1,4);const[m,p]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();p.fillStyle=N>.5?"#5c3d21":"#4d3219",p.fillRect(O,I,1,1)}p.fillStyle="#3b2512",p.fillRect(0,0,16,2),p.fillRect(0,14,16,2),p.fillRect(0,0,2,16),p.fillRect(14,0,2,16);const[E,b]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();b.fillStyle=N>.7?"#2a6ec4":N>.4?"#215aa4":"#1a4987",b.fillRect(O,I,1,1)}b.fillStyle="#5dade2",b.fillRect(2,3,4,1),b.fillRect(10,7,5,1),b.fillRect(4,12,6,1),b.fillRect(12,14,3,1);const[v,P]=this.createCanvas(16,16),R=["#d8be7b","#ccb06e","#dfc788","#bfa260"];for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();P.fillStyle=N>.7?R[2]:N>.4?R[0]:N>.2?R[1]:R[3],P.fillRect(O,I,1,1)}const[w,C]=this.createCanvas(32,32);C.fillStyle="#80141a",C.fillRect(0,0,32,32);for(let I=0;I<32;I+=2)for(let O=0;O<32;O+=2)C.fillStyle=(O+I)%4===0?"#680e14":"#941920",C.fillRect(O,I,1,1);C.fillStyle="#d4af37",C.fillRect(2,2,28,1),C.fillRect(2,29,28,1),C.fillRect(2,2,1,28),C.fillRect(29,2,1,28),C.fillStyle="#ffd700",C.fillRect(4,4,24,1),C.fillRect(4,27,24,1),C.fillRect(4,4,1,24),C.fillRect(27,4,1,24),C.fillStyle="#ffd700",C.fillRect(15,12,2,8),C.fillRect(12,15,8,2),C.fillRect(14,14,4,4);const[y,x]=this.createCanvas(16,16);for(let I=0;I<16;I++)for(let O=0;O<16;O++){const N=Math.random();x.fillStyle=N>.6?"#545863":N>.3?"#42454f":"#33363f",x.fillRect(O,I,1,1)}x.fillStyle="#787d8c",x.fillRect(1,1,14,1),x.fillRect(1,1,1,14);const[A,G]=this.createCanvas(16,16);G.fillStyle="#2d4b3b",G.fillRect(0,0,16,16),G.fillStyle="#e8e8e8",G.fillRect(2,1,12,4),G.fillStyle="#c4c4c4",G.fillRect(2,4,12,1),G.fillStyle="#22382c",G.fillRect(0,6,16,1),G.fillStyle="#39604b",G.fillRect(0,7,16,1);const[z,H]=this.createCanvas(16,16);H.fillStyle="#754a24",H.fillRect(0,0,16,16),H.fillStyle="#ffe9b3",H.fillRect(2,2,12,12),H.fillStyle="#8b6534",H.fillRect(8,2,1,12),H.fillRect(2,8,12,1);const[X,Y]=this.createCanvas(16,16);Y.fillStyle="#d4be88",Y.fillRect(0,0,16,16),Y.fillStyle="#8a5d2a",Y.fillRect(0,0,16,1),Y.fillRect(0,15,16,1),Y.fillStyle="#4a351d",Y.fillRect(3,4,5,3),Y.fillRect(4,7,6,2);const[J,V]=this.createCanvas(16,16);V.fillStyle="#362112",V.fillRect(0,0,16,16),V.fillStyle="#201208",V.fillRect(0,0,16,1),V.fillRect(0,7,16,2),V.fillRect(0,15,16,1);const it=["#8b181e","#1c3761","#1d5334","#542d17","#521c63","#222226","#8c6227"];let nt=1;for(;nt<15;){const I=nt%2===0?2:1,O=5+Math.floor(Math.sin(nt*3)*1.5),N=it[nt*3%it.length];V.fillStyle=N,V.fillRect(nt,7-O,I,O),nt%3===0&&(V.fillStyle="#ffd700",V.fillRect(nt,7-O+1,I,1),V.fillRect(nt,5,I,1)),nt+=I}for(nt=1;nt<15;){const I=nt%3===0?2:1,O=5+Math.floor(Math.cos(nt*4)*1.5),N=it[(nt*5+2)%it.length];V.fillStyle=N,V.fillRect(nt,15-O,I,O),nt%2===0&&(V.fillStyle="#e5b84c",V.fillRect(nt,15-O+1,I,1)),nt+=I}const[ft,St]=this.createCanvas(16,16);St.fillStyle="#22142a",St.fillRect(0,0,16,16),St.fillStyle="#140a1c",St.fillRect(0,0,16,2),St.fillRect(0,7,16,2),St.fillRect(0,14,16,2);const Ft=["#162d4d","#421654","#591624","#164d40","#9c6f14"];for(let I=1;I<15;I+=2)St.fillStyle=Ft[I*2%Ft.length],St.fillRect(I,2,2,5),St.fillRect(I,9,2,5),St.fillStyle="#8ce8ff",St.fillRect(I+1,4,1,1),St.fillStyle="#ffd269",St.fillRect(I,11,1,1);const[j,Z]=this.createCanvas(32,64);Z.fillStyle="#142247",Z.fillRect(0,0,32,60),Z.fillStyle="#d4af37",Z.fillRect(2,2,28,2),Z.fillRect(2,2,2,56),Z.fillRect(28,2,2,56),Z.fillStyle="#ffd700",Z.fillRect(4,4,24,1),Z.fillRect(4,4,1,52),Z.fillRect(27,4,1,52),Z.fillStyle="#0b1329",Z.fillRect(0,60,16,4),Z.fillRect(16,60,16,4),Z.clearRect(8,56,16,8),Z.fillStyle="#f5cb42",Z.fillRect(2,58,4,6),Z.fillRect(26,58,4,6),Z.fillStyle="#ffffff",Z.fillRect(12,10,8,3),Z.fillRect(10,8,3,2),Z.fillRect(15,8,2,2),Z.fillRect(19,8,3,2),Z.fillStyle="#ffd700",Z.fillRect(11,13,10,8),Z.fillRect(9,15,3,4),Z.fillRect(20,15,3,4),Z.fillRect(13,21,6,14),Z.fillRect(7,17,5,4),Z.fillRect(5,15,3,3),Z.fillRect(9,23,5,3),Z.fillRect(5,24,4,3),Z.fillRect(11,35,4,8),Z.fillRect(7,41,6,4),Z.fillRect(17,35,6,6),Z.fillRect(21,39,5,4),Z.fillRect(19,25,2,8),Z.fillRect(21,23,4,4),Z.fillRect(25,19,4,6);const[ht,Q]=this.createCanvas(32,64);Q.fillStyle="#6e1218",Q.fillRect(0,0,32,60),Q.fillStyle="#d4af37",Q.fillRect(2,2,28,2),Q.fillRect(2,2,2,56),Q.fillRect(28,2,2,56),Q.fillStyle="#ffd700",Q.fillRect(4,4,24,1),Q.fillRect(4,4,1,52),Q.fillRect(27,4,1,52),Q.fillStyle="#42090d",Q.fillRect(0,60,16,4),Q.fillRect(16,60,16,4),Q.clearRect(8,56,16,8),Q.fillStyle="#f5cb42",Q.fillRect(2,58,4,6),Q.fillRect(26,58,4,6),Q.fillStyle="#ffd700",Q.fillRect(14,10,4,36),Q.fillRect(8,18,16,4),Q.fillRect(12,8,8,2),Q.fillRect(12,46,8,2),Q.fillRect(6,16,2,8),Q.fillRect(24,16,2,8),Q.fillStyle="#8ae5ff",Q.fillRect(15,19,2,2);const[bt,Rt]=this.createCanvas(32,64);Rt.fillStyle="#181b22",Rt.fillRect(0,0,32,64);const Et=["#ad1f1f","#19498a","#1e7345","#c29219","#631f7d","#1f7d73"];for(let I=4;I<60;I+=4)for(let O=4;O<28;O+=4)Rt.fillStyle=Et[(O*3+I*5)%Et.length],Rt.fillRect(O,I,3,3);Rt.fillStyle="#0f1116",Rt.fillRect(0,0,32,4),Rt.fillRect(0,60,32,4),Rt.fillRect(0,0,4,64),Rt.fillRect(28,0,4,64),Rt.fillRect(14,0,4,64),Rt.fillRect(0,30,32,4);const[ce,Bt]=this.createCanvas(32,32);Bt.fillStyle="#6e7482",Bt.fillRect(0,0,16,16),Bt.fillRect(16,16,16,16),Bt.fillStyle="#454a54",Bt.fillRect(16,0,16,16),Bt.fillRect(0,16,16,16),Bt.fillStyle="#858b99",Bt.fillRect(3,4,4,1),Bt.fillRect(6,9,5,1),Bt.fillRect(19,20,5,1),Bt.fillRect(24,25,4,1),Bt.fillStyle="#21242b",Bt.fillRect(0,0,32,1),Bt.fillRect(0,16,32,1),Bt.fillRect(0,0,1,32),Bt.fillRect(16,0,1,32);const[Ht,L]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=O%8;let gt="#616773";N===0?gt="#363a42":N===1?gt="#4a505c":N===2||N===3?gt="#7a8190":N===4?gt="#8c93a3":N===5||N===6?gt="#6b7280":gt="#424752",L.fillStyle=gt,L.fillRect(O,I,1,1)}L.fillStyle="#2c3038",L.fillRect(0,0,32,2),L.fillRect(0,30,32,2);const[Pe,At]=this.createCanvas(32,32);At.fillStyle="#1c3e66",At.fillRect(0,0,32,32),At.fillStyle="#947a46",At.fillRect(5,6,9,8),At.fillRect(4,10,8,10),At.fillRect(18,8,10,7),At.fillRect(20,16,8,10),At.fillStyle="#e5b84c",At.fillRect(0,15,32,2),At.fillRect(15,0,2,32),At.fillStyle="#ffffff",At.fillRect(8,4,1,1),At.fillRect(24,6,1,1),At.fillRect(10,26,1,1),At.fillRect(26,24,1,1);const[Vt,pt]=this.createCanvas(16,16);pt.fillStyle="#c7b28b",pt.fillRect(0,0,16,16),pt.fillStyle="#614620",pt.fillRect(0,0,16,1),pt.fillRect(0,15,16,1),pt.fillRect(0,0,1,16),pt.fillRect(15,0,1,16),pt.fillStyle="#3b250d",pt.fillRect(3,4,10,2),pt.fillRect(4,8,8,2),pt.fillRect(5,12,6,2);const Jt=I=>{const[O,N]=this.createCanvas(64,16);return N.fillStyle="#261408",N.fillRect(0,0,64,16),N.fillStyle="#a87d3b",N.fillRect(1,1,62,14),N.fillStyle="#1c0d05",N.fillRect(2,2,60,12),N.fillStyle="#fce59f",N.font="bold 9px monospace",N.textAlign="center",N.textBaseline="middle",N.fillText(I,32,8),this.wrapTexture(O)},[yt,T]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin(I*.8+O*.1);T.fillStyle=N>.4?"#3d2515":N>-.3?"#2e1b0e":"#221308",T.fillRect(O,I,1,1)}T.fillStyle="#150a04",T.fillRect(0,0,32,1),T.fillRect(0,31,32,1);const[M,W]=this.createCanvas(32,32);for(let I=0;I<32;I++)for(let O=0;O<32;O++){const N=Math.sin((O+I)*.3);W.fillStyle=N>.5?"#f3cb62":N>0?"#d4a337":"#9e731b",W.fillRect(O,I,1,1)}W.fillStyle="#fff0a6",W.fillRect(0,0,32,2),this.textures={grassTop:this.wrapTexture(t),grassSide:this.wrapTexture(i),dirt:this.wrapTexture(o),stoneBrick:this.wrapTexture(c),cobblestone:this.wrapTexture(u),woodPlanks:this.wrapTexture(f),woodBeam:this.wrapTexture(m),water:this.wrapTexture(E),sand:this.wrapTexture(v),carpetRed:this.wrapTexture(w),iron:this.wrapTexture(y),bedGreen:this.wrapTexture(A),windowLattice:this.wrapTexture(z),mapScroll:this.wrapTexture(X),bookshelfDense:this.wrapTexture(J),bookshelfRare:this.wrapTexture(ft),heraldicLionBanner:this.wrapTexture(j),heraldicCrossBanner:this.wrapTexture(ht),stainedGlassGothic:this.wrapTexture(bt),stoneTileFloor:this.wrapTexture(ce),carvedStonePillar:this.wrapTexture(Ht),globeTexture:this.wrapTexture(Pe),inscriptionPlaque:this.wrapTexture(Vt),plaqueHistoria:Jt("HISTORIA"),plaquePhilosophia:Jt("PHILOSOPHIA"),plaqueScientia:Jt("SCIENTIA"),plaqueTheologia:Jt("THEOLOGIA"),plaqueArcanum:Jt("ARCANUM"),plaqueMythologia:Jt("MYTHOLOGIA"),darkOak:this.wrapTexture(yt),brassMetal:this.wrapTexture(M)}}initMaterials(){this.materials={grassTop:new Lt({map:this.textures.grassTop,roughness:.85,metalness:.05,side:Wt}),grassSide:new Lt({map:this.textures.grassSide,roughness:.85,metalness:.05,side:Wt}),dirt:new Lt({map:this.textures.dirt,roughness:.95,metalness:0,side:Wt}),stoneBrick:new Lt({map:this.textures.stoneBrick,roughness:.65,metalness:.1,side:Wt}),cobblestone:new Lt({map:this.textures.cobblestone,roughness:.85,metalness:.1,side:Wt}),woodPlanks:new Lt({map:this.textures.woodPlanks,roughness:.65,metalness:.05,side:Wt}),woodBeam:new Lt({map:this.textures.woodBeam,roughness:.7,metalness:.05,side:Wt}),water:new Lt({map:this.textures.water,roughness:.1,metalness:.1,transparent:!0,opacity:.8}),sand:new Lt({map:this.textures.sand,roughness:.9,metalness:0}),carpetRed:new Lt({map:this.textures.carpetRed,roughness:.75,metalness:.15,side:Wt}),iron:new Lt({map:this.textures.iron,roughness:.45,metalness:.7}),bedGreen:new Lt({map:this.textures.bedGreen,roughness:.8,metalness:0}),windowLattice:new Lt({map:this.textures.windowLattice,roughness:.5,metalness:.1,transparent:!0}),mapScroll:new Lt({map:this.textures.mapScroll,roughness:.9,metalness:0,side:Wt}),bookshelfDense:new Lt({map:this.textures.bookshelfDense,roughness:.6,metalness:.15}),bookshelfRare:new Lt({map:this.textures.bookshelfRare,roughness:.5,metalness:.25}),heraldicLionBanner:new Lt({map:this.textures.heraldicLionBanner,roughness:.6,metalness:.2,side:Wt}),heraldicCrossBanner:new Lt({map:this.textures.heraldicCrossBanner,roughness:.6,metalness:.2,side:Wt}),stainedGlassGothic:new Lt({map:this.textures.stainedGlassGothic,roughness:.15,metalness:.1,transparent:!0,opacity:.92,side:Wt,emissive:new zt(16772822),emissiveIntensity:.35}),stoneTileFloor:new Lt({map:this.textures.stoneTileFloor,roughness:.55,metalness:.12,side:Wt}),carvedStonePillar:new Lt({map:this.textures.carvedStonePillar,roughness:.6,metalness:.1,side:Wt}),globeTexture:new Lt({map:this.textures.globeTexture,roughness:.4,metalness:.25,emissive:new zt(13938487),emissiveIntensity:.15}),inscriptionPlaque:new Lt({map:this.textures.inscriptionPlaque,roughness:.6,metalness:.2,side:Wt}),plaqueHistoria:new Lt({map:this.textures.plaqueHistoria,roughness:.5,metalness:.3,side:Wt}),plaquePhilosophia:new Lt({map:this.textures.plaquePhilosophia,roughness:.5,metalness:.3,side:Wt}),plaqueScientia:new Lt({map:this.textures.plaqueScientia,roughness:.5,metalness:.3,side:Wt}),plaqueTheologia:new Lt({map:this.textures.plaqueTheologia,roughness:.5,metalness:.3,side:Wt}),plaqueArcanum:new Lt({map:this.textures.plaqueArcanum,roughness:.5,metalness:.3,side:Wt}),plaqueMythologia:new Lt({map:this.textures.plaqueMythologia,roughness:.5,metalness:.3,side:Wt}),darkOak:new Lt({map:this.textures.darkOak,roughness:.6,metalness:.08,side:Wt}),brassMetal:new Lt({map:this.textures.brassMetal,roughness:.35,metalness:.65,side:Wt})}}}const ul=Math.sqrt(3),Qp=.5*(ul-1),Ni=(3-ul)/6,Po=s=>Math.floor(s)|0,Lo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Io(s=Math.random){const t=tm(s),e=new Float64Array(t).map(i=>Lo[i%12*2]),n=new Float64Array(t).map(i=>Lo[i%12*2+1]);return function(r,a){let o=0,l=0,c=0;const d=(r+a)*Qp,u=Po(r+d),h=Po(a+d),f=(u+h)*Ni,g=u-f,_=h-f,m=r-g,p=a-_;let E,b;m>p?(E=1,b=0):(E=0,b=1);const v=m-E+Ni,P=p-b+Ni,R=m-1+2*Ni,w=p-1+2*Ni,C=u&255,y=h&255;let x=.5-m*m-p*p;if(x>=0){const z=C+t[y],H=e[z],X=n[z];x*=x,o=x*x*(H*m+X*p)}let A=.5-v*v-P*P;if(A>=0){const z=C+E+t[y+b],H=e[z],X=n[z];A*=A,l=A*A*(H*v+X*P)}let G=.5-R*R-w*w;if(G>=0){const z=C+1+t[y+1],H=e[z],X=n[z];G*=G,c=G*G*(H*R+X*w)}return 70*(o+l+c)}}function tm(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class em{noise2D;moistureNoise2D;baseFrequency=.015;octaves=4;persistence=.5;lacunarity=2;heightScale=10;stepHeight=1;waterLevel=1;constructor(t=12345){const e=this.createPrng(t);this.noise2D=Io(e),this.moistureNoise2D=Io(this.createPrng(t+9999))}createPrng(t){let e=t%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}getSample(t,e){let n=1,i=this.baseFrequency,r=0,a=0;for(let m=0;m<this.octaves;m++)r+=this.noise2D(t*i,e*i)*n,a+=n,n*=this.persistence,i*=this.lacunarity;const o=(r/a+1)*.5,c=Math.pow(o,1.3)*this.heightScale,d=Math.floor(c/this.stepHeight),u=Math.max(0,d*this.stepHeight),h=u<=this.waterLevel,f=h?this.waterLevel:u,g=(this.moistureNoise2D(t*.01,e*.01)+1)*.5;let _="grass";return h?_="water":u===this.waterLevel+this.stepHeight&&g<.4?_="sand":u>=10?_="snow":u>=9?_="stone":_="grass",{height:f,rawHeight:c,biome:_,isWater:h}}}class nm{chunkX;chunkZ;size;group;meshGroup;noise;atlas;constructor(t,e,n,i,r){this.chunkX=t,this.chunkZ=e,this.size=n,this.noise=i,this.atlas=r,this.group=new Pt,this.meshGroup=new Pt,this.group.add(this.meshGroup),this.buildChunk()}buildChunk(){const t=this.chunkX*this.size,e=this.chunkZ*this.size,n=[],i=[];for(let l=-1;l<=this.size;l++){n[l+1]=[],i[l+1]=[];for(let c=-1;c<=this.size;c++){const d=this.noise.getSample(t+c,e+l);n[l+1][c+1]=d.height,i[l+1][c+1]=d.biome}}const r={grassTop:{positions:[],uvs:[],normals:[]},grassSide:{positions:[],uvs:[],normals:[]},dirt:{positions:[],uvs:[],normals:[]},stone:{positions:[],uvs:[],normals:[]},sand:{positions:[],uvs:[],normals:[]},water:{positions:[],uvs:[],normals:[]}},a=(l,c,d,u,h,f,g=[1,1])=>{const _=r[l];_&&(_.positions.push(...c,...d,...u),_.normals.push(...f,...f,...f),_.uvs.push(0,0,0,g[1],g[0],g[1]),_.positions.push(...c,...u,...h),_.normals.push(...f,...f,...f),_.uvs.push(0,0,g[0],g[1],g[0],0))};for(let l=0;l<this.size;l++)for(let c=0;c<this.size;c++){const d=n[l+1][c+1],u=i[l+1][c+1],h=t+c,f=e+l;let g="grassTop";u==="water"?g="water":u==="sand"?g="sand":g="grassTop",a(g,[h,d,f],[h,d,f+1],[h+1,d,f+1],[h+1,d,f],[0,1,0],[1,1]);const _=n[l][c+1];if(d>_){const b=d-_,v=u==="stone"?"stone":b>1?"dirt":"grassSide";a(v,[h+1,d,f],[h+1,_,f],[h,_,f],[h,d,f],[0,0,-1],[1,b])}const m=n[l+2][c+1];if(d>m){const b=d-m,v=u==="stone"?"stone":b>1?"dirt":"grassSide";a(v,[h,d,f+1],[h,m,f+1],[h+1,m,f+1],[h+1,d,f+1],[0,0,1],[1,b])}const p=n[l+1][c];if(d>p){const b=d-p,v=u==="stone"?"stone":b>1?"dirt":"grassSide";a(v,[h,d,f],[h,p,f],[h,p,f+1],[h,d,f+1],[-1,0,0],[1,b])}const E=n[l+1][c+2];if(d>E){const b=d-E,v=u==="stone"?"stone":b>1?"dirt":"grassSide";a(v,[h+1,d,f+1],[h+1,E,f+1],[h+1,E,f],[h+1,d,f],[1,0,0],[1,b])}if(u==="grass"&&d>this.noise.waterLevel){const b=Math.sin(h*12.9898+f*78.233)*43758.5453,v=b-Math.floor(b);v>.94?this.createPineTree(h+.5,d,f+.5):v>.88&&v<=.9&&this.createBoulder(h+.5,d,f+.5)}}const o={grassTop:this.atlas.materials.grassTop,grassSide:this.atlas.materials.grassSide,dirt:this.atlas.materials.dirt,stone:this.atlas.materials.cobblestone,sand:this.atlas.materials.sand,water:this.atlas.materials.water};for(const[l,c]of Object.entries(r)){if(c.positions.length===0)continue;const d=new we;d.setAttribute("position",new re(c.positions,3)),d.setAttribute("normal",new re(c.normals,3)),d.setAttribute("uv",new re(c.uvs,2));const u=new D(d,o[l]);u.castShadow=l!=="water",u.receiveShadow=!0,this.meshGroup.add(u)}}createPineTree(t,e,n){const i=new et(.35,1.2,.35),r=new D(i,this.atlas.materials.woodBeam);r.position.set(t,e+.6,n),r.castShadow=!0,r.receiveShadow=!0,this.meshGroup.add(r);const a=[{size:1.4,h:.7,py:1.3},{size:1,h:.6,py:1.8},{size:.6,h:.6,py:2.3}];for(const o of a){const l=new et(o.size,o.h,o.size),c=new D(l,this.atlas.materials.grassTop);c.position.set(t,e+o.py,n),c.castShadow=!0,c.receiveShadow=!0,this.meshGroup.add(c)}}createBoulder(t,e,n){const i=new et(.7,.5,.7),r=new D(i,this.atlas.materials.cobblestone);r.position.set(t,e+.25,n),r.castShadow=!0,r.receiveShadow=!0,this.meshGroup.add(r)}dispose(){this.meshGroup.traverse(t=>{t instanceof D&&t.geometry.dispose()}),this.group.clear()}}class im{scene;noise;atlas;chunkSize=16;renderRadius=3;activeChunks=new Map;container;constructor(t,e){this.scene=t,this.atlas=e,this.noise=new em(42),this.container=new Pt,this.container.name="SurfaceWorld",this.scene.add(this.container)}update(t,e){const n=Math.floor(t/this.chunkSize),i=Math.floor(e/this.chunkSize),r=new Set;for(let a=-this.renderRadius;a<=this.renderRadius;a++)for(let o=-this.renderRadius;o<=this.renderRadius;o++){const l=n+o,c=i+a,d=`${l},${c}`;if(r.add(d),!this.activeChunks.has(d)){const u=new nm(l,c,this.chunkSize,this.noise,this.atlas);this.activeChunks.set(d,u),this.container.add(u.group)}}for(const[a,o]of this.activeChunks.entries())r.has(a)||(this.container.remove(o.group),o.dispose(),this.activeChunks.delete(a))}getElevation(t,e){return this.noise.getSample(t,e).height}setVisible(t){this.container.visible=t}}class hi{rect;left=null;right=null;room=null;constructor(t){this.rect=t}isLeaf(){return!this.left&&!this.right}split(t){if(!this.isLeaf())return!1;let e=Math.random()>.5;this.rect.w>this.rect.h&&this.rect.w/this.rect.h>=1.25?e=!1:this.rect.h>this.rect.w&&this.rect.h/this.rect.w>=1.25&&(e=!0);const n=(e?this.rect.h:this.rect.w)-t;if(n<=t)return!1;const i=Math.floor(t+Math.random()*(n-t));return e?(this.left=new hi({x:this.rect.x,z:this.rect.z,w:this.rect.w,h:i}),this.right=new hi({x:this.rect.x,z:this.rect.z+i,w:this.rect.w,h:this.rect.h-i})):(this.left=new hi({x:this.rect.x,z:this.rect.z,w:i,h:this.rect.h}),this.right=new hi({x:this.rect.x+i,z:this.rect.z,w:this.rect.w-i,h:this.rect.h})),!0}createRooms(t,e){const n=[];let i=0;const r=a=>{if(a.isLeaf()){const l=Math.max(t,a.rect.w-2),c=Math.max(t,a.rect.h-2),d=Math.max(t,Math.floor(t+Math.random()*(l-t+1))),u=Math.max(t,Math.floor(t+Math.random()*(c-t+1))),h=a.rect.x+Math.floor((a.rect.w-d)/2),f=a.rect.z+Math.floor((a.rect.h-u)/2),g=e[i%e.length];a.room={id:i++,x:h,z:f,w:d,h:u,type:g,doors:[]},n.push(a.room)}else a.left&&r(a.left),a.right&&r(a.right)};return r(this),n}getRoom(){if(this.room)return this.room;let t=null,e=null;return this.left&&(t=this.left.getRoom()),this.right&&(e=this.right.getRoom()),t||e}}class sm{width;height;tiles;rooms=[];corridors=[];spawnPoint={x:0,z:0};constructor(t=48,e=48){this.width=t,this.height=e,this.tiles=Array.from({length:e},()=>Array(t).fill(0)),this.generate()}generate(){const t=new hi({x:1,z:1,w:this.width-2,h:this.height-2}),e=10,n=7,i=[t];for(let a=0;a<4;a++){const o=[];for(const l of i)l.split(e)&&(l.left&&o.push(l.left),l.right&&o.push(l.right));if(o.length===0)break;i.length=0,i.push(...o)}const r=["quarters","hall","armory","cellar","shrine"];this.rooms=t.createRooms(n,r);for(const a of this.rooms)for(let o=a.z;o<a.z+a.h;o++)for(let l=a.x;l<a.x+a.w;l++)o>=0&&o<this.height&&l>=0&&l<this.width&&(this.tiles[o][l]=1);this.createCorridors(t);for(const a of this.corridors)this.carveCorridor(a.x1,a.z1,a.x2,a.z2);for(let a=0;a<this.height;a++)for(let o=0;o<this.width;o++)this.tiles[a][o]===0&&this.isAdjacentToFloor(o,a)&&(this.tiles[a][o]=2);if(this.rooms.length>0){const a=this.rooms[0];this.spawnPoint={x:a.x+Math.floor(a.w/2),z:a.z+Math.floor(a.h/2)}}}isAdjacentToFloor(t,e){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++){if(i===0&&n===0)continue;const r=t+i,a=e+n;if(r>=0&&r<this.width&&a>=0&&a<this.height&&this.tiles[a][r]===1)return!0}return!1}createCorridors(t){if(!t.isLeaf()&&t.left&&t.right){const e=t.left.getRoom(),n=t.right.getRoom();if(e&&n){const i=Math.floor(e.x+e.w/2),r=Math.floor(e.z+e.h/2),a=Math.floor(n.x+n.w/2),o=Math.floor(n.z+n.h/2);this.corridors.push({x1:i,z1:r,x2:a,z2:o})}this.createCorridors(t.left),this.createCorridors(t.right)}}carveCorridor(t,e,n,i){let r=t,a=e;for(;r!==n;)r>=0&&r<this.width&&a>=0&&a<this.height&&(this.tiles[a][r]=1),r+=r<n?1:-1;for(;a!==i;)r>=0&&r<this.width&&a>=0&&a<this.height&&(this.tiles[a][r]=1),a+=a<i?1:-1}}class rm{atlas;constructor(t){this.atlas=t}createBed(){const t=new Pt;t.name="Bed";const e=new et(1.2,.4,1.8),n=new D(e,this.atlas.materials.bedGreen);n.position.set(0,.35,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new et(1.3,.9,.12),r=new D(i,this.atlas.materials.woodBeam);r.position.set(0,.45,-.9),r.castShadow=!0,t.add(r);const a=new et(1.3,.6,.12),o=new D(a,this.atlas.materials.woodBeam);o.position.set(0,.3,.9),o.castShadow=!0,t.add(o);const l=new et(.12,.95,.12),c=[[-.6,.475,-.9],[.6,.475,-.9],[-.6,.35,.9],[.6,.35,.9]];for(const d of c){const u=new D(l,this.atlas.materials.woodBeam);u.position.set(d[0],d[1],d[2]),u.castShadow=!0,t.add(u)}return t}createDrawer(){const t=new Pt;t.name="Drawer";const e=new et(.75,.75,.6),n=new D(e,this.atlas.materials.woodPlanks);n.position.set(0,.375,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new et(.82,.08,.68),r=new D(i,this.atlas.materials.woodBeam);r.position.set(0,.77,0),r.castShadow=!0,t.add(r);const a=new et(.2,.04,.04),o=new D(a,this.atlas.materials.iron);o.position.set(0,.52,.31);const l=new D(a,this.atlas.materials.iron);return l.position.set(0,.25,.31),t.add(o,l),t}createWardrobe(){const t=new Pt;t.name="Wardrobe";const e=new et(1.2,1.9,.7),n=new D(e,this.atlas.materials.woodPlanks);n.position.set(0,.95,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new et(1.3,.1,.76),r=new D(i,this.atlas.materials.woodBeam);r.position.set(0,1.9,0),r.castShadow=!0,t.add(r);const a=new et(.08,.08,.04),o=new D(a,this.atlas.materials.iron);o.position.set(-.55,1.4,.36);const l=new D(a,this.atlas.materials.iron);return l.position.set(-.55,.5,.36),t.add(o,l),t}createTableSet(){const t=new Pt;t.name="TableSet";const e=new et(1.5,.1,.9),n=new D(e,this.atlas.materials.bedGreen);n.position.set(0,.7,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new et(.08,.7,.08),r=[[-.65,.35,-.35],[.65,.35,-.35],[-.65,.35,.35],[.65,.35,.35]];for(const l of r){const c=new D(i,this.atlas.materials.woodBeam);c.position.set(l[0],l[1],l[2]),c.castShadow=!0,t.add(c)}const a=this.createChair();a.position.set(-.9,0,0),a.rotation.y=Math.PI/2,t.add(a);const o=this.createChair();return o.position.set(.9,0,0),o.rotation.y=-Math.PI/2,t.add(o),t}createChair(){const t=new Pt,e=new D(new et(.42,.06,.42),this.atlas.materials.woodPlanks);e.position.set(0,.42,0),e.castShadow=!0,t.add(e);const n=new D(new et(.42,.45,.06),this.atlas.materials.woodBeam);n.position.set(0,.65,-.18),n.castShadow=!0,t.add(n);const i=new et(.05,.42,.05),r=[[-.18,.21,-.18],[.18,.21,-.18],[-.18,.21,.18],[.18,.21,.18]];for(const a of r){const o=new D(i,this.atlas.materials.woodBeam);o.position.set(a[0],a[1],a[2]),o.castShadow=!0,t.add(o)}return t}createCarpet(t,e){const n=new Ee(t,e),i=new D(n,this.atlas.materials.carpetRed);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}createTorch(t,e,n){const i=new Pt;i.position.set(t,e,n);const r=new et(.12,.35,.2),a=new D(r,this.atlas.materials.iron);a.position.set(0,0,.1),i.add(a);const o=new et(.08,.5,.08),l=new D(o,this.atlas.materials.woodBeam);l.position.set(0,.15,.2),l.rotation.x=.2,i.add(l);const c=new et(.15,.22,.15),d=new tn({color:16768358}),u=new D(c,d);u.position.set(0,.42,.25),i.add(u);const h=new Je(16760388,4.5,24,1.05);h.position.set(0,.5,.3),h.castShadow=!0,h.shadow.bias=-.002,h.shadow.mapSize.width=512,h.shadow.mapSize.height=512,i.add(h);const f={light:h,baseIntensity:4.5,flickerSpeed:7+Math.random()*5,flickerPhase:Math.random()*Math.PI*2,position:new U(t,e+.5,n+.3)};return{group:i,lightInfo:f}}createWindow(t,e,n){const i=new Pt;i.position.set(t,e,n);const r=new D(new Ee(1.6,1.2),this.atlas.materials.windowLattice);r.position.set(0,0,.02),i.add(r);const a=new Je(16774608,5.5,16,1.05);return a.position.set(0,0,.5),i.add(a),i}createMapScroll(t,e,n){const i=new D(new Ee(1.4,.9),this.atlas.materials.mapScroll);return i.position.set(t,e,n+.02),i}createChest(t,e,n){const i=new Pt;i.position.set(t,e,n);const r=new D(new et(.7,.45,.5),this.atlas.materials.woodPlanks);r.position.set(0,.225,0),r.castShadow=!0,i.add(r);const a=new D(new et(.72,.18,.52),this.atlas.materials.woodBeam);a.position.set(0,.5,0),a.castShadow=!0,i.add(a);const o=new D(new et(.1,.12,.05),this.atlas.materials.iron);return o.position.set(0,.38,.27),i.add(o),i}}class am{scene;atlas;dungeon;container;propsFactory;torchLights=[];solidGrid;constructor(t,e,n=48,i=48){this.scene=t,this.atlas=e,this.propsFactory=new rm(e),this.dungeon=new sm(n,i),this.container=new Pt,this.container.name="DungeonWorld",this.solidGrid=Array.from({length:i},()=>Array(n).fill(!1)),this.scene.add(this.container),this.build3DMap()}build3DMap(){const e=[],n=[],i=[],r=[],a=[],o=[],l=[],c=[],d=[],u=(h,f,g,_,m,p,E,b,v=[1,1])=>{h.push(..._,...m,...p),g.push(...b,...b,...b),f.push(0,0,v[0],0,v[0],v[1]),h.push(..._,...p,...E),g.push(...b,...b,...b),f.push(0,0,v[0],v[1],0,v[1])};for(let h=0;h<this.dungeon.height;h++)for(let f=0;f<this.dungeon.width;f++){const g=this.dungeon.tiles[h][f];g===1?(u(e,n,i,[f,0,h],[f+1,0,h],[f+1,0,h+1],[f,0,h+1],[0,1,0]),this.solidGrid[h][f]=!1):g===2?(this.solidGrid[h][f]=!0,h+1<this.dungeon.height&&this.dungeon.tiles[h+1][f]===1&&u(r,a,o,[f+1,2.8,h+1],[f+1,0,h+1],[f,0,h+1],[f,2.8,h+1],[0,0,1],[1,2.8]),h-1>=0&&this.dungeon.tiles[h-1][f]===1&&u(r,a,o,[f,2.8,h],[f,0,h],[f+1,0,h],[f+1,2.8,h],[0,0,-1],[1,2.8]),f-1>=0&&this.dungeon.tiles[h][f-1]===1&&u(r,a,o,[f,2.8,h+1],[f,0,h+1],[f,0,h],[f,2.8,h],[-1,0,0],[1,2.8]),f+1<this.dungeon.width&&this.dungeon.tiles[h][f+1]===1&&u(r,a,o,[f+1,2.8,h],[f+1,0,h],[f+1,0,h+1],[f+1,2.8,h+1],[1,0,0],[1,2.8]),u(l,c,d,[f,2.8,h],[f+1,2.8,h],[f+1,2.8,h+1],[f,2.8,h+1],[0,1,0])):this.solidGrid[h][f]=!0}if(e.length>0){const h=new we;h.setAttribute("position",new re(e,3)),h.setAttribute("normal",new re(i,3)),h.setAttribute("uv",new re(n,2));const f=new D(h,this.atlas.materials.woodPlanks);f.receiveShadow=!0,this.container.add(f)}if(r.length>0){const h=new we;h.setAttribute("position",new re(r,3)),h.setAttribute("normal",new re(o,3)),h.setAttribute("uv",new re(a,2));const f=new D(h,this.atlas.materials.stoneBrick);f.castShadow=!0,f.receiveShadow=!0,this.container.add(f)}if(l.length>0){const h=new we;h.setAttribute("position",new re(l,3)),h.setAttribute("normal",new re(d,3)),h.setAttribute("uv",new re(c,2));const f=new D(h,this.atlas.materials.woodBeam);f.castShadow=!0,this.container.add(f)}this.populateRooms()}populateRooms(){if(this.dungeon.rooms.length===0)return;const t=this.dungeon.rooms[0];this.decorateQuartersRoom(t);for(let e=1;e<this.dungeon.rooms.length;e++){const n=this.dungeon.rooms[e];this.decorateProceduralRoom(n)}}decorateQuartersRoom(t){const e=t.x+t.w/2,n=t.z+t.h/2,i=this.propsFactory.createBed();i.position.set(t.x+1.2,0,t.z+1.6),this.container.add(i);const r=this.propsFactory.createDrawer();r.position.set(t.x+2.5,0,t.z+.8),this.container.add(r);const a=this.propsFactory.createWardrobe();a.position.set(t.x+t.w-1.2,0,t.z+1.8),this.container.add(a);const o=this.propsFactory.createBed();o.position.set(t.x+t.w-2.8,0,t.z+1.6),this.container.add(o);const l=this.propsFactory.createDrawer();l.position.set(t.x+t.w-4.1,0,t.z+.8),this.container.add(l);const c=this.propsFactory.createTableSet();c.position.set(e-.5,0,t.z+1.8),this.container.add(c);const d=this.propsFactory.createCarpet(t.w*.65,t.h*.4);d.position.set(e,.01,n+1),this.container.add(d);const u=this.propsFactory.createMapScroll(t.x+2,1.8,t.z);this.container.add(u);const h=this.propsFactory.createWindow(t.x+t.w-3.2,1.8,t.z);this.container.add(h);const f=this.propsFactory.createTorch(t.x+4.2,1.6,t.z);this.container.add(f.group),this.torchLights.push(f.lightInfo),this.setSolidBox(t.x+.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-3.5,t.z+.7,1.4,1.8),this.setSolidBox(t.x+t.w-1.8,t.z+1,1.2,1)}decorateProceduralRoom(t){const e=t.x+t.w/2,n=t.z+t.h/2,i=this.propsFactory.createTorch(e,1.6,t.z);if(this.container.add(i.group),this.torchLights.push(i.lightInfo),t.type==="armory"){const r=this.propsFactory.createChest(t.x+1.2,0,t.z+1.2),a=this.propsFactory.createChest(t.x+2.2,0,t.z+1.2);this.container.add(r,a),this.setSolidBox(t.x+.8,t.z+.8,2,1)}else if(t.type==="hall"){const r=this.propsFactory.createCarpet(t.w*.5,t.h*.5);r.position.set(e,.01,n),this.container.add(r);const a=this.propsFactory.createTableSet();a.position.set(e,0,n),this.container.add(a),this.setSolidBox(e-1,n-.6,2,1.2)}else if(t.type==="cellar"){const r=this.propsFactory.createChest(t.x+t.w-1.5,0,t.z+t.h-1.5);this.container.add(r)}}setSolidBox(t,e,n,i){const r=Math.max(0,Math.floor(t)),a=Math.min(this.dungeon.width-1,Math.floor(t+n)),o=Math.max(0,Math.floor(e)),l=Math.min(this.dungeon.height-1,Math.floor(e+i));for(let c=o;c<=l;c++)for(let d=r;d<=a;d++)this.solidGrid[c][d]=!0}isSolid(t,e){const n=Math.floor(t),i=Math.floor(e);return n<0||n>=this.dungeon.width||i<0||i>=this.dungeon.height?!0:this.solidGrid[i][n]}updateTorches(t){for(const e of this.torchLights){const n=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.6+Math.cos(t*(e.flickerSpeed*1.7)+e.flickerPhase*2)*.3;e.light.intensity=Math.max(3.2,e.baseIntensity+n)}}setVisible(t){this.container.visible=t}}class Ke{static sessionSeed=Math.floor(Math.random()*1e7);static CLASSIFICATIONS={Fiction:["High Fantasy","Gothic Tales","Fables & Parables","Epic Poetry"],"Non-Fiction":["Biography","Autobiography","History","Statecraft & Law","Natural Philosophy","Science & Technology","Travel & Culture","Academics"],"Academic Texts & Grammar":["Ancient Linguistics & Lexicons","Classical Rhetoric","Aristotelian Logic","Cartography & Geometry"],"Professional Manuals":["Master Stonemasonry","Cathedral Architecture","Herbalism & Apothecary","Alchemical Metallurgy","Tactical Siegecraft"],"Breakthroughs & Theories":["Celestial Mechanics","Etheric Resonance Theory","Elemental Transmutation","Chrono-Geometric Principles"],Dissertations:["Theological Treatise","Metaphysical Inquiries","Subterranean Excavations","Cryptographic Syntheses"],"Mysticism & Magic":["Astral Pyromancy","Void Weaving","Sacred Runic Inscriptions","Divination & Starlight Scrying"],"Tales & Mythology":["Legends of the First Age","Chronicles of the Golden Lion","The Sunken Kingdoms","Behemoths of the Deep"]};static CLASSIC_TITLES={Fiction:["The Chronicles of Wessex","Poems of the Minstrels","Song of the Wounded Stag","The Knight of the Silver Shield","The Phantom of the Cloister","The Winter King"],"Non-Fiction":["Historia Britanniae","The Lives of Saints","Tacitus Annales","The Art of War","Chronicles of the Crusades","Gesta Danorum","Chronicon Saxonicum","On Virtue and Honor"],"Academic Texts & Grammar":["Geometria","De Officiis Regum","Grammatica Antiqua","The Oxford Lexicon","Ars Grammatica","The Canon of Dialectic","De Interpretatione"],"Professional Manuals":["Herbarius","De Medicina","Treatise on Archery","Liber Florum","Master Stonemasonry","Compendium Architecturae","Apothecary Formulary"],"Breakthroughs & Theories":["Astronomia","Philosophia Naturalis","The Harmonies of the Spheres","Treatise on Etheric Flow","Chrono-Geometric Axioms","Optics of the Prism"],Dissertations:["De Rerum Natura","Compendium Theologiae","Epistemology of the Light","Speculum Humanae Salvationis","The Subterranean Vaults: A Study","Treatise on Free Will"],"Mysticism & Magic":["Ars Magica","Liber Alchimia","The Emerald Tablet","Malleus Arcanum","Grimoire of Starlight","The Seven Sacred Seals","The Book of Shadows"],"Tales & Mythology":["Celtic Myths & Legends","The Book of Kells","Tales of the Golden Lion","The Primordial Slumber","Legends of the High Barrows","The Sunken Spires of Alderia"]};static TITLE_PATTERNS=["The Codex of [Adjective] [Noun]","Treatise on [Concept]","Memoirs of a [Profession]","The Principles of [Concept]","Chronicles of [Noun]","A Scholar's Guide to [Concept]","The Lost Gospel of [ProperName]","Observations on [Adjective] [Noun]","The Architecture of [Noun]","An Inquiry into [Concept]","Discourses on [Adjective] [Concept]","The Secrets of [Noun]","A Compendium of [Adjective] [Concept]","The Seven Pillars of [Concept]","Meditations upon [Noun]","Visions of [ProperName] and the [Noun]"];static SUBTITLE_PATTERNS=["An Archival Inquiry into the Principles of the First Age","A Comprehensive Discourse for Scribes and Masters","Transcribed from the Earliest Manuscripts of the High Vaults","With Observations on Sacred Geometry and Natural Law","Being a True and Faithful Account of Historic Revelations","Compiled in the Scriptorium of the Grand Cathedral Nave","A Systematic Treatise for Seekers of Illuminated Truth","With Commentary by the Venerable Keepers of the Archives"];static ADJECTIVES=["Arcane","Ancient","Celestial","Forgotten","Gilded","Immutable","Shadowed","Verdant","Astral","Hallowed","Primordial","Luminescent","Forbidden","Eternal","Sacred","Subterranean","Obsidian","Iron-Bound"];static NOUNS=["Wessex","Alderia","the Cathedral","the High Archons","the Starlight","the Nether Depths","the Golden Lion","the Sunken Kingdom","the Sacred Oak","the Astral Loom","the Silver Flame","the Whispering Vaults","the Seven Veils"];static CONCEPTS=["Etheric Geometry","Astral Pyromancy","Living Stone & Mortar","Celestial Harmonics","Temporal Flux","Alchemical Transmutation","Herbal Panaceas","Rhetorical Eloquence","Metaphysical Equilibrium","Dungeon Fortifications","Sacred Geometry","Linguistic Roots of the First Tongue"];static PROFESSIONS=["Cathedral Scribe","Royal Alchemist","Master Stonecutter","Astral Cartographer","Grand Inquisitor","Herbal Apothecary","Cryptographic Scholar","High Archon","Dungeon Architect","Knight Chronicler","Void Watcher","Master Clockmaker"];static PROPER_NAMES=["Valerius","Seraphina","Ignatius","Morvath","Aurelius","Zephyrus","Eleanor","Balthazar","Cassian","Mirella","Lucian","Theodosia","Eldred","Vespera","Gideon","Roderick","Bramwell","Yvaine"];static AUTHORS_SUFFIX=["of Oakhaven","of the Iron Quill","the Stargazer","of Sunken Alderia","the Sightless","of House Lionheart","the Elder","of the High Spire","Arch-Scholar of Veritas","Venerable Keeper of Scrolls","Master Artificer"];static ERAS=["The First Age of Dawn (Year 312)","Era of the Great Schism (Year 784)","The Golden Century of the Lion (Year 1102)","Age of the Obsidian Eclipse (Year 1340)","Reign of Archon Aurelius IX (Year 1415)","The Silent Interregnum (Year 988)","Dawn of the Cathedral Archives (Year 1204)","The Third Solstice Reformation (Year 1520)"];static COVER_COLORS=["#82181e","#9e1c25","#631317","#1c3761","#14294a","#26497d","#1d5334","#133d25","#2b6942","#542d17","#6b3a1e","#7a4422","#521c63","#6a2280","#3e134d","#184e57","#206670","#222226","#18181b","#8c6227","#a3722e","#8c3823","#732b1a"];static ACCENT_COLORS=["#ffd700","#e5b84c","#9a7838","#d1d7e3","#c86d49","#1a1614","#dfd2b5"];static createPrng(t){let e=t+this.sessionSeed>>>0;return function(){let n=e+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}static generateBook(t,e){const n=this.createPrng(t),i=Object.keys(this.CLASSIFICATIONS),r=i[Math.floor(n()*i.length)],a=this.CLASSIFICATIONS[r],o=a[Math.floor(n()*a.length)];let l=e;if(!l)if(n()<.35){const X=this.CLASSIC_TITLES[r];l=X[Math.floor(n()*X.length)]}else l=this.generateTitle(n,r);const c=this.SUBTITLE_PATTERNS[Math.floor(n()*this.SUBTITLE_PATTERNS.length)],d=this.PROPER_NAMES[Math.floor(n()*this.PROPER_NAMES.length)],u=this.AUTHORS_SUFFIX[Math.floor(n()*this.AUTHORS_SUFFIX.length)],h=`${d} ${u}`,f=this.ERAS[Math.floor(n()*this.ERAS.length)],g=this.COVER_COLORS[Math.floor(n()*this.COVER_COLORS.length)],_=this.ACCENT_COLORS[Math.floor(n()*this.ACCENT_COLORS.length)],m=["garamond","gothic","scriptorium","crimson","mystic"],p=["compact","regular","relaxed"];let E="garamond";r==="Breakthroughs & Theories"||r==="Academic Texts & Grammar"?E=n()<.5?"crimson":"garamond":r==="Mysticism & Magic"?E=n()<.6?"mystic":"gothic":r==="Dissertations"||r==="Professional Manuals"?E=n()<.5?"scriptorium":"garamond":E=m[Math.floor(n()*m.length)];let b="regular";r==="Academic Texts & Grammar"||r==="Breakthroughs & Theories"?b=n()<.5?"compact":"regular":r==="Tales & Mythology"||r==="Fiction"?b=n()<.5?"relaxed":"regular":b=p[Math.floor(n()*p.length)];let v="standard",P="academic-treatise";o==="Epic Poetry"||o==="Fables & Parables"?(v="verse",P="epic-verse"):o.includes("Lexicons")||o.includes("Grammar")||r==="Academic Texts & Grammar"?(v=n()<.6?"two-column":"standard",P="academic-treatise"):r==="Professional Manuals"?(v=n()<.4?"marginalia":"standard",P="technical-manual"):r==="Mysticism & Magic"?(v=n()<.5?"illuminated":"standard",P="mystic-grimoire"):r==="Dissertations"?(v=n()<.4?"marginalia":"standard",P=n()<.5?"philosophical-dialogue":"academic-treatise"):r==="Non-Fiction"?(v="standard",P="chronicle-history"):(v="standard",P="academic-treatise");const R=4+Math.floor(n()*4),w=[],C=this.shouldIncludeMathScience(r,o,n);w.push({pageType:"half-title",chapterTitle:"",pageNumber:1,content:`









${l.toUpperCase()}

❦`}),w.push({pageType:"frontispiece",chapterTitle:"FRONTISPIECE",pageNumber:2,content:this.generateFrontispieceText(r,n)}),w.push({pageType:"title-page",chapterTitle:"TITLE PAGE",pageNumber:3,content:`${l.toUpperCase()}

— ${c} —


BY
${h.toUpperCase()}


ARCHIVAL CLASSIFICATION: ${r.toUpperCase()}
SUBGENRE: ${o.toUpperCase()}


❦ ══════════════════ ❧
PUBLISHED BY THE HIGH CATHEDRAL SCRIPTORIUM
ARCHIVES OF ALDERIA • ANNO DOMINI`});const y=`MS-${1e3+Math.floor(n()*9e3)}-CATH-${10+Math.floor(n()*90)}`;w.push({pageType:"copyright",chapterTitle:"ARCHIVAL NOTICE",pageNumber:4,content:`GRAND CATHEDRAL ARCHIVAL REPOSITORY
Preserved under the Perpetual Edict of the High Council.

Manuscript Identification Code: ${y}
Archival Classification: ${r}
Catalog Shelf ID: Bay ${1+t%6}, Tier ${1+t%5}
Historical Era: ${f}

Transcribed by hand upon 100% Linen Rag Vellum with Iron-Gall Ink.
Bound in Tanned Calfskin with Hand-Cast Brass Furniture.

All rights reserved. No part of this codex may be transmuted, void-scribed, or excised without express consent of the Keeper of Scrolls.

Printed and Illuminated in the High Nave Scriptorium.`}),w.push({pageType:"dedication",chapterTitle:"DEDICATION",pageNumber:5,content:this.generateDedication(n)});const x=this.generateForeword(r,l,h,1,n),A=this.generateForeword(r,l,h,2,n);w.push({pageType:"toc",chapterTitle:"TABLE OF CONTENTS",pageNumber:6,content:""}),w.push({pageType:"foreword",chapterTitle:"PREFACE TO THE ARCHIVAL EDITION",pageNumber:7,content:x}),w.push({pageType:"foreword",chapterTitle:"PREFACE (CONTINUED)",pageNumber:8,content:A}),w.push({pageType:"prologue",chapterTitle:"PROLOGUE: THE FOUNDATIONAL AXIOMS",pageNumber:9,content:this.generatePrologue(r,o,l,n)});const G=[{title:"Frontispiece & Title Page",page:2},{title:"Preface & Archival Commentary",page:7},{title:"Prologue",page:9}],z=this.getChapterTitlesForBook(r,R,n);let H=10;for(let X=0;X<R;X++){const Y=z[X];G.push({title:Y,page:H});const J=2+Math.floor(n()*2);for(let V=1;V<=J;V++){const it=this.generateChapterPageContent(r,o,P,X,V,J,l,Y,C,n);w.push({pageType:"chapter",chapterTitle:`CHAPTER ${this.toRoman(X+1)}: ${Y.toUpperCase()}`,pageNumber:H,content:it,headerText:`${l.toUpperCase()} • CHAPTER ${this.toRoman(X+1)}`,hasMathProof:C&&V===2,marginalNote:v==="marginalia"&&V===1?`Glosa ${this.toRoman(X+1)}: Vide folium vetus.`:void 0}),H++}}return G.push({title:"Epilogue",page:H}),w.push({pageType:"epilogue",chapterTitle:"EPILOGUE: THE ETERNAL HORIZON",pageNumber:H,content:this.generateEpilogue(r,l,h,n),headerText:`${l.toUpperCase()} • EPILOGUE`}),H++,G.push({title:"Acknowledgments",page:H}),w.push({pageType:"acknowledgments",chapterTitle:"ACKNOWLEDGMENTS",pageNumber:H,content:this.generateAcknowledgments(h,n)}),H++,G.push({title:"Appendix: Historical Notes & Citations",page:H}),w.push({pageType:"appendix",chapterTitle:"APPENDIX & SCHOLARLY NOTES",pageNumber:H,content:this.generateAppendix(r,n)}),H++,G.push({title:"Glossary of Ancient Terms",page:H}),w.push({pageType:"glossary",chapterTitle:"GLOSSARY OF TERMS",pageNumber:H,content:this.generateGlossary(r,n)}),H++,G.push({title:"Author Biography & Index",page:H}),w.push({pageType:"author-bio",chapterTitle:"ABOUT THE AUTHOR",pageNumber:H,content:this.generateAuthorBio(h,f,r,n)}),w[5].content=this.formatTableOfContents(G),{id:`book_${t}_${r.replace(/\s+/g,"_")}`,title:l,subtitle:c,author:h,era:f,classification:r,subgenre:o,coverColor:g,accentColor:_,pages:w,fontFamily:E,fontSize:b,layoutFormat:v,writingStyle:P}}static shouldIncludeMathScience(t,e,n){return!!(t==="Breakthroughs & Theories"||t==="Academic Texts & Grammar"&&(e.includes("Geometry")||e.includes("Logic"))||t==="Dissertations"&&(e.includes("Cryptographic")||e.includes("Metaphysical"))||t==="Professional Manuals"&&(e.includes("Architecture")||e.includes("Metallurgy")||e.includes("Stonemasonry"))||t==="Mysticism & Magic"&&(e.includes("Runic")||e.includes("Astral"))&&n()<.45)}static formatTableOfContents(t){let e=`TABLE OF CONTENTS

`;return t.forEach(n=>{const i=" . ".repeat(Math.max(2,14-Math.floor(n.title.length/2)));e+=`${n.title.toUpperCase()}${i}${n.page}
`}),e}static generateFrontispieceText(t,e){const n={Fiction:"IN TENEBRIS LUX LUCET • IN SHADOWS THE LIGHT SHINES","Non-Fiction":"HISTORIA MAGISTRA VITAE • HISTORY IS THE TEACHER OF LIFE","Academic Texts & Grammar":"SCIENTIA IPSA POTESTAS EST • KNOWLEDGE ITSELF IS POWER","Professional Manuals":"MANU FACTUM ET LAPIDE STRUCTUM • BUILT BY HAND AND STONE","Breakthroughs & Theories":"PER ARDUA AD ASTRA • THROUGH STRUGGLE TO THE STARS",Dissertations:"VERITAS OMNIA VINCIT • TRUTH CONQUERS ALL","Mysticism & Magic":"IGNIS ET ASTRALIS ORDO • FIRE AND THE CELESTIAL ORDER","Tales & Mythology":"SEMPER VIGILANS • EVER WATCHFUL ACROSS THE AGES"};return`
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
    

"${n[t]||n.Fiction}"

Engraved by the Master Guild of Illuminators in the Grand Nave of Alderia.`}static generateDedication(t){const e=["To the stonemasons and architects of the First Age, who raised these vaulted arches without fear of the abyss, and whose chisel marks still guide our hands.","For Seraphina, who tended the hearth and replenished the midnight oil when the winter tempests besieged the high mountain pass.","To the seekers of truth who walk through the shadowed nave, holding a solitary candle against the encroaching darkness.","Dedicated to the Venerable Archon Aurelius, who preserved the sacred scrolls from the great flood of the lower crypts.","For those who dare to decipher the starlight, and who understand that every stone in this cathedral bears a secret memory."];return`









"${e[Math.floor(t()*e.length)]}"

— The Author`}static generateForeword(t,e,n,i,r){return i===1?`It is with profound reverence that we present this restored edition of ${e}. For three centuries, the original manuscript lay undisturbed within the iron-bound chests of the High Apse, shielded from both the damp air of the lower vaults and the turmoil of the Interregnum.

The author, ${n}, was not merely a chronicler, but an initiate of the highest order. Their mastery of ${t} remains unmatched throughout the historical record. In an era when lesser scribes surrendered to superstition, ${n} applied rigorous observation, sacred geometry, and metaphysical clarity to every page.

As the reader prepares to turn these parchment leaves, let it be remembered that wisdom is not a passive treasure, but an active covenant between the past and the present.`:`In preparing this definitive archival codex, the Guild of Illuminators has carefully verified every citation against the original calfskin folios. Minor glosses in the margins have been preserved, for they reveal the living debate that surrounded this work during the Solstice Reformation.

May this treatise illuminate the minds of scholars who walk these silent cloisters. Let the candle burn bright upon the study desk, and let no word of truth be forgotten.

— Archon Theodosia of the High Scriptorium
Prefect of the Cathedral Archives, Anno Domini`}static generatePrologue(t,e,n,i){return`Before the first keystone was locked into place beneath the cathedral dome, the foundations of ${e} had already been decreed by the ancient scholars. It is written that the universe speaks in a language of resonance, proportion, and light.

Within this volume of ${n}, we endeavor to bridge the vast chasm between ancient lore and empirical truth. Every observation recorded herein has been verified within the consecrated halls of the Grand Nave, under the watchful gaze of the stone archons.

Let the reader cast aside trivial distractions and step across the threshold into the deeper mysteries of ${t}.`}static getChapterTitlesForBook(t,e,n){const i={Fiction:["The Threshold of Twilight","The Shadow in the Cloister","The Oath of Iron and Ash","The Awakening of the High Tower","Song of the Wounded Stag","The Battle of the North Gate","Whispers in the Crypt","The Return of the Sovereign"],"Non-Fiction":["Chronological Foundations","The Siege of the Outer Walls","Cultural Artifacts of Alderia","Anatomy of Statecraft","The Great Reconstruction","Trade Across the Southern Straits","The Reformation of the Guilds","The Legacy of the Archons"],"Academic Texts & Grammar":["Morphology of Ancient Dialects","Rules of Classical Syntax","Etymological Transpositions","Orthography of Sacred Runes","The Canon of Dialectic","Rhetorical Figures in Formal Discourse","The Metric System of Epic Poetry","Syntactical Syntheses"],"Professional Manuals":["Preparation of Mortar & Keystones","Thermal Tempering of Knight Blades","Harvesting Lunar Nightshade","Foundations of Arch Buttresses","Standard Operating Protocols","Purification of Heavy Metals","Calculations of Load Bearing Columns","Preservation of Archival Vellum"],"Breakthroughs & Theories":["The Hypothesis of Etheric Flow","Mathematical Geometries of Astral Spheres","Observation of Particle Flux","Harmonic Resonance Theorems","Empirical Corroborations","The Prism Refraction Axiom","Calculus of Celestial Spheres","The Unified Field of Light"],Dissertations:["Theological Axioms of the Light","Epistemology of the Subterranean Mind","Excavation Findings at Level VII","Cryptographic Analysis of the Vault Seal","Synthesis & Concluding Theses","The Doctrine of Causality","Metaphysical Proofs of Order","The Dialectic of the Archons"],"Mysticism & Magic":["Igniting the Inner Hearth Flame","Invocations to the Starlight Wardens","Weaving the Wards of Protection","The Seven Veils of the Void","Rituals of Ascension","Alchemical Transmutation of the Spirit","The Sigils of the Four Winds","The Rites of the Midnight Solstice"],"Tales & Mythology":["The Primordial Slumber of the Earth","When the Lion Roared Over Silverpeak","The Tragedy of the Sunken Spires","The Celestial Falcon and the Wyrm","Legends of the High Barrows","The Song of the First King","The Wandering Star of Alderia","The Great Vigil of the Watchers"]};return(i[t]||i.Fiction).slice(0,e)}static generateChapterPageContent(t,e,n,i,r,a,o,l,c,d){if(n==="epic-verse"){const h=[`When shadows lengthen o'er the silent stone,
And solemn winds through empty cloisters moan,
The ancient guardians take their vigilant stand,
With silver blades unsheathed in righteous hand.`,`Behold the golden sun across the nave,
Where once the banner of the Lion gave
Its proud salute unto the vaulted skies,
Before the stars in silent slumber rise.`,`No mortal iron can break the sacred seal,
Nor turn aside the truth that stones reveal;
From deep foundations to the spire on high,
The bells of Alderia shall never die.`],f=h[i%h.length],g=h[(i+1)%h.length];return`[VERSE CANTO ${i+1}]

${f}

${g}

❦ ════════ ❧

*Refrain: "Hark to the chime that echoes in the deep,
Where forgotten kings their ancient vigil keep."*`}if(n==="technical-manual"&&r===1)return`[SECTION ${i+1}.0 — OPERATIONAL SPECIFICATION]

Master Craftsman Protocol for: ${l.toUpperCase()}.

• Required Workshop Tools: Chiseled Granite Anvil, High-Temperature Bellows, Calibrated Plumb Bob.
• Safe Working Temperature: 820°C to 1140°C (Orange to Bright Yellow Heat).
• Standard Tolerance: ±0.05 cubits per architectural bay.

Before commencing operations, the apprentice shall verify that the foundation mortar has cured for no fewer than seven full solar cycles. Any deviation in moisture content will induce shear cracking along the diagonal compressive line.`;if(n==="philosophical-dialogue"&&r===1)return`[DISPUTATIO: ON THE NATURE OF ${l.toUpperCase()}]

MASTER AURELIUS: Tell me, Brother Cassian, when you observe the keystone suspended fifty cubits above the marble floor, what force prevents its descent into the dust?

CASSIAN: Surely, Master, it is the mortar that binds it to the adjoining voussoirs.

AURELIUS: Nay, for even if the mortar were turned to sand, the arch would stand so long as the lateral thrust meets the opposing buttress with equal and opposite force. Thus, balance is not born of adhesion, but of dynamic opposition.`;if(r===2&&c)return this.generateMathProofPage(t,e,i,d);if(r===1){const h=[`To understand the essence of ${l.toLowerCase()}, one must first examine the historical records preserved in the scriptorium. As noted in the annals of ${e}, the earliest masters observed that every phenomenon carries an underlying symmetry.

When we examine the stone arches and fluted pillars of our own cathedral, we see this principle made manifest in granite and mortar. Nothing is arbitrary; every measurement corresponds to a higher geometric harmony.`,`The records of the third century make frequent mention of ${l.toLowerCase()}. In those days, before the great reformation, scholars debated whether such knowledge should remain sequestered within the high vaults or shared among the guild masters.

It was through rigorous experimentation that the truth was finally demonstrated, forever altering our understanding of ${e}.`,`Consider the profound implications of ${l.toLowerCase()} upon the development of modern statecraft and philosophy. As the high scribe wrote in his personal journals: "He who masters the foundational elements shall find the doors of the library open before him."

Let us proceed to examine the specific proofs and methodologies that substantiate this claim.`];return h[i%h.length]}if(r===a){const h=[`In concluding this discussion of ${l.toLowerCase()}, we must emphasize that theoretical knowledge without practical application remains barren. The true scholar must test these principles within the laboratory and the workshop.

As we prepare to enter the subsequent chapter, hold fast to these foundational insights, for they shall serve as your compass through the intricate labyrinth of ${o}.`,`Thus we bring to a close our examination of this vital subject. Let the student transcribe these axioms into their personal commonplace book, that the light of understanding may never be extinguished by forgetfulness.

The subsequent chapter will expand upon these conclusions, delving into advanced formulations and practical demonstrations.`];return h[i%h.length]}const u=[`Furthermore, let us analyze the secondary characteristics that distinguish these phenomena. When light passes through the stained-glass windows of the northern apse, the spectrum breaks into distinct harmonic bands. Each band corresponds directly to the vibrational frequencies outlined in our earlier axioms.

Table of Observational Values:
• Primary Resonance: 432 Cycles per Solstice
• Secondary Harmonic: 864 Cycles
• Refractive Index: 1.618 (Golden Mean)

These numerical ratios demonstrate beyond all doubt that nature conforms to the mathematical canon established by the first architects.`,`In the accompanying illustrations drawn upon the facing parchment, the scholar will observe the structural configuration of the keystone. Notice how the mortise joint interlocks with the diagonal thrust vector of the rib vault.

Without this precise angle of 45 degrees, the entire weight of the clerestory wall would collapse inward upon the nave. Thus, sacred geometry is not merely an aesthetic pursuit, but the absolute guarantor of physical stability.`,"During the excavations conducted beneath the fourth subterranean level, several brass astrolabes were unearthed bearing inscriptions identical to those cited in this chapter. The alignment of the gimbal rings matches the celestial precession recorded during the reign of Archon Aurelius IX."];return u[i%u.length]}static generateMathProofPage(t,e,n,i){const r=[`[THEOREM III: ORBITAL HARMONIC PRECESSION OF ${e.toUpperCase()}]

Let $\\Psi(t)$ denote the instantaneous angular displacement of the third celestial meridian ring.

$$\\oint_{\\mathcal{S}} \\nabla \\Psi \\cdot d\\vec{A} = \\frac{4\\pi G \\cdot \\mathcal{M}_{\\odot}}{\\sqrt{1 - \\frac{2GM}{r c_e^2}}} \\cdot \\cos\\left(\\frac{k \\pi}{12}\\right)$$

[MATHEMATICAL DERIVATION & PROOF]:

1. Define the radial gravitational flux vector $\\vec{\\Phi}_r = -\\frac{G \\mathcal{M}}{r^2} \\hat{r}$.

2. By applying the divergence theorem across the closed celestial sphere $\\Omega$:

$$\\iiint_{\\Omega} (\\nabla^2 \\Psi + \\omega_0^2 \\Psi) \\, dV = \\kappa \\sum_{n=1}^{7} \\frac{\\alpha_n}{n^2} \\sin(n \\theta)$$

3. For all integer solstices $k \\in \\mathbb{Z}$, the boundary traction vanishes: $\\tau_{\\text{boundary}} = 0$.

$$\\Delta \\Psi_{\\text{precession}} = \\frac{6 \\pi G \\mathcal{M}}{c^2 a (1 - e^2)} \\equiv 42.98'' \\text{ per century}$$

[Q.E.D. • Quod Erat Demonstrandum]`,`[LEMMA II: DUAL-VECTOR EQUILIBRIUM OF THE POINTED ARCH]

To prevent shear failure at the crown keystone, the diagonal compressive thrust must satisfy:

$$\\sigma_{\\text{keystone}} = \\frac{\\gamma_{\\text{stone}} \\cdot V_{\\text{vault}}}{2 \\sin(\\alpha) \\cdot d_{\\text{buttress}}} \\le [\\sigma_{\\text{granite}}] = 48.5 \\ \\text{MPa}$$

[STRUCTURAL RESOLUTION MATRIX]:

$$\\begin{bmatrix} \\cos(45^\\circ) & -\\sin(45^\\circ) \\\\ \\sin(45^\\circ) & \\cos(45^\\circ) \\end{bmatrix} \\begin{bmatrix} F_{\\text{vertical}} \\\\ F_{\\text{lateral}} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\rho g R^2}{2} \\end{bmatrix}$$

Integrating along the curvature arc from impost to apex:

$$T_{\\text{horizontal}} = \\int_{0}^{\\pi/4} \\rho g R^2 \\cos(\\theta) \\, d\\theta = \\rho g R^2 \\left(1 - \\frac{\\sqrt{2}}{2}\\right)$$

This establishes that a 45-degree pointed Gothic arch reduces lateral wall thrust by exactly 29.3% compared to a semi-circular Roman barrel vault.

[Q.E.D. • Quod Erat Demonstrandum]`,`[AXIOM V: ETHERIC CONTINUITY & ENERGY CONSERVATION]

In a non-dispersive etheric medium, the complex scalar field $\\Phi(x,t)$ satisfies the second-order wave equation:

$$\\frac{\\partial^2 \\Phi}{\\partial t^2} - c_e^2 \\nabla^2 \\Phi + \\mu_0^2 \\Phi^3 = 0$$

[PROOF OF FREQUENCY HARMONICS]:

Let $\\Phi(x,t) = A_0 e^{i(k x - \\omega t)}$. Substituting into the differential operator:

$$\\omega(k) = \\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}$$

$$\\text{Phase Velocity } v_p = \\frac{\\omega}{k} = c_e \\sqrt{1 + \\frac{\\mu_0^2 A_0^2}{c_e^2 k^2}} > c_e$$

$$\\text{Group Velocity } v_g = \\frac{d\\omega}{dk} = \\frac{c_e^2 k}{\\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}} < c_e$$

$$\\therefore v_p \\cdot v_g = c_e^2 \\quad [\\text{Verified by Astrolabe Interferometry}]$$

[Q.E.D. • Quod Erat Demonstrandum]`,`[PROPOSITION VII: RECURSIVE ARCHIVAL CIPHER INVERSION]

Let the cryptographic inscription on Vault Door VII be defined by the modular exponentiation:

$$C \\equiv M^{e} \\pmod{N}, \\quad \\text{where } N = p \\cdot q \\text{ and } \\gcd(e, \\phi(N)) = 1$$

[PROOF OF UNIQUE DECIPHERABILITY]:

1. By Euler's Totient Theorem, for any integer $M$ coprime to $N$:

$$M^{\\phi(N)} \\equiv M^{(p-1)(q-1)} \\equiv 1 \\pmod{N}$$

2. Construct the private deciphering exponent $d$ such that:

$$e \\cdot d \\equiv 1 \\pmod{\\phi(N)} \\implies e \\cdot d = 1 + k \\phi(N)$$

3. Raising the ciphertext $C$ to the power of $d$:

$$C^d \\equiv (M^e)^d \\equiv M^{1 + k \\phi(N)} \\equiv M \\cdot (M^{\\phi(N)})^k \\equiv M \\pmod{N}$$

$$\\therefore M \\equiv C^d \\pmod{N} \\quad [\\text{The Vault Seal is Unconditionally Invertible}]$$

[Q.E.D. • Quod Erat Demonstrandum]`,`[FORMULA IV: STOICHIOMETRIC TRANSFORMATION OF CRUCIBLE STEEL]

Under an inert carbon-rich flame at $\\Delta T = 1450^\\circ \\text{C}$, the crystalline precipitation follows:

$$3\\text{Fe}_{(\\alpha)} + 2\\text{C}_{(\\text{graphite})} + \\text{W} \\xrightarrow{\\Delta H = -342 \\ \\text{kJ/mol}} \\text{Fe}_3\\text{W}\\text{C}_2 \\downarrow \\ (\\text{Adamantine Matrix})$$

[CRYSTALLINE GIBBS FREE ENERGY DERIVATION]:

$$\\Delta G^\\circ(T) = \\Delta H^\\circ - T \\Delta S^\\circ = -342{,}000 + 118.4 \\cdot T \\ \\text{J/mol}$$

Setting $\\Delta G^\\circ = 0$ reveals the critical threshold temperature:

$$T_{\\text{critical}} = \\frac{342{,}000}{118.4} = 2888.5 \\ \\text{K} \\equiv 2615.3^\\circ\\text{C}$$

Since the forge operates at $1450^\\circ\\text{C} < T_{\\text{critical}}$, $\\Delta G < 0$, proving spontaneous crystallization of indestructible Damascus grain boundaries.

[Q.E.D. • Quod Erat Demonstrandum]`,`[THEOREM I: CARDINAL ELEMENTAL EIGENVALUE MATRIX]

Let the warding field be represented by the symmetric 2x2 elemental matrix $\\mathbf{E}$:

$$\\mathbf{E} = \\begin{bmatrix} \\text{Ignis} & \\text{Aer} \\\\ \\text{Terra} & \\text{Aqua} \\end{bmatrix} = \\begin{bmatrix} 7 & 3 \\\\ 3 & 7 \\end{bmatrix}$$

[EIGENVALUE DECOMPOSITION]:

$$\\det(\\mathbf{E} - \\lambda \\mathbf{I}) = \\begin{vmatrix} 7 - \\lambda & 3 \\\\ 3 & 7 - \\lambda \\end{vmatrix} = (7 - \\lambda)^2 - 9 = 0$$

$$\\implies (7 - \\lambda) = \\pm 3 \\implies \\lambda_1 = 10, \\quad \\lambda_2 = 4$$

Corresponding Principal Ward Vectors:

$$\\vec{v}_1 = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\ (\\text{Harmonic Resonance}), \\quad \\vec{v}_2 = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\ (\\text{Anti-Ward})$$

Maximum field luminescence corresponds to the dominant eigenvalue $\\lambda_{\\max} = 10$.

[Q.E.D. • Quod Erat Demonstrandum]`],a=(n+Math.floor(i()*2)+t.length%3)%r.length;return r[a]}static generateEpilogue(t,e,n,i){return`Here terminates the core narrative and exposition of ${e}.

"The candle flame upon the reading desk may flicker and fade as the night deepens, but the illuminated word inscribed upon parchment remains forever impervious to the decay of time."

Through wars, schisms, and the silent passage of centuries, the insights of ${n} have endured within these vaulted walls. May those who walk the stone aisles of the Grand Cathedral Library continue to seek, to question, and to preserve the sacred heritage of ${t.toLowerCase()}.

Finis Coronat Opus • The End Crowns the Work.`}static generateAcknowledgments(t,e){return`The author wishes to express profound gratitude to:

• The High Archons of the Cathedral Library for granting access to the sequestered iron-bound vaults of the North Apse.

• Master Scribe Roderick of the Iron Quill, whose tireless transcription and correction of the draft leaves ensured the purity of the text.

• The Guild of Illuminators for the exquisite gold-leaf drop caps, frontispiece engraving, and hand-tooled leather bindings.

• Fellow scholars and acolytes of the Scriptorium, whose rigorous debates provided the intellectual crucible in which these ideas were refined.

Transcribed in the year of our Lord, in the scriptorium of the Grand Nave.`}static generateAppendix(t,e){return`APPENDIX: HISTORICAL CITATIONS & COMPARATIVE CHRONOLOGY

1. Codex Alderia (Vol. IV, fol. 112r) — Primary source for the architectural dimensions of the first cathedral nave.

2. The Solstice Ephemeris (Year 1104) — Astronomical tables recording the celestial alignment of the celestial globe.

3. Liber Alchimia (MS-842) — Reference formulas for the preservation of oak gall ink and calfskin vellum.

4. Edict of the High Council (Year 1340) — Decreeing the perpetual preservation of all manuscripts within the Cathedral Library.

All documents are held in the secure archives of the Grand Nave and may be inspected by petition to the Prefect.`}static generateGlossary(t,e){return`GLOSSARY OF ANCIENT TERMS

• Alembic: A classical alchemical distillation apparatus consisting of a cucurbit and helm.

• Apse: The semicircular vaulted recess at the eastern sanctuary of the cathedral.

• Clerestory: The high upper tier of cathedral walls pierced with stained-glass lancet windows.

• Drop-Cap: An oversized, illuminated initial capital letter at the opening of a chapter.

• Keystones: The central wedge-shaped stone at the crown of an arch that locks the vault into place.

• Vellum: Fine parchment prepared from calfskin, noted for its extreme durability and smooth texture.

• Wainscot: Polished dark oak paneling lining the lower portion of interior stone walls.`}static generateAuthorBio(t,e,n,i){return`ABOUT THE AUTHOR

${t} was one of the most distinguished scholars of ${e}. Appointed Senior Chronicler of the Cathedral Archives at the age of thirty-two, they authored over twenty authoritative treatises on ${n.toLowerCase()}, architecture, and natural philosophy.

Their pioneering work in archival preservation and manuscript illumination established the standards still practiced in the scriptorium today. When not writing in their private cell overlooking the cloister garden, they could be found lecturing before the Guild of Architects in the High Nave.

Their memory is preserved in the marble inscription plaque upon the southern ambulatory: "Sapientia Aeterna" (Eternal Wisdom).`}static generateTitle(t,e){const n=this.TITLE_PATTERNS[Math.floor(t()*this.TITLE_PATTERNS.length)],i=this.ADJECTIVES[Math.floor(t()*this.ADJECTIVES.length)],r=this.NOUNS[Math.floor(t()*this.NOUNS.length)],a=this.CONCEPTS[Math.floor(t()*this.CONCEPTS.length)],o=this.PROFESSIONS[Math.floor(t()*this.PROFESSIONS.length)],l=this.PROPER_NAMES[Math.floor(t()*this.PROPER_NAMES.length)];let c=n.replace("[Adjective]",i).replace("[Noun]",r).replace("[Concept]",a).replace("[Profession]",o).replace("[ProperName]",l);return e==="Professional Manuals"&&!c.includes("Manual")&&!c.includes("Guide")&&!c.includes("Treatise")?c=`Manual of ${a}`:e==="Academic Texts & Grammar"&&!c.includes("Grammar")&&!c.includes("Lexicon")&&!c.includes("Guide")?c=`Lexicon of ${i} Syntax`:e==="Dissertations"&&(c=`Dissertation: ${c}`),c}static toRoman(t){const e=[[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];let n="",i=t;for(const[r,a]of e)for(;i>=r;)n+=a,i-=r;return n||`${t}`}}class Oi{static spineCache=new Map;static pageSideMat=null;static leatherBackMatCache=new Map;static getSpineTexture(t,e=!1){const n=`${t.id}_${t.coverColor}_${t.accentColor}_${e?"H":"V"}`;if(this.spineCache.has(n))return this.spineCache.get(n);const i=e?128:48,r=e?32:96,a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d",{willReadFrequently:!0});o.imageSmoothingEnabled=!1,e?this.drawHorizontalSpine(o,i,r,t):this.drawVerticalSpine(o,i,r,t);const l=new Ts(a);return l.magFilter=he,l.minFilter=he,l.generateMipmaps=!1,l.colorSpace=xe,this.spineCache.set(n,l),l}static getBookMaterials(t,e=!1,n=-1){const i=this.getSpineTexture(t,e);let r=.55,a=.2;switch(t.accentColor){case"#ffd700":r=.38,a=.45;break;case"#d1d7e3":r=.32,a=.55;break;case"#c86d49":r=.42,a=.48;break;case"#e5b84c":r=.5,a=.3;break;case"#9a7838":r=.68,a=.18;break;case"#1a1614":r=.88,a=.02;break;case"#dfd2b5":r=.82,a=.05;break}const o=new Lt({map:i,roughness:r,metalness:a}),l=this.getLeatherCoverMaterial(t.coverColor),c=this.getPageEdgeMaterial(),d=n===-1;return[d?o:c,d?c:o,e?l:c,e?l:c,l,l]}static getPageEdgeMaterial(){if(!this.pageSideMat){const t=document.createElement("canvas");t.width=16,t.height=16;const e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#dfd3ad",e.fillRect(0,0,16,16),e.fillStyle="rgba(160, 140, 100, 0.45)";for(let i=1;i<16;i+=2)e.fillRect(0,i,16,1);const n=new Ts(t);n.magFilter=he,n.minFilter=he,n.colorSpace=xe,this.pageSideMat=new Lt({map:n,roughness:.85,metalness:.05})}return this.pageSideMat}static getLeatherCoverMaterial(t){if(this.leatherBackMatCache.has(t))return this.leatherBackMatCache.get(t);const e=document.createElement("canvas");e.width=16,e.height=16;const n=e.getContext("2d");n.imageSmoothingEnabled=!1,n.fillStyle=t,n.fillRect(0,0,16,16),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(2,2,4,4),n.fillRect(9,3,5,3),n.fillRect(3,10,6,4),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16);const i=new Ts(e);i.magFilter=he,i.minFilter=he,i.colorSpace=xe;const r=new Lt({map:i,roughness:.65,metalness:.08});return this.leatherBackMatCache.set(t,r),r}static drawVerticalSpine(t,e,n,i){t.fillStyle=i.coverColor,t.fillRect(0,0,e,n);const r=t.createLinearGradient(0,0,e,0);r.addColorStop(0,"rgba(0, 0, 0, 0.45)"),r.addColorStop(.18,"rgba(0, 0, 0, 0.0)"),r.addColorStop(.82,"rgba(0, 0, 0, 0.0)"),r.addColorStop(1,"rgba(0, 0, 0, 0.45)"),t.fillStyle=r,t.fillRect(0,0,e,n);const a=i.accentColor||"#ffd700",o=a==="#1a1614";o?(t.strokeStyle="rgba(0, 0, 0, 0.45)",t.strokeRect(2.5,2.5,e-5,n-5)):(t.strokeStyle="rgba(0, 0, 0, 0.35)",t.strokeRect(1.5,1.5,e-3,n-3),t.strokeStyle=a,t.strokeRect(2.5,2.5,e-5,n-5)),this.drawCornerBrackets(t,3,3,e-6,n-6,a),[12,38,58,84].forEach(h=>{t.fillStyle="rgba(0, 0, 0, 0.5)",t.fillRect(4,h-1,e-8,3),t.fillStyle=o?"rgba(0, 0, 0, 0.6)":a,t.fillRect(4,h,e-8,1)});const c=this.determineEmblem(i),d=e/2,u=n-22;this.drawEmblem(t,d,u,c,a),this.drawSpineTitle(t,e/2,25,i.title,a,o)}static drawHorizontalSpine(t,e,n,i){t.fillStyle=i.coverColor,t.fillRect(0,0,e,n);const r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,"rgba(0, 0, 0, 0.4)"),r.addColorStop(.2,"rgba(0, 0, 0, 0.0)"),r.addColorStop(.8,"rgba(0, 0, 0, 0.0)"),r.addColorStop(1,"rgba(0, 0, 0, 0.4)"),t.fillStyle=r,t.fillRect(0,0,e,n);const a=i.accentColor||"#ffd700",o=a==="#1a1614";t.strokeStyle=o?"rgba(0, 0, 0, 0.5)":a,t.strokeRect(2.5,2.5,e-5,n-5);const l=this.determineEmblem(i);this.drawEmblem(t,16,n/2,l,a),this.drawEmblem(t,e-16,n/2,"cross",a),t.font='bold 9px "Cinzel", Georgia, serif',t.textAlign="center",t.textBaseline="middle";const c=i.title.length>20?i.title.slice(0,18)+"…":i.title;t.fillStyle="rgba(0, 0, 0, 0.7)",t.fillText(c.toUpperCase(),e/2+1,n/2+1),t.fillStyle=o?"rgba(0, 0, 0, 0.75)":a,t.fillText(c.toUpperCase(),e/2,n/2)}static drawCornerBrackets(t,e,n,i,r,a){t.fillStyle=a,t.fillRect(e,n,3,1),t.fillRect(e,n,1,3),t.fillRect(e+i-3,n,3,1),t.fillRect(e+i-1,n,1,3),t.fillRect(e,n+r-1,3,1),t.fillRect(e,n+r-3,1,3),t.fillRect(e+i-3,n+r-1,3,1),t.fillRect(e+i-1,n+r-3,1,3)}static drawSpineTitle(t,e,n,i,r,a){t.save(),t.textAlign="center",t.textBaseline="middle";const o=i.split(" "),l=[];let c="";for(const f of o)(c+" "+f).trim().length<=10?c=(c+" "+f).trim():(c&&l.push(c),c=f);c&&l.push(c);const d=l.slice(0,3),u=7,h=n-(d.length-1)*u/2;t.font='bold 7px "Cinzel", Georgia, serif',d.forEach((f,g)=>{const _=h+g*u;t.fillStyle="rgba(0, 0, 0, 0.75)",t.fillText(f.toUpperCase(),e+1,_+1),t.fillStyle=a?"rgba(0, 0, 0, 0.75)":r,t.fillText(f.toUpperCase(),e,_)}),t.restore()}static determineEmblem(t){switch(t.classification){case"Fiction":return"sword";case"Non-Fiction":return"cross";case"Academic Texts & Grammar":return"celtic";case"Professional Manuals":return"tree";case"Breakthroughs & Theories":return"compass";case"Dissertations":return"pillar";case"Mysticism & Magic":return"moon_stars";case"Tales & Mythology":return"lion";default:return"crest"}}static drawEmblem(t,e,n,i,r){switch(t.fillStyle=r,i){case"lion":t.fillRect(e-3,n-5,5,2),t.fillRect(e-2,n-3,5,5),t.fillRect(e-4,n-1,2,2),t.fillRect(e+2,n-2,2,3),t.fillRect(e-3,n+2,2,3),t.fillRect(e+1,n+2,2,3),t.fillRect(e+3,n-4,1,4);break;case"cross":case"celtic":t.fillRect(e-1,n-6,2,12),t.fillRect(e-4,n-3,8,2),t.fillRect(e-3,n-5,6,1),t.fillRect(e-3,n+5,6,1);break;case"moon_stars":t.fillRect(e-4,n-4,2,8),t.fillRect(e-2,n-5,3,1),t.fillRect(e-2,n+4,3,1),t.fillRect(e+2,n-1,2,2);break;case"sword":t.fillRect(e,n-6,1,12),t.fillRect(e-3,n+2,7,1),t.fillRect(e-1,n+5,3,1);break;case"pillar":t.fillRect(e-4,n-5,8,2),t.fillRect(e-2,n-3,4,7),t.fillRect(e-4,n+4,8,2);break;case"compass":t.fillRect(e,n-5,1,10),t.fillRect(e-5,n,10,1),t.fillRect(e-2,n-2,4,4);break;case"tree":default:t.fillRect(e,n-1,1,6),t.fillRect(e-3,n-4,6,3),t.fillRect(e-2,n-5,4,1);break}}}class om{scene;atlas;container;animatedLights=[];globeSphereMesh;dustParticles;raycastableBooks=[];width=14;length=40;ceilingHeight=13;unitBoxGeom;deskPositions=[{x:-2.3,z:4},{x:2.3,z:8},{x:-2.3,z:12},{x:2.3,z:18},{x:-2.3,z:24},{x:2.3,z:30}];cratePositions=[{x:-3.8,z:33.5},{x:3.8,z:33.5}];constructor(t,e){this.scene=t,this.atlas=e,this.container=new Pt,this.container.name="GrandCathedralLibrary",this.scene.add(this.container),this.unitBoxGeom=new et(1,1,1),this.buildCathedralArchitecture(),this.buildGothicRibbedVaultArches(),this.buildModularBookshelfWallsAndInstancedBooks(),this.buildRollingLadders(),this.buildUpperBalconiesAndStairs(),this.buildStudyDesksAndBenches(),this.buildCelestialGlobe(),this.buildGrandChandeliers(),this.buildWallCandleSconces(),this.buildHeraldicBannersAndPlaques(),this.buildFloorClutterAndPiles(),this.buildStainedGlassAndVolumetricLightRays(),this.buildFloatingDustParticles()}setVisible(t){this.container.visible=t}ensureVisible(t){t.frustumCulled=!1}buildCathedralArchitecture(){const t=new Ee(this.width,this.length),e=new D(t,this.atlas.materials.stoneTileFloor);e.rotation.x=-Math.PI/2,e.position.set(0,0,16),e.receiveShadow=!0,this.ensureVisible(e),this.container.add(e);const n=new Ee(3.4,this.length-2),i=new D(n,this.atlas.materials.carpetRed);i.rotation.x=-Math.PI/2,i.position.set(0,.02,16),i.receiveShadow=!0,this.ensureVisible(i),this.container.add(i);const r=new Ee(3.4,.25),a=new D(r,this.atlas.materials.brassMetal);a.rotation.x=-Math.PI/2,a.position.set(0,.025,35.1);const o=new D(r,this.atlas.materials.brassMetal);o.rotation.x=-Math.PI/2,o.position.set(0,.025,-3.1),this.container.add(a,o);const l=new Ee(this.width,this.length),c=new D(l,this.atlas.materials.stoneBrick);c.rotation.x=Math.PI/2,c.position.set(0,this.ceilingHeight,16),this.ensureVisible(c),this.container.add(c);const d=new et(this.width,this.ceilingHeight,1),u=new D(d,this.atlas.materials.stoneBrick);u.position.set(0,this.ceilingHeight/2,36),u.castShadow=!0,u.receiveShadow=!0,this.ensureVisible(u);const h=new D(d,this.atlas.materials.stoneBrick);h.position.set(0,this.ceilingHeight/2,-4),h.castShadow=!0,h.receiveShadow=!0,this.ensureVisible(h);const f=new et(this.width,1.2,.15),g=new D(f,this.atlas.materials.darkOak);g.position.set(0,.6,35.4);const _=new D(f,this.atlas.materials.darkOak);_.position.set(0,.6,-3.4),this.container.add(u,h,g,_);const m=[0,6,12,18,24,30],p=this.ceilingHeight,E=.52,b=new Yt(.8,.88,.7,8),v=new Yt(E,E,p-1.4,12),P=new Yt(E+.04,E+.04,.12,12),R=new et(1.5,.7,1.5);m.forEach(w=>{[-4.3,4.3].forEach(C=>{const y=new Pt;y.position.set(C,0,w);const x=new D(b,this.atlas.materials.carvedStonePillar);x.position.set(0,.35,0),x.receiveShadow=!0;const A=new D(v,this.atlas.materials.carvedStonePillar);A.position.set(0,(p-1.4)/2+.7,0),A.castShadow=!0,A.receiveShadow=!0;const G=new D(P,this.atlas.materials.iron);G.position.set(0,2.4,0);const z=new D(P,this.atlas.materials.iron);z.position.set(0,4.8,0);const H=new D(R,this.atlas.materials.stoneBrick);H.position.set(0,p-.35,0),y.add(x,A,G,z,H),this.ensureVisible(y),this.container.add(y)})})}buildGothicRibbedVaultArches(){[0,6,12,18,24,30].forEach(e=>{const n=new Pt;n.position.set(0,0,e);const i=8.6,r=4,a=14;for(let c=0;c<a;c++){const d=c/a,u=(c+1)/a,h=-i/2+d*i,f=-i/2+u*i,g=this.ceilingHeight-.7-Math.pow(Math.abs(h)/(i/2),1.6)*r,_=this.ceilingHeight-.7-Math.pow(Math.abs(f)/(i/2),1.6)*r,m=Math.hypot(f-h,_-g),p=Math.atan2(_-g,f-h),E=new et(m+.05,.45,.55),b=new D(E,this.atlas.materials.stoneBrick);b.position.set((h+f)/2,(g+_)/2,0),b.rotation.z=p,n.add(b)}const o=new D(new et(.85,.75,.75),this.atlas.materials.stoneBrick);o.position.set(0,this.ceilingHeight-.7,0);const l=new D(new et(.5,.5,.8),this.atlas.materials.brassMetal);l.position.set(0,this.ceilingHeight-.7,0),n.add(o,l),this.ensureVisible(n),this.container.add(n)})}buildModularBookshelfWallsAndInstancedBooks(){const t=[this.atlas.materials.plaqueHistoria,this.atlas.materials.plaquePhilosophia,this.atlas.materials.plaqueScientia,this.atlas.materials.plaqueTheologia,this.atlas.materials.plaqueArcanum,this.atlas.materials.plaqueMythologia],e=5.5,n=6,i=[.8,1.6,2.4,3.2,4],r=.6,a=[];[-1,1].forEach(o=>{const l=o*6.5;for(let c=0;c<n;c++){const d=-1.5+c*e,u=new et(.08,4.4,e-.1),h=new D(u,this.atlas.materials.darkOak);h.position.set(o*6.82,2.2,d+e/2),h.receiveShadow=!0,this.ensureVisible(h),this.container.add(h);const f=new et(.35,4.5,.35),g=new D(f,this.atlas.materials.darkOak);g.position.set(l,2.25,d),this.ensureVisible(g);const _=new D(f,this.atlas.materials.darkOak);_.position.set(l,2.25,d+e),this.ensureVisible(_),this.container.add(g,_);const m=new et(.45,.45,e),p=new D(m,this.atlas.materials.darkOak);p.position.set(l,4.35,d+e/2),this.ensureVisible(p),this.container.add(p);const E=t[c%t.length],b=new Ee(1.8,.45),v=new D(b,E);v.position.set(l-o*.24,4.35,d+e/2),v.rotation.y=o===-1?Math.PI/2:-Math.PI/2,this.ensureVisible(v),this.container.add(v),i.forEach((P,R)=>{const w=new et(r,.08,e-.15),C=new D(w,this.atlas.materials.darkOak);C.position.set(o*6.55,P,d+e/2),C.receiveShadow=!0,this.ensureVisible(C),this.container.add(C);const y=d+.22,x=d+e-.22;let A=y,G=0;for(;A<x;){const z=(o+2)*1e5+c*1e4+R*1e3+G*19,H=Ke.createPrng(z),X=x-A;if(X<.07)break;if(H()<.14&&X>=.38){const J=2+Math.floor(H()*2),V=.28+H()*.06,it=.38+H()*.05,nt=.08+H()*.02,ft=A+V/2;for(let St=0;St<J;St++){const Ft=z+St*37,j=Ke.generateBook(Ft),Z=P+.04+St*nt+nt/2,ht=new jt,Q=new U(o*6.55,Z,ft),bt=new De(0,(H()-.5)*.08,0),Rt=new U(it,nt,V),Et=new Qe().setFromEuler(bt);ht.compose(Q,Et,Rt),a.push({bookData:j,matrix:ht,isHorizontal:!0,side:o})}A+=V+.015}else{const J=.08+H()*.06,V=.52+H()*.2,it=.38+H()*.06,nt=A+J/2,ft=P+.04+V/2,St=Ke.generateBook(z),Ft=new jt,j=new U(o*6.55,ft,nt),Z=new De(H()<.16?(H()-.5)*.08:0,0,0),ht=new U(it,V,J),Q=new Qe().setFromEuler(Z);Ft.compose(j,Q,ht),a.push({bookData:St,matrix:Ft,isHorizontal:!1,side:o}),A+=J+.004}G++}})}}),this.createInstancedBookMeshes(a)}createInstancedBookMeshes(t){const e=new Map;for(const n of t){const i=`${n.side}_${n.isHorizontal?"H":"V"}_${n.bookData.coverColor}_${n.bookData.accentColor}`;if(!e.has(i)){const r=Oi.getBookMaterials(n.bookData,n.isHorizontal,n.side);e.set(i,{materials:r,instances:[]})}e.get(i).instances.push(n)}e.forEach(({materials:n,instances:i})=>{const r=i.length,a=new sl(this.unitBoxGeom,n,r),o=[];for(let l=0;l<r;l++)a.setMatrixAt(l,i[l].matrix),o.push(i[l].bookData);a.userData={isInstancedBooks:!0,books:o},a.instanceMatrix.needsUpdate=!0,a.receiveShadow=!0,a.frustumCulled=!1,this.raycastableBooks.push(a),this.container.add(a)})}buildRollingLadders(){[-1,1].forEach(e=>{const n=new Yt(.025,.025,33,8),i=new D(n,this.atlas.materials.brassMetal);i.position.set(e*6.22,4.35,15),i.rotation.x=Math.PI/2,this.ensureVisible(i),this.container.add(i)}),[{side:-1,z:1.25,height:4.45},{side:1,z:22.5,height:4.45}].forEach(({side:e,z:n,height:i})=>{const r=new Pt,a=.65,o=.16,l=new et(.06,i,.1),c=new D(l,this.atlas.materials.darkOak);c.position.set(0,i/2,-a/2);const d=new D(l,this.atlas.materials.darkOak);d.position.set(0,i/2,a/2),r.add(c,d);const u=11,h=new Yt(.025,.025,a,6);for(let b=1;b<u;b++){const v=b/u*(i-.4),P=new D(h,this.atlas.materials.woodPlanks);P.position.set(0,v,0),P.rotation.x=Math.PI/2,r.add(P)}const f=new Yt(.06,.06,.04,8),g=new D(f,this.atlas.materials.brassMetal);g.position.set(0,.04,-a/2),g.rotation.z=Math.PI/2;const _=new D(f,this.atlas.materials.brassMetal);_.position.set(0,.04,a/2),_.rotation.z=Math.PI/2,r.add(g,_);const m=new He(.05,.018,6,12,Math.PI),p=new D(m,this.atlas.materials.brassMetal);p.position.set(-e*.04,i-.1,-a/2);const E=new D(m,this.atlas.materials.brassMetal);E.position.set(-e*.04,i-.1,a/2),r.add(p,E),r.position.set(e*5.85,0,n),r.rotation.z=e*o,this.ensureVisible(r),this.container.add(r)})}buildUpperBalconiesAndStairs(){const i=new et(2,.15,30.5),r=new D(i,this.atlas.materials.woodPlanks);r.position.set(-5.7,4.5-.075,18.75),r.receiveShadow=!0,this.ensureVisible(r);const a=new D(i,this.atlas.materials.woodPlanks);a.position.set(5.7,4.5-.075,18.75),a.receiveShadow=!0,this.ensureVisible(a);const o=new et(.1,.85,30.5),l=new D(o,this.atlas.materials.darkOak);l.position.set(-4.7,4.5+.425,18.75),this.ensureVisible(l);const c=new D(o,this.atlas.materials.darkOak);c.position.set(4.7,4.5+.425,18.75),this.ensureVisible(c);const d=new Yt(.035,.035,30.5,8),u=new D(d,this.atlas.materials.brassMetal);u.position.set(-4.7,4.5+.88,18.75),u.rotation.x=Math.PI/2;const h=new D(d,this.atlas.materials.brassMetal);h.position.set(4.7,4.5+.88,18.75),h.rotation.x=Math.PI/2,[6,12,18,24,30].forEach(m=>{const p=new et(.6,.55,.35),E=new D(p,this.atlas.materials.darkOak);E.position.set(-4.8,4.5-.45,m),this.ensureVisible(E);const b=new D(p,this.atlas.materials.darkOak);b.position.set(4.8,4.5-.45,m),this.ensureVisible(b),this.container.add(E,b)}),this.container.add(r,a,l,c,u,h);const g=[5.35,6.25,7.15,8.05],_=[];[-1,1].forEach(m=>{const p=new et(.55,.2,30.5),E=new D(p,this.atlas.materials.darkOak);E.position.set(m*6.58,4.5+.1,18.75),this.container.add(E);const b=new et(.06,4.3,30.5),v=new D(b,this.atlas.materials.darkOak);v.position.set(m*6.85,4.5+2.15,18.75),v.receiveShadow=!0,this.ensureVisible(v),this.container.add(v);for(let w=3.5;w<=34;w+=5.5){const C=new et(.4,4.3,.35),y=new D(C,this.atlas.materials.darkOak);y.position.set(m*6.58,4.5+2.15,w),this.ensureVisible(y),this.container.add(y)}const P=new et(.5,.4,30.5),R=new D(P,this.atlas.materials.darkOak);R.position.set(m*6.58,4.5+4.25,18.75),this.ensureVisible(R),this.container.add(R),g.forEach((w,C)=>{const y=new et(.5,.08,30.5),x=new D(y,this.atlas.materials.darkOak);x.position.set(m*6.58,w,18.75),x.receiveShadow=!0,this.ensureVisible(x),this.container.add(x);let A=3.8;const G=33.6;let z=0;for(;A<G;){const H=(m+5)*2e5+C*1e4+z*23,X=Ke.createPrng(H),Y=G-A;if(Y<.07)break;if(X()<.12&&Y>=.38){const V=2+Math.floor(X()*2),it=.26+X()*.05,nt=.32+X()*.04,ft=.07+X()*.02,St=A+it/2;for(let Ft=0;Ft<V;Ft++){const j=H+Ft*41,Z=Ke.generateBook(j),ht=w+.04+Ft*ft+ft/2,Q=new jt,bt=new U(m*6.58,ht,St),Rt=new De(0,(X()-.5)*.08,0),Et=new U(nt,ft,it);Q.compose(bt,new Qe().setFromEuler(Rt),Et),_.push({bookData:Z,matrix:Q,isHorizontal:!0,side:m})}A+=it+.015}else{const V=.08+X()*.05,it=.44+X()*.18,nt=.32+X()*.04,ft=A+V/2,St=w+.04+it/2,Ft=Ke.generateBook(H),j=new jt,Z=new U(m*6.58,St,ft),ht=new De(X()<.16?(X()-.5)*.08:0,0,0),Q=new U(nt,it,V);j.compose(Z,new Qe().setFromEuler(ht),Q),_.push({bookData:Ft,matrix:j,isHorizontal:!1,side:m}),A+=V+.004}z++}})}),this.createInstancedBookMeshes(_),this.buildGrandIntegratedStaircase(-5.4,-2.5,3.5,4.5,-1),this.buildGrandIntegratedStaircase(5.4,-2.5,3.5,4.5,1)}buildGrandIntegratedStaircase(t,e,n,i,r){const a=new Pt,o=18,l=n-e,c=l/o,d=i/o,u=1.35;for(let v=0;v<o;v++){const P=e+(v+.5)*c,R=0,w=(v+1)*d,C=new et(u,w-R,c),y=new D(C,this.atlas.materials.stoneBrick);y.position.set(t,w/2,P),y.receiveShadow=!0,a.add(y);const x=new et(u+.06,.06,c+.04),A=new D(x,this.atlas.materials.darkOak);A.position.set(t,w-.03,P),A.receiveShadow=!0,a.add(A)}const h=r*4.7,f=Math.hypot(l,i),g=Math.atan2(i,l),_=new Yt(.035,.035,f+.2,8),m=new D(_,this.atlas.materials.brassMetal);m.position.set(h,i/2+.88,(e+n)/2),m.rotation.x=g,a.add(m);for(let v=0;v<=o;v+=2){const P=e+v*c,R=v*d,w=new Yt(.025,.025,.85,6),C=new D(w,this.atlas.materials.darkOak);C.position.set(h,R+.425,P),a.add(C)}const p=new et(.2,1.15,.2),E=new D(p,this.atlas.materials.darkOak);E.position.set(h,.575,e);const b=new D(new Vn(.1,8,8),this.atlas.materials.brassMetal);b.position.set(h,1.2,e),a.add(E,b),this.ensureVisible(a),this.container.add(a)}buildStudyDesksAndBenches(){[{x:-2.3,z:4,seed:101,title:"Tome of Astral Pyromancy"},{x:2.3,z:8,seed:202,title:"The Chronicles of Sunken Alderia"},{x:-2.3,z:12,seed:303,title:"Treatise on Living Stone & Mortar"},{x:2.3,z:18,seed:404,title:"The Sacred Rites of the Golden Lion"},{x:-2.3,z:24,seed:505,title:"Secrets of the Clockwork Heavens"},{x:2.3,z:30,seed:606,title:"The Lost Gospel of Veritas"}].forEach((e,n)=>{const i=new Pt;i.position.set(e.x,0,e.z);const r=new D(new et(1.8,.12,1),this.atlas.materials.darkOak);r.position.set(0,.85,0),r.receiveShadow=!0,i.add(r);const a=new et(.12,.85,.12),o=new et(.13,.06,.13);[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([Y,J])=>{const V=new D(a,this.atlas.materials.darkOak);V.position.set(Y,.425,J);const it=new D(o,this.atlas.materials.brassMetal);it.position.set(Y,.03,J),i.add(V,it)});const c=new D(new et(1.6,.08,.45),this.atlas.materials.darkOak);c.position.set(0,.5,-.75);const d=new D(new et(.1,.5,.35),this.atlas.materials.darkOak);d.position.set(-.6,.25,-.75);const u=new D(new et(.1,.5,.35),this.atlas.materials.darkOak);u.position.set(.6,.25,-.75),i.add(c,d,u);const h=this.buildDeskCandelabra();h.position.set(-.65,.91,.25),i.add(h);const f=new Je(16765542,3.8,6.5,1.5);f.position.set(-.65,1.35,.25),i.add(f),this.animatedLights.push({light:f,baseIntensity:3.8,flickerSpeed:4.5+n*.7,flickerPhase:n*1.2});const g=new Pt;g.position.set(-.45,.91,-.28);const _=new D(new Yt(.04,.05,.07,8),new Lt({color:1579552,roughness:.2,metalness:.8}));_.position.set(0,.035,0);const m=new D(new Yt(.005,.015,.26,6),new Lt({color:16117468,roughness:.6}));m.position.set(.02,.12,0),m.rotation.z=-.35,g.add(_,m),i.add(g);const p=new D(new Yt(.03,.03,.32,8),this.atlas.materials.mapScroll);p.position.set(.45,.94,.3),p.rotation.z=Math.PI/2,p.rotation.y=.4,i.add(p);const E=new Pt;E.position.set(-.25,.92,-.25),E.rotation.y=.6;const b=new D(new He(.06,.01,8,16),this.atlas.materials.brassMetal);b.rotation.x=Math.PI/2;const v=new D(new Yt(.055,.055,.005,12),new Lt({color:15464447,transparent:!0,opacity:.4,roughness:.1})),P=new D(new Yt(.012,.012,.14,6),this.atlas.materials.darkOak);P.position.set(0,0,.12),P.rotation.x=Math.PI/2,E.add(b,v,P),i.add(E);const R=Ke.generateBook(e.seed,e.title),w=new et(.55,.06,.38),C=Oi.getBookMaterials(R,!0,1),y=new D(w,C);y.position.set(0,.94,0),y.rotation.y=(Math.random()-.5)*.2,y.userData={isBook:!0,bookData:R,originalColor:R.coverColor},this.raycastableBooks.push(y),i.add(y);const x=Ke.generateBook(e.seed+1e3),A=Oi.getBookMaterials(x,!0,1),G=new D(new et(.28,.06,.38),A);G.position.set(.6,.94,-.2),G.userData={isBook:!0,bookData:x,originalColor:x.coverColor},this.raycastableBooks.push(G);const z=Ke.generateBook(e.seed+2e3),H=Oi.getBookMaterials(z,!0,1),X=new D(new et(.26,.05,.35),H);X.position.set(.6,.995,-.2),X.rotation.y=.18,X.userData={isBook:!0,bookData:z,originalColor:z.coverColor},this.raycastableBooks.push(X),i.add(G,X),this.ensureVisible(i),this.container.add(i)})}buildDeskCandelabra(){const t=new Pt,e=new D(new Yt(.08,.1,.04,8),this.atlas.materials.brassMetal),n=new D(new Yt(.02,.025,.22,8),this.atlas.materials.brassMetal);n.position.set(0,.11,0);const i=new He(.1,.015,6,12,Math.PI),r=new D(i,this.atlas.materials.brassMetal);r.position.set(0,.18,0),t.add(e,n,r);const a=[{x:0,y:.22},{x:-.1,y:.18},{x:.1,y:.18}],o=new Yt(.035,.02,.02,8),l=new Yt(.022,.022,.18,6),c=new pi(.022,.06,6),d=new tn({color:16765542}),u=new Lt({color:16775910,roughness:.4});return a.forEach(h=>{const f=new D(o,this.atlas.materials.brassMetal);f.position.set(h.x,h.y+.01,0);const g=new D(l,u);g.position.set(h.x,h.y+.1,0);const _=new D(c,d);_.position.set(h.x,h.y+.21,0),t.add(f,g,_)}),t}buildCelestialGlobe(){const t=new Pt;t.position.set(0,0,14);const e=new Yt(1,1.25,.6,8),n=new D(e,this.atlas.materials.darkOak);n.position.set(0,.3,0),n.receiveShadow=!0;const i=new D(new Yt(1.02,1.02,.08,8),this.atlas.materials.brassMetal);i.position.set(0,.56,0),t.add(n,i),[0,Math.PI/2,Math.PI,Math.PI*3/2].forEach(h=>{const f=new D(new et(.12,.8,.12),this.atlas.materials.brassMetal);f.position.set(Math.cos(h)*.7,.95,Math.sin(h)*.7),t.add(f)});const a=new D(new He(1.05,.07,8,24),this.atlas.materials.brassMetal);a.position.set(0,1.55,0),a.rotation.y=Math.PI/4;const o=new D(new He(1.05,.06,8,24),this.atlas.materials.brassMetal);o.position.set(0,1.55,0),o.rotation.x=Math.PI/2;const l=new D(new He(1.08,.08,8,24),this.atlas.materials.brassMetal);l.position.set(0,1.55,0),l.rotation.set(.4,.4,0);const c=new Vn(.84,16,16);this.globeSphereMesh=new D(c,this.atlas.materials.globeTexture),this.globeSphereMesh.position.set(0,1.55,0);const d=new Je(16771757,6.5,12,1.4);d.position.set(0,1.55,0),t.add(a,o,l,this.globeSphereMesh,d),this.animatedLights.push({light:d,baseIntensity:6.5,flickerSpeed:1.8,flickerPhase:0});const u=Ke.generateBook(99999,"The Celestial Atlas of the Spheres");this.globeSphereMesh.userData={isBook:!0,bookData:u,originalColor:"#f7d583"},this.raycastableBooks.push(this.globeSphereMesh),this.ensureVisible(t),this.container.add(t)}buildGrandChandeliers(){[4,16,28].forEach((e,n)=>{const i=new Pt;i.position.set(0,6.2,e);const r=new Yt(.04,.04,6.8,6),a=new D(r,this.atlas.materials.iron);a.position.set(0,3.4,0),i.add(a);const o=new D(new Yt(.06,.06,1.4,8),this.atlas.materials.iron);o.position.set(0,.2,0);const l=new D(new Vn(.18,8,8),this.atlas.materials.brassMetal);l.position.set(0,-.5,0),i.add(o,l);const c=new D(new He(1.8,.09,8,24),this.atlas.materials.iron);c.rotation.x=Math.PI/2,i.add(c);const d=new D(new He(1,.07,8,16),this.atlas.materials.iron);d.rotation.x=Math.PI/2,d.position.set(0,.45,0),i.add(d);const u=(f,g,_)=>{for(let m=0;m<_;m++){const p=m/_*Math.PI*2,E=Math.cos(p)*f,b=Math.sin(p)*f,v=new D(new Yt(.05,.03,.03,8),this.atlas.materials.brassMetal);v.position.set(E,g+.015,b);const P=new D(new Yt(.04,.04,.26,6),new Lt({color:16775910,roughness:.4}));P.position.set(E,g+.14,b);const R=new D(new pi(.03,.08,6),new tn({color:16765542}));R.position.set(E,g+.3,b),i.add(v,P,R)}};u(1.8,0,10),u(1,.45,6);const h=new Je(16760405,12,16,1.3);h.position.set(0,0,0),i.add(h),this.animatedLights.push({light:h,baseIntensity:12,flickerSpeed:3.2+n*.8,flickerPhase:n*1.4}),this.ensureVisible(i),this.container.add(i)})}buildWallCandleSconces(){[3,9,15,21,27,33].forEach((e,n)=>{const i=new Je(16758869,3.6,8.5,1.5);i.position.set(-4.1,2.5,e),this.container.add(i);const r=new Je(16758869,3.6,8.5,1.5);r.position.set(4.1,2.5,e),this.container.add(r),this.animatedLights.push({light:i,baseIntensity:3.6,flickerSpeed:4+n*.5,flickerPhase:n},{light:r,baseIntensity:3.6,flickerSpeed:4.2+n*.5,flickerPhase:n+.5}),[-1,1].forEach(a=>{const o=a*4.3,l=2.4,c=new Pt;c.position.set(o-a*.45,l,e);const d=new D(new et(.06,.35,.18),this.atlas.materials.iron),u=new D(new et(.24,.05,.05),this.atlas.materials.iron);u.position.set(-a*.12,.05,0),c.add(d,u),[-.08,.08].forEach(h=>{const f=new D(new Yt(.04,.02,.02,6),this.atlas.materials.brassMetal);f.position.set(-a*.22,.07,h);const g=new D(new Yt(.03,.03,.22,6),new Lt({color:16775910,roughness:.4}));g.position.set(-a*.22,.18,h);const _=new D(new pi(.025,.06,6),new tn({color:16765542}));_.position.set(-a*.22,.31,h),c.add(f,g,_)}),this.ensureVisible(c),this.container.add(c)})})}buildHeraldicBannersAndPlaques(){const t=[5,11,17,23,29],e=new Ee(1.2,2.6);t.forEach((n,i)=>{const r=i%2===0?this.atlas.materials.heraldicLionBanner:this.atlas.materials.heraldicCrossBanner,a=new Yt(.025,.025,1.4,8),o=new Vn(.045,6,6);[-1,1].forEach(l=>{const c=new Pt;c.position.set(l*4.34,3.4,n),c.rotation.y=l===-1?Math.PI/2:-Math.PI/2;const d=new D(e,r);d.position.set(0,-.6,.02);const u=new D(a,this.atlas.materials.brassMetal);u.rotation.z=Math.PI/2,u.position.set(0,.7,.04);const h=new D(o,this.atlas.materials.brassMetal);h.position.set(-.7,.7,.04);const f=new D(o,this.atlas.materials.brassMetal);f.position.set(.7,.7,.04),c.add(d,u,h,f),this.ensureVisible(c),this.container.add(c)})})}buildFloorClutterAndPiles(){[{x:-3.8,z:6.8,seed:801},{x:3.8,z:12.8,seed:802},{x:-3.8,z:24.8,seed:803},{x:3.8,z:30.8,seed:804}].forEach(e=>{const n=new Pt;n.position.set(e.x,0,e.z);const i=3;for(let r=0;r<i;r++){const a=Ke.generateBook(e.seed+r*53),o=Oi.getBookMaterials(a,!0,1),l=new D(new et(.38,.07,.52),o);l.position.set(r%2*.04,.035+r*.07,r%3*.02),l.rotation.y=r*.18,l.userData={isBook:!0,bookData:a,originalColor:a.coverColor},this.raycastableBooks.push(l),n.add(l)}this.ensureVisible(n),this.container.add(n)}),this.cratePositions.forEach(e=>{const n=new Pt;n.position.set(e.x,0,e.z);const i=new D(new et(.85,.75,.85),this.atlas.materials.woodPlanks);i.position.set(0,.375,0),i.receiveShadow=!0;const r=new et(.12,.12,.12);[[-.42,.74,-.42],[.42,.74,-.42],[-.42,.74,.42],[.42,.74,.42]].forEach(([l,c,d])=>{const u=new D(r,this.atlas.materials.brassMetal);u.position.set(l,c,d),n.add(u)});const o=new D(new Yt(.04,.04,.55,8),this.atlas.materials.mapScroll);o.position.set(.1,.79,0),o.rotation.z=Math.PI/2,o.rotation.y=.3,n.add(i,o),this.ensureVisible(n),this.container.add(n)})}buildStainedGlassAndVolumetricLightRays(){const t=new Ee(5.2,8.5),e=new D(t,this.atlas.materials.stainedGlassGothic);e.position.set(0,7.5,35.4),e.rotation.y=Math.PI,this.ensureVisible(e),this.container.add(e);const n=new tn({color:16772822,transparent:!0,opacity:.14,side:Wt,depthWrite:!1,blending:zi}),i=new Ee(4.5,24),r=new D(i,n);r.position.set(0,6,22),r.rotation.set(-.72,0,0),this.ensureVisible(r);const a=new D(i,n);a.position.set(-2.8,6,22),a.rotation.set(-.72,-.15,-.1),this.ensureVisible(a);const o=new D(i,n);o.position.set(2.8,6,22),o.rotation.set(-.72,.15,.1),this.ensureVisible(o),this.container.add(r,a,o)}buildFloatingDustParticles(){const e=new Float32Array(600);for(let r=0;r<200;r++)e[r*3+0]=(Math.random()-.5)*12,e[r*3+1]=.5+Math.random()*10.5,e[r*3+2]=(Math.random()-.5)*36+16;const n=new we;n.setAttribute("position",new We(e,3));const i=new rl({color:16771256,size:.035,transparent:!0,opacity:.5,blending:zi,depthWrite:!1});this.dustParticles=new Qc(n,i),this.container.add(this.dustParticles)}getElevation(t,e,n=0){const i=t>=-6.1&&t<=-4.6,r=t>=4.6&&t<=6.1;if((i||r)&&e>=-2.5&&e<=3.5){const a=(e- -2.5)/6;return Math.max(0,Math.min(4.5,a*4.5))}return n>=2.5&&e>=3.5&&e<=34.5&&(i||r)?4.5:0}isBlocked(t,e,n=0){if(t<=-6.1||t>=6.1||e<=-3.2||e>=34.8)return!0;if(n>=2.5)return e>=3.5&&e<=34.5&&t>-4.6&&t<4.6||t<-6.1||t>6.1;const i=[0,6,12,18,24,30];for(const o of i)if(Math.abs(e-o)<.65&&(Math.abs(t- -4.3)<.65||Math.abs(t-4.3)<.65))return!0;const r=t-0,a=e-14;if(r*r+a*a<1.15*1.15)return!0;for(const o of this.deskPositions)if(Math.abs(t-o.x)<.95&&Math.abs(e-o.z)<.65)return!0;for(const o of this.cratePositions)if(Math.abs(t-o.x)<.55&&Math.abs(e-o.z)<.55)return!0;return(t<-6.1||t>6.1)&&e>=-1.5&&e<=34}update(t){if(this.globeSphereMesh&&(this.globeSphereMesh.rotation.y=t*.25),this.animatedLights.forEach(e=>{const n=Math.sin(t*e.flickerSpeed+e.flickerPhase)*.35+Math.cos(t*9+e.flickerPhase)*.15;e.light.intensity=Math.max(.8,e.baseIntensity+n)}),this.dustParticles){const e=this.dustParticles.geometry.attributes.position,n=e.count;for(let i=0;i<n;i++){let r=e.getY(i)-.002;r<.5&&(r=11),e.setY(i,r);const a=e.getX(i)+Math.sin(t*.4+i)*.0015;e.setX(i,a)}e.needsUpdate=!0}}}class lm{group;bodyGroup;fpsViewmodelGroup;camera;flashlightSpot;flashlightTarget;flashlightForwardLight;flashlightBulbLight;cameraLanternLight;get fpsLanternLight(){return this.cameraLanternLight}fpsFlashlight;fpsLantern;fpsSword;fpsShield;leftLegPivot;rightLegPivot;leftArmPivot;rightArmPivot;torsoMesh;leftPauldron;rightPauldron;headGroup;tppFlashlight;tppLantern;tppLanternLight;tppSword;tppShield;isFirstPerson=!1;activeItemId=null;baseLanternIntensity=22;walkTime=0;constructor(t,e){this.camera=e,this.group=new Pt,this.group.name="PlayerCharacter",this.flashlightSpot=new sh(16777215,48,160,Math.PI/3.2,.25,.85),this.flashlightSpot.position.set(0,0,0),this.flashlightSpot.castShadow=!0,this.flashlightSpot.shadow.bias=-.001,this.flashlightSpot.shadow.mapSize.width=1024,this.flashlightSpot.shadow.mapSize.height=1024,this.flashlightTarget=new de,this.flashlightTarget.name="FlashlightTarget",this.flashlightTarget.position.set(0,0,-50),this.flashlightSpot.target=this.flashlightTarget,this.flashlightForwardLight=new Je(16777215,6,45,1),this.flashlightForwardLight.position.set(0,0,-6),this.flashlightBulbLight=new Je(16777215,4.5,16,1.1),this.flashlightBulbLight.position.set(.24,-.2,-.42),this.cameraLanternLight=new Je(16758852,this.baseLanternIntensity,34,1.2),this.cameraLanternLight.position.set(.24,-.18,-.42),this.cameraLanternLight.castShadow=!1,this.cameraLanternLight.visible=!1,this.fpsViewmodelGroup=new Pt,this.fpsViewmodelGroup.name="FPS_Viewmodel",this.fpsFlashlight=new Pt,this.fpsFlashlight.position.set(.24,-.2,-.42),this.fpsFlashlight.rotation.set(.04,-.04,0);const n=new D(new et(.08,.08,.28),t.materials.iron),i=new D(new et(.12,.12,.08),t.materials.iron);i.position.set(0,0,-.18);const r=new D(new et(.1,.1,.02),new tn({color:16777215}));r.position.set(0,0,-.22),this.fpsFlashlight.add(n,i,r),this.fpsViewmodelGroup.add(this.fpsFlashlight),this.fpsLantern=this.buildOrnateLantern(t,!0),this.fpsLantern.position.set(.26,-.24,-.46),this.fpsLantern.rotation.set(.06,-.08,.02),this.fpsViewmodelGroup.add(this.fpsLantern),this.fpsSword=new Pt,this.fpsSword.position.set(.26,-.24,-.42),this.fpsSword.rotation.set(-.45,.2,-.1);const a=new D(new et(.06,.75,.03),t.materials.iron);a.position.set(0,.38,0);const o=new D(new et(.22,.04,.06),t.materials.iron),l=new D(new et(.05,.18,.05),t.materials.woodBeam);l.position.set(0,-.1,0),this.fpsSword.add(a,o,l),this.fpsViewmodelGroup.add(this.fpsSword),this.fpsShield=new Pt,this.fpsShield.position.set(-.28,-.22,-.42),this.fpsShield.rotation.set(.1,.35,-.1);const c=new D(new et(.48,.6,.05),t.materials.woodPlanks),d=new D(new et(.15,.15,.08),t.materials.iron);d.position.set(0,0,.03),this.fpsShield.add(c,d),this.fpsViewmodelGroup.add(this.fpsShield),this.camera&&(this.camera.add(this.fpsViewmodelGroup),this.camera.add(this.flashlightSpot),this.camera.add(this.flashlightTarget),this.camera.add(this.flashlightForwardLight),this.camera.add(this.flashlightBulbLight),this.camera.add(this.cameraLanternLight)),this.bodyGroup=new Pt,this.bodyGroup.name="TPP_PlayerBody",this.group.add(this.bodyGroup);const u=t.materials.iron,h=new Lt({color:2237998,roughness:.8,side:Wt}),f=new Lt({color:14262374,roughness:.6,side:Wt}),g=new Lt({color:1775650,roughness:.9,side:Wt});this.leftLegPivot=new Pt,this.leftLegPivot.position.set(-.16,.7,0);const _=new D(new et(.2,.7,.22),h);_.position.set(0,-.35,0),_.castShadow=!0,_.receiveShadow=!0,this.leftLegPivot.add(_),this.bodyGroup.add(this.leftLegPivot),this.rightLegPivot=new Pt,this.rightLegPivot.position.set(.16,.7,0);const m=new D(new et(.2,.7,.22),h);m.position.set(0,-.35,0),m.castShadow=!0,m.receiveShadow=!0,this.rightLegPivot.add(m),this.bodyGroup.add(this.rightLegPivot),this.torsoMesh=new D(new et(.52,.7,.36),u),this.torsoMesh.position.set(0,1.05,0),this.torsoMesh.castShadow=!0,this.torsoMesh.receiveShadow=!0,this.bodyGroup.add(this.torsoMesh);const p=new et(.22,.2,.4);this.leftPauldron=new D(p,u),this.leftPauldron.position.set(-.35,1.35,0),this.leftPauldron.castShadow=!0,this.rightPauldron=new D(p,u),this.rightPauldron.position.set(.35,1.35,0),this.rightPauldron.castShadow=!0,this.bodyGroup.add(this.leftPauldron,this.rightPauldron);const E=new et(.16,.58,.18);this.leftArmPivot=new Pt,this.leftArmPivot.position.set(-.36,1.35,0);const b=new D(E,u);b.position.set(0,-.26,0),b.castShadow=!0,this.leftArmPivot.add(b),this.bodyGroup.add(this.leftArmPivot),this.rightArmPivot=new Pt,this.rightArmPivot.position.set(.36,1.35,0);const v=new D(E,u);v.position.set(0,-.26,0),v.castShadow=!0,this.rightArmPivot.add(v),this.bodyGroup.add(this.rightArmPivot),this.headGroup=new Pt,this.headGroup.position.set(0,1.55,0);const P=new D(new et(.38,.38,.38),f);P.castShadow=!0;const R=new D(new et(.42,.24,.42),g);R.position.set(0,.14,-.02),R.castShadow=!0,this.headGroup.add(P,R),this.bodyGroup.add(this.headGroup),this.tppFlashlight=new Pt,this.tppFlashlight.position.set(.42,.85,.25);const w=new D(new et(.12,.12,.36),t.materials.iron);w.castShadow=!0;const C=new D(new et(.16,.16,.1),t.materials.iron);C.position.set(0,0,-.22),C.castShadow=!0;const y=new D(new et(.13,.13,.02),new tn({color:16777215}));y.position.set(0,0,-.27),this.tppFlashlight.add(w,C,y),this.bodyGroup.add(this.tppFlashlight),this.tppLantern=this.buildOrnateLantern(t,!1),this.tppLantern.position.set(.44,.85,.3),this.tppLanternLight=new Je(16758852,18,34,1.2),this.tppLanternLight.position.set(0,.1,0),this.tppLanternLight.castShadow=!1,this.tppLanternLight.visible=!1,this.tppLantern.add(this.tppLanternLight),this.bodyGroup.add(this.tppLantern),this.tppSword=new Pt,this.tppSword.position.set(.42,.85,.35),this.tppSword.rotation.set(-.3,0,.2);const x=new D(new et(.08,.85,.04),t.materials.iron);x.position.set(0,.42,0),x.castShadow=!0;const A=new D(new et(.26,.05,.08),t.materials.iron),G=new D(new et(.06,.2,.06),t.materials.woodBeam);G.position.set(0,-.12,0),this.tppSword.add(x,A,G),this.bodyGroup.add(this.tppSword),this.tppShield=new Pt,this.tppShield.position.set(-.46,.95,.15),this.tppShield.rotation.set(0,-.3,0);const z=new D(new et(.55,.7,.06),t.materials.woodPlanks);z.castShadow=!0;const H=new D(new et(.18,.18,.1),t.materials.iron);H.position.set(0,0,.04),this.tppShield.add(z,H),this.bodyGroup.add(this.tppShield),this.setActiveItem(null),this.setFirstPerson(!0)}buildOrnateLantern(t,e){const n=new Pt,i=e?1:1.15,r=t.materials.brassMetal,a=t.materials.iron,o=new Lt({color:16775910,transparent:!0,opacity:.45,roughness:.1,metalness:.1,depthWrite:!1}),l=new Lt({color:16775387,roughness:.45}),c=new tn({color:16759586}),d=new tn({color:16768358,transparent:!0,opacity:.65,blending:zi,depthWrite:!1}),u=new D(new et(.14*i,.03*i,.14*i),r);u.position.set(0,.015*i,0),n.add(u),[[-.05,-.05],[.05,-.05],[-.05,.05],[.05,.05]].forEach(([y,x])=>{const A=new D(new et(.025*i,.015*i,.025*i),a);A.position.set(y*i,.007*i,x*i),n.add(A)});const f=new et(.015*i,.16*i,.015*i);[[-.055,-.055],[.055,-.055],[-.055,.055],[.055,.055]].forEach(([y,x])=>{const A=new D(f,r);A.position.set(y*i,.11*i,x*i),n.add(A)});const _=new D(new et(.11*i,.15*i,.11*i),o);_.position.set(0,.11*i,0),n.add(_);const m=new D(new Yt(.02*i,.02*i,.05*i,6),l);m.position.set(0,.055*i,0);const p=new D(new Yt(.003*i,.003*i,.015*i,4),a);p.position.set(0,.085*i,0);const E=new D(new pi(.02*i,.055*i,6),c);E.position.set(0,.11*i,0);const b=new D(new Vn(.04*i,8,8),d);b.position.set(0,.11*i,0),n.add(m,p,E,b);const v=new D(new et(.145*i,.025*i,.145*i),r);v.position.set(0,.195*i,0);const P=new D(new et(.1*i,.035*i,.1*i),r);P.position.set(0,.22*i,0);const R=new D(new Yt(.025*i,.035*i,.035*i,8),r);R.position.set(0,.25*i,0);const w=new D(new He(.028*i,.006*i,6,12),r);w.position.set(0,.285*i,0);const C=new D(new He(.065*i,.005*i,6,14,Math.PI),a);return C.position.set(0,.2*i,0),C.rotation.z=Math.PI/2,n.add(v,P,R,w,C),n}attachToCamera(t){this.camera=t,this.fpsViewmodelGroup.parent!==t&&(t.add(this.fpsViewmodelGroup),t.add(this.flashlightSpot),t.add(this.flashlightTarget),t.add(this.flashlightForwardLight),t.add(this.flashlightBulbLight),t.add(this.cameraLanternLight))}setActiveItem(t){this.activeItemId=t;const e=t==="flashlight",n=t==="lantern",i=t==="sword",r=t==="shield";this.fpsFlashlight.visible=e,this.fpsLantern.visible=n,this.fpsSword.visible=i,this.fpsShield.visible=r||i,this.tppFlashlight.visible=e,this.tppLantern.visible=n,this.tppSword.visible=i,this.tppShield.visible=r||i,this.flashlightSpot.visible=e,this.flashlightForwardLight.visible=e,this.flashlightBulbLight.visible=e,this.cameraLanternLight.visible=n&&this.isFirstPerson,this.tppLanternLight.visible=n&&!this.isFirstPerson}setFirstPerson(t){this.isFirstPerson=t,this.fpsViewmodelGroup.visible=t,this.bodyGroup.visible=!t,this.setActiveItem(this.activeItemId)}updateLightAim(t,e){}updateAnimation(t,e,n){const i=Number.isFinite(e)&&e>0?Math.min(e,.1):.016,r=Number.isFinite(n)&&n>0?Math.min(n,3):1;if(this.walkTime+=i,t){const a=this.walkTime*r*10,o=Math.sin(a)*.65;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-o*.7,this.rightArmPivot.rotation.x=o*.7,this.bodyGroup.position.y=Math.abs(Math.sin(a*2))*.05;const l=-Math.abs(Math.cos(a))*.012,c=Math.sin(a)*.012;this.fpsViewmodelGroup.position.set(c,l,0),this.tppFlashlight.rotation.z=Math.sin(a)*.15,this.tppFlashlight.position.y=.85+Math.cos(a)*.03,this.tppLantern.rotation.z=Math.sin(a)*.2,this.tppLantern.position.y=.85+Math.cos(a)*.03}else this.leftLegPivot.rotation.x*=.82,this.rightLegPivot.rotation.x*=.82,this.leftArmPivot.rotation.x*=.82,this.rightArmPivot.rotation.x*=.82,this.bodyGroup.position.y*=.82,this.fpsViewmodelGroup.position.lerp(new U(0,0,0),10*i),this.tppFlashlight.rotation.z*=.82,this.tppFlashlight.position.y=.85,this.tppLantern.rotation.z*=.82,this.tppLantern.position.y=.85;if(this.activeItemId==="lantern"){const a=Math.sin(this.walkTime*7.5)*1.5+Math.cos(this.walkTime*13)*.8,o=Math.max(12,this.baseLanternIntensity+a);this.isFirstPerson?this.cameraLanternLight.intensity=o:this.tppLanternLight.intensity=o}}}class cm{model;position=new U(0,0,0);velocity=new U(0,0,0);moveSpeed=5.5;sprintMultiplier=1.5;acceleration=18;deceleration=22;maxStepHeight=1.05;playerRadius=.35;keys={};isMoving=!1;facingAngle=0;targetFacingAngle=0;perspective="FPP";isInputPaused=!1;surfaceManager;dungeonManager;libraryManager;currentMode="surface";constructor(t){this.model=t,this.bindKeyboard()}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}setPerspective(t){this.perspective=t,this.model.setFirstPerson(t==="FPP")}setPosition(t,e,n){this.position.set(t,e,n),this.model.group.position.copy(this.position)}getGamepadInput(){const t=navigator.getGamepads?navigator.getGamepads():[],e=Array.from(t).find(r=>r!==null&&r.connected);if(!e)return{moveX:0,moveZ:0,rightStickX:0,rightStickY:0,sprint:!1,jump:!1,switchMode:!1,switchView:!1};const n=.15,i=r=>Math.abs(r)>n?r:0;return{moveX:i(e.axes[0]??0),moveZ:i(e.axes[1]??0),rightStickX:i(e.axes[2]??0),rightStickY:i(e.axes[3]??0),sprint:!!e.buttons[0]?.pressed,jump:!!e.buttons[1]?.pressed,switchMode:!!e.buttons[2]?.pressed,switchView:!!e.buttons[3]?.pressed}}update(t,e){const n=Number.isFinite(t)&&t>0?Math.min(t,.1):.016;if(this.isInputPaused){this.velocity.x=Be.damp(this.velocity.x,0,this.deceleration,n),this.velocity.z=Be.damp(this.velocity.z,0,this.deceleration,n),this.isMoving=!1,this.applyMovementAndCollisions(n),this.model.group.position.copy(this.position),this.model.updateAnimation(!1,n,0);return}let i=0,r=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(i-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(i+=1);let a=!!(this.keys.ShiftLeft||this.keys.ShiftRight);const o=this.getGamepadInput();Math.hypot(o.moveX,o.moveZ)>.1&&(i=o.moveX,r=o.moveZ),o.sprint&&(a=!0);const l=Math.hypot(i,r);l>1&&(i/=l,r/=l),this.isMoving=l>.05;const c=-Math.sin(e),d=-Math.cos(e),u=Math.cos(e),h=-Math.sin(e),f=u*i+c*-r,g=h*i+d*-r,_=this.isMoving?this.moveSpeed*(a?this.sprintMultiplier:1):0,m=f*_,p=g*_,E=this.isMoving?this.acceleration:this.deceleration;if(this.velocity.x=Be.damp(this.velocity.x,m,E,n),this.velocity.z=Be.damp(this.velocity.z,p,E,n),this.applyMovementAndCollisions(n),this.perspective==="FPP")this.facingAngle=e,this.model.group.rotation.y=e;else{if(this.isMoving){this.targetFacingAngle=Math.atan2(this.velocity.x,this.velocity.z);let v=this.targetFacingAngle-this.facingAngle;for(;v<-Math.PI;)v+=Math.PI*2;for(;v>Math.PI;)v-=Math.PI*2;this.facingAngle+=v*Math.min(1,14*n)}this.model.group.rotation.y=this.facingAngle}this.model.group.position.copy(this.position);const b=Math.hypot(this.velocity.x,this.velocity.z)/this.moveSpeed;this.model.updateAnimation(this.isMoving,n,b)}getFootprintGroundHeight(t,e,n){if(!this.surfaceManager)return 0;const i=this.playerRadius,r=i*.7071,a=[{x:t,z:e},{x:t,z:e-i},{x:t,z:e+i},{x:t+i,z:e},{x:t-i,z:e},{x:t+r,z:e-r},{x:t-r,z:e-r},{x:t+r,z:e+r},{x:t-r,z:e+r}];let o=-1/0;const l=this.surfaceManager.getElevation(t,e);for(const c of a){const d=this.surfaceManager.getElevation(c.x,c.z);d<=n+this.maxStepHeight+.1&&d>o&&(o=d)}return o===-1/0?l:o}isWallBlocked(t,e,n){if(!this.surfaceManager)return!1;const i=this.playerRadius,r=i*.7071,a=[{x:t,z:e-i},{x:t,z:e+i},{x:t+i,z:e},{x:t-i,z:e},{x:t+r,z:e-r},{x:t-r,z:e-r},{x:t+r,z:e+r},{x:t-r,z:e+r}];for(const o of a)if(this.surfaceManager.getElevation(o.x,o.z)>n+this.maxStepHeight+.1)return!0;return!1}applyMovementAndCollisions(t){const e=this.velocity.x*t,n=this.velocity.z*t;if(this.currentMode==="surface"&&this.surfaceManager){const i=this.position.x+e;this.isWallBlocked(i,this.position.z,this.position.y)||(this.position.x=i);const a=this.position.z+n;this.isWallBlocked(this.position.x,a,this.position.y)||(this.position.z=a);const l=this.getFootprintGroundHeight(this.position.x,this.position.z,this.position.y);this.position.y=Be.damp(this.position.y,l,20,t),this.position.y<l&&(this.position.y=l)}else if(this.currentMode==="dungeon"&&this.dungeonManager){const i=this.playerRadius,r=this.position.x+e;this.dungeonManager.isSolid(r-i,this.position.z-i)||this.dungeonManager.isSolid(r+i,this.position.z-i)||this.dungeonManager.isSolid(r-i,this.position.z+i)||this.dungeonManager.isSolid(r+i,this.position.z+i)||(this.position.x=r);const o=this.position.z+n;this.dungeonManager.isSolid(this.position.x-i,o-i)||this.dungeonManager.isSolid(this.position.x+i,o-i)||this.dungeonManager.isSolid(this.position.x-i,o+i)||this.dungeonManager.isSolid(this.position.x+i,o+i)||(this.position.z=o),this.position.y=0}else if(this.currentMode==="library"&&this.libraryManager){const i=this.playerRadius,r=this.position.x+e;this.libraryManager.getElevation(r,this.position.z,this.position.y)>this.position.y+.8||this.libraryManager.isBlocked(r-i,this.position.z,this.position.y)||this.libraryManager.isBlocked(r+i,this.position.z,this.position.y)||(this.position.x=r);const c=this.position.z+n;this.libraryManager.getElevation(this.position.x,c,this.position.y)>this.position.y+.8||this.libraryManager.isBlocked(this.position.x,c-i,this.position.y)||this.libraryManager.isBlocked(this.position.x,c+i,this.position.y)||(this.position.z=c);const f=this.libraryManager.getElevation(this.position.x,this.position.z,this.position.y);this.position.y=Be.damp(this.position.y,f,24,t),Math.abs(this.position.y-f)<.05&&(this.position.y=f)}}}const hm=[{id:"flashlight",name:"High-Power Flashlight",icon:"🔦",description:"Ultra-bright directional beam"},{id:"lantern",name:"Ornate Brass Lantern",icon:"🏮",description:"Cozy 360° warm candlelight glow"},{id:"sword",name:"Iron Broadsword",icon:"⚔️",description:"Hand-forged knight blade"},{id:"shield",name:"Oak Shield",icon:"🛡️",description:"Reinforced iron-banded shield"},{id:"potion",name:"Health Elixir",icon:"🧪",count:3,description:"Restores vitality and stamina"},{id:"compass",name:"Golden Compass",icon:"🧭",description:"Points towards dungeon center"},{id:"key",name:"Dungeon Key",icon:"🔑",count:1,description:"Opens heavy iron-bound doors"},{id:"bread",name:"Field Rations",icon:"🍞",count:5,description:"Hearty adventurer bread"}];class dm{root;callbacks;modeBtn;viewBadgeEl;posValueEl;chunkValueEl;yawValueEl;fpsValueEl;gamepadBadgeEl;hotbarLabelEl;hotbarSlotsContainer;bookHoverBadgeEl;hoverTitleEl;hoverCategoryEl;musicToastEl;musicTitleEl;musicSubtitleEl;musicToastTimer=null;items=[...hm];selectedIndex=-1;frameCount=0;lastFpsUpdate=performance.now();constructor(t,e){this.root=t,this.callbacks=e,this.buildDOM()}buildDOM(){this.root.innerHTML=`
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
      `,n.addEventListener("click",i=>{i.stopPropagation(),this.selectSlot(e)}),this.hotbarSlotsContainer.appendChild(n)}),this.updateActiveLabel()}selectSlot(t){if(t<0||t>=this.items.length)return;if(this.selectedIndex===t){this.selectedIndex=-1,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach(r=>r.classList.remove("active")),this.updateActiveLabel(),this.callbacks.onSelectItem&&this.callbacks.onSelectItem(null,-1);return}this.selectedIndex=t,this.hotbarSlotsContainer.querySelectorAll(".hotbar-slot").forEach((i,r)=>{r===t?i.classList.add("active"):i.classList.remove("active")}),this.updateActiveLabel();const n=this.items[t];this.callbacks.onSelectItem&&this.callbacks.onSelectItem(n,t)}selectNextSlot(){const t=this.selectedIndex===-1?0:(this.selectedIndex+1)%this.items.length;this.selectSlot(t)}selectPrevSlot(){const t=this.selectedIndex===-1?this.items.length-1:(this.selectedIndex-1+this.items.length)%this.items.length;this.selectSlot(t)}getSelectedItem(){return this.selectedIndex<0||this.selectedIndex>=this.items.length?null:this.items[this.selectedIndex]}updateActiveLabel(){const t=this.getSelectedItem();t?(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent=`${t.icon} ${t.name.toUpperCase()}`,this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop")):(this.hotbarLabelEl.style.display="block",this.hotbarLabelEl.textContent="✋ UNEQUIPPED (EMPTY HANDS)",this.hotbarLabelEl.classList.remove("animate-pop"),this.hotbarLabelEl.offsetWidth,this.hotbarLabelEl.classList.add("animate-pop"))}setMode(t){t==="surface"?(this.modeBtn.innerHTML="<span>☀️ MAP: SURFACE</span>",this.modeBtn.classList.remove("active-mode")):t==="dungeon"?(this.modeBtn.innerHTML="<span>🏰 MAP: DUNGEON</span>",this.modeBtn.classList.add("active-mode")):(this.modeBtn.innerHTML="<span>📚 MAP: GRAND LIBRARY</span>",this.modeBtn.classList.add("active-mode"))}setPerspective(t){this.viewBadgeEl.textContent=t}updateTelemetry(t,e,n,i,r,a){this.posValueEl.textContent=`X: ${t.toFixed(1)} Y: ${e.toFixed(1)} Z: ${n.toFixed(1)}`,this.chunkValueEl.textContent=`[${i}, ${r}]`;let o=a*180/Math.PI;o=(o%360+360)%360,this.yawValueEl.textContent=`${o.toFixed(0)}°`,this.frameCount++;const l=performance.now();if(l-this.lastFpsUpdate>=500){const u=Math.round(this.frameCount*1e3/(l-this.lastFpsUpdate));this.fpsValueEl.textContent=`${u} FPS`,this.frameCount=0,this.lastFpsUpdate=l}const c=navigator.getGamepads?navigator.getGamepads():[];Array.from(c).some(u=>u!==null&&u.connected)?(this.gamepadBadgeEl.textContent="CONNECTED",this.gamepadBadgeEl.className="gamepad-badge connected"):(this.gamepadBadgeEl.textContent="DISCONNECTED",this.gamepadBadgeEl.className="gamepad-badge disconnected")}}class um{element;callbacks;isOpen=!1;constructor(t){this.callbacks=t,this.buildDOM()}buildDOM(){this.element=document.createElement("div"),this.element.id="settings-modal-overlay",this.element.className="modal-overlay",this.element.style.display="none";let t=70,e=1,n=70;try{const i=localStorage.getItem("retro3d_fov");i&&(t=Math.max(40,Math.min(100,parseInt(i,10)||70)));const r=localStorage.getItem("retro3d_sens");r&&(e=Math.max(.5,Math.min(3,parseFloat(r)||1)));const a=localStorage.getItem("retro3d_music_vol");a&&(n=Math.max(0,Math.min(100,parseInt(a,10)||70)))}catch{}this.element.innerHTML=`
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
    `,document.body.appendChild(this.element),this.bindEvents()}bindEvents(){const t=this.element.querySelector("#btn-fpp"),e=this.element.querySelector("#btn-tpp"),n=this.element.querySelector("#slider-fov"),i=this.element.querySelector("#val-fov"),r=this.element.querySelector("#slider-sensitivity"),a=this.element.querySelector("#val-sensitivity"),o=this.element.querySelector("#slider-music-vol"),l=this.element.querySelector("#val-music-vol"),c=this.element.querySelector("#modal-select-resolution"),d=this.element.querySelector("#btn-modal-close-x"),u=this.element.querySelector("#btn-resume-game");t.addEventListener("click",()=>{t.classList.add("active-mode"),e.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("FPP")}),e.addEventListener("click",()=>{e.classList.add("active-mode"),t.classList.remove("active-mode"),this.callbacks.onPerspectiveChange("TPP")}),n.addEventListener("input",()=>{const h=parseInt(n.value,10);i.textContent=`${h}°`;try{localStorage.setItem("retro3d_fov",String(h))}catch{}this.callbacks.onFovChange(h)}),r.addEventListener("input",()=>{const h=parseFloat(r.value);a.textContent=`${h.toFixed(1)}x`;try{localStorage.setItem("retro3d_sens",String(h))}catch{}this.callbacks.onSensitivityChange(h)}),o.addEventListener("input",()=>{const h=parseInt(o.value,10);l.textContent=`${h}%`;try{localStorage.setItem("retro3d_music_vol",String(h))}catch{}this.callbacks.onMusicVolumeChange&&this.callbacks.onMusicVolumeChange(h/100)}),c.addEventListener("change",()=>{const[h,f]=c.value.split("x").map(Number);this.callbacks.onResolutionChange(h,f)}),d.addEventListener("click",()=>this.hide()),u.addEventListener("click",()=>this.hide()),this.element.addEventListener("click",h=>{h.target===this.element&&this.hide()})}setPerspectiveUI(t){const e=this.element.querySelector("#btn-fpp"),n=this.element.querySelector("#btn-tpp");t==="FPP"?(e?.classList.add("active-mode"),n?.classList.remove("active-mode")):(n?.classList.add("active-mode"),e?.classList.remove("active-mode"))}show(){this.isOpen=!0,this.element.style.display="flex"}hide(){this.isOpen&&(this.isOpen=!1,this.element.style.display="none",this.callbacks.onClose())}toggle(){this.isOpen?this.hide():this.show()}}class fm{overlayEl;modalEl;currentBook=null;currentPageIndex=0;isOpen=!1;callbacks;constructor(t){this.callbacks=t,this.overlayEl=document.createElement("div"),this.overlayEl.id="book-reader-overlay",this.overlayEl.className="book-reader-overlay hidden",this.modalEl=document.createElement("div"),this.modalEl.className="book-reader-container",this.overlayEl.appendChild(this.modalEl),document.body.appendChild(this.overlayEl),this.bindEvents()}bindEvents(){this.overlayEl.addEventListener("click",t=>{t.target===this.overlayEl&&this.close()}),window.addEventListener("keydown",t=>{if(this.isOpen){if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),this.close();return}if(t.code==="ArrowRight"||t.code==="KeyD"||t.code==="PageDown")t.preventDefault(),this.nextPage();else if(t.code==="ArrowLeft"||t.code==="KeyA"||t.code==="PageUp")t.preventDefault(),this.prevPage();else if(t.code==="Home")t.preventDefault(),this.goToPage(0);else if(t.code==="End"&&(t.preventDefault(),this.currentBook)){const e=Math.floor((this.currentBook.pages.length-1)/2)*2;this.goToPage(e)}}},{capture:!0})}open(t){this.currentBook=t,this.currentPageIndex=0,this.isOpen=!0,this.overlayEl.classList.remove("hidden"),document.exitPointerLock(),this.render()}close(){this.isOpen&&(this.isOpen=!1,this.overlayEl.classList.add("hidden"),this.callbacks.onClose())}getIsOpen(){return this.isOpen}goToPage(t){if(!this.currentBook)return;const e=Math.max(0,Math.min(Math.floor(t/2)*2,this.currentBook.pages.length-1));this.currentPageIndex=e,this.render()}nextPage(){this.currentBook&&this.currentPageIndex+2<this.currentBook.pages.length&&(this.currentPageIndex+=2,this.render())}prevPage(){this.currentPageIndex>=2&&(this.currentPageIndex-=2,this.render())}render(){if(!this.currentBook)return;const t=this.currentBook,e=t.pages[this.currentPageIndex],n=t.pages[this.currentPageIndex+1],i=this.currentPageIndex>0,r=this.currentPageIndex+2<t.pages.length,a=`font-${t.fontFamily||"garamond"}`,o=`size-${t.fontSize||"regular"}`,l=`layout-${t.layoutFormat||"standard"}`;this.modalEl.innerHTML=`
      <div class="book-leather-binding ${a} ${o} ${l}" style="border-color: ${t.coverColor};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page ${t.layoutFormat==="illuminated"?"has-illuminated-border":""}">
            <div class="page-inner">
              ${e?this.renderPageContent(e,t):'<div class="blank-page-note"></div>'}

              <div class="page-footer">
                <span class="page-num">${e?e.pageNumber:""}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER FOLD -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page ${t.layoutFormat==="illuminated"?"has-illuminated-border":""}">
            <div class="page-inner">
              ${n?this.renderPageContent(n,t):'<div class="blank-page-note">~ Finis ~</div>'}

              <div class="page-footer">
                <span class="page-num">${n?n.pageNumber:""}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER CONTROLS & JUMP SELECTOR -->
        <div class="book-nav-bar">
          <div class="nav-left-group">
            <button id="btn-prev-page" class="retro-btn nav-page-btn" ${i?"":"disabled"}>
              ◀ PREV
            </button>
            <button id="btn-toc-jump" class="retro-btn nav-page-btn" title="Jump to Table of Contents (Page 6)">
              📜 TOC
            </button>
          </div>

          <div class="nav-center-group">
            <span class="page-indicator">Pages ${this.currentPageIndex+1}-${Math.min(this.currentPageIndex+2,t.pages.length)} of ${t.pages.length}</span>
            <select id="book-page-selector" class="book-page-select">
              ${this.generatePageOptions(t)}
            </select>
          </div>

          <div class="nav-right-group">
            <button id="btn-next-page" class="retro-btn nav-page-btn" ${r?"":"disabled"}>
              NEXT ▶
            </button>
            <button id="btn-close-book" class="retro-btn close-book-btn">
              ✕ CLOSE (ESC)
            </button>
          </div>
        </div>
      </div>
    `,this.modalEl.querySelector("#btn-prev-page")?.addEventListener("click",d=>{d.stopPropagation(),this.prevPage()}),this.modalEl.querySelector("#btn-next-page")?.addEventListener("click",d=>{d.stopPropagation(),this.nextPage()}),this.modalEl.querySelector("#btn-toc-jump")?.addEventListener("click",d=>{d.stopPropagation(),this.goToPage(4)}),this.modalEl.querySelector("#btn-close-book")?.addEventListener("click",d=>{d.stopPropagation(),this.close()});const c=this.modalEl.querySelector("#book-page-selector");c&&(c.value=`${this.currentPageIndex}`,c.addEventListener("change",d=>{const u=parseInt(d.target.value,10);this.goToPage(u)})),this.modalEl.querySelectorAll(".toc-row-link").forEach(d=>{d.addEventListener("click",u=>{const h=parseInt(u.currentTarget.dataset.page||"1",10);this.goToPage(h-1)})})}generatePageOptions(t){let e="";for(let n=0;n<t.pages.length;n+=2){const i=t.pages[n],r=t.pages[n+1],a=r?`Pages ${n+1}-${n+2}: ${i.chapterTitle||r.chapterTitle||"Spread"}`:`Page ${n+1}: ${i.chapterTitle||"End"}`;e+=`<option value="${n}">📖 ${a.slice(0,38)}</option>`}return e}renderPageContent(t,e){switch(t.pageType){case"half-title":return`
          <div class="page-half-title">
            <div class="half-title-text">${e.title}</div>
            <div class="ornate-divider">❦ ════════ ❧</div>
          </div>
        `;case"frontispiece":return`
          <div class="page-frontispiece">
            <div class="frontispiece-header">ILLUMINATED FRONTISPIECE</div>
            <pre class="frontispiece-ascii">${t.content}</pre>
          </div>
        `;case"title-page":return`
          <div class="page-title-page">
            <div class="book-category-tag">${e.classification.toUpperCase()} • ${e.subgenre.toUpperCase()}</div>
            <h1 class="book-main-title">${e.title}</h1>
            <div class="book-subtitle">${e.subtitle}</div>
            <div class="ornate-divider">❦ ════════════ ❧</div>
            <div class="book-author-lead">Authored By</div>
            <div class="book-author-name">${e.author}</div>
            <div class="book-era-tag">${e.era}</div>
            <div class="book-press-imprint">
              Published by the High Cathedral Scriptorium<br/>
              Archives of Alderia • Anno Domini
            </div>
          </div>
        `;case"copyright":return`
          <div class="page-copyright">
            <div class="copyright-header">ARCHIVAL CATALOG & NOTICES</div>
            <div class="copyright-body">${t.content.replace(/\n/g,"<br/>")}</div>
          </div>
        `;case"dedication":return`
          <div class="page-dedication">
            <div class="dedication-body">${t.content.replace(/\n/g,"<br/>")}</div>
          </div>
        `;case"toc":return`
          <div class="page-toc">
            <div class="chapter-header">TABLE OF CONTENTS</div>
            <div class="toc-list">
              ${this.formatClickableToc(t.content)}
            </div>
          </div>
        `;case"glossary":return`
          <div class="page-glossary">
            <div class="chapter-header">GLOSSARY OF ANCIENT TERMS</div>
            <div class="glossary-body">${this.formatGlossary(t.content)}</div>
          </div>
        `;case"author-bio":return`
          <div class="page-author-bio">
            <div class="chapter-header">ABOUT THE AUTHOR</div>
            <div class="author-bio-body">${this.formatBodyText(t.content,e)}</div>
          </div>
        `;case"chapter":case"foreword":case"prologue":case"epilogue":case"acknowledgments":case"appendix":default:{const n=e.layoutFormat==="two-column"&&t.pageType==="chapter",i=e.layoutFormat==="verse"&&t.pageType==="chapter",r=t.marginalNote?`<div class="marginalia-note">📜 ${t.marginalNote}</div>`:"";return`
          ${t.chapterTitle?`<div class="chapter-header">${t.chapterTitle}</div>`:""}
          ${r}
          <div class="page-body-text ${n?"layout-two-column":""} ${i?"layout-verse":""}">
            ${this.formatBodyText(t.content,e)}
          </div>
        `}}}formatClickableToc(t){const e=t.split(`
`).filter(i=>i.trim().length>0);let n="";for(const i of e){if(i.includes("TABLE OF CONTENTS"))continue;const r=i.match(/(.+?)\s*\.\s*\.\s*(\d+)$/);if(r){const a=r[1].trim(),o=r[2].trim();n+=`
          <div class="toc-row toc-row-link" data-page="${o}">
            <span class="toc-title">${a}</span>
            <span class="toc-dots"></span>
            <span class="toc-page-badge">${o}</span>
          </div>
        `}else n+=`<div class="toc-section-divider">${i}</div>`}return n}formatGlossary(t){return t.split(`
`).filter(n=>n.startsWith("•")).map(n=>{const i=n.replace("•","").split(":");if(i.length>=2){const r=i[0].trim(),a=i.slice(1).join(":").trim();return`<div class="glossary-entry"><strong class="glossary-term">${r}:</strong> <span class="glossary-def">${a}</span></div>`}return`<p>${n}</p>`}).join("")}formatBodyText(t,e){return t.split(`

`).map((i,r)=>{const a=i.trim();if(!a)return"";if(a.startsWith("[THEOREM")||a.startsWith("[LEMMA")||a.startsWith("[AXIOM")||a.startsWith("[PROPOSITION")||a.startsWith("[FORMULA"))return this.formatMathBlock(a);if(a.startsWith("[MATHEMATICAL DERIVATION")||a.startsWith("[STRUCTURAL RESOLUTION")||a.startsWith("[PROOF"))return this.formatMathBlock(a);if(a.startsWith("[VERSE CANTO")||a.startsWith("[SECTION")||a.startsWith("[DISPUTATIO"))return`<div class="special-section-header">✦ ${a.slice(1,a.indexOf("]"))} ✦</div>`;if(a.startsWith("$$")&&a.endsWith("$$")){const l=a.slice(2,-2).trim();return`<div class="math-display-eq">${vs.renderEquation(l)}</div>`}if(a==="[Q.E.D. • Quod Erat Demonstrandum]"||a==="[Q.E.D.]")return'<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>';const o=vs.renderInlineAndBlocks(a);if(r===0&&!a.startsWith("*")&&!a.startsWith("•")&&!a.startsWith("[")){const l=o.charAt(0),c=o.slice(1);return`<p class="first-paragraph"><span class="drop-cap">${l}</span>${c.replace(/\n/g,"<br/>")}</p>`}return`<p>${o.replace(/\n/g,"<br/>")}</p>`}).join("")}formatMathBlock(t){const e=t.split(`
`);let n='<div class="math-proof-card">';for(let i=0;i<e.length;i++){const r=e[i].trim();if(r)if(r.startsWith("[")&&r.endsWith("]")){const a=r.slice(1,-1);a.includes("Q.E.D")||a.includes("Quod Erat")?n+=`<div class="math-qed-badge">❦ ${a}</div>`:n+=`<div class="math-theorem-header">✦ ${a} ✦</div>`}else if(r.startsWith("$$")&&r.endsWith("$$")){const a=r.slice(2,-2).trim();n+=`<div class="math-display-eq">${vs.renderEquation(a)}</div>`}else n+=`<div class="math-proof-line">${vs.renderInlineAndBlocks(r)}</div>`}return n+="</div>",n}}class vs{static renderInlineAndBlocks(t){let e=t.replace(/\$\$([\s\S]+?)\$\$/g,(n,i)=>`<div class="math-display-eq">${this.renderEquation(i.trim())}</div>`);return e=e.replace(/\$([^\$\n]+?)\$/g,(n,i)=>`<span class="math-inline-eq">${this.renderEquation(i.trim())}</span>`),e}static renderEquation(t){let e=t.trim();return e=e.replace(/\r?\n/g," "),e.includes("\\begin{bmatrix}")||e.includes("\\begin{pmatrix}")?this.renderMatrix(e):(e=e.replace(/\\left\s*\(/g,'<span class="math-delim">(</span>'),e=e.replace(/\\right\s*\)/g,'<span class="math-delim">)</span>'),e=e.replace(/\\left\s*\[/g,'<span class="math-delim">[</span>'),e=e.replace(/\\right\s*\]/g,'<span class="math-delim">]</span>'),e=e.replace(/\\left\s*\\\{/g,"{"),e=e.replace(/\\right\s*\\\}/g,"}"),e=this.replaceFractions(e),e=e.replace(/\\sqrt\{([^{}]+)\}/g,'<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>'),e=e.replace(/\\sqrt\s*([0-9a-zA-Z\\]+)/g,'<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>'),e=e.replace(/\\vec\{([^{}]+)\}/g,'<span class="math-vec"><span class="math-vec-arrow">&rarr;</span><span class="math-vec-base">$1</span></span>'),e=e.replace(/\\hat\{([^{}]+)\}/g,'<span class="math-hat"><span class="math-hat-sym">^</span><span class="math-vec-base">$1</span></span>'),e=e.replace(/\\oint_\{?\\mathcal\{S\}\}?/g,'<span class="math-op">&conint;</span><sub>𝒮</sub>'),e=e.replace(/\\oint/g,'<span class="math-op">&conint;</span>'),e=e.replace(/\\iiint_\{?\\Omega\}?/g,'<span class="math-op">&iiint;</span><sub>Ω</sub>'),e=e.replace(/\\iiint/g,'<span class="math-op">&iiint;</span>'),e=e.replace(/\\iint/g,'<span class="math-op">&iint;</span>'),e=e.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g,'<span class="math-op">&int;</span><sub>$1</sub><sup>$2</sup>'),e=e.replace(/\\int_([0-9a-zA-Z\\]+)\^([0-9a-zA-Z\\]+)/g,'<span class="math-op">&int;</span><sub>$1</sub><sup>$2</sup>'),e=e.replace(/\\int/g,'<span class="math-op">&int;</span>'),e=e.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g,'<span class="math-op">&sum;</span><sub>$1</sub><sup>$2</sup>'),e=e.replace(/\\sum/g,'<span class="math-op">&sum;</span>'),e=e.replace(/\\prod/g,'<span class="math-op">&prod;</span>'),e=e.replace(/\\nabla\^2/g,"&nabla;&sup2;"),e=e.replace(/\\nabla/g,"&nabla;"),e=e.replace(/\\partial/g,"&part;"),e=e.replace(/\\Psi\b/g,"Ψ"),e=e.replace(/\\Phi\b/g,"Φ"),e=e.replace(/\\Omega\b/g,"Ω"),e=e.replace(/\\Delta\b/g,"Δ"),e=e.replace(/\\alpha\b/g,"α"),e=e.replace(/\\beta\b/g,"β"),e=e.replace(/\\gamma\b/g,"γ"),e=e.replace(/\\theta\b/g,"θ"),e=e.replace(/\\lambda\b/g,"λ"),e=e.replace(/\\mu\b/g,"μ"),e=e.replace(/\\omega\b/g,"ω"),e=e.replace(/\\kappa\b/g,"κ"),e=e.replace(/\\sigma\b/g,"σ"),e=e.replace(/\\tau\b/g,"τ"),e=e.replace(/\\phi\b/g,"ϕ"),e=e.replace(/\\rho\b/g,"ρ"),e=e.replace(/\\pi\b/g,"π"),e=e.replace(/\\mathbb\{Z\}/g,"ℤ"),e=e.replace(/\\mathcal\{M\}_\{?\\odot\}?/g,"ℳ<sub>☉</sub>"),e=e.replace(/\\mathcal\{N\}/g,"𝒩"),e=e.replace(/\\mathcal\{H\}/g,"ℋ"),e=e.replace(/\\mathcal\{S\}/g,"𝒮"),e=e.replace(/\\mathcal\{F\}/g,"ℱ"),e=e.replace(/\\le\b/g,"&le;"),e=e.replace(/\\ge\b/g,"&ge;"),e=e.replace(/\\pm\b/g,"&plusmn;"),e=e.replace(/\\cdot\b/g,"&sdot;"),e=e.replace(/\\times\b/g,"&times;"),e=e.replace(/\\equiv\b/g,"&equiv;"),e=e.replace(/\\approx\b/g,"&asymp;"),e=e.replace(/\\neq\b/g,"&ne;"),e=e.replace(/\\forall\b/g,"&forall;"),e=e.replace(/\\exists\b/g,"&exist;"),e=e.replace(/\\in\b/g,"&isin;"),e=e.replace(/\\land\b/g,"&and;"),e=e.replace(/\\lor\b/g,"&or;"),e=e.replace(/\\neg\b/g,"&not;"),e=e.replace(/\\vdash\b/g,"&#8866;"),e=e.replace(/\\implies\b/g,"&rArr;"),e=e.replace(/\\therefore\b/g,"&there4;"),e=e.replace(/\\downarrow\b/g,"&darr;"),e=e.replace(/\\uparrow\b/g,"&uarr;"),e=e.replace(/\\circ\b/g,"&deg;"),e=e.replace(/\\text\{([^{}]+)\}/g,'<span class="math-text">$1</span>'),e=e.replace(/\\pmod\{([^{}]+)\}/g,'<span class="math-text"> (mod $1)</span>'),e=e.replace(/\\gcd\b/g,'<span class="math-func">gcd</span>'),e=e.replace(/\\det\b/g,'<span class="math-func">det</span>'),e=e.replace(/\\cos\b/g,'<span class="math-func">cos</span>'),e=e.replace(/\\sin\b/g,'<span class="math-func">sin</span>'),e=e.replace(/\\ln\b/g,'<span class="math-func">ln</span>'),e=e.replace(/\\exp\b/g,'<span class="math-func">exp</span>'),e=e.replace(/\\xrightarrow\{([^}]+)\}/g,'<span class="math-arrow-labeled">&mdash;&mdash;($1)&rarr;</span>'),e=e.replace(/\^\{([^{}]+)\}/g,"<sup>$1</sup>"),e=e.replace(/\^([0-9a-zA-Z°]+)/g,"<sup>$1</sup>"),e=e.replace(/_\{([^{}]+)\}/g,"<sub>$1</sub>"),e=e.replace(/_([0-9a-zA-Z]+)/g,"<sub>$1</sub>"),e=e.replace(/\\(\s|,|;|quad)/g,"&nbsp;&nbsp;"),e)}static replaceFractions(t){let e="",n=t;for(;e!==n&&n.includes("\\frac");)e=n,n=n.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,(i,r,a)=>`<span class="math-frac"><span class="math-num">${r}</span><span class="math-den">${a}</span></span>`);return n}static renderMatrix(t){const e=t.includes("bmatrix"),i=t.replace(/\\begin\{[bp]matrix\}/g,"").replace(/\\end\{[bp]matrix\}/g,"").trim().split("\\\\");let r=`<div class="math-matrix-wrapper"><table class="math-matrix-table ${e?"bmatrix":"pmatrix"}"><tbody>`;for(const a of i){if(!a.trim())continue;r+="<tr>";const o=a.split("&");for(const l of o)r+=`<td>${this.renderEquation(l.trim())}</td>`;r+="</tr>"}return r+="</tbody></table></div>",r}}const xs={C2:65.41,D2:73.42,E2:82.41,F2:87.31,G2:98,A2:110,B2:123.47,C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880,B5:987.77,C6:1046.5,D6:1174.66},Do=[{id:"scribes_vigil",title:"The Scribe's Vigil",subtitle:"Medieval Lute & Solitary Wood Flute in D Dorian",tempoBpm:64,totalBeats:48,notesDrone:[{note:"D2",time:0,duration:16,gain:.35},{note:"A2",time:0,duration:16,gain:.25},{note:"C2",time:16,duration:16,gain:.35},{note:"G2",time:16,duration:16,gain:.25},{note:"D2",time:32,duration:16,gain:.35},{note:"A2",time:32,duration:16,gain:.25}],notesLute:[{note:"D3",time:0,duration:1.5},{note:"A3",time:1,duration:1.2},{note:"F4",time:2,duration:1.2},{note:"E4",time:3,duration:1.2},{note:"D4",time:4,duration:1.5},{note:"A3",time:5,duration:1.2},{note:"F4",time:6,duration:1.2},{note:"G4",time:7,duration:1.2},{note:"A4",time:8,duration:2},{note:"F4",time:10,duration:1.2},{note:"E4",time:12,duration:1.5},{note:"D4",time:14,duration:2},{note:"C3",time:16,duration:1.5},{note:"G3",time:17,duration:1.2},{note:"E4",time:18,duration:1.2},{note:"D4",time:19,duration:1.2},{note:"C4",time:20,duration:1.5},{note:"G3",time:21,duration:1.2},{note:"E4",time:22,duration:1.2},{note:"G4",time:23,duration:1.2},{note:"F4",time:24,duration:2},{note:"E4",time:26,duration:1.5},{note:"D4",time:28,duration:1.5},{note:"C4",time:30,duration:2},{note:"D3",time:32,duration:2},{note:"A3",time:33,duration:1.5},{note:"F4",time:34,duration:1.5},{note:"E4",time:36,duration:1.5},{note:"F4",time:38,duration:1.5},{note:"A4",time:40,duration:2},{note:"G4",time:42,duration:1.5},{note:"D4",time:44,duration:4}],notesFlute:[{note:"A4",time:4,duration:3.5},{note:"G4",time:8,duration:2},{note:"F4",time:10,duration:2},{note:"E4",time:12,duration:4},{note:"C5",time:20,duration:3},{note:"B4",time:23,duration:2},{note:"A4",time:25,duration:3},{note:"G4",time:28,duration:4},{note:"D5",time:34,duration:3.5},{note:"E5",time:38,duration:2},{note:"F5",time:40,duration:2.5},{note:"E5",time:42.5,duration:2},{note:"D5",time:44.5,duration:3.5}]},{id:"golden_lion_hymn",title:"Hymn of the Golden Lion",subtitle:"Cathedral Organ, Harp & Resonant Chimes in A Minor",tempoBpm:56,totalBeats:48,notesOrgan:[{note:"A2",time:0,duration:12,gain:.35},{note:"E3",time:0,duration:12,gain:.28},{note:"C4",time:0,duration:12,gain:.22},{note:"G2",time:12,duration:12,gain:.35},{note:"D3",time:12,duration:12,gain:.28},{note:"B3",time:12,duration:12,gain:.22},{note:"F2",time:24,duration:12,gain:.35},{note:"C3",time:24,duration:12,gain:.28},{note:"A3",time:24,duration:12,gain:.22},{note:"E2",time:36,duration:6,gain:.35},{note:"B2",time:36,duration:6,gain:.28},{note:"A2",time:42,duration:6,gain:.4},{note:"E3",time:42,duration:6,gain:.3}],notesLute:[{note:"A3",time:0,duration:2},{note:"C4",time:1.5,duration:2},{note:"E4",time:3,duration:2},{note:"A4",time:4.5,duration:2},{note:"C5",time:6,duration:3},{note:"B4",time:9,duration:2},{note:"G3",time:12,duration:2},{note:"B3",time:13.5,duration:2},{note:"D4",time:15,duration:2},{note:"G4",time:16.5,duration:2},{note:"B4",time:18,duration:3},{note:"A4",time:21,duration:2},{note:"F3",time:24,duration:2},{note:"A3",time:25.5,duration:2},{note:"C4",time:27,duration:2},{note:"F4",time:28.5,duration:2},{note:"A4",time:30,duration:3},{note:"G4",time:33,duration:2},{note:"E3",time:36,duration:2},{note:"G3",time:37.5,duration:2},{note:"B3",time:39,duration:2},{note:"E4",time:40.5,duration:2},{note:"A3",time:42,duration:6}],notesFlute:[{note:"E5",time:3,duration:3.5},{note:"A5",time:7,duration:4},{note:"G5",time:15,duration:3},{note:"D5",time:19,duration:4},{note:"C5",time:27,duration:3.5},{note:"E5",time:31,duration:4},{note:"B4",time:37,duration:3},{note:"A4",time:41,duration:6}]},{id:"echoes_alexandria",title:"Echoes of Alexandria",subtitle:"Contemplative Lute Solos & Distant Flute Harmonics in E Minor",tempoBpm:60,totalBeats:48,notesDrone:[{note:"E2",time:0,duration:24,gain:.3},{note:"B2",time:0,duration:24,gain:.25},{note:"A2",time:24,duration:12,gain:.3},{note:"E2",time:36,duration:12,gain:.35}],notesLute:[{note:"E3",time:0,duration:2},{note:"B3",time:1,duration:1.5},{note:"G4",time:2,duration:1.5},{note:"F4",time:3.5,duration:1.5},{note:"E4",time:5,duration:2},{note:"G4",time:6.5,duration:1.5},{note:"B4",time:8,duration:2.5},{note:"A4",time:10.5,duration:1.5},{note:"G4",time:12,duration:2},{note:"F4",time:14,duration:2},{note:"E4",time:16,duration:3},{note:"D4",time:19,duration:2},{note:"A3",time:24,duration:2},{note:"E4",time:25.5,duration:1.5},{note:"C4",time:27,duration:1.5},{note:"B3",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"E4",time:33,duration:2.5},{note:"D4",time:35.5,duration:2},{note:"E3",time:38,duration:2},{note:"B3",time:39.5,duration:1.5},{note:"G4",time:41,duration:2},{note:"E4",time:43,duration:5}],notesFlute:[{note:"B4",time:5,duration:3},{note:"E5",time:8.5,duration:3.5},{note:"D5",time:13,duration:2.5},{note:"B4",time:16,duration:4},{note:"A4",time:27,duration:3},{note:"C5",time:30.5,duration:3},{note:"B4",time:34,duration:3.5},{note:"G4",time:40,duration:2.5},{note:"F4",time:42.5,duration:2},{note:"E4",time:44.5,duration:3.5}]},{id:"starchamber_canticle",title:"The Star-Chamber Canticle",subtitle:"Peaceful Cathedral Flute & Harp Polyphony in G Dorian",tempoBpm:58,totalBeats:48,notesOrgan:[{note:"G2",time:0,duration:16,gain:.32},{note:"D3",time:0,duration:16,gain:.25},{note:"F2",time:16,duration:16,gain:.32},{note:"C3",time:16,duration:16,gain:.25},{note:"G2",time:32,duration:16,gain:.35},{note:"D3",time:32,duration:16,gain:.28}],notesLute:[{note:"G3",time:0,duration:1.8},{note:"D4",time:1.2,duration:1.5},{note:"B3",time:2.4,duration:1.5},{note:"C4",time:3.6,duration:1.5},{note:"D4",time:4.8,duration:2},{note:"F4",time:6.5,duration:1.5},{note:"G4",time:8,duration:2.5},{note:"F4",time:11,duration:2},{note:"D4",time:13,duration:2},{note:"C4",time:15,duration:2},{note:"F3",time:16,duration:1.8},{note:"C4",time:17.5,duration:1.5},{note:"A3",time:19,duration:1.5},{note:"B3",time:20.5,duration:1.5},{note:"C4",time:22,duration:2},{note:"E4",time:24,duration:1.5},{note:"F4",time:26,duration:2.5},{note:"E4",time:29,duration:2},{note:"C4",time:31,duration:2},{note:"G3",time:32,duration:2},{note:"D4",time:33.5,duration:1.5},{note:"F4",time:35,duration:1.5},{note:"G4",time:37,duration:3},{note:"A4",time:40,duration:2.5},{note:"G4",time:43,duration:5}],notesFlute:[{note:"D5",time:4,duration:3.5},{note:"G5",time:8,duration:4},{note:"F5",time:13,duration:3},{note:"D5",time:16.5,duration:4},{note:"C5",time:22,duration:3.5},{note:"F5",time:26,duration:3.5},{note:"E5",time:30,duration:3},{note:"G5",time:36,duration:3.5},{note:"A5",time:40,duration:2.5},{note:"G5",time:43,duration:4.5}]}];class pm{ctx=null;masterGain=null;reverbConvolver=null;isMuted=!1;volume=.7;isPlaying=!1;isLibraryMode=!1;shuffledPlaylist=[];currentTrackIndex=0;scheduleTimer=null;onTrackChange;constructor(){this.initPlaylist()}initPlaylist(){const t=Do.map((e,n)=>n);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}this.shuffledPlaylist=t,this.currentTrackIndex=0}ensureAudioContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.reverbConvolver=this.createCathedralReverb(this.ctx);const e=this.ctx.createGain();e.gain.setValueAtTime(.7,this.ctx.currentTime);const n=this.ctx.createGain();n.gain.setValueAtTime(.65,this.ctx.currentTime),this.masterGain.connect(e),e.connect(this.ctx.destination),this.reverbConvolver&&(this.masterGain.connect(this.reverbConvolver),this.reverbConvolver.connect(n),n.connect(this.ctx.destination))}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}createCathedralReverb(t){const e=t.sampleRate,n=e*3.2,i=2.8,r=t.createBuffer(2,n,e),a=r.getChannelData(0),o=r.getChannelData(1);for(let c=0;c<n;c++){const d=c/e,u=Math.exp(-d*i),h=(Math.random()*2-1)*u,f=(Math.random()*2-1)*u;a[c]=h,o[c]=f}const l=t.createConvolver();return l.buffer=r,l}setVolume(t){this.volume=mm(t,0,1),this.ctx&&this.masterGain&&this.isLibraryMode&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.1)}setMuted(t){if(this.isMuted=t,this.ctx&&this.masterGain){const e=this.isMuted||!this.isLibraryMode?1e-4:this.volume;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.2)}}setLibraryMode(t){this.isLibraryMode=t,t?(this.ensureAudioContext(),this.isPlaying||this.playNextShuffledTrack(),this.ctx&&this.masterGain&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,1.2)):this.ctx&&this.masterGain&&this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,1)}playNextShuffledTrack(){if(!this.ensureAudioContext()||!this.ctx||!this.masterGain)return;this.shuffledPlaylist.length===0&&this.initPlaylist();const t=this.shuffledPlaylist[this.currentTrackIndex],e=Do[t];this.currentTrackIndex=(this.currentTrackIndex+1)%this.shuffledPlaylist.length,this.currentTrackIndex===0&&this.initPlaylist(),this.onTrackChange&&this.onTrackChange(e.title,e.subtitle),this.scheduleTrack(e)}scheduleTrack(t){if(!this.ctx||!this.masterGain)return;this.isPlaying=!0;const e=this.ctx.currentTime+.1,n=60/t.tempoBpm,i=t.totalBeats*n;t.notesLute&&t.notesLute.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playLuteString(r.note,a,o,r.gain??.45)}),t.notesFlute&&t.notesFlute.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playFluteNote(r.note,a,o,r.gain??.35)}),t.notesOrgan&&t.notesOrgan.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playOrganNote(r.note,a,o,r.gain??.3)}),t.notesDrone&&t.notesDrone.forEach(r=>{const a=e+r.time*n,o=r.duration*n;this.playDroneNote(r.note,a,o,r.gain??.3)}),this.scheduleTimer!==null&&window.clearTimeout(this.scheduleTimer),this.scheduleTimer=window.setTimeout(()=>{this.isLibraryMode?this.playNextShuffledTrack():this.isPlaying=!1},(i+1.5)*1e3)}playLuteString(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=xs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="triangle",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(r*2,e);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(Math.min(2800,r*5),e),l.frequency.exponentialRampToValueAtTime(Math.max(400,r*1.5),e+n);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(i*.4,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),o.connect(l),l.connect(c),c.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+n+.05),o.stop(e+n+.05)}playFluteNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=xs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.frequency.setValueAtTime(5.2,e),this.ctx.createGain().gain.setValueAtTime(r*.015,e),o.connect(a.frequency);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1900,e);const d=this.ctx.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(i*.35,e+.12),d.gain.setValueAtTime(i*.32,e+n-.25),d.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(c),c.connect(d),d.connect(this.masterGain),o.start(e),a.start(e),o.stop(e+n),a.stop(e+n+.05)}playOrganNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=xs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createOscillator();o.type="triangle",o.frequency.setValueAtTime(r*2,e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(i*.28,e+.25),l.gain.setValueAtTime(i*.25,e+n-.3),l.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(l),o.connect(l),l.connect(this.masterGain),a.start(e),o.start(e),a.stop(e+n+.1),o.stop(e+n+.1)}playDroneNote(t,e,n,i){if(!this.ctx||!this.masterGain)return;const r=xs[t];if(!r)return;const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,e);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(i*.35,e+.8),o.gain.setValueAtTime(i*.3,e+n-1),o.gain.linearRampToValueAtTime(1e-4,e+n),a.connect(o),o.connect(this.masterGain),a.start(e),a.stop(e+n+.2)}}function mm(s,t,e){return Math.max(t,Math.min(e,s))}class gm{raycaster;camera;canvas;scene;callbacks;mouseNDC=new $t(0,0);isPointerLocked=!1;hoveredBookData=null;hoveredKey=null;highlightMesh;tempMatrix=new jt;tempPos=new U;tempQuat=new Qe;tempScale=new U;lastCheckTime=0;checkIntervalMs=33;lastCameraPos=new U;lastCameraQuat=new Qe;pendingTargetBooks=[];maxDistance=6.5;isEnabled=!0;constructor(t,e,n,i){this.scene=t,this.camera=e,this.canvas=n,this.callbacks=i,this.raycaster=new hh,this.raycaster.far=this.maxDistance;const r=new et(1,1,1),a=new Lt({color:16771763,emissive:16573855,emissiveIntensity:.85,transparent:!0,opacity:.55,roughness:.3,metalness:.4,depthTest:!0,depthWrite:!1});this.highlightMesh=new D(r,a),this.highlightMesh.visible=!1,this.highlightMesh.renderOrder=999,this.scene.add(this.highlightMesh),this.bindEvents()}bindEvents(){document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement!==null,this.isPointerLocked&&this.mouseNDC.set(0,0)}),window.addEventListener("mousemove",t=>{if(this.isEnabled){if(!this.isPointerLocked){const e=this.canvas.getBoundingClientRect();this.mouseNDC.x=(t.clientX-e.left)/e.width*2-1,this.mouseNDC.y=-((t.clientY-e.top)/e.height*2-1)}this.performRaycast(this.pendingTargetBooks)}}),this.canvas.addEventListener("click",t=>{this.isEnabled&&(this.performRaycast(this.pendingTargetBooks,!0),this.hoveredBookData&&(t.preventDefault(),t.stopPropagation(),this.callbacks.onSelectBook(this.hoveredBookData)))})}update(t){if(this.pendingTargetBooks=t,!this.isEnabled||t.length===0){this.clearHover();return}const e=performance.now();if(!(e-this.lastCheckTime<this.checkIntervalMs)){if(this.isPointerLocked){const n=this.camera.position.distanceToSquared(this.lastCameraPos),i=2*Math.acos(Math.abs(Be.clamp(this.camera.quaternion.dot(this.lastCameraQuat),-1,1)));if(n<1e-4&&i<.002)return;this.lastCameraPos.copy(this.camera.position),this.lastCameraQuat.copy(this.camera.quaternion)}this.lastCheckTime=e,this.performRaycast(t)}}performRaycast(t,e=!1){if(!this.isEnabled||t.length===0){this.clearHover();return}this.isPointerLocked?this.raycaster.setFromCamera(new $t(0,0),this.camera):this.raycaster.setFromCamera(this.mouseNDC,this.camera);const n=this.raycaster.intersectObjects(t,!1);if(n.length>0){const i=n[0],r=i.object;if(r instanceof sl&&i.instanceId!==void 0){const a=r.userData?.books;if(a&&i.instanceId<a.length&&i.distance<=this.maxDistance){const o=a[i.instanceId],l=`inst_${r.id}_${i.instanceId}`;(this.hoveredKey!==l||e)&&(this.hoveredKey=l,this.hoveredBookData=o,r.getMatrixAt(i.instanceId,this.tempMatrix),this.tempMatrix.premultiply(r.matrixWorld),this.tempMatrix.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03),this.highlightMesh.visible=!0,this.callbacks.onHoverBook(o));return}}if(r instanceof D){const a=r.userData?.bookData;if(a&&i.distance<=this.maxDistance){const o=`mesh_${r.id}`;if(this.hoveredKey!==o||e){if(this.hoveredKey=o,this.hoveredBookData=a,r.matrixWorld.decompose(this.tempPos,this.tempQuat,this.tempScale),this.highlightMesh.position.copy(this.tempPos),this.highlightMesh.quaternion.copy(this.tempQuat),r.geometry.boundingBox){const l=new U;r.geometry.boundingBox.getSize(l),this.highlightMesh.scale.set(l.x*1.03,l.y*1.03,l.z*1.03)}else this.highlightMesh.scale.set(this.tempScale.x*1.03,this.tempScale.y*1.03,this.tempScale.z*1.03);this.highlightMesh.visible=!0,this.callbacks.onHoverBook(a)}return}}}this.clearHover()}clearHover(){(this.hoveredBookData||this.highlightMesh.visible)&&(this.hoveredBookData=null,this.hoveredKey=null,this.highlightMesh.visible=!1,this.callbacks.onHoverBook(null))}getHoveredBook(){return this.hoveredBookData}}class _m{canvas;hudRoot;scene;clock;renderPipeline;cameraRig;lightingManager;atlas;surfaceManager;dungeonManager;libraryManager;musicManager;interactionRaycaster;characterModel;characterController;hud;settingsModal;bookReaderModal;currentMode="surface";currentPerspective="FPP";surfacePlayerPos=new U(0,0,0);dungeonPlayerPos=new U(0,0,0);libraryPlayerPos=new U(0,0,-1);keys={};constructor(t,e){this.canvas=t,this.hudRoot=e,this.scene=new il,this.clock=new ch,this.renderPipeline=new Kp({canvas:this.canvas,internalWidth:640,internalHeight:360}),this.atlas=new Jp,this.lightingManager=new jp(this.scene),this.cameraRig=new yn({perspective:"FPP",mouseSensitivity:1}),this.scene.add(this.cameraRig.root),this.surfaceManager=new im(this.scene,this.atlas),this.dungeonManager=new am(this.scene,this.atlas,48,48),this.libraryManager=new om(this.scene,this.atlas),this.musicManager=new pm,this.characterModel=new lm(this.atlas,this.cameraRig.camera),this.scene.add(this.characterModel.group),this.characterController=new cm(this.characterModel),this.characterController.surfaceManager=this.surfaceManager,this.characterController.dungeonManager=this.dungeonManager,this.characterController.libraryManager=this.libraryManager;const n=this.surfaceManager.getElevation(0,0);this.surfacePlayerPos.set(0,n,0);const i=this.dungeonManager.dungeon.spawnPoint;this.dungeonPlayerPos.set(i.x+.5,0,i.z+.5),this.libraryPlayerPos.set(0,0,-1),this.settingsModal=new um({onPerspectiveChange:a=>this.setPerspective(a),onSensitivityChange:a=>this.cameraRig.setMouseSensitivity(a),onFovChange:a=>this.cameraRig.setFov(a),onResolutionChange:(a,o)=>this.renderPipeline.setResolution(a,o),onMusicVolumeChange:a=>this.musicManager.setVolume(a),onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.bookReaderModal=new fm({onClose:()=>{this.characterController.isInputPaused=!1,this.canvas.requestPointerLock()}}),this.interactionRaycaster=new gm(this.scene,this.cameraRig.camera,this.canvas,{onHoverBook:a=>{a&&this.currentMode==="library"&&!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?this.hud.showBookHover(a):this.hud.hideBookHover()},onSelectBook:a=>{this.currentMode==="library"&&!this.settingsModal.isOpen&&this.openBookReader(a)}});try{const a=localStorage.getItem("retro3d_fov");if(a){const c=parseInt(a,10);!isNaN(c)&&c>=40&&c<=100&&this.cameraRig.setFov(c)}const o=localStorage.getItem("retro3d_sens");if(o){const c=parseFloat(o);!isNaN(c)&&c>=.5&&c<=3&&this.cameraRig.setMouseSensitivity(c)}const l=localStorage.getItem("retro3d_music_vol");if(l){const c=parseInt(l,10);!isNaN(c)&&c>=0&&c<=100&&this.musicManager.setVolume(c/100)}}catch{}this.hud=new dm(this.hudRoot,{onToggleMode:()=>this.switchModeWithTransition(),onSelectResolution:(a,o)=>this.renderPipeline.setResolution(a,o),onToggleFullscreen:()=>this.toggleFullscreen(),onSelectItem:a=>this.characterModel.setActiveItem(a?a.id:null)}),this.musicManager.onTrackChange=(a,o)=>{this.hud.showNowPlaying(a,o)},this.bindEvents(),this.setMode("surface",!0),this.setPerspective("FPP");const r=this.hud.getSelectedItem();this.characterModel.setActiveItem(r?r.id:null)}bindEvents(){window.addEventListener("resize",()=>{this.renderPipeline.resize(),this.cameraRig.setAspect(window.innerWidth/window.innerHeight)}),this.canvas.addEventListener("click",()=>{this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen&&!this.interactionRaycaster.getHoveredBook()&&this.canvas.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==null?document.body.classList.add("pointer-locked"):document.body.classList.remove("pointer-locked")}),window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.currentMode==="library"&&this.musicManager.setLibraryMode(!0),t.code==="Escape"||t.code==="KeyO"){if(this.bookReaderModal.getIsOpen()){this.bookReaderModal.close();return}t.preventDefault(),t.stopPropagation(),this.toggleSettings();return}if(t.code==="KeyN"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()){t.preventDefault(),this.currentMode!=="library"?this.switchModeWithTransition("library"):this.switchModeWithTransition("surface");return}if(t.code==="KeyM"&&!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.switchModeWithTransition(),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&t.code.startsWith("Digit")){const e=parseInt(t.code.replace("Digit",""),10);e>=1&&e<=8&&this.hud.selectSlot(e-1)}t.code==="KeyF"&&!this.settingsModal.isOpen&&this.toggleFullscreen()},{capture:!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1})}openBookReader(t){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.interactionRaycaster.clearHover(),this.hud.hideBookHover(),this.bookReaderModal.open(t)}openSettings(){this.characterController.isInputPaused=!0,document.exitPointerLock(),this.settingsModal.show()}closeSettings(){this.characterController.isInputPaused=!1,this.settingsModal.hide(),this.canvas.requestPointerLock()}toggleSettings(){this.settingsModal.isOpen?this.closeSettings():this.openSettings()}setPerspective(t){this.currentPerspective=t,this.cameraRig.setPerspective(t),this.characterController.setPerspective(t),this.hud.setPerspective(t),this.settingsModal.setPerspectiveUI(t),this.renderPipeline.setCrosshairVisible(t==="FPP"),this.characterModel.setFirstPerson(t==="FPP"),!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&this.canvas.requestPointerLock()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}switchModeWithTransition(t){if(this.renderPipeline?.transitionManager?.isTransitioning)return;let e;t?e=t:this.currentMode==="surface"?e="dungeon":this.currentMode==="dungeon"?e="library":e="surface",this.renderPipeline.transitionManager.startTransition(()=>{this.setMode(e)},()=>{},.7)}setMode(t,e=!1){if(this.characterController&&(this.currentMode==="surface"?this.surfacePlayerPos.copy(this.characterController.position):this.currentMode==="dungeon"?this.dungeonPlayerPos.copy(this.characterController.position):this.libraryPlayerPos.copy(this.characterController.position),this.characterController.currentMode=t),this.currentMode=t,this.lightingManager&&this.lightingManager.setMode(t),this.musicManager&&this.musicManager.setLibraryMode(t==="library"),t==="surface"){this.surfaceManager&&this.surfaceManager.setVisible(!0),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=16,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=16,this.characterModel.fpsLanternLight.distance=30),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=16,this.characterModel.tppLanternLight.distance=30));const n=this.surfacePlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z),this.surfaceManager&&this.surfaceManager.update(n.x,n.z)}else if(t==="dungeon"){this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!0),this.libraryManager&&this.libraryManager.setVisible(!1),this.characterModel&&(this.characterModel.baseLanternIntensity=22,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=22,this.characterModel.fpsLanternLight.distance=34),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=22,this.characterModel.tppLanternLight.distance=34));const n=this.dungeonPlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z)}else{this.surfaceManager&&this.surfaceManager.setVisible(!1),this.dungeonManager&&this.dungeonManager.setVisible(!1),this.libraryManager&&this.libraryManager.setVisible(!0),this.characterModel&&(this.characterModel.baseLanternIntensity=22,this.characterModel.fpsLanternLight&&(this.characterModel.fpsLanternLight.intensity=22,this.characterModel.fpsLanternLight.distance=34),this.characterModel.tppLanternLight&&(this.characterModel.tppLanternLight.intensity=22,this.characterModel.tppLanternLight.distance=34));const n=this.libraryPlayerPos;this.characterController&&this.characterController.setPosition(n.x,n.y,n.z)}e&&this.cameraRig&&this.characterController&&(this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition)),this.hud&&this.hud.setMode(t)}start(){const t=()=>{requestAnimationFrame(t),this.tick()};t()}tick(){const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime(),n=this.characterController.getGamepadInput(),i=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyQ,r=!this.settingsModal.isOpen&&!this.bookReaderModal.getIsOpen()&&!!this.keys.KeyE;this.characterController.update(t,this.cameraRig.getYaw()),this.cameraRig.setTarget(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z),this.cameraRig.update(t,n.rightStickX,n.rightStickY,i,r),this.currentMode==="surface"?(this.surfaceManager.update(this.characterController.position.x,this.characterController.position.z),this.lightingManager.updateSunPosition(this.characterController.position),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):this.currentMode==="dungeon"?(this.dungeonManager.updateTorches(e),this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover()):(this.libraryManager.update(e),this.lightingManager.updateSunPosition(this.characterController.position),!this.bookReaderModal.getIsOpen()&&!this.settingsModal.isOpen?(this.interactionRaycaster.isEnabled=!0,this.interactionRaycaster.update(this.libraryManager.raycastableBooks)):(this.interactionRaycaster.isEnabled=!1,this.interactionRaycaster.clearHover(),this.hud.hideBookHover())),this.renderPipeline.render(this.scene,this.cameraRig.camera,t);const a=Math.floor(this.characterController.position.x/16),o=Math.floor(this.characterController.position.z/16);this.hud.updateTelemetry(this.characterController.position.x,this.characterController.position.y,this.characterController.position.z,a,o,this.cameraRig.getYaw())}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("game-canvas"),t=document.getElementById("hud-root");if(!s||!t){console.error("Failed to find #game-canvas or #hud-root in DOM.");return}new _m(s,t).start(),console.log("Retro-3D Dungeon & Surface Engine initialized successfully.")});
