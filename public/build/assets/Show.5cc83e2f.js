import{_ as p}from"./AppLayout.a602c7ba.js";import c from"./DeleteUserForm.0c9a2727.js";import l from"./LogoutOtherBrowserSessionsForm.fe9fd716.js";import{S as s}from"./SectionBorder.c54bf543.js";import f from"./TwoFactorAuthenticationForm.43247514.js";import u from"./UpdatePasswordForm.bb0df5b2.js";import d from"./UpdateProfileInformationForm.4baf6f9e.js";import{o as e,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.30ef99a5.js";import"./DarkmodeToggle.4e91afcd.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./use-controllable.fb4052b4.js";import"./use-tracked-pointer.8e142985.js";import"./ActionSection.4f3d299d.js";import"./SectionTitle.2e2a8120.js";import"./DangerButton.a3edb042.js";import"./DialogModal.425d2d85.js";import"./InputError.49a5a81e.js";import"./SecondaryButton.6e9b5b7a.js";import"./TextInput.c90dfa85.js";import"./ActionMessage.ff8c0f3f.js";import"./PrimaryButton.c72e7318.js";import"./InputLabel.87d8444c.js";import"./FormSection.a77ae508.js";const $=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profil ",-1),g={class:"max-w-7xl mx-auto py-10"},w={key:0},k={key:1},y={key:2},L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(e(),_(p,{title:"Profil",name:"Profil",desc:"lorem ipsum"},{header:n(()=>[$]),default:n(()=>[i("div",null,[i("div",g,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{L as default};
