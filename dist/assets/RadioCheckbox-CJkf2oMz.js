import{d as b,r as v,o as t,c as a,f as d,w as o,e as c,F as u,x as s,k as r,t as h,m as n,aa as _}from"./index-Bm63Dp3b.js";const C={class:"grid grid-cols-1 gap-x-5 xl:grid-cols-3"},R={class:"flex flex-col gap-2"},D={class:"flex flex-col gap-2"},m={class:"flex flex-col gap-2"},w={class:"flex flex-col gap-2"},q={class:"flex flex-col gap-2"},T={class:"flex flex-col gap-2"},B={class:"flex flex-col gap-2"},O={class:"flex flex-col gap-2"},S={class:"flex flex-col gap-2"},F={class:"flex flex-col gap-2"},L={class:"flex gap-3 flex-wrap"},N={class:"flex gap-1 flex-wrap"},V={class:"flex gap-3 flex-wrap"},G={class:"flex gap-2 flex-wrap"},H={class:"flex gap-2 flex-wrap"},I={class:"flex flex-wrap gap-2"},P=b({__name:"index",setup(x){return(p,g)=>{const f=v("TCheckbox"),i=v("TCard"),k=v("TRadio");return t(),a("div",C,[d(i,{title:"Default Checkbox"},{default:o(()=>[c("div",R,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,checked:e%2===0,id:"default-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Circle Checkbox"},{default:o(()=>[c("div",D,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,rounded:"",checked:e%2===1,id:"rounded-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Bordered Checkbox"},{default:o(()=>[c("div",m,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,variant:"bordered",rounded:e>3,checked:e%2===1,id:"bordered-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","rounded","checked","id"])]))),256))])]),_:1}),d(i,{title:"Soft Checkbox"},{default:o(()=>[c("div",w,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,variant:"soft",rounded:e>3,checked:e%2===1,id:"soft-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","rounded","checked","id"])]))),256))])]),_:1}),d(i,{title:"Outline Checkbox"},{default:o(()=>[c("div",q,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,variant:"outlined",rounded:e>3,checked:e%2===1,id:"outlined-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","rounded","checked","id"])]))),256))])]),_:1}),d(i,{title:"Default Radio"},{default:o(()=>[c("div",T,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,id:"default-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Square Radio"},{default:o(()=>[c("div",B,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,squared:"",id:"squared-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Bordered Radio"},{default:o(()=>[c("div",O,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,variant:"bordered",id:"bordered-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Soft Radio"},{default:o(()=>[c("div",S,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,squared:e<4,variant:"soft",id:"soft-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","squared","id"])]))),256))])]),_:1}),d(i,{title:"Outline Radio"},{default:o(()=>[c("div",F,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,squared:e<4,variant:"outlined",id:"outlined-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","squared","id"])]))),256))])]),_:1}),c("div",null,[d(i,{title:"Inline Checkbox"},{default:o(()=>[c("div",L,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,checked:e%2===0,id:"default-checkbox-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Without Label Checkbox"},{default:o(()=>[c("div",N,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(f,{color:l.value,checked:e%2===0,id:"default-checkbox-"+e},null,8,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Disabled Checkbox"},{default:o(()=>[c("div",V,[d(f,{disabled:"",checked:"",id:"custom-disabled"},{default:o(()=>[r(" Disabled Custom ")]),_:1}),d(f,{disabled:"",color:"green",id:"green-disabled"},{default:o(()=>[r(" Disabled Green ")]),_:1}),d(f,{disabled:"",checked:"",color:"orange",id:"orange-disabled"},{default:o(()=>[r(" Disabled Orange ")]),_:1})])]),_:1})]),c("div",null,[d(i,{title:"Inline Radio"},{default:o(()=>[c("div",G,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,id:"inline-radio-"+e},{default:o(()=>[r(h(l.title),1)]),_:2},1032,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Without Label Radio"},{default:o(()=>[c("div",H,[(t(!0),a(u,null,s(n(_),(l,e)=>(t(),a("div",null,[d(k,{color:l.value,checked:e%2===1,id:"without label-radio-"+e},null,8,["color","checked","id"])]))),256))])]),_:1}),d(i,{title:"Disabled Radio"},{default:o(()=>[c("div",I,[d(k,{disabled:"",checked:"",id:"custom-disabled"},{default:o(()=>[r(" Disabled Custom ")]),_:1}),d(k,{disabled:"",color:"green",id:"green-disabled"},{default:o(()=>[r(" Disabled Green ")]),_:1}),d(k,{disabled:"",checked:"",color:"orange",id:"orange-disabled"},{default:o(()=>[r(" Disabled Orange ")]),_:1})])]),_:1})])])}}}),y=b({__name:"RadioCheckbox",setup(x){return(p,g)=>{const f=v("PageHeader");return t(),a(u,null,[d(f,{title:"Checkbox & Radio",items:["Forms","Checkbox & Radio"]}),d(P)],64)}}});export{y as default};
