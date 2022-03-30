"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[610],{8665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(3366),n=a(7294),l=a(6010),i=a(2600),s=a(9960),m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",g="sidebarItem_CF0Q",u="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,E),o=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),s=a(4996),m=a(5979),o=a(8780),c=a(7459),g=a(6753),u="blogPostTitle_rzP5",d="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",h=a(62),E="image_o0gy";function v(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function b(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,s=t.email,m=l||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(v,{href:m},r.createElement("img",{className:E,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(v,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?N:f),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,s.C)().withBaseUrl,b=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=N.date,y=N.formattedDate,I=N.permalink,L=N.tags,M=N.readingTime,R=N.title,A=N.editUrl,x=N.authors,U=null!=(t=_.image)?t:f.image,C=!T&&k,D=L.length>0,B=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:u,itemProp:"headline"},T?R:r.createElement(i.Z,{itemProp:"url",to:I},R)),r.createElement("div",{className:(0,n.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",E(M))),r.createElement(Z,{authors:x,assets:_})),U&&r.createElement("meta",{itemProp:"image",content:v(U,{absolute:!0})}),r.createElement("div",{id:T?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,b)),(D||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&p)},D&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":C})},r.createElement(h.Z,{tags:L})),T&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:A})),C&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":D})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:R})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(9960),l=a(8665),i=a(8561),s=a(5999),m=a(5979),o=a(6299),c=a(4739),g=a(6010);function u(e){var t,a=e.metadata,u=e.items,d=e.sidebar,p=e.listMetadata,h=a.allTagsPath,E=a.name,v=a.count,b=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(v),tagName:E});return r.createElement(m.FG,{className:(0,g.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},r.createElement(m.d,{title:f}),r.createElement(c.Z,{tag:"blog_tags_posts"}),r.createElement(l.Z,{sidebar:d},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:h},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(o.Z,{metadata:p})))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),s=a(6010),m="iconEdit_dcUD",o=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var g=a(5979);function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";function o(e){var t=e.permalink,a=e.name,o=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,o?m:s)},a,o&&r.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),s="tags_XVD_",m="tag_JSN8";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);