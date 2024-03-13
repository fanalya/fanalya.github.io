import{D as m,d as h,r as n,o as y,c as d,f as e,w as s,m as t,F as C}from"./index-Bm63Dp3b.js";const l={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap"},colors:m('["bg-custom-500"]')}},c={series:[{name:"Desktops",data:[{x:"ABC",y:10},{x:"DEF",y:60},{x:"XYZ",y:41}]},{name:"Mobile",data:[{x:"ABCD",y:10},{x:"DEFG",y:20},{x:"WXYZ",y:51},{x:"PQR",y:30},{x:"MNO",y:20},{x:"CDE",y:30}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Multi-dimensional Treemap",align:"center"}}},p={series:[{data:[{x:"INTC",y:1.2},{x:"GS",y:.4},{x:"CVX",y:-1.4},{x:"GE",y:2.7},{x:"CAT",y:-.3},{x:"RTX",y:5.1},{x:"CSCO",y:-2.3},{x:"JNJ",y:2.1},{x:"PG",y:.3},{x:"TRV",y:.12},{x:"MMM",y:-2.31},{x:"NKE",y:3.98},{x:"IYT",y:1.67}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Treemap with Color scale"},dataLabels:{enabled:!0,style:{fontSize:"12px"},formatter:function(o,i){return[o,i.value]},offsetY:-4},plotOptions:{treemap:{enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,colorScale:{ranges:[{from:-6,to:0,color:"#CD363A"},{from:.001,to:6,color:"#52B12C"}]}}}}},x={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Distibuted Treemap (different color for each cell)",align:"center"},colors:["#3B93A5","#F7B844","#ADD8C7","#EC3C65","#CDD7B6","#C1F666","#D43F97","#1E5D8C","#421243","#7F94B0","#EF6537","#C0ADDB"],plotOptions:{treemap:{distributed:!0,enableShades:!1}}}},g={class:"grid grid-cols-1 gap-x-5 xl:grid-cols-2"},_=h({__name:"index",setup(o){return(i,u)=>{const a=n("apexchart"),r=n("TCard");return y(),d("div",g,[e(r,{title:"Basic"},{default:s(()=>[e(a,{class:"apex-charts",height:"350",dir:"ltr",series:t(l).series,options:t(l).chartOptions},null,8,["series","options"])]),_:1}),e(r,{title:"Treemap Multiple Series"},{default:s(()=>[e(a,{class:"apex-charts",height:"350",dir:"ltr",series:t(c).series,options:t(c).chartOptions},null,8,["series","options"])]),_:1}),e(r,{title:"Color Range"},{default:s(()=>[e(a,{class:"apex-charts",height:"350",dir:"ltr",series:t(p).series,options:t(p).chartOptions},null,8,["series","options"])]),_:1}),e(r,{title:"Distributed Chart"},{default:s(()=>[e(a,{class:"apex-charts",height:"350",dir:"ltr",series:t(x).series,options:t(x).chartOptions},null,8,["series","options"])]),_:1})])}}}),D=h({__name:"Treemap",setup(o){return(i,u)=>{const a=n("PageHeader");return y(),d(C,null,[e(a,{title:"Treemap Charts",items:["Apexcharts","Treemap Charts"]}),e(_)],64)}}});export{D as default};
