(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"singIN",(function(){return v}));var s=n(0),r=n(12),c=n.n(r),i=n(16),l=n(11),j=n(33),o=n.n(j),u=Object(l.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),b=n(15),p=n(3),d=n(13),h=n(14),O=n(18),m=n(17),x=n(34),f=n.n(x);function v(e){return{type:"sign_in",payload:f.a.post("/usersignup",e).then((function(e){return e.data}))}}var g=n(1),y=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",lastname:"",email:"",firstPass:""},e.nameHandle=function(t){t.preventDefault(),e.setState({name:t.target.value})},e.lastnameHandle=function(t){t.preventDefault(),e.setState({lastname:t.target.value})},e.emailHandle=function(t){t.preventDefault(),e.setState({email:t.target.value})},e.firstpassHandle=function(t){t.preventDefault(),e.setState({firstPass:t.target.value})},e.subMit=function(t){t.preventDefault(),e.props.singIN(e.state)},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log(this.props.data),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"text",onChange:this.nameHandle,value:this.state.name,placeholder:"Enter name"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"text",onChange:this.lastnameHandle,value:this.state.lastname,placeholder:"Enter lastname"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"email",onChange:this.emailHandle,value:this.state.email,placeholder:"Enter email"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"password",onChange:this.firstpassHandle,value:this.state.firstPass,placeholder:"Enter password"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"submit",onSubmit:this.subMit,children:"Submit"}),Object(g.jsxs)("p",{children:["Already signed in?,then ",Object(g.jsx)(b.b,{to:"/login",children:"login"})," "]})]})})}}]),n}(s.Component),w=Object(i.b)((function(e){return{data:e.user}}),a)(y),H=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",firstPass:""},e.emailHandle=function(t){t.preventDefault(),e.setState({email:t.target.value})},e.passwordHandle=function(t){t.preventDefault(),e.setState({firstPass:t.target.value})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"email",value:this.state.email,onChange:this.emailHandle,placeholder:"Enter email"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"password",value:this.state.password,onChange:this.passwordHandle,placeholder:"Enter password"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(s.Component),S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Welcome"})})},C=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(p.a,{path:"/",exact:!0,component:w}),Object(g.jsx)(p.a,{path:"/login",exact:!0,component:H}),Object(g.jsx)(p.a,{path:"/userview",exact:!0,component:S})]})})},D=Object(l.a)(o.a)(l.c);c.a.render(Object(g.jsx)(i.a,{store:D(u),children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c6193d5d.chunk.js.map