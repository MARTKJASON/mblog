import{j as s}from"./app-YqbZbuVU.js";import{d as t}from"./index-EOrXzSPM.js";import{A as x}from"./AuthenticatedLayout-tloQl2eS.js";import"./ApplicationLogo-OtsA7yx0.js";import"./transition-VQNg_2km.js";const f=({categories:n,auth:r})=>{const i=()=>{t.Inertia.visit("/categories/create")},a=e=>{t.Inertia.visit(`/categories/${e.id}`)},o=r.user.is_admin,l=e=>{t.Inertia.visit(`category/${e.id}/questions`)},d=[...n].sort((e,m)=>new Date(m.created_at)-new Date(e.created_at));return s.jsx(x,{user:r.user,children:s.jsxs("div",{className:"bg-gray-200 shadow",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-[20px] ",children:"Forums"}),o?s.jsx("button",{className:"text-blue-500 px-4 py-2 rounded-lg mt-4 ml-[8rem] transition-transform transform hover:scale-105",onClick:i,children:"Create a Forum +"}):s.jsx("br",{})]}),s.jsx("ul",{className:"px-[5%]",children:d.map(e=>s.jsx("li",{className:"shadow-lg bg-white px-4 rounded-md my-[3rem] m-[4rem] transition-transform transform hover:scale-105",children:s.jsxs("div",{className:"p-4 m-2",children:[s.jsx("h1",{className:"m-3 font-bold text-[20px]",children:e.title}),s.jsxs("p",{className:"text-[12px] ml-3 font-serif",children:["Author :"," ",s.jsx("span",{className:"text-gray-600 font-semibold",children:e.user.name})]}),s.jsx("hr",{}),s.jsx("p",{className:"text-gray font-sans text-[16px] mt-6 m-3",children:e.description.length>100?`${e.description.substring(0,100)}...`:e.description}),s.jsx("button",{className:"text-blue-500 font-bold px-4 py-2 rounded-lg mt-4 mr-5",onClick:()=>l(e),children:"Open Threads"}),s.jsx("button",{className:"text-green-500 font-bold px-4 py-2 rounded-lg mt-4",onClick:()=>a(e),children:"Options"})]})},e.id))})]})})};export{f as default};
