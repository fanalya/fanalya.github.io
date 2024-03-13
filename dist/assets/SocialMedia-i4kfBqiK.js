import{u as E,l as G,a as J,b as X,c as Y,d as Z,e as O,p as K,_ as Q}from"./LeftSidebar.vue_vue_type_script_setup_true_lang-Bp9Y9GtL.js";import{_ as F}from"./avatar-1-DnWlU4m7.js";import{C as A,d as I,l as T,b as ee,R as se,j as te,T as le,r as _,o as l,q as k,w as a,e,f as s,m as o,X as oe,k as i,c as n,F as g,x as y,n as v,s as R,V as q,t as u,N as ae,y as $,G as ne,W as j,Y as ie,Z as re,S as ce}from"./index-Bm63Dp3b.js";import{a as H}from"./avatar-8-CU-vMG8y.js";import{i as de}from"./img-3-CD2vtfKz.js";import{i as ue}from"./img-5-BrT5pyI2.js";import{i as _e}from"./img-6-DTzanbhN.js";import{C as me}from"./choices-BMP99meK.js";import{_ as he}from"./EventDailog.vue_vue_type_script_setup_true_lang-BgWwOekm.js";import{V as pe}from"./video-C8O35uH_.js";import{I as fe}from"./image-DTdFpN_a.js";import{M as B}from"./more-horizontal-BIZYmzrx.js";import{U}from"./user-round-x-DrCzQ6zZ.js";import{C as xe}from"./check-circle-EXUak7RX.js";import{H as ke}from"./help-circle-BJIc4aGy.js";import"./meta-oYIBxCJq.js";import"./telegram-D3-VtU8v.js";import"./twitter-CsSADpLO.js";import"./avatar-2-tDqM6LoX.js";import"./avatar-4-DKRKkp74.js";import"./avatar-6-C8XqZpfZ.js";import"./avatar-9-DooUPCI0.js";import"./avatar-10-CVyrodYB.js";import"./home-B4ZdFSVf.js";import"./send-DNEj-Moc.js";/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=A("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=A("GitPullRequestIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]),ve={class:"flex items-center justify-between px-3 py-2 border-b dark:border-zink-500"},ye=e("h5",{class:"text-16"},"Add Post Image / Video",-1),ze={class:"max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"},we={action:"#!"},$e={class:"mb-4"},Te={class:"mb-4"},Ce=e("div",{class:"mb-4"},[e("label",{for:"mentionTag",class:"inline-block mb-2 text-base font-medium"},"@Mention"),e("input",{class:"form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200",id:"mentionTag",placeholder:"@Mention",type:"text",value:"Fashion, Clothes, Headphones"})],-1),Ve={class:"mb-4"},Ie=e("label",{class:"inline-block mb-2 text-base font-medium"},"Images / Video",-1),Se={class:"text-right flex justify-end"},Me=I({__name:"ImagesVideoDailog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(C,{emit:b}){const f=b,z=C,p=T(null);ee(()=>{}),se(()=>{});const r=te({get(){return z.modelValue},set(c){f("update:modelValue",c)}});return le(r,c=>{c?setTimeout(()=>{const x=document.querySelector("#mentionTag");x&&(p.value=new me(x,{uniqueItemText:"",allowHTML:!0}))},200):p.value.destroy()}),(c,x)=>{const V=_("TButton"),D=_("TInputField"),S=_("TTextarea"),m=_("TFileUploader"),L=_("TModal");return l(),k(L,{modelValue:r.value,"onUpdate:modelValue":x[1]||(x[1]=w=>r.value=w)},{content:a(()=>[e("div",ve,[ye,s(V,{variant:"link",color:"slate",onClick:x[0]||(x[0]=w=>r.value=!1)},{default:a(()=>[s(o(oe))]),_:1})]),e("div",ze,[e("form",we,[e("div",$e,[s(D,{required:"",placeholder:"Enter title",label:"Post Title"})]),e("div",Te,[s(S,{label:"Description"})]),Ce,e("div",Ve,[Ie,s(m,{dashed:""})]),e("div",Se,[s(V,{color:"custom",classes:"px-4 py-2"},{default:a(()=>[i(" Share Post ")]),_:1})])])])]),_:1},8,["modelValue"])}}}),Fe={class:"col-span-12 lg:col-span-7 xl:col-span-9 2xl:col-span-6"},qe={class:"flex gap-4"},Be=["src","alt"],De={class:"flex gap-3"},Le={class:"flex gap-3 grow flex-wrap"},Pe={href:"#!"},Re=e("span",{class:"align-middle text-slate-500 dark:text-zink-200 ms-1"},"Live Video",-1),Ue=e("span",{class:"align-middle text-slate-500 dark:text-zink-200 ms-1"},"Image/Video",-1),je=e("span",{class:"align-middle text-slate-500 dark:text-zink-200 ms-1"},"Event",-1),He={href:"#!"},Ae=e("span",{class:"align-middle text-slate-500 dark:text-zink-200 ms-1"},"Mention",-1),We={class:"flex"},Ne={action:"#!"},Ee={class:"flex gap-3 mt-4"},Ge={class:"bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"},Je=["src"],Xe={class:"grow"},Ye={class:"mt-4 text-right flex ltr:justify-end rtl:justify-start"},Ze={class:"card-body"},Oe={class:"flex flex-wrap items-center gap-3 mb-5"},Ke={class:"size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20"},Qe=["src"],es=e("div",{class:"grow"},[e("h6",{class:"mb-1 text-15"},[e("a",{href:"#!",class:"transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"},"Frances Zboncak"),i(" -"),e("small",{class:"ml-1 font-normal text-slate-500 dark:text-zink-200"},"25 min")]),e("p",{class:"text-slate-500 dark:text-zink-200"},[i(" Web Developer at "),e("a",{href:"#!",class:"underline"},"Themesdesign")])],-1),ss={class:"flex items-center gap-2 mt-4 shrink-0 md:mt-4"},ts={key:0,class:"group-[.active]/item:hidden block"},ls={key:1},os={class:"relative dropdown"},as={class:"flex"},ns=e("p",null," Our newly established office serves as a clear representation of our unwavering commitment to nurturing a vibrant and dynamic work atmosphere, where innovation thrives and creativity knows no bounds. ",-1),is={class:"border-y border-slate-200 card-body dark:border-zink-500"},rs={class:"flex items-center gap-4 mb-0"},cs={href:"#",class:"text-slate-500 dark:text-zink-200"},ds={class:"align-middle ms-1"},us={class:"card-body"},_s={action:"#!"},ms={class:"flex gap-3"},hs={class:"bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"},ps=["src"],fs={class:"grow"},xs={class:"shrink-0"},ks={class:"mt-5"},gs={class:"flex gap-3"},bs={class:"bg-yellow-100 rounded-full size-9 shrink-0 dark:bg-yellow-500/20"},vs=["src"],ys={class:"grow"},zs=e("div",{class:"p-3 rounded-md bg-slate-100 dark:bg-zink-600"},[e("h6",{class:"mb-3 text-15"},[e("a",{href:"#!"},"@bertha34"),i(" - "),e("span",{class:"text-sm font-normal text-slate-500 dark:text-zink-200"},"14 June, 2023")]),e("p",null," Do you have a date or timeline when do you release the Laravel + Vite + Jetstream + Pest + Vue (Full Stack) version of this item ? "),e("div",{class:"flex items-center gap-2 mt-4"},[e("a",{href:"#!",class:"px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"},"Like (3)"),e("a",{href:"#!",class:"px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"},"Reply")])],-1),ws={class:"flex gap-3 mt-4"},$s={class:"bg-green-100 rounded-full size-9 shrink-0 dark:bg-green-500/20"},Ts=["src"],Cs=e("div",{class:"grow"},[e("div",{class:"p-3 rounded-md bg-slate-100 dark:bg-zink-600"},[e("h6",{class:"mb-3 text-15"},[e("a",{href:"#!"},"@frances_zboncak"),i(" - "),e("span",{class:"text-sm font-normal text-slate-500 dark:text-zink-200"},"14 June, 2023")]),e("p",{class:"mb-1"}," Sorry not at the moment. But Laravel + Interia + Vue will be ready next week hopefully. FYI: There will be no backend-related functionality with this template. "),e("p",null,"Thank you"),e("div",{class:"flex items-center gap-2 mt-4"},[e("a",{href:"#!",class:"px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"},"Like (6)"),e("a",{href:"#!",class:"px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"},"Reply")])])],-1),Vs={class:"card-body"},Is={class:"flex flex-wrap items-center gap-3 mb-5"},Ss={class:"size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green=500/20"},Ms=["src"],Fs=e("div",{class:"grow"},[e("h6",{class:"mb-1 text-15"},[e("a",{href:"#!",class:"transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"},"Stephen Tillman"),i(" -"),e("small",{class:"ml-1 font-normal text-slate-500 dark:text-zink-200"},"25 min")]),e("p",{class:"text-slate-500 dark:text-zink-200"},[i(" React Developer at "),e("a",{href:"#!",class:"underline"},"Webfox Info")])],-1),qs={class:"flex flex-wrap items-center mt-4 shrink-0 md:mt-4"},Bs={key:0,class:"group-[.active]/item:hidden block"},Ds={key:1},Ls={class:"relative dropdown"},Ps={class:"flex"},Rs=e("p",null," Product design is the process of developing a usable product that meets customer's needs by defining the users' problems and finding creative solutions for these problems. The term is also used to refer to the result of this process, the design qualities of an existing product. ",-1),Us={class:"grid gap-4 mt-4 md:grid-cols-3"},js=["onClick"],Hs=["src"],As={class:"border-y border-slate-200 card-body dark:border-zink-500"},Ws={class:"flex items-center gap-4 mb-0"},Ns={href:"#",class:"text-slate-500 dark:text-zink-200"},Es={class:"align-middle ms-1"},Gs={class:"card-body"},Js={action:"#!"},Xs={class:"flex gap-3"},Ys={class:"bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"},Zs=["src"],Os={class:"grow"},Ks={class:"shrink-0"},Qs={class:"card-body"},et={class:"flex flex-wrap items-center gap-3 mb-5"},st={class:"size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20"},tt=["src"],lt=e("div",{class:"grow"},[e("h6",{class:"mb-1 text-15"},[e("a",{href:"#!",class:"transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"},"Stephen Tillman"),i(" -"),e("small",{class:"ml-1 font-normal text-slate-500 dark:text-zink-200"},"25 min")]),e("p",{class:"text-slate-500 dark:text-zink-200"},[i(" React Developer at "),e("a",{href:"#!",class:"underline"},"Webfox Info")])],-1),ot={class:"flex items-center gap-2 mt-4 shrink-0 md:mt-4"},at={key:0,class:"group-[.active]/item:hidden block"},nt={key:1},it={class:"relative dropdown"},rt={class:"flex"},ct=e("p",null,"Add a 'Different Languages' option to the poll.",-1),dt={class:"inline-flex flex-col gap-3 p-4 mt-4 rounded-md w-full bg-slate-100 max-w-7xl dark:bg-zink-600"},ut={class:"absolute top-1 ltr:right-1 rtl:left-1"},_t={class:"shrink-0"},mt={class:"grow"},ht={href:"#!"},pt={class:"w-full h-1.5 rounded-full bg-white dark:bg-zink-700 mt-2"},ft={class:"border-y border-slate-200 card-body dark:border-zink-500"},xt={class:"flex items-center gap-4 mb-0"},kt={href:"#",class:"text-slate-500 dark:text-zink-200"},gt={class:"align-middle ms-1"},bt={class:"card-body"},vt={action:"#!"},yt={class:"flex gap-3"},zt={class:"bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"},wt=["src"],$t={class:"grow"},Tt={class:"shrink-0"},Ct={class:"flex justify-center mb-5"},Vt=e("svg",{class:"size-4 ltr:mr-2 rtl:ml-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),It=I({__name:"Content",setup(C){const b=[{title:"Create a poll",icon:be},{title:"Ask a question",icon:re},{title:"Help",icon:ke}],f=T(!1),z=T(!1),p=T(!1),r=()=>{f.value=!f.value},c=T(!1),x=T(0),V=[{src:_e},{src:de},{src:ue}],D=S=>{x.value=S,c.value=!0};return(S,m)=>{const L=_("simplebar"),w=_("TCard"),d=_("TButton"),M=_("TList"),W=_("TTextarea"),P=_("TInputField"),N=_("TProgressBar");return l(),n(g,null,[e("div",Fe,[s(w,null,{default:a(()=>[s(L,null,{default:a(()=>[e("div",qe,[(l(!0),n(g,null,y(o(E),(t,h)=>(l(),n("a",{key:h,href:"#inline-example",class:v(`block w-20 px-1 py-2 group highlight-story ${t.class}`)},[e("div",{class:v(t.content.divClass)},[t.content.imgSrc?(l(),n("img",{key:0,src:t.content.imgSrc,alt:t.content.h6Text,class:v(t.content.imgClass)},null,10,Be)):R("",!0),t.content.badge?(l(),n("div",{key:1,class:v(t.content.badge.divClass)},[s(o(q),{class:"size-4"})],2)):R("",!0)],2),e("h6",{class:v(t.content.h6Class)},u(t.content.h6Text),3)],2))),128))])]),_:1})]),_:1}),s(w,null,{default:a(()=>[e("div",De,[e("ul",Le,[e("li",null,[e("a",Pe,[s(o(pe),{class:"inline-block size-4 text-red-500 ltr:mr-1 rtl:ml-1"}),Re])]),e("li",null,[s(d,{variant:"link",classes:"p-0",onClick:m[0]||(m[0]=t=>z.value=!z.value)},{default:a(()=>[s(o(fe),{class:"inline-block size-4 ltr:mr-1 text-custom-600 rtl:ml-1"}),Ue]),_:1})]),e("li",null,[s(d,{variant:"link",classes:"p-0",onClick:m[1]||(m[1]=t=>p.value=!p.value)},{default:a(()=>[s(o(ae),{class:"inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1"}),je]),_:1})]),e("li",null,[e("a",He,[s(o(ge),{class:"inline-block size-4 ltr:mr-1 text-sky-500 rtl:ml-1"}),Ae])])]),s(M,{items:b,placement:"bottom-start"},{title:a(()=>[s(d,{variant:"soft",color:"slate",classes:"px-2 py-2 text-xs"},{default:a(()=>[s(o(B),{class:"size-3"})]),_:1})]),default:a(({data:t})=>[e("div",We,[(l(),k($(t.icon),{class:"me-2 size-4"})),i(" "+u(t.title),1)])]),_:1})]),e("form",Ne,[e("div",Ee,[e("div",Ge,[e("img",{src:o(F),alt:"",class:"rounded-full size-9"},null,8,Je)]),e("div",Xe,[s(W,{placeholder:"Share your thoughts ..."})])]),e("div",Ye,[s(d,{color:"custom",classes:"text-white "},{default:a(()=>[i(" Share Post ")]),_:1})])])]),_:1}),s(w,{"no-body":""},{default:a(()=>[e("div",Ze,[e("div",Oe,[e("div",Ke,[e("img",{src:o(H),alt:"",class:"size-12 rounded-full"},null,8,Qe)]),es,e("div",ss,[s(d,{variant:"dashed",color:"sky",classes:"px-2 py-1.5 text-xs",onClick:r},{default:a(()=>[f.value?(l(),n("span",ts,[s(o(q),{class:"inline-block size-3 mr-1"}),i(" Follow ")])):(l(),n("span",ls,[s(o(U),{class:"inline-block size-3 mr-1"}),i(" Unfollow ")]))]),_:1}),e("div",os,[s(M,{items:b,placement:"bottom-start"},{title:a(()=>[s(d,{variant:"ghost",color:"sky",classes:"px-2 py-2 text-xs"},{default:a(()=>[s(o(B),{class:"lucide lucide-more-horizontal size-4"})]),_:1})]),default:a(({data:t})=>[e("div",as,[(l(),k($(t.icon),{class:"me-2 size-4"})),i(" "+u(t.title),1)])]),_:1})])])]),ns]),e("div",is,[e("ul",rs,[(l(!0),n(g,null,y(o(G),(t,h)=>(l(),n("li",{key:h,class:v(`${t.class}`)},[e("a",cs,[(l(),k($(t.icon),{class:"inline-block size-4 ltr:mr-1 rtl:ml-1"})),e("span",ds,u(t.text),1)])],2))),128))])]),e("div",us,[e("form",_s,[e("div",ms,[e("div",hs,[e("img",{src:o(F),alt:"",class:"rounded-full size-9"},null,8,ps)]),e("div",fs,[s(P,{required:"","hide-details":"",placeholder:"Write your comment ..."})]),e("div",xs,[s(d,{color:"custom",classes:"px-4 py-2"},{default:a(()=>[i(" Send ")]),_:1})])])]),e("div",ks,[e("div",gs,[e("div",bs,[e("img",{src:o(ne),alt:"",class:"rounded-full size-9"},null,8,vs)]),e("div",ys,[zs,e("div",ws,[e("div",$s,[e("img",{src:o(H),alt:"",class:"rounded-full size-9"},null,8,Ts)]),Cs])])])])])]),_:1}),s(w,{"no-body":""},{default:a(()=>[e("div",Vs,[e("div",Is,[e("div",Ss,[e("img",{src:o(j),alt:"",class:"size-12 rounded-full"},null,8,Ms)]),Fs,e("div",qs,[s(d,{variant:"dashed",color:"sky",classes:"px-2 py-1.5 text-xs",onClick:r},{default:a(()=>[f.value?(l(),n("span",Bs,[s(o(q),{class:"inline-block size-3 mr-1"}),i(" Follow ")])):(l(),n("span",Ds,[s(o(U),{class:"inline-block size-3 mr-1"}),i(" Unfollow ")]))]),_:1}),e("div",Ls,[s(M,{items:b,placement:"bottom-start"},{title:a(()=>[s(d,{variant:"ghost",color:"sky",classes:"px-2 py-2 text-xs"},{default:a(()=>[s(o(B),{class:"lucide lucide-more-horizontal size-4"})]),_:1})]),default:a(({data:t})=>[e("div",Ps,[(l(),k($(t.icon),{class:"me-2 size-4"})),i(" "+u(t.title),1)])]),_:1})])])]),Rs,e("div",Us,[(l(),n(g,null,y(V,(t,h)=>e("div",{key:h,onClick:ol=>D(h)},[e("img",{src:t.src,class:"rounded-md"},null,8,Hs)],8,js)),64)),s(o(ie),{visible:c.value,imgs:V,index:x.value,onHide:m[2]||(m[2]=t=>c.value=!1)},null,8,["visible","index"])])]),e("div",As,[e("ul",Ws,[(l(!0),n(g,null,y(o(J),(t,h)=>(l(),n("li",{key:h,class:v(`${t.class}`)},[e("a",Ns,[(l(),k($(t.icon),{class:"inline-block size-4 ltr:mr-1 rtl:ml-1"})),e("span",Es,u(t.text),1)])],2))),128))])]),e("div",Gs,[e("form",Js,[e("div",Xs,[e("div",Ys,[e("img",{src:o(F),alt:"",class:"rounded-full size-9"},null,8,Zs)]),e("div",Os,[s(P,{required:"","hide-details":"",placeholder:"Write your comment ..."})]),e("div",Ks,[s(d,{color:"custom",classes:"px-4 py-2"},{default:a(()=>[i(" Send ")]),_:1})])])])])]),_:1}),s(w,{"no-body":""},{default:a(()=>[e("div",Qs,[e("div",et,[e("div",st,[e("img",{src:o(j),alt:"",class:"size-12 rounded-full"},null,8,tt)]),lt,e("div",ot,[s(d,{variant:"dashed",color:"sky",classes:"px-2 py-1.5 text-xs",onClick:r},{default:a(()=>[f.value?(l(),n("span",at,[s(o(q),{class:"inline-block size-3 mr-1"}),i(" Follow ")])):(l(),n("span",nt,[s(o(U),{class:"inline-block size-3 mr-1"}),i(" Unfollow ")]))]),_:1}),e("div",it,[s(M,{items:b,placement:"bottom-start"},{title:a(()=>[s(d,{variant:"ghost",color:"sky",classes:"px-2 py-2 text-xs"},{default:a(()=>[s(o(B),{class:"lucide lucide-more-horizontal size-4"})]),_:1})]),default:a(({data:t})=>[e("div",rt,[(l(),k($(t.icon),{class:"me-2 size-4"})),i(" "+u(t.title),1)])]),_:1})])])]),ct,e("ul",dt,[(l(!0),n(g,null,y(o(X),(t,h)=>(l(),n("li",{key:h},[e("a",{href:"#",class:v(["relative flex gap-3 group",{active:t.active}])},[e("div",ut,[t.active?(l(),k(o(xe),{key:0,class:"size-4 text-green-500 fill-green-200 group-[&.active]:block hidden"})):R("",!0)]),e("h6",_t,u(t.order)+".",1),e("div",mt,[e("h6",ht,u(t.title),1),e("div",pt,[s(N,{width:t.progress,height:1.5,"rounded-full":""},null,8,["width"])])])],2)]))),128))])]),e("div",ft,[e("ul",xt,[(l(!0),n(g,null,y(o(Y),(t,h)=>(l(),n("li",{key:h,class:v(`${t.class}`)},[e("a",kt,[(l(),k($(t.icon),{class:"inline-block size-4 ltr:mr-1 rtl:ml-1"})),e("span",gt,u(t.text),1)])],2))),128))])]),e("div",bt,[e("form",vt,[e("div",yt,[e("div",zt,[e("img",{src:o(F),alt:"",class:"rounded-full size-9"},null,8,wt)]),e("div",$t,[s(P,{required:"","hide-details":"",placeholder:"Write your comment ..."})]),e("div",Tt,[s(d,{color:"custom",classes:"px-4 py-2"},{default:a(()=>[i(" Send ")]),_:1})])])])])]),_:1}),e("div",Ct,[s(d,null,{default:a(()=>[Vt,i(" Load More ")]),_:1})])]),s(Me,{modelValue:z.value,"onUpdate:modelValue":m[3]||(m[3]=t=>z.value=t)},null,8,["modelValue"]),s(he,{modelValue:p.value,"onUpdate:modelValue":m[4]||(m[4]=t=>p.value=t)},null,8,["modelValue"])],64)}}}),St={class:"col-span-12 lg:hidden xl:col-span-3 2xl:block shrink-0"},Mt=e("div",{class:"flex items-center gap-3"},[e("h6",{class:"mb-0 grow text-15"},[i("Message "),e("span",{class:"inline-flex items-center justify-center size-6 text-xs font-medium border rounded rtl:mr-1 ltr:ml-1 bg-custom-100 border-custom-100 text-custom-500 dark:bg-custom-400/20 dark:border-transparent"},"15")]),e("div",{class:"shrink-0"},[e("a",{href:"#!",class:"underline text-custom-500"},"Requests(2)")])],-1),Ft={class:"relative mt-3"},qt={class:"js-read-smore","data-read-smore-words":"15"},Bt={class:"flex flex-col gap-3 mt-5 list"},Dt={href:"#",class:"flex items-center gap-3 transition-all duration-150 ease-linear group/items"},Lt={class:"relative rounded-full size-7 bg-slate-100 dark:bg-zink-600"},Pt=["src","alt"],Rt=e("span",{class:"bottom-0 ltr:right-0 rtl:left-0 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-zink-500 rounded-full"},null,-1),Ut={class:"transition-all duration-150 ease-linear group-hover/items:text-custom-500 user-name"},jt=e("h6",{class:"mb-4 text-15"},"Popular Events",-1),Ht={class:"flex flex-col gap-4 mt-5"},At={href:"#",class:"flex items-center gap-3 transition-all duration-150 ease-linear group/items"},Wt=["src","alt"],Nt={class:"transition-all duration-150 ease-linear group-hover/items:text-custom-500"},Et=e("h6",{class:"mb-4 text-15"},"Upcoming Birthday",-1),Gt={class:"flex flex-col gap-3 mt-5"},Jt={href:"#",class:"flex items-center gap-3 transition-all duration-150 ease-linear group/items"},Xt={class:"relative rounded-full size-9 bg-slate-100 dark:bg-zink-600"},Yt=["src","alt"],Zt=e("span",{class:"bottom-0 ltr:right-0 rtl:left-0 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-zink-500 rounded-full"},null,-1),Ot={class:"grow"},Kt={class:"mb-1 transition-all duration-150 ease-linear group-hover/items:text-custom-500"},Qt={class:"text-slate-500"},el=I({__name:"RightSidebar",setup(C){return(b,f)=>{const z=_("TInputField"),p=_("TCard");return l(),n("div",St,[s(p,{id:"messageList"},{default:a(()=>[Mt,e("div",Ft,[s(z,{required:"",placeholder:"Search for ...",inputClass:"ltr:pl-8 rtl:pr-8"},{prefix:a(()=>[s(o(ce),{class:"inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"})]),_:1})]),e("div",qt,[e("ul",Bt,[(l(!0),n(g,null,y(o(Z),(r,c)=>(l(),n("li",{key:c},[e("a",Dt,[e("div",Lt,[e("img",{src:r.avatar,alt:r.name,class:"rounded-full h-7"},null,8,Pt),Rt]),e("h6",Ut,u(r.name),1)])]))),128))])])]),_:1}),s(p,null,{default:a(()=>[jt,e("ul",Ht,[(l(!0),n(g,null,y(o(O),(r,c)=>(l(),n("li",{key:c},[e("a",At,[e("div",null,[e("img",{src:r.imageSrc,alt:r.altText,class:"h-6 rounded-full"},null,8,Wt)]),e("h6",Nt,u(r.title),1)])]))),128))])]),_:1}),s(p,null,{default:a(()=>[Et,e("ul",Gt,[(l(!0),n(g,null,y(o(K),(r,c)=>(l(),n("li",{key:c},[e("a",Jt,[e("div",Xt,[e("img",{src:r.avatar,alt:r.name,class:"rounded-full h-9"},null,8,Yt),Zt]),e("div",Ot,[e("h6",Kt,u(r.name),1),e("p",Qt,u(r.date),1)])])]))),128))])]),_:1})])}}}),sl={class:"grid grid-cols-12 mt-5 gap-x-5"},tl={class:"col-span-12 lg:col-span-5 xl:col-span-3 shrink-0 lg:block"},ll=I({__name:"index",setup(C){return(b,f)=>(l(),n("div",sl,[e("div",tl,[s(Q)]),s(It),s(el)]))}}),Sl=I({__name:"SocialMedia",setup(C){return(b,f)=>(l(),k(ll))}});export{Sl as default};
