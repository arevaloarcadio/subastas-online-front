(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db91453"],{9397:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",(function(){return a})),o.d(e,"ion_route_redirect",(function(){return c})),o.d(e,"ion_router",(function(){return $})),o.d(e,"ion_router_link",(function(){return M}));var n=o("037e"),r=o("6606"),i=o("38cb"),s=o("ef89");const a=class{constructor(t){Object(n["o"])(this,t),this.ionRouteDataChanged=Object(n["g"])(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const r of o)if(t[r]!==e[r])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},c=class{constructor(t){Object(n["o"])(this,t),this.ionRouteRedirectChanged=Object(n["g"])(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},h="root",u="forward",l="back",d=t=>{const e=t.filter(t=>t.length>0).join("/");return"/"+e},f=t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e},g=(t,e,o,n,r,i,s)=>{let a=d([...m(e),...n]);o&&(a="#"+a),void 0!==s&&(a=a+"?"+s),r===u?t.pushState(i,"",a):t.replaceState(i,"",a)},p=(t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)},b=(t,e,o)=>{let n=t.pathname;if(o){const e=t.hash;n="#"===e[0]?e.slice(1):""}const r=m(e),i=m(n);return p(r,i)},m=t=>{if(null==t)return[""];const e=t.split("?")[0],o=e.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===o.length?[""]:o},w=t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug("%c "+d(t),"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()},y=t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ","$c "+d(e.from),"font-weight: bold"," TO: ","$c "+d(e.to),"font-weight: bold");console.groupEnd()},v=async(t,e,o,n,r=!1,i)=>{try{const s=O(t);if(n>=e.length||!s)return r;await s.componentOnReady();const a=e[n],c=await s.setRouteId(a.id,a.params,o,i);return c.changed&&(o=h,r=!0),r=await v(c.element,e,o,n+1,r,i),c.markVisible&&await c.markVisible(),r}catch(s){return console.error(s),!1}},R=async t=>{const e=[];let o,n=t;while(1){if(o=O(n),!o)break;{const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}}return{ids:e,outlet:o}},C=()=>O(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}),j=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",O=t=>{if(!t)return;if(t.matches(j))return t;const e=t.querySelector(j);return e||void 0},P=(t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const e=o[r];if("*"===e)return!0;if(e!==t[r])return!1}return o.length===t.length},k=(t,e)=>e.find(e=>P(t,e)),E=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(;n<o;n++)if(t[n].toLowerCase()!==e[n].id)break;return n},S=(t,e)=>{const o=new T(t);let n,r=!1;for(let s=0;s<e.length;s++){const t=e[s].path;if(""===t[0])r=!0;else{for(const e of t){const t=o.next();if(":"===e[0]){if(""===t)return null;n=n||[];const o=n[s]||(n[s]={});o[e.slice(1)]=t}else if(t!==e)return null}r=!1}}const i=!r||r===(""===o.next());return i?n?e.map((t,e)=>({id:t.id,path:t.path,params:D(t.params,n[e])})):e:null},D=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,L=(t,e)=>{let o=null,n=0;const r=t.map(t=>t.id);for(const i of e){const t=E(r,i);t>n&&(o=i,n=t)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:D(e.params,t[o]&&t[o].params)})):null},N=(t,e)=>{let o=null,n=0;for(const r of e){const e=S(t,r);if(null!==e){const t=U(e);t>n&&(n=t,o=e)}}return o},U=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class T{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const x=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=I(t,"to");return{from:m(I(t,"from")),to:null==e?void 0:m(e)}}),A=t=>_(W(t)),W=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const o=I(e,"component");if(null==o)throw new Error("component missing in ion-route");return{path:m(I(e,"url")),id:o.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:W(t,e)}}),I=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,_=t=>{const e=[];for(const o of t)H([],e,o);return e},H=(t,e,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length)for(const r of o.children)H(n,e,r);else e.push(n)},$=class{constructor(t){Object(n["o"])(this,t),this.ionRouteWillChange=Object(n["g"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n["g"])(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await C(),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i["k"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i["k"])(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const o=await this.runGuards(e);return!0!==o?("object"===typeof o&&(e=m(o.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"===typeof t&&t.redirect}async push(t,e="forward",o){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);let n=m(t),r=t.split("?")[1];const i=await this.runGuards(n);if(!0!==i){if("object"!==typeof i)return!1;n=m(i.redirect),r=i.redirect.split("?")[1]}return this.setPath(n,e,r),this.writeNavStateRoot(n,e,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),w(A(this.el)),y(x(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await R(window.document.body),n=A(this.el),r=L(e,n);if(!r)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const i=f(r);return i?(console.debug("[ion-router] nav changed -> update URL",e,i),this.setPath(i,t),await this.safeWriteNavState(o,r,h,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&k(t,x(this.el))&&this.writeNavStateRoot(t,h)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),h)}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,o=this.lastState;return this.lastState=e,e>o||e>=o&&o>0?u:e<o?l:h}async writeNavStateRoot(t,e,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=x(this.el),r=k(t,n);let i=null;r&&(this.setPath(r.to,e),i=r.from,t=r.to);const s=A(this.el),a=N(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0,s){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,e,o,n,r,i,s)}catch(h){console.error(h)}return a(),c}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e=m(this.previousPath)){if(!t||!e)return!0;const o=A(this.el),n=N(t,o),r=N(e,o),i=n&&n[n.length-1].beforeEnter,s=r&&r[r.length-1].beforeLeave,a=!s||await s();if(!1===a||"object"===typeof a)return a;const c=!i||await i();return!1!==c&&"object"!==typeof c||c}async writeNavState(t,e,o,n,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,r);a&&this.ionRouteWillChange.emit(a);const c=await v(t,e,o,i,!1,s);return this.busy=!1,c&&console.debug("[ion-router] route changed",n),a&&this.ionRouteDidChange.emit(a),c}setPath(t,e,o){this.state++,g(window.history,this.root,this.useHash,t,e,this.state,o)}getPath(){return b(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const o=this.previousPath,n=d(t);if(this.previousPath=n,n===o)return null;const r=e?d(e):null;return{from:o,redirectedFrom:r,to:n}}get el(){return Object(n["k"])(this)}},G=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",M=class{constructor(t){Object(n["o"])(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s["d"])(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(r["b"])(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n["j"])(n["c"],{onClick:this.onClick,class:Object(s["a"])(this.color,{[t]:!0,"ion-activatable":!0})},Object(n["j"])("a",Object.assign({},e),Object(n["j"])("slot",null)))}};M.style=G},ef89:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"d",(function(){return c}));const n=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"===typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,i=t=>{if(void 0!==t){const e=Array.isArray(t)?t:t.split(" ");return e.filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]},s=t=>{const e={};return i(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,o,n)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,o,n)}return!1}}}]);
//# sourceMappingURL=chunk-7db91453.06e3fb35.js.map