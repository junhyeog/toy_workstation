(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9Jkg":function(t,n,o){t.exports=o("oh+g")},RNiq:function(t,n,o){"use strict";o.r(n);var e=o("9Jkg"),r=o.n(e),i=o("q1tI"),a=o.n(i),p=o("vOnD"),d=a.a.createElement,l=function(t){var n=t.domain,o=t.top,e=t.left,r=t.right;return"naver"==n?d(s,{top:o,left:e,right:r,action:"https://search.naver.com/search.naver"},d("a",{href:"https://www.naver.com"}),d("input",{autoComplete:"off",type:"text",name:"query",maxLength:"255"})):d(s,{top:o,left:e,right:r,action:"https://www.google.com/search"},d("a",{style:{background:"url(/static/search.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center"},href:"https://www.google.com"}),d("input",{autoComplete:"off",type:"text",name:"q",maxLength:"255"}))},s=p.b.form.withConfig({displayName:"searchBar__SearchBar",componentId:"sc-1fwtwmy-0"})(["position:absolute;display:flex;justify-content:center;flex-direction:column;top:",";left:",";right:",";box-shadow:0 -3px 20px 0 rgba(0,0,0,0.1);width:40%;border-radius:8px;a{position:absolute;display:flex;top:0;width:48px;height:56px;background:url(/static/naver.png);background-repeat:no-repeat;background-position:center;font-size:0;z-index:3;:after{content:' ';position:absolute;display:flex;top:14px;right:0;width:1px;height:29px;border-right:1px solid rgba(255,255,255,0.3);}}input{outline:none;position:relative;display:flex;width:calc(100% - 61px);height:56px;border:0;border-radius:8px;background:rgba(249,249,249,0.42);font-size:15px;font-weight:normal;color:#fff;direction:ltr;padding-inline-start:61px;transition-property:background;transform:translateZ(0);z-index:1;}"],function(t){return t.top},function(t){return t.left},function(t){return t.right}),c=o("p0XB"),u=o.n(c);var f=o("d04V"),g=o.n(f),h=o("yLu3"),b=o.n(h);function x(t){return function(t){if(u()(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(b()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return g()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=a.a.createElement,w=function(){var t=a.a.useState([]);return a.a.useEffect(function(){t[1](JSON.parse(localStorage.getItem("todos"))),console.log(t[0])},[]),a.a.useEffect(function(){localStorage.setItem("todos",r()(t[0]))}),m(_,null,m(k,null,"\ud560 \uc77c \ubaa9\ub85d",m("span",{className:"todo-num"},t[0].length)),m(y,null,t[0].map(function(n,o){return m("li",{key:o},n,m("button",{onClick:function(){var n=t[0];t[1]([].concat(x(n.slice(0,o)),x(n.slice(o+1,t.lenght))))}}))})),m(v,null,m("input",{style:{display:"none"}}),m("input",{autoComplete:"off",placeholder:"Don't feed me...",onKeyPress:function(n){13==event.keyCode&&""!=n.target.value&&(t[1]([].concat(x(t[0]),[n.target.value])),n.target.value="")}})))},v=p.b.div.withConfig({displayName:"toDo__FormContainer",componentId:"omvpyj-0"})(["padding:0 15px;border-top:1px solid rgba(0,0,0,0.1);background:#fafafa;box-sizing:border-box;width:100%;height:46px;input{outline:none;border:0;width:100%;height:100%;background:transparent;padding-inline-start:15px;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;display:inline-block;text-align:start;cursor:text;font-size:15px;color:#878481;}"]),y=p.b.ul.withConfig({displayName:"toDo__ListContainer",componentId:"omvpyj-1"})(["position:relative;height:265px;box-sizing:border-box;margin-inline-end:6px;padding-inline-end:7px;padding-inline-start:13px;margin-block-start:15px;padding-block-end:10px;overflow:auto;li{height:28px;position:relative;padding-inline-start:26px;list-style:none;display:list-item;font:400 20px;color:#878481;margin-bottom:5px;button{position:absolute;top:0;right:0;width:28px;height:50%;border:0;background:url(static/delete.png);background-repeat:no-repeat;background-position:center;background-size:contain;font-size:0;cursor:pointer;}}"]),k=p.b.div.withConfig({displayName:"toDo__Header",componentId:"omvpyj-2"})(["display:flex;background:transparent;align-items:center;justify-content:flex-start;border:0;padding:0 28px;margin:0;font-size:14px;color:#121212;font-weight:bold;line-height:1;margin-block-start:30px;position:relative;text-align:left;box-sizing:border-box;span{font-size:13px;font-weight:normal;padding-left:5px;opacity:0.5;float:right;line-height:1;color:#121212;text-align:left;}"]),_=p.b.div.withConfig({displayName:"toDo__Background",componentId:"omvpyj-3"})(["display:block;position:absolute;width:40%;right:5%;top:calc(56px + 15%);border-radius:4px;background-color:#ffffff;box-shadow:2px 3px 2px rgba(0,0,0,0.2);z-index:3;transform-origin:right bottom;overflow:hidden;"]),N=function(){var t=function(){var t=new Date;return new Date(+t+60*(t.getTimezoneOffset()+540)*1e3)},n=Object(i.useState)(t()),o=n[0],e=n[1];return Object(i.useEffect)(function(){var n=setInterval(function(){e(function(){return t()})},1e3);return function(){return clearInterval(n)}},[]),o},C=a.a.createElement,I=function(t){var n=t.time,o=t.borderWidth,e=void 0===o?10:o;return C("div",null,C(z,{borderWidth:e,rotation:6*n.getSeconds()+"deg"}),C(S,{borderWidth:e,rotation:6*(n.getMinutes()+n.getSeconds()/60)+"deg"}),C(j,{borderWidth:e,rotation:30*(n.getHours()%12+n.getMinutes()/60)+"deg"}))},z=p.b.div.withConfig({displayName:"Hands__SecondHand",componentId:"sc-16z571e-0"})(["position:absolute;width:1px;height:","px;background:#34cdab;border-radius:100px;top:10px;left:50%;transform:rotate(",") translate3d(-50%,0,0);transform-origin:0px bottom;"],function(t){return 140-t.borderWidth},function(t){return t.rotation||"30deg"}),S=p.b.div.withConfig({displayName:"Hands__MinuteHand",componentId:"sc-16z571e-1"})(["position:absolute;width:3px;height:","px;background:#fff;border-radius:100px;top:50px;left:50%;transform:rotate(",") translate3d(-50%,0,0);transform-origin:0px bottom;"],function(t){return 100-t.borderWidth},function(t){return t.rotation||"30deg"}),j=p.b.div.withConfig({displayName:"Hands__HourHand",componentId:"sc-16z571e-2"})(["position:absolute;width:5px;height:","px;background:#fff;border-radius:100px;top:70px;left:50%;transform:rotate(",") translate3d(-50%,0,0);transform-origin:0px bottom;"],function(t){return 80-t.borderWidth},function(t){return t.rotation||"30deg"}),E=a.a.createElement,D=Array(12).fill(),O=Array(60).fill(),H=function(){var t=N();return E(q,null,D.map(function(t,n){return E(J,{key:n,rotation:30*n+"deg"})}),O.map(function(t,n){return E(W,{key:n,rotation:6*n+"deg"})}),E(I,{time:t}))},q=p.b.div.withConfig({displayName:"clock__Container",componentId:"sc-76svq3-0"})(["position:absolute;top:calc(56px + 15%);left:25%;"]),J=p.b.div.withConfig({displayName:"clock__Mark",componentId:"sc-76svq3-1"})(["position:absolute;width:2px;height:20px;background:#fff;border-radius:100px;top:10px;left:50%;transform:rotate(",") translate3d(-50%,0,0);transform-origin:0px 130px;"],function(t){return t.rotation||"0deg"}),W=p.b.div.withConfig({displayName:"clock__SmallMark",componentId:"sc-76svq3-2"})(["position:absolute;width:0.5px;height:10px;background:#fff;opacity:0.5;border-radius:100px;top:10px;left:50%;transform:rotate(",") translate3d(-50%,0,0);transform-origin:0px 130px;"],function(t){return t.rotation||"0deg"}),B=i.createElement,M=(n.default=function(){return i.useEffect(function(){localStorage.getItem("todos")||localStorage.setItem("todos",r()([]))},[]),B(M,{imgUrl:"/static/backimg1.png"},B(l,{top:"10%",left:"5%",domain:"naver"}),B(l,{top:"10%",right:"5%"}),B(w,null),B(H,null))},p.b.div.withConfig({displayName:"pages__Background",componentId:"v8m6c-0"})(["display:flex;justify-content:center;flex-direction:column;width:100vw;height:100vh;object-fit:cover;border:0;background-image:url(",");background-size:cover;position:relative;"],function(t){return t.imgUrl}))},"oh+g":function(t,n,o){var e=o("WEpk"),r=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},vlRD:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("RNiq")}])}},[["vlRD",0,1]]]);