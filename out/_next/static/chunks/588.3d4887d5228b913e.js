(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{4588:function(a,b,c){!function(b,d){a.exports=d(c(7294))}(this,function(a){"use strict";var b,c,d,e,f,g=(b=a)&&"object"==typeof b&&"default"in b?b:{default:b},h={exports:{}};function i(b,c,d=window){let e=a.useRef();a.useEffect(()=>{e.current=c},[c]),a.useEffect(()=>{let a=d&&d.addEventListener;if(!a)return;let c=a=>e.current(a);return d.addEventListener(b,c),()=>{d.removeEventListener(b,c)}},[b,d])}h.exports=(function(){if(f)return e;f=1;var a=d?c:(d=1,c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function b(){}function g(){}return g.resetWarningCache=b,e=function(){function c(b,c,d,e,f,g){if(g!==a){var h=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function d(){return c}c.isRequired=c;var e={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:g,resetWarningCache:b};return e.PropTypes=e,e}})()();let j=(()=>{if("undefined"==typeof navigator)return;let a=navigator.userAgent;return{info:a,Android:()=>a.match(/Android/i),BlackBerry:()=>a.match(/BlackBerry/i),IEMobile:()=>a.match(/IEMobile/i),iOS:()=>a.match(/iPhone|iPad|iPod/i),iPad:()=>a.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,OperaMini:()=>a.match(/Opera Mini/i),any:()=>j.Android()||j.BlackBerry()||j.iOS()||j.iPad()||j.OperaMini()||j.IEMobile()}})();function k({outerStyle:b,innerStyle:c,color:d="220, 90, 90",outerAlpha:e=.3,innerSize:f=8,outerSize:h=8,outerScale:j=6,innerScale:k=.6,trailingSpeed:l=8,clickables:m=["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]}){let n=a.useRef(),o=a.useRef(),p=a.useRef(),q=a.useRef(),[r,s]=a.useState({x:0,y:0}),[t,u]=a.useState(!1),[v,w]=a.useState(!1),[x,y]=a.useState(!1),z=a.useRef(0),A=a.useRef(0),B=a.useCallback(({clientX:a,clientY:b})=>{s({x:a,y:b}),o.current.style.top=`${b}px`,o.current.style.left=`${a}px`,z.current=a,A.current=b},[]),C=a.useCallback(a=>{void 0!==q.current&&(r.x+=(z.current-r.x)/l,r.y+=(A.current-r.y)/l,n.current.style.top=`${r.y}px`,n.current.style.left=`${r.x}px`),q.current=a,p.current=requestAnimationFrame(C)},[p]);a.useEffect(()=>(p.current=requestAnimationFrame(C),()=>cancelAnimationFrame(p.current)),[C]);let D=a.useCallback(()=>w(!0),[]),E=a.useCallback(()=>w(!1),[]),F=a.useCallback(()=>u(!0),[]),G=a.useCallback(()=>u(!1),[]);i("mousemove",B),i("mousedown",D),i("mouseup",E),i("mouseover",F),i("mouseout",G),a.useEffect(()=>{v?(o.current.style.transform=`translate(-50%, -50%) scale(${k})`,n.current.style.transform=`translate(-50%, -50%) scale(${j})`):(o.current.style.transform="translate(-50%, -50%) scale(1)",n.current.style.transform="translate(-50%, -50%) scale(1)")},[k,j,v]),a.useEffect(()=>{x&&(o.current.style.transform=`translate(-50%, -50%) scale(${1.2*k})`,n.current.style.transform=`translate(-50%, -50%) scale(${1.4*j})`)},[k,j,x]),a.useEffect(()=>{t?(o.current.style.opacity=1,n.current.style.opacity=1):(o.current.style.opacity=0,n.current.style.opacity=0)},[t]),a.useEffect(()=>{let a=document.querySelectorAll(m.join(","));return a.forEach(a=>{a.style.cursor="none",a.addEventListener("mouseover",()=>{w(!0)}),a.addEventListener("click",()=>{w(!0),y(!1)}),a.addEventListener("mousedown",()=>{y(!0)}),a.addEventListener("mouseup",()=>{w(!0)}),a.addEventListener("mouseout",()=>{w(!1),y(!1)})}),()=>{a.forEach(a=>{a.removeEventListener("mouseover",()=>{w(!0)}),a.removeEventListener("click",()=>{w(!0),y(!1)}),a.removeEventListener("mousedown",()=>{y(!0)}),a.removeEventListener("mouseup",()=>{w(!0)}),a.removeEventListener("mouseout",()=>{w(!1),y(!1)})})}},[v,m]);let H={cursorInner:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",width:f,height:f,pointerEvents:"none",backgroundColor:`rgba(${d}, 1)`,...c&&c,transition:"opacity 0.15s ease-in-out, transform 0.25s ease-in-out"},cursorOuter:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",pointerEvents:"none",width:h,height:h,backgroundColor:`rgba(${d}, ${e})`,transition:"opacity 0.15s ease-in-out, transform 0.15s ease-in-out",willChange:"transform",...b&&b}};return document.body.style.cursor="none",g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{ref:n,style:H.cursorOuter}),g.default.createElement("div",{ref:o,style:H.cursorInner}))}function l({outerStyle:a,innerStyle:b,color:c,outerAlpha:d,innerSize:e,innerScale:f,outerSize:h,outerScale:i,trailingSpeed:l,clickables:m}){return"undefined"!=typeof navigator&&j.any()?g.default.createElement(g.default.Fragment,null):g.default.createElement(k,{outerStyle:a,innerStyle:b,color:c,outerAlpha:d,innerSize:e,innerScale:f,outerSize:h,outerScale:i,trailingSpeed:l,clickables:m})}return l.propTypes={color:h.exports.string,outerAlpha:h.exports.number,innerSize:h.exports.number,outerSize:h.exports.number,outerScale:h.exports.number,innerScale:h.exports.number,outerStyle:h.exports.object,innerStyle:h.exports.object,trailingSpeed:h.exports.number,clickables:h.exports.array},l})}}])