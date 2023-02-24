import{v as I,p as O,s as S,k as L,d as h,j as D}from"./app.242527d7.js";import{o as w,u as g}from"./use-controllable.80a255e7.js";function A(e){throw new Error("Unexpected object: "+e)}var M=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(M||{});function X(e,t){let n=t.resolveItems();if(n.length<=0)return null;let u=t.resolveActiveIndex(),s=u!=null?u:-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(r=>!t.resolveDisabled(r));case 1:{let r=n.slice().reverse().findIndex((l,d,c)=>s!==-1&&c.length-d-1>=s?!1:!t.resolveDisabled(l));return r===-1?r:n.length-1-r}case 2:return n.findIndex((r,l)=>l<=s?!1:!t.resolveDisabled(r));case 3:{let r=n.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return r===-1?r:n.length-1-r}case 4:return n.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:A(e)}})();return o===-1?u:o}let b=Symbol("Context");var T=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(T||{});function Y(){return C()!==null}function C(){return I(b,null)}function z(e){O(b,e)}const N=typeof window>"u"||typeof document>"u";function E(e){if(N)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=w(e);if(t)return t.ownerDocument}return document}let p=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var $=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))($||{}),j=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(j||{}),U=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(U||{});function F(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p))}var P=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(P||{});function y(e,t=0){var n;return e===((n=E(e))==null?void 0:n.body)?!1:g(t,{[0](){return e.matches(p)},[1](){let u=e;for(;u!==null;){if(u.matches(p))return!0;u=u.parentElement}return!1}})}function B(e){let t=E(e);S(()=>{t&&!y(t.activeElement,0)&&_(e)})}function _(e){e==null||e.focus({preventScroll:!0})}let k=["textarea","input"].join(",");function H(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,k))!=null?n:!1}function W(e,t=n=>n){return e.slice().sort((n,u)=>{let s=t(n),o=t(u);if(s===null||o===null)return 0;let r=s.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function J(e,t){return G(F(),t,!0,e)}function G(e,t,n=!0,u=null){var s;let o=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,r=Array.isArray(e)?n?W(e):e:F(e);u=u!=null?u:o.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(u))-1;if(t&4)return Math.max(0,r.indexOf(u))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},i=0,f=r.length,a;do{if(i>=f||i+f<=0)return 0;let v=d+i;if(t&16)v=(v+f)%f;else{if(v<0)return 3;if(v>=f)return 1}a=r[v],a==null||a.focus(c),i+=l}while(a!==o.activeElement);return t&6&&H(a)&&a.select(),a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),2}function m(e,t,n){N||L(u=>{document.addEventListener(e,t,n),u(()=>document.removeEventListener(e,t,n))})}function K(e,t,n=D(()=>!0)){function u(o,r){if(!n.value||o.defaultPrevented)return;let l=r(o);if(l===null||!l.getRootNode().contains(l))return;let d=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of d){if(c===null)continue;let i=c instanceof HTMLElement?c:w(c);if(i!=null&&i.contains(l)||o.composed&&o.composedPath().includes(i))return}return!y(l,P.Loose)&&l.tabIndex!==-1&&o.preventDefault(),t(o,l)}let s=h(null);m("mousedown",o=>{var r,l;n.value&&(s.value=((l=(r=o.composedPath)==null?void 0:r.call(o))==null?void 0:l[0])||o.target)},!0),m("click",o=>{!s.value||(u(o,()=>s.value),s.value=null)},!0),m("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function x(e){return[e.screenX,e.screenY]}function Q(){let e=h([-1,-1]);return{wasMoved(t){let n=x(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=x(t)}}}export{B as D,F as E,P as F,$ as M,W as O,G as P,M as a,z as c,N as e,Y as f,y as h,T as l,E as m,C as p,Q as u,J as v,X as x,K as y};