import{d as m,o as l,c as n,w as p,a as c,b as r}from"./app.242527d7.js";import"./DarkmodeToggle.51c509db.js";import{_ as u}from"./TextInput.4a328817.js";import{_ as d}from"./AppLayout.4eb9c758.js";import{_ as f}from"./Table.1caa2853.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.80a255e7.js";import"./use-tracked-pointer.19854335.js";const _={id:"search"},x={__name:"Index",props:{trip:Object|String},setup(g){const e=m(""),o=["Nama","Keterangan","Kategori","Kota"],s=["name","desc","category","city"];return(t,a)=>(l(),n(d,{title:"Paket Wisata",name:"Paket Wisata",desc:"lorem ipsum",action:"Tambah Paket",href:t.route("trip.create")},{default:p(()=>[c("form",_,[r(u,{name:"query",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),r(f,{title:o,data:t.$page.props.trip,columns:s,"filter-key":e.value,routes:"trip",slug:!0,view:!0,edit:!0},null,8,["data","filter-key"])]),_:1},8,["href"]))}};export{x as default};