(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2417],{6669:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home-saas-technology-onePage",function(){return n(8534)}])},7549:function(s,e,n){"use strict";function a(s,e,n){s&&(window.pageYOffset>300?(s.classList.add("nav-scroll"),e&&s.classList.remove("bg-transparent")):(s.classList.remove("nav-scroll"),e&&s.classList.add("bg-transparent")),window.addEventListener("scroll",(function(){window.pageYOffset>300?(s.classList.add("nav-scroll"),e&&s.classList.remove("bg-transparent")):(s.classList.remove("nav-scroll"),e&&s.classList.add("bg-transparent"))})))}n.d(e,{Z:function(){return a}})},5144:function(s,e,n){"use strict";function a(s){s.preventDefault();var e=document.querySelector('[data-scroll-index="'+s.target.dataset.scrollNav+'"]');e&&setTimeout((function(){e.scrollIntoView({behavior:"smooth"})}),300)}n.d(e,{Z:function(){return a}})},6892:function(s,e,n){"use strict";var a=n(5893),t=n(1664),l=n.n(t);e.Z=function(s){var e=s.style,n=s.rtl;return(0,a.jsx)("div",{className:"top-navbar style-".concat(e),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"content text-white",children:[(0,a.jsx)("span",{className:"btn sm-butn bg-white py-0 px-2 me-2 fs-10px",children:(0,a.jsx)("small",{className:"fs-10px",children:n?"\u0639\u0631\u0636 \u062e\u0627\u0635":"Special"})}),(0,a.jsx)("img",{src:"./assets/img/icons/nav_icon/imoj_heart.png",alt:"",className:"icon-15 me-1"}),(0,a.jsxs)("span",{className:"fs-10px op-6 me-1",children:[n?"\u0627\u062d\u0635\u0644 \u0639\u0644\u0649":"Get"," "]}),(0,a.jsx)("small",{className:"op-10 fs-10px",children:n?"20% \u062e\u0635\u0645":"20% Discount"}),(0,a.jsx)("span",{className:"fs-10px op-6 mx-1",children:n?"\u0639\u0646\u062f \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643":"Get for New Account"}),(0,a.jsx)(l(),{href:"/page-contact-5",children:(0,a.jsx)("a",{className:"fs-10px text-decoration-underline ms-2",children:n?"\u0627\u0634\u062a\u0631\u0643 \u0627\u0644\u0623\u0646":"Register Now"})})]})})})}},2773:function(s,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(5893),t=n(7294),l=n(9008),c=n.n(l);n(4298);var r=function(s){var e=s.topText;return(0,t.useEffect)((function(){!function(){var s=document.querySelector(".to_top");s&&(window.addEventListener("scroll",(function(){window.scrollY>700?s.classList.add("show"):s.classList.remove("show")})),s.addEventListener("click",(function(s){s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})))}()}),[]),(0,a.jsxs)("a",{href:"#",className:"to_top ".concat(e?"":"bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"),children:[(0,a.jsx)("i",{className:"bi bi-chevron-up ".concat(e?"":"fs-6 text-dark")}),e&&(0,a.jsx)("small",{children:"Top"})]})};var i=function(s){var e=s.children,n=s.scrollTopText,l="";return(0,t.useEffect)((function(){var s=navigator.language||navigator.userLanguage,e=window.localStorage.getItem("language");e?"en"==e?window.localStorage.setItem("isRTL",!0):window.localStorage.setItem("isRTL",!1):(s.indexOf("zh")>-1&&!window.localStorage.getItem("isRTL")&&window.localStorage.setItem("isRTL",!1),-1!=s.indexOf("zh")||window.localStorage.getItem("isRTL")||window.localStorage.setItem("isRTL",!0)),function(s){if(s){var e,n=document.querySelector('link[href="./assets/css/rtl_style.css"]'),a=document.querySelector('link[href="./assets/css/style.css"]');if(!n||!a)return;if(null===(e=a.nextElementSibling.href)||void 0===e?void 0:e.includes("./assets/css/rtl_style.css"))return;n.before(a)}else{var t,l=document.querySelector('link[href="./assets/css/lib/bootstrap.min.css"]'),c=document.querySelector('link[href="./assets/css/style.css"]');if(!l||!c)return;if(null===(t=l.nextElementSibling.href)||void 0===t?void 0:t.includes("./assets/css/style.css"))return;l.after(c)}}(l=window.localStorage.getItem("isRTL"))})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap-icons.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/all.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/animate.css"}),l?(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap.rtl.min.css"}):(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/style.css"}),l?(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/rtl_style.css"}):null]}),e,(0,a.jsx)(r,{topText:n})]})}},8534:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var a=n(5893),t=n(7294),l=n(9008),c=n.n(l),r=n(7549),i=n(2773),o=n(6892),d=n(5144),u=function(s){var e=s.navbarRef;return(0,t.useEffect)((function(){var s=document.querySelectorAll("[data-scroll-index]");window.addEventListener("scroll",(function(){s.forEach((function(s){var e=s.getAttribute("data-scroll-index"),n=s.offsetTop,a=s.offsetHeight,t=window.scrollY;t+200>n&&t+200<n+a?document.querySelector('[data-scroll-nav="'.concat(e,'"]')).classList.add("active"):document.querySelector('[data-scroll-nav="'.concat(e,'"]')).classList.remove("active")}))}))}),[]),(0,a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light style-5",ref:e,children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("a",{className:"navbar-brand",href:"#","data-scroll-nav":"0",onClick:d.Z,children:(0,a.jsx)("img",{src:"./assets/img/logo_home5.png",alt:""})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"navbar-nav m-auto mb-2 mb-lg-0",children:[(0,a.jsx)("li",{className:"nav-item dropdown",children:(0,a.jsx)("a",{className:"nav-link","data-scroll-nav":"1",onClick:d.Z,children:"about us"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link","data-scroll-nav":"2",onClick:d.Z,children:"clients"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link","data-scroll-nav":"3",onClick:d.Z,children:"Features"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link","data-scroll-nav":"4",onClick:d.Z,children:"pricing"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link","data-scroll-nav":"5",onClick:d.Z,children:"testimonials"})})]}),(0,a.jsx)("div",{className:"nav-side",children:(0,a.jsx)("div",{className:"d-flex align-items-center",children:(0,a.jsx)("a",{href:"#0",className:"btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold","data-scroll-nav":"6",children:(0,a.jsxs)("span",{children:["download app ",(0,a.jsx)("i",{className:"bi bi-download ms-1"})," "]})})})})]})]})})},f=n(5783),m=n(7877),v=n(7188),h=n(7544),x=n(981),g=n(4367),j=n(6689),p=n(273),b=n(7123),w=function(){var s=(0,t.useRef)(null);return(0,t.useEffect)((function(){(0,r.Z)(s.current)}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{children:(0,a.jsx)("title",{children:"Iteck - Saas Technology One Page"})}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{style:"5"}),(0,a.jsx)(u,{navbarRef:s}),(0,a.jsx)(f.Z,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(m.Z,{}),(0,a.jsx)(v.Z,{}),(0,a.jsx)(h.Z,{}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(g.Z,{}),(0,a.jsx)(j.Z,{}),(0,a.jsx)(p.Z,{})]}),(0,a.jsx)(b.Z,{})]})]})}}},function(s){s.O(0,[1664,4386,4908,6930,9774,2888,179],(function(){return e=6669,s(s.s=e);var e}));var e=s.O();_N_E=e}]);