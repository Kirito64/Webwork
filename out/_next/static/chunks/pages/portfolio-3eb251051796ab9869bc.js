_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"2qu3":function(e,t,r){"use strict";var c=r("oI91"),n=r("/GRZ"),a=r("i2R6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var c=0,n=function(){};return{s:n,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}t.__esModule=!0,t.default=void 0;var j,d=(j=r("q1tI"))&&j.__esModule?j:{default:j},u=r("8L3h"),b=r("jwwS");var h=[],f=[],O=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function p(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(c){var n=m(e[c]);n.loading?t.loading=!0:(t.loaded[c]=n.loaded,t.error=n.error),r.push(n.promise),n.promise.then((function(e){t.loaded[c]=e})).catch((function(e){t.error=e}))}))}catch(c){t.error=c}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function x(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:x,webpack:null,modules:null},t),c=null;function n(){if(!c){var t=new g(e,r);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()}if(!O&&"function"===typeof r.webpack){var a=r.webpack();f.push((function(e){var t,r=o(a);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(-1!==e.indexOf(c))return n()}}catch(s){r.e(s)}finally{r.f()}}))}var s=function(e,t){n();var a=d.default.useContext(b.LoadableContext),s=(0,u.useSubscription)(c);return d.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return s.loading||s.error?d.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:c.retry}):s.loaded?r.render(s.loaded,e):null}),[e,s])};return s.preload=function(){return n()},s.displayName="LoadableComponent",d.default.forwardRef(s)}var g=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return v(m,e)}function w(e,t){for(var r=[];e.length;){var c=e.pop();r.push(c(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}y.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(p,e)},y.preloadAll=function(){return new Promise((function(e,t){w(h).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return O=!0,t()};w(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var N=y;t.default=N},AGzW:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return r("eAkX")}])},EhIM:function(e,t,r){"use strict";var c=r("nKUr"),n=r("H+61"),a=r("UlJF"),s=r("7LId"),i=r("VIvw"),o=r("iHvq"),l=r("q1tI"),j=r("YFqc"),d=r.n(j);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(i.a)(this,r)}}var b=function(e){Object(s.a)(r,e);var t=u(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"cta-area-two ptb-100",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"cta-content",children:[Object(c.jsx)("span",{children:"So What is Next?"}),Object(c.jsx)("h3",{children:"Are You Ready? Let's get to work!"})]}),Object(c.jsx)("div",{className:"cta-btn-box",children:Object(c.jsx)(d.a,{href:"/contact",children:Object(c.jsx)("a",{className:"custom-btn",children:"Contact Us"})})})]})})}}]),r}(l.Component);t.a=b},"Fv2/":function(e,t,r){"use strict";var c=r("nKUr"),n=r("H+61"),a=r("UlJF"),s=r("+Css"),i=r("7LId"),o=r("VIvw"),l=r("iHvq"),j=r("cpVT"),d=r("q1tI"),u=r("0Yqi");function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(l.a)(e);if(t){var n=Object(l.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(o.a)(this,r)}}var h=function(e){Object(i.a)(r,e);var t=b(r);function r(){var e;Object(n.a)(this,r);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(j.a)(Object(s.a)(e),"_isMounted",!1),Object(j.a)(Object(s.a)(e),"state",{display:!1,collapsed:!0}),Object(j.a)(Object(s.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",r=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"navbar",className:"navbar-area navbar-style-2",children:Object(c.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(u.a,{href:"/",children:Object(c.jsxs)("a",{className:"navbar-brand",children:[Object(c.jsx)("img",{src:"/images/logo.png",className:"black-logo",alt:"logo"}),Object(c.jsx)("img",{src:"/images/logo-white.png",className:"white-logo",alt:"logo"})]})}),Object(c.jsxs)("button",{onClick:this.toggleNavbar,className:r,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(c.jsx)("span",{className:"icon-bar top-bar"}),Object(c.jsx)("span",{className:"icon-bar middle-bar"}),Object(c.jsx)("span",{className:"icon-bar bottom-bar"})]}),Object(c.jsxs)("div",{className:t,id:"navbarSupportedContent",children:[Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/",children:Object(c.jsx)("a",{className:"nav-link",children:"Home"})})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/about",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"About us"})})}),Object(c.jsxs)("li",{className:"nav-item",children:[Object(c.jsx)(u.a,{href:"/#",children:Object(c.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Portfolio/Backers",Object(c.jsx)("i",{className:"icofont-thin-down"})]})}),Object(c.jsxs)("ul",{className:"dropdown-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/portfolio",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/portfolio-details",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Portfolio Details"})})})]})]}),Object(c.jsxs)("li",{className:"nav-item",children:[Object(c.jsx)(u.a,{href:"/#",children:Object(c.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Blog ",Object(c.jsx)("i",{className:"icofont-thin-down"})]})}),Object(c.jsxs)("ul",{className:"dropdown-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/blog",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Blog Grid"})})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/blog2",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Blog Right Sidebar"})})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/blog3",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Blog Left Sidebar"})})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/blog-details",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Blog Details"})})})]})]}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.a,{href:"/contact",activeClassName:"active",children:Object(c.jsx)("a",{className:"nav-link",children:"Contact Us"})})})]}),Object(c.jsx)("div",{className:"others-options",children:Object(c.jsx)(u.a,{href:"/pricing",children:Object(c.jsx)("a",{className:"btn btn-primary",children:"Pitch Us"})})})]})]})})})})}}]),r}(d.Component);t.a=h},Ix5F:function(e,t,r){"use strict";var c=r("nKUr"),n=r("H+61"),a=r("UlJF"),s=r("7LId"),i=r("VIvw"),o=r("iHvq"),l=r("q1tI");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(i.a)(this,r)}}var d=function(e){Object(s.a)(r,e);var t=j(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,r=e.BGImage;return Object(c.jsx)("div",{className:"page-title-area ".concat(r),children:Object(c.jsx)("div",{className:"d-table",children:Object(c.jsx)("div",{className:"d-table-cell",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h2",{children:t})})})})})}}]),r}(l.Component);t.a=d},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var c=r("oI91");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=o,t.default=function(e,t){var r=s.default,c={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?c.loader=function(){return e}:"function"===typeof e?c.loader=e:"object"===typeof e&&(c=a(a({},c),e));if(c=a(a({},c),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(c.render=function(t,r){return e.render(r,t)}),e.modules)){r=s.default.Map;var n={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?n[e]=t:n[e]=function(){return t.then((function(e){return e.default||e}))}})),c.loader=n}c.loadableGenerated&&delete(c=a(a({},c),c.loadableGenerated)).loadableGenerated;if("boolean"===typeof c.ssr){if(!c.ssr)return delete c.ssr,o(r,c);delete c.ssr}return r(c)};i(r("q1tI"));var s=i(r("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},eAkX:function(e,t,r){"use strict";r.r(t);var c=r("nKUr"),n=r("H+61"),a=r("UlJF"),s=r("7LId"),i=r("VIvw"),o=r("iHvq"),l=r("q1tI"),j=r("Fv2/"),d=r("Ix5F"),u=r("+Css"),b=r("cpVT"),h=r("YFqc"),f=r.n(h),O=r("Vvt1");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(i.a)(this,r)}}var v=r.n(O)()((function(){return r.e(4).then(r.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),g={loop:!0,nav:!0,dots:!0,autoplayHoverPause:!0,autoplay:!0,margin:20,navText:["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],responsive:{0:{items:1},576:{items:2},1e3:{items:3},1200:{items:4},1800:{items:5}}},y=function(e){Object(s.a)(r,e);var t=x(r);function r(){var e;Object(n.a)(this,r);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(b.a)(Object(u.a)(e),"_isMounted",!1),Object(b.a)(Object(u.a)(e),"state",{display:!1}),e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setState({display:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"case-studies-area ptb-100",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("div",{className:"section-title",children:[Object(c.jsx)("h2",{children:"Our Projects"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),this.state.display?Object(c.jsxs)(v,p(p({className:"work-slides owl-carousel owl-theme"},g),{},{children:[Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work1.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Development"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Designing a better cinema experience"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work2.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Web Design"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Building design process within teams"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work3.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"eCommerce"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"How intercom brings play eCommerce"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work4.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Reactjs"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"How to start a project with Reactjs"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work5.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Angular js"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Examples of different types of sprints"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work6.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"UI/UX Design"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Redesigning the New York times app"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work7.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Graphic Design"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Design the Web, Mobile, and eCommerce"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]}),Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work8.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsx)("a",{children:"Bootstrap"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Redesigning the New York times app"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"Read More"})})]})]})]})):""]})})})}}]),r}(l.Component);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(i.a)(this,r)}}var N=function(e){Object(s.a)(r,e);var t=w(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"case-studies-area ptb-100 bg-fcfbfb",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"section-title",children:[Object(c.jsx)("h2",{children:"Our All Projects"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work1.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"SEO Optimization"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Designing a better cinema experience"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work2.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Digital Marketing"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Building design process within teams"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work3.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Keyword Targeting"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"How intercom brings play into their design process"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work4.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Email Marketing"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Stuck with to-do list, I created a new app for myself"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work5.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Marketing & Reporting"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Examples of different types of sprints"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(c.jsxs)("div",{className:"work-card",children:[Object(c.jsx)("img",{src:"/images/works/work6.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("span",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Development"})})}),Object(c.jsx)("h3",{children:Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{children:"Redesigning the New York times app"})})}),Object(c.jsx)(f.a,{href:"/portfolio-details",children:Object(c.jsx)("a",{className:"custom-btn",children:"View Details"})})]})]})})]}),Object(c.jsx)("div",{className:"view-more-work",children:Object(c.jsx)(f.a,{href:"/portfolio",children:Object(c.jsxs)("a",{className:"btn btn-primary",children:[Object(c.jsx)("i",{className:"icofont-tasks"})," View More"]})})})]})})})}}]),r}(l.Component),k=r("EhIM"),_=r("g7ta");function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(i.a)(this,r)}}var D=function(e){Object(s.a)(r,e);var t=R(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{}),Object(c.jsx)(d.a,{pageTitle:"Our Portfolio",BGImage:"bg-three"}),Object(c.jsx)(y,{}),Object(c.jsx)(N,{}),Object(c.jsx)(k.a,{}),Object(c.jsx)(_.a,{})]})}}]),r}(l.Component);t.default=D},jwwS:function(e,t,r){"use strict";var c;t.__esModule=!0,t.LoadableContext=void 0;var n=((c=r("q1tI"))&&c.__esModule?c:{default:c}).default.createContext(null);t.LoadableContext=n},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}},[["AGzW",1,0,2,3]]]);