(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),l=a.n(r),o=(a(13),a(14),a(4)),p=a(5),u=a(1),c=a(7),d=a(6),s=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).finishCalculator=function(){var e=parseInt(n.state.pagePerMenuits),t=parseInt(n.state.timePerDay),a=n.state.page*e;return parseInt(a/t)},n.state={page:null,pagePerMenuits:1,timePerDay:5},n.handlePage=n.handlePage.bind(Object(u.a)(n)),n.handlePagePerMenuits=n.handlePagePerMenuits.bind(Object(u.a)(n)),n.handleTimePerDay=n.handleTimePerDay.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"handlePage",value:function(e){this.setState({page:e.target.value.replace(/\D/,"")})}},{key:"handlePagePerMenuits",value:function(e){this.setState({pagePerMenuits:e.target.value})}},{key:"handleTimePerDay",value:function(e){this.setState({timePerDay:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",{style:x},"Book reading calculator"),i.a.createElement("div",{style:m},i.a.createElement("div",null,i.a.createElement("p",{style:{paddingTop:"10px"}}," How many Pages in the Book?"),i.a.createElement("input",{style:g,type:"text",value:this.state.page,onChange:this.handlePage})),i.a.createElement("div",null,i.a.createElement("p",{style:{paddingTop:"10px"}},"  How musch time you take reading a single page per minute? "),i.a.createElement("select",{style:h,value:this.state.pagePerMenuits,onChange:this.handlePagePerMenuits},i.a.createElement("option",{value:"1"},"1 Minute"),i.a.createElement("option",{value:"2"},"2 Minute"),i.a.createElement("option",{value:"3"},"3 Minute"),i.a.createElement("option",{value:"4"},"4 Minute"),i.a.createElement("option",{value:"5"},"5 Minute"),i.a.createElement("option",{value:"10"},"10 Minute"),i.a.createElement("option",{value:"20"},"20 Minute"),i.a.createElement("option",{value:"30"},"30 Minute"))),i.a.createElement("div",null,i.a.createElement("p",{style:{paddingTop:"10px"}},"   How much time you want to read per day?"),i.a.createElement("select",{style:h,value:this.state.timePerDay,onChange:this.handleTimePerDay},i.a.createElement("option",{value:"5"},"5 Minute"),i.a.createElement("option",{value:"15"},"15 Minute"),i.a.createElement("option",{value:"20"},"20 Minute"),i.a.createElement("option",{value:"30"},"30 Minute"),i.a.createElement("option",{value:"60"},"1 Hour"),i.a.createElement("option",{value:"120"},"2 Hour"),i.a.createElement("option",{value:"180"},"3 Hour"),i.a.createElement("option",{value:"240"},"4 Hour"),i.a.createElement("option",{value:"300"},"5 Hour")))),i.a.createElement("p",{style:v},"  ",this.finishCalculator()," day "))}}]),a}(n.Component),x={marginTop:"10px",padding:"10px",color:"white",borderRadius:"33px",background:"#288d9a",boxShadow:"inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1",textAlign:"center"},m={paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",color:"white",borderRadius:"33px",background:"#288d9a",boxShadow:"inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1",textAlign:"center"},g={padding:"10px",color:"white",borderRadius:"33px",background:"#288d9a",boxShadow:"inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1",textAlign:"center",borderColor:"transparent"},h={padding:"10px",color:"white",borderRadius:"33px",background:"#288d9a",boxShadow:"7px 7px 13px #227883, -7px -7px 13px #2ea2b1",textAlign:"center"},v={fontSize:"20px",padding:"10px",color:"white",borderRadius:"33px",background:"#288d9a",boxShadow:"7px 7px 13px #227883, -7px -7px 13px #2ea2b1",textAlign:"center",marginRight:"80px",marginLeft:"80px",marginTop:"30px"},E=s;var b=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(E,null))};l.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.72d93725.chunk.js.map