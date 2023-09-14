"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(a),u=r,h=l["".concat(p,".").concat(u)]||l[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"},s="How to add a new metadata aspect?",i={unversionedId:"docs/how/add-new-aspect",id:"docs/how/add-new-aspect",title:"How to add a new metadata aspect?",description:"Adding a new metadata aspect is one of the most common ways to extend an existing entity.",source:"@site/genDocs/docs/how/add-new-aspect.md",sourceDirName:"docs/how",slug:"/how/add-new-aspect",permalink:"/docs/next/how/add-new-aspect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md",tags:[],version:"current",frontMatter:{title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"}},p={},d=[],c={toc:d},l="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-add-a-new-metadata-aspect"},"How to add a new metadata aspect?"),(0,r.kt)("p",null,"Adding a new metadata ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/what/aspect"},"aspect")," is one of the most common ways to extend an existing ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/what/entity"},"entity"),".\nWe'll use the CorpUserEditableInfo as an example here."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the aspect model to the corresponding namespace (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin/identity"},(0,r.kt)("inlineCode",{parentName:"a"},"com.linkedin.identity")),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extend the entity's aspect union to include the new aspect.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rebuild the rest.li ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"IDL & snapshot")," by running the following command from the project root"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To surface the new aspect at the top-level ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#writing-resources"},"resource endpoint"),", extend the resource data model with an optional field. You'll also need to extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"toValue")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"toSnapshot")," methods of the top-level resource (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsers.java"},(0,r.kt)("inlineCode",{parentName:"a"},"CorpUsers")),") to convert between the snapshot & value models.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) If there's need to update the aspect via API (instead of/in addition to MCE), add a ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#sub-resources"},"sub-resource")," endpoint for the new aspect (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpUsersEditableInfoResource"),"). The sub-resource endpiont also allows you to retrieve previous versions of the aspect as well as additional metadata such as the audit stamp.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After rebuilding & restarting gms, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job")," & ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mae-consumer-job"},"mae-consumer-job"),",z\nyou should be able to start emitting ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/what/mxe"},"MCE")," with the new aspect and have it automatically ingested & stored in DB."))))}m.isMDXComponent=!0}}]);