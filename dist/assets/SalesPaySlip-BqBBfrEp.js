import{d as _,l as n,j as z,T as P,r as x,o as k,c as f,f as c,w as b,e,m as C,n as S,t as T,P as w,k as l,F as B}from"./index-Bm63Dp3b.js";import{_ as E}from"./signature-TRt-ehHY.js";import{p as D,m as F}from"./hrmanagement-DWfN9i0i.js";import"./user-1-Dk72wGO3.js";import"./user-2-Dnq3Zhw8.js";import"./user-3-B9MUYsIX.js";import"./user-4-C0_7F33P.js";import"./user-dummy-img-6oOBL-3U.js";import"./avatar-6-C8XqZpfZ.js";import"./avatar-8-CU-vMG8y.js";import"./avatar-9-DooUPCI0.js";import"./avatar-10-CVyrodYB.js";const N={class:"grid grid-cols-1 2xl:grid-cols-12"},$={class:"p-4"},H=e("div",{class:"absolute top-0 ltr:right-0 rtl:left-0 opacity-30"},[e("img",{src:w,alt:""})],-1),I=e("div",{class:"text-center"},[e("h5",{class:"relative before:absolute before:h-[1px] before:inset-x-0 before:-bottom-2.5 inline-block before:bg-gradient-to-r before:from-white dark:before:from-zink-700 before:via-custom-500 before:to-white dark:before:to-zink-700 dark:before:via-custom-500"},"Salary Slip")],-1),O=e("div",{class:"mt-16"},[e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},[l("Employee ID: "),e("span",{class:"font-semibold text-slate-800 dark:text-zink-50"},"#TWE1001524")]),e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},[l("Employee Name: "),e("span",{class:"font-semibold text-slate-800 dark:text-zink-50"},"Patricia Garcia")]),e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},[l("Experience: "),e("span",{class:"font-semibold text-slate-800 dark:text-zink-50"},"2 Year")]),e("p",{class:"text-slate-500 dark:text-zink-200"},[l("Create Date: "),e("span",{class:"font-semibold text-slate-800 dark:text-zink-50"},"08 Oct 2023")])],-1),V={class:"mt-10 overflow-x-auto"},L=e("div",{class:"grid grid-cols-1 mt-10 2xl:grid-cols-12"},[e("div",{class:"2xl:col-span-5"},[e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},"For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.com."),e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},"Best Regards,"),e("p",{class:"mb-2 text-slate-500 dark:text-zink-200"},"Themesdesign"),e("p",{class:"text-slate-500 dark:text-zink-200"},[l("Founder & CEO: "),e("span",{class:"font-semibold text-slate-800 dark:text-zink-50"},"Paula Keenan")])]),e("div",{class:"self-end text-center 2xl:col-span-2 2xl:col-start-11"},[e("img",{src:E,alt:"",class:"h-12 mx-auto"}),e("h6",null,"Authorized Sign")])],-1),j=_({__name:"payslip",setup(g){const r=n(1),o=n(10),t=n([]),d=n(F),h=z(()=>v(d.value));P(d,()=>{u()});const u=()=>{let a=Math.ceil(d.value.length/o.value);t.value=[];for(let s=1;s<=a;s++)t.value.push(s);t.value.length<r.value&&(r.value=t.value.length)};u();const v=a=>{let s=r.value*o.value-o.value,m=r.value*o.value;return a.slice(s,m)},p=a=>{switch(a){case"Pending":return"yellow";case"Paid":return"green";case"Failed":return"red"}};return(a,s)=>{const m=x("TBasicTable"),y=x("TCard");return k(),f("div",N,[c(y,{class:"relative 2xl:col-span-8 2xl:col-start-3"},{default:b(()=>[e("div",$,[H,I,O,e("div",V,[c(m,{headerItems:C(D),items:h.value,theadClass:"bg-slate-100 dark:bg-zink-600",thClass:"px-3.5 py-2.5 font-semibold border border-transparent",tdClass:"px-3.5 py-2.5 border border-transparent"},{status:b(({value:i})=>[e("span",{class:S(`px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-${p(i.status)}-100 border-transparent text-${p(i.status)}-500 dark:bg-${p(i.status)}-500/20 dark:border-transparent`)},T(i.status),3)]),_:1},8,["headerItems","items"])]),L])]),_:1})])}}}),Z=_({__name:"SalesPaySlip",setup(g){return(r,o)=>{const t=x("PageHeader");return k(),f(B,null,[c(t,{title:"Payslip",items:["Payroll","Payslip"]}),c(j)],64)}}});export{Z as default};
