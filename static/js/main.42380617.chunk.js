(this.webpackJsonpwavup=this.webpackJsonpwavup||[]).push([[0],{100:function(e,n){},116:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),c=t.n(i),o=t(19),l=(t(58),t(21)),u=t(23),s=t(12),f=t(5),m="",d={getChannels:"http://localhost/getChannels/"},b=["chat","clock","playingTime"],h=Object(r.createContext)(),v=function(e){var n=e.children,t=[{id:"myList",name:"#MY SOUND",title:"MY",tags:["\ub098\ub9cc\uc758 \ubaa9\ub85d","\uc88b\uc544\uc694"],img:"/images/mysound.png",playList:localStorage.myList&&JSON.parse(localStorage.myList)||[],initialMessages:["\ub0b4\uac00 \uc88b\uc544\ud558\ub294 \uc18c\ub9ac\ub4e4"],category:["favorite"]}],i=Object(r.useReducer)((function(e,n){switch(n.type){case"ADD":return e.concat(n.channels);case"SET_PLAYLIST":return e.find((function(e){return e.id===n.channelId})).playList=n.playList,e;default:return e}}),t),c=Object(f.a)(i,2),o=c[0],m=c[1],d={};b.forEach((function(e){try{localStorage[e]?d[e]=JSON.parse(localStorage[e]).use:d[e]=!0}catch(n){}}));var v={currentVideo:0,myList:localStorage.myList&&JSON.parse(localStorage.myList)||[]},p=Object(r.useReducer)((function(e,n){switch(n.type){case"TOGGLE":try{var t=JSON.parse(localStorage[n.name]||"{}");localStorage.setItem(n.name,JSON.stringify(Object(s.a)({},t,{use:!e[n.name]})))}catch(r){}return Object(s.a)({},e,Object(u.a)({},n.name,!e[n.name]));default:return e}}),d),g=Object(f.a)(p,2),y=g[0],E=g[1],O=Object(r.useReducer)((function(e,n){switch(n.type){case"SETPLAYER":return Object(s.a)({},e,{player:n.player});case"NEXT":return Object(s.a)({},e,{currentVideo:(e.currentVideo+1+n.playList.length)%n.playList.length});case"PREV":return Object(s.a)({},e,{currentVideo:(e.currentVideo-1+n.playList.length)%n.playList.length});case"SELECT":return Object(s.a)({},e,{currentVideo:n.currentVideo});case"CLEAR":return Object(s.a)({},e,{player:null,currentVideo:0});case"ADD_MYLIST":if(e.myList.some((function(e){return e.id===n.video.id})))return e;var t=[].concat(Object(l.a)(e.myList),[n.video]);return localStorage.setItem("myList",JSON.stringify(t)),m({type:"SET_PLAYLIST",channelId:"myList",playList:t}),Object(s.a)({},e,{myList:t});case"REMOVE_MYLIST":if(!e.myList.some((function(e){return e.id===n.video.id})))return e;var r=e.myList.filter((function(e){return e.id!==n.video.id}));return localStorage.setItem("myList",JSON.stringify(r)),m({type:"SET_PLAYLIST",channelId:"myList",playList:r}),Object(s.a)({},e,{myList:r});default:return e}}),v),j=Object(f.a)(O,2),w=j[0],x=j[1],k=Object(r.useReducer)((function(e,n){switch(n.type){case"SET":var t=o.find((function(e){return e.id===n.id}));return t&&(t.playList=t.playList.map((function(e){return[Math.random(),e]})).sort((function(e,n){return e[0]-n[0]})).map((function(e){return e[1]}))),t;case"CLEAR":return null;default:return e}}),null),S=Object(f.a)(k,2),L=S[0],C=S[1],N=Object(r.useReducer)((function(e,n){switch(n.type){case"SHOW":return Object(s.a)({},e,{toggleCategory:!0});case"HIDE":return Object(s.a)({},e,{toggleCategory:!1});case"TOGGLE":return Object(s.a)({},e,{toggleCategory:!e.toggleCategory});default:return e}}),{toggleCategory:!1}),T=Object(f.a)(N,2),A=T[0],z=T[1],I={widget:y,video:w,channels:o,channel:L,category:A,dispatch:{widget:E,video:x,channels:m,channel:C,category:z}};return a.a.createElement(h.Provider,{value:I},n)},p=(h.Consumer,h),g=t(16),y=t(1),E=t(2);function O(){var e=Object(y.a)(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return O=function(){return e},e}var j={desktop:1024,tablet:768,mobile:480},w=Object.keys(j).reduce((function(e,n){return e[n]=function(){return Object(E.a)(O(),j[n]/16,E.a.apply(void 0,arguments))},e}),{});function x(){var e=Object(y.a)(["align-items: flex-start"]);return x=function(){return e},e}function k(){var e=Object(y.a)(["\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  ","\n"]);return k=function(){return e},e}var S=E.b.div(k(),w.mobile(x()));var L=function(e){var n=e.children;return a.a.createElement(S,null,n)};function C(){var e=Object(y.a)(["font-size: 0.7rem;"]);return C=function(){return e},e}function N(){var e=Object(y.a)(["\n  margin-left: 5px;\n\n  ","\n"]);return N=function(){return e},e}function T(){var e=Object(y.a)(["font-size: 1rem;"]);return T=function(){return e},e}function A(){var e=Object(y.a)(["\n  color: #22b8cf;\n\n  ","\n"]);return A=function(){return e},e}function z(){var e=Object(y.a)(["margin-left: 10px;"]);return z=function(){return e},e}function I(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 15px;\n  cursor: pointer;\n\n  ","\n"]);return I=function(){return e},e}var R=E.b.div(I(),w.mobile(z())),B=E.b.i(A(),w.mobile(T())),V=E.b.div(N(),w.mobile(C())),M=function(e){var n=e.children,t=e.check,r=e.onClick;return a.a.createElement(R,{onClick:function(e){return r&&r(e)}},a.a.createElement(B,{className:"material-icons"},t?"check_box":"check_box_outline_blank"),a.a.createElement(V,null,n))},_=function(e){var n=e.children,t=Object(r.useContext)(p),i=t.widget,c=t.dispatch,o=i[n];return a.a.createElement(M,{check:o,onClick:function(e){c.widget({type:"TOGGLE",name:n})}},n)};function Y(){var e=Object(y.a)(["font-size: 0.8rem;"]);return Y=function(){return e},e}function D(){var e=Object(y.a)(["\n  font-size: 1.3rem;\n  font-weight: 600;\n  cursor: pointer;\n\n  ","\n"]);return D=function(){return e},e}function F(){var e=Object(y.a)(["\n  display: flex;\n"]);return F=function(){return e},e}function P(){var e=Object(y.a)(["font-size: 1rem;"]);return P=function(){return e},e}function W(){var e=Object(y.a)(["\n  font-weight: 800;\n  font-size: 1.7rem;\n\n  align-self: flex-start;\n  cursor: pointer;\n\n  ","\n"]);return W=function(){return e},e}function J(){var e=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return J=function(){return e},e}function X(){var e=Object(y.a)(["\n  flex-direction: column-reverse;\n  "]);return X=function(){return e},e}function H(){var e=Object(y.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Baloo Bhai", cursive;\n  padding: 5px 5px;\n\n  ',"\n"]);return H=function(){return e},e}var q=E.b.div(H(),w.mobile(X())),G=E.b.div(J()),U=E.b.div(W(),w.mobile(P())),K=E.b.div(F()),$=E.b.i(D(),w.mobile(Y()));var Q=Object(g.e)((function(e){var n=e.history,t=Object(r.useContext)(p).channel;return a.a.createElement(q,null,a.a.createElement(G,null,a.a.createElement($,{className:"material-icons",onClick:function(){return n.push(m)}},"arrow_back_ios"),a.a.createElement(K,null,b.map((function(e,n){return a.a.createElement(_,{key:n},e)})))),a.a.createElement(U,{className:"handle",onClick:function(){return n.push("".concat(m,"/").concat(t.id))}},t.title," ",a.a.createElement("span",{className:"subTitle"},"SOUND")))}));function Z(){var e=Object(y.a)(["\n    background: #fff;\n    width: 100%;\n    height: 100px;\n"]);return Z=function(){return e},e}E.b.div(Z());function ee(){var e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n"]);return ee=function(){return e},e}function ne(){var e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n"]);return ne=function(){return e},e}var te=E.b.div(ne()),re=E.b.div(ee()),ae=function(e){var n=e.children,t=Object(r.useContext)(p),i=t.video,c=t.channel,o=t.dispatch,l=Object(r.useRef)({player:null,channel:null}),u=function(e){e.target.playVideo(),o.video({type:"SETPLAYER",player:e.target}),l.current.player=e.target};function s(e){o.video({type:"NEXT",playList:c.playList})}function f(e){e.data===window.YT.PlayerState.ENDED&&o.video({type:"NEXT",playList:c.playList})}return Object(r.useEffect)((function(){var e,n;if(c)return l.current.channel=c,new Promise((function(t){(e=document.createElement("script")).src="https://www.youtube.com/iframe_api",(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,n),window.onYouTubeIframeAPIReady=function(){return t(window.YT)}})).then((function(e){new e.Player("player",{videoId:l.current.channel.playList[i.currentVideo].id,playerVars:{fs:0,loop:1},events:{onReady:u,onStateChange:f,onError:s}})})),function(){n.parentNode.removeChild(e),window.YT=null}}),[c]),Object(r.useEffect)((function(){i.player&&i.player.loadVideoById(l.current.channel.playList[i.currentVideo].id)}),[i.player,i.currentVideo]),a.a.createElement(te,{id:"player_wrap"},n,a.a.createElement(re,{id:"player"}))};var ie=function(){var e="object"===typeof window;function n(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var t=Object(r.useState)(n),a=Object(f.a)(t,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){if(!e)return!1;function t(){c(n())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i},ce=t(30),oe=t.n(ce);function le(){var e=Object(y.a)(["\n    font-size: ",";\n  "]);return le=function(){return e},e}function ue(){var e=Object(y.a)(["\n  color: white;\n  font-size: ",";\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.7;\n    transition: all 0.2s linear;\n  }\n\n  ","\n"]);return ue=function(){return e},e}function se(){var e=Object(y.a)(["\n    flex-direction: row;\n    padding: 5px 5px;\n  "]);return se=function(){return e},e}function fe(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: black;\n  padding: 20px 5px;\n\n  ","\n"]);return fe=function(){return e},e}var me=E.b.div(fe(),w.mobile(se())),de=E.b.i(ue(),(function(e){return"".concat(e.font,"px")}),w.mobile(le(),(function(e){return"".concat(5*e.font/4,"px")}))),be=function(){var e=Object(r.useContext)(p),n=e.video,t=e.channel,i=e.dispatch,c=Object(r.useState)(0),o=Object(f.a)(c,2),l=o[0],u=o[1],s=Object(r.useState)(0),m=Object(f.a)(s,2),d=m[0],b=m[1],h=Object(r.useRef)({channel:Object.assign({},t),isPortrait:window.matchMedia("(orientation: portrait)").matches}),v=ie();Object(r.useEffect)((function(){var e=window.matchMedia("(orientation: portrait)").matches;e!==h.current.isPortrait&&(h.current.isPortrait=e,g()&&y());var n=document.getElementById("display");u(.04*n.clientWidth)}),[v]);var g=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement},y=function(e){if(g()){if(document.exitFullscreen)return document.exitFullscreen();if(document.mozCancelFullScreen)return document.mozCancelFullScreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(document.msExitFullscreen)return document.msExitFullscreen()}else{var n=document.getElementById("display");if(n.requestFullscreen)return n.requestFullscreen();if(n.mozRequestFullScreen)return n.mozRequestFullScreen();if(n.webkitRequestFullscreen)return n.webkitRequestFullscreen();if(n.msRequestFullscreen)return n.msRequestFullscreen()}};Object(r.useEffect)((function(){var e=h.current.channel.playList[n.currentVideo].id;b(n.myList.some((function(n){return n.id===e})))}),[n.currentVideo,n.myList]);return a.a.createElement(me,null,a.a.createElement(de,{className:"material-icons",font:l,onClick:function(){i.category({type:"TOGGLE"})},style:{display:g()?"none":"block"},id:"categoryBtn"},"playlist_play"),a.a.createElement(de,{className:"material-icons",font:l,style:{color:d?"#ff5722":""},onClick:function(){d?i.video({type:"REMOVE_MYLIST",video:h.current.channel.playList[n.currentVideo]}):i.video({type:"ADD_MYLIST",video:h.current.channel.playList[n.currentVideo]})}},d?"favorite":"favorite_border"),a.a.createElement(de,{className:"material-icons",font:l,onClick:y,id:"fullscreenBtn"},"fullscreen"),a.a.createElement(de,{className:"material-icons",font:l,onClick:function(){i.video({type:"PREV",playList:h.current.channel.playList})}},"skip_previous"),a.a.createElement(de,{className:"material-icons",font:l,onClick:function(){i.video({type:"NEXT",playList:h.current.channel.playList})}},"skip_next"))};function he(){var e=Object(y.a)(["\n        height: ","%;\n      "]);return he=function(){return e},e}function ve(){var e=Object(y.a)(["\n        width: ","%;\n      "]);return ve=function(){return e},e}function pe(){var e=Object(y.a)(["\n      cursor: auto;\n    "]);return pe=function(){return e},e}function ge(){var e=Object(y.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  opacity: 0.8;\n  cursor: pointer;\n  transform: ",";\n\n  &:hover {\n    opacity: 0.9;\n  }\n\n  ","\n\n    ","\n    ","\n"]);return ge=function(){return e},e}var ye=E.b.div(ge(),(function(e){return"translate(".concat(e.xp,"px, ").concat(e.yp,"px)")}),(function(e){return!e.movable&&Object(E.a)(pe())}),(function(e){return e.width&&Object(E.a)(ve(),e.width)}),(function(e){return e.height&&Object(E.a)(he(),e.height)})),Ee=function(e){var n,t=e.children,i=e.type,c=e.movable,o=e.width,l=e.height,u=e.defaultRatio,s=Object(r.useContext)(p).widget;try{n=JSON.parse(localStorage["".concat(i)])}catch(P){n={}}var m=Object(r.useState)(0),d=Object(f.a)(m,2),b=d[0],h=d[1],v=Object(r.useState)(0),g=Object(f.a)(v,2),y=g[0],E=g[1],O=Object(r.useState)(n.xratio||u&&u.xratio||0),j=Object(f.a)(O,2),w=j[0],x=j[1],k=Object(r.useState)(n.yratio||u&&u.yratio||0),S=Object(f.a)(k,2),L=S[0],C=S[1],N=Object(r.useState)(!1),T=Object(f.a)(N,2),A=T[0],z=T[1],I=Object(r.useState)({clientX:0,xratio:0}),R=Object(f.a)(I,2),B=R[0],V=R[1],M=ie(),_=function(e){z(!0),V({clientX:e.clientX||e.touches[0].clientX,xratio:w,clientY:e.clientY||e.touches[0].clientY,yratio:L})},Y=function(e){if(A){var n=document.getElementById("player_wrap"),t=((e.clientX||e.touches[0].clientX)-B.clientX)/n.clientWidth;x(B.xratio+t),h(n.clientWidth*(B.xratio+t));var r=((e.clientY||e.touches[0].clientY)-B.clientY)/n.clientWidth;C(B.yratio+r),E(n.clientWidth*(B.yratio+r))}},D=function(e){z(!1),n.xratio=w,n.yratio=L;try{localStorage.setItem(i,JSON.stringify(n))}catch(e){}};Object(r.useEffect)((function(){var e=document.getElementById("player_wrap");h(e.clientWidth*w),E(e.clientWidth*L)}),[M]);var F=s[i];return c?a.a.createElement(ye,{movable:!0,width:F?o:0,height:F?l:0,onMouseDown:_,onTouchStart:_,onMouseMove:Y,onTouchMove:Y,onMouseUp:D,onTouchEnd:D,xp:b,yp:y},s[i]?t:null):a.a.createElement(ye,{movable:!1,width:F?o:0,height:F?l:0},s[i]?t:null)},Oe=t(24),je=t.n(Oe),we=t(25),xe=t.n(we),ke=t(49),Se=t.n(ke);function Le(){var e=Object(y.a)(["\n  display: inline-block;\n  background-color: ",";\n  border-radius: 0.3rem;\n  padding: 3px 7px;\n  padding-top: 5px;\n"]);return Le=function(){return e},e}function Ce(){var e=Object(y.a)(['\n  font-family: "Arial";\n  font-size: 0.8rem;\n  word-break: break-all;\n']);return Ce=function(){return e},e}function Ne(){var e=Object(y.a)(["\n  font-size: 0.7rem;\n  color: #9e9e9e;\n  margin-left: 10px;\n  height: 0.9rem;\n  line-height: 0.9rem;\n"]);return Ne=function(){return e},e}function Te(){var e=Object(y.a)(["\n  font-size: 0.8rem;\n  color: #696969;\n  height: 0.9rem;\n  line-height: 0.9rem;\n  font-family: 'Jua', sans-serif;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ae=function(){return e},e}function ze(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: ",";\n\n  & + & {\n    margin-bottom: 5px;\n  }\n"]);return ze=function(){return e},e}function Ie(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  height: 75%;\n  margin-bottom: 3%;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  opacity: 0.9;\n\n  &:hover {\n    opacity: 1;\n  }\n  &::-webkit-scrollbar {\n    display: none !important;\n  }\n"]);return Ie=function(){return e},e}function Re(){var e=Object(y.a)(["\n  background-color: white;\n  display: flex;\n  align-items: center;\n  border-radius: 0.3rem;\n  width: 100%;\n"]);return Re=function(){return e},e}function Be(){var e=Object(y.a)(["\n  margin: 0px 5px;\n  cursor: pointer;\n"]);return Be=function(){return e},e}function Ve(){var e=Object(y.a)(["\n  border: 0.5px solid white;\n  padding: 0.5rem;\n  background-color: ",';\n  border-radius: 0.3rem;\n  color: white;\n  width: 100%;\n  font-family: "Arial";\n  cursor: ',";\n"]);return Ve=function(){return e},e}function Me(){var e=Object(y.a)(["\n  padding-bottom: 10%;\n  padding-left: 5%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"]);return Me=function(){return e},e}var _e=E.b.div(Me()),Ye=E.b.input(Ve(),(function(e){return e.disabled?"gray":"black"}),(function(e){return e.disabled?"not-allowed":"auto"})),De=E.b.i(Be()),Fe=E.b.div(Re()),Pe=E.b.div(Ie()),We=E.b.div(ze(),(function(e){return e.mine?"flex-end":"flex-start"})),Je=E.b.div(Ae()),Xe=E.b.div(Te()),He=E.b.div(Ne()),qe=E.b.div(Ce()),Ge=E.b.div(Le(),(function(e){return e.mine?"#ffeb3b":"white"})),Ue=function(){var e=Object(r.useContext)(p).channel.initialMessages.map((function(e){return{key:xe()(),nickName:"WAVUP",time:new Date,contents:e}})),n=Object(r.useState)(localStorage.nickName),t=Object(f.a)(n,2),i=t[0],c=t[1],o=Object(r.useState)(e),u=Object(f.a)(o,2),s=u[0],m=u[1],d=Object(r.useState)(!1),b=Object(f.a)(d,2),h=b[0],v=b[1],g=Object(r.useRef)({nickName:i,messages:s,connected:h,socket:null}),y=function(e){g.current.nickName=e,c(e)},E=function(e){g.current.messages=e,m(e)},O=function(e){g.current.connected=e,v(e)};Object(r.useEffect)((function(){g.current.socket=window.io&&window.io("https://api.wavup.me")||{on:function(){}},g.current.socket.on("connect",(function(){O(!0),g.current.socket.emit("userConnect");var e=g.current.nickName;e||((e=prompt("Please enter your nickname",""))?localStorage.nickName=e:e="anonymous".concat(Se.a.int(1e3,9999)),y(e))})),g.current.socket.on("newMsg",(function(e){"newMsg"===e.type&&E([{key:xe()(),nickName:e.nick,time:new Date,contents:e.message}].concat(Object(l.a)(g.current.messages.slice(0,99))))})),g.current.socket.on("disconnect",(function(){O(!1)}))}),[]);return a.a.createElement(Ee,{type:"chat",width:"40",height:"100"},a.a.createElement(_e,null,a.a.createElement(Pe,null,s.map((function(e){return a.a.createElement(We,{key:e.key,mine:e.mine},a.a.createElement(Ge,{mine:e.mine},a.a.createElement(Je,null,a.a.createElement(Xe,null,e.nickName),a.a.createElement(He,null,a.a.createElement(je.a,{format:"A hh:mm"},e.time))),a.a.createElement(qe,null,e.contents)))}))),a.a.createElement(Fe,null,a.a.createElement(De,{className:"material-icons",onClick:function(){var e=prompt("Please enter your nickname","");e&&(localStorage.nickName=e,y(e))}},"account_circle"),a.a.createElement(Ye,{placeholder:i,onKeyUp:function(e){"Enter"===e.key&&e.target.value&&(E([{key:xe()(),nickName:i,time:new Date,contents:e.target.value,mine:!0}].concat(Object(l.a)(s.slice(0,99)))),g.current.socket.emit("newMsg",{type:"newMsg",message:e.target.value,nick:i}),e.target.value="")},disabled:!h}))))};function Ke(){var e=Object(y.a)(['\n  color: white;\n  font-family: "Baloo Bhai", cursive;\n  font-size: ',";\n"]);return Ke=function(){return e},e}var $e=E.b.div(Ke(),(function(e){return"".concat(e.font,"px")})),Qe={xratio:.75,yratio:.06},Ze=function(){var e=ie(),n=Object(r.useState)(0),t=Object(f.a)(n,2),i=t[0],c=t[1];return Object(r.useEffect)((function(){var e=document.getElementById("player_wrap");c(.045*e.clientWidth)}),[e]),a.a.createElement(Ee,{type:"clock",movable:!0,defaultRatio:Qe},a.a.createElement($e,{font:i},a.a.createElement(je.a,{interval:6e4,format:"A hh:mm"})))};function en(){var e=Object(y.a)(['\n  color: white;\n  font-family: "Baloo Bhai", cursive;\n  font-size: ',";\n"]);return en=function(){return e},e}var nn=E.b.div(en(),(function(e){return"".concat(e.font,"px")})),tn={xratio:.75,yratio:.12},rn=function(){var e=Object(r.useState)(new Date),n=Object(f.a)(e,1)[0],t=Object(r.useState)(0),i=Object(f.a)(t,2),c=i[0],o=i[1],l=ie(),u=Object(r.useState)(0),s=Object(f.a)(u,2),m=s[0],d=s[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=(new Date).getTime()-n.getTime();o(e)}),1e3);return function(){return clearInterval(e)}}),[]),Object(r.useEffect)((function(){var e=document.getElementById("player_wrap");d(.045*e.clientWidth)}),[l]),a.a.createElement(Ee,{type:"playingTime",movable:!0,defaultRatio:tn},a.a.createElement(nn,{font:m},function(e){var n=function(e){var n=Math.floor(e/1e3),t=Math.floor(n/3600);n-=60*t*60;var r=Math.floor(n/60);return{hours:t,minutes:r,seconds:n-=60*r}}(e),t=n.hours,r=n.minutes,a=n.seconds;return"".concat(t.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"))}(c)))};function an(){var e=Object(y.a)(["\n    flex-direction: column;\n  "]);return an=function(){return e},e}function cn(){var e=Object(y.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  ","\n"]);return cn=function(){return e},e}function on(){var e=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return on=function(){return e},e}function ln(){var e=Object(y.a)(["\n    border-radius: 0;\n    min-height: 185px;\n    max-height: 400px;\n  "]);return ln=function(){return e},e}function un(){var e=Object(y.a)(['\n  position: relative;\n  width: 100%;\n  height: 100%;\n  /* padding-top: 53%; */\n  border-radius: 0.5rem;\n  overflow: hidden;\n  display: flex;\n  flex: 1;\n  background-color: black;\n  font-family: "Baloo Bhai", cursive;\n  margin-top: 2px;\n\n  ',"\n"]);return un=function(){return e},e}var sn=E.b.div(un(),w.mobile(ln())),fn=E.b.div(on()),mn=E.b.div(cn(),w.mobile(an()));var dn=function(){return a.a.createElement(sn,null,a.a.createElement(fn,{id:"display"},a.a.createElement(mn,null,a.a.createElement(ae,null,a.a.createElement(Ue,null),a.a.createElement(Ze,null),a.a.createElement(rn,null)),a.a.createElement(be,null))))};function bn(){var e=Object(y.a)(['\n  flex: 9;\n  padding: 10px 5px 0 5px;\n  display: -webkit-box;\n  word-break: break-all;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  font-family: "hanna", cursive;\n  font-size: 0.9em;\n  line-height: 1.5em;\n  height: 4.3em;  \n']);return bn=function(){return e},e}function hn(){var e=Object(y.a)(["\n  flex: 1;\n  padding: 5px;\n"]);return hn=function(){return e},e}function vn(){var e=Object(y.a)(["\n  list-style: none;\n  display: flex;\n  margin: 0;\n  height: 5.2em;\n\n  /* background-image: linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%);\n  background-size: 200% auto;\n  background-position: -0% 0;\n  transition: background-position 0.5s ease-out; */\n\n  &:hover {\n    cursor: pointer;\n    background: ",";\n    /* background-position: -99.99% 0; */\n  }\n"]);return vn=function(){return e},e}function pn(){var e=Object(y.a)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n"]);return pn=function(){return e},e}function gn(){var e=Object(y.a)(['\n  border-radius: 0.5rem;\n  background-color: white;\n  font-family: "Baloo Bhai", fantasy;\n  margin: 5px;\n  overflow: auto;\n  width: 100%;\n  height: 97%;\n']);return gn=function(){return e},e}var yn="#bfc9ff",En=E.b.div(gn()),On=E.b.ul(pn()),jn=E.b.li(vn(),"#e2e6ff"),wn=E.b.img(hn()),xn=E.b.span(bn());var kn=function(){var e=Object(r.useContext)(p),n=e.channel,t=e.video,i=e.dispatch,c=Object(r.useRef)({channel:Object.assign({},n)}),o=t.currentVideo,l=function(e){i.video({type:"SELECT",currentVideo:e})};return a.a.createElement(En,null,a.a.createElement(On,null,(c.current.channel.playList||[]).map((function(e,n){return a.a.createElement(jn,{key:n,style:{background:n===o?yn:""},onClick:l.bind(null,n)},a.a.createElement(wn,{src:e.thumbnail,alt:"Error"}),a.a.createElement(xn,null,e.title))}))))};function Sn(){var e=Object(y.a)(["\n    flex: 3;\n  "]);return Sn=function(){return e},e}function Ln(){var e=Object(y.a)(['\n  width: 100%;\n  height: 100%;\n  flex: 2;\n  border-radius: 0.5rem;\n  background-color: black;\n  font-family: "Baloo Bhai", cursive;\n  margin-left: 2px;\n  margin-top: 2px;\n  overflow: hidden;\n\n  ',"\n"]);return Ln=function(){return e},e}var Cn=E.b.div(Ln(),w.mobile(Sn()));var Nn=function(){var e=Object(r.useContext)(p).category;return a.a.createElement(Cn,{style:{display:e.toggleCategory?"flex":"none"}},a.a.createElement(kn,null))};function Tn(){var e=Object(y.a)(["\n    flex-direction: column;\n    height: 85%;\n    flex: 1;\n  "]);return Tn=function(){return e},e}function An(){var e=Object(y.a)(["\n  /* float: left; */\n  display: flex;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n\n  ","\n"]);return An=function(){return e},e}var zn=E.b.div(An(),w.mobile(Tn()));var In=function(){return a.a.createElement(zn,null,a.a.createElement(dn,null),a.a.createElement(Nn,null))};function Rn(){var e=Object(y.a)(["\n    width: 100%;\n    flex-direction: column;\n    padding-top: 0;\n    max-height: max-content;\n  "]);return Rn=function(){return e},e}function Bn(){var e=Object(y.a)(["\n  width: 80%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 600px;\n  display: flex;\n  flex-direction: column;\n\n  ","\n"]);return Bn=function(){return e},e}var Vn=E.b.div(Bn(),w.mobile(Rn()));var Mn=Object(g.e)((function(e){var n=e.match,t=Object(r.useContext)(p),i=t.channel,c=t.channels,o=t.dispatch,l=Object(r.useState)(!1),u=Object(f.a)(l,2),s=u[0],m=u[1],d=Object(r.useRef)({channel:Object.assign({},i)});function b(e){return e&&e.playList&&e.playList.length}return Object(r.useEffect)((function(){return o.channel({type:"SET",id:n.params.id}),o.category({type:"HIDE"}),!s&&b(i)&&(m(!0),d.current.channel=Object.assign({},i)),function(){o.channel({type:"CLEAR"})}}),[i,c]),b(d.current.channel)?a.a.createElement(Vn,null,a.a.createElement(Q,null),a.a.createElement(In,null)):null})),_n=t(26);function Yn(){var e=Object(y.a)(["\n  text-decoration: none !important;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.5rem;\n"]);return Yn=function(){return e},e}function Dn(){var e=Object(y.a)(["\n  margin: 0;\n"]);return Dn=function(){return e},e}function Fn(){var e=Object(y.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 1rem;\n\n  & .menutitle {\n    padding-top: 0.35rem;\n    padding-bottom: 0.35rem;\n    font-size: 0.8rem;\n    font-weight: 500;\n    font-family: "Hind Siliguri", sans-serif;\n    letter-spacing: 0.1rem;\n    cursor: pointer;\n\n    color: ',";\n\n    &:hover {\n      color: #00b423;\n    }\n  }\n\n  & .activebar {\n    background-color: ",";\n    width: 100%;\n    height: 0.2rem;\n  }\n"]);return Fn=function(){return e},e}function Pn(){var e=Object(y.a)(["\n  padding: 0 1rem;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n"]);return Pn=function(){return e},e}function Wn(){var e=Object(y.a)(["\n  color: ",";\n  margin: 0 0.5rem;\n  cursor: pointer;\n"]);return Wn=function(){return e},e}function Jn(){var e=Object(y.a)(["\n  display: flex;\n"]);return Jn=function(){return e},e}function Xn(){var e=Object(y.a)(["\n  text-align: center;\n  letter-spacing: 0.15rem;\n  font-size: 0.8rem;\n  background-color: #f0f0f0;\n  padding: 5rem 3rem 3rem 3rem;\n  color: #666666;\n"]);return Xn=function(){return e},e}function Hn(){var e=Object(y.a)(["\n  color: #aaa;\n  font-size: 0.6rem;\n"]);return Hn=function(){return e},e}function qn(){var e=Object(y.a)(['\n  display: flex;\n  align-items: center;\n  font-family: "Hind Siliguri", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.15rem;\n  font-size: 0.8rem;\n']);return qn=function(){return e},e}function Gn(){var e=Object(y.a)(["\n  width: 100%;\n  height: 30%;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Gn=function(){return e},e}function Un(){var e=Object(y.a)(["\n  width: 100%;\n  height: 70%;\n"]);return Un=function(){return e},e}function Kn(){var e=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: 0 0.2rem 8px rgba(0, 0, 0, 0.06);\n  transition: 0.2s linear;\n\n  background-color: white;\n  border-radius: 0.3rem;\n  overflow: hidden;\n\n  &:hover {\n    margin-top: -0.2rem;\n    box-shadow: 0 0.4rem 8px rgba(0, 0, 0, 0.06);\n    margin-bottom: 0.2rem;\n  }\n"]);return Kn=function(){return e},e}function $n(){var e=Object(y.a)(["\n  position: relative;\n  width: 100%;\n  padding-top: 84.4%;\n  cursor: pointer;\n"]);return $n=function(){return e},e}function Qn(){var e=Object(y.a)(["\n  float: left;\n  width: 45%;\n  height: 45%;\n  max-width: 300px;\n  max-height: 300px;\n  margin: 0.5rem;\n"]);return Qn=function(){return e},e}function Zn(){var e=Object(y.a)(["\n  padding: 1rem 0;\n  width: 100%;\n  background-color: #f0f0f0;\n  overflow: hidden;\n"]);return Zn=function(){return e},e}function et(){var e=Object(y.a)([""]);return et=function(){return e},e}function nt(){var e=Object(y.a)(["\n  font-size: 0.8rem;\n  justify-self: flex-end;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return nt=function(){return e},e}function tt(){var e=Object(y.a)(['\n  font-size: 1.5rem;\n  font-weight: 800;\n  font-family: "Hind Siliguri", sans-serif;\n  letter-spacing: 0.2rem;\n']);return tt=function(){return e},e}function rt(){var e=Object(y.a)(["\n  font-size: 0.8rem;\n"]);return rt=function(){return e},e}function at(){var e=Object(y.a)(["\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return at=function(){return e},e}function it(){var e=Object(y.a)(['\n  height: 35%;\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url("/images/listening.png") no-repeat;\n  background-size: cover;\n  background-position-y: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  color: white;\n']);return it=function(){return e},e}function ct(){var e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #f0f0f0;\n"]);return ct=function(){return e},e}var ot=E.b.div(ct()),lt=E.b.div(it()),ut=E.b.div(at()),st=E.b.div(rt()),ft=E.b.div(tt()),mt=E.b.div(nt()),dt=E.b.div(et()),bt=E.b.div(Zn()),ht=E.b.div(Qn()),vt=E.b.div($n()),pt=E.b.div(Kn()),gt=E.b.div(Un()),yt=E.b.div(Gn()),Et=E.b.div(qn()),Ot=E.b.div(Hn()),jt=E.b.div(Xn()),wt=E.b.div(Jn()),xt=E.b.div(Wn(),(function(e){return e.isActive?"#2196f3":"#9e9e9e"})),kt=E.b.div(Pn()),St=E.b.div(Fn(),(function(e){return e.isActive?"#00b423":"#8e8e8e"}),(function(e){return e.isActive?"#00b423":""})),Lt=E.b.hr(Dn()),Ct=E.b.a(Yn()),Nt=function(e){var n=e.history,t=Object(r.useContext)(p).channels,i=Object(r.useState)(!1),c=Object(f.a)(i,2),o=c[0],l=c[1],u=Object(r.useState)("Android"),s=Object(f.a)(u,2),d=s[0],b=s[1],h=Object(r.useState)("music"),v=Object(f.a)(h,2),g=v[0],y=v[1],E=function(e){y(e)},O=Object(r.useState)([]),j=Object(f.a)(O,2),w=j[0],x=j[1];return Object(r.useEffect)((function(){x("all"===g?t:t.filter((function(e){return!e.category||e.category.includes(g)})))}),[g,t]),a.a.createElement(ot,null,a.a.createElement(_n.a,{show:o,onHide:function(){return l(!1)}},a.a.createElement(_n.a.Header,{closeButton:!0},a.a.createElement(wt,null,a.a.createElement(xt,{isActive:"Android"===d,onClick:function(){return b("Android")}},"Android"),a.a.createElement(xt,{isActive:"iOS"===d,onClick:function(){return b("iOS")}},"iOS"))),a.a.createElement(_n.a.Body,null,"Android"===d&&a.a.createElement("div",null,a.a.createElement("div",null,"\ud06c\ub86c(chrome) \ube0c\ub77c\uc6b0\uc800"),a.a.createElement("br",null),a.a.createElement("div",null,"1. youtube.com \uc811\uc18d"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android1.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"2. \uc544\ubb34 \uc601\uc0c1\uc774\ub098 \ub4e4\uc5b4\uac04 \ud6c4 \uc810 \uc138\uac1c \ud074\ub9ad"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android2.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"3. \ub370\uc2a4\ud06c\ud1b1 \ud074\ub9ad"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android3.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"4. \ubaa8\ub450 \ub2eb\uace0, wavup.me \uc811\uc18d"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android4.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"5. \ucc44\ub110 \uc120\ud0dd \ud6c4, \uc601\uc0c1 \ud50c\ub808\uc774"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android5.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"6. \ud648\ud654\uba74\uc73c\ub85c \uac00\uba74 \uc601\uc0c1\uc774 \uc911\uc9c0\ub418\uace0 \uc0c1\ub2e8 \uc2a4\ud53c\ucee4 \uc544\uc774\ucf58 \ud45c\uc2dc"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android6.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"7. \uc0c1\ub2e8\ubc14\ub97c \ub0b4\ub9ac\uba74 \uc911\uc9c0\ub41c \uc601\uc0c1\uc774 \ub098\uc624\uba70, \ud50c\ub808\uc774 \ubc84\ud2bc \ud074\ub9ad"),a.a.createElement("br",null),a.a.createElement("img",{src:"/images/android7.png",alt:"",style:{width:"100%",height:"100%"}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,"8. \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc7ac\uc0dd \uc131\uacf5! \ub9c8\uc74c\uaecf \ub2e4\ub978 \uc791\uc5c5\uc744 \ud558\uc138\uc694"),a.a.createElement("br",null)),"iOS"===d&&a.a.createElement("div",null,"\uc900\ube44\uc911..."))),a.a.createElement(lt,null,a.a.createElement(ut,null,a.a.createElement(st,null,"\uc74c\uc545\uacfc \ud568\uaed8 \ud558\uace0 \uc2f6\uc744 \ub550"),a.a.createElement(ft,null,"WAVUP")),a.a.createElement(mt,{onClick:function(){return l(!0)}},"\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc7ac\uc0dd\ud558\ub294 \ubc29\ubc95",a.a.createElement("i",{className:"material-icons"},"expand_more"))),a.a.createElement(dt,null,a.a.createElement(kt,null,a.a.createElement(St,{isActive:"all"===g,onClick:E.bind(null,"all")},a.a.createElement("div",{className:"menutitle"},"#ALL"),a.a.createElement("div",{className:"activebar"})),a.a.createElement(St,{isActive:"favorite"===g,onClick:E.bind(null,"favorite")},a.a.createElement("div",{className:"menutitle"},"#FAVORITE"),a.a.createElement("div",{className:"activebar"})),a.a.createElement(St,{isActive:"music"===g,onClick:E.bind(null,"music")},a.a.createElement("div",{className:"menutitle"},"#MUSIC"),a.a.createElement("div",{className:"activebar"}))),a.a.createElement(Lt,null),a.a.createElement(bt,null,w.map((function(e){return a.a.createElement(ht,{key:e.id},a.a.createElement(vt,{onClick:function(){return function(e,n){n.playList&&n.playList.length?e.push("".concat(m,"/").concat(n.id)):alert("".concat(n.name,"\uc758 \ubaa9\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"))}(n,e)}},a.a.createElement(pt,null,a.a.createElement(gt,null,a.a.createElement("img",{src:e.img,alt:"",style:{width:"100%",height:"100%"}})),a.a.createElement(yt,null,a.a.createElement(Et,null,e.name),a.a.createElement(Ot,null,(e.tags||[]).reduce((function(e,n){return e+" #"+n}),""))))))})))),a.a.createElement(jt,null,"developed by"," ",a.a.createElement("span",{style:{fontWeight:600}},"\ube0c\ub85c\ucf5c\ub9ac, Wise Cow, \ub85c\ubd07"),a.a.createElement("br",null),a.a.createElement(Ct,{href:"mailto:wavupme@gmail.com"},a.a.createElement("i",{className:"material-icons",style:{margin:"0 0.5rem",fontSize:"1rem"}},"mail_outline"),"wavupme@gmail.com")))};var Tt=a.a.memo((function(){var e=Object(r.useContext)(p).dispatch;return Object(r.useEffect)((function(){oe.a.get(d.getChannels).then((function(n){e.channels({channels:n.data,type:"ADD"})}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{path:m+"/",component:Nt,exact:!0}),a.a.createElement(g.a,{path:m+"/:id",render:function(){return a.a.createElement(L,null,a.a.createElement(Mn,null))}}))}));var At=function(){return a.a.createElement(v,null,a.a.createElement(Tt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(115);c.a.render(a.a.createElement(o.a,null,a.a.createElement(At,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,n,t){e.exports=t(116)},58:function(e,n,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.42380617.chunk.js.map