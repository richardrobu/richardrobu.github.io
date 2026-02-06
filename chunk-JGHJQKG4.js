import{Ra as wt,S as I,T as bt,Ta as Nt,Ub as Pt,V as Tt,Y as x,Za as F,a as C,aa as vt,ba as Ot,ca as Ct,da as At,fc as Dt,gc as lt,h as _t,la as Rt,lc as rt,xc as Mt,ya as Lt,yb as It,zb as xt}from"./chunk-554RCZYV.js";var st={};function De(t="pui_id_"){return st.hasOwnProperty(t)||(st[t]=0),st[t]++,`${t}${st[t]}`}function he(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function ke(t,i){if(t&&i){let e=n=>{he(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function He(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function $e(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Ft(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function pt(t,i={}){if(Ft(t)){let e=(n,r)=>{var o,s;let a=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((c,l)=>{if(l!=null){let p=typeof l;if(p==="string"||p==="number")c.push(l);else if(p==="object"){let f=Array.isArray(l)?e(n,l):Object.entries(l).map(([d,u])=>n==="style"&&(u||u===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?d:void 0);c=f.length?c.concat(f.filter(d=>!!d)):c}}return c},a)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?pt(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function We(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Ue(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Be(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Ve(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Ge(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function kt(t,i="",e){Ft(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Ht(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function B(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function me(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!B(t)}function A(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function _(t,...i){return me(t)?t(...i):t}function P(t,i=!0){return typeof t=="string"&&(i||t!=="")}function $t(t){return P(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Wt(t,i="",e={}){let n=$t(i).split("."),r=n.shift();return r?A(t)?Wt(_(t[Object.keys(t).find(o=>$t(o)===r)||""],e),n.join("."),e):void 0:_(t,e)}function ot(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Ut(t){return h(t)&&!isNaN(t)}function E(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function M(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function at(t){return P(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function ut(t){return P(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function ge(){let t=[],i=(s,a,c=999)=>{let l=r(s,a,c),p=l.value+(l.key===s?0:c)+1;return t.push({key:s,value:p}),p},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>r(s,a).value,r=(s,a,c=0)=>[...t].reverse().find(l=>a?!0:l.key===s)||{key:s,value:c},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,c)=>{a&&(a.style.zIndex=String(i(s,!0,c)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var qe=ge();var y=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ye=["*"];var ui=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=vt({type:t,selectors:[["p-footer"]],ngContentSelectors:ye,decls:1,vars:0,template:function(n,r){n&1&&(It(),xt(0))},encapsulation:2})}return t})(),di=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(wt(Nt))};static \u0275dir=Ct({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Ot({type:t});static \u0275inj=bt({imports:[Mt]})}return t})();var Se=Object.defineProperty,Ee=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertySymbols,Gt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Bt=(t,i,e)=>i in t?Se(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,v=(t,i)=>{for(var e in i||(i={}))Gt.call(i,e)&&Bt(t,e,i[e]);if(ct)for(var e of ct(i))Kt.call(i,e)&&Bt(t,e,i[e]);return t},ft=(t,i)=>Ee(t,_e(i)),R=(t,i)=>{var e={};for(var n in t)Gt.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&ct)for(var n of ct(t))i.indexOf(n)<0&&Kt.call(t,n)&&(e[n]=t[n]);return e};var be=Ht(),O=be;function Vt(t,i){ot(t)?t.push(...i||[]):A(t)&&Object.assign(t,i)}function Te(t){return A(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function ve(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ht(t="",i=""){return ve(`${P(t,!1)&&P(i,!1)?`${t}-`:t}${i}`)}function jt(t="",i=""){return`--${ht(t,i)}`}function Oe(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Yt(t,i="",e="",n=[],r){if(P(t)){let o=/{([^}]*)}/g,s=t.trim();if(Oe(s))return;if(E(s,o)){let a=s.replaceAll(o,p=>{let d=p.replace(/{|}/g,"").split(".").filter(u=>!n.some(g=>E(u,g)));return`var(${jt(e,at(d.join("-")))}${h(r)?`, ${r}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return E(a.replace(l,"0"),c)?`calc(${a})`:a}return s}else if(Ut(t))return t}function Ce(t,i,e){P(i,!1)&&t.push(`${i}:${e};`)}function k(t,i){return t?`${t}{${i}}`:""}var H=(...t)=>Ae(m.getTheme(),...t),Ae=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=m.defaults||{},{prefix:s,transform:a}=t?.options||o||{},l=E(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||B(n)&&a==="strict"?m.getTokenValue(i):Yt(l,void 0,s,[r.excludedKeyRegex],e)}return""};function Re(t,i={}){let e=m.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(l,p="")=>Object.entries(l).reduce((f,[d,u])=>{let g=E(d,o)?ht(p):ht(p,at(d)),S=Te(u);if(A(S)){let{variables:L,tokens:w}=s(S,g);Vt(f.tokens,w),Vt(f.variables,L)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),Ce(f.variables,jt(g),Yt(S,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:a,tokens:c}=s(t,n);return{value:a,tokens:c,declarations:a.join(""),css:k(r,a.join(""))}}var T={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Re(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,a,c,l,p,f;let{preset:d,options:u}=i,g,S,L,w,N,D,b;if(h(d)&&u.transform!=="strict"){let{primitive:V,semantic:G,extend:K}=d,$=G||{},{colorScheme:j}=$,Y=R($,["colorScheme"]),z=K||{},{colorScheme:q}=z,W=R(z,["colorScheme"]),U=j||{},{dark:Z}=U,J=R(U,["dark"]),Q=q||{},{dark:X}=Q,tt=R(Q,["dark"]),et=h(V)?this._toVariables({primitive:V},u):{},it=h(Y)?this._toVariables({semantic:Y},u):{},nt=h(J)?this._toVariables({light:J},u):{},gt=h(Z)?this._toVariables({dark:Z},u):{},yt=h(W)?this._toVariables({semantic:W},u):{},St=h(tt)?this._toVariables({light:tt},u):{},Et=h(X)?this._toVariables({dark:X},u):{},[Zt,Jt]=[(o=et.declarations)!=null?o:"",et.tokens],[Qt,Xt]=[(s=it.declarations)!=null?s:"",it.tokens||[]],[te,ee]=[(a=nt.declarations)!=null?a:"",nt.tokens||[]],[ie,ne]=[(c=gt.declarations)!=null?c:"",gt.tokens||[]],[re,se]=[(l=yt.declarations)!=null?l:"",yt.tokens||[]],[oe,ae]=[(p=St.declarations)!=null?p:"",St.tokens||[]],[ce,le]=[(f=Et.declarations)!=null?f:"",Et.tokens||[]];g=this.transformCSS(t,Zt,"light","variable",u,n,r),S=Jt;let pe=this.transformCSS(t,`${Qt}${te}`,"light","variable",u,n,r),ue=this.transformCSS(t,`${ie}`,"dark","variable",u,n,r);L=`${pe}${ue}`,w=[...new Set([...Xt,...ee,...ne])];let de=this.transformCSS(t,`${re}${oe}color-scheme:light`,"light","variable",u,n,r),fe=this.transformCSS(t,`${ce}color-scheme:dark`,"dark","variable",u,n,r);N=`${de}${fe}`,D=[...new Set([...se,...ae,...le])],b=_(d.css,{dt:H})}return{primitive:{css:g,tokens:S},semantic:{css:L,tokens:w},global:{css:N,tokens:D},style:b}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var a,c,l;let p,f,d;if(h(i)&&e.transform!=="strict"){let u=t.replace("-directive",""),g=i,{colorScheme:S,extend:L,css:w}=g,N=R(g,["colorScheme","extend","css"]),D=L||{},{colorScheme:b}=D,V=R(D,["colorScheme"]),G=S||{},{dark:K}=G,$=R(G,["dark"]),j=b||{},{dark:Y}=j,z=R(j,["dark"]),q=h(N)?this._toVariables({[u]:v(v({},N),V)},e):{},W=h($)?this._toVariables({[u]:v(v({},$),z)},e):{},U=h(K)?this._toVariables({[u]:v(v({},K),Y)},e):{},[Z,J]=[(a=q.declarations)!=null?a:"",q.tokens||[]],[Q,X]=[(c=W.declarations)!=null?c:"",W.tokens||[]],[tt,et]=[(l=U.declarations)!=null?l:"",U.tokens||[]],it=this.transformCSS(u,`${Z}${Q}`,"light","variable",e,r,o,s),nt=this.transformCSS(u,tt,"dark","variable",e,r,o,s);p=`${it}${nt}`,f=[...new Set([...J,...X,...et])],d=_(w,{dt:H})}return{css:p,tokens:f,style:d}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:a}=i,c=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:c,options:a,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:a,options:c}=i,l=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:l,options:c,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${_(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),a=Object.entries(n).reduce((c,[l,p])=>c.push(`${l}="${p}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[l,p])=>{if(p?.css){let f=M(p?.css),d=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${d}" ${a}>${f}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let a={name:t,theme:i,params:e,set:r,defaults:o},c=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,l=Object.entries(n).reduce((p,[f,d])=>p.push(`${f}="${d}"`)&&p,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${M(c)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let a=E(o,i.variable.excludedKeyRegex)?e:e?`${e}.${ut(o)}`:ut(o),c=n?`${n}.${o}`:o;A(s)?this.createTokens(s,i,a,c,r):(r[a]||(r[a]={paths:[],computed(l,p={}){var f,d;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):l&&l!=="none"?(d=this.paths.find(u=>u.scheme===l))==null?void 0:d.computed(l,p.binding):this.paths.map(u=>u.computed(u.scheme,p[u.scheme]))}}),r[a].paths.push({path:c,value:s,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,p={}){let f=/{([^}]*)}/g,d=s;if(p.name=this.path,p.binding||(p.binding={}),E(s,f)){let g=s.trim().replaceAll(f,w=>{var N;let D=w.replace(/{|}/g,""),b=(N=r[D])==null?void 0:N.computed(l,p);return ot(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b?.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,L=/var\([^)]+\)/g;d=E(g.replace(L,"0"),S)?`calc(${g})`:g}return B(p.binding)&&delete p.binding,{colorScheme:l,path:this.path,paths:p,value:d.includes("undefined")?void 0:d}}}))}),r},getTokenValue(t,i,e){var n;let o=(c=>c.split(".").filter(p=>!E(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},l)=>{let p=l,{colorScheme:f}=p,d=R(p,["colorScheme"]);return c[f]=d,c},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?k(h(i)?`${t}${i},${t} ${i}`:t,n):k(t,h(i)?k(i,n):n)},transformCSS(t,i,e,n,r={},o,s,a){if(h(i)){let{cssLayer:c}=r;if(n!=="style"){let l=this.getColorSchemeOption(r,s);i=e==="dark"?l.reduce((p,{type:f,selector:d})=>(h(d)&&(p+=d.includes("[CSS]")?d.replace("[CSS]",i):this.getSelectorRule(d,a,f,i)),p),""):k(a??":root",i)}if(c){let l={name:"primeui",order:"primeui"};A(c)&&(l.name=_(c.name,{name:t,type:n})),h(l.name)&&(i=k(`@layer ${l.name}`,i),o?.layerNames(l.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ft(v({},i),{options:v(v({},this.defaults.options),i.options)}),this._tokens=T.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),O.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ft(v({},this.theme),{preset:t}),this._tokens=T.createTokens(t,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",t),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ft(v({},this.theme),{options:t}),this.clearLoadedStyleNames(),O.emit("options:change",t),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return T.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return T.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPreset(r)},getLayerOrderCSS(t=""){return T.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return T.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return T.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return T.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),O.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&O.emit("theme:load"))}};var Le=0,zt=(()=>{class t{document=x(rt);use(e,n={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:c=!1,name:l=`style_${++Le}`,id:p=void 0,media:f=void 0,nonce:d=void 0,first:u=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${l}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=e,pt(s,{type:"text/css",media:f,nonce:d});let S=this.document.head;u&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),kt(s,"data-primeng-style-id",l)}return s.textContent!==o&&(s.textContent=o),{id:p,name:l,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},we=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ne=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,qt=(()=>{class t{name="base";useStyle=x(zt);theme=we;css=Ne;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(_(e,{dt:H}));return o?this.useStyle.use(M(o),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>m.getCommon(this.name,e);getComponentTheme=e=>m.getComponent(this.name,e);getDirectiveTheme=e=>m.getDirective(this.name,e);getPresetTheme=(e,n,r)=>m.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=_(this.css,{dt:H}),o=M(`${r}${e}`),s=Object.entries(n).reduce((a,[c,l])=>a.push(`${c}="${l}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>m.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[m.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=_(this.theme,{dt:H}),a=M(m.transformCSS(o,s)),c=Object.entries(n).reduce((l,[p,f])=>l.push(`${p}="${f}"`)&&l,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${c}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t{theme=F(void 0);isThemeChanged=!1;document=x(rt);baseStyle=x(qt);constructor(){lt(()=>{O.on("theme:change",e=>{Dt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),lt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),O.clear()}onThemeChange(e){m.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,C({name:"global-variables"},s)),this.baseStyle.loadTheme(C({name:"global-style"},s),o),m.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n}=e||{};n&&this.theme.set(n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xe=(()=>{class t extends Ie{ripple=F(!1);platformId=x(Lt);inputStyle=F("outlined");inputVariant=F("outlined");overlayOptions={};csp=F({nonce:void 0});filterMatchModeOptions={text:[y.STARTS_WITH,y.CONTAINS,y.NOT_CONTAINS,y.ENDS_WITH,y.EQUALS,y.NOT_EQUALS],numeric:[y.EQUALS,y.NOT_EQUALS,y.LESS_THAN,y.LESS_THAN_OR_EQUAL_TO,y.GREATER_THAN,y.GREATER_THAN_OR_EQUAL_TO],date:[y.DATE_IS,y.DATE_IS_NOT,y.DATE_BEFORE,y.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new _t;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,theme:s,overlayOptions:a,translation:c}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),a&&(this.overlayOptions=a),c&&this.setTranslation(c),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Rt(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pe=new Tt("PRIME_NG_CONFIG");function ji(...t){let i=t?.map(n=>({provide:Pe,useValue:n,multi:!1})),e={provide:Pt,useFactory:n=>()=>t?.forEach(r=>n.setConfig(r)),deps:[xe],multi:!0};return At([...i,e])}export{ke as a,He as b,$e as c,We as d,Ue as e,Be as f,Ve as g,Ge as h,B as i,h as j,Wt as k,De as l,ui as m,di as n,fi as o,O as p,m as q,Fi as r,qt as s,xe as t,ji as u};
