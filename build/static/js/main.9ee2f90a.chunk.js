(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),i=n.n(a),r=n(8),c=n.n(r),s=n(7),d=n(2),l=n(3),p=n(5),u=n(4),h={fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"},j=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,i=e.title;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChangeProps(a)}}),Object(o.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(a)},children:"Delete"}),Object(o.jsx)("span",{style:this.props.todo.completed?h:null,children:i})]})}}]),n}(i.a.Component),b=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{children:this.props.todos.map((function(e){return Object(o.jsx)(j,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),n}(i.a.Component),m=function(){return Object(o.jsxs)("header",{style:{padding:"20px 0",lineHeight:"2em"},children:[Object(o.jsx)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:"Simple Todo App"}),Object(o.jsx)("p",{style:{fontSize:"19px"},children:"Please add to-dos item(s) through the input field"})]})},O=n(9),f=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(O.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(o.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),Object(o.jsx)("input",{type:"submit",className:"input-submit",value:"Submit"})]})}}]),n}(a.Component),v=n(18),x=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:Object(v.a)(),title:"Setup development environment",completed:!0},{id:Object(v.a)(),title:"Develop website and add content",completed:!1},{id:Object(v.a)(),title:"Deploy to live server",completed:!1}]},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodoItem=function(e){var n={id:Object(v.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[n])})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{}),Object(o.jsx)(f,{addTodoProps:this.addTodoItem}),Object(o.jsx)(b,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo})]})}}]),n}(i.a.Component);n(15);c.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9ee2f90a.chunk.js.map