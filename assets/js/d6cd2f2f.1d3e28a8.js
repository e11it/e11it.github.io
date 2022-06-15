"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[389],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,m=f["".concat(u,".").concat(y)]||f[y]||s[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"NIFI secret recovery",authors:"e11it",tags:["nifi","recovery"]},u=void 0,l={permalink:"/blog/2022/05/19/nifi-secrets",source:"@site/blog/2022-05-19-nifi-secrets.md",title:"NIFI secret recovery",description:"\u0421\u043b\u0443\u0447\u0438\u043b\u0430\u0441\u044c \u0442\u0443\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u0438 \u043e\u0442 jks \u0444\u0430\u0439\u043b\u043e\u0432, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0441\u044b\u043b\u0430\u043b\u0438\u0441\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u0432 NIFI.",date:"2022-05-19T00:00:00.000Z",formattedDate:"19 \u043c\u0430\u044f 2022 \u0433.",tags:[{label:"nifi",permalink:"/blog/tags/nifi"},{label:"recovery",permalink:"/blog/tags/recovery"}],readingTime:2.86,truncated:!0,authors:[{name:"Ilya Makarov",title:"E11it",url:"https://github.com/e11it",imageURL:"https://github.com/e11it.png",key:"e11it"}],frontMatter:{title:"NIFI secret recovery",authors:"e11it",tags:["nifi","recovery"]},nextItem:{title:"Encryption as a service",permalink:"/blog/2022/05/18/kms-encryption"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0421\u043b\u0443\u0447\u0438\u043b\u0430\u0441\u044c \u0442\u0443\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u0438 \u043e\u0442 jks \u0444\u0430\u0439\u043b\u043e\u0432, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0441\u044b\u043b\u0430\u043b\u0438\u0441\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u0432 NIFI."),(0,i.kt)("p",null,"\u041e\u0447\u0435\u043d\u044c \u043f\u043e\u043c\u043e\u0433\u043b\u0430 \u0441\u0442\u0430\u0442\u044c\u044f: ",(0,i.kt)("a",{parentName:"p",href:"https://www.dreamincode.net/forums/blog/324/entry-5080-apache-nifi-sensitive-value-encryption/"},"Apache Nifi Sensitive Value Encryption")))}y.isMDXComponent=!0}}]);