(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(t,e,a){},125:function(t,e,a){},160:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(11),i=a.n(o),r=(a(124),a(125),a(7)),s=a(15),l=a.n(s),d=a(195),j=a(18),b=a(197),u=a(201),h=a(202),x=a(200),p=a(203),m=a(35),O=a(89),g=a.n(O),f=a(198),v=a(220),y=a(199),S=a(88),w=a.n(S),C=a(90),N=a.n(C),T=a(86),k=a.n(T),I=a(2),B=c.a.createContext(),E=c.a.createContext(),R=function(){return Object(n.useContext)(B)},M=function(){return Object(n.useContext)(E)},W=function(t){var e=t.children,a=Object(n.useState)(!1),c=Object(r.a)(a,2),o=c[0],i=c[1],s=function(){l.a.get("http://localhost:5000/user/validate",{withCredentials:!0}).then((function(t){401!==t.status?i(!0):i(!1)})).catch((function(t){console.log(t),i(!1)}))};return s(),Object(I.jsx)(B.Provider,{value:o,children:Object(I.jsx)(E.Provider,{value:s,children:e})})},P=a(12),D=Object(d.a)({root:{},cardAction:{display:"flex",flex:"1 0 auto",flexDirection:"column",textDecoration:"none",color:"black",fontWeight:"bold",marginTop:"5px",paddingTop:"0px"},card:{justifyContent:"start",display:"flex",flexDirection:"column",borderRadius:"10px",marginTop:"20px"},body:{wordWrap:"break-word"},actions:{display:"flex",justifyContent:"flex-start",background:"linear-gradient(90deg, rgba(220,215,240,1) 0%, rgba(201,229,245,1) 66%)"},cardContent:{heigh:"300px",marginTop:"0px",paddingTop:"0px",paddingBottom:"0px",marginBotton:"0px"},cardHeader:{paddingBottom:"5px"}}),_=function(t){var e=D(),a=t.post,c=a.body,o=a.user,i=a._id,s=a.createdAt,d=a.comments,O=a.favoritesCount,S=Object(n.useState)(O),C=Object(r.a)(S,2),T=C[0],B=C[1],E=Object(n.useState)(!1),M=Object(r.a)(E,2),W=M[0],_=M[1],z=R();return Object(I.jsxs)(b.a,{className:e.card,children:[Object(I.jsx)(j.b,{className:e.cardAction,to:"/user/".concat(o._id),children:Object(I.jsx)(f.a,{className:e.cardHeader,avatar:Object(I.jsx)(v.a,{src:"https://picsum.photos/200","aria-label":"User"}),action:Object(I.jsx)(y.a,{"aria-label":"settings",children:Object(I.jsx)(w.a,{})}),title:Object(I.jsx)(m.a,{children:t.post.user.name}),subheader:Object(I.jsx)(k.a,{date:s,format:"YYYY/MM/DD HH:MM"})})}),Object(I.jsx)(j.b,{className:e.cardAction,to:"/posts/".concat(i),children:Object(I.jsx)(x.a,{className:e.cardContent,children:Object(I.jsx)(u.a,{children:Object(I.jsx)(m.a,{className:e.body,variant:"body2",color:"textPrimary",component:"p",children:c})})})}),Object(I.jsxs)(h.a,{className:e.actions,children:[!z&&W&&Object(I.jsx)(P.a,{to:"/signin"}),Object(I.jsxs)(p.a,{size:"small",color:"primary",onClick:function(){var t;t=i,z?(console.log(i+"liked"),l.a.post("".concat("http://localhost:5000","/post/like-post"),{postId:t},{withCredentials:!0}).then((function(t){console.log(t),"favorited"!==t.data?B(T-1):B(T+1)})).catch((function(t){console.log(t)}))):_(!0)},children:[Object(I.jsx)(g.a,{style:{color:"red"}}),T]}),Object(I.jsx)(j.b,{to:"/posts/".concat(i),children:Object(I.jsxs)(p.a,{size:"small",color:"primary",children:[Object(I.jsx)(N.a,{style:{color:"#8f80ee"}})," ",d.length]})})]})]},"body + ".concat(Math.random()))},z=a(204),A=a(205),F=Object(d.a)({commentField:{position:"sticky",bottom:"0px",height:"80px"},gridItem:{},container:{marginTop:"20px"}}),L=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),a=e[0],c=e[1],o=F(),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"http://localhost:5000";return Object(n.useEffect)((function(){l.a.get("".concat(i,"/post/get-feed")).then((function(t){console.log(t),c(t.data)}))}),[]),Object(I.jsx)(z.a,{maxWidth:"xs",className:o.container,children:Object(I.jsx)(A.a,{container:!0,direction:"row",justify:"center",spacing:1,children:a&&a.map((function(t,e){return Object(I.jsx)(A.a,{className:o.gridItem,item:!0,xs:12,children:Object(I.jsx)(_,{post:t})},e+t.body)}))})})},U=a(218),H=a(219),V=a(206),Y=a(221),K=a(207),q=a(209),G=a(91),J=a.n(G),Q=a(93),X=a.n(Q),Z=a(94),$=a.n(Z),tt=a(92),et=a.n(tt),at=Object(d.a)((function(t){return{container:{marginTop:"25px",padding:"40px",background:"linear-gradient(90deg, rgba(220,215,240,1) 0%, rgba(201,229,245,1) 66%)",borderRadius:"6px"},switch:{left:"0px",with:"100%"},switchText:{marginLeft:"17px"},root:{display:"grid","& > *":{margin:t.spacing(1)}}}})),nt=function(){var t=at(),e=Object(n.useState)(!0),a=Object(r.a)(e,2),c=a[0],o=a[1],i=Object(n.useState)(!1),s=Object(r.a)(i,2),d=s[0],j=s[1],b=Object(n.useState)(!1),u=Object(r.a)(b,2),h=u[0],x=u[1],O=Object(n.useState)(!1),g=Object(r.a)(O,2),f=g[0],v=g[1],S=M(),w=Object(n.useState)(""),C=Object(r.a)(w,2),N=C[0],T=C[1],k=Object(n.useState)(!1),B=Object(r.a)(k,2),E=B[0],R=B[1],W=Object(n.useState)(!1),D=Object(r.a)(W,2),_=D[0],z=D[1],F=Object(n.useState)(""),L=Object(r.a)(F,2),G=L[0],Q=L[1],Z=Object(n.useState)(!1),tt=Object(r.a)(Z,2),nt=tt[0],ct=tt[1],ot=Object(n.useState)(!1),it=Object(r.a)(ot,2),rt=it[0],st=it[1],lt=Object(n.useState)(!1),dt=Object(r.a)(lt,2),jt=dt[0],bt=dt[1],ut="http://localhost:5000";return Object(I.jsxs)(A.a,{container:!0,justify:"center",children:[d&&Object(I.jsx)(P.a,{to:"/"}),Object(I.jsxs)("div",{className:t.container,children:[Object(I.jsx)(m.a,{align:"center",variant:"h3",children:c?"Sign In":"Sign Up"}),Object(I.jsx)(m.a,{className:t.switchText,color:"textPrimary",align:"right",variant:"p3",children:c?"Don't have an account ?":"Do you need to sign in ?"}),Object(I.jsx)(Y.a,{className:t.switch,checked:c,onChange:function(){o(!c)},color:"primary",name:"switch",inputProps:{"aria-label":"sign in sign up checkbox"}}),Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c?l.a.post("".concat(ut,"/signin"),{username:t.target.email.value,password:t.target.password.value},{withCredentials:!0}).then((function(t){200===t.status&&(j(!0),S())})).catch((function(t){console.log(t),v(t.response.data.message)})):l.a.post("".concat(ut,"/signup"),{email:t.target.email.value,password:t.target.password.value,username:t.target.username.value},{withCredentials:!0}).then((function(t){o(!0)})).catch((function(t){var e,a,n,c;console.log(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message),x(null===t||void 0===t||null===(n=t.response)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.message)}))},className:t.root,noValidate:!0,autoComplete:"off",children:[Object(I.jsx)(U.a,{onChange:function(t){T(t.target.value),N.length>4&&z(!0),J()(N)?R(!0):R(!1)},id:"filled-basic",name:"email",label:"E-Mail",required:!0,variant:"filled",error:!c&&!E&&_,helperText:!c&&_&&!E&&"Email is not valid"}),!c&&Object(I.jsx)(U.a,{id:"username-input",name:"username",label:"User Name",variant:"filled"}),Object(I.jsxs)(K.a,{helperText:"password is too short",variant:"filled",children:[Object(I.jsx)(H.a,{htmlFor:"filled-adornment-password",children:"Password"}),Object(I.jsx)(V.a,{name:"password",required:!0,id:"filled-adornment-password",type:jt?"text":"password",onChange:function(t){Q(t.target.value),G.length>3&&st(!0),et()(G,{min:8,max:32})?ct(!0):ct(!1)},error:!c&&!nt&&rt,endAdornment:Object(I.jsx)(q.a,{position:"end",children:Object(I.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){bt(!jt)},edge:"end",children:jt?Object(I.jsx)(X.a,{}):Object(I.jsx)($.a,{})})})})]}),Object(I.jsx)(p.a,{type:"submit",variant:"contained",align:"center",color:"secondary",children:c?"Sign In":"Sign Up"}),c&&f,!c&&h]})]})]})},ct=Object(d.a)((function(t){return{container:{height:"190px",margin:"0px",padding:"40px",background:"linear-gradient(90deg, rgba(220,215,240,1) 0%, rgba(201,229,245,1) 66%)"},switch:{left:"0px",margin:"0px"},root:{display:"grid","& > *":{margin:"0px"}},grid:{margin:"0px"}}})),ot=function(){var t=ct(),e=Object(n.useState)(!1),a=Object(r.a)(e,2),c=a[0],o=a[1];return Object(I.jsx)(A.a,{className:t.grid,container:!0,justify:"center",children:Object(I.jsxs)("div",{className:t.container,children:[c&&Object(I.jsx)(P.a,{to:"/posts/".concat(c)}),Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l.a.post("".concat("http://localhost:5000","/post/create"),{body:t.target.body.value},{withCredentials:!0}).then((function(t){o(t.data.docs._id)})).catch((function(t){console.log(t)}))},className:t.root,noValidate:!0,autoComplete:"off",children:[Object(I.jsx)(U.a,{autoFocus:!0,rowsMax:8,multiline:!0,id:"filled-basic",name:"body",label:"body",variant:"filled"}),Object(I.jsx)(p.a,{type:"submit",variant:"contained",align:"center",color:"secondary",children:"Create Post"})]})]})})},it=a(208),rt=a(164),st=a(211),lt=a(210),dt=a(95),jt=a.n(dt),bt=a(212),ut=Object(d.a)((function(t){return{root:{width:"100%",backgroundColor:"hsl(194, 53.3%, 79%)",margin:"0 auto",borderRadius:"10px",marginTop:"20px"},body:{wordWrap:"break-word"}}})),ht=function(t){var e=ut();return Object(I.jsx)(I.Fragment,{children:0!==t.comments.length&&Object(I.jsx)(it.a,{className:e.root,children:t.comments.map((function(e,a){return Object(I.jsxs)("div",{children:[Object(I.jsxs)(rt.a,{children:[Object(I.jsx)(lt.a,{children:Object(I.jsx)(v.a,{children:Object(I.jsx)(jt.a,{})})}),Object(I.jsx)(st.a,{id:"comment-special-case",primary:e.commenterName,secondary:e.body})]}),0!==t.comments.length&&t.comments.length-1!==a&&Object(I.jsx)(bt.a,{variant:"inset",component:"li"})]},e._id)}))})})},xt=Object(d.a)({root:{},cardAction:{display:"flex",flex:"1 0 auto",flexDirection:"column"},card:{marginTop:"30px"},body:{alignSelf:"end",textAlign:"center"},actions:{display:"flex",justifyContent:"flex-start"},commentField:{backgroundColor:"#b1e1cf",borderTopLeftRadius:"14px",borderTopRightRadius:"14px",paddingTop:"5%",marginTop:"20px"},button:{marginTop:"10px",marginBottom:"10px",padding:"8px",right:"-80%",left:"auto"}}),pt=function(t){var e=xt(),a=Object(P.g)().id,c=R(),o=Object(n.useState)(!1),i=Object(r.a)(o,2),s=i[0],d=i[1],j=Object(n.useState)(),b=Object(r.a)(j,2),u=b[0],h=b[1];Object(n.useEffect)((function(){l.a.get("".concat("http://localhost:5000","/post/").concat(a)).then((function(t){d(t.data)})).catch((function(t){console.log(t)}))}),[]);return Object(I.jsx)(z.a,{className:e.card,maxWidth:"sm",children:s&&Object(I.jsxs)("div",{children:[Object(I.jsx)(_,{post:s}),c&&Object(I.jsxs)(z.a,{className:e.commentField,maxWidth:"sm",children:[Object(I.jsx)(U.a,{label:"Type Here",variant:"filled",multiline:!0,rows:"3",rowsMax:"3",size:"medium",fullWidth:!0,onChange:function(t){h(t.target.value)}}),Object(I.jsx)(p.a,{variant:"contained",size:"small",color:"primary",className:e.button,onClick:function(){var t;t=a,l.a.post("".concat("http://localhost:5000","/post/add-comment"),{postId:t,commentBody:u},{withCredentials:!0}).then((function(t){var e=s;e.comments.unshift({body:u,commenterName:s.user.name,_id:Math.random().toString()}),d(!1),d(e)})).catch((function(t){console.log(t)}))},children:"Comment"})]}),Object(I.jsx)(ht,{comments:s.comments})]})})},mt=Object(d.a)((function(t){return{text:{},container:{background:"linear-gradient(90deg, rgba(220,215,240,1) 0%, rgba(201,229,245,1) 66%)",borderRadius:"10px",marginTop:"20px",padding:"20px"}}})),Ot=function(){var t=mt(),e=M(),a=R();return Object(n.useEffect)((function(){l.a.get("http://localhost:5000/signout",{withCredentials:!0}).then((function(t){return 200===t.status&&e()})).catch((function(t){return console.error(t)}))}),[]),Object(I.jsxs)(z.a,{maxWidth:"sm",className:t.container,children:[a||Object(I.jsx)(P.a,{to:"/"}),Object(I.jsx)(m.a,{className:t.text,color:"textPrimary",align:"center",variant:"h3",children:"You will be redirected back to the main page"})]})},gt=c.a.memo((function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(n.useEffect)((function(){l.a.get("http://localhost:5000/user",{withCredentials:!0}).then((function(t){console.log(t),c(t.data.userInfo)})).catch((function(t){return console.log(t)}))}),[]),Object(I.jsxs)("div",{children:[a&&Object(I.jsx)(P.a,{to:"/user/".concat(a._id)})," "]})})),ft=a(215),vt=a(216),yt=a(99),St=a.n(yt),wt=a(213),Ct=a(100),Nt=a(98),Tt=a.n(Nt),kt=a(96),It=a(5),Bt=a(97),Et=a.n(Bt),Rt=Object(It.a)({paper:{margin:"0px",padding:"0px",border:"1px solid #d3d4d5",height:"300px"}})((function(t){return Object(I.jsx)(Ct.a,Object(kt.a)({elevation:5,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},t))})),Mt=Object(It.a)((function(t){return{root:{"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:"blue",margin:"0px",padding:"0px"}}}}))(wt.a);function Wt(t){var e=t.desktop,a=c.a.useState(null),n=Object(r.a)(a,2),o=n[0],i=n[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)(y.a,{id:"create-new-post","aria-controls":"customized-menu","aria-haspopup":"true",onClick:function(t){i(t.currentTarget)},children:[e&&"New Post",Object(I.jsx)(Et.a,{})]}),Object(I.jsx)(Rt,{id:"customized-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){i(null)},children:Object(I.jsx)(Mt,{children:Object(I.jsx)(ot,{})})})]})}var Pt=a(214),Dt=Object(d.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},appBar:{backgroundColor:"#283747"},websiteIcon:{position:"absolute",left:"43%",right:"auto",color:"white",top:0},userButtons:{marginRight:"0",marginLeft:"auto"},itemText:{textDecoration:"none",color:"white",marginRight:"0px",marginLeft:"auto"},createPost:{position:"absolute",left:"0%"}}}));function _t(){var t=Object(Pt.a)("(min-width:600px)"),e=Dt(),a=R();M();var n=c.a.useState(null),o=Object(r.a)(n,2),i=o[0],s=o[1],l=Boolean(i),d=function(){s(null)};return Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)(ft.a,{className:e.appBar,position:"static",children:Object(I.jsxs)(vt.a,{children:[a&&Object(I.jsx)(Wt,{desktop:t}),Object(I.jsx)(j.b,{id:"link-main-page",to:"/",children:Object(I.jsxs)(y.a,{className:e.websiteIcon,"aria-label":"button to feed",color:"inherit",children:[Object(I.jsx)(Tt.a,{})," ",t&&"Main Page"]})}),a?Object(I.jsxs)("div",{className:e.userButtons,children:[Object(I.jsx)(y.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){s(t.currentTarget)},color:"inherit",children:Object(I.jsx)(St.a,{})}),Object(I.jsxs)(Ct.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:d,children:[Object(I.jsx)(j.b,{to:"/profile",children:Object(I.jsx)(wt.a,{onClick:d,children:"Profile"})}),Object(I.jsx)(wt.a,{onClick:d,children:"My account"}),Object(I.jsx)(j.b,{to:"/signout",children:Object(I.jsx)(wt.a,{onClick:d,children:"Sign Out"})})]})]}):Object(I.jsx)(j.b,{className:e.itemText,to:"/signin",children:Object(I.jsx)(m.a,{variant:"h6",children:"Sign In or Sign Up"})})]})})})}var zt=function(){return Object(I.jsx)(z.a,{align:"center",children:Object(I.jsx)(m.a,{variant:"h2",children:"404 - Not found"})})},At=a(217),Ft=Object(d.a)((function(t){var e=t.palette;return{card:{borderRadius:12,minWidth:256,maxWidth:400,textAlign:"center",marginTop:"19px",marginLeft:"auto",marginRight:"auto"},avatar:{width:60,height:60,margin:"auto"},heading:{fontSize:18,fontWeight:"bold",letterSpacing:"0.5px",marginTop:8,marginBottom:0},subheader:{fontSize:14,color:e.grey[500],marginBottom:"0.875em"},statLabel:{fontSize:12,color:e.grey[500],fontWeight:500,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',margin:0},statValue:{fontSize:20,fontWeight:"bold",marginBottom:4,letterSpacing:"1px"}}})),Lt=function(t){var e=Ft(),a=t.userInfo.userInfo;return console.log(a),Object(I.jsxs)(b.a,{className:e.card,children:[Object(I.jsxs)(x.a,{children:[Object(I.jsx)(v.a,{className:e.avatar,src:"https://i.pravatar.cc/300"}),Object(I.jsx)("h3",{className:e.heading,children:a?a.name:"loading..."})]}),Object(I.jsx)(bt.a,{light:!0}),Object(I.jsxs)(At.a,{display:"flex",children:[Object(I.jsxs)(At.a,{p:2,flex:"auto",className:e.statBox,children:[Object(I.jsx)("p",{className:e.statLabel,children:"Followers"}),Object(I.jsx)("p",{className:e.statValue,children:a?a.name:"loading..."})]}),Object(I.jsxs)(At.a,{p:2,flex:"auto",className:e.statBox,children:[Object(I.jsx)("p",{className:e.statLabel,children:"Following"}),Object(I.jsx)("p",{className:e.statValue,children:"12"})]})]})]})},Ut=Object(d.a)({commentField:{position:"sticky",bottom:"0px",height:"80px"},gridItem:{},container:{marginTop:"20px"}}),Ht=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),a=e[0],c=e[1],o=Object(P.g)().user,i=Ut();return Object(n.useEffect)((function(){l.a.get("".concat("http://localhost:5000","/user/").concat(o),{withCredentials:!0}).then((function(t){c(t.data)})).catch((function(t){return console.log(t)}))}),[]),Object(I.jsxs)(z.a,{className:i.container,maxWidth:"sm",children:[Object(I.jsx)(Lt,{userInfo:a}),Object(I.jsx)(A.a,{container:!0,direction:"row",justify:"center",spacing:1,children:a&&a.userInfo.posts.map((function(t,e){return Object(I.jsx)(A.a,{item:!0,xs:12,children:Object(I.jsx)(_,{post:t})},"profilePost ".concat(e))}))})]})};var Vt=function(){return Object(I.jsx)(W,{children:Object(I.jsx)(j.a,{children:Object(I.jsxs)("div",{children:[Object(I.jsx)(_t,{}),Object(I.jsxs)(P.d,{children:[Object(I.jsx)(P.b,{exact:!0,path:"/",children:Object(I.jsx)(L,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/signin",children:Object(I.jsx)(nt,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/signout",children:Object(I.jsx)(Ot,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/posts/:id",children:Object(I.jsx)(pt,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/create-post",children:Object(I.jsx)(ot,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/profile",children:Object(I.jsx)(gt,{})}),Object(I.jsx)(P.b,{exact:!0,path:"/user/:user",children:Object(I.jsx)(Ht,{})}),Object(I.jsx)(P.b,{path:"/",children:Object(I.jsx)(zt,{})})]})]})})})};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Vt,{})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.5f6393ad.chunk.js.map