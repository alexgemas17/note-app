(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),u=a(14),i=a(4),l=a(22),s=a.n(l);a(68),a(72);s.a.initializeApp({apiKey:"AIzaSyBN5qZtg_A2z7nV5Cm4uvpbf9M8gaO0yzE",authDomain:"react-app-curso-32084.firebaseapp.com",databaseURL:"https://react-app-curso-32084.firebaseio.com",projectId:"react-app-curso-32084",storageBucket:"react-app-curso-32084.appspot.com",messagingSenderId:"502524986375",appId:"1:502524986375:web:e604c2f62e541653c296a2"});var m=s.a.firestore(),d=new s.a.auth.GoogleAuthProvider,p=a(15),f=a(6),b=a(2),h=a(5),v=a.n(h),E=a(8),g=function(){var e=Object(E.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(b.a)({id:e.id},e.data()))})),console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_="[Auth] login",j="[Auth] logout",y="[UI] Set error",O="[UI] Remove error",N="[UI] Start loading",w="[UI] Finish loading",x="[Notes] New note",k="[Notes] Set active note",C="[Notes] Load notes",S="[Notes] Updated note",I="[Notes] Delete note",A="[Notes] Logout cleaning",P=a(16),D=a.n(P),R=function(){var e=Object(E.a)(v.a.mark((function e(t){var a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfnxgcwex/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfnxgcwex/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e,t){return{type:k,payload:Object(b.a)({id:e},t)}},U=function(e,t){return{type:x,payload:Object(b.a)({id:e},t)}},q=function(e){return{type:C,payload:e}},z=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(b.a)({},e)).id,t.next=6,m.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(T(e.id,e)),D.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},T=function(e,t){return{type:S,payload:{id:e,note:Object(b.a)({idNote:e},t)}}},F=function(e){return{type:I,payload:e}},W=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null," 28 de agosto de 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,D.a.fire({title:"Uploading...",text:"Please await",allowOutsideClick:!1,willOpen:function(){D.a.showLoading()}}),t.next=4,R(e);case 4:c=t.sent,r.url=c,a(z(r)),D.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(z(t))}},"Save")))},B=a(28),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(b.a)(Object(b.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,i,o]},J=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=G(t),c=Object(u.a)(a,3),o=c[0],l=c[1],s=c[2],d=o.title,p=o.body,f=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==f.current&&(s(t),f.current=t.id)}),[t,s]),Object(n.useEffect)((function(){e(L(o.id,Object(b.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(W,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Title",className:"notes__title-input",autoComplete:"off",name:"title",value:d,onChange:l}),r.a.createElement("textarea",{placeholder:"Write something...",className:"notes__textarea",name:"body",value:p,onChange:l}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"backgroud"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){var t;e((t=f.current,function(){var e=Object(E.a)(v.a.mark((function e(a,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.uid,e.next=3,m.doc("".concat(r,"/journal/notes/").concat(t)).delete();case 3:a(F(t));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},"Delete"))},M=function(){return{type:N,payload:null}},V=function(){return{type:w,payload:null}},X=function(e,t){return{type:_,payload:{uid:e,displayName:t}}},K=function(){return{type:j}},Z=a(56),H=a.n(Z),Q=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=H()(a),l=Object(i.b)();return r.a.createElement("div",{className:"journal__entry pointer  animate__animated animate__fadeIn animate__faster",onClick:function(){l(L(t,{title:n,body:c,url:o,date:a}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"}," ","".concat(n.substring(0,12),"...")," "),r.a.createElement("p",{className:"journal__entry-content"}," ","".concat(c.substring(0,22),"...")," ")),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null," ",u.format("dddd")," "),r.a.createElement("h4",null," ",u.format("Do")," ")))},Y=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(Q,Object.assign({key:e.id},e))})))},$=function(){var e=Object(i.c)((function(e){return e.auth})).name,t=Object(i.b)();return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",e," ")),r.a.createElement("button",{className:"btn",onClick:function(){t(function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.auth().signOut();case 2:t(K()),t({type:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){t(function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,m.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(L(c.id,r)),t(U(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New enter")),r.a.createElement(Y,null))},ee=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},te=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement($,null),r.a.createElement("main",null,e?r.a.createElement(J,null):r.a.createElement(ee,null)))},ae=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=G({email:"alex@correo.com",password:"1234567"}),n=Object(u.a)(a,2),c=n[0],o=n[1],l=c.email,m=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"}," Login "),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){a(M()),s.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(X(t.uid,t.displayName)),a(V())})).catch((function(e){console.log(e),a(V()),D.a.fire("error",e.message,"error")}))}}(l,m))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:l,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:m,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null," Login with: "),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){s.a.auth().signInWithPopup(d).then((function(t){var a=t.user;e(X(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(p.b,{to:"/auth/register",className:"link"},"Create new account")))},ne=a(57),re=a.n(ne),ce=function(e){return{type:y,payload:e}},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,a=G({userName:"Alex",userEmail:"alex@correo.com",userPassword:"1234567",userPasswordConfirm:"1234567"}),n=Object(u.a)(a,2),c=n[0],o=n[1],l=c.userName,m=c.userEmail,d=c.userPassword,f=c.userPasswordConfirm,b=function(){return 0===l.trim().length?(console.log("Invalid name"),!1):re.a.isEmail(m)?d.length<5?(e(ce("Invalid password: the password is too short")),!1):d!==f?(e(ce("Passwords aren\xb4t equal")),!1):(e({type:O}),!0):(e(ce("Invalid email")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"}," Register "),r.a.createElement("form",{onSubmit:function(t){var a,n,r;t.preventDefault(),b()&&e((a=l,n=m,r=d,function(e){s.a.auth().createUserWithEmailAndPassword(n,r).then(function(){var t=Object(E.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.user,t.next=3,r.updateProfile({displayName:a});case 3:e(X(r.uid,r.displayName));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){D.a.fire("error",e.message,"error")}))}))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"userName",className:"auth__input",autoComplete:"off",value:l,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"userEmail",className:"auth__input",autoComplete:"off",value:m,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"userPassword",className:"auth__input",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"userPasswordConfirm",className:"auth__input",value:f,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(p.b,{to:"/auth/login",className:"link"},"Alredy registered?")))},ue=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/auth/login",component:ae}),r.a.createElement(f.b,{exact:!0,path:"/auth/register",component:oe}),r.a.createElement(f.a,{to:"auth/login"}))))},ie=a(29),le=a(11),se=a.n(le),me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(f.a,{to:"/"}):r.a.createElement(a,e)}}))};me.prototype={isAuthenticated:se.a.bool.isRequired,component:se.a.func.isRequired};var de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(f.a,{to:"/auth/login"})}}))};de.prototype={isAuthenticated:se.a.bool.isRequired,component:se.a.func.isRequired};var pe=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("p",null," Espere... "))},fe=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),m=Object(u.a)(l,2),d=m[0],b=m[1];return Object(n.useEffect)((function(){s.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(X(t.uid,t.displayName)),b(!0),e((a=t.uid,function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a);case 2:n=e.sent,t(q(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):b(!1),o(!1)}))}),[e,o]),c?r.a.createElement(pe,null):r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(me,{path:"/auth",isAuthenticated:d,component:ue}),r.a.createElement(de,{exact:!0,path:"/",isAuthenticated:d,component:te}),r.a.createElement(f.a,{to:"auth/login"}))))},be=a(17),he=a(58),ve=a(39),Ee={notes:[],active:null},ge={loading:!1,msgError:null},_e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,je=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{uid:t.payload.uid,name:t.payload.displayName};case j:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case O:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case N:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case x:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(ve.a)(e.notes))});case C:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(ve.a)(t.payload)});case S:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case I:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case A:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:[]});default:return e}}}),ye=Object(be.e)(je,_e(Object(be.a)(he.a))),Oe=function(){return r.a.createElement(i.a,{store:ye},r.a.createElement(fe,null))};a(152);o.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)}},[[59,1,2]]]);
//# sourceMappingURL=main.b90008b7.chunk.js.map