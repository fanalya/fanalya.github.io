import{d as D,l as d,r as v,ad as B,o as F,c as O,f as a,w as i,e as r,p as n,F as b}from"./index-Bm63Dp3b.js";const N={class:"grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2"},H={class:"grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2"},y={class:"grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2"},A=D({__name:"index",setup(C){const m=d(""),p={mask:"##-##-####"},s=d(""),U={mask:"##/##"},c=d(""),M={mask:"##:##:##"},x=d(""),T={mask:"##:##"},V=d(""),I={mask:"#.## cm"},g=d(""),P={mask:"+1 (###) ###-####"},k=d(""),h={mask:"#### #### #### ####"},_=d(""),w={mask:"###.###.###.###"},f=d(""),Y={mask:"###.###.###-##"};return(E,l)=>{const o=v("TInputField"),u=v("TCard"),t=B("maska");return F(),O(b,null,[a(u,{title:"Date Formatting"},{default:i(()=>[r("div",N,[n(a(o,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),placeholder:"DD-MM-YYYY",label:"Date"},null,8,["modelValue"]),[[t,void 0,p]]),n(a(o,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e),placeholder:"DD/MM",label:"Date Formatting"},null,8,["modelValue"]),[[t,void 0,U]])])]),_:1}),a(u,{title:"Time Formatting"},{default:i(()=>[r("div",H,[n(a(o,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),placeholder:"hh:mm:ss",label:"Time"},null,8,["modelValue"]),[[t,void 0,M]]),n(a(o,{modelValue:x.value,"onUpdate:modelValue":l[3]||(l[3]=e=>x.value=e),placeholder:"hh:mm",label:"Time Formatting"},null,8,["modelValue"]),[[t,void 0,T]])])]),_:1}),a(u,{title:"Custom Options"},{default:i(()=>[r("div",y,[n(a(o,{modelValue:V.value,"onUpdate:modelValue":l[4]||(l[4]=e=>V.value=e),placeholder:"x.xx cm",label:"Dynamic mask"},null,8,["modelValue"]),[[t,void 0,I]]),n(a(o,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=e=>g.value=e),placeholder:"+1 (xxx) xxx-xxxx",label:"Phone with code"},null,8,["modelValue"]),[[t,void 0,P]]),n(a(o,{modelValue:k.value,"onUpdate:modelValue":l[6]||(l[6]=e=>k.value=e),placeholder:"#### #### #### ####",label:"Credit card"},null,8,["modelValue"]),[[t,void 0,h]]),n(a(o,{modelValue:_.value,"onUpdate:modelValue":l[7]||(l[7]=e=>_.value=e),placeholder:"xxx.xxx.xxx.xxx",label:"IP Address"},null,8,["modelValue"]),[[t,void 0,w]]),n(a(o,{modelValue:f.value,"onUpdate:modelValue":l[8]||(l[8]=e=>f.value=e),placeholder:"###.###.###-##",label:"CPF/CNPJ"},null,8,["modelValue"]),[[t,void 0,Y]])])]),_:1})],64)}}}),$=D({__name:"InputMask",setup(C){return(m,p)=>{const s=v("PageHeader");return F(),O(b,null,[a(s,{title:"Input Mask",items:["Forms","Input Mask"]}),a(A)],64)}}});export{$ as default};
