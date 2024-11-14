import './polyfills.server.mjs';
import{A as U,B as a1,C as k2,D as w2,E as p,F as P2,G as I,H as F1,M as O2,P as _2,Q as E2,S as b1,T as I2,U as F2,V as Z2,W as q2,Z as T2,a as E1,b as d2,c as C2,d as E,da as D2,e as M2,ea as R2,f as b2,fa as j2,g as M1,ga as g1,h as r1,i as f1,j as g2,k as x2,l as H2,m as L2,n as x,o as A,p as V2,q as N2,r as y2,s as Y,t as n1,u as I1,v as z,w as h,x as k,y as S2,z as A2}from"./chunk-QHFVVD2D.mjs";import{a as l,b}from"./chunk-5XUXGTUW.mjs";var l4=()=>["/home"],r4=()=>["active"];function f4(c,e){if(c&1){let n=S2();z(0,"ul")(1,"li")(2,"a",11),U("click",function(){r1(n);let t=a1();return f1(t.setActive("home"))}),p(3,"Home"),h()(),z(4,"li")(5,"a",12),U("click",function(){r1(n);let t=a1();return f1(t.setActive("about"))}),p(6,"About"),h()(),z(7,"li")(8,"a",13),U("click",function(){r1(n);let t=a1();return f1(t.setActive("projects"))}),p(9,"Projects"),h()(),z(10,"li")(11,"a",14),U("click",function(){r1(n);let t=a1();return f1(t.setActive("contact"))}),p(12,"Contact"),h()()()}if(c&2){let n=a1();x(2),n1("active",n.activeLink==="home"),x(3),n1("active",n.activeLink==="about"),x(3),n1("active",n.activeLink==="projects"),x(3),n1("active",n.activeLink==="contact")}}function m4(c,e){c&1&&k(0,"div",10)}var x1=class c{constructor(e){this.platformId=e}activeLink="home";showMenu=!0;showMenu2=!1;onResize(){I2(this.platformId)&&(this.showMenu=window.innerWidth>1304)}ngOnInit(){this.onResize()}setActive(e){this.activeLink=e}toggleMenu(){this.showMenu=!this.showMenu,this.showMenu2=!this.showMenu2}scroll(e){document.querySelector(`#${e}`)?.scrollIntoView({behavior:"smooth",block:"start"}),this.setActive(e)}static \u0275fac=function(n){return new(n||c)(A(x2))};static \u0275cmp=E({type:c,selectors:[["app-nav-bar"]],hostBindings:function(n,a){n&1&&U("resize",function(){return a.onResize()},!1,L2)},standalone:!0,features:[I],decls:28,vars:7,consts:[[1,"container"],[1,"content"],[1,"logo"],[1,"logo-txt"],[3,"routerLink","routerLinkActive"],[1,"wrapper"],[1,"static-txt"],[1,"dynamic-txts"],[1,"menu"],[1,"material-symbols-outlined",2,"z-index","1000",3,"click"],[1,"menu-background"],["href","#home",3,"click"],["href","#about",3,"click"],["href","#projects",3,"click"],["href","#contact",3,"click"]],template:function(n,a){n&1&&(z(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p")(5,"a",4),p(6,"LC"),h()()(),z(7,"div",5)(8,"div",6),p(9,"I'm a"),h(),z(10,"ul",7)(11,"li")(12,"span"),p(13,"Developer"),h()(),z(14,"li")(15,"span"),p(16,"Engineer"),h()(),z(17,"li")(18,"span"),p(19,"Designer"),h()(),z(20,"li")(21,"span"),p(22,"Freelancer"),h()()()()(),z(23,"div",8)(24,"span",9),U("click",function(){return a.toggleMenu()}),p(25),h(),N2(26,f4,13,8,"ul")(27,m4,1,0,"div",10),h()()()),n&2&&(x(5),Y("routerLink",F1(5,l4))("routerLinkActive",F1(6,r4)),x(20),P2(" ",a.showMenu?"collapse_content":"expand_content"," "),x(),I1(a.showMenu?26:-1),x(),I1(a.showMenu2?27:-1))},dependencies:[b1,g1,D2,R2],styles:['.container[_ngcontent-%COMP%]{max-width:1350px;margin:auto;height:5vh;position:sticky;top:0;z-index:1000;height:100px}.content[_ngcontent-%COMP%]{background-color:#191858;padding-top:10px;display:flex;justify-content:space-between;align-items:center;height:100px}.logo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;min-width:400px;padding:10px}.logo-txt[_ngcontent-%COMP%]{display:flex;color:#d3d30a;margin-right:30px;font-size:50px;transition:.3s}.logo-txt[_ngcontent-%COMP%]:hover, .logo-txt[_ngcontent-%COMP%]:focus{scale:1.2}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;width:60px;height:60px;border-radius:50%;background-color:#3498db;text-align:center;line-height:60px;margin:0 5px;padding:10px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:60px;list-style-type:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff;text-decoration:none;transition:font-size .5s,color .5s,text-decoration .5s}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-family:Doto,sans-serif;font-size:40px;color:#d3d30a;text-decoration:line-through}.menu-background[_ngcontent-%COMP%]{height:100vh;position:absolute;inset:0;background-color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:0;transform:translate(-200%);animation:_ngcontent-%COMP%_slideInLeft .6s ease-out forwards}@keyframes _ngcontent-%COMP%_slideInLeft{to{opacity:1;transform:translate(0)}}.wrapper[_ngcontent-%COMP%]{display:inline-flex;padding:10px}.wrapper[_ngcontent-%COMP%]   .static-txt[_ngcontent-%COMP%]{margin-top:22px;color:#fff;font-size:60px;font-weight:400}.wrapper[_ngcontent-%COMP%]   .dynamic-txts[_ngcontent-%COMP%]{margin-left:15px;line-height:90px;height:90px;overflow:hidden;margin-top:15px}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#d3d30a;list-style:none;font-size:68px;font-weight:500;position:relative;top:0;animation:_ngcontent-%COMP%_slide 6s steps(4) infinite}@keyframes _ngcontent-%COMP%_slide{to{top:-360px}}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;font-family:Doto,sans-serif}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;height:100%;width:100%;background:#191858;border-left:2px solid rgb(211,211,10);animation:_ngcontent-%COMP%_typing 1.5s steps(10) infinite}@keyframes _ngcontent-%COMP%_typing{to{left:100%;margin:0 -35px 0 35px}}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:18px;opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.material-symbols-outlined[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 1304px){.menu[_ngcontent-%COMP%]{background-color:#d3d30a}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#3498db;width:180px;border-radius:10px;box-shadow:5px 10px #191858}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;position:absolute;margin-top:50vh;inset:0;text-align:center;padding:40px;justify-content:center;align-items:center;flex-direction:column;z-index:100}.wrapper[_ngcontent-%COMP%]{scale:.8}.logo-txt[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px}.material-symbols-outlined[_ngcontent-%COMP%]{position:absolute;right:1%;top:30%;display:block;color:#3498db;font-size:70px;border-radius:50px;cursor:pointer;margin-right:15px}.material-symbols-outlined[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}}@media screen and (max-width: 775px){.wrapper[_ngcontent-%COMP%]{display:none}}']})};var B2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var G2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var Y2={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var U2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var $2=()=>{},i2={},M3={},b3=null,g3={mark:$2,measure:$2};try{typeof window<"u"&&(i2=window),typeof document<"u"&&(M3=document),typeof MutationObserver<"u"&&(b3=MutationObserver),typeof performance<"u"&&(g3=performance)}catch{}var{userAgent:X2=""}=i2.navigator||{},j=i2,C=M3,K2=b3,H1=g3,H6=!!j.document,q=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",x3=~X2.indexOf("MSIE")||~X2.indexOf("Trident/"),M="classic",H3="duotone",L="sharp",V="sharp-duotone",h4=[M,H3,L,V],z4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},J2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},p4=["kit"],u4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,v4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,d4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},C4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},M4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},b4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},g4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},x4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},L3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},H4=["solid","regular","light","thin","duotone","brands"],V3=[1,2,3,4,5,6,7,8,9,10],L4=V3.concat([11,12,13,14,15,16,17,18,19,20]),m1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=[...Object.keys(b4),...H4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",m1.GROUP,m1.SWAP_OPACITY,m1.PRIMARY,m1.SECONDARY].concat(V3.map(c=>"".concat(c,"x"))).concat(L4.map(c=>"w-".concat(c))),N4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},y4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},S4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Q2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},F="___FONT_AWESOME___",W1=16,N3="fa",y3="svg-inline--fa",J="data-fa-i2svg",B1="data-fa-pseudo-element",A4="data-fa-pseudo-element-pending",o2="data-prefix",s2="data-icon",c3="fontawesome-i2svg",k4="async",w4=["HTML","HEAD","STYLE","SCRIPT"],S3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),A3=[M,L,V];function d1(c){return new Proxy(c,{get(e,n){return n in e?e[n]:e[M]}})}var k3=l({},L3);k3[M]=l(l(l({},L3[M]),J2.kit),J2["kit-duotone"]);var X=d1(k3),G1=l({},x4);G1[M]=l(l(l({},G1[M]),Q2.kit),Q2["kit-duotone"]);var u1=d1(G1),Y1=l({},g4);Y1[M]=l(l({},Y1[M]),S4.kit);var K=d1(Y1),U1=l({},M4);U1[M]=l(l({},U1[M]),y4.kit);var P4=d1(U1),O4=u4,w3="fa-layers-text",_4=v4,E4=l({},z4),L6=d1(E4),I4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q1=m1,o1=new Set;Object.keys(u1[M]).map(o1.add.bind(o1));Object.keys(u1[L]).map(o1.add.bind(o1));Object.keys(u1[V]).map(o1.add.bind(o1));var F4=[...p4,...V4],z1=j.FontAwesomeConfig||{};function Z4(c){var e=C.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function q4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,t=q4(Z4(n));t!=null&&(z1[a]=t)});var P3={styleDefault:"solid",familyDefault:"classic",cssPrefix:N3,replacementClass:y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z1.familyPrefix&&(z1.cssPrefix=z1.familyPrefix);var s1=l(l({},P3),z1);s1.autoReplaceSvg||(s1.observeMutations=!1);var m={};Object.keys(P3).forEach(c=>{Object.defineProperty(m,c,{enumerable:!0,set:function(e){s1[c]=e,p1.forEach(n=>n(m))},get:function(){return s1[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(c){s1.cssPrefix=c,p1.forEach(e=>e(m))},get:function(){return s1.cssPrefix}});j.FontAwesomeConfig=m;var p1=[];function T4(c){return p1.push(c),()=>{p1.splice(p1.indexOf(c),1)}}var D=W1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D4(c){if(!c||!q)return;let e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let n=C.head.childNodes,a=null;for(let t=n.length-1;t>-1;t--){let i=n[t],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return C.head.insertBefore(e,a),c}var R4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function v1(){let c=12,e="";for(;c-- >0;)e+=R4[Math.random()*62|0];return e}function l1(c){let e=[];for(let n=(c||[]).length>>>0;n--;)e[n]=c[n];return e}function l2(c){return c.classList?l1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function O3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j4(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,'="').concat(O3(c[n]),'" '),"").trim()}function S1(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,": ").concat(c[n].trim(),";"),"")}function r2(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function W4(c){let{transform:e,containerWidth:n,iconWidth:a}=c,t={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),r={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:t,inner:r,path:f}}function B4(c){let{transform:e,width:n=W1,height:a=W1,startCentered:t=!1}=c,i="";return t&&x3?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):t?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var G4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _3(){let c=N3,e=y3,n=m.cssPrefix,a=m.replacementClass,t=G4;if(n!==c||a!==e){let i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");t=t.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return t}var e3=!1;function T1(){m.autoAddCss&&!e3&&(D4(_3()),e3=!0)}var Y4={mixout(){return{dom:{css:_3,insertCss:T1}}},hooks(){return{beforeDOMElementCreation(){T1()},beforeI2svg(){T1()}}}},Z=j||{};Z[F]||(Z[F]={});Z[F].styles||(Z[F].styles={});Z[F].hooks||(Z[F].hooks={});Z[F].shims||(Z[F].shims=[]);var P=Z[F],E3=[],I3=function(){C.removeEventListener("DOMContentLoaded",I3),N1=1,E3.map(c=>c())},N1=!1;q&&(N1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),N1||C.addEventListener("DOMContentLoaded",I3));function U4(c){q&&(N1?setTimeout(c,0):E3.push(c))}function C1(c){let{tag:e,attributes:n={},children:a=[]}=c;return typeof c=="string"?O3(c):"<".concat(e," ").concat(j4(n),">").concat(a.map(C1).join(""),"</").concat(e,">")}function n3(c,e,n){if(c&&c[e]&&c[e][n])return{prefix:e,iconName:n,icon:c[e][n]}}var $4=function(e,n){return function(a,t,i,o){return e.call(n,a,t,i,o)}},D1=function(e,n,a,t){var i=Object.keys(e),o=i.length,s=t!==void 0?$4(n,t):n,r,f,u;for(a===void 0?(r=1,u=e[i[0]]):(r=0,u=a);r<o;r++)f=i[r],u=s(u,e[f],f,e);return u};function X4(c){let e=[],n=0,a=c.length;for(;n<a;){let t=c.charCodeAt(n++);if(t>=55296&&t<=56319&&n<a){let i=c.charCodeAt(n++);(i&64512)==56320?e.push(((t&1023)<<10)+(i&1023)+65536):(e.push(t),n--)}else e.push(t)}return e}function $1(c){let e=X4(c);return e.length===1?e[0].toString(16):null}function K4(c,e){let n=c.length,a=c.charCodeAt(e),t;return a>=55296&&a<=56319&&n>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(a-55296)*1024+t-56320+65536:a}function a3(c){return Object.keys(c).reduce((e,n)=>{let a=c[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function X1(c,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,t=a3(e);typeof P.hooks.addPack=="function"&&!a?P.hooks.addPack(c,a3(e)):P.styles[c]=l(l({},P.styles[c]||{}),t),c==="fas"&&X1("fa",e)}var{styles:$,shims:J4}=P,Q4={[M]:Object.values(K[M]),[L]:Object.values(K[L]),[V]:Object.values(K[V])},f2=null,F3={},Z3={},q3={},T3={},D3={},c5={[M]:Object.keys(X[M]),[L]:Object.keys(X[L]),[V]:Object.keys(X[V])};function e5(c){return~F4.indexOf(c)}function n5(c,e){let n=e.split("-"),a=n[0],t=n.slice(1).join("-");return a===c&&t!==""&&!e5(t)?t:null}var R3=()=>{let c=a=>D1($,(t,i,o)=>(t[o]=D1(i,a,{}),t),{});F3=c((a,t,i)=>(t[3]&&(a[t[3]]=i),t[2]&&t[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Z3=c((a,t,i)=>(a[i]=i,t[2]&&t[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),D3=c((a,t,i)=>{let o=t[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});let e="far"in $||m.autoFetchSvg,n=D1(J4,(a,t)=>{let i=t[0],o=t[1],s=t[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});q3=n.names,T3=n.unicodes,f2=A1(m.styleDefault,{family:m.familyDefault})};T4(c=>{f2=A1(c.styleDefault,{family:m.familyDefault})});R3();function m2(c,e){return(F3[c]||{})[e]}function a5(c,e){return(Z3[c]||{})[e]}function R(c,e){return(D3[c]||{})[e]}function j3(c){return q3[c]||{prefix:null,iconName:null}}function t5(c){let e=T3[c],n=m2("fas",c);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return f2}var h2=()=>({prefix:null,iconName:null,rest:[]});function A1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=M}=e,a=X[n][c],t=u1[n][c]||u1[n][a],i=c in P.styles?c:null;return t||i||null}var i5={[M]:Object.keys(K[M]),[L]:Object.keys(K[L]),[V]:Object.keys(K[V])};function k1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a={[M]:"".concat(m.cssPrefix,"-").concat(M),[L]:"".concat(m.cssPrefix,"-").concat(L),[V]:"".concat(m.cssPrefix,"-").concat(V)},t=null,i=M,o=h4.filter(r=>r!==H3);o.forEach(r=>{(c.includes(a[r])||c.some(f=>i5[r].includes(f)))&&(i=r)});let s=c.reduce((r,f)=>{let u=n5(m.cssPrefix,f);if($[f]?(f=Q4[i].includes(f)?P4[i][f]:f,t=f,r.prefix=f):c5[i].indexOf(f)>-1?(t=f,r.prefix=A1(f,{family:i})):u?r.iconName=u:f!==m.replacementClass&&!o.some(d=>f===a[d])&&r.rest.push(f),!n&&r.prefix&&r.iconName){let d=t==="fa"?j3(r.iconName):{},v=R(r.prefix,r.iconName);d.prefix&&(t=null),r.iconName=d.iconName||v||r.iconName,r.prefix=d.prefix||r.prefix,r.prefix==="far"&&!$.far&&$.fas&&!m.autoFetchSvg&&(r.prefix="fas")}return r},h2());return(c.includes("fa-brands")||c.includes("fab"))&&(s.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===L&&($.fass||m.autoFetchSvg)&&(s.prefix="fass",s.iconName=R(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===V&&($.fasds||m.autoFetchSvg)&&(s.prefix="fasds",s.iconName=R(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||t==="fa")&&(s.prefix=W()||"fas"),s}var K1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let t=n.reduce(this._pullDefinitions,{});Object.keys(t).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),t[i]),X1(i,t[i]);let o=K[M][i];o&&X1(o,t[i]),R3()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(t=>{let{prefix:i,iconName:o,icon:s}=a[t],r=s[2];e[i]||(e[i]={}),r.length>0&&r.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}},t3=[],t1={},i1={},o5=Object.keys(i1);function s5(c,e){let{mixoutsTo:n}=e;return t3=c,t1={},Object.keys(i1).forEach(a=>{o5.indexOf(a)===-1&&delete i1[a]}),t3.forEach(a=>{let t=a.mixout?a.mixout():{};if(Object.keys(t).forEach(i=>{typeof t[i]=="function"&&(n[i]=t[i]),typeof t[i]=="object"&&Object.keys(t[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=t[i][o]})}),a.hooks){let i=a.hooks();Object.keys(i).forEach(o=>{t1[o]||(t1[o]=[]),t1[o].push(i[o])})}a.provides&&a.provides(i1)}),n}function J1(c,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),t=2;t<n;t++)a[t-2]=arguments[t];return(t1[c]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Q(c){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(t1[c]||[]).forEach(i=>{i.apply(null,n)})}function B(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return i1[c]?i1[c].apply(null,e):void 0}function Q1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,n=c.prefix||W();if(e)return e=R(n,e)||e,n3(W3.definitions,n,e)||n3(P.styles,n,e)}var W3=new K1,l5=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,Q("noAuto")},r5={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(Q("beforeI2svg",c),B("pseudoElements2svg",c),B("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,U4(()=>{m5({autoReplaceSvgRoot:e}),Q("watch",c)})}},f5={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:R(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=A1(c[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(m.cssPrefix,"-"))>-1||c.match(O4))){let e=k1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=W();return{prefix:e,iconName:R(e,c)||c}}}},N={noAuto:l5,config:m,dom:r5,parse:f5,library:W3,findIconDefinition:Q1,toHtml:C1},m5=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=C}=c;(Object.keys(P.styles).length>0||m.autoFetchSvg)&&q&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function w1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(n=>C1(n))}}),Object.defineProperty(c,"node",{get:function(){if(!q)return;let n=C.createElement("div");return n.innerHTML=c.html,n.children}}),c}function h5(c){let{children:e,main:n,mask:a,attributes:t,styles:i,transform:o}=c;if(r2(o)&&n.found&&!a.found){let{width:s,height:r}=n,f={x:s/r/2,y:.5};t.style=S1(b(l({},i),{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function z5(c){let{prefix:e,iconName:n,children:a,attributes:t,symbol:i}=c,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(l({},t),{id:o}),children:a}]}]}function z2(c){let{icons:{main:e,mask:n},prefix:a,iconName:t,transform:i,symbol:o,title:s,maskId:r,titleId:f,extra:u,watchable:d=!1}=c,{width:v,height:g}=n.found?n:e,T=a==="fak",G=[m.replacementClass,t?"".concat(m.cssPrefix,"-").concat(t):""].filter(e1=>u.classes.indexOf(e1)===-1).filter(e1=>e1!==""||!!e1).concat(u.classes).join(" "),y={children:[],attributes:b(l({},u.attributes),{"data-prefix":a,"data-icon":t,class:G,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(g)})},_=T&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/g*16*.0625,"em")}:{};d&&(y.attributes[J]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||v1())},children:[s]}),delete y.attributes.title);let H=b(l({},y),{prefix:a,iconName:t,main:e,mask:n,maskId:r,transform:i,symbol:o,styles:l(l({},_),u.styles)}),{children:S,attributes:c1}=n.found&&e.found?B("generateAbstractMask",H)||{children:[],attributes:{}}:B("generateAbstractIcon",H)||{children:[],attributes:{}};return H.children=S,H.attributes=c1,o?z5(H):h5(H)}function i3(c){let{content:e,width:n,height:a,transform:t,title:i,extra:o,watchable:s=!1}=c,r=b(l(l({},o.attributes),i?{title:i}:{}),{class:o.classes.join(" ")});s&&(r[J]="");let f=l({},o.styles);r2(t)&&(f.transform=B4({transform:t,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let u=S1(f);u.length>0&&(r.style=u);let d=[];return d.push({tag:"span",attributes:r,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function p5(c){let{content:e,title:n,extra:a}=c,t=b(l(l({},a.attributes),n?{title:n}:{}),{class:a.classes.join(" ")}),i=S1(a.styles);i.length>0&&(t.style=i);let o=[];return o.push({tag:"span",attributes:t,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:R1}=P;function c2(c){let e=c[0],n=c[1],[a]=c.slice(4),t=null;return Array.isArray(a)?t={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(q1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q1.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q1.PRIMARY),fill:"currentColor",d:a[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:t}}var u5={found:!1,width:512,height:512};function v5(c,e){!S3&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function e2(c,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=W()),new Promise((a,t)=>{if(n==="fa"){let i=j3(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&R1[e]&&R1[e][c]){let i=R1[e][c];return a(c2(i))}v5(c,e),a(b(l({},u5),{icon:m.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var o3=()=>{},n2=m.measurePerformance&&H1&&H1.mark&&H1.measure?H1:{mark:o3,measure:o3},h1='FA "6.6.0"',d5=c=>(n2.mark("".concat(h1," ").concat(c," begins")),()=>B3(c)),B3=c=>{n2.mark("".concat(h1," ").concat(c," ends")),n2.measure("".concat(h1," ").concat(c),"".concat(h1," ").concat(c," begins"),"".concat(h1," ").concat(c," ends"))},p2={begin:d5,end:B3},L1=()=>{};function s3(c){return typeof(c.getAttribute?c.getAttribute(J):null)=="string"}function C5(c){let e=c.getAttribute?c.getAttribute(o2):null,n=c.getAttribute?c.getAttribute(s2):null;return e&&n}function M5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function b5(){return m.autoReplaceSvg===!0?V1.replace:V1[m.autoReplaceSvg]||V1.replace}function g5(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function x5(c){return C.createElement(c)}function G3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=c.tag==="svg"?g5:x5}=e;if(typeof c=="string")return C.createTextNode(c);let a=n(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){a.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){a.appendChild(G3(i,{ceFn:n}))}),a}function H5(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var V1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(n=>{e.parentNode.insertBefore(G3(n),e)}),e.getAttribute(J)===null&&m.keepOriginalSource){let n=C.createComment(H5(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){let e=c[0],n=c[1];if(~l2(e).indexOf(m.replacementClass))return V1.replace(c);let a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===m.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let t=n.map(i=>C1(i)).join(`
`);e.setAttribute(J,""),e.innerHTML=t}};function l3(c){c()}function Y3(c,e){let n=typeof e=="function"?e:L1;if(c.length===0)n();else{let a=l3;m.mutateApproach===k4&&(a=j.requestAnimationFrame||l3),a(()=>{let t=b5(),i=p2.begin("mutate");c.map(t),i(),n()})}}var u2=!1;function U3(){u2=!0}function a2(){u2=!1}var y1=null;function r3(c){if(!K2||!m.observeMutations)return;let{treeCallback:e=L1,nodeCallback:n=L1,pseudoElementsCallback:a=L1,observeMutationsRoot:t=C}=c;y1=new K2(i=>{if(u2)return;let o=W();l1(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!s3(s.addedNodes[0])&&(m.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&s3(s.target)&&~I4.indexOf(s.attributeName))if(s.attributeName==="class"&&C5(s.target)){let{prefix:r,iconName:f}=k1(l2(s.target));s.target.setAttribute(o2,r||o),f&&s.target.setAttribute(s2,f)}else M5(s.target)&&n(s.target)})}),q&&y1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function L5(){y1&&y1.disconnect()}function V5(c){let e=c.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,t)=>{let i=t.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function N5(c){let e=c.getAttribute("data-prefix"),n=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",t=k1(l2(c));return t.prefix||(t.prefix=W()),e&&n&&(t.prefix=e,t.iconName=n),t.iconName&&t.prefix||(t.prefix&&a.length>0&&(t.iconName=a5(t.prefix,c.innerText)||m2(t.prefix,$1(c.innerText))),!t.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function y5(c){let e=l1(c.attributes).reduce((t,i)=>(t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t),{}),n=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||v1()):(e["aria-hidden"]="true",e.focusable="false")),e}function S5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:t}=N5(c),i=y5(c),o=J1("parseNodeAttributes",{},c),s=e.styleParser?V5(c):[];return l({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:s,attributes:i}},o)}var{styles:A5}=P;function $3(c){let e=m.autoReplaceSvg==="nest"?f3(c,{styleParser:!1}):f3(c);return~e.extra.classes.indexOf(w3)?B("generateLayersText",c,e):B("generateSvgReplacementMutation",c,e)}var O=new Set;A3.map(c=>{O.add("fa-".concat(c))});Object.keys(X[M]).map(O.add.bind(O));Object.keys(X[L]).map(O.add.bind(O));Object.keys(X[V]).map(O.add.bind(O));O=[...O];function m3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();let n=C.documentElement.classList,a=u=>n.add("".concat(c3,"-").concat(u)),t=u=>n.remove("".concat(c3,"-").concat(u)),i=m.autoFetchSvg?O:A3.map(u=>"fa-".concat(u)).concat(Object.keys(A5));i.includes("fa")||i.push("fa");let o=[".".concat(w3,":not([").concat(J,"])")].concat(i.map(u=>".".concat(u,":not([").concat(J,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=l1(c.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),t("complete");else return Promise.resolve();let r=p2.begin("onTree"),f=s.reduce((u,d)=>{try{let v=$3(d);v&&u.push(v)}catch(v){S3||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise((u,d)=>{Promise.all(f).then(v=>{Y3(v,()=>{a("active"),a("complete"),t("pending"),typeof e=="function"&&e(),r(),u()})}).catch(v=>{r(),d(v)})})}function k5(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$3(c).then(n=>{n&&Y3([n],e)})}function w5(c){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Q1(e||{}),{mask:t}=n;return t&&(t=(t||{}).icon?t:Q1(t||{})),c(a,b(l({},n),{mask:t}))}}var P5=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=w,symbol:a=!1,mask:t=null,maskId:i=null,title:o=null,titleId:s=null,classes:r=[],attributes:f={},styles:u={}}=e;if(!c)return;let{prefix:d,iconName:v,icon:g}=c;return w1(l({type:"icon"},c),()=>(Q("beforeDOMElementCreation",{iconDefinition:c,params:e}),m.autoA11y&&(o?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||v1()):(f["aria-hidden"]="true",f.focusable="false")),z2({icons:{main:c2(g),mask:t?c2(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:v,transform:l(l({},w),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:u,classes:r}})))},O5={mixout(){return{icon:w5(P5)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=m3,c.nodeCallback=k5,c}}},provides(c){c.i2svg=function(e){let{node:n=C,callback:a=()=>{}}=e;return m3(n,a)},c.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:t,titleId:i,prefix:o,transform:s,symbol:r,mask:f,maskId:u,extra:d}=n;return new Promise((v,g)=>{Promise.all([e2(a,o),f.iconName?e2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[G,y]=T;v([e,z2({icons:{main:G,mask:y},prefix:o,iconName:a,transform:s,symbol:r,maskId:u,title:t,titleId:i,extra:d,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(e){let{children:n,attributes:a,main:t,transform:i,styles:o}=e,s=S1(o);s.length>0&&(a.style=s);let r;return r2(i)&&(r=B("generateAbstractTransformGrouping",{main:t,transform:i,containerWidth:t.width,iconWidth:t.width})),n.push(r||t.icon),{children:n,attributes:a}}}},_5={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return w1({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:c,params:e});let a=[];return c(t=>{Array.isArray(t)?t.map(i=>{a=a.concat(i.abstract)}):a=a.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},E5={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:t={},styles:i={}}=e;return w1({type:"counter",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),p5({content:c.toString(),title:n,extra:{attributes:t,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},I5={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=w,title:a=null,classes:t=[],attributes:i={},styles:o={}}=e;return w1({type:"text",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),i3({content:c,transform:l(l({},w),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...t]}})))}}},provides(c){c.generateLayersText=function(e,n){let{title:a,transform:t,extra:i}=n,o=null,s=null;if(x3){let r=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/r,s=f.height/r}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,i3({content:e.innerHTML,width:o,height:s,transform:t,title:a,extra:i,watchable:!0})])}}},F5=new RegExp('"',"ug"),h3=[1105920,1112319],z3=l(l(l({FontAwesome:{normal:"fas",400:"fas"}},C4),d4),N4),t2=Object.keys(z3).reduce((c,e)=>(c[e.toLowerCase()]=z3[e],c),{}),Z5=Object.keys(t2).reduce((c,e)=>{let n=t2[e];return c[e]=n[900]||[...Object.entries(n)][0][1],c},{});function q5(c){let e=c.replace(F5,""),n=K4(e,0),a=n>=h3[0]&&n<=h3[1],t=e.length===2?e[0]===e[1]:!1;return{value:$1(t?e[0]:e),isSecondary:a||t}}function T5(c,e){let n=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),t=isNaN(a)?"normal":a;return(t2[n]||{})[t]||Z5[n]}function p3(c,e){let n="".concat(A4).concat(e.replace(":","-"));return new Promise((a,t)=>{if(c.getAttribute(n)!==null)return a();let o=l1(c.children).filter(v=>v.getAttribute(B1)===e)[0],s=j.getComputedStyle(c,e),r=s.getPropertyValue("font-family"),f=r.match(_4),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!f)return c.removeChild(o),a();if(f&&d!=="none"&&d!==""){let v=s.getPropertyValue("content"),g=T5(r,u),{value:T,isSecondary:G}=q5(v),y=f[0].startsWith("FontAwesome"),_=m2(g,T),H=_;if(y){let S=t5(T);S.iconName&&S.prefix&&(_=S.iconName,g=S.prefix)}if(_&&!G&&(!o||o.getAttribute(o2)!==g||o.getAttribute(s2)!==H)){c.setAttribute(n,H),o&&c.removeChild(o);let S=S5(),{extra:c1}=S;c1.attributes[B1]=e,e2(_,g).then(e1=>{let o4=z2(b(l({},S),{icons:{main:e1,mask:h2()},prefix:g,iconName:H,extra:c1,watchable:!0})),_1=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(_1,c.firstChild):c.appendChild(_1),_1.outerHTML=o4.map(s4=>C1(s4)).join(`
`),c.removeAttribute(n),a()}).catch(t)}else a()}else a()})}function D5(c){return Promise.all([p3(c,"::before"),p3(c,"::after")])}function R5(c){return c.parentNode!==document.head&&!~w4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(B1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function u3(c){if(q)return new Promise((e,n)=>{let a=l1(c.querySelectorAll("*")).filter(R5).map(D5),t=p2.begin("searchPseudoElements");U3(),Promise.all(a).then(()=>{t(),a2(),e()}).catch(()=>{t(),a2(),n()})})}var j5={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=u3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:n=C}=e;m.searchPseudoElements&&u3(n)}}},v3=!1,W5={mixout(){return{dom:{unwatch(){U3(),v3=!0}}}},hooks(){return{bootstrap(){r3(J1("mutationObserverCallbacks",{}))},noAuto(){L5()},watch(c){let{observeMutationsRoot:e}=c;v3?a2():r3(J1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},d3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((n,a)=>{let t=a.toLowerCase().split("-"),i=t[0],o=t.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},B5={mixout(){return{parse:{transform:c=>d3(c)}}},hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-transform");return n&&(c.transform=d3(n)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:t,iconWidth:i}=e,o={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),r="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(r," ").concat(f)},d={transform:"translate(".concat(i/2*-1," -256)")},v={outer:o,inner:u,path:d};return{tag:"g",attributes:l({},v.outer),children:[{tag:"g",attributes:l({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),v.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function C3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function G5(c){return c.tag==="g"?c.children:[c]}var Y5={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-mask"),a=n?k1(n.split(" ").map(t=>t.trim())):h2();return a.prefix||(a.prefix=W()),c.mask=a,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:n,attributes:a,main:t,mask:i,maskId:o,transform:s}=e,{width:r,icon:f}=t,{width:u,icon:d}=i,v=W4({transform:s,containerWidth:u,iconWidth:r}),g={tag:"rect",attributes:b(l({},j1),{fill:"white"})},T=f.children?{children:f.children.map(C3)}:{},G={tag:"g",attributes:l({},v.inner),children:[C3(l({tag:f.tag,attributes:l(l({},f.attributes),v.path)},T))]},y={tag:"g",attributes:l({},v.outer),children:[G]},_="mask-".concat(o||v1()),H="clip-".concat(o||v1()),S={tag:"mask",attributes:b(l({},j1),{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},c1={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:G5(d)},S]};return n.push(c1,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(_,")")},j1)}),{children:n,attributes:a}}}},U5={provides(c){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:b(l({},a),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=b(l({},t),{attributeName:"opacity"}),o={tag:"circle",attributes:b(l({},a),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:b(l({},t),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(l({},i),{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:b(l({},a),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:b(l({},i),{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:b(l({},a),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(l({},i),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$5={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return c.symbol=a,c}}}},X5=[Y4,O5,_5,E5,I5,j5,W5,B5,Y5,U5,$5];s5(X5,{mixoutsTo:N});var V6=N.noAuto,X3=N.config,N6=N.library,K3=N.dom,J3=N.parse,y6=N.findIconDefinition,S6=N.toHtml,Q3=N.icon,A6=N.layer,K5=N.text,J5=N.counter;var Q5=["*"],c6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},e6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},n6=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},v2=new WeakSet,c4="fa-auto-css";function a6(c,e){if(!e.autoAddCss||v2.has(c))return;if(c.getElementById(c4)!=null){e.autoAddCss=!1,v2.add(c);return}let n=c.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",c4),n.innerHTML=K3.css();let a=c.head.childNodes,t=null;for(let i=a.length-1;i>-1;i--){let o=a[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(t=o)}c.head.insertBefore(n,t),e.autoAddCss=!1,v2.add(c)}var t6=c=>c.prefix!==void 0&&c.iconName!==void 0,i6=(c,e)=>t6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},o6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){X3.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),s6=(()=>{class c{constructor(){this.definitions={}}addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let t of a.icon[2])typeof t=="string"&&(this.definitions[a.prefix][t]=a)}}addIconPacks(...n){for(let a of n){let t=Object.keys(a).map(i=>a[i]);this.addIcons(...t)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),l6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=b2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[M1]})}}return c})(),r6=(()=>{class c{constructor(n,a){this.renderer=n,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(A(V2),A(g2))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[M1,I],ngContentSelectors:Q5,decls:1,vars:0,template:function(a,t){a&1&&(k2(),w2(0))},encapsulation:2})}}return c})(),e4=(()=>{class c{constructor(n,a,t,i,o){this.sanitizer=n,this.config=a,this.iconLibrary=t,this.stackItem=i,this.document=C2(E2),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){e6();return}if(n){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let t=this.buildParams();a6(this.document,this.config);let i=Q3(a,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let a=i6(n,this.config.defaultPrefix);if("icon"in a)return a;let t=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return t??(c6(a),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?J3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:n6(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||c)(A(Z2),A(o6),A(s6),A(l6,8),A(r6,8))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,t){a&2&&(A2("innerHTML",t.renderedIconHTML,H2),y2("title",t.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[M1,I],decls:0,vars:0,template:function(a,t){},encapsulation:2})}}return c})();var n4=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=M2({type:c})}static{this.\u0275inj=d2({})}}return c})();var P1=class c{faInstagram=G2;faGithub=U2;faFacebook=Y2;faLinkedin=B2;static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-home"]],standalone:!0,features:[I],decls:91,vars:4,consts:[["id","home"],[1,"container"],["id","talkbubble"],[1,"web-links"],[1,"git-text",2,"margin-bottom","73px"],["href","https://github.com/luichemo/webportfolio",1,"github"],[3,"icon"],[2,"margin-top","5px"],[2,"padding-bottom","5px"],[1,"link-text",2,"margin-bottom","31px"],["href","https://www.linkedin.com/in/luka-chemia-a0a339236/",1,"linkedin"],[1,"inst-text",2,"margin-bottom","10px"],["href","https://www.instagram.com/luichemo/profilecard/?igsh=dW1oZGxwdGNjc2Y=",1,"instagram"],[1,"fb-text",2,"margin-bottom","31px"],["href","https://www.facebook.com/lukaa2002?mibextid=LQQJ4d",1,"facebook"],[2,"text-decoration","underline"],[1,"proj-btn"],[1,"btn"],["href","#projects"],["id","about"],["id","projects"],["id","contact"]],template:function(n,a){n&1&&(z(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li",4)(6,"a",5),k(7,"fa-icon",6),h(),z(8,"p",7),p(9,"G"),h(),z(10,"p"),p(11,"i"),h(),z(12,"p"),p(13,"t"),h(),z(14,"p"),p(15,"h"),h(),z(16,"p"),p(17,"u"),h(),z(18,"p",8),p(19,"b"),h()(),z(20,"li",9)(21,"a",10),k(22,"fa-icon",6),h(),z(23,"p",7),p(24,"L"),h(),z(25,"p"),p(26,"i"),h(),z(27,"p"),p(28,"n"),h(),z(29,"p"),p(30,"k"),h(),z(31,"p"),p(32,"e"),h(),z(33,"p"),p(34,"d"),h(),z(35,"p"),p(36,"i"),h(),z(37,"p",8),p(38,"n"),h()(),z(39,"li",11)(40,"a",12),k(41,"fa-icon",6),h(),z(42,"p",7),p(43,"I"),h(),z(44,"p"),p(45,"n"),h(),z(46,"p"),p(47,"s"),h(),z(48,"p"),p(49,"t"),h(),z(50,"p"),p(51,"a"),h(),z(52,"p"),p(53,"g"),h(),z(54,"p"),p(55,"r"),h(),z(56,"p"),p(57,"a"),h(),z(58,"p",8),p(59,"m"),h()(),z(60,"li",13)(61,"a",14),k(62,"fa-icon",6),h(),z(63,"p",7),p(64,"F"),h(),z(65,"p"),p(66,"a"),h(),z(67,"p"),p(68,"c"),h(),z(69,"p"),p(70,"e"),h(),z(71,"p"),p(72,"b"),h(),z(73,"p"),p(74,"o"),h(),z(75,"p"),p(76,"o"),h(),z(77,"p",8),p(78,"k"),h()()()(),z(79,"h1"),p(80,"Hey, I'm Luka Chemia, Software Engineer "),z(81,"span",15),p(82,"You"),h(),p(83," Need !"),h(),z(84,"div",16)(85,"button",17)(86,"a",18),p(87,"Projects"),h()()()()()(),k(88,"div",19)(89,"div",20)(90,"div",21)),n&2&&(x(7),Y("icon",a.faGithub),x(15),Y("icon",a.faLinkedin),x(19),Y("icon",a.faInstagram),x(21),Y("icon",a.faFacebook))},dependencies:[b1,g1,n4,e4],styles:["*[_ngcontent-%COMP%]{font-family:Doto,sans-serif}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:80vh}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#191858;text-align:center;font-size:60px;font-weight:700}#talkbubble[_ngcontent-%COMP%]{width:1350px;height:70vh;background-image:linear-gradient(#64b3f4,#c2e59c);position:relative;z-index:2;clip-path:polygon(0% 0%,100% 0%,100% 75%,50% 100%,0% 75%)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:5px;display:flex;justify-content:center;align-items:center;list-style-type:none;gap:40px;margin-top:10px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#191858;padding:10px 15px;border-radius:50% 50% 0% 0%;font-size:30px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transition:font-size .5s,color .5s,text-decoration .5s}li[_ngcontent-%COMP%]{text-align:center}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-weight:100;color:#fff;margin-top:0;opacity:0;transform:translateY(10px);transition:opacity .4s,transform .4s}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover + p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover ~ p[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover{background-color:#2b3137;color:#fff}.git-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2b3137}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover{background-color:#1877f2;color:#fff}.fb-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#1877f2}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover{background-color:#0077b5;color:#fff}.link-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#0077b5}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover{background-image:linear-gradient(#f9ce34,#ee2a7b,#6228d7);color:#fff}.inst-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#6228d7}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{animation-delay:.5s}h1[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}h1[_ngcontent-%COMP%]{animation-delay:.5s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.proj-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:12vh}.btn[_ngcontent-%COMP%]{font-size:30px;border-radius:5px;background-color:#191858;border:solid 1px #191858;font-weight:700;opacity:0;transform:translate(-200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards;width:200px;height:70px}.btn[_ngcontent-%COMP%]:hover{background-color:#d3d30a;cursor:pointer}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 30px;color:#d3d30a}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#191858}@media screen and (max-width: 1500px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;color:#191858;text-align:center;font-size:32px;font-weight:500}}@media screen and (max-width: 756px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;font-weight:500}}@media screen and (max-width: 450px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:10vh}.web-links[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 375px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20vh}.btn[_ngcontent-%COMP%]{display:none}}#about[_ngcontent-%COMP%], #projects[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]{height:100vh;border:solid green;max-width:1350px;margin:auto}"]})};var O1=class c{title="webportfolio";static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-root"]],standalone:!0,features:[I],decls:2,vars:0,consts:[[1,"nav"]],template:function(n,a){n&1&&k(0,"app-nav-bar",0)(1,"app-home")},dependencies:[x1,P1],styles:[".nav[_ngcontent-%COMP%]{height:120px}"]})};var a4=[];var t4={providers:[O2({eventCoalescing:!0}),j2(a4),q2()]};var m6={providers:[T2()]},i4=_2(t4,m6);var h6=()=>F2(O1,i4),p8=h6;export{p8 as a};
