import{u as b,o as d,e as u,b as a,h as s,w as r,F as h,H as k,g as n,L as c,t as x,f,a as t,c as y,n as v,A as V}from"./app.f2b7b749.js";import{_ as B}from"./AuthenticationCard.7e91cc22.js";import{_ as $}from"./AuthenticationCardLogo.131e12ae.js";import{_ as L}from"./Checkbox.0420ecc8.js";import{_ as p}from"./InputError.286fb2bb.js";import{_}from"./InputLabel.01f87854.js";import{_ as F}from"./PrimaryButton.d2040de9.js";import{_ as g}from"./TextInput.7e7be692.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],q={class:"mt-4"},C={class:"block mt-4"},M={class:"flex items-center"},P=t("span",{class:"ml-2 text-sm text-gray-600"},"Ingat saya",-1),U={class:"flex items-center justify-end mt-4"},T={__name:"Login",props:{canResetPassword:Boolean,status:String,darkMode:Boolean},setup(i){const e=b({email:"",password:"",remember:!1}),w=()=>{e.transform(m=>({...m,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(m,o)=>(d(),u(h,null,[a(s(k),{title:"Log in"}),a(B,null,{logo:r(()=>[a($)]),title:r(()=>[n(" Belum punya akun? "),a(s(c),{class:"underline text-sm text-gray-600 hover:text-gray-900",href:m.route("register")},{default:r(()=>[n("Daftar")]),_:1},8,["href"])]),default:r(()=>[i.status?(d(),u("div",N,x(i.status),1)):f("",!0),t("form",{onSubmit:V(w,["prevent"])},[t("div",null,[a(_,{for:"email",value:"Email"}),a(g,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",q,[a(_,{for:"password",value:"Password"}),a(g,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",C,[t("label",M,[a(L,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=l=>s(e).remember=l),name:"remember"},null,8,["checked"]),P])]),t("div",U,[i.canResetPassword?(d(),y(s(c),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:r(()=>[n(" Lupa password? ")]),_:1},8,["href"])):f("",!0),a(F,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:r(()=>[n(" Masuk ")]),_:1},8,["class","disabled"])])],40,S)]),_:1})],64))}};export{T as default};