"use strict";(self.webpackChunkgong_check_dev_blog=self.webpackChunkgong_check_dev_blog||[]).push([[678],{6558:function(e,t,l){l.r(t);var n=l(7294),r=l(1597),a=l(8678),o=l(262);t.default=function(e){var t,l=e.data,i=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=l.allMarkdownRemark.nodes;return 0===c.length?n.createElement(a.Z,{location:i,title:s},n.createElement(o.Z,{title:"All posts"}),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(a.Z,{location:i,title:s},n.createElement(o.Z,{title:"All posts"}),n.createElement("div",{className:"list-wrapper"},n.createElement("ol",{style:{listStyle:"none"}},c.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t)))),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),n.createElement("small",null,e.frontmatter.date)))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e4fede5c2770230913dc.js.map