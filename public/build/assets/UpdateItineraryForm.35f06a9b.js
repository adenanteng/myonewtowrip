import{u as d,o as u,c as _,w as a,g as s,a as f,b as t,h as e,n as y}from"./app.6527f19c.js";import{_ as g}from"./ActionMessage.f03bea3d.js";import{_ as S}from"./FormSection.7aad9c2d.js";import{_ as V}from"./InputError.f05956d3.js";import{_ as b}from"./PrimaryButton.9c9c0130.js";import{_ as B}from"./EditorInput.0d37514a.js";import"./SectionTitle.a465b970.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.e6600f08.js";const $={class:"col-span-6 sm:col-span-6"},j={__name:"UpdateItineraryForm",props:{trip:Object|String},setup(m){var i;const o=m,r=d({id:o.trip.id,itinerary:(i=o.trip.itinerary)!=null?i:null}),c=()=>{r.put(route("trip.update",o.trip),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},p=()=>{};return(h,n)=>(u(),_(S,{onSubmitted:c},{title:a(()=>[s(" Itinerary ")]),description:a(()=>[s(" Update your account's profile information and email address. ")]),form:a(()=>[f("div",$,[t(B,{modelValue:e(r).itinerary,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).itinerary=l)},null,8,["modelValue"]),t(V,{message:e(r).errors.itinerary,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[t(g,{on:e(r).recentlySuccessful,class:"mr-3"},{default:a(()=>[s(" Berhasil disimpan. ")]),_:1},8,["on"]),t(b,{class:y({"opacity-25":e(r).processing}),disabled:e(r).processing},{default:a(()=>[s(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};