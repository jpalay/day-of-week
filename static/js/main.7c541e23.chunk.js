(this.webpackJsonpweekday=this.webpackJsonpweekday||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(2)),l=(c(10),c(0));function o(){var e=new Date(1800,0,1),t=new Date(2099,11,31);return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}function u(e){var t=["Correct!","Exactly!","Right on!","You got it!","That's right!"],c=t[Math.floor(Math.random()*t.length)],n=["Result"];return e.isCorrect?n.push("Result--correct"):n.push("Result--incorrect"),Object(l.jsxs)("div",{className:n.join(" "),children:[Object(l.jsx)("div",{className:"Result-result",children:e.isCorrect?c:"incorrect - try again!"}),Object(l.jsxs)("div",{className:"Result-record",children:["(",e.correctAnswers,"/",e.totalAttempts,")"]})]})}function d(e){var t,c=["DayOfWeek"];return e.isSelected&&c.push("DayOfWeek--selected"),e.isCorrect&&c.push("DayOfWeek--correct"),e.isIncorrect&&c.push("DayOfWeek--incorrect"),Object(l.jsx)("div",{className:c.join(" "),onClick:e.onClick,children:Object(l.jsx)("span",{className:"DayOfWeek-text",children:(t=e.dayOfWeek,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t])})})}function j(e){return Object(l.jsx)("div",{className:"NextStep",onClick:e.onClick,children:e.shouldRevealAnswer?"Try another":"Check answer"})}var h=function(){var e=Object(n.useState)(o()),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(i.a)(a,2),h=s[0],b=s[1],O=Object(n.useState)(null),y=Object(i.a)(O,2),f=y[0],p=y[1],g=Object(n.useState)(0),m=Object(i.a)(g,2),k=m[0],v=m[1],x=Object(n.useState)(0),C=Object(i.a)(x,2),D=C[0],w=C[1],S="".concat(function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}(c)," ").concat(c.getDate(),", ").concat(c.getFullYear());return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"App-dateLine",children:[Object(l.jsx)("div",{className:"App-date",children:S})," fell on a"]}),new Array(7).fill(0).map((function(e,t){return Object(l.jsx)(d,{dayOfWeek:t,onClick:function(){return h?null:p(t)},isSelected:!h&&f===t,isCorrect:h&&c.getDay()===t,isIncorrect:h&&f===t&&c.getDay()!==t},t)})),h?Object(l.jsx)(u,{isCorrect:c.getDay()===f,correctAnswers:k,totalAttempts:D}):null,null===f?null:Object(l.jsx)(j,{shouldRevealAnswer:h,onClick:function(){h?(b(!1),r(o()),p(null)):(w(D+1),c.getDay()===f&&v(k+1),b(!0))}})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.7c541e23.chunk.js.map