import{d as n,y as i,o as d,e as r,a as e,r as l,n as c}from"./app.321863dc.js";const m={class:"min-h-screen flex bg-white bg-glass bg-fixed"},g={class:"flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},x={class:"mx-auto w-full max-w-sm lg:w-96"},f=e("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900"},"Selamat Datang",-1),_={class:"mt-2 text-sm text-gray-600"},p={class:"mt-8"},u=e("div",{class:"hidden lg:block relative w-0 flex-1"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:"/img/camp.jpg",alt:""})],-1),b={__name:"AuthenticationCard",props:{darkMode:Boolean},setup(h){var o;const t=n((o=JSON.parse(localStorage.getItem("darkmode")))!=null?o:!1);return i(t,s=>{console.log(`darkmode is ${s}`),localStorage.setItem("darkmode",JSON.stringify(s))}),(s,a)=>(d(),r("div",{class:c(["",t.value?"nightwind dark":"nightwind"])},[e("div",m,[e("div",g,[e("div",x,[e("div",null,[e("button",{onClick:a[0]||(a[0]=v=>t.value=!t.value)},[l(s.$slots,"logo")]),f,e("p",_,[l(s.$slots,"title")])]),e("div",p,[l(s.$slots,"default")])])]),u])],2))}};export{b as _};