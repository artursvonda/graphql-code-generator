(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(4),i=n(9),o=(n(1),n(324)),l={id:"config-field",title:"`config` field"},c={unversionedId:"getting-started/config-field",id:"getting-started/config-field",isDocsHomePage:!1,title:"`config` field",description:"The config field is used to pass configuration to Plugins. You can specify it in multiple levels of your .yml file.",source:"@site/docs/getting-started/config-field.md",slug:"/getting-started/config-field",permalink:"/docs/getting-started/config-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/config-field.md",version:"current",sidebar:"sidebar",previous:{title:"`documents` field",permalink:"/docs/getting-started/documents-field"},next:{title:"`require` field",permalink:"/docs/getting-started/require-field"}},a=[{value:"Root Level",id:"root-level",children:[]},{value:"Output Level",id:"output-level",children:[]},{value:"Plugin Level",id:"plugin-level",children:[]}],u={rightToc:a};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," field is used to pass configuration to Plugins. You can specify it in multiple levels of your ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," file."),Object(o.b)("p",null,"It's a basic key-value map."),Object(o.b)("h3",{id:"root-level"},"Root Level"),Object(o.b)("p",null,"If you specify it in your root level, every plugin for each output file will get the config value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.graphql\nconfig:\n  configKey: configValue\ngenerates:\n  output.ts:\n    - plugin1\n    - plugin2\n")),Object(o.b)("h3",{id:"output-level"},"Output Level"),Object(o.b)("p",null,"If you specify it at the output file level, every plugin for specific output will get the config value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.graphql\ngenerates:\n  output.ts:\n    config:\n      configKey: configValue\n    plugins:\n      - plugin1\n      - plugin2\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Output level configuration overrides root level configuration.")),Object(o.b)("h3",{id:"plugin-level"},"Plugin Level"),Object(o.b)("p",null,"If you specify it at the plugin level, only that plugin will get the config value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.graphql\ngenerates:\n  output.ts:\n    - plugin1:\n        configKey: configValue\n    - plugin2:\n        configKey: otherValue\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Plugin level configuration overrides output-level and root-level configuration.")))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(1),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),g=r,d=f["".concat(l,".").concat(g)]||f[g]||s[g]||o;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);