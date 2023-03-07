import{d as _,o as l,c as x,w as d,a as t,h as o,e as w,i as T,F as k,b as h,f as H,n as c,B as p,C as u,t as i,g as y}from"./app.6527f19c.js";import{_ as M}from"./LandingLayout.8ec4a287.js";/* empty css                 */import{C as L,P as C,S}from"./carousel.es.7e53dc9e.js";import{u as m,S as g,E as P}from"./index.e6600f08.js";import"./DarkmodeToggle.3f697955.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"relative pb-10 pt-32 sm:px-10"},$={class:"lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-5 gap-8 lg:items-start"},B={class:"relative sm:py-16 lg:py-0 lg:col-span-3"},z={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"},E={class:"carousel__item w-full aspect-video rounded-2xl relative"},N=["src"],V={class:"hidden lg:block"},j={class:"border-b border-gray-300"},D={class:"-mb-px flex space-x-8","aria-label":"Tabs"},F={class:"my-5"},I=["innerHTML"],q=["innerHTML"],K={class:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:col-span-2"},O={class:"pt-12 sm:pt-16 lg:pt-20"},R={class:"text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl capitalize"},G={class:"capitalize text-primary-500"},J=t("i",{class:"fa-regular fa-location-dot mr-2"},null,-1),Q=t("p",{class:"text-gray-700 mt-3"},"Mulai dari",-1),U={class:"max-w-2xl text-gray-900 text-3xl font-bold capitalize"},W=t("span",{class:"text-base font-normal"},"/ tiket",-1),X=["href"],Y={class:"text-gray-500 space-y-6"},Z={class:"block lg:hidden mt-10"},tt={class:""},et={class:"-mb-px flex space-x-8","aria-label":"Tabs"},st={class:"my-5"},at=["innerHTML"],rt=["innerHTML"],it={class:"mt-10 pt-10 flex items-center border-t border-gray-300"},ot={class:"flex-shrink-0"},nt=["src"],lt={class:"ml-3"},dt={class:"text-sm font-medium text-gray-900"},ct={class:"hover:underline"},pt={class:"flex space-x-1 text-sm text-gray-500"},vt={__name:"Show",props:{trip:Object},setup(e){const n=e,v=m({content:n.trip.content,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[g.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1});m({content:n.trip.itinerary,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[g.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1}),m({content:n.trip.include,editorProps:{attributes:{class:"prose prose-sm text-sm text-gray-900"}},extensions:[g.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-500"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],autofocus:!1,editable:!1});const s=_(1);function f(b){return b.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return(b,a)=>(l(),x(M,{title:n.trip.name},{default:d(()=>[t("div",A,[t("div",$,[t("div",B,[t("div",z,[e.trip.media[0]?(l(),x(o(L),{key:0,"items-to-show":1,"wrap-around":!0,transition:1e3,autoplay:5e3},{slides:d(()=>[(l(!0),w(k,null,T(e.trip.media,r=>(l(),x(o(S),{key:r.id},{default:d(()=>[t("div",E,[t("img",{class:"object-cover w-full aspect-video rounded-2xl",src:r.original_url},null,8,N)])]),_:2},1024))),128))]),addons:d(()=>[h(o(C))]),_:1})):H("",!0),t("div",V,[t("div",j,[t("nav",D,[t("button",{onClick:a[0]||(a[0]=r=>s.value=1),class:c([s.value==1?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Itinerary ",2),t("button",{onClick:a[1]||(a[1]=r=>s.value=2),class:c([s.value==2?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Tiket Sudah Termasuk ",2)]),t("div",F,[p(t("p",{class:"text-gray-500",innerHTML:e.trip.itinerary},null,8,I),[[u,s.value==1]]),p(t("p",{class:"text-gray-500",innerHTML:e.trip.include},null,8,q),[[u,s.value==2]])])])])])]),t("div",K,[t("div",O,[t("h2",R,i(e.trip.name),1),t("p",G,[J,y(i(e.trip.location)+", "+i(e.trip.city),1)]),Q,t("h3",U,[y(" Rp. "+i(f(e.trip.price))+" ",1),W]),t("a",{target:"_blank",class:"mt-2 mb-5 nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition",href:"https://api.whatsapp.com/send?phone=6285156875180&text=Halo%20Myonetwotrip%20saya%20mau%20order%20https://myonetwotrip.com/destinasi/"+e.trip.slug}," Pesan Tiket Sekarang ",8,X),t("div",Y,[h(o(P),{editor:o(v),required:""},null,8,["editor"])])]),t("div",Z,[t("div",tt,[t("nav",et,[t("button",{onClick:a[2]||(a[2]=r=>s.value=1),class:c([s.value==1?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Itinerary ",2),t("button",{onClick:a[3]||(a[3]=r=>s.value=2),class:c([s.value==2?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Tiket Sudah Termasuk ",2)]),t("div",st,[p(t("p",{class:"text-gray-500",innerHTML:e.trip.itinerary},null,8,at),[[u,s.value==1]]),p(t("p",{class:"text-gray-500",innerHTML:e.trip.include},null,8,rt),[[u,s.value==2]])])])]),t("div",it,[t("div",ot,[t("img",{class:"h-10 w-10 rounded-full",src:e.trip.user.profile_photo_url,alt:""},null,8,nt)]),t("div",lt,[t("div",dt,[t("span",ct,i(e.trip.user.name),1)]),t("div",pt,[t("span",null,i(e.trip.user.email),1)])])])])])])]),_:1},8,["title"]))}};export{vt as default};
