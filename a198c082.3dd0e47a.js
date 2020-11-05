(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1091:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/v13-migration-cli-c90dfdf47dcf7e5b74182358a87c49a5.gif"},193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(4),a=n(9),o=(n(1),n(324)),i={id:"from-0-13",title:"Migration from 0.13 to 0.18"},c={unversionedId:"migration/from-0-13",id:"migration/from-0-13",isDocsHomePage:!1,title:"Migration from 0.13 to 0.18",description:"March 1st, 2019",source:"@site/docs/migration/from-0-13.md",slug:"/migration/from-0-13",permalink:"/docs/migration/from-0-13",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/migration/from-0-13.md",version:"current",sidebar:"sidebar",previous:{title:"Migration to 1.0.0",permalink:"/docs/migration/from-0-18"}},l=[{value:"What has changed?",id:"what-has-changed",children:[]},{value:"How to migrate?",id:"how-to-migrate",children:[]}],p={rightToc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"March 1st, 2019")),Object(o.b)("h2",{id:"what-has-changed"},"What has changed?"),Object(o.b)("p",null,"In >= 0.14 we changed the way you pass configuration to GraphQL Code Generator."),Object(o.b)("p",null,"In the previous versions of the code-generator, the configuration was confusing and passed through 3 ways: CLI flags, config file (",Object(o.b)("inlineCode",{parentName:"p"},"gql-gen.json")," and environment variables."),Object(o.b)("p",null,"It became very confusing and difficult to use, so we decided to merge all existing configurations into a single\xa0.yml file\u200a-\u200a",Object(o.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(o.b)("h2",{id:"how-to-migrate"},"How to migrate?"),Object(o.b)("p",null,"To migrate from GraphQL Code Generator v0.13 API to >=0.14, just start by installing the latest version of ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-code-generator")," from NPM."),Object(o.b)("p",null,"Then, run your existing ",Object(o.b)("inlineCode",{parentName:"p"},"gql-gen ...")," command as is. You'll see a warning about your current usage."),Object(o.b)("p",null,"The new CLI makes it much easier\u200a-\u200ait will show you how your ",Object(o.b)("inlineCode",{parentName:"p"},"codegen.yml")," file should look according to your usage with the old API:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"CLI Migration",src:n(1091).default})),Object(o.b)("p",null,"Now, create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"codegen.yml")," with the content that the codegen suggests for you."),Object(o.b)("p",null,"Next, update your NPM scripts to run ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-codegen")," only, without any cli-flags:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "scripts": {\n    "generate": "graphql-codegen"\n  }\n}\n')),Object(o.b)("p",null,"Now, replace your deprecated ",Object(o.b)("inlineCode",{parentName:"p"},"templates")," packages with the new ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," packages."),Object(o.b)("p",null,"For example, if you were using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-codegen-typescript-template"),", you should replace it with: ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-codegen-typescript"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-codegen-typescript-operations"),"."),Object(o.b)("p",null,"Note sure which new packages you need to use now? ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/tree/master/packages/old-templates"}),"You can take a look here"),". Under each directory you'll find a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," pointing to the new packages names."))}s.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(1),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);