import './polyfills.server.mjs';
import{A as Y,B as a1,C as A2,D as P2,E as f,F as w2,G as F,H as q1,M as O2,P as _2,Q as E2,S as g1,T as F2,U as q2,V as I2,W as T2,Z as Z2,a as E1,b as u2,c as M2,d as E,da as D2,e as v2,ea as j2,f as g2,fa as R2,g as v1,ga as b1,h as r1,i as f1,j as b2,k as x2,l as L2,m as H2,n as x,o as A,p as N2,q as V2,r as y2,s as D,t as n1,u as F1,v as s,w as l,x as M,y as S2,z as k2}from"./chunk-QHFVVD2D.mjs";import{a as m,b}from"./chunk-5XUXGTUW.mjs";var r4=()=>["/home"],f4=()=>["active"];function m4(c,e){if(c&1){let n=S2();s(0,"ul")(1,"li")(2,"a",11),Y("click",function(){r1(n);let t=a1();return f1(t.setActive("home"))}),f(3,"Home"),l()(),s(4,"li")(5,"a",12),Y("click",function(){r1(n);let t=a1();return f1(t.setActive("about"))}),f(6,"About"),l()(),s(7,"li")(8,"a",13),Y("click",function(){r1(n);let t=a1();return f1(t.setActive("projects"))}),f(9,"Projects"),l()(),s(10,"li")(11,"a",14),Y("click",function(){r1(n);let t=a1();return f1(t.setActive("contact"))}),f(12,"Contact"),l()()()}if(c&2){let n=a1();x(2),n1("active",n.activeLink==="home"),x(3),n1("active",n.activeLink==="about"),x(3),n1("active",n.activeLink==="projects"),x(3),n1("active",n.activeLink==="contact")}}function z4(c,e){c&1&&M(0,"div",10)}var x1=class c{constructor(e){this.platformId=e}activeLink="home";showMenu=!0;showMenu2=!1;onResize(){F2(this.platformId)&&(this.showMenu=window.innerWidth>1304)}ngOnInit(){this.onResize()}setActive(e){this.activeLink=e}toggleMenu(){this.showMenu=!this.showMenu,this.showMenu2=!this.showMenu2}scroll(e){document.querySelector(`#${e}`)?.scrollIntoView({behavior:"smooth",block:"start"}),this.setActive(e)}static \u0275fac=function(n){return new(n||c)(A(x2))};static \u0275cmp=E({type:c,selectors:[["app-nav-bar"]],hostBindings:function(n,a){n&1&&Y("resize",function(){return a.onResize()},!1,H2)},standalone:!0,features:[F],decls:28,vars:7,consts:[[1,"container"],[1,"content"],[1,"logo"],[1,"logo-txt"],[3,"routerLink","routerLinkActive"],[1,"wrapper"],[1,"static-txt"],[1,"dynamic-txts"],[1,"menu"],[1,"material-symbols-outlined",2,"z-index","1000",3,"click"],[1,"menu-background"],["href","#home",3,"click"],["href","#about",3,"click"],["href","#projects",3,"click"],["href","#contact",3,"click"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p")(5,"a",4),f(6,"LC"),l()()(),s(7,"div",5)(8,"div",6),f(9,"I'm a"),l(),s(10,"ul",7)(11,"li")(12,"span"),f(13,"Developer"),l()(),s(14,"li")(15,"span"),f(16,"Engineer"),l()(),s(17,"li")(18,"span"),f(19,"Designer"),l()(),s(20,"li")(21,"span"),f(22,"Freelancer"),l()()()()(),s(23,"div",8)(24,"span",9),Y("click",function(){return a.toggleMenu()}),f(25),l(),V2(26,m4,13,8,"ul")(27,z4,1,0,"div",10),l()()()),n&2&&(x(5),D("routerLink",q1(5,r4))("routerLinkActive",q1(6,f4)),x(20),w2(" ",a.showMenu?"collapse_content":"expand_content"," "),x(),F1(a.showMenu?26:-1),x(),F1(a.showMenu2?27:-1))},dependencies:[g1,b1,D2,j2],styles:['.container[_ngcontent-%COMP%]{max-width:1350px;margin:auto;height:5vh;position:sticky;top:0;z-index:1000;height:100px}.content[_ngcontent-%COMP%]{background-color:#191858;display:flex;justify-content:space-between;align-items:center;height:100px}.logo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;min-width:400px;padding:10px}.logo-txt[_ngcontent-%COMP%]{display:flex;color:#d3d30a;margin-right:30px;font-size:50px;transition:.3s}.logo-txt[_ngcontent-%COMP%]:hover, .logo-txt[_ngcontent-%COMP%]:focus{scale:1.2}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;width:60px;height:60px;border-radius:50%;background-color:#3498db;text-align:center;line-height:60px;margin:0 5px;padding:10px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:60px;list-style-type:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px;color:#fff;text-decoration:none;transition:font-size .5s,color .5s,text-decoration .5s}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-family:Doto,sans-serif;font-size:40px;color:#d3d30a;text-decoration:line-through}.menu-background[_ngcontent-%COMP%]{height:100vh;position:absolute;inset:0;background-color:#d3d30a}.logo-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:0;transform:translate(-200%);animation:_ngcontent-%COMP%_slideInLeft .6s ease-out forwards}@keyframes _ngcontent-%COMP%_slideInLeft{to{opacity:1;transform:translate(0)}}.wrapper[_ngcontent-%COMP%]{display:inline-flex;padding:10px}.wrapper[_ngcontent-%COMP%]   .static-txt[_ngcontent-%COMP%]{margin-top:22px;color:#fff;font-size:60px;font-weight:400}.wrapper[_ngcontent-%COMP%]   .dynamic-txts[_ngcontent-%COMP%]{margin-left:15px;line-height:90px;height:90px;overflow:hidden;margin-top:15px}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#d3d30a;list-style:none;font-size:68px;font-weight:500;position:relative;top:0;animation:_ngcontent-%COMP%_slide 6s steps(4) infinite}@keyframes _ngcontent-%COMP%_slide{to{top:-360px}}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;font-family:Doto,sans-serif}.dynamic-txts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;height:100%;width:100%;background:#191858;border-left:2px solid rgb(211,211,10);animation:_ngcontent-%COMP%_typing 1.5s steps(10) infinite}@keyframes _ngcontent-%COMP%_typing{to{left:100%;margin:0 -35px 0 35px}}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:18px;opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.material-symbols-outlined[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 1304px){.menu[_ngcontent-%COMP%]{background-color:#d3d30a}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#3498db;width:180px;border-radius:10px;box-shadow:5px 10px #191858}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;position:absolute;margin-top:50vh;inset:0;text-align:center;padding:40px;justify-content:center;align-items:center;flex-direction:column;z-index:100}.wrapper[_ngcontent-%COMP%]{scale:.8}.logo-txt[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px}.material-symbols-outlined[_ngcontent-%COMP%]{position:absolute;right:1%;top:20%;display:block;color:#3498db;font-size:70px;border-radius:50px;cursor:pointer;margin-right:15px}.material-symbols-outlined[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .5s ease-out forwards}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}.material-symbols-outlined[_ngcontent-%COMP%]:nth-child(4){animation-delay:.4s}}@media screen and (max-width: 775px){.wrapper[_ngcontent-%COMP%]{display:none}.logo-txt[_ngcontent-%COMP%]{font-size:30px;padding:0}.material-symbols-outlined[_ngcontent-%COMP%]{font-size:40px;top:30%}}']})};var B2={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var W2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var U2={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var Y2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var $2={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]};var X2=()=>{},i2={},g3={},b3=null,x3={mark:X2,measure:X2};try{typeof window<"u"&&(i2=window),typeof document<"u"&&(g3=document),typeof MutationObserver<"u"&&(b3=MutationObserver),typeof performance<"u"&&(x3=performance)}catch{}var{userAgent:J2=""}=i2.navigator||{},G=i2,v=g3,K2=b3,L1=x3,N5=!!G.document,T=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",L3=~J2.indexOf("MSIE")||~J2.indexOf("Trident/"),g="classic",H3="duotone",N="sharp",V="sharp-duotone",h4=[g,H3,N,V],p4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Q2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},d4=["kit"],C4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,u4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,M4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},g4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},b4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},x4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},L4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},N3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},H4=["solid","regular","light","thin","duotone","brands"],V3=[1,2,3,4,5,6,7,8,9,10],N4=V3.concat([11,12,13,14,15,16,17,18,19,20]),m1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=[...Object.keys(b4),...H4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",m1.GROUP,m1.SWAP_OPACITY,m1.PRIMARY,m1.SECONDARY].concat(V3.map(c=>"".concat(c,"x"))).concat(N4.map(c=>"w-".concat(c))),y4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},S4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},k4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},q="___FONT_AWESOME___",G1=16,y3="fa",S3="svg-inline--fa",K="data-fa-i2svg",B1="data-fa-pseudo-element",A4="data-fa-pseudo-element-pending",o2="data-prefix",l2="data-icon",e3="fontawesome-i2svg",P4="async",w4=["HTML","HEAD","STYLE","SCRIPT"],k3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),A3=[g,N,V];function u1(c){return new Proxy(c,{get(e,n){return n in e?e[n]:e[g]}})}var P3=m({},N3);P3[g]=m(m(m({},N3[g]),Q2.kit),Q2["kit-duotone"]);var X=u1(P3),W1=m({},L4);W1[g]=m(m(m({},W1[g]),c3.kit),c3["kit-duotone"]);var d1=u1(W1),U1=m({},x4);U1[g]=m(m({},U1[g]),k4.kit);var J=u1(U1),Y1=m({},g4);Y1[g]=m(m({},Y1[g]),S4.kit);var O4=u1(Y1),_4=C4,w3="fa-layers-text",E4=u4,F4=m({},p4),V5=u1(F4),q4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T1=m1,o1=new Set;Object.keys(d1[g]).map(o1.add.bind(o1));Object.keys(d1[N]).map(o1.add.bind(o1));Object.keys(d1[V]).map(o1.add.bind(o1));var I4=[...d4,...V4],h1=G.FontAwesomeConfig||{};function T4(c){var e=v.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function Z4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,t=Z4(T4(n));t!=null&&(h1[a]=t)});var O3={styleDefault:"solid",familyDefault:"classic",cssPrefix:y3,replacementClass:S3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};h1.familyPrefix&&(h1.cssPrefix=h1.familyPrefix);var l1=m(m({},O3),h1);l1.autoReplaceSvg||(l1.observeMutations=!1);var p={};Object.keys(O3).forEach(c=>{Object.defineProperty(p,c,{enumerable:!0,set:function(e){l1[c]=e,p1.forEach(n=>n(p))},get:function(){return l1[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){l1.cssPrefix=c,p1.forEach(e=>e(p))},get:function(){return l1.cssPrefix}});G.FontAwesomeConfig=p;var p1=[];function D4(c){return p1.push(c),()=>{p1.splice(p1.indexOf(c),1)}}var j=G1,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j4(c){if(!c||!T)return;let e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let n=v.head.childNodes,a=null;for(let t=n.length-1;t>-1;t--){let i=n[t],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return v.head.insertBefore(e,a),c}var R4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C1(){let c=12,e="";for(;c-- >0;)e+=R4[Math.random()*62|0];return e}function s1(c){let e=[];for(let n=(c||[]).length>>>0;n--;)e[n]=c[n];return e}function s2(c){return c.classList?s1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function _3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G4(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,'="').concat(_3(c[n]),'" '),"").trim()}function S1(c){return Object.keys(c||{}).reduce((e,n)=>e+"".concat(n,": ").concat(c[n].trim(),";"),"")}function r2(c){return c.size!==P.size||c.x!==P.x||c.y!==P.y||c.rotate!==P.rotate||c.flipX||c.flipY}function B4(c){let{transform:e,containerWidth:n,iconWidth:a}=c,t={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),z={transform:"".concat(i," ").concat(o," ").concat(r)},h={transform:"translate(".concat(a/2*-1," -256)")};return{outer:t,inner:z,path:h}}function W4(c){let{transform:e,width:n=G1,height:a=G1,startCentered:t=!1}=c,i="";return t&&L3?i+="translate(".concat(e.x/j-n/2,"em, ").concat(e.y/j-a/2,"em) "):t?i+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):i+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),i+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var U4=`:root, :host {
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
}`;function E3(){let c=y3,e=S3,n=p.cssPrefix,a=p.replacementClass,t=U4;if(n!==c||a!==e){let i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");t=t.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(r,".".concat(a))}return t}var n3=!1;function Z1(){p.autoAddCss&&!n3&&(j4(E3()),n3=!0)}var Y4={mixout(){return{dom:{css:E3,insertCss:Z1}}},hooks(){return{beforeDOMElementCreation(){Z1()},beforeI2svg(){Z1()}}}},I=G||{};I[q]||(I[q]={});I[q].styles||(I[q].styles={});I[q].hooks||(I[q].hooks={});I[q].shims||(I[q].shims=[]);var w=I[q],F3=[],q3=function(){v.removeEventListener("DOMContentLoaded",q3),V1=1,F3.map(c=>c())},V1=!1;T&&(V1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),V1||v.addEventListener("DOMContentLoaded",q3));function $4(c){T&&(V1?setTimeout(c,0):F3.push(c))}function M1(c){let{tag:e,attributes:n={},children:a=[]}=c;return typeof c=="string"?_3(c):"<".concat(e," ").concat(G4(n),">").concat(a.map(M1).join(""),"</").concat(e,">")}function a3(c,e,n){if(c&&c[e]&&c[e][n])return{prefix:e,iconName:n,icon:c[e][n]}}var X4=function(e,n){return function(a,t,i,o){return e.call(n,a,t,i,o)}},D1=function(e,n,a,t){var i=Object.keys(e),o=i.length,r=t!==void 0?X4(n,t):n,z,h,d;for(a===void 0?(z=1,d=e[i[0]]):(z=0,d=a);z<o;z++)h=i[z],d=r(d,e[h],h,e);return d};function J4(c){let e=[],n=0,a=c.length;for(;n<a;){let t=c.charCodeAt(n++);if(t>=55296&&t<=56319&&n<a){let i=c.charCodeAt(n++);(i&64512)==56320?e.push(((t&1023)<<10)+(i&1023)+65536):(e.push(t),n--)}else e.push(t)}return e}function $1(c){let e=J4(c);return e.length===1?e[0].toString(16):null}function K4(c,e){let n=c.length,a=c.charCodeAt(e),t;return a>=55296&&a<=56319&&n>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(a-55296)*1024+t-56320+65536:a}function t3(c){return Object.keys(c).reduce((e,n)=>{let a=c[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function X1(c,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,t=t3(e);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(c,t3(e)):w.styles[c]=m(m({},w.styles[c]||{}),t),c==="fas"&&X1("fa",e)}var{styles:$,shims:Q4}=w,c6={[g]:Object.values(J[g]),[N]:Object.values(J[N]),[V]:Object.values(J[V])},f2=null,I3={},T3={},Z3={},D3={},j3={},e6={[g]:Object.keys(X[g]),[N]:Object.keys(X[N]),[V]:Object.keys(X[V])};function n6(c){return~I4.indexOf(c)}function a6(c,e){let n=e.split("-"),a=n[0],t=n.slice(1).join("-");return a===c&&t!==""&&!n6(t)?t:null}var R3=()=>{let c=a=>D1($,(t,i,o)=>(t[o]=D1(i,a,{}),t),{});I3=c((a,t,i)=>(t[3]&&(a[t[3]]=i),t[2]&&t[2].filter(r=>typeof r=="number").forEach(r=>{a[r.toString(16)]=i}),a)),T3=c((a,t,i)=>(a[i]=i,t[2]&&t[2].filter(r=>typeof r=="string").forEach(r=>{a[r]=i}),a)),j3=c((a,t,i)=>{let o=t[2];return a[i]=i,o.forEach(r=>{a[r]=i}),a});let e="far"in $||p.autoFetchSvg,n=D1(Q4,(a,t)=>{let i=t[0],o=t[1],r=t[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:r}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:r}),a},{names:{},unicodes:{}});Z3=n.names,D3=n.unicodes,f2=k1(p.styleDefault,{family:p.familyDefault})};D4(c=>{f2=k1(c.styleDefault,{family:p.familyDefault})});R3();function m2(c,e){return(I3[c]||{})[e]}function t6(c,e){return(T3[c]||{})[e]}function R(c,e){return(j3[c]||{})[e]}function G3(c){return Z3[c]||{prefix:null,iconName:null}}function i6(c){let e=D3[c],n=m2("fas",c);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return f2}var z2=()=>({prefix:null,iconName:null,rest:[]});function k1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=g}=e,a=X[n][c],t=d1[n][c]||d1[n][a],i=c in w.styles?c:null;return t||i||null}var o6={[g]:Object.keys(J[g]),[N]:Object.keys(J[N]),[V]:Object.keys(J[V])};function A1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a={[g]:"".concat(p.cssPrefix,"-").concat(g),[N]:"".concat(p.cssPrefix,"-").concat(N),[V]:"".concat(p.cssPrefix,"-").concat(V)},t=null,i=g,o=h4.filter(z=>z!==H3);o.forEach(z=>{(c.includes(a[z])||c.some(h=>o6[z].includes(h)))&&(i=z)});let r=c.reduce((z,h)=>{let d=a6(p.cssPrefix,h);if($[h]?(h=c6[i].includes(h)?O4[i][h]:h,t=h,z.prefix=h):e6[i].indexOf(h)>-1?(t=h,z.prefix=k1(h,{family:i})):d?z.iconName=d:h!==p.replacementClass&&!o.some(u=>h===a[u])&&z.rest.push(h),!n&&z.prefix&&z.iconName){let u=t==="fa"?G3(z.iconName):{},C=R(z.prefix,z.iconName);u.prefix&&(t=null),z.iconName=u.iconName||C||z.iconName,z.prefix=u.prefix||z.prefix,z.prefix==="far"&&!$.far&&$.fas&&!p.autoFetchSvg&&(z.prefix="fas")}return z},z2());return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),!r.prefix&&i===N&&($.fass||p.autoFetchSvg)&&(r.prefix="fass",r.iconName=R(r.prefix,r.iconName)||r.iconName),!r.prefix&&i===V&&($.fasds||p.autoFetchSvg)&&(r.prefix="fasds",r.iconName=R(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||t==="fa")&&(r.prefix=B()||"fas"),r}var J1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let t=n.reduce(this._pullDefinitions,{});Object.keys(t).forEach(i=>{this.definitions[i]=m(m({},this.definitions[i]||{}),t[i]),X1(i,t[i]);let o=J[g][i];o&&X1(o,t[i]),R3()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(t=>{let{prefix:i,iconName:o,icon:r}=a[t],z=r[2];e[i]||(e[i]={}),z.length>0&&z.forEach(h=>{typeof h=="string"&&(e[i][h]=r)}),e[i][o]=r}),e}},i3=[],t1={},i1={},l6=Object.keys(i1);function s6(c,e){let{mixoutsTo:n}=e;return i3=c,t1={},Object.keys(i1).forEach(a=>{l6.indexOf(a)===-1&&delete i1[a]}),i3.forEach(a=>{let t=a.mixout?a.mixout():{};if(Object.keys(t).forEach(i=>{typeof t[i]=="function"&&(n[i]=t[i]),typeof t[i]=="object"&&Object.keys(t[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=t[i][o]})}),a.hooks){let i=a.hooks();Object.keys(i).forEach(o=>{t1[o]||(t1[o]=[]),t1[o].push(i[o])})}a.provides&&a.provides(i1)}),n}function K1(c,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),t=2;t<n;t++)a[t-2]=arguments[t];return(t1[c]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Q(c){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(t1[c]||[]).forEach(i=>{i.apply(null,n)})}function W(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return i1[c]?i1[c].apply(null,e):void 0}function Q1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,n=c.prefix||B();if(e)return e=R(n,e)||e,a3(B3.definitions,n,e)||a3(w.styles,n,e)}var B3=new J1,r6=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,Q("noAuto")},f6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(Q("beforeI2svg",c),W("pseudoElements2svg",c),W("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,$4(()=>{z6({autoReplaceSvgRoot:e}),Q("watch",c)})}},m6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:R(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=k1(c[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(_4))){let e=A1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||B(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=B();return{prefix:e,iconName:R(e,c)||c}}}},y={noAuto:r6,config:p,dom:f6,parse:m6,library:B3,findIconDefinition:Q1,toHtml:M1},z6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=v}=c;(Object.keys(w.styles).length>0||p.autoFetchSvg)&&T&&p.autoReplaceSvg&&y.dom.i2svg({node:e})};function P1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(n=>M1(n))}}),Object.defineProperty(c,"node",{get:function(){if(!T)return;let n=v.createElement("div");return n.innerHTML=c.html,n.children}}),c}function h6(c){let{children:e,main:n,mask:a,attributes:t,styles:i,transform:o}=c;if(r2(o)&&n.found&&!a.found){let{width:r,height:z}=n,h={x:r/z/2,y:.5};t.style=S1(b(m({},i),{"transform-origin":"".concat(h.x+o.x/16,"em ").concat(h.y+o.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function p6(c){let{prefix:e,iconName:n,children:a,attributes:t,symbol:i}=c,o=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(m({},t),{id:o}),children:a}]}]}function h2(c){let{icons:{main:e,mask:n},prefix:a,iconName:t,transform:i,symbol:o,title:r,maskId:z,titleId:h,extra:d,watchable:u=!1}=c,{width:C,height:L}=n.found?n:e,Z=a==="fak",U=[p.replacementClass,t?"".concat(p.cssPrefix,"-").concat(t):""].filter(e1=>d.classes.indexOf(e1)===-1).filter(e1=>e1!==""||!!e1).concat(d.classes).join(" "),S={children:[],attributes:b(m({},d.attributes),{"data-prefix":a,"data-icon":t,class:U,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},_=Z&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};u&&(S.attributes[K]=""),r&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(h||C1())},children:[r]}),delete S.attributes.title);let H=b(m({},S),{prefix:a,iconName:t,main:e,mask:n,maskId:z,transform:i,symbol:o,styles:m(m({},_),d.styles)}),{children:k,attributes:c1}=n.found&&e.found?W("generateAbstractMask",H)||{children:[],attributes:{}}:W("generateAbstractIcon",H)||{children:[],attributes:{}};return H.children=k,H.attributes=c1,o?p6(H):h6(H)}function o3(c){let{content:e,width:n,height:a,transform:t,title:i,extra:o,watchable:r=!1}=c,z=b(m(m({},o.attributes),i?{title:i}:{}),{class:o.classes.join(" ")});r&&(z[K]="");let h=m({},o.styles);r2(t)&&(h.transform=W4({transform:t,startCentered:!0,width:n,height:a}),h["-webkit-transform"]=h.transform);let d=S1(h);d.length>0&&(z.style=d);let u=[];return u.push({tag:"span",attributes:z,children:[e]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function d6(c){let{content:e,title:n,extra:a}=c,t=b(m(m({},a.attributes),n?{title:n}:{}),{class:a.classes.join(" ")}),i=S1(a.styles);i.length>0&&(t.style=i);let o=[];return o.push({tag:"span",attributes:t,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:j1}=w;function c2(c){let e=c[0],n=c[1],[a]=c.slice(4),t=null;return Array.isArray(a)?t={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(T1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(T1.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(T1.PRIMARY),fill:"currentColor",d:a[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:t}}var C6={found:!1,width:512,height:512};function u6(c,e){!k3&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function e2(c,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=B()),new Promise((a,t)=>{if(n==="fa"){let i=G3(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&j1[e]&&j1[e][c]){let i=j1[e][c];return a(c2(i))}u6(c,e),a(b(m({},C6),{icon:p.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var l3=()=>{},n2=p.measurePerformance&&L1&&L1.mark&&L1.measure?L1:{mark:l3,measure:l3},z1='FA "6.6.0"',M6=c=>(n2.mark("".concat(z1," ").concat(c," begins")),()=>W3(c)),W3=c=>{n2.mark("".concat(z1," ").concat(c," ends")),n2.measure("".concat(z1," ").concat(c),"".concat(z1," ").concat(c," begins"),"".concat(z1," ").concat(c," ends"))},p2={begin:M6,end:W3},H1=()=>{};function s3(c){return typeof(c.getAttribute?c.getAttribute(K):null)=="string"}function v6(c){let e=c.getAttribute?c.getAttribute(o2):null,n=c.getAttribute?c.getAttribute(l2):null;return e&&n}function g6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function b6(){return p.autoReplaceSvg===!0?N1.replace:N1[p.autoReplaceSvg]||N1.replace}function x6(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function L6(c){return v.createElement(c)}function U3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=c.tag==="svg"?x6:L6}=e;if(typeof c=="string")return v.createTextNode(c);let a=n(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){a.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){a.appendChild(U3(i,{ceFn:n}))}),a}function H6(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var N1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(n=>{e.parentNode.insertBefore(U3(n),e)}),e.getAttribute(K)===null&&p.keepOriginalSource){let n=v.createComment(H6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){let e=c[0],n=c[1];if(~s2(e).indexOf(p.replacementClass))return N1.replace(c);let a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let i=n[0].attributes.class.split(" ").reduce((o,r)=>(r===p.replacementClass||r.match(a)?o.toSvg.push(r):o.toNode.push(r),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let t=n.map(i=>M1(i)).join(`
`);e.setAttribute(K,""),e.innerHTML=t}};function r3(c){c()}function Y3(c,e){let n=typeof e=="function"?e:H1;if(c.length===0)n();else{let a=r3;p.mutateApproach===P4&&(a=G.requestAnimationFrame||r3),a(()=>{let t=b6(),i=p2.begin("mutate");c.map(t),i(),n()})}}var d2=!1;function $3(){d2=!0}function a2(){d2=!1}var y1=null;function f3(c){if(!K2||!p.observeMutations)return;let{treeCallback:e=H1,nodeCallback:n=H1,pseudoElementsCallback:a=H1,observeMutationsRoot:t=v}=c;y1=new K2(i=>{if(d2)return;let o=B();s1(i).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!s3(r.addedNodes[0])&&(p.searchPseudoElements&&a(r.target),e(r.target)),r.type==="attributes"&&r.target.parentNode&&p.searchPseudoElements&&a(r.target.parentNode),r.type==="attributes"&&s3(r.target)&&~q4.indexOf(r.attributeName))if(r.attributeName==="class"&&v6(r.target)){let{prefix:z,iconName:h}=A1(s2(r.target));r.target.setAttribute(o2,z||o),h&&r.target.setAttribute(l2,h)}else g6(r.target)&&n(r.target)})}),T&&y1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function N6(){y1&&y1.disconnect()}function V6(c){let e=c.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,t)=>{let i=t.split(":"),o=i[0],r=i.slice(1);return o&&r.length>0&&(a[o]=r.join(":").trim()),a},{})),n}function y6(c){let e=c.getAttribute("data-prefix"),n=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",t=A1(s2(c));return t.prefix||(t.prefix=B()),e&&n&&(t.prefix=e,t.iconName=n),t.iconName&&t.prefix||(t.prefix&&a.length>0&&(t.iconName=t6(t.prefix,c.innerText)||m2(t.prefix,$1(c.innerText))),!t.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function S6(c){let e=s1(c.attributes).reduce((t,i)=>(t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t),{}),n=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||C1()):(e["aria-hidden"]="true",e.focusable="false")),e}function k6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:t}=y6(c),i=S6(c),o=K1("parseNodeAttributes",{},c),r=e.styleParser?V6(c):[];return m({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:r,attributes:i}},o)}var{styles:A6}=w;function X3(c){let e=p.autoReplaceSvg==="nest"?m3(c,{styleParser:!1}):m3(c);return~e.extra.classes.indexOf(w3)?W("generateLayersText",c,e):W("generateSvgReplacementMutation",c,e)}var O=new Set;A3.map(c=>{O.add("fa-".concat(c))});Object.keys(X[g]).map(O.add.bind(O));Object.keys(X[N]).map(O.add.bind(O));Object.keys(X[V]).map(O.add.bind(O));O=[...O];function z3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();let n=v.documentElement.classList,a=d=>n.add("".concat(e3,"-").concat(d)),t=d=>n.remove("".concat(e3,"-").concat(d)),i=p.autoFetchSvg?O:A3.map(d=>"fa-".concat(d)).concat(Object.keys(A6));i.includes("fa")||i.push("fa");let o=[".".concat(w3,":not([").concat(K,"])")].concat(i.map(d=>".".concat(d,":not([").concat(K,"])"))).join(", ");if(o.length===0)return Promise.resolve();let r=[];try{r=s1(c.querySelectorAll(o))}catch{}if(r.length>0)a("pending"),t("complete");else return Promise.resolve();let z=p2.begin("onTree"),h=r.reduce((d,u)=>{try{let C=X3(u);C&&d.push(C)}catch(C){k3||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise((d,u)=>{Promise.all(h).then(C=>{Y3(C,()=>{a("active"),a("complete"),t("pending"),typeof e=="function"&&e(),z(),d()})}).catch(C=>{z(),u(C)})})}function P6(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X3(c).then(n=>{n&&Y3([n],e)})}function w6(c){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Q1(e||{}),{mask:t}=n;return t&&(t=(t||{}).icon?t:Q1(t||{})),c(a,b(m({},n),{mask:t}))}}var O6=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,symbol:a=!1,mask:t=null,maskId:i=null,title:o=null,titleId:r=null,classes:z=[],attributes:h={},styles:d={}}=e;if(!c)return;let{prefix:u,iconName:C,icon:L}=c;return P1(m({type:"icon"},c),()=>(Q("beforeDOMElementCreation",{iconDefinition:c,params:e}),p.autoA11y&&(o?h["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||C1()):(h["aria-hidden"]="true",h.focusable="false")),h2({icons:{main:c2(L),mask:t?c2(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:C,transform:m(m({},P),n),symbol:a,title:o,maskId:i,titleId:r,extra:{attributes:h,styles:d,classes:z}})))},_6={mixout(){return{icon:w6(O6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=z3,c.nodeCallback=P6,c}}},provides(c){c.i2svg=function(e){let{node:n=v,callback:a=()=>{}}=e;return z3(n,a)},c.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:t,titleId:i,prefix:o,transform:r,symbol:z,mask:h,maskId:d,extra:u}=n;return new Promise((C,L)=>{Promise.all([e2(a,o),h.iconName?e2(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(Z=>{let[U,S]=Z;C([e,h2({icons:{main:U,mask:S},prefix:o,iconName:a,transform:r,symbol:z,maskId:d,title:t,titleId:i,extra:u,watchable:!0})])}).catch(L)})},c.generateAbstractIcon=function(e){let{children:n,attributes:a,main:t,transform:i,styles:o}=e,r=S1(o);r.length>0&&(a.style=r);let z;return r2(i)&&(z=W("generateAbstractTransformGrouping",{main:t,transform:i,containerWidth:t.width,iconWidth:t.width})),n.push(z||t.icon),{children:n,attributes:a}}}},E6={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return P1({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:c,params:e});let a=[];return c(t=>{Array.isArray(t)?t.map(i=>{a=a.concat(i.abstract)}):a=a.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},F6={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:t={},styles:i={}}=e;return P1({type:"counter",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),d6({content:c.toString(),title:n,extra:{attributes:t,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},q6={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,title:a=null,classes:t=[],attributes:i={},styles:o={}}=e;return P1({type:"text",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),o3({content:c,transform:m(m({},P),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...t]}})))}}},provides(c){c.generateLayersText=function(e,n){let{title:a,transform:t,extra:i}=n,o=null,r=null;if(L3){let z=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();o=h.width/z,r=h.height/z}return p.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,o3({content:e.innerHTML,width:o,height:r,transform:t,title:a,extra:i,watchable:!0})])}}},I6=new RegExp('"',"ug"),h3=[1105920,1112319],p3=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},v4),M4),y4),t2=Object.keys(p3).reduce((c,e)=>(c[e.toLowerCase()]=p3[e],c),{}),T6=Object.keys(t2).reduce((c,e)=>{let n=t2[e];return c[e]=n[900]||[...Object.entries(n)][0][1],c},{});function Z6(c){let e=c.replace(I6,""),n=K4(e,0),a=n>=h3[0]&&n<=h3[1],t=e.length===2?e[0]===e[1]:!1;return{value:$1(t?e[0]:e),isSecondary:a||t}}function D6(c,e){let n=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),t=isNaN(a)?"normal":a;return(t2[n]||{})[t]||T6[n]}function d3(c,e){let n="".concat(A4).concat(e.replace(":","-"));return new Promise((a,t)=>{if(c.getAttribute(n)!==null)return a();let o=s1(c.children).filter(C=>C.getAttribute(B1)===e)[0],r=G.getComputedStyle(c,e),z=r.getPropertyValue("font-family"),h=z.match(E4),d=r.getPropertyValue("font-weight"),u=r.getPropertyValue("content");if(o&&!h)return c.removeChild(o),a();if(h&&u!=="none"&&u!==""){let C=r.getPropertyValue("content"),L=D6(z,d),{value:Z,isSecondary:U}=Z6(C),S=h[0].startsWith("FontAwesome"),_=m2(L,Z),H=_;if(S){let k=i6(Z);k.iconName&&k.prefix&&(_=k.iconName,L=k.prefix)}if(_&&!U&&(!o||o.getAttribute(o2)!==L||o.getAttribute(l2)!==H)){c.setAttribute(n,H),o&&c.removeChild(o);let k=k6(),{extra:c1}=k;c1.attributes[B1]=e,e2(_,L).then(e1=>{let l4=h2(b(m({},k),{icons:{main:e1,mask:z2()},prefix:L,iconName:H,extra:c1,watchable:!0})),_1=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(_1,c.firstChild):c.appendChild(_1),_1.outerHTML=l4.map(s4=>M1(s4)).join(`
`),c.removeAttribute(n),a()}).catch(t)}else a()}else a()})}function j6(c){return Promise.all([d3(c,"::before"),d3(c,"::after")])}function R6(c){return c.parentNode!==document.head&&!~w4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(B1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function C3(c){if(T)return new Promise((e,n)=>{let a=s1(c.querySelectorAll("*")).filter(R6).map(j6),t=p2.begin("searchPseudoElements");$3(),Promise.all(a).then(()=>{t(),a2(),e()}).catch(()=>{t(),a2(),n()})})}var G6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=C3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:n=v}=e;p.searchPseudoElements&&C3(n)}}},u3=!1,B6={mixout(){return{dom:{unwatch(){$3(),u3=!0}}}},hooks(){return{bootstrap(){f3(K1("mutationObserverCallbacks",{}))},noAuto(){N6()},watch(c){let{observeMutationsRoot:e}=c;u3?a2():f3(K1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},M3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((n,a)=>{let t=a.toLowerCase().split("-"),i=t[0],o=t.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},W6={mixout(){return{parse:{transform:c=>M3(c)}}},hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-transform");return n&&(c.transform=M3(n)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:t,iconWidth:i}=e,o={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),h="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(r," ").concat(z," ").concat(h)},u={transform:"translate(".concat(i/2*-1," -256)")},C={outer:o,inner:d,path:u};return{tag:"g",attributes:m({},C.outer),children:[{tag:"g",attributes:m({},C.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),C.path)}]}]}}}},R1={x:0,y:0,width:"100%",height:"100%"};function v3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function U6(c){return c.tag==="g"?c.children:[c]}var Y6={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-mask"),a=n?A1(n.split(" ").map(t=>t.trim())):z2();return a.prefix||(a.prefix=B()),c.mask=a,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:n,attributes:a,main:t,mask:i,maskId:o,transform:r}=e,{width:z,icon:h}=t,{width:d,icon:u}=i,C=B4({transform:r,containerWidth:d,iconWidth:z}),L={tag:"rect",attributes:b(m({},R1),{fill:"white"})},Z=h.children?{children:h.children.map(v3)}:{},U={tag:"g",attributes:m({},C.inner),children:[v3(m({tag:h.tag,attributes:m(m({},h.attributes),C.path)},Z))]},S={tag:"g",attributes:m({},C.outer),children:[U]},_="mask-".concat(o||C1()),H="clip-".concat(o||C1()),k={tag:"mask",attributes:b(m({},R1),{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,S]},c1={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:U6(u)},k]};return n.push(c1,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(_,")")},R1)}),{children:n,attributes:a}}}},$6={provides(c){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:b(m({},a),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=b(m({},t),{attributeName:"opacity"}),o={tag:"circle",attributes:b(m({},a),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:b(m({},t),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(m({},i),{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:b(m({},a),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:b(m({},i),{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:b(m({},a),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(m({},i),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},X6={hooks(){return{parseNodeAttributes(c,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return c.symbol=a,c}}}},J6=[Y4,_6,E6,F6,q6,G6,B6,W6,Y6,$6,X6];s6(J6,{mixoutsTo:y});var y5=y.noAuto,J3=y.config,S5=y.library,K3=y.dom,Q3=y.parse,k5=y.findIconDefinition,A5=y.toHtml,c4=y.icon,P5=y.layer,K6=y.text,Q6=y.counter;var c5=["*"],e5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},n5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},a5=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},C2=new WeakSet,e4="fa-auto-css";function t5(c,e){if(!e.autoAddCss||C2.has(c))return;if(c.getElementById(e4)!=null){e.autoAddCss=!1,C2.add(c);return}let n=c.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",e4),n.innerHTML=K3.css();let a=c.head.childNodes,t=null;for(let i=a.length-1;i>-1;i--){let o=a[i],r=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(t=o)}c.head.insertBefore(n,t),e.autoAddCss=!1,C2.add(c)}var i5=c=>c.prefix!==void 0&&c.iconName!==void 0,o5=(c,e)=>i5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},l5=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){J3.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),s5=(()=>{class c{constructor(){this.definitions={}}addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let t of a.icon[2])typeof t=="string"&&(this.definitions[a.prefix][t]=a)}}addIconPacks(...n){for(let a of n){let t=Object.keys(a).map(i=>a[i]);this.addIcons(...t)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=E1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),r5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=g2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[v1]})}}return c})(),f5=(()=>{class c{constructor(n,a){this.renderer=n,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(A(N2),A(b2))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[v1,F],ngContentSelectors:c5,decls:1,vars:0,template:function(a,t){a&1&&(A2(),P2(0))},encapsulation:2})}}return c})(),n4=(()=>{class c{constructor(n,a,t,i,o){this.sanitizer=n,this.config=a,this.iconLibrary=t,this.stackItem=i,this.document=M2(E2),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){n5();return}if(n){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let t=this.buildParams();t5(this.document,this.config);let i=c4(a,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let a=o5(n,this.config.defaultPrefix);if("icon"in a)return a;let t=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return t??(e5(a),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?Q3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:a5(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||c)(A(I2),A(l5),A(s5),A(r5,8),A(f5,8))}}static{this.\u0275cmp=E({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,t){a&2&&(k2("innerHTML",t.renderedIconHTML,L2),y2("title",t.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[v1,F],decls:0,vars:0,template:function(a,t){},encapsulation:2})}}return c})();var a4=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=v2({type:c})}static{this.\u0275inj=u2({})}}return c})();var w1=class c{faInstagram=W2;faGithub=Y2;faFacebook=U2;faLinkedin=B2;faFilePdf=$2;static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-home"]],standalone:!0,features:[F],decls:233,vars:5,consts:[["id","home"],[1,"container"],["id","talkbubble"],[1,"web-links"],[1,"git-text",2,"margin-bottom","73px"],["href","https://github.com/luichemo/webportfolio",1,"github"],[3,"icon"],[2,"margin-top","5px"],[2,"padding-bottom","5px"],[1,"link-text",2,"margin-bottom","31px"],["href","https://www.linkedin.com/in/luka-chemia-a0a339236/",1,"linkedin"],[1,"inst-text",2,"margin-bottom","10px"],["href","https://www.instagram.com/luichemo/profilecard/?igsh=dW1oZGxwdGNjc2Y=",1,"instagram"],[1,"fb-text",2,"margin-bottom","31px"],["href","https://www.facebook.com/lukaa2002?mibextid=LQQJ4d",1,"facebook"],[2,"text-decoration","underline"],[1,"proj-btn"],[1,"btn"],["href","#projects"],["id","about"],[1,"container2"],["id","talkbubble2"],[1,"about-header"],[1,"about-content"],[1,"about-left-content"],[1,"proj-btn",2,"justify-content","start","margin-top","20px"],[1,"about-right-content"],[1,"skills"],[1,"skills_icon"],["src","html.png","id","html",1,"img-responsive"],["src","css.png","id","css",1,"img-responsive"],["src","js.png","id","js",1,"img-responsive"],["src","TypeScript.png","id","TypeScript",1,"img-responsive",2,"margin-top","15px"],["src","angular.png","id","angular",1,"img-responsive",2,"margin-top","5px"],["src","angularMaterial.png","id","angularMaterial",1,"img-responsive"],["src","github.png","id","github",1,"img-responsive"],["src","bootstrap.png","id","bootstrap",1,"img-responsive"],["src","figma.png","id","figma",1,"img-responsive",2,"margin-top","10px"],["src","adobe.png","id","adobe",1,"img-responsive"],[1,"cv-content"],["href","Luka_Chemia_CV.pdf"],["id","projects"],["id","talkbubble3"],[2,"font-family","'Sour Gummy', sans-serif !important"],[1,"project-content"],[1,"proj"],[1,"proj-left-content"],["src","recipe_finder.png","alt",""],[1,"proj-right-content"],[1,"project-header"],[1,"project-text"],[1,"tools_header"],[1,"tools"],[1,"project-btn"],["href","https://luichemo.github.io/recipe-finder/"],["id","contact"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul")(5,"li",4)(6,"a",5),M(7,"fa-icon",6),l(),s(8,"p",7),f(9,"G"),l(),s(10,"p"),f(11,"i"),l(),s(12,"p"),f(13,"t"),l(),s(14,"p"),f(15,"h"),l(),s(16,"p"),f(17,"u"),l(),s(18,"p",8),f(19,"b"),l()(),s(20,"li",9)(21,"a",10),M(22,"fa-icon",6),l(),s(23,"p",7),f(24,"L"),l(),s(25,"p"),f(26,"i"),l(),s(27,"p"),f(28,"n"),l(),s(29,"p"),f(30,"k"),l(),s(31,"p"),f(32,"e"),l(),s(33,"p"),f(34,"d"),l(),s(35,"p"),f(36,"i"),l(),s(37,"p",8),f(38,"n"),l()(),s(39,"li",11)(40,"a",12),M(41,"fa-icon",6),l(),s(42,"p",7),f(43,"I"),l(),s(44,"p"),f(45,"n"),l(),s(46,"p"),f(47,"s"),l(),s(48,"p"),f(49,"t"),l(),s(50,"p"),f(51,"a"),l(),s(52,"p"),f(53,"g"),l(),s(54,"p"),f(55,"r"),l(),s(56,"p"),f(57,"a"),l(),s(58,"p",8),f(59,"m"),l()(),s(60,"li",13)(61,"a",14),M(62,"fa-icon",6),l(),s(63,"p",7),f(64,"F"),l(),s(65,"p"),f(66,"a"),l(),s(67,"p"),f(68,"c"),l(),s(69,"p"),f(70,"e"),l(),s(71,"p"),f(72,"b"),l(),s(73,"p"),f(74,"o"),l(),s(75,"p"),f(76,"o"),l(),s(77,"p",8),f(78,"k"),l()()()(),s(79,"h1"),f(80,"Hey, I'm Luka Chemia, Software Engineer "),s(81,"span",15),f(82,"You"),l(),f(83," Need !"),l(),s(84,"div",16)(85,"button",17)(86,"a",18),f(87,"Projects"),l()()()()()(),s(88,"div",19)(89,"div",20)(90,"div",21)(91,"div",22)(92,"h1"),f(93,"About Me"),l(),M(94,"hr"),s(95,"p"),f(96,"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."),l()(),s(97,"div",23)(98,"div",24)(99,"h2"),f(100,"Get To Know Me !"),l(),s(101,"p"),f(102,"I'm a passionate and dedicated Java Full-Stack Web Developer with a proven track record of creating robust and scalable web applications. My expertise spans both front-end and back-end technologies, including Java, Spring Boot and Angular. With a keen eye for design and a commitment to clean, efficient code, I strive to deliver exceptional user experiences. I excel in problem-solving and collaborating with cross-functional teams to deliver innovative solutions. I'm excited to leverage my skills to tackle new challenges and drive innovation in the world of Full Stack development. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. "),l(),s(103,"div",25)(104,"button",17)(105,"a",18),f(106,"Projects"),l()()()(),s(107,"div",26)(108,"h2"),f(109,"My Skills"),l(),s(110,"div",27)(111,"div",28),M(112,"img",29),l(),s(113,"div",28),M(114,"img",30),l(),s(115,"div",28),M(116,"img",31),l(),s(117,"div",28),M(118,"img",32),l(),s(119,"div",28),M(120,"img",33),l(),s(121,"div",28),M(122,"img",34),l(),s(123,"div",28),M(124,"img",35),l(),s(125,"div",28),M(126,"img",36),l(),s(127,"div",28),M(128,"img",37),l(),s(129,"div",28),M(130,"img",38),l()()()(),s(131,"div",39)(132,"a",40)(133,"p"),f(134,"View My Full Resume"),l(),M(135,"fa-icon",6),l()()()()(),s(136,"div",41)(137,"div",20)(138,"div",42)(139,"div",22)(140,"h1"),f(141,"Projects"),l(),M(142,"hr"),s(143,"p",43),f(144,"Here you will find some of the personal and clients projects on that i worked with their source code and live link."),l()(),s(145,"div",44)(146,"div",45)(147,"div",46),M(148,"img",47),l(),s(149,"div",48)(150,"div")(151,"div",49),f(152,"Recipe Finder"),l(),s(153,"div",50),f(154,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem error illo ipsa repellat pariatur iure, sunt veritatis ab nesciunt aperiam temporibus distinctio ipsum a neque."),l(),s(155,"p",51),f(156,"Tools"),l(),s(157,"div",52)(158,"p"),f(159,"Java"),l(),s(160,"p"),f(161,"Java"),l(),s(162,"p"),f(163,"Java"),l(),s(164,"p"),f(165,"Java"),l(),s(166,"p"),f(167,"Java"),l(),s(168,"p"),f(169,"Java"),l()(),s(170,"div",53)(171,"button")(172,"a",54),f(173,"Visit"),l()()()()()()(),s(174,"div",44)(175,"div",45)(176,"div",46),M(177,"img",47),l(),s(178,"div",48)(179,"div")(180,"div",49),f(181,"Recipe Finder"),l(),s(182,"div",50),f(183,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem error illo ipsa repellat pariatur iure, sunt veritatis ab nesciunt aperiam temporibus distinctio ipsum a neque."),l(),s(184,"p",51),f(185,"Tools"),l(),s(186,"div",52)(187,"p"),f(188,"Java"),l(),s(189,"p"),f(190,"Java"),l(),s(191,"p"),f(192,"Java"),l(),s(193,"p"),f(194,"Java"),l(),s(195,"p"),f(196,"Java"),l(),s(197,"p"),f(198,"Java"),l()(),s(199,"div",53)(200,"button")(201,"a",18),f(202,"Visit"),l()()()()()()(),s(203,"div",44)(204,"div",45)(205,"div",46),M(206,"img",47),l(),s(207,"div",48)(208,"div")(209,"div",49),f(210,"Recipe Finder"),l(),s(211,"div",50),f(212,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem error illo ipsa repellat pariatur iure, sunt veritatis ab nesciunt aperiam temporibus distinctio ipsum a neque."),l(),s(213,"p",51),f(214,"Tools"),l(),s(215,"div",52)(216,"p"),f(217,"Java"),l(),s(218,"p"),f(219,"Java"),l(),s(220,"p"),f(221,"Java"),l(),s(222,"p"),f(223,"Java"),l(),s(224,"p"),f(225,"Java"),l(),s(226,"p"),f(227,"Java"),l()(),s(228,"div",53)(229,"button")(230,"a",18),f(231,"Visit"),l()()()()()()()()(),M(232,"div",55),l()),n&2&&(x(7),D("icon",a.faGithub),x(15),D("icon",a.faLinkedin),x(19),D("icon",a.faInstagram),x(21),D("icon",a.faFacebook),x(73),D("icon",a.faFilePdf))},dependencies:[g1,b1,a4,n4],styles:["*[_ngcontent-%COMP%]{font-family:Doto,sans-serif}html[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center;align-items:center;height:86vh}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#191858;text-align:center;font-size:60px;font-weight:700;margin-top:50px}#talkbubble[_ngcontent-%COMP%]{width:1350px;height:85vh;background-image:linear-gradient(#64b3f4,#c2e59c);position:relative;z-index:2;clip-path:polygon(0% 0%,100% 0%,100% 75%,50% 100%,0% 75%)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:5px;display:flex;justify-content:center;align-items:center;list-style-type:none;gap:40px;margin-top:10px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#191858;padding:10px 15px;border-radius:50% 50% 0% 0%;font-size:30px}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transition:font-size .5s,color .5s,text-decoration .5s}li[_ngcontent-%COMP%]{text-align:center}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif;font-weight:100;color:#fff;margin-top:0;opacity:0;transform:translateY(10px);transition:opacity .4s,transform .4s}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover + p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover ~ p[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover{background-color:#2b3137;color:#fff}.git-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2b3137}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover{background-color:#1877f2;color:#fff}.fb-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#1877f2}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover{background-color:#0077b5;color:#fff}.link-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#0077b5}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover{background-image:linear-gradient(#f9ce34,#ee2a7b,#6228d7);color:#fff}.inst-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#6228d7}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}.web-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{animation-delay:.5s}h1[_ngcontent-%COMP%]{opacity:0;transform:translateY(200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards}h1[_ngcontent-%COMP%]{animation-delay:.5s}@keyframes _ngcontent-%COMP%_slideUp{to{opacity:1;transform:translateY(0)}}.proj-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:12vh}.btn[_ngcontent-%COMP%]{font-size:30px;border-radius:5px;background-color:#191858;border:solid 1px #191858;font-weight:700;opacity:0;transform:translate(-200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards;width:200px;height:70px}.btn[_ngcontent-%COMP%]:hover{background-color:#d3d30a;cursor:pointer;box-shadow:5px 10px #191858;font-weight:900}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 30px;color:#d3d30a;font-family:Sour Gummy,sans-serif}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#191858}@media screen and (max-width: 1500px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}}@media screen and (max-width: 756px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;font-weight:500}}@media screen and (max-width: 450px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:10vh}.web-links[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 375px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20vh}.btn[_ngcontent-%COMP%]{display:none}}#talkbubble2[_ngcontent-%COMP%]{width:1350px;height:auto;background-image:linear-gradient(#c2e59c,#64b3f4);position:relative;z-index:2;text-align:center}.container2[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;font-weight:700;color:#191858;font-family:Sour Gummy,sans-serif!important;margin-top:30px}.about-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:50px;margin:20px auto;border:solid 3px #191858;border-radius:10px}.about-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:1000px;margin:auto auto 40px;font-size:20px;font-weight:400;color:#191858}.about-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:5vw}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;display:flex;justify-content:start;margin-bottom:2rem}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:500px;text-align:start;margin-bottom:2rem;font-family:900;font-size:22px}.contact-btn[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;font-size:30px;border-radius:5px;background-color:#d3d30a;border:solid 1px #191858;font-weight:700;opacity:0;transform:translate(-200px);animation:_ngcontent-%COMP%_slideUp .8s ease-out forwards;width:200px;height:70px;font-weight:900;margin-bottom:20px}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;text-align:center;margin:0}.contact-btn[_ngcontent-%COMP%]:hover{background-color:#d3d30a;cursor:pointer;box-shadow:5px 10px #191858}.about-right-content[_ngcontent-%COMP%]{width:500px;margin-bottom:80px}.about-right-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:4rem}.about-left-content[_ngcontent-%COMP%]{margin-left:200px}.skills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-bottom:6rem}.img-responsive[_ngcontent-%COMP%]{display:flex;width:90px;justify-content:center;align-items:center}.skills_icon[_ngcontent-%COMP%]{text-align:center;padding:.7rem 1rem;margin-bottom:1.2rem;margin-right:1rem;border-radius:5px;font-weight:500}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;width:90px;height:auto;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{-webkit-filter:grayscale(0)}.skills_icon[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}@media screen and (max-width: 1500px){.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:20px}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:22px;font-weight:900}#talkbubble2[_ngcontent-%COMP%]{height:auto}.img-responsive[_ngcontent-%COMP%]{width:40px}.skills_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}}@media screen and (max-width: 1400px){.about-header[_ngcontent-%COMP%]{margin:0}.about-left-content[_ngcontent-%COMP%]{margin-left:0}.about-content[_ngcontent-%COMP%]{display:inline-block}.about-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:auto}.contact-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20% auto 0}.container2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:500px;margin-bottom:40px}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{justify-content:center}.about-right-content[_ngcontent-%COMP%]{margin-bottom:0}}@media screen and (max-width: 550px){.container2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:50px}#talkbubble2[_ngcontent-%COMP%], #talkbubble3[_ngcontent-%COMP%], #talkbubble[_ngcontent-%COMP%]{max-width:400px}.about-right-content[_ngcontent-%COMP%]{width:auto}.contact-btn[_ngcontent-%COMP%]{margin:40px auto auto}.container2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:300px}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about-header[_ngcontent-%COMP%]{width:300px;margin:auto}.about-right-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about-left-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:300px;margin:auto auto 20px}.about-right-content[_ngcontent-%COMP%]{width:300px;margin-top:40px}.skills[_ngcontent-%COMP%]{width:300px;margin:auto auto 0;flex-wrap:none}}.cv-content[_ngcontent-%COMP%]{height:150px;background-color:#0077b5;display:flex;justify-content:center;align-items:center;position:relative}.cv-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;text-decoration:none;display:flex;justify-content:center;align-items:center}.cv-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cv-content[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:absolute;transition:opacity .3s ease,transform .3s ease}.cv-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-size:30px;color:#adff2f;margin:0;opacity:1;transform:translateY(0)}.cv-content[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:50px;color:#adff2f;opacity:0;transform:translateY(20px)}.cv-content[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{opacity:0;transform:translateY(-20px)}.cv-content[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}#talkbubble3[_ngcontent-%COMP%]{width:1350px;height:auto;background-color:#fff;position:relative;z-index:2;text-align:center;margin-bottom:20px}.project-content[_ngcontent-%COMP%]{display:block;justify-content:center;align-items:center;padding:20px}@media (min-width: 1024px){.project-content[_ngcontent-%COMP%]{display:flex}}.proj[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;gap:20px}.proj-left-content[_ngcontent-%COMP%]{text-align:center;flex:1 1 100%}img[_ngcontent-%COMP%]{width:100%;height:auto;max-width:600px}.proj-right-content[_ngcontent-%COMP%]{text-align:start;flex:1 1 100%}@media (min-width: 1024px){.proj-left-content[_ngcontent-%COMP%], .proj-right-content[_ngcontent-%COMP%]{flex:0 0 45%}}.project-header[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-size:28px;font-weight:500;margin-bottom:20px;color:#191858}.project-text[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;margin-bottom:20px;color:#191858}.tools_header[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-size:20px;font-weight:400;margin-bottom:10px;color:#191858}.tools[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:40px}.tools[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Sour Gummy,sans-serif!important;font-size:14px;font-weight:400;background-color:#bdbdbd;border-radius:5px;text-align:center;width:80px;height:30px;line-height:30px}.project-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:15px 60px;border:none;border-radius:5px;background-color:#0077b5;font-size:16px;width:auto}.project-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-family:Sour Gummy,sans-serif!important;font-size:20px;text-decoration:none}.proj-left-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:transform .5s ease-in-out,box-shadow .5s ease-in-out}.proj-left-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1);cursor:pointer}@media (max-width: 1400px){.tools[_ngcontent-%COMP%]{margin-bottom:0}}@media (max-width: 768px){.proj-right-content[_ngcontent-%COMP%]{width:100%}.project-header[_ngcontent-%COMP%]{font-size:24px}.project-text[_ngcontent-%COMP%]{font-size:14px}.tools_header[_ngcontent-%COMP%]{font-size:18px}.tools[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;padding:3px 8px}.project-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 60px;font-size:18px}.project-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:24px}}@media (max-width: 480px){.project-header[_ngcontent-%COMP%]{font-size:20px}.project-text[_ngcontent-%COMP%]{font-size:12px}.tools_header[_ngcontent-%COMP%]{font-size:16px}.tools[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:60px;height:25px;font-size:12px;line-height:25px}}"]})};var O1=class c{title="webportfolio";static \u0275fac=function(n){return new(n||c)};static \u0275cmp=E({type:c,selectors:[["app-root"]],standalone:!0,features:[F],decls:2,vars:0,consts:[[1,"nav"]],template:function(n,a){n&1&&M(0,"app-nav-bar",0)(1,"app-home")},dependencies:[x1,w1],styles:[".nav[_ngcontent-%COMP%]{height:120px}"]})};var t4=[];var i4={providers:[O2({eventCoalescing:!0}),R2(t4),T2()]};var z5={providers:[Z2()]},o4=_2(i4,z5);var h5=()=>q2(O1,o4),u0=h5;export{u0 as a};
