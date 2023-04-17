"use strict";(self.webpackChunkx_admin_dashboard=self.webpackChunkx_admin_dashboard||[]).push([[850],{88983:function(e,i,n){n.d(i,{Z:function(){return t}});var a=n(63866),r=n(46417);function t(e){var i=e.children;e.type;return(0,r.jsx)(a.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:i})}t.defaultProps={type:"scale"}},61160:function(e,i,n){n.d(i,{Z:function(){return W}});var a=n(29439),r=n(47313),t=n(30168),s=n(63366),l=n(87462),d=n(83061),o=n(30686),u=n(21921);function h(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(e){return parseFloat(e)}var m=n(17551),v=n(17592),x=n(77342),p=n(77430),f=n(32298);function Z(e){return(0,f.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,b,j,w,y,_,S,C,P=n(46417),k=["animation","className","component","height","style","variant","width"],F=(0,o.F4)(y||(y=g||(g=(0,t.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),B=(0,o.F4)(_||(_=b||(b=(0,t.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),q=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,i){var n=e.ownerState;return[i.root,i[n.variant],!1!==n.animation&&i[n.animation],n.hasChildren&&i.withChildren,n.hasChildren&&!n.width&&i.fitContent,n.hasChildren&&!n.height&&i.heightAuto]}})((function(e){var i=e.theme,n=e.ownerState,a=h(i.shape.borderRadius)||"px",r=c(i.shape.borderRadius);return(0,l.Z)({display:"block",backgroundColor:i.vars?i.vars.palette.Skeleton.bg:(0,m.Fq)(i.palette.text.primary,"light"===i.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(a,"/").concat(Math.round(r/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(i.vars||i).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,o.iv)(S||(S=j||(j=(0,t.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),F)}),(function(e){var i=e.ownerState,n=e.theme;return"wave"===i.animation&&(0,o.iv)(C||(C=w||(w=(0,t.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),B,(n.vars||n).palette.action.hover)})),E=r.forwardRef((function(e,i){var n=(0,x.Z)({props:e,name:"MuiSkeleton"}),a=n.animation,r=void 0===a?"pulse":a,t=n.className,o=n.component,h=void 0===o?"span":o,c=n.height,m=n.style,v=n.variant,p=void 0===v?"text":v,f=n.width,g=(0,s.Z)(n,k),b=(0,l.Z)({},n,{animation:r,component:h,variant:p,hasChildren:Boolean(g.children)}),j=function(e){var i=e.classes,n=e.variant,a=e.animation,r=e.hasChildren,t=e.width,s=e.height,l={root:["root",n,a,r&&"withChildren",r&&!t&&"fitContent",r&&!s&&"heightAuto"]};return(0,u.Z)(l,Z,i)}(b);return(0,P.jsx)(q,(0,l.Z)({as:h,ref:i,className:(0,d.Z)(j.root,t),ownerState:b},g,{style:(0,l.Z)({width:f,height:c},m)}))})),R=n(63984),N=n(9019),M=n(76388),W=function(e){var i=e.children,n=(0,r.useState)(!0),t=(0,a.Z)(n,2),s=t[0],l=t[1];(0,r.useEffect)((function(){l(!1)}),[]);var d=(0,P.jsx)(M.Z,{title:(0,P.jsx)(E,{sx:{width:{xs:120,md:180}}}),secondary:(0,P.jsx)(E,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,P.jsxs)(R.Z,{spacing:1,children:[(0,P.jsx)(E,{}),(0,P.jsx)(E,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,P.jsx)(E,{}),(0,P.jsx)(E,{})]})});return(0,P.jsxs)(P.Fragment,{children:[s&&(0,P.jsxs)(N.ZP,{container:!0,spacing:3,children:[(0,P.jsx)(N.ZP,{item:!0,xs:12,md:6,children:d}),(0,P.jsx)(N.ZP,{item:!0,xs:12,md:6,children:d}),(0,P.jsx)(N.ZP,{item:!0,xs:12,md:6,children:d}),(0,P.jsx)(N.ZP,{item:!0,xs:12,md:6,children:d})]}),!s&&i]})}},51850:function(e,i,n){n.r(i);var a=n(74165),r=n(1413),t=n(15861),s=n(29439),l=n(9019),d=n(63984),o=n(23306),u=n(40308),h=n(15480),c=n(69099),m=n(61160),v=n(76388),x=n(88983),p=n(3463),f=n(7410),Z=n(47313),g=n(33045),b=n(64683),j=n(46417),w=JSON.parse(localStorage.getItem("_userData"));i.default=function(){var e,i=(0,Z.useState)(!1),n=(0,s.Z)(i,2),y=(n[0],n[1],(0,Z.useState)(!1)),_=(0,s.Z)(y,2),S=(_[0],_[1],(0,Z.useState)(!1)),C=(0,s.Z)(S,2),P=(C[0],C[1],(0,Z.useState)(null)),k=(0,s.Z)(P,2),F=k[0],B=k[1],q=(0,Z.useState)(null),E=(0,s.Z)(q,2);E[0],E[1];(0,Z.useEffect)((function(){g.Z.getUserList(null===w||void 0===w?void 0:w.id).then((function(e){var i,n=e.data;B(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data[0])}))}),[]);var R=(0,Z.useMemo)((function(){return(0,j.jsx)("h1",{className:"mb-0 pb-0",children:"User Profile"})}),[]);return(0,j.jsx)(m.Z,{children:(0,j.jsx)(l.ZP,{container:!0,spacing:0,children:(0,j.jsx)(l.ZP,{item:!0,xs:12,lg:12,children:(0,j.jsx)(d.Z,{spacing:0,children:(0,j.jsx)(v.Z,{title:R,codeHighlight:!0,children:(0,j.jsx)(f.J9,{initialValues:{first_name:null===F||void 0===F?void 0:F.first_name,last_name:null===F||void 0===F?void 0:F.last_name,email:null===F||void 0===F?void 0:F.email,mobile:null===F||void 0===F?void 0:F.mobile,address:null===F||void 0===F?void 0:F.address,subsidiary:null===F||void 0===F||null===(e=F.subsidary)||void 0===e?void 0:e.name,submit:null},enableReinitialize:!0,validationSchema:p.Ry().shape({first_name:p.Z_().max(255).required("First Name is required"),last_name:p.Z_().max(255).required("Last Name is required"),email:p.Z_().max(255).required("Email is required"),mobile:p.Z_().max(255).required("Mobile is required"),address:p.Z_().max(255).required("Address is required"),subsidiary:p.Z_().max(255).required("Subsidiary is required")}),onSubmit:function(){var e=(0,t.Z)((0,a.Z)().mark((function e(i,n){var t,s,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.setErrors,s=n.setStatus,l=n.setSubmitting,n.resetForm;try{delete(d=(0,r.Z)({},i)).subsidiary,d.key=w.id,d.updated_by=w.id,g.Z.updateUserProfileData((0,r.Z)({},d)).then((function(e){var i;200===(null===e||void 0===e?void 0:e.status)?(0,b.PY)("Success","Changes Done Successfully","success"):(0,b.PY)("Oops",null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.message,"info")})).catch((function(e){var i,n;(0,b.PY)("Oops",null===e||void 0===e||null===(i=e.response)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.message,"danger")})),s({success:!1}),l(!1)}catch(a){s({success:!1}),t({submit:a.message}),l(!1)}case 2:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,n=e.handleBlur,a=e.handleChange,r=e.handleSubmit,t=e.isSubmitting,s=e.touched,m=e.values;return(0,j.jsx)("form",{noValidate:!0,onSubmit:r,children:(0,j.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"first_name",children:"First Name"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.first_name&&i.first_name),id:"first_name",type:"text",value:null===m||void 0===m?void 0:m.first_name,name:"first_name",onBlur:n,onChange:a,placeholder:"Enter first name"}),s.first_name&&i.first_name&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.first_name})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"last_name",children:"First Name"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.last_name&&i.last_name),id:"last_name",type:"text",value:null===m||void 0===m?void 0:m.last_name,name:"last_name",onBlur:n,onChange:a,placeholder:"Enter last name"}),s.last_name&&i.last_name&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.last_name})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"email",children:"Email-Id"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.email&&i.email),id:"email",type:"text",value:null===m||void 0===m?void 0:m.email,name:"email",disabled:!0,onBlur:n,onChange:a,placeholder:"Enter email"}),s.email&&i.email&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.email})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"mobile",children:"Mobile"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.mobile&&i.mobile),id:"mobile",type:"text",value:null===m||void 0===m?void 0:m.mobile,name:"mobile",disabled:!0,onBlur:n,onChange:a,placeholder:"Enter mobile"}),s.mobile&&i.mobile&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.mobile})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"address",children:"Address"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.address&&i.address),id:"address",type:"text",value:null===m||void 0===m?void 0:m.address,name:"address",onBlur:n,onChange:a,placeholder:"Enter address"}),s.address&&i.address&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.address})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:6,children:(0,j.jsxs)(d.Z,{spacing:1,children:[(0,j.jsx)(o.Z,{htmlFor:"subsidiary",children:"Subsidiary"}),(0,j.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.subsidiary&&i.subsidiary),id:"subsidiary",type:"text",value:null===m||void 0===m?void 0:m.subsidiary,name:"subsidiary",disabled:!0,onBlur:n,onChange:a,placeholder:"Enter subsidiary"}),s.subsidiary&&i.subsidiary&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.subsidiary})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:8}),(0,j.jsx)(l.ZP,{item:!0,xs:4,children:(0,j.jsx)(x.Z,{children:(0,j.jsx)(c.Z,{disableElevation:!0,disabled:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Change"})})})]})})}})})})})})})}}}]);