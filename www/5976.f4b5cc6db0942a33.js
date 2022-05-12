"use strict";var g=Object.defineProperty,y=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,D=(i,r,s)=>r in i?g(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s,v=(i,r)=>{for(var s in r||(r={}))J.call(r,s)&&D(i,s,r[s]);if(P)for(var s of P(r))N.call(r,s)&&D(i,s,r[s]);return i},S=(i,r)=>y(i,C(r));(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5976],{15976:(i,r,s)=>{s.r(r),s.d(r,{default:()=>T});var _=s(15861),m=(s(29132),s(62208)),p=s(98346),l=s(60295),M=s(8614),c=s(77692),d=s(28594),u=s(80355),h=s(46572),B=s(54805),x=s(37084),O=s(2004);class T{convertVectorFieldData(t){const e=l.Z.fromJSON(t.pixelBlock),o=(0,u.KC)(e,t.type);return Promise.resolve((0,m.pC)(o)&&o.toJSON())}decode(t){return(0,_.Z)(function*(){const e=yield(0,M.J)(t.data,t.options);return e&&e.toJSON()})()}symbolize(t){t.pixelBlock=l.Z.fromJSON(t.pixelBlock),t.extent=t.extent?O.Z.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}updateSymbolizer(t){var e=this;return(0,_.Z)(function*(){var o;e.symbolizer=B.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(o=e.symbolizer)?void 0:o.rendererJSON.type)&&(e.symbolizer.rendererJSON.histograms=t.histograms)})()}stretch(t){const e=this.symbolizer.simpleStretch(l.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=(0,c.Hv)(l.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=(0,c.Vl)(l.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((o,n)=>{e.set(n,null==o?void 0:o.toJSON())}),Promise.resolve(e)}mosaicAndTransform(t){return(0,_.Z)(function*(){var e;const o=t.srcPixelBlocks.map(E=>E?new l.Z(E):null),n=(0,c.us)(o,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let a,f=n;return t.coefs&&(f=(0,c.Uk)(n,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(a=(0,c.Qh)(t.destDimension,t.gcsGrid),f=(0,m.Wg)((0,u.xQ)(f,t.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(e=f)?void 0:e.toJSON(),localNorthDirections:a}})()}createStreamlinesMesh(t,e){return(0,_.Z)(function*(){const o={data:new Float32Array(t.flowData.buffer),width:t.flowData.width,height:t.flowData.height},{vertexData:n,indexData:a}=yield(0,x.z_)(t.rendererSettings,o,e.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:a.buffer},transferList:[n.buffer,a.buffer]}})()}getProjectionOffsetGrid(t){return(0,_.Z)(function*(){const e=O.Z.fromJSON(t.projectedExtent),o=O.Z.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationSteps&&(n=new p.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,d.Mk)(e.spatialReference,o.spatialReference,n))&&(yield(0,d.zD)());const a=t.rasterTransform?(0,h.c)(t.rasterTransform):null;return(0,d.Qp)(S(v({},t),{projectedExtent:e,srcBufferExtent:o,datumTransformation:n,rasterTransform:a}))})()}}}}]);