(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(4),p=n(9),i=(n(1),n(324)),l={},o={unversionedId:"generated-config/flow-resolvers",id:"generated-config/flow-resolvers",isDocsHomePage:!1,title:"flow-resolvers",description:"This plugin generates resolvers signature based on your GraphQLSchema.",source:"@site/docs/generated-config/flow-resolvers.md",slug:"/generated-config/flow-resolvers",permalink:"/docs/generated-config/flow-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/flow-resolvers.md",version:"current"},r=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>contextType</code>",id:"contexttype",children:[]},{value:"<code>fieldContextTypes</code>",id:"fieldcontexttypes",children:[]},{value:"<code>rootValueType</code>",id:"rootvaluetype",children:[]},{value:"<code>mapperTypeSuffix</code>",id:"mappertypesuffix",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>showUnusedMappers</code>",id:"showunusedmappers",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>resolverTypeWrapperSignature</code>",id:"resolvertypewrappersignature",children:[]},{value:"<code>federation</code>",id:"federation",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>optionalResolveType</code>",id:"optionalresolvetype",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>namespacedImportName</code>",id:"namespacedimportname",children:[]},{value:"<code>resolverTypeSuffix</code>",id:"resolvertypesuffix",children:[]},{value:"<code>allResolversTypeName</code>",id:"allresolverstypename",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={rightToc:r};function b(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin generates resolvers signature based on your ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),Object(i.b)("p",null,"It generates types for your entire schema: types, input types, enum, interface, scalar and union."),Object(i.b)("p",null,"This plugin requires you to use ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/flow")," as well, because it depends on it's types."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("img",{alt:"flow-resolvers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/flow-resolvers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/flow-resolvers\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"addunderscoretoargstype"},Object(i.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Adds ",Object(i.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(i.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(i.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(i.b)("h3",{id:"contexttype"},Object(i.b)("inlineCode",{parentName:"h3"},"contextType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Use this configuration to set a custom type for your ",Object(i.b)("inlineCode",{parentName:"p"},"context"),", and it will\neffect all the resolvers, without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(i.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",Object(i.b)("inlineCode",{parentName:"p"},"module#type")," syntax."),Object(i.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(i.b)("h5",{id:"custom-context-type"},"Custom Context Type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: MyContext\n")),Object(i.b)("h5",{id:"custom-context-type-1"},"Custom Context Type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),Object(i.b)("h3",{id:"fieldcontexttypes"},Object(i.b)("inlineCode",{parentName:"h3"},"fieldContextTypes")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"Array_1")),Object(i.b)("p",null,"Use this to set a custom type for a specific field ",Object(i.b)("inlineCode",{parentName:"p"},"context"),".\nIt will only affect the targeted resolvers.\nYou can either use ",Object(i.b)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),Object(i.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(i.b)("h5",{id:"custom-field-context-types"},"Custom Field Context Types"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),Object(i.b)("h3",{id:"rootvaluetype"},Object(i.b)("inlineCode",{parentName:"h3"},"rootValueType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Use this configuration to set a custom type for the ",Object(i.b)("inlineCode",{parentName:"p"},"rootValue"),", and it will\neffect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(i.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",Object(i.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(i.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(i.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(i.b)("h5",{id:"custom-rootvalue-type"},"Custom RootValue Type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: MyRootValue\n")),Object(i.b)("h5",{id:"custom-rootvalue-type-1"},"Custom RootValue Type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),Object(i.b)("h3",{id:"mappertypesuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"mapperTypeSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Adds a suffix to the imported names to prevent name clashes."),Object(i.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mapperTypeSuffix: Model\n")),Object(i.b)("h3",{id:"mappers"},Object(i.b)("inlineCode",{parentName:"h3"},"mappers")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"object")),Object(i.b)("p",null,"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from\nyour resolvers.\nYou can use both ",Object(i.b)("inlineCode",{parentName:"p"},"module#type")," and ",Object(i.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(i.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(i.b)("h5",{id:"custom-context-type-2"},"Custom Context Type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),Object(i.b)("h3",{id:"defaultmapper"},Object(i.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Allow you to set the default mapper when it's not being override by ",Object(i.b)("inlineCode",{parentName:"p"},"mappers")," or generics.\nYou can specify a type name, or specify a string in ",Object(i.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(i.b)("inlineCode",{parentName:"p"},"module#namespace#type")," format.\nThe default value of mappers it the TypeScript type generated by ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," package."),Object(i.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(i.b)("h5",{id:"replace-with-any"},"Replace with any"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: any\n")),Object(i.b)("h5",{id:"custom-base-object"},"Custom Base Object"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),Object(i.b)("h5",{id:"wrap-default-types-with-partial"},"Wrap default types with Partial"),Object(i.b)("p",null,'You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use ',Object(i.b)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),Object(i.b)("h5",{id:"allow-deep-partial-with-utility-types"},"Allow deep partial with ",Object(i.b)("inlineCode",{parentName:"h5"},"utility-types")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add:\n       content: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),Object(i.b)("h3",{id:"avoidoptionals"},Object(i.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"This will cause the generator to avoid using optionals (",Object(i.b)("inlineCode",{parentName:"p"},"?"),"),\nso all field resolvers must be implemented in order to avoid compilation errors."),Object(i.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),Object(i.b)("h3",{id:"showunusedmappers"},Object(i.b)("inlineCode",{parentName:"h3"},"showUnusedMappers")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Warns about unused mappers."),Object(i.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),Object(i.b)("h3",{id:"enumvalues"},Object(i.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(i.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema, supported\nin this plugin because of the need for integration with ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," package.\nSee documentation under ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),Object(i.b)("h3",{id:"resolvertypewrappersignature"},Object(i.b)("inlineCode",{parentName:"h3"},"resolverTypeWrapperSignature")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Promise<T> | T")),Object(i.b)("p",null,"Allow you to override ",Object(i.b)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),Object(i.b)("h3",{id:"federation"},Object(i.b)("inlineCode",{parentName:"h3"},"federation")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Supports Apollo Federation"),Object(i.b)("h3",{id:"enumprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(i.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(i.b)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(i.b)("h3",{id:"optionalresolvetype"},Object(i.b)("inlineCode",{parentName:"h3"},"optionalResolveType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Sets the ",Object(i.b)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),Object(i.b)("h3",{id:"immutabletypes"},Object(i.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Generates immutable types by adding ",Object(i.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(i.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(i.b)("h3",{id:"namespacedimportname"},Object(i.b)("inlineCode",{parentName:"h3"},"namespacedImportName")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"''")),Object(i.b)("p",null,"Prefixes all GraphQL related generated types with that value, as namespaces import.\nYou can use this featuere to allow seperation of plugins to different files."),Object(i.b)("h3",{id:"resolvertypesuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"resolverTypeSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(i.b)("p",null,"Suffix we add to each generated type resolver."),Object(i.b)("h3",{id:"allresolverstypename"},Object(i.b)("inlineCode",{parentName:"h3"},"allResolversTypeName")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(i.b)("p",null,"The type name to use when exporting all resolvers signature as unified type."),Object(i.b)("h3",{id:"scalars"},Object(i.b)("inlineCode",{parentName:"h3"},"scalars")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(i.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(i.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(i.b)("h3",{id:"namingconvention"},Object(i.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(i.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(i.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(i.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(i.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(i.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(i.b)("h5",{id:"override-all-names"},"Override All Names"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(i.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(i.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(i.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(i.b)("h3",{id:"typesprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Prefixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(i.b)("h3",{id:"typessuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Suffixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(i.b)("h3",{id:"skiptypename"},Object(i.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(i.b)("h4",{id:"usage-examples-14"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(i.b)("h3",{id:"nonoptionaltypename"},Object(i.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Automatically adds ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(i.b)("h4",{id:"usage-examples-15"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(i.b)("h3",{id:"usetypeimports"},Object(i.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Will use ",Object(i.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(1),p=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=p.a.createContext({}),b=function(e){var t=p.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},u=p.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?p.a.createElement(m,o(o({ref:t},c),{},{components:n})):p.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return p.a.createElement.apply(null,l)}return p.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);