(this.webpackJsonpweekday=this.webpackJsonpweekday||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(9),n(2)),i=(n(10),n(0));function l(){var e=new Date(1800,0,1),t=new Date(2099,11,31);return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}function u(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]}function d(e){for(var t=[5,3,2,0],n=Math.floor(e/100)-18;n<0;)n+=4;var c=e%100;return(t[n%t.length]+c+Math.floor(c/4))%7}function j(e){var t=["Correct!","Exactly!","Right on!","You got it!","That's right!"],n=t[Math.floor(Math.random()*t.length)],c=["Result"];return e.isCorrect?c.push("Result--correct"):c.push("Result--incorrect"),Object(i.jsxs)("div",{className:c.join(" "),children:[Object(i.jsx)("div",{className:"Result-result",children:e.isCorrect?n:"incorrect - try again!"}),Object(i.jsxs)("div",{className:"Result-record",children:["(",e.correctAnswers,"/",e.totalAttempts,") - pi day fell on a ",u(d(e.year))]})]})}function h(e){var t=["DayOfWeek"];return e.isSelected&&t.push("DayOfWeek--selected"),e.isCorrect&&t.push("DayOfWeek--correct"),e.isIncorrect&&t.push("DayOfWeek--incorrect"),Object(i.jsx)("div",{className:t.join(" "),onClick:e.onClick,children:Object(i.jsx)("span",{className:"DayOfWeek-text",children:u(e.dayOfWeek)})})}function b(e){return Object(i.jsx)("div",{className:"NextStep",onClick:e.onClick,children:e.shouldRevealAnswer?"Try another":"Check answer"})}var y=function(){var e=Object(c.useState)(l()),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(o.a)(a,2),u=s[0],d=s[1],y=Object(c.useState)(null),O=Object(o.a)(y,2),f=O[0],g=O[1],p=Object(c.useState)(0),m=Object(o.a)(p,2),v=m[0],k=m[1],x=Object(c.useState)(0),C=Object(o.a)(x,2),D=C[0],w=C[1],S="".concat(function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}(n)," ").concat(n.getDate(),", ").concat(n.getFullYear());return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"App-dateLine",children:[Object(i.jsx)("div",{className:"App-date",children:S})," fell on a"]}),new Array(7).fill(0).map((function(e,t){return Object(i.jsx)(h,{dayOfWeek:t,onClick:function(){return u?null:g(t)},isSelected:!u&&f===t,isCorrect:u&&n.getDay()===t,isIncorrect:u&&f===t&&n.getDay()!==t},t)})),u?Object(i.jsx)(j,{isCorrect:n.getDay()===f,correctAnswers:v,totalAttempts:D,year:n.getFullYear()}):null,null===f?null:Object(i.jsx)(b,{shouldRevealAnswer:u,onClick:function(){u?(d(!1),r(l()),g(null)):(w(D+1),n.getDay()===f&&k(v+1),d(!0))}})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),O()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d0944e39.chunk.js.map