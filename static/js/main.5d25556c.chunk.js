(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(9),c=a(3),n=a(1),i=a(0),l=Object(n.createContext)(),r=function(e){var t=e.children,a=Object(n.useState)("light"),s=Object(c.a)(a,2),r=s[0],o=s[1];Object(n.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rawat2511.github.io/",h="SR.",d="Shubham Rawat",j="MERN Stack Developer",m="Aspiring Web Developer with good knowledge of React, Redux, Node, and MongoDB. Want to start my career as a software developer in a high-growth startup and make great products. I want to keep myself updated with the latest technological advances. Apart from this, I like to know about the startup ecosystem and about Personal Finance. I like to play basketball and I have been a part of my school's basketball team.",b="./Shubham.pdf",u={linkedin:"https://www.linkedin.com/in/shubham2511",github:"https://www.github.com/rawat2511"},p=[{name:"Myntra Clone",description:"Myntra is an online Shopping Site for Fashion & Lifestyle in India. I, along with my 3 teammates built this clone within one week. Here, we have have implemented sorting and filtering of products accoring to rating and price. The functionality of adding the products to cart and wishilist is implemented using Redux.",stack:["HTML","CSS","JavaScript","ES6","React","Redux"],sourceCode:"https://github.com/shreevalikushe/myntra_clone",livePreview:"https://myntra-clone-gilt.vercel.app/",image1:"https://raw.githubusercontent.com/rawat2511/images/master/myntraHome.png",image2:"https://github.com/rawat2511/images/blob/master/myntraWishlist.png?raw=true"},{name:"Book My Show Clone",description:"I along with my 2 other teammates made this website within 8 days. Here, one can select the seats to book the tickets. One can see the trailers of the latest movies which are fetched from YouTube using the YouTube API and we can filter the movies based on different genres, languages, and formats.",stack:["HTML","CSS","JavaScript","ES6"],sourceCode:"https://github.com/anishtiwari09/bookMyShow_Tribe_Project",livePreview:"https://anishtiwari09.github.io/bookmyshowclones/HTML/Home.html",image1:"https://rawat2511.github.io/images/BookMyShow_1.png",image2:"https://rawat2511.github.io/images/BookMyShow_3.png"},{name:"Fiverr Clone",description:"It is the first team project that we have built-in Masai School to implement the CSS we have learned. We have embedded the YouTube video in it and worked on the header and footer section. While building this project, we got some confidence in our CSS skills and it was our first step towards building a project.",stack:["HTML","CSS","JavaScript","ES6"],sourceCode:"https://github.com/rawat2511/Fiverr_Presentation",livePreview:"https://construct-week-1-fiverr.netlify.app/",image1:"https://rawat2511.github.io/images/Fiverr_1.png",image2:"https://rawat2511.github.io/images/Fiverr_2.png"}],g=[{name:"HTML",src:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/html5_0.png?itok=piXl_C7P"},{name:"CSS",src:"https://logo-all.ru/uploads/posts/2016-02/0_css3_logo.jpg"},{name:"JavaScript",src:"https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png"},{name:"React Js",src:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},{name:"Redux",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"},{name:"Express",src:"https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"},{name:"Node",src:"https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"},{name:"MongoDB",src:"https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png"}],x="shubham25112000@gmail.com",O=a(14),v=a.n(O),f=a(12),N=a.n(f),w=a(16),k=a.n(w),_=a(15),S=a.n(_),y=(a(26),function(){var e=Object(n.useContext)(l),t=Object(c.a)(e,1)[0],a=t.themeName,s=t.toggleTheme,r=Object(n.useState)(!1),o=Object(c.a)(r,2),h=o[0],d=o[1],j=function(){return d(!h)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,g.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(N.a,{}):Object(i.jsx)(v.a,{})}),Object(i.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(i.jsx)(S.a,{}):Object(i.jsx)(k.a,{})})]})}),C=(a(32),function(){var e=o,t=h;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(y,{})]})}),M=a(10),T=a.n(M),P=a(17),R=a.n(P),I=(a(33),a.p+"static/media/Shubham.f01f0ec7.pdf"),E=function(){var e=d,t=j,a=m,s=b,c=u;return Object(i.jsxs)("div",{className:"about center",children:[Object(i.jsx)("img",{className:"photo",src:"https://avatars.githubusercontent.com/u/88944511?v=4",alt:"shubham"}),e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[s&&Object(i.jsx)("a",{href:I,download:"Shubham_Resume.pdf",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(i.jsxs)("div",{className:"social-about",children:[c.github&&Object(i.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:c.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(T.a,{})}),c.linkedin&&Object(i.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(R.a,{})})]})]})]})},A=a(7),B=a.n(A),J=a(18),L=a.n(J),F=(a(35),function(e){var t=e.project;return Object(i.jsx)("div",{className:"project",children:Object(i.jsxs)("div",{className:"project_left",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsxs)("div",{className:"flex-out",children:[Object(i.jsxs)("div",{className:"img-flex",children:[Object(i.jsx)("img",{className:"project_image",src:t.image1,alt:"Book My Show"}),Object(i.jsx)("img",{className:"project_image",src:t.image2,alt:"Book My Show"})]}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),Object(i.jsxs)("div",{children:[t.sourceCode&&Object(i.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(T.a,{})}),t.livePreview&&Object(i.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(L.a,{})})]})]})]})})}),H=(a(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(F,{project:e},B()())}))})]}):null}),q=(a(37),function(){return g.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(i.jsxs)("li",{className:"skills__list-item btn btn--plain",children:[Object(i.jsx)("img",{className:"image_skill",src:e.src,alt:e.name}),Object(i.jsx)("div",{className:"head skill_name",children:e.name})]},B()())}))})]}):null}),z=a(19),U=a.n(z),W=(a(38),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(U.a,{fontSize:"large"})})}):null}),Y=(a(39),function(){return x?Object(i.jsxs)("div",{id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsxs)("div",{className:"contact",children:[Object(i.jsxs)("div",{className:"column left",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("img",{className:"contact-icon",src:"https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png",alt:"user"}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("div",{className:"head",children:"Name"}),Object(i.jsx)("div",{className:"head",children:"Shubham Rawat"})]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("img",{className:"contact-icon",src:"https://media.istockphoto.com/vectors/vector-map-with-pin-pointer-illustration-vector-id535913739?k=20&m=535913739&s=612x612&w=0&h=cS_zINbhJ9T9vRlaAc4S_-Yd45f6qs5zliFHZ7KNhFI=",alt:"location"}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("div",{className:"head",children:"Address"}),Object(i.jsx)("div",{className:"head",children:"Ghaziabad, Uttar Pradesh"})]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("img",{className:"contact-icon",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKilPjQUkVFTd0IBVF1iYlVvLxSX0iFOhlWA&usqp=CAU",alt:"mail"}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("div",{className:"head",children:"Email"}),Object(i.jsx)("div",{className:"head",children:"shubham25112000@gmail.com"})]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("img",{className:"contact-icon",src:"https://www.seekpng.com/png/full/97-972664_image-transparent-background-white-phone-icon.png",alt:"mail"}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("div",{className:"head",children:"Phone"}),Object(i.jsx)("div",{className:"head",children:"+91 8527184201"})]})]})]}),Object(i.jsxs)("div",{className:"column right column-right",children:[Object(i.jsx)("div",{className:"text",children:"Message me"}),Object(i.jsxs)("form",{action:"#",children:[Object(i.jsxs)("div",{className:"fields",children:[Object(i.jsx)("div",{className:"field name",children:Object(i.jsx)("input",{type:"text",placeholder:"Name",required:!0})}),Object(i.jsx)("div",{className:"field email",children:Object(i.jsx)("input",{type:"email",placeholder:"Email",required:!0})})]}),Object(i.jsx)("div",{className:"field",children:Object(i.jsx)("input",{type:"text",placeholder:"Subject",required:!0})}),Object(i.jsx)("div",{className:"field textarea",children:Object(i.jsx)("textarea",{placeholder:"Message..",required:!0})}),Object(i.jsx)("div",{className:"button-area",children:Object(i.jsx)("button",{type:"submit",children:"Send message"})})]})]})]})]}):null}),D=(a(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://rawat2511.github.io/",className:"link footer__link",children:"Created By Shubham Rawat"})})}),G=(a(41),function(){var e=Object(n.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(H,{}),Object(i.jsx)(q,{}),Object(i.jsx)(Y,{})]}),Object(i.jsx)(W,{}),Object(i.jsx)(D,{})]})});a(42);Object(s.render)(Object(i.jsx)(r,{children:Object(i.jsx)(G,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5d25556c.chunk.js.map