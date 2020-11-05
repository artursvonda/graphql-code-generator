(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(9),c=(n(1),n(324)),i={},o={unversionedId:"generated-config/schema-ast",id:"generated-config/schema-ast",isDocsHomePage:!1,title:"schema-ast",description:"This plugin prints the merged schema as string. If multiple schemas are provided, they will be merged and printed as one schema.",source:"@site/docs/generated-config/schema-ast.md",slug:"/generated-config/schema-ast",permalink:"/docs/generated-config/schema-ast",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/schema-ast.md",version:"current"},l=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>includeDirectives</code>",id:"includedirectives",children:[]},{value:"<code>commentDescriptions</code>",id:"commentdescriptions",children:[]},{value:"<code>sort</code>",id:"sort",children:[]},{value:"<code>federation</code>",id:"federation",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This plugin prints the merged schema as string. If multiple schemas are provided, they will be merged and printed as one schema."),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("img",{alt:"schema-ast plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/schema-ast?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/schema-ast\n")))),Object(c.b)("h2",{id:"api-reference"},"API Reference"),Object(c.b)("h3",{id:"includedirectives"},Object(c.b)("inlineCode",{parentName:"h3"},"includeDirectives")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Include directives to Schema output."),Object(c.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - './src/schema.graphql'\ngenerates:\n  path/to/file.graphql:\n    plugins:\n      - schema-ast\n    config:\n      includeDirectives: true\n")),Object(c.b)("h3",{id:"commentdescriptions"},Object(c.b)("inlineCode",{parentName:"h3"},"commentDescriptions")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,'Set to true in order to print description as comments (using # instead of """)'),Object(c.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  schema.graphql:\n    plugins:\n      - schema-ast\n    config:\n      commentDescriptions: true\n")),Object(c.b)("h3",{id:"sort"},Object(c.b)("inlineCode",{parentName:"h3"},"sort")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Set to true in order get the schema lexicographically sorted before printed."),Object(c.b)("h3",{id:"federation"},Object(c.b)("inlineCode",{parentName:"h3"},"federation")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean")))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(1),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||c;return n?r.a.createElement(u,o(o({ref:t},s),{},{components:n})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);