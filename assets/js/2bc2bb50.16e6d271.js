"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[230],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:4,title:"Form customisation"},s=void 0,l={unversionedId:"going-further/form-customisation",id:"going-further/form-customisation",title:"Form customisation",description:"Predicate and attribute labels in forms may be specified with I18n in a translation file (see the locale files in Ransack:",source:"@site/docs/going-further/form-customisation.md",sourceDirName:"going-further",slug:"/going-further/form-customisation",permalink:"/ransack/going-further/form-customisation",editUrl:"https://github.com/activerecord-hackery/ransack/docs-website/docs/docs/going-further/form-customisation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Form customisation"},sidebar:"tutorialSidebar",previous:{title:"i18n",permalink:"/ransack/going-further/i18n"},next:{title:"Merging searches",permalink:"/ransack/going-further/merging-searches"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Predicate and attribute labels in forms may be specified with I18n in a translation file (see the locale files in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/activerecord-hackery/ransack/activerecord-hackery/ransack/tree/master/lib/ransack/locale"},"Ransack::Locale")," for more examples):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# locales/en.yml\nen:\n  ransack:\n    asc: ascending\n    desc: descending\n    predicates:\n      cont: contains\n      not_cont: not contains\n      start: starts with\n      end: ends with\n      gt: greater than\n      lt: less than\n    attributes:\n      person:\n        name: Full Name\n      article:\n        title: Article Title\n        body: Main Content\n")),(0,o.kt)("p",null,"The names of attribute fields may also be changed globally or under activerecord:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# locales/en.yml\nen:\n  attributes:\n    model_name:\n      model_field1: field name1\n      model_field2: field name2\n  activerecord:\n    attributes:\n      namespace/article:\n        title: AR Namespaced Title\n      namespace_article:\n        title: Old Ransack Namespaced Title\n")),(0,o.kt)("p",null,"To limit the predicates in the ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate_select")," form helper in a view template, pass an array of permitted predicates with ",(0,o.kt)("inlineCode",{parentName:"p"},"only"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-erb"},"<%= f.predicate_select only: %i(cont not_cont eq not_eq blank null) %>\n")),(0,o.kt)("p",null,"Compound predicates (",(0,o.kt)("inlineCode",{parentName:"p"},"_any")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"_all"),") may be removed by passing the option ",(0,o.kt)("inlineCode",{parentName:"p"},"compounds: false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-erb"},"<%= f.predicate_select compounds: false %>\n")),(0,o.kt)("p",null,"Searchable attributes versus non-searchable ones may be specified as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def self.ransackable_attributes(auth_object = nil)\n  %w(searchable_attribute_1 searchable_attribute_2 ...) + _ransackers.keys\nend\n")))}f.isMDXComponent=!0}}]);