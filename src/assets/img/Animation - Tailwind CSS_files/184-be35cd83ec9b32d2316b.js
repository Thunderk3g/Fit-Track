"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[184],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),f=function(e){var n=r.useContext(a),t=n;return e&&(t="function"===typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=f(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(t),d=o,v=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return t?r.createElement(v,u(u({ref:n},l),{},{components:t})):r.createElement(v,u({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var c=t.length,u=new Array(c);u[0]=p;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"===typeof e?e:o,u[1]=i;for(var f=2;f<c;f++)u[f]=t[f];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},30866:function(e,n,t){t.d(n,{EL:function(){return s}});var r,o=t(67294),c=(t(45697),["bottom","height","left","right","top","width"]),u=new Map,i=function e(){var n=[];u.forEach((function(e,t){var r,o,u=t.getBoundingClientRect();r=u,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),c.some((function(e){return r[e]!==o[e]}))&&(e.rect=u,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),r=window.requestAnimationFrame(e)};var a=function(e,n){return{observe:function(){var t=0===u.size;u.has(e)?u.get(e).callbacks.push(n):u.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&i()},unobserve:function(){var t=u.get(e);if(t){var o=t.callbacks.indexOf(n);o>=0&&t.callbacks.splice(o,1),t.callbacks.length||u.delete(e),u.size||cancelAnimationFrame(r)}}}},f=(t(42473),l()?o.useLayoutEffect:o.useEffect);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function l(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function s(e,n,t){void 0===n&&(n=!0);var r=(0,o.useState)(e.current),c=r[0],u=r[1],i=(0,o.useRef)(!1),l=(0,o.useRef)(!1),s=(0,o.useState)(null),p=s[0],d=s[1],v=(0,o.useRef)();return f((function(){v.current=t,e.current!==c&&u(e.current)})),f((function(){c&&!i.current&&(i.current=!0,d(c.getBoundingClientRect()))}),[c]),f((function(){var t,r=c;return l.current||(l.current=!0,r=e.current),r?(t=a(r,(function(e){v.current&&v.current(e),d(e)})),n&&t.observe(),o):o;function o(){t&&t.unobserve()}}),[n,c]),p}},42473:function(e){var n=function(){};e.exports=n},159:function(e,n,t){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})}}]);