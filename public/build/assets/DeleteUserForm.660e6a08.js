import{d,u as _,o as y,c as w,w as e,g as s,a as c,b as t,h as a,V as h,n as v}from"./app.10d90a1b.js";import{_ as g}from"./ActionSection.41d8ead7.js";import{_ as m}from"./DangerButton.95d82ea3.js";import{a as k}from"./DialogModal.1154af70.js";import{_ as x}from"./InputError.f0216e0a.js";import{_ as C}from"./SecondaryButton.669bf289.js";import{_ as D}from"./TextInput.0dbdd313.js";import"./SectionTitle.6a18753c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),b={class:"mt-5"},$={class:"mt-4"},z={__name:"DeleteUserForm",setup(A){const r=d(!1),l=d(null),o=_({password:""}),p=()=>{r.value=!0,setTimeout(()=>l.value.focus(),250)},u=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>l.value.focus(),onFinish:()=>o.reset()})},n=()=>{r.value=!1,o.reset()};return(U,i)=>(y(),w(g,null,{title:e(()=>[s(" Delete Account ")]),description:e(()=>[s(" Permanently delete your account. ")]),content:e(()=>[V,c("div",b,[t(m,{onClick:p},{default:e(()=>[s(" Delete Account ")]),_:1})]),t(k,{show:r.value,onClose:n},{title:e(()=>[s(" Delete Account ")]),content:e(()=>[s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),c("div",$,[t(D,{ref_key:"passwordInput",ref:l,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=f=>a(o).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),t(x,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(C,{onClick:n},{default:e(()=>[s(" Cancel ")]),_:1}),t(m,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:u},{default:e(()=>[s(" Delete Account ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};