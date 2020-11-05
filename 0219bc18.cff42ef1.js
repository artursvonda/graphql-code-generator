(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(4),a=r(9),i=(r(1),r(324)),o={id:"relay-operation-optimizer",title:"Relay Operation Optimizer"},l={unversionedId:"plugins/relay-operation-optimizer",id:"plugins/relay-operation-optimizer",isDocsHomePage:!1,title:"Relay Operation Optimizer",description:"Built and maintained by n1ru4l",source:"@site/docs/plugins/relay-operation-optimizer.md",slug:"/plugins/relay-operation-optimizer",permalink:"/docs/plugins/relay-operation-optimizer",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/relay-operation-optimizer.md",version:"current",sidebar:"sidebar",previous:{title:"Time",permalink:"/docs/plugins/time"},next:{title:"All Presets",permalink:"/docs/presets/presets-index"}},p=[{value:"List of Features",id:"list-of-features",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Built and maintained by ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/n1ru4l"}),"n1ru4l"))),Object(i.b)("p",null,"A GraphQL Codegen feature for bringing the benefits of Relay Compiler to any GraphQL Client using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.graphql-tools.com/docs/relay-operation-optimizer"}),"Relay Operation Optimizer")),Object(i.b)("p",null,"You can test how relay-compiler affects your queries over on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://relay-compiler-repl.netlify.com/"}),"Relay Compiler REPL"),"."),Object(i.b)("h2",{id:"list-of-features"},"List of Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://relay.dev/docs/en/compiler-architecture#transforms"}),"Optimize your Operations")," TL;DR: reduce operation complexity and size",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Inline Fragments"),Object(i.b)("li",{parentName:"ul"},"Flatten Transform"),Object(i.b)("li",{parentName:"ul"},"Skip Redundant Node Transform"))),Object(i.b)("li",{parentName:"ul"},"FragmentArguments TL;DR: Make your fragments reusable with different arguments",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://relay.dev/docs/en/graphql-in-relay#argumentdefinitions"}),Object(i.b)("inlineCode",{parentName:"a"},"@argumentsDefinition"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://relay.dev/docs/en/graphql-in-relay#arguments"}),Object(i.b)("inlineCode",{parentName:"a"},"@arguments")))))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Set up your project per the GraphQL Codegen Docs, and add ",Object(i.b)("inlineCode",{parentName:"p"},"flattenGeneratedTypes: true")," in your codegen.yml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"overwrite: true\nschema: schema.graphql\ngenerates:\n  src/generated-types.tsx:\n    documents: 'src/documents/**/*.graphql'\n    config:\n      skipDocumentsValidation: true\n      flattenGeneratedTypes: true\n    plugins:\n      - 'typescript'\n      - 'typescript-operations'\n      - 'typescript-react-apollo'\n")),Object(i.b)("p",null,"Please notice that you have to skip the document validation - but no worries, relay-compiler will validate your documents instead!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://the-guild.dev/blog/graphql-codegen-relay-compiler"}),"See Laurin Quast's blog post to learn how to use those directives in your operations"))))}u.isMDXComponent=!0},324:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(1),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return r?a.a.createElement(d,l(l({ref:t},c),{},{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);