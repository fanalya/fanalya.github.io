const r=o=>{const{date:e,endDay:t}=o,a=e&&new Date(e)||new Date,n=a;return n.setDate(a.getDate()+t),n},c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],D=(o,e="dd mm, yyyy")=>{const t=new Date(o),a=t.getDate(),n=t.getMonth(),s=t.getFullYear();switch(e){case"dd mm, yyyy":return`${a} ${c[n]}, ${s}`;default:return""}};export{D as f,r as g};
