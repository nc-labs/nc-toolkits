import{matchPath as e,Link as t,useRoutes as r,unstable_HistoryRouter as o}from"react-router-dom";export*from"react-router-dom";import n,{useCallback as c,useLayoutEffect as s,useRef as a,useMemo as l,memo as i,Fragment as m,useEffect as f}from"react";import h from"lodash";import u from"styled-components";import{useBoolean as p,useSize as d,useInViewport as y}from"ahooks";import{Loading as g}from"nc-simple-loading";import{createBrowserHistory as E}from"history";const x=n.memo(({onReload:e,error:t})=>n.createElement(n.Fragment,null,t," ",n.createElement("button",{onClick:e},"Re-fetch")));let w;const k=n.memo(()=>n.createElement(v,null,n.createElement(g,null))),v=u.div(w||(w=(e=>e)`
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
`)),F=n.memo(({factory:e,children:t})=>{const[r,{setTrue:o,setFalse:a}]=p(!e.isFetched),l=c(()=>{e.isFetched||(o(),Promise.all([new Promise(e=>setTimeout(e,1e3)),e.fetch()]).finally(a))},[e.isFetched]);return s(l,[e.isFetched]),r?n.createElement(k,null):e.error?n.createElement(x,{error:e.error,onReload:l}):n.createElement(e.Component,null,t)}),b=()=>{const e=a(null),t=d(e);return[e,l(()=>(null==t?void 0:t.height)||0,[t])]};class ${constructor(e){var t=this;this.isFetched=!1,this.Component=k,this.error="",this.fetch=async function(){try{const{default:e}=await t.factory();e.factories&&Promise.all(e.factories.map(e=>e.fetch())),t.Component=i(e),t.isFetched=!0,t.error=""}catch(e){console.error("[nc-toolkits]",e.message),t.error=e.message}},this.factory=e}}const j=e=>{const t=h.pickBy(import.meta.glob("/src/{layouts,pages}/**/*.tsx"),function(t,r){return h.startsWith(r,e)}),r={};for(const o in t)r[o.replace(e,"").replace(/\.tsx$/,"").replace(/^\//,"")]=t[o];return r};let C,P,H=e=>e;const R=(e,t)=>{const r=(e=>{const t={},r=j("/src/layouts/"+e);for(const e in r)t[e]=new $(r[e]);return t})(e);return"none"!==t&&r&&(r[t]||r.index)||null},z=(e,t)=>{const r=i(e),o=R("headers",(null==t?void 0:t.header)||"index"),c=R("contents",(null==t?void 0:t.content)||"index"),s=R("footers",(null==t?void 0:t.footer)||"index"),a=()=>{const[e,t]=b(),[a,l]=b();return n.createElement(m,null,o&&n.createElement(O,{ref:e},n.createElement(F,{factory:o})),c?n.createElement(L,{headerHeight:t,footerHeight:l},n.createElement(F,{factory:c},n.createElement(r,null))):n.createElement("main",null,n.createElement(r,null)),s&&n.createElement("footer",{ref:a},n.createElement(F,{factory:s})))};return h.set(a,"factories",[o,c,s].filter(e=>e)),a},L=u.main(C||(C=H`
  min-height: ${0};
`),({headerHeight:e=0,footerHeight:t=0})=>`calc(100vh - ${e+t}px)`),O=u.header(P||(P=H`
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`)),T=E(),B=e=>{let t=(e=>["/",e.replace(/index$/,"").toLowerCase()].join(""))(e);return/^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g.test(t)?(t=(e=>e.split(/\]/).join("").split(/\/\[/).join("/:"))(t),t):(console.warn("[nc-toolkits]",e,"is invalid path."),null)},{routes:J,routePreloads:N}=(()=>{const e=j("/src/pages"),t=j("/src/pages/404.tsx")[""],r=[];for(const t in e){const o=B(t);if(o){const c=new $(e[t]);r.push({path:o,factory:c,element:n.createElement(F,{factory:c})})}}const o=r.map(e=>h.pick(e,["path","element"])),c=r.map(e=>h.pick(e,["path","factory"]));if(t){const e=new $(j("/src/pages/404.tsx")[""]);o.push({path:"*",element:n.createElement(F,{factory:e})})}return{routes:o,routePreloads:c}})(),S=n.memo(n.forwardRef((r,o)=>{const c=a((null==o?void 0:o.current)||o||null),[s]=y(c),i=l(()=>"string"==typeof r.to?r.to:r.to.pathname,[JSON.stringify(r.to)]),m=l(()=>N.find(t=>e(t.path,i)),[i]);return f(()=>{s&&m&&m.factory&&(m.factory.isFetched||m.factory.fetch())},[s]),n.createElement(t,Object.assign({},r,{ref:c}))})),W=i(()=>r(J)),q=i(()=>n.createElement(o,{history:T},n.createElement(W,null)));export{q as HistoryRouter,S as Link,T as history,z as withNcLayout};
//# sourceMappingURL=index.modern.js.map
