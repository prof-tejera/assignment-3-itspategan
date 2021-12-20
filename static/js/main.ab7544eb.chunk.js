(this["webpackJsonpassignment-3"]=this["webpackJsonpassignment-3"]||[]).push([[0],{33:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r,i,c,o,s,a,d,p,l=t(1),j=t.n(l),u=t(23),b=t.n(u),h=(t(33),t(2)),x=t(17),f=t(4),O=t(3),m=t(10),g=t(11),v=t(13),y=t(12),k=t(0),w=O.a.div(r||(r=Object(h.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),P=O.a.div(i||(i=Object(h.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),z=O.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),C=O.a.div(o||(o=Object(h.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),D=O.a.table(s||(s=Object(h.a)([""]))),S=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(w,{children:[Object(k.jsx)(z,{children:this.props.title}),Object(k.jsxs)(P,{children:[Object(k.jsx)(C,{children:this.props.component}),Object(k.jsxs)(D,{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Prop"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Type"}),Object(k.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.prop}),Object(k.jsx)("td",{children:e.description}),Object(k.jsx)("td",{children:e.type}),Object(k.jsx)("td",{children:Object(k.jsx)("code",{children:e.defaultValue})})]})}))]})]})]})}}]),t}(j.a.Component),R=S,T={small:10,medium:14,large:20},I=O.a.div(a||(a=Object(h.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),E=O.a.span(d||(d=Object(h.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),A=O.a.div(p||(p=Object(h.a)(["\n  display: flex;\n"]))),M=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=T[this.props.size],n=this.props.color;return Object(k.jsxs)(I,{children:[Object(k.jsxs)(A,{children:[Object(k.jsx)(E,{size:e,color:n}),Object(k.jsx)(E,{size:e,color:n})]}),Object(k.jsxs)(A,{children:[Object(k.jsx)(E,{size:e,color:n}),Object(k.jsx)(E,{size:e,color:n})]})]})}}]),t}(j.a.Component);M.defaultProps={size:"medium",color:"#ffa2bf"};var L,V=M,J=O.a.h1(L||(L=Object(h.a)(['\n  color: #edf2f4;\n  font-family: "Lato", sans-serif;\n  font-weight: 800;\n  font-size: 3rem;\n  align-items: center;\n  margin: 1px;\n'])));var N,B=function(e){return Object(k.jsx)(J,{children:e.text})},G=O.a.div(N||(N=Object(h.a)(["\n  width: 200px;\n  height: 200px;\n  border-radius: 200px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px solid #edf2f4;\n  font-size: 2.5rem;\n  color: #eeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n"])));var H,U=function(e){var n=e.time;return Object(k.jsxs)(G,{children:[Object(k.jsxs)("span",{children:[("0"+Math.floor(n/6e4%60)).slice(-2),":"]}),Object(k.jsxs)("span",{children:[("0"+Math.floor(n/1e3%60)).slice(-2),"."]}),Object(k.jsx)("span",{children:("0"+n/10%100).slice(-2)})]})},Y=t(28),q=O.a.input(H||(H=Object(h.a)(["\n  width: 75px;\n  height: 25px;\n  padding: 10px;\n  margin: 10px;\n  border: 2px solid #ef233c;\n  border-radius: 5px;\n  font-size: 40px;\n"])));var F,K=function(e){return Object(k.jsx)(q,Object(Y.a)({},e))},Q=O.a.button(F||(F=Object(h.a)(["\n  font-weight: 100;\n  background-color: #1d3557;\n  height: ",";\n  width: ",";\n  font-size: 1.25em;\n  color: #edf2f4;\n  line-height: 100px;\n  padding: 5px 15px;\n  border-radius: 100px;\n  border: 2px solid #edf2f4;\n  outline: 0;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 10px;\n  cursor: pointer;\n  transition: ease background-color 100ms;\n  &:hover {\n    background-color: #1e4670;\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(function(e){return e.height}),(function(e){return e.width}));Q.defaultProps={height:"125px",width:"125px"};var W,X=function(e){return Object(k.jsx)(Q,{onClick:e.handleStart,children:"PLAY"})},Z=O.a.button(W||(W=Object(h.a)(["\n  font-weight: 100;\n  background-color: #e63946;\n  height: ",";\n  width: ",";\n  font-size: 1.25em;\n  color: #edf2f4;\n  line-height: 100px;\n  padding: 5px 15px;\n  border-radius: 100px;\n  border: 2px solid #edf2f4;\n  outline: 0;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 10px;\n  cursor: pointer;\n  transition: ease background-color 100ms;\n  &:hover {\n    background-color: #d52835;\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(function(e){return e.height}),(function(e){return e.width}));Z.defaultProps={height:"125px",width:"125px"};var $,_=function(e){return Object(k.jsx)(Z,{onClick:e.handlePauseResume,children:e.isPaused?"Resume":"Pause"})},ee=O.a.button($||($=Object(h.a)(["\n  font-weight: 100;\n  background-color: #1d3557;\n  height: ",";\n  width: ",";\n  font-size: 1.25em;\n  color: #edf2f4;\n  line-height: 100px;\n  padding: 5px 15px;\n  border-radius: 100px;\n  border: 2px solid #edf2f4;\n  outline: 0;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 10px;\n  cursor: pointer;\n  transition: ease background-color 100ms;\n  &:hover {\n    background-color: #1e4670;\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(function(e){return e.height}),(function(e){return e.width}));ee.defaultProps={height:"125px",width:"125px"};var ne,te,re,ie,ce,oe,se=function(e){return Object(k.jsx)(ee,{onClick:e.handleReset,children:"RESET"})},ae=O.a.div(ne||(ne=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),de=O.a.div(te||(te=Object(h.a)(["\n  font-size: 2rem;\n"]))),pe=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(ae,{children:[Object(k.jsx)("h2",{children:"DOCUMENTATION GOES HERE"}),Object(k.jsxs)("div",{children:[Object(k.jsx)(de,{children:"Documentation"}),Object(k.jsx)(R,{title:"Loading spinner ",component:Object(k.jsx)(V,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(k.jsx)(R,{title:"Play button ",component:Object(k.jsx)(X,{}),propDocs:[{prop:"onClick",description:"runs a function on click",type:"func"},{prop:"active",description:"bool for conditional rendering",type:"bool"},{prop:"handleStart",description:"runs a function to handle what happens when the timer starts",type:"func"},{prop:"handlePauseResume",description:"handler for pause/resume of the timer",type:"func"}]}),Object(k.jsx)(R,{title:"Pause button ",component:Object(k.jsx)(_,{}),propDocs:[{prop:"onClick",description:"runs a function on click",type:"func"},{prop:"active",description:"bool for conditional rendering",type:"bool"},{prop:"handleStart",description:"runs a function to handle what happens when the timer starts",type:"func"},{prop:"handlePauseResume",description:"handler for pause/resume of the timer",type:"func"}]}),Object(k.jsx)(R,{title:"Reset button ",component:Object(k.jsx)(se,{}),propDocs:[{prop:"onClick",description:"runs a function on click",type:"func"},{prop:"active",description:"bool for conditional rendering",type:"bool"},{prop:"handleReset",description:"handler to reset timer state",type:"func"}]}),Object(k.jsx)(R,{title:"Display Rounds ",component:Object(k.jsx)(B,{}),propDocs:[{prop:"value",description:"Changes the number",type:"int",defaultValue:0}]}),Object(k.jsx)(R,{title:"Display time ",component:Object(k.jsx)(U,{}),propDocs:[{prop:"value",description:"Changes the number",type:"int"}]}),Object(k.jsx)(R,{title:"Input ",component:Object(k.jsx)(K,{}),propDocs:[{prop:"null"}]})]})]})}}]),t}(j.a.Component),le=pe,je=t(14),ue=Object(l.createContext)(),be=function(e){var n=e.children,t=Object(l.useState)(!1),r=Object(je.a)(t,2),i=r[0],c=r[1],o=Object(l.useState)(!0),s=Object(je.a)(o,2),a=s[0],d=s[1],p=Object(l.useState)(0),j=Object(je.a)(p,2),u=j[0],b=j[1],h=Object(l.useState)(1e4),x=Object(je.a)(h,2),f=x[0],O=x[1],m=Object(l.useState)(1e4),g=Object(je.a)(m,2),v=g[0],y=g[1];return Object(k.jsx)(ue.Provider,{value:{isActive:i,setIsActive:c,isPaused:a,setIsPaused:d,time:u,setTime:b,startTime:f,setStartTime:O,stopTime:v,setStopTime:y},children:n})},he=O.a.div(re||(re=Object(h.a)(["\n  height: 40vh;\n  width: 40vw;\n  border: none;\n  background: #8d99ae;\n  padding: 20px;\n  text-align: center;\n  border-radius: 25px;\n"]))),xe=function(e){var n=Object(l.useContext)(ue),t=n.isActive,r=n.setIsActive,i=n.isPaused,c=n.setIsPaused,o=n.time,s=n.setTime,a=n.stopTime;Object(l.useEffect)((function(){var e=null;return o<a&&t&&!1===i?e=setInterval((function(){s((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[t,i,a,o,s]);var d=function(){r(!0),c(!1)},p=function(){c(!i)};return Object(k.jsxs)(he,{children:[Object(k.jsx)(U,{time:o}),Object(k.jsx)("div",{}),t?Object(k.jsxs)("div",{children:[Object(k.jsx)(_,{active:t,isPaused:i,handleStart:d,handlePauseResume:p}),Object(k.jsx)(se,{active:t,isPaused:i,handleReset:function(){r(!1),s(0)}})]}):Object(k.jsx)(X,{active:t,isPaused:i,handleStart:d,handlePauseResume:p})]})},fe=O.a.div(ie||(ie=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Oe=O.a.div(ce||(ce=Object(h.a)(["\n  /* border: 1px solid gray;\n  padding: 20px;\n  margin: 10px;\n  font-size: 1.5rem; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),me=O.a.div(oe||(oe=Object(h.a)([""])));var ge,ve=function(){var e=[{title:"Stopwatch",C:Object(k.jsx)(xe,{})}];return Object(k.jsx)(fe,{children:e.map((function(e){return Object(k.jsxs)(Oe,{children:[Object(k.jsx)(me,{children:e.title}),e.C]})}))})},ye=O.a.div(ge||(ge=Object(h.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"])));var ke=function(){return Object(k.jsx)(ye,{children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)("nav",{children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(x.b,{to:"/",children:"Timers"})}),Object(k.jsx)("li",{children:Object(k.jsx)(x.b,{to:"/docs",children:"Documentation"})}),Object(k.jsx)("li",{children:Object(k.jsx)(x.b,{to:"/docs",children:"Documentation"})})]})}),Object(k.jsxs)(f.c,{children:[Object(k.jsx)(f.a,{path:"/docs",children:Object(k.jsx)(le,{})}),Object(k.jsx)(f.a,{path:"/",children:Object(k.jsx)(be,{children:Object(k.jsx)(ve,{})})})]})]})})};b.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(ke,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ab7544eb.chunk.js.map