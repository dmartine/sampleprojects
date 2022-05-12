"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6926],{80355:(wt,st,B)=>{B.d(st,{xQ:()=>Y,KC:()=>$,QI:()=>it,wF:()=>x,K:()=>g,Yx:()=>J,nb:()=>l,BH:()=>lt,NL:()=>K,Tg:()=>H});var Q=B(2076),et=B(62208),Z=B(60295),X=B(77692);const S=new Map;S.set("meter-per-second",1),S.set("kilometer-per-hour",.277778),S.set("knots",.514444),S.set("feet-per-second",.3048),S.set("mile-per-hour",.44704);const z=180/Math.PI,K=new Q.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function J(t,n){return S.get(t)/S.get(n)||1}function nt(t){return(450-t)%360}function H(t,n="geographic"){const[e,r]=t,a=Math.sqrt(e*e+r*r);let o=Math.atan2(r,e)*z;return o=(360+o)%360,"geographic"===n&&(o=nt(o)),[a,o]}function rt(t,n="geographic"){let e=t[1];"geographic"===n&&(e=nt(e)),e%=360;const r=t[0];return[r*Math.cos(e/z),r*Math.sin(e/z)]}function Y(t,n,e,r="geographic"){if(!(0,X.nk)(t)||(0,et.Wi)(e))return t;const a="vector-magdir"===n?t.clone():(0,et.Wg)($(t,n)),o=a.pixels[1];for(let c=0;c<o.length;c++)o[c]="geographic"===r?(o[c]+e[c]+270)%360:(o[c]+360-e[c])%360;return"vector-magdir"===n?a:$(a,"vector-magdir")}function $(t,n,e="geographic",r=1){if(!(0,X.nk)(t))return t;const{pixels:a,width:o,height:c}=t,M=o*c,w=a[0],s=a[1],u=t.pixelType.startsWith("f")?t.pixelType:"f32",i=Z.Z.createEmptyBand(u,M),p=Z.Z.createEmptyBand(u,M);let h=0;for(let v=0;v<c;v++)for(let A=0;A<o;A++)"vector-uv"===n?([i[h],p[h]]=H([w[h],s[h]],e),i[h]*=r):([i[h],p[h]]=rt([w[h],s[h]],e),i[h]*=r,p[h]*=r),h++;const f=new Z.Z({pixelType:u,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[i,p]});return f.updateStatistics(),f}function it(t,n,e=1){if(1===e||!(0,X.nk)(t))return t;const r=t.clone(),{pixels:a,width:o,height:c}=r,M=a[0],w=a[1];let s=0;for(let u=0;u<c;u++)for(let i=0;i<o;i++)"vector-uv"===n?(M[s]*=e,w[s]*=e):M[s]*=e,s++;return r.updateStatistics(),r}function lt(t,n,e,r,a){if(!(0,et.pC)(a)||!a.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(n/r),height:Math.round(e/r),resolution:t.width/n};const o=a.xmin,c=a.ymax,M=(t.xmax-t.xmin)/n*r,w=(t.ymax-t.ymin)/e*r,s=(M+w)/2;return t.xmin=o+Math.floor((t.xmin-o)/M)*M,t.xmax=o+Math.ceil((t.xmax-o)/M)*M,t.ymin=c+Math.floor((t.ymin-c)/w)*w,t.ymax=c+Math.ceil((t.ymax-c)/w)*w,{extent:t,width:Math.round(t.width/M),height:Math.round(t.height/w),resolution:s}}const q=function ht(t=0,n=0,e=Math.PI,r=!0){r&&(e=(2*Math.PI-e)%(2*Math.PI));const a=r?-1:1,o=13*a,c=-7*a,M=-2*a,w=-16*a,s=21.75,[u,i]=C(0,n+o,e,s),[p,h]=C(t-5.5,n+c,e,s),[f,v]=C(t+5.5,n+c,e,s),[A,I]=C(t-1.5,n+M,e,s),[T,P]=C(t+1.5,n+M,e,s),[O,k]=C(t-1.5,n+w,e,s),[D,L]=C(t+1.5,n+w,e,s);return[u,i,p,h,A,I,T,P,f,v,O,k,D,L]}(0,0,0);function ct(t=0,n=Math.PI,e=!0){e&&(n=(2*Math.PI-n)%(2*Math.PI));const a=e?-1:1,o=5*a,c=20*a,M=25*a,w=45,h=2*a;let[f,v]=[5,0-c],[A,I]=[f+2,v],[T,P]=[A-0,I+h],[O,k]=[-5,0-M],[D,L]=[O+0,k-h],b=Math.ceil(t/5),E=Math.floor(b/10);b-=8*E;const U=[],F=[];for(let dt=0;dt<b/2;dt++,E--){E<=0&&b%2==1&&dt===(b-1)/2&&(O=0,D=O+0,k=(k+v)/2,L=k-h);const[Mt,xt]=C(O,k,n,w);if(E>0){const[pt,mt]=C(A,k,n,w),[_t,gt]=C(f,v,n,w);U.push(pt),U.push(mt),U.push(Mt),U.push(xt),U.push(_t),U.push(gt)}else{const[pt,mt]=C(A,I,n,w),[_t,gt]=C(T,P,n,w),[Et,vt]=C(D,L,n,w);F.push(Mt),F.push(xt),F.push(Et),F.push(vt),F.push(_t),F.push(gt),F.push(pt),F.push(mt)}k+=o,v+=o,I+=o,P+=o,L+=o}const[j,V]=C(5,0+c,n,w),[at,ut]=C(7,0+c,n,w),[ft,yt]=C(5,0-M,n,w),[Pt,Dt]=C(7,0-M,n,w);return{pennants:U,barbs:F,shaft:[j,V,at,ut,ft,yt,Pt,Dt]}}function C(t,n,e,r=1){const a=Math.sqrt(t*t+n*n)/r,o=(2*Math.PI+Math.atan2(n,t))%(2*Math.PI);return[a,(2*Math.PI+o-e)%(2*Math.PI)]}const G=[0,1,3,6,10,16,21,27,33,40,47,55,63],tt=[0,.5,1,1.5,2],ot=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function R(t,n,e,r){const a=J(r||"knots",e);let o;for(o=1;o<n.length;o++)if(o===n.length-1){if(t<n[o]*a)break}else if(t<=n[o]*a)break;return Math.min(o-1,n.length-2)}function m(t,n,e,r,a){let o=0;switch(n){case"beaufort_kn":o=R(t,G,"knots",e);break;case"beaufort_km":o=R(t,G,"kilometer-per-hour",e);break;case"beaufort_ft":o=R(t,G,"feet-per-second",e);break;case"beaufort_m":o=R(t,G,"meter-per-second",e);break;case"classified_arrow":o=R(t,a,r,e);break;case"ocean_current_m":o=R(t,tt,"meter-per-second",e);break;case"ocean_current_kn":o=R(t,ot,"knots",e)}return o}const _=[];function g(t,n){let r=0,a=0;const{width:o,height:c,mask:M}=t,w=t.pixels[0],s=[],u=[],i=J(K.fromJSON(n.inputUnit),"knots"),p="wind_speed"===n.style?5:Number.MAX_VALUE;for(let h=0;h<c;h++)for(let f=0;f<o;f++){const v=w[h*o+f]*i;if((!M||M[h*o+f])&&v<p){for(let I=0;I<4;I++)s[r++]=(f+.5)/o,s[r++]=(h+.5)/c,s[r++]=I<2?-.5:.5,s[r++]=I%2==0?-.5:.5,s[r++]=0,s[r++]=v;const A=4*(r/24-1);u[a++]=A,u[a++]=A+1,u[a++]=A+2,u[a++]=A+1,u[a++]=A+2,u[a++]=A+3}}return{vertexData:new Float32Array(s),indexData:new Uint32Array(u)}}function x(t,n){return"simple_scalar"===n.style?g(t,n):"wind_speed"===n.style?function y(t,n){if(0===_.length)for(let f=0;f<30;f++)_.push(ct(5*f,0));const e=J(K.fromJSON(n.inputUnit),"knots"),{width:r,height:a,mask:o}=t,c=t.pixels[0],M=t.pixels[1],s=[],u=[];let i=0,p=0;for(let f=0;f<a;f++)for(let v=0;v<r;v++){const A=f*r+v,I=c[A]*e;if((!o||o[f*r+v])&&I>=5){var h;const T=null!=(h=(M[A]+360)%360/180*Math.PI)?h:2*Math.PI*Math.random(),{pennants:P,barbs:O,shaft:k}=_[Math.min(Math.floor(I/5),29)];if(P.length+O.length===0)continue;let D=s.length/6;const L=(v+.5)/r,b=(f+.5)/a;for(let E=0;E<P.length;E+=2)s[i++]=L,s[i++]=b,s[i++]=P[E],s[i++]=P[E+1]+T,s[i++]=0,s[i++]=I;for(let E=0;E<O.length;E+=2)s[i++]=L,s[i++]=b,s[i++]=O[E],s[i++]=O[E+1]+T,s[i++]=0,s[i++]=I;for(let E=0;E<k.length;E+=2)s[i++]=L,s[i++]=b,s[i++]=k[E],s[i++]=k[E+1]+T,s[i++]=0,s[i++]=I;for(let E=0;E<P.length/6;E++)u[p++]=D,u[p++]=D+1,u[p++]=D+2,D+=3;for(let E=0;E<O.length/8;E++)u[p++]=D,u[p++]=D+1,u[p++]=D+2,u[p++]=D+1,u[p++]=D+2,u[p++]=D+3,D+=4;u[p++]=D+0,u[p++]=D+1,u[p++]=D+2,u[p++]=D+1,u[p++]=D+3,u[p++]=D+2,D+=4}}return{vertexData:new Float32Array(s),indexData:new Uint32Array(u)}}(t,n):function d(t,n){const{style:e,inputUnit:r,outputUnit:a,breakValues:o}=n,c=K.fromJSON(r),M=K.fromJSON(a);let u=0,i=0;const{width:p,height:h,mask:f}=t,v=t.pixels[0],A=t.pixels[1],I=f?f.filter(k=>k>0).length:p*h,T=new Float32Array(42*I),P=new Uint32Array(15*I);for(let k=0;k<h;k++)for(let D=0;D<p;D++){const L=k*p+D;if(!f||f[k*p+D]){var O;const b=null!=(O=(A[L]+360)%360/180*Math.PI)?O:2*Math.PI*Math.random(),E=m(v[L],e,c,M,o);for(let F=0;F<q.length;F+=2)T[u++]=(D+.5)/p,T[u++]=(k+.5)/h,T[u++]=q[F],T[u++]=q[F+1]+b,T[u++]=E,T[u++]=v[L];const U=7*(u/42-1);P[i++]=U,P[i++]=U+1,P[i++]=U+2,P[i++]=U+0,P[i++]=U+4,P[i++]=U+3,P[i++]=U+0,P[i++]=U+2,P[i++]=U+3,P[i++]=U+2,P[i++]=U+5,P[i++]=U+3,P[i++]=U+5,P[i++]=U+6,P[i++]=U+3}}return{vertexData:T,indexData:P}}(t,n)}function l(t,n,e,r=[0,0],a=.5){const{width:o,height:c,mask:M}=t,[w,s]=t.pixels,[u,i]=r,p=Math.round((o-u)/e),h=Math.round((c-i)/e),f=p*h,v=new Float32Array(f),A=new Float32Array(f),I=new Uint8Array(f),T="vector-uv"===n;for(let O=0;O<h;O++)for(let k=0;k<p;k++){let D=0;const L=O*p+k,b=Math.max(0,O*e+i),E=Math.max(0,k*e+u),U=Math.min(c,b+e),F=Math.min(o,E+e);for(let j=b;j<U;j++)for(let V=E;V<F;V++){const W=j*o+V;if(!M||M[W]){D++;const at=T?[w[W],s[W]]:[w[W],(360+s[W])%360],[ut,ft]=T?at:rt(at);v[L]+=ut,A[L]+=ft}}if(D>=(U-b)*(F-E)*(1-a)){I[L]=1;const[j,V]=H([v[L]/D,A[L]/D]);v[L]=j,A[L]=V}else I[L]=0,v[L]=0,A[L]=0}const P=new Z.Z({width:p,height:h,pixels:[v,A],mask:I});return P.updateStatistics(),P}},37084:(wt,st,B)=>{B.d(st,{z_:()=>rt,KK:()=>G});var Q=B(15861),Z=(B(29132),B(63290)),X=B(21286),S=B(62208),z=B(10699),N=B(4619),K=B(37053),J=B(2004);const nt=Z.Z.getLogger("esri.views.2d.engine.flow.dataUtils");function rt(m,d,_){return Y.apply(this,arguments)}function Y(){return(Y=(0,Q.Z)(function*(m,d,_){const y=performance.now(),g=$(m,d),x=performance.now(),l=lt(m,g,d.width,d.height),t=performance.now(),n=ht(l,!0),e=performance.now(),r=ct(n),a=performance.now();if(m.profile){const o={"_createFlowFieldFromData()":Math.round(x-y),"_getStreamlines()":Math.round(t-x),"createAnimatedLinesData()":Math.round(e-t),"createLinesMesh()":Math.round(a-e),"Total elapsed time":Math.round(a-y)};nt.info("createStreamlinesMesh profile",o)}return yield Promise.resolve(),(0,z.k_)(_),r})).apply(this,arguments)}function $(m,d){const _=function q(m,d,_,y){if(0===y)return m;const g=Math.round(3*y),x=new Array(2*g+1);let l=0;for(let e=-g;e<=g;e++){const r=Math.exp(-e*e/(y*y));x[e+g]=r,l+=r}for(let e=-g;e<=g;e++)x[e+g]/=l;const t=new Float32Array(m.length);for(let e=0;e<_;e++)for(let r=0;r<d;r++){let a=0,o=0;for(let c=-g;c<=g;c++){if(r+c<0||r+c>=d)continue;const M=x[c+g];a+=M*m[2*(e*d+(r+c))+0],o+=M*m[2*(e*d+(r+c))+1]}t[2*(e*d+r)+0]=a,t[2*(e*d+r)+1]=o}const n=new Float32Array(m.length);for(let e=0;e<d;e++)for(let r=0;r<_;r++){let a=0,o=0;for(let c=-g;c<=g;c++){if(r+c<0||r+c>=_)continue;const M=x[c+g];a+=M*t[2*((r+c)*d+e)+0],o+=M*t[2*((r+c)*d+e)+1]}n[2*(r*d+e)+0]=a,n[2*(r*d+e)+1]=o}return n}(d.data,d.width,d.height,m.smoothing);return m.interpolate?(y,g)=>{const x=Math.floor(y),l=Math.floor(g);if(x<0||x>=d.width)return[0,0];if(l<0||l>=d.height)return[0,0];const t=y-x,n=g-l,a=x<d.width-1?x+1:x,o=l<d.height-1?l+1:l;return[(_[2*(l*d.width+x)]*(1-n)+_[2*(o*d.width+x)]*n)*(1-t)+(_[2*(l*d.width+a)]*(1-n)+_[2*(o*d.width+a)]*n)*t,(_[2*(l*d.width+x)+1]*(1-n)+_[2*(o*d.width+x)+1]*n)*(1-t)+(_[2*(l*d.width+a)+1]*(1-n)+_[2*(o*d.width+a)+1]*n)*t]}:(y,g)=>{const x=Math.round(y),l=Math.round(g);return x<0||x>=d.width||l<0||l>=d.height?[0,0]:[_[2*(l*d.width+x)+0],_[2*(l*d.width+x)+1]]}}function it(m,d,_,y,g,x,l,t,n){const e=[];let r=_,a=y,o=0,[c,M]=d(r,a);c*=m.velocityScale,M*=m.velocityScale;const w=Math.sqrt(c*c+M*M);let s,u;e.push({x:r,y:a,t:o,speed:w});for(let i=0;i<m.verticesPerLine;i++){let[p,h]=d(r,a);p*=m.velocityScale,h*=m.velocityScale;const f=Math.sqrt(p*p+h*h);if(f<m.minSpeedThreshold)return e;const v=p/f,A=h/f;if(r+=v*m.segmentLength,a+=A*m.segmentLength,o+=m.segmentLength/f,Math.acos(v*s+A*u)>m.maxTurnAngle)return e;if(m.mergeLines){const I=Math.round(r*n),T=Math.round(a*n);if(I<0||I>l-1||T<0||T>t-1)return e;const P=x[T*l+I];if(-1!==P&&P!==g)return e;x[T*l+I]=g}e.push({x:r,y:a,t:o,speed:f}),s=v,u=A}return e}function lt(m,d,_,y){const g=[],x=new N.Z,l=1/Math.max(m.lineCollisionWidth,1),t=Math.round(_*l),n=Math.round(y*l),e=new Int32Array(t*n);for(let a=0;a<e.length;a++)e[a]=-1;const r=[];for(let a=0;a<y;a+=m.lineSpacing)for(let o=0;o<_;o+=m.lineSpacing)r.push({x:o,y:a,sort:x.getFloat()});r.sort((a,o)=>a.sort-o.sort);for(const{x:a,y:o}of r)if(x.getFloat()<m.density){const c=it(m,d,a,o,g.length,e,t,n,l);if(c.length<2)continue;g.push(c)}return g}function ht(m,d){const _=new N.Z,y=m.reduce((n,e)=>n+e.length,0),g=new Float32Array(4*y),x=new Array(m.length);let l=0,t=0;for(const n of m){const e=l;for(const r of n)g[4*l+0]=r.x,g[4*l+1]=r.y,g[4*l+2]=r.t,g[4*l+3]=r.speed,l++;x[t++]={startVertex:e,numberOfVertices:n.length,totalTime:n[n.length-1].t,timeSeed:d?_.getFloat():0}}return{lineVertices:g,lineDescriptors:x}}function ct(m,d=10){const{lineVertices:_,lineDescriptors:y}=m;let g=0,x=0;for(const o of y)g+=2*o.numberOfVertices,x+=6*(o.numberOfVertices-1);const l=new Float32Array(9*g),t=new Uint32Array(x);let n=0,e=0;function a(o,c,M,w,s,u,i,p){const h=9*n;let f=0;l[h+f++]=o,l[h+f++]=c,l[h+f++]=1,l[h+f++]=M,l[h+f++]=u,l[h+f++]=i,l[h+f++]=w/2,l[h+f++]=s/2,l[h+f++]=p,n++,l[h+f++]=o,l[h+f++]=c,l[h+f++]=-1,l[h+f++]=M,l[h+f++]=u,l[h+f++]=i,l[h+f++]=-w/2,l[h+f++]=-s/2,l[h+f++]=p,n++}for(const o of y){const{totalTime:c,timeSeed:M}=o;let w=null,s=null,u=null,i=null,p=null,h=null;for(let f=0;f<o.numberOfVertices;f++){const v=_[4*(o.startVertex+f)+0],A=_[4*(o.startVertex+f)+1],I=_[4*(o.startVertex+f)+2],T=_[4*(o.startVertex+f)+3];let P=null,O=null,k=null,D=null;if(f>0){P=v-w,O=A-s;const L=Math.sqrt(P*P+O*O);if(P/=L,O/=L,f>1){let b=P+p,E=O+h;const U=Math.sqrt(b*b+E*E);b/=U,E/=U;const F=Math.min(1/(b*P+E*O),d);b*=F,E*=F,k=-E,D=b}else k=-O,D=P;null!==k&&null!==D&&(a(w,s,u,k,D,c,M,T),t[e++]=n-2,t[e++]=n,t[e++]=n-1,t[e++]=n,t[e++]=n+1,t[e++]=n-1)}w=v,s=A,u=I,p=P,h=O,i=T}a(w,s,u,-h,p,c,M,i)}return{vertexData:l,indexData:t}}function C(m,d){const _=d.pixels,{width:y,height:g}=d,x=new Float32Array(y*g*2);if("vector-uv"===m)for(let l=0;l<y*g;l++)x[2*l+0]=_[0][l],x[2*l+1]=-_[1][l];else if("vector-magdir"===m)for(let l=0;l<y*g;l++){const t=_[0][l],n=(0,X.Vl)(_[1][l]),e=Math.cos(n-Math.PI/2),r=Math.sin(n-Math.PI/2);x[2*l+0]=e*t,x[2*l+1]=r*t}return{data:x,width:y,height:g}}function G(m,d,_,y,g,x){return tt.apply(this,arguments)}function tt(){return(tt=(0,Q.Z)(function*(m,d,_,y,g,x){const l=(0,K.C5)(d.spatialReference);if(!l)return ot(m,d,_,y,g,x);const[t,n]=l.valid,r=Math.ceil(d.width/(n-t)),a=d.width/r,o=Math.round(_/r);let c=d.xmin;const M=[];for(let i=0;i<r;i++){const p=new J.Z({xmin:c,xmax:c+a,ymin:d.ymin,ymax:d.ymax,spatialReference:d.spatialReference});M.push(ot(m,p,o,y,g,x)),c+=a}const w=yield Promise.all(M),s={data:new Float32Array(_*y*2),width:_,height:y};let u=0;for(const i of w){for(let p=0;p<i.height;p++)for(let h=0;h<i.width;h++)u+h>=_||(s.data[2*(p*_+u+h)+0]=i.data[2*(p*i.width+h)+0],s.data[2*(p*_+u+h)+1]=i.data[2*(p*i.width+h)+1]);u+=i.width}return s})).apply(this,arguments)}function ot(m,d,_,y,g,x){return R.apply(this,arguments)}function R(){return(R=(0,Q.Z)(function*(m,d,_,y,g,x){const l={requestProjectedLocalDirections:!0,signal:x};if((0,S.pC)(g)&&(l.timeExtent=g),"imagery"===m.type){yield m.load({signal:x});const e=m.rasterInfo.dataType,r=yield m.fetchImage(d,_,y,l);return!r||(0,S.Wi)(r.pixelData)||(0,S.Wi)(r.pixelData.pixelBlock)?{data:new Float32Array(_*y*2),width:_,height:y}:C(e,r.pixelData.pixelBlock)}yield m.load({signal:x});const t=m.rasterInfo.dataType,n=yield m.fetchPixels(d,_,y,l);return!n||(0,S.Wi)(n.pixelBlock)?{data:new Float32Array(_*y*2),width:_,height:y}:C(t,n.pixelBlock)})).apply(this,arguments)}}}]);