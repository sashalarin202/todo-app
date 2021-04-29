(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),o=c(8),a=c.n(o),s=(c(14),c(15),c(16),c(2)),i=c(9),r=c(3),d=c(4),u=c.n(d),j=c(0),b=function(e){var t=e.todo,c=e.deleteTodo,l=e.status,o=e.updateTitle,a=Object(n.useState)(!1),s=Object(r.a)(a,2),i=s[0],d=s[1],b=Object(n.useState)(t.title),m=Object(r.a)(b,2),p=m[0],f=m[1];return Object(j.jsxs)("li",{className:u()({completed:t.completed},{editing:i}),onDoubleClick:function(){return d(!i)},children:[Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{type:"checkbox",className:"toggle",onClick:function(){return l(t.id)},checked:t.completed}),Object(j.jsx)("label",{children:t.title}),Object(j.jsx)("button",{type:"button",className:"destroy",onClick:function(){return c(t.id)}})]}),Object(j.jsx)("input",{type:"text",className:"edit",value:p,onChange:function(e){return f(e.target.value.trim())},onKeyUp:function(e){switch(e.key){case"Enter":p?o(t.id,p):f(t.title),d(!1);break;case"Escape":d(!1),f(t.title)}},onBlur:function(){p?o(t.id,p):f(t.title),d(!1)}})]},t.id)},m=function(e){var t=e.filteredTodos,c=e.deleteTodo,n=e.status,l=e.updateTitle;return Object(j.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(j.jsx)(b,{todo:e,deleteTodo:c,status:n,updateTitle:l})}))})},p=function(e){var t=e.setFilter,c=e.selectedFilter,n=function(e){e.preventDefault(),t(e.target.name)};return Object(j.jsxs)("ul",{className:"filters",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#/",className:u()({selected:"All"===c}),name:"All",onClick:n,children:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#/active",className:u()({selected:"Active"===c}),name:"Active",onClick:n,children:"Active"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#/completed",className:u()({selected:"Completed"===c}),name:"Completed",onClick:n,children:"Completed"})})]})};var f=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],l=t[1],o=Object(n.useState)(""),a=Object(r.a)(o,2),d=a[0],u=a[1],b=Object(n.useState)(!1),f=Object(r.a)(b,2),O=f[0],h=f[1],x=Object(n.useState)("All"),g=Object(r.a)(x,2),v=g[0],N=g[1];Object(n.useEffect)((function(){localStorage.todos?l(JSON.parse(localStorage.getItem("todos"))):localStorage.setItem("todos",JSON.stringify([]))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);var C=c.filter((function(e){return e.completed})),k=c.filter((function(e){return!e.completed})),S=function(e){switch(e){case"All":return c;case"Active":return k;case"Completed":return C}}({All:"All",Active:"Active",Completed:"Completed"}[v]);return Object(j.jsxs)("section",{className:"todoapp",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"todos App"}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),d.length>0&&(l((function(e){return[].concat(Object(i.a)(e),[{id:+new Date,title:d,completed:!1}])})),u(""))},children:Object(j.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:d,onChange:function(e){return u(e.target.value.trimLeft())}})})]}),Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){l(O?c.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{completed:!1})})):c.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{completed:!0})}))),h(!O)}}),Object(j.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(j.jsx)(m,{filteredTodos:S,deleteTodo:function(e){l(c.filter((function(t){return t.id!==e})))},status:function(e){l(c.map((function(t){return e===t.id?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t})))},updateTitle:function(e,t){l(c.map((function(n){return n.id===e?Object(s.a)(Object(s.a)({},c),{},{title:t}):n})))}})]}),c.length>0&&Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[k.length," ","items left"]}),Object(j.jsx)(p,{setFilter:N,selectedFilter:v}),C.length>0&&Object(j.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){l(k)},children:"Clear completed"})]})]})};a.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e35fac2c.chunk.js.map