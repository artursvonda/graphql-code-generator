(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(4),i=t(9),c=(t(1),t(324)),r={},p={unversionedId:"generated-config/typescript-mongodb",id:"generated-config/typescript-mongodb",isDocsHomePage:!1,title:"typescript-mongodb",description:"Installation",source:"@site/docs/generated-config/typescript-mongodb.md",slug:"/generated-config/typescript-mongodb",permalink:"/docs/generated-config/typescript-mongodb",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-mongodb.md",version:"current"},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>dbTypeSuffix</code>",id:"dbtypesuffix",children:[]},{value:"<code>dbInterfaceSuffix</code>",id:"dbinterfacesuffix",children:[]},{value:"<code>objectIdType</code>",id:"objectidtype",children:[]},{value:"<code>idFieldName</code>",id:"idfieldname",children:[]},{value:"<code>enumsAsString</code>",id:"enumsasstring",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],l={rightToc:o};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("img",{alt:"typescript-mongodb plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-mongodb?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-mongodb\n")))),Object(c.b)("h2",{id:"api-reference"},"API Reference"),Object(c.b)("h3",{id:"dbtypesuffix"},Object(c.b)("inlineCode",{parentName:"h3"},"dbTypeSuffix")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"DbObject")),Object(c.b)("p",null,"Customize the suffix for the generated GraphQL ",Object(c.b)("inlineCode",{parentName:"p"},"type"),"s."),Object(c.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbTypeSuffix: MyType\n")),Object(c.b)("h3",{id:"dbinterfacesuffix"},Object(c.b)("inlineCode",{parentName:"h3"},"dbInterfaceSuffix")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"DbObject")),Object(c.b)("p",null,"Customize the suffix for the generated GraphQL ",Object(c.b)("inlineCode",{parentName:"p"},"interface"),"s."),Object(c.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbInterfaceSuffix: MyInterface\n")),Object(c.b)("h3",{id:"objectidtype"},Object(c.b)("inlineCode",{parentName:"h3"},"objectIdType")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"mongodb#ObjectId")),Object(c.b)("p",null,"Customize the type of ",Object(c.b)("inlineCode",{parentName:"p"},"_id")," fields. You can either specify a type name, or specify ",Object(c.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(c.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  objectIdType: ./my-models.ts#MyIdType\n")),Object(c.b)("h3",{id:"idfieldname"},Object(c.b)("inlineCode",{parentName:"h3"},"idFieldName")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"_id")),Object(c.b)("p",null,"Customize the name of the id field generated after using ",Object(c.b)("inlineCode",{parentName:"p"},"@id")," directive over a GraphQL field."),Object(c.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  idFieldName: id\n")),Object(c.b)("h3",{id:"enumsasstring"},Object(c.b)("inlineCode",{parentName:"h3"},"enumsAsString")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"true")),Object(c.b)("p",null,"Replaces generated ",Object(c.b)("inlineCode",{parentName:"p"},"enum")," values with ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"."),Object(c.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  enumsAsString: false\n")),Object(c.b)("h3",{id:"avoidoptionals"},Object(c.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"This will cause the generator to avoid using TypeScript optionals (",Object(c.b)("inlineCode",{parentName:"p"},"?"),"),\nso the following definition: ",Object(c.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(c.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(c.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(c.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-mongodb\n config:\n   avoidOptionals: true\n")),Object(c.b)("h3",{id:"scalars"},Object(c.b)("inlineCode",{parentName:"h3"},"scalars")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(c.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(c.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(c.b)("h3",{id:"namingconvention"},Object(c.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(c.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(c.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(c.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(c.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(c.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(c.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(c.b)("h5",{id:"override-all-names"},"Override All Names"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(c.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(c.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(c.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(c.b)("h3",{id:"typesprefix"},Object(c.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(c.b)("p",null,"Prefixes all the generated types."),Object(c.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(c.b)("h3",{id:"typessuffix"},Object(c.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(c.b)("p",null,"Suffixes all the generated types."),Object(c.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(c.b)("h3",{id:"skiptypename"},Object(c.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(c.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(c.b)("h3",{id:"nonoptionaltypename"},Object(c.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Automatically adds ",Object(c.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(c.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(c.b)("h3",{id:"usetypeimports"},Object(c.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Will use ",Object(c.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(c.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},324:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(1),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||c;return t?i.a.createElement(u,p(p({ref:n},l),{},{components:t})):i.a.createElement(u,p({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<c;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);