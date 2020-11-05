(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(9),i=(n(1),n(324)),p={id:"typescript-graphql-files-modules",title:"TypeScript GraphQL Files Modules"},o={unversionedId:"plugins/typescript-graphql-files-modules",id:"plugins/typescript-graphql-files-modules",isDocsHomePage:!1,title:"TypeScript GraphQL Files Modules",description:"If you wish to have a simpler integration in a Webpack project, use graphql-let, it uses this plugin behind the scenes, and provides simpler developer experience.",source:"@site/docs/plugins/typescript-graphql-files-modules.md",slug:"/plugins/typescript-graphql-files-modules",permalink:"/docs/plugins/typescript-graphql-files-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-graphql-files-modules.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript 1.0 Compatibility",permalink:"/docs/plugins/typescript-compatibility"},next:{title:"TypeScript document nodes",permalink:"/docs/plugins/typescript-document-nodes"}},c=[{value:"Pre-Requirements",id:"pre-requirements",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Webpack Integration")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you wish to have a simpler integration in a Webpack project, use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/piglovesyou/graphql-let"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql-let")),", it uses this plugin behind the scenes, and provides simpler developer experience."))),Object(i.b)("h2",{id:"pre-requirements"},"Pre-Requirements"),Object(i.b)("p",null,"To use this template, make sure you are using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," with Webpack."),Object(i.b)("p",null,Object(i.b)("p",{parentName:"p"},"This plugin generates TypeScript typings for ",Object(i.b)("inlineCode",{parentName:"p"},".graphql")," files containing GraphQL documents, which later on can be consumed using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," or use ",Object(i.b)("inlineCode",{parentName:"p"},"string")," types if you will use the operations as raw strings, and get type-check and type-safety for your imports. This means that any time you import objects from ",Object(i.b)("inlineCode",{parentName:"p"},".graphql")," files, your IDE will provide auto-complete."),Object(i.b)("p",{parentName:"p"},"This plugin also handles ",Object(i.b)("inlineCode",{parentName:"p"},".graphql")," files containing multiple GraphQL documents, and name the imports according to the operation name."),Object(i.b)("blockquote",{parentName:"p"},Object(i.b)("p",{parentName:"blockquote"},"\u26a0 Fragments are not generated with named imports, only as default imports, due to ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-tag/loader")," behavior.")),Object(i.b)("h2",{parentName:"p"},"Installation"),Object(i.b)("img",{alt:"typescript-graphql-files-modules plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-graphql-files-modules?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-graphql-files-modules\n")))),Object(i.b)("h2",{parentName:"p"},"API Reference"),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"modulePathPrefix")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",{parentName:"p"},"Allows specifying a module definition path prefix to provide distinction\nbetween generated types."),Object(i.b)("h4",{parentName:"p"},"Usage Examples"),Object(i.b)("pre",{parentName:"p"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'generates: src/api/user-service/queries.d.ts\n documents: src/api/user-service/queries.graphql\n plugins:\n   - typescript-graphql-files-modules\n config:\n   # resulting module definition path glob: "*\\/api/user-service/queries.graphql"\n   modulePathPrefix: "/api/user-service/"\n')),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"relativeToCwd")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",{parentName:"p"},"By default, only the filename is being used to generate TS module declarations. Setting this to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," will generate it with a full path based on the CWD."),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"prefix")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"*\\/")),Object(i.b)("p",{parentName:"p"},"By default, a wildcard is being added as prefix, you can change that to a custom prefix"),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"type")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string (values: DocumentNode, string)"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"DocumentNode")),Object(i.b)("p",{parentName:"p"},"By default, the named exports will have a type ",Object(i.b)("inlineCode",{parentName:"p"},"DocumentNode"),'. Change this to "string" if you only use raw strings.')),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Given that you have a query named ",Object(i.b)("inlineCode",{parentName:"p"},"MyQuery")," in ",Object(i.b)("inlineCode",{parentName:"p"},"my-query.graphql")," file, this template will generate the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare module '*/my-query.graphql' {\n  import { DocumentNode } from 'graphql';\n  const MyQuery: DocumentNode;\n\n  export { MyQuery };\n\n  export default defaultDocument;\n}\n")),Object(i.b)("p",null,"Accordingly, you can import the generated types and use it in your code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import myQuery from './my-query.graphql';\n\n// OR\n\nimport { myQuery } from './my-query.graphql';\n")))}s.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(1),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(p,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);