import{_ as x}from"./LandingLayout.d1633db7.js";import{_ as g}from"./PrimaryButton.f9117039.js";import{d as w,o as s,c as d,w as r,b as u,e as c,i as b,F as v,h as p,a as t,t as a,g as o}from"./app.664b1cfa.js";import{C as y,S as k}from"./carousel.es.0e4916f2.js";import"./DarkmodeToggle.1c0f2e2f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={class:"carousel__item w-screen relative"},j=["src"],S={key:1,class:"block h-screen w-full flex justify-center items-center"},B=t("i",{class:"fa-duotone fa-image text-primary-600 text-7xl"},null,-1),$=[B],z={class:"absolute px-10 w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-900 dark:from-gray-900 transition duration-1000"},L={class:"text-left justify-start max-w-screen-xl w-full"},N={class:"max-w-2xl text-white text-4xl sm:text-6xl font-bold capitalize nightwind-prevent"},V={class:"max-w-xl text-gray-100 text-base mt-1 nightwind-prevent"},D=t("p",{class:"text-gray-100 nightwind-prevent mt-3"},"Mulai dari",-1),F={class:"max-w-2xl text-white text-xl sm:text-3xl font-bold capitalize nightwind-prevent"},E=t("span",{class:"text-base font-normal"},"/ tiket",-1),M={class:"text-gray-100 mt-3 text-base nightwind-prevent capitalize"},O=t("i",{class:"fa-regular fa-location-dot mr-2"},null,-1),P={class:"mt-3 flex space-x-2 nightwind-prevent-block hidden sm:block"},R=t("i",{class:"text-white fa-regular fa-arrow-left ml-2 rounded-full p-1 border border-transparent group-hover:border-white"},null,-1),T=t("i",{class:"text-white fa-regular fa-arrow-right mr-2 rounded-full p-1 border border-transparent group-hover:border-white"},null,-1),J={__name:"Welcome",props:{trip:Object},setup(_){const h=_,l=w(null);function f(i){return i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return(i,n)=>(s(),d(x,{title:"Beranda",desc:"Lorem ipsum"},{default:r(()=>[u(p(y),{"items-to-show":1,"wrap-around":!0,transition:1e3,autoplay:1e4,ref_key:"myCarousel",ref:l},{slides:r(()=>[(s(!0),c(v,null,b(h.trip,e=>(s(),d(p(k),{key:e},{default:r(()=>[t("div",C,[e.media[0]?(s(),c("img",{key:0,class:"object-cover w-full h-screen",src:e.media[0].original_url},null,8,j)):(s(),c("span",S,$)),t("div",z,[t("div",L,[t("h1",N,a(e.name),1),t("p",V,a(e.desc),1),D,t("h3",F,[o(" Rp. "+a(f(e.price))+" ",1),E]),t("p",M,[O,o(a(e.location)+", "+a(e.city),1)]),u(g,{class:"mt-3",as:"a",href:i.route("trip.show",e)},{default:r(()=>[o(" Lihat Destinasi ")]),_:2},1032,["href"]),t("div",P,[t("button",{class:"text-gray-400 hover:text-white hover:underline group",onClick:n[0]||(n[0]=m=>l.value.prev())},[o(" Sebelumnya "),R]),t("button",{class:"text-gray-400 hover:text-white hover:underline group",onClick:n[1]||(n[1]=m=>l.value.next())},[T,o(" Selanjutnya ")])])])])])]),_:2},1024))),128))]),addons:r(()=>[]),_:1},512)]),_:1}))}};export{J as default};
