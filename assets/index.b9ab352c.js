import{r as k,a as h,b as x,o,c as a,d as r,w as d,F as c,e,u as m,f,n as M,g as y,v as $,T as A,h as w,t as i,S as L,i as F,j as V,k as C,l as W,P as q,N as I,E as K,m as G,p as H,V as J}from"./vendor.10c14ca9.js";const Q=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))v(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const _ of l.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&v(_)}).observe(document,{childList:!0,subtree:!0});function g(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function v(s){if(s.ep)return;s.ep=!0;const l=g(s);fetch(s.href,l)}};Q();var R="/wyh-showcase/assets/avatar.a643b68a.jpg";const U={class:"content-wrap header"},X={class:"logo"},Y=w(" \u7389\u7C73\u9171\u7684\u4F5C\u54C1\u96C6 "),Z={key:0},ee=e("i",null,null,-1),te=e("i",null,null,-1),se=e("i",null,null,-1),oe=[ee,te,se],ne={class:"nav-mobile-wrap"},ae={class:"content-wrap"},le={class:"title-wrap",id:"model1"},ie={class:"title"},ce={class:"title-desc"},re={class:"model1"},de=["src"],_e={class:"title-wrap",id:"model2"},ue={class:"title"},ve={class:"title-desc"},pe={class:"model2"},he={class:"des"},fe=["src"],me={class:"title-wrap",id:"model3"},we={class:"title"},ge={class:"title-desc"},ke={class:"model3"},ye=["onClick"],Ce={class:"img-wrap"},be=["src"],Ne={class:"pdf-content"},Se=e("span",{class:"tag"},"PDF",-1),xe={class:"field"},Le={class:"desc"},Fe=w(" Copyright \xA9 Shawn 2021 "),Ve={setup(j){window.onresize=()=>u.value=window.innerWidth;const u=k(window.innerWidth),g=[W,q,I,K],v=k(!1),s=()=>v.value=!v.value,l=p=>window.location.href=p,_=k([]),b=k(!1);return fetch("/wyh-showcase/data.json").then(p=>p.json()).then(p=>{_.value=p.data,b.value=!0}),(p,je)=>{const P=h("el-backtop"),B=h("el-avatar"),D=h("el-header"),E=h("el-main"),O=h("el-footer"),T=h("el-container"),N=x("scroll-to"),z=x("loading");return o(),a(c,null,[r(P),r(T,null,{default:d(()=>[r(D,{height:u.value<768?"60px":"80px"},{default:d(()=>[e("div",U,[e("div",X,[r(B,{src:m(R)},null,8,["src"]),Y]),u.value>992?(o(),a("div",Z,[(o(!0),a(c,null,f(_.value,(n,t)=>y((o(),a("span",{key:t,class:"nav-item"},[w(i(n.model),1)],512)),[[N,"#model"+(t+1)]])),128))])):(o(),a(c,{key:1},[e("div",{class:M(["nav-mobile",v.value?"nav-active":""]),onClick:s},oe,2),r(A,{name:"el-zoom-in-top",duration:3e3},{default:d(()=>[y(e("div",ne,[(o(!0),a(c,null,f(_.value,(n,t)=>y((o(),a("span",{key:t,onClick:s,class:"nav-mobile-item"},[w(i(n.model),1)],512)),[[N,"#model"+(t+1)]])),128))],512),[[$,v.value]])]),_:1})],64))])]),_:1},8,["height"]),y(r(E,null,{default:d(()=>[e("div",ae,[(o(!0),a(c,null,f(_.value,n=>(o(),a(c,null,[n.index===1?(o(),a(c,{key:0},[e("div",le,[e("span",ie,i(n.model),1),e("span",ce,i(n.description),1)]),e("div",re,[r(m(L),{modules:g,"slides-per-view":"auto",freeMode:!0,navigation:""},{default:d(()=>[(o(!0),a(c,null,f(n.data,t=>(o(),F(m(V),{class:"model-item",onClick:S=>l(t.cover)},{default:d(()=>[e("img",{src:t.cover},null,8,de),e("div",null,[e("p",null,i(t.title),1),e("span",null,i(t.description),1)])]),_:2},1032,["onClick"]))),256))]),_:2},1024)])],64)):C("",!0),n.index===2?(o(),a(c,{key:1},[e("div",_e,[e("span",ue,i(n.model),1),e("span",ve,i(n.description),1)]),e("div",pe,[r(m(L),{modules:g,"slides-per-view":"auto",freeMode:!0,centeredSlides:"",navigation:"",loop:""},{default:d(()=>[(o(!0),a(c,null,f(n.data,t=>(o(),F(m(V),{class:"model2-item",onClick:S=>l(t.cover)},{default:d(()=>[e("div",he,i(t.description),1),e("img",{src:t.cover},null,8,fe)]),_:2},1032,["onClick"]))),256))]),_:2},1024)])],64)):C("",!0),n.index===3?(o(),a(c,{key:2},[e("div",me,[e("span",we,i(n.model),1),e("span",ge,i(n.description),1)]),e("div",ke,[(o(!0),a(c,null,f(n.data,t=>(o(),a("div",{class:"model3-item",onClick:S=>l(t.pdf)},[e("div",Ce,[e("img",{src:t.cover},null,8,be)]),e("div",Ne,[e("p",null,[w(i(t.title)+" ",1),Se]),e("span",xe,i(t.field),1),e("span",Le,i(t.description),1)])],8,ye))),256))])],64)):C("",!0)],64))),256))])]),_:1},512),[[z,!b.value]]),r(O,null,{default:d(()=>[Fe]),_:1})]),_:1})],64)}}};G(Ve).use(H).use(J).mount("#app");
