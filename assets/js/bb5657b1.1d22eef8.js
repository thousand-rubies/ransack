"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[197],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=["components"],i={title:"Using Predicates"},o=void 0,u={unversionedId:"getting-started/using-predicates",id:"getting-started/using-predicates",title:"Using Predicates",description:"The primary method of searching in Ransack is by using what is known as predicates.",source:"@site/docs/getting-started/using-predicates.md",sourceDirName:"getting-started",slug:"/getting-started/using-predicates",permalink:"/ransack/getting-started/using-predicates",editUrl:"https://github.com/activerecord-hackery/ransack/docs-website/docs/docs/getting-started/using-predicates.md",tags:[],version:"current",frontMatter:{title:"Using Predicates"},sidebar:"tutorialSidebar",previous:{title:"Sorting",permalink:"/ransack/getting-started/sorting"},next:{title:"Associations",permalink:"/ransack/going-further/associations"}},p={},c=[{value:"eq (equals)",id:"eq-equals",level:2},{value:"matches",id:"matches",level:2},{value:"lt (less than)",id:"lt-less-than",level:2},{value:"lteq (less than or equal to)",id:"lteq-less-than-or-equal-to",level:2},{value:"in",id:"in",level:2},{value:"cont",id:"cont",level:2},{value:"cont_any (contains any)",id:"cont_any-contains-any",level:2},{value:"cont_all (contains all)",id:"cont_all-contains-all",level:2},{value:"i_cont",id:"i_cont",level:2},{value:"i_cont_any",id:"i_cont_any",level:2},{value:"i_cont_all",id:"i_cont_all",level:2},{value:"start (starts with)",id:"start-starts-with",level:2},{value:"end (ends with)",id:"end-ends-with",level:2},{value:"true",id:"true",level:2},{value:"false",id:"false",level:2},{value:"present",id:"present",level:2},{value:"null",id:"null",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The primary method of searching in Ransack is by using what is known as ",(0,s.kt)("em",{parentName:"p"},"predicates"),"."),(0,s.kt)("p",null,"Predicates are used within Ransack search queries to determine what information to\nmatch. For instance, the ",(0,s.kt)("inlineCode",{parentName:"p"},"cont"),' predicate will check to see if an attribute called\n"first_name" contains a value using a wildcard query:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_cont: \'Rya\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."first_name" LIKE \'%Rya%\')\n')),(0,s.kt)("p",null,"You can also combine predicates for OR queries:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_or_last_name_cont: \'Rya\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."first_name" LIKE \'%Rya%\'\n   OR "users"."last_name" LIKE \'%Rya%\')\n')),(0,s.kt)("p",null,"The syntax for ",(0,s.kt)("inlineCode",{parentName:"p"},"OR")," queries on an associated model is not immediately obvious, but makes sense. Assuming a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," ",(0,s.kt)("inlineCode",{parentName:"p"},"has_one")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," has ",(0,s.kt)("inlineCode",{parentName:"p"},"attributes")," ",(0,s.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"bar"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},">> User.ransack(account_foo_or_account_bar: 'val').result.to_sql\n=> SELECT \"users\".* FROM \"users\" INNER JOIN accounts ON accounts.user_id = users.id WHERE (\"accounts.foo LIKE '%val%' OR accounts.bar LIKE '%val%')\n")),(0,s.kt)("p",null,"Below is a list of the built-in predicates of Ransack and their opposites. You may already\nbe familiar with some of the predicates, as they also exist in the ARel library."),(0,s.kt)("p",null,"If you want to add your own, please\nsee the [","[Custom-Predicates|Custom Predicates]","] page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Please note:")," any attempt to use a predicate for an attribute that does not exist will\n",(0,s.kt)("em",{parentName:"p"},"silently fail"),". For instance, this will not work when there is no ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," attribute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(name_cont: \'Rya\').result.to_sql\n=> "SELECT "users".* FROM "users"\n')),(0,s.kt)("h2",{id:"eq-equals"},"eq (equals)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"eq")," predicate returns all records where a field is ",(0,s.kt)("em",{parentName:"p"},"exactly")," equal to a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_eq: \'Ryan\').result.to_sql\n=> SELECT "users".* FROM "users" WHERE "users"."first_name" = \'Ryan\'\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_eq"))),(0,s.kt)("h2",{id:"matches"},"matches"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"matches")," predicate returns all records where a field is like a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_matches: \'Ryan\').result.to_sql\n=> SELECT "users".* FROM "users" WHERE ("users"."first_name" LIKE \'Ryan\')\n')),(0,s.kt)("p",null,"On Postgres, the case-insensitive ILIKE will be used."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"does_not_match"))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: If you want to do wildcard matching, you may be looking for the ",(0,s.kt)("inlineCode",{parentName:"em"},"cont"),"/",(0,s.kt)("inlineCode",{parentName:"em"},"not_cont"),"\npredicates instead.")),(0,s.kt)("h2",{id:"lt-less-than"},"lt (less than)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"lt")," predicate returns all records where a field is less than a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(age_lt: 25).result.to_sql\n=> SELECT "users".* FROM "users" WHERE ("users"."age" < 25)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"gteq")," (greater than or equal to)")),(0,s.kt)("h2",{id:"lteq-less-than-or-equal-to"},"lteq (less than or equal to)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"lteq")," predicate returns all records where a field is less than ",(0,s.kt)("em",{parentName:"p"},"or equal to")," a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(age_lteq: 25).result.to_sql\n=> SELECT "users".* FROM "users" WHERE ("users"."age" <= 25)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"gt")," (greater than)")),(0,s.kt)("h2",{id:"in"},"in"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"in")," predicate returns all records where a field is within a specified list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(age_in: 20..25).result.to_sql\n=> SELECT "users".* FROM "users" WHERE "users"."age" IN (20, 21, 22, 23, 24, 25)\n')),(0,s.kt)("p",null,"It can also take an array:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(age_in: [20, 21, 22, 23, 24, 25]).result.to_sql\n=> SELECT "users".* FROM "users" WHERE "users"."age" IN (20, 21, 22, 23, 24, 25)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_in"))),(0,s.kt)("h2",{id:"cont"},"cont"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cont")," predicate returns all records where a field contains a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_cont: \'Rya\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."first_name" LIKE \'%Rya%\')\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_cont"))),(0,s.kt)("h2",{id:"cont_any-contains-any"},"cont_any (contains any)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cont_any")," predicate returns all records where a field contains any of the given values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_cont_any: %w(Rya Lis)).result.to_sql\n=> SELECT "users".* FROM "users"  WHERE (("users"."first_name" LIKE \'%Rya%\' OR "users"."first_name" LIKE \'%Lis%\'))\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_cont_any"))),(0,s.kt)("h2",{id:"cont_all-contains-all"},"cont_all (contains all)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cont_all")," predicate returns all records where a field contains all of the given values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(city_cont_all: %w(Grand Rapids)).result.to_sql\n=> SELECT "users".* FROM "users"  WHERE (("users"."city" LIKE \'%Grand%\' AND "users"."city" LIKE \'%Rapids%\'))\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_cont_all"))),(0,s.kt)("h2",{id:"i_cont"},"i_cont"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"i_cont")," case-insensitive predicate returns all records where a field contains a given value and ignores case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_i_cont: \'Rya\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE (LOWER("users"."first_name") LIKE \'%rya%\')\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_i_cont"))),(0,s.kt)("h2",{id:"i_cont_any"},"i_cont_any"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"i_cont_any")," case-insensitive predicate returns all records where a field contains any of the given values and ignores case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_i_cont_any: %w(Rya Lis)).result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ((LOWER("users"."first_name") LIKE \'%rya%\' OR LOWER("users"."first_name") LIKE \'%lis%\'))\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_i_cont_any"))),(0,s.kt)("h2",{id:"i_cont_all"},"i_cont_all"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"i_cont_all")," case-insensitive predicate returns all records where a field contains all of the given values and ignores case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(city_i_cont_all: %w(Grand Rapids)).result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ((LOWER("users"."city") LIKE \'%grand%\' AND LOWER("users"."city") LIKE \'%rapids%\'))\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_i_cont_all"))),(0,s.kt)("h2",{id:"start-starts-with"},"start (starts with)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"start")," predicate returns all records where a field begins with a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_start: \'Rya\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."first_name" LIKE \'Rya%\')\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_start"))),(0,s.kt)("h2",{id:"end-ends-with"},"end (ends with)"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"end")," predicate returns all records where a field ends with a given value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_end: \'yan\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."first_name" LIKE \'%yan\')\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_end"))),(0,s.kt)("h2",{id:"true"},"true"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," predicate returns all records where a field is true. The '1' indicates that\nto Ransack that you indeed want to check the truthiness of this field. The other truthy\nvalues are 'true', 'TRUE', 't' or 'T'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(awesome_true: \'1\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."awesome" = \'t\')\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: different database systems use different values to represent truth. In the above\nexample, we are using SQLite3.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_true"))),(0,s.kt)("h2",{id:"false"},"false"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," predicate returns all records where a field is false."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(awesome_false: \'1\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE ("users"."awesome" = \'f\')\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_false"))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: the ",(0,s.kt)("inlineCode",{parentName:"em"},"false")," predicate may be considered the opposite of the ",(0,s.kt)("inlineCode",{parentName:"em"},"true")," predicate if the field does not contain ",(0,s.kt)("inlineCode",{parentName:"em"},"null")," values. Otherwise, use ",(0,s.kt)("inlineCode",{parentName:"em"},"not_false"),".")),(0,s.kt)("h2",{id:"present"},"present"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"present")," predicate returns all records where a field is present (not null and not a\nblank string)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_present: \'1\').result.to_sql\n=> SELECT "users".* FROM "users"  WHERE (("users"."first_name" IS NOT NULL AND "users"."first_name" != \'\'))\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"blank"))),(0,s.kt)("h2",{id:"null"},"null"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," predicate returns all records where a field is null:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'>> User.ransack(first_name_null: 1).result.to_sql\n=> SELECT "users".* FROM "users"  WHERE "users"."first_name" IS NULL\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Opposite: ",(0,s.kt)("inlineCode",{parentName:"strong"},"not_null"))),(0,s.kt)("h1",{id:"url-parameter-structure"},"URL parameter structure"),(0,s.kt)("p",null,"The search parameters are passed to ransack as a hash. The URL representation of this hash uses the bracket notation: ",(0,s.kt)("inlineCode",{parentName:"p"},"hash_name[key]=value"),". The hash_name is the parameter which is defined in the controller, for instance ",(0,s.kt)("inlineCode",{parentName:"p"},"q"),". The key is the attribute and search predicate compound, for instance ",(0,s.kt)("inlineCode",{parentName:"p"},"first_name_cont"),", the value is the search parameter. When searching without using the search form helpers this URL structure needs to be created manually."),(0,s.kt)("p",null,"For example, the URL layout for searching and sorting users could looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/users.json?q[first_name_cont]=pete&q[last_name_cont]=jack&q[s]=created_at+desc\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note that the sorting parameter ",(0,s.kt)("inlineCode",{parentName:"em"},"s")," is nested within the ",(0,s.kt)("inlineCode",{parentName:"em"},"q")," hash.")),(0,s.kt)("p",null,"When using JavaScript to create such a URL, a matching jQuery request could look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'$.ajax({\n  url: "/users.json",\n  data: {\n    q: {\n      first_name_cont: "pete",\n      last_name_cont: "jack",\n      s: "created_at desc"\n    }\n  },\n  success: function (data){\n    console.log(data);\n  }\n});\n')))}m.isMDXComponent=!0}}]);