(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(9),i=(n(1),n(324)),o={},c={unversionedId:"generated-config/time",id:"generated-config/time",isDocsHomePage:!1,title:"time",description:"Installation",source:"@site/docs/generated-config/time.md",slug:"/generated-config/time",permalink:"/docs/generated-config/time",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/time.md",version:"current"},l=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>format</code>",id:"format",children:[]},{value:"<code>message</code>",id:"message",children:[]}]}],m={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("img",{alt:"time plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/time?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/time\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"format"},Object(i.b)("inlineCode",{parentName:"h3"},"format")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ")),Object(i.b)("p",null,"Customize the Moment format of the output time."),Object(i.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - time:\n       format: DD.MM.YY\n")),Object(i.b)("h3",{id:"message"},Object(i.b)("inlineCode",{parentName:"h3"},"message")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"'Generated on'")),Object(i.b)("p",null,"Customize the comment message"),Object(i.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'generates:\npath/to/file.ts:\n plugins:\n   - time:\n       message: "The file generated on: "\n')))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(1),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(u,c(c({ref:t},m),{},{components:n})):a.a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);