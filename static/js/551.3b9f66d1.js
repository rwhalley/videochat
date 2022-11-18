(self.webpackChunk=self.webpackChunk||[]).push([[551],{6551:(_t,W,M)=>{"use strict";M.r(W),M.d(W,{HMSVirtualBackgroundPlugin:()=>WT});var Z={};M.r(Z),M.d(Z,{assertParamsValid:()=>pr,computeFlatOffset:()=>mr,computeOutShape:()=>Ya,getNormalizedAxes:()=>xp,isSliceContinous:()=>gr,maskToAxes:()=>mp,parseSliceParams:()=>xr,sliceInfo:()=>rc,startForAxis:()=>sc,startIndicesWithElidedDims:()=>ec,stopForAxis:()=>oc,stopIndicesWithElidedDims:()=>tc,stridesForAxis:()=>nc,stridesWithElidedDims:()=>Qa});var G={};M.r(G),M.d(G,{collectGatherOpShapeInfo:()=>gl,computeOutShape:()=>pl,segOpComputeOptimalWindowSize:()=>fl});var ae={};M.r(ae),M.d(ae,{ERF_A1:()=>Gc,ERF_A2:()=>zc,ERF_A3:()=>Hc,ERF_A4:()=>Xc,ERF_A5:()=>qc,ERF_P:()=>Wc,PARALLELIZE_THRESHOLD:()=>Nr,RowPartitionType:()=>mt,SELU_SCALE:()=>Uc,SELU_SCALEALPHA:()=>Vc,applyActivation:()=>Ox,assertAndGetBroadcastShape:()=>ve,assertAxesAreInnerMostDims:()=>pt,assertParamsConsistent:()=>kc,assignToTypedArray:()=>Wx,axesAreInnerMostDims:()=>vr,calculateShapes:()=>Fr,checkEinsumDimSizes:()=>Zc,checkPadOnDimRoundingMode:()=>Cx,combineLocations:()=>Cc,combineRaggedTensorToTensorShapes:()=>Ac,complexWithEvenIndex:()=>Mx,complexWithOddIndex:()=>Vx,computeConv2DInfo:()=>gt,computeConv3DInfo:()=>Yn,computeDefaultPad:()=>Tr,computeDilation2DInfo:()=>Nc,computeOptimalWindowSize:()=>to,computeOutAndReduceShapes:()=>It,computeOutShape:()=>jt,computePool2DInfo:()=>wn,computePool3DInfo:()=>jn,convertConv2DDataFormat:()=>vn,decodeEinsumEquation:()=>Yc,eitherStridesOrDilationsAreOne:()=>yn,expandShapeToKeepDim:()=>Qe,exponent:()=>zx,exponents:()=>Gx,fromStringArrayToUint8:()=>ml,fromUint8ToStringArray:()=>Qt,getAxesPermutation:()=>Ze,getBroadcastDims:()=>fn,getComplexWithIndex:()=>Ux,getEinsumComputePath:()=>Jc,getEinsumPermutation:()=>Qc,getFusedBiasGradient:()=>Fx,getFusedDyActivation:()=>Dx,getImageCenter:()=>Oc,getInnerMostAxes:()=>Je,getPermuted:()=>_r,getRaggedRank:()=>Dc,getReductionAxes:()=>ja,getReshaped:()=>Ar,getReshapedPermuted:()=>Dr,getRowPartitionTypesHelper:()=>_c,getSliceBeginCoords:()=>Pc,getSliceSize:()=>Lc,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>nl,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>sl,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>ol,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>al,getSparseReshapeInputOutputMismatchErrorMessage:()=>ll,getSparseReshapeInputOutputMultipleErrorMessage:()=>cl,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>rl,getSparseReshapeNegativeOutputDimErrorMessage:()=>il,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>hl,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>Pr,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>ul,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>dl,getUndoAxesPermutation:()=>$r,isIdentityPermutation:()=>el,log:()=>of,mergeRealAndImagArrays:()=>Qn,prepareAndValidate:()=>Bc,prepareSplitSize:()=>tl,segment_util:()=>G,shouldFuse:()=>Px,slice_util:()=>Z,splitRealAndImagArrays:()=>Bx,tupleValuesAreOne:()=>kr,upcastType:()=>Ct,validateDefaultValueShape:()=>Fc,validateInput:()=>Lx,validateUpdateShape:()=>Mc,warn:()=>ut});var ce={};M.r(ce),M.d(ce,{addImpl:()=>Pl,bincountImpl:()=>Vb,bincountReduceImpl:()=>Ub,castImpl:()=>Ol,ceilImpl:()=>Bl,concatImpl:()=>Gb,equalImpl:()=>Ml,expImpl:()=>Vl,expm1Impl:()=>Ul,floorImpl:()=>Wl,gatherNdImpl:()=>Kb,gatherV2Impl:()=>jb,greaterEqualImpl:()=>zl,greaterImpl:()=>Gl,lessEqualImpl:()=>Xl,lessImpl:()=>Hl,linSpaceImpl:()=>ew,logImpl:()=>ql,maxImpl:()=>nw,maximumImpl:()=>Kl,minimumImpl:()=>jl,multiplyImpl:()=>jr,negImpl:()=>Yl,notEqualImpl:()=>Ql,prodImpl:()=>eu,raggedGatherImpl:()=>mw,raggedTensorToTensorImpl:()=>xw,rangeImpl:()=>bw,rsqrtImpl:()=>ou,scatterImpl:()=>Cw,sigmoidImpl:()=>yw,simpleAbsImpl:()=>Dl,sliceImpl:()=>ru,sparseFillEmptyRowsImpl:()=>Sw,sparseReshapeImpl:()=>Iw,sparseSegmentReductionImpl:()=>Ew,sqrtImpl:()=>Tw,squaredDifferenceImpl:()=>iu,stridedSliceImpl:()=>Nw,stringNGramsImpl:()=>_w,stringSplitImpl:()=>Fw,stringToHashBucketFastImpl:()=>Ow,subImpl:()=>au,tileImpl:()=>Bw,topKImpl:()=>Mw,transposeImpl:()=>Zl,uniqueImpl:()=>Vw});var j=M(3242),z=M(6422);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue=1e-7,J=1e-4;class ee{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class oe{refCount(e){return O("refCount")}incRef(e){return O("incRef")}timerAvailable(){return!0}time(e){return O("time")}read(e){return O("read")}readSync(e){return O("readSync")}readToGPU(e,n){return O("readToGPU")}numDataIds(){return O("numDataIds")}disposeData(e,n){return O("disposeData")}write(e,n,s){return O("write")}move(e,n,s,o,r){return O("move")}memory(){return O("memory")}floatPrecision(){return O("floatPrecision")}epsilon(){return this.floatPrecision()===32?ue:J}dispose(){return O("dispose")}}function O(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,X(t,e,n)}function q(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,X(t,n,s),X(e,n,s)}function K(t,e,n){return Math.max(t,Math.min(e,n))}function H(t){return t%2===0?t:t+1}function X(t,e,n){const s=t[e];t[e]=t[n],t[n]=s}function re(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function de(t,e){const n=Math.random();return e*n+(1-n)*t}function ge(t,e){let n=0;for(let s=0;s<t.length;s++){const o=Number(t[s])-Number(e[s]);n+=o*o}return n}function E(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function ye(t,e,n=""){E(w(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function lt(t){E(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function pe(t,e=[],n=!1){if(e==null&&(e=[]),Array.isArray(t)||wt(t)&&!n)for(let s=0;s<t.length;++s)pe(t[s],e,n);else e.push(t);return e}function v(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function T(t){return t.length===0}function w(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function P(t){return t%1===0}function Q(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function be(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function we(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return D(e),e}function Ce(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function Fe(t,e=o=>0,n,s=setTimeout){return new Promise((o,r)=>{let i=0;const c=()=>{if(t()){o();return}i++;const a=e(i);if(n!=null&&i>=n){r();return}s(c,a)};c()})}function Xe(t,e){let n=1,s=-1;for(let r=0;r<t.length;++r)if(t[r]>=0)n*=t[r];else if(t[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(t[r]<0)throw Error(`Shapes can not be < 0. Found ${t[r]} at dim ${r}`);if(s===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const o=t.slice();return o[s]=e/n,o}function te(t,e){const n=e.length;return t=t==null?e.map((s,o)=>o):[].concat(t),E(t.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),E(t.every(s=>P(s)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(s=>s<0?n+s:s)}function he(t,e){const n=[],s=[],o=e!=null&&Array.isArray(e)&&e.length===0,r=e==null||o?null:te(e,t).sort();let i=0;for(let c=0;c<t.length;++c){if(r!=null){if(r[i]===c&&t[c]!==1)throw new Error(`Can't squeeze axis ${c} since its dim '${t[c]}' is not 1`);(r[i]==null||r[i]>c)&&t[c]===1&&(n.push(t[c]),s.push(c)),r[i]<=c&&i++}t[c]!==1&&(n.push(t[c]),s.push(c))}return{newShape:n,keptDims:s}}function Se(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else throw new Error(`Unknown data type ${t}`);return n}function ne(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function ze(t,e){for(let n=0;n<t.length;n++){const s=t[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function sn(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function ai(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function wt(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function Ro(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function gd(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function fs(t){return typeof t=="string"||t instanceof String}function md(t){return typeof t=="boolean"}function xd(t){return typeof t=="number"}function ps(t){return Array.isArray(t)?ps(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":xd(t)?"float32":fs(t)?"string":md(t)?"bool":"float32"}function ci(t){return!!(t&&t.constructor&&t.call&&t.apply)}function ko(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function Re(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let s=e-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}function li(t,e,n,s=!1){const o=new Array;if(e.length===1){const r=e[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=n[t+i]}else{const r=e[0],i=e.slice(1),c=i.reduce((a,l)=>a*l)*(s?2:1);for(let a=0;a<r;a++)o[a]=li(t+a*c,i,n,s)}return o}function Bn(t,e,n=!1){if(t.length===0)return e[0];const s=t.reduce((o,r)=>o*r)*(n?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return li(0,t,e,n)}function ui(t,e){const n=Et(t,e);for(let s=0;s<n.length;s++)n[s]=1;return n}function Et(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function zT(t,e){const n=t.reduce((s,o)=>s*o,1);if(e==null||e==="float32")return Bn(t,new Float32Array(n));if(e==="int32")return Bn(t,new Int32Array(n));if(e==="bool")return Bn(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function di(t){t.forEach(e=>{E(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function Mn(t,e,n){if(e===0)return 0;if(e===1)return t[0];let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=n[o]*t[o];return s}function gs(t,e,n){if(e===0)return[];if(e===1)return[t];const s=new Array(e);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(t/n[o]),t-=s[o]*n[o];return s[s.length-1]=t,s}function hi(t){return t&&t.then&&typeof t.then=="function"}var bd=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi="tfjsflags";class wd{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Cd,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,s){if(this.flagRegistry[e]={evaluationFn:n,setHook:s},this.urlFlags[e]!=null){const o=this.urlFlags[e];S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${o}.`),this.set(e,o)}}getAsync(e){return bd(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(hi(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);fi in e&&e[fi].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=vd(o,r)})}}function Cd(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(yd(e,s[0],s[1]),s.join("="))),e}function yd(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function vd(t,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}function S(){return pi}let pi=null;function $d(t){pi=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let No;function gi(){if(No==null){let t;if(typeof window<"u")t=window;else if(typeof M.g<"u")t=M.g;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");No=t}return No}function Sd(){const t=gi();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function Ao(t,e){const n=Sd();if(n.has(t))return n.get(t);{const s=e();return n.set(t,s),n.get(t)}}const _o="Abs",Id="Acos",Ed="Acosh",Vn="Add",Td="AddN",Rd="All",kd="Any",Nd="ArgMax",Ad="ArgMin",_d="Asin",Dd="Asinh",Fd="Atan",Od="Atanh",Pd="Atan2",Ld="AvgPool",Bd="AvgPoolGrad",Md="AvgPool3D",Vd="AvgPool3DGrad",mi="BatchMatMul",Ud="BatchToSpaceND",xi="Bincount",HT="BroadcastTo",Wd="BroadcastArgs",ms="Cast",Do="Ceil",Gd="ClipByValue",Fo="Complex",bi="ComplexAbs",wi="Concat",zd="Conv2D",Hd="Conv2DBackpropFilter",Xd="Conv2DBackpropInput",qd="Conv3D",Kd="Conv3DBackpropFilterV2",jd="Conv3DBackpropInputV2",Yd="Cos",Qd="Cosh",Zd="Cumprod",Jd="Cumsum",Ci="CropAndResize",eh="DenseBincount",th="DepthToSpace",nh="DepthwiseConv2dNative",sh="DepthwiseConv2dNativeBackpropFilter",oh="DepthwiseConv2dNativeBackpropInput",rh="Diag",ih="Dilation2D",XT="Dilation2DBackpropInput",qT="Dilation2DBackpropFilter",yi="RealDiv",ah="Einsum",vi="Elu",ch="EluGrad",lh="Erf",Oo="Equal",xs="Exp",$i="ExpandDims",Po="Expm1",Si="FFT",Ii="Fill",Ei="FlipLeftRight",Lo="Floor",Ti="FloorDiv",uh="FusedBatchNorm",dh="GatherV2",hh="GatherNd",bs="Greater",ws="GreaterEqual",Cs="Identity",Ri="IFFT",ki="Imag",fh="IsFinite",ph="IsInf",gh="IsNan",Ni="LeakyRelu",Bo="Less",ys="LessEqual",mh="LinSpace",vs="Log",Ai="Log1p",_i="LogicalAnd",xh="LogicalNot",bh="LogicalOr",KT="LogicalXor",jT="LogSoftmax",YT="LowerBound",wh="LRN",Ch="LRNGrad",Di="Max",Mo="Maximum",yh="MaxPool",vh="MaxPoolGrad",$h="MaxPool3D",Sh="MaxPool3DGrad",Ih="MaxPoolWithArgmax",Fi="Mean",Oi="Min",$s="Minimum",Eh="MirrorPad",Th="Mod",Rh="Multinomial",Ss="Multiply",Vo="Neg",Is="NotEqual",Pi="NonMaxSuppressionV3",Li="NonMaxSuppressionV4",Bi="NonMaxSuppressionV5",kh="OnesLike",Nh="OneHot",Mi="Pack",Ah="PadV2",QT="Pool",Vi="Pow",Ui="Prelu",Wi="Prod",_h="RaggedGather",Dh="RaggedTensorToTensor",Gi="Range",Uo="Real",Fh="Reciprocal",zi="Relu",Hi="Reshape",Xi="ResizeNearestNeighbor",Oh="ResizeNearestNeighborGrad",qi="ResizeBilinear",Ph="ResizeBilinearGrad",Ki="Relu6",ji="Reverse",Yi="Round",Wo="Rsqrt",Lh="ScatterNd",Bh="SearchSorted",Qi="Select",Mh="Selu",Go="Slice",Vh="Sin",Uh="Sinh",Wh="Sign",Es="Sigmoid",Gh="Softplus",Ts="Sqrt",Zi="Sum",zh="SpaceToBatchND",Ji="SplitV",Hh="Softmax",ea="SparseFillEmptyRows",ta="SparseReshape",na="SparseSegmentMean",sa="SparseSegmentSum",Xh="SparseToDense",Rs="SquaredDifference",qh="Square",Kh="StridedSlice",oa="StringNGrams",ra="StringSplit",ia="StringToHashBucketFast",ks="Sub",jh="Tan",Yh="Tanh",zo="Tile",Qh="TopK",aa="Transform",Un="Transpose",Zh="Unique",ca="Unpack",Jh="UnsortedSegmentSum",ZT="UpperBound",la="ZerosLike",ua="Step",ef="FromPixels",da="RotateWithOffset",tf="_FusedMatMul",nf="FusedConv2D",sf="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ut(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(...t)}function of(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.log(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on=Ao("kernelRegistry",()=>new Map),Wn=Ao("gradRegistry",()=>new Map);function ha(t,e){const n=Xo(t,e);return on.get(n)}function fa(t){return Wn.get(t)}function Ho(t){const e=on.entries(),n=[];for(;;){const{done:s,value:o}=e.next();if(s)break;const[r,i]=o,[c]=r.split("_");c===t&&n.push(i)}return n}function pa(t){const{kernelName:e,backendName:n}=t,s=Xo(e,n);on.has(s)&&ut(`The kernel '${e}' for backend '${n}' is already registered`),on.set(s,t)}function JT(t){const{kernelName:e}=t;Wn.has(e)&&env().getBool("DEBUG")&&log.warn(`Overriding the gradient for '${e}'`),Wn.set(e,t)}function e2(t,e){const n=Xo(t,e);if(!on.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);on.delete(n)}function t2(t){if(!Wn.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Wn.delete(t)}function n2(t,e){Ho(t).forEach(s=>{const o=Object.assign({},s,{backendName:e});pa(o)})}function Xo(t,e){return`${e}_${t}`}var ga=M(3968),rf=M.n(ga);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut=rf()||ga;function Ns(t){return Ut.fromString(t,!0,16)}const ma=Ns("c3a5c85c97cb3127"),Wt=Ns("b492b66fbe98f273"),Pe=Ns("9ae16a3b2f90404f");function qo(t){return t.xor(t.shru(47))}function xa(t,e,n){const s=t.slice(e,e+n);return Ut.fromBytes(Array.from(s),!0,!0)}function me(t,e){return xa(t,e,8)}function ba(t,e){return xa(t,e,4)}function ke(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function Dt(t,e,n=Ns("9ddfea08eb382d69")){let s=t.xor(e).mul(n);s=s.xor(s.shru(47));let o=e.xor(s).mul(n);return o=o.xor(o.shru(47)),o=o.mul(n),o}function af(t,e,n,s,o,r){o=o.add(t),r=ke(r.add(o).add(s),21);const i=o;return o=o.add(e),o=o.add(n),r=r.add(ke(o,44)),[o.add(s),r.add(i)]}function As(t,e,n,s){return af(me(t,e),me(t,e+8),me(t,e+16),me(t,e+24),n,s)}function cf(t,e=t.length){if(e>=8){const n=Pe.add(e*2),s=me(t,0).add(Pe),o=me(t,e-8),r=ke(o,37).mul(n).add(s),i=ke(s,25).add(o).mul(n);return Dt(r,i,n)}if(e>=4){const n=Pe.add(e*2),s=ba(t,0);return Dt(s.shl(3).add(e),ba(t,e-4),n)}if(e>0){const n=t[0],s=t[e>>1],o=t[e-1],r=n+(s<<8),i=e+(o<<2);return qo(Pe.mul(r).xor(ma.mul(i))).mul(Pe)}return Pe}function lf(t,e=t.length){const n=Pe.add(e*2),s=me(t,0).mul(Wt),o=me(t,8),r=me(t,e-8).mul(n),i=me(t,e-16).mul(Pe);return Dt(ke(s.add(o),43).add(ke(r,30)).add(i),s.add(ke(o.add(Pe),18)).add(r),n)}function uf(t,e=t.length){const n=Pe.add(e*2),s=me(t,0).mul(Pe),o=me(t,8),r=me(t,e-8).mul(n),i=me(t,e-16).mul(Pe),c=ke(s.add(o),43).add(ke(r,30)).add(i),a=Dt(c,s.add(ke(o.add(Pe),18)).add(r),n),l=me(t,16).mul(n),u=me(t,24),d=c.add(me(t,e-32)).mul(n),h=a.add(me(t,e-24)).mul(n);return Dt(ke(l.add(u),43).add(ke(d,30)).add(h),l.add(ke(u.add(s),18)).add(d),n)}function df(t,e=t.length){const n=Ut.fromNumber(81,!0);if(e<=32)return e<=16?cf(t,e):lf(t,e);if(e<=64)return uf(t,e);let s=n,o=n.mul(Wt).add(113),r=qo(o.mul(Pe).add(113)).mul(Pe),i=[Ut.UZERO,Ut.UZERO],c=[Ut.UZERO,Ut.UZERO];s=s.mul(Pe).add(me(t,0));let a=0;const l=(e-1>>6)*64,u=l+(e-1&63)-63;do s=ke(s.add(o).add(i[0]).add(me(t,a+8)),37).mul(Wt),o=ke(o.add(i[1]).add(me(t,a+48)),42).mul(Wt),s=s.xor(c[1]),o=o.add(i[0]).add(me(t,a+40)),r=ke(r.add(c[0]),33).mul(Wt),i=As(t,a,i[1].mul(Wt),s.add(c[0])),c=As(t,a+32,r.add(c[1]),o.add(me(t,a+16))),[r,s]=[s,r],a+=64;while(a!==l);const d=Wt.add(r.and(255).shl(1));return a=u,c[0]=c[0].add(e-1&63),i[0]=i[0].add(c[0]),c[0]=c[0].add(i[0]),s=ke(s.add(o).add(i[0]).add(me(t,a+8)),37).mul(d),o=ke(o.add(i[1]).add(me(t,a+48)),42).mul(d),s=s.xor(c[1].mul(9)),o=o.add(i[0].mul(9).add(me(t,a+40))),r=ke(r.add(c[0]),33).mul(d),i=As(t,a,i[1].mul(d),s.add(c[0])),c=As(t,a+32,r.add(c[1]),o.add(me(t,a+16))),[r,s]=[s,r],Dt(Dt(i[0],c[0],d).add(qo(o).mul(ma)).add(r),Dt(i[1],c[1],d).add(s),d)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rn(t,e){return e==="string"?Gt(t):_s([t],e)}function hf(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function _s(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=pe(t)),S().getBool("DEBUG")&&ze(t,e),hf(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let s=0;s<n.length;++s)Math.round(t[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${e}`)}function dt(){return S().platform.now()}function s2(t,e){return S().platform.fetch(t,e)}function Gt(t,e="utf-8"){return e=e||"utf-8",S().platform.encode(t,e)}function an(t,e="utf-8"){return e=e||"utf-8",S().platform.decode(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ff{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new gf)}profileKernel(e,n,s){let o;const r=()=>{o=s()};let i;const c=dt();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const l of o)l.dataSync();i=Promise.resolve({kernelMs:dt()-c})}if(S().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<o.length;l++){const u=o[l];u.data().then(d=>{pf(d,u.dtype,e)})}return{kernelName:e,outputs:o,inputs:n,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:s,timeMs:o,inputs:r,extraInfo:i}=e;s.forEach(c=>{Promise.all([c.data(),o,i]).then(a=>{this.logger.logKernelProfile(n,c,a[0],a[1],r,a[2])})})}}function pf(t,e,n){if(e!=="float32")return!1;for(let s=0;s<t.length;s++){const o=t[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${n}'`),!0}return!1}class gf{logKernelProfile(e,n,s,o,r,i){const c=typeof o=="number"?Ce(`${o}ms`,9):o.error,a=Ce(e,25),l=n.rank,u=n.size,d=Ce(n.shape.toString(),14);let h="";for(const f in r){const p=r[f];if(p!=null){const g=p.shape||n.shape,m=g.length;h+=`${f}: ${m}D ${m>0?g:""} `}}console.log(`%c${a}	%c${c}	%c${l}D ${d}	%c${u}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(t,e,n){const s={},o={};for(let a=0;a<e.length;a++)s[e[a].id]=!0;for(let a=0;a<t.length;a++){const l=t[a],u=l.inputs;for(const d in u){const h=u[d];let f=!1;for(let p=0;p<e.length;p++)if(s[h.id]){l.outputs.forEach(g=>s[g.id]=!0),f=!0,o[l.id]=!0;break}if(f)break}}const r={};r[n.id]=!0;const i={};for(let a=t.length-1;a>=0;a--){const l=t[a],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(r[l.outputs[d].id]){for(const h in u)r[u[h].id]=!0,i[l.id]=!0;break}}const c=[];for(let a=0;a<t.length;a++){const l=t[a];if(o[l.id]&&i[l.id]){const u={};for(const h in l.inputs){const f=l.inputs[h];s[f.id]&&(u[h]=f)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,c.push(d)}}return c}function xf(t,e,n,s){for(let o=e.length-1;o>=0;o--){const r=e[o],i=[];if(r.outputs.forEach(a=>{const l=t[a.id];l!=null?i.push(l):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const c=r.gradient(i);for(const a in r.inputs){if(!(a in c))throw new Error(`Cannot backprop through input ${a}. Available gradients found: ${Object.keys(c)}.`);const l=n(()=>c[a]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${a} must have 'float32' dtype, but has '${l.dtype}'`);const u=r.inputs[a];if(!w(l.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${a}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(t[u.id]==null)t[u.id]=l;else{const d=t[u.id];t[u.id]=s(d,l),d.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wa=20,Gn=3,Ko=7;function bf(t,e,n,s){const o=Re(e),r=wf(t,e,n,o),i=e.length,c=Ds(t,e,n,o,r),a=["Tensor"];return s&&(a.push(`  dtype: ${n}`),a.push(`  rank: ${i}`),a.push(`  shape: [${e}]`),a.push("  values:")),a.push(c.map(l=>"    "+l).join(`
`)),a.join(`
`)}function wf(t,e,n,s){const o=v(e),r=s[s.length-1],i=new Array(r).fill(0),c=e.length,a=n==="complex64"?Hn(t):t;if(c>1)for(let l=0;l<o/r;l++){const u=l*r;for(let d=0;d<r;d++)i[d]=Math.max(i[d],zn(a[u+d],0,n).length)}return i}function zn(t,e,n){let s;return Array.isArray(t)?s=`${parseFloat(t[0].toFixed(Ko))} + ${parseFloat(t[1].toFixed(Ko))}j`:fs(t)?s=`'${t}'`:n==="bool"?s=Ca(t):s=parseFloat(t.toFixed(Ko)).toString(),Ce(s,e)}function Ca(t){return t===0?"false":"true"}function Ds(t,e,n,s,o,r=!0){const i=n==="complex64"?2:1,c=e[0],a=e.length;if(a===0){if(n==="complex64"){const g=Hn(t);return[zn(g[0],0,n)]}return n==="bool"?[Ca(t[0])]:[t[0].toString()]}if(a===1){if(c>wa){const m=Gn*i;let x=Array.from(t.slice(0,m)),b=Array.from(t.slice((c-Gn)*i,c*i));return n==="complex64"&&(x=Hn(x),b=Hn(b)),["["+x.map((C,y)=>zn(C,o[y],n)).join(", ")+", ..., "+b.map((C,y)=>zn(C,o[c-Gn+y],n)).join(", ")+"]"]}const g=n==="complex64"?Hn(t):Array.from(t);return["["+g.map((m,x)=>zn(m,o[x],n)).join(", ")+"]"]}const l=e.slice(1),u=s.slice(1),d=s[0]*i,h=[];if(c>wa){for(let g=0;g<Gn;g++){const m=g*d,x=m+d;h.push(...Ds(t.slice(m,x),l,n,u,o,!1))}h.push("...");for(let g=c-Gn;g<c;g++){const m=g*d,x=m+d;h.push(...Ds(t.slice(m,x),l,n,u,o,g===c-1))}}else for(let g=0;g<c;g++){const m=g*d,x=m+d;h.push(...Ds(t.slice(m,x),l,n,u,o,g===c-1))}const f=a===2?",":"";h[0]="["+h[0]+f;for(let g=1;g<h.length-1;g++)h[g]=" "+h[g]+f;let p=`,
`;for(let g=2;g<a;g++)p+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(r?"":p),h}function Hn(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var Fs=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jo{constructor(e,n,s){if(this.dtype=n,this.shape=e.slice(),this.size=v(e),s!=null){const o=s.length;E(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||ne(n,this.size),this.strides=Re(e)}set(e,...n){n.length===0&&(n=[0]),E(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const o of e){if(o<0||o>=this.shape[n]){const r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(r)}n++}let s=e[e.length-1];for(let o=0;o<e.length-1;++o)s+=this.strides[o]*e[o];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let s=0;s<e.length-1;++s)n+=this.strides[s]*e[s];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(e/this.strides[s]),e-=n[s]*this.strides[s];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return ht().makeTensor(this.values,this.shape,this.dtype)}}let ht=null,cn=null,ya=null;function Cf(t){ht=t}function yf(t){cn=t}function vf(t){ya=t}class st{constructor(e,n,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=v(e),this.strides=Re(e),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return Fs(this,null,function*(){const e=yield this.data();return cn.buffer(this.shape,this.dtype,e)})}bufferSync(){return cn.buffer(this.shape,this.dtype,this.dataSync())}array(){return Fs(this,null,function*(){const e=yield this.data();return Bn(this.shape,e,this.dtype==="complex64")})}arraySync(){return Bn(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return Fs(this,null,function*(){this.throwIfDisposed();const e=ht().read(this.dataId);if(this.dtype==="string"){const n=yield e;try{return n.map(s=>an(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),ht().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=ht().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>an(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return Fs(this,null,function*(){this.throwIfDisposed();const e=yield ht().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(ht().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return cn.print(this,e)}clone(){return this.throwIfDisposed(),cn.clone(this)}toString(e=!1){const n=this.dataSync();return bf(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),cn.cast(this,e)}variable(e=!0,n,s){return this.throwIfDisposed(),ht().makeVariable(this,e,n,s)}}Object.defineProperty(st,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function $f(){return Ao("Tensor",()=>st)}$f();class Yo extends st{constructor(e,n,s,o){super(e.shape,e.dtype,e.dataId,o),this.trainable=n,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!w(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ht().disposeTensor(this),this.dataId=e.dataId,ht().incRef(this,null)}dispose(){ht().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Yo,Symbol.hasInstance,{value:t=>t instanceof st&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var va;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(va||(va={}));var Qo;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(Qo||(Qo={}));var Zo;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Zo||(Zo={}));var Jo;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Jo||(Jo={}));var er;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(er||(er={}));const Sf={float32:Jo,int32:Qo,bool:Zo,complex64:er};function Ct(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return Sf[t][e]}function tr(t){return Ct(t,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ye(t,e){if(t.dtype===e.dtype)return[t,e];const n=Ct(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function o2(t,e){assert(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function r2(t,e){return e.some(n=>n.id===t.id)}function $a(t){const e=[];return Sa(t,e,new Set),e}function Sa(t,e,n){if(t==null)return;if(t instanceof st){e.push(t);return}if(!If(t))return;const s=t;for(const o in s){const r=s[o];n.has(r)||(n.add(r),Sa(r,e,n))}}function If(t){return Array.isArray(t)||typeof t=="object"}var Os=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nr(t){return t.kernelName!=null}class Ia{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ln{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ia}ready(){return Os(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,s=1){return e in this.registryFactory?(ut(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:s},!0)}setBackend(e){return Os(this,null,function*(){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(e);if(!(s?yield n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new ff(this.backendInstance),!0})}setupRegisteredKernels(){Ho(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Ho(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof oe)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,ut(`Initialization of backend ${e} failed`),ut(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return ut(`Initialization of backend ${e} failed`),ut(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const s=this.state.tensorInfo.get(n),o=s.backend,r=this.readSync(n),i=o.refCount(n);o.disposeData(n,!0),s.backend=e,e.move(n,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let s=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=n(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(e,n,s){e();try{const o=s();return n(),o}catch(o){throw n(),o}}nextTensorId(){return ln.nextTensorId++}nextVariableId(){return ln.nextVariableId++}clone(e){const n=_.runKernel(Cs,{x:e}),s={x:e},o=i=>({x:()=>{const c="float32",a={x:i},l={dtype:c};return _.runKernel(ms,a,l)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[n],o,r,{}),n}runKernel(e,n,s){if(this.backendName==null&&this.backend,!(ha(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,s){const o=this.backend.numDataIds();let r=0;s.forEach(a=>{r+=a.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],c=o-n-r-i;if(c>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${c} data ids) after running '${e}'`)}runKernelFunc(e){let n,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let c;this.backendName==null&&this.backend;let a;const l=nr(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(nr(e)){const{kernelName:p,inputs:g,attrs:m}=e;this.backendName==null&&this.backend;const x=ha(p,this.backendName);E(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),c=()=>{const b=this.backend.numDataIds();a=x.kernelFunc({inputs:g,attrs:m,backend:this.backend});const C=Array.isArray(a)?a:[a];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,C);const y=C.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(o){const $=this.getTensorsForGradient(p,g,y);s=this.saveTensorsForBackwardMode($)}return y}}else{const{forwardFunc:p}=e,g=m=>{!o||(s=m.map(x=>this.keep(this.clone(x))))};c=()=>{const m=this.backend.numDataIds();a=this.tidy(()=>p(this.backend,g));const x=Array.isArray(a)?a:[a];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,m,x),x}}const{inputs:u,attrs:d}=e,h=nr(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=c():(f=this.profiler.profileKernel(l,u,()=>c()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),n=f.outputs)}),o&&this.addTapeNode(l,u,n,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(a)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,n,s){const o=fa(e);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let c;o.saveAllInputs?(E(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),c=Object.keys(n).map(l=>n[l])):c=r.map(l=>n[l]);const a=s.filter((l,u)=>i[u]);return c.concat(a)}return[]}makeTensor(e,n,s,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=e;s==="string"&&fs(e[0])&&(r=e.map(a=>Gt(a)));const i=o.write(r,n,s),c=new st(n,s,i,this.nextTensorId());if(this.trackTensor(c,o),s==="string"){const a=this.state.tensorInfo.get(i),l=gd(r);this.state.numBytes+=l-a.bytes,a.bytes=l}return c}makeTensorFromDataId(e,n,s,o){s=s||"float32";const r={dataId:e,shape:n,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(e,n){const{dataId:s,shape:o,dtype:r}=e,i=new st(o,r,s,this.nextTensorId());return this.trackTensor(i,n),i}makeVariable(e,n=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.cast(o));const r=new Yo(e,n,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*Ro(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof Yo||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*Ro(e.dtype);this.state.numBytes-=s}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}profile(e){return Os(this,null,function*(){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=yield o.kernelTimeMs,o.extraInfo=yield o.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,s,o,r,i){const c={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:s,saved:r},a=fa(e);a!=null&&(o=a.gradFunc),o!=null&&(c.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],f=Et(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return u}),o(l.length>1?l:l[0],r,i))),this.state.activeTape.push(c)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=$a(e),s=new Set(n.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(e,n,s,o=!1){if(E(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));E(r instanceof st,()=>"The result y returned by f() must be a tensor.");const i=mf(this.state.activeTape,n,r);if(!o&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const c={};c[r.id]=s??Ef(r.shape),xf(c,i,l=>this.tidy(l),Tf);const a=n.map(l=>c[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:a}})}customGrad(e){return E(ci(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{E(n.every(c=>c instanceof st),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};n.forEach((c,a)=>{o[a]=c});const r=(c,a)=>(s=e(...n,a),E(s.value instanceof st,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(ci(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(c,a)=>{const l=s.gradFunc(c,a),u=Array.isArray(l)?l:[l];E(u.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(u.every(h=>h instanceof st),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,f)=>{d[f]=()=>h}),d};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}time(e){return Os(this,null,function*(){const n=dt(),s=yield this.backend.time(e);return s.wallMs=dt()-n,s})}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ia;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}ln.nextTensorId=0,ln.nextVariableId=0;function Ef(t){const e=ui(v(t),"float32");return _.makeTensor(e,t,"float32")}function Ea(){const t=gi();if(t._tfengine==null){const e=new wd(t);t._tfengine=new ln(e)}return $d(t._tfengine.ENV),Cf(()=>t._tfengine),t._tfengine}const _=Ea();function Tf(t,e){const n={a:t,b:e};return _.runKernel(Vn,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rf(){return typeof navigator<"u"&&navigator!=null}let sr;function i2(t){sr=t}function Ta(t){if(sr!==void 0)return sr;if(t||Rf()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Ra(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qe=S();qe.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),qe.registerFlag("IS_BROWSER",()=>Ra()),qe.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),qe.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),qe.registerFlag("PROD",()=>!1),qe.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>qe.getBool("DEBUG")),qe.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),qe.registerFlag("IS_TEST",()=>!1),qe.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),qe.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),qe.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),qe.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),qe.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a2={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var or=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ps=4;function c2(t,e){return or(this,null,function*(){const n=[],s=[],o=Array.isArray(t)?t.map(i=>i.name):Object.keys(t);for(let i=0;i<o.length;++i){const c=o[i],a=Array.isArray(t)?t[i].tensor:t[c];if(a.dtype!=="float32"&&a.dtype!=="int32"&&a.dtype!=="bool"&&a.dtype!=="string"&&a.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${c}': ${a.dtype}`);const l={name:c,shape:a.shape,dtype:a.dtype};if(a.dtype==="string"){const u=new Promise(d=>or(this,null,function*(){const h=yield a.bytes(),f=h.reduce((m,x)=>m+x.length,0)+Ps*h.length,p=new Uint8Array(f);let g=0;for(let m=0;m<h.length;m++){const x=h[m],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,g),g+=Ps,p.set(x,g),g+=x.length}d(p)}));s.push(u)}else s.push(a.data());e!=null&&(l.group=e),n.push(l)}const r=yield Promise.all(s);return{data:kf(r),specs:n}})}function l2(t,e){const n={};let s,o=0;for(const r of e){const i=r.name,c=r.dtype,a=r.shape,l=sizeFromShape(a);let u;if("quantization"in r){const d=r.quantization;if(d.dtype==="uint8"||d.dtype==="uint16"){if(!("min"in d&&"scale"in d))throw new Error(`Weight ${r.name} with quantization ${d.dtype} doesn't have corresponding metadata min and scale.`)}else if(d.dtype==="float16"){if(c!=="float32")throw new Error(`Weight ${r.name} is quantized with ${d.dtype} which only supports weights of type float32 not ${c}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${d.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const h=DTYPE_VALUE_SIZE_MAP[d.dtype],f=t.slice(o,o+l*h),p=d.dtype==="uint8"?new Uint8Array(f):new Uint16Array(f);if(c==="float32")if(d.dtype==="uint8"||d.dtype==="uint16"){u=new Float32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=m*d.scale+d.min}}else if(d.dtype==="float16")s===void 0&&(s=Mf()),u=s(p);else throw new Error(`Unsupported quantization type ${d.dtype} for weight type float32.`);else if(c==="int32"){if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error(`Unsupported quantization type ${d.dtype} for weight type int32.`);u=new Int32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=Math.round(m*d.scale+d.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${c}`);o+=l*h}else if(c==="string"){const d=sizeFromShape(r.shape);u=[];for(let h=0;h<d;h++){const f=new Uint32Array(t.slice(o,o+Ps))[0];o+=Ps;const p=new Uint8Array(t.slice(o,o+f));u.push(p),o+=f}}else{const d=DTYPE_VALUE_SIZE_MAP[c],h=t.slice(o,o+l*d);if(c==="float32")u=new Float32Array(h);else if(c==="int32")u=new Int32Array(h);else if(c==="bool")u=new Uint8Array(h);else if(c==="complex64"){u=new Float32Array(h);const f=new Float32Array(u.length/2),p=new Float32Array(u.length/2);for(let x=0;x<f.length;x++)f[x]=u[x*2],p[x]=u[x*2+1];const g=tensor(f,a,"float32"),m=tensor(p,a,"float32");n[i]=complex(g,m),g.dispose(),m.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${c}`);o+=l*d}c!=="complex64"&&(n[i]=tensor(u,a,c))}return n}function kf(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(r=>{if(e+=r.byteLength,n.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(e);let o=0;return n.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const rr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ka(t){return rr?Buffer.byteLength(t):new Blob([t]).size}function Nf(t){if(rr)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let s=0,o=e.length;s<o;s++)n+=String.fromCharCode(e[s]);return btoa(n)}function Af(t){if(rr){const s=Buffer.from(t,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let s=0;s<e.length;++s)n.set([e.charCodeAt(s)],s);return n.buffer}function _f(t){if(t.length===1)return t[0];let e=0;t.forEach(o=>{e+=o.byteLength});const n=new Uint8Array(e);let s=0;return t.forEach(o=>{n.set(new Uint8Array(o),s),s+=o.byteLength}),n.buffer}function u2(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function Na(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function Df(t,e,n){const s={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(s.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=e,s.weightData=n}return t.signature!=null&&(s.signature=t.signature),t.userDefinedMetadata!=null&&(s.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(s.modelInitializer=t.modelInitializer),s}function Ff(t,e){return or(this,null,function*(){let n,s;return t.weightsManifest!=null&&([n,s]=yield e(t.weightsManifest)),Df(t,n,s)})}function Ls(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:ka(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:ka(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:t.weightData.byteLength}}function Of(t){const e=[];for(const n of t)e.push(...n.weights);return e}function Pf(){const t=n=>{let s=n<<13,o=0;for(;(s&8388608)===0;)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function Lf(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function Bf(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function Mf(){const t=Pf(),e=Lf(),n=Bf();return s=>{const o=new ArrayBuffer(4*s.length),r=new Uint32Array(o);for(let i=0;i<s.length;i++){const c=s[i],a=t[n[c>>10]+(c&1023)]+e[c>>10];r[i]=a}return new Float32Array(o)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ee{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ee.instance==null&&(Ee.instance=new Ee),Ee.instance}static registerSaveRouter(e){Ee.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Ee.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Ee.getHandlers(e,"save")}static getLoadHandlers(e,n){return Ee.getHandlers(e,"load",n)}static getHandlers(e,n,s){const o=[];return(n==="load"?Ee.getInstance().loadRouters:Ee.getInstance().saveRouters).forEach(i=>{const c=i(e,s);c!==null&&o.push(c)}),o}}const d2=t=>Ee.registerSaveRouter(t),h2=t=>Ee.registerLoadRouter(t),f2=t=>Ee.getSaveHandlers(t),p2=(t,e)=>Ee.getLoadHandlers(t,e);var Xn=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bs="tensorflowjs",ir=1,zt="models_store",Ft="model_info_store";function g2(){return Xn(this,null,function*(){const t=ar();return new Promise((e,n)=>{const s=t.deleteDatabase(Bs);s.onsuccess=()=>e(),s.onerror=o=>n(o)})})}function ar(){if(!S().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function cr(t){const e=t.result;e.createObjectStore(zt,{keyPath:"modelPath"}),e.createObjectStore(Ft,{keyPath:"modelPath"})}class Ht{constructor(e){if(this.indexedDB=ar(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}save(e){return Xn(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)})}load(){return Xn(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(e,n){return new Promise((s,o)=>{const r=this.indexedDB.open(Bs,ir);r.onupgradeneeded=()=>cr(r),r.onsuccess=()=>{const i=r.result;if(n==null){const c=i.transaction(zt,"readonly"),l=c.objectStore(zt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(i.close(),o(l.error)),c.oncomplete=()=>i.close()}else{const c=Ls(n),a=i.transaction(Ft,"readwrite");let l=a.objectStore(Ft);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:c});let d;u.onsuccess=()=>{d=i.transaction(zt,"readwrite");const f=d.objectStore(zt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:c});f.onsuccess=()=>s({modelArtifactsInfo:c}),f.onerror=p=>{l=a.objectStore(Ft);const g=l.delete(this.modelPath);g.onsuccess=()=>(i.close(),o(f.error)),g.onerror=m=>(i.close(),o(f.error))}},u.onerror=h=>(i.close(),o(u.error)),a.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}Ht.URL_SCHEME="indexeddb://";const Aa=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ht.URL_SCHEME)?Vf(t.slice(Ht.URL_SCHEME.length)):null;Ee.registerSaveRouter(Aa),Ee.registerLoadRouter(Aa);function Vf(t){return new Ht(t)}function Uf(t){return t.startsWith(Ht.URL_SCHEME)?t.slice(Ht.URL_SCHEME.length):t}class Wf{constructor(){this.indexedDB=ar()}listModels(){return Xn(this,null,function*(){return new Promise((e,n)=>{const s=this.indexedDB.open(Bs,ir);s.onupgradeneeded=()=>cr(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(Ft,"readonly"),c=r.objectStore(Ft).getAll();c.onsuccess=()=>{const a={};for(const l of c.result)a[l.modelPath]=l.modelArtifactsInfo;e(a)},c.onerror=a=>(o.close(),n(c.error)),r.oncomplete=()=>o.close()},s.onerror=o=>n(s.error)})})}removeModel(e){return Xn(this,null,function*(){return e=Uf(e),new Promise((n,s)=>{const o=this.indexedDB.open(Bs,ir);o.onupgradeneeded=()=>cr(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(Ft,"readwrite"),c=i.objectStore(Ft),a=c.get(e);let l;a.onsuccess=()=>{if(a.result==null)return r.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=c.delete(e),d=()=>{l=r.transaction(zt,"readwrite");const f=l.objectStore(zt).delete(e);f.onsuccess=()=>n(a.result.modelArtifactsInfo),f.onerror=p=>s(a.error)};u.onsuccess=d,u.onerror=h=>(d(),r.close(),s(a.error))}},a.onerror=u=>(r.close(),s(a.error)),i.oncomplete=()=>{l==null?r.close():l.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})})}}var Ms=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yt="/",Xt="tensorflowjs_models",_a="info",Gf="model_topology",zf="weight_specs",Hf="weight_data",Xf="model_metadata";function m2(){if(!env().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");const t=window.localStorage,e=[];for(let n=0;n<t.length;++n){const s=t.key(n),o=Xt+yt;if(s.startsWith(o)&&s.length>o.length){t.removeItem(s);const r=Oa(s);e.indexOf(r)===-1&&e.push(r)}}return e}function Da(t){return{info:[Xt,t,_a].join(yt),topology:[Xt,t,Gf].join(yt),weightSpecs:[Xt,t,zf].join(yt),weightData:[Xt,t,Hf].join(yt),modelMetadata:[Xt,t,Xf].join(yt)}}function Fa(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function Oa(t){const e=t.split(yt);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(yt)}function qf(t){return t.startsWith(qt.URL_SCHEME)?t.slice(qt.URL_SCHEME.length):t}class qt{constructor(e){if(!S().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Da(this.modelPath)}save(e){return Ms(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),o=Ls(e);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Nf(e.weightData));const r={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(r)),{modelArtifactsInfo:o}}catch{throw Fa(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}})}load(){return Ms(this,null,function*(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const c=JSON.parse(r);n.format=c.format,n.generatedBy=c.generatedBy,n.convertedBy=c.convertedBy,c.signature!=null&&(n.signature=c.signature),c.userDefinedMetadata!=null&&(n.userDefinedMetadata=c.userDefinedMetadata),c.modelInitializer!=null&&(n.modelInitializer=c.modelInitializer),c.trainingConfig!=null&&(n.trainingConfig=c.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Af(i),n})}}qt.URL_SCHEME="localstorage://";const Pa=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(qt.URL_SCHEME)?Kf(t.slice(qt.URL_SCHEME.length)):null;Ee.registerSaveRouter(Pa),Ee.registerLoadRouter(Pa);function Kf(t){return new qt(t)}class jf{constructor(){E(S().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),E(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return Ms(this,null,function*(){const e={},n=Xt+yt,s=yt+_a;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(n)&&r.endsWith(s)){const i=Oa(r);e[i]=JSON.parse(this.LS.getItem(r))}}return e})}removeModel(e){return Ms(this,null,function*(){e=qf(e);const n=Da(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(n.info));return Fa(n),s})}}var qn=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const un="://";class Le{constructor(){this.managers={}}static getInstance(){return Le.instance==null&&(Le.instance=new Le),Le.instance}static registerManager(e,n){E(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(un)&&(e=e.slice(0,e.indexOf(un))),E(e.length>0,()=>"scheme must not be an empty string.");const s=Le.getInstance();E(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=n}static getManager(e){const n=Le.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(Le.getInstance().managers)}}function Vs(t){if(t.indexOf(un)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Le.getSchemes().join(",")}`);return{scheme:t.split(un)[0],path:t.split(un)[1]}}function La(t,e,n=!1){return qn(this,null,function*(){assert(t!==e,()=>`Old path and new path are the same: '${t}'`);const s=IORouterRegistry.getLoadHandlers(t);assert(s.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),assert(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${t}.`);const o=s[0],r=IORouterRegistry.getSaveHandlers(e);assert(r.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),assert(r.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${e}.`);const i=r[0],c=Vs(t).scheme,a=Vs(t).path,l=c===Vs(t).scheme,u=yield o.load();n&&l&&(yield Le.getManager(c).removeModel(a));const d=yield i.save(u);return n&&!l&&(yield Le.getManager(c).removeModel(a)),d.modelArtifactsInfo})}function x2(){return qn(this,null,function*(){const t=Le.getSchemes(),e={};for(const n of t){const s=yield Le.getManager(n).listModels();for(const o in s){const r=n+un+o;e[r]=s[o]}}return e})}function b2(t){return qn(this,null,function*(){const e=Vs(t);return Le.getManager(e.scheme).removeModel(e.path)})}function w2(t,e){return qn(this,null,function*(){return La(t,e,!1)})}function C2(t,e){return qn(this,null,function*(){return La(t,e,!0)})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yf{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(!window||!S().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(S().get("IS_BROWSER")){S().setPlatform("browser",new Yf);try{Le.registerManager(qt.URL_SCHEME,new jf)}catch{}try{Le.registerManager(Ht.URL_SCHEME,new Wf)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qf={importFetch:()=>M(613)};let dn;function y2(){dn=null}function v2(t){dn=t}function $2(){return dn}class Zf{constructor(){this.util=M(4240),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return S().global.fetch!=null?S().global.fetch(e,n):(dn==null&&(dn=Qf.importFetch()),dn(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}}S().get("IS_NODE")&&!S().get("IS_BROWSER")&&S().setPlatform("node",new Zf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(t,e="float32",n){return e=e||"float32",di(t),new jo(t,e,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Us(t,e){let n=t;if(wt(t))return e==="string"?[]:[t.length];if(!Array.isArray(t))return[];const s=[];for(;Array.isArray(n)||wt(n)&&e!=="string";)s.push(n.length),n=n[0];return Array.isArray(t)&&S().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ba(t,s,[]),s}function Ba(t,e,n){if(n=n||[],!Array.isArray(t)&&!wt(t)){E(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}E(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),E(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const s=e.slice(1);for(let o=0;o<t.length;++o)Ba(t[o],s,n.concat(o))}function Ma(t,e,n,s){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${t} tensor, but got ${e} tensor`)}}function I(t,e,n,s="numeric"){if(t instanceof st)return Ma(s,t.dtype,e,n),t;let o=ps(t);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),Ma(s,o,e,n),t==null||!wt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const a=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${a}'`)}const r=Us(t,o);!wt(t)&&!Array.isArray(t)&&(t=[t]);const c=o!=="string"?_s(t,o):pe(t,[],!0);return _.makeTensor(c,r,o)}function Va(t,e,n,s="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((r,i)=>I(r,`${e}[${i}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jf="__op";function A(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const s=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Jf;const o=(...r)=>{_.startScope(n);try{const i=s(...r);return hi(i)&&console.error("Cannot return a Promise inside of tidy."),_.endScope(i),i}catch(i){throw _.endScope(null),i}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ep(t,e){const n=I(t,"x","cast");if(!sn(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},o={dtype:e};return _.runKernel(ms,s,o)}const vt=A({cast_:ep});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(t){const n={x:I(t,"x","clone","string_or_numeric")};return _.runKernel(Cs,n)}const hn=A({clone_:tp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ea(),yf({buffer:Ne,cast:vt,clone:hn,print:np});var Ua=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sp="model",op=".json",rp=".weights.bin";function Wa(t){return new Promise(e=>setTimeout(e)).then(t)}class Kt{constructor(e){if(!S().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Kt.URL_SCHEME)&&(e=e.slice(Kt.URL_SCHEME.length)),(e==null||e.length===0)&&(e=sp),this.modelJsonFileName=e+op,this.weightDataFileName=e+rp}save(e){return Ua(this,null,function*(){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o=Na(e,s),r=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,yield Wa(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=n,yield Wa(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Ls(e)}}})}}Kt.URL_SCHEME="downloads://";class ip{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return Ua(this,null,function*(){return new Promise((e,n)=>{const s=new FileReader;s.onload=o=>{const r=JSON.parse(o.target.result),i=r.modelTopology;if(i==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(r.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const a=getModelArtifactsForJSON(r,l=>this.loadWeights(l));e(a)},s.onerror=o=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})})}loadWeights(e){const n=[],s=[];for(const i of e)n.push(...i.weights),s.push(...i.paths);const o=this.checkManifestAndWeightFiles(e),r=s.map(i=>this.loadWeightsFile(i,o[i]));return Promise.all(r).then(i=>[n,concatenateArrayBuffers(i)])}loadWeightsFile(e,n){return new Promise((s,o)=>{const r=new FileReader;r.onload=i=>{const c=i.target.result;s(c)},r.onerror=i=>o(`Failed to weights data from file of path '${e}'.`),r.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],s=this.weightsFiles.map(r=>basename(r.name)),o={};for(const r of e)r.paths.forEach(i=>{const c=basename(i);if(n.indexOf(c)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${c}'`);if(n.push(c),s.indexOf(c)===-1)throw new Error(`Weight file with basename '${c}' is not provided.`);o[i]=this.weightsFiles[s.indexOf(c)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}}const ap=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Kt.URL_SCHEME)?cp(t.slice(Kt.URL_SCHEME.length)):null;Ee.registerSaveRouter(ap);function cp(t="model"){return new Kt(t)}function I2(t){return new ip(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ga(t,e,n,s){i(t),n=n??0,s=s??1,c(n,s);let o=0;const r=a=>(a.then(l=>{const u=n+ ++o/t.length*(s-n);return e(u),l}),a);function i(a){E(a!=null&&Array.isArray(a)&&a.length>0,()=>"promises must be a none empty array")}function c(a,l){E(a>=0&&a<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`),E(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),E(l>=a,()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${l}`)}return Promise.all(t.map(r))}var lr=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function za(t,e){return lr(this,null,function*(){e==null&&(e={});const n=e.fetchFunc==null?S().platform.fetch:e.fetchFunc,s=t.map(d=>n(d,e.requestInit,{isBinary:!0})),o=0,r=.5,c=(e.onProgress==null?yield Promise.all(s):yield Ga(s,e.onProgress,o,r)).map(d=>d.arrayBuffer()),a=.5,l=1;return e.onProgress==null?yield Promise.all(c):yield Ga(c,e.onProgress,a,l)})}function E2(t,e="",n,s){return lr(this,null,function*(){return lp(i=>za(i,{requestInit:s}))(t,e,n)})}function lp(t){return(e,n="",s)=>lr(this,null,function*(){const o=e.map(()=>!1),r={},i=s!=null?s.map(()=>!1):[],c=[];if(e.forEach((f,p)=>{let g=0;f.weights.forEach(m=>{const x="quantization"in m?m.quantization.dtype:m.dtype,b=DTYPE_VALUE_SIZE_MAP[x]*util.sizeFromShape(m.shape),C=()=>{o[p]=!0,r[p]==null&&(r[p]=[]),r[p].push({manifestEntry:m,groupOffset:g,sizeBytes:b})};s!=null?s.forEach((y,$)=>{y===m.name&&(C(),i[$]=!0)}):C(),c.push(m.name),g+=b})}),!i.every(f=>f)){const f=s.filter((p,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${c.join(", ")}.`)}const a=o.reduce((f,p,g)=>(p&&f.push(g),f),[]),l=[];a.forEach(f=>{e[f].paths.forEach(p=>{const g=n+(n.endsWith("/")?"":"/")+p;l.push(g)})});const u=yield t(l),d={};let h=0;return a.forEach(f=>{const p=e[f].paths.length;let g=0;for(let y=0;y<p;y++)g+=u[h+y].byteLength;const m=new ArrayBuffer(g),x=new Uint8Array(m);let b=0;for(let y=0;y<p;y++){const $=new Uint8Array(u[h+y]);x.set($,b),b+=$.byteLength}r[f].forEach(y=>{const $=m.slice(y.groupOffset,y.groupOffset+y.sizeBytes),N=decodeWeights($,[y.manifestEntry]);for(const R in N)d[R]=N[R]}),h+=p}),d})}var ur=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const up="application/octet-stream",dp="application/json";class dr{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(E(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=S().platform.fetch,E(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&E(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}save(e){return ur(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o=Na(e,s);n.body.append("model.json",new Blob([JSON.stringify(o)],{type:dp}),"model.json"),e.weightData!=null&&n.body.append("model.weights.bin",new Blob([e.weightData],{type:up}),"model.weights.bin");const r=yield this.fetch(this.path,n);if(r.ok)return{modelArtifactsInfo:Ls(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)})}load(){return ur(this,null,function*(){const e=yield this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=yield e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=n.modelTopology,o=n.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ff(n,r=>this.loadWeights(r))})}loadWeights(e){return ur(this,null,function*(){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=hp(n),r=this.weightPathPrefix||s,i=Of(e),c=[],a=[];for(const u of e)for(const d of u.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(d)):c.push(r+d+o);this.weightUrlConverter&&c.push(...yield Promise.all(a));const l=yield za(c,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,_f(l)]})}}dr.URL_SCHEME_REGEX=/^https?:\/\//;function hp(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),s=t.substring(0,e),o=n>e?t.substring(n):"";return[s+"/",o]}function Ha(t){return t.match(dr.URL_SCHEME_REGEX)!=null}const Xa=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(s=>Ha(s)):n=Ha(t),n)return qa(t,e)}return null};Ee.registerSaveRouter(Xa),Ee.registerLoadRouter(Xa);function qa(t,e){return new dr(t,e)}function T2(t,e){return qa(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hr{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Ka{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class fp{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function R2(t,e,n,s){const o=arguments;return new fp(pp(...o))}function pp(t,e,n,s){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new hr(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new hr({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new hr({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:s}))}function k2(t){return new Ka(t)}function N2(t){return new Ka(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fn(t,e){const n=t.length,s=[];for(let o=0;o<n;o++){const r=n-1-o,i=t[r]||1;(e[e.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function ja(t,e){const n=[];for(let s=0;s<e.length;s++){const o=t[t.length-s-1],r=e.length-s-1,i=e[r];(o==null||o===1&&i>1)&&n.unshift(r)}return n}function ve(t,e){const n=[],s=Math.max(t.length,e.length);for(let o=0;o<s;o++){let r=t[t.length-o-1];r==null&&(r=1);let i=e[e.length-o-1];if(i==null&&(i=1),r===1)n.unshift(i);else if(i===1)n.unshift(r);else if(r!==i){const c=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(c)}else n.unshift(r)}return n}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fr=-2,gp=-1;function pr(t,e,n){const s=t.shape.length;E(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),E(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)E(e[o]+n[o]<=t.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${e[o]+n[o]}) would overflow input.shape[${o}] (${t.shape[o]})`)}function mp(t){const e=[];let n=0;for(;t>0;)t&1&&e.push(n),t/=2,n++;return e}function Ya(t,e,n){const s=[];for(let o=0;o<t.length;o++)s[o]=Math.ceil((e[o]-t[o])/n[o]);return s}function Qa(t,e,n,s){const o=[...t];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<n;r++)r===0?o[e]=1:(o.splice(e,0,1),o.pop());return o}function Za(t,e,n){return n<=t?n:n-(e-1)}function Ja(t,e){const n=[];for(let s=0;s<t;s++)n.push(e+s);return n}function xp(t,e,n,s,o,r,i,c,a){const l=t.length;let u=new Array(l),d=new Array(l),h=new Array(l);if(e.length&&n>0){const f=e[0],p=n+1;u=ec(i,f,p,s,t),d=tc(c,f,p,o,t),h=Qa(r,f,p,t)}else for(let f=0;f<l;f++)u[f]=sc(i,s,r,t,f,a),d[f]=oc(c,o,r,t,f,a),h[f]=nc(r,f,a);return{begin:u,end:d,strides:h}}function ec(t,e,n,s,o){const r=[...o],i=Ja(n,e);for(let c=0;c<r.length;c++)if(i.indexOf(c)>-1)r[c]=0;else{const a=Za(e,n,c);let l=s[a];t&1<<a&&(l=0),r[c]=l}return r}function tc(t,e,n,s,o){const r=[...o],i=Ja(n,e);for(let c=0;c<r.length;c++)if(i.indexOf(c)>-1)r[c]=Number.MAX_SAFE_INTEGER;else{const a=Za(e,n,c);let l=s[a];t&1<<a&&(l=Number.MAX_SAFE_INTEGER),r[c]=l}for(let c=0;c<r.length;c++){const a=o[c];r[c]<0&&(r[c]+=a),r[c]=K(0,r[c],o[c])}return r}function nc(t,e,n){let s=t[e];return(n&1<<e||s==null)&&(s=1),s}function sc(t,e,n,s,o,r){let i=e[o];const c=n[o]||1;(t&1<<o||r&1<<o||i==null)&&(c>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const a=s[o];return i<0&&(i+=a),i=K(0,i,a-1),i}function oc(t,e,n,s,o,r){let i=e[o];const c=n[o]||1;(t&1<<o||r&1<<o||i==null)&&(c>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const a=s[o];return i<0&&(i+=a),c>0?i=K(0,i,a):i=K(-1,i,a-1),i}function gr(t,e,n){let s=n.length;for(let o=0;o<n.length;o++)if(n[o]>1){s=o;break}for(let o=s+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return!1;return!0}function mr(t,e){let n=t.length>0?t[t.length-1]:1;for(let s=0;s<t.length-1;s++)n+=t[s]*e[s];return n}function xr(t,e,n){let s;const o=t.shape.length;typeof e=="number"?s=[e,...new Array(o-1).fill(0)]:e.length<o?s=e.concat(new Array(o-e.length).fill(0)):s=e.slice(),s.forEach(i=>{E(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return n==null?r=new Array(o).fill(-1):typeof n=="number"?r=[n,...new Array(o-1).fill(-1)]:n.length<o?r=n.concat(new Array(o-n.length).fill(-1)):r=n,r=r.map((i,c)=>i>=0?i:(E(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${c}.`),t.shape[c]-s[c])),[s,r]}function rc(t,e,n,s,o,r,i,c,a){let l;if(s==null?(l=new Array(e.length),l.fill(1)):l=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:n.slice(),strides:l.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:c,shrinkAxisMask:a};for(let C=0;C<d.dims;C++)u&&(1<<C&c)!==0&&d.numAddAxisAfterEllipsis++,1<<C&i&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const h={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};bp(d,h);let f=!0,p=!0,g=!0;const m=[],x=[];for(let C=0;C<t.length;++C){if(h.strides[C]===0)throw Error(`strides[${C}] must be non-zero`);const y=!!(h.shrinkAxisMask&1<<C),$=t[C];if($===-1){m.push(y?1:-1);continue}const N=[h.beginMask&1<<C,h.endMask&1<<C],R=[h.strides[C]>0?0:-1,h.strides[C]>0?$:$-1];if(y&&h.strides[C]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&h.strides[C]===1;const k=!!(h.beginMask&1<<C&&h.endMask&1<<C);if(h.beginValid&&h.endValid){if(y){const ie=h.begin[C]<0?$+h.begin[C]:h.begin[C];if(h.begin[C]=ie,h.end[C]=h.begin[C]+1,ie<0||ie>=$)throw Error(`slice index ${h.begin[C]} of dimension ${C} out of bounds.`)}else h.begin[C]=ic(h.begin[C],0,h.strides[C],$,N,R),h.end[C]=ic(h.end[C],1,h.strides[C],$,N,R);const Y=h.strides[C]===1&&h.begin[C]===0&&h.end[C]===$;f=f&&Y,p=p&&(C===0&&h.strides[C]===1||Y)}else f=f&&h.strides[C]===1&&k,p=p&&(C===0&&h.strides[C]===1||k);let B,U=!1;if(h.beginValid&&h.endValid?(B=h.end[C]-h.begin[C],U=!0):y?(B=1,U=!0):k&&$>=0&&(h.strides[C]<0?B=-$:B=$,U=!0),U){let Y;B===0||B<0!=h.strides[C]<0?Y=0:Y=Math.trunc(B/h.strides[C])+(B%h.strides[C]!==0?1:0),m.push(Y)}else m.push(-1)}for(let C=0;C<h.finalShapeGatherIndices.length;++C){const y=h.finalShapeGatherIndices[C];y>=0?x.push(m[y]):y===fr&&x.push(1)}return{finalShapeSparse:x.filter((C,y)=>h.finalShapeGatherIndices[y]!==fr),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:g,begin:h.begin,end:h.end,strides:h.strides}}function bp(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let n=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<t.dims;s++)if(1<<s&t.ellipsisMask){const o=Math.min(e.dims-(t.dims-s)+1+t.numAddAxisAfterEllipsis,e.dims);for(;n<o;n++)e.begin[n]=0,e.end[n]=0,e.strides[n]=1,e.beginMask|=1<<n,e.endMask|=1<<n,e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&t.newAxisMask)e.finalShapeGatherIndices.push(fr),e.finalShapeGatherIndicesSparse.push(-1);else{if(n===e.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[n]=t.begin[s]),t.end!=null&&(e.end[n]=t.end[s]),e.strides[n]=t.strides[s],t.beginMask&1<<s&&(e.beginMask|=1<<n),t.endMask&1<<s&&(e.endMask|=1<<n),t.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(gp),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<n):(e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[n]=s,n++}}function ic(t,e,n,s,o,r){if(o[e])return n>0?r[e]:r[e+1&1];{const i=t<0?s+t:t;return i<r[0]?r[0]:i>r[1]?r[1]:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(t,e){const s={x:I(t,"x","reshape","string_or_numeric")},o={shape:e};return _.runKernel(Hi,s,o)}const fe=A({reshape_:wp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(t,e){let n=I(t,"broadcastTo","x");const s=n.shape;if(e.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const l=n.shape.slice();for(;l.length<e.length;)l.unshift(1);n=fe(n,l)}const o=n.shape,r=Array.from(e);for(let l=e.length-1;l>=0;l--)if(o[l]===e[l])r[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(r.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return hn(n);const c={x:n},a={reps:r};return _.runKernel(zo,c,a)}const Ws=A({broadcastTo_:Cp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gs(t,e,n,s){if(s==null&&(s=ps(t)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!wt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){di(e);const o=v(e),r=v(n);E(o===r,()=>`Based on the provided shape, [${e}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<n.length;++i){const c=n[i],a=i===n.length-1?c!==v(e.slice(i)):!0;E(n[i]===e[i]||!a,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!wt(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=s!=="string"?_s(t,s):pe(t,[],!0),_.makeTensor(t,e,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Te(t,e){if((wt(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&wt(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Gs(t,[],[],e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(t,e){const n=I(t,"real","complex"),s=I(e,"imag","complex");ye(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:n,imag:s};return _.runKernel(Fo,o)}const pn=A({complex_:yp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gn(t,e="float32"){if(e==="complex64"){const s=gn(t,"float32"),o=gn(t,"float32");return pn(s,o)}const n=Et(v(t),e);return _.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vp(t,e=0){E(t.length>=1,()=>"Pass at least one tensor to concat");const n=Va(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),n.length===1)return hn(n[0]);const s=n,o={axis:e};return _.runKernel(wi,s,o)}const Ot=A({concat_:vp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(t){const n={input:I(t,"input","imag")};return _.runKernel(ki,n)}const br=A({imag_:$p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(t){const n={input:I(t,"input","real")};return _.runKernel(Uo,n)}const zs=A({real_:Sp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(t,e,n){const s=I(t,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:e,size:n};return _.runKernel(Go,o,r)}const Be=A({slice_:Ip});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(t,e,n=0){const o={x:I(t,"x","split")},r={numOrSizeSplits:e,axis:n};return _.runKernel(Ji,o,r)}const Hs=A({split_:Ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(t){const n={x:I(t,"x","zerosLike")};return _.runKernel(la,n)}const Rp=A({zerosLike_:Tp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(t){E(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return _.runKernel(Si,e)}const ac=A({fft_:kp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(t,e){E(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const s=t.size/n;let o;if(e!=null&&e<n){const p=t.shape.map(m=>0),g=t.shape.map(m=>m);g[t.shape.length-1]=e,o=Be(t,p,g),n=e}else if(e!=null&&e>n){const p=t.shape.map(g=>g);p[t.shape.length-1]=e-n,o=Ot([t,gn(p)],t.shape.length-1),n=e}else o=t;const r=Rp(o),i=fe(pn(o,r),[s,n]),c=ac(i),a=Math.floor(n/2)+1,l=zs(c),u=br(c),d=Hs(l,[a,n-a],l.shape.length-1),h=Hs(u,[a,n-a],u.shape.length-1),f=o.shape.slice();return f[o.shape.length-1]=a,fe(pn(d[0],h[0]),f)}const cc=A({rfft_:Np});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(t){E(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return _.runKernel(Ri,e)}const wr=A({ifft_:Ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(t,e){let n=I(t,"a","mul"),s=I(e,"b","mul");[n,s]=Ye(n,s);const o={a:n,b:s};return _.runKernel(Ss,o)}const le=A({mul_:_p});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dp(t,e){const s={x:I(t,"x","reverse")},o={dims:e};return _.runKernel(ji,s,o)}const lc=A({reverse_:Dp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(t){const e=t.shape[t.shape.length-1],n=t.size/e;let s;if(e<=2){const o=fe(t,[n,e]);s=wr(o)}else{const o=[n,2*(e-1)],r=fe(zs(t),[n,e]),i=fe(br(t),[n,e]),c=lc(Be(r,[0,1],[n,e-2]),1),a=le(lc(Be(i,[0,1],[n,e-2]),1),Te(-1)),l=Ot([r,c],1),u=Ot([i,a],1),d=fe(pn(l,u),[o[0],o[1]]);s=wr(d)}if(s=zs(s),t.rank===3&&t.shape[0]!==0){const o=s,r=t.shape[0];s=fe(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const Op=A({irfft_:Fp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $t(t,e){lt(t);const n=Us(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Gs(t,null,n,e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function uc(t,e,n){const s=1-t%2,o=new Float32Array(t);for(let r=0;r<t;++r){const i=2*Math.PI*r/(t+s-1);o[r]=e-n*Math.cos(i)}return $t(o,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(t){return uc(t,.54,.46)}const Bp=A({hammingWindow_:Lp});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(t){return uc(t,.5,.5)}const dc=A({hannWindow_:Mp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hc(t,e,n){const s={shape:t,value:e,dtype:n};return _.runKernel(Ii,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xs(t,e,n){if(lt(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Us(t,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Gs(t,e,s,n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(t,e,n,s=!1,o=0){let r=0;const i=[];for(;r+e<=t.size;)i.push(Be(t,r,e)),r+=n;if(s)for(;r<t.size;){const c=r+e-t.size,a=Ot([Be(t,r,e-c),hc([c],o)]);i.push(a),r+=n}return i.length===0?Xs([],[0,e]):fe(Ot(i),[i.length,e])}const fc=A({frame_:Vp});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(t,e,n,s,o=dc){s==null&&(s=Pp(e));const r=fc(t,e,n),i=le(r,o(e));return cc(i,s)}const Wp=A({stft_:Up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(t,e,n,s,o="bilinear",r=0){const i=I(t,"image","cropAndResize"),c=I(e,"boxes","cropAndResize","float32"),a=I(n,"boxInd","cropAndResize","int32"),l=c.shape[0];E(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),E(c.rank===2&&c.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${c.shape}.`),E(a.rank===1&&a.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${c.shape}.`),E(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),E(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),E(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:c,boxInd:a},d={method:o,extrapolationValue:r,cropSize:s};return _.runKernel(Ci,u,d)}const zp=A({cropAndResize_:Gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(t){const e=I(t,"image","flipLeftRight","float32");E(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return _.runKernel(Ei,n,{})}const Xp=A({flipLeftRight_:Hp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qp(t,e){const n=I(t,"x","tile","string_or_numeric");E(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const s={x:n},o={reps:e};return _.runKernel(zo,s,o)}const qs=A({tile_:qp});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kp(t){const e=I(t,"image","grayscaleToRGB"),n=e.rank-1,s=e.shape[n];E(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),E(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(e.rank);return o.fill(1,0,n),o[n]=3,qs(e,o)}const jp=A({grayscaleToRGB_:Kp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yp(t,e,n=0,s=.5){const o=I(t,"image","rotateWithOffset","float32");E(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:e,fillValue:n,center:s};return _.runKernel(da,r,i)}const Qp=A({rotateWithOffset_:Yp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mn(t,e,n,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=t.shape[0];return n=Math.min(n,i),E(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),E(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),E(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),E(e.rank===1,()=>"scores must be a 1D tensor"),E(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),E(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(t,e,n,s=.5,o=Number.NEGATIVE_INFINITY){const r=I(t,"boxes","nonMaxSuppression","float32"),i=I(e,"scores","nonMaxSuppression","float32"),c=mn(r,i,n,s,o);n=c.maxOutputSize,s=c.iouThreshold,o=c.scoreThreshold;const a={maxOutputSize:n,iouThreshold:s,scoreThreshold:o};return _.runKernel(Pi,{boxes:r,scores:i},a)}const Jp=A({nonMaxSuppression_:Zp});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(t,e,n){const s=tg(t,e,n),o=s<0?-(s+1):s;t.splice(o,0,e)}function tg(t,e,n){return sg(t,e,n||ng)}function ng(t,e){return t>e?1:t<e?-1:0}function sg(t,e,n){let s=0,o=t.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const c=n(e,t[r]);c>0?s=r+1:(o=r,i=!c)}return i?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pc(t,e,n,s,o){return Cr(t,e,n,s,o,0)}function gc(t,e,n,s,o,r){return Cr(t,e,n,s,o,0,!1,r,!0)}function mc(t,e,n,s,o,r){return Cr(t,e,n,s,o,r,!0)}function Cr(t,e,n,s,o,r,i=!1,c=!1,a=!1){const l=[];for(let m=0;m<e.length;m++)e[m]>o&&l.push({score:e[m],boxIndex:m,suppressBeginIndex:0});l.sort(xc);const u=r>0?-.5/r:0,d=[],h=[];for(;d.length<n&&l.length>0;){const m=l.pop(),{score:x,boxIndex:b,suppressBeginIndex:C}=m;if(x<o)break;let y=!1;for(let $=d.length-1;$>=C;--$){const N=og(t,b,d[$]);if(N>=s){y=!0;break}if(m.score=m.score*rg(s,u,N),m.score<=o)break}m.suppressBeginIndex=d.length,y||(m.score===x?(d.push(b),h.push(m.score)):m.score>o&&eg(l,m,xc))}const f=d.length,p=n-f;c&&p>0&&(d.push(...new Array(p).fill(0)),h.push(...new Array(p).fill(0)));const g={selectedIndices:d};return i&&(g.selectedScores=h),a&&(g.validOutputs=f),g}function og(t,e,n){const s=t.subarray(e*4,e*4+4),o=t.subarray(n*4,n*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),c=Math.max(s[0],s[2]),a=Math.max(s[1],s[3]),l=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),d=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),f=(c-r)*(a-i),p=(d-l)*(h-u);if(f<=0||p<=0)return 0;const g=Math.max(r,l),m=Math.max(i,u),x=Math.min(c,d),b=Math.min(a,h),C=Math.max(x-g,0)*Math.max(b-m,0);return C/(f+p-C)}function rg(t,e,n){const s=Math.exp(e*n*n);return n<=t?s:0}function xc(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}var ig=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(t,e,n){return ig(this,arguments,function*(s,o,r,i=.5,c=Number.NEGATIVE_INFINITY){const a=I(s,"boxes","nonMaxSuppressionAsync"),l=I(o,"scores","nonMaxSuppressionAsync"),u=mn(a,l,r,i,c);r=u.maxOutputSize,i=u.iouThreshold,c=u.scoreThreshold;const d=yield Promise.all([a.data(),l.data()]),h=d[0],f=d[1],{selectedIndices:p}=pc(h,f,r,i,c);return a!==s&&a.dispose(),l!==o&&l.dispose(),$t(p,"int32")})}const cg=ag;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(t,e,n,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=I(t,"boxes","nonMaxSuppression"),c=I(e,"scores","nonMaxSuppression"),a=mn(i,c,n,s,o,r);n=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold,r=a.softNmsSigma;const l={boxes:i,scores:c},u={maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},d=_.runKernel(Bi,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}const ug=A({nonMaxSuppressionWithScore_:lg});var dg=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(t,e,n){return dg(this,arguments,function*(s,o,r,i=.5,c=Number.NEGATIVE_INFINITY,a=0){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(o,"scores","nonMaxSuppressionAsync"),d=mn(l,u,r,i,c,a);r=d.maxOutputSize,i=d.iouThreshold,c=d.scoreThreshold,a=d.softNmsSigma;const h=yield Promise.all([l.data(),u.data()]),f=h[0],p=h[1],{selectedIndices:g,selectedScores:m}=mc(f,p,r,i,c,a);return l!==s&&l.dispose(),u!==o&&u.dispose(),{selectedIndices:$t(g,"int32"),selectedScores:$t(m)}})}const fg=hg;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pg(t,e,n,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=I(t,"boxes","nonMaxSuppression"),c=I(e,"scores","nonMaxSuppression"),a=mn(i,c,n,s,o,null),l=a.maxOutputSize,u=a.iouThreshold,d=a.scoreThreshold,h={boxes:i,scores:c},f={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:r},p=_.runKernel(Li,h,f);return{selectedIndices:p[0],validOutputs:p[1]}}const gg=A({nonMaxSuppressionPadded_:pg});var mg=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(t,e,n){return mg(this,arguments,function*(s,o,r,i=.5,c=Number.NEGATIVE_INFINITY,a=!1){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(o,"scores","nonMaxSuppressionAsync"),d=mn(l,u,r,i,c,null),h=d.maxOutputSize,f=d.iouThreshold,p=d.scoreThreshold,[g,m]=yield Promise.all([l.data(),u.data()]),{selectedIndices:x,validOutputs:b}=gc(g,m,h,f,p,a);return l!==s&&l.dispose(),u!==o&&u.dispose(),{selectedIndices:$t(x,"int32"),validOutputs:Te(b,"int32")}})}const bg=xg;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(t,e,n=!1,s=!1){const o=I(t,"images","resizeBilinear");E(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),E(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),E(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=fe(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const[]=e,c={images:r},a={alignCorners:n,halfPixelCenters:s,size:e},l=_.runKernel(qi,c,a);return i?fe(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Cg=A({resizeBilinear_:wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(t,e,n=!1,s=!1){const o=I(t,"images","resizeNearestNeighbor");E(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),E(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),E(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),E(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=fe(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const[]=e,c={images:r},a={alignCorners:n,halfPixelCenters:s,size:e},l=_.runKernel(Xi,c,a);return i?fe(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const vg=A({resizeNearestNeighbor_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(t,e,n){const s=I(t,"x","bincount"),o=I(e,"weights","bincount");E(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),E(n>=0,()=>`size must be non-negative, but got ${n}.`),E(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:n};return _.runKernel(xi,r,i)}const Sg=A({bincount_:$g});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(t,e){let n=I(t,"a","lessEqual","string_or_numeric"),s=I(e,"b","lessEqual","string_or_numeric");[n,s]=Ye(n,s),ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel(ys,o)}const bc=A({lessEqual_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(t,e){let n=I(t,"a","greater","string_or_numeric"),s=I(e,"b","greater","string_or_numeric");[n,s]=Ye(n,s),ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel(bs,o)}const yr=A({greater_:Eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(t,e=null,n=!1){let s=I(t,"x","sum");s.dtype==="bool"&&(s=vt(s,"int32"));const o={x:s},r={axis:e,keepDims:n};return _.runKernel(Zi,o,r)}const Ie=A({sum_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rg(t,e){let n=I(t,"a","add"),s=I(e,"b","add");[n,s]=Ye(n,s);const o={a:n,b:s};return _.runKernel(Vn,o)}const St=A({add_:Rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(t,e){let n=I(t,"a","floorDiv"),s=I(e,"b","floorDiv");[n,s]=Ye(n,s);const o={a:n,b:s};return _.runKernel(Ti,o)}const Ng=A({floorDiv_:kg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(t,e){let n=I(t,"a","div"),s=I(e,"b","div");if([n,s]=Ye(n,s),n.dtype==="int32"&&s.dtype==="int32")return Ng(n,s);const o={a:n,b:s},r={};return _.runKernel(yi,o,r)}const ot=A({div_:Ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(t,e){let n=I(t,"a","sub"),s=I(e,"b","sub");[n,s]=Ye(n,s);const o={a:n,b:s};return _.runKernel(ks,o)}const $e=A({sub_:_g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(t){const n={x:I(t,"x","round")};return _.runKernel(Yi,n)}const Fg=A({round_:Dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Og(t,e,n){const s=I(e,"a","where"),o=I(n,"b","where"),r=I(t,"condition","where","bool"),i=ve(ve(r.shape,s.shape),o.shape),c=Ws(r,i),a=Ws(s,i),l=Ws(o,i),u={condition:c,t:a,e:l};return _.runKernel(Qi,u)}const Ks=A({where_:Og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function js(t,e,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const o={start:t,stop:e,step:n,dtype:s};return _.runKernel(Gi,{},o)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(t,e,n){const s=Us(t,n);return Gs(t,e,s,n)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lg(t,e="binary",n=!1,s=.5){const o=I(t,"image","threshold"),r=.2989,i=.587,c=.114,a=o.shape[0]*o.shape[1];let l=le($t([s]),255),u,d,h,f;if(E(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),E(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),E(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),E(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),o.shape[2]===3){[u,d,h]=Hs(o,[1,1,1],-1);const m=le(u,r),x=le(d,i),b=le(h,c);f=St(St(m,x),b)}else f=t;if(e==="otsu"){const m=Sg(vt(Fg(f),"int32"),Pg([]),256);l=Bg(m,a)}const p=n?bc(f,l):yr(f,l);return vt(le(p,255),"int32")}function Bg(t,e){let n=$t([-1]),s=$t([0]),o=$t([0]),r,i,c,a,l,u;for(let d=0;d<t.size-1;d++){r=Be(t,0,d+1),i=Be(t,d+1),l=ot(Ie(r),e),u=ot(Ie(i),e);const h=Ie(le(r,js(0,r.size)));c=ot(h,Ie(r));const f=hc(i.shape,r.size),p=St(js(0,i.size),f),g=le(i,p);a=ot(Ie(g),Ie(i));const m=$e(c,a),x=$e(c,a),b=le(l,u);o=le(le(b,m),x);const C=yr(o,s);s=Ks(C,o,s),n=Ks(C,$t([d]),n)}return n}const Mg=A({threshold_:Lg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(t,e,n="nearest",s="constant",o=0,r){const i=I(t,"image","transform","float32"),c=I(e,"transforms","transform","float32");E(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),E(c.rank===2&&(c.shape[0]===i.shape[0]||c.shape[0]===1)&&c.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),E(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const a={image:i,transforms:c},l={interpolation:n,fillMode:s,fillValue:o,outputShape:r};return _.runKernel(aa,a,l)}const Ug=A({transform_:Vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(t,e){let n=I(t,"a","greaterEqual","string_or_numeric"),s=I(e,"b","greaterEqual","string_or_numeric");[n,s]=Ye(n,s),ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel(ws,o)}const Gg=A({greaterEqual_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(t,e){const n=I(t,"a","logicalAnd","bool"),s=I(e,"b","logicalAnd","bool");ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel(_i,o)}const Hg=A({logicalAnd_:zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(t,e=0){const n=Va(t,"tensors","stack","string_or_numeric");E(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&E(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,o={axis:e};return _.runKernel(Mi,s,o)}const Ys=A({stack_:Xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(t,e=0){const n=I(t,"x","unstack","string_or_numeric");E(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},o={axis:e};return _.runKernel(ca,s,o)}const wc=A({unstack_:qg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kg(t,e,n){E(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),E(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const s=I(t,"a","bandPart");E(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);if(!(e<=r))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${r}).`);if(!(n<=i))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${i}).`);e<0&&(e=r),n<0&&(n=i);const c=fe(js(0,r,1,"int32"),[-1,1]),a=js(0,i,1,"int32"),l=$e(c,a),u=Hg(bc(l,Te(+e,"int32")),Gg(l,Te(-n,"int32"))),d=gn([r,i],s.dtype);return fe(Ys(wc(fe(s,[-1,r,i])).map(h=>Ks(u,h,d))),o)}const jg=A({bandPart_:Kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yg(t){const e=I(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return _.runKernel(bi,n)}else{const n={x:e};return _.runKernel(_o,n)}}const ft=A({abs_:Yg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vr(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function Cc(t,e,n){const s=t.length+e.length,o=[];let r=0,i=0;for(let c=0;c<s;c++)n.indexOf(c)===-1?o.push(t[r++]):o.push(e[i++]);return o}function It(t,e){const n=[],s=t.length;for(let r=0;r<s;r++)e.indexOf(r)===-1&&n.push(t[r]);const o=e.map(r=>t[r]);return[n,o]}function Qe(t,e){const n=e.map(s=>1);return Cc(t,n,e)}function pt(t,e,n){E(vr(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function Ze(t,e){if(vr(t,e))return null;const n=[];for(let s=0;s<e;++s)t.indexOf(s)===-1&&n.push(s);return t.forEach(s=>n.push(s)),n}function $r(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function Je(t,e){const n=[];for(let s=e-t;s<e;++s)n.push(s);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(t,e=null,n=!1){const o={x:I(t,"x","max")},r={reductionIndices:e,keepDims:n};return _.runKernel(Di,o,r)}const Qs=A({max_:Qg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(t,e=null,n=!1){const o={x:I(t,"x","min")},r={axis:e,keepDims:n};return _.runKernel(Oi,o,r)}const yc=A({min_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(t,e){let n=I(t,"base","pow"),s=I(e,"exp","pow");[n,s]=Ye(n,s);const o={a:n,b:s};return _.runKernel(Vi,o)}const em=A({pow_:Jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(t){const n={x:I(t,"x","sqrt","float32")};return _.runKernel(Ts,n)}const vc=A({sqrt_:tm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(t){const e=I(t,"x","square"),n={};return _.runKernel("Square",{x:e},n)}const $c=A({square_:nm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sm(t,e="euclidean",n=null,s=!1){t=I(t,"x","norm");const o=Sc(t,e,n);let r=o.shape;if(s){const i=te(n,t.shape);r=Qe(o.shape,i)}return fe(o,r)}function Sc(t,e,n=null){if(t.rank===0)return ft(t);if(t.rank!==1&&n===null)return Sc(fe(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return Ie(ft(t),n);if(e===1/0)return Qs(ft(t),n);if(e===-1/0)return yc(ft(t),n);if(e==="euclidean"||e===2)return vc(Ie(em(ft(t),Te(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Qs(Ie(ft(t),n[0]),n[1]-1);if(e===1/0)return Qs(Ie(ft(t),n[1]),n[0]);if(e===-1/0)return yc(Ie(ft(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return vc(Ie($c(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Ic=A({norm_:sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(t,e){const n=I(t,"x","squeeze","string_or_numeric");return fe(n,he(n.shape,e).newShape)}const rm=A({squeeze_:om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(t){let e;if(Array.isArray(t)){e=!1,E(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=t[0].shape[0];for(let r=1;r<t.length;++r)E(t[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[r].shape[0]} vs. ${o})`)}else e=!0,t=Hs(t,t.shape[0],0).map(o=>rm(o,[0]));E(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],s=t;for(let o=0;o<t.length;++o)n.push(_.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const c=le(Ie(le(n[i],r)),n[i]);r=$e(r,c)}return ot(r,Ic(r,"euclidean"))}));return e?Ys(n,0):n}const am=A({gramSchmidt_:im});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A2(){env().set("PROD",!0)}function _2(){env().set("DEBUG",!0)}function D2(){env().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function cm(t){S().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}vf(cm);function F2(){ENGINE.disposeVariables()}function xn(){return _}function O2(){return ENGINE.memory()}function P2(t){return ENGINE.profile(t)}function Sr(t,e){return _.tidy(t,e)}function lm(t){$a(t).forEach(n=>n.dispose())}function L2(t){return ENGINE.keep(t)}function B2(t){return ENGINE.time(t)}function M2(t){return ENGINE.setBackend(t)}function V2(){return ENGINE.ready()}function U2(){return ENGINE.backendName}function W2(t){ENGINE.removeBackend(t)}function G2(t){return ENGINE.findBackend(t)}function z2(t){return ENGINE.findBackendFactory(t)}function um(t,e,n=1){return _.registerBackend(t,e,n)}function H2(){return ENGINE.backend}function X2(t,e){env().setPlatform(t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(t,e=0){const n=I(t,"x","expandDims","string_or_numeric");E(e<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},o={dim:e};return _.runKernel($i,s,o)}const bn=A({expandDims_:dm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(t,e,n,s="float32"){e==null&&(e=t);const o=Ne([t,e],s),r=t<=e?t:e;for(let c=0;c<r;++c)o.set(1,c,c);const i=fe(o.toTensor(),[t,e]);if(n==null)return i;if(n.length===1)return qs(bn(i,0),[n[0],1,1]);if(n.length===2)return qs(bn(bn(i,0),0),[n[0],n[1],1,1]);if(n.length===3)return qs(bn(bn(bn(i,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const fm=A({eye_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pm(t,e,n=!1,s=!1){let o=I(t,"a","matMul"),r=I(e,"b","matMul");[o,r]=Ye(o,r);const i={a:o,b:r},c={transposeA:n,transposeB:s};return _.runKernel(mi,i,c)}const Tt=A({matMul_:pm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gm(t){const n={x:I(t,"x","neg")};return _.runKernel(Vo,n)}const Kn=A({neg_:gm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(t,e,n){const s=I(t,"x","transpose");if(e==null&&(e=s.shape.map((i,c)=>c).reverse()),E(s.rank===e.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${e}.`),e.forEach(i=>{E(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${e}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:e};return s.dtype==="complex64"?Sr(()=>{let i=zs(s),c=br(s);return i=_.runKernel(Un,{x:i},r),c=_.runKernel(Un,{x:c},r),n&&(c=Kn(c)),pn(i,c)}):_.runKernel(Un,o,r)}const Ec=A({transpose_:mm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(t,e=!1){if(E(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return Tc(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((a,l)=>a*l),s=wc(fe(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],r=[];s.forEach(a=>{const[l,u]=Tc(a,e);o.push(l),r.push(u)});const i=fe(Ys(o,0),t.shape),c=fe(Ys(r,0),t.shape);return[i,c]}}function Tc(t,e=!1){return _.tidy(()=>{E(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],s=t.shape[1];let o=fm(n),r=hn(t);const i=Xs([[1]],[1,1]);let c=hn(i);const a=n>=s?s:n;for(let l=0;l<a;++l){const u=r,d=c,h=o;[c,r,o]=_.tidy(()=>{const f=Be(r,[l,l],[n-l,1]),p=Ic(f),g=Be(r,[l,l],[1,1]),m=Ks(yr(g,0),Xs([[-1]]),Xs([[1]])),x=$e(g,le(m,p)),b=ot(f,x);b.shape[0]===1?c=hn(i):c=Ot([i,Be(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const C=Kn(ot(Tt(m,x),p)),y=Be(r,[l,0],[n-l,s]),$=le(C,c),N=Ec(c);if(l===0)r=$e(y,Tt($,Tt(N,y)));else{const B=$e(y,Tt($,Tt(N,y)));r=Ot([Be(r,[0,0],[l,s]),B],0)}const R=Ec($),k=Be(o,[0,l],[n,o.shape[1]-l]);if(l===0)o=$e(k,Tt(Tt(k,c),R));else{const B=$e(k,Tt(Tt(k,c),R));o=Ot([Be(o,[0,0],[n,l]),B],1)}return[c,r,o]}),lm([u,d,h])}return!e&&n>s&&(o=Be(o,[0,0],[n,s]),r=Be(r,[0,0],[s,s])),[o,r]})}const bm=A({qr_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var He;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(He||(He={}));/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(t,e=null,n=!1){const o={x:I(t,"x","mean")},r={axis:e,keepDims:n};return _.runKernel(Fi,o,r)}const Cm=A({mean_:wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(t,e){let n=I(t,"a","notEqual","string_or_numeric"),s=I(e,"b","notEqual","string_or_numeric");[n,s]=Ye(n,s),ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel(Is,o)}const vm=A({notEqual_:ym});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rc(t,e="float32"){if(e==="complex64"){const s=Rc(t,"float32"),o=gn(t,"float32");return pn(s,o)}const n=ui(v(t),e);return _.makeTensor(n,t,e)}function $m(t,e,n=He.SUM_BY_NONZERO_WEIGHTS){const s=I(t,"losses","computeWeightedLoss");let o=null;e!=null&&(o=I(e,"weights","computeWeightedLoss"));const r=o==null?s:le(s,o);if(n===He.NONE)return r;if(n===He.SUM)return Ie(r);if(n===He.MEAN){if(o==null)return Cm(r);{const i=s.size/o.size,c=ot(Ie(r),Ie(o));return i>1?ot(c,Te(i)):c}}if(n===He.SUM_BY_NONZERO_WEIGHTS){if(o==null)return ot(Ie(r),Te(s.size));{const i=le(o,Rc(s.shape)),c=vt(Ie(vm(i,Te(0))),"float32");return ot(Ie(r),c)}}throw Error(`Unknown reduction: ${n}`)}const Rt=A({computeWeightedLoss_:$m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sm(t,e,n,s=He.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","absoluteDifference"),r=I(e,"predictions","absoluteDifference");let i=null;n!=null&&(i=I(n,"weights","absoluteDifference")),ye(o.shape,r.shape,"Error in absoluteDifference: ");const c=ft($e(o,r));return Rt(c,i,s)}const Im=A({absoluteDifference_:Sm});function Em(t,e,n,s,o=He.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","cosineDistance"),i=I(e,"predictions","cosineDistance");let c=null;s!=null&&(c=I(s,"weights","cosineDistance")),ye(r.shape,i.shape,"Error in cosineDistance: ");const a=Te(1),l=$e(a,Ie(le(r,i),n,!0));return Rt(l,c,o)}const Tm=A({cosineDistance_:Em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(t){const n={x:I(t,"x","relu")};return _.runKernel(zi,n)}const Ir=A({relu_:Rm});function km(t,e,n,s=He.SUM_BY_NONZERO_WEIGHTS){let o=I(t,"labels","hingeLoss");const r=I(e,"predictions","hingeLoss");let i=null;n!=null&&(i=I(n,"weights","hingeLoss")),ye(o.shape,r.shape,"Error in hingeLoss: ");const c=Te(1);o=$e(le(Te(2),o),c);const a=Ir($e(c,le(o,r)));return Rt(a,i,s)}const Nm=A({hingeLoss_:km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(t,e){let n=I(t,"a","minimum"),s=I(e,"b","minimum");[n,s]=Ye(n,s),n.dtype==="bool"&&(n=vt(n,"int32"),s=vt(s,"int32")),ve(n.shape,s.shape);const o={a:n,b:s};return _.runKernel($s,o)}const _m=A({minimum_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(t,e,n,s=1,o=He.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","huberLoss"),i=I(e,"predictions","huberLoss");let c=null;n!=null&&(c=I(n,"weights","huberLoss")),ye(r.shape,i.shape,"Error in huberLoss: ");const a=Te(s),l=ft($e(i,r)),u=_m(l,a),d=$e(l,u),h=St(le(Te(.5),$c(u)),le(a,d));return Rt(h,c,o)}const Fm=A({huberLoss_:Dm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(t){const n={x:I(t,"x","log","float32")};return _.runKernel(vs,n)}const Er=A({log_:Om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(t,e,n,s=1e-7,o=He.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","logLoss"),i=I(e,"predictions","logLoss");let c=null;n!=null&&(c=I(n,"weights","logLoss")),ye(r.shape,i.shape,"Error in logLoss: ");const a=Te(1),l=Te(s),u=Kn(le(r,Er(St(i,l)))),d=le($e(a,r),Er(St($e(a,i),l))),h=$e(u,d);return Rt(h,c,o)}const Lm=A({logLoss_:Pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(t,e){let n=I(t,"a","squaredDifference"),s=I(e,"b","squaredDifference");[n,s]=Ye(n,s),ve(n.shape,s.shape);const o={a:n,b:s},r={};return _.runKernel(Rs,o,r)}const Mm=A({squaredDifference_:Bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(t,e,n,s=He.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","meanSquaredError"),r=I(e,"predictions","meanSquaredError");let i=null;n!=null&&(i=I(n,"weights","meanSquaredError")),ye(o.shape,r.shape,"Error in meanSquaredError: ");const c=Mm(o,r);return Rt(c,i,s)}const Um=A({meanSquaredError_:Vm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(t){const n={x:I(t,"x","exp")};return _.runKernel(xs,n)}const Zs=A({exp_:Wm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(t){const n={x:I(t,"x","log1p")};return _.runKernel(Ai,n)}const zm=A({log1p_:Gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(t,e){const n=I(t,"labels","sigmoidCrossEntropyWithLogits"),s=I(e,"logits","sigmoidCrossEntropyWithLogits");ye(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=Ir(s),r=le(s,n),i=zm(Zs(Kn(ft(s))));return St($e(o,r),i)}function Xm(t,e,n,s=0,o=He.SUM_BY_NONZERO_WEIGHTS){let r=I(t,"multiClassLabels","sigmoidCrossEntropy");const i=I(e,"logits","sigmoidCrossEntropy");let c=null;if(n!=null&&(c=I(n,"weights","sigmoidCrossEntropy")),ye(r.shape,i.shape,"Error in sigmoidCrossEntropy: "),s>0){const l=Te(s),u=Te(1),d=Te(.5);r=St(le(r,$e(u,l)),le(d,l))}const a=Hm(r,i);return Rt(a,c,o)}const qm=A({sigmoidCrossEntropy_:Xm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q2(t){return util.assert(util.isFunction(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const s=convertToTensor(e,"x","tf.grad","string_or_numeric"),o=n!=null?convertToTensor(n,"dy","tf.grad"):null;return ENGINE.tidy(()=>{const{value:r,grads:i}=ENGINE.gradients(()=>t(s),[s],o);return o!=null&&util.assertShapesMatch(r.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Js(i),i[0]})}}function K2(t){return util.assert(util.isFunction(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=convertToTensorArray(e,"args","tf.grads","string_or_numeric"),o=n!=null?convertToTensor(n,"dy","tf.grads"):null;return ENGINE.tidy(()=>{const{value:r,grads:i}=ENGINE.gradients(()=>t(...s),s,o);return o!=null&&util.assertShapesMatch(r.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Js(i),i})}}function j2(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{util.assert(e instanceof Tensor,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:o}=ENGINE.gradients(()=>t(e),[e],n);return Js(s),{grad:s[0],value:o}}}function Y2(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e)&&e.every(o=>o instanceof Tensor),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=ENGINE.gradients(()=>t(...e),e,n);return n!=null&&util.assertShapesMatch(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Js(s.grads),s}}function Q2(t,e){util.assert(util.isFunction(t),()=>"The f passed in variableGrads(f) must be a function"),util.assert(e==null||Array.isArray(e)&&e.every(l=>l instanceof Variable),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const l in ENGINE.registeredVariables)e.push(ENGINE.registeredVariables[l])}const s=n?e.filter(l=>!l.trainable):null,o=e.length;e=e.filter(l=>l.trainable),util.assert(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:c}=ENGINE.gradients(t,e,null,r);util.assert(c.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),util.assert(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const a={};return e.forEach((l,u)=>{c[u]!=null&&(a[l.name]=c[u])}),s?.forEach(l=>a[l.name]=null),{value:i,grads:a}}function Km(t){return _.customGrad(t)}function Js(t){if(t.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(t,e=null,n=!1){const s=I(t,"x","logSumExp"),o=te(e,s.shape),r=Qs(s,o,!0),i=$e(s,r),c=Zs(i),a=Ie(c,o),l=Er(a),u=St(fe(r,l.shape),l);if(n){const d=Qe(u.shape,o);return fe(u,d)}return u}const Ym=A({logSumExp_:jm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return Km((o,r,i)=>{const a=Ym(r,[n],!0),l=$e(vt(r,"float32"),a);i([o,l]);const u=Kn(le(l,o));return{value:Ie(u,[n]),gradFunc:(f,p)=>{const[g,m]=p,x=Qe(f.shape,[n]);return[le(fe(f,x),$e(vt(g,"float32"),Zs(m))),le(fe(f,x),$e(Zs(m),vt(g,"float32")))]}}})(t,e)}function Zm(t,e,n,s=0,o=He.SUM_BY_NONZERO_WEIGHTS){let r=I(t,"onehotLabels","softmaxCrossEntropy");const i=I(e,"logits","softmaxCrossEntropy");let c=null;if(n!=null&&(c=I(n,"weights","softmaxCrossEntropy")),ye(r.shape,i.shape,"Error in softmaxCrossEntropy: "),s>0){const l=Te(s),u=Te(1),d=Te(r.shape[1]);r=St(le(r,$e(u,l)),ot(l,d))}const a=Qm(r,i);return Rt(a,c,o)}const Jm=A({softmaxCrossEntropy_:Zm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ex(t,e,n,s){const o=I(t,"indices","sparseFillEmptyRows","int32"),r=I(e,"values","sparseFillEmptyRows"),i=I(n,"denseShape","sparseFillEmptyRows","int32"),c=I(s,"defaultValue","sparseFillEmptyRows",r.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(r.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${r.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(c.rank!==0)throw new Error(`Default value should be a scalar but received shape ${c.shape}`);const a={indices:o,values:r,denseShape:i,defaultValue:c},l=_.runKernel(ea,a);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const tx=A({sparseFillEmptyRows_:ex});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nx(t,e,n){const s=I(t,"inputIndices","sparseReshape","int32"),o=I(e,"inputShape","sparseReshape","int32"),r=I(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(r.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${r.shape}`);const i={inputIndices:s,inputShape:o,newShape:r},c=_.runKernel(ta,i);return{outputIndices:c[0],outputShape:c[1]}}const sx=A({sparseReshape_:nx});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ox(t,e,n){const s=I(t,"data","sparseSegmentMean"),o=I(e,"indices","sparseSegmentMean","int32"),r=I(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(r.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${r.shape}`);const i={data:s,indices:o,segmentIds:r};return _.runKernel(na,i)}const rx=A({sparseSegmentMean_:ox});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ix(t,e,n){const s=I(t,"data","sparseSegmentSum"),o=I(e,"indices","sparseSegmentSum","int32"),r=I(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(r.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${r.shape}`);const i={data:s,indices:o,segmentIds:r};return _.runKernel(sa,i)}const ax=A({sparseSegmentSum_:ix});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cx(t,e,n,s,o,r,i,c){const a=I(t,"data","stringNGrams","string");if(a.dtype!=="string")throw new Error("Data must be of datatype string");if(a.shape.length!==1)throw new Error(`Data must be a vector, saw: ${a.shape}`);const l=I(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const u={separator:n,nGramWidths:s,leftPad:o,rightPad:r,padWidth:i,preserveShortSequences:c},d={data:a,dataSplits:l},h=_.runKernel(oa,d,u);return{nGrams:h[0],nGramsSplits:h[1]}}const lx=A({stringNGrams_:cx});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ux(t,e,n=!0){const s=I(t,"input","stringSplit","string"),o=I(e,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const r={skipEmpty:n},i={input:s,delimiter:o},c=_.runKernel(ra,i,r);return{indices:c[0],values:c[1],shape:c[2]}}const dx=A({stringSplit_:ux});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hx(t,e){const n=I(t,"input","stringToHashBucketFast","string"),s={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const o={input:n};return _.runKernel(ia,o,s)}const fx=A({stringToHashBucketFast_:hx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z2={fft:ac,ifft:wr,rfft:cc,irfft:Op},J2={hammingWindow:Bp,hannWindow:dc,frame:fc,stft:Wp},eR={flipLeftRight:Xp,grayscaleToRGB:jp,resizeNearestNeighbor:vg,resizeBilinear:Cg,rotateWithOffset:Qp,cropAndResize:zp,nonMaxSuppression:Jp,nonMaxSuppressionAsync:cg,nonMaxSuppressionWithScore:ug,nonMaxSuppressionWithScoreAsync:fg,nonMaxSuppressionPadded:gg,nonMaxSuppressionPaddedAsync:bg,threshold:Mg,transform:Ug},tR={bandPart:jg,gramSchmidt:am,qr:bm},nR={absoluteDifference:Im,computeWeightedLoss:Rt,cosineDistance:Tm,hingeLoss:Nm,huberLoss:Fm,logLoss:Lm,meanSquaredError:Um,sigmoidCrossEntropy:qm,softmaxCrossEntropy:Jm},sR={sparseFillEmptyRows:tx,sparseReshape:sx,sparseSegmentMean:rx,sparseSegmentSum:ax},oR={stringNGrams:lx,stringSplit:dx,stringToHashBucketFast:fx};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const px=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t())();function gx(){return new Promise(t=>px(()=>t()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kc(t,e){const n=t[0].length;t.forEach((o,r)=>{E(o.length===n,()=>`Error in concat${n}D: rank of tensors[${r}] must be the same as the rank of the rest (${n})`)}),E(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=t[0];t.forEach((o,r)=>{for(let i=0;i<n;i++)E(i===e||o[i]===s[i],()=>`Error in concat${n}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function jt(t,e){const n=t[0].slice();for(let s=1;s<t.length;s++)n[e]+=t[s][e];return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nc(t,e,n,s,o="NHWC",r){const i=t[3],c=[...e,i],a=vn(o);return gt(t,c,n,r,s,null,null,a)}function wn(t,e,n,s,o,r,i="channelsLast"){const[c,a]=eo(e);let l;if(i==="channelsLast")l=[c,a,t[3],t[3]];else if(i==="channelsFirst")l=[c,a,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return gt(t,l,n,s,o,r,!1,i)}function jn(t,e,n,s,o,r,i="NDHWC"){const[c,a,l]=Rr(e);let u,d;if(i==="NDHWC")d="channelsLast",u=[c,a,l,t[4],t[4]];else if(i==="NCDHW")d="channelsFirst",u=[c,a,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return Yn(t,u,n,s,o,!1,d,r)}function gt(t,e,n,s,o,r,i=!1,c="channelsLast"){let[a,l,u,d]=[-1,-1,-1,-1];if(c==="channelsLast")[a,l,u,d]=t;else if(c==="channelsFirst")[a,d,l,u]=t;else throw new Error(`Unknown dataFormat ${c}`);const[h,f,,p]=e,[g,m]=eo(n),[x,b]=eo(s),C=Cn(h,x),y=Cn(f,b),{padInfo:$,outHeight:N,outWidth:R}=bx(o,l,u,g,m,C,y,r,c),k=i?p*d:p;let B;return c==="channelsFirst"?B=[a,k,N,R]:c==="channelsLast"&&(B=[a,N,R,k]),{batchSize:a,dataFormat:c,inHeight:l,inWidth:u,inChannels:d,outHeight:N,outWidth:R,outChannels:k,padInfo:$,strideHeight:g,strideWidth:m,filterHeight:h,filterWidth:f,effectiveFilterHeight:C,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:t,outShape:B,filterShape:e}}function Yn(t,e,n,s,o,r=!1,i="channelsLast",c){let[a,l,u,d,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[a,l,u,d,h]=t;else if(i==="channelsFirst")[a,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,g,,m]=e,[x,b,C]=Rr(n),[y,$,N]=Rr(s),R=Cn(f,y),k=Cn(p,$),B=Cn(g,N),{padInfo:U,outDepth:Y,outHeight:ie,outWidth:je}=wx(o,l,u,d,x,b,C,R,k,B,c),De=r?m*h:m;let Oe;return i==="channelsFirst"?Oe=[a,De,Y,ie,je]:i==="channelsLast"&&(Oe=[a,Y,ie,je,De]),{batchSize:a,dataFormat:i,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:Y,outHeight:ie,outWidth:je,outChannels:De,padInfo:U,strideDepth:x,strideHeight:b,strideWidth:C,filterDepth:f,filterHeight:p,filterWidth:g,effectiveFilterDepth:R,effectiveFilterHeight:k,effectiveFilterWidth:B,dilationDepth:y,dilationHeight:$,dilationWidth:N,inShape:t,outShape:Oe,filterShape:e}}function mx(t,e,n,s,o){s==null&&(s=Tr(t,e,n));const r=t[0],i=t[1],c=Yt((r-e+2*s)/n+1,o),a=Yt((i-e+2*s)/n+1,o);return[c,a]}function xx(t,e,n,s,o,r){o==null&&(o=Tr(t,e,s));const i=t[0],c=t[1],a=t[2],l=Yt((i-e+2*o)/s+1,r),u=Yt((c-e+2*o)/s+1,r),d=Yt((a-e+2*o)/s+1,r);return[l,u,d,n]}function Tr(t,e,n,s=1){const o=Cn(e,s);return Math.floor((t[0]*(n-1)-n+o)/2)}function eo(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Rr(t){return typeof t=="number"?[t,t,t]:t}function Cn(t,e){return e<=1?t:t+(t-1)*(e-1)}function bx(t,e,n,s,o,r,i,c,a){let l,u,d;if(typeof t=="number"){l={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const f=mx([e,n],r,s,t,c);u=f[0],d=f[1]}else if(t==="same"){u=Math.ceil(e/s),d=Math.ceil(n/o);const h=Math.max(0,(u-1)*s+r-e),f=Math.max(0,(d-1)*o+i-n),p=Math.floor(h/2),g=h-p,m=Math.floor(f/2),x=f-m;l={top:p,bottom:g,left:m,right:x,type:"SAME"}}else if(t==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-r+1)/s),d=Math.ceil((n-i+1)/o);else if(typeof t=="object"){const h=a==="channelsLast"?t[1][0]:t[2][0],f=a==="channelsLast"?t[1][1]:t[2][1],p=a==="channelsLast"?t[2][0]:t[3][0],g=a==="channelsLast"?t[2][1]:t[3][1];l={top:h,bottom:f,left:p,right:g,type:h===0&&f===0&&p===0&&g===0?"VALID":"EXPLICIT"},u=Yt((e-r+h+f)/s+1,c),d=Yt((n-i+p+g)/o+1,c)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:l,outHeight:u,outWidth:d}}function wx(t,e,n,s,o,r,i,c,a,l,u){let d,h,f,p;if(typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const m=xx([e,n,s,1],c,1,o,t,u);h=m[0],f=m[1],p=m[2]}else if(t==="same"){h=Math.ceil(e/o),f=Math.ceil(n/r),p=Math.ceil(s/i);const g=(h-1)*o+c-e,m=(f-1)*r+a-n,x=(p-1)*i+l-s,b=Math.floor(g/2),C=g-b,y=Math.floor(m/2),$=m-y,N=Math.floor(x/2),R=x-N;d={top:y,bottom:$,left:N,right:R,front:b,back:C,type:"SAME"}}else if(t==="valid")d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-c+1)/o),f=Math.ceil((n-a+1)/r),p=Math.ceil((s-l+1)/i);else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:p}}function Yt(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function kr(t){const[e,n,s]=eo(t);return e===1&&n===1&&s===1}function yn(t,e){return kr(t)||kr(e)}function vn(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function Cx(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")E(P(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(o=>{E(P(o),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${o}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yx(t){const n={x:I(t,"x","elu","float32")};return _.runKernel(vi,n)}const vx=A({elu_:yx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(t,e=.2){const s={x:I(t,"x","leakyRelu")},o={alpha:e};return _.runKernel(Ni,s,o)}const Sx=A({leakyRelu_:$x});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ix(t,e){const n=I(t,"x","prelu"),s=I(e,"alpha","prelu"),o={x:n,alpha:s};return _.runKernel(Ui,o)}const Ex=A({prelu_:Ix});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tx(t){const n={x:I(t,"x","relu6")};return _.runKernel(Ki,n)}const Rx=A({relu6_:Tx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kx(t){const n={x:I(t,"x","sigmoid","float32")};return _.runKernel(Es,n)}const Nx=A({sigmoid_:kx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ax(t,e=0){const s={x:I(t,"x","step")},o={alpha:e};return _.runKernel(ua,s,o)}const _x=A({step_:Ax});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dx(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return le(t,_x(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Fx(t,e){let n=e;const s=ja(t.shape,e.shape);return s.length>0&&(n=Ie(n,s)),fe(n,t.shape)}function Ox(t,e,n,s){if(e==="linear")return t;if(e==="relu")return Ir(t);if(e==="elu")return vx(t);if(e==="relu6")return Rx(t);if(e==="prelu")return Ex(t,n);if(e==="leakyrelu")return Sx(t,s);if(e==="sigmoid")return Nx(t);throw new Error(`Unknown fused activation ${e}.`)}const Px=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var mt;(function(t){t[t.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",t[t.VALUE_ROWIDS=1]="VALUE_ROWIDS",t[t.ROW_LENGTHS=2]="ROW_LENGTHS",t[t.ROW_SPLITS=3]="ROW_SPLITS",t[t.ROW_LIMITS=4]="ROW_LIMITS",t[t.ROW_STARTS=5]="ROW_STARTS"})(mt||(mt={}));function Ac(t,e,n){let s=new Array;if(n==null&&e==null)return s;if(e==null)for(;s.length<t+n.length;)s.push(-1);else s=e.slice();if(n==null)return s;if(t+n.length!==s.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${t+n.length}, but shape.rank = ${s.length}`);for(let o=1;o<n.length;++o){const r=n[o],i=s[s.length-n.length+o],c=s[i];if(r>=0)if(c>=0){if(c!==r)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${o+t}] = ${r} but shape[${o+t}] = ${c}`)}else s[i]=r}return s}function _c(t){const e={FIRST_DIM_SIZE:mt.FIRST_DIM_SIZE,VALUE_ROWIDS:mt.VALUE_ROWIDS,ROW_LENGTHS:mt.ROW_LENGTHS,ROW_SPLITS:mt.ROW_SPLITS,ROW_LIMITS:mt.ROW_LIMITS,ROW_STARTS:mt.ROW_STARTS},n=[];for(const s of t)if(s in e)n.push(e[s]);else break;return n}function Dc(t){return t.length===0?0:t[0]===mt.FIRST_DIM_SIZE?t.length-1:t.length}function Fc(t,e){if(t==null||e==null)return;const n=t.length,s=e.length;if(n>=s)throw new Error(`defaultValue.shape=${t} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(n,s-1);++o){const r=t[o],i=e[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${o-t.length}] = ${r} but ragged tensor input.flatValues.shape[${o-t.length}] = ${i}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nr=30;function to(t){return t<=Nr?t:ko(t,Math.floor(Math.sqrt(t)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oc(t,e,n){const s=n*(typeof t=="number"?t:t[0]),o=e*(typeof t=="number"?t:t[1]);return[s,o]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ar(t,e,n,s=!0){let o=[];if(s)o=o.concat(e.slice(0)),o.push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);const r=e.length;for(let i=0;i<r;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(r+1))}return o}function _r(t,e,n=!0){const s=[];if(n){s.push(e);for(let o=e+1;o<t;++o)o<=2*e?(s.push(o),s.push(o-(e+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<t;++i)i>=e*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function Dr(t,e,n,s=!0){const o=[];s?o.push(t[0]/n):o.push(t[0]*n);for(let r=1;r<t.length;++r)r<=e.length?s?o.push(e[r-1]*t[r]):o.push(t[r]/e[r-1]):o.push(t[r]);return o}function Pc(t,e){const n=[0];for(let s=0;s<e;++s)n.push(t[s][0]);return n}function Lc(t,e,n){const s=t.slice(0,1);for(let o=0;o<n;++o)s.push(t[o+1]-e[o][0]-e[o][1]);return s}function Bc(t,e){const n=t.shape.length,s=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${n}`);if(v(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const o=e.shape,r=o[o.length-1];let i=1;for(let d=0;d<o.length-1;++d)i*=o[d];const c=t.shape,a=o.slice();a.pop();let l=1;for(let d=r;d<n;++d)l*=c[d],a.push(c[d]);const u=[...Re(t.shape).map(d=>d/l),1].slice(0,r);return[a,i,l,u]}function Mc(t,e,n){const s=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${s}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(r+` update.rank < ${o}. `);if(t.length<s+(n.rank-o))throw new Error(r+` Output shape length < ${s+(n.rank-o)}`);if(n.rank!==o+t.length-s)throw new Error(r+` update.rank != ${o+t.length-s}`);for(let i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(r+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+s])throw new Error(r+` updates.shape[${i+o}] (${n.shape[i+o]}) != shape[${i+o}] (${t[i+o]})`)}function Lx(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Mc(n,e,t)}function Fr(t,e,n){const s=e.shape.length,o=s>1?e.shape[s-1]:1,r=n.length;let i=1;for(let d=o;d<r;++d)i*=n[d];const c=o<1?1:o,a=v(e.shape)/c,l=[...Re(n.slice(0,o)),1],u=v(n);return{sliceRank:o,numUpdates:a,sliceSize:i,strides:l,outputSize:u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vc=1.7580993408473768,Uc=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wc=.3275911,Gc=.254829592,zc=-.284496736,Hc=1.421413741,Xc=-1.453152027,qc=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qn(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(t.length*2);for(let s=0;s<n.length;s+=2)n[s]=t[s/2],n[s+1]=e[s/2];return n}function Bx(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let s=0;s<t.length;s+=2)e[s/2]=t[s],n[s/2]=t[s+1];return{real:e,imag:n}}function Mx(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],s[Math.floor(o/4)]=t[o+1];return{real:n,imag:s}}function Vx(t){const e=Math.floor(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],s[Math.floor(o/4)]=t[o+1];return{real:n,imag:s}}function Ux(t,e){const n=t[e*2],s=t[e*2+1];return{real:n,imag:s}}function Wx(t,e,n,s){t[s*2]=e,t[s*2+1]=n}function Gx(t,e){const n=new Float32Array(t/2),s=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const r=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:n,imag:s}}function zx(t,e,n){const s=(n?2:-2)*Math.PI*(t/e),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Or="->",Hx=/->/g,Kc=",",jc="...";function Yc(t,e){t=t.replace(/\s/g,"");const n=(t.length-t.replace(Hx,"").length)/Or.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Or}").`);const[s,o]=t.split(Or);E(s.indexOf(jc)===-1,()=>`The ellipsis notation ("${jc}") is not supported yet.`);const r=s.split(Kc),i=r.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const c=[];for(let h=0;h<o.length;++h){const f=o[h];if(!r.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);c.indexOf(f)===-1&&c.push(f)}for(let h=0;h<s.length;++h){const f=s[h];c.indexOf(f)===-1&&f!==Kc&&c.push(f)}const a=new Array(r.length);for(let h=0;h<i;++h){if(new Set(r[h].split("")).size!==r[h].length)throw new Error(`Found duplicate axes in input component ${r[h]}. Support for duplicate axes in input is not implemented yet.`);a[h]=[];for(let f=0;f<r[h].length;++f)a[h].push(c.indexOf(r[h][f]))}const l=c.length,u=o.length,d=[];for(let h=u;h<l;++h)d.push(h);return{allDims:c,summedDims:d,idDims:a}}function Qc(t,e){let n=new Array(t);n.fill(-1);for(let o=0;o<e.length;++o)n[e[o]]=o;const s=[];for(let o=0;o<t;++o)n[o]===-1&&s.push(o);return n=n.filter(o=>o!==-1),{permutationIndices:n,expandDims:s}}function Zc(t,e,n){const s=new Array(t);for(let o=0;o<n.length;++o){const r=n[o].shape;for(let i=0;i<e[o].length;++i)s[e[o][i]]===void 0?s[e[o][i]]=r[i]:E(s[e[o][i]]===r[i],()=>`Expected dimension ${s[e[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function Jc(t,e){const n=t,s=[];let o=0;t.length===0&&n.push(-1),o=t.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<n.length;++i){const c=n[i],a=Xx(e,c);for(const l of a)r.indexOf(l)===-1&&(s[i].push(l),r.push(l))}return{path:n,steps:s}}function el(t){return t.every((e,n)=>e===n)}function Xx(t,e){const n=[];for(let s=0;s<t.length;++s)(t[s].length===0||t[s].indexOf(e)!==-1||e===-1)&&n.push(s);return n}function tl(t,e,n=0){let s=[];if(typeof e=="number")E(t.shape[n]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(t.shape[n]/e);else{const o=e.reduce((i,c)=>(c===-1&&(i+=1),i),0);E(o<=1,()=>"There should be only one negative value in split array.");const r=e.indexOf(-1);if(r!==-1){const i=e.reduce((c,a)=>a>0?c+a:c);e[r]=t.shape[n]-i}E(t.shape[n]===e.reduce((i,c)=>i+c),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nl(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function sl(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function ol(t,e,n){return`indices(${t}, 0) is invalid: ${e} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rl(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function il(t,e){return`size ${t} must be non-negative, not ${e}`}function al(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function cl(t,e){const n=v(t),s=v(e);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${t} outputShape= ${e}`}function ll(t,e){const n=v(t),s=v(e);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${t} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pr(){return"segment ids must be >= 0"}function ul(){return"segment ids are not increasing"}function dl(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function hl(t,e,n){return`Bad: indices[${t}] == ${e} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fl(t,e){let n=!1,s;for(t<=Nr?(s=t,n=!0):s=ko(t,Math.floor(Math.sqrt(t)));!n;)s>e||s===t?n=!0:s=ko(t,s+1);return s}function pl(t,e,n){const s=[],o=t.length;for(let r=0;r<o;r++)r!==e?s.push(t[r]):s.push(n);return s}function gl(t,e,n,s){const o=e.shape.length,r=t.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let d=0;d<s;++d)if(t.shape[d]!==e.shape[d])throw new Error(`x.shape[${d}]: ${t.shape[d]} should be equal to indices.shape[${d}]: ${e.shape[d]}.`);const i=t.shape[n],c=[];let a=1,l=1,u=1;for(let d=0;d<s;++d)c.push(t.shape[d]),a*=t.shape[d];for(let d=s;d<n;d++)c.push(t.shape[d]),l*=t.shape[d];for(let d=s;d<o;d++)c.push(e.shape[d]);for(let d=n+1;d<r;d++)c.push(t.shape[d]),u*=t.shape[d];return{batchSize:a,sliceSize:u,outerSize:l,dimSize:i,outputShape:c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qt(t){try{return t.map(e=>an(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function ml(t){return t.map(e=>Gt(e))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qx(t,e){const n=[];for(let r=0;r<e.length;r++)e[r]&&n.push(r);const s=Ne(t,"int32"),o=Ne([n.length,t.length],"int32");for(let r=0;r<n.length;r++){const i=s.indexToLoc(n[r]),c=r*t.length;o.values.set(i,c)}return o.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pt={},no={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function rR(t){delete Pt[t]}function Kx(t,e){Pt[t]=e}function xt(t,e){if(!(t in Pt)||e!=null){const s=Yx(t,e);if(s!==null)Pt[t]=s;else return console.log("Could not get context for WebGL version",t),null}const n=Pt[t];return n==null||n.isContextLost()?(delete Pt[t],xt(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Pt[t])}function jx(t){if(typeof OffscreenCanvas<"u"&&t===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Yx(t,e){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=e??jx(t);return n.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Pt[t]},!1),S().getBool("SOFTWARE_WEBGL_ENABLED")&&(no.failIfMajorPerformanceCaveat=!1),t===1?n.getContext("webgl",no)||n.getContext("experimental-webgl",no):n.getContext("webgl2",no)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Zn;(function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH"})(Zn||(Zn={}));var et;(function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD"})(et||(et={}));var Ae;(function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Ae||(Ae={}));function Jn(t,e){return[e,t]}function Qx(t,e){return t*e}function iR(t,e){return[e*4,t]}function so(t){const e=v(t),n=Math.ceil(e/4);return be(n)}function aR(t,e){if(t%e!==0)throw new Error(`unpackedSize (${t}) must be a multiple of ${e}`);return t/e}function cR(t,e,n){const s=t.length*n/4;if(e.length<s)throw new Error(`matrix length (${e.length}) must be >= ${s}`);let o=0;for(let r=0;r<t.length;r+=4)for(let i=0;i<n;i++)e[o++]=t[r+i]}function $n(t,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Zx(t,e){const[n,s]=$n(t,e);return n*s*4}function Lr(t,e){const n=t;let s,o,r,i,c,a,l,u,d,h;return S().getNumber("WEBGL_VERSION")===2?(s=n.R32F,o=n.R16F,r=n.RGBA16F,i=n.RGBA32F,c=n.RED,l=4,u=1,d=n.HALF_FLOAT,h=n.FLOAT,a=n.RGBA8):(s=t.RGBA,o=t.RGBA,r=t.RGBA,i=n.RGBA,c=t.RGBA,l=4,u=4,d=e!=null?e.HALF_FLOAT_OES:null,h=t.FLOAT,a=t.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:c,downloadTextureFormat:a,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:h}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L(t,e){const n=e();return S().getBool("DEBUG")&&Jx(t),n}function Jx(t){const e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+s0(t,e))}const e0=596e-10,t0=65504;function n0(t){return!!(S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||t===0||e0<Math.abs(t)&&Math.abs(t)<t0)}function s0(t,e){switch(e){case t.NO_ERROR:return"NO_ERROR";case t.INVALID_ENUM:return"INVALID_ENUM";case t.INVALID_VALUE:return"INVALID_VALUE";case t.INVALID_OPERATION:return"INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function oo(t,e){return kt(t,()=>t.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function o0(t,e){const n=kt(t,()=>t.createShader(t.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw console.log(t.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function r0(t,e){const n=kt(t,()=>t.createShader(t.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),S().get("ENGINE_COMPILE_ONLY"))return n;if(t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw xl(e,t.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const i0=/ERROR: [0-9]+:([0-9]+):/g;function xl(t,e){const n=i0.exec(e);if(n==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(t);return}const s=+n[1],o=t.split(`
`),r=o.length.toString().length+2,i=o.map((d,h)=>Ce((h+1).toString(),r)+d);let c=0;for(let d=0;d<i.length;d++)c=Math.max(i[d].length,c);const a=i.slice(0,s-1),l=i.slice(s-1,s),u=i.slice(s);console.log(a.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${Ce(l[0],c)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function a0(t){return kt(t,()=>t.createProgram(),"Unable to create WebGLProgram.")}function c0(t,e){if(L(t,()=>t.linkProgram(e)),!S().get("ENGINE_COMPILE_ONLY")&&t.getProgramParameter(e,t.LINK_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Br(t,e){if(L(t,()=>t.validateProgram(e)),t.getProgramParameter(e,t.VALIDATE_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function l0(t,e){const n=kt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function u0(t,e){const n=kt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ELEMENT_ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function lR(){return env().getNumber("WEBGL_VERSION")===2?1:4}function d0(t){return kt(t,()=>t.createTexture(),"Unable to create WebGLTexture.")}function h0(t,e){const n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){const s=`[${t}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(t>n||e>n){const s=`[${t}x${e}]`,o=`[${n}x${n}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function f0(t){return kt(t,()=>t.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function bl(t,e,n,s,o,r,i){const c=t.getAttribLocation(e,n);return c===-1?!1:(L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,s)),L(t,()=>t.vertexAttribPointer(c,o,t.FLOAT,!1,r,i)),L(t,()=>t.enableVertexAttribArray(c)),!0)}function p0(t,e,n){Cl(t,n),L(t,()=>t.activeTexture(t.TEXTURE0+n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,e))}function uR(t,e){Cl(t,e),L(t,()=>t.activeTexture(t.TEXTURE0+e)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function g0(t,e,n){return kt(t,()=>t.getUniformLocation(e,n),'uniform "'+n+'" not present in program.')}function m0(t,e,n){return t.getUniformLocation(e,n)}function x0(t,e,n,s){L(t,()=>p0(t,e,s)),L(t,()=>t.uniform1i(n,s))}function dR(t){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),L(t,()=>t.viewport(0,0,t.canvas.width,t.canvas.height)),L(t,()=>t.scissor(0,0,t.canvas.width,t.canvas.height))}function Mr(t,e,n){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,n)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0))}function wl(t,e){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,e)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0))}function ro(t){const e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+b0(t,e))}function b0(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function kt(t,e,n){const s=L(t,()=>e());if(s==null)throw new Error(n);return s}function Cl(t,e){const n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+t.TEXTURE0;if(s<t.TEXTURE0||s>n){const o=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Sn(t,e=2){return v(t.slice(0,t.length-e))}function In(t){if(t.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[t.length>1?t[t.length-2]:1,t[t.length-1]]}function Vr(t){let e=[1,1,1];return t.length===0||t.length===1&&t[0]===1||(e=[Sn(t),...In(t)]),e}function w0(t,e=!1){let n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=S().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&S().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=n/2),e&&(n=n*2,s=s*2,t=t.map((c,a)=>a>=t.length-2?H(t[a]):t[a]),t.length===1&&(t=[2,t[0]])),t.length!==2&&(t=he(t).newShape);let o=v(t),r=null;t.length<=1&&o<=n?r=[1,o]:t.length===2&&t[0]<=n&&t[1]<=n?r=t:t.length===3&&t[0]*t[1]<=n&&t[2]<=n?r=[t[0]*t[1],t[2]]:t.length===3&&t[0]<=n&&t[1]*t[2]<=n?r=[t[0],t[1]*t[2]]:t.length===4&&t[0]*t[1]*t[2]<=n&&t[3]<=n?r=[t[0]*t[1]*t[2],t[3]]:t.length===4&&t[0]<=n&&t[1]*t[2]*t[3]<=n&&(r=[t[0],t[1]*t[2]*t[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(e?2:1)&&Math.min(...r)>0;if(r==null||i)if(e){const c=Sn(t);let a=2,l=2;t.length&&([a,l]=In(t)),o=c*(a/2)*(l/2),r=be(o).map(u=>u*2)}else r=be(o);return r}function io(t){return t%2===0}function ao(t,e){if(t=t.slice(-2),e=e.slice(-2),w(t,e)||!t.length||!e.length||t[0]===0||t[1]===0||e[0]===0||e[1]===0)return!0;if(t.length!==e.length){const n=t.slice(-1)[0],s=e.slice(-1)[0];if(n===s||io(n)&&io(s)&&(t[0]===1||e[0]===1))return!0}return t[1]===e[1]&&io(t[0])&&io(e[0])}let co,lo;function C0(t){if(co==null){const e=xt(t);co=e.getParameter(e.MAX_TEXTURE_SIZE)}return co}function hR(){co=null}function fR(){lo=null}function y0(t){if(lo==null){const e=xt(t);lo=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,lo)}function v0(t){if(t===0)return 0;let e;const n=xt(t);return rt(n,"EXT_disjoint_timer_query_webgl2")&&t===2?e=2:rt(n,"EXT_disjoint_timer_query")?e=1:e=0,e}function rt(t,e){return t.getExtension(e)!=null}function yl(t){try{if(xt(t)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function $0(t){if(t===0)return!1;const e=xt(t);if(t===1){if(!rt(e,"OES_texture_float"))return!1}else if(!rt(e,"EXT_color_buffer_float"))return!1;return Ur(e)}function S0(t){if(t===0)return!1;const e=xt(t);if(t===1){if(!rt(e,"OES_texture_float")||!rt(e,"WEBGL_color_buffer_float"))return!1}else{if(rt(e,"EXT_color_buffer_float"))return Ur(e);const s="EXT_color_buffer_half_float";if(rt(e,s)){const o=e.getExtension(s);return I0(e,o)}return!1}return Ur(e)}function Ur(t){const e=Lr(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const s=1,o=1;t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,s,o,0,e.textureFormatFloat,e.textureTypeFloat,null);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);const i=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),i}function I0(t,e){const n=Lr(t,e),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const o=1,r=1;t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,o,r,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);const c=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(s),t.deleteFramebuffer(i),c}function E0(t){return t!==2?!1:xt(t).fenceSync!=null}function es(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&E(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V=S();V.registerFlag("HAS_WEBGL",()=>V.getNumber("WEBGL_VERSION")>0),V.registerFlag("WEBGL_VERSION",()=>yl(2)?2:yl(1)?1:0),V.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),V.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>V.get("WEBGL_VERSION")===2),V.registerFlag("WEBGL_CPU_FORWARD",()=>!0),V.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),V.registerFlag("WEBGL_PACK",()=>V.getBool("HAS_WEBGL")),V.registerFlag("WEBGL_PACK_NORMALIZATION",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_CLIP",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_PACK_REDUCE",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_LAZILY_UNPACK",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_CONV_IM2COL",()=>V.getBool("WEBGL_PACK")),V.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>C0(V.getNumber("WEBGL_VERSION"))),V.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>y0(V.getNumber("WEBGL_VERSION"))),V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const t=V.getNumber("WEBGL_VERSION");return t===0?0:v0(t)}),V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>V.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ta()),V.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>$0(V.getNumber("WEBGL_VERSION"))),V.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>V.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:V.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),V.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>S0(V.getNumber("WEBGL_VERSION"))),V.registerFlag("WEBGL_FENCE_API_ENABLED",()=>E0(V.getNumber("WEBGL_VERSION"))),V.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>V.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),V.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${t}.`)}),V.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ta()?1:-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${t}.`)}),V.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),V.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),V.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),V.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),V.registerFlag("WEBGL_EXP_CONV",()=>!1),V.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>V.getBool("IS_TEST")),V.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),V.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),V.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Me(){let t,e,n,s,o,r,i,c,a,l;return S().getNumber("WEBGL_VERSION")===2?(t="#version 300 es",e="in",n="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",c=S().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",a="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(t="",e="attribute",n="varying",s="varying",o="texture2D",r="gl_FragColor",i="",c=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,a=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:t,attribute:e,varyingVs:n,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:c,defineSpecialInf:a,defineRound:l}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(t,e,n="index"){const s=Re(e);return s.map((o,r)=>{const i=`int ${t[r]} = ${n} / ${o}`,c=r===s.length-1?`int ${t[r+1]} = ${n} - ${t[r]} * ${o}`:`index -= ${t[r]} * ${o}`;return`${i}; ${c};`}).join("")}function uo(t,e,n="index"){const s=Re(e);return s.map((o,r)=>{const i=`int ${t[r]} = ${n} / outShapeStrides[${r}]`,c=r===s.length-1?`int ${t[r+1]} = ${n} - ${t[r]} * outShapeStrides[${r}]`:`index -= ${t[r]} * outShapeStrides[${r}]`;return`${i}; ${c};`}).join("")}function T0(t,e){const n=t.length,s=t.map(r=>`${e}[${r}]`),o=new Array(n-1);o[n-2]=s[n-1];for(let r=n-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function R0(t,e,n="index"){const s=t.map((r,i)=>i),o=T0(s,e);return o.map((r,i)=>{const c=`int ${t[i]} = ${n} / ${o[i]}`,a=i===o.length-1?`int ${t[i+1]} = ${n} - ${t[i]} * ${o[i]}`:`index -= ${t[i]} * ${o[i]}`;return`${c}; ${a};`}).join("")}function ho(t){return t.length===1?`${t[0]}`:`vec${t.length}(${t.join(",")})`}function pR(t,e){if(t.length!==e.length)throw new Error(`Vectors to be dotted must be of the same length -got ${t.length} and ${e.length}`);const n=[],s=Math.floor(t.length/4),o=t.length%4;for(let r=0;r<s;r++){const i=t.slice(r*4,r*4+4),c=e.slice(r*4,r*4+4);n.push(`${ho(i)}, ${ho(c)}`)}if(o!==0){let r=t.slice(s*4),i=e.slice(s*4);r.length===1&&(r=r.map(c=>`float(${c})`),i=i.map(c=>`float(${c})`)),n.push(`${ho(r)}, ${ho(i)}`)}return n.map((r,i)=>`dot(${r})`).join("+")}function Wr(t){const e=Re(t).map(n=>n.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function Gr(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const vl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{getBroadcastDims:$l}=ae;function k0(t,e,n){const s=[];if(t.forEach(f=>{const p=v(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),n.enableShapeUniforms){const{uniformShape:g}=zr(n.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),n.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break;default:break}s.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const o=s.join(`
`),r=t.map(f=>N0(f,e,n.packedInputs,n.enableShapeUniforms)).join(`
`),i=e.texShape,c=Me(),a=D0(c);let l,u,d=P0(c);return e.isPacked?(l=A0(e.logicalShape,i,n.enableShapeUniforms),u=O0(c)):(l=_0(e.logicalShape,i,n.enableShapeUniforms),u=F0(c)),n.packedInputs&&(d+=V0),[d,a,u,o,l,r,n.userCode].join(`
`)}function En(t,e=!1){const n=t.shapeInfo.logicalShape;switch(n.length){case 0:return Z0(t,e);case 1:return eb(t,e);case 2:return nb(t,e);case 3:return ob(t,e);case 4:return ib(t,e);case 5:return ab(t);case 6:return cb(t);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Sl(t,e){switch(t.shapeInfo.logicalShape.length){case 0:return Q0(t);case 1:return J0(t,e);case 2:return tb(t,e);case 3:return sb(t,e);default:return rb(t,e)}}function N0(t,e,n=!1,s){let o="";n?o+=Sl(t,s):o+=En(t,s);const r=t.shapeInfo.logicalShape,i=e.logicalShape;return r.length<=i.length&&(n?o+=lb(t,e):o+=ub(t,e)),o}function A0(t,e,n){switch(t.length){case 0:return Il();case 1:return U0(t,e,n);case 2:return j0(t,e,n);case 3:return G0(t,e,n);default:return H0(t,e,n)}}function _0(t,e,n){switch(t.length){case 0:return Il();case 1:return W0(t,e,n);case 2:return Y0(t,e,n);case 3:return z0(t,e,n);case 4:return X0(t,e,n);case 5:return q0(t,e);case 6:return K0(t,e);default:throw new Error(`${t.length}-D output sampling is not yet supported`)}}function D0(t){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${t.texture2D}(textureSampler, uv).r;
    }
  `}function F0(t){return`
    void setOutput(float val) {
      ${t.output} = vec4(val, 0, 0, 0);
    }
  `}function O0(t){return`
    void setOutput(vec4 val) {
      ${t.output} = val;
    }
  `}function P0(t){return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFs} vec2 resultUV;
    ${t.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${t.defineSpecialNaN}
    ${t.defineSpecialInf}
    ${t.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${L0}
    ${B0}
    ${M0}
  `}const L0=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,B0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,M0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,V0=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Il(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function U0(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function W0(t,e,n){return e[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function G0(t,e,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(t[2]/2),r=o*Math.ceil(t[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function z0(t,e,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${uo(["r","c","d"],t)}
    return ivec3(r, c, d);
  }
`;const s=Zt(["r","c","d"],t);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function H0(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(t[t.length-1]/2),r=o*Math.ceil(t[t.length-2]/2);let i=r,c="",a="b, r, c";for(let l=2;l<t.length-1;l++)i*=t[t.length-l-1],c=`
      int b${l} = index / ${i};
      index -= b${l} * ${i};
    `+c,a=`b${l}, `+a;return`
    ivec${t.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${c}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${t.length}(${a});
    }
  `}function X0(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${uo(["r","c","d","d2"],t)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Zt(["r","c","d","d2"],t);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function q0(t,e){const n=Zt(["r","c","d","d2","d3"],t);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function K0(t,e){const n=Zt(["r","c","d","d2","d3","d4"],t);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function j0(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(w(t,e))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(t[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function Y0(t,e,n){return w(t,e)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:t[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:t[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${t[1]};
      int c = index - r * ${t[1]};
      return ivec2(r, c);
    }
  `}function Jt(t){return`offset${t}`}function Q0(t){const e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),s=Me();return`
    vec4 ${n}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function Z0(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`float ${s}() {return ${n};}`;const[o,r]=t.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${n}, halfCR);
      }
    `;const i=Jt(n);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${i});
      return sampleTexture(${n}, uv);
    }
  `;const[c,a]=t.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${c}, ${a}, ${i});
      return sampleTexture(${n}, uv);
    }
  `}function J0(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,r=Me();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${n}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${n}, uv);
    }
  `}function eb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Tn(t)}
      }
    `;const o=t.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;const c=Jt(n);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / ${r}.0);
        return sampleTexture(${n}, uv);
      }
    `:r===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${c});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${c});
      return sampleTexture(${n}, uv);
    }
  `}function tb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape,i=r[0],c=r[1],a=Me();if(r!=null&&w(n,r))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${a.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${c}.0, ${i}.0);

        return ${a.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(n[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${l[0]}, ${l[1]}, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function nb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape;if(r!=null&&w(n,r)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const h=r[0],f=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:c}=he(n),a=i;if(a.length<n.length){const h=Rn(t,a),f=["row","col"];return`
      ${En(h,e)}
      float ${o}(int row, int col) {
        return ${o}(${kn(f,c)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${Tn(t)}
      }
    `;const l=r[0],u=r[1],d=Jt(s);return u===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${s}, uv);
    }
  `:l===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function sb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(n[0]===1){const h=n.slice(1),f=[1,2],p=Rn(t,h),g=["b","row","col"];return`
        ${Sl(p,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${kn(g,f)});
        }
      `}const c=Me();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const a=i[0],l=i[1],u=Math.ceil(n[2]/2),d=u*Math.ceil(n[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${a}, ${l}, ${d}, ${u}, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function ob(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n[1]*n[2],i=n[2],{newShape:c,keptDims:a}=he(n),l=c;if(l.length<n.length){const g=Rn(t,l),m=["row","col","depth"];return`
        ${En(g,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${kn(m,a)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${Tn(t)}
      }
    `;const u=t.shapeInfo.texShape,d=u[0],h=u[1],f=t.shapeInfo.flatOffset;if(h===r&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${h}.0, ${d}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(h===i&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=Jt(s);return e?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${d}, ${h}, index);
        return sampleTexture(${s}, uv);
      }
  `}function rb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=Me();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${n}, uv);
    }
  `;const r=t.shapeInfo.logicalShape,i=r.length,c=t.shapeInfo.texShape,a=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],l=a[0],u=a[1],d=Math.ceil(r[i-1]/2);let h=d*Math.ceil(r[i-2]/2),f="int b, int row, int col",p=`b * ${h} + (row / 2) * ${d} + (col / 2)`;for(let g=2;g<i-1;g++)f=`int b${g}, `+f,h*=r[i-g-1],p=`b${g} * ${h} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${o.texture2D}(${n}, uv);
    }
  `}function ib(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n[3],i=n[2]*r,c=n[1]*i,{newShape:a,keptDims:l}=he(n);if(a.length<n.length){const b=Rn(t,a),C=["row","col","depth","depth2"];return`
      ${En(b,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${kn(C,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${c}, ${i}, ${r}, 1)));
        ${Tn(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1],p=`int stride2 = ${s}Shape[3];`,g=`int stride1 = ${s}Shape[2] * stride2;`,m=`int stride0 = ${s}Shape[1] * stride1;`;if(f===c&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${p}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===r&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=Jt(s);return e?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${g}
      ${m}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function ab(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],r=e[3]*o,i=e[2]*r,c=e[1]*i,{newShape:a,keptDims:l}=he(e);if(a.length<e.length){const g=Rn(t,a),m=["row","col","depth","depth2","depth3"];return`
      ${En(g)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${kn(m,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${i}, ${r}, ${o})) +
          depth3;
        ${Tn(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1];if(f===c&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;const p=Jt(n);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${p};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${n}, uv);
    }
  `}function cb(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:o,keptDims:r}=he(e);if(o.length<e.length){const m=Rn(t,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${En(m)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${kn(x,r)});
      }
    `}const i=e[5],c=e[4]*i,a=e[3]*c,l=e[2]*a,u=e[1]*l;if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${a}, ${c})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Tn(t)}
      }
    `;const d=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],p=h[1];if(p===u&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${a}, ${c}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(p===i&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;const g=Jt(n);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${a} +
          depth2 * ${c} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function Tn(t){const e=t.name,n=v(t.shapeInfo.logicalShape);return n<2?`return ${e};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function lb(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),o="get"+s+"AtOutCoords",r=t.shapeInfo.logicalShape.length,i=e.logicalShape.length,c=$l(t.shapeInfo.logicalShape,e.logicalShape),a=xe(i),l=i-r;let u;const d=["x","y","z","w","u","v"];r===0?u="":i<2&&c.length>=1?u="coords = 0;":u=c.map(b=>`coords.${d[b+l]} = 0;`).join(`
`);let h="";i<2&&r>0?h="coords":h=t.shapeInfo.logicalShape.map((b,C)=>`coords.${d[C+l]}`).join(", ");let f="return outputValue;";const g=v(t.shapeInfo.logicalShape)===1,x=v(e.logicalShape)===1;if(r===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(c.length){const b=r-2,C=r-1;c.indexOf(b)>-1&&c.indexOf(C)>-1?f="return vec4(outputValue.x);":c.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":c.indexOf(C)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${a} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${h});
      ${f}
    }
  `}function ub(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),o="get"+s+"AtOutCoords",r=e.texShape,i=t.shapeInfo.texShape,c=t.shapeInfo.logicalShape.length,a=e.logicalShape.length;if(!t.shapeInfo.isUniform&&c===a&&t.shapeInfo.flatOffset==null&&w(i,r))return`
      float ${o}() {
        return sampleTexture(${n}, resultUV);
      }
    `;const l=xe(a),u=$l(t.shapeInfo.logicalShape,e.logicalShape),d=a-c;let h;const f=["x","y","z","w","u","v"];c===0?h="":a<2&&u.length>=1?h="coords = 0;":h=u.map(g=>`coords.${f[g+d]} = 0;`).join(`
`);let p="";return a<2&&c>0?p="coords":p=t.shapeInfo.logicalShape.map((g,m)=>`coords.${f[m+d]}`).join(", "),`
    float ${o}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${s}(${p});
    }
  `}function xe(t){if(t<=1)return"int";if(t===2)return"ivec2";if(t===3)return"ivec3";if(t===4)return"ivec4";if(t===5)return"ivec5";if(t===6)return"ivec6";throw Error(`GPU for rank ${t} is not yet supported`)}function zr(t,e,n){const{newShape:s,keptDims:o}=he(e),r=e.length,i=t&&r===3&&e[0]===1,c=i?e.slice(1):s,a=!t&&r>1&&!w(e,n)&&s.length<r||i;return{useSqueezeShape:a,uniformShape:a?c:e,keptDims:o}}function Rn(t,e){const n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function kn(t,e){return e.map(n=>t[n]).join(", ")}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(t,e,n,s){const o=n.map((u,d)=>{const h={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(h.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[d],shapeInfo:h}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},c=k0(o,i,e),a=r0(t.gl,c),l=t.createProgram(a);return S().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:a,source:c,webGLProgram:l,inShapeInfos:r,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:e,fragmentShader:a,source:c,webGLProgram:l,inShapeInfos:r,outShapeInfo:i},El(t,e,l))}function El(t,e,n){const s={},o={},r={},i=[];let c,a,l,u=null,d=null;d=t.getUniformLocation(n,"NAN",!1),S().getNumber("WEBGL_VERSION")===1&&(u=t.getUniformLocation(n,"INFINITY",!1));const h=!1;for(let f=0;f<e.variableNames.length;f++){const p=e.variableNames[f];s[p]=t.getUniformLocation(n,p,h),s[`offset${p}`]=t.getUniformLocation(n,`offset${p}`,h),e.enableShapeUniforms&&(o[`${p}Shape`]=t.getUniformLocation(n,`${p}Shape`,h),r[`${p}TexShape`]=t.getUniformLocation(n,`${p}TexShape`,h))}return e.enableShapeUniforms&&(c=t.getUniformLocation(n,"outShape",h),l=t.getUniformLocation(n,"outShapeStrides",h),a=t.getUniformLocation(n,"outTexShape",h)),e.customUniforms&&e.customUniforms.forEach((f,p)=>{i[p]=t.getUniformLocation(n,f.name,h)}),{uniformLocations:s,customUniformLocations:i,infLoc:u,nanLoc:d,inShapesLocations:o,inTexShapesLocations:r,outShapeLocation:c,outShapeStridesLocation:l,outTexShapeLocation:a}}function Tl(t,e){if(t.length!==e.length)throw Error(`Binary was compiled with ${t.length} inputs, but was executed with ${e.length} inputs`);t.forEach((n,s)=>{const o=n.logicalShape,r=e[s],i=r.shape;if(!w(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(n.isUniform&&r.isUniform)return;const c=n.texShape,a=r.isUniform?null:r.texData.texShape;if(!w(c,a))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${c} and ${a} must match`)})}function hb(t,e,n,s,o){e.program.enableShapeUniforms||(Tl(e.inShapeInfos,n),Tl([e.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?t.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):t.setOutputMatrixTexture(r.texture,i[0],i[1]),t.setProgram(e.webGLProgram),S().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&t.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((a,l)=>{const u=e.program.variableNames[l],d=e.uniformLocations[u],h=e.uniformLocations[`offset${u}`],f=e.inShapesLocations[`${u}Shape`],p=e.inTexShapesLocations[`${u}TexShape`];if(f){const{uniformShape:g}=zr(e.program.packedInputs,a.shape,a.texData.texShape);switch(g.length){case 1:t.gl.uniform1iv(f,new Int32Array(g));break;case 2:t.gl.uniform2iv(f,new Int32Array(g));break;case 3:t.gl.uniform3iv(f,new Int32Array(g));break;case 4:t.gl.uniform4iv(f,new Int32Array(g));break;default:break}}if(p&&t.gl.uniform2i(p,a.texData.texShape[0],a.texData.texShape[1]),d!=null){if(a.isUniform){if(v(a.shape)<2)t.gl.uniform1f(d,a.uniformValues[0]);else{let g=a.uniformValues;g instanceof Float32Array||(g=new Float32Array(g)),t.gl.uniform1fv(d,g)}return}a.texData.slice!=null&&h!=null&&t.gl.uniform1i(h,a.texData.slice.flatOffset),t.setInputMatrixTexture(a.texData.texture.texture,d,l)}});const c=e.outShapeLocation;if(c)switch(s.shape.length){case 1:t.gl.uniform1iv(c,new Int32Array(s.shape));break;case 2:t.gl.uniform2iv(c,new Int32Array(s.shape));break;case 3:t.gl.uniform3iv(c,new Int32Array(s.shape));break;case 4:t.gl.uniform4iv(c,new Int32Array(s.shape));break;default:break}if(e.outShapeStridesLocation){const a=Re(s.shape);switch(s.shape.length){case 2:t.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(a));break;case 3:t.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(a));break;case 4:t.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(a));break;default:break}}e.outTexShapeLocation&&t.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&o&&e.program.customUniforms.forEach((a,l)=>{const u=e.customUniformLocations[l],d=o[l];if(a.type==="float")t.gl.uniform1fv(u,d);else if(a.type==="vec2")t.gl.uniform2fv(u,d);else if(a.type==="vec3")t.gl.uniform3fv(u,d);else if(a.type==="vec4")t.gl.uniform4fv(u,d);else if(a.type==="int")t.gl.uniform1iv(u,d);else if(a.type==="ivec2")t.gl.uniform2iv(u,d);else if(a.type==="ivec3")t.gl.uniform3iv(u,d);else if(a.type==="ivec4")t.gl.uniform4iv(u,d);else throw Error(`uniform type ${a.type} is not supported yet.`)}),t.executeProgram()}function fb(t,e,n){let s="";e.concat(n).forEach(i=>{const c=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(t.enableShapeUniforms&&!i.isUniform){const a=i.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:d}=zr(t.packedInputs,i.shape,a);let h="",f="",p="";if(u.length===1&&t.packedInputs){const $=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];h=`${$[0]>1}_${$[1]>1}`}else if(u.length===2&&!t.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!t.packedInputs){const $=Re(u);p=`${$[0]===a[1]}_${$[$.length-1]===a[1]}`}const g=i.shape.length,m=u.length===2&&w(i.shape,a),x=v(i.shape)===1,b=fn(i.shape,n.shape),C=!t.packedInputs&&g===n.shape.length&&w(a,n.texData.texShape),y=t.packedInputs||u.length>2?"":`${a[0]>1}_${a[1]>1}`;s+=`${g}_${C}_${l?d:""}_${u.length}_${x}_${b}_${m}_${h}_${f}_${p}_${y}_${c}`}else{const a=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${a}_${c}`}});const o=t.userCode;let r=t.constructor.name;return r+="_"+s+"_"+o+`${S().getNumber("WEBGL_VERSION")}`,r}function Ve(t){return S().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&t<=4}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pb{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Zn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Me();this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?uo(["r","c","d"],e):Zt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Zn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Me();this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?uo(["r","c","d"],e):Zt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mb{constructor(e){this.variableNames=["A"],this.outTexUsage=et.DOWNLOAD;const n=Me();this.outputShape=e,this.userCode=`
      ${vl}

      void main() {
        float x = getAAtOutCoords();
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=et.DOWNLOAD;const n=Me();this.outputShape=e,this.userCode=`
      ${vl}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bb{constructor(e,n=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Me();this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length);let o="result";n&&(o="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?Gr():Wr(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${s.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${s.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wb{constructor(e,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Me();this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length);let o="",r="result";n&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let c=0;c<=1;c++){const a=i*2+c;o+=`
          localCoords = coords;
          if(localCoords[2] + ${c} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${c};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Gr():Wr(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(t){const e=Me(),n=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return o0(t,n)}function yb(t){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return l0(t,e)}function vb(t){const e=new Uint16Array([0,1,2,2,1,3]);return u0(t,e)}function ts(t,e,n,s,o,r){h0(e,n);const i=d0(t),c=t.TEXTURE_2D;return L(t,()=>t.bindTexture(c,i)),L(t,()=>t.texParameteri(c,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(c,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(c,t.TEXTURE_MIN_FILTER,t.NEAREST)),L(t,()=>t.texParameteri(c,t.TEXTURE_MAG_FILTER,t.NEAREST)),S().getNumber("WEBGL_VERSION")===1?L(t,()=>t.texImage2D(c,0,s,e,n,0,o,r,null)):L(t,()=>t.texStorage2D(c,1,s,e,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null)),{texture:i,texShape:[n,e]}}function Rl(t){return t.internalFormatFloat}function $b(t,e,n,s){const[o,r]=Jn(e,n);return ts(t,o,r,Rl(s),s.textureFormatFloat,t.FLOAT)}function kl(t){return t.internalFormatHalfFloat}function Sb(t,e,n,s){const[o,r]=Jn(e,n);return ts(t,o,r,kl(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Nl(t){return t.downloadTextureFormat}function Ib(t,e,n,s){const[o,r]=Jn(e,n);return ts(t,o,r,Nl(s),t.RGBA,t.UNSIGNED_BYTE)}function Al(t){return t.internalFormatPackedFloat}function Eb(t,e,n,s){const[o,r]=$n(e,n);return ts(t,o,r,Al(s),t.RGBA,t.FLOAT)}function _l(t){return t.internalFormatPackedHalfFloat}function Tb(t,e,n,s){const[o,r]=$n(e,n);return ts(t,o,r,_l(s),t.RGBA,s.textureTypeHalfFloat)}function Rb(t,e,n){return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),bl(t,e,"clipSpacePos",n,3,20,0)&&bl(t,e,"uv",n,2,20,12)}function kb(t,e,n,s,o,r){L(t,()=>t.bindTexture(t.TEXTURE_2D,e));let i,c,a;o instanceof Uint8Array?(i=new Uint8Array(n*s*4),c=t.UNSIGNED_BYTE,a=t.RGBA):(i=new Float32Array(n*s*4),c=t.FLOAT,a=r.internalFormatPackedFloat),i.set(o),S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n,s,t.RGBA,c,i)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,a,n,s,0,t.RGBA,c,i)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Nb(t,e,n){L(t,()=>t.bindTexture(t.TEXTURE_2D,e)),n.data instanceof Uint8Array?S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,n.data)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,n.data)):S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,n)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Ab(t,e,n,s){const o=t.createBuffer();L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,o));const c=4*4*e*n;return L(t,()=>t.bufferData(t.PIXEL_PACK_BUFFER,c,t.STREAM_READ)),L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,0)),L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,null)),o}function _b(t,e,n){const s=t,o=new Float32Array(n);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function Db(t,e,n,s){const[o,r]=Jn(e,n),i=4,c=new Uint8Array(Qx(e*n,i));return L(t,()=>t.readPixels(0,0,o,r,s.downloadTextureFormat,t.UNSIGNED_BYTE,c)),new Float32Array(c.buffer)}function Fb(t,e,n,s,o,r,i,c){const a=t,l=new Float32Array(Zx(r,i));return a.bindBuffer(a.PIXEL_PACK_BUFFER,e),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,l),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),l}function Ob(t,e,n){const s=new Float32Array(e*n*4);return L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,s)),s}var Pb=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hr{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const n=S().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,Kx(n,e)):this.gl=xt(n);let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),S().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=oo(this.gl,r),rt(this.gl,i))this.textureHalfFloatExtension=oo(this.gl,i);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),rt(this.gl,o))this.colorBufferHalfFloatExtension=oo(this.gl,o);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",rt(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(rt(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=yb(this.gl),this.indexBuffer=vb(this.gl),this.framebuffer=f0(this.gl),this.textureConfig=Lr(this.gl,this.textureHalfFloatExtension)}get debug(){return S().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;L(e,()=>e.finish()),L(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),L(e,()=>e.deleteFramebuffer(this.framebuffer)),L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),L(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),L(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,n){return this.throwIfDisposed(),$b(this.gl,e,n,this.textureConfig)}createFloat16MatrixTexture(e,n){return this.throwIfDisposed(),Sb(this.gl,e,n,this.textureConfig)}createUnsignedBytesMatrixTexture(e,n){return this.throwIfDisposed(),Ib(this.gl,e,n,this.textureConfig)}uploadPixelDataToTexture(e,n){this.throwIfDisposed(),Nb(this.gl,e,n)}uploadDenseMatrixToTexture(e,n,s,o){this.throwIfDisposed(),kb(this.gl,e,n,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,n){return this.throwIfDisposed(),Tb(this.gl,e,n,this.textureConfig)}createPackedMatrixTexture(e,n){return this.throwIfDisposed(),Eb(this.gl,e,n,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(wl(this.gl,this.framebuffer),this.outputTexture=null),L(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,n,s){return this.downloadMatrixDriver(e,()=>Db(this.gl,n,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,n,s,o,r,i){return Fb(this.gl,e,n,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,n){return _b(this.gl,e,n)}createBufferFromTexture(e,n,s){this.bindTextureToFrameBuffer(e);const o=Ab(this.gl,n,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let n,s;if(S().getBool("WEBGL_FENCE_API_ENABLED")){const o=e,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},n=r}else S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(n,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:n,isFencePassed:s}}downloadMatrixFromPackedTexture(e,n,s){return this.downloadMatrixDriver(e,()=>Ob(this.gl,n,s))}createProgram(e){this.throwIfDisposed();const n=this.gl;this.vertexShader==null&&(this.vertexShader=Cb(n));const s=a0(n);return L(n,()=>n.attachShader(s,this.vertexShader)),L(n,()=>n.attachShader(s,e)),c0(n,s),this.debug&&Br(n,s),this.vertexAttrsAreBound||(this.setProgram(s),this.vertexAttrsAreBound=Rb(n,this.program,this.vertexBuffer)),s}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&L(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Br(this.gl,this.program),L(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,n,s=!0){return this.throwIfDisposed(),s?g0(this.gl,e,n):m0(this.gl,e,n)}getAttributeLocation(e,n){return this.throwIfDisposed(),L(this.gl,()=>this.gl.getAttribLocation(e,n))}getUniformLocationNoThrow(e,n){return this.throwIfDisposed(),this.gl.getUniformLocation(e,n)}setInputMatrixTexture(e,n,s){this.throwIfDisposed(),this.throwIfNoProgram(),x0(this.gl,e,n,s)}setOutputMatrixTexture(e,n,s){this.setOutputMatrixTextureDriver(e,s,n)}setOutputPackedMatrixTexture(e,n,s){this.throwIfDisposed();const[o,r]=$n(n,s);this.setOutputMatrixTextureDriver(e,o,r)}setOutputMatrixWriteRegion(e,n,s,o){this.setOutputMatrixWriteRegionDriver(s,e,o,n)}setOutputPackedMatrixWriteRegion(e,n,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Br(this.gl,this.program),ro(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),L(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),L(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=oo(this.gl,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const e=this.getQueryTimerExtensionWebGL1(),n=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,n),n}endQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const n=this.gl,s=this.getQueryTimerExtensionWebGL2();n.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return Pb(this,null,function*(){return yield Fe(()=>this.disposed||this.isQueryAvailable(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,n){if(n===0)return null;if(n===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,n){if(n===0)return!0;if(n===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(n=>{this.addItemToPoll(()=>e.isFencePassed(),()=>n())})}pollItems(){const e=Lb(this.itemsToPoll.map(n=>n.isDoneFn));for(let n=0;n<=e;++n){const{resolveFn:s}=this.itemsToPoll[n];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,n){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:n}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in S().platform&&(s=S().platform.setTimeoutCustom.bind(S().platform)),Fe(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Mr(this.gl,e,this.framebuffer),this.debug&&ro(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Mr(this.gl,this.outputTexture,this.framebuffer),this.debug&&ro(this.gl)):wl(this.gl,this.framebuffer)}downloadMatrixDriver(e,n){this.bindTextureToFrameBuffer(e);const s=n();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,n,s){this.throwIfDisposed();const o=this.gl;Mr(o,e,this.framebuffer),this.debug&&ro(o),this.outputTexture=e,L(o,()=>o.viewport(0,0,n,s)),L(o,()=>o.scissor(0,0,n,s))}setOutputMatrixWriteRegionDriver(e,n,s,o){this.throwIfDisposed(),L(this.gl,()=>this.gl.scissor(e,n,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function Lb(t){let e=0;for(;e<t.length&&t[e]();++e);return e-1}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lt(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&E(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dl(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}const mR={kernelName:_o,backendName:"cpu",kernelFunc:t=>{const{x:e}=t.inputs,n=t.backend;Lt(e,"abs");let s=new Float32Array(v(e.shape));const o=n.data.get(e.dataId).values;return s=Dl(o),n.makeOutput(s,e.shape,e.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tt(t){return(e,n,s,o,r)=>{const i=ve(e,n),c=i.length,a=Re(i),l=v(i),u=Se(r,l),d=e.length,h=n.length,f=Re(e),p=Re(n),g=fn(e,i),m=fn(n,i);if(g.length+m.length===0)for(let x=0;x<u.length;++x)u[x]=t(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=gs(x,c,a),C=b.slice(-d);g.forEach(R=>C[R]=0);const y=Mn(C,d,f),$=b.slice(-h);m.forEach(R=>$[R]=0);const N=Mn($,h,p);u[x]=t(s[y],o[N])}return[u,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fo(t){const{inputs:e,backend:n}=t,{real:s,imag:o}=e,r=n.data.get(s.dataId).values,i=n.data.get(o.dataId).values,c=n.makeTensorInfo(s.shape,"complex64"),a=n.data.get(c.dataId);return a.complexTensorInfos={real:n.makeTensorInfo(s.shape,"float32",r),imag:n.makeTensorInfo(o.shape,"float32",i)},c}const xR={kernelName:Fo,backendName:"cpu",kernelFunc:fo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xr(t,e,n="float32"){if(n==="complex64"){const o=Xr(t,e,"float32"),r=Xr(t,e,"float32");return fo({inputs:{real:o,imag:r},backend:t})}const s=Et(v(e),n);return t.makeTensorInfo(e,n,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qr(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const bR={kernelName:Cs,backendName:"cpu",kernelFunc:qr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fl(t){const{inputs:e,backend:n}=t,{input:s}=e,o=n.data.get(s.dataId).complexTensorInfos.real,r=n.data.get(o.dataId).values;return n.makeTensorInfo(o.shape,o.dtype,r)}const wR={kernelName:Uo,backendName:"cpu",kernelFunc:Fl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ol(t,e,n,s){if(s==="int32"){const o=Int32Array.from(t);return[e,"int32",o]}if(s==="bool"){const o=_s([0],n),[r,i]=tt((c,a)=>c!==a?1:0)(e,[],t,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${n} to ${s}`)}function ns(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return qr({inputs:{x:o},backend:n});const u=Xr(n,o.shape,o.dtype),d=ns({inputs:{x:o},backend:n,attrs:{dtype:"float32"}}),h=fo({inputs:{real:d,imag:u},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),h}if(o.dtype==="complex64"){const u=Fl({inputs:{input:o},backend:n}),d=ns({inputs:{x:u},backend:n,attrs:{dtype:r}});return n.disposeIntermediateTensorInfo(u),d}if(!ai(o.dtype,r)){const u=qr({inputs:{x:o},backend:n});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=n.data.get(o.dataId).values,[c,a,l]=Ol(i,o.shape,o.dtype,r);return n.makeTensorInfo(c,a,l)}const CR={kernelName:ms,backendName:"cpu",kernelFunc:ns};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(t,e,n,s){return n==null?({inputs:o,backend:r})=>{const{a:i,b:c}=o,a=r;Lt([i,c],t);const l=a.data.get(i.dataId).values,u=a.data.get(c.dataId).values,d=i.dtype==="string"?Qt(l):l,h=i.dtype==="string"?Qt(u):u,f=s||i.dtype,[p,g]=e(i.shape,c.shape,d,h,f);return a.makeTensorInfo(g,f,p)}:({inputs:o,backend:r})=>{const{a:i,b:c}=o,a=r;if(i.dtype==="complex64"||c.dtype==="complex64"){const l=ns({inputs:{x:i},backend:a,attrs:{dtype:"complex64"}}),u=a.data.get(l.dataId),d=u.complexTensorInfos.real,h=u.complexTensorInfos.imag,f=a.data.get(d.dataId).values,p=a.data.get(h.dataId).values,g=ns({inputs:{x:c},backend:a,attrs:{dtype:"complex64"}}),m=a.data.get(g.dataId),x=m.complexTensorInfos.real,b=m.complexTensorInfos.imag,C=a.data.get(x.dataId).values,y=a.data.get(b.dataId).values,[$,N,R]=n(i.shape,c.shape,f,p,C,y),k=a.makeTensorInfo(R,"float32",$),B=a.makeTensorInfo(R,"float32",N),U=fo({inputs:{real:k,imag:B},backend:a});return a.disposeIntermediateTensorInfo(l),a.disposeIntermediateTensorInfo(g),a.disposeIntermediateTensorInfo(k),a.disposeIntermediateTensorInfo(B),U}else{const l=a.data.get(i.dataId).values,u=a.data.get(c.dataId).values,d=s||i.dtype,[h,f]=e(i.shape,c.shape,l,u,d);return a.makeTensorInfo(f,d,h)}}}function Kr(t){return(e,n,s,o,r,i)=>{const c=ve(e,n),a=v(c),l=c.length,u=Re(c),d=Se("float32",a),h=Se("float32",a),f=fn(e,c),p=fn(n,c),g=Qn(s,o),m=Qn(r,i),x=e.length,b=Re(e),C=n.length,y=Re(n);if(f.length+p.length===0)for(let $=0;$<d.length;$++){const N=$%g.length,R=$%m.length,k=t(g[N*2],g[N*2+1],m[R*2],m[R*2+1]);d[$]=k.real,h[$]=k.imag}else for(let $=0;$<d.length;$++){const N=gs($,l,u),R=N.slice(-x);f.forEach(ie=>R[ie]=0);const k=Mn(R,x,b),B=N.slice(-C);p.forEach(ie=>B[ie]=0);const U=Mn(B,C,y),Y=t(g[k*2],g[k*2+1],m[U*2],m[U*2+1]);d[$]=Y.real,h[$]=Y.imag}return[d,h,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pl=tt((t,e)=>t+e),Bb=Kr((t,e,n,s)=>({real:t+n,imag:e+s})),Mb=it(Vn,Pl,Bb),yR={kernelName:Vn,backendName:"cpu",kernelFunc:Mb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(t,e,n,s,o){const r=v(s),i=Et(o,n);for(let c=0;c<t.length;c++){const a=t[c];if(a<0)throw new Error("Input x must be non-negative!");a>=o||(r>0?i[a]+=e[c]:i[a]+=1)}return i}function Ub(t,e,n,s=!1){const o=t.shape[0],r=t.shape[1],i=Ne([o,n],e.dtype);for(let c=0;c<o;c++)for(let a=0;a<r;a++){const l=t.get(c,a);if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s?i.set(1,c,l):e.size>0?i.set(i.get(c,l)+e.get(c,a),c,l):i.set(i.get(c,l)+1,c,l))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bt(t){return(e,n,s)=>{const o=Se(n,e.length);for(let r=0;r<e.length;++r)o[r]=t(e[r],s);return o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ll(t,e,n){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;if(Lt(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=r,a=c.data.get(i.dataId).values,l=v(i.shape),u=n||i.dtype,d=ne(u,l);for(let h=0;h<l;++h)d[h]=e(a[h],o);return c.makeTensorInfo(i.shape,u,d)}}function Nn(t,e,n){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;if(Lt(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=r,a=c.data.get(i.dataId).values,l=n||i.dtype,u=e(a,l,o);return c.makeTensorInfo(i.shape,l,u)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bl=Bt(t=>Math.ceil(t)),Wb=Nn(Do,Bl),vR={kernelName:Do,backendName:"cpu",kernelFunc:Wb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(t,e,n,s){const o=ne(n,v(e));if(s&&n!=="string"){let r=0;t.forEach(i=>{const c=v(i.shape);o.set(i.vals,r),r+=c})}else{let r=0;t.forEach(i=>{const c=n==="string"?Qt(i.vals):i.vals;let a=0;for(let l=0;l<i.shape[0];++l){const u=l*e[1]+r;for(let d=0;d<i.shape[1];++d)o[u+d]=c[a++]}r+=i.shape[1]})}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ml=tt((t,e)=>t===e?1:0),zb=it(Oo,Ml,null,"bool"),$R={kernelName:Oo,backendName:"cpu",kernelFunc:zb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=Bt(t=>Math.exp(t)),Hb=Nn(xs,Vl,"float32"),SR={kernelName:xs,backendName:"cpu",kernelFunc:Hb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ul=Bt(t=>Math.expm1(t)),Xb=Nn(Po,Ul),IR={kernelName:Po,backendName:"cpu",kernelFunc:Xb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=Bt(t=>Math.floor(t)),qb=Nn(Lo,Wl),ER={kernelName:Lo,backendName:"cpu",kernelFunc:qb};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(t,e,n,s,o,r,i,c,a){const l=Ne([s,r],n);for(let u=0;u<s;u++){const d=[];let h=0;for(let f=0;f<o;f++){const p=t[u*o+f];h+=p*i[f],d.push(p)}if(h<0||h>=a/r)throw new Error(`Invalid indices: ${d} does not index into ${c}`);for(let f=0;f<r;f++)l.values[u*r+f]=e.get(...e.indexToLoc(h*r+f))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(t,e,n){const s=Ne(n,t.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),c=i[0],a=i[2],l=e.locToIndex([c,a]);i[2]=e.values[l];const u=t.locToIndex(i);0<=u&&u<t.values.length&&(s.values[o]=t.values[u])}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=tt((t,e)=>t>e?1:0),Yb=it(bs,Gl,null,"bool"),TR={kernelName:bs,backendName:"cpu",kernelFunc:Yb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zl=tt((t,e)=>t>=e?1:0),Qb=it(ws,zl,null,"bool"),RR={kernelName:ws,backendName:"cpu",kernelFunc:Qb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=tt((t,e)=>t<e?1:0),Zb=it(Bo,Hl,null,"bool"),kR={kernelName:Bo,backendName:"cpu",kernelFunc:Zb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xl=tt((t,e)=>t<=e?1:0),Jb=it(ys,Xl,null,"bool"),NR={kernelName:ys,backendName:"cpu",kernelFunc:Jb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(t,e,n){const s=(e-t)/(n-1),o=Et(n,"float32");o[0]=t;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ql=Bt(t=>Math.log(t)),tw=Nn(vs,ql),AR={kernelName:vs,backendName:"cpu",kernelFunc:tw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(t,e,n,s){const o=Se(s,v(n));for(let r=0;r<o.length;++r){const i=r*e;let c=t[i];for(let a=0;a<e;++a){const l=t[i+a];(Number.isNaN(l)||l>c)&&(c=l)}o[r]=c}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=tt((t,e)=>Math.max(t,e)),sw=it(Mo,Kl),_R={kernelName:Mo,backendName:"cpu",kernelFunc:sw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jl=tt((t,e)=>Math.min(t,e)),ow=it($s,jl),DR={kernelName:$s,backendName:"cpu",kernelFunc:ow};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jr=tt((t,e)=>t*e),rw=Kr((t,e,n,s)=>({real:t*n-e*s,imag:t*s+e*n})),iw=it(Ss,jr,rw),FR={kernelName:Ss,backendName:"cpu",kernelFunc:iw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yl(t,e,n){const s=rn(-1,n);return jr([],e,s,t,n)}function aw(t){const{inputs:e,backend:n}=t,{x:s}=e;Lt(s,"neg");const o=n.data.get(s.dataId).values,[r,i]=Yl(o,s.shape,s.dtype);return n.makeTensorInfo(i,s.dtype,r)}const OR={kernelName:Vo,backendName:"cpu",kernelFunc:aw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ql=tt((t,e)=>t!==e?1:0),cw=it(Is,Ql,null,"bool"),PR={kernelName:Is,backendName:"cpu",kernelFunc:cw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zl(t,e,n,s,o){const r=e.length,i=v(e),c=Re(e),a=Re(o),l=Se(n,v(o));for(let u=0;u<i;++u){const d=gs(u,r,c),h=new Array(d.length);for(let p=0;p<h.length;p++)h[p]=d[s[p]];const f=Mn(h,r,a);l[f]=t[u]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jl(t){const{inputs:e,attrs:n,backend:s}=t,{x:o}=e,{perm:r}=n;Lt(o,"transpose");const i=o.shape.length,c=new Array(i);for(let d=0;d<c.length;d++)c[d]=o.shape[r[d]];const a=s.data.get(o.dataId).values,l=Zl(a,o.shape,o.dtype,r,c);return{dataId:s.write(l,c,o.dtype),shape:c,dtype:o.dtype}}const LR={kernelName:Un,backendName:"cpu",kernelFunc:Jl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eu(t,e,n,s){const[o,r]=It(t,s),i=Ct(e,"int32"),c=Et(v(o),i),a=v(r);for(let l=0;l<c.length;++l){const u=l*a;let d=1;for(let h=0;h<a;++h)d*=n[u+h];c[l]=d}return{outVals:c,outShape:o,outDtype:i}}function lw(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s;Lt(o,"prod");const c=o.shape.length,a=te(r,o.shape),l=Ze(a,c);let u=a,d=o;const h=[];l!=null&&(d=Jl({inputs:{x:o},backend:n,attrs:{perm:l}}),h.push(d),u=Je(u.length,c));const f=n.data.get(d.dataId).values,{outVals:p,outShape:g,outDtype:m}=eu(d.shape,d.dtype,f,u);let x=g;return i&&(x=Qe(g,a)),h.forEach(b=>n.disposeIntermediateTensorInfo(b)),n.makeTensorInfo(x,m,p)}const BR={kernelName:Wi,backendName:"cpu",kernelFunc:lw};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw(t,e,n){t.forEach((s,o)=>{if(s<0||s>=n){const r=gs(o,e.length,Re(e)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${n})`)}})}function dw(t,e){for(let n=0;n<t.length;++n){const s=t[n],o=n===t.length-1?e:t[n+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function hw(t,e,n,s){const o=[];let r=0;const i=e.length-1+n.length,c=new Array(i).fill(null).map(()=>[0]);dw(n,s);let a=1;for(let l=0;l<e.length-1;++l){a*=e[l];const u=e[l+1];for(let d=1;d<a+1;++d)c[l].push(d*u)}for(let l=0;l<t.length;++l){let u=t[l],d=t[l]+1;for(let h=0;h<n.length;++h){const f=n[h],p=h+e.length-1;if(p>=0){const g=c[p],m=g[g.length-1]-f[u];for(let x=u;x<d;++x)c[p].push(f[x+1]+m)}u=f[u],d=f[d]}d!==u&&(o.push([u,d]),r+=d-u)}return{outSplits:c,valueSlices:o,numValues:r}}function fw(t){const e=[];for(let n=0;n<t.length;++n){const s=t[n].length,o=ne("int32",s);e.push(o),t[n].forEach((r,i)=>o[i]=r)}return e}function tu(t,e){const n=t.slice(0,e);for(;n.length<e;)n.push(1);for(let s=e;s<t.length;s++)n[e-1]*=t[s];return n}function pw(t,e,n,s,o,r){const i=tu(e,2)[1],c=tu(r,2)[1];let a=0;for(const l of n)for(let u=l[0];u<l[1];++u){for(let d=0;d<s;++d)o[a*c+d]=t[u*i+d];++a}}function gw(t,e,n,s,o){const r=e.slice();r[0]=o;const i=ne(n,v(r)),c=t.length,a=c===0?0:c/e[0];return pw(t,e,s,a,i,r),[i,r]}function mw(t,e,n,s,o,r,i,c){if(t.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const a=e[0][0]-1;if(uw(r,i,a),s.length===0)throw new Error("params.rank must be nonzero");const l=s[0],{outSplits:u,valueSlices:d,numValues:h}=hw(r,i,t,l),f=fw(u),p=gw(n,s,o,d,h);return[f,p[0],p[1]]}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var at=mt;class po{constructor(e,n,s,o,r,i,c,a,l,u){this.shape=e,this.shapeShape=n,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=c,this.rowPartitionValues=a,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=_c(u),this.raggedRank=Dc(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===at.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===at.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const n=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case at.VALUE_ROWIDS:return po.getMaxWidthValueRowID(n);case at.ROW_SPLITS:return po.getMaxWidthRowSplit(n);default:throw new Error(`Cannot handle partition type ${at[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const n=e.length;if(n===0||n===1)return 0;let s=0;for(let o=0;o<n-1;++o){const r=e[o+1]-e[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(e){const n=e.length;if(n===0)return 0;let s=0,o=e[0],r=0;for(let i=1;i<n;++i){const c=e[i];c!==o&&(o=c,r=Math.max(i-s,r),s=i)}return Math.max(n-s,r)}tensorShapeFromTensor(e,n,s=!0){if(n.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return su(e,s)}calculateOutputSize(e){const n=this.valuesShape,s=this.defaultValueShape;Fc(s,n);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Ac(this.raggedRank,o,n);i[0]<0&&(i[0]=e);for(let c=1;c<=this.raggedRank;++c)i[c]<0&&(i[c]=this.getMaxWidth(c));return i}calculateFirstParentOutputIndex(e,n,s){const o=Math.min(e,s),r=[];let i=0;for(let c=0;c<o;++c,i+=n)r.push(i);for(let c=o;c<e;++c)r.push(-1);return E(r.length===e,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(e,n,s,o){const r=e.length,i=[];for(let c=0;c<r-1;++c){const a=e[c+1]-e[c];let l=Math.min(o,a),u=n[c];u===-1&&(l=0);for(let d=0;d<l;++d)i.push(u),u+=s;for(let d=0;d<a-l;++d)i.push(-1)}if(r>0&&i.length!==e[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,n,s,o){const r=e.length,i=[];if(r===0)return[];let c=0,a=e[0];if(a>=n.length)throw new Error(`Got currentValueRowId=${a}, which is not less than ${n.length}`);let l=n[a];i.push(l);for(let u=1;u<r;++u){const d=e[u];if(d===a)l>=0&&(++c,c<o?l+=s:l=-1);else{if(c=0,a=d,d>=n.length)throw new Error(`Got nextValueRowId=${d} which is not less than ${n.length}`);l=n[d]}i.push(l)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,n,s,o){const r=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case at.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,n,s,o);case at.ROW_SPLITS:if(r.length-1>n.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${n.length}`);return this.calculateOutputIndexRowSplit(r,n,s,o);default:throw new Error(`Unsupported partition type: ${at[i]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const n=this.rowPartitionTypes[0];switch(n){case at.FIRST_DIM_SIZE:return e[0];case at.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case at.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${at[n]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const n=this.getFirstDimensionSize(),s=this.calculateOutputSize(n),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let a=o.length-2;a>=0;--a)o[a]=o[a+1]*s[a+1];const r=su(s,!1),i=ne(this.valuesDType,v(r));if(o[0]*s[0]>0){let a=this.calculateFirstParentOutputIndex(n,o[0],s[0]);for(let l=1;l<=this.raggedRank;++l)a=this.calculateOutputIndex(l-1,a,o[l],s[l]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,n,s,o){if(s.length===0)return;const r=this.values,i=s;let c=o.slice();c=c.slice(e+1);const a=v(c),l=n.length;let u=this.defaultValue;if(u.length!==a&&u.length!==1){const p=this.defaultValueShape;Sr(()=>{const g=fe(u,p);u=Ws(g,c).dataSync()})}let d=0,h=0,f=0;for(let p=0;p<=l;++p){let g=p<l?n[p]:-1;if(g===f){++f;continue}if(h<f){const m=r.subarray(d*a),x=i.subarray(h*a),b=(f-h)*a;nu(x,m,b)}if(p>=l){const m=s.length;g=Math.floor(m/a)}if(g>f)if(this.defaultValue.length===1)i.subarray(f*a,g*a).fill(this.defaultValue[0]),f=g;else for(;g>f;){const m=i.slice(f*a);nu(m,u,a),++f}g<0?(d=p+1,h=f):(d=p,h=f,f=h+1)}}}function nu(t,e,n){for(let s=0;s<n;s++)t[s]=e[s]}function su(t,e){const n=[];for(let s of t){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}n.push(s)}return n}function xw(t,e,n,s,o,r,i,c,a,l){return new po(t,e,n,s,o,r,i,c,a,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bw(t,e,n,s){const o=t===e,r=t<e&&n<0,i=e<t&&n>1;if(o||r||i)return Et(0,s);const c=Math.abs(Math.ceil((e-t)/n)),a=Et(c,s);e<t&&n===1&&(n=-1),a[0]=t;for(let l=1;l<a.length;l++)a[l]=a[l-1]+n;return a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ou=Bt(t=>1/Math.sqrt(t)),ww=Nn(Wo,ou),MR={kernelName:Wo,backendName:"cpu",kernelFunc:ww};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(t,e,n,s,o,r,i,c,a,l){const u=[s/o,o],d=t.values,h=e.values;if(s===0)return Ne(n,e.dtype);const f=Ne(u,e.dtype);typeof a=="string"||typeof a=="number"?f.values.fill(a):typeof a=="boolean"&&f.values.fill(+a);for(let p=0;p<r;p++){const g=[];let m=0;for(let x=0;x<i;x++){const b=d[p*i+x];g.push(b),m+=b*c[x]}if(m<0||m>=s/o)throw new Error(`Invalid indices: ${g} does not index into ${n}`);for(let x=0;x<o;x++)l?f.values[m*o+x]+=h[p*o+x]:f.values[m*o+x]=e.rank===0?h[0]:h[p*o+x]}return f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yw=Bt(t=>1/(1+Math.exp(-t))),vw=Ll(Es,t=>1/(1+Math.exp(-t))),VR={kernelName:Es,backendName:"cpu",kernelFunc:vw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ru(t,e,n,s,o){const r=gr(s,e,n),i=v(n),c=Re(s);if(r){const d=mr(e,c);return o==="string"?t.slice(d,d+i):t.subarray(d,d+i)}const a=o==="string"?Qt(t):t,l=Ne(s,o,a),u=Ne(n,o);for(let d=0;d<u.size;++d){const h=u.indexToLoc(d),f=h.map((p,g)=>p+e[g]);u.set(l.get(...f),...h)}return o==="string"?ml(u.values):u.values}function $w(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{begin:r,size:i}=s;Lt(o,"slice");const[c,a]=xr(o,r,i);pr(o,c,a);const l=n.data.get(o.dataId).values,u=ru(l,c,a,o.shape,o.dtype);return n.makeTensorInfo(a,o.dtype,u)}const UR={kernelName:Go,backendName:"cpu",kernelFunc:$w};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(t,e,n,s,o,r,i){const c=e[0],a=r[0],l=new Array(a),u=new Array(c),d=e[1];if(a===0){if(c!==0)throw new Error(nl(c));const m=ne(n,0),x=ne(o,0);return[m,[0,d],x,l,u]}let h=!0,f=0;const p=new Array(a).fill(0);for(let m=0;m<c;++m){const x=t[m*d];if(x<0)throw new Error(sl(m,x));if(x>=a)throw new Error(ol(m,x,a));++p[x],h=h&&x>=f,f=x}let g=!0;for(let m=0;m<a;++m){const x=p[m]===0;l[m]=x,g=g&&!x,p[m]=Math.max(p[m],1),m>0&&(p[m]+=p[m-1])}if(g&&h){const m=t,x=s;for(let b=0;b<c;++b)u[b]=b;return[m,[c,d],x,l,u]}else{const m=p[a-1],x=ne(n,m*d),b=ne(o,m),C=new Array(a).fill(0);for(let y=0;y<c;++y){const $=t[y*d],N=C[$],R=($===0?0:p[$-1])+N;C[$]++;for(let k=0;k<d;++k)x[R*d+k]=t[y*d+k];b[R]=s[y],u[y]=R}for(let y=0;y<a;++y)if(C[y]===0){const N=y===0?0:p[y-1];x[N*d+0]=y;for(let R=1;R<d;++R)x[N*d+R]=0;b[N]=i}return[x,[m,d],b,l,u]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(t,e,n,s,o){const r=v(s),i=e[0],c=o.length,a=[];let l=1,u=-1;for(let m=0;m<c;++m){const x=o[m];if(x===-1){if(u!==-1)throw new Error(rl(u,m));u=m,a.push(1)}else{if(x<0)throw new Error(il(m,x));l*=x,a.push(x)}}if(u!==-1){if(l<=0)throw new Error(al());const m=Math.trunc(r/l);if(l*m!==r)throw new Error(cl(s,a));a[u]=m}if(v(a)!==r)throw new Error(ll(s,a));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let m=h-2;m>=0;--m)f[m]=f[m+1]*s[m+1]}const p=[];if(c>0){p[c-1]=1;for(let m=c-2;m>=0;--m)p[m]=p[m+1]*a[m+1]}const g=ne(n,i*c);for(let m=0;m<i;++m){let x=0;for(let b=0;b<h;++b)x+=t[m*h+b]*f[b];for(let b=0;b<c;++b)g[m*c+b]=Math.trunc(x/p[b]),x%=p[b]}return[g,[i,c],a]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew(t,e,n,s,o,r=!1,i=0){const c=s.length,a=[e[0],t.length/e[0]],l=a[1],d=c>0?o[c-1]+1:0;if(d<0)throw new Error(Pr());const h=e.slice();h[0]=d;const f=h.reduce((C,y)=>C*y,1),p=ne(n,f);if(c===0)return d>0&&p.fill(i),[p,h];if(d<=0)throw new Error(Pr());let g=0,m=1,x=0,b=o[g];for(;;){let C=0;if(m<c){if(C=o[m],b===C){++m;continue}if(b>=C)throw new Error(ul())}if(b<0||b>=d)throw new Error(dl(b,d));b>x&&p.fill(i,x*l,b*l);for(let y=g;y<m;++y){const $=s[y];if($<0||$>=a[0])throw new Error(hl(y,s[y],a[0]));for(let N=0;N<l;N++)p[b*l+N]+=t[$*l+N]}if(r)for(let y=0;y<l;y++)p[b*l+y]/=m-g;if(g=m,++m,x=b+1,b=C,m>c)break}return x<d&&p.fill(i,x*l,d*l),[p,h]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tw=Bt(t=>Math.sqrt(t)),Rw=Ll(Ts,t=>Math.sqrt(t)),WR={kernelName:Ts,backendName:"cpu",kernelFunc:Rw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iu=tt((t,e)=>{const n=t-e;return n*n}),kw=it(Rs,iu),GR={kernelName:Rs,backendName:"cpu",kernelFunc:kw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(t,e,n,s){const o=Ne(t,e.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),c=new Array(i.length);for(let a=0;a<c.length;a++)c[a]=i[a]*n[a]+s[a];o.set(e.get(...c),...i)}return o}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Aw{constructor(e,n,s,o,r,i){this.separator=Gt(e),this.nGramWidths=n,this.leftPad=Gt(s),this.rightPad=Gt(o),this.padWidth=r,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,n){const s=this.getPadWidth(n);return Math.max(0,e+2*s-n+1)}createNGrams(e,n,s,o,r,i){for(let c=0;c<r;++c){const a=this.getPadWidth(i),l=Math.max(0,a-c),u=Math.max(0,a-(r-(c+1))),d=i-(l+u),h=n+(l>0?0:c-a);let f=0;f+=l*this.leftPad.length;for(let b=0;b<d;++b)f+=e[h+b].length;f+=u*this.rightPad.length,f+=(l+u+d-1)*this.separator.length,s[o+c]=new Uint8Array(f);const g=s[o+c];let m=0;const x=b=>b.forEach(C=>g[m++]=C);for(let b=0;b<l;++b)x(this.leftPad),x(this.separator);for(let b=0;b<d-1;++b)x(e[h+b]),x(this.separator);if(d>0){x(e[h+d-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,n){const s=e.length,o=n.length;if(o>0){let a=n[0];if(a!==0)throw new Error(`First split value must be 0, got ${a}`);for(let l=1;l<o;++l){let u=n[l]>=a;if(u=u&&n[l]<=s,!u)throw new Error(`Invalid split value ${n[l]}, must be in [${a}, ${s}]`);a=n[l]}if(a!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${a}`)}const r=o-1,i=ne("int32",o);if(s===0||o===0){const a=new Array(s);for(let l=0;l<=r;++l)i[l]=0;return[a,i]}i[0]=0;for(let a=1;a<=r;++a){const l=n[a]-n[a-1];let u=0;this.nGramWidths.forEach(d=>{u+=this.getNumNGrams(l,d)}),this.preserveShort&&l>0&&u===0&&(u=1),i[a]=i[a-1]+u}const c=new Array(i[r]);for(let a=0;a<r;++a){const l=n[a];let u=i[a];if(this.nGramWidths.forEach(d=>{const h=n[a+1]-n[a],f=this.getNumNGrams(h,d);this.createNGrams(e,l,c,u,f,d),u+=f}),this.preserveShort&&u===i[a]){const d=n[a+1]-n[a];if(d===0)continue;const h=d+2*this.padWidth,f=1;this.createNGrams(e,l,c,u,f,h)}}return[c,i]}}function _w(t,e,n,s,o,r,i,c){return new Aw(n,s,o,r,i,c).compute(t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(t,e,n,s){if(!t.length)return;if(e.length===0){for(let r=0;r<t.length;++r)s.push(t.subarray(r,r+1));return}if(e.length===1){const r=e[0];let i=t.indexOf(r);for(;i!==-1;){const c=t.subarray(0,i);(!n||c.length!==0)&&s.push(c),t=t.subarray(i+1),i=t.indexOf(r)}(!n||t.length!==0)&&s.push(t);return}let o=0;for(let r=0;r<t.length+1;r++)if(r===t.length||e.indexOf(t[r])!==-1){const i=t.subarray(o,r);(!n||i.length!==0)&&s.push(i),o=r+1}}function Fw(t,e,n){const s=t.length,o=[];let r=0,i=0;const c=new Array(s);for(let h=0;h<s;++h){const f=o.length;Dw(t[h],e,n,o);const p=o.length-f;c[h]=p,r+=p,i=Math.max(i,p)}const a=ne("int32",r*2),l=new Array(r),u=[s,i];let d=0;for(let h=0;h<s;++h)for(let f=0;f<c[h];++f)a[d*2]=h,a[d*2+1]=f,l[d]=o[d],++d;return[a,l,u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(t,e){const n=ne("int32",t.length);for(let s=0;s<t.length;++s)n[s]=df(t[s]).modulo(e).getLowBitsUnsigned();return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const au=tt((t,e)=>t-e),Pw=Kr((t,e,n,s)=>({real:t-n,imag:e-s})),Lw=it(ks,au,Pw),zR={kernelName:ks,backendName:"cpu",kernelFunc:Lw};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bw(t,e){const n=new Array(t.rank);for(let o=0;o<n.length;o++)n[o]=t.shape[o]*e[o];const s=Ne(n,t.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(t.rank);for(let a=0;a<i.length;a++)i[a]=r[a]%t.shape[a];const c=t.locToIndex(i);s.values[o]=t.values[c]}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ss=(t,e)=>{const n=e.value-t.value;return n===0?t.index-e.index:n};function cu(t,e,n=0,s=t.length-1){for(;s>n;){if(s-n>600){const c=s-n+1,a=e-n+1,l=Math.log(c),u=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*u*(c-u)/c)*Math.sign(a-c/2),h=Math.max(n,Math.floor(e-a*u/c+d)),f=Math.min(s,Math.floor(e+(c-a)*u/c+d));cu(t,e,h,f)}const o=t[e];let r=n,i=s;for(X(t,n,e),ss(t[s],o)>0&&X(t,n,s);r<i;){for(X(t,r,i),r++,i--;ss(t[r],o)<0;)r=r+1;for(;ss(t[i],o)>0;)i=i-1}ss(t[n],o)===0?X(t,n,i):(i=i+1,X(t,i,s)),i<=e&&(n=i+1),e<=i&&(s=i-1)}}function Mw(t,e,n,s,o){const r=e[e.length-1],[i,c]=[t.length/r,r],a=Se(n,i*s),l=Se("int32",i*s);for(let d=0;d<i;d++){const h=d*c,f=t.subarray(h,h+c);let p=new Array(f.length);f.forEach((b,C)=>p[C]={value:b,index:C}),s<p.length&&(cu(p,s),p=p.slice(0,s)),o&&p.sort(ss);const g=d*s,m=a.subarray(g,g+s),x=l.subarray(g,g+s);for(let b=0;b<s;b++)m[b]=p[b].value,x[b]=p[b].index}const u=e.slice();return u[u.length-1]=s,[Ne(u,n,a),Ne(u,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(t,e,n,s){const o=te(e,n)[0],r=[1,n[0],1];for(let p=0;p<o;p++)r[0]*=n[p];r[1]=n[o];for(let p=o+1;p<n.length;p++)r[2]*=n[p];const i={},c=new Int32Array(n[o]),a=new jo(r,s,t),l=[],u=r[0]===1&&r[2]===1;for(let p=0;p<n[o];p++){let g;if(u)g=t[p].toString();else{const m=[];for(let x=0;x<r[0];x++)for(let b=0;b<r[2];b++)m.push(a.get(x,p,b));g=m.join(",")}if(i[g]!==void 0)c[p]=i[g];else{const m=Object.keys(i).length;i[g]=m,c[p]=m,l.push(p)}}const d=r.slice();d[1]=Object.keys(i).length;const h=new jo(d,s);l.forEach((p,g)=>{for(let m=0;m<r[0];m++)for(let x=0;x<r[2];x++)h.set(a.get(m,p,x),m,g,x)});const f=n.slice();return f[o]=d[1],{outputValues:h.values,outputShape:f,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:Uw,bincountImpl:lu,bincountReduceImpl:Ww,castImpl:Gw,ceilImpl:zw,concatImpl:Hw,equalImpl:Xw,expImpl:qw,expm1Impl:Kw,floorImpl:jw,gatherNdImpl:Yw,gatherV2Impl:Qw,greaterImpl:Zw,greaterEqualImpl:Jw,lessImpl:eC,lessEqualImpl:tC,linSpaceImpl:nC,logImpl:sC,maxImpl:oC,maximumImpl:rC,minimumImpl:iC,multiplyImpl:aC,negImpl:cC,notEqualImpl:lC,prodImpl:uC,raggedGatherImpl:dC,raggedTensorToTensorImpl:hC,rangeImpl:fC,rsqrtImpl:pC,scatterImpl:gC,sigmoidImpl:mC,simpleAbsImpl:uu,sliceImpl:xC,sparseFillEmptyRowsImpl:bC,sparseReshapeImpl:wC,sparseSegmentReductionImpl:du,sqrtImpl:CC,stridedSliceImpl:yC,stringNGramsImpl:vC,stringSplitImpl:$C,stringToHashBucketFastImpl:SC,subImpl:IC,tileImpl:EC,topKImpl:TC,transposeImpl:Yr,uniqueImpl:RC}=ce;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hu(t,e){return["x","y","z","w","u","v"].slice(0,e).map(n=>`${t}.${n}`)}function Ue(t,e){return e===1?[t]:hu(t,e)}function kC(t,e){if(t===1)return"rc";let n="";for(let s=0;s<t;s++)n+=e[s],s<t-1&&(n+=",");return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class NC{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Ve(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const n=Ue("rc",this.rank),s=xe(this.rank),o=this.getOutOfBoundsCondition(n),r=this.getSetup(n),i=this.getOutput(n);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){const n=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${e[e.length-1-i]},`+r;n.push(r)}return n}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let n="";for(let s=this.rank-2;s<this.rank;s++)n+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(n+="||");return n}getSetup(e){if(this.rank===1)return"";const n=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${n[0]};
      int c = ${n[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){const n=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${n[0]}),
            cEdge ? 0. : getA(${n[1]}),
            rEdge ? 0. : getA(${n[2]}),
            rEdge || cEdge ? 0. : getA(${n[3]})`}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fu{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${AC(n,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Gr():Wr(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function AC(t,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?R0(["r","c","d"],"inputShape"):Zt(["r","c","d"],t)}
      return ivec3(r, c, d);
    }
  `}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _C{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,n,s){const o=gu(n,s),r=mu(e,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=pu(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const a=this.freeTextures[r].shift();return this.usedTextures[r].push(a),a}let c;return o===Ae.PACKED_2X2_FLOAT32?c=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===Ae.PACKED_2X2_FLOAT16?c=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===Ae.UNPACKED_FLOAT32?c=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===Ae.UNPACKED_FLOAT16?c=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===Ae.PACKED_4X1_UNSIGNED_BYTE&&(c=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(c),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),c}releaseTexture(e,n,s,o){if(this.freeTextures==null)return;const r=gu(s,o),i=mu(n,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const c=pu(n,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),a=S().get("WEBGL_DELETE_TEXTURE_THRESHOLD");a!==-1&&this._numBytesAllocated>a?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=c):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=c),this.numUsedTextures--;const l=this.usedTextures[i],u=l.indexOf(e);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(u,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function DC(t,e){const n=t;if(e===n.R32F)return 4;if(e===n.R16F)return 2;if(e===n.RGBA32F)return 16;if(e===t.RGBA)return 16;if(e===n.RGBA16F)return 8;if(e===n.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function pu(t,e,n,s,o){const r=FC(e,s);let i;if(o){const[a,l]=$n(t[0],t[1]);i=a*l}else{const[a,l]=Jn(t[0],t[1]);i=a*l}const c=DC(n,r);return i*c}function FC(t,e){switch(t){case Ae.PACKED_2X2_FLOAT32:return Al(e);case Ae.PACKED_2X2_FLOAT16:return _l(e);case Ae.UNPACKED_FLOAT32:return Rl(e);case Ae.UNPACKED_FLOAT16:return kl(e);case Ae.PACKED_4X1_UNSIGNED_BYTE:return Nl(e);default:throw new Error(`Unknown physical texture type ${t}`)}}function OC(t){return S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Ae.PACKED_2X2_FLOAT32:Ae.UNPACKED_FLOAT32:t?Ae.PACKED_2X2_FLOAT16:Ae.UNPACKED_FLOAT16}function gu(t,e){if(t===et.UPLOAD)return Ae.PACKED_2X2_FLOAT32;if(t===et.RENDER||t==null)return OC(e);if(t===et.DOWNLOAD||t===et.PIXELS)return Ae.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${t}`)}function mu(t,e,n){return`${t[0]}_${t[1]}_${e}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nt{constructor(e,n){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${n}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const nt="if (isnan(x)) return x;",PC="return x;",xu="return abs(x);";function HR(t=0){return nt+`
    return x > 0.0 ? 1.0 : float(${t});
  `}const LC="return (x >= 0.0) ? x : (exp(x) - 1.0);",BC=nt+`
  return (x < 0.0) ? 0.0 : x;
`,MC=nt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,An="return x;",VC="return 1.0 / (1.0 + exp(-1.0 * x));";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UC="return x;",WC=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,GC=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,zC=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,HC="return 1.0 / (1.0 + exp(-1.0 * x));";class en{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${n}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class XC{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length);const n=e.length,s=Ue("rc",n),o=xe(n),r=kC(n,s),i=s.slice(-2),c=n<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${c}));
      }
    `}}var os=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qC=qx,KC=1e-7,jC=1e-4,go={};function YC(t){return t in go||(go[t]={}),go[t]}const QC=S().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),ZC=600;function JC(){return S().global.screen==null?1024:S().global.screen.height*S().global.screen.width*window.devicePixelRatio*ZC/1024/1024}class mo extends oe{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!S().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(e!=null){if(e instanceof Hr)n=e;else{const s=xt(S().getNumber("WEBGL_VERSION"),e);n=new Hr(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=xt(S().getNumber("WEBGL_VERSION"));n=new Hr(s),this.binaryCache=YC(S().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new _C(this.gpgpu),this.numMBBeforeWarning=JC(),this.texData=new ee(this,xn())}nextDataId(){return mo.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,n,s){if((S().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||S().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:n,dtype:s,values:e,usage:et.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const n=this.texData.get(e);n.refCount++}decRef(e){if(this.texData.has(e)){const n=this.texData.get(e);n.refCount--}}move(e,n,s,o,r){if(S().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:o,values:n,usage:et.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const n=this.texData.get(e),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:c,isPacked:a}=n;if(i!=null){let h;a?h=new en(c,An):h=new Nt(c,An);const f=this.runWebGLProgram(h,[{dataId:e,shape:c,dtype:o}],o),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return s;const l=this.activeTimers!=null;let u;l&&(u=dt());let d;if(o==="complex64"){const h=this.readSync(r.real.dataId),f=this.readSync(r.imag.dataId);d=Qn(h,f)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=dt()-u),this.convertAndCacheOnCPU(e,d)}read(e){return os(this,null,function*(){if(this.pendingRead.has(e)){const p=this.pendingRead.get(e);return new Promise(g=>p.push(g))}const n=this.texData.get(e),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:c,isPacked:a}=n;if(r!=null){let p;a?p=new en(o,An):p=new Nt(o,An);const g=this.runWebGLProgram(p,[{dataId:e,shape:o,dtype:i}],i),m=this.read(g.dataId);return this.disposeIntermediateTensorInfo(g),m}if(s!=null)return this.convertAndCacheOnCPU(e);if(S().getBool("DEBUG")&&!S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&S().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,u;if(i!=="complex64"&&S().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const p=this.texData.get(u.dataId);l=this.gpgpu.createBufferFromTexture(p.texture.texture,...so(o))}this.pendingRead.set(e,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let d;if(i==="complex64"){const p=yield Promise.all([this.read(c.real.dataId),this.read(c.imag.dataId)]),g=p[0],m=p[1];d=Qn(g,m)}else if(l==null)d=this.getValuesFromTexture(e);else{const p=v(o);d=this.gpgpu.downloadFloat32MatrixFromBuffer(l,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),l!=null){const p=this.gpgpu.gl;L(p,()=>p.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,d),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(p=>p(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&xn().removeDataId(e,this),this.pendingDeletes--),h})}readToGPU(e,n={}){const s=this.texData.get(e),{values:o,shape:r,slice:i,dtype:c,isPacked:a,texture:l}=s;if(c==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;a?f=new en(r,An):f=new Nt(r,An);const p=this.runWebGLProgram(f,[{dataId:e,shape:r,dtype:c}],c),g=this.readToGPU(p,n);return this.disposeIntermediateTensorInfo(p),g}if(l==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,n.customTexShape),d=xn().makeTensorFromTensorInfo(u),h=this.texData.get(u.dataId);return Object.assign({tensorRef:d},h.texture)}bufferSync(e){const n=this.readSync(e.dataId);if(e.dtype==="string")try{const s=n.map(o=>an(o));return Ne(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Ne(e.shape,e.dtype,n)}checkNumericalProblems(e){if(e!=null)for(let n=0;n<e.length;n++){const s=e[n];if(!n0(s))throw S().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:n,dtype:s,isPacked:o}=this.texData.get(e),r=v(n);if(S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),f=this.texData.get(h.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...so(n)).subarray(0,r);return this.disposeIntermediateTensorInfo(h),p}const i=S().getBool("WEBGL_PACK")&&o===!0,c=i?Vr(n):n,a=i?new xb(c):new mb(c),l=this.runWebGLProgram(a,[{shape:c,dtype:s,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const n=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,e();const r=pe(this.activeTimers.map(a=>a.query)).filter(a=>a!=null),i=pe(this.activeTimers.map(a=>a.name)).filter(a=>a!=null);this.activeTimers=n,o&&(this.programTimersStack=null);const c={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(()=>os(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const a=yield Promise.all(r);c.kernelMs=re(a),c.getExtraProfileInfo=()=>a.map((l,u)=>({name:i[u],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else c.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,c}))()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:dt(),endMs:null}}endTimer(e){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=dt(),e)}getQueryTime(e){return os(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const n=e;return n.endMs-n.startMs})}disposeData(e,n=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(n?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!n&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,n),this.disposeData(s.imag.dataId,n)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:n,dtype:s,texShape:o,usage:r,isPacked:i,slice:c}=this.texData.get(e),a=c&&c.origDataId||e,l=this.dataRefCount.get(a);l>1?this.dataRefCount.set(a,l-1):(this.dataRefCount.delete(a),n!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(n,o,r,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,n=QC){return S().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&v(s.shape)<n)}getGPGPUContext(){return this.gpgpu}where(e){ut("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=e.dataSync();return qC(e.shape,n)}packedUnaryOp(e,n,s){const o=new en(e.shape,n),r=this.compileAndRun(o,[e],s);return xn().makeTensorFromTensorInfo(r)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const o=uu(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if(S().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,xu,e.dtype);const n=new Nt(e.shape,xu),s=this.compileAndRun(n,[e]);return xn().makeTensorFromTensorInfo(s)}makeTensorInfo(e,n,s){let o;if(n==="string"&&s!=null&&s.length>0&&fs(s[0])){const r=s.map(i=>Gt(i));o=this.write(r,e,n)}else o=this.write(s,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}}makeOutput(e,n,s){return xn().makeTensorFromTensorInfo(this.makeTensorInfo(e,n,s),this)}unpackTensor(e){const n=new XC(e.shape);return this.runWebGLProgram(n,[e],e.dtype)}packTensor(e){const n=new NC(e.shape),s=!0;return this.runWebGLProgram(n,[e],e.dtype,null,s)}packedReshape(e,n){const s=[Sn(e.shape),...In(e.shape)],o={dtype:e.dtype,shape:s,dataId:e.dataId},r=[Sn(n),...In(n)],i=new fu(r,s),c=!0,a=[s],l=this.runWebGLProgram(i,[o],e.dtype,a,c);return{dataId:l.dataId,shape:n,dtype:l.dtype}}decode(e,n){const s=this.texData.get(e),{isPacked:o,shape:r,dtype:i}=s;if(n!=null){const h=v(r),f=n[0]*n[1]*4;E(h<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const c=Vr(r);let a;o?a=new gb(c):a=new pb(c);const l=!0,u=[n??so(c)],d=this.runWebGLProgram(a,[{shape:c,dtype:i,dataId:e}],i,u,l,n);return{dtype:i,shape:r,dataId:d.dataId}}runWebGLProgram(e,n,s,o,r=!1,i){const c=this.makeTensorInfo(e.outputShape,s),a=this.texData.get(c.dataId);if(e.packedOutput&&(a.isPacked=!0),e.outPackingScheme===Zn.DENSE){const x=i??so(e.outputShape);a.texShape=x.map(b=>b*2)}if(e.outTexUsage!=null&&(a.usage=e.outTexUsage),v(c.shape)===0)return a.values=Se(c.dtype,0),c;const l=[],u=n.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&v(x.shape)<=S().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!e.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!ao(b.shape,x.shape)){const C=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),l.push(x),b=this.texData.get(x.dataId),C.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(c.dataId);const d={shape:c.shape,texData:a,isUniform:!1},h=fb(e,u,d),f=this.getAndSaveBinary(h,()=>db(this.gpgpu,e,u,d)),p=this.activeTimers!=null;let g;p&&(g=this.startTimer()),S().get("ENGINE_COMPILE_ONLY")||hb(this.gpgpu,f,u,d,o),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const m=S().get("WEBGL_FLUSH_THRESHOLD");if(m>0){const x=dt();x-this.lastGlFlushTime>m&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!S().getBool("WEBGL_LAZILY_UNPACK")&&a.isPacked&&r===!1){const x=this.unpackTensor(c);return this.disposeIntermediateTensorInfo(c),x}return c}compileAndRun(e,n,s,o,r=!1){return s=s||n[0].dtype,this.runWebGLProgram(e,n,s,o,r)}getAndSaveBinary(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(S().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(n=>{this.gpgpu.deleteProgram(this.binaryCache[n].webGLProgram),delete this.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Sr(()=>{if(!S().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=S().getBool("DEBUG");S().set("DEBUG",!1);const n=this.abs(Te(1e-8)).dataSync()[0];if(S().set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?KC:jC}uploadToGPU(e){const n=this.texData.get(e),{shape:s,dtype:o,values:r,texture:i,usage:c,isPacked:a}=n;if(i!=null)return;const l=this.activeTimers!=null;let u;l&&(u=dt());let d=n.texShape;if(d==null&&(d=w0(s,a),n.texShape=d),r!=null){const h=Vr(s);let f,p=d[1],g=d[0];const m=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(a||!m)&&([p,g]=$n(d[0],d[1])),a?f=new wb(h,m):f=new bb(h,m);const x=m?[g,p]:d,b=this.makeTensorInfo(x,o),C=this.texData.get(b.dataId);m?C.usage=et.PIXELS:C.usage=et.UPLOAD,C.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,g,r);const y=[[g,p]],$=!0,N=this.runWebGLProgram(f,[b],o,y,$),R=this.texData.get(N.dataId);n.texShape=R.texShape,n.isPacked=R.isPacked,n.usage=R.usage,S().get("ENGINE_COMPILE_ONLY")?this.disposeData(N.dataId):(n.texture=R.texture,n.values=null,this.texData.delete(N.dataId)),this.disposeIntermediateTensorInfo(b),l&&(this.uploadWaitMs+=dt()-u)}else{const h=this.acquireTexture(d,c,o,a);n.texture=h}}convertAndCacheOnCPU(e,n){const s=this.texData.get(e),{dtype:o}=s;return this.releaseGPUData(e),n!=null&&(s.values=ey(n,o)),s.values}acquireTexture(e,n,s,o){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,n,o)}computeBytes(e,n){return e[0]*e[1]*Ro(n)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}checkCompileCompletionAsync(){return os(this,null,function*(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,n]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(n));return Promise.all(e)}else{for(const[,n]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(n),o(!0)}catch(r){throw r}});e.push(s)}return Promise.all(e)}})}checkCompletionAsync_(e){return os(this,null,function*(){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(yield gx(),this.checkCompletionAsync_(e))})}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(xl(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:n,customUniformLocations:s,infLoc:o,nanLoc:r,inShapesLocations:i,inTexShapesLocations:c,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:u}=El(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=n,e.customUniformLocations=s,e.infLoc=o,e.nanLoc=r,e.inShapesLocations=i,e.inTexShapesLocations=c,e.outShapeLocation=a,e.outShapeStridesLocation=l,e.outTexShapeLocation=u}}}mo.nextDataId=0;function ey(t,e){if(e==="float32"||e==="complex64")return t;if(e==="int32"||e==="bool"){const n=e==="int32"?new Int32Array(t.length):new Uint8Array(t.length);for(let s=0;s<n.length;++s)n[s]=Math.round(t[s]);return n}else throw new Error(`Unknown dtype ${e}`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(){S().set("WEBGL_FORCE_F16_TEXTURES",!0)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ra()&&um("webgl",()=>new mo,2);const XR={forceHalfFloat:ty};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qr=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,qR="return (a - b) * (a - b);";class _n{constructor(e,n,s){this.variableNames=["A","B"],this.outputShape=ve(n,s),this.enableShapeUniforms=Ve(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rs=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,KR=null,jR=null;class is{constructor(e,n,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ve(n,s);const r=this.outputShape.length;this.enableShapeUniforms=Ve(r);let i="";if(o)if(r===0||v(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${xe(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const a=Ue("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${a[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${a[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${a[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${a[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ke(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const ny={kernelName:Cs,backendName:"webgl",kernelFunc:Ke};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mt(t){const{inputs:e,backend:n}=t,{real:s,imag:o}=e,r=n.makeTensorInfo(s.shape,"complex64"),i=n.texData.get(r.dataId),c=Ke({inputs:{x:s},backend:n}),a=Ke({inputs:{x:o},backend:n});return i.complexTensorInfos={real:c,imag:a},r}const sy={kernelName:Fo,backendName:"webgl",kernelFunc:Mt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu="return (a < 0.) ? b * a : a;",wu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function oy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{alpha:r}=s,i=n.makeTensorInfo([],"float32",rn(r,"float32")),c=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new is(wu,o.shape,i.shape):new _n(bu,o.shape,i.shape),a=n.runWebGLProgram(c,[o,i],"float32");return n.disposeIntermediateTensorInfo(i),a}const ry={kernelName:Ni,backendName:"webgl",kernelFunc:oy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cu="return (a < 0.) ? b * a : a;",yu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function iy(t){const{inputs:e,backend:n}=t,{x:s,alpha:o}=e,r=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new is(yu,s.shape,o.shape):new _n(Cu,s.shape,o.shape);return n.runWebGLProgram(r,[s,o],"float32")}const ay={kernelName:Ui,backendName:"webgl",kernelFunc:iy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dn="if (isnan(x)) return x;";function se({opSnippet:t,packedOpSnippet:e,cpuKernelImpl:n,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,c=r,a=s||i.dtype;if(c.shouldExecuteOnCPU([i])&&n!=null){const d=c.texData.get(i.dataId),h=n(d.values,a);return c.makeTensorInfo(i.shape,a,h)}const l=S().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return l?u=new en(i.shape,e):u=new Nt(i.shape,t),c.runWebGLProgram(u,[i],a)}}function _e({opSnippet:t,packedOpSnippet:e,checkOutOfBounds:n=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:c})=>{const{a,b:l}=i,u=c;if(s&&a.dtype==="complex64"){const p=u.texData.get(a.dataId),g=u.texData.get(l.dataId),[m,x]=[[p.complexTensorInfos.real,g.complexTensorInfos.real],[p.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(C=>{const[y,$]=C,N={dataId:y.dataId,dtype:y.dtype,shape:a.shape},R={dataId:$.dataId,dtype:$.dtype,shape:l.shape},k=new _n(t,a.shape,l.shape);return u.runWebGLProgram(k,[N,R],Ct(y.dtype,$.dtype))}),b=Mt({inputs:{real:m,imag:x},backend:u});return u.disposeIntermediateTensorInfo(m),u.disposeIntermediateTensorInfo(x),b}const d=r||Ct(a.dtype,l.dtype);if((a.dtype==="string"||l.dtype==="string"||u.shouldExecuteOnCPU([a,l]))&&o!=null){const p=u.texData.get(a.dataId).values,g=u.texData.get(l.dataId).values,m=a.dtype==="string"?Qt(p):p,x=a.dtype==="string"?Qt(g):g,[b,C]=o(a.shape,l.shape,m,x,d),y=u.makeTensorInfo(C,d),$=u.texData.get(y.dataId);return $.values=b,y}const h=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return h?f=new is(e,a.shape,l.shape,n):f=new _n(t,a.shape,l.shape),u.runWebGLProgram(f,[a,l],d)}}function as(t,e=!1){if(t==="linear")return e?UC:PC;if(t==="relu")return e?GC:BC;if(t==="elu")return e?WC:LC;if(t==="relu6")return e?zC:MC;if(t==="prelu")return e?yu:Cu;if(t==="leakyrelu")return e?wu:bu;if(t==="sigmoid")return e?HC:VC;throw new Error(`Activation ${t} has not been implemented for the WebGL backend.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vu{constructor(e,n,s,o=!1,r=!1,i=!1,c=null,a=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Ve(this.outputShape.length);const u=o?e[1]:e[2],d=Math.ceil(u/2),h=o?"i * 2, rc.y":"rc.y, i * 2",f=r?"rc.z, i * 2":"i * 2, rc.z",p=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let m="",x="";c&&(a?m=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${c}
        }`:l?m=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${c}
        }`:m=`vec4 activation(vec4 x) {
          ${c}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let C="rc.x",y="rc.x";e[0]<n[0]?C=`int(min(float(rc.x), ${e[0]-1}.))`:n[0]<e[0]&&(y=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`
      ${m}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${d}; i++) {
          int batchA = ${C};
          int batchB = ${y};
          vec4 a = getMatrixA(batchA, ${h});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${g[0]});
          result += (${p[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $u={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Su{constructor(e,n,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ve(n,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iu="return a * b;";function Zr(t){const{inputs:e,backend:n}=t,{a:s,b:o}=e,r=Ct(s.dtype,o.dtype);if(s.dtype==="complex64"){const c=n.texData.get(s.dataId),a=n.texData.get(o.dataId),l=new Su($u.REAL,s.shape,o.shape),u=new Su($u.IMAG,s.shape,o.shape),d=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:s.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Mt({inputs:{real:h,imag:f},backend:n});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}if(n.shouldExecuteOnCPU([s,o])){const c=n.texData.get(s.dataId),a=n.texData.get(o.dataId),[l,u]=aC(s.shape,o.shape,c.values,a.values,r),d=n.makeTensorInfo(u,r),h=n.texData.get(d.dataId);return h.values=l,d}let i;return S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new is(Iu,s.shape,o.shape):i=new _n(Iu,s.shape,o.shape),n.runWebGLProgram(i,[s,o],r)}const cy={kernelName:Ss,backendName:"webgl",kernelFunc:Zr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(t,e,n){const s=[Sn(t.shape),...In(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[Sn(e),...In(e)],i=new fu(r,s),c=!0,a=[s],l=n.runWebGLProgram(i,[o],t.dtype,a,c);return{dataId:l.dataId,shape:e,dtype:l.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{shape:r}=s,i=n,c=v(o.shape),a=Xe(r,c),l=v(a);E(c===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${c} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!ao(o.shape,a)&&!(u.texture!==null&&ao(u.shape,a))?ly(o,a,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:a,dtype:o.dtype})}const uy={kernelName:Hi,backendName:"webgl",kernelFunc:F};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Eu{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];const c=Math.floor(s/4)*4,a=s%4;let l="sumValue += dot(values, ones);";if(n!=null){const d=1/n;l=`sumValue += dot(values * ${P(d)?d.toPrecision(2):d}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${c};
        if (${a===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${a===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${a===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dy{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];let c="0.0",a="";n==="prod"?c="1.0":n==="min"?(c="1.0 / 1e-20",a="min"):n==="max"&&(c="-1.0 / 1e-20",a="max");let l=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="sum"?l="sumValue":n==="prod"?l="prodValue":n==="all"?l="allValue":n==="any"&&(l="anyValue");const u=Math.floor(s/4)*4,d=s%4;let h=`
      if (${n==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${n==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${a}(values, minMaxValue);
        if (${n==="min"} || ${n==="max"}) {
          minMaxValue = ${a}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";n==="all"?(c="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):n==="any"&&(c="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${c};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${c});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(t){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const n=e.length?e[e.length-1].outSize:t[1],s=to(n);e.push({inSize:n,windowSize:s,outSize:Math.ceil(n/s)})}return e}function tn(t,e,n,s){const o=hy(t.shape);let r=t;for(let i=0;i<o.length;i++){const{inSize:c,windowSize:a,outSize:l}=o[i];let u,d;n==="mean"?u=i===0?new Eu({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l},c):new Eu({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l}):u=new dy({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l},n),d=r,r=s.runWebGLProgram(u,[r],e),d.dataId!==t.dataId&&s.disposeIntermediateTensorInfo(d)}return r}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fy{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[n[i]];this.outputShape=s,this.rank=s.length;const o=xe(this.rank),r=py(n);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function py(t){const e=t.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let o=0;o<t.length;o++)s[t[o]]=n[o];return s.join()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gy{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[n[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=xe(this.rank),r=hu("rc",this.rank),i=new Array(this.rank);for(let u=0;u<n.length;u++)i[n[u]]=r[u];const c=`vec2(${i.slice(-2).join()})`,a=`++${r[this.rank-1]} < ${s[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${c})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${a}) {
        result[1] = ${l};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${l};
        if(${a}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xo(t,e,n){const s=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gy(t.shape,e):new fy(t.shape,e);return n.runWebGLProgram(s,[t],t.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(t,e,n,s){const o=e,r=t.shape.length,i=te(o,t.shape);let c=i;const a=Ze(c,r),l=a!=null;let u=t;l&&(u=xo(t,a,s),c=Je(c.length,r)),pt("sum",c,r);const[d,h]=It(u.shape,c);let f=d;n&&(f=Qe(d,i));const p=v(h),m=v(t.shape)/p,x=F({inputs:{x:u},attrs:{shape:[m,p]},backend:s}),b=tr(t.dtype),C=tn(x,b,"sum",s),y=F({inputs:{x:C},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(C),l&&s.disposeIntermediateTensorInfo(u),y}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bo(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s;return my(o,r,i,n)}const xy={kernelName:Zi,backendName:"webgl",kernelFunc:bo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{perm:r}=s,i=n,c=o.shape.length,a=new Array(c);for(let u=0;u<a.length;u++)a[u]=o.shape[r[u]];let l;if(i.shouldExecuteOnCPU([o])){const d=i.texData.get(o.dataId).values,h=Yr(d,o.shape,o.dtype,r,a);l=i.makeTensorInfo(a,o.dtype);const f=i.texData.get(l.dataId);f.values=h}else l=xo(o,r,i);return l}const by={kernelName:Un,backendName:"webgl",kernelFunc:We};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tu=1e3;function wo({a:t,b:e,transposeA:n,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:c=0,activation:a=null}){const l=t.shape.length,u=e.shape.length,d=n?t.shape[l-2]:t.shape[l-1],h=s?e.shape[u-1]:e.shape[u-2],f=n?t.shape[l-1]:t.shape[l-2],p=s?e.shape[u-2]:e.shape[u-1],g=t.shape.slice(0,-2),m=e.shape.slice(0,-2),x=v(g),b=v(m),y=ve(t.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,p]);E(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${t.shape} and ${e.shape} and transposeA=${n} and transposeB=${s} must match.`);const $=n?[x,d,f]:[x,f,d],N=s?[b,p,h]:[b,h,p],R=F({inputs:{x:t},backend:o,attrs:{shape:$}}),k=F({inputs:{x:e},backend:o,attrs:{shape:N}}),B=[R,k],U=Math.max(x,b),Y=n?R.shape[1]:R.shape[2],ie=r!=null,je=i!=null,De=a==="leakyrelu",Oe=a!=null?as(a,!0):null,ct=ie||je||De||Oe!=null;let bt;if((f===1||p===1)&&Y>Tu&&ct===!1){let Vt=R,Pn=k;n&&(Vt=We({inputs:{x:R},backend:o,attrs:{perm:[0,2,1]}}),B.push(Vt)),s&&(Pn=We({inputs:{x:k},backend:o,attrs:{perm:[0,2,1]}}),B.push(Pn));const Ln=p!==1,To=p===1;let ri=Vt;Ln&&(ri=F({inputs:{x:Vt},backend:o,attrs:{shape:[U,Y,1]}}),B.push(ri));const GT=p===1?2:1;let ii=Pn;To&&(ii=F({inputs:{x:Pn},backend:o,attrs:{shape:[U,1,Y]}}),B.push(ii));const pd=Zr({inputs:{a:ri,b:ii},backend:o});bt=bo({inputs:{x:pd},backend:o,attrs:{axis:GT,keepDims:!0}}),B.push(pd)}else{const Vt=Ct(t.dtype,e.dtype),Pn=new vu($,N,[U,f,p],n,s,ie,Oe,je,De),Ln=[R,k];if(r!=null&&Ln.push(r),je&&Ln.push(i),De){const To=o.makeTensorInfo([],"float32",rn(c,"float32"));Ln.push(To),B.push(To)}bt=o.runWebGLProgram(Pn,Ln,Vt)}const Ge=F({inputs:{x:bt},backend:o,attrs:{shape:y}});B.push(bt);for(const Vt of B)o.disposeIntermediateTensorInfo(Vt);return Ge}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(t){const{inputs:e,backend:n,attrs:s}=t,{a:o,b:r,bias:i,preluActivationWeights:c}=e,{transposeA:a,transposeB:l,activation:u,leakyreluAlpha:d}=s;return wo({a:o,b:r,transposeA:a,transposeB:l,backend:n,bias:i,preluActivationWeights:c,leakyreluAlpha:d,activation:u})}const Cy={kernelName:tf,backendName:"webgl",kernelFunc:wy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ru="return abs(x);";function yy(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=n.texData.get(s.dataId),i=uu(r.values);return n.makeTensorInfo(s.shape,s.dtype,i)}let o;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new en(s.shape,Ru):o=new Nt(s.shape,Ru),n.runWebGLProgram(o,[s],s.dtype)}const vy={kernelName:_o,backendName:"webgl",kernelFunc:yy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $y=nt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Sy=se({opSnippet:$y}),Iy={kernelName:Id,backendName:"webgl",kernelFunc:Sy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ey=nt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,Ty=se({opSnippet:Ey}),Ry={kernelName:Ed,backendName:"webgl",kernelFunc:Ty};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ku="return a + b;",ky=_e({opSnippet:ku,packedOpSnippet:ku,supportsComplex:!0,cpuKernelImpl:Uw}),Ny={kernelName:Vn,backendName:"webgl",kernelFunc:ky};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ay{constructor(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _y{constructor(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Co(t){const{inputs:e,backend:n}=t,s=e;if(s.length===1)return Ke({inputs:{x:s[0]},backend:n});if(s.length>S().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const a=Math.floor(s.length/2),l=Co({inputs:s.slice(0,a),backend:n}),u=Co({inputs:s.slice(a),backend:n});return Co({inputs:[l,u],backend:n})}const o=s.map(a=>a.dtype).reduce((a,l)=>Ct(a,l)),r=s.map(a=>a.shape),c=S().getBool("WEBGL_PACK")?new _y(s[0].shape,r):new Ay(s[0].shape,r);return n.runWebGLProgram(c,s,o)}const Dy={kernelName:Td,backendName:"webgl",kernelFunc:Co};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,c=o.shape.length,a=te(r,o.shape);let l=a;const u=Ze(l,c);let d=o;u!=null&&(d=We({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Je(l.length,c)),pt("all",l,c);const[h,f]=It(d.shape,l),p=v(f),g=F({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"all",n);let x;if(i){const b=Qe(h,a);x=F({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=F({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Oy={kernelName:Rd,backendName:"webgl",kernelFunc:Fy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Py(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,c=o.shape.length,a=te(r,o.shape);let l=a;const u=Ze(l,c);let d=o;u!=null&&(d=We({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Je(l.length,c)),pt("any",l,c);const[h,f]=It(d.shape,l),p=v(f),g=F({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"any",n);let x;if(i){const b=Qe(h,a);x=F({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=F({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Ly={kernelName:kd,backendName:"webgl",kernelFunc:Py};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class By{constructor(e,n,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const c=n==="max"?">":"<",a=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${a};
          float candidate = getA(batch, inIdx);
          if (candidate ${c} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class My{constructor(e,n,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=e[e.length-1],i=Math.ceil(r/n);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const c=this.outputShape,a=c.length,l=xe(a),u=Ue("coords",a);let d,h;if(i===1){h=a+1;const k=xe(h);d=`
        ${k} sourceLocR = ${k}(${u.join()}, 0);
        ++${u[a-1]};
        ${k} sourceLocG = ${k}(${u.join()}, 0);
        ++${u[a-2]};
        ${k} sourceLocA = ${k}(${u.join()}, 0);
        --${u[a-1]};
        ${k} sourceLocB = ${k}(${u.join()}, 0);
        --${u[a-2]};`}else h=a,d=`
        ${l} sourceLocR = coords;
        ++${u[a-1]};
        ${l} sourceLocG = coords;
        ++${u[a-2]};
        ${l} sourceLocA = coords;
        --${u[a-1]};
        ${l} sourceLocB = coords;
        --${u[a-2]};`;const f=["x","y","z","w","u","v"].slice(0,h),p="."+f[h-1],g=f.map(k=>"int "+k),m=Ue("sourceLocR",h-1).concat("inIdx.r"),x=Ue("sourceLocG",h-1).concat("inIdx.g"),b=Ue("sourceLocB",h-1).concat("inIdx.b"),C=Ue("sourceLocA",h-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",$=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${C.join()})));`,N=`vec4(
            getAChannel(${m.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${C.join()}) : 0.)`,R=o?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${R}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${u[a-1]} < ${c[a-1]-1};
        bool hasNextRow = ${u[a-2]} < ${c[a-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${n};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${N};

        for (int i = 0; i < ${n}; i++) {
          inIdx = srcIdx;
          ${$}
          vec4 candidate = ${N};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nu(t,e,n,s=null){let o=e.shape[0],r=e.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=to(r),c={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},a=new By(c,n,s==null),l=[e];s!=null&&l.push(s);const u=t.runWebGLProgram(a,l,"int32");if(u.shape[1]===1)return u;const d=Nu(t,e,n,u);return t.disposeIntermediateTensorInfo(u),d}function Au(t,e,n,s=null){const o=s!=null?s.shape:e.shape,r=o[o.length-1],i=to(r),c=new My(o,i,n,s==null),a=s==null?[e]:[e,s],l=t.runWebGLProgram(c,a,"int32");if(l.shape.length===e.shape.length){const u=Au(t,e,n,l);return t.disposeIntermediateTensorInfo(l),u}return l}function _u(t,e,n,s){const o=[n];if(pt("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,e.shape.length),!S().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const r=[],i=t.texData.get(e.dataId),c=i!==null&&i.isPacked;let a=e;c&&(a=t.unpackTensor(e),r.push(a));const[l,u]=It(a.shape,o),d=v(u),h=F({inputs:{x:a},backend:t,attrs:{shape:[-1,d]}});r.push(h);const f=Nu(t,h,s);r.push(f);const p=F({inputs:{x:f},backend:t,attrs:{shape:l}});return r.forEach(g=>t.disposeIntermediateTensorInfo(g)),p}return Au(t,e,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r}=s;let i=te(r,o.shape);const c=Ze(i,o.shape.length);let a=o;const l=[];c!=null&&(a=We({inputs:{x:o},backend:n,attrs:{perm:c}}),l.push(a),i=Je(i.length,a.shape.length)),pt("argMax",[i[0]],a.shape.length);const u=_u(n,a,i[0],"max");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const Uy={kernelName:Nd,backendName:"webgl",kernelFunc:Vy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r}=s;let i=te(r,o.shape);const c=Ze(i,o.shape.length);let a=o;const l=[];c!=null&&(a=We({inputs:{x:o},backend:n,attrs:{perm:c}}),l.push(a),i=Je(i.length,a.shape.length)),pt("argMin",[i[0]],a.shape.length);const u=_u(n,a,i[0],"min");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const Gy={kernelName:Ad,backendName:"webgl",kernelFunc:Wy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zy=nt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Hy=se({opSnippet:zy}),Xy={kernelName:_d,backendName:"webgl",kernelFunc:Hy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qy=nt+"return log(x + sqrt(x * x + 1.0));",Ky=se({opSnippet:qy}),jy={kernelName:Dd,backendName:"webgl",kernelFunc:Ky};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yy=nt+`
  return atan(x);
`,Qy=se({opSnippet:Yy}),Zy={kernelName:Fd,backendName:"webgl",kernelFunc:Qy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jy=Qr+`
  return atan(a, b);
`,e1=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rs+`
  return result;
`,t1=_e({opSnippet:Jy,packedOpSnippet:e1}),n1={kernelName:Pd,backendName:"webgl",kernelFunc:t1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s1=nt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,o1=se({opSnippet:s1}),r1={kernelName:Od,backendName:"webgl",kernelFunc:o1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cs{constructor(e,n,s,o=!1,r=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,c=e.strideHeight,a=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;const g=n==="avg",m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let b="0.0";if(g||(b="-1.0 / 1e-20"),s){const k=">=";this.userCode=`
        const ivec2 strides = ivec2(${c}, ${a});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${k} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?m:x:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const C="max";let y=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(y="avgValue / count");const $=Math.floor(i/4)*4,N=i%4,R=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${c}, ${a});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${$}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${R}
          }

          int xC = xCCorner + ${$};
          if (${N===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${R}
          } else if (${N===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${R}
          } else if (${N===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${R}
          }
        }
        setOutput(${y});
      }
    `}}class Jr{constructor(e,n,s,o=!1,r=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,c=e.strideDepth,a=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,h=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,g=e.effectiveFilterWidth,m=e.padInfo.front,x=e.padInfo.top,b=e.padInfo.left;this.outputShape=e.outShape;const C=n==="avg";let y="0.0";if(C||(y="-1.0 / 1e-20"),s){const U=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${c}, ${a}, ${l});
        const ivec3 pads = ivec3(${m}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${U} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const $="max";let N=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(N="avgValue / count");const R=Math.floor(i/4)*4,k=i%4,B=`
      if (${C}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${c}, ${a}, ${l});
      const ivec3 pads = ivec3(${m}, ${x}, ${b});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${R}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${B}
            }

            int xC = xCCorner + ${R};
            if (${k===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${B}
            } else if (${k===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${B}
            } else if (${k===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${B}
            }
          }
          setOutput(${N});
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e;es(o,"avgPool");const{filterSize:r,strides:i,pad:c,dimRoundingMode:a}=s,l=1;E(yn(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=wn(o.shape,r,i,l,c,a);if(u.filterWidth===1&&u.filterHeight===1&&w(u.inShape,u.outShape))return Ke({inputs:{x:o},backend:n});const d=new cs(u,"avg",!1);return n.runWebGLProgram(d,[o],"float32")}const a1={kernelName:Ld,backendName:"webgl",kernelFunc:i1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{filterSize:r,strides:i,pad:c,dimRoundingMode:a,dataFormat:l}=s,u=[1,1,1],d=jn(o.shape,r,i,u,c,a,l),h=new Jr(d,"avg",!1);return n.runWebGLProgram(h,[o],"float32")}const l1={kernelName:Md,backendName:"webgl",kernelFunc:c1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class u1{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dilationHeight,c=e.dilationWidth,a=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=a-1-e.padInfo.top,d=l-1-e.padInfo.left,h=1/(n*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${d});
      const float avgMultiplier = float(${h});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${a};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${c}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class d1{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=d-1-e.padInfo.front,g=h-1-e.padInfo.top,m=f-1-e.padInfo.left,x=1/(n*s*o);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${g}, ${m});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${a}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r,{filterSize:c,strides:a,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=jn(i.shape,c,a,d,l,u),f=new d1(h);return n.runWebGLProgram(f,[o],i.dtype)}const f1={kernelName:Vd,backendName:"webgl",kernelFunc:h1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r;es([o,r],"avgPoolGrad");const{filterSize:c,strides:a,pad:l}=s,u=wn(i.shape,c,a,1,l),d=new u1(u);return n.runWebGLProgram(d,[o],i.dtype)}const g1={kernelName:Bd,backendName:"webgl",kernelFunc:p1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m1(t){const{inputs:e,backend:n,attrs:s}=t,{a:o,b:r}=e,{transposeA:i,transposeB:c}=s;return wo({a:o,b:r,transposeA:i,transposeB:c,backend:n})}const x1={kernelName:mi,backendName:"webgl",kernelFunc:m1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class b1{constructor(e,n,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],ve(e,n),ve(e,s);let c="0.0";o!=null&&(ve(e,o),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let a="1.0";r!=null&&(ve(e,r),this.variableNames.push("scale"),a="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${c};
        float scale = ${a};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class w1{constructor(e,n,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ve(e,n),ve(e,s);let c="vec4(0.0)";o!=null&&(ve(e,o),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let a="vec4(1.0)";r!=null&&(ve(e,r),this.variableNames.push("scale"),a="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${c};
        vec4 scale = ${a};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C1={kernelName:uh,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s,mean:o,variance:r,offset:i,scale:c}=t;E(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),E(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),E(c==null||o.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:a}=n;a==null&&(a=.001);const l=[s,o,r];let u=null;i!=null&&(u=i.shape,l.push(i));let d=null;c!=null&&(d=c.shape,l.push(c));const h=S().getBool("WEBGL_PACK_NORMALIZATION")?new w1(s.shape,o.shape,r.shape,u,d,a):new b1(s.shape,o.shape,r.shape,u,d,a);return e.runWebGLProgram(h,l,l[0].dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class y1{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const n=xe(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=v1(this.rank);let o;const r=e.map((i,c)=>`sourceLoc.${ei[c]} = start[${c}] + coords.${ei[c]};`);o=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const ei=["x","y","z","w","u","v"];function v1(t){if(t===1)return"sourceLoc";if(t<=6)return ei.slice(0,t).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${t} is not yet supported`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $1{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=xe(this.rank),s=Ue("coords",this.rank),o=Ue("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,c=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,a=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${n}(${e.map((u,d)=>`start[${d}]`).join()});`:e.map((u,d)=>`${o[d]} = ${s[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        ${n} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${c}
        ${a}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S1(t,e,n,s){const o=s.texData.get(t.dataId),r=s.makeTensorInfo(n,t.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=n,i.dtype=t.dtype;let c=mr(e,Re(t.shape));o.slice&&(c+=o.slice.flatOffset),i.slice={flatOffset:c,origDataId:o.slice&&o.slice.origDataId||t.dataId};const a=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,a+1),r}function Fn(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{begin:r,size:i}=s,[c,a]=xr(o,r,i);if(pr(o,c,a),v(a)===0)return n.makeTensorInfo(a,o.dtype,[]);if(n.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=n.texData.get(o.dataId),h=xC(d.values,c,a,o.shape,o.dtype);return n.makeTensorInfo(a,o.dtype,h)}const{isPacked:l}=n.texData.get(o.dataId),u=gr(o.shape,c,a);if(l||!u){const d=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $1(a):new y1(a),h=[c];return n.runWebGLProgram(d,[o],o.dtype,h)}return n.uploadToGPU(o.dataId),S1(o,c,a,n)}const I1={kernelName:Go,backendName:"webgl",kernelFunc:Fn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1={kernelName:Ud,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockShape:r,crops:i}=s;E(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const c=r.reduce((b,C)=>b*C),a=Ar(o.shape,r,c),l=_r(a.length,r.length),u=Dr(o.shape,r,c),d=Pc(i,r.length),h=Lc(u,i,r.length),f=[],p=F({inputs:{x:o},backend:n,attrs:{shape:a}}),g=We({inputs:{x:p},backend:n,attrs:{perm:l}}),m=F({inputs:{x:g},backend:n,attrs:{shape:u}}),x=Fn({inputs:{x:m},backend:n,attrs:{begin:d,size:h}});return f.push(p),f.push(g),f.push(m),f.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,weights:r}=e,{size:i}=s,c=n.readSync(o.dataId),a=n.readSync(r.dataId),l=lu(c,a,r.dtype,r.shape,i);return n.makeTensorInfo([i],r.dtype,l)}const R1={kernelName:xi,backendName:"webgl",kernelFunc:T1};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k1(t){const{inputs:e,backend:n}=t,{s0:s,s1:o}=e,r=n.readSync(s.dataId),i=n.readSync(o.dataId),c=ve(Array.from(r),Array.from(i));return n.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const N1={kernelName:Wd,backendName:"webgl",kernelFunc:k1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Du=_e({opSnippet:"return float(a != b);",cpuKernelImpl:lC,dtype:"bool"}),A1={kernelName:Is,backendName:"webgl",kernelFunc:Du};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ls(t){const{inputs:e,backend:n}=t,{input:s}=e,o=n.texData.get(s.dataId);return Ke({inputs:{x:o.complexTensorInfos.real},backend:n})}const _1={kernelName:Uo,backendName:"webgl",kernelFunc:ls};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D1="return float(int(x));";function F1(t,e){const n=new Nt(t.shape,D1),s=e.runWebGLProgram(n,[t],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ti(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return Ke({inputs:{x:o},backend:n});const i=gn(o.shape),c=ti({inputs:{x:o},backend:n,attrs:{dtype:"float32"}}),a=Mt({inputs:{real:c,imag:i},backend:n});return i.dispose(),n.disposeIntermediateTensorInfo(c),a}if(o.dtype==="complex64"){const i=ls({inputs:{input:o},backend:n}),c=ti({inputs:{x:i},backend:n,attrs:{dtype:r}});return n.disposeIntermediateTensorInfo(i),c}if(!ai(o.dtype,r)){const i=Ke({inputs:{x:o},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(n.shouldExecuteOnCPU([o])){const i=n.texData.get(o.dataId).values,[c,a,l]=Gw(i,o.shape,o.dtype,r);return n.makeTensorInfo(c,a,l)}if(r==="int32")return F1(o,n);if(r==="bool"){const i=n.makeTensorInfo([],"bool",Se("bool",1)),a=Du({inputs:{a:o,b:i},backend:n});return n.disposeIntermediateTensorInfo(i),a}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const O1={kernelName:ms,backendName:"webgl",kernelFunc:ti};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fu="return ceil(x);",P1=se({opSnippet:Fu,packedOpSnippet:Fu,cpuKernelImpl:zw}),L1={kernelName:Do,backendName:"webgl",kernelFunc:P1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class B1{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class M1{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{clipValueMin:r,clipValueMax:i}=s;let c;S().getBool("WEBGL_PACK_CLIP")?c=new M1(o.shape):c=new B1(o.shape);const a=[[r],[i]];return n.runWebGLProgram(c,[o],o.dtype,a)}const U1={kernelName:Gd,backendName:"webgl",kernelFunc:V1};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class W1{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ou(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}}function G1(t){const{inputs:e,backend:n}=t,{x:s}=e,o=n.texData.get(s.dataId),r=new W1(s.shape),i=[Ou(s,o.complexTensorInfos.real),Ou(s,o.complexTensorInfos.imag)];return n.runWebGLProgram(r,i,i[0].dtype)}const z1={kernelName:bi,backendName:"webgl",kernelFunc:G1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class H1{constructor(e){this.outputShape=[],this.outputShape=jt(e,1),this.variableNames=e.map((i,c)=>`T${c}`);const n=new Array(e.length-1);n[0]=e[0][1];for(let i=1;i<n.length;i++)n[i]=n[i-1]+e[i][1];const s=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<n.length;i++){const c=n[i-1];s.push(`else if (yC < ${n[i]}) setOutput(getT${i}(yR, yC-${c}));`)}const o=n.length,r=n[n.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class X1{constructor(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=jt(e,n);const s=this.outputShape,o=s.length,r=xe(o),i=Ue("coords",o),c=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((g,m)=>`T${m}`);const a=new Array(e.length-1);a[0]=e[0][n];for(let g=1;g<a.length;g++)a[g]=a[g-1]+e[g][n];const l=c[n],u=c.slice(-2),d=c.join();let h=`if (${l} < ${a[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let g=1;g<a.length;g++){const m=a[g-1];h+=`
        if (${l} < ${a[g]}  && ${l} >= ${a[g-1]}) {
          return getChannel(
            getT${g}(${yo(c,l,m)}),
            vec2(${yo(u,l,m)}));
        }`}const f=a.length,p=a[a.length-1];h+=`
        return getChannel(
          getT${f}(${yo(c,l,p)}),
          vec2(${yo(u,l,p)}));`,this.userCode=`
      float getValue(${c.map(g=>"int "+g)}) {
        ${h}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function yo(t,e,n){const s=t.indexOf(e);return t.map((r,i)=>i===s?`${r} - ${n}`:r).join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vo(t){const{inputs:e,backend:n}=t,{input:s}=e,o=n.texData.get(s.dataId);return Ke({inputs:{x:o.complexTensorInfos.imag},backend:n})}const q1={kernelName:ki,backendName:"webgl",kernelFunc:vo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function us(t,e,n){const s=t[0].dtype;if(s==="complex64"){const d=t.map(m=>ls({inputs:{input:m},backend:n})),h=t.map(m=>vo({inputs:{input:m},backend:n})),f=us(d,e,n),p=us(h,e,n),g=Mt({inputs:{real:f,imag:p},backend:n});return d.forEach(m=>n.disposeIntermediateTensorInfo(m)),h.forEach(m=>n.disposeIntermediateTensorInfo(m)),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),g}let o=n.shouldExecuteOnCPU(t);if(s==="string"&&(o=!0),o){const d=t.map(b=>{const C=v(b.shape.slice(e));return F({inputs:{x:b},backend:n,attrs:{shape:[-1,C]}})}),h=d.map(b=>({vals:n.readSync(b.dataId),shape:b.shape})),f=jt(d.map(b=>b.shape),1),p=d[0].shape[0]===1,g=Hw(h,f,s,p),m=jt(t.map(b=>b.shape),e),x=n.makeTensorInfo(m,s,g);return d.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}const r=S().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(t.length>r){const d=[];for(let f=0;f<t.length;f+=r){const p=t.slice(f,f+r);d.push(us(p,e,n))}const h=us(d,e,n);for(const f of d)n.disposeIntermediateTensorInfo(f);return h}if(S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].shape.length>1){const d=new X1(t.map(h=>h.shape),e);return n.runWebGLProgram(d,t,s)}const{tensors2D:i,outShape:c}=K1(t,e,n),a=new H1(i.map(d=>d.shape)),l=n.runWebGLProgram(a,i,s);i.forEach(d=>n.disposeIntermediateTensorInfo(d));const u=F({inputs:{x:l},attrs:{shape:c},backend:n});return n.disposeIntermediateTensorInfo(l),u}function K1(t,e,n){const s=jt(t.map(r=>r.shape),e);return{tensors2D:t.map(r=>F({inputs:{x:r},attrs:{shape:[-1,v(r.shape.slice(e))]},backend:n})),outShape:s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pu(t){const{inputs:e,backend:n,attrs:s}=t,{axis:o}=s,r=te(o,e[0].shape)[0],i=e.map(l=>l.shape);kc(i,r);const c=jt(e.map(l=>l.shape),r);if(v(c)===0)return n.makeTensorInfo(c,e[0].dtype,[]);const a=e.filter(l=>v(l.shape)>0);return a.length===1?Ke({inputs:{x:a[0]},backend:n}):us(a,r,n)}const j1={kernelName:wi,backendName:"webgl",kernelFunc:Pu};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Lu{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,c=e.padInfo.left,a=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4,m=e.dataFormat==="channelsLast",x=m?1:2,b=m?2:3,C=m?3:1;let y="",$="";s&&(o?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,$="result = activation(result);");const N=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${C}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${m}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${m}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${m}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${m}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${N}
        ${$}
        setOutput(result);
      }
    `}}class Y1{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const n=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left,r=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${c});
      const ivec3 pads = ivec3(${n}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${a};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bu{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ve(this.outputShape.length);const i=e.padInfo.left,c=e.strideWidth,a=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u;let h=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<u;m++)h+=`
           vec4 xTexelC${m*2};
           int xTexelC${m*2}Ready;
           vec4 xTexelC${m*2+1};
           int xTexelC${m*2+1}Ready;
           vec4 xC${m};`;h+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let m=0;m<u;m++)h+=`
           xTexelC${m*2} = vec4(0.0);
           xTexelC${m*2}Ready = 0;
           xTexelC${m*2+1} = vec4(0.0);
           xTexelC${m*2+1}Ready = 0;
           xC${m} = vec4(0.0);`;h+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let m=0;m<(d+1)/2;m++){const x=m*2;if(h+=`
           xC = xCCorner + ${x*a};
           `,c===1){if(x<u&&(i%2===1?(h+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,a===1&&x>0?h+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:h+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):h+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?H(a):a;a%2===0&&i%2===1||a%2!==0&&i%2!==1?(h+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,a>1?h+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:h+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?h+=`
                     xC${x+1} = xTexelC${x};
                     `:h+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(h+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(h+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(h+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(h+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(h+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(h+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}h+=`
     }
   `,h+=`
     }
   `,h+=`
     }
   `;let f="",p="";s&&(o?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,p="result = activation(result);");const g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${h}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${p}
         setOutput(result);
       }
     `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Q1{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Ve(this.outputShape.length);const{dataFormat:s}=n,o=Me(),r=s==="channelsLast",i=r?1:2,c=r?2:3,a=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let l="";for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)l+=`
          blockIndex = rc.z + ${d};
          pos = rc.y + ${u};

          ${a}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${c}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${o.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $o(t,e){const n=t.length;return n>=3?e?[...t.slice(0,-3),t[n-3]*t[n-2],t[n-1]]:[...t.slice(0,-3),t[n-3],t[n-2]*t[n-1]]:!e&&n===1&&t[0]>1?[t[0],1]:null}function Mu({x:t,filter:e,convInfo:n,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:c=null}){const a=t.shape,l=s.texData.get(t.dataId),u=n.inChannels,d=a[0]*a[1]*a[2],h=n.outChannels,f=n.dataFormat==="channelsLast",p=!1,g=!1;let m;const x=[];if(r!=null){const y=$o(r.shape,f);y!=null&&(r=F({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(o!=null){const y=$o(o.shape,f);y!=null&&(o=F({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(!((d===1||h===1)&&u>Tu)&&l.isPacked&&f&&l.texture!=null&&a[2]%2!==0&&w(l.shape.slice(-3),a.slice(-3))){const y=a[0]*a[1]*(a[2]+1),$={dataId:t.dataId,shape:[1,y,n.inChannels],dtype:t.dtype},N=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,E(ao(l.shape,$.shape),()=>`packed reshape ${l.shape} to ${$.shape} isn't free`);const R=F({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}});x.push(R);const k=wo({a:$,b:R,backend:s,transposeA:p,transposeB:g,bias:o,activation:c,preluActivationWeights:r,leakyreluAlpha:i}),B=s.texData.get(k.dataId);E(B.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=N,B.shape=n.outShape,m=Ke({inputs:{x:k},backend:s}),m.shape=n.outShape,x.push(k)}else{const y=n.outHeight*n.outWidth,$=F({inputs:{x:t},backend:s,attrs:{shape:f?[n.batchSize,y,n.inChannels]:[n.batchSize,n.inChannels,y]}}),N=F({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}}),R=wo({a:f?$:N,b:f?N:$,transposeA:!f,transposeB:g,backend:s,bias:o,activation:c,preluActivationWeights:r,leakyreluAlpha:i});m=F({inputs:{x:R},backend:s,attrs:{shape:n.outShape}}),x.push($),x.push(N),x.push(R)}for(const y of x)s.disposeIntermediateTensorInfo(y);return m}function Vu({x:t,filter:e,convInfo:n,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:c=null}){const{filterWidth:a,filterHeight:l,inChannels:u,outWidth:d,outHeight:h,dataFormat:f}=n,p=f==="channelsLast",g=a*l*u,m=h*d,x=[n.batchSize,g,m],b=!0,C=!1,y=[];if(r!=null){const Ge=$o(r.shape,p);Ge!=null&&(r=F({inputs:{x:r},backend:s,attrs:{shape:Ge}}),y.push(r))}if(o!=null){const Ge=$o(o.shape,p);Ge!=null&&(o=F({inputs:{x:o},backend:s,attrs:{shape:Ge}}),y.push(o))}const $=F({inputs:{x:e},backend:s,attrs:{shape:[1,g,v(e.shape)/g]}});y.push($);const N=new Q1(x,n),R=[t.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],k=s.runWebGLProgram(N,[t],"float32",R),B=F({inputs:{x:k},backend:s,attrs:{shape:x}});y.push(k),y.push(B);const U=o!=null,Y=r!=null,ie=c==="leakyrelu",je=c?as(c,!0):null,De=new vu(p?B.shape:$.shape,p?$.shape:B.shape,p?[n.batchSize,m,n.outChannels]:[n.batchSize,n.outChannels,m],b,C,U,je,Y,ie),Oe=p?[B,$]:[$,B];if(o&&Oe.push(o),Y&&Oe.push(r),ie){const Ge=s.makeTensorInfo([],"float32",rn(i,"float32"));Oe.push(Ge),y.push(Ge)}const ct=s.runWebGLProgram(De,Oe,"float32"),bt=F({inputs:{x:ct},backend:s,attrs:{shape:n.outShape}});y.push(ct);for(const Ge of y)s.disposeIntermediateTensorInfo(Ge);return bt}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:c,dataFormat:a,dilations:l,dimRoundingMode:u}=s,d=vn(a),h=gt(o.shape,r.shape,i,l,c,u,!1,d);let f;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))f=Mu({x:o,filter:r,convInfo:h,backend:n});else if(h.strideWidth<=2&&d==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const g=new Bu(h),m=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];f=n.runWebGLProgram(g,[o,r],"float32",m)}else if(S().getBool("WEBGL_CONV_IM2COL"))f=Vu({x:o,filter:r,convInfo:h,backend:n});else{const g=new Lu(h);f=n.runWebGLProgram(g,[o,r],"float32")}const p=F({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),p}const J1={kernelName:zd,backendName:"webgl",kernelFunc:Z1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ev{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class tv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dataFormat==="channelsLast",c=n-1-e.padInfo.top,a=s-1-e.padInfo.left,l=i?1:2,u=i?2:3,d=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class nv{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.padInfo.front,i=e.padInfo.top,c=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${n} - ${r};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${c};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class sv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=n-1-e.padInfo.front,l=s-1-e.padInfo.top,u=o-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${a}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${n}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${n} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ov(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,pad:c,dataFormat:a,dimRoundingMode:l,filterShape:u}=s,d=vn(a),h=gt(o.shape,u,i,1,c,l,!1,d),f=new ev(h);return n.runWebGLProgram(f,[o,r],"float32")}const rv={kernelName:Hd,backendName:"webgl",kernelFunc:ov};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{inputShape:i,strides:c,pad:a,dataFormat:l,dimRoundingMode:u}=s,d=vn(l),h=gt(i,r.shape,c,1,a,u,!1,d),f=new tv(h);return n.runWebGLProgram(f,[o,r],"float32")}const av={kernelName:Xd,backendName:"webgl",kernelFunc:iv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:c,dilations:a}=s,l=Yn(o.shape,r.shape,i,a,c),u=new Y1(l);return n.runWebGLProgram(u,[o,r],"float32")}const lv={kernelName:qd,backendName:"webgl",kernelFunc:cv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,pad:c,filterShape:a}=s,l=Yn(o.shape,a,i,1,c),u=new nv(l);return n.runWebGLProgram(u,[o,r],"float32")}const dv={kernelName:Kd,backendName:"webgl",kernelFunc:uv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{pad:i,strides:c,inputShape:a}=s,l=Yn(a,r.shape,c,1,i),u=new sv(l);return n.runWebGLProgram(u,[o,r],"float32")}const fv={kernelName:jd,backendName:"webgl",kernelFunc:hv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pv=Dn+`
  return cos(x);
`,gv=se({opSnippet:pv}),mv={kernelName:Yd,backendName:"webgl",kernelFunc:gv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xv=se({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),bv={kernelName:Qd,backendName:"webgl",kernelFunc:xv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wv{constructor(e,n,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,c,a,l]=e,[u]=n,[d,h]=s;this.outputShape=[u,d,h,l];const f=o==="bilinear"?1:0,[p,g]=[`${c-1}.0`,`${a-1}.0`],[m,x,b]=d>1?[`${(c-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[C,y,$]=h>1?[`${(a-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${m});
      const float width_ratio = float(${C});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${$};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cv={kernelName:Ci,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{image:o,boxes:r,boxInd:i}=e,{cropSize:c,method:a,extrapolationValue:l}=s,u=new wv(o.shape,r.shape,c,a,l);return n.runWebGLProgram(u,[o,r,i],"float32")}};var ds;(function(t){t.Prod="*",t.Sum="+"})(ds||(ds={}));class Uu{constructor(e,n,s,o){this.op=e,this.outputShape=n,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===ds.Prod?"1.0":"0.0",c=s?i:`getX(${Wu(r,"coords",this.op)})`,a=this.outputShape[this.outputShape.length-1];let l="",u="";s?(l=o?`end != ${a-1}`:"end != 0",u=o?"end + 1":"end - 1"):(l=o?`end + pow2 < ${a}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${xe(r)} coords = getOutputCoords();
        int end = ${Gu(r,"coords",this.op)};
        float val = ${c};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${u};
          ${Gu(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${Wu(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Wu(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.x, ${e}.y`;if(t===3)return`${e}.x, ${e}.y, ${e}.z`;if(t===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}function Gu(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.y`;if(t===3)return`${e}.z`;if(t===4)return`${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zu(t,e,n,s,o,r){const i=e.shape.length,c=Ze([s],i);let a=e;c!=null&&(a=We({inputs:{x:e},backend:n,attrs:{perm:c}}));const l=Je(1,i)[0];if(l!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=a.shape[l];let d=Ke({inputs:{x:a},backend:n});for(let h=0;h<=Math.ceil(Math.log2(u))-1;h++){const f=new Uu(t,a.shape,!1,r),p=[[h]],g=d;d=n.runWebGLProgram(f,[d],d.dtype,p),n.disposeIntermediateTensorInfo(g)}if(o){const h=new Uu(t,a.shape,o,r),f=d;d=n.runWebGLProgram(h,[d],d.dtype),n.disposeIntermediateTensorInfo(f)}if(c!=null){const h=$r(c),f=We({inputs:{x:d},backend:n,attrs:{perm:h}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(a),f}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,exclusive:i,reverse:c}=s;return zu(ds.Prod,o,n,r,i,c)}const vv={kernelName:Zd,backendName:"webgl",kernelFunc:yv};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $v(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,exclusive:i,reverse:c}=s;return zu(ds.Sum,o,n,r,i,c)}const Sv={kernelName:Jd,backendName:"webgl",kernelFunc:$v};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,weights:r}=e,{size:i,binaryOutput:c}=s;if(o.shape.length===1){const a=n.readSync(o.dataId),l=n.readSync(r.dataId),u=lu(a,l,r.dtype,r.shape,i);return n.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const a=n.bufferSync(o),l=n.bufferSync(r),u=Ww(a,l,i,c);return n.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const Ev={kernelName:eh,backendName:"webgl",kernelFunc:Iv};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tv{constructor(e,n,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=n,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${n};
      int offset_h = imod(h, ${n});
      int in_w = w / ${n};
      int offset_w = imod(w, ${n});
      int offset_d = (offset_h * ${n} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockSize:r,dataFormat:i}=s,c=o.shape[0],a=i==="NHWC"?o.shape[1]:o.shape[2],l=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],d=a*r,h=l*r,f=u/(r*r),p=i==="NHWC"?[c,d,h,f]:[c,f,d,h],g=new Tv(p,r,i);return n.runWebGLProgram(g,[o],o.dtype)}const kv={kernelName:th,backendName:"webgl",kernelFunc:Rv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hu{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ve(this.outputShape.length);const i=e.filterHeight,c=e.filterWidth,a=e.outChannels/e.inChannels;let l="",u="";s&&(o?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:l=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const d=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${c}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${u}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xu{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ve(this.outputShape.length);const i=e.outChannels/e.inChannels,c=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,h=d;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<d;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<d;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(h+1)/2;x++){const b=x*2;if(f+=`
          xC = xCCorner + ${b*l};
          `,a===1){if(b<d&&(c%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,l===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<d)){const C=c%2===0?H(l):l;l%2===0&&c%2===1||l%2!==0&&c%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${C};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,l>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):C===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${C};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<d&&(c%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<d&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<d&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<d&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<d&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",g="";s&&(o?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,g="result = activation(result);");const m=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${m}
        ${g}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:c,dilations:a,dimRoundingMode:l}=s;let u=a;u==null&&(u=[1,1]),E(yn(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const d=gt(o.shape,r.shape,i,u,c,l,!0);let h;S().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?h=new Xu(d):h=new Hu(d);const f=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(h,[o,r],"float32",f)}const Av={kernelName:nh,backendName:"webgl",kernelFunc:Nv};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _v{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Dv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=n-1-e.padInfo.top,c=s-1-e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${a}; dm++) {
              int d2 = d1 * ${a} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,dilations:c,pad:a,dimRoundingMode:l,filterShape:u}=s,d=gt(o.shape,u,i,c,a,l,!0),h=new _v(d);return n.runWebGLProgram(h,[o,r],"float32")}const Ov={kernelName:sh,backendName:"webgl",kernelFunc:Fv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{strides:i,dilations:c,pad:a,dimRoundingMode:l,inputShape:u}=s,d=gt(u,r.shape,i,c,a,l,!0),h=new Dv(d);return n.runWebGLProgram(h,[o,r],"float32")}const Lv={kernelName:oh,backendName:"webgl",kernelFunc:Pv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bv{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mv(t){const{inputs:e,backend:n}=t,{x:s}=e,o=[...s.shape,...s.shape],r=v(s.shape),i=F({inputs:{x:s},backend:n,attrs:{shape:[r]}}),c=new Bv(r),a=n.runWebGLProgram(c,[i],i.dtype),l=F({inputs:{x:a},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),l}const Vv={kernelName:rh,backendName:"webgl",kernelFunc:Mv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Uv{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:n,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:c,filterWidth:a,dilationHeight:l,dilationWidth:u}=e,{top:d,left:h}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${d}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${c}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${n}) {
            for (int w = 0; w < ${a}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:c,dilations:a}=s,l=Nc(o.shape,r.shape,i,c,"NHWC",a);let u;const d=new Uv(l);u=n.runWebGLProgram(d,[o,r],"float32");const h=F({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),h}const Gv={kernelName:ih,backendName:"webgl",kernelFunc:Wv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zv(t){const{inputs:e,backend:n,attrs:s}=t,{equation:o}=s,r=e,{allDims:i,summedDims:c,idDims:a}=Yc(o,r.length);Zc(i.length,a,r);const{path:l,steps:u}=Jc(c,a),d=u.length;let h=null,f=i.length;const p=[];for(let g=0;g<d;++g){for(const m of u[g]){const{permutationIndices:x,expandDims:b}=Qc(f,a[m]);let C;el(x)?C=r[m]:(C=We({inputs:{x:r[m]},backend:n,attrs:{perm:x}}),p.push(C));const y=C.shape.slice();for(let $=0;$<b.length;++$)y.splice(b[$],0,1);w(C.shape,y)||(C=F({inputs:{x:C},backend:n,attrs:{shape:y}}),p.push(C)),h===null?h=C:(h=Zr({inputs:{a:C,b:h},backend:n}),p.push(h))}g<d-1&&(l[g]>=0&&(h=bo({inputs:{x:h},backend:n,attrs:{axis:l[g]-(i.length-f),keepDims:!1}}),p.push(h)),f--)}for(const g of p)g!==h&&n.disposeIntermediateTensorInfo(g);return h}const Hv={kernelName:ah,backendName:"webgl",kernelFunc:zv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xv=se({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),qv={kernelName:vi,backendName:"webgl",kernelFunc:Xv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kv="return (b >= 1.0) ? a : a * (b + 1.0);",jv=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,Yv={kernelName:ch,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n}=t,{dy:s,y:o}=e,r=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new is(jv,s.shape,o.shape):new _n(Kv,s.shape,o.shape);return n.runWebGLProgram(r,[s,o],s.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qv=_e({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:Xw}),Zv={kernelName:Oo,backendName:"webgl",kernelFunc:Qv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jv=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Wc};
  float a1 = ${Gc};
  float a2 = ${zc};
  float a3 = ${Hc};
  float a4 = ${Xc};
  float a5 = ${qc};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,e$=se({opSnippet:Jv}),t$={kernelName:lh,backendName:"webgl",kernelFunc:e$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n$=Dn+`
  return exp(x);
`,qu=se({opSnippet:n$,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:qw,dtype:"float32"}),s$={kernelName:xs,backendName:"webgl",kernelFunc:qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ni(t){const{inputs:e,attrs:n,backend:s}=t,{dim:o}=n,{input:r}=e,i=r.shape.length,c=r.shape.slice();let a=o;return o<0&&(E(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),a=i+o+1),c.splice(a,0,1),F({inputs:{x:r},backend:s,attrs:{shape:c}})}const o$={kernelName:$i,backendName:"webgl",kernelFunc:ni};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ku="return exp(x) - 1.0;",r$=se({opSnippet:Ku,packedOpSnippet:Ku,cpuKernelImpl:Kw}),i$={kernelName:Po,backendName:"webgl",kernelFunc:r$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ju{constructor(e,n,s){this.variableNames=["real","imag"];const o=n[1];this.outputShape=n;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let c;if(e==="real")c="return real * expR - imag * expI;";else if(e==="imag")c="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${c}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yu(t,e,n){const s=n.texData.get(t.dataId),o=v(t.shape),r=t.shape[t.shape.length-1],i=o/r,c=F({inputs:{x:t},backend:n,attrs:{shape:[i,r]}}),a=c.shape,l=new ju("real",a,e),u=new ju("imag",a,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:a},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:a}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Mt({inputs:{real:h,imag:f},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f);const g=F({inputs:{x:p},backend:n,attrs:{shape:t.shape}});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(p),g}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a$(t){const{inputs:e,backend:n}=t,{input:s}=e;return Yu(s,!1,n)}const c$={kernelName:Si,backendName:"webgl",kernelFunc:a$};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class l${constructor(e,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hs(t){const{backend:e,attrs:n}=t,{shape:s,value:o}=n;let{dtype:r}=n;if(r=r||ps(o),r==="string"){const i=ne(r,v(s));return i.fill(o),e.makeTensorInfo(s,r,i)}else{const i=new l$(s,o),c=[[o]];return e.runWebGLProgram(i,[],r,c)}}const u$={kernelName:Ii,backendName:"webgl",kernelFunc:hs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class d${constructor(e){this.variableNames=["Image"],this.outputShape=[];const n=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${n} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${n}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h$={kernelName:Ei,backendName:"webgl",kernelFunc:({inputs:t,backend:e})=>{const{image:n}=t,s=e,o=new d$(n.shape);return s.runWebGLProgram(o,[n],n.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qu="return floor(x);",f$=se({opSnippet:Qu,packedOpSnippet:Qu,cpuKernelImpl:jw}),p$={kernelName:Lo,backendName:"webgl",kernelFunc:f$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g$=_e({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),m$={kernelName:Ti,backendName:"webgl",kernelFunc:g$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class x${constructor(e){this.variableNames=["A"];const n=Me(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${n.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class b${constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=Me(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${n.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w$={kernelName:ef,backendName:"webgl",kernelFunc:C$};let On,si=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function C$(t){const{inputs:e,backend:n,attrs:s}=t;let{pixels:o}=e;const{numChannels:r}=s,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,c=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[a,l]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[l,a],d=[l,a,r];if(c||i){const g=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(On==null||g!==si)&&(si=g,On=document.createElement("canvas").getContext("2d",{willReadFrequently:si})),On.canvas.width=a,On.canvas.height=l,On.drawImage(o,0,0,a,l),o=On.canvas}const h=n.makeTensorInfo(u,"int32");n.texData.get(h.dataId).usage=et.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(h.dataId),o);const f=S().getBool("WEBGL_PACK")?new b$(d):new x$(d),p=n.runWebGLProgram(f,[h],"int32");return n.disposeData(h.dataId),p}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y$(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r,bias:i,preluActivationWeights:c}=e,{strides:a,pad:l,dataFormat:u,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:p}=s,g=vn(u),m=gt(o.shape,r.shape,a,d,l,h,!1,g);let x;const b=[],C=i!=null,y=c!=null,$=f==="leakyrelu",N=()=>{const k=[o,r],B=(U,Y)=>{if(Y==="NCHW"&&U.shape.length===1&&U.shape[0]!==1){const ie=F({inputs:{x:U},backend:n,attrs:{shape:[U.shape[0],1,1]}});return b.push(ie),ie}return U};if(C&&k.push(B(i,u)),y&&k.push(B(c,u)),$){const U=n.makeTensorInfo([],"float32",rn(p,"float32"));k.push(U),b.push(U)}return k};if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))x=Mu({x:o,filter:r,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:c,leakyreluAlpha:p});else if(m.strideWidth<=2&&g==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const k=f?as(f,!0):null,B=new Bu(m,C,k,y,$),U=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]],Y=N();x=n.runWebGLProgram(B,Y,"float32",U)}else if(S().getBool("WEBGL_CONV_IM2COL"))x=Vu({x:o,filter:r,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:c,leakyreluAlpha:p});else{const k=f?as(f,!1):null,B=new Lu(m,C,k,y,$),U=N();x=n.runWebGLProgram(B,U,"float32")}const R=F({inputs:{x},backend:n,attrs:{shape:m.outShape}});return b.push(x),b.forEach(k=>n.disposeIntermediateTensorInfo(k)),R}const v$={kernelName:nf,backendName:"webgl",kernelFunc:y$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $$(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r,bias:i,preluActivationWeights:c}=e,{strides:a,pad:l,dilations:u,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=s,p=[];let g=u;g==null&&(g=[1,1]),E(yn(a,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${g}'`);const m=gt(o.shape,r.shape,a,g,l,d,!0),x=S().getBool("WEBGL_PACK_DEPTHWISECONV")&&m.strideWidth<=2&&m.outChannels/m.inChannels===1,b=h?as(h,x):null,C=[o,r],y=i!=null,$=c!=null,N=h==="leakyrelu";if(y&&C.push(i),$&&C.push(c),N){const U=n.makeTensorInfo([],"float32",rn(f,"float32"));C.push(U),p.push(U)}let R;x?R=new Xu(m,y,b,$,N):R=new Hu(m,y,b,$,N);const k=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]],B=n.runWebGLProgram(R,C,"float32",k);return p.forEach(U=>n.disposeIntermediateTensorInfo(U)),B}const S$={kernelName:sf,backendName:"webgl",kernelFunc:$$};class I${constructor(e,n,s,o){this.sliceDim=e,this.strides=n,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=xe(s.length);let i=`
    int index;`;for(let c=0;c<this.sliceDim;c++)i+=`
          index = round(getIndices(coords[0], ${c}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[c]};
          flattenIndex += index * ${this.strides[c]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(t){const{inputs:e,backend:n}=t,{params:s,indices:o}=e,r=o.shape,i=r[r.length-1],c=v(s.shape),[a,l,u,d]=Bc(s,o),h=F({inputs:{x:o},backend:n,attrs:{shape:[l,i]}}),f=F({inputs:{x:s},backend:n,attrs:{shape:[v(s.shape)/u,u]}});if(n.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=n.readSync(o.dataId),b=n.bufferSync(s),C=Yw(x,b,s.dtype,l,i,u,d,s.shape,c);return n.makeTensorInfo(a,s.dtype,C.values)}const p=new I$(i,d,[l,u],s.shape),g=n.runWebGLProgram(p,[f,h],f.dtype),m=F({inputs:{x:g},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(g),m}const T$={kernelName:hh,backendName:"webgl",kernelFunc:E$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class R${constructor(e,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const s=xe(this.rank),o=k$(e,2);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function k$(t,e){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<t.length;o++)o===2?s.push("index"):s.push(`${n[o]}`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zu(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,indices:r}=e,{axis:i,batchDims:c}=s,a=te(i,o.shape)[0];if(S().get("DEBUG")){const b=n.readSync(r.dataId),C=o.shape[a];for(let y=0;y<b.length;++y){const $=b[y];E($<=C-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${C-1}]`)}}const l=gl(o,r,a,c),u=v(r.shape),d=[],h=F({inputs:{x:o},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=F({inputs:{x:r},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(h),d.push(f);const p=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=n.bufferSync(f),C=n.bufferSync(h),y=Qw(C,b,p);return d.forEach($=>n.disposeIntermediateTensorInfo($)),n.makeTensorInfo(l.outputShape,y.dtype,y.values)}const g=new R$(h.shape,p),m=n.runWebGLProgram(g,[h,f],h.dtype);d.push(m);const x=F({inputs:{x:m},backend:n,attrs:{shape:l.outputShape}});return d.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}const N$={kernelName:dh,backendName:"webgl",kernelFunc:Zu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A$=_e({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:Zw,dtype:"bool"}),_$={kernelName:bs,backendName:"webgl",kernelFunc:A$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D$=_e({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:Jw}),F$={kernelName:ws,backendName:"webgl",kernelFunc:D$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O$(t){const{inputs:e,backend:n}=t,{input:s}=e;return Yu(s,!0,n)}const P$={kernelName:Ri,backendName:"webgl",kernelFunc:O$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L$=se({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),B$={kernelName:fh,backendName:"webgl",kernelFunc:L$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M$=se({opSnippet:"return float(isinf(x));",dtype:"bool"}),V$={kernelName:ph,backendName:"webgl",kernelFunc:M$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U$=se({opSnippet:"return float(isnan(x));",dtype:"bool"}),W$={kernelName:gh,backendName:"webgl",kernelFunc:U$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G$=_e({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:eC,dtype:"bool"}),z$={kernelName:Bo,backendName:"webgl",kernelFunc:G$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H$=_e({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:tC,dtype:"bool"}),X$={kernelName:ys,backendName:"webgl",kernelFunc:H$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q$(t){const{backend:e,attrs:n}=t,{start:s,stop:o,num:r}=n,i=nC(s,o,r);return e.makeTensorInfo([i.length],"float32",i)}const K$={kernelName:mh,backendName:"webgl",kernelFunc:q$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$=Dn+`
  return x < 0.0 ? 0./0. : log(x);
`,Y$=se({opSnippet:j$,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:sC}),Q$={kernelName:vs,backendName:"webgl",kernelFunc:Y$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z$=Dn+`
  return log(1.0 + x);
`,J$=se({opSnippet:Z$}),eS={kernelName:Ai,backendName:"webgl",kernelFunc:J$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tS=_e({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),nS={kernelName:_i,backendName:"webgl",kernelFunc:tS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sS=se({opSnippet:"return float(!(x >= 1.0));"}),oS={kernelName:xh,backendName:"webgl",kernelFunc:sS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rS=_e({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),iS={kernelName:bh,backendName:"webgl",kernelFunc:rS};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class aS{constructor(e,n,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=n,c=e[3]-1;this.outputShape=e;let a;const l=`float(${s}) + float(${o}) * sum`;r===.5?a=`inversesqrt(${l})`:r===1?a=`1.0/(${l})`:a=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${c}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${a};
        setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cS{constructor(e,n,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=n,c=e[3]-1;this.outputShape=e;let a;const l=`float(${s}) + float(${o}) * sum`;r===.5?a=`inversesqrt(${l})`:r===1?a=`1.0/(${l})`:a=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${c}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${a};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lS={kernelName:wh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{depthRadius:r,bias:i,alpha:c,beta:a}=s,l=S().getBool("WEBGL_PACK_NORMALIZATION")?new cS(o.shape,r,i,c,a):new aS(o.shape,r,i,c,a);return n.runWebGLProgram(l,[o],o.dtype)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uS{constructor(e,n,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${n})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${n} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dS={kernelName:Ch,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o,y:r,dy:i}=e,{depthRadius:c,bias:a,alpha:l,beta:u}=s,d=new uS(o.shape,c,a,l,u);return n.runWebGLProgram(d,[o,r,i],o.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hS(t,e,n,s){const o=v(e),i=v(t.shape)/o,c=F({inputs:{x:t},attrs:{shape:[i,o]},backend:s}),a=tn(c,t.dtype,"max",s),l=F({inputs:{x:a},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(a),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ju(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{reductionIndices:r,keepDims:i}=s,c=o.shape.length,a=te(r,o.shape);let l=a;const u=Ze(l,c),d=u!=null,h=n.shouldExecuteOnCPU([o]);let f=o;if(d){if(h){const C=n.texData.get(f.dataId).values,y=new Array(c);for(let R=0;R<y.length;R++)y[R]=o.shape[u[R]];const $=Yr(C,o.shape,o.dtype,u,y);f=n.makeTensorInfo(y,o.dtype);const N=n.texData.get(f.dataId);N.values=$}else f=xo(o,u,n);l=Je(l.length,c)}pt("max",l,c);const[p,g]=It(f.shape,l);let m=p;i&&(m=Qe(p,a));let x;if(h){const C=n.texData.get(f.dataId).values,y=oC(C,v(g),m,o.dtype);x=n.makeTensorInfo(m,o.dtype);const $=n.texData.get(x.dataId);$.values=y}else x=hS(f,g,m,n);return d&&n.disposeIntermediateTensorInfo(f),x}const fS={kernelName:Di,backendName:"webgl",kernelFunc:Ju};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pS=Qr+`
  return max(a, b);
`,gS=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rs+`
  return result;
`,mS=_e({opSnippet:pS,packedOpSnippet:gS,cpuKernelImpl:rC}),xS={kernelName:Mo,backendName:"webgl",kernelFunc:mS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bS(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e;es(o,"maxPool");const{filterSize:r,strides:i,pad:c,dimRoundingMode:a}=s,l=1;E(yn(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=wn(o.shape,r,i,l,c,a);if(u.filterWidth===1&&u.filterHeight===1&&w(u.inShape,u.outShape))return Ke({inputs:{x:o},backend:n});const d=new cs(u,"max",!1);return n.runWebGLProgram(d,[o],o.dtype)}const wS={kernelName:yh,backendName:"webgl",kernelFunc:bS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CS(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{filterSize:r,strides:i,pad:c,dataFormat:a,dimRoundingMode:l}=s,u=[1,1,1],d=jn(o.shape,r,i,u,c,l,a),h=new Jr(d,"max",!1);return n.runWebGLProgram(h,[o],o.dtype)}const yS={kernelName:$h,backendName:"webgl",kernelFunc:CS};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vS{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,r=e.effectiveFilterHeight,i=e.effectiveFilterWidth,c=r-1-e.padInfo.top,a=i-1-e.padInfo.left,l=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class $S{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.dilationDepth,i=e.dilationHeight,c=e.dilationWidth,a=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=a-1-e.padInfo.front,h=l-1-e.padInfo.top,f=u-1-e.padInfo.left,p=a*l*u-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${h}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${a};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SS(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r,{filterSize:c,strides:a,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=jn(i.shape,c,a,d,l,u),f=new Jr(h,"max",!0),p=n.runWebGLProgram(f,[i],i.dtype),g=new $S(h),m=n.runWebGLProgram(g,[o,p],i.dtype);return n.disposeIntermediateTensorInfo(p),m}const IS={kernelName:Sh,backendName:"webgl",kernelFunc:SS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ES(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r,output:i}=e,c=r;es([r,i],"maxPoolGrad");const{filterSize:a,strides:l,pad:u,dimRoundingMode:d}=s,h=wn(c.shape,a,l,1,u,d),f=!0,p=new cs(h,"max",f),g=n.runWebGLProgram(p,[c],c.dtype),m=new vS(h),x=n.runWebGLProgram(m,[o,g],c.dtype);return n.disposeIntermediateTensorInfo(g),x}const TS={kernelName:vh,backendName:"webgl",kernelFunc:ES};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RS(t,e,n,s){let o=new cs(n,"max",!1);const r=s.runWebGLProgram(o,[t],"float32");o=new cs(n,"max",!0,!0,e);const i=s.runWebGLProgram(o,[t],"float32");return[r,i]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kS={kernelName:Ih,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{filterSize:o,strides:r,pad:i,includeBatchInIndex:c}=e,a=n;E(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const l=[1,1];E(yn(r,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const u=wn(s.shape,o,r,l,i),[d,h]=RS(s,c,u,a);return[d,h]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NS(t,e,n,s){const o=v(e),i=v(t.shape)/o,c=F({inputs:{x:t},attrs:{shape:[i,o]},backend:s}),a=tn(c,"float32","mean",s),l=F({inputs:{x:a},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(a),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AS={kernelName:Fi,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{keepDims:o,axis:r}=e,i=n,c=s.shape.length,a=te(r,s.shape);let l=a;const u=Ze(l,c),d=u!=null,h=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(d){if(h){const y=i.texData.get(p.dataId).values,$=new Array(c);for(let k=0;k<$.length;k++)$[k]=s.shape[u[k]];const N=Yr(y,s.shape,s.dtype,u,$);p=i.makeTensorInfo($,s.dtype);const R=i.texData.get(p.dataId);R.values=N}else p=xo(s,u,i);f.push(p),l=Je(l.length,c)}pt("sum",l,c);const[g,m]=It(p.shape,l);let x=g;o&&(x=Qe(g,a));const b=NS(p,m,x,i);for(const C of f)i.disposeIntermediateTensorInfo(C);return b}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _S(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,c=o.shape.length,a=te(r,o.shape);let l=a;const u=Ze(l,c);let d=o;u!=null&&(d=We({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Je(l.length,o.shape.length)),pt("min",l,c);const[h,f]=It(d.shape,l),p=v(f),g=F({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"min",n);let x;if(i){const b=Qe(h,a);x=F({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=F({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const DS={kernelName:Oi,backendName:"webgl",kernelFunc:_S};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FS=Qr+`
  return min(a, b);
`,OS=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rs+`
  return result;
`,PS=_e({opSnippet:FS,packedOpSnippet:OS,cpuKernelImpl:iC}),LS={kernelName:$s,backendName:"webgl",kernelFunc:PS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class BS{constructor(e,n,s){this.variableNames=["x"],this.outputShape=n.map((u,d)=>u[0]+e[d]+u[1]);const o=e.length,r=xe(o),i=n.map(u=>u[0]).join(","),c=n.map((u,d)=>u[0]+e[d]).join(","),a=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),l=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${c});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${a}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class MS{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((p,g)=>p[0]+e[g]+p[1]);const o=e.length,r=xe(o),i=n.map(p=>p[0]).join(","),c=n.map((p,g)=>p[0]+e[g]).join(","),a=Ue("rc",o),l=Ue("source",o),u=`${a[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=s==="reflect"?0:1;let f="";if(o===1){const p=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${a[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
      `}else{const p=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${a[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${a[o-2]} += 1;
        if(${a[o-2]} < ${this.outputShape[o-2]}) {
          ${p}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${a[o-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${c});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VS={kernelName:Eh,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s}=t,{paddings:o,mode:r}=n,i=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new MS(s.shape,o,r):new BS(s.shape,o,r);return e.runWebGLProgram(i,[s],s.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const US=`if (b == 0.0) return NAN;
  return mod(a, b);`,WS=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+rs+`
  return result;
`,GS=_e({opSnippet:US,packedOpSnippet:WS}),zS={kernelName:Th,backendName:"webgl",kernelFunc:GS};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class HS{constructor(e,n,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${n-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${n-1}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ed=_e({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),XS={kernelName:yi,backendName:"webgl",kernelFunc:ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const td="return a - b;",nd=_e({opSnippet:td,packedOpSnippet:td,supportsComplex:!0,cpuKernelImpl:IC}),qS={kernelName:ks,backendName:"webgl",kernelFunc:nd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(t){const{inputs:e,backend:n,attrs:s}=t,{logits:o}=e,{dim:r}=s,i=te([r],o.shape),c=Ju({inputs:{x:o},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),a=Qe(c.shape,i),l=F({inputs:{x:c},backend:n,attrs:{shape:a}}),u=nd({inputs:{a:o,b:l},backend:n}),d=qu({inputs:{x:u},backend:n}),h=bo({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),f=F({inputs:{x:h},backend:n,attrs:{shape:a}}),p=ed({inputs:{a:d,b:f},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}const KS={kernelName:Hh,backendName:"webgl",kernelFunc:sd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jS(t){const{inputs:e,backend:n,attrs:s}=t,{logits:o}=e,{numSamples:r,seed:i,normalized:c}=s,a=c?o:sd({inputs:{logits:o},backend:n,attrs:{dim:o.shape.length-1}}),l=a.shape[0],u=a.shape[1],d=new HS(l,u,r),h=[[i]],f=n.runWebGLProgram(d,[a],"int32",h);return c||n.disposeIntermediateTensorInfo(a),f}const YS={kernelName:Rh,backendName:"webgl",kernelFunc:jS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QS=nt+`
  return -x;
`,ZS=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function JS(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])){const r=n.texData.get(s.dataId),[i,c]=cC(r.values,s.shape,s.dtype);return n.makeTensorInfo(c,s.dtype,i)}let o;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new en(s.shape,ZS):o=new Nt(s.shape,QS),n.runWebGLProgram(o,[s],s.dtype)}const eI={kernelName:Vo,backendName:"webgl",kernelFunc:JS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tI=pc;function nI(t){ut("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a}=s,l=n.readSync(o.dataId),u=n.readSync(r.dataId),{selectedIndices:d}=tI(l,u,i,c,a);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const sI={kernelName:Pi,backendName:"webgl",kernelFunc:nI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oI=gc;function rI(t){ut("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a,padToMaxOutputSize:l}=s,u=n.readSync(o.dataId),d=n.readSync(r.dataId),{selectedIndices:h,validOutputs:f}=oI(u,d,i,c,a,l);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}const iI={kernelName:Li,backendName:"webgl",kernelFunc:rI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aI=mc;function cI(t){ut("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a,softNmsSigma:l}=s,u=n.readSync(o.dataId),d=n.readSync(r.dataId),h=i,f=c,p=a,g=l,{selectedIndices:m,selectedScores:x}=aI(u,d,h,f,p,g);return[n.makeTensorInfo([m.length],"int32",new Int32Array(m)),n.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const lI={kernelName:Bi,backendName:"webgl",kernelFunc:cI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uI{constructor(e,n,s,o){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dI={kernelName:Nh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{indices:o}=e,{dtype:r,depth:i,onValue:c,offValue:a}=s,l=v(o.shape),u=new uI(l,i,c,a),d=F({inputs:{x:o},backend:n,attrs:{shape:[l]}}),h=n.runWebGLProgram(u,[d],r);n.disposeIntermediateTensorInfo(d);const f=[...o.shape,i],p=F({inputs:{x:h},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),p}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function So(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="complex64"){const o=ls({inputs:{input:s},backend:n}),r=So({inputs:{x:o},backend:n}),i=vo({inputs:{input:s},backend:n}),c=So({inputs:{x:i},backend:n}),a=Mt({inputs:{real:r,imag:c},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),a}else return hs({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:n})}const hI={kernelName:la,backendName:"webgl",kernelFunc:So};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=ls({inputs:{input:s},backend:n}),r=od({inputs:{x:o},backend:n}),i=vo({inputs:{input:s},backend:n}),c=So({inputs:{x:i},backend:n}),a=Mt({inputs:{real:r,imag:c},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),a}else return hs({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:n})}const fI={kernelName:kh,backendName:"webgl",kernelFunc:od};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pI(t){const{inputs:e,backend:n,attrs:s}=t,{axis:o}=s;if(e.length===1)return ni({inputs:{input:e[0]},backend:n,attrs:{dim:o}});const r=e[0].shape,i=e[0].dtype;e.forEach(u=>{ye(r,u.shape,"All tensors passed to stack must have matching shapes"),E(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],a=e.map(u=>{const d=ni({inputs:{input:u},backend:n,attrs:{dim:o}});return c.push(d),d}),l=Pu({inputs:a,backend:n,attrs:{axis:o}});return c.forEach(u=>n.disposeIntermediateTensorInfo(u)),l}const gI={kernelName:Mi,backendName:"webgl",kernelFunc:pI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mI{constructor(e,n,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((l,u)=>l[0]+e[u]+l[1]);const o=e.length,r=xe(o),i=n.map(l=>l[0]).join(","),c=n.map((l,u)=>l[0]+e[u]).join(","),a=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${c});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${a}));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xI{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((g,m)=>g[0]+e[m]+g[1]);const o=e.length,r=xe(o),i=n.map(g=>g[0]).join(","),c=n.map((g,m)=>g[0]+e[m]).join(","),a=Ue("rc",o),l=Ue("source",o),u=`${a[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${r} rc = outputLoc;`,`${a[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${a[o-2]} += 1;
       if(${a[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${a[o-1]} += 1;
         if(${u}) {`],f=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let g=0,m=o===1?2:4;g<m;g++)p+=`
        ${h[g]}
        if (${f}) {
          result[${g}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${g}] = getChannel(getX(${l.join()}), ${d});
        }
      `;p+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${c});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rd=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{paddings:r,constantValue:i}=s;if(v(o.shape)===0){const l=r.map((u,d)=>u[0]+o.shape[d]+u[1]);return hs({backend:n,attrs:{shape:l,value:i,dtype:o.dtype}})}const c=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xI(o.shape,r,i):new mI(o.shape,r,i),a=[[i]];return n.runWebGLProgram(c,[o],o.dtype,a)},bI={kernelName:Ah,backendName:"webgl",kernelFunc:rd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wI=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,CI=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+rs+`
  return result;
`,yI=_e({opSnippet:wI,packedOpSnippet:CI}),vI={kernelName:Vi,backendName:"webgl",kernelFunc:yI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $I(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,c=o.shape.length,a=[],l=te(r,o.shape);let u=l;const d=Ze(u,c);let h=o;d!=null&&(h=We({inputs:{x:o},backend:n,attrs:{perm:d}}),u=Je(u.length,c),a.push(h)),pt("prod",u,c);let f;if(n.shouldExecuteOnCPU([h])){const p=n.texData.get(h.dataId).values,{outVals:g,outShape:m,outDtype:x}=uC(h.shape,h.dtype,p,u);f=n.makeTensorInfo(m,x,g)}else{const[p,g]=It(h.shape,u),m=v(g),x=F({inputs:{x:h},backend:n,attrs:{shape:[-1,m]}}),b=tr(o.dtype),C=tn(x,b,"prod",n);f=F({inputs:{x:C},backend:n,attrs:{shape:p}}),a.push(x),a.push(C)}if(i){a.push(f);const p=Qe(f.shape,l);f=F({inputs:{x:f},backend:n,attrs:{shape:p}})}return a.forEach(p=>n.disposeIntermediateTensorInfo(p)),f}const SI={kernelName:Wi,backendName:"webgl",kernelFunc:$I};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function II(t){const{inputs:e,backend:n,attrs:s}=t,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=e,{outputRaggedRank:c}=s,a=o.map(x=>n.readSync(x.dataId)),l=o.map(x=>x.shape),u=n.readSync(r.dataId),d=n.readSync(i.dataId),[h,f,p]=dC(a,l,u,r.shape,r.dtype,d,i.shape,c),g=h.map(x=>n.makeTensorInfo([x.length],"int32",x)),m=n.makeTensorInfo(p,r.dtype,f);return g.concat([m])}const EI={kernelName:_h,backendName:"webgl",kernelFunc:II};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TI(t){const{inputs:e,backend:n,attrs:s}=t,{shape:o,values:r,defaultValue:i,rowPartitionTensors:c}=e,{rowPartitionTypes:a}=s,l=n.readSync(o.dataId),u=n.readSync(r.dataId),d=n.readSync(i.dataId),h=c.map(m=>n.readSync(m.dataId)),f=c.map(m=>m.shape),[p,g]=hC(l,o.shape,u,r.shape,r.dtype,d,i.shape,h,f,a);return n.makeTensorInfo(p,r.dtype,g)}const RI={kernelName:Dh,backendName:"webgl",kernelFunc:TI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const id=t=>{const{backend:e,attrs:n}=t,{start:s,stop:o,step:r,dtype:i}=n,c=fC(s,o,r,i);return e.makeTensorInfo([c.length],i,c)},kI={kernelName:Gi,backendName:"webgl",kernelFunc:id};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const NI=se({opSnippet:"return 1.0 / x;"}),AI={kernelName:Fh,backendName:"webgl",kernelFunc:NI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _I=nt+`
  return (x < 0.0) ? 0.0 : x;
`,DI=se({opSnippet:_I,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),FI={kernelName:zi,backendName:"webgl",kernelFunc:DI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OI=nt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,PI=se({opSnippet:OI,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),LI={kernelName:Ki,backendName:"webgl",kernelFunc:PI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class BI{constructor(e,n,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?c-1:c,o&&s>1?a-1:a],d=[o&&n>1?n-1:n,o&&s>1?s-1:s];let h;r?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${a}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class MI{constructor(e,n,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?c-1:c,o&&s>1?a-1:a],d=[o&&n>1?n-1:n,o&&s>1?s-1:s];let h;r?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${a}.0,
                                     ${a}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VI(t){const{inputs:e,backend:n,attrs:s}=t,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:c}=s,[a,l]=c,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new MI(o.shape,a,l,r,i):new BI(o.shape,a,l,r,i);return n.runWebGLProgram(u,[o],"float32")}const UI={kernelName:qi,backendName:"webgl",kernelFunc:VI};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WI{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,r]=n,[,i,c]=e,a=[s&&i>1?o-1:o,s&&c>1?r-1:r],l=[s&&i>1?i-1:i,s&&c>1?c-1:c],u=a[0]/l[0],d=a[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GI(t){const{inputs:e,backend:n,attrs:s}=t,{images:o,dy:r}=e,{alignCorners:i}=s,c=new WI(r.shape,o.shape,i);return n.runWebGLProgram(c,[r],r.dtype)}const zI={kernelName:Ph,backendName:"webgl",kernelFunc:GI};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class HI{constructor(e,n,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?c-1:c,o&&s>1?a-1:a],d=[o&&n>1?n-1:n,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${a}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class XI{constructor(e,n,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?c-1:c,o&&s>1?a-1:a],d=[o&&n>1?n-1:n,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${a}.0,
                                     ${a}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qI(t){const{inputs:e,backend:n,attrs:s}=t,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:c}=s,[a,l]=c,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new XI(o.shape,a,l,r,i):new HI(o.shape,a,l,r,i);return n.runWebGLProgram(u,[o],o.dtype)}const KI={kernelName:Xi,backendName:"webgl",kernelFunc:qI};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jI{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,r]=n,[,i,c]=e,a=[s&&i>1?o-1:o,s&&c>1?r-1:r],l=[s&&i>1?i-1:i,s&&c>1?c-1:c],u=a[0]/l[0],d=a[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float sourceFracRow =
              float(${a[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${a[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YI(t){const{inputs:e,backend:n,attrs:s}=t,{images:o,dy:r}=e,{alignCorners:i}=s,c=new jI(r.shape,o.shape,i);return n.runWebGLProgram(c,[r],r.dtype)}const QI={kernelName:Oh,backendName:"webgl",kernelFunc:YI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ZI{constructor(e,n){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const o=c=>n.indexOf(c)!==-1&&e[c]!==1?`${e[c]} - coords[${c}] - 1`:`coords[${c}]`,r=e.map((c,a)=>o(a)).join(","),i=xe(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class JI{constructor(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const o=Ue("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,c=xe(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${c} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${a(o.slice())};
          if(${r}){
            result.g = ${l(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${d(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function a(p){return h(p)}function l(p){return p[s-1]="("+p[s-1]+" + 1)",h(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",h(p)}function d(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",h(p)}function h(p){const g=e.map((b,C)=>f(C,p)),m=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${m}), vec2(${x}))`}function f(p,g){return n.indexOf(p)!==-1&&e[p]!==1?`${e[p]} - ${g[p]} - 1`:`${g[p]}`}}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eE(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{dims:r}=s,i=o.shape.length,c=te(r,o.shape);if(i===0)return Ke({inputs:{x:o},backend:n});const a=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new JI(o.shape,c):new ZI(o.shape,c);return n.runWebGLProgram(a,[o],o.dtype)}const tE={kernelName:ji,backendName:"webgl",kernelFunc:eE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nE{constructor(e,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],o=e[2];this.outputShape=e;let r="";typeof n=="number"?r=`float outputValue = ${n.toFixed(2)};`:r=`
        vec3 fill = vec3(${n.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sE={kernelName:da,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{image:s}=t,{radians:o,fillValue:r,center:i}=e,c=n,a=new nE(s.shape,r),[l,u]=Oc(i,s.shape[1],s.shape[2]),d=[[l,u,Math.sin(o),Math.cos(o)]];return c.runWebGLProgram(a,[s],s.dtype,d)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oE=se({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),rE={kernelName:Yi,backendName:"webgl",kernelFunc:oE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iE=se({opSnippet:"return inversesqrt(x);",cpuKernelImpl:pC}),aE={kernelName:Wo,backendName:"webgl",kernelFunc:iE};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ad{constructor(e,n,s,o,r,i,c=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const a=xe(r.length),l=xe(i.length);let u="";s===1?u="i":s===2&&(u="i, j");const d=`getIndices(${u})`;let h="";o===1?h="i":o===2&&(h="i, coords[1]");const f=`getUpdates(${h})`,p=n>1?"strides[j]":"strides";this.userCode=`
        ${a} strides = ${a}(${r});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${n}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cE(t){const{inputs:e,backend:n,attrs:s}=t,{indices:o,updates:r}=e,{shape:i}=s,{sliceRank:c,numUpdates:a,sliceSize:l,strides:u,outputSize:d}=Fr(r,o,i),h=[d/l,l];if(d===0)return n.makeTensorInfo(i,o.dtype);const f=F({inputs:{x:o},backend:n,attrs:{shape:[a,c]}}),p=F({inputs:{x:r},backend:n,attrs:{shape:[a,l]}}),g=n.makeTensorInfo([],"float32",new Float32Array([0])),m=new ad(a,c,f.shape.length,p.shape.length,u,h),x=n.runWebGLProgram(m,[p,f,g],p.dtype),b=F({inputs:{x},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),b}const lE={kernelName:Lh,backendName:"webgl",kernelFunc:cE};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uE{constructor(e,n,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(n+1))}; ++i) { if (left >= right) break;`,c=S().getNumber("WEBGL_VERSION")===2?r:i,a=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${c}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${a} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dE(t){const{inputs:e,backend:n,attrs:s}=t,{sortedSequence:o,values:r}=e,{side:i}=s,c=new uE(o.shape[0],o.shape[1],r.shape[1],i),a=[[o.shape[1]]];return n.runWebGLProgram(c,[o,r],"int32",a)}const hE={kernelName:Bh,backendName:"webgl",kernelFunc:dE};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fE{constructor(e,n,s){this.variableNames=["c","a","b"],this.outputShape=n;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const c=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],l=[];for(let u=0;u<n.length;u++)l.push(`${c[u]}`),u<e&&a.push(`${c[u]}`);o=a.join(),r=l.join()}const i=xe(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pE(t){const{inputs:e,backend:n}=t,{condition:s,t:o,e:r}=e,i=new fE(s.shape.length,o.shape,o.shape.length);return n.runWebGLProgram(i,[s,o,r],Ct(o.dtype,r.dtype))}const gE={kernelName:Qi,backendName:"webgl",kernelFunc:pE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mE=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Vc};
  float scale = ${Uc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,xE=se({opSnippet:mE}),bE={kernelName:Mh,backendName:"webgl",kernelFunc:xE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wE=Dn+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,CE=se({opSnippet:wE,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:mC}),yE={kernelName:Es,backendName:"webgl",kernelFunc:CE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vE=se({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),$E={kernelName:Wh,backendName:"webgl",kernelFunc:vE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SE=Dn+`
  return sin(x);
`,IE=se({opSnippet:SE}),EE={kernelName:Vh,backendName:"webgl",kernelFunc:IE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TE=se({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),RE={kernelName:Uh,backendName:"webgl",kernelFunc:TE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kE=se({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),NE={kernelName:Gh,backendName:"webgl",kernelFunc:kE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AE={kernelName:zh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockShape:r,paddings:i}=s;E(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const c=r.reduce((x,b)=>x*b),a=[[0,0]];a.push(...i);for(let x=1+r.length;x<o.shape.length;++x)a.push([0,0]);const l=[],u=rd({inputs:{x:o},backend:n,attrs:{paddings:a,constantValue:0}}),d=Ar(u.shape,r,c,!1),h=_r(d.length,r.length,!1),f=Dr(u.shape,r,c,!1),p=F({inputs:{x:u},backend:n,attrs:{shape:d}}),g=We({inputs:{x:p},backend:n,attrs:{perm:h}}),m=F({inputs:{x:g},backend:n,attrs:{shape:f}});return l.push(u),l.push(p),l.push(g),l.forEach(x=>n.disposeIntermediateTensorInfo(x)),m}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _E(t){const{inputs:e,backend:n}=t,{indices:s,values:o,denseShape:r,defaultValue:i}=e;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const c=n.readSync(s.dataId),a=n.readSync(o.dataId),l=n.readSync(r.dataId),u=n.readSync(i.dataId)[0],[d,h,f,p,g]=bC(c,s.shape,s.dtype,a,o.dtype,l,u);return[n.makeTensorInfo(h,s.dtype,d),n.makeTensorInfo([h[0]],o.dtype,f),n.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(m=>Number(m)))),n.makeTensorInfo([g.length],s.dtype,new Int32Array(g))]}const DE={kernelName:ea,backendName:"webgl",kernelFunc:_E};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FE(t){const{inputs:e,backend:n}=t,{inputIndices:s,inputShape:o,newShape:r}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(n.readSync(o.dataId)),c=n.readSync(s.dataId),a=Array.from(n.readSync(r.dataId)),[l,u,d]=wC(c,s.shape,s.dtype,i,a);return[n.makeTensorInfo(u,s.dtype,l),n.makeTensorInfo([d.length],r.dtype,new Int32Array(d))]}const OE={kernelName:ta,backendName:"webgl",kernelFunc:FE};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PE(t){const{inputs:e,backend:n}=t,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=n.readSync(s.dataId),c=n.readSync(o.dataId),a=n.readSync(r.dataId),[l,u]=du(i,s.shape,s.dtype,c,a,!0);return n.makeTensorInfo(u,s.dtype,l)}const LE={kernelName:na,backendName:"webgl",kernelFunc:PE};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BE(t){const{inputs:e,backend:n}=t,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=n.readSync(s.dataId),c=n.readSync(o.dataId),a=n.readSync(r.dataId),[l,u]=du(i,s.shape,s.dtype,c,a);return n.makeTensorInfo(u,s.dtype,l)}const ME={kernelName:sa,backendName:"webgl",kernelFunc:BE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VE(t){const{inputs:e,backend:n,attrs:s}=t,{sparseIndices:o,sparseValues:r,defaultValue:i}=e,{outputShape:c}=s,{sliceRank:a,numUpdates:l,sliceSize:u,strides:d,outputSize:h}=Fr(r,o,c),f=!1;if(r.dtype==="string"){const x=n.bufferSync(o),b=n.bufferSync(r),C=an(n.readSync(i.dataId)[0]),y=gC(x,b,c,h,u,l,a,d,C,f);return n.makeTensorInfo(c,y.dtype,y.values)}const p=new ad(l,a,o.shape.length,r.shape.length,d,[h,1],f),g=n.runWebGLProgram(p,[r,o,i],r.dtype),m=F({inputs:{x:g},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(g),m}const UE={kernelName:Xh,backendName:"webgl",kernelFunc:VE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WE(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{numOrSizeSplits:r,axis:i}=s,c=te(i,o.shape)[0],a=tl(o,r,c),l=o.shape.length,u=new Array(l).fill(0),d=o.shape.slice();return a.map(h=>{const f=[...d];f[c]=h;const p=Fn({inputs:{x:o},backend:n,attrs:{begin:u,size:f}});return u[c]+=h,p})}const GE={kernelName:Ji,backendName:"webgl",kernelFunc:WE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cd="return sqrt(x);",zE=se({opSnippet:cd,packedOpSnippet:cd,cpuKernelImpl:CC}),HE={kernelName:Ts,backendName:"webgl",kernelFunc:zE};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XE=se({opSnippet:"return x * x;"}),qE={kernelName:qh,backendName:"webgl",kernelFunc:XE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ld="return (a - b) * (a - b);",KE=_e({opSnippet:ld,packedOpSnippet:ld}),jE={kernelName:Rs,backendName:"webgl",kernelFunc:KE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YE({inputs:t,attrs:e,backend:n}){const{x:s}=t,o=nt+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,r=new Nt(s.shape,o);return n.runWebGLProgram(r,[s],s.dtype)}const QE={kernelName:ua,backendName:"webgl",kernelFunc:YE};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ZE{constructor(e,n,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=xe(s.length),i=xe(s.length);let c="";if(o===1)c="coords * strides + begin";else{let a=0;c=s.map((l,u)=>(a++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${a-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${e});
      ${r} strides = ${r}(${n});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${c}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JE(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{begin:r,end:i,strides:c,beginMask:a,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:h}=s,{finalShapeSparse:f,finalShape:p,isIdentity:g,sliceDim0:m,isSimpleSlice:x,begin:b,end:C,strides:y}=rc(o.shape,r,i,c,a,l,u,d,h);let $;if(g)$=F({inputs:{x:o},backend:n,attrs:{shape:p}});else if(m||x){E(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const R=Ya(b,C,y),k=Fn({inputs:{x:o},backend:n,attrs:{begin:b,size:R}});$=F({inputs:{x:k},backend:n,attrs:{shape:p}}),n.disposeIntermediateTensorInfo(k)}else if(n.shouldExecuteOnCPU([o])){const k=n.readSync(o.dataId),B=Ne(o.shape,o.dtype,k),U=yC(f,B,y,b);$=n.makeTensorInfo(p,o.dtype,U.values)}else{const k=new ZE(b,y,f);$=n.runWebGLProgram(k,[o],o.dtype)}const N=F({inputs:{x:$},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo($),N}const eT={kernelName:Kh,backendName:"webgl",kernelFunc:JE};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tT(t){const{inputs:e,backend:n,attrs:s}=t,{separator:o,nGramWidths:r,leftPad:i,rightPad:c,padWidth:a,preserveShortSequences:l}=s,{data:u,dataSplits:d}=e,h=n.readSync(u.dataId),f=n.readSync(d.dataId),[p,g]=vC(h,f,o,r,i,c,a,l);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(d.shape,"int32",g)]}const nT={kernelName:oa,backendName:"webgl",kernelFunc:tT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sT(t){const{inputs:e,backend:n,attrs:s}=t,{skipEmpty:o}=s,{input:r,delimiter:i}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const c=n.readSync(r.dataId),a=n.readSync(i.dataId)[0],[l,u,d]=$C(c,a,o),h=u.length;return[n.makeTensorInfo([h,2],"int32",l),n.makeTensorInfo([h],"string",u),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const oT={kernelName:ra,backendName:"webgl",kernelFunc:sT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rT(t){const{inputs:e,backend:n,attrs:s}=t,{numBuckets:o}=s,{input:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=n.readSync(r.dataId),c=SC(i,o);return n.makeTensorInfo(r.shape,"int32",c)}const iT={kernelName:ia,backendName:"webgl",kernelFunc:rT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aT=se({opSnippet:"return tan(x);"}),cT={kernelName:jh,backendName:"webgl",kernelFunc:aT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lT=se({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),uT={kernelName:Yh,backendName:"webgl",kernelFunc:lT};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dT{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*n[i];this.outputShape=s,this.rank=s.length;const o=xe(this.rank),r=hT(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function hT(t){const e=t.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${t[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<t.length;o++)s.push(`imod(${n[o]}, ${t[o]})`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const a=n.readSync(o.dataId),l=o.dtype==="string"?a.map(h=>an(h)):a,u=Ne(o.shape,o.dtype,l),d=EC(u,r);return n.makeTensorInfo(d.shape,d.dtype,d.values)}const i=new dT(o.shape,r);return n.runWebGLProgram(i,[o],o.dtype)}const fT={kernelName:zo,backendName:"webgl",kernelFunc:ud};class pT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class gT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nn(t,e){e!==null&&t.disposeIntermediateTensorInfo(e)}function dd(t){let e=1;for(;e<t;)e*=2;return e}function mT(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{k:r,sorted:i}=s,c=S().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),a=S().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=o.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([o])||u<c||r>a){const U=n.readSync(o.dataId),[Y,ie]=TC(U,l,o.dtype,r,i);return[n.makeTensorInfo(Y.shape,Y.dtype,Y.values),n.makeTensorInfo(ie.shape,ie.dtype,ie.values)]}if(r===0)return l[l.length-1]=0,[n.makeTensorInfo(l,o.dtype,[]),n.makeTensorInfo(l,"int32",[])];if(u===1)return[o,hs({attrs:{shape:l,dtype:"int32",value:0},backend:n})];const d=n.texData.get(o.dataId),h=d!==null&&d.isPacked,f=h?n.unpackTensor(o):o,g=v(l)/u,m=F({inputs:{x:f},attrs:{shape:[g,u]},backend:n});h&&nn(n,f);const x=dd(r),b=dd(u);let C=null;const y=()=>C===null?[m,m]:[m,C],$=(U,Y,ie)=>{const je=y(),De=new pT(ie),ct=[[u],[C===null?1:0],[Number.NEGATIVE_INFINITY],[U],[Y]],bt=C;C=n.runWebGLProgram(De,je,"int32",ct),nn(n,bt)};for(let U=1;U<x;U*=2){const Y=U*2;for(let ie=U;ie>=1;ie/=2)$(Y,ie,[g,b])}for(let U=b;U>x;U/=2){const Y=y(),ie=new gT([g,U/2]),De=[[u],[C===null?1:0],[x]],Oe=C;C=n.runWebGLProgram(ie,Y,"int32",De),nn(n,Oe);const ct=x/2,bt=ct*2;for(let Ge=ct;Ge>=1;Ge/=2)$(bt,Ge,C.shape)}let N=C;C=Fn({inputs:{x:C},backend:n,attrs:{begin:0,size:[g,r]}}),nn(n,N);let R=Zu({inputs:{x:m,indices:C},backend:n,attrs:{axis:1,batchDims:1}});nn(n,m);const k=l.slice(0,-1);k.push(r),N=C,C=F({inputs:{x:C},attrs:{shape:k},backend:n}),nn(n,N);const B=R;return R=F({inputs:{x:R},attrs:{shape:k},backend:n}),nn(n,B),[R,C]}const xT={kernelName:Qh,backendName:"webgl",kernelFunc:mT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bT{constructor(e,n,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const c=s==="nearest"?1:2;let a;switch(o){case"constant":a=1;break;case"reflect":a=2;break;case"wrap":a=3;break;case"nearest":a=4;break;default:a=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${a} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${n}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${n}));
                float mapY = mapCoord(inY, float(${e}));

                if (${c} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wT(t){const{inputs:e,backend:n,attrs:s}=t,{image:o,transforms:r}=e,{interpolation:i,fillMode:c,fillValue:a,outputShape:l}=s,[u,d,h,f]=o.shape,[p,g]=l??[d,h],m=[u,p,g,f],x=new bT(d,h,i,c,a,m);return n.runWebGLProgram(x,[o,r],"float32")}const CT={kernelName:aa,backendName:"webgl",kernelFunc:wT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yT(t){const{inputs:e,attrs:n,backend:s}=t,{axis:o}=n,{x:r}=e;es(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:c,outputShape:a,indices:l}=RC(i,o,r.shape,r.dtype);return[s.makeTensorInfo(a,r.dtype,c),s.makeTensorInfo([l.length],"int32",l)]}const vT={kernelName:Zh,backendName:"webgl",kernelFunc:yT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $T(t){const{inputs:e,backend:n,attrs:s}=t,{value:o}=e;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,c=i.shape.length,a=o.shape[r],l=new Array(c-1);let u=0;for(let g=0;g<c;g++)g!==r&&(l[u++]=i.shape[g]);const d=[],h=new Array(c).fill(0),f=i.shape.slice();f[r]=1;const p=new Array(a);for(let g=0;g<p.length;g++){h[r]=g;const m=Fn({inputs:{x:i},backend:n,attrs:{begin:h,size:f}}),x=F({inputs:{x:m},backend:n,attrs:{shape:l}});p[g]=x,d.push(m)}return d.forEach(g=>n.disposeIntermediateTensorInfo(g)),p}const ST={kernelName:ca,backendName:"webgl",kernelFunc:$T};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class IT{constructor(e,n){this.variableNames=["x","segmentIds"];const s=e.windowSize,o=e.batchSize,r=e.inSize,i=e.numSegments,c=i*Math.ceil(r/s);this.outputShape=[o,c];const a="0.0",l="sumValue",u=Math.floor(s/4)*4,d=s%4,h=`
        sumValue += dot(values, segFilter);
    `;let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${a};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${h}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${h}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ET(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,segmentIds:r}=e,{numSegments:i}=s,c=o.shape.length,a=[];let l=0;const u=Ze([l],c);let d=o;u!=null&&(d=We({inputs:{x:o},backend:n,attrs:{perm:u}}),a.push(d),l=Je(1,c)[0]);const h=pl(d.shape,l,i),f=v([d.shape[l]]),p=F({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}});a.push(p);const g=tr(o.dtype),m=(y,$,N,R,k)=>{const B=y.shape[0],U=y.shape[1],Y=fl(U,k),ie={windowSize:Y,inSize:U,batchSize:B,numSegments:k},je=new IT(ie,$),De=n.compileAndRun(je,[y,N],R);if(a.push(De),De.shape[1]===k)return De;const Oe=id({backend:n,attrs:{start:0,stop:k,step:1,dtype:"float32"}}),ct=ud({inputs:{x:Oe},backend:n,attrs:{reps:[U/Y]}});return a.push(Oe),a.push(ct),m(De,$,ct,R,k)},x=m(p,"unsortedSegmentSum",r,g,i),b=F({inputs:{x},backend:n,attrs:{shape:h}});let C=b;if(u!=null){a.push(b);const y=$r(u);C=We({inputs:{x:C},backend:n,attrs:{perm:y}})}return a.forEach(y=>n.disposeIntermediateTensorInfo(y)),C}const TT={kernelName:Jh,backendName:"webgl",kernelFunc:ET};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RT=[Cy,vy,Iy,Ry,Ny,Dy,Oy,Ly,Uy,Gy,Xy,jy,Zy,n1,r1,a1,l1,f1,g1,x1,C1,E1,R1,N1,O1,L1,U1,sy,z1,j1,J1,rv,av,lv,dv,fv,mv,bv,Cv,vv,Sv,Ev,kv,Av,Ov,Lv,Vv,Gv,Hv,qv,Yv,Zv,t$,s$,o$,i$,c$,u$,h$,p$,m$,w$,v$,S$,T$,N$,_$,F$,ny,P$,q1,B$,V$,W$,ry,z$,X$,K$,Q$,eS,nS,oS,iS,lS,dS,fS,xS,wS,yS,IS,TS,kS,AS,DS,LS,VS,zS,YS,cy,eI,sI,iI,lI,A1,dI,fI,gI,bI,vI,ay,SI,EI,RI,kI,_1,XS,AI,FI,LI,uy,UI,zI,KI,QI,tE,sE,rE,aE,lE,hE,gE,bE,yE,$E,EE,RE,I1,KS,NE,AE,DE,OE,LE,ME,UE,GE,HE,qE,jE,QE,eT,nT,oT,iT,qS,xy,cT,uT,fT,xT,CT,by,vT,ST,TT,hI];for(const t of RT)pa(t);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var kT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),At=(t,e,n)=>new Promise((s,o)=>{var r=a=>{try{c(n.next(a))}catch(l){o(l)}},i=a=>{try{c(n.throw(a))}catch(l){o(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);c((n=n.apply(t,e)).next())}),hd=kT((t,e)=>{e.exports={version:"1.8.0",license:"MIT",main:"dist/index.cjs.js",typings:"dist/index.d.ts",files:["dist","src/tflite","src/models"],scripts:{start:'concurrently "yarn dev" "yarn types"',dev:"node ../../scripts/dev","build:only":"node ../../scripts/build",build:"yarn build:only && yarn types:build",types:"tsc -w","types:build":"tsc -p tsconfig.json",test:"jest --maxWorkers=1 --passWithNoTests",lint:"eslint -c ../../.eslintrc .","lint:fix":"yarn lint --fix",prepare:"yarn build",size:"size-limit",analyze:"size-limit --why",format:"prettier --write src/**/*.ts"},peerDependencies:{"@100mslive/hms-video":"^0.5.2"},name:"@100mslive/hms-virtual-background",author:"ashish17",module:"dist/index.js",devDependencies:{"@100mslive/hms-video":"0.6.0"},dependencies:{"@tensorflow/tfjs-backend-webgl":"^3.3.0","@tensorflow/tfjs-core":"^3.3.0","@webassemblyjs/helper-wasm-bytecode":"1.11.1","@webassemblyjs/wasm-gen":"1.11.1","gifuct-js":"^2.1.2","wasm-check":"^2.0.2"},eslintIgnore:["tflite.js","tflite-simd.js","tflite.wasm","tflite-simd.wasm","defineTFLite.ts","importing.test.ts"],gitHead:"d5cc829f7c2177b8db707f04b8fe95246167fdcd"}}),NT=hd(),oi=`https://unpkg.com/${NT.name}/src`,Io="VBProcessor",AT="tflite/tflite.js",_T="tflite/tflite-simd.js",DT="models/selfie_segmentation_landscape.tflite",fd=t=>new Promise(function(e,n){let s=document.createElement("script");s.src=t,s.onload=e,s.onerror=n,document.head.appendChild(s)}),FT=()=>At(void 0,null,function*(){let t,e=`${oi}/${_T}`;yield fd(e);try{t=yield createTFLiteSIMDModule()}catch{console.warn("SIMD not supported. You may experience poor virtual background effect."),e=`${oi}/${AT}`,yield fd(e),t=yield createTFLiteModule()}return t}),OT=()=>At(void 0,null,function*(){let t=`${oi}/${DT}`,[e,n]=yield Promise.all([FT(),fetch(t)]),s=yield n.arrayBuffer(),o=e._getModelBufferMemoryOffset();return e.HEAPU8.set(new Uint8Array(s),o),e._loadModel(s.byteLength),console.debug(Io,"Input memory offset:",e._getInputMemoryOffset()),console.debug(Io,"Input height:",e._getInputHeight()),console.debug(Io,"Input width:",e._getInputWidth()),console.debug(Io,"Input channels:",e._getInputChannelCount()),e}),Eo="VBProcessor",PT=33,LT=hd(),BT=214,MT=855,VT=120,UT=720,WT=class{constructor(t,e=!1){this.backgroundType="none",this.background=t,this.enableSharpening=e,this.backgroundImage=null,this.backgroundVideo=null,this.personMaskWidth=256,this.personMaskHeight=144,this.isVirtualBackground=!1,this.blurValue="10px",this.loadModelCalled=!1,this.tfLite=null,this.modelName="landscape-segmentation",this.outputCtx=null,this.input=null,this.output=null,this.timerID=0,this.imageAspectRatio=1,this.personMaskPixelCount=this.personMaskWidth*this.personMaskHeight,this.personMask=new ImageData(this.personMaskWidth,this.personMaskHeight),this.personMaskCanvas=document.createElement("canvas"),this.personMaskCanvas.width=this.personMaskWidth,this.personMaskCanvas.height=this.personMaskHeight,this.personMaskCtx=this.personMaskCanvas.getContext("2d"),this.filters={},this.gifFrames=null,this.gifFramesIndex=0,this.gifFrameImageData=null,this.tempGifCanvas=document.createElement("canvas"),this.tempGifContext=this.tempGifCanvas.getContext("2d"),this.giflocalCount=0,this.enableSharpening=e,this.log(Eo,"Virtual Background plugin created"),this.setBackground(this.background)}init(){return At(this,null,function*(){this.loadModelCalled?yield this.tfLitePromise:(this.log(Eo,"PREVIOUS LOADED MODEL IS ",this.tfLite),this.loadModelCalled=!0,this.tfLitePromise=OT(),this.tfLite=yield this.tfLitePromise),this.enableSharpening&&this.initSharpenFilter()})}isSupported(){return navigator.userAgent.indexOf("Chrome")!==-1||navigator.userAgent.indexOf("Firefox")!==-1||navigator.userAgent.indexOf("Edg")!==-1||navigator.userAgent.indexOf("Edge")!==-1}checkSupport(){let t={};return["Chrome","Firefox","Edg","Edge"].some(e=>navigator.userAgent.indexOf(e)!==-1)?t.isSupported=!0:(t.isSupported=!1,t.errType=z.Vy.PLATFORM_NOT_SUPPORTED,t.errMsg="browser not supported for plugin, see docs"),t}getName(){return LT.name}getPluginType(){return z.MQ.TRANSFORM}setBackground(t){return At(this,null,function*(){if(t!=="")if(t==="none")this.log(Eo,"setting background to :",t),this.background="none",this.backgroundType="none",this.isVirtualBackground=!1;else if(t==="blur")this.log(Eo,"setting background to :",t),this.background="blur",this.backgroundType="blur",this.isVirtualBackground=!1;else if(t instanceof HTMLImageElement){this.log("setting background to image",t);let e=yield this.setImage(t);if(!e||!e.complete||!e.naturalHeight)throw new Error("Invalid image. Provide a valid and successfully loaded HTMLImageElement");this.isVirtualBackground=!0,this.backgroundImage=e,this.backgroundType="image"}else if(t instanceof HTMLVideoElement)this.log("setting background to video",t),this.backgroundVideo=t,this.backgroundVideo.crossOrigin="anonymous",this.backgroundVideo.muted=!0,this.backgroundVideo.loop=!0,this.backgroundVideo.oncanplaythrough=()=>At(this,null,function*(){this.backgroundVideo!=null&&(yield this.backgroundVideo.play(),this.isVirtualBackground=!0,this.backgroundType="video")});else if(console.log("setting gif to background"),this.gifFrames=yield this.setGiF(t),this.gifFrames!=null&&this.gifFrames.length>0)this.backgroundType="gif",this.isVirtualBackground=!0;else throw new Error("Invalid background supplied, see the docs to check supported background type");else throw new Error("Invalid background supplied, see the docs to check supported background type")})}stop(){var t,e;this.isVirtualBackground&&((t=this.backgroundImage)==null||t.removeAttribute("src"),(e=this.backgroundVideo)==null||e.removeAttribute("src"),this.backgroundType==="video"&&(this.backgroundVideo.loop=!1,this.backgroundVideo=null)),this.outputCtx&&(this.outputCtx.fillStyle="rgb(0, 0, 0)",this.outputCtx.fillRect(0,0,this.output.width,this.output.height)),this.gifFrameImageData=null,this.gifFrames=null,this.giflocalCount=0,this.gifFramesIndex=0}processVideoFrame(t,e,n){if(!t||!e)throw new Error("Plugin invalid input/output");this.input=t,this.output=e;let s=e.getContext("2d");if(s.canvas.width!==t.width&&(s.canvas.width=t.width),s.canvas.height!==t.height&&(s.canvas.height=t.height),this.backgroundType==="video"&&(this.backgroundVideo.width=t.width,this.backgroundVideo.height=t.height),this.outputCtx=s,this.imageAspectRatio=t.width/t.height,this.imageAspectRatio<=0)throw new Error("Invalid input width/height");let o=()=>At(this,null,function*(){yield this.runSegmentation(n)});this.background==="none"&&!this.isVirtualBackground?(this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.outputCtx.drawImage(t,0,0,t.width,t.height)):o()}setImage(t){return At(this,null,function*(){return t.crossOrigin="anonymous",new Promise((e,n)=>{t.onload=()=>e(t),t.onerror=n})})}setGiF(t){return fetch(t).then(e=>e.arrayBuffer()).then(e=>(0,j.vq)(e)).then(e=>(0,j.zw)(e,!0))}log(t,...e){console.info(t,...e)}resizeInputData(){this.personMaskCtx.drawImage(this.input,0,0,this.input.width,this.input.height,0,0,this.personMaskWidth,this.personMaskHeight);let t=this.personMaskCtx.getImageData(0,0,this.personMaskWidth,this.personMaskHeight),e=this.tfLite._getInputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)this.tfLite.HEAPF32[e+n*3]=t.data[n*4]/255,this.tfLite.HEAPF32[e+n*3+1]=t.data[n*4+1]/255,this.tfLite.HEAPF32[e+n*3+2]=t.data[n*4+2]/255}infer(t){t||this.tfLite._runInference();let e=this.tfLite._getOutputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)if(this.modelName==="meet"){let s=this.tfLite.HEAPF32[e+n*2],o=this.tfLite.HEAPF32[e+n*2+1],r=Math.max(s,o),i=Math.exp(s-r),c=Math.exp(o-r);this.personMask.data[n*4+3]=255*c/(i+c)}else if(this.modelName==="landscape-segmentation"){let s=this.tfLite.HEAPF32[e+n];this.personMask.data[n*4+3]=255*s}this.personMaskCtx.putImageData(this.personMask,0,0)}postProcessing(){this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.isVirtualBackground?this.outputCtx.filter="blur(4px)":this.outputCtx.filter="blur(8px)",this.drawPersonMask(),this.outputCtx.globalCompositeOperation="source-in",this.outputCtx.filter="none",this.outputCtx.drawImage(this.input,0,0),this.enableSharpening&&this.output.width>BT&&this.output.height>VT&&this.output.width<MT&&this.output.height<UT&&this.sharpenFilter(),this.drawSegmentedBackground()}sharpenFilter(){let t=this.outputCtx.getImageData(0,0,this.output.width,this.output.height),e=this.filters.convolute(t);this.outputCtx.putImageData(e,0,0)}drawPersonMask(){this.outputCtx.drawImage(this.personMaskCanvas,0,0,this.personMaskWidth,this.personMaskHeight,0,0,this.output.width,this.output.height)}drawSegmentedBackground(){this.outputCtx.globalCompositeOperation="destination-over",this.outputCtx.imageSmoothingEnabled=!0,this.outputCtx.imageSmoothingQuality="high",this.isVirtualBackground?this.backgroundType==="video"&&this.backgroundVideo!=null&&this.backgroundVideo.readyState>=4?this.fitVideoToBackground():this.backgroundType==="image"?this.fitImageToBackground():this.backgroundType==="gif"&&(this.giflocalCount>this.gifFrames[this.gifFramesIndex].delay/PT?(this.gifFramesIndex++,this.gifFramesIndex>=this.gifFrames.length&&(this.gifFramesIndex=0),this.giflocalCount=0):this.giflocalCount++,this.fitGifToBackground()):this.addBlurToBackground()}runSegmentation(t){return At(this,null,function*(){this.tfLite&&(this.resizeInputData(),yield this.infer(t),this.postProcessing())})}fitVideoToBackground(){this.fitData(this.backgroundVideo,this.backgroundVideo.videoWidth,this.backgroundVideo.videoHeight)}fitImageToBackground(){this.fitData(this.backgroundImage,this.backgroundImage.width,this.backgroundImage.height)}fitGifToBackground(){if(this.gifFrameImageData==null){let t=this.gifFrames[this.gifFramesIndex].dims;this.tempGifCanvas.width=t.width,this.tempGifCanvas.height=t.height,this.gifFrameImageData=this.tempGifContext.createImageData(t.width,t.height)}this.gifFrameImageData.data.set(this.gifFrames[this.gifFramesIndex].patch),this.tempGifContext.putImageData(this.gifFrameImageData,0,0),this.fitData(this.tempGifCanvas,this.gifFrameImageData.width,this.gifFrameImageData.height)}fitData(t,e,n){let s,o,r,i;e/n<this.imageAspectRatio?(s=e,o=e/this.imageAspectRatio,r=0,i=(n-o)/2):(o=n,s=n*this.imageAspectRatio,i=0,r=(e-s)/2),this.outputCtx.drawImage(t,r,i,s,o,0,0,this.output.width,this.output.height)}addBlurToBackground(){return At(this,null,function*(){let t="15px";this.input.width<=160?t="5px":this.input.width<=320?t="10px":this.input.width<=640?t="15px":this.input.width<=960?t="20px":this.input.width<=1280?t="25px":this.input.width<=1920&&(t="30px"),this.outputCtx.filter=`blur(${t})`,this.outputCtx.drawImage(this.input,0,0,this.output.width,this.output.height)})}initSharpenFilter(){this.filters.tmpCanvas=document.createElement("canvas"),this.filters.tmpCtx=this.filters.tmpCanvas.getContext("2d"),this.filters.createImageData=(t,e)=>this.filters.tmpCtx.createImageData(t,e),this.filters.convolute=(t,e=[0,-1,0,-1,5,-1,0,-1,0],n)=>{let s=Math.round(Math.sqrt(e.length)),o=Math.floor(s/2),r=t.data,i=t.width,c=t.height,a=i,l=c,u=this.filters.createImageData(a,l),d=u.data,h=n?1:0;for(let f=0;f<l;f=f+1)for(let p=0;p<a;p=p+1){let g=(f*a+p)*4;if(r[g+3]!==0&&p<a&&f<l){let m=f,x=p,b=0,C=0,y=0,$=0;for(let N=0;N<s;N++)for(let R=0;R<s;R++){let k=m+N-o,B=x+R-o;if(k>=0&&k<c&&B>=0&&B<i){let U=(k*i+B)*4,Y=e[N*s+R];b+=r[U]*Y,C+=r[U+1]*Y,y+=r[U+2]*Y,$+=r[U+3]*Y}}d[g]=b,d[g+1]=C,d[g+2]=y,d[g+3]=$+h*(255-$)}}return u}}}},6474:(_t,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.deinterlace=void 0;var M=function(G,ae){for(var ce=new Array(G.length),j=G.length/ae,z=function(q,K){var H=G.slice(K*ae,(K+1)*ae);ce.splice.apply(ce,[q*ae,ae].concat(H))},ue=[0,4,2,1],J=[8,8,4,2],ee=0,oe=0;oe<4;oe++)for(var O=ue[oe];O<j;O+=J[oe])z(O,ee),ee++;return ce};W.deinterlace=M},3242:(_t,W,M)=>{"use strict";var Z;Z={value:!0},W.zw=Z=W.vq=void 0;var G=ue(M(2075)),ae=M(7979),ce=M(3095),j=M(6474),z=M(1358);function ue(D){return D&&D.__esModule?D:{default:D}}var J=function(q){var K=new Uint8Array(q);return(0,ae.parse)((0,ce.buildStream)(K),G.default)};W.vq=J;var ee=function(q){for(var K=q.pixels.length,H=new Uint8ClampedArray(K*4),X=0;X<K;X++){var re=X*4,de=q.pixels[X],ge=q.colorTable[de]||[0,0,0];H[re]=ge[0],H[re+1]=ge[1],H[re+2]=ge[2],H[re+3]=de!==q.transparentIndex?255:0}return H},oe=function(q,K,H){if(!q.image){console.warn("gif frame does not have associated image.");return}var X=q.image,re=X.descriptor.width*X.descriptor.height,de=(0,z.lzw)(X.data.minCodeSize,X.data.blocks,re);X.descriptor.lct.interlaced&&(de=(0,j.deinterlace)(de,X.descriptor.width));var ge={pixels:de,dims:{top:q.image.descriptor.top,left:q.image.descriptor.left,width:q.image.descriptor.width,height:q.image.descriptor.height}};return X.descriptor.lct&&X.descriptor.lct.exists?ge.colorTable=X.lct:ge.colorTable=K,q.gce&&(ge.delay=(q.gce.delay||10)*10,ge.disposalType=q.gce.extras.disposal,q.gce.extras.transparentColorGiven&&(ge.transparentIndex=q.gce.transparentColorIndex)),H&&(ge.patch=ee(ge)),ge};Z=oe;var O=function(q,K){return q.frames.filter(function(H){return H.image}).map(function(H){return oe(H,q.gct,K)})};W.zw=O},1358:(_t,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.lzw=void 0;var M=function(G,ae,ce){var j=4096,z=-1,ue=ce,J,ee,oe,O,D,q,K,pe,H,X,lt,re,T,w,Q,P,de=new Array(ce),ge=new Array(j),E=new Array(j),ye=new Array(j+1);for(re=G,ee=1<<re,D=ee+1,J=ee+2,K=z,O=re+1,oe=(1<<O)-1,H=0;H<ee;H++)ge[H]=0,E[H]=H;var lt,pe,v,T,w,P,Q;for(lt=pe=v=T=w=P=Q=0,X=0;X<ue;){if(w===0){if(pe<O){lt+=ae[Q]<<pe,pe+=8,Q++;continue}if(H=lt&oe,lt>>=O,pe-=O,H>J||H==D)break;if(H==ee){O=re+1,oe=(1<<O)-1,J=ee+2,K=z;continue}if(K==z){ye[w++]=E[H],K=H,T=H;continue}for(q=H,H==J&&(ye[w++]=T,H=K);H>ee;)ye[w++]=E[H],H=ge[H];T=E[H]&255,ye[w++]=T,J<j&&(ge[J]=K,E[J]=T,J++,(J&oe)===0&&J<j&&(O++,oe+=J)),K=q}w--,de[P++]=ye[w],X++}for(X=P;X<ue;X++)de[X]=0;return de};W.lzw=M},7979:(_t,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.loop=W.conditional=W.parse=void 0;var M=function ae(ce,j){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ue=arguments.length>3&&arguments[3]!==void 0?arguments[3]:z;if(Array.isArray(j))j.forEach(function(ee){return ae(ce,ee,z,ue)});else if(typeof j=="function")j(ce,z,ue,ae);else{var J=Object.keys(j)[0];Array.isArray(j[J])?(ue[J]={},ae(ce,j[J],z,ue[J])):ue[J]=j[J](ce,z,ue,ae)}return z};W.parse=M;var Z=function(ce,j){return function(z,ue,J,ee){j(z,ue,J)&&ee(z,ce,ue,J)}};W.conditional=Z;var G=function(ce,j){return function(z,ue,J,ee){for(var oe=[],O=z.pos;j(z,ue,J);){var D={};if(ee(z,ce,ue,D),z.pos===O)break;O=z.pos,oe.push(D)}return oe}};W.loop=G},3095:(_t,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.readBits=W.readArray=W.readUnsigned=W.readString=W.peekBytes=W.readBytes=W.peekByte=W.readByte=W.buildStream=void 0;var M=function(O){return{data:O,pos:0}};W.buildStream=M;var Z=function(){return function(O){return O.data[O.pos++]}};W.readByte=Z;var G=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(D){return D.data[D.pos+O]}};W.peekByte=G;var ae=function(O){return function(D){return D.data.subarray(D.pos,D.pos+=O)}};W.readBytes=ae;var ce=function(O){return function(D){return D.data.subarray(D.pos,D.pos+O)}};W.peekBytes=ce;var j=function(O){return function(D){return Array.from(ae(O)(D)).map(function(q){return String.fromCharCode(q)}).join("")}};W.readString=j;var z=function(O){return function(D){var q=ae(2)(D);return O?(q[1]<<8)+q[0]:(q[0]<<8)+q[1]}};W.readUnsigned=z;var ue=function(O,D){return function(q,K,H){for(var X=typeof D=="function"?D(q,K,H):D,re=ae(O),de=new Array(X),ge=0;ge<X;ge++)de[ge]=re(q);return de}};W.readArray=ue;var J=function(O,D,q){for(var K=0,H=0;H<q;H++)K+=O[D+H]&&Math.pow(2,q-H-1);return K},ee=function(O){return function(D){for(var q=Z()(D),K=new Array(8),H=0;H<8;H++)K[7-H]=!!(q&1<<H);return Object.keys(O).reduce(function(X,re){var de=O[re];return de.length?X[re]=J(K,de.index,de.length):X[re]=K[de.index],X},{})}};W.readBits=ee},2075:(_t,W,M)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.default=void 0;var Z=M(7979),G=M(3095),ae={blocks:function(D){for(var q=0,K=[],H=D.data.length,X=0,re=(0,G.readByte)()(D);re!==q&&re;re=(0,G.readByte)()(D)){if(D.pos+re>=H){var de=H-D.pos;K.push((0,G.readBytes)(de)(D)),X+=de;break}K.push((0,G.readBytes)(re)(D)),X+=re}for(var ge=new Uint8Array(X),E=0,ye=0;ye<K.length;ye++)ge.set(K[ye],E),E+=K[ye].length;return ge}},ce=(0,Z.conditional)({gce:[{codes:(0,G.readBytes)(2)},{byteSize:(0,G.readByte)()},{extras:(0,G.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,G.readUnsigned)(!0)},{transparentColorIndex:(0,G.readByte)()},{terminator:(0,G.readByte)()}]},function(O){var D=(0,G.peekBytes)(2)(O);return D[0]===33&&D[1]===249}),j=(0,Z.conditional)({image:[{code:(0,G.readByte)()},{descriptor:[{left:(0,G.readUnsigned)(!0)},{top:(0,G.readUnsigned)(!0)},{width:(0,G.readUnsigned)(!0)},{height:(0,G.readUnsigned)(!0)},{lct:(0,G.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Z.conditional)({lct:(0,G.readArray)(3,function(O,D,q){return Math.pow(2,q.descriptor.lct.size+1)})},function(O,D,q){return q.descriptor.lct.exists}),{data:[{minCodeSize:(0,G.readByte)()},ae]}]},function(O){return(0,G.peekByte)()(O)===44}),z=(0,Z.conditional)({text:[{codes:(0,G.readBytes)(2)},{blockSize:(0,G.readByte)()},{preData:function(D,q,K){return(0,G.readBytes)(K.text.blockSize)(D)}},ae]},function(O){var D=(0,G.peekBytes)(2)(O);return D[0]===33&&D[1]===1}),ue=(0,Z.conditional)({application:[{codes:(0,G.readBytes)(2)},{blockSize:(0,G.readByte)()},{id:function(D,q,K){return(0,G.readString)(K.blockSize)(D)}},ae]},function(O){var D=(0,G.peekBytes)(2)(O);return D[0]===33&&D[1]===255}),J=(0,Z.conditional)({comment:[{codes:(0,G.readBytes)(2)},ae]},function(O){var D=(0,G.peekBytes)(2)(O);return D[0]===33&&D[1]===254}),ee=[{header:[{signature:(0,G.readString)(3)},{version:(0,G.readString)(3)}]},{lsd:[{width:(0,G.readUnsigned)(!0)},{height:(0,G.readUnsigned)(!0)},{gct:(0,G.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,G.readByte)()},{pixelAspectRatio:(0,G.readByte)()}]},(0,Z.conditional)({gct:(0,G.readArray)(3,function(O,D){return Math.pow(2,D.lsd.gct.size+1)})},function(O,D){return D.lsd.gct.exists}),{frames:(0,Z.loop)([ce,ue,J,j,z],function(O){var D=(0,G.peekByte)()(O);return D===33||D===44})}],oe=ee;W.default=oe},3968:_t=>{_t.exports=M;var W=null;try{W=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function M(T,w,P){this.low=T|0,this.high=w|0,this.unsigned=!!P}M.prototype.__isLong__,Object.defineProperty(M.prototype,"__isLong__",{value:!0});function Z(T){return(T&&T.__isLong__)===!0}M.isLong=Z;var G={},ae={};function ce(T,w){var P,Q,be;return w?(T>>>=0,(be=0<=T&&T<256)&&(Q=ae[T],Q)?Q:(P=z(T,(T|0)<0?-1:0,!0),be&&(ae[T]=P),P)):(T|=0,(be=-128<=T&&T<128)&&(Q=G[T],Q)?Q:(P=z(T,T<0?-1:0,!1),be&&(G[T]=P),P))}M.fromInt=ce;function j(T,w){if(isNaN(T))return w?re:X;if(w){if(T<0)return re;if(T>=q)return lt}else{if(T<=-K)return pe;if(T+1>=K)return ye}return T<0?j(-T,w).neg():z(T%D|0,T/D|0,w)}M.fromNumber=j;function z(T,w,P){return new M(T,w,P)}M.fromBits=z;var ue=Math.pow;function J(T,w,P){if(T.length===0)throw Error("empty string");if(T==="NaN"||T==="Infinity"||T==="+Infinity"||T==="-Infinity")return X;if(typeof w=="number"?(P=w,w=!1):w=!!w,P=P||10,P<2||36<P)throw RangeError("radix");var Q;if((Q=T.indexOf("-"))>0)throw Error("interior hyphen");if(Q===0)return J(T.substring(1),w,P).neg();for(var be=j(ue(P,8)),we=X,Ce=0;Ce<T.length;Ce+=8){var Fe=Math.min(8,T.length-Ce),Xe=parseInt(T.substring(Ce,Ce+Fe),P);if(Fe<8){var te=j(ue(P,Fe));we=we.mul(te).add(j(Xe))}else we=we.mul(be),we=we.add(j(Xe))}return we.unsigned=w,we}M.fromString=J;function ee(T,w){return typeof T=="number"?j(T,w):typeof T=="string"?J(T,w):z(T.low,T.high,typeof w=="boolean"?w:T.unsigned)}M.fromValue=ee;var oe=1<<16,O=1<<24,D=oe*oe,q=D*D,K=q/2,H=ce(O),X=ce(0);M.ZERO=X;var re=ce(0,!0);M.UZERO=re;var de=ce(1);M.ONE=de;var ge=ce(1,!0);M.UONE=ge;var E=ce(-1);M.NEG_ONE=E;var ye=z(-1,2147483647,!1);M.MAX_VALUE=ye;var lt=z(-1,-1,!0);M.MAX_UNSIGNED_VALUE=lt;var pe=z(0,-2147483648,!1);M.MIN_VALUE=pe;var v=M.prototype;v.toInt=function(){return this.unsigned?this.low>>>0:this.low},v.toNumber=function(){return this.unsigned?(this.high>>>0)*D+(this.low>>>0):this.high*D+(this.low>>>0)},v.toString=function(w){if(w=w||10,w<2||36<w)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(pe)){var P=j(w),Q=this.div(P),be=Q.mul(P).sub(this);return Q.toString(w)+be.toInt().toString(w)}else return"-"+this.neg().toString(w);for(var we=j(ue(w,6),this.unsigned),Ce=this,Fe="";;){var Xe=Ce.div(we),te=Ce.sub(Xe.mul(we)).toInt()>>>0,he=te.toString(w);if(Ce=Xe,Ce.isZero())return he+Fe;for(;he.length<6;)he="0"+he;Fe=""+he+Fe}},v.getHighBits=function(){return this.high},v.getHighBitsUnsigned=function(){return this.high>>>0},v.getLowBits=function(){return this.low},v.getLowBitsUnsigned=function(){return this.low>>>0},v.getNumBitsAbs=function(){if(this.isNegative())return this.eq(pe)?64:this.neg().getNumBitsAbs();for(var w=this.high!=0?this.high:this.low,P=31;P>0&&(w&1<<P)==0;P--);return this.high!=0?P+33:P+1},v.isZero=function(){return this.high===0&&this.low===0},v.eqz=v.isZero,v.isNegative=function(){return!this.unsigned&&this.high<0},v.isPositive=function(){return this.unsigned||this.high>=0},v.isOdd=function(){return(this.low&1)===1},v.isEven=function(){return(this.low&1)===0},v.equals=function(w){return Z(w)||(w=ee(w)),this.unsigned!==w.unsigned&&this.high>>>31===1&&w.high>>>31===1?!1:this.high===w.high&&this.low===w.low},v.eq=v.equals,v.notEquals=function(w){return!this.eq(w)},v.neq=v.notEquals,v.ne=v.notEquals,v.lessThan=function(w){return this.comp(w)<0},v.lt=v.lessThan,v.lessThanOrEqual=function(w){return this.comp(w)<=0},v.lte=v.lessThanOrEqual,v.le=v.lessThanOrEqual,v.greaterThan=function(w){return this.comp(w)>0},v.gt=v.greaterThan,v.greaterThanOrEqual=function(w){return this.comp(w)>=0},v.gte=v.greaterThanOrEqual,v.ge=v.greaterThanOrEqual,v.compare=function(w){if(Z(w)||(w=ee(w)),this.eq(w))return 0;var P=this.isNegative(),Q=w.isNegative();return P&&!Q?-1:!P&&Q?1:this.unsigned?w.high>>>0>this.high>>>0||w.high===this.high&&w.low>>>0>this.low>>>0?-1:1:this.sub(w).isNegative()?-1:1},v.comp=v.compare,v.negate=function(){return!this.unsigned&&this.eq(pe)?pe:this.not().add(de)},v.neg=v.negate,v.add=function(w){Z(w)||(w=ee(w));var P=this.high>>>16,Q=this.high&65535,be=this.low>>>16,we=this.low&65535,Ce=w.high>>>16,Fe=w.high&65535,Xe=w.low>>>16,te=w.low&65535,he=0,Se=0,ne=0,ze=0;return ze+=we+te,ne+=ze>>>16,ze&=65535,ne+=be+Xe,Se+=ne>>>16,ne&=65535,Se+=Q+Fe,he+=Se>>>16,Se&=65535,he+=P+Ce,he&=65535,z(ne<<16|ze,he<<16|Se,this.unsigned)},v.subtract=function(w){return Z(w)||(w=ee(w)),this.add(w.neg())},v.sub=v.subtract,v.multiply=function(w){if(this.isZero())return X;if(Z(w)||(w=ee(w)),W){var P=W.mul(this.low,this.high,w.low,w.high);return z(P,W.get_high(),this.unsigned)}if(w.isZero())return X;if(this.eq(pe))return w.isOdd()?pe:X;if(w.eq(pe))return this.isOdd()?pe:X;if(this.isNegative())return w.isNegative()?this.neg().mul(w.neg()):this.neg().mul(w).neg();if(w.isNegative())return this.mul(w.neg()).neg();if(this.lt(H)&&w.lt(H))return j(this.toNumber()*w.toNumber(),this.unsigned);var Q=this.high>>>16,be=this.high&65535,we=this.low>>>16,Ce=this.low&65535,Fe=w.high>>>16,Xe=w.high&65535,te=w.low>>>16,he=w.low&65535,Se=0,ne=0,ze=0,sn=0;return sn+=Ce*he,ze+=sn>>>16,sn&=65535,ze+=we*he,ne+=ze>>>16,ze&=65535,ze+=Ce*te,ne+=ze>>>16,ze&=65535,ne+=be*he,Se+=ne>>>16,ne&=65535,ne+=we*te,Se+=ne>>>16,ne&=65535,ne+=Ce*Xe,Se+=ne>>>16,ne&=65535,Se+=Q*he+be*te+we*Xe+Ce*Fe,Se&=65535,z(ze<<16|sn,Se<<16|ne,this.unsigned)},v.mul=v.multiply,v.divide=function(w){if(Z(w)||(w=ee(w)),w.isZero())throw Error("division by zero");if(W){if(!this.unsigned&&this.high===-2147483648&&w.low===-1&&w.high===-1)return this;var P=(this.unsigned?W.div_u:W.div_s)(this.low,this.high,w.low,w.high);return z(P,W.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?re:X;var Q,be,we;if(this.unsigned){if(w.unsigned||(w=w.toUnsigned()),w.gt(this))return re;if(w.gt(this.shru(1)))return ge;we=re}else{if(this.eq(pe)){if(w.eq(de)||w.eq(E))return pe;if(w.eq(pe))return de;var Ce=this.shr(1);return Q=Ce.div(w).shl(1),Q.eq(X)?w.isNegative()?de:E:(be=this.sub(w.mul(Q)),we=Q.add(be.div(w)),we)}else if(w.eq(pe))return this.unsigned?re:X;if(this.isNegative())return w.isNegative()?this.neg().div(w.neg()):this.neg().div(w).neg();if(w.isNegative())return this.div(w.neg()).neg();we=X}for(be=this;be.gte(w);){Q=Math.max(1,Math.floor(be.toNumber()/w.toNumber()));for(var Fe=Math.ceil(Math.log(Q)/Math.LN2),Xe=Fe<=48?1:ue(2,Fe-48),te=j(Q),he=te.mul(w);he.isNegative()||he.gt(be);)Q-=Xe,te=j(Q,this.unsigned),he=te.mul(w);te.isZero()&&(te=de),we=we.add(te),be=be.sub(he)}return we},v.div=v.divide,v.modulo=function(w){if(Z(w)||(w=ee(w)),W){var P=(this.unsigned?W.rem_u:W.rem_s)(this.low,this.high,w.low,w.high);return z(P,W.get_high(),this.unsigned)}return this.sub(this.div(w).mul(w))},v.mod=v.modulo,v.rem=v.modulo,v.not=function(){return z(~this.low,~this.high,this.unsigned)},v.and=function(w){return Z(w)||(w=ee(w)),z(this.low&w.low,this.high&w.high,this.unsigned)},v.or=function(w){return Z(w)||(w=ee(w)),z(this.low|w.low,this.high|w.high,this.unsigned)},v.xor=function(w){return Z(w)||(w=ee(w)),z(this.low^w.low,this.high^w.high,this.unsigned)},v.shiftLeft=function(w){return Z(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?z(this.low<<w,this.high<<w|this.low>>>32-w,this.unsigned):z(0,this.low<<w-32,this.unsigned)},v.shl=v.shiftLeft,v.shiftRight=function(w){return Z(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?z(this.low>>>w|this.high<<32-w,this.high>>w,this.unsigned):z(this.high>>w-32,this.high>=0?0:-1,this.unsigned)},v.shr=v.shiftRight,v.shiftRightUnsigned=function(w){if(Z(w)&&(w=w.toInt()),w&=63,w===0)return this;var P=this.high;if(w<32){var Q=this.low;return z(Q>>>w|P<<32-w,P>>>w,this.unsigned)}else return w===32?z(P,0,this.unsigned):z(P>>>w-32,0,this.unsigned)},v.shru=v.shiftRightUnsigned,v.shr_u=v.shiftRightUnsigned,v.toSigned=function(){return this.unsigned?z(this.low,this.high,!1):this},v.toUnsigned=function(){return this.unsigned?this:z(this.low,this.high,!0)},v.toBytes=function(w){return w?this.toBytesLE():this.toBytesBE()},v.toBytesLE=function(){var w=this.high,P=this.low;return[P&255,P>>>8&255,P>>>16&255,P>>>24,w&255,w>>>8&255,w>>>16&255,w>>>24]},v.toBytesBE=function(){var w=this.high,P=this.low;return[w>>>24,w>>>16&255,w>>>8&255,w&255,P>>>24,P>>>16&255,P>>>8&255,P&255]},M.fromBytes=function(w,P,Q){return Q?M.fromBytesLE(w,P):M.fromBytesBE(w,P)},M.fromBytesLE=function(w,P){return new M(w[0]|w[1]<<8|w[2]<<16|w[3]<<24,w[4]|w[5]<<8|w[6]<<16|w[7]<<24,P)},M.fromBytesBE=function(w,P){return new M(w[4]<<24|w[5]<<16|w[6]<<8|w[7],w[0]<<24|w[1]<<16|w[2]<<8|w[3],P)}}}]);

//# sourceMappingURL=551.3b9f66d1.js.map