import{u as g,o as d,e as u,b as s,h as a,w as m,F as b,H as w,g as l,L as k,t as x,f as h,a as t,n as y,A as V}from"./app.30ef99a5.js";import{_ as v}from"./AuthenticationCard.591253e1.js";import{_ as $}from"./AuthenticationCardLogo.891c15a3.js";import{_ as B}from"./Checkbox.8306c85c.js";import{_ as c}from"./InputError.49a5a81e.js";import{_ as f}from"./InputLabel.87d8444c.js";import{_ as F}from"./PrimaryButton.c72e7318.js";import{_}from"./TextInput.c90dfa85.js";const L={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},C={class:"block mt-4"},M={class:"flex items-center"},U=t("span",{class:"ml-2 text-sm text-gray-600"},"Ingat saya",-1),q={class:"flex items-center justify-end mt-4"},R={__name:"Login",props:{canResetPassword:Boolean,status:String,darkMode:Boolean},setup(i){const e=g({email:"",password:"",remember:!1}),p=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(d(),u(b,null,[s(a(w),{title:"Log in"}),s(v,null,{logo:m(()=>[s($)]),title:m(()=>[l(" Belum punya akun? "),s(a(k),{class:"underline text-sm text-gray-600 hover:text-gray-900",href:"/register"},{default:m(()=>[l("Daftar")]),_:1})]),default:m(()=>[i.status?(d(),u("div",L,x(i.status),1)):h("",!0),t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[s(f,{for:"email",value:"Email"}),s(_,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>a(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),s(c,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",S,[s(f,{for:"password",value:"Password"}),s(_,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>a(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),s(c,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),t("div",C,[t("label",M,[s(B,{checked:a(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>a(e).remember=r),name:"remember"},null,8,["checked"]),U])]),t("div",q,[s(F,{class:y(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:m(()=>[l(" Masuk ")]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{R as default};
