(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{2492:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/digital-dev",function(){return t(3181)}])},638:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(6856).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(A,e){var t=i.default,s=(null==e?void 0:e.suspense)?{}:{loading:function(A){A.error,A.isLoading;return A.pastDelay,null}};r(A,Promise)?s.loader=function(){return A}:"function"===typeof A?s.loader=A:"object"===typeof A&&(s=a({},s,A));!1;(s=a({},s,e)).suspense&&(delete s.ssr,delete s.loading);s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,o(t,s);delete s.ssr}return t(s)},e.noSSR=o;var a=t(6495).Z,s=t(2648).Z,i=(s(t(7294)),s(t(4302)));function o(A,e){return delete e.webpack,delete e.modules,A(e)}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},6319:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var r=(0,t(2648).Z)(t(7294)).default.createContext(null);e.LoadableContext=r},4302:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(9658).Z,a=t(7222).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=t(6495).Z,i=(0,t(2648).Z)(t(7294)),o=t(6319),n=t(7294).useSyncExternalStore,l=[],c=[],h=!1;function d(A){var e=A(),t={loading:!0,loaded:null,error:null};return t.promise=e.then((function(A){return t.loading=!1,t.loaded=A,A})).catch((function(A){throw t.loading=!1,t.error=A,A})),t}var u=function(){function A(e,t){r(this,A),this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(A,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var A=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,t=this._opts;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){A._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){A._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){A._update({}),A._clearTimeouts()})).catch((function(e){A._update({}),A._clearTimeouts()})),this._update({})}},{key:"_update",value:function(A){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},A),this._callbacks.forEach((function(A){return A()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(A){var e=this;return this._callbacks.add(A),function(){e._callbacks.delete(A)}}}]),A}();function g(A){return function(A,e){var t=function(){if(!l){var e=new u(A,a);l={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return l.promise()},r=function(){t();var A=i.default.useContext(o.LoadableContext);A&&Array.isArray(a.modules)&&a.modules.forEach((function(e){A(e)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);a.suspense&&(a.lazy=i.default.lazy(a.loader));var l=null;if(!h){var d=a.webpack?a.webpack():a.modules;d&&c.push((function(A){var e=!0,r=!1,a=void 0;try{for(var s,i=d[Symbol.iterator]();!(e=(s=i.next()).done);e=!0){var o=s.value;if(-1!==A.indexOf(o))return t()}}catch(n){r=!0,a=n}finally{try{e||null==i.return||i.return()}finally{if(r)throw a}}}))}var g=a.suspense?function(A,e){return r(),i.default.createElement(a.lazy,s({},A,{ref:e}))}:function(A,e){r();var t=n(l.subscribe,l.getCurrentValue,l.getCurrentValue);return i.default.useImperativeHandle(e,(function(){return{retry:l.retry}}),[]),i.default.useMemo((function(){return t.loading||t.error?i.default.createElement(a.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:l.retry}):t.loaded?i.default.createElement((e=t.loaded)&&e.__esModule?e.default:e,A):null;var e}),[A,t])};return g.preload=function(){return t()},g.displayName="LoadableComponent",i.default.forwardRef(g)}(d,A)}function E(A,e){for(var t=[];A.length;){var r=A.pop();t.push(r(e))}return Promise.all(t).then((function(){if(A.length)return E(A,e)}))}g.preloadAll=function(){return new Promise((function(A,e){E(l).then(A,e)}))},g.preloadReady=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var t=function(){return h=!0,e()};E(c,A).then(t,t)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var m=g;e.default=m},3085:function(A,e,t){"use strict";t.d(e,{e:function(){return i}});var r=t(5893),a=t(7955),s=t.n(a),i=(t(7294),t(1140),t(4529),t(1163),function(){return(0,r.jsx)("div",{className:s().custom_cursor_2+" custom-cursor-2","data-invert":!0})})},2677:function(A,e,t){"use strict";t.d(e,{F:function(){return i}});var r=t(5893),a=t(3214),s=t.n(a),i=function(){return(0,r.jsx)("div",{className:s().custom_cursor+" custom-cursor"})}},5192:function(A,e,t){"use strict";t.d(e,{$:function(){return l}});var r=t(5893),a=t(63),s=t(7346),i=t(2362),o=t(1883),n=t.n(o),l=function(A){var e=A.className;return(0,r.jsx)("footer",{className:(0,i.Sh)(n().footer,e),children:(0,r.jsxs)(s.x,{size:"s",align:"center",children:[(0,r.jsx)("span",{className:n().date,children:"\xa9 ".concat((new Date).getFullYear()," Chase Roll. \u200e")}),(0,r.jsx)(a.r,{secondary:!0,className:n().link,href:"/humans.txt",target:"_self",children:"Built By Yours Truely."})]})})}},63:function(A,e,t){"use strict";t.d(e,{r:function(){return g}});var r=t(1799),a=t(9396),s=t(9534),i=t(5893),o=t(1664),n=t.n(o),l=t(7294),c=t(2362),h=t(8469),d=t.n(h),u=["txt","png","jpg"];var g=(0,l.forwardRef)((function(A,e){var t=A.href,a=(0,s.Z)(A,["href"]);return function(A){var e=u.includes(null===A||void 0===A?void 0:A.split(".").pop());return(null===A||void 0===A?void 0:A.includes("://"))||"#"===(null===A||void 0===A?void 0:A[0])||e}(t)?(0,i.jsx)(E,(0,r.Z)({href:t,ref:e},a)):(0,i.jsx)(n(),{passHref:!0,href:t,scroll:!1,children:(0,i.jsx)(E,(0,r.Z)({ref:e},a))})})),E=(0,l.forwardRef)((function(A,e){var t=A.rel,o=A.target,n=A.children,l=A.secondary,h=A.className,u=A.href,g=(0,s.Z)(A,["rel","target","children","secondary","className","href"]),E=null===u||void 0===u?void 0:u.includes("://"),m=t||(E?"noreferrer noopener":void 0),z=o||(E?"_blank":void 0);return(0,i.jsx)("a",(0,a.Z)((0,r.Z)({className:(0,c.Sh)(d().link,h),"data-secondary":l,rel:m,href:u,target:z,ref:e},g),{children:n}))}))},5633:function(A,e,t){"use strict";t.d(e,{h:function(){return c}});var r=t(5893),a=t(9008),s=t.n(a),i=t(4155).env.NEXT_PUBLIC_WEBSITE_URL,o="Chase Roll",n="@chaseroll",l="".concat(i,"/social-image.png"),c=function(A){var e=A.title,t=A.description,a=A.prefix,c=void 0===a?o:a,h=A.ogImage,d=void 0===h?l:h,u=[c,e].filter(Boolean).join(" | ");return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:u},"title"),(0,r.jsx)("meta",{name:"description",content:t},"description"),(0,r.jsx)("meta",{name:"author",content:o}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"og:image:alt",content:"Banner for the site"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,r.jsx)("meta",{property:"og:image:height",content:"675"}),(0,r.jsx)("meta",{property:"og:title",content:u}),(0,r.jsx)("meta",{property:"og:site_name",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:i}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:title",content:u}),(0,r.jsx)("meta",{name:"twitter:site",content:n}),(0,r.jsx)("meta",{name:"twitter:creator",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:d})]})}},3181:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var r,a=t(5893),s={src:"/_next/static/media/volkihar-background-large.30c779ff.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAABAwACBREhMlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAwDAQACEQMRAD8AmmKcxorj23tdDeNE9T6IiI2ATsWlG//Z",blurWidth:8,blurHeight:5},i={src:"/_next/static/media/volkihar-background-placeholder.642594b4.jpg",height:18,width:32,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAwECQQQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAiER/9oADAMBAAIRAxEAPwCaeU5jojhZabJvk4ABpXVodPT/2Q==",blurWidth:8,blurHeight:5},o={src:"/_next/static/media/volkihar-background.a5c1feb4.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAwECBREhMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAwDAQACEQMRAD8AmmKcxsVx7bTdDeNb6n2AANgE7Fpv/9k=",blurWidth:8,blurHeight:5},n={src:"/_next/static/media/volkihar-banner-large.660b04f7.jpg",height:600,width:1100,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDESGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Akk2y9MqyrOtu530ADUv/2Q==",blurWidth:8,blurHeight:4},l={src:"/_next/static/media/volkihar-banner-placeholder.740a91b3.jpg",height:6,width:11,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIRA//EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AldZXHGkABS//2Q==",blurWidth:8,blurHeight:4},c={src:"/_next/static/media/volkihar-banner.97f73d16.jpg",height:436,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAwADAAAAAAAAAAAAAAABAgADERIhkf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AJIbS9RVlU6eW537ERGpf//Z",blurWidth:8,blurHeight:4},h={src:"/_next/static/media/volkihar-book-large.a0bd205b.png",height:600,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEWznnV/a0aVf1qjjmKRe1SwnXbBrYWXg1uciWOplWqwnXijjGSlkm+ahWB1ZEiVgF2UgmGDcE+jjl6giF7OuY+vl2i5pXvuDYrgAAAAFHRSTlP+wP7T6MD+rsn9uPig37RXxvp6/RFmerwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicBcEJAsAQDADBjStBqwfx/6ea4Wk5Zos/16KW4IrSK18Q3lXY041hqndKcgAfnQFqcWKSPAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},d={src:"/_next/static/media/volkihar-book-placeholder.8f07a611.png",height:20,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEW1n3W+sJa3poa5qIW2pILCrYSOdlCsmXSpk22mjWSrlm27qoWxon66q4nBsY7GuZzFt5u+r5Opj1/Ktoy9HbpOAAAAEnRSTlP+bp+g1P38o8H8+uHAveGMoaowH0QBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBhwEAIAjAsDoBt/j/ryaEmySKbM6DYr6IWKPWTHoFzDshz6Gq8gEa1wEwIn468gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},u={src:"/_next/static/media/volkihar-book.f802d435.png",height:300,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEW0n3aYgVejjmKZg1/BrYWSf1uxnneqlGiolnColXGYiGmZhV6Yg1ejjGShj2myn3yzoHqch16Tf1ugjGWCb06hjF+jjmDKtov7dpXCAAAAF3RSTlP+/tPk/sDA/sqws9+p+Fegt+v8wvquetJTzE8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicBcGBAoAQDEDBh7GhUpT9/592x3WXWFbcDEdl6kflVN6ZMRcIajSrR09P/gEj7QF9+Ze1BwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},g={src:"/_next/static/media/volkihar-enderal-large.d5fb3faf.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABAwQDAAAAAAAAAAAAAAADAAECBAURIkFRgf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACESEx/9oADAMBAAIRAxEAPwCc19zJW2wIDiHN4PJ4ldt2zxnrxERHAclrKu5//9k=",blurWidth:8,blurHeight:5},E={src:"/_next/static/media/volkihar-enderal-logo-large.a48b2c89.png",height:400,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAS1BMVEVMaXEWEQw5KBwsIhsaEw4rHxYWEAwtJBwICAhENScbFxInHBYgGBITCwjcxKYsIRlyXEdVOyojFgy4oIZOOSpgTT1aRTMdFA+JcFklAShTAAAAF3RSTlMAT62MgOKzHQxCNy2n6/nB+WxmvLmiu7BmiM4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicHcVJEoAgDADBYU3iBgqK/3+pJX1pELMTkPvpxUHw7fB5JVz1Tc5Q2Ufmt41lHpPOJSp8O2QBkFdz7FQAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},m={src:"/_next/static/media/volkihar-enderal-logo-placeholder.9bdfe9da.png",height:20,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAARVBMVEUhGRIiGBExJRsAAAAaEQkuIRg1Jx4kEw4gFhJMaXGMeGJOPjBsWUYfFxAkGRUvJBtGNyxoVkYtIhpYRjhlVEJAMydZRTfWGJRNAAAAF3RSTlNmkz8DFStWCDQAx5SbuXjhuey4sMuGcsYpGtEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicBcGHAYAgEACxA74Cin3/UU1wrWbqxDfnMIHR+70HvM95EIRdq4TgWjakkUKpnqRXtOUPO7kBrC4EYgYAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},z={src:"/_next/static/media/volkihar-enderal-logo.d780cfaa.png",height:200,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAASFBMVEVMaXEXEAwbEw5ANCcdFQ8eFhEdFQ8kGxQqJRofEBA+Kx1TPSwfFREyJBlALyIsIRltV0S8oodiTT87LyU3JRpSPy2FbVbawqVsXTDUAAAAFnRSTlMAsek5TIL+IhIFaL2k2qXB/buhja9ETz9DcAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwdx1sWgCAIQMGrgoBW9m7/O+3U/A14uRpge+9D4Di3Z0mGtvWeRQjLNfGZaiEINPt/U4cXOowBf7AyQ9IAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},O={src:"/_next/static/media/volkihar-enderal-placeholder.913b13aa.jpg",height:45,width:80,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAABBQEBAAAAAAAAAAAAAAACAAEDBAURYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8AgLeiVjKGtPCEjsfRkduEPiIiACo09b//2Q==",blurWidth:8,blurHeight:5},w={src:"/_next/static/media/volkihar-enderal.75967666.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABAwQDAAAAAAAAAAAAAAADAAECBAUREiJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACESEx/9oADAMBAAIRAxEAPwCdV9zJWWwIDjHPR5PErtzbPWfEREcByWsq7n//2Q==",blurWidth:8,blurHeight:5},B=t(7294);function f(){return f=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A},f.apply(null,arguments)}var x=A=>B.createElement("svg",f({width:532,height:344,viewBox:"0 0 532 344"},A),r||(r=B.createElement("g",{fill:"none",fillRule:"evenodd"},B.createElement("path",{d:"M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",fill:"currentColor"}),B.createElement("path",{d:"M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",fill:"rgb(var(--rgbPrimary))",fillRule:"nonzero"}),B.createElement("path",{d:"M228.5 342.162h75.55",stroke:"rgb(var(--rgbPrimary))",strokeWidth:2,strokeLinecap:"square"})))),D={src:"/_next/static/media/volkihar-slide-1-large.9687c9ba.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAEAAgIDAQAAAAAAAAAAAAABAAMCEQQSIUH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCD51WGF1zgIV9U36uw+xEQRSv/2Q==",blurWidth:8,blurHeight:5},p={src:"/_next/static/media/volkihar-slide-1.20ed7eed.jpg",height:540,width:960,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAEAAwEAAwAAAAAAAAAAAAABAAIDEQQhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEQMRAD8AhPOypTbZoIZtbHfa9D7ERDGRv//Z",blurWidth:8,blurHeight:5},v={src:"/_next/static/media/volkihar-slide-2-large.1af069e0.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBQADAAAAAAAAAAAAAAAAAQIDBBESIZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AJfZdteCJU6RnLfAAOhH/9k=",blurWidth:8,blurHeight:5},b={src:"/_next/static/media/volkihar-slide-2.c361c505.jpg",height:540,width:960,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAAAAQIDBBESIXHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AmFl2a0ESpwjNs+6ABShH/9k=",blurWidth:8,blurHeight:5},Q={src:"/_next/static/media/volkihar-slide-3-large.97498b92.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIDBBExIf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIhA//aAAwDAQACEQMRAD8Am9uJXDHrceJb9W+gAZ0qDkLWymz/2Q==",blurWidth:8,blurHeight:5},C={src:"/_next/static/media/volkihar-slide-3.515264a1.jpg",height:540,width:960,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQMEESEC/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAQADAQAAAAAAAAAAAAAAAAEAAiED/9oADAMBAAIRAxEAPwCby1I/FeNrqS3q0ADOlQchqqmz/9k=",blurWidth:8,blurHeight:5},j={src:"/_next/static/media/volkihar-slide-placeholder.57921ac6.jpg",height:9,width:16,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAACAgMAAAAAAAAAAAAAAAAAAgMSAQQR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwCD3YlSVq45UABjI3//2Q==",blurWidth:8,blurHeight:5},I=t(8526),S=t(5192),k=t(1424),y=t(5633),R=t(2045),_=t(5152),F=t.n(_),M=t(2362),L=t(6927),U=t.n(L),H=t(3085),P=t(2677),J=F()((function(){return Promise.all([t.e(737),t.e(402),t.e(654)]).then(t.bind(t,1654)).then((function(A){return A.Carousel}))}),{loadableGenerated:{webpack:function(){return[1654]}}}),V=F()((function(){return Promise.all([t.e(737),t.e(402),t.e(977)]).then(t.bind(t,2659)).then((function(A){return A.Armor}))}),{loadableGenerated:{webpack:function(){return[2659]}}}),N="Digital Development",K="My typical digital project is Volkihar Knight.A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.",W=["3D Modelling","Texturing","Graphic Design"];function T(){return(0,B.useEffect)((function(){var A=function(){var A=document.querySelector(".custom-cursor"),e=document.querySelector(".custom-cursor-2"),t="light"!==document.body.getAttribute("data-theme");A.style.backgroundColor=t?"white":"black";var a=t?"rgba(255, 255, 255, ".concat(r,")"):"rgba(0, 0, 0, ".concat(r,")");e.style.borderColor=a},e=function(A,e,t){return A+(e-A)*t},t=.15,r=1,a=1,s=1,i=1,o=1,n=1,l=0,c=0,h=0,d=0,u=0,g=0,E=window.innerWidth;window.addEventListener("mousemove",(function(A){var e=document.querySelector(".custom-cursor-2");document.querySelector(".custom-cursor").style.opacity=1,e.style.opacity=1;var t=window.innerWidth/E;l=A.clientX-16*t,c=A.clientY-16,E=window.innerWidth})),function(){var A=document.querySelectorAll("a"),e=document.querySelectorAll("button");A.forEach((function(A){A.addEventListener("mouseenter",(function(){!0,n=1.5,i=15.5,a=.5})),A.addEventListener("mouseleave",(function(){!1,n=1,i=1,a=1}))})),e.forEach((function(A){A.addEventListener("mouseenter",(function(){!0,n=1.5,i=15.5,a=.5})),A.addEventListener("mouseleave",(function(){!1,n=1,i=1,a=1}))}))}(),A(),function E(){if(!window.angular){var m=document.querySelector(".custom-cursor"),z=document.querySelector(".custom-cursor-2");h=e(h,l,.6),d=e(d,c,.6),u=e(u,l,3*t),g=e(g,c,3*t);var O="translate3D(".concat(h,"px, ").concat(d,"px, 0) scale(1.0)");m.style.transform=O;o=e(o,n,.15),s=e(s,i,t),r=e(r,a,t);var w="translate3D(".concat(u,"px, ").concat(g,"px, 0) scale(").concat(o,")");z.style.transform=w,z.style.borderWidth="".concat(s,"px"),A(),requestAnimationFrame(E)}}()}),[]),(0,a.jsxs)(B.Fragment,{children:[(0,a.jsx)(H.e,{}),(0,a.jsx)(P.F,{}),(0,a.jsx)(y.h,{title:N,prefix:"Projects",description:K}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            [data-theme='dark'] {\n              --rgbPrimary: 240 211 150;\n              --rgbAccent: 240 211 150;\n            }\n            [data-theme='light'] {\n              --rgbPrimary: 134 99 23;\n              --rgbAccent: 134 99 23;\n            }\n          "}}),(0,a.jsxs)(R.XR,{children:[(0,a.jsx)(R.FV,{srcSet:[o,s],placeholder:i,opacity:.5}),(0,a.jsx)(R.T4,{title:N,description:K,linkLabel:"Get the mod",url:"https://www.nexusmods.com/skyrimspecialedition/mods/4806/",roles:W}),(0,a.jsx)(R.II,{children:(0,a.jsx)(R.IG,{children:(0,a.jsx)(R.KZ,{srcSet:[c,n],placeholder:l,alt:"A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",sizes:"(max-width: ".concat(M.BC.mobile,"px) 500px, (max-width: ").concat(M.BC.tablet,"px) 800px, 1000px")})})}),(0,a.jsx)(R.II,{children:(0,a.jsx)(R.IG,{children:(0,a.jsx)(k.E,{srcSet:[u,h],placeholder:d,alt:"A book containing a sketch depicting the logo and armor",sizes:"(max-width: ".concat(M.BC.mobile,"px) 90vw, (max-width: ").concat(M.BC.tablet,"px) 80vw, 70vw")})})}),(0,a.jsx)(R.II,{children:(0,a.jsxs)(R.nU,{children:[(0,a.jsx)("div",{className:U().armor,children:(0,a.jsx)(V,{alt:"3D model of the Volkihar Knight armor"})}),(0,a.jsxs)("div",{className:U().textSection,children:[(0,a.jsx)(R.d,{children:"Armor design"}),(0,a.jsx)(R.Hr,{children:"As a player I noticed there weren\u2019t any heavy armor options for the Volkihar faction. This kinda sucks when you\u2019ve specialised in heavy armor and decide to join the faction and discover they all wear light armor."}),(0,a.jsx)(R.Hr,{children:"My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim\u2019s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop."})]})]})}),(0,a.jsx)(R.II,{children:(0,a.jsxs)(R.IG,{children:[(0,a.jsx)("div",{className:U().logoContainer,children:(0,a.jsx)(x,{role:"img","aria-label":"The Volkihar Knight logo, a monogram using the letters 'V' and 'K"})}),(0,a.jsxs)(R.ee,{center:!0,noMargin:!0,children:[(0,a.jsx)(R.d,{children:"Identity design"}),(0,a.jsx)(R.Hr,{children:"The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim\u2019s game title wordmark."})]})]})}),(0,a.jsx)(R.II,{children:(0,a.jsx)(R.IG,{children:(0,a.jsx)(J,{placeholder:j,images:[{srcSet:[p,D],sizes:"(max-width: ".concat(M.BC.mobile,"px) 100vw, (max-width: ").concat(M.BC.tablet,"px) 100vw, 1096px"),alt:"A female character wearing the black coloured armor set."},{srcSet:[b,v],sizes:"(max-width: ".concat(M.BC.mobile,"px) 100vw, (max-width: ").concat(M.BC.tablet,"px) 100vw, 1096px"),alt:"A close up of the custom gauntlets design."},{srcSet:[C,Q],sizes:"(max-width: ".concat(M.BC.mobile,"px) 100vw, (max-width: ").concat(M.BC.tablet,"px) 100vw, 1096px"),alt:"A female character wielding a sword and wearing the red coloured armor."}],width:1920,height:1080})})}),(0,a.jsx)(R.II,{backgroundElement:(0,a.jsx)(k.E,{srcSet:[w,g],placeholder:O,alt:"A promotional image from Enderal showing several characters in the game overlooking a distant city.",sizes:"100vw"}),children:(0,a.jsx)(R.IG,{children:(0,a.jsxs)(R.ee,{center:!0,centerMobile:!0,noMargin:!0,children:[(0,a.jsx)(k.E,{srcSet:[z,E],placeholder:m,alt:"The Enderal game logo",sizes:"(max-width: ".concat(M.BC.mobile,"px) 100vw, (max-width: ").concat(M.BC.tablet,"px) 100vw, 220px"),style:{maxWidth:220,width:"100%",marginBottom:30}}),(0,a.jsx)(R.d,{children:"Featured in Enderal"}),(0,a.jsx)(R.Hr,{children:"I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set."}),(0,a.jsx)(I.z,{secondary:!0,iconHoverShift:!0,icon:"chevronRight",href:"https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",children:"View on Steam"})]})})})]}),(0,a.jsx)(S.$,{})]})}},7955:function(A){A.exports={custom_cursor_2:"CustomCursor_custom_cursor_2__AmFgp"}},3214:function(A){A.exports={custom_cursor:"CustomCursorCore_custom_cursor__1FQ4I"}},1883:function(A){A.exports={footer:"Footer_footer__nKPS_",link:"Footer_link__2Y2qR",date:"Footer_date__d0nD9"}},8469:function(A){A.exports={link:"Link_link__1F_mp"}},6927:function(A){A.exports={textSection:"VolkiharKnight_textSection__HOSXl",logoContainer:"VolkiharKnight_logoContainer__ZbZyd",armor:"VolkiharKnight_armor__Uo9IJ"}},5152:function(A,e,t){A.exports=t(638)}},function(A){A.O(0,[45,774,888,179],(function(){return e=2492,A(A.s=e);var e}));var e=A.O();_N_E=e}]);