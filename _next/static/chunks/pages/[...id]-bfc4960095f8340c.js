(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{743:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...id]",function(){return n(4511)}])},7126:function(e,i,n){"use strict";n.d(i,{G:function(){return o},w:function(){return u}});var t=n(5893),r=n(140),a=n.n(r),s=n(1664),l=n.n(s),c=n(6199),d=n(9234);let o={remarkPlugins:[c.Z],rehypePlugins:[d.Z]},u={img:e=>(function(e){let i=null==e?void 0:e.alt;i=null==i?void 0:i.split("@");let n="";if((null==i?void 0:i.length)>1){n=i[0],i=i[1];try{return i=JSON.parse(i),(0,t.jsx)("img",{src:e.src,alt:n,style:{...i}})}catch(e){console.error(e)}}return(0,t.jsx)("img",{src:e.src,alt:e.alt})})(e),hr:()=>(0,t.jsx)("hr",{className:a().hr}),a:e=>(0,t.jsx)(l(),{href:e.href,className:a().link,children:e.children}),ul:e=>(0,t.jsx)("ul",{className:a().list,children:e.children}),ol:e=>(0,t.jsx)("ol",{className:a().list,children:e.children}),blockquote:e=>(0,t.jsx)("blockquote",{className:a().blockquote,children:e.children})}},4511:function(e,i,n){"use strict";n.r(i),n.d(i,{__N_SSG:function(){return ee},default:function(){return ei}});var t=n(5893),r=n(7294),a=n(1157),s=n(6199),l=n(9234),c=n(5967),d=n.n(c),o=n(1664),u=n.n(o),p=n(7126),m=n(6498),h=n.n(m);function _(e){let{groups:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:Object.keys(i||{}).reverse().map(e=>{var n;return(0,t.jsxs)("div",{className:h().groupContainer,children:[(0,t.jsx)("p",{className:h().title,children:e})," ",(0,t.jsx)("div",{className:h().groupItems,children:null===(n=i[e])||void 0===n?void 0:n.map((e,i)=>(0,t.jsx)(j,{item:e},i))})]},e)})})})}function j(e){let{item:i}=e,[n,a]=(0,r.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:h().pubContainer,children:[(0,t.jsx)("div",{className:h().pType,children:(0,t.jsx)("p",{children:i.ttext})}),(0,t.jsxs)("div",{className:h().pContent,children:[i.author+". ",i.hasLink?(0,t.jsx)("a",{href:i.url,target:"_blank",children:i.title}):(0,t.jsx)("span",{className:h().title,children:i.title}),". "+i.booktitle,i.publisherString,i.info,i.dateString,(0,t.jsx)("a",{onClick:e=>{e.preventDefault(),a(!n)},title:"Show bib entry",href:"#",children:" [bib]"}),(0,t.jsx)("div",{className:"".concat(n?h().active:h().inactive),dangerouslySetInnerHTML:{__html:i.bibstring}})]})]})})}function x(e){let{groups:i}=e;return(0,t.jsx)("div",{children:Object.keys(i||{}).reverse().map(e=>(0,t.jsxs)("div",{className:h().groupContainer,children:[(0,t.jsx)("p",{className:h().title,children:e})," ",(0,t.jsx)("div",{className:h().groupItems,children:i[e].map((e,i)=>(0,t.jsx)(v,{item:e},i))})]},e))})}function v(e){let{item:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:h().projContainer,loading:"lazy",children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:h().pContent,children:[(0,t.jsx)("p",{children:i.hasLink?(0,t.jsx)("a",{href:i.url,target:"_blank",children:i.title}):(0,t.jsx)("span",{className:h().title,children:i.title})}),(0,t.jsxs)("p",{children:[" ",""+i.description," "]}),(0,t.jsxs)("p",{children:[i.type,i.category,i.identificator,i.dates]}),(0,t.jsxs)("p",{children:[" ",i.members," "]})]})]})})}function f(e){let{pageData:i}=e,[n,c]=(0,r.useState)("Publications");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:d().container,children:(0,t.jsxs)("div",{className:d().left,children:[(0,t.jsx)(g,{pageData:i}),(0,t.jsx)(N,{activities:n,setActivities:c}),(0,t.jsx)("div",{className:d().activitiesContainer,children:(()=>{switch(n){case"Publications":return(0,t.jsx)("div",{children:(0,t.jsx)(_,{groups:i.pubGroups})});case"Projects":return(0,t.jsx)("div",{children:(0,t.jsx)(x,{groups:i.projGroups})});case"Teaching":var e;return(0,t.jsx)("div",{children:null==i?void 0:null===(e=i.teaching)||void 0===e?void 0:e.map((e,i)=>(0,t.jsx)(b,{item:e},i))});case"More Details":return(0,t.jsx)(a.D,{remarkPlugins:[s.Z],rehypePlugins:[l.Z],components:p.w,children:i.contentHtml});default:return(0,t.jsx)("div",{children:"  "})}})()})]})})})}function g(e){let{pageData:i}=e;return(0,t.jsxs)("div",{className:d().topContainer,children:[(0,t.jsx)("div",{className:d().pictureContainer,children:(0,t.jsxs)("div",{className:d().name,children:[(0,t.jsx)("div",{className:d().picturePlaceholder,children:(0,t.jsx)("img",{className:d().profilePicture,src:i.image||i.picture||"/profile_placeholder.png",alt:"profile picture"})}),(0,t.jsx)("h4",{children:i.name})]})}),(0,t.jsxs)("div",{className:d().info,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:d().fieldName,children:"Office:"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldName,children:"Phone:"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldName,children:"Email:"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldName,children:"Position:"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:d().fieldData,children:i.office||"-"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldData,children:i.phone||"-"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldData,children:i.email||"-"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:d().fieldData,children:i.position||"-"})]})]})]})}function N(e){let{activities:i,setActivities:n}=e;return(0,t.jsxs)("div",{className:d().activities_nav,children:[(0,t.jsx)("div",{className:"".concat(d().activities_nav_item," ").concat("Publications"===i?d().selected:""),onClick:e=>{e.preventDefault(),n("Publications")},children:(0,t.jsx)("a",{children:"Publications"})}),(0,t.jsx)("div",{className:"".concat(d().activities_nav_item," ").concat("Projects"===i?d().selected:""),onClick:e=>{e.preventDefault(),n("Projects")},children:(0,t.jsx)("a",{children:"Projects"})}),(0,t.jsx)("div",{className:"".concat(d().activities_nav_item," ").concat("Teaching"===i?d().selected:""),onClick:e=>{e.preventDefault(),n("Teaching")},children:(0,t.jsx)("a",{children:"Teaching"})}),(0,t.jsx)("div",{className:"".concat(d().activities_nav_item," ").concat("More Details"===i?d().selected:""),onClick:e=>{e.preventDefault(),n("More Details")},children:(0,t.jsx)("a",{children:"More Details"})})]})}function b(e){let{item:i}=e;return(0,t.jsx)("div",{children:i.name?(0,t.jsxs)("span",{children:[(0,t.jsxs)(u(),{href:i.url||i.href||"#",children:[" ",i.name," "]}),i.description?"("+i.description+")":""," "]}):i})}var k=n(1163),D=n(6282),P=n.n(D);function C(e){let{pageData:i,id:n}=e;return(0,t.jsx)("div",{className:P().left,children:(0,t.jsx)(a.D,{...p.G,children:i.contentHtml,components:{...p.w,tbody:e=>(0,t.jsx)(y,{baseDir:i.baseDir,id:n,children:e.children})}})})}function y(e){return(0,t.jsx)("tbody",{children:e.children.map(i=>(0,t.jsx)(L,{baseDir:e.baseDir,id:e.id,row:i},i.key))})}function L(e){let[i,n]=(0,r.useState)(e.baseLink),a=(0,k.useRouter)();return(0,t.jsxs)("tr",{onClick:e=>{e.preventDefault(),a.push(i)},children:[(0,t.jsx)(w,{id:e.id,baseDir:e.baseDir,setLink:n,td:e.row.props.children[0]}),e.row.props.children.slice(1)]})}function w(e){return(0,t.jsx)("td",{children:(0,t.jsx)(T,{id:e.id,baseDir:e.baseDir,setLink:e.setLink,link:e.td.props.children[0]})})}function T(e){return(0,r.useEffect)(()=>{e.setLink(e.id.slice(0,-1).join("/")+"/"+e.baseDir+"/"+e.link.replace(" ","%20"))}),(0,t.jsxs)(t.Fragment,{children:[" ",e.link," "]})}var G=n(6721),Z=n(2553),M=n.n(Z),F=n(9332);function S(e){let{pageData:i,id:n}=e,r=(0,k.useRouter)(),c=(0,F.useSearchParams)(),d=c.has("start")?c.get("start"):0;d=(d=~~d)<0?0:d;let o=n.join("/"),u=d+i.cardLimit-d%i.cardLimit,m=d-i.cardLimit<0?0:d-i.cardLimit-d%i.cardLimit;return(0,t.jsxs)("div",{children:[0===d?(0,t.jsx)("div",{className:M().firstPageTop,children:(0,t.jsx)(a.D,{remarkPlugins:[s.Z],rehypePlugins:[l.Z],children:i.contentHtml,components:p.w})}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("div",{className:M().cardGridContainer,children:i.cards.slice(d,d+i.cardLimit).map((e,i)=>(0,t.jsx)(I,{cardData:e},i))}),(0,t.jsxs)("div",{className:M().pageNav,children:[Math.floor(d/i.cardLimit)>0?(0,t.jsx)("button",{onClick:e=>{e.preventDefault(),0===m?r.push({pathname:o}):r.push({pathname:o,query:{start:m}})},children:"PREV"}):(0,t.jsx)("div",{}),(0,t.jsx)(A,{numPages:i.numPages,start:d,limit:i.cardLimit,pathname:o}),Math.floor(d/i.cardLimit+1)<i.numPages?(0,t.jsx)("button",{onClick:e=>{e.preventDefault(),r.push({pathname:o,query:{start:u}})},children:"NEXT"}):(0,t.jsx)("div",{})]}),(0,t.jsxs)("div",{className:M().pageNav,children:["Page ",Math.floor(d/((null==i?void 0:i.cardLimit)|10)+1)," of ",i.numPages]})]})}function A(e){let{numPages:i,start:n,pathname:r,limit:a}=e,s=Math.floor(n/a),l=i>5,c=l?5:i,d=[...Array(c).keys()];return l&&(s<2||(d=s+2<i?d.map(e=>e+s-2):s+1<i?d.map(e=>e+s-3):d.map(e=>e+s-4))),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{children:d.map((e,i)=>(0,t.jsx)(u(),{href:r+"/?start="+e*a,className:e===s?M().pageLinksCurrent:M().pageLinks,children:e+1},i))})})}function I(e){let{cardData:i}=e,n=i.id.join("/");return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:M().cardContainer,children:[(0,t.jsx)("div",{className:M().cardTitle,children:(0,t.jsx)(u(),{className:M().cardTitle,href:n,children:(null==i?void 0:i.title)||(null==i?void 0:i.name)||i.id.slice(-1)})}),(0,t.jsx)("p",{children:i.date}),(0,t.jsxs)("div",{className:M().cardContent,children:[(0,t.jsxs)("div",{className:M().cardText,children:[(0,t.jsx)("p",{children:null==i?void 0:i.description}),(0,t.jsx)(u(),{href:n,children:"Read more"})]}),(0,t.jsx)("div",{className:M().cardImage,children:(0,t.jsx)("img",{src:(null==i?void 0:i.image)||(null==i?void 0:i.picture)||"/cardImage.png",alt:""})})]})]})})}var E=n(4770),R=n.n(E);n(9242);var q=n(5273),O=n.n(q);function H(e){let{title:i,items:n}=e,r=(0,k.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:O().menu_container,children:[(0,t.jsxs)("div",{className:O().menu_item,children:[" ",(0,t.jsx)("p",{children:i})," "]}),null==n?void 0:n.map((e,i)=>{let n=e.url||e.href||"#";return(0,t.jsxs)("div",{className:O().menu_item,onClick:e=>{e.preventDefault(),r.push(n)},children:[" ",(0,t.jsx)(u(),{href:n,children:e.name})," "]},i)})]})})}var J=n(6441),K=n(4106);function V(e){let i=J.M[e.navName];return(0,t.jsxs)("div",{className:R().layout,children:[(0,t.jsx)("div",{className:R().left,children:null==e?void 0:e.children}),(0,t.jsx)("div",{className:R().right,children:(0,t.jsx)(H,{title:null==i?void 0:i.title,items:null==i?void 0:i.items})})]})}function X(e){let[i,n]=(0,r.useState)(new Date);return(0,t.jsxs)("div",{className:R().layout,children:[(0,t.jsx)("div",{className:R().left,children:null==e?void 0:e.children}),(0,t.jsx)("div",{className:R().right,children:(0,t.jsx)(K.ZP,{onChange:function(e){n(e)},value:i})})]})}function W(e){let[i,n]=(0,r.useState)(new Date),a=J.M[e.navName];return(0,t.jsxs)("div",{className:R().layout,children:[(0,t.jsx)("div",{className:R().left,children:null==e?void 0:e.children}),(0,t.jsxs)("div",{className:R().right,children:[(0,t.jsx)(K.ZP,{onChange:function(e){n(e),console.log(i)},value:i}),(0,t.jsx)(H,{title:null==a?void 0:a.title,items:null==a?void 0:a.items})]})]})}var z=n(7981),U=n(4784),B=n.n(U);function Q(e){let{pageData:i}=e;return(0,t.jsxs)("div",{style:{padding:"30px",overflowWrap:"break-word"},children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.D,{remarkPlugins:[s.Z],rehypePlugins:[l.Z],components:p.w,children:i.contentHtml})}),(0,t.jsxs)("div",{className:B().container,children:[i.pub?(0,t.jsxs)("div",{children:[" ",(0,t.jsx)(_,{groups:i.pubGroups})]}):(0,t.jsx)(t.Fragment,{}),i.proj?(0,t.jsxs)("div",{children:[" ",(0,t.jsx)(x,{groups:i.projGroups})]}):(0,t.jsx)(t.Fragment,{})]})]})}var Y=n(9008),$=n.n(Y),ee=!0;function ei(e){let i=i=>{let n={id:e.id,pageData:e.pageData},a=(0,t.jsx)(z.Z,{...n}),s=new Proxy({},{get:function(e,i){return e.hasOwnProperty(i)?e[i]:a},set:function(e,i,n){if(!r.isValidElement(n))throw TypeError("invalid value for propery ".concat(i));return e[i]=n,!0}});return s.profile=(0,t.jsx)(f,{...n}),s.homepage=(0,t.jsx)(G.Z,{...n}),s.peopleList=(0,t.jsx)(C,{...n}),s.cardGrid=(0,t.jsx)(S,{...n}),s.pubAndProjList=(0,t.jsx)(Q,{...n}),s[i]};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($(),{children:(0,t.jsx)("title",{children:"".concat(e.pageTitle)})}),e.pageData.nav&&e.pageData.calendar?(0,t.jsx)(W,{navName:e.pageData.navName,children:i(e.pageData.template)}):e.pageData.nav?(0,t.jsx)(V,{navName:e.pageData.navName,children:i(e.pageData.template)}):e.pageData.calendar?(0,t.jsx)(X,{children:i(e.pageData.template)}):i(e.pageData.template)]})}},7981:function(e,i,n){"use strict";n.d(i,{Z:function(){return c}});var t=n(5893),r=n(1157),a=n(7126),s=n(762),l=n.n(s);function c(e){let{pageData:i}=e;return(0,t.jsx)("div",{className:l().container,style:i.style,children:(0,t.jsx)(r.D,{...a.G,children:i.contentHtml,components:a.w})})}},6721:function(e,i,n){"use strict";n.d(i,{Z:function(){return x}});var t=n(5893),r=n(5950),a=n.n(r);n(3374);var s=n(1157),l=n(6199),c=n(9234),d=n(1664),o=n.n(d),u=n(7126),p=n(7677),m=n(1466),h=n(1163),_=n(5675),j=n.n(_);function x(e){let{pageData:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:a().container,children:[(0,t.jsx)("div",{className:"".concat(a().left," ").concat(a().common),children:(0,t.jsx)(v,{items:i.cardsLeft})}),(0,t.jsx)("div",{className:"".concat(a().center," ").concat(a().common),children:(0,t.jsx)("div",{style:i.style,children:(0,t.jsx)(s.D,{remarkPlugins:[l.Z],rehypePlugins:[c.Z],children:i.contentHtml,components:u.w})})}),(0,t.jsx)("div",{className:"".concat(a().right," ").concat(a().common),children:(0,t.jsx)(v,{items:i.cardsRight})})]})]})}function v(e){let{items:i}=e,n={type:"loop",autoplay:"true",autoWidth:!0,speed:750,arrows:!1,classes:{page:"".concat(a().splideCustomPage," splide__pagination__page")},grid:{dimensions:[[2,1]],gap:{row:"0rem",col:"0rem"}}};return i?(0,t.jsx)("div",{children:(0,t.jsx)(p.tv,{"aria-label":"Featured",extensions:{Grid:m.r},options:n,children:i.map((e,i)=>(0,t.jsxs)(p.jw,{children:[" ",(0,t.jsx)(f,{cardData:e})," "]},i))})}):(0,t.jsx)("div",{})}function f(e){let{cardData:i}=e,n=(0,h.useRouter)(),r=i.id.join("/");return(0,t.jsxs)("div",{className:a().card,onClick:e=>{e.preventDefault(),n.push(r)},children:[(0,t.jsx)("p",{className:a().cardTitle,children:i.title||i.name||i.id.slice(-1)}),(0,t.jsx)("div",{className:a().imgContainer,children:(0,t.jsx)(j(),{src:i.image||i.picture||"/cardImage.png",width:180,height:120,alt:i.title||i.name||i.id.slice(-1)})}),(0,t.jsx)("p",{className:a().cardDescription,children:i.description}),(0,t.jsx)(o(),{href:r,children:"Read more"})]})}},140:function(e){e.exports={hr:"customMarkdown_hr__LKhy_",link:"customMarkdown_link__9kgSK",blockquote:"customMarkdown_blockquote__OlJ1r",list:"customMarkdown_list__tsSuE"}},5273:function(e){e.exports={menu_container:"menu_menu_container__V3DMF",menu_item:"menu_menu_item__UPSbx"}},6498:function(e){e.exports={pubContainer:"pubAndProj_pubContainer__3nJNk",projContainer:"pubAndProj_projContainer___DFxI",pType:"pubAndProj_pType__zRu15",pContent:"pubAndProj_pContent__H67lX",title:"pubAndProj_title__auq2r",active:"pubAndProj_active__u2fdJ",inactive:"pubAndProj_inactive__AaLKT"}},4770:function(e){e.exports={layout:"templateLayout_layout__bz49I",left:"templateLayout_left__Wv5V0",right:"templateLayout_right__gX_ra"}},762:function(e){e.exports={container:"basic_container___me9_"}},2553:function(e){e.exports={firstPageTop:"cardGrid_firstPageTop__k8JrK",cardGridContainer:"cardGrid_cardGridContainer__k0qrR",cardContainer:"cardGrid_cardContainer__no8VL",cardTitle:"cardGrid_cardTitle__W3Vye",cardContent:"cardGrid_cardContent__Co2Bp",cardText:"cardGrid_cardText__Wvzrv",cardImage:"cardGrid_cardImage__K3QnE",pageNav:"cardGrid_pageNav__RBMM4",pageLinks:"cardGrid_pageLinks__narok",pageLinksCurrent:"cardGrid_pageLinksCurrent__Z1Ucq"}},5950:function(e){e.exports={container:"homepage_container__YDvm9",common:"homepage_common__xINj3",left:"homepage_left__kfRfo",center:"homepage_center__5wAvt",right:"homepage_right__hAcaL",card:"homepage_card__mlSG9",cardTitle:"homepage_cardTitle__1wkZA",imgContainer:"homepage_imgContainer__CqWYG",cardDescription:"homepage_cardDescription__DXhld",splideCustomPage:"homepage_splideCustomPage__IAE_k"}},6282:function(e){e.exports={container:"peopleList_container__GhsGI",left:"peopleList_left__29Pan",right:"peopleList_right__vZwJi",title:"peopleList_title__5TAEI"}},5967:function(e){e.exports={container:"profile_container__Nif6u",left:"profile_left__ZQK98",right:"profile_right__dJ6OI",topContainer:"profile_topContainer__thOK4",pictureContainer:"profile_pictureContainer__Uto2j",name:"profile_name__Oyc3V",picturePlaceholder:"profile_picturePlaceholder__4f0bi",profilePicture:"profile_profilePicture__bXSZo",info:"profile_info__yTMCv",infoField:"profile_infoField__Mys18",fieldName:"profile_fieldName__ao_mB",fieldData:"profile_fieldData__TR8jn",activities_nav:"profile_activities_nav__0JsKn",activities_nav_item:"profile_activities_nav_item__NU6kM",selected:"profile_selected__bxVwZ",activitiesContainer:"profile_activitiesContainer__y07qh"}},4784:function(e){e.exports={container:"pubAndProjLIst_container__tPkml"}}},function(e){e.O(0,[955,427,774,888,179],function(){return e(e.s=743)}),_N_E=e.O()}]);