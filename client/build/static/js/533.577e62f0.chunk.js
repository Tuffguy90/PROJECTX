"use strict";(self.webpackChunkx_admin_dashboard=self.webpackChunkx_admin_dashboard||[]).push([[533],{88983:function(e,n,r){r.d(n,{Z:function(){return a}});var i=r(61142),t=r(46417);function a(e){var n=e.children;e.type;return(0,t.jsx)(i.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}a.defaultProps={type:"scale"}},46533:function(e,n,r){r.r(n),r.d(n,{default:function(){return oe}});var i=r(74165),t=r(15861),a=r(70885),s=r(47313),o=r(2135),l=r(82937),c=r(62463),d=r(29266),u=r(20362),m=r(48569),h=r(42982),x=r(4942),p=r(63366),Z=r(87462),v=r(83061),f=r(21921),g=r(28170),L=r(42379),j=r(53010),b=r(45730),w=r(2995),y=r(42669),S=r(32298);function P(e){return(0,S.Z)("MuiLink",e)}var C=(0,r(77430).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=r(46428),M=r(17551),k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=function(e){var n=e.theme,r=e.ownerState,i=function(e){return k[e]||e}(r.color),t=(0,H.D)(n,"palette.".concat(i),!1)||r.color,a=(0,H.D)(n,"palette.".concat(i,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,M.Fq)(t,.4)},B=r(46417),E=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,L.ZP)(y.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,g.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,Z.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,Z.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:z({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,x.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(C.focusVisible),{outline:"auto"}))})),q=s.forwardRef((function(e,n){var r=(0,j.Z)({props:e,name:"MuiLink"}),i=r.className,t=r.color,o=void 0===t?"primary":t,l=r.component,c=void 0===l?"a":l,d=r.onBlur,u=r.onFocus,m=r.TypographyClasses,x=r.underline,L=void 0===x?"always":x,y=r.variant,S=void 0===y?"inherit":y,C=r.sx,H=(0,p.Z)(r,E),M=(0,b.Z)(),z=M.isFocusVisibleRef,q=M.onBlur,F=M.onFocus,A=M.ref,V=s.useState(!1),W=(0,a.Z)(V,2),I=W[0],R=W[1],_=(0,w.Z)(n,A),N=(0,Z.Z)({},r,{color:o,component:c,focusVisible:I,underline:L,variant:S}),O=function(e){var n=e.classes,r=e.component,i=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,g.Z)(t)),"button"===r&&"button",i&&"focusVisible"]};return(0,f.Z)(a,P,n)}(N);return(0,B.jsx)(D,(0,Z.Z)({color:o,className:(0,v.Z)(O.root,i),classes:m,component:c,onBlur:function(e){q(e),!1===z.current&&R(!1),d&&d(e)},onFocus:function(e){F(e),!0===z.current&&R(!0),u&&u(e)},ref:_,ownerState:N,variant:S,sx:[].concat((0,h.Z)(Object.keys(k).includes(o)?[]:[{color:o}]),(0,h.Z)(Array.isArray(C)?C:[C]))},H))})),F=r(73477),A=r(3463),V=r(7410),W=r(88983),I=function(){var e=s.useState(!1),n=(0,a.Z)(e,2),r=(n[0],n[1],s.useState(!1)),h=(0,a.Z)(r,2);h[0],h[1];return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(V.J9,{initialValues:{email:"",submit:null},validationSchema:A.Ry().shape({email:A.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,t.Z)((0,i.Z)().mark((function e(n,r){var t,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.setErrors,a=r.setStatus,s=r.setSubmitting;try{a({success:!1}),s(!1)}catch(n){a({success:!1}),t({submit:n.message}),s(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,i=e.handleChange,t=e.handleSubmit,a=e.isSubmitting,s=e.touched,h=e.values;return(0,B.jsx)("form",{noValidate:!0,onSubmit:t,children:(0,B.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsxs)(c.Z,{spacing:1,children:[(0,B.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,B.jsx)(u.Z,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:r,onChange:i,placeholder:"Enter email address",fullWidth:!0,error:Boolean(s.email&&n.email)}),s.email&&n.email&&(0,B.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,B.jsx)(c.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,B.jsx)(q,{variant:"h6",component:o.rU,to:"/login",color:"text.primary",children:"Have Password Login?"})})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsx)(W.Z,{children:(0,B.jsx)(F.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Send OTP"})})})]})})}})})},R=r(58467),_=r(33045),N=r(64683),O=r(85554),T=r(59017),J=r(18104),Q=r(31741),Y=r(44874),G=r(67460),U=function(){var e=(0,R.s0)(),n=s.useState(!1),r=(0,a.Z)(n,2),o=r[0],h=r[1],x=(0,O.I0)(),p=function(){h(!o)},Z=function(e){e.preventDefault()};return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(V.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:A.Ry().shape({email:A.Z_().email("Must be a valid email").max(255).required("Email is required"),password:A.Z_().max(255).required("Password is required")}),onSubmit:function(){var n=(0,t.Z)((0,i.Z)().mark((function n(r,t){var a,s,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=t.setErrors,s=t.setStatus,o=t.setSubmitting;try{_.Z.login({email:r.email,password:r.password}).then((function(n){var r=n.data;200===(null===r||void 0===r?void 0:r.status)?(localStorage.setItem("_token",null===r||void 0===r?void 0:r.token),localStorage.setItem("_userData",JSON.stringify(null===r||void 0===r?void 0:r.user)),x((0,G.v)({userData:null===r||void 0===r?void 0:r.user})),e("/dashboard")):(0,N.PY)("Oops",null!==r&&void 0!==r&&r.message?null===r||void 0===r?void 0:r.message:"Invalid login credentials","info")})).catch((function(e){(0,N.PY)("Oops","Something Went Wrong.","danger")})),s({success:!1}),o(!1)}catch(i){s({success:!1}),a({submit:i.message}),o(!1)}case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,i=e.handleChange,t=e.handleSubmit,a=e.isSubmitting,s=e.touched,h=e.values;return(0,B.jsx)("form",{noValidate:!0,onSubmit:t,children:(0,B.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsxs)(c.Z,{spacing:1,children:[(0,B.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,B.jsx)(u.Z,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:r,onChange:i,placeholder:"Enter email address",fullWidth:!0,error:Boolean(s.email&&n.email)}),s.email&&n.email&&(0,B.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsxs)(c.Z,{spacing:1,children:[(0,B.jsx)(d.Z,{htmlFor:"password-login",children:"Password"}),(0,B.jsx)(u.Z,{fullWidth:!0,error:Boolean(s.password&&n.password),id:"-password-login",type:o?"text":"password",value:h.password,name:"password",onBlur:r,onChange:i,endAdornment:(0,B.jsx)(T.Z,{position:"end",children:(0,B.jsx)(J.Z,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:Z,edge:"end",size:"large",children:o?(0,B.jsx)(Q.Z,{}):(0,B.jsx)(Y.Z,{})})}),placeholder:"Enter password"}),s.password&&n.password&&(0,B.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),n.submit&&(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsx)(m.Z,{error:!0,children:n.submit})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsx)(W.Z,{children:(0,B.jsx)(F.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},K=r(16157),X=r(1413),$=r(45987),ee=r(74162),ne=["children"],re=function(e){var n=e.children,r=(0,$.Z)(e,ne);return(0,B.jsx)(ee.Z,(0,X.Z)((0,X.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,B.jsx)(K.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},ie=r(47440),te=r(62111),ae=function(){var e=(0,te.Z)();return(0,B.jsx)(K.Z,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0},children:(0,B.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,B.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),(0,B.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),(0,B.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:"1"})]})})},se=function(e){var n=e.children;return(0,B.jsxs)(K.Z,{sx:{minHeight:"100vh"},children:[(0,B.jsx)(ae,{}),(0,B.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,B.jsx)(l.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,B.jsx)(ie.Z,{})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsx)(l.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,B.jsx)(l.ZP,{item:!0,children:(0,B.jsx)(re,{children:n})})})}),(0,B.jsx)(l.ZP,{item:!0,xs:12,sx:{m:3,mt:1}})]})]})},oe=function(e){var n=e.type,r=e.title;e.desc;return(0,B.jsx)(se,{children:(0,B.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(l.ZP,{item:!0,xs:12,children:(0,B.jsx)(c.Z,{direction:"row",justifyContent:"center",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,B.jsx)(y.Z,{variant:"h3",children:r})})}),(0,B.jsxs)(l.ZP,{item:!0,xs:12,children:["login"===n&&(0,B.jsx)(U,{}),"forgot-password"===n&&(0,B.jsx)(I,{})]})]})})}},44874:function(e,n,r){r.d(n,{Z:function(){return l}});var i=r(1413),t=r(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},s=r(20262),o=function(e,n){return t.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="EyeInvisibleOutlined";var l=t.forwardRef(o)},31741:function(e,n,r){r.d(n,{Z:function(){return l}});var i=r(1413),t=r(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},s=r(20262),o=function(e,n){return t.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="EyeOutlined";var l=t.forwardRef(o)}}]);