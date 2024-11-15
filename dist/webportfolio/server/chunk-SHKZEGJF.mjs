import './polyfills.server.mjs';
import{A as U,B as t1,C as A2,D as P2,E as p,F as w2,G as I,H as F1,M as O2,P as _2,Q as E2,S as b1,T as I2,U as F2,V as Z2,W as T2,Z as q2,a as E1,b as v2,c as C2,d as E,da as D2,e as M2,ea as R2,f as b2,fa as j2,g as M1,ga as g1,h as r1,i as f1,j as g2,k as x2,l as H2,m as L2,n as H,o as A,p as V2,q as y2,r as N2,s as Y,t as n1,u as I1,v as r,w as l,x as b,y as S2,z as k2}from"./chunk-QHFVVD2D.mjs";import{a as f,b as g}from"./chunk-5XUXGTUW.mjs";var l4=()=>["/home"],r4=()=>["active"];function f4(c,e){if(c&1){let n=S2();r(0,"ul")(1,"li")(2,"a",11),U("click",function(){r1(n);let a=t1();return f1(a.setActive("home"))}),p(3,"Home"),l()(),r(4,"li")(5,"a",12),U("click",function(){r1(n);let a=t1();return f1(a.setActive("about"))}),p(6,"About"),l()(),r(7,"li")(8,"a",13),U("click",function(){r1(n);let a=t1();return f1(a.setActive("projects"))}),p(9,"Projects"),l()(),r(10,"li")(11,"a",14),U("click",function(){r1(n);let a=t1();return f1(a.setActive("contact"))}),p(12,"Contact"),l()()()}if(c&2){let n=t1();H(2),n1("active",n.activeLink==="home"),H(3),n1("active",n.activeLink==="about"),H(3),n1("active",n.activeLink==="projects"),H(3),n1("active",n.activeLink==="contact")}}function m4(c,e){c&1&&b(0,"div",10)}var x1=class c{constructor(e){this.platformId=e}activeLink="home";showMenu=!0;showMenu2=!1;onResize(){I2(this.platformId)&&(this.showMenu=window.innerWidth>1304)}ngOnInit(){this.onResize()}setActive(e){this.activeLink=e}toggleMenu(){this.showMenu=!this.showMenu,this.showMenu2=!this.showMenu2}scroll(e){document.querySelector(`#${e}`)?.scrollIntoView({behavior:"smooth",block:"start"}),this.setActive(e)}static \u0275fac=function(n){return new(n||c)(A(x2))};static \u0275cmp=E({type:c,selectors:[["app-nav-bar"]],hostBindings:function(n,t){n&1&&U("resize",function(){return t.onResize()},!1,L2)},standalone:!0,features:[I],decls:28,vars:7,consts:[[1,"container"],[1,"content"],[1,"logo"],[1,"logo-txt"],[3,"routerLink","routerLinkActive"],[1,"wrapper"],[1,"static-txt"],[1,"dynamic-txts"],[1,"menu"],[1,"material-symbols-outlined",2,"z-index","1000",3,"click"],[1,"menu-background"],["href","#home",3,"click"],["href","#about",3,"click"],["href","#projects",3,"click"],["href","#contact",3,"click"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p")(5,"a",4),p(6,"LC"),l()()(),r(7,"div",5)(8,"div",6),p(9,"I'm a"),l(),r(10,"ul",7)(11,"li")(12,"span"),p(13,"Developer"),l()(),r(14,"li")(15,"span"),p(16,"Engineer"),l()(),r(17,"li")(18,"span"),p(19,"Designer"),l()(),r(20,"li")(21,"span"),p(22,"Freelancer"),l()()()()(),r(23,"div",8)(24,"span",9),U("click",function(){return t.toggleMenu()}),p(25),l(),y2(26,f4,13,8,"ul")(27,m4,1,0,"div",10),l()()()),n&2&&(H(5),Y("routerLink",F1(5,l4))("routerLinkActive",F1(6,r4)),H(20),w2(" ",t.showMenu?"collapse_content":"expand_content"," "),H(),I1(t.showMenu?26:-1),H(),I1(t.showMenu2?27:-1))},dependencies:[b1,g1,D2,R2],styles:['.container[_ngcontent-%COMP%]{max-width:1350px;margin:auto;height:5vh;position:sticky;top:0;z-index:1000;height:100px}.content[_ngcontent-%COMP%]{background-color:#191858;display:flex;justify-content:space-between;align-items:center;height:100px}.logo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;min-width:400px;padding:10px}.logo-txt[_ngcontent-%COMP%]{display:flex;color:#d3d30a;margin-right:30px;font-size:50px;transition:.3s}.logo-txt[_ngcontent-%COMP%]:hover, .logo-txt[_ngcontent-%COMP%]:focus{scale:1.2}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;width:60px;height:60px;border-radius:50%;background-color:#3498db;text-align:center;line-height:60px;margin:0 5px;padding:10px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:60px;list-style-type:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff;text-decoration:none;transition:font-size .5s,color .5s,text-decoration .5s}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-family:Doto,sans-serif;font-size:40px;color:#d3d30a;text-decoration:line-through}.menu-background[_ngcontent-%COMP%]{height:100vh;position:absolute;inset:0;background-color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:0;transform:translate(-200%);animation:_ngcontent-%COMP%_slideInLeft .6s ease-out forwards}@keyframes _ngcontent-%COMP%_slideInLeft{to{opacity:1;transform:translate(0)}}.wrapper[_ngcontent-%COMP%]{display:inline-flex;padding:10px}.wrapper[_ngcontent-%COMP%]   .static-txt[_ngcontent-%COMP%]{margin-top:22px;color:#fff;font-size:60px;font-weight:400}.wrapper[_ngcontent-%COMP%]   .dynamic-txts[_ngcontent-%COMP%]{margin-left:15px;line-height:90px;height:90px;overflow:hidden;margin-top:15px}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#d3d30a;list-style:none;font-size:68px;font-weight:500;position:relative;top:0;animation:_ngcontent-%COMP%_slide 6s steps(4) infinite}@keyframes _ngcontent-%COMP%_slide{to{top:-360px}}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;font-family:Doto,sans-serif}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;height:100%;width:100%;background:#191858;border-left:2px solid rgb(211,211,10);animation:_ngcontent-%COMP%_typing 1.5s steps(10) infinite}@keyframes _ngcontent-%COMP%_typing{to{left:100%;margin:0 -35px 0 35px}}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:18px;opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.material-symbols-outlined[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 1304px){.menu[_ngcontent-%COMP%]{background-color:#d3d30a}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#3498db;width:180px;border-radius:10px;box-shadow:5px 10px #191858}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;position:absolute;margin-top:50vh;inset:0;text-align:center;padding:40px;justify-content:center;align-items:center;flex-direction:column;z-index:100}.wrapper[_ngcontent-%COMP%]{scale:.8}.logo-txt[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px}.material-symbols-outlined[_ngcontent-%COMP%]{position:absolute;right:1%;top:20%;display:block;color:#3498db;font-size:70px;border-radius:50px;cursor:pointer;margin-right:15px}.material-symbols-outlined[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}}@media screen and (max-width: 775px){.wrapper[_ngcontent-%COMP%]{display:none}.logo-txt[_ngcontent-%COMP%]{font-size:30px;padding:0}.material-symbols-outlined[_ngcontent-%COMP%]{font-size:40px;top:30%}}']})};var B2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var G2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var Y2={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var U2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var $2=()=>{},i2={},M3={},b3=null,g3={mark:$2,measure:$2};try{typeof window<"u"&&(i2=window),typeof document<"u"&&(M3=document),typeof MutationObserver<"u"&&(b3=MutationObserver),typeof performance<"u"&&(g3=performance)}catch{}var{userAgent:X2=""}=i2.navigator||{},j=i2,C=M3,K2=b3,H1=g3,H6=!!j.document,T=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",x3=~X2.indexOf("MSIE")||~X2.indexOf("Trident/"),M="classic",H3="duotone",V="sharp",y="sharp-duotone",h4=[M,H3,V,y],z4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},J2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},p4=["kit"],d4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,u4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,v4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},C4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},M4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},b4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},g4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},x4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},L3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},H4=["solid","regular","light","thin","duotone","brands"],V3=[1,2,3,4,5,6,7,8,9,10],L4=V3.concat([11,12,13,14,15,16,17,18,19,20]),m1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=[...Object.keys(b4),...H4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",m1.GROUP,m1.SWAP_OPACITY,m1.PRIMARY,m1.SECONDARY].concat(V3.map(c=>"".concat(c,"x"))).concat(L4.map(c=>"w-".concat(c))),y4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},N4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},S4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Q2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},F="___FONT_AWESOME___",W1=16,y3="fa",N3="svg-inline--fa",J="data-fa-i2svg",B1="data-fa-pseudo-element",k4="data-fa-pseudo-element-pending",o2="data-prefix",s2="data-icon",c3="fontawesome-i2svg",A4="async",P4=["HTML","HEAD","STYLE","SCRIPT"],S3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),k3=[M,V,y];function v1(c){return new Proxy(c,{get(e,n){return n in e?e[n]:e[M]}})}var A3=f({},L3);A3[M]=f(f(f({},L3[M]),J2.kit),J2["kit-duotone"]);var X=v1(A3),G1=f({},x4);G1[M]=f(f(f({},G1[M]),Q2.kit),Q2["kit-duotone"]);var d1=v1(G1),Y1=f({},g4);Y1[M]=f(f({},Y1[M]),S4.kit);var K=v1(Y1),U1=f({},M4);U1[M]=f(f({},U1[M]),N4.kit);var w4=v1(U1),O4=d4,P3="fa-layers-text",_4=u4,E4=f({},z4),L6=v1(E4),I4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T1=m1,o1=new Set;Object.keys(d1[M]).map(o1.add.bind(o1));Object.keys(d1[V]).map(o1.add.bind(o1));Object.keys(d1[y]).map(o1.add.bind(o1));var F4=[...p4,...V4],z1=j.FontAwesomeConfig||{};function Z4(c){var e=C.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function T4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,t]=e,a=T4(Z4(n));a!=null&&(z1[t]=a)});var w3={styleDefault:"solid",familyDefault:"classic",cssPrefix:y3,replacementClass:N3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z1.familyPrefix&&(z1.cssPrefix=z1.familyPrefix);var s1=f(f({},w3),z1);s1.autoReplaceSvg||(s1.observeMutations=!1);var z={};Object.keys(w3).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){s1[c]=e,p1.forEach(n=>n(z))},get:function(){return s1[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){s1.cssPrefix=c,p1.forEach(e=>e(z))},get:function(){return s1.cssPrefix}});j.FontAwesomeConfig=z;var p1=[];function q4(c){return p1.push(c),()=>{p1.splice(p1.indexOf(c),1)}}var D=W1,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D4(c){if(!c||!T)return;let e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let n=C.head.childNodes,t=null;for(let a=n.length-1;a>-1;a--){let i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=i)}return C.head.insertBefore(e,t),c}var R4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u1(){let c=12,e="";for(;c-- >0;)e+=R4[Math.random()*62|0];return e}function l1(c){let e=[];for(let n=(c||[]).length>>>0;n--;)e[n]=c[n];return e}function l2(c){return c.classList?l1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function O3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j4(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,'="').concat(O3(c[n]),'" '),"").trim()}function S1(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,": ").concat(c[n].trim(),";"),"")}function r2(c){return c.size!==P.size||c.x!==P.x||c.y!==P.y||c.rotate!==P.rotate||c.flipX||c.flipY}function W4(c){let{transform:e,containerWidth:n,iconWidth:t}=c,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(i," ").concat(o," ").concat(s)},h={transform:"translate(".concat(t/2*-1," -256)")};return{outer:a,inner:m,path:h}}function B4(c){let{transform:e,width:n=W1,height:t=W1,startCentered:a=!1}=c,i="";return a&&x3?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-t/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var G4=`:root, :host {
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
}`;function _3(){let c=y3,e=N3,n=z.cssPrefix,t=z.replacementClass,a=G4;if(n!==c||t!==e){let i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(t))}return a}var e3=!1;function q1(){z.autoAddCss&&!e3&&(D4(_3()),e3=!0)}var Y4={mixout(){return{dom:{css:_3,insertCss:q1}}},hooks(){return{beforeDOMElementCreation(){q1()},beforeI2svg(){q1()}}}},Z=j||{};Z[F]||(Z[F]={});Z[F].styles||(Z[F].styles={});Z[F].hooks||(Z[F].hooks={});Z[F].shims||(Z[F].shims=[]);var w=Z[F],E3=[],I3=function(){C.removeEventListener("DOMContentLoaded",I3),y1=1,E3.map(c=>c())},y1=!1;T&&(y1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),y1||C.addEventListener("DOMContentLoaded",I3));function U4(c){T&&(y1?setTimeout(c,0):E3.push(c))}function C1(c){let{tag:e,attributes:n={},children:t=[]}=c;return typeof c=="string"?O3(c):"<".concat(e," ").concat(j4(n),">").concat(t.map(C1).join(""),"</").concat(e,">")}function n3(c,e,n){if(c&&c[e]&&c[e][n])return{prefix:e,iconName:n,icon:c[e][n]}}var $4=function(e,n){return function(t,a,i,o){return e.call(n,t,a,i,o)}},D1=function(e,n,t,a){var i=Object.keys(e),o=i.length,s=a!==void 0?$4(n,a):n,m,h,d;for(t===void 0?(m=1,d=e[i[0]]):(m=0,d=t);m<o;m++)h=i[m],d=s(d,e[h],h,e);return d};function X4(c){let e=[],n=0,t=c.length;for(;n<t;){let a=c.charCodeAt(n++);if(a>=55296&&a<=56319&&n<t){let i=c.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function $1(c){let e=X4(c);return e.length===1?e[0].toString(16):null}function K4(c,e){let n=c.length,t=c.charCodeAt(e),a;return t>=55296&&t<=56319&&n>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(t-55296)*1024+a-56320+65536:t}function t3(c){return Object.keys(c).reduce((e,n)=>{let t=c[n];return!!t.icon?e[t.iconName]=t.icon:e[n]=t,e},{})}function X1(c,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:t=!1}=n,a=t3(e);typeof w.hooks.addPack=="function"&&!t?w.hooks.addPack(c,t3(e)):w.styles[c]=f(f({},w.styles[c]||{}),a),c==="fas"&&X1("fa",e)}var{styles:$,shims:J4}=w,Q4={[M]:Object.values(K[M]),[V]:Object.values(K[V]),[y]:Object.values(K[y])},f2=null,F3={},Z3={},T3={},q3={},D3={},c5={[M]:Object.keys(X[M]),[V]:Object.keys(X[V]),[y]:Object.keys(X[y])};function e5(c){return~F4.indexOf(c)}function n5(c,e){let n=e.split("-"),t=n[0],a=n.slice(1).join("-");return t===c&&a!==""&&!e5(a)?a:null}var R3=()=>{let c=t=>D1($,(a,i,o)=>(a[o]=D1(i,t,{}),a),{});F3=c((t,a,i)=>(a[3]&&(t[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{t[s.toString(16)]=i}),t)),Z3=c((t,a,i)=>(t[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{t[s]=i}),t)),D3=c((t,a,i)=>{let o=a[2];return t[i]=i,o.forEach(s=>{t[s]=i}),t});let e="far"in $||z.autoFetchSvg,n=D1(J4,(t,a)=>{let i=a[0],o=a[1],s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(t.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(t.unicodes[i.toString(16)]={prefix:o,iconName:s}),t},{names:{},unicodes:{}});T3=n.names,q3=n.unicodes,f2=k1(z.styleDefault,{family:z.familyDefault})};q4(c=>{f2=k1(c.styleDefault,{family:z.familyDefault})});R3();function m2(c,e){return(F3[c]||{})[e]}function t5(c,e){return(Z3[c]||{})[e]}function R(c,e){return(D3[c]||{})[e]}function j3(c){return T3[c]||{prefix:null,iconName:null}}function a5(c){let e=q3[c],n=m2("fas",c);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return f2}var h2=()=>({prefix:null,iconName:null,rest:[]});function k1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=M}=e,t=X[n][c],a=d1[n][c]||d1[n][t],i=c in w.styles?c:null;return a||i||null}var i5={[M]:Object.keys(K[M]),[V]:Object.keys(K[V]),[y]:Object.keys(K[y])};function A1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,t={[M]:"".concat(z.cssPrefix,"-").concat(M),[V]:"".concat(z.cssPrefix,"-").concat(V),[y]:"".concat(z.cssPrefix,"-").concat(y)},a=null,i=M,o=h4.filter(m=>m!==H3);o.forEach(m=>{(c.includes(t[m])||c.some(h=>i5[m].includes(h)))&&(i=m)});let s=c.reduce((m,h)=>{let d=n5(z.cssPrefix,h);if($[h]?(h=Q4[i].includes(h)?w4[i][h]:h,a=h,m.prefix=h):c5[i].indexOf(h)>-1?(a=h,m.prefix=k1(h,{family:i})):d?m.iconName=d:h!==z.replacementClass&&!o.some(v=>h===t[v])&&m.rest.push(h),!n&&m.prefix&&m.iconName){let v=a==="fa"?j3(m.iconName):{},u=R(m.prefix,m.iconName);v.prefix&&(a=null),m.iconName=v.iconName||u||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!$.far&&$.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},h2());return(c.includes("fa-brands")||c.includes("fab"))&&(s.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===V&&($.fass||z.autoFetchSvg)&&(s.prefix="fass",s.iconName=R(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===y&&($.fasds||z.autoFetchSvg)&&(s.prefix="fasds",s.iconName=R(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=W()||"fas"),s}var K1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];let a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=f(f({},this.definitions[i]||{}),a[i]),X1(i,a[i]);let o=K[M][i];o&&X1(o,a[i]),R3()})}reset(){this.definitions={}}_pullDefinitions(e,n){let t=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(t).map(a=>{let{prefix:i,iconName:o,icon:s}=t[a],m=s[2];e[i]||(e[i]={}),m.length>0&&m.forEach(h=>{typeof h=="string"&&(e[i][h]=s)}),e[i][o]=s}),e}},a3=[],a1={},i1={},o5=Object.keys(i1);function s5(c,e){let{mixoutsTo:n}=e;return a3=c,a1={},Object.keys(i1).forEach(t=>{o5.indexOf(t)===-1&&delete i1[t]}),a3.forEach(t=>{let a=t.mixout?t.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),t.hooks){let i=t.hooks();Object.keys(i).forEach(o=>{a1[o]||(a1[o]=[]),a1[o].push(i[o])})}t.provides&&t.provides(i1)}),n}function J1(c,e){for(var n=arguments.length,t=new Array(n>2?n-2:0),a=2;a<n;a++)t[a-2]=arguments[a];return(a1[c]||[]).forEach(o=>{e=o.apply(null,[e,...t])}),e}function Q(c){for(var e=arguments.length,n=new Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];(a1[c]||[]).forEach(i=>{i.apply(null,n)})}function B(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return i1[c]?i1[c].apply(null,e):void 0}function Q1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,n=c.prefix||W();if(e)return e=R(n,e)||e,n3(W3.definitions,n,e)||n3(w.styles,n,e)}var W3=new K1,l5=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,Q("noAuto")},r5={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(Q("beforeI2svg",c),B("pseudoElements2svg",c),B("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,U4(()=>{m5({autoReplaceSvgRoot:e}),Q("watch",c)})}},f5={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:R(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=k1(c[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(O4))){let e=A1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=W();return{prefix:e,iconName:R(e,c)||c}}}},N={noAuto:l5,config:z,dom:r5,parse:f5,library:W3,findIconDefinition:Q1,toHtml:C1},m5=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=C}=c;(Object.keys(w.styles).length>0||z.autoFetchSvg)&&T&&z.autoReplaceSvg&&N.dom.i2svg({node:e})};function P1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(n=>C1(n))}}),Object.defineProperty(c,"node",{get:function(){if(!T)return;let n=C.createElement("div");return n.innerHTML=c.html,n.children}}),c}function h5(c){let{children:e,main:n,mask:t,attributes:a,styles:i,transform:o}=c;if(r2(o)&&n.found&&!t.found){let{width:s,height:m}=n,h={x:s/m/2,y:.5};a.style=S1(g(f({},i),{"transform-origin":"".concat(h.x+o.x/16,"em ").concat(h.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function z5(c){let{prefix:e,iconName:n,children:t,attributes:a,symbol:i}=c,o=i===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(f({},a),{id:o}),children:t}]}]}function z2(c){let{icons:{main:e,mask:n},prefix:t,iconName:a,transform:i,symbol:o,title:s,maskId:m,titleId:h,extra:d,watchable:v=!1}=c,{width:u,height:x}=n.found?n:e,q=t==="fak",G=[z.replacementClass,a?"".concat(z.cssPrefix,"-").concat(a):""].filter(e1=>d.classes.indexOf(e1)===-1).filter(e1=>e1!==""||!!e1).concat(d.classes).join(" "),S={children:[],attributes:g(f({},d.attributes),{"data-prefix":t,"data-icon":a,class:G,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(x)})},_=q&&!~d.classes.indexOf("fa-fw")?{width:"".concat(u/x*16*.0625,"em")}:{};v&&(S.attributes[J]=""),s&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(h||u1())},children:[s]}),delete S.attributes.title);let L=g(f({},S),{prefix:t,iconName:a,main:e,mask:n,maskId:m,transform:i,symbol:o,styles:f(f({},_),d.styles)}),{children:k,attributes:c1}=n.found&&e.found?B("generateAbstractMask",L)||{children:[],attributes:{}}:B("generateAbstractIcon",L)||{children:[],attributes:{}};return L.children=k,L.attributes=c1,o?z5(L):h5(L)}function i3(c){let{content:e,width:n,height:t,transform:a,title:i,extra:o,watchable:s=!1}=c,m=g(f(f({},o.attributes),i?{title:i}:{}),{class:o.classes.join(" ")});s&&(m[J]="");let h=f({},o.styles);r2(a)&&(h.transform=B4({transform:a,startCentered:!0,width:n,height:t}),h["-webkit-transform"]=h.transform);let d=S1(h);d.length>0&&(m.style=d);let v=[];return v.push({tag:"span",attributes:m,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function p5(c){let{content:e,title:n,extra:t}=c,a=g(f(f({},t.attributes),n?{title:n}:{}),{class:t.classes.join(" ")}),i=S1(t.styles);i.length>0&&(a.style=i);let o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:R1}=w;function c2(c){let e=c[0],n=c[1],[t]=c.slice(4),a=null;return Array.isArray(t)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(T1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(T1.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(T1.PRIMARY),fill:"currentColor",d:t[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:e,height:n,icon:a}}var d5={found:!1,width:512,height:512};function u5(c,e){!S3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function e2(c,e){let n=e;return e==="fa"&&z.styleDefault!==null&&(e=W()),new Promise((t,a)=>{if(n==="fa"){let i=j3(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&R1[e]&&R1[e][c]){let i=R1[e][c];return t(c2(i))}u5(c,e),t(g(f({},d5),{icon:z.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var o3=()=>{},n2=z.measurePerformance&&H1&&H1.mark&&H1.measure?H1:{mark:o3,measure:o3},h1='FA "6.6.0"',v5=c=>(n2.mark("".concat(h1," ").concat(c," begins")),()=>B3(c)),B3=c=>{n2.mark("".concat(h1," ").concat(c," ends")),n2.measure("".concat(h1," ").concat(c),"".concat(h1," ").concat(c," begins"),"".concat(h1," ").concat(c," ends"))},p2={begin:v5,end:B3},L1=()=>{};function s3(c){return typeof(c.getAttribute?c.getAttribute(J):null)=="string"}function C5(c){let e=c.getAttribute?c.getAttribute(o2):null,n=c.getAttribute?c.getAttribute(s2):null;return e&&n}function M5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function b5(){return z.autoReplaceSvg===!0?V1.replace:V1[z.autoReplaceSvg]||V1.replace}function g5(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function x5(c){return C.createElement(c)}function G3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=c.tag==="svg"?g5:x5}=e;if(typeof c=="string")return C.createTextNode(c);let t=n(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){t.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){t.appendChild(G3(i,{ceFn:n}))}),t}function H5(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var V1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(n=>{e.parentNode.insertBefore(G3(n),e)}),e.getAttribute(J)===null&&z.keepOriginalSource){let n=C.createComment(H5(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){let e=c[0],n=c[1];if(~l2(e).indexOf(z.replacementClass))return V1.replace(c);let t=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===z.replacementClass||s.match(t)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let a=n.map(i=>C1(i)).join(`
`);e.setAttribute(J,""),e.innerHTML=a}};function l3(c){c()}function Y3(c,e){let n=typeof e=="function"?e:L1;if(c.length===0)n();else{let t=l3;z.mutateApproach===A4&&(t=j.requestAnimationFrame||l3),t(()=>{let a=b5(),i=p2.begin("mutate");c.map(a),i(),n()})}}var d2=!1;function U3(){d2=!0}function t2(){d2=!1}var N1=null;function r3(c){if(!K2||!z.observeMutations)return;let{treeCallback:e=L1,nodeCallback:n=L1,pseudoElementsCallback:t=L1,observeMutationsRoot:a=C}=c;N1=new K2(i=>{if(d2)return;let o=W();l1(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!s3(s.addedNodes[0])&&(z.searchPseudoElements&&t(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&z.searchPseudoElements&&t(s.target.parentNode),s.type==="attributes"&&s3(s.target)&&~I4.indexOf(s.attributeName))if(s.attributeName==="class"&&C5(s.target)){let{prefix:m,iconName:h}=A1(l2(s.target));s.target.setAttribute(o2,m||o),h&&s.target.setAttribute(s2,h)}else M5(s.target)&&n(s.target)})}),T&&N1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function L5(){N1&&N1.disconnect()}function V5(c){let e=c.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((t,a)=>{let i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(t[o]=s.join(":").trim()),t},{})),n}function y5(c){let e=c.getAttribute("data-prefix"),n=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",a=A1(l2(c));return a.prefix||(a.prefix=W()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&t.length>0&&(a.iconName=t5(a.prefix,c.innerText)||m2(a.prefix,$1(c.innerText))),!a.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function N5(c){let e=l1(c.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(t||u1()):(e["aria-hidden"]="true",e.focusable="false")),e}function S5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:t,rest:a}=y5(c),i=N5(c),o=J1("parseNodeAttributes",{},c),s=e.styleParser?V5(c):[];return f({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var{styles:k5}=w;function $3(c){let e=z.autoReplaceSvg==="nest"?f3(c,{styleParser:!1}):f3(c);return~e.extra.classes.indexOf(P3)?B("generateLayersText",c,e):B("generateSvgReplacementMutation",c,e)}var O=new Set;k3.map(c=>{O.add("fa-".concat(c))});Object.keys(X[M]).map(O.add.bind(O));Object.keys(X[V]).map(O.add.bind(O));Object.keys(X[y]).map(O.add.bind(O));O=[...O];function m3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();let n=C.documentElement.classList,t=d=>n.add("".concat(c3,"-").concat(d)),a=d=>n.remove("".concat(c3,"-").concat(d)),i=z.autoFetchSvg?O:k3.map(d=>"fa-".concat(d)).concat(Object.keys(k5));i.includes("fa")||i.push("fa");let o=[".".concat(P3,":not([").concat(J,"])")].concat(i.map(d=>".".concat(d,":not([").concat(J,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=l1(c.querySelectorAll(o))}catch{}if(s.length>0)t("pending"),a("complete");else return Promise.resolve();let m=p2.begin("onTree"),h=s.reduce((d,v)=>{try{let u=$3(v);u&&d.push(u)}catch(u){S3||u.name==="MissingIcon"&&console.error(u)}return d},[]);return new Promise((d,v)=>{Promise.all(h).then(u=>{Y3(u,()=>{t("active"),t("complete"),a("pending"),typeof e=="function"&&e(),m(),d()})}).catch(u=>{m(),v(u)})})}function A5(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$3(c).then(n=>{n&&Y3([n],e)})}function P5(c){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:Q1(e||{}),{mask:a}=n;return a&&(a=(a||{}).icon?a:Q1(a||{})),c(t,g(f({},n),{mask:a}))}}var w5=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,symbol:t=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:m=[],attributes:h={},styles:d={}}=e;if(!c)return;let{prefix:v,iconName:u,icon:x}=c;return P1(f({type:"icon"},c),()=>(Q("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(o?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||u1()):(h["aria-hidden"]="true",h.focusable="false")),z2({icons:{main:c2(x),mask:a?c2(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:u,transform:f(f({},P),n),symbol:t,title:o,maskId:i,titleId:s,extra:{attributes:h,styles:d,classes:m}})))},O5={mixout(){return{icon:P5(w5)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=m3,c.nodeCallback=A5,c}}},provides(c){c.i2svg=function(e){let{node:n=C,callback:t=()=>{}}=e;return m3(n,t)},c.generateSvgReplacementMutation=function(e,n){let{iconName:t,title:a,titleId:i,prefix:o,transform:s,symbol:m,mask:h,maskId:d,extra:v}=n;return new Promise((u,x)=>{Promise.all([e2(t,o),h.iconName?e2(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(q=>{let[G,S]=q;u([e,z2({icons:{main:G,mask:S},prefix:o,iconName:t,transform:s,symbol:m,maskId:d,title:a,titleId:i,extra:v,watchable:!0})])}).catch(x)})},c.generateAbstractIcon=function(e){let{children:n,attributes:t,main:a,transform:i,styles:o}=e,s=S1(o);s.length>0&&(t.style=s);let m;return r2(i)&&(m=B("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(m||a.icon),{children:n,attributes:t}}}},_5={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return P1({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:c,params:e});let t=[];return c(a=>{Array.isArray(a)?a.map(i=>{t=t.concat(i.abstract)}):t=t.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...n].join(" ")},children:t}]})}}}},E5={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:t=[],attributes:a={},styles:i={}}=e;return P1({type:"counter",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),p5({content:c.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(z.cssPrefix,"-layers-counter"),...t]}})))}}}},I5={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,title:t=null,classes:a=[],attributes:i={},styles:o={}}=e;return P1({type:"text",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),i3({content:c,transform:f(f({},P),n),title:t,extra:{attributes:i,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(e,n){let{title:t,transform:a,extra:i}=n,o=null,s=null;if(x3){let m=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();o=h.width/m,s=h.height/m}return z.autoA11y&&!t&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,i3({content:e.innerHTML,width:o,height:s,transform:a,title:t,extra:i,watchable:!0})])}}},F5=new RegExp('"',"ug"),h3=[1105920,1112319],z3=f(f(f({FontAwesome:{normal:"fas",400:"fas"}},C4),v4),y4),a2=Object.keys(z3).reduce((c,e)=>(c[e.toLowerCase()]=z3[e],c),{}),Z5=Object.keys(a2).reduce((c,e)=>{let n=a2[e];return c[e]=n[900]||[...Object.entries(n)][0][1],c},{});function T5(c){let e=c.replace(F5,""),n=K4(e,0),t=n>=h3[0]&&n<=h3[1],a=e.length===2?e[0]===e[1]:!1;return{value:$1(a?e[0]:e),isSecondary:t||a}}function q5(c,e){let n=c.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(e),a=isNaN(t)?"normal":t;return(a2[n]||{})[a]||Z5[n]}function p3(c,e){let n="".concat(k4).concat(e.replace(":","-"));return new Promise((t,a)=>{if(c.getAttribute(n)!==null)return t();let o=l1(c.children).filter(u=>u.getAttribute(B1)===e)[0],s=j.getComputedStyle(c,e),m=s.getPropertyValue("font-family"),h=m.match(_4),d=s.getPropertyValue("font-weight"),v=s.getPropertyValue("content");if(o&&!h)return c.removeChild(o),t();if(h&&v!=="none"&&v!==""){let u=s.getPropertyValue("content"),x=q5(m,d),{value:q,isSecondary:G}=T5(u),S=h[0].startsWith("FontAwesome"),_=m2(x,q),L=_;if(S){let k=a5(q);k.iconName&&k.prefix&&(_=k.iconName,x=k.prefix)}if(_&&!G&&(!o||o.getAttribute(o2)!==x||o.getAttribute(s2)!==L)){c.setAttribute(n,L),o&&c.removeChild(o);let k=S5(),{extra:c1}=k;c1.attributes[B1]=e,e2(_,x).then(e1=>{let o4=z2(g(f({},k),{icons:{main:e1,mask:h2()},prefix:x,iconName:L,extra:c1,watchable:!0})),_1=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(_1,c.firstChild):c.appendChild(_1),_1.outerHTML=o4.map(s4=>C1(s4)).join(`
`),c.removeAttribute(n),t()}).catch(a)}else t()}else t()})}function D5(c){return Promise.all([p3(c,"::before"),p3(c,"::after")])}function R5(c){return c.parentNode!==document.head&&!~P4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(B1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function d3(c){if(T)return new Promise((e,n)=>{let t=l1(c.querySelectorAll("*")).filter(R5).map(D5),a=p2.begin("searchPseudoElements");U3(),Promise.all(t).then(()=>{a(),t2(),e()}).catch(()=>{a(),t2(),n()})})}var j5={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=d3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:n=C}=e;z.searchPseudoElements&&d3(n)}}},u3=!1,W5={mixout(){return{dom:{unwatch(){U3(),u3=!0}}}},hooks(){return{bootstrap(){r3(J1("mutationObserverCallbacks",{}))},noAuto(){L5()},watch(c){let{observeMutationsRoot:e}=c;u3?t2():r3(J1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},v3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((n,t)=>{let a=t.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},B5={mixout(){return{parse:{transform:c=>v3(c)}}},hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-transform");return n&&(c.transform=v3(n)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:n,transform:t,containerWidth:a,iconWidth:i}=e,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),m="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),h="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(s," ").concat(m," ").concat(h)},v={transform:"translate(".concat(i/2*-1," -256)")},u={outer:o,inner:d,path:v};return{tag:"g",attributes:f({},u.outer),children:[{tag:"g",attributes:f({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),u.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function C3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function G5(c){return c.tag==="g"?c.children:[c]}var Y5={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-mask"),t=n?A1(n.split(" ").map(a=>a.trim())):h2();return t.prefix||(t.prefix=W()),c.mask=t,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:n,attributes:t,main:a,mask:i,maskId:o,transform:s}=e,{width:m,icon:h}=a,{width:d,icon:v}=i,u=W4({transform:s,containerWidth:d,iconWidth:m}),x={tag:"rect",attributes:g(f({},j1),{fill:"white"})},q=h.children?{children:h.children.map(C3)}:{},G={tag:"g",attributes:f({},u.inner),children:[C3(f({tag:h.tag,attributes:f(f({},h.attributes),u.path)},q))]},S={tag:"g",attributes:f({},u.outer),children:[G]},_="mask-".concat(o||u1()),L="clip-".concat(o||u1()),k={tag:"mask",attributes:g(f({},j1),{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,S]},c1={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:G5(v)},k]};return n.push(c1,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(_,")")},j1)}),{children:n,attributes:t}}}},U5={provides(c){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let n=[],t={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(f({},t),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=g(f({},a),{attributeName:"opacity"}),o={tag:"circle",attributes:g(f({},t),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:g(f({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(f({},i),{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(f({},t),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:g(f({},i),{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:g(f({},t),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(f({},i),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$5={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-symbol"),t=n===null?!1:n===""?!0:n;return c.symbol=t,c}}}},X5=[Y4,O5,_5,E5,I5,j5,W5,B5,Y5,U5,$5];s5(X5,{mixoutsTo:N});var V6=N.noAuto,X3=N.config,y6=N.library,K3=N.dom,J3=N.parse,N6=N.findIconDefinition,S6=N.toHtml,Q3=N.icon,k6=N.layer,K5=N.text,J5=N.counter;var Q5=["*"],c6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},e6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},n6=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},u2=new WeakSet,c4="fa-auto-css";function t6(c,e){if(!e.autoAddCss||u2.has(c))return;if(c.getElementById(c4)!=null){e.autoAddCss=!1,u2.add(c);return}let n=c.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",c4),n.innerHTML=K3.css();let t=c.head.childNodes,a=null;for(let i=t.length-1;i>-1;i--){let o=t[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}c.head.insertBefore(n,a),e.autoAddCss=!1,u2.add(c)}var a6=c=>c.prefix!==void 0&&c.iconName!==void 0,i6=(c,e)=>a6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},o6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){X3.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),s6=(()=>{class c{constructor(){this.definitions={}}addIcons(...n){for(let t of n){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let a of t.icon[2])typeof a=="string"&&(this.definitions[t.prefix][a]=t)}}addIconPacks(...n){for(let t of n){let a=Object.keys(t).map(i=>t[i]);this.addIcons(...a)}}getIconDefinition(n,t){return n in this.definitions&&t in this.definitions[n]?this.definitions[n][t]:null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),l6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=b2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[M1]})}}return c})(),r6=(()=>{class c{constructor(n,t){this.renderer=n,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(t){return new(t||c)(A(V2),A(g2))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[M1,I],ngContentSelectors:Q5,decls:1,vars:0,template:function(t,a){t&1&&(A2(),P2(0))},encapsulation:2})}}return c})(),e4=(()=>{class c{constructor(n,t,a,i,o){this.sanitizer=n,this.config=t,this.iconLibrary=a,this.stackItem=i,this.document=C2(E2),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){e6();return}if(n){let t=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(t!=null){let a=this.buildParams();t6(this.document,this.config);let i=Q3(t,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let t=i6(n,this.config.defaultPrefix);if("icon"in t)return t;let a=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return a??(c6(t),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?J3.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:n6(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(t){return new(t||c)(A(Z2),A(o6),A(s6),A(l6,8),A(r6,8))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,a){t&2&&(k2("innerHTML",a.renderedIconHTML,H2),N2("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[M1,I],decls:0,vars:0,template:function(t,a){},encapsulation:2})}}return c})();var n4=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=M2({type:c})}static{this.\u0275inj=v2({})}}return c})();var w1=class c{faInstagram=G2;faGithub=U2;faFacebook=Y2;faLinkedin=B2;static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-home"]],standalone:!0,features:[I],decls:133,vars:4,consts:[["id","home"],[1,"container"],["id","talkbubble"],[1,"web-links"],[1,"git-text",2,"margin-bottom","73px"],["href","https://github.com/luichemo/webportfolio",1,"github"],[3,"icon"],[2,"margin-top","5px"],[2,"padding-bottom","5px"],[1,"link-text",2,"margin-bottom","31px"],["href","https://www.linkedin.com/in/luka-chemia-a0a339236/",1,"linkedin"],[1,"inst-text",2,"margin-bottom","10px"],["href","https://www.instagram.com/luichemo/profilecard/?igsh=dW1oZGxwdGNjc2Y=",1,"instagram"],[1,"fb-text",2,"margin-bottom","31px"],["href","https://www.facebook.com/lukaa2002?mibextid=LQQJ4d",1,"facebook"],[2,"text-decoration","underline"],[1,"proj-btn"],[1,"btn"],["href","#projects"],["id","about"],[1,"container2"],["id","talkbubble2"],[1,"about-header"],[1,"about-content"],[1,"about-left-content"],[1,"contact-btn"],[1,"about-right-content"],[1,"skills"],[1,"skills_icon"],["src","html.png","id","html",1,"img-responsive"],["src","css.png","id","css",1,"img-responsive"],["src","js.png","id","js",1,"img-responsive"],["src","TypeScript.png","id","TypeScript",1,"img-responsive",2,"margin-top","15px"],["src","angular.png","id","angular",1,"img-responsive",2,"margin-top","5px"],["src","angularMaterial.png","id","angularMaterial",1,"img-responsive"],["src","github.png","id","github",1,"img-responsive"],["src","bootstrap.png","id","bootstrap",1,"img-responsive"],["src","figma.png","id","figma",1,"img-responsive",2,"margin-top","10px"],["src","adobe.png","id","adobe",1,"img-responsive"],[1,"cv-content"],["id","projects"],["id","contact"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li",4)(6,"a",5),b(7,"fa-icon",6),l(),r(8,"p",7),p(9,"G"),l(),r(10,"p"),p(11,"i"),l(),r(12,"p"),p(13,"t"),l(),r(14,"p"),p(15,"h"),l(),r(16,"p"),p(17,"u"),l(),r(18,"p",8),p(19,"b"),l()(),r(20,"li",9)(21,"a",10),b(22,"fa-icon",6),l(),r(23,"p",7),p(24,"L"),l(),r(25,"p"),p(26,"i"),l(),r(27,"p"),p(28,"n"),l(),r(29,"p"),p(30,"k"),l(),r(31,"p"),p(32,"e"),l(),r(33,"p"),p(34,"d"),l(),r(35,"p"),p(36,"i"),l(),r(37,"p",8),p(38,"n"),l()(),r(39,"li",11)(40,"a",12),b(41,"fa-icon",6),l(),r(42,"p",7),p(43,"I"),l(),r(44,"p"),p(45,"n"),l(),r(46,"p"),p(47,"s"),l(),r(48,"p"),p(49,"t"),l(),r(50,"p"),p(51,"a"),l(),r(52,"p"),p(53,"g"),l(),r(54,"p"),p(55,"r"),l(),r(56,"p"),p(57,"a"),l(),r(58,"p",8),p(59,"m"),l()(),r(60,"li",13)(61,"a",14),b(62,"fa-icon",6),l(),r(63,"p",7),p(64,"F"),l(),r(65,"p"),p(66,"a"),l(),r(67,"p"),p(68,"c"),l(),r(69,"p"),p(70,"e"),l(),r(71,"p"),p(72,"b"),l(),r(73,"p"),p(74,"o"),l(),r(75,"p"),p(76,"o"),l(),r(77,"p",8),p(78,"k"),l()()()(),r(79,"h1"),p(80,"Hey, I'm Luka Chemia, Software Engineer "),r(81,"span",15),p(82,"You"),l(),p(83," Need !"),l(),r(84,"div",16)(85,"button",17)(86,"a",18),p(87,"Projects"),l()()()()()(),r(88,"div",19)(89,"div",20)(90,"div",21)(91,"div",22)(92,"h1"),p(93,"About Me"),l(),b(94,"hr"),r(95,"p"),p(96,"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."),l()(),r(97,"div",23)(98,"div",24)(99,"h2"),p(100,"Get To Know Me !"),l(),r(101,"p"),p(102,"I'm a passionate and dedicated Java Full-Stack Web Developer with a proven track record of creating robust and scalable web applications. My expertise spans both front-end and back-end technologies, including Java, Spring Boot and Angular. With a keen eye for design and a commitment to clean, efficient code, I strive to deliver exceptional user experiences. I excel in problem-solving and collaborating with cross-functional teams to deliver innovative solutions. I'm excited to leverage my skills to tackle new challenges and drive innovation in the world of Full Stack development. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. "),l(),r(103,"button",25)(104,"p"),p(105,"contact"),l()()(),r(106,"div",26)(107,"h2"),p(108,"My Skills"),l(),r(109,"div",27)(110,"div",28),b(111,"img",29),l(),r(112,"div",28),b(113,"img",30),l(),r(114,"div",28),b(115,"img",31),l(),r(116,"div",28),b(117,"img",32),l(),r(118,"div",28),b(119,"img",33),l(),r(120,"div",28),b(121,"img",34),l(),r(122,"div",28),b(123,"img",35),l(),r(124,"div",28),b(125,"img",36),l(),r(126,"div",28),b(127,"img",37),l(),r(128,"div",28),b(129,"img",38),l()()(),b(130,"div",39),l()()()(),b(131,"div",40)(132,"div",41)),n&2&&(H(7),Y("icon",t.faGithub),H(15),Y("icon",t.faLinkedin),H(19),Y("icon",t.faInstagram),H(21),Y("icon",t.faFacebook))},dependencies:[b1,g1,n4,e4],styles:["*[_ngcontent-%COMP%]{font-family:Doto,sans-serif}.container[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center;align-items:center;height:86vh}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#191858;text-align:center;font-size:60px;font-weight:700;margin-top:50px}#talkbubble[_ngcontent-%COMP%]{width:1350px;height:85vh;background-image:linear-gradient(#64b3f4,#c2e59c);position:relative;z-index:2;clip-path:polygon(0% 0%,100% 0%,100% 75%,50% 100%,0% 75%)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:5px;display:flex;justify-content:center;align-items:center;list-style-type:none;gap:40px;margin-top:10px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#191858;padding:10px 15px;border-radius:50% 50% 0% 0%;font-size:30px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transition:font-size .5s,color .5s,text-decoration .5s}li[_ngcontent-%COMP%]{text-align:center}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-weight:100;color:#fff;margin-top:0;opacity:0;transform:translateY(10px);transition:opacity .4s,transform .4s}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover + p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover ~ p[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover{background-color:#2b3137;color:#fff}.git-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2b3137}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover{background-color:#1877f2;color:#fff}.fb-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#1877f2}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover{background-color:#0077b5;color:#fff}.link-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#0077b5}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover{background-image:linear-gradient(#f9ce34,#ee2a7b,#6228d7);color:#fff}.inst-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#6228d7}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{animation-delay:.5s}h1[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}h1[_ngcontent-%COMP%]{animation-delay:.5s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.proj-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:12vh}.btn[_ngcontent-%COMP%]{font-size:30px;border-radius:5px;background-color:#191858;border:solid 1px #191858;font-weight:700;opacity:0;transform:translate(-200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards;width:200px;height:70px}.btn[_ngcontent-%COMP%]:hover{background-color:#d3d30a;cursor:pointer;box-shadow:5px 10px #191858;font-weight:900}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 30px;color:#d3d30a;font-family:Sour Gummy,sans-serif}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#191858}@media screen and (max-width: 1000px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;color:#191858;text-align:center;font-size:32px;font-weight:500}}@media screen and (max-width: 756px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;font-weight:500}}@media screen and (max-width: 450px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:10vh}.web-links[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 375px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20vh}.btn[_ngcontent-%COMP%]{display:none}}#talkbubble2[_ngcontent-%COMP%]{width:1350px;height:90vh;background-image:linear-gradient(#c2e59c,#64b3f4);position:relative;z-index:2;text-align:center;margin-bottom:20px}.container2[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;font-weight:700;color:#191858;font-family:Sour Gummy,sans-serif!important;margin-top:30px}.about-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:50px;margin:20px auto;border:solid 3px #191858;border-radius:10px}.about-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:1000px;margin:auto auto 40px;font-size:20px;font-weight:400;color:#191858}.about-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:5vw}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;display:flex;justify-content:start;margin-bottom:2rem}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:500px;text-align:start;margin-bottom:2rem;font-family:900;font-size:22px}.contact-btn[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;font-size:30px;border-radius:5px;background-color:#d3d30a;border:solid 1px #191858;font-weight:700;opacity:0;transform:translate(-200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards;width:200px;height:70px;font-weight:900;margin-bottom:20px}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:0}.contact-btn[_ngcontent-%COMP%]:hover{background-color:#d3d30a;cursor:pointer;box-shadow:5px 10px #191858}.about-right-content[_ngcontent-%COMP%]{width:500px;margin-bottom:80px}.about-right-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:4rem}.about-left-content[_ngcontent-%COMP%]{margin-left:200px}.skills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-bottom:6rem}.img-responsive[_ngcontent-%COMP%]{display:flex;width:90px;justify-content:center;align-items:center}.skills_icon[_ngcontent-%COMP%]{text-align:center;padding:.7rem 1rem;margin-bottom:1.2rem;margin-right:1rem;border-radius:5px;font-weight:500}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;width:90px;height:auto;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{-webkit-filter:grayscale(0)}.skills_icon[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}@media screen and (max-width: 1500px){.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:20px}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:22px;font-weight:900}#talkbubble2[_ngcontent-%COMP%]{height:auto}.img-responsive[_ngcontent-%COMP%]{width:40px}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}}@media screen and (max-width: 1000px){.about-left-content[_ngcontent-%COMP%]{margin-left:0}.about-content[_ngcontent-%COMP%]{display:inline-block}.about-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:auto}.contact-btn[_ngcontent-%COMP%]{height:30px;width:100px;margin-bottom:40px}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:auto auto 0}.container2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:500px;margin-bottom:40px}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{justify-content:center}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.about-right-content[_ngcontent-%COMP%]{margin-bottom:0}}@media screen and (max-width: 550px){.container2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}#talkbubble2[_ngcontent-%COMP%]{width:auto}.contact-btn[_ngcontent-%COMP%]{margin:40px auto auto}.container2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:300px}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about-header[_ngcontent-%COMP%]{width:300px;margin:auto}.about-right-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about-left-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:300px;margin:auto auto 20px}.about-right-content[_ngcontent-%COMP%]{margin-top:40px}.skills[_ngcontent-%COMP%]{width:300px;margin:auto auto 0;flex-wrap:none!important}}"]})};var O1=class c{title="webportfolio";static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-root"]],standalone:!0,features:[I],decls:2,vars:0,consts:[[1,"nav"]],template:function(n,t){n&1&&b(0,"app-nav-bar",0)(1,"app-home")},dependencies:[x1,w1],styles:[".nav[_ngcontent-%COMP%]{height:120px}"]})};var t4=[];var a4={providers:[O2({eventCoalescing:!0}),j2(t4),T2()]};var m6={providers:[q2()]},i4=_2(a4,m6);var h6=()=>F2(O1,i4),p8=h6;export{p8 as a};
