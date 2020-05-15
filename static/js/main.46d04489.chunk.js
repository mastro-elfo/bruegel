(this.webpackJsonpbruegel=this.webpackJsonpbruegel||[]).push([[0],{133:function(e,t,n){e.exports=n(155)},138:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(138),n(96)),i=n(97),u=n(118),s=n(120),m=n(186),E=n(187),f=n(188),b=n(189),d=n(37),g=n(101),v=n.n(g),h=n(60),p=Object(h.a)(d.a)({flexGrow:1}),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){console.error("Console Error",e,t,this.props)}},{key:"render",value:function(){var e=this.state.error;return e?r.a.createElement(a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement(p,{variant:"h6"},"An error occurred"),r.a.createElement(f.a,{color:"inherit",title:"Refresh",onClick:window.location.reload},r.a.createElement(v.a,null)))),r.a.createElement(E.a,null),r.a.createElement(b.a,null,r.a.createElement(d.a,{variant:"h3",gutterBottom:!0},e.message),r.a.createElement(d.a,{component:"ul"},e.stack.split("\n").map((function(e,t){return r.a.createElement(d.a,{key:t,component:"li",variant:"body2",gutterBottom:!0},e)}))))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),n}(a.Component),j=n(43),y=n(190),k=n(102),w=n.n(k),S=n(103),x=n.n(S),C=Object(j.a)({palette:{primary:w.a,secondary:x.a}});function I(e){var t=e.children;return r.a.createElement(y.a,{theme:C},t)}var P=n(44),M=n(107),F=n.n(M),B=Object(a.createRef)(),T=function(e){var t=e.children,n=function(e){return function(){return B.current.closeSnackbar(e)}};return r.a.createElement(P.SnackbarProvider,{ref:B,maxSnack:5,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:5e3,action:function(e){return r.a.createElement(f.a,{color:"inherit",title:"Dismiss",onClick:n(e)},r.a.createElement(F.a,null))}},t)},R=n(42),z=n(36),N=n(119),D=n(52),J=n(15),W=n(108),H=n(91),A=Object(H.a)({print:{"@media screen":{display:"none"}},noPrint:{"@media print":{display:"none"}}});function G(e){var t=e.children,n=A();return r.a.createElement("div",{className:n.print},t)}function V(e){var t=e.children,n=A();return r.a.createElement("div",{className:n.noPrint},t)}var X=n(72),Y=n(191),q=n(106),_=n(192),K=n(109),L=n.n(K),U=Object(H.a)((function(e){return{Fab:{position:"fixed",bottom:e.spacing(1),right:e.spacing(1),zIndex:e.zIndex.modal}}}));function $(e){var t=e.threshold,n=void 0===t?100:t,a=Object(X.a)(e,["threshold"]),c=U(),l=Object(Y.a)({disableHysteresis:!0,threshold:n});return r.a.createElement(q.a,{in:l},r.a.createElement(_.a,Object.assign({color:"secondary",size:"small",onClick:function(e){window.scrollTo({top:0,left:0,behavior:"smooth"})},className:c.Fab,title:"Move to Top"},a),r.a.createElement(L.a,null)))}function Q(e){var t=e.content,n=void 0===t?null:t,c=e.drawer,l=void 0===c?null:c,o=e.header,i=void 0===o?null:o,u=e.print,s=void 0===u?null:u,m=e.topFab,E=void 0===m||m;return r.a.createElement(a.Fragment,null,r.a.createElement(V,null,E&&r.a.createElement($,null),!!l&&l,!!i&&i,!!n&&n),r.a.createElement(G,null,!!s&&s))}var Z=n(205),ee=n(193),te=n(110),ne=n.n(te);function ae(e){var t=e.onOpen,n=e.answers,c=e.guesses,l=Object(a.useState)(!1),o=Object(J.a)(l,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){if(c.length>0){u(!0);var e=setTimeout(u,2e3,!1);return function(){return clearTimeout(e)}}}),[c.length]),r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{color:"transparent"},r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"primary",title:"Open",onClick:t},r.a.createElement(ne.a,null)),r.a.createElement(p,{variant:"h6",color:"inherit"}),r.a.createElement(Z.a,{bgcolor:"rgba(255,255,255,0.5)",color:"primary.main",fontSize:"h6.fontSize",borderRadius:"borderRadius",px:.5},r.a.createElement(ee.a,{badgeContent:i?"+1":0,color:"primary"},c.length,"/",n.length)))),r.a.createElement(E.a,null))}function re(e){var t=e.children,n=Object(X.a)(e,["children"]);return r.a.createElement(b.a,null,r.a.createElement(Z.a,Object.assign({pt:1},n),t))}var ce=Object(a.createRef)(),le=function(){var e=Object(a.useState)({x:.5,y:.5}),t=Object(J.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({x:0,y:0}),o=Object(J.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(null),m=Object(J.a)(s,2),E=m[0],f=m[1];return r.a.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",backgroundColor:"#8b6f4f",backgroundImage:"url(/Image.jpg), url(/Image250.jpg)",backgroundPositionX:"".concat(100*n.x,"%"),backgroundPositionY:"".concat(100*n.y,"%"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},onMouseDown:function(e){u(n),f({x:e.clientX,y:e.clientY})},onMouseUp:function(){f(null)},onMouseMove:function(e){E&&c({x:Math.min(1,Math.max(0,i.x-(e.clientX-E.x)/ce.current.clientWidth)),y:Math.min(1,Math.max(0,i.y-(e.clientY-E.y)/ce.current.clientHeight))})},ref:ce})},oe=n(13),ie=n(194),ue=n(204),se=Object(H.a)((function(e){return{Input:{backgroundColor:"rgba(255, 255, 255, 0.5)",transition:"background-color 0.25s ease"},InputFocused:{backgroundColor:"rgba(255, 255, 255, 1)"}}}));function me(e){var t=e.onSubmit,n=void 0===t?function(){}:t,c=(e.answers,Object(a.useState)("")),l=Object(J.a)(c,2),o=l[0],i=l[1],u=se(),s=Object(oe.a)(),m=function(){n(o),i("")};return r.a.createElement(Z.a,{position:"fixed",bottom:s.spacing(1),left:0,right:0,px:1,mx:"auto"},r.a.createElement(ie.a,{container:!0,justify:"center"},r.a.createElement(ie.a,{item:!0,xs:12,sm:9,md:6,lg:4,xl:3},r.a.createElement(ue.a,{fullWidth:!0,label:"Proverbio",variant:"outlined",value:o,onChange:function(e){var t=e.target.value;return i(t)},onKeyPress:function(e){"Enter"===e.key&&m()},InputProps:{classes:{root:u.Input,focused:u.InputFocused}}}))))}function Ee(e){var t=e.onSubmit,n=void 0===t?function(){}:t,a=e.answers;return r.a.createElement(re,null,r.a.createElement(le,null),r.a.createElement(me,{onSubmit:n,answers:a}))}var fe=n(207),be=n(195),de=n(196),ge=n(197),ve=n(198),he=n(199),pe=n(112),Oe=n.n(pe),je=n(70),ye=n.n(je);function ke(e){var t=e.open,n=e.onClose,a=e.onOpen,c=e.answers,l=e.guesses,o=e.onReset,i=Object(z.g)().push;return r.a.createElement(fe.a,{open:t,onClose:n,onOpen:a},r.a.createElement(be.a,null,r.a.createElement(de.a,{button:!0,onClick:function(){return i("/proverbs")}},r.a.createElement(ge.a,null,r.a.createElement(ye.a,null)),r.a.createElement(ve.a,{primary:"".concat(l.length,"/").concat(c.length),secondary:"Risposte"}),r.a.createElement(he.a,null,r.a.createElement(f.a,{edge:"end",title:"Cancella progressi",onClick:o},r.a.createElement(Oe.a,null)))),r.a.createElement(de.a,null,r.a.createElement(ge.a,null,r.a.createElement("span",null,"B")),r.a.createElement(ve.a,{primary:"Bruegel",secondary:"v0.1.0"}))))}var we=localStorage;function Se(){try{return JSON.parse(we.getItem("guesses"))||[]}catch(e){return console.error(e),[]}}function xe(e){we.setItem("guesses",JSON.stringify(e))}var Ce=sessionStorage;function Ie(){var e=Ce.getItem("answers");if(null===e)return fetch("/answers.json").then((function(e){return e.json()})).then((function(e){return Ce.setItem("answers",JSON.stringify(e)),e}));try{return Promise.resolve(JSON.parse(e))}catch(t){return Promise.reject(t)}}var Pe={anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:2e3};function Me(){var e=Object(a.useState)(!1),t=Object(J.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(J.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)([]),m=Object(J.a)(s,2),E=m[0],f=m[1],b=Object(P.useSnackbar)().enqueueSnackbar;Object(a.useEffect)((function(){Ie().then((function(e){return u(e)})).catch((function(e){console.error(e),b(e.message,{variant:"error"})}))}),[b]),Object(a.useEffect)((function(){f(Se())}),[]),Object(a.useEffect)((function(){xe(E)}),[E,E.length]);return r.a.createElement(Q,{header:r.a.createElement(ae,{onOpen:function(){return c(!0)},answers:i,guesses:E}),content:r.a.createElement(Ee,{answers:i,guesses:E,onSubmit:function(e){var t=Object(W.deburr)(e).toLowerCase().replace(/[^\w]+/g," ").replace(/\s\s+/g," ").split(" "),n=i.findIndex((function(e){return-1!==e.match.findIndex((function(e){return e.map((function(e){return t.indexOf(e)})).every((function(e,t,n){return t>0?e>n[t-1]:-1!==n[t]}))}))}));-1!==n?E.includes(i[n].id)?(b("Gi\xe0 trovato",Object(D.a)({variant:"info"},Pe)),console.log(i[n].id,E)):(b("Corretto!",Object(D.a)({variant:"success"},Pe)),f([].concat(Object(N.a)(E),[i[n].id]))):b("Sbagliato",Object(D.a)({variant:"error"},Pe))}}),drawer:r.a.createElement(ke,{open:n,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},answers:i,guesses:E,onReset:function(){f([]),b("Tutti i progressi sono stati cancellati",Object(D.a)({variant:"info"},Pe))}})})}var Fe=n(113),Be=n.n(Fe),Te=n(114),Re=n.n(Te),ze=n(115),Ne=n.n(ze);function De(e){var t=e.answers,n=e.loading,c=e.visible,l=void 0!==c&&c,o=e.onVisibileToggle,i=void 0===o?function(){}:o,u=Object(z.g)().goBack;return r.a.createElement(a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"inherit",title:"Go Back",onClick:function(){return u()}},r.a.createElement(Be.a,null)),r.a.createElement(p,{variant:"h6",color:"inherit"},n?"\u2026":t.length," Proverbi"),r.a.createElement(f.a,{color:"inherit",title:l?"Nascondi":"Mostra",onClick:i},l?r.a.createElement(Re.a,null):r.a.createElement(Ne.a,null)))),r.a.createElement(E.a,null))}var Je=n(200),We=n(201),He=n(202),Ae=n(58),Ge=n(203),Ve=n(116),Xe=n.n(Ve),Ye=n(79),qe=n.n(Ye),_e=n(117),Ke=n.n(_e);function Le(e){var t=e.answers,n=e.guesses,c=e.loading,l=e.visible,o=void 0!==l&&l,i=Object(a.useState)(10),u=Object(J.a)(i,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){if(s<t.length){var e=setTimeout(m,50,Math.min(t.length,s+10));return function(){return clearTimeout(e)}}}),[s,t.length]),r.a.createElement(re,null,r.a.createElement(d.a,{gutterBottom:!0},"Tutti i testi sono tratti dalla pagina Wikipedia sul dipinto:"," ",r.a.createElement("a",{href:"https://it.wikipedia.org/wiki/Proverbi_fiamminghi",title:"Apri Wikipedia",target:"_blank",rel:"noopener noreferrer"},"Proverbi Fiamminghi (Pieter Bruegel il Vecchio)")),r.a.createElement(ie.a,{container:!0,alignItems:"center",justify:"space-evenly",spacing:1},c&&Array(20).fill(!0).map((function(e,t){return r.a.createElement($e,{key:t})})),t.slice(0,s).map((function(e){var t=n.includes(e.id);return r.a.createElement(Ue,{key:e.id,answer:e,guessed:t,visible:o||t})}))))}var Ue=function(e){var t=e.answer,n=t.id,c=t.proverb,l=t.meaning,o=t.italian,i=e.guessed,u=e.visible,s=Object(a.useState)(!1),m=Object(J.a)(s,2),E=m[0],b=m[1];return r.a.createElement(ie.a,{item:!0,xs:12,sm:9,md:6},r.a.createElement(Je.a,{variant:"outlined"},r.a.createElement(We.a,{action:!i&&!!l&&r.a.createElement(f.a,{title:"Ottieni un suggerimento",color:"inherit",onClick:function(){return b(!E)}},r.a.createElement(qe.a,null)),avatar:i?r.a.createElement(ye.a,{color:"primary"}):r.a.createElement(Xe.a,{style:{color:Ke.a[500]}}),title:"#".concat(n)}),r.a.createElement(He.a,null,r.a.createElement(Ae.a,{in:u},r.a.createElement(d.a,{variant:"h6"},c),r.a.createElement(d.a,{color:"textSecondary"},o)),r.a.createElement(Ae.a,{in:E||i},r.a.createElement(be.a,null,r.a.createElement(de.a,null,r.a.createElement(ge.a,null,r.a.createElement(qe.a,null)),r.a.createElement(ve.a,{primary:l}))))))," ")},$e=function(){return r.a.createElement(ie.a,{item:!0,xs:12,sm:9,md:6},r.a.createElement(Je.a,{variant:"outlined"},r.a.createElement(We.a,{avatar:r.a.createElement(Ge.a,{variant:"circle",width:24,height:24}),title:r.a.createElement(Ge.a,{variant:"text"})}),r.a.createElement(He.a,null,r.a.createElement(d.a,{variant:"h6"},r.a.createElement(Ge.a,{variant:"text"})),r.a.createElement(d.a,{color:"textSecondary"},r.a.createElement(Ge.a,{variant:"text"})),r.a.createElement(be.a,null,r.a.createElement(de.a,null,r.a.createElement(ge.a,null,r.a.createElement(Ge.a,{variant:"circle",width:24,height:24})),r.a.createElement(ve.a,{primary:r.a.createElement(Ge.a,{variant:"text"})}))))))};function Qe(){var e=Object(a.useState)([]),t=Object(J.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(J.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(!1),m=Object(J.a)(s,2),E=m[0],f=m[1],b=Object(a.useState)(!0),d=Object(J.a)(b,2),g=d[0],v=d[1],h=Object(P.useSnackbar)().enqueueSnackbar;Object(a.useEffect)((function(){Ie().then((function(e){return c(e)})).catch((function(e){console.error(e),h(e.message,{variant:"error"})})).then((function(){return v(!1)}))}),[h]),Object(a.useEffect)((function(){u(Se())}),[]);return r.a.createElement(Q,{header:r.a.createElement(De,{answers:n,guesses:i,loading:g,visible:E,onVisibileToggle:function(){return f(!E)}}),content:r.a.createElement(Le,{answers:n,guesses:i,loading:g,visible:E})})}var Ze=[{path:"/home",component:function(){return r.a.createElement(z.d,null,r.a.createElement(z.b,{path:"/home",component:Me}))}},{path:"/proverbs",component:function(){return r.a.createElement(z.d,null,r.a.createElement(z.b,{path:"/proverbs",component:Qe}))}}],et=function(e){return r.a.createElement(R.a,{basename:"/bruegel"},r.a.createElement(z.d,null,Ze.map((function(e,t){return r.a.createElement(z.b,Object.assign({key:t},e))})),r.a.createElement(z.a,{to:"/home"})))};function tt(){return r.a.createElement(I,null,r.a.createElement(O,null,r.a.createElement(T,null,r.a.createElement(et,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.46d04489.chunk.js.map