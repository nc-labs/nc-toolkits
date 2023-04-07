import{useLocation as e,useRoutes as t,matchPath as o,Link as n,unstable_HistoryRouter as r}from"react-router-dom";export*from"react-router-dom";import a,{useLayoutEffect as l,useRef as s,useMemo as i,useEffect as c,useState as m,Suspense as d}from"react";import{useEventListener as u,useInViewport as p,useSize as h}from"ahooks";import{createBrowserHistory as f}from"history";import g from"lodash";import x from"styled-components";import{lazy as E}from"nc-lazy";const v={useWatcher:(e,t)=>{u(e,({detail:e})=>{t(e)})},emitWatcher:(e,t)=>window.dispatchEvent(new CustomEvent(e,{detail:t}))},y=(t,o)=>()=>{const{pathname:n}=e();return l(()=>{v.emitWatcher("CHANGE_LAYOUTS",{[n]:{header:(null==o?void 0:o.header)||"index",content:(null==o?void 0:o.content)||"index",footer:(null==o?void 0:o.footer)||"index"}})},[]),a.createElement(t,null)},w=f(),b=e=>e.isPreloaded&&e.Component?e.Component:a.lazy((e=>()=>e.isPreloaded?e():Promise.all([e(),new Promise(e=>setTimeout(e,1e3))]).then(([t])=>(e.Component=t.default,t)))(e)),{routes:k,routePreloads:$}=(e=>{const t=import.meta.glob("/src/pages/**/[a-z[]*.tsx"),o=[],n=b;for(const e in t){const r=/^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g;let l=e.split(/\/src\/pages|\.tsx$|\/index\.tsx$/g).join("").toLowerCase()||"/";r.test(l)?(l=l.split(/\]/).join("").split(/\/\[/).join("/:"),o.push({path:l,element:(()=>{const o=n(t[e]);return a.createElement(o,null)})(),preload:t[e]})):console.warn("[nc-toolkits]",e,"is invalid path.")}return{routes:o.map(e=>g.pick(e,["path","element"])),routePreloads:o.map(e=>g.pick(e,["path","preload"]))}})(),P=()=>t(k),C=a.memo(a.forwardRef((e,t)=>{const r=s((null==t?void 0:t.current)||t||null),[l]=p(r),m=i(()=>"string"==typeof e.to?e.to:e.to.pathname,[JSON.stringify(e.to)]),d=i(()=>{var e;return null===(e=$.find(e=>o(e.path,m)))||void 0===e?void 0:e.preload},[m]);return c(()=>{l&&d&&(d.isPreloaded||(d(),d.isPreloaded=!0))},[l]),a.createElement(n,Object.assign({},e,{ref:r}))})),z=()=>{const e=s(null),t=h(e);return[e,i(()=>(null==t?void 0:t.height)||0,[t])]};let H;const j=x.header(H||(H=(e=>e)`
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`)),A=(e,t)=>{const o=(()=>{switch(e){case"headers":return import.meta.glob("/src/layouts/headers/*.tsx");case"footers":return import.meta.glob("/src/layouts/footers/*.tsx");case"contents":return import.meta.glob("/src/layouts/contents/*.tsx");default:return{}}})(),n={},r=t||E;for(const t in o)n[t.split(new RegExp(`/src/layouts/${e}/|.tsx$|/index.tsx$`,"g")).join("")||"index"]=r(o[t]);return n},L={headers:A("headers"),footers:A("footers"),contents:A("contents")},O=a.memo(({name:e,children:t,component:o})=>{const n=i(()=>{if("none"===e)return a.Fragment;const t=L[o];return t[e]||t.index||a.Fragment},[o,e]);return a.createElement(n,null,t)});let W;const N=x.main(W||(W=(e=>e)`
  min-height: ${0};
`),({headerHeight:e=0,footerHeight:t=0})=>`calc(100vh - ${e+t}px)`),S=a.memo(({fallback:e})=>{const t=w.location.pathname,[o,n]=m({}),l=i(()=>o[t],[o,t]),[s,c]=z(),[u,p]=z();return v.useWatcher("CHANGE_LAYOUTS",e=>{n(t=>({...t,...e}))}),a.createElement(r,{history:w},a.createElement(d,{fallback:e},(null==l?void 0:l.header)&&a.createElement(j,{ref:s},a.createElement(O,{component:"headers",name:l.header})),(null==l?void 0:l.content)&&a.createElement(N,{headerHeight:c,footerHeight:p},a.createElement(O,{component:"contents",name:null==l?void 0:l.content},a.createElement(P,null))),Boolean(null==l?void 0:l.content)||a.createElement("main",null,a.createElement(P,null)),(null==l?void 0:l.footer)&&a.createElement("footer",{ref:u},a.createElement(O,{component:"footers",name:null==l?void 0:l.footer}))))});export{C as Link,S as Router,w as history,b as lazy,v as watcher,y as withLayout};
//# sourceMappingURL=index.modern.js.map
