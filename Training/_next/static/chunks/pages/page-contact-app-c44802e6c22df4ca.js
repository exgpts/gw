(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2797],{3701:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page-contact-app",function(){return n(7712)}])},1918:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var a=n(7568),t=n(4924),l=n(6042),c=n(9396),i=n(655),r=n(5893),o=n(7294),m=n(9669),d=n.n(m),h=JSON.parse('{"phone":"(+23) 5535 68 68","email":"contact@Itecksolution.com","address":"58 Howard St, San Francisco, CA 941"}'),p=JSON.parse('{"phone":"(+23) 5535 68 68","email":"contact@Itecksolution.com","address":"58 \u0627\u0633\u0645 \u0627\u0644\u0634\u0627\u0631\u0639, \u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u064a\u0633\u0643\u0648, CA 941"}'),x=function(e){var s=e.style,n=void 0===s?"4":s,m=e.rtl,x=(0,o.useState)({name:"",email:"",phone:"",website:"",option:"",message:""}),u=x[0],j=x[1],g=m?p:h,f=function(e){j((function(s){return(0,c.Z)((0,l.Z)({},s),(0,t.Z)({},e.target.name,e.target.value))}))},N=function(){var e=(0,a.Z)((function(e){var s;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return e.preventDefault(),(s=new FormData).append("name",u.name),s.append("email",u.email),s.append("phone",u.phone),s.append("website",u.website),s.append("option",u.option),s.append("message",u.message),[4,d().post("/contact.php",s).catch((function(e){return alert(e.message)}))];case 1:return n.sent()?(alert("Form submitted successfully."),[2]):[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,r.jsxs)("section",{className:"contact section-padding pt-".concat("4"===n?"0":"50"," style-6"),children:["5"===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"section-head text-center mb-100 style-5",children:[(0,r.jsxs)("h2",{className:"mb-20",children:[m?"\u064a\u0633\u0639\u062f\u0646\u0627":"Get In"," ",(0,r.jsx)("span",{children:m?"\u062a\u0648\u0627\u0635\u0644\u0643":"Touch"})," ",m&&"\u0645\u0639\u0646\u0627"]}),(0,r.jsx)("p",{children:m?"\u0633\u0646\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0628\u0639\u062f \u0627\u0633\u062a\u0644\u0627\u0645 \u0637\u0644\u0628\u0643 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629":"We will contact again after receive your request in 24h"})]}),(0,r.jsxs)("div",{className:"text-center mb-100",children:[(0,r.jsx)("h2",{className:"ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5",children:g.phone}),(0,r.jsx)("h4",{className:"fw-normal mb-20 color-000",children:g.email}),(0,r.jsx)("h4",{className:"fw-normal mb-10 color-000",children:g.address})]})]}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("form",{action:"contact.php",className:"form",method:"post",onSubmit:N,children:[(0,r.jsx)("p",{className:"text-center text-danger fs-12px mb-30",children:m?"\u0627\u0644\u062d\u0642\u0644 \u0627\u0644\u0644\u0630\u0649 \u064a\u062d\u062a\u0648\u0649 \u0639\u0644\u0649 \u0647\u0630\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u062c\u0628\u0627\u0631\u0649 *":"The field is required mark as *"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"form-group mb-20",children:(0,r.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:m?"\u0627\u0644\u0627\u0633\u0645":"Name",onChange:f})})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"form-group mb-20",children:(0,r.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:m?"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u0649 *":"Email Address *",onChange:f})})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"form-group mb-20",children:(0,r.jsx)("input",{type:"text",name:"phone",className:"form-control",placeholder:m?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)":"Phone Number (option)",onChange:f})})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"form-group mb-20",children:(0,r.jsx)("input",{type:"text",name:"website",className:"form-control",placeholder:m?"\u0631\u0627\u0628\u0637 \u0645\u0648\u0642\u0639\u0643 (\u0627\u062e\u062a\u064a\u0627\u0631\u0649)":"Your Website (option)",onChange:f})})}),(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsx)("div",{className:"form-group mb-20",children:(0,r.jsxs)("select",{className:"form-select",defaultValue:m?"\u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u061f":"How can we help you?",name:"option",onChange:f,children:[(0,r.jsx)("option",{value:"how can we help",children:m?"\u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u061f":"How can we help you?"}),(0,r.jsx)("option",{value:"option 1",children:m?"\u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0627\u0648\u0644":"option 1"}),(0,r.jsx)("option",{value:"option 2",children:m?"\u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062b\u0627\u0646\u064a":"option 2"})]})})}),(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("textarea",{rows:"10",name:"message",className:"form-control",placeholder:m?"\u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u061f":"How can we help you?",onChange:f})})}),(0,r.jsx)("div",{className:"col-lg-12 text-center",children:(0,r.jsxs)("div",{className:"form-check d-inline-flex mt-30 mb-30",children:[(0,r.jsx)("input",{className:"form-check-input me-2 mt-0",type:"checkbox",value:"",id:"flexCheckDefault"}),(0,r.jsxs)("label",{className:"form-check-label small",htmlFor:"flexCheckDefault",children:[m?"\u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u060c \u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649":"By submitting, i\u2019m agreed to the"," ",(0,r.jsx)("a",{href:"#",className:"text-decoration-underline",children:m?"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648 \u0627\u0644\u0627\u062d\u0643\u0627\u0645":"Terms & Conditons"})]})]})}),(0,r.jsx)("div",{className:"col-lg-12 text-center",children:(0,r.jsx)("input",{type:"submit",value:m?"\u0627\u0631\u0633\u0644 \u0637\u0644\u0628\u0643":"Send Your Request",className:"btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"})})]})]})})}),(0,r.jsx)("img",{src:"./assets/img/icons/contact_a.png",alt:"",className:"contact_a"}),(0,r.jsx)("img",{src:"./assets/img/icons/contact_message.png",alt:"",className:"contact_message"})]})})]})}},2994:function(e,s,n){"use strict";var a=n(5893);s.Z=function(){return(0,a.jsx)("div",{className:"map",children:(0,a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24219.60999175365!2d-73.9764341314902!3d40.64198229194528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b400c94a227%3A0x18e2a4d3fb21f0ec!2sFlatbush%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1651361759450!5m2!1sen!2seg",height:"500",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}},9204:function(e,s,n){"use strict";var a=n(5893),t=n(7294),l=n(1664),c=n.n(l);s.Z=function(e){var s=e.navbarRef,n=e.rtl,l=function(){window.localStorage.setItem("isRTL",!0),window.localStorage.setItem("language","en"),document.body.scrollIntoView(),window.location.reload()},i=function(){window.localStorage.setItem("isRTL",!1),window.localStorage.setItem("language","zh-cn"),document.body.scrollIntoView(),window.location.reload()},r=(0,t.useState)(!1),o=r[0],m=r[1];return(0,a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light style-4 ",ref:s,style:{marginTop:"0",backgroundColor:"#ffffff"},children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("a",{className:"navbar-brand",href:"#",children:(0,a.jsx)("img",{src:"./assets/img/logo-black.png",alt:""})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button",style:{fontSize:"0.8rem",padding:"0.5rem 0.6rem",background:"#f8f9fa",border:"none",outline:"none"},"data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false",onClick:function(){m(!0)},"aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"navbar-nav m-auto mb-2 mb-lg-0",style:{fontWeight:"600"},children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/index.html",children:(0,a.jsx)("a",{className:"nav-link",children:n?"Home":"\u9996\u9875"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/Training/",children:(0,a.jsx)("a",{className:"nav-link active",children:n?"Training Center":"\u8bad\u7ec3\u4e2d\u5fc3"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/usecase-details.html",children:(0,a.jsx)("a",{className:"nav-link",children:"Gaming"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/usecase-details-s2.html",children:(0,a.jsx)("a",{className:"nav-link",children:"EXGPT"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://exgpt.gitbook.io/untitled",children:(0,a.jsx)("a",{className:"nav-link",children:n?"Developer":"\u5f00\u53d1\u8005"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/about.html",children:(0,a.jsx)("a",{className:"nav-link",children:n?"About Us":"\u5173\u4e8e\u6211\u4eec"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c(),{href:"https://gw.exgpts.top/contact.html",children:(0,a.jsx)("a",{className:"nav-link",children:n?"Contact Us":"\u8054\u7cfb\u6211\u4eec"})})})]}),(0,a.jsxs)("div",{className:"nav-side",children:[n&&(0,a.jsx)("a",{style:{cursor:"pointer"},onClick:i,children:"English"}),!n&&(0,a.jsx)("a",{style:{cursor:"pointer"},onClick:l,children:"\u7b80\u4f53\u4e2d\u6587"})]})]})]}),o&&(0,a.jsxs)("div",{style:{height:"100vh"},children:[(0,a.jsx)("div",{onClick:function(){m(!1)},style:{opacity:"1",animation:"fade-in 400ms ease 1",position:"fixed",top:"0",right:"0",bottom:"0",left:"0",background:"rgba(0, 0, 0, 0.4)",zIndex:"1024"}}),(0,a.jsxs)("nav",{className:"nk-header-menu nk-menu menu-mobile header-menu-active",children:[(0,a.jsxs)("ul",{className:"nk-menu-list mx-auto",children:[(0,a.jsx)("li",{className:"nk-menu-item has-dropdown",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/index.html",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:n?"Home":"\u9996\u9875"})})}),(0,a.jsx)("li",{className:"nk-menu-item",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/Training/",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:n?"Training Center":"\u8bad\u7ec3\u4e2d\u5fc3"})})}),(0,a.jsx)("li",{className:"nk-menu-item",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/usecase-details.html",className:"nk-menu-link",children:(0,a.jsxs)("span",{className:"nk-menu-text","data-sw-translate":"",children:[" ","Gaming"]})})}),(0,a.jsx)("li",{className:"nk-menu-item",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/usecase-details-s2.html",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:"EXGPT"})})}),(0,a.jsx)("li",{className:"nk-menu-item",children:(0,a.jsx)("a",{href:"https://exgpt.gitbook.io/untitled",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:n?"Developer":"\u5f00\u53d1\u8005"})})}),(0,a.jsx)("li",{className:"nk-menu-item active current-page",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/about.html",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:n?"About Us":"\u5173\u4e8e\u6211\u4eec"})})}),(0,a.jsx)("li",{className:"nk-menu-item",children:(0,a.jsx)("a",{href:"https://gw.exgpts.top/contact.html",className:"nk-menu-link",children:(0,a.jsx)("span",{className:"nk-menu-text","data-sw-translate":"",children:n?"Contact Us":"\u8054\u7cfb\u6211\u4eec"})})})]}),(0,a.jsx)("div",{className:"mx-2 d-none d-lg-block",children:(0,a.jsxs)("button",{className:"dark-mode-toggle",children:[(0,a.jsx)("em",{className:"off icon ni ni-sun-fill"}),(0,a.jsx)("em",{className:"on icon ni ni-moon-fill"})]})}),(0,a.jsx)("ul",{className:"nk-menu-buttons flex-lg-row-reverse",children:(0,a.jsxs)("li",{children:[n&&(0,a.jsx)("a",{style:{cursor:"pointer"},className:"link link-dark",onClick:i,children:"English"}),!n&&(0,a.jsx)("a",{style:{cursor:"pointer"},className:"link link-dark",onClick:l,children:"\u7b80\u4f53\u4e2d\u6587"})]})})]})]})]})}},6892:function(e,s,n){"use strict";var a=n(5893),t=n(1664),l=n.n(t);s.Z=function(e){var s=e.style,n=e.rtl;return(0,a.jsx)("div",{className:"top-navbar style-".concat(s),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"content text-white",children:[(0,a.jsx)("span",{className:"btn sm-butn bg-white py-0 px-2 me-2 fs-10px",children:(0,a.jsx)("small",{className:"fs-10px",children:n?"\u0639\u0631\u0636 \u062e\u0627\u0635":"Special"})}),(0,a.jsx)("img",{src:"./assets/img/icons/nav_icon/imoj_heart.png",alt:"",className:"icon-15 me-1"}),(0,a.jsxs)("span",{className:"fs-10px op-6 me-1",children:[n?"\u0627\u062d\u0635\u0644 \u0639\u0644\u0649":"Get"," "]}),(0,a.jsx)("small",{className:"op-10 fs-10px",children:n?"20% \u062e\u0635\u0645":"20% Discount"}),(0,a.jsx)("span",{className:"fs-10px op-6 mx-1",children:n?"\u0639\u0646\u062f \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643":"Get for New Account"}),(0,a.jsx)(l(),{href:"/page-contact-5",children:(0,a.jsx)("a",{className:"fs-10px text-decoration-underline ms-2",children:n?"\u0627\u0634\u062a\u0631\u0643 \u0627\u0644\u0623\u0646":"Register Now"})})]})})})}},7712:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return j}});var a=n(5893),t=n(7294),l=n(9008),c=n.n(l),i=n(7549),r=n(2773),o=n(6892),m=n(9204),d=JSON.parse('[{"icon":"./assets/img/icons/mail3d.png","info":"contact@Iteck.com"},{"icon":"./assets/img/icons/map3d.png","info":"58 Howard St, Toronto"},{"icon":"./assets/img/icons/msg3d.png","info":"(+23) 5535 68 68"}]'),h=function(){return(0,a.jsx)("section",{className:"community section-padding style-5",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-head text-center style-4 mb-40",children:[(0,a.jsx)("small",{className:"title_small",children:"Contact us"}),(0,a.jsxs)("h2",{className:"mb-20",children:["Get In ",(0,a.jsx)("span",{children:"Touch"})," "]}),(0,a.jsx)("p",{children:"We will contact again after receive your request in 24h"})]}),(0,a.jsx)("div",{className:"content rounded-pill",children:d.map((function(e,s){return(0,a.jsxs)("div",{className:"commun-card",children:[(0,a.jsx)("div",{className:"icon icon-45",children:(0,a.jsx)("img",{src:e.icon,alt:""})}),(0,a.jsx)("div",{className:"inf",children:(0,a.jsx)("h5",{children:e.info})})]},s)}))})]})})},p=n(1918),x=n(2994),u=n(7925),j=function(){var e=(0,t.useRef)(null);return(0,t.useEffect)((function(){(0,i.Z)(e.current)}),[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{children:(0,a.jsx)("title",{children:"Iteck - Contact App"})}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{style:"4"}),(0,a.jsx)(m.Z,{navbarRef:e}),(0,a.jsxs)("main",{className:"contact-page style-5",children:[(0,a.jsx)(h,{}),(0,a.jsx)(p.Z,{}),(0,a.jsx)(x.Z,{})]}),(0,a.jsx)(u.Z,{noWave:!0})]})]})}},9396:function(e,s,n){"use strict";function a(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,a)}return n}(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})),e}n.d(s,{Z:function(){return a}})}},function(e){e.O(0,[1664,1217,938,9774,2888,179],(function(){return s=3701,e(e.s=s);var s}));var s=e.O();_N_E=s}]);