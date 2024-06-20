(()=>{var e={};e.id=343,e.ids=[343],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1657:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>r.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=a(7096),l=a(6132),i=a(7284),r=a.n(i),o=a(2564),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);a.d(t,n);let c=["",{children:["resume-builder",{children:["app",{children:["how-to-start",{children:["[template]",{children:["finalize",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,352)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\resume.analogueshifts.com\\app\\resume-builder\\app\\how-to-start\\[template]\\finalize\\page.js"]}]},{}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,4062)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\resume.analogueshifts.com\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\USER\\Promise\\AnalogueShifts\\resume.analogueshifts.com\\app\\resume-builder\\app\\how-to-start\\[template]\\finalize\\page.js"],u="/resume-builder/app/how-to-start/[template]/finalize/page",x={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/resume-builder/app/how-to-start/[template]/finalize/page",pathname:"/resume-builder/app/how-to-start/[template]/finalize",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9566:(e,t,a)=>{Promise.resolve().then(a.bind(a,2588)),Promise.resolve().then(a.bind(a,6960)),Promise.resolve().then(a.bind(a,9390))},2588:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(3854),l=a(4218),i=a(1018);let r=(e,t,a,s)=>{a(a=>a.map(a=>a.id!==e?a:{...a,[String(s)]:t}))};function o({data:e,updateDataValue:t,label:a,setData:l,index:i}){return(0,s.jsxs)("div",{className:"w-full relative h-14 ",children:[s.jsx("input",{value:e.award,onChange:s=>t(e.id,s.target.value,l,a.toLowerCase()),placeholder:`${a} #${i+1}`,className:"w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"}),s.jsx("button",{onClick:()=>l(t=>t.filter(t=>t.id!==e.id)),className:"absolute top-[30%] right-5",children:s.jsx("i",{className:"fa-solid fa-trash text-black/60 text-base"})})]},e.id)}function n(){let e=(0,i.useRouter)(),t=(0,i.usePathname)(),a=t.split("/")[4],[n,c]=(0,l.useState)([]),[d,u]=(0,l.useState)([]),[x,p]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("resumeInfo"));e&&e.finalizeData&&(c(e.finalizeData.awards),u(e.finalizeData.customDatas),p(e.finalizeData.publications))},[]),(0,s.jsxs)("div",{className:"w-full flex flex-col",children:[s.jsx("p",{className:"font-extrabold text-3xl text-black/80 pb-5",children:"Want to add any additional sections?"}),(0,s.jsxs)("div",{className:"w-full flex flex-col border-b pb-8",children:[s.jsx("p",{className:"font-bold text-lg text-black/80 pl-5",children:"Awards"}),n[0]&&s.jsx("div",{className:"w-full flex flex-col gap-5 pt-5",children:n.map((e,t)=>s.jsx(o,{data:e,label:"Award",index:t,setData:c,updateDataValue:r},crypto.randomUUID()))}),(0,s.jsxs)("button",{onClick:()=>c(e=>[...e,{id:`award-${crypto.randomUUID()}`,award:""}]),className:"mt-5 flex items-center gap-2 text-black/80 font-semibold text-base",children:[s.jsx("i",{className:"fa-solid fa-plus"}),(0,s.jsxs)("p",{children:["Add ",n.length>0?"another":"an"," Award"]})]})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col py-8 border-b",children:[s.jsx("p",{className:"font-bold text-lg text-black/80 pl-5",children:"Publications"}),x[0]&&s.jsx("div",{className:"w-full flex flex-col gap-5 pt-5",children:x.map((e,t)=>s.jsx(o,{data:e,label:"Publication",index:t,setData:p,updateDataValue:r},crypto.randomUUID()))}),(0,s.jsxs)("button",{onClick:()=>p(e=>[...e,{id:`publication-${crypto.randomUUID()}`,publication:""}]),className:"mt-5 flex items-center gap-2 text-black/80 font-semibold text-base",children:[s.jsx("i",{className:"fa-solid fa-plus"}),(0,s.jsxs)("p",{children:["Add ",x.length>0?"another":"a"," Publication"]})]})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col py-8",children:[s.jsx("p",{className:"font-bold text-lg text-black/80 pl-5",children:"Custom Information"}),d[0]&&s.jsx("div",{className:"w-full flex flex-col gap-5 pt-5",children:d.map((e,t)=>(0,s.jsxs)("div",{className:"w-full flex flex-col gap-4 p-5 bg-gray-200/40 rounded-xl",children:[(0,s.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,s.jsxs)("p",{className:"text-black/80 font-semibold text-sm",children:["Custom Info #",t+1]}),s.jsx("button",{onClick:()=>u(t=>t.filter(t=>t.id!==e.id)),className:"mr-2",children:s.jsx("i",{className:"fa-solid fa-trash text-black/60 text-sm"})})]}),s.jsx("input",{value:e.name,onChange:t=>r(e.id,t.target.value,u,"name"),placeholder:"Name",className:"w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor px-4 max-h-14 py-2.5 border text-base text-black/80"}),s.jsx("textarea",{value:e.description,onChange:t=>r(e.id,t.target.value,u,"description"),placeholder:"Information",className:"w-full h-32 rounded-2xl bg-white outline-AnalogueShiftsTextColor px-4 py-2.5 border text-base text-black/80"})]},e.id))}),(0,s.jsxs)("button",{onClick:()=>u(e=>[...e,{id:`customData-${crypto.randomUUID()}`,name:"",description:""}]),className:"mt-5 flex items-center gap-2 text-black/80 font-semibold text-base",children:[s.jsx("i",{className:"fa-solid fa-plus"}),(0,s.jsxs)("p",{children:["Add ",d.length>0?"another":"a"," Custom Information"]})]})]}),(0,s.jsxs)("div",{className:"pt-7 flex gap-5 justify-between",children:[s.jsx("button",{onClick:()=>{e.push(`/resume-builder/app/how-to-start/${a}/references`)},type:"button",className:"px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl",children:"Go Back"}),s.jsx("button",{onClick:()=>{let t={};t.awards=n,t.publications=x,t.customDatas=d;let s=localStorage.getItem("resumeInfo");s?localStorage.setItem("resumeInfo",JSON.stringify({...JSON.parse(s),finalizeData:t,template:a})):localStorage.setItem("resumeInfo",JSON.stringify({finalizeData:t,template:a})),e.push(`/resume-builder/app/how-to-start/${a}/finish`)},type:"button",className:"px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl",children:"Finish"})]})]})}},6960:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(3854);let l=JSON.parse('[{"section":"Contact","icon":"fa-solid fa-address-book text-xs"},{"section":"Experience","icon":"fa-solid fa-hammer text-xs"},{"section":"Education","icon":"fa-solid fa-book text-xs"},{"section":"Certifications","icon":"fa-solid fa-award text-xs"},{"section":"Skills","icon":"fa-solid fa-kitchen-set text-xs"},{"section":"Summary","icon":"fa-regular fa-flag text-xs"},{"section":"References","icon":"fa-solid fa-link text-xs"},{"section":"Finalize","icon":"fa-regular fa-flag text-xs"}]');var i=a(1018);function r({children:e}){let t=(0,i.usePathname)();return(0,s.jsxs)("section",{className:"w-full z-10 flex h-max min-h-[100dvh] bg-[#f3f8ff] pt-[100px]  px-6 pb-8",children:[s.jsx("aside",{className:"w-[250px]  max-[930px]:hidden h-[calc(100dvh-150px)] sticky top-[100px] left-0 bg-white rounded-2xl p-5 flex flex-col gap-1",children:l.map(e=>s.jsx("div",{className:`w-full rounded-xl px-5 py-2.5 cursor-not-allowed ${t.endsWith(e.section.toLowerCase())?"bg-AnalogueShiftsTextColor":"bg-transparent"}`,children:(0,s.jsxs)("p",{className:`text-sm font-medium flex items-center gap-2 ${t.endsWith(e.section.toLowerCase())?"text-white":"text-black/40"}`,children:[s.jsx("i",{className:e.icon}),e.section]})},e.section))}),s.jsx("section",{className:"w-[calc(100%-250px)] max-[930px]:px-0 max-[930px]:w-full h-max pl-14 pr-8",children:e})]})}},352:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x,metadata:()=>u});var s=a(4656),l=a(8578),i=a(4683),r=a(5153);let o=(0,r.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\resume.analogueshifts.com\app\resume-builder\app\how-to-start\[template]\finalize\components\finalize.js`),{__esModule:n,$$typeof:c}=o,d=o.default,u={title:"Resume Builder",description:"The best Resume Builder."};function x(){return s.jsx(l.ZP,{children:s.jsx(i.ZP,{children:s.jsx(d,{})})})}},4683:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});var s=a(5153);let l=(0,s.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\resume.analogueshifts.com\app\resume-builder\components\builder-layout.js`),{__esModule:i,$$typeof:r}=l,o=l.default,n=o},8578:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});var s=a(5153);let l=(0,s.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\resume.analogueshifts.com\components\application\layouts\guest.js`),{__esModule:i,$$typeof:r}=l,o=l.default,n=o}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[271,530,194,302,868],()=>a(1657));module.exports=s})();