(this["webpackJsonpcapstone-react-client"]=this["webpackJsonpcapstone-react-client"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(29),c=n.n(r),i=(n(77),n(54)),o=n(13),l=n(14),d=n(20),u=n(19),h=n(9),j=n(110),m=n(2),b=n(3),p=n(1),g=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,s=Object(b.a)(e,g);return t&&a?Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:a})):Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(n,Object(m.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},f=n(60),w=(n(86),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(f.a.Heading,{children:n}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),v=n(72),x=n(44),C=n(16),y=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),P=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(p.jsxs)(x.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(p.jsx)(x.a.Brand,{children:Object(p.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"capstone-react-client"})}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),P,t?y:S]})})]})},k=n(6),N="https://infinite-island-44375.herokuapp.com/",U="http://localhost:4741",I="localhost"===window.location.hostname?U:N,F=n(43),E=n.n(F),L=function(e){return E()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},T=n(8),q=n(36),D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,c=n.setUser;(t=a.state,E()({method:"POST",url:I+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign Up"}),Object(p.jsxs)(T.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(T.a.Group,{controlId:"email",children:[Object(p.jsx)(T.a.Label,{children:"Email address"}),Object(p.jsx)(T.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(T.a.Group,{controlId:"password",children:[Object(p.jsx)(T.a.Label,{children:"Password"}),Object(p.jsx)(T.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(T.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(T.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(T.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),G=Object(h.f)(D),B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;L(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign In"}),Object(p.jsxs)(T.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(T.a.Group,{controlId:"email",children:[Object(p.jsx)(T.a.Label,{children:"Email address"}),Object(p.jsx)(T.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(T.a.Group,{controlId:"password",children:[Object(p.jsx)(T.a.Label,{children:"Password"}),Object(p.jsx)(T.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),H=Object(h.f)(B),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return E()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),z=Object(h.f)(W),J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return E()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(T.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(T.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(T.a.Label,{children:"Old password"}),Object(p.jsx)(T.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(T.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(T.a.Label,{children:"New Password"}),Object(p.jsx)(T.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),M=Object(h.f)(J),R=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(A,{user:s}),n.map((function(t){return Object(p.jsx)(w,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsx)(G,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(M,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(a.Component),Y=Object(p.jsx)(C.a,{basename:"/capstone-react-client",children:Object(p.jsx)(R,{})});c.a.render(Y,document.getElementById("root"))},77:function(e,t,n){},86:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.11faecd5.chunk.js.map