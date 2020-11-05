(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(9),i=(n(1),n(324)),o={id:"typescript-oclif",title:"TypeScript oclif"},l={unversionedId:"plugins/typescript-oclif",id:"plugins/typescript-oclif",isDocsHomePage:!1,title:"TypeScript oclif",description:"This plugin generates oclif CLI commands.",source:"@site/docs/plugins/typescript-oclif.md",slug:"/plugins/typescript-oclif",permalink:"/docs/plugins/typescript-oclif",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-oclif.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript Urql",permalink:"/docs/plugins/typescript-urql"},next:{title:"Named Operations Object",permalink:"/docs/plugins/named-operations-object"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Step 1: Generate the CLI scaffold",id:"step-1-generate-the-cli-scaffold",children:[]},{value:"Step 2: Add GraphQL Documents",id:"step-2-add-graphql-documents",children:[]},{value:"Step 3: Add &amp; Export a GraphQL Query Handler",id:"step-3-add--export-a-graphql-query-handler",children:[]},{value:"Step 4: Add &amp; Configure GraphQL Codegen",id:"step-4-add--configure-graphql-codegen",children:[]}]},{value:"Advanced Features",id:"advanced-features",children:[{value:"Descriptions &amp; Examples",id:"descriptions--examples",children:[]},{value:"Custom/Manually-maintained Commands",id:"custommanually-maintained-commands",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin generates ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/oclif"}),Object(i.b)("inlineCode",{parentName:"a"},"oclif"))," CLI commands."),Object(i.b)("p",null,Object(i.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-caution alert alert--warning"}),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(i.b)("inlineCode",{parentName:"p"},"query")," / ",Object(i.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(i.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(i.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(i.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kalzoo/graphql-codegen-oclif-example/"}),"You can find a working example of this plugin here")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add @graphql-codegen/typescript @graphql-codegen/typescript-oclif\n")),Object(i.b)("p",null,"The, make sure you have ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," plugin as well in your configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:4000\ndocuments: 'src/commands/**/*.graphql'\ngenerates:\n  src/types.ts:\n    - typescript\n  src/commands/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .ts\n      baseTypesPath: ../types.ts\n    plugins:\n      - typescript-oclif:\n          handlerPath: ../../handler\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"With GraphQL Codegen, building a CLI tool for your GraphQL API couldn't be easier. In four steps,\nyou can have a user-friendly command-line interface:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Generate a boilerplate CLI using ",Object(i.b)("inlineCode",{parentName:"li"},"oclif")),Object(i.b)("li",{parentName:"ol"},"Add GraphQL Documents (Queries & Mutations)"),Object(i.b)("li",{parentName:"ol"},"Add and export a graphql client of your choice (",Object(i.b)("inlineCode",{parentName:"li"},"graphql-request"),", ",Object(i.b)("inlineCode",{parentName:"li"},"apollo-client"),", etc)"),Object(i.b)("li",{parentName:"ol"},"Add, configure, and run the code generator")),Object(i.b)("h3",{id:"step-1-generate-the-cli-scaffold"},"Step 1: Generate the CLI scaffold"),Object(i.b)("p",null,"You'll be starting from your projects directory. From there, generate the CLI skeleton using ",Object(i.b)("inlineCode",{parentName:"p"},"oclif"),"\nby following the steps in their ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oclif.io/docs/introduction"}),"guide"),". You can choose either\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"single")," or ",Object(i.b)("inlineCode",{parentName:"p"},"multi")," type, and can switch later if you change your mind."),Object(i.b)("h3",{id:"step-2-add-graphql-documents"},"Step 2: Add GraphQL Documents"),Object(i.b)("p",null,"These documents are how ",Object(i.b)("inlineCode",{parentName:"p"},"oclif")," will interact with your API. For each document, there will be\nexactly one command."),Object(i.b)("p",null,"Within the directory created by the ",Object(i.b)("inlineCode",{parentName:"p"},"oclif")," tool, you'll have a subdirectory ",Object(i.b)("inlineCode",{parentName:"p"},"src/commands"),". That's\nwhere you'll put your GraphQL documents. Ie, to create a ",Object(i.b)("inlineCode",{parentName:"p"},"<cli-name> hello")," command, you'd write a\n",Object(i.b)("inlineCode",{parentName:"p"},"src/commands/hello.graphql")," document, which will be used to generate a ",Object(i.b)("inlineCode",{parentName:"p"},"src/commands/hello.ts"),"\nfile. ",Object(i.b)("strong",{parentName:"p"},"Important"),": each document should have exactly one GraphQL operation."),Object(i.b)("h3",{id:"step-3-add--export-a-graphql-query-handler"},"Step 3: Add & Export a GraphQL Query Handler"),Object(i.b)("p",null,"Which client you use, and how you configure it, is entirely up to you! It just has to conform to\nthis ",Object(i.b)("inlineCode",{parentName:"p"},"QueryHandler")," signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Command } from '@oclif/command';\n\ninterface QueryHandlerProps {\n  command: Command;\n  query: string;\n  variables?: Record<string, any>;\n}\n\ntype QueryHandler = (props: QueryHandlerProps) => any;\n")),Object(i.b)("p",null,"This allows you to pre-process, send, and post-process requests however you'd like, as well as format\nthe results returned. The arguments are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"command"),": the command object being executed, described ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://oclif.io/docs/commands"}),"here"),"\nin the ",Object(i.b)("inlineCode",{parentName:"li"},"oclif")," documentation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"query"),": the string version of the GraphQL query being executed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": the variables as configured in your GraphQL operation and parsed by ",Object(i.b)("inlineCode",{parentName:"li"},"oclif"),".")),Object(i.b)("p",null,"You can add a ",Object(i.b)("inlineCode",{parentName:"p"},"src/handler.ts")," (or any other path), configure your handler function there, and then\nexport your handler as the ",Object(i.b)("strong",{parentName:"p"},"default export"),". It's in this module that you can handle auth logic,\nread config files, etc., and that will apply to all CLI operations. This file will not be modified\nby the codegen."),Object(i.b)("p",null,"To get started quickly and easily, consider using the simple ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-request")," as your handler:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// handler.ts\n\nimport { GraphQLClient } from 'graphql-request';\nimport { Command } from '@oclif/command';\n\ninterface QueryHandlerProps {\n  command: Command;\n  query: string;\n  variables?: Record<string, any>;\n}\n\n// Change the URL to the endpoint your CLI will use\nconst client = new GraphQLClient('http://localhost:4000');\n\nconst handler = ({ command, query, variables }: QueryHandlerProps) => {\n  return client\n    .request(query, variables)\n    .then(command.log)\n    .catch(command.error);\n};\n\nexport default handler;\n")),Object(i.b)("h3",{id:"step-4-add--configure-graphql-codegen"},"Step 4: Add & Configure GraphQL Codegen"),Object(i.b)("p",null,"First, follow the GraphQL-Code-Generator guide to install it, and make sure to also install\n",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-oclif"),". Then, change your ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," file to look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'schema: <path-to-your-schema>\ndocuments: "src/commands/**/*.graphql"\ngenerates:\n  src/types.ts:\n    - typescript\n  src/commands/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .ts\n      baseTypesPath: ../types.ts\n    plugins:\n      - typescript-oclif:\n          client: ../../client\n')),Object(i.b)("p",null,"Breaking that down:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reading your schema allows the codegen tool to understand what types it's working with"),Object(i.b)("li",{parentName:"ul"},"The 'documents' section will collect all of your ",Object(i.b)("inlineCode",{parentName:"li"},"*.graphql")," files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/types.ts")," creates the typescript types that the rest of the tool can reference"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"near-operation-file")," is a ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-codegen")," preset which allows one output file per input file\n(ie, one ",Object(i.b)("inlineCode",{parentName:"li"},".ts")," module per ",Object(i.b)("inlineCode",{parentName:"li"},".graphql")," document) rather than one output file for the whole package.\nThis is ",Object(i.b)("em",{parentName:"li"},"required")," for ",Object(i.b)("inlineCode",{parentName:"li"},"oclif")," to work, since it uses the file structure to generate the command structure."),Object(i.b)("li",{parentName:"ul"},"Note: ",Object(i.b)("inlineCode",{parentName:"li"},"typescript-operations")," plugin isn't required, since this library isn't meant to be consumed\nprogrammatically (and so nothing reads the types that ",Object(i.b)("inlineCode",{parentName:"li"},"typescript-operations")," would produce)"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"client")," path is to the file which has a default export of your ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-request")," client,\nrelative to the generated files (ie here, ",Object(i.b)("inlineCode",{parentName:"li"},"src/commands/something/file.graphql"),").\nNote that it has no extension.")),Object(i.b)("p",null,"With that configured, just run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn graphql-codegen")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npx graphql-codegen")," to generate all the\nnecessary ",Object(i.b)("inlineCode",{parentName:"p"},"oclif")," command files. With that complete, follow the directions in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oclif.io/docs/introduction"}),"oclif guide")," to run your new CLI tool."),Object(i.b)("h2",{id:"advanced-features"},"Advanced Features"),Object(i.b)("h3",{id:"descriptions--examples"},"Descriptions & Examples"),Object(i.b)("p",null,"You can add descriptions and examples for your commands via ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-oclif")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"@oclif"),"\nclient-side directive, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'mutation CreateAuthor($name: String!)\n  @oclif(description: "Create a new author", example: "cli author:create --name Alice", example: "cli author:create --name Bob") {\n  createAuthor(input: { name: $name }) {\n    name\n  }\n}\n')),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"@oclif")," directive will not be sent to the server. Note that, for multiple examples, you must\nuse multiple ",Object(i.b)("inlineCode",{parentName:"p"},"example")," keys rather than an ",Object(i.b)("inlineCode",{parentName:"p"},"examples")," array. This is a ",Object(i.b)("del",{parentName:"p"},"quirk")," feature of\n",Object(i.b)("inlineCode",{parentName:"p"},"graphql"),"."),Object(i.b)("h3",{id:"custommanually-maintained-commands"},"Custom/Manually-maintained Commands"),Object(i.b)("p",null,"If you want a command that doesn't just execute a GraphQL Query or Mutation, then you can still\ncreate one manually in the same way as any other ",Object(i.b)("inlineCode",{parentName:"p"},"oclif")," application. If you wanted to add a ",Object(i.b)("inlineCode",{parentName:"p"},"fix"),"\ncommand, for example, you can just create a file at ",Object(i.b)("inlineCode",{parentName:"p"},"src/commands/fix.ts"),", follow the ",Object(i.b)("inlineCode",{parentName:"p"},"oclif")," API\n(ie, export a class with a ",Object(i.b)("inlineCode",{parentName:"p"},"run()")," method), and ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-codegen")," won't disturb that file - so long\nas you ",Object(i.b)("strong",{parentName:"p"},"don't")," ",Object(i.b)("em",{parentName:"p"},"also")," create a ",Object(i.b)("inlineCode",{parentName:"p"},"fix.graphql")," file next to it (in which case, it ",Object(i.b)("em",{parentName:"p"},"would")," overrride\n",Object(i.b)("inlineCode",{parentName:"p"},"fix.ts")," on the next run of ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-codegen"),")."))}s.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(1),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);