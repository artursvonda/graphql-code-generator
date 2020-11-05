(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1494:function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return s})),t.d(n,"validate",(function(){return p}));var r,a=t(546),i=t.n(a),o=t(547),c=t(556),_=t(394),u=t(368);!function(e){e[e.Namespace=0]="Namespace",e[e.Default=1]="Default",e[e.Regular=2]="Regular"}(r||(r={}));var l=function(e,n){return null==e?n:e},s=function(){var e=Object(o.a)(i.a.mark((function e(n,t,r){var a,o,u,s,p,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.federation?Object(_.h)(n):n,o=l(r.descriptions,!0),u=l(r.directiveIsRepeatable,!0),s=l(r.schemaDescription,void 0),p=l(r.specifiedByUrl,void 0),f=Object(c.a)(a,{descriptions:o,directiveIsRepeatable:u,schemaDescription:s,specifiedByUrl:p}),e.abrupt("return",r.minify?JSON.stringify(f):JSON.stringify(f,null,2));case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(i.a.mark((function e(n,t,r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(".json"===Object(u.extname)(a)){e.next=2;break}throw new Error('Plugin "introspection" requires extension to be ".json"!');case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},348:function(e,n,t){"use strict";function r(e){return"function"==typeof(null==e?void 0:e.then)}t.d(n,"a",(function(){return r}))},349:function(e,n,t){"use strict";t.d(n,"g",(function(){return E})),t.d(n,"h",(function(){return g})),t.d(n,"a",(function(){return T})),t.d(n,"b",(function(){return j})),t.d(n,"d",(function(){return w})),t.d(n,"c",(function(){return k})),t.d(n,"f",(function(){return K})),t.d(n,"e",(function(){return S})),t.d(n,"i",(function(){return V}));var r=t(400),a=t(317);var i=t(322),o=t(330),c=t(348),_=t(395),u=t(540);var l=t(415),s=t(313),p=t(414),f=t(316),d=t(362),O=t(326),v=t(321),m=t(315),b=t(325),h=t(452),y=t(363);function E(e,n,t,r,a,i,o,c){return D(1===arguments.length?e:{schema:e,document:n,rootValue:t,contextValue:r,variableValues:a,operationName:i,fieldResolver:o,typeResolver:c})}function g(e){var n=D(e);if(Object(c.a)(n))throw new Error("GraphQL execution failed to complete synchronously.");return n}function D(e){var n=e.schema,t=e.document,r=e.rootValue,a=e.contextValue,i=e.variableValues,o=e.operationName,_=e.fieldResolver,u=e.typeResolver;T(n,t,i);var s=j(n,t,r,a,i,o,_,u);if(Array.isArray(s))return{errors:s};var p=function(e,n,t){var r=Object(h.a)(e.schema,n),a=w(e,r,n.selectionSet,Object.create(null),Object.create(null)),i=void 0;try{var o="mutation"===n.operation?function(e,n,t,r,a){return i=Object.keys(a),o=function(i,o){var _=a[o],u=Object(l.a)(r,o,n.name),s=N(e,n,t,_,u);return void 0===s?i:Object(c.a)(s)?s.then((function(e){return i[o]=e,i})):(i[o]=s,i)},_=Object.create(null),i.reduce((function(e,n){return Object(c.a)(e)?e.then((function(e){return o(e,n)})):o(e,n)}),_);var i,o,_}(e,r,t,i,a):M(e,r,t,i,a);return Object(c.a)(o)?o.then(void 0,(function(n){return e.errors.push(n),Promise.resolve(null)})):o}catch(_){return e.errors.push(_),null}}(s,s.operation,r);return P(s,p)}function P(e,n){return Object(c.a)(n)?n.then((function(n){return P(e,n)})):0===e.errors.length?{data:n}:{errors:e.errors,data:n}}function T(e,n,t){n||Object(o.a)(0,"Must provide document."),Object(d.a)(e),null==t||Object(_.a)(t)||Object(o.a)(0,"Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")}function j(e,n,t,r,a,i,o,c){for(var _,u,l,p=Object.create(null),d=0,O=n.definitions;d<O.length;d++){var v=O[d];switch(v.kind){case f.a.OPERATION_DEFINITION:if(null==i){if(void 0!==l)return[new s.a("Must provide operation name if query contains multiple operations.")];l=v}else(null===(_=v.name)||void 0===_?void 0:_.value)===i&&(l=v);break;case f.a.FRAGMENT_DEFINITION:p[v.name.value]=v}}if(!l)return null!=i?[new s.a('Unknown operation named "'.concat(i,'".'))]:[new s.a("Must provide an operation.")];var m=null!==(u=l.variableDefinitions)&&void 0!==u?u:[],b=Object(y.c)(e,m,null!=a?a:{},{maxErrors:50});return b.errors?b.errors:{schema:e,fragments:p,rootValue:t,contextValue:r,operation:l,variableValues:b.coerced,fieldResolver:null!=o?o:S,typeResolver:null!=c?c:K,errors:[]}}function M(e,n,t,r,a){for(var i,o,_,u=Object.create(null),s=!1,p=0,f=Object.keys(a);p<f.length;p++){var d=f[p],O=N(e,n,t,a[d],Object(l.a)(r,d,n.name));void 0!==O&&(u[d]=O,Object(c.a)(O)&&(s=!0))}return s?(i=u,o=Object.keys(i),_=o.map((function(e){return i[e]})),Promise.all(_).then((function(e){return e.reduce((function(e,n,t){return e[o[t]]=n,e}),Object.create(null))}))):u}function w(e,n,t,r,a){for(var i=0,o=t.selections;i<o.length;i++){var c=o[i];switch(c.kind){case f.a.FIELD:if(!I(e,c))continue;var _=(s=c).alias?s.alias.value:s.name.value;r[_]||(r[_]=[]),r[_].push(c);break;case f.a.INLINE_FRAGMENT:if(!I(e,c)||!R(e,c,n))continue;w(e,n,c.selectionSet,r,a);break;case f.a.FRAGMENT_SPREAD:var u=c.name.value;if(a[u]||!I(e,c))continue;a[u]=!0;var l=e.fragments[u];if(!l||!R(e,l,n))continue;w(e,n,l.selectionSet,r,a)}}var s;return r}function I(e,n){var t=Object(y.b)(v.e,n,e.variableValues);if(!0===(null==t?void 0:t.if))return!1;var r=Object(y.b)(v.d,n,e.variableValues);return!1!==(null==r?void 0:r.if)}function R(e,n,t){var r=n.typeCondition;if(!r)return!0;var a=Object(b.a)(e.schema,r);return a===t||!!Object(m.C)(a)&&e.schema.isSubType(a,t)}function N(e,n,t,r,a){var i,o=r[0].name.value,_=V(e.schema,n,o);if(_){var u=_.type,s=null!==(i=_.resolve)&&void 0!==i?i:e.fieldResolver,f=k(e,_,r,n,a);try{var d,O=s(t,Object(y.a)(_,r[0],e.variableValues),e.contextValue,f);return d=Object(c.a)(O)?O.then((function(n){return q(e,u,r,f,a,n)})):q(e,u,r,f,a,O),Object(c.a)(d)?d.then(void 0,(function(n){return A(Object(p.a)(n,r,Object(l.b)(a)),u,e)})):d}catch(v){return A(Object(p.a)(v,r,Object(l.b)(a)),u,e)}}}function k(e,n,t,r,a){return{fieldName:n.name,fieldNodes:t,returnType:n.type,parentType:r,path:a,schema:e.schema,fragments:e.fragments,rootValue:e.rootValue,operation:e.operation,variableValues:e.variableValues}}function A(e,n,t){if(Object(m.L)(n))throw e;return t.errors.push(e),null}function q(e,n,t,o,_,f){if(f instanceof Error)throw f;if(Object(m.L)(n)){var d=q(e,n.ofType,t,o,_,f);if(null===d)throw new Error("Cannot return null for non-nullable field ".concat(o.parentType.name,".").concat(o.fieldName,"."));return d}return null==f?null:Object(m.J)(n)?function(e,n,t,a,i,o){if(!Object(u.a)(o))throw new s.a('Expected Iterable, but did not find one for field "'.concat(a.parentType.name,".").concat(a.fieldName,'".'));var _=n.ofType,f=!1,d=Object(r.a)(o,(function(n,r){var o=Object(l.a)(i,r,void 0);try{var u;return u=Object(c.a)(n)?n.then((function(n){return q(e,_,t,a,o,n)})):q(e,_,t,a,o,n),Object(c.a)(u)?(f=!0,u.then(void 0,(function(n){return A(Object(p.a)(n,t,Object(l.b)(o)),_,e)}))):u}catch(s){return A(Object(p.a)(s,t,Object(l.b)(o)),_,e)}}));return f?Promise.all(d):d}(e,n,t,o,_,f):Object(m.I)(n)?function(e,n){var t=e.serialize(n);if(void 0===t)throw new Error('Expected a value of type "'.concat(Object(a.a)(e),'" but ')+"received: ".concat(Object(a.a)(n)));return t}(n,f):Object(m.C)(n)?function(e,n,t,r,a,i){var o,_=null!==(o=n.resolveType)&&void 0!==o?o:e.typeResolver,u=e.contextValue,l=_(i,u,r,n);if(Object(c.a)(l))return l.then((function(o){return C(e,F(o,e,n,t,r,i),t,r,a,i)}));return C(e,F(l,e,n,t,r,i),t,r,a,i)}(e,n,t,o,_,f):Object(m.N)(n)?C(e,n,t,o,_,f):void Object(i.a)(0,"Cannot complete value of unexpected output type: "+Object(a.a)(n))}function F(e,n,t,r,i,o){if(null==e)throw new s.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'". Either the "').concat(t.name,'" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'),r);var c=Object(m.K)(e)?e.name:e;if("string"!=typeof c)throw new s.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'" with ')+"value ".concat(Object(a.a)(o),', received "').concat(Object(a.a)(e),'".'));var _=n.schema.getType(c);if(null==_)throw new s.a('Abstract type "'.concat(t.name,'" was resolve to a type "').concat(c,'" that does not exist inside schema.'),r);if(!Object(m.N)(_))throw new s.a('Abstract type "'.concat(t.name,'" was resolve to a non-object type "').concat(c,'".'),r);if(!n.schema.isSubType(t,_))throw new s.a('Runtime Object type "'.concat(_.name,'" is not a possible type for "').concat(t.name,'".'),r);return _}function C(e,n,t,r,a,i){if(n.isTypeOf){var o=n.isTypeOf(i,e.contextValue,r);if(Object(c.a)(o))return o.then((function(r){if(!r)throw B(n,i,t);return L(e,n,t,a,i)}));if(!o)throw B(n,i,t)}return L(e,n,t,a,i)}function B(e,n,t){return new s.a('Expected value of type "'.concat(e.name,'" but got: ').concat(Object(a.a)(n),"."),t)}function L(e,n,t,r,a){return M(e,n,a,r,W(e,n,t))}var U,x,W=(U=function(e,n,t){for(var r=Object.create(null),a=Object.create(null),i=0;i<t.length;i++){var o=t[i];o.selectionSet&&(r=w(e,n,o.selectionSet,r,a))}return r},function(e,n,t){x||(x=new WeakMap);var r,a=x.get(e);if(a){if(r=a.get(n)){var i=r.get(t);if(void 0!==i)return i}}else a=new WeakMap,x.set(e,a);r||(r=new WeakMap,a.set(n,r));var o=U(e,n,t);return r.set(t,o),o});var K=function(e,n,t,r){if(Object(_.a)(e)&&"string"==typeof e.__typename)return e.__typename;for(var a=t.schema.getPossibleTypes(r),i=[],o=0;o<a.length;o++){var u=a[o];if(u.isTypeOf){var l=u.isTypeOf(e,n,t);if(Object(c.a)(l))i[o]=l;else if(l)return u.name}}return i.length?Promise.all(i).then((function(e){for(var n=0;n<e.length;n++)if(e[n])return a[n].name})):void 0},S=function(e,n,t,r){if(Object(_.a)(e)||"function"==typeof e){var a=e[r.fieldName];return"function"==typeof a?e[r.fieldName](n,t,r):a}};function V(e,n,t){return t===O.a.name&&e.getQueryType()===n?O.a:t===O.c.name&&e.getQueryType()===n?O.c:t===O.d.name?O.d:n.getFields()[t]}},394:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(364),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(542),param_case__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(541),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(315),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(340),graphql__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(316),graphql__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(343),graphql__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1467),lodash__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(537),lodash__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_3__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var n={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var t,r;"string"==typeof e?n.content+=e:(n.content+=e.content,(t=n.prepend).push.apply(t,e.prepend||[]),(r=n.append).push.apply(r,e.append||[]))})),[].concat(n.prepend,[n.content],n.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,t){var r;return[].concat(n,[(r={},r[t]=e[t],r)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,n,t){var r=0,a=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(e,{SelectionSet:{enter:function(e,r,i,o){if(!o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var c=e.selections||[];if(t&&c.length>0){var _=function(){if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_DEFINITION)return i.typeCondition.name.value;if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD){var e=a[a.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var n=e.getFields()[i.name.value];if(!n)throw new Error('Unable to find field "'+i.name.value+'" on type "'+e+'"!');return getBaseType(n.type).name}if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.OPERATION_DEFINITION){if("query"===i.operation)return t.getQueryType().name;if("mutation"===i.operation)return t.getMutationType().name;if("subscription"===i.operation)return t.getSubscriptionType().name}else if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.INLINE_FRAGMENT)return i.typeCondition?i.typeCondition.name.value:a[a.length-1].name;return null}();a.push(t.getType(_))}}},leave:function(e){var n=e.selections||[];t&&n.length>0&&a.pop()}},Field:{enter:function(e,i,o,c,_){if(!e.name.value.startsWith("__")&&!_.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],l=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_SPREAD&&!n.includes(e.name.value)}));if((0===u.length||l.length>0)&&r++,t){var s=a[a.length-1];if(s&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(s)){var p=s.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+s+'"!');hasNullableTypeRecursively(p.type)&&r++}}}}},enter:{VariableDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++},InputValueDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++}}}),r>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var n=e.getTypeMap();for(var t in n){var r=e.getType(t);if(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)){var a,i=r.toConfig();i.fields=Object.assign(((a={})[resolveReferenceFieldName]={type:r},a),i.fields);var o=new graphql__WEBPACK_IMPORTED_MODULE_4__.f(i);o.astNode=o.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(o)).definitions[0],o.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:t}}}),n[t]=o}}return e}function removeFederation(e){var n=e.getQueryType().getFields();delete n._entities,delete n._service;var t=e.getTypeMap();return delete t._Service,delete t._Entity,delete t._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var n=e.enabled,t=e.schema;this.enabled=!1,this.enabled=n,this.schema=t,this.providesMap=this.createMapOfProvides()}var n=e.prototype;return n.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},n.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},n.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},n.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},n.skipField=function(e){var n=e.fieldNode,t=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&isFederationObjectType(t))&&this.isExternalAndNotProvided(n,t)},n.isResolveReferenceField=function(e){var n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===resolveReferenceFieldName},n.transformParentType=function(e){var n=this,t=e.fieldNode,r=e.parentType,a=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)&&(isTypeExtension(r)||t.name.value===resolveReferenceFieldName)){var i=getDirectivesByName("key",r);if(i.length){var o=["{ __typename: '"+r.name+"' } &"],c=getDirectivesByName("requires",t).map(this.extractKeyOrRequiresFieldSet),_=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0,[{}].concat(c)),a),u=i.map((function(e){var t=n.extractKeyOrRequiresFieldSet(e);return n.translateFieldSet(t,a)})),l=u.length>1?["(",")"]:["",""],s=l[0],p=l[1];return o.push([s,u.join(" | "),p].join("")),c.length&&o.push("& "+_),o.join(" ")}}return a},n.isExternalAndNotProvided=function(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)},n.isExternal=function(e){return getDirectivesByName("external",e).length>0},n.hasProvides=function(e,n){var t=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.name:e.name.value];return!(!t||!t.length)&&t.includes(n.name.value)},n.translateFieldSet=function(e,n){return"GraphQLRecursivePick<"+n+", "+JSON.stringify(e)+">"},n.extractKeyOrRequiresFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("{"+n+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,n){return e[n.name]=n.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},n.extractProvidesFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)},n.createMapOfProvides=function(){var e=this,n={};return Object.keys(this.schema.getTypeMap()).forEach((function(t){var r=e.schema.getType(t);Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&Object.values(r.getFields()).forEach((function(t){var r,a=getDirectivesByName("provides",t.astNode).map(e.extractProvidesFieldSet).reduce((function(e,n){return[].concat(e,n)}),[]),i=getBaseType(t.type);n[i.name]||(n[i.name]=[]),(r=n[i.name]).push.apply(r,a)}))})),n},e}();function isFederationObjectType(e){var n=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e,t=n.name.value,r=n.directives,a=!["Query","Mutation","Subscription"].includes(t),i=!t.startsWith("__"),o=r.some((function(e){return"key"===e.name.value}));return a&&i&&o}function getDirectivesByName(e,n){var t;return(t=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(n)?n.astNode:n)&&t.directives?t.directives.filter((function(n){return n.name.value===e})):[]}function isTypeExtension(e){var n;return null===(n=(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e).fields)||void 0===n?void 0:n.some((function(e){return getDirectivesByName("external",e).length}))}var DetailedError=function(e){function n(t,r,a){var i;return(i=e.call(this,t)||this).message=t,i.details=r,i.source=a,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n),i}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(n,e),n}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(332))},456:function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({descriptions:!0,specifiedByUrl:!1,directiveIsRepeatable:!1,schemaDescription:!1},e),t=n.descriptions?"description":"",i=n.specifiedByUrl?"specifiedByUrl":"",o=n.directiveIsRepeatable?"isRepeatable":"",c=n.schemaDescription?t:"";return"\n    query IntrospectionQuery {\n      __schema {\n        ".concat(c,"\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(t,"\n          ").concat(o,"\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(t,"\n      ").concat(i,"\n      fields(includeDeprecated: true) {\n        name\n        ").concat(t,"\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(t,"\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(t,"\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")}t.d(n,"a",(function(){return i}))},556:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(322),a=t(343),i=t(349),o=t(456);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({directiveIsRepeatable:!0,schemaDescription:!0},n),u=Object(a.parse)(Object(o.a)(t)),l=Object(i.h)({schema:e,document:u});return!l.errors&&l.data||Object(r.a)(0),l.data}}}]);