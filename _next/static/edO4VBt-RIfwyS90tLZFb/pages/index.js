(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return E})),n.d(t,"default",(function(){return R}));var a=n("MX0m"),i=n.n(a),l=n("q1tI"),s=n.n(l),r=n("8Kt/"),c=n.n(r),o=n("ZMKu"),u=n("wx14"),d=n("YFqc"),f=n.n(d),m=s.a.createElement;function h(e){return m("ul",Object(u.a)({},e,{className:"jsx-4255060143 "+(e&&null!=e.className&&e.className||"auxNav")}),m("li",{className:"jsx-4255060143"},m(f.a,{href:"/about"},m("a",{className:"jsx-4255060143"},"About"))),m("li",{className:"jsx-4255060143"},m(f.a,{href:"/nominate"},m("a",{className:"jsx-4255060143"},"Nominate"))),m(i.a,{id:"4255060143"},["ul.jsx-4255060143{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","ul.jsx-4255060143 li.jsx-4255060143{list-style:none;margin-right:2.2rem;}","ul.jsx-4255060143 li.jsx-4255060143 a.jsx-4255060143{color:#fff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 150ms ease;transition:color 150ms ease;}","ul.jsx-4255060143 li.jsx-4255060143 a.jsx-4255060143:hover{color:#CCCCFF;}"]))}var x=s.a.createElement;function p(){return x("svg",{fill:"none",viewBox:"0 0 20 14"},x("path",{fill:"#000",d:"M17.495.245l-.853.844c-2.978 2.985-6.165 6.404-9.14 9.422L3.254 7.014l-.92-.769L.809 8.101l.928.76 5.1 4.2.834.694.778-.77c3.225-3.231 6.724-7.017 9.9-10.2l.844-.852L17.495.245z"}))}var v=s.a.createElement;function j(){return v("svg",{fill:"none",viewBox:"0 0 22 22"},v("path",{fill:"#000",fillRule:"evenodd",d:"M10.997 8.9L19.899 0 22 2.1 13.097 11l8.902 8.9-2.1 2.1-8.902-8.901L2.1 21.994l-2.1-2.1L8.897 11 0 2.104l2.1-2.1L10.997 8.9z",clipRule:"evenodd"}))}var b=s.a.createElement,w={hidden:{x:"120%"},show:{x:"0%",transition:{duration:.4,ease:"easeInOut"}}};function g(e){var t=e.items,n=e.handleFilterClick,a=e.handleCloseFilter,l=e.categoryName;return b(o.b.div,{variants:w,initial:"hidden",animate:"show",exit:"hidden",style:{position:"fixed",top:0,right:0,width:"100%",maxWidth:"420px",overflowY:"scroll",height:"100vh"}},b("div",{className:"jsx-2043656132 sidebar"},b("a",{"aria-label":"Close",href:"#",onClick:a,className:"jsx-2043656132 close"},b(j,null)),b("h3",{className:"jsx-2043656132"},l.charAt(0).charAt(0).toUpperCase()+l.slice(1)),t.map((function(e,t){return b(y,{key:"".concat(e.label,"-").concat(t),label:e.label,active:e.active,onClick:function(){n(e)}})}))),b(i.a,{id:"2043656132"},[".sidebar.jsx-2043656132{width:100%;max-width:420px;background:#fff;color:#000;padding:2.5rem;min-height:100vh;}",".close.jsx-2043656132{display:block;width:1.5rem;height:1.5rem;}","h3.jsx-2043656132{margin-top:4rem;font-weight:500;}"]))}function y(e){var t=e.label,n=e.active,a=e.onClick;return b("div",{onClick:a,className:"jsx-3455406402 filterItem"},t,b("div",{className:"jsx-3455406402 "+"check ".concat(n?"active":"")},b(p,null)),b(i.a,{id:"3455406402"},[".filterItem.jsx-3455406402{cursor:pointer;font-size:1.7rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0.1rem 0;}",".check.jsx-3455406402{width:1.7rem;height:1.7rem;}"]))}var N=n("W9HR"),k=n("xzsl"),C=n("CWLz"),O=s.a.createElement;function z(){return O("svg",{style:{marginLeft:"0.4rem"},width:"19",height:"12",fill:"none",viewBox:"0 0 17 10"},O("path",{fill:"#fff",d:"M17 .266A.263.263 0 0016.741 0H.259A.263.263 0 000 .266v.957c0 .148.116.266.259.266H16.74c.144 0 .259-.12.259-.266L17 .266zm-2.592 4.256a.263.263 0 00-.259-.266H2.851a.263.263 0 00-.26.266v.957c0 .148.117.266.26.266h11.298c.144 0 .26-.12.26-.266v-.957zm-2.59 4.255a.263.263 0 00-.26-.266H5.442a.263.263 0 00-.26.266v.957c0 .147.117.266.26.266h6.115c.144 0 .26-.12.26-.266v-.957z"}))}var L=s.a.createElement,E=!0;function R(e){var t=e.designers,n=e.filters,a=Object(l.useState)(!1),s=a[0],r=(a[1],Object(l.useState)(null)),u=r[0],d=r[1],f=Object(l.useState)(!1),m=f[0],h=f[1],x=Object(l.useState)(n),p=x[0],v=x[1],j=Object(l.useState)(null),b=j[0],w=j[1];Object(l.useEffect)((function(){d(_(t).sort((function(e,t){return e.order-t.order})))}),[]);var y=function(e){return h(!1),e.preventDefault(),e.stopPropagation(),!1};return L("div",{style:{overflow:s?"hidden":"auto"},className:i.a.dynamic([["2901991014",[m?"hidden":"auto"]]])+" container"},L(c.a,null,L("title",{className:i.a.dynamic([["2901991014",[m?"hidden":"auto"]]])},"Brits Who Design"),L("link",{id:"favicon",rel:"alternate icon",href:"/favicon.ico",className:i.a.dynamic([["2901991014",[m?"hidden":"auto"]]])}),L(k.a,null)),s?null:L(F,{designers:u,handleOpenFilter:function(e){w(e),h(!0)},onClick:m?y:void 0,className:m?"filterIsOpen":""}),L(o.a,null,m?L(g,{items:p.filter((function(e){return e.category==b})),handleFilterClick:function(e){var a=p.indexOf(e);p[a].active=!p[a].active,v(p);var i=p.filter((function(e){return"expertise"==e.category})).map((function(e){return e.label})),l=p.filter((function(e){return"location"==e.category})).map((function(e){return e.label})),s=p.filter((function(e){return 1==e.active})).map((function(e){return e.label}));i.filter((function(e){return s.includes(e)})).length<=0&&(s=s.concat(i)),l.filter((function(e){return s.includes(e)})).length<=0&&(s=s.concat(l)),s.length>0?d(t.filter((function(e){return s.includes(e.expertise)&&s.includes(e.location)}))):function(){var e=n.map((function(e){return{label:e.label,active:!1}}));v(e),d(_(t).sort((function(e,t){return e.featured-t.featured})))}()},handleCloseFilter:y,categoryName:b}):null),L(i.a,{id:"2901991014",dynamic:[m?"hidden":"auto"]},["html,body{overflow:".concat(m?"hidden":"auto",";}")]))}function F(e){var t=e.designers,n=e.handleOpenFilter,a=e.className,s=e.onClick,r=Object(l.useRef)();return Object(l.useEffect)((function(){var e=r.current,t=e.getBoundingClientRect().top+40,n=window.addEventListener("scroll",(function(){window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}));return function(){window.removeEventListener("scroll",n)}}),[]),L("div",{onClick:s,className:"jsx-1697634414 "+(a||"")},L(h,null),L(N.a,{className:"title m0 p0",text:"Brits\xa0who*design"}),L(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},L("table",{cellSpacing:"0",className:"jsx-1697634414 large tableContent"},L("thead",{id:"tableHeader",ref:r,className:"jsx-1697634414"},L("tr",{className:"jsx-1697634414"},L("td",{className:"jsx-1697634414"},"Name"),L("td",{onClick:function(e){n("location"),e.preventDefault()},className:"jsx-1697634414 thsize-aux dn filterTable"},"Location ",L(z,null)),L("td",{onClick:function(e){n("expertise"),e.preventDefault()},className:"jsx-1697634414 thsize-aux filterTable"},"Expertise ",L(z,null)),L("td",{className:"jsx-1697634414 thsize-link"}))),null!=t?L("tbody",{className:"jsx-1697634414"},t.map((function(e,t){return L("tr",{key:"".concat(e.name,"-").concat(t),className:"jsx-1697634414"},L("td",{className:"jsx-1697634414"},L("a",{href:e.link,className:"jsx-1697634414"},e.name)),L("td",{className:"jsx-1697634414 thsize-aux dn"},L("a",{href:e.link,className:"jsx-1697634414"},e.location)),L("td",{className:"jsx-1697634414 thsize-aux"},L("a",{href:e.link,className:"jsx-1697634414"},e.expertise)),L("td",{className:"jsx-1697634414 thsize-link"},L("a",{href:e.link,className:"jsx-1697634414"},"\u2192")))}))):null)),L(i.a,{id:"1697634414"},[".tableContent.jsx-1697634414{padding-top:18vh;}",".filterTable.jsx-1697634414{cursor:pointer;}","thead.jsx-1697634414{height:2.2rem;}",".thsize-aux.jsx-1697634414{width:20%;}",".thsize-link.jsx-1697634414{width:2rem;text-align:right;}","@media (max-width:480px){.thsize-aux.jsx-1697634414{width:30%;}}","tbody.jsx-1697634414 a.jsx-1697634414{width:100%;padding-bottom:0.6em;padding-top:0.6em;color:inherit;display:inline-block;}","table.jsx-1697634414 tbody.jsx-1697634414 td.jsx-1697634414{padding-top:0;padding-bottom:0;}"]),L(C.a,null))}function _(e){for(var t,n,a=e.length;a;)n=Math.floor(Math.random()*a--),t=e[a],e[a]=e[n],e[n]=t;return e}},W9HR:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("wx14"),i=n("q1tI"),l=n.n(i),s=n("ZMKu"),r=l.a.createElement,c={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.04}}},o={hidden:{opacity:0,y:"5%"},show:{opacity:1,y:"0%"},transition:{easing:"easeInOut"}};function u(e){var t=e.text,n=e.noAnimation;return r(s.b.h1,Object(a.a)({className:"m0 p0"},e,{variants:c,initial:n?"show":"hidden",animate:"show"}),t.split("").map((function(e,t){return"*"==e?r("br",{key:"".concat(e,"-").concat(t)}):r(s.b.span,{className:"letter",variants:o,key:"".concat(e,"-").concat(t)},e)})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["vlRD",0,2,3,1,4,5]]]);