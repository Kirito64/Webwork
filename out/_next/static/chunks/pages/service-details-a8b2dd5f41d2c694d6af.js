_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47,58],{EhIM:function(e,t,n){"use strict";var a=n("nKUr"),c=n("H+61"),i=n("UlJF"),s=n("7LId"),r=n("VIvw"),o=n("iHvq"),l=n("q1tI"),u=n("YFqc"),d=n.n(u);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var j=function(e){Object(s.a)(n,e);var t=p(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"cta-area-two ptb-100",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"cta-content",children:[Object(a.jsx)("span",{children:"So What is Next?"}),Object(a.jsx)("h3",{children:"Are You Ready? Let's get to work!"})]}),Object(a.jsx)("div",{className:"cta-btn-box",children:Object(a.jsx)(d.a,{href:"/contact",children:Object(a.jsx)("a",{className:"custom-btn",children:"Contact Us"})})})]})})}}]),n}(l.Component);t.a=j},"Fv2/":function(e,t,n){"use strict";var a=n("nKUr"),c=n("H+61"),i=n("UlJF"),s=n("+Css"),r=n("7LId"),o=n("VIvw"),l=n("iHvq"),u=n("cpVT"),d=n("q1tI"),p=n("0Yqi");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(e){Object(r.a)(n,e);var t=j(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(u.a)(Object(s.a)(e),"_isMounted",!1),Object(u.a)(Object(s.a)(e),"state",{display:!1,collapsed:!0}),Object(u.a)(Object(s.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",n=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"navbar",className:"navbar-area navbar-style-2",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(p.a,{href:"/",children:Object(a.jsxs)("a",{className:"navbar-brand",children:[Object(a.jsx)("img",{src:"/images/logo.png",className:"black-logo",alt:"logo"}),Object(a.jsx)("img",{src:"/images/logo-white.png",className:"white-logo",alt:"logo"})]})}),Object(a.jsxs)("button",{onClick:this.toggleNavbar,className:n,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(a.jsx)("span",{className:"icon-bar top-bar"}),Object(a.jsx)("span",{className:"icon-bar middle-bar"}),Object(a.jsx)("span",{className:"icon-bar bottom-bar"})]}),Object(a.jsxs)("div",{className:t,id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/",children:Object(a.jsx)("a",{className:"nav-link",children:"Home"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/about",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"About us"})})}),Object(a.jsxs)("li",{className:"nav-item",children:[Object(a.jsx)(p.a,{href:"/#",children:Object(a.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Portfolio/Backers",Object(a.jsx)("i",{className:"icofont-thin-down"})]})}),Object(a.jsxs)("ul",{className:"dropdown-menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/portfolio",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/portfolio-details",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Portfolio Details"})})})]})]}),Object(a.jsxs)("li",{className:"nav-item",children:[Object(a.jsx)(p.a,{href:"/#",children:Object(a.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Blog ",Object(a.jsx)("i",{className:"icofont-thin-down"})]})}),Object(a.jsxs)("ul",{className:"dropdown-menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/blog",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Blog Grid"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/blog2",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Blog Right Sidebar"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/blog3",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Blog Left Sidebar"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/blog-details",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Blog Details"})})})]})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(p.a,{href:"/contact",activeClassName:"active",children:Object(a.jsx)("a",{className:"nav-link",children:"Contact Us"})})})]}),Object(a.jsx)("div",{className:"others-options",children:Object(a.jsx)(p.a,{href:"/pricing",children:Object(a.jsx)("a",{className:"btn btn-primary",children:"Pitch Us"})})})]})]})})})})}}]),n}(d.Component);t.a=m},Ix5F:function(e,t,n){"use strict";var a=n("nKUr"),c=n("H+61"),i=n("UlJF"),s=n("7LId"),r=n("VIvw"),o=n("iHvq"),l=n("q1tI");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var d=function(e){Object(s.a)(n,e);var t=u(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.BGImage;return Object(a.jsx)("div",{className:"page-title-area ".concat(n),children:Object(a.jsx)("div",{className:"d-table",children:Object(a.jsx)("div",{className:"d-table-cell",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h2",{children:t})})})})})}}]),n}(l.Component);t.a=d},MmvA:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),c=n("H+61"),i=n("UlJF"),s=n("7LId"),r=n("VIvw"),o=n("iHvq"),l=n("q1tI"),u=n("Fv2/"),d=n("Ix5F"),p=n("+Css"),j=n("cpVT"),m=n("60Bi"),h=n.n(m);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var f=function(e){Object(s.a)(n,e);var t=b(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(j.a)(Object(p.a)(e),"state",{isOpen:!1}),Object(j.a)(Object(p.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{className:"services-details-area ptb-100",children:[Object(a.jsx)(h.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"_ysd-zHamjk",onClose:function(){return e.setState({isOpen:!1})}}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(a.jsxs)("div",{className:"services-details-image",children:[Object(a.jsx)("img",{src:"/images/services/single-service.jpg",alt:"image"}),Object(a.jsx)("div",{className:"video-box",children:Object(a.jsx)("div",{onClick:function(t){t.preventDefault(),e.openModal()},className:"video-btn",children:Object(a.jsx)("i",{className:"pe-7s-play"})})})]})}),Object(a.jsx)("div",{className:"col-lg-8 col-md-12",children:Object(a.jsxs)("div",{className:"services-details-desc",children:[Object(a.jsx)("h2",{children:"Services Description"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."}),Object(a.jsx)("p",{children:"ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."}),Object(a.jsx)("p",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter."}),Object(a.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis."})]})}),Object(a.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(a.jsxs)("div",{className:"services-details-info",children:[Object(a.jsx)("h3",{children:"Our Working Process"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}),Object(a.jsx)("li",{children:"Creative Team Sed ut perspiciatis unde omnis iste natus error sit voluptatem."}),Object(a.jsx)("li",{children:"Branding But I must explain to you how all this mistaken idea of denouncing."}),Object(a.jsx)("li",{children:"Clean Code At vero eos et accusamus et iusto odio dignissimos ducimus qui."}),Object(a.jsx)("li",{children:"UX/UI Friendly On the other hand, we denounce with righteous indignation."}),Object(a.jsx)("li",{children:"24/7 Support There are many variations of passages of Lorem Ipsum available."})]})]})})]})})]})})}}]),n}(l.Component),v=n("EhIM"),O=n("g7ta");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var g=function(e){Object(s.a)(n,e);var t=x(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{}),Object(a.jsx)(d.a,{pageTitle:"Mobile App Development",BGImage:"bg-one"}),Object(a.jsx)(f,{}),Object(a.jsx)(v.a,{}),Object(a.jsx)(O.a,{})]})}}]),n}(l.Component);t.default=g},VCL8:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function c(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,r=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?r="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==r){var o=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+o+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=c),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),a.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},zGpI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-details",function(){return n("MmvA")}])}},[["zGpI",1,0,2,3,5]]]);