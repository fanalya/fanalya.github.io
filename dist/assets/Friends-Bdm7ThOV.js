import{_ as x}from"./LeftSidebar.vue_vue_type_script_setup_true_lang-Bp9Y9GtL.js";import{C as f}from"./chevron-down-DmZMOdEe.js";import{d as u,l as g,r,o as i,c,e as t,f as e,w as a,m as o,V as w,k as s,t as z,J as C,K as y,F as T}from"./index-Bm63Dp3b.js";import{U as F}from"./user-round-x-DrCzQ6zZ.js";import"./avatar-1-DnWlU4m7.js";import"./meta-oYIBxCJq.js";import"./telegram-D3-VtU8v.js";import"./twitter-CsSADpLO.js";import"./avatar-2-tDqM6LoX.js";import"./avatar-4-DKRKkp74.js";import"./avatar-6-C8XqZpfZ.js";import"./avatar-8-CU-vMG8y.js";import"./avatar-9-DooUPCI0.js";import"./avatar-10-CVyrodYB.js";import"./home-B4ZdFSVf.js";import"./send-DNEj-Moc.js";const S=[{title:"Friend Name",value:"name"},{title:"Username",value:"username"},{title:"Joining Date",value:"date"},{title:"Status",value:"status"}],D=[{name:"Aubrey Beer",username:"aubrey_beer",date:"24 June, 2023",status:!1},{name:"Clark Kris",username:"kris120",date:"10 Aug, 2023",status:!1},{name:"Lavern Ratke",username:"lavern_r",date:"19 Sept, 2023",status:!1},{name:"Eldora Stiedemann",username:"e_stiedemann",date:"08 Oct, 2023",status:!0},{name:"Jordane Dare",username:"jordane_dare",date:"07 Dec, 2023",status:!0},{name:"Ottilie Schmitt",username:"ottilie",date:"01 Nov, 2023",status:!1},{name:"Darron Shields",username:"dr_darron",date:"11 Nov, 2023",status:!0},{name:"Shanny Homenick",username:"shanny_h",date:"16 July, 2023",status:!1},{name:"Vaughn Leffler",username:"vaughn_902",date:"09 Jan, 2023",status:!0},{name:"Theodora Jones",username:"jones",date:"02 Feb, 2023",status:!0}],B={class:"grid grid-cols-1 xl:grid-cols-12 gap-x-5"},N={class:"xl:col-span-3"},J={class:"xl:col-span-9",id:"friendList"},P={class:"flex items-center gap-3 py-3"},L=t("h6",{class:"text-15 grow"},"Followers (254)",-1),U={class:"shrink-0"},V={class:"relative dropdown sortble-dropdown"},H=t("span",{class:"dropdown-title"},"Following",-1),R={class:"overflow-x-auto"},j={key:0,class:"group-[.active]/item:hidden block"},$={key:1},A={class:"flex flex-col items-center mt-4 mb-5 md:flex-row"},E=t("div",{class:"mb-4 grow md:mb-0"},[t("p",{class:"text-slate-500 dark:text-zink-200"},[s(" Showing "),t("b",null,"12"),s(" of "),t("b",null,"44"),s(" Results ")])],-1),I=u({__name:"index",setup(_){const d=[{title:"Name"},{title:"Username"},{title:"Date"},{title:"Status"}],l=g(D);return(m,K)=>{const p=r("TList"),v=r("TButton"),b=r("router-link"),h=r("TBasicTable"),k=r("TPagination");return i(),c("div",B,[t("div",N,[e(x)]),t("div",J,[t("div",P,[L,t("div",U,[e(p,{items:d,placement:"bottom-end"},{title:a(()=>[t("div",V,[H,e(o(f),{class:"inline-block size-4 ltr:ml-1 rtl:mr-1"})])]),_:1})])]),t("div",R,[e(h,{headerItems:o(S),items:l.value,tableClass:"w-full border-separate table-custom border-spacing-y-2 whitespace-nowrap",theadClass:"relative bg-white rounded-md dark:bg-zink-700 text-left",tdClass:"relative bg-white rounded-md dark:bg-zink-700"},{status:a(({value:n})=>[e(v,{variant:"dashed",color:"sky",classes:"px-2 py-1.5 text-xs",onClick:O=>n.status=!n.status},{default:a(()=>[n.status?(i(),c("span",j,[e(o(w),{class:"inline-block size-3 mr-1"}),s(" Follow ")])):(i(),c("span",$,[e(o(F),{class:"inline-block size-3 mr-1"}),s(" Unfollow ")]))]),_:2},1032,["onClick"])]),username:a(({value:n})=>[e(b,{to:"#!",class:"text-custom-500 username"},{default:a(()=>[s(" @"+z(n.username),1)]),_:2},1024)]),_:1},8,["headerItems","items"])]),t("div",A,[E,e(k,{totalPages:5,pageClass:"inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto",actionClass:"h-8 px-3 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"},{prev:a(()=>[e(o(C),{class:"size-4 mr-1 rtl:rotate-180"}),s(" Prev ")]),next:a(()=>[s(" Next "),e(o(y),{class:"size-4 ml-1 rtl:rotate-180"})]),_:1})])])])}}}),ce=u({__name:"Friends",setup(_){return(d,l)=>{const m=r("PageHeader");return i(),c(T,null,[e(m,{title:"Friends",items:["Social Media","Friends"]}),e(I)],64)}}});export{ce as default};
