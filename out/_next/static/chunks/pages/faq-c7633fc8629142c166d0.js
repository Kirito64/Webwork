_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{EhIM:function(e,t,n){"use strict";var r=n("nKUr"),a=n("H+61"),c=n("UlJF"),i=n("7LId"),o=n("VIvw"),s=n("iHvq"),l=n("q1tI"),d=n("YFqc"),u=n.n(d);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var f=function(e){Object(i.a)(n,e);var t=p(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"cta-area-two ptb-100",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"cta-content",children:[Object(r.jsx)("span",{children:"So What is Next?"}),Object(r.jsx)("h3",{children:"Are You Ready? Let's get to work!"})]}),Object(r.jsx)("div",{className:"cta-btn-box",children:Object(r.jsx)(u.a,{href:"/contact",children:Object(r.jsx)("a",{className:"custom-btn",children:"Contact Us"})})})]})})}}]),n}(l.Component);t.a=f},"Fv2/":function(e,t,n){"use strict";var r=n("nKUr"),a=n("H+61"),c=n("UlJF"),i=n("+Css"),o=n("7LId"),s=n("VIvw"),l=n("iHvq"),d=n("cpVT"),u=n("q1tI"),p=n("0Yqi");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(o.a)(n,e);var t=f(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c)),Object(d.a)(Object(i.a)(e),"_isMounted",!1),Object(d.a)(Object(i.a)(e),"state",{display:!1,collapsed:!0}),Object(d.a)(Object(i.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",n=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{id:"navbar",className:"navbar-area navbar-style-2",children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(p.a,{href:"/",children:Object(r.jsxs)("a",{className:"navbar-brand",children:[Object(r.jsx)("img",{src:"/images/logo.png",className:"black-logo",alt:"logo"}),Object(r.jsx)("img",{src:"/images/logo-white.png",className:"white-logo",alt:"logo"})]})}),Object(r.jsxs)("button",{onClick:this.toggleNavbar,className:n,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(r.jsx)("span",{className:"icon-bar top-bar"}),Object(r.jsx)("span",{className:"icon-bar middle-bar"}),Object(r.jsx)("span",{className:"icon-bar bottom-bar"})]}),Object(r.jsxs)("div",{className:t,id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/",children:Object(r.jsx)("a",{className:"nav-link",children:"Home"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/about",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"About us"})})}),Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsx)(p.a,{href:"/#",children:Object(r.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Portfolio/Backers",Object(r.jsx)("i",{className:"icofont-thin-down"})]})}),Object(r.jsxs)("ul",{className:"dropdown-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/portfolio",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/portfolio-details",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Portfolio Details"})})})]})]}),Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsx)(p.a,{href:"/#",children:Object(r.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Blog ",Object(r.jsx)("i",{className:"icofont-thin-down"})]})}),Object(r.jsxs)("ul",{className:"dropdown-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/blog",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Blog Grid"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/blog2",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Blog Right Sidebar"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/blog3",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Blog Left Sidebar"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/blog-details",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Blog Details"})})})]})]}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.a,{href:"/contact",activeClassName:"active",children:Object(r.jsx)("a",{className:"nav-link",children:"Contact Us"})})})]}),Object(r.jsx)("div",{className:"others-options",children:Object(r.jsx)(p.a,{href:"/pricing",children:Object(r.jsx)("a",{className:"btn btn-primary",children:"Pitch Us"})})})]})]})})})})}}]),n}(u.Component);t.a=b},Ix5F:function(e,t,n){"use strict";var r=n("nKUr"),a=n("H+61"),c=n("UlJF"),i=n("7LId"),o=n("VIvw"),s=n("iHvq"),l=n("q1tI");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var u=function(e){Object(i.a)(n,e);var t=d(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.BGImage;return Object(r.jsx)("div",{className:"page-title-area ".concat(n),children:Object(r.jsx)("div",{className:"d-table",children:Object(r.jsx)("div",{className:"d-table-cell",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h2",{children:t})})})})})}}]),n}(l.Component);t.a=u},csvi:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("H+61"),c=n("UlJF"),i=n("7LId"),o=n("VIvw"),s=n("iHvq"),l=n("q1tI"),d=n("Fv2/"),u=n("Ix5F");function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,c=t.allowMultipleExpanded,i=void 0!==c&&c,o=t.allowZeroExpanded,s=void 0!==o&&o;p(this,e),j(this,"expanded",void 0),j(this,"allowMultipleExpanded",void 0),j(this,"allowZeroExpanded",void 0),j(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(I(n.expanded),[e]):[e]})})),j(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),j(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),j(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),j(this,"getHeadingAttributes",(function(){return{role:"heading"}})),j(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),j(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),j(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),j(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=s},C=Object(l.createContext)(null),D=function(e){v(n,e);var t=E(n);function n(){var e;p(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return j(y(e=t.call.apply(t,[this].concat(a))),"state",new P({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),j(y(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),j(y(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),j(y(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),j(y(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),j(y(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),j(y(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return b(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(l.createElement)(C.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(l.PureComponent);j(D,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var R,S=function(e){v(n,e);var t=E(n);function n(){var e;p(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return j(y(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return b(n,[{key:"render",value:function(){return Object(l.createElement)(C.Consumer,null,this.renderChildren)}}]),n}(l.PureComponent),_=function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,a=e.allowZeroExpanded,c=e.onChange,i=e.preExpanded,o=g(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(l.createElement)(D,{preExpanded:i,allowMultipleExpanded:r,allowZeroExpanded:a,onChange:c},Object(l.createElement)("div",m({"data-accordion-component":"Accordion",className:n},o)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(R||(R={}));var M=R,B=0;var L=/[\u0009\u000a\u000c\u000d\u0020]/g;function H(e){return""!==e&&!L.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var q=Object(l.createContext)(null),T=function(e){var t=e.children,n=e.uuid,r=e.accordionContext,a=e.dangerouslySetExpanded,c=function(){r.toggleExpanded(n)},i=function(e){var r=null!==a&&void 0!==a?a:e.isItemExpanded(n),i=e.isItemDisabled(n),o=e.getPanelAttributes(n,a),s=e.getHeadingAttributes(n),d=e.getButtonAttributes(n,a);return Object(l.createElement)(q.Provider,{value:{uuid:n,expanded:r,disabled:i,toggleExpanded:c,panelAttributes:o,headingAttributes:s,buttonAttributes:d}},t)};return Object(l.createElement)(S,null,i)},U=function(e){return Object(l.createElement)(S,null,(function(t){return Object(l.createElement)(T,m({},e,{accordionContext:t}))}))},F=function(e){var t=e.children,n=function(e){return e?t(e):null};return Object(l.createElement)(q.Consumer,null,n)},Z=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,r=e.className,a=void 0===r?"accordion__item":r,c=e.activeClassName,i=g(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),o=N(Object(l.useState)(function(){var e=B;return B+=1,"raa-".concat(e)}()),1)[0],s=t||o,d=function(e){var t=e.expanded&&c?c:a;return Object(l.createElement)("div",m({"data-accordion-component":"AccordionItem",className:t},i))};return H(s),i.id&&H(i.id),Object(l.createElement)(U,{uuid:s,dangerouslySetExpanded:n},Object(l.createElement)(F,null,d))};function V(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:V(e.parentElement))}function Y(e){var t=V(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}Z.displayName=M.AccordionItem;var J="End",K="Enter",W="Home",G=" ",Q="Spacebar",X="ArrowUp",$="ArrowDown",z="ArrowLeft",ee="ArrowRight",te=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,a=g(e,["toggleExpanded","className"]);return a.id&&H(a.id),Object(l.createElement)("div",m({className:r},a,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==K&&n!==G&&n!==Q||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case W:e.preventDefault(),function(e){var t=(Y(e)||[])[0];t&&t.focus()}(e.target);break;case J:e.preventDefault(),function(e){var t=Y(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case z:case X:e.preventDefault(),function(e){var t=Y(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case ee:case $:e.preventDefault(),function(e){var t=Y(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},ne=function(e){return Object(l.createElement)(F,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(l.createElement)(te,m({toggleExpanded:n},e,r))}))},re=function(e){v(n,e);var t=E(n);function n(){var e;p(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return j(y(e=t.call.apply(t,[this].concat(a))),"ref",void 0),j(y(e),"setRef",(function(t){e.ref=t})),e}return b(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(l.createElement)("div",m({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(l.PureComponent);j(re,"defaultProps",{className:"accordion__heading","aria-level":3});var ae=function(e){return Object(l.createElement)(F,null,(function(t){var n=t.headingAttributes;return e.id&&H(e.id),Object(l.createElement)(re,m({},e,n))}))};ae.displayName=M.AccordionItemHeading;var ce=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,a=g(e,["className","id"]),c=function(e){var t=e.panelAttributes;return r&&H(r),Object(l.createElement)("div",m({"data-accordion-component":"AccordionItemPanel",className:n},a,t))};return Object(l.createElement)(F,null,c)};function ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var oe=function(e){Object(i.a)(n,e);var t=ie(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"faq-area ptb-100",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"faq-img",children:Object(r.jsx)("img",{src:"/images/faq-img.jpg",alt:"Image"})})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"faq-accordion",children:Object(r.jsxs)(_,{allowZeroExpanded:!0,preExpanded:["a"],children:[Object(r.jsxs)(Z,{uuid:"a",children:[Object(r.jsx)(ae,{children:Object(r.jsx)(ne,{children:"What access do I have on the free plan?"})}),Object(r.jsx)(ce,{children:Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."})})]}),Object(r.jsxs)(Z,{uuid:"b",children:[Object(r.jsx)(ae,{children:Object(r.jsx)(ne,{children:"What access do I have on a free trial?"})}),Object(r.jsx)(ce,{children:Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."})})]}),Object(r.jsxs)(Z,{uuid:"c",children:[Object(r.jsx)(ae,{children:Object(r.jsx)(ne,{children:"Does the price go up as my team gets larger?"})}),Object(r.jsx)(ce,{children:Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."})})]}),Object(r.jsxs)(Z,{uuid:"d",children:[Object(r.jsx)(ae,{children:Object(r.jsx)(ne,{children:"How can I cancel/pause my subscription?"})}),Object(r.jsx)(ce,{children:Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."})})]}),Object(r.jsxs)(Z,{uuid:"e",children:[Object(r.jsx)(ae,{children:Object(r.jsx)(ne,{children:"Can I pay via an invoice?"})}),Object(r.jsx)(ce,{children:Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."})})]})]})})})]})})})})}}]),n}(l.Component);function se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var le=function(e){Object(i.a)(n,e);var t=se(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"contact-form",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"Ask Your Questions"}),Object(r.jsx)("form",{id:"contactForm",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",placeholder:"Your Name",required:!0})})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",placeholder:"Your Email",required:!0})})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",name:"phone_number",id:"phone_number",className:"form-control",placeholder:"Phone",required:!0})})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",placeholder:"Subject",required:!0})})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{name:"message",className:"form-control",id:"message",rows:"8",placeholder:"Your Message",required:!0})})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})})]})})]})})})}}]),n}(l.Component),de=n("EhIM"),ue=n("g7ta");function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var fe=function(e){Object(i.a)(n,e);var t=pe(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(u.a,{pageTitle:"Frequently Asked Questions",BGImage:"bg-one"}),Object(r.jsx)(oe,{}),Object(r.jsx)("div",{className:"pb-100",children:Object(r.jsx)(le,{})}),Object(r.jsx)(de.a,{}),Object(r.jsx)(ue.a,{})]})}}]),n}(l.Component);t.default=fe},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("csvi")}])}},[["l//U",1,0,2,3]]]);