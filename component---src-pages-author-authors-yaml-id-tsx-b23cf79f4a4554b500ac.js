(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FCdT:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("soUV"),c=t("dhsJ"),s=t("j8Pq");a.default=function(e){var a=e.data,t=a.author,i=a.posts,m=i.nodes.length;return r.a.createElement(n.a,{title:"Posts by "+t.name},r.a.createElement("main",{className:"main-wrap"},r.a.createElement(c.a,{source:t.cover_image},r.a.createElement("div",{className:"m-hero__content","data-aos":"fade-down"},r.a.createElement("div",{className:"m-hero-avatar",style:{backgroundImage:"url("+(t.profile_image||"/images/default-avatar-square-normal.jpg")+")"}}),r.a.createElement("h1",{className:"m-hero-title"},t.name),t.bio&&r.a.createElement("p",{className:"m-hero-description"},t.bio),r.a.createElement("div",{className:"m-hero__meta"},r.a.createElement("ul",{className:"m-hero-social"},t.website&&r.a.createElement("li",null,r.a.createElement("a",{href:t.website,target:"_blank",rel:"noopener","aria-label":"Website"},r.a.createElement("span",{className:"icon-globe"}))),t.facebook&&r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.com/"+t.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook"},r.a.createElement("span",{className:"icon-facebook"}))),t.twitter&&r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"+t.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter"},r.a.createElement("span",{className:"icon-twitter"}))),t.linkedin&&r.a.createElement("li",null,r.a.createElement("a",{href:"https://linkedin.com/in/"+t.linkedin,target:"_blank",rel:"noopener","aria-label":"Linkedin"},r.a.createElement("span",{className:"icon-linkedin"})))),r.a.createElement("ul",{className:"m-hero-stats"},r.a.createElement("li",null,m?m+" "+(1===m?"post":"posts"):"No Posts"),t.location&&r.a.createElement(l.Fragment,null,r.a.createElement("li",null,"•"),r.a.createElement("li",null,t.location)))))),r.a.createElement("div",{className:"l-content"},r.a.createElement("div",{className:"l-wrapper","data-aos":"fade-up","data-aos-delay":"300"},r.a.createElement("div",{className:"l-grid centered"},i.nodes.map((function(e){return r.a.createElement(s.a,{post:e,key:e.fields.slug})})))))))}},dhsJ:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("e2Ho"),c=t("TSYQ"),s=t.n(c);a.a=function(e){var a=e.source,t=e.post,l=e.children,c=Object(n.j)(a);return a?r.a.createElement("section",{className:"m-hero with-picture","data-aos":"fade"},r.a.createElement("div",{className:s()("m-hero__picture",{"in-post":t})},r.a.createElement(n.a,{image:c,alt:"Plant"})),l):r.a.createElement("section",{className:"m-hero no-picture","data-aos":"fade"},l)}},j8Pq:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),c=t("e2Ho"),s=t("FIZb");a.a=function(e){var a=e.post,t=a.frontmatter,i=t.tags,m=t.authors,o=t.title,d=t.published_at,u=t.feature_image,E=t.featured,p=m[0],b=i[0],_=Object(c.j)(u),g=r.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__info-link","aria-label":o},r.a.createElement("div",null,r.a.createElement("h2",{className:"m-article-card__title js-article-card-title",title:o},o)),r.a.createElement("div",{className:"m-article-card__timestamp"},r.a.createElement("span",null,d),r.a.createElement("span",null,"•"),r.a.createElement("span",null,a.timeToRead," min read")));return r.a.createElement("article",{className:"m-article-card  post"},r.a.createElement("div",{className:"m-article-card__picture"},r.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__picture-link","aria-hidden":"true",tabIndex:-1},r.a.createElement(c.a,{className:"m-article-card__picture-background",loading:"lazy",image:_,alt:""})),r.a.createElement(n.Link,{to:"/author/"+p.id,className:"m-article-card__author js-tooltip","aria-label":p.name},r.a.createElement(l.Fragment,null),r.a.createElement(s.a,{content:"Posted by "+p.name},r.a.createElement("div",{style:{backgroundImage:"url("+(p.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}}))),E&&r.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__featured js-tooltip","aria-label":"Featured"},r.a.createElement("span",{className:"icon-star","aria-hidden":"true"}))),b?r.a.createElement("div",{className:"m-article-card__info"},r.a.createElement(n.Link,{to:"/tag/"+b.id,className:"m-article-card__tag"},b.name),g):r.a.createElement("div",{className:"m-article-card__info no-tag"},g))}}}]);
//# sourceMappingURL=component---src-pages-author-authors-yaml-id-tsx-b23cf79f4a4554b500ac.js.map