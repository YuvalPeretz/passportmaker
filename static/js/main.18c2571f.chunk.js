(this.webpackJsonppassportmaker=this.webpackJsonppassportmaker||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),s=n.n(r),o=(n(9),n(10),n(4)),a=(n(11),n(0)),d=function(){return Object(a.jsx)("span",{className:"product-word",children:"PassportMaker"})},l=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Welcome to ",Object(a.jsx)(d,{})," where you can create you're own Passport for free."]}),Object(a.jsx)("p",{children:"To get started, please upload the picture you would like to make a Passport out of:"})]})},u=(n(13),n(14),n.p+"static/media/empty-face.4ba5feae.png"),j=function(e){var t=e.showPreview;return Object(a.jsxs)("div",{id:"picture-upload",children:[Object(a.jsx)("input",{id:"filepicker",className:"form-control",type:"file",accept:"image/*",onChange:function(){!function(){try{document.getElementById("passportImg").src=URL.createObjectURL(document.getElementById("filepicker").files[0]),t()}catch(e){console.log("ERROR: "+e)}}()}}),Object(a.jsx)("img",{id:"passportImg",src:u,alt:"please select"})]})},p=(n(15),function(e){var t=e.visible,n=t?document.getElementById("passportImg").src:null;return Object(c.useEffect)((function(){if(t)for(var e=0;e<5;e++){var c=document.createElement("div");c.id="final-preview-row-".concat(e),document.getElementById("final-preview").appendChild(c);for(var i=0;i<3;i++){var r=document.createElement("img");r.src=n,r.className="column",r.height=192,r.width=192,r.alt="nothing",r.style.margin="5px",r.style.border="1px solid black",document.getElementById("final-preview-row-".concat(e)).appendChild(r)}}}),[n]),t?Object(a.jsxs)("div",{id:"preview",children:[Object(a.jsx)("button",{id:"print-btn",className:"btn",onClick:function(){return window.print()},children:"Print/Save"}),Object(a.jsx)("div",{id:"final-preview",className:"container"})]}):Object(a.jsx)("div",{})}),f=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{id:"middle",children:[Object(a.jsx)(l,{}),Object(a.jsx)(j,{showPreview:function(){i(!0)}}),Object(a.jsx)(p,{visible:n})]})},b=(n(16),n(17),function(){return Object(a.jsx)("p",{id:"logo",children:"PassportMaker"})}),m=function(){return Object(a.jsx)("div",{id:"top",children:Object(a.jsx)(b,{})})},h=function(){return Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)("div",{className:"main-container",children:Object(a.jsx)(m,{})}),Object(a.jsx)("div",{className:"main-container",children:Object(a.jsx)(f,{})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.18c2571f.chunk.js.map