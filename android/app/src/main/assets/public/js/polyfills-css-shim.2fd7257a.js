(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["polyfills-css-shim"],{"3c2d":function(t,e){var r=function(){return(r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},n=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function s(t){return a(i(t=o(t)),t)}function o(t){return t.replace(f.comments,"").replace(f.port,"")}function i(t){var e=new n;e.start=0,e.end=t.length;for(var r=e,s=0,o=t.length;s<o;s++)if(t[s]===l){r.rules||(r.rules=[]);var i=r,a=i.rules[i.rules.length-1]||null;(r=new n).start=s+1,r.parent=i,r.previous=a,i.rules.push(r)}else t[s]===p&&(r.end=s+1,r=r.parent||e);return e}function a(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=u(r=e.substring(n,t.start-1))).replace(f.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var s=t.parsedSelector=t.selector=r.trim();t.atRule=0===s.indexOf(m),t.atRule?0===s.indexOf(v)?t.type=c.MEDIA_RULE:s.match(f.keyframesRule)&&(t.type=c.KEYFRAMES_RULE,t.keyframesName=t.selector.split(f.multipleSpaces).pop()):0===s.indexOf(h)?t.type=c.MIXIN_RULE:t.type=c.STYLE_RULE}var o=t.rules;if(o)for(var i=0,l=o.length,p=void 0;i<l&&(p=o[i]);i++)a(p,e);return t}function u(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}var c={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",p="}",f={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",v="@media",m="@";function d(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var g=/\bvar\(/,y=/\B--[\w-]+\s*:/,S=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,b=/^[\t ]+\n/gm;function E(t,e,r){return t[e]?t[e]:r?k(r,t):""}function w(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}function M(t,e){var r=d(g,t,e);if(!r)return null;var n=w(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}function x(t,e,r){var n=M(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?R(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return E(t,s,o)})),n.end}function k(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function C(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function I(t){for(var e="",r=0;;){var n=d(y,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=C(t,s)}return e}function R(t){var e=0;t=I(t=t.replace(S,"")).replace(b,"");for(var r=[];e<t.length;)e=x(t,r,e);return r}function A(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=k(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},o=0;o<10;o++)if("break"===s())break;return r}function L(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===c.STYLE_RULE})).forEach((function(t){var n=U(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:_(),nu:e})})),e++})),r}function _(t){return 1}var O="!important",T=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function U(t){for(var e,r=[];e=T.exec(t.trim());){var n=N(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:R(s),important:o})}return r}function N(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(O);return e&&(t=t.substr(0,t.length-O.length).trim()),{value:t,important:e}}function P(t,e,r){var n=[],s=$(e,t);return r.forEach((function(t){return n.push(t)})),s.forEach((function(t){return n.push(t)})),H(G(n).filter((function(e){return V(t,e.selector)})))}function $(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function G(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function H(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function V(t,e){return":root"===e||"html"===e||t.matches(e)}function Y(t){var e=s(t),r=R(t);return{original:t,template:r,selectors:L(e),usesCssVars:r.length>1}}function j(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=Y(e.textContent);return r.styleEl=e,t.push(r),!0}function q(t){var e=A(G(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=k(t.template,e))}))}function F(t,e){var n=t.template.map((function(r){return"string"==typeof r?B(r,t.scopeId,e):r})),s=t.selectors.map((function(n){return r(r({},n),{selector:B(n.selector,t.scopeId,e)})}));return r(r({},t),{template:n,selectors:s,scopeId:e})}function B(t,e,r){return W(t,"\\."+e,"."+r)}function W(t,e,r){return t.replace(new RegExp(e,"g"),r)}function D(t,e){return X(t,e),K(t,e).then((function(){q(e)}))}function J(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver((function(){X(t,e)&&q(e)})).observe(document.head,{childList:!0})}function K(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(z(t,e,n[s]));return Promise.all(r)}function X(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return j(e,t)})).some(Boolean)}function z(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(Q(s)&&r.parentNode){et(s)&&(s=rt(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,j(e,o),r.parentNode.insertBefore(o,r),r.remove()}})).catch((function(t){console.error(t)}))}var Z=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function Q(t){return t.indexOf("var(")>-1||Z.test(t)}var tt=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function et(t){return tt.lastIndex=0,tt.test(t)}function rt(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(tt,(function(t,e){var n=r+e;return t.replace(e,n)}))}var nt=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){J(t.doc,t.globalScopes),D(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return z(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){j(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),o=this.doc.createElement("style");return o.setAttribute("data-no-shim",""),s.usesCssVars?n?(o["s-sc"]=e=s.scopeId+"-"+this.count,o.textContent="/*needs update*/",this.hostStyleMap.set(t,o),this.hostScopeMap.set(t,F(s,e)),this.count++):(s.styleEl=o,s.usesCssVars||(o.textContent=k(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):o.textContent=r,o},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=A(P(t,this.hostScopeMap,this.globalScopes));r.textContent=k(e.template,n)}}},t.prototype.updateGlobal=function(){q(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=Y(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();!function(t){!t||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new nt(t,t.document))}("undefined"!=typeof window&&window)}}]);
//# sourceMappingURL=polyfills-css-shim.2fd7257a.js.map