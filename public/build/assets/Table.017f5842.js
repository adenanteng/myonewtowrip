import{h,g as N}from"./DarkmodeToggle.1c0f2e2f.js";/* empty css                                              */import{d as b,j as S,o as t,e as s,h as B,a as i,F as d,i as v,n as C,g as c,t as p,b as V,w as u,c as g,f}from"./app.664b1cfa.js";const _={class:"-mx-4 shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-2xl"},K={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-2xl"},O=["onClick"],U={class:"flex items-center"},$={class:"px-3 py-4 text-sm text-gray-700"},j={key:0,class:"py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},z={class:"relative"},D=i("button",{class:"text-primary-600 hover:text-primary-900"}," Aksi ",-1),F={key:1,class:"p-2 text-gray-900"},G={__name:"Table",props:{title:Array,data:Array,columns:Array,filterKey:String,routes:String,slug:{type:Boolean,default:!1},view:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},setup(r){const k=r,y=b(""),x=b(k.columns.reduce((e,o)=>(e[o]=1,e),{})),w=S(()=>{let{data:e,filterKey:o}=k;o&&(o=o.toLowerCase(),e=e.filter(l=>Object.keys(l).some(n=>String(l[n]).toLowerCase().indexOf(o)>-1)));const a=y.value;if(a){const l=x.value[a];e=e.slice().sort((n,m)=>(n=n[a],m=m[a],(n===m?0:n>m?1:-1)*l))}return e});function A(e){y.value=e,x.value[e]*=-1}function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}return(e,o)=>(t(),s("div",_,[B(w).length?(t(),s("table",K,[i("thead",null,[i("tr",null,[(t(!0),s(d,null,v(r.columns,(a,l)=>(t(),s("th",{onClick:n=>A(a),class:C([{active:y.value==a},"py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"])},[i("div",U,[c(p(L(r.title[l]))+" ",1),i("span",{class:C(["fa-regular ml-1 text-xs",x.value[a]>0?"fa-angle-down":"fa-angle-up"])},null,2)])],10,O))),256))])]),i("tbody",null,[(t(!0),s(d,null,v(B(w),a=>(t(),s("tr",null,[(t(!0),s(d,null,v(r.columns,l=>(t(),s("td",$,p(a[l]),1))),256)),r.routes?(t(),s("td",j,[i("div",z,[V(N,{align:"right",width:"48"},{trigger:u(()=>[D]),content:u(()=>[r.slug?(t(),s(d,{key:0},[r.view?(t(),g(h,{key:0,href:e.route(r.routes+".show",a.slug)},{default:u(()=>[c(" Lihat ")]),_:2},1032,["href"])):f("",!0),r.edit?(t(),g(h,{key:1,href:e.route(r.routes+".edit",a.slug)},{default:u(()=>[c(" Ubah ")]),_:2},1032,["href"])):f("",!0)],64)):(t(),s(d,{key:1},[r.view?(t(),g(h,{key:0,href:e.route(r.routes+".show",a)},{default:u(()=>[c(" Lihat ")]),_:2},1032,["href"])):f("",!0),r.edit?(t(),g(h,{key:1,href:e.route(r.routes+".edit",a)},{default:u(()=>[c(" Ubah ")]),_:2},1032,["href"])):f("",!0)],64))]),_:2},1024)])])):f("",!0)]))),256))])])):(t(),s("p",F,"No matches found."))]))}};export{G as _};
