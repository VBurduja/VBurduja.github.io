(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1609)}])},6441:function(e,t,n){"use strict";n.d(t,{E:function(){return r},M:function(){return o}});let r=[{name:"Home",url:"/",dropdown:"home"},{name:"People",url:"/people/index",dropdown:"people"},{name:"Admission",url:"https://acs.pub.ro/admitere/viitorii-studenti/",dropdown:"admission"},{name:"Education",url:"/education/index",dropdown:"education"},{name:"Research",url:"/research/index",dropdown:"research"},{name:"Partners",url:"/partners",dropdown:"partners"},{name:"News",url:"/news/index",dropdown:"news"},{name:"Contact",url:"/",dropdown:"contact"}],o={people:{title:"People",items:[{name:"Faculty",url:"/people/faculty"},{name:"Research",url:"/people/research"},{name:"Faculty",url:"/people/faculty"},{name:"Faculty2",url:"/people/faculty"},{name:"Faculty",url:"/people/faculty"},{name:"Faculty2",url:"/people/faculty"}]},education:{title:"Education",items:[{name:"Undergraduate",href:"/education/undergraduate"},{name:"Master",href:"/education/master"},{name:"PhD",href:"/education/phd"},{name:"Courses",href:"/education/courses"}]},news:{title:"Education",items:[{name:"Undergraduate",href:"/education/undergraduate"},{name:"Master",href:"/education/master"},{name:"PhD",href:"/education/phd"},{name:"Courses",href:"/education/courses"}]},research:{title:"Research",items:[{name:"Publications",url:"/research/publications"},{name:"Projects",url:"/research/projects"}]}}},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",s="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(8754),o=n(1757),i=o._(n(7294)),a=r._(n(2636)),l=n(7757),u=n(3735),s=n(3341);n(4210);let c=r._(n(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,r,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function h(e){let[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:a,className:l,imgStyle:u,blurStyle:s,isLazy:c,fetchPriority:d,fill:f,placeholder:p,loading:g,srcString:_,config:v,unoptimized:y,loader:b,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:C,setShowAltText:x,onLoad:E,onError:O,...P}=e;return g=c?"lazy":g,i.default.createElement("img",{...P,...h(d),loading:g,width:o,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...u,...s},...n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,_,p,w,j,C,y))},[_,p,w,j,C,O,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,_,p,w,j,C,y)},onError:e=>{x(!0),"blur"===p&&C(!0),O&&O(e)}})}),_=(0,i.forwardRef)((e,t)=>{var n;let r,o,{src:m,sizes:_,unoptimized:v=!1,priority:y=!1,loading:b,className:w,quality:j,width:C,height:x,fill:E,style:O,onLoad:P,onLoadingComplete:N,placeholder:R="empty",blurDataURL:M,fetchPriority:S,layout:k,objectFit:A,objectPosition:I,lazyBoundary:T,lazyRoot:F,...z}=e,L=(0,i.useContext)(s.ImageConfigContext),D=(0,i.useMemo)(()=>{let e=d||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[L]),U=z.loader||c.default;delete z.loader;let H="__next_img_default"in U;if(H){if("custom"===D.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(O={...O,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!_&&(_=t)}let V="",K=p(C),B=p(x);if("object"==typeof(n=m)&&(f(n)||void 0!==n.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,o=e.blurHeight,M=M||e.blurDataURL,V=e.src,!E){if(K||B){if(K&&!B){let t=K/e.width;B=Math.round(e.height*t)}else if(!K&&B){let t=B/e.height;K=Math.round(e.width*t)}}else K=e.width,B=e.height}}let G=!y&&("lazy"===b||void 0===b);(!(m="string"==typeof m?m:V)||m.startsWith("data:")||m.startsWith("blob:"))&&(v=!0,G=!1),D.unoptimized&&(v=!0),H&&m.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0),y&&(S="high");let[W,q]=(0,i.useState)(!1),[J,X]=(0,i.useState)(!1),Y=p(j),Z=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:I}:{},J?{}:{color:"transparent"},O),Q="blur"===R&&M&&!W?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:K,heightInt:B,blurWidth:r,blurHeight:o,blurDataURL:M,objectFit:Z.objectFit})+'")'}:{},$=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:i,width:u[c]})}}({config:D,src:m,unoptimized:v,width:K,quality:Y,sizes:_,loader:U}),ee=m,et=(0,i.useRef)(P);(0,i.useEffect)(()=>{et.current=P},[P]);let en=(0,i.useRef)(N);(0,i.useEffect)(()=>{en.current=N},[N]);let er={isLazy:G,imgAttributes:$,heightInt:B,widthInt:K,qualityInt:Y,className:w,imgStyle:Z,blurStyle:Q,loading:b,config:D,fetchPriority:S,fill:E,unoptimized:v,placeholder:R,loader:U,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:q,setShowAltText:X,...z};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...er,ref:t}),y?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy,...h(S)})):null)}),v=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),o=r._(n(7294)),i=n(4532),a=n(3353),l=n(1410),u=n(9064),s=n(370),c=n(9955),d=n(4224),f=n(508),p=n(1516),m=n(4266),h=n(3991),g=new Set;function _(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(g.has(i))return;g.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let n,r;let{href:l,as:g,children:y,prefetch:b=null,passHref:w,replace:j,shallow:C,scroll:x,locale:E,onClick:O,onMouseEnter:P,onTouchStart:N,legacyBehavior:R=!1,...M}=e;n=y,R&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let S=!1!==b,k=null===b?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,A=o.default.useContext(c.RouterContext),I=o.default.useContext(d.AppRouterContext),T=null!=A?A:I,F=!A,{href:z,as:L}=o.default.useMemo(()=>{if(!A){let e=v(l);return{href:e,as:g?v(g):e}}let[e,t]=(0,i.resolveHref)(A,l,!0);return{href:e,as:g?(0,i.resolveHref)(A,g):t||e}},[A,l,g]),D=o.default.useRef(z),U=o.default.useRef(L);R&&(r=o.default.Children.only(n));let H=R?r&&"object"==typeof r&&r.ref:t,[V,K,B]=(0,f.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(U.current!==L||D.current!==z)&&(B(),U.current=L,D.current=z),V(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[L,H,z,B,V]);o.default.useEffect(()=>{T&&K&&S&&_(T,z,L,{locale:E},{kind:k},F)},[L,z,K,E,S,null==A?void 0:A.locale,T,F,k]);let W={ref:G,onClick(e){R||"function"!=typeof O||O(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,i,l,u,s,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:s,scroll:u}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};c?o.default.startTransition(m):m()}(e,T,z,L,j,C,x,E,F,S)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(S||!F)&&_(T,z,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},F)},onTouchStart(e){R||"function"!=typeof N||N(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(S||!F)&&_(T,z,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},F)}};if((0,u.isAbsoluteUrl)(L))W.href=L;else if(!R||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);W.href=t||(0,m.addBasePath)((0,s.addLocale)(L,e,null==A?void 0:A.defaultLocale))}return R?o.default.cloneElement(r,W):o.default.createElement("a",{...M,...W},n)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(7294),o=n(29),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,f.current]);let m=(0,r.useCallback)(()=>{d(!1)},[]);return[p,c,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=r||t,u=o||n,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},1609:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),o=n(2533),i=n.n(o);n(3814),n(9008);var a=n(5675),l=n.n(a),u=n(2717),s=n.n(u),c=n(1664),d=n.n(c),f=n(6441);function p(e){let{children:t}=e;return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)("div",{className:s().left}),(0,r.jsxs)("div",{className:s().center,children:[(0,r.jsx)(m,{}),(0,r.jsx)("div",{className:s().content,children:t}),(0,r.jsx)(h,{})]}),(0,r.jsx)("div",{className:s().right})]})}function m(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:s().imageContainer,children:(0,r.jsx)(l(),{src:"/logo.png",alt:"",width:1150,height:75,className:s().img,priority:!0})}),(0,r.jsxs)("div",{className:s().headerContainer,children:[f.E.map(e=>{var t;return(0,r.jsxs)("div",{className:"".concat(s().item," ").concat(s().dropdown),children:[(0,r.jsx)("div",{className:s().dropbtn,children:(0,r.jsx)(d(),{href:e.url,className:s().link,children:(0,r.jsx)("span",{children:e.name})})}),e.dropdown?(0,r.jsx)("div",{className:s().dropdownContent,children:null===(t=f.M[e.dropdown])||void 0===t?void 0:t.items.map((e,t)=>(0,r.jsx)(d(),{href:e.url||e.href||"#",children:e.name},t))}):(0,r.jsx)(r.Fragment,{})]},e.name)}),(0,r.jsx)("div",{className:"".concat(s().item," ").concat(s().dropdown),onClick:e=>{e.preventDefault(),window.print()},children:(0,r.jsx)("div",{className:s().dropbtn,children:(0,r.jsx)(d(),{href:".",className:s().link,children:(0,r.jsx)("span",{children:"Print"})})})})]})]})})}function h(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:s().footerContainer})})}function g(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)("main",{className:i().className,children:(0,r.jsx)(p,{children:(0,r.jsx)(t,{...n})})})}},3814:function(){},2533:function(e){e.exports={style:{fontFamily:"'__Rubik_6a5b81', '__Rubik_Fallback_6a5b81'",fontStyle:"normal"},className:"__className_6a5b81"}},2717:function(e){e.exports={container:"layout_container__fbLkO",left:"layout_left__rdZuH",center:"layout_center__i8D8L",content:"layout_content__563Cv",right:"layout_right__z_baU",headerContainer:"layout_headerContainer__lh_qu",item:"layout_item__1nzOA",link:"layout_link__z7_nb",footerContainer:"layout_footerContainer__O7UyO",dropbtn:"layout_dropbtn__6SDvb",drobdown:"layout_drobdown__cGV_V",dropdownContent:"layout_dropdownContent__jOLXQ",dropdown:"layout_dropdown___VeZ4",imageContainer:"layout_imageContainer__aKvJc",img:"layout_img__7uobj"}},9008:function(e,t,n){n(2636)},5675:function(e,t,n){e.exports=n(3740)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);