import{u,r as p,j as e}from"./app-YqbZbuVU.js";import{d as o}from"./index-EOrXzSPM.js";import{A as x}from"./AuthenticatedLayout-tloQl2eS.js";import{a as b}from"./categorySlice-RO2hvCOa.js";import{Q as h}from"./react-toastify.esm-8tzANVMn.js";import"./ApplicationLogo-OtsA7yx0.js";import"./transition-VQNg_2km.js";import"./clsx-Zbgk8kpT.js";const F=({auth:s})=>{const i=u(),[t,l]=p.useState({title:"",description:"",user_id:s.user.id}),a=r=>{const{name:d,value:c}=r.target;l(m=>({...m,[d]:c}))},n=r=>{r.preventDefault(),o.Inertia.post("/categories",t),i(b(t)),alert("Category  is created successfully"),o.Inertia.visit("/categories")};return e.jsxs(x,{user:s.user,children:[e.jsx(h,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,style:{zIndex:9999}}),e.jsx("div",{className:"container mx-auto p-4",children:e.jsxs("form",{onSubmit:n,className:"mx-[25rem] mt-[3rem]",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Create a Forum"}),e.jsxs("div",{className:"mb-4 ",children:[e.jsx("label",{htmlFor:"title",className:"block text-gray-700 font-bold mb-2",children:"Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:t.title,onChange:a,className:"border-2 border-gray-300 p-2 w-full rounded-md",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"description",className:"block text-gray-700 font-bold mb-2",children:"Description"}),e.jsx("textarea",{id:"description",name:"description",value:t.description,onChange:a,className:"border-2 border-gray-300 p-2 w-full rounded-md",required:!0})]}),e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ",children:"Create Forum"})]})})]})};export{F as default};
