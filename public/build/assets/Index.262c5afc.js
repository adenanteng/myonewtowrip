import{d as m,o as l,c as n,w as c,a as p,b as r}from"./app.664b1cfa.js";import"./DarkmodeToggle.1c0f2e2f.js";import{_ as u}from"./AppLayout.8f7eef3f.js";import{_ as d}from"./TextInput.03709376.js";import{_ as f}from"./Table.017f5842.js";import"./_plugin-vue_export-helper.cdc0426e.js";/* empty css                                              */const _={id:"search"},$={__name:"Index",props:{trip:Object|String},setup(g){const e=m(""),o=["Nama","Keterangan","Kategori","Kota"],s=["name","desc","category","city"];return(t,a)=>(l(),n(u,{title:"Paket Wisata",name:"Paket Wisata",desc:"lorem ipsum",action:"Tambah Paket",href:t.route("trip.create")},{default:c(()=>[p("form",_,[r(d,{name:"query",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),r(f,{title:o,data:t.$page.props.trip,columns:s,"filter-key":e.value,routes:"trip",slug:!0,view:!0,edit:!0},null,8,["data","filter-key"])]),_:1},8,["href"]))}};export{$ as default};
