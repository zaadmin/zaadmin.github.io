(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{320:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a}));n(124);var o=n(0);function s(){const e=Object(o.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}const r=Symbol("showModuleSymbol");function a(){return{recoShowModule:Object(o.e)(r)}}},321:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return g}));var o=n(375),s=n.n(o),r=(n(340),n(0)),a=n(1),i=function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};const l=/^(\w+)\-/,c=r.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let u=class extends c{getClass(e){return l.test(e)?e.replace(l,(...e)=>"reco"===e[1]?"iconfont "+e[0]:`${e[1]} ${e[0]}`):e}go(e){""!==e&&window.open(e)}render(){return(0,arguments[0])("i",s()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};u=i([a.b],u);var d=u,f=function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};const p=r.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let h=class extends p{setStyle(e){e.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,e.style.transform=this.transform[0],e.style.opacity=0}unsetStyle(e){e.style.transform=this.transform[1],e.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};h=f([a.b],h);var g=h},336:function(e,t,n){"use strict";var o=n(0),s=n(321),r=n(320),a=Object(o.c)({components:{RecoIcon:s.b},setup(e,t){const n=Object(r.b)(),s=Object(o.i)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),a=Object(o.a)(()=>s.focused&&l.value&&l.value.length),i=e=>{for(const t in n.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},l=Object(o.a)(()=>{const e=s.query.trim().toLowerCase();if(!e)return;const{pages:t}=n.$site,o=n.$site.themeConfig.searchMaxSuggestions,r=n.$localePath,a=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,l=[];for(let e=0;e<t.length&&!(l.length>=o);e++){const n=t[e];if(i(n)===r)if(a(n))l.push(n);else if(n.headers)for(let e=0;e<n.headers.length&&!(l.length>=o);e++){const t=n.headers[e];a(t)&&l.push(Object.assign({},n,{path:n.path+"#"+t.slug,header:t}))}}return l}),c=Object(o.a)(()=>(n.$site.themeConfig.nav||[]).length+(n.$site.repo?1:0)<=2);return{showSuggestions:a,suggestions:l,alignRight:c,onUp:()=>{a.value&&(s.focusIndex>0?s.focusIndex--:s.focusIndex=l.value.length-1)},onDown:()=>{a.value&&(s.focusIndex<l.value.length-1?s.focusIndex++:s.focusIndex=0)},focus:e=>{s.focusIndex=e},unfocus:()=>{s.focusIndex=-1},go:e=>{a.value&&(n.$router.push(l.value[e].path),s.query="",s.focusIndex=0)},...Object(o.k)(s)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),i=(n(377),n(2)),l=Object(i.a)(a,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(n,o){return t("li",{key:o,staticClass:"suggestion",class:{focused:o===e.focusIndex},on:{mousedown:function(t){return e.go(o)},mouseenter:function(t){return e.focus(o)}}},[t("a",{attrs:{href:n.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(n.title||n.path))]),e._v(" "),n.header?t("span",{staticClass:"header"},[e._v("> "+e._s(n.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null).exports,c=(n(378),Object(i.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),u=n(338),d=n(373),f=Object(o.c)({components:{NavLink:u.a,DropdownTransition:d.a,RecoIcon:s.b},props:{item:{required:!0}},setup(e,t){const n=Object(o.j)(!1);return{open:n,toggle:()=>{n.value=!n.value}}}}),p=(n(380),Object(i.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(n,o){return t("li",{key:n.link||o,staticClass:"dropdown-item"},["links"===n.type?t("h4",[e._v(e._s(n.text))]):e._e(),e._v(" "),"links"===n.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(n.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null).exports),h=n(16),g=Object(o.c)({components:{NavLink:u.a,DropdownLink:p,RecoIcon:s.b},setup(e,t){const n=Object(r.b)(),s=Object(o.a)(()=>n.$themeLocaleConfig.nav||n.$themeConfig.nav||[]),a=Object(o.a)(()=>{const e=n.$site.locales||{};if(e&&Object.keys(e).length>1){const t=n.$page.path,o=n.$router.options.routes,r=n.$themeConfig.locales||{},a={text:n.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(s=>{const a=e[s],i=r[s]&&r[s].label||a.lang;let l;return a.lang===n.$lang?l=t:(l=t.replace(n.$localeConfig.path,s),o.some(e=>e.path===l)||(l=s)),{text:i,link:l}})};return[...s.value,a]}const t=n.$themeConfig.blogConfig||{},o=s.value.some(e=>!t.category||e.text===(t.category.text||"分类")),r=s.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!o&&Object.hasOwnProperty.call(t,"category")){const e=t.category,o=n.$categories;s.value.splice(parseInt(e.location||2)-1,0,{items:o.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||n.$recoLocales.category,type:"links",icon:"reco-category"})}if(!r&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;s.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||n.$recoLocales.tag,type:"links",icon:"reco-tag"})}return s.value}),i=Object(o.a)(()=>(n.nav||[]).map(e=>Object.assign(Object(h.j)(e),{items:(e.items||[]).map(h.j)}))),l=Object(o.a)(()=>{const{repo:e}=n.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),c=Object(o.a)(()=>{if(!n.repoLink)return"";if(n.$themeConfig.repoLabel)return n.$themeConfig.repoLabel;const e=n.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let n=0;n<t.length;n++){const o=t[n];if(new RegExp(o,"i").test(e))return o}return"Source"});return{userNav:s,nav:a,userLinks:i,repoLink:l,repoLabel:c}}}),m=(n(381),Object(i.a)(g,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports),b=n(382),v=n.n(b);var y={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function _(e){const t=document.querySelector(":root"),n=y[e],o="dark"===e?"light":"dark";for(const e in n)t.style.setProperty(e,n[e]);t.classList.remove(o),t.classList.add(e)}function k(e){if("auto"!==e)return void _(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&_("dark"),n&&_("light"),!t&&!n){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();_(e<6||e>=18?"dark":"light")}}var w={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&k(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&k(e.$data.currentMode)}),k(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,k(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},x=(n(383),Object(i.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(n,o){return t("li",{key:o,class:e.getClass(n.mode),on:{click:function(t){return e.selectMode(n.mode)}}},[e._v(e._s(n.title))])})),0)])}),[],!1,null,null,null).exports),C={name:"UserSettings",directives:{"click-outside":v.a},components:{ModePicker:x,RecoIcon:s.b,ModuleTransition:s.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{k(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{k(e)})),k(e))},methods:{hideMenu(){this.showMenu=!1}}},O=(n(384),Object(i.a)(C,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null).exports),j=Object(o.c)({components:{SidebarButton:c,NavLinks:m,SearchBox:l,AlgoliaSearchBox:{},Mode:O},setup(e,t){const n=Object(r.b)(),s=Object(o.j)(null),a=Object(o.a)(()=>n.$themeLocaleConfig.algolia||n.$themeConfig.algolia||{}),i=Object(o.a)(()=>{a.value&&a.value.apiKey&&a.value.indexName});function l(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(o.f)(()=>{const e=parseInt(l(n.$el,"paddingLeft"))+parseInt(l(n.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?s.value=null:s.value=n.$el.offsetWidth-e-(n.$refs.siteName&&n.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)}),{linksWrapMaxWidth:s,algolia:a,isAlgoliaSearch:i,css:l}}}),$=(n(385),Object(i.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("Mode"),e._v(" "),e.isAlgoliaSearch?t("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?t("SearchBox"):e._e(),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),S=n(371),I=Object(o.c)({name:"Sidebar",components:{SidebarLinks:S.default,NavLinks:m},props:["items"]}),L=(n(388),Object(i.a)(I,(function(){var e=this._self._c;this._self._setupProxy;return e("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),e("NavLinks"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),T=n(372),P=n(353),M=n.n(P),B=Object(o.c)({name:"Password",components:{RecoIcon:s.b},props:{isPage:{type:Boolean,default:!1}},setup(e,t){const n=Object(r.b)(),s=(new Date).getFullYear(),a=Object(o.j)(""),i=Object(o.j)("Konck! Knock!"),{isPage:l}=Object(o.k)(e);return{warningText:i,year:s,key:a,inter:()=>{const e=M()(a.value.trim()),t="pageKey"+window.location.pathname,o=l.value?t:"key";sessionStorage.setItem(o,e);if(!(l.value?(()=>{const e=n.$frontmatter.keys.map(e=>e.toLowerCase()),t="pageKey"+window.location.pathname;return e&&e.indexOf(sessionStorage.getItem(t))>-1})():(()=>{let{keys:e}=n.$themeConfig.keyPage;return e=e.map(e=>e.toLowerCase()),e.indexOf(sessionStorage.getItem("key"))>-1})()))return void(i.value="Key Error");i.value="Key Success";const s=document.getElementById("box").style.width;n.$refs.passwordBtn.style.width=s-2+"px",n.$refs.passwordBtn.style.opacity=1,setTimeout(()=>{window.location.reload()},800)},inputFocus:()=>{i.value="Input Your Key"},inputBlur:()=>{i.value="Konck! Knock!"}}}}),A=(n(392),Object(i.a)(B,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"password-shadow"},[t("h3",{staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title||e.$localeConfig.title))]),e._v(" "),e.isPage?e._e():t("p",{staticClass:"description"},[e._v(e._s(e.$site.description||e.$localeConfig.description))]),e._v(" "),t("label",{staticClass:"inputBox",attrs:{id:"box"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),t("span",[e._v(e._s(e.warningText))]),e._v(" "),t("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])]),e._v(" "),t("div",{staticClass:"footer"},[t("span",[t("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v("vuePress-theme-reco")])],1),e._v(" "),t("span",[t("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),t("a",[e.$themeConfig.author?t("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n          \n        "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=e.year?t("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n        "+e._s(e.year)+"\n      ")])],1)])])}),[],!1,null,"59e6cb88",null).exports),E=n(393),N=Object(o.c)({components:{Sidebar:L,Navbar:$,Password:A,PersonalInfo:T.a},props:{sidebar:{type:Boolean,default:!0},sidebarItems:{type:Array,default:()=>[]},showModule:{type:Boolean,default:!1}},setup(e,t){const n=Object(r.b)(),s=Object(o.j)(!1),a=Object(o.j)(!0),i=Object(o.j)(!0),l=Object(o.j)(!0),c=Object(o.a)(()=>e.sidebarItems.length>0),u=Object(o.a)(()=>n.$themeConfig.keyPage&&!0===n.$themeConfig.keyPage.absoluteEncryption),d=Object(o.a)(()=>{const{themeConfig:e}=n.$site,{frontmatter:t}=n.$page;return!1!==t.navbar&&!1!==e.navbar&&(n.$title||e.logo||e.repo||e.nav||n.$themeLocaleConfig.nav)}),f=Object(o.a)(()=>{const e={"no-navbar":!d.value,"sidebar-open":s.value,"no-sidebar":!c.value},{pageClass:t}=n.$frontmatter||{};return t&&(e[t]=!0),e}),p=()=>{const{keyPage:e}=n.$themeConfig;if(!e||!e.keys||0===e.keys.length)return void(a.value=!0);let{keys:t}=e;t=t.map(e=>e.toLowerCase()),a.value=t&&t.indexOf(sessionStorage.getItem("key"))>-1},h=()=>{let e=n.$frontmatter.keys;e&&0!==e.length?(e=e.map(e=>e.toLowerCase()),i.value=e.indexOf(sessionStorage.getItem("pageKey"+window.location.pathname))>-1):i.value=!0},{showModule:g}=Object(o.k)(e),m=Object(o.a)(()=>!!l.value||g.value);return Object(o.h)(r.a,m),Object(o.f)(()=>{n.$router.afterEach(()=>{s.value=!1}),p(),h(),(()=>{const e=n.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;Object(E.setTimeout)(()=>{l.value=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)},e)})()}),{isSidebarOpen:s,absoluteEncryption:u,shouldShowNavbar:d,shouldShowSidebar:c,pageClasses:f,hasKey:p,hasPageKey:h,isHasKey:a,isHasPageKey:i,toggleSidebar:e=>{s.value="boolean"==typeof e?e:!s.value},firstLoad:l,recoShowModule:m}},watch:{$frontmatter(e,t){this.hasKey(),this.hasPageKey()}}}),H=(n(395),Object(i.a)(N,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"theme-container",class:e.pageClasses},[e.absoluteEncryption?t("div",[t("transition",{attrs:{name:"fade"}},[e.isHasKey?e._e():t("Password")],1),e._v(" "),e.isHasKey?t("div",[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?e._t("default"):t("Password",{attrs:{isPage:!0}})],2):e._e()],1):t("div",[t("transition",{attrs:{name:"fade"}},[t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.firstLoad&&!e.isHasKey,expression:"!firstLoad && !isHasKey"}],key:"out",staticClass:"password-wrapper-out"})],1),e._v(" "),t("div",{class:{hide:e.firstLoad||!e.isHasKey}},[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.isHasPageKey,expression:"!isHasPageKey"}],key:"in",staticClass:"password-wrapper-in",attrs:{isPage:!0}}),e._v(" "),t("div",{class:{hide:!e.isHasPageKey}},[e._t("default")],2)],1)],1)])}),[],!1,null,"5bb33761",null));t.a=H.exports},338:function(e,t,n){"use strict";var o=n(0),s=n(16),r=n(321),a=n(320),i=Object(o.c)({components:{RecoIcon:r.b},props:{item:{required:!0}},setup(e,t){const n=Object(a.b)(),{item:r}=Object(o.k)(e),i=Object(o.a)(()=>Object(s.d)(r.value.link)),l=Object(o.a)(()=>n.$site.locales?Object.keys(n.$site.locales).some(e=>e===i.value):"/"===i.value);return{link:i,exact:l,isExternal:s.f,isMailto:s.g,isTel:s.h}}}),l=n(2),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.a=c.exports},340:function(e,t,n){var o=n(55),s=n(5),r=n(376);o({global:!0},{Reflect:{}}),r(s.Reflect,"Reflect",!0)},341:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){var o,s,r,a,i;o=n(390),s=n(354).utf8,r=n(391),a=n(354).bin,(i=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):s.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=o.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,d=-1732584194,f=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var h=i._ff,g=i._gg,m=i._hh,b=i._ii;for(p=0;p<n.length;p+=16){var v=c,y=u,_=d,k=f;c=h(c,u,d,f,n[p+0],7,-680876936),f=h(f,c,u,d,n[p+1],12,-389564586),d=h(d,f,c,u,n[p+2],17,606105819),u=h(u,d,f,c,n[p+3],22,-1044525330),c=h(c,u,d,f,n[p+4],7,-176418897),f=h(f,c,u,d,n[p+5],12,1200080426),d=h(d,f,c,u,n[p+6],17,-1473231341),u=h(u,d,f,c,n[p+7],22,-45705983),c=h(c,u,d,f,n[p+8],7,1770035416),f=h(f,c,u,d,n[p+9],12,-1958414417),d=h(d,f,c,u,n[p+10],17,-42063),u=h(u,d,f,c,n[p+11],22,-1990404162),c=h(c,u,d,f,n[p+12],7,1804603682),f=h(f,c,u,d,n[p+13],12,-40341101),d=h(d,f,c,u,n[p+14],17,-1502002290),c=g(c,u=h(u,d,f,c,n[p+15],22,1236535329),d,f,n[p+1],5,-165796510),f=g(f,c,u,d,n[p+6],9,-1069501632),d=g(d,f,c,u,n[p+11],14,643717713),u=g(u,d,f,c,n[p+0],20,-373897302),c=g(c,u,d,f,n[p+5],5,-701558691),f=g(f,c,u,d,n[p+10],9,38016083),d=g(d,f,c,u,n[p+15],14,-660478335),u=g(u,d,f,c,n[p+4],20,-405537848),c=g(c,u,d,f,n[p+9],5,568446438),f=g(f,c,u,d,n[p+14],9,-1019803690),d=g(d,f,c,u,n[p+3],14,-187363961),u=g(u,d,f,c,n[p+8],20,1163531501),c=g(c,u,d,f,n[p+13],5,-1444681467),f=g(f,c,u,d,n[p+2],9,-51403784),d=g(d,f,c,u,n[p+7],14,1735328473),c=m(c,u=g(u,d,f,c,n[p+12],20,-1926607734),d,f,n[p+5],4,-378558),f=m(f,c,u,d,n[p+8],11,-2022574463),d=m(d,f,c,u,n[p+11],16,1839030562),u=m(u,d,f,c,n[p+14],23,-35309556),c=m(c,u,d,f,n[p+1],4,-1530992060),f=m(f,c,u,d,n[p+4],11,1272893353),d=m(d,f,c,u,n[p+7],16,-155497632),u=m(u,d,f,c,n[p+10],23,-1094730640),c=m(c,u,d,f,n[p+13],4,681279174),f=m(f,c,u,d,n[p+0],11,-358537222),d=m(d,f,c,u,n[p+3],16,-722521979),u=m(u,d,f,c,n[p+6],23,76029189),c=m(c,u,d,f,n[p+9],4,-640364487),f=m(f,c,u,d,n[p+12],11,-421815835),d=m(d,f,c,u,n[p+15],16,530742520),c=b(c,u=m(u,d,f,c,n[p+2],23,-995338651),d,f,n[p+0],6,-198630844),f=b(f,c,u,d,n[p+7],10,1126891415),d=b(d,f,c,u,n[p+14],15,-1416354905),u=b(u,d,f,c,n[p+5],21,-57434055),c=b(c,u,d,f,n[p+12],6,1700485571),f=b(f,c,u,d,n[p+3],10,-1894986606),d=b(d,f,c,u,n[p+10],15,-1051523),u=b(u,d,f,c,n[p+1],21,-2054922799),c=b(c,u,d,f,n[p+8],6,1873313359),f=b(f,c,u,d,n[p+15],10,-30611744),d=b(d,f,c,u,n[p+6],15,-1560198380),u=b(u,d,f,c,n[p+13],21,1309151649),c=b(c,u,d,f,n[p+4],6,-145523070),f=b(f,c,u,d,n[p+11],10,-1120210379),d=b(d,f,c,u,n[p+2],15,718787259),u=b(u,d,f,c,n[p+9],21,-343485551),c=c+v>>>0,u=u+y>>>0,d=d+_>>>0,f=f+k>>>0}return o.endian([c,u,d,f])})._ff=function(e,t,n,o,s,r,a){var i=e+(t&n|~t&o)+(s>>>0)+a;return(i<<r|i>>>32-r)+t},i._gg=function(e,t,n,o,s,r,a){var i=e+(t&o|n&~o)+(s>>>0)+a;return(i<<r|i>>>32-r)+t},i._hh=function(e,t,n,o,s,r,a){var i=e+(t^n^o)+(s>>>0)+a;return(i<<r|i>>>32-r)+t},i._ii=function(e,t,n,o,s,r,a){var i=e+(n^(t|~o))+(s>>>0)+a;return(i<<r|i>>>32-r)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=o.wordsToBytes(i(e,t));return t&&t.asBytes?n:t&&t.asString?a.bytesToString(n):o.bytesToHex(n)}},354:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},355:function(e,t,n){},356:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(16),r=n(373),a=n(320),i=Object(o.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:r.a},setup:(e,t)=>(Object(a.b)().$options.components.SidebarLinks=n(371).default,{isActive:s.e})}),l=(n(386),n(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;var u=Object(o.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:o,$themeConfig:r,$themeLocaleConfig:a},props:{item:i,sidebarDepth:l}}){const c=Object(s.e)(o,i.path),u="auto"===i.type?c||i.children.some(e=>Object(s.e)(o,i.basePath+"#"+e.slug)):c;return function(e,t,n,o){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:o,"sidebar-link":!0}},n)}(e,i.path,i.title||i.path,u)}}),d=(n(387),Object(l.a)(u,void 0,void 0,!1,null,null,null).exports);var f=Object(o.c)({name:"SidebarLinks",components:{SidebarGroup:c,SidebarLink:d},props:["items","depth","sidebarDepth"],setup(e,t){const n=Object(a.b)(),{items:r}=Object(o.k)(e),i=Object(o.j)(0),l=()=>{const e=function(e,t){for(let n=0;n<t.length;n++){const o=t[n];if("group"===o.type&&o.children.some(t=>"page"===t.type&&Object(s.e)(e,t.path)))return n}return-1}(n.$route,r.value);e>-1&&(i.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(n.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const n=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=t.offsetTop,s=t.offsetTop+t.offsetHeight,r=e.scrollTop;s<=n+r||(e.scrollTop=s+5-n);o>=r||(e.scrollTop=o-5)},d=e=>d(n.$route,e.regularPath);return l(),Object(o.f)(()=>{(()=>{const e=decodeURIComponent(n.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let n=0;n<t.length;n++)if(-1!=decodeURIComponent(t[n].getAttribute("href")).indexOf(e))return t[n].click(),void c()})(),u()}),Object(o.g)(()=>u()),{openGroupIndex:i,refreshIndex:l,toggleGroup:e=>{n.openGroupIndex=e===n.openGroupIndex?-1:e},isActive:d}},watch:{$route(){this.refreshIndex()}}}),p=Object(l.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,o){return t("li",{key:o},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:o===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(o)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},372:function(e,t,n){"use strict";var o=n(0),s=n(321),r=n(31),a=n(320),i=Object(o.c)({components:{RecoIcon:s.b},setup(e,t){const n=Object(a.b)();return{socialLinks:Object(o.a)(()=>(n.$themeConfig.blogConfig&&n.$themeConfig.blogConfig.socialLinks||[]).map(e=>(e.color||(e.color=Object(r.b)()),e)))}}}),l=(n(389),n(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"personal-info-wrapper"},[e.$themeConfig.authorAvatar?t("img",{staticClass:"personal-img",attrs:{src:e.$withBase(e.$themeConfig.authorAvatar),alt:"author-avatar"}}):e._e(),e._v(" "),e.$themeConfig.author?t("h3",{staticClass:"name"},[e._v("\n    "+e._s(e.$themeConfig.author)+"\n  ")]):e._e(),e._v(" "),t("div",{staticClass:"num"},[t("div",[t("h3",[e._v(e._s(e.$recoPosts.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.article))])]),e._v(" "),t("div",[t("h3",[e._v(e._s(e.$tags.list.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.tag))])])]),e._v(" "),t("ul",{staticClass:"social-links"},e._l(e.socialLinks,(function(e,n){return t("li",{key:n,staticClass:"social-item"},[t("reco-icon",{style:{color:e.color},attrs:{icon:e.icon,link:e.link}})],1)})),0),e._v(" "),t("hr")])}),[],!1,null,"1fad0c41",null);t.a=c.exports},373:function(e,t,n){"use strict";var o=n(0),s=Object(o.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),r=(n(379),n(2)),a=Object(r.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.a=a.exports},375:function(e,t,n){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}var s=["attrs","props","domProps"],r=["class","style","directives"],a=["on","nativeOn"],i=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==s.indexOf(n))e[n]=o({},e[n],t[n]);else if(-1!==r.indexOf(n)){var l=e[n]instanceof Array?e[n]:[e[n]],c=t[n]instanceof Array?t[n]:[t[n]];e[n]=[].concat(l,c)}else if(-1!==a.indexOf(n))for(var u in t[n])if(e[n][u]){var d=e[n][u]instanceof Array?e[n][u]:[e[n][u]],f=t[n][u]instanceof Array?t[n][u]:[t[n][u]];e[n][u]=[].concat(d,f)}else e[n][u]=t[n][u];else if("hook"===n)for(var p in t[n])e[n][p]=e[n][p]?i(e[n][p],t[n][p]):t[n][p];else e[n]=t[n];else e[n]=t[n];return e}),{})}},376:function(e,t,n){var o=n(22).f,s=n(11),r=n(32)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!s(e,r)&&o(e,r,{configurable:!0,value:t})}},377:function(e,t,n){"use strict";n(341)},378:function(e,t,n){"use strict";n(342)},379:function(e,t,n){"use strict";n(343)},380:function(e,t,n){"use strict";n(344)},381:function(e,t,n){"use strict";n(345)},382:function(e,t){function n(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function o(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,s){if(!n(t))return;function r(t){if(s.context){var n=t.path||t.composedPath&&t.composedPath();n&&n.length>0&&n.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var n=0,o=t.length;n<o;n++)try{if(e.contains(t[n]))return!0;if(t[n].contains(e))return!1}catch(e){return!1}return!1}(s.context.popupItem,n)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:r,callback:t.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";!o(s)&&document.addEventListener(a,r)},update:function(e,t){n(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,n){const s="ontouchstart"in document.documentElement?"touchstart":"click";!o(n)&&e.__vueClickOutside__&&document.removeEventListener(s,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},383:function(e,t,n){"use strict";n(346)},384:function(e,t,n){"use strict";n(347)},385:function(e,t,n){"use strict";n(348)},386:function(e,t,n){"use strict";n(349)},387:function(e,t,n){"use strict";n(350)},388:function(e,t,n){"use strict";n(351)},389:function(e,t,n){"use strict";n(352)},390:function(e,t){var n,o;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&o.rotl(e,8)|4278255360&o.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=o.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],o=0;o<e.length;o+=3)for(var s=e[o]<<16|e[o+1]<<8|e[o+2],r=0;r<4;r++)8*o+6*r<=8*e.length?t.push(n.charAt(s>>>6*(3-r)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],o=0,s=0;o<e.length;s=++o%4)0!=s&&t.push((n.indexOf(e.charAt(o-1))&Math.pow(2,-2*s+8)-1)<<2*s|n.indexOf(e.charAt(o))>>>6-2*s);return t}},e.exports=o},391:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},392:function(e,t,n){"use strict";n(355)},393:function(e,t,n){var o="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(s.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(s.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(394),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},394:function(e,t){!function(e,t){"use strict";if(!e.setImmediate){var n,o,s,r,a,i=1,l={},c=!1,u=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){p(e.data)},n=function(e){s.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(o=u.documentElement,n=function(e){var t=u.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):n=function(e){setTimeout(p,0,e)}:(r="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&p(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),n=function(t){e.postMessage(r+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o+1];var s={callback:e,args:t};return l[i]=s,n(i),i++},d.clearImmediate=f}function f(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e);else{var t=l[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),c=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},395:function(e,t,n){"use strict";n(356)}}]);