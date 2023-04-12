"use strict";(self.webpackChunkx_admin_dashboard=self.webpackChunkx_admin_dashboard||[]).push([[291],{88983:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(63866),i=t(46417);function a(e){var n=e.children;e.type;return(0,i.jsx)(r.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}a.defaultProps={type:"scale"}},75291:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var r=t(74165),i=t(15861),a=t(29439),o=t(47313),s=t(2135),l=t(9019),c=t(42832),d=t(23306),u=t(40308),m=t(15480),h=t(93433),x=t(4942),p=t(63366),v=t(87462),f=t(83061),Z=t(21921),g=t(91615),b=t(17592),j=t(77342),L=t(59127),w=t(86983),y=t(61113),S=t(77430),C=t(32298);function k(e){return(0,C.Z)("MuiLink",e)}var P=(0,S.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),W=t(46428),M=t(17551),H={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=function(e){var n=e.theme,t=e.ownerState,r=function(e){return H[e]||e}(t.color),i=(0,W.DW)(n,"palette.".concat(r),!1)||t.color,a=(0,W.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,M.Fq)(i,.4)},z=t(46417),B=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,b.ZP)(y.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,g.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,v.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,v.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:R({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,x.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(P.focusVisible),{outline:"auto"}))})),D=o.forwardRef((function(e,n){var t=(0,j.Z)({props:e,name:"MuiLink"}),r=t.className,i=t.color,s=void 0===i?"primary":i,l=t.component,c=void 0===l?"a":l,d=t.onBlur,u=t.onFocus,m=t.TypographyClasses,x=t.underline,b=void 0===x?"always":x,y=t.variant,S=void 0===y?"inherit":y,C=t.sx,P=(0,p.Z)(t,B),W=(0,L.Z)(),M=W.isFocusVisibleRef,R=W.onBlur,D=W.onFocus,_=W.ref,A=o.useState(!1),q=(0,a.Z)(A,2),F=q[0],G=q[1],N=(0,w.Z)(n,_),T=(0,v.Z)({},t,{color:s,component:c,focusVisible:F,underline:b,variant:S}),I=function(e){var n=e.classes,t=e.component,r=e.focusVisible,i=e.underline,a={root:["root","underline".concat((0,g.Z)(i)),"button"===t&&"button",r&&"focusVisible"]};return(0,Z.Z)(a,k,n)}(T);return(0,z.jsx)(E,(0,v.Z)({color:s,className:(0,f.Z)(I.root,r),classes:m,component:c,onBlur:function(e){R(e),!1===M.current&&G(!1),d&&d(e)},onFocus:function(e){D(e),!0===M.current&&G(!0),u&&u(e)},ref:N,ownerState:T,variant:S,sx:[].concat((0,h.Z)(Object.keys(H).includes(s)?[]:[{color:s}]),(0,h.Z)(Array.isArray(C)?C:[C]))},P))})),_=t(69099),A=t(3463),q=t(7410),F=t(88983),G=function(){var e=o.useState(!1),n=(0,a.Z)(e,2),t=(n[0],n[1],o.useState(!1)),h=(0,a.Z)(t,2);h[0],h[1];return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(q.J9,{initialValues:{email:"",submit:null},validationSchema:A.Ry().shape({email:A.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.setErrors,a=t.setStatus,o=t.setSubmitting;try{a({success:!1}),o(!1)}catch(n){a({success:!1}),i({submit:n.message}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,o=e.touched,h=e.values;return(0,z.jsx)("form",{noValidate:!0,onSubmit:i,children:(0,z.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsxs)(c.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,z.jsx)(u.Z,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:t,onChange:r,placeholder:"Enter email address",fullWidth:!0,error:Boolean(o.email&&n.email)}),o.email&&n.email&&(0,z.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,z.jsx)(c.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,z.jsx)(D,{variant:"h6",component:s.rU,to:"/login",color:"text.primary",children:"Have Password Login?"})})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(F.Z,{children:(0,z.jsx)(_.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Send OTP"})})})]})})}})})},N=t(58467),T=t(33045),I=t(64683),V=t(85554),O=t(41727),J=t(47131),Q=t(31741),U=t(44874),Y=t(67460),K=function(){var e=(0,N.s0)(),n=o.useState(!1),t=(0,a.Z)(n,2),s=t[0],h=t[1],x=(0,V.I0)(),p=function(){h(!s)},v=function(e){e.preventDefault()};return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(q.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:A.Ry().shape({email:A.Z_().email("Must be a valid email").max(255).required("Email is required"),password:A.Z_().max(255).required("Password is required")}),onSubmit:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,i){var a,o,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=i.setErrors,o=i.setStatus,s=i.setSubmitting;try{T.Z.login({email:t.email,password:t.password}).then((function(n){var t=n.data;200===(null===t||void 0===t?void 0:t.status)?(localStorage.setItem("_token",null===t||void 0===t?void 0:t.token),localStorage.setItem("_userData",JSON.stringify(null===t||void 0===t?void 0:t.user)),x((0,Y.v)({userData:null===t||void 0===t?void 0:t.user})),e("/dashboard")):(0,I.PY)("Oops",null!==t&&void 0!==t&&t.message?null===t||void 0===t?void 0:t.message:"Invalid login credentials","info")})).catch((function(e){(0,I.PY)("Oops","Something Went Wrong.","danger")})),o({success:!1}),s(!1)}catch(r){o({success:!1}),a({submit:r.message}),s(!1)}case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,o=e.touched,h=e.values;return(0,z.jsx)("form",{noValidate:!0,onSubmit:i,children:(0,z.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsxs)(c.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,z.jsx)(u.Z,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:t,onChange:r,placeholder:"Enter email address",fullWidth:!0,error:Boolean(o.email&&n.email)}),o.email&&n.email&&(0,z.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsxs)(c.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"password-login",children:"Password"}),(0,z.jsx)(u.Z,{fullWidth:!0,error:Boolean(o.password&&n.password),id:"-password-login",type:s?"text":"password",value:h.password,name:"password",onBlur:t,onChange:r,endAdornment:(0,z.jsx)(O.Z,{position:"end",children:(0,z.jsx)(J.Z,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:v,edge:"end",size:"large",children:s?(0,z.jsx)(Q.Z,{}):(0,z.jsx)(U.Z,{})})}),placeholder:"Enter password"}),o.password&&n.password&&(0,z.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),n.submit&&(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(m.Z,{error:!0,children:n.submit})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(F.Z,{children:(0,z.jsx)(_.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},X=t(57829),$=t(1413),ee=t(45987),ne=t(32734),te=["children"],re=function(e){var n=e.children,t=(0,ee.Z)(e,te);return(0,z.jsx)(ne.Z,(0,$.Z)((0,$.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,z.jsx)(X.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},ie=t(47440),ae=t(24813),oe=t(50114),se=t(14614),le=t(96694),ce=t(9456),de=["className","component","disableGutters","fixed","maxWidth","classes"],ue=(0,ce.Z)(),me=(0,le.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,oe.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),he=function(e){return(0,se.Z)({props:e,name:"MuiContainer",defaultTheme:ue})};var xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?me:n,r=e.useThemeProps,i=void 0===r?he:r,a=e.componentName,s=void 0===a?"MuiContainer":a,l=t((function(e){var n=e.theme,t=e.ownerState;return(0,v.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,x.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,i=n.breakpoints.values[r];return 0!==i&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(i).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,v.Z)({},"xs"===t.maxWidth&&(0,x.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,x.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),c=o.forwardRef((function(e,n){var t=i(e),r=t.className,a=t.component,o=void 0===a?"div":a,c=t.disableGutters,d=void 0!==c&&c,u=t.fixed,m=void 0!==u&&u,h=t.maxWidth,x=void 0===h?"lg":h,g=(0,p.Z)(t,de),b=(0,v.Z)({},t,{component:o,disableGutters:d,fixed:m,maxWidth:x}),j=function(e,n){var t=e.classes,r=e.fixed,i=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,oe.Z)(String(a))),r&&"fixed",i&&"disableGutters"]};return(0,Z.Z)(o,(function(e){return(0,C.Z)(n,e)}),t)}(b,s);return(0,z.jsx)(l,(0,v.Z)({as:o,ownerState:b,className:(0,f.Z)(j.root,r),ref:n},g))}));return c}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,g.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,j.Z)({props:e,name:"MuiContainer"})}}),pe=xe,ve=function(){var e=(0,ae.Z)((function(e){return e.breakpoints.down("sm")}));return(0,z.jsx)(pe,{maxWidth:"xl",children:(0,z.jsxs)(c.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,z.jsxs)(y.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["\xa9 Mantis React Dashboard Template By\xa0",(0,z.jsx)(y.Z,{component:D,variant:"subtitle2",href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CodedThemes"})]}),(0,z.jsxs)(c.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,z.jsx)(y.Z,{variant:"subtitle2",color:"secondary",component:D,href:"https://material-ui.com/store/contributors/codedthemes/",target:"_blank",underline:"hover",children:"MUI Templates"}),(0,z.jsx)(y.Z,{variant:"subtitle2",color:"secondary",component:D,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,z.jsx)(y.Z,{variant:"subtitle2",color:"secondary",component:D,href:"https://codedthemes.support-hub.io/",target:"_blank",underline:"hover",children:"Support"})]})]})})},fe=t(19860),Ze=function(){var e=(0,fe.Z)();return(0,z.jsx)(X.Z,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0},children:(0,z.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,z.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),(0,z.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),(0,z.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:"1"})]})})},ge=function(e){var n=e.children;return(0,z.jsxs)(X.Z,{sx:{minHeight:"100vh"},children:[(0,z.jsx)(Ze,{}),(0,z.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,z.jsx)(l.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,z.jsx)(ie.Z,{})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(l.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,z.jsx)(l.ZP,{item:!0,children:(0,z.jsx)(re,{children:n})})})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,z.jsx)(ve,{})})]})]})},be=function(e){var n=e.type,t=e.title;e.desc;return(0,z.jsx)(ge,{children:(0,z.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(c.Z,{direction:"row",justifyContent:"center",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,z.jsx)(y.Z,{variant:"h3",children:t})})}),(0,z.jsxs)(l.ZP,{item:!0,xs:12,children:["login"===n&&(0,z.jsx)(K,{}),"forgot-password"===n&&(0,z.jsx)(G,{})]})]})})}},44874:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},o=t(20262),s=function(e,n){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="EyeInvisibleOutlined";var l=i.forwardRef(s)},31741:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},o=t(20262),s=function(e,n){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="EyeOutlined";var l=i.forwardRef(s)}}]);