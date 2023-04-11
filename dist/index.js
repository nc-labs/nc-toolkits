function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react-router-dom"),n=require("react"),r=e(n),o=require("ahooks"),i=require("history"),u=e(require("lodash")),a=require("nc-simple-loading"),c=e(require("styled-components")),l={useWatcher:function(e,t){o.useEventListener(e,function(e){t(e.detail)})},emitWatcher:function(e,t){return window.dispatchEvent(new CustomEvent(e,{detail:t}))}},f=i.createBrowserHistory(),s=r.memo(function(e){return r.createElement(r.Fragment,null,e.error," ",r.createElement("button",{onClick:e.onReload},"Re-fetch"))});function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var d,v=0;function p(e){return"__private_"+v+++"_"+e}function y(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var b=r.memo(function(){return r.createElement(g,null,r.createElement(a.Loading,null))}),g=c.div(d||(d=m(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 999999999;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-contents: space-between;\n"]))),w=r.memo(function(e){var t=e.factory,i=e.children,u=o.useBoolean(!t.isFetched),a=u[0],c=u[1],l=c.setTrue,f=c.setFalse,h=n.useCallback(function(){t.isFetched||(l(),Promise.all([new Promise(function(e){return setTimeout(e,1e3)}),t.fetch()]).finally(f))},[t.isFetched]);return n.useLayoutEffect(h,[t.isFetched]),a?r.createElement(b,null):t.error?r.createElement(s,{error:t.error,onReload:h}):r.createElement(t.Component,null,i)});const E=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{j(r,1,e(this.v))}catch(e){j(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?j(r,1,t?t(o):o):n?j(r,1,n(o)):j(r,2,o)}catch(e){j(r,2,e)}},r},e}();function j(e,t,n){if(!e.s){if(n instanceof E){if(!n.s)return void(n.o=j.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(j.bind(null,e,t),j.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}function k(e){return e instanceof E&&1&e.s}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var x,P,O=p("filePath"),S=function(){function e(e){var t=this;Object.defineProperty(this,O,{writable:!0,value:void 0}),this.isFetched=!1,this.Component=b,this.error="",y(this,O)[O]="",this.fetch=function(){try{var e=!1,n=0;return Promise.resolve(function(e,t,n){for(var r;;){var o=e();if(k(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!k(i)){r=1;break}i=i.s}if(t){var u=t();if(u&&u.then&&!k(u)){r=2;break}}}var a=new E,c=j.bind(null,a,2);return(0===r?o.then(f):1===r?i.then(l):u.then(s)).then(void 0,c),a;function l(r){i=r;do{if(t&&(u=t())&&u.then&&!k(u))return void u.then(s).then(void 0,c);if(!(o=e())||k(o)&&!o.v)return void j(a,1,i);if(o.then)return void o.then(f).then(void 0,c);k(i=n())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,c)}function f(e){e?(i=n())&&i.then?i.then(l).then(void 0,c):l(i):j(a,1,i)}function s(){(o=e())?o.then?o.then(f).then(void 0,c):f(o):j(a,1,i)}}(function(){return!e&&n<3},function(){return n++},function(){var r=function(n,r){try{var o=Promise.resolve(t._factory()).then(function(n){t.Component=n.default,t.isFetched=!0,t.error="",e=!0})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){var r,o=(null===(r=((null==e?void 0:e.message)||"").match(/http[s]{0,1}:\/\/\S+/))||void 0===r?void 0:r[0])||"";y(t,O)[O]=o.replace(/[?].+$/,""),2===n&&(console.error("[nc-toolkits]",e.message),t.error=e.message)});if(r&&r.then)return r.then(function(){})}))}catch(e){return Promise.reject(e)}},this.factory=e}var t,n;return t=e,(n=[{key:"_factory",get:function(){var e=this;return y(this,O)[O]?function(){return new Promise(function(t){t(function(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t.default=e,t}(require(y(e,O)[O]+"?t="+Date.now())))})}:this.factory}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key))?o:String(o),r)}var o}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=function(e){var t=u.pickBy((void 0)("/src/{layouts,pages}/**/*.tsx"),function(t,n){return u.startsWith(n,e)}),n={};for(var r in t)n[r.replace(e,"").replace(/\.tsx$/,"").replace(/^\//,"")]=t[r];return n},_=function(e){var t=function(e){return["/",e.replace(/index$/,"").toLowerCase()].join("")}(e);return/^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g.test(t)?t=function(e){return e.split(/\]/).join("").split(/\/\[/).join("/:")}(t):(console.warn("[nc-toolkits]",e,"is invalid path."),null)},F=function(){var e=L("/src/pages"),t=[];for(var n in e){var o=_(n);if(o){var i=new S(e[n]);t.push({path:o,factory:i,element:r.createElement(w,{factory:i})})}}return{routes:t.map(function(e){return u.pick(e,["path","element"])}),routePreloads:t.map(function(e){return u.pick(e,["path","factory"])})}}(),C=F.routes,R=F.routePreloads,q=r.memo(r.forwardRef(function(e,i){var u=n.useRef((null==i?void 0:i.current)||i||null),a=o.useInViewport(u)[0],c=n.useMemo(function(){return"string"==typeof e.to?e.to:e.to.pathname},[JSON.stringify(e.to)]),l=n.useMemo(function(){return R.find(function(e){return t.matchPath(e.path,c)})},[c]);return n.useEffect(function(){a&&l&&l.factory&&(l.factory.isFetched||l.factory.fetch())},[a]),r.createElement(t.Link,Object.assign({},e,{ref:u}))})),H=function(){var e=n.useRef(null),t=o.useSize(e);return[e,n.useMemo(function(){return(null==t?void 0:t.height)||0},[t])]},M=function(e){var t={},n=L("/src/layouts/"+e);for(var r in n)t[r]=new S(n[r]);return t},T={headers:M("headers"),footers:M("footers"),contents:M("contents")},W=r.memo(function(e){var t=e.name,o=e.children,i=e.component,u=n.useMemo(function(){var e=T[i];return"none"!==t&&e&&(e[t]||e.index)||null},[i,t]);return u?r.createElement(w,{factory:u},o):r.createElement(r.Fragment,null,o)}),$=r.memo(function(){var e=f.location.pathname,o=n.useState({}),i=o[0],u=o[1],a=n.useMemo(function(){return i[e]},[i,e]),c=H(),s=c[0],m=c[1],d=H(),v=d[0],p=d[1];return l.useWatcher("CHANGE_LAYOUTS",function(e){u(function(t){return h({},t,e)})}),r.createElement(t.unstable_HistoryRouter,{history:f},(null==a?void 0:a.header)&&r.createElement(A,{ref:s},r.createElement(W,{component:"headers",name:a.header})),(null==a?void 0:a.content)&&r.createElement(z,{headerHeight:m,footerHeight:p},r.createElement(W,{component:"contents",name:null==a?void 0:a.content},r.createElement(B,null))),Boolean(null==a?void 0:a.content)||r.createElement("main",null,r.createElement(B,null)),(null==a?void 0:a.footer)&&r.createElement("footer",{ref:v},r.createElement(W,{component:"footers",name:null==a?void 0:a.footer})))}),z=c.main(x||(x=m(["\n  min-height: ",";\n"])),function(e){var t=e.headerHeight,n=e.footerHeight;return"calc(100vh - "+((void 0===t?0:t)+(void 0===n?0:n))+"px)"}),A=c.header(P||(P=m(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  background: white;\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n"]))),B=r.memo(function(){return t.useRoutes(C)});Object.keys(t).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})}),exports.Link=q,exports.Router=$,exports.history=f,exports.watcher=l,exports.withLayout=function(e,o){return function(){var i=t.useLocation().pathname;return n.useLayoutEffect(function(){var e;l.emitWatcher("CHANGE_LAYOUTS",((e={})[i]={header:(null==o?void 0:o.header)||"index",content:(null==o?void 0:o.content)||"index",footer:(null==o?void 0:o.footer)||"index"},e))},[]),r.createElement(e,null)}};
//# sourceMappingURL=index.js.map
