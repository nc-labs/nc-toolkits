import{useLocation as e,matchPath as t,Link as o,unstable_HistoryRouter as n,useRoutes as r}from"react-router-dom";export*from"react-router-dom";import a,{useLayoutEffect as c,useCallback as l,useRef as i,useMemo as s,useEffect as m,useState as h}from"react";import{useEventListener as u,useBoolean as d,useInViewport as f,useSize as p}from"ahooks";import{createBrowserHistory as y}from"history";import v from"lodash";import{Loading as E}from"nc-simple-loading";import g from"styled-components";const w={useWatcher:(e,t)=>{u(e,({detail:e})=>{t(e)})},emitWatcher:(e,t)=>window.dispatchEvent(new CustomEvent(e,{detail:t}))},x=(t,o)=>()=>{const{pathname:n}=e();return c(()=>{w.emitWatcher("CHANGE_LAYOUTS",{[n]:{header:(null==o?void 0:o.header)||"index",content:(null==o?void 0:o.content)||"index",footer:(null==o?void 0:o.footer)||"index"}})},[]),a.createElement(t,null)},b=y(),k=a.memo(({onReload:e,error:t})=>a.createElement(a.Fragment,null,t," ",a.createElement("button",{onClick:e},"Re-fetch")));let F;const $=a.memo(()=>a.createElement(C,null,a.createElement(E,null))),C=g.div(F||(F=(e=>e)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999999999;
  background: white;
  display: flex;
  align-items: center;
  justify-contents: space-between;
`)),_=a.memo(({factory:e,children:t})=>{const[o,{setTrue:n,setFalse:r}]=d(!e.isFetched),i=l(()=>{e.isFetched||(n(),Promise.all([new Promise(e=>setTimeout(e,1e3)),e.fetch()]).finally(r))},[e.isFetched]);return c(i,[e.isFetched]),o?a.createElement($,null):e.error?a.createElement(k,{error:e.error,onReload:i}):a.createElement(e.Component,null,t)});var j=0;function O(e){return"__private_"+j+++"_"+e}function P(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var H=O("filePath");class L{constructor(e){var t=this;Object.defineProperty(this,H,{writable:!0,value:void 0}),this.isFetched=!1,this.Component=$,this.error="",P(this,H)[H]="",this.fetch=async function(){for(let o=0;o<3;o++)try{const{default:e}=await t._factory();t.Component=e,t.isFetched=!0,t.error="";break}catch(n){var e;const r=(null===(e=((null==n?void 0:n.message)||"").match(/http[s]{0,1}:\/\/\S+/))||void 0===e?void 0:e[0])||"";if(P(t,H)[H]=r.replace(/[?].+$/,""),2!==o)continue;console.error("[nc-toolkits]",n.message),t.error=n.message}},this.factory=e}get _factory(){return P(this,H)[H]?()=>import(`${P(this,H)[H]}?t=${Date.now()}`):this.factory}}const T=e=>{const t=v.pickBy(import.meta.glob("/src/{layouts,pages}/**/*.tsx"),function(t,o){return v.startsWith(o,e)}),o={};for(const n in t)o[n.replace(e,"").replace(/\.tsx$/,"").replace(/^\//,"")]=t[n];return o},W=e=>{let t=(e=>["/",e.replace(/index$/,"").toLowerCase()].join(""))(e);return/^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g.test(t)?(t=(e=>e.split(/\]/).join("").split(/\/\[/).join("/:"))(t),t):(console.warn("[nc-toolkits]",e,"is invalid path."),null)},{routes:A,routePreloads:R}=(()=>{const e=T("/src/pages"),t=[];for(const o in e){const n=W(o);if(n){const r=new L(e[o]);t.push({path:n,factory:r,element:a.createElement(_,{factory:r})})}}return{routes:t.map(e=>v.pick(e,["path","element"])),routePreloads:t.map(e=>v.pick(e,["path","factory"]))}})(),S=a.memo(a.forwardRef((e,n)=>{const r=i((null==n?void 0:n.current)||n||null),[c]=f(r),l=s(()=>"string"==typeof e.to?e.to:e.to.pathname,[JSON.stringify(e.to)]),h=s(()=>R.find(e=>t(e.path,l)),[l]);return m(()=>{c&&h&&h.factory&&(h.factory.isFetched||h.factory.fetch())},[c]),a.createElement(o,Object.assign({},e,{ref:r}))})),z=()=>{const e=i(null),t=p(e);return[e,s(()=>(null==t?void 0:t.height)||0,[t])]},N=e=>{const t={},o=T("/src/layouts/"+e);for(const e in o)t[e]=new L(o[e]);return t},B={headers:N("headers"),footers:N("footers"),contents:N("contents")},G=a.memo(({name:e,children:t,component:o})=>{const n=s(()=>{const t=B[o];return"none"!==e&&t&&(t[e]||t.index)||null},[o,e]);return n?a.createElement(_,{factory:n},t):a.createElement(a.Fragment,null,t)});let U,Y,D=e=>e;const J=a.memo(()=>{const e=b.location.pathname,[t,o]=h({}),r=s(()=>t[e],[t,e]),[c,l]=z(),[i,m]=z();return w.useWatcher("CHANGE_LAYOUTS",e=>{o(t=>({...t,...e}))}),a.createElement(n,{history:b},(null==r?void 0:r.header)&&a.createElement(I,{ref:c},a.createElement(G,{component:"headers",name:r.header})),(null==r?void 0:r.content)&&a.createElement(q,{headerHeight:l,footerHeight:m},a.createElement(G,{component:"contents",name:null==r?void 0:r.content},a.createElement(K,null))),Boolean(null==r?void 0:r.content)||a.createElement("main",null,a.createElement(K,null)),(null==r?void 0:r.footer)&&a.createElement("footer",{ref:i},a.createElement(G,{component:"footers",name:null==r?void 0:r.footer})))}),q=g.main(U||(U=D`
  min-height: ${0};
`),({headerHeight:e=0,footerHeight:t=0})=>`calc(100vh - ${e+t}px)`),I=g.header(Y||(Y=D`
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`)),K=a.memo(()=>r(A));export{S as Link,J as Router,b as history,w as watcher,x as withLayout};
//# sourceMappingURL=index.modern.js.map
