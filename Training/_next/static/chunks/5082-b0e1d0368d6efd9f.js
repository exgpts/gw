(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5082],{6187:function(e,s,t){"use strict";var n=t(4111),r=t(1438),a=t(2951),i=t(8029),c=t(460),l=t(5893),o=t(7294),d=t(5697),u=t.n(d),m={from:u().number,to:u().number.isRequired,speed:u().number.isRequired,delay:u().number,onComplete:u().func,digits:u().number,className:u().string,tagName:u().string,children:u().func,easing:u().func,position:u().shape({height:u().number,startY:u().number})},h=function(e){(0,i.Z)(t,e);var s=(0,c.Z)(t);function t(e){var a;(0,r.Z)(this,t),a=s.call(this,e);var i=e.from;return a.state={counter:i,restart:!1},a.start=a.start.bind((0,n.Z)(a)),a.clear=a.clear.bind((0,n.Z)(a)),a.next=a.next.bind((0,n.Z)(a)),a.updateCounter=a.updateCounter.bind((0,n.Z)(a)),a}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.start(),window.addEventListener("scroll",(function(){if(e.props.position){var s=e.props.position,t=s.from,n=s.to;window.scrollY>t&&window.scrollY<n&&e.state.restart&&(e.start(),e.setState({restart:!1})),window.scrollY<t&&!e.state.restart&&e.setState({restart:!0})}}))}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,s=this;this.clear();var t=e.from;this.setState({counter:t},(function(){var e=s.props,t=e.speed,n=e.delay,r=Date.now();s.endDate=r+t,s.scheduleNextUpdate(r,n),s.raf=requestAnimationFrame(s.next)}))}},{key:"next",value:function(){var e=Date.now(),s=this.props,t=s.speed,n=s.onComplete,r=s.delay;if(e>=this.nextUpdate){var a=Math.max(0,Math.min(1,1-(this.endDate-e)/t));this.updateCounter(a),this.scheduleNextUpdate(e,r)}e<this.endDate?this.raf=requestAnimationFrame(this.next):n&&n()}},{key:"scheduleNextUpdate",value:function(e,s){this.nextUpdate=Math.min(e+s,this.endDate)}},{key:"updateCounter",value:function(e){var s=this.props,t=s.from,n=t+(s.to-t)*(0,s.easing)(e);this.setState({counter:n})}},{key:"clear",value:function(){cancelAnimationFrame(this.raf)}},{key:"render",value:function(){var e=this.props,s=e.className,t=e.digits,n=e.tagName,r=e.children,a=this.state.counter.toFixed(t);return r?r(a):(0,l.jsx)(n,{className:s,children:a})}}]),t}(o.PureComponent);h.propTypes=m,h.defaultProps={from:0,delay:100,digits:0,tagName:"span",easing:function(e){return e}},s.Z=h},7123:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var n=t(5893),r=t(1664),a=t.n(r),i=JSON.parse('{"Lk":{"n":"223 Thatcher Road St, Brookly,","s":"Manhattan, NY 10463, US"},"m7":"+031 5689 89 98","Do":"contact@Itecksolution.co","oZ":[{"link":"/home-saas-technology","title":"Home"},{"link":"/page-about-5","title":"About Iteck"},{"link":"/page-portfolio-5","title":"Projects"},{"link":"/page-product-5","title":"product"},{"link":"/page-blog-5","title":"Blog"},{"link":"/page-contact-5","title":"Contact"}],"Jb":[{"link":"#","title":"Online Documentation"},{"link":"#","title":"Roadmap"},{"link":"#","title":"Intergrations"},{"link":"#","title":"FAQs"},{"link":"#","title":"Help Center"}]}'),c=function(){return(0,n.jsx)("footer",{className:"style-5 border-top brd-gray",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row gx-0 justify-content-between",children:[(0,n.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,n.jsxs)("div",{className:"items",children:[(0,n.jsx)("div",{className:"title",children:"Iteck - 1st eCommerce Dashboard"}),(0,n.jsxs)("small",{className:"text",children:["Over 25 years working in IT services developing software applications and mobile apps for clients all over the world. For your very specific industry, ",(0,n.jsx)("br",{})," we have highly-tailored IT solutions."]}),(0,n.jsxs)("div",{className:"socail-icons",children:[(0,n.jsx)("a",{href:"https://twitter.com/",rel:"noreferrer",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",target:"_blank",children:(0,n.jsx)("i",{className:"fab fa-twitter"})}),(0,n.jsx)("a",{href:"https://facebook.com/",rel:"noreferrer",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",target:"_blank",children:(0,n.jsx)("i",{className:"fab fa-facebook-f"})}),(0,n.jsx)("a",{href:"https://instagram.com/",rel:"noreferrer",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",target:"_blank",children:(0,n.jsx)("i",{className:"fab fa-instagram"})})]})]})}),(0,n.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,n.jsxs)("div",{className:"items",children:[(0,n.jsx)("div",{className:"title",children:"Information"}),(0,n.jsxs)("small",{className:"text mb-10 d-block",children:[i.Lk.n," ",(0,n.jsx)("br",{})," ",i.Lk.s]}),(0,n.jsx)("small",{className:"text mb-10 d-block",children:i.m7}),(0,n.jsx)("small",{className:"text d-block",children:i.Do})]})}),(0,n.jsx)("div",{className:"col-lg-2",children:(0,n.jsxs)("div",{className:"items",children:[(0,n.jsx)("div",{className:"title",children:"Useful Links"}),(0,n.jsx)("ul",{children:i.oZ.map((function(e,s){return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:e.link,children:(0,n.jsx)("a",{children:e.title})})},s)}))})]})}),(0,n.jsx)("div",{className:"col-lg-2",children:(0,n.jsxs)("div",{className:"items",children:[(0,n.jsx)("div",{className:"title",children:"Resource"}),(0,n.jsx)("ul",{children:i.Jb.map((function(e,s){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.link,children:e.title})},s)}))})]})})]}),(0,n.jsx)("div",{className:"foot",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("img",{src:"/assets/img/logo_foot_home5.png",alt:""})})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("small",{className:"small",children:["\xa9 2022 Copyrights by ",(0,n.jsx)("a",{href:"#",className:"fw-bold text-decoration-underline",children:"Iteck Co."})," All Rights Reserved. Designed by ",(0,n.jsx)("a",{href:"https://themeforest.net/user/themescamp",className:"fw-bold text-decoration-underline",children:"ThemesCamp"})]})})]})})]})})}},1334:function(e,s,t){"use strict";var n=t(7568),r=t(655),a=t(5893),i=t(7294),c=t(6187);t(9669);s.Z=function(){var e=(0,i.useRef)(null),s=(0,i.useState)({fullname:"",email:"",phone:"",cv_file:{},coverletter:""}),t=(s[0],s[1],(0,i.useState)({from:2500,to:3e3})),l=t[0],o=t[1];(0,i.useEffect)((function(){if(e){var s=e.current.offsetTop,t=e.current.offsetHeight;o({from:s-t,to:s+t})}}),[e]);var d=function(e){},u=function(){var e=(0,n.Z)((function(e){return(0,r.__generator)(this,(function(s){return e.preventDefault(),alert("Form submitted successfully."),[2]}))}));return function(s){return e.apply(this,arguments)}}();return(0,a.jsxs)("section",{className:"career-form section-padding",ref:e,children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-numbers",children:[(0,a.jsx)("h2",{children:" Looking For Oppertunity "}),(0,a.jsx)("p",{children:" More than 15,000 companies trust and choose Itech "}),(0,a.jsx)("div",{className:"career-numbers mt-50",children:(0,a.jsxs)("div",{className:"row gx-5",children:[(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:5e3,speed:1500,position:l})," "]}),(0,a.jsx)("small",{children:" Project Completed "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:1,speed:1500,position:l})," M+ "]}),(0,a.jsx)("small",{children:" Happy Users "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:100,speed:1500,position:l})," "]}),(0,a.jsx)("small",{children:" Team Members "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:10,speed:1500,position:l})," "]}),(0,a.jsx)("small",{children:" Offline Basement "})]})})]})})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("form",{action:"contact.php",className:"form",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",onChange:d}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-user"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email Adress",onChange:d}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-envelope"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone Number",onChange:d}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-phone"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"form-group mb-4 upload-card",children:(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsxs)("span",{id:"upload_text",children:[" ",(0,a.jsx)("i",{className:"fas fa-cloud"})," Upload CV"]}),(0,a.jsx)("input",{type:"file",className:"upload_input",onChange:d})]})})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("textarea",{rows:"7",className:"form-control",placeholder:"Cover letter",onChange:d}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-pen"})," "]})]})})]}),(0,a.jsx)("button",{className:"btn bg-white sm-butn mt-4 rounded-3",onClick:u,children:(0,a.jsxs)("span",{className:"text-dark",children:[" Make Request ",(0,a.jsx)("i",{className:"fal fa-long-arrow-right ms-2 color-blue5"})," "]})})]})})]})}),(0,a.jsx)("img",{src:"/assets/img/careers/map.png",alt:"",className:"map_img"})]})}},1132:function(e,s,t){"use strict";var n=t(5893);t(7294);s.Z=function(e){var s=e.page,t=e.title;return(0,n.jsx)("section",{className:"inner-header style-5",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"links",children:[(0,n.jsx)("a",{href:"#",children:" Home "}),(0,n.jsxs)("a",{href:"#",className:"ms-1",children:[" ",s," "]})]}),(0,n.jsxs)("h2",{children:[" ",t," "]}),(0,n.jsx)("img",{src:"/assets/img/header/head7_rock.png",alt:"",className:"side-img slide_up_down"})]})})})}},5519:function(){},2703:function(e,s,t){"use strict";var n=t(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,s,t,r,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:a,resetWarningCache:r};return t.PropTypes=t,t}},5697:function(e,s,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4111:function(e,s,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(s,{Z:function(){return n}})},1438:function(e,s,t){"use strict";function n(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}t.d(s,{Z:function(){return n}})},2951:function(e,s,t){"use strict";function n(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,s,t){return s&&n(e.prototype,s),t&&n(e,t),e}t.d(s,{Z:function(){return r}})},460:function(e,s,t){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e){return n(e)}t.d(s,{Z:function(){return c}});var a=t(4111);function i(e,s){return!s||"object"!==((t=s)&&t.constructor===Symbol?"symbol":typeof t)&&"function"!==typeof s?(0,a.Z)(e):s;var t}function c(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=r(e);if(s){var a=r(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return i(this,t)}}},8029:function(e,s,t){"use strict";function n(e,s){return n=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},n(e,s)}function r(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&n(e,s)}t.d(s,{Z:function(){return r}})}}]);