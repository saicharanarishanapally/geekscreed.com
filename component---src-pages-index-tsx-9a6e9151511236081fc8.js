(self.webpackChunkgeekscreed_com=self.webpackChunkgeekscreed_com||[]).push([[691],{4479:function(e,t,a){"use strict";var r=a(7294),l=a(8590),n=a(5900),i=a.n(n);t.Z=function(e){var t=e.source,a=e.post,n=e.children,s=(0,l.d)(t);return t?r.createElement("section",{className:"m-hero with-picture","data-aos":"fade"},r.createElement("div",{className:i()("m-hero__picture",{"in-post":a})},r.createElement(l.G,{image:s,alt:"Plant"})),n):r.createElement("section",{className:"m-hero no-picture","data-aos":"fade"},n)}},3559:function(e,t,a){"use strict";var r=a(7294),l=a(5444),n=a(8590),i=a(4636);t.Z=function(e){var t=e.post,a=t.frontmatter,s=a.tags,c=a.authors,m=a.title,d=a.published_at,o=a.feature_image,u=a.featured,f=c[0],g=s[0],p=(0,n.d)(o),E=r.createElement(l.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__info-link","aria-label":m},r.createElement("div",null,r.createElement("h2",{className:"m-article-card__title js-article-card-title",title:m},m)),r.createElement("div",{className:"m-article-card__timestamp"},r.createElement("span",null,d),r.createElement("span",null,"•"),r.createElement("span",null,t.timeToRead," min read")));return r.createElement("article",{className:"m-article-card  post"},r.createElement("div",{className:"m-article-card__picture"},r.createElement(l.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__picture-link","aria-hidden":"true",tabIndex:-1},r.createElement(n.G,{className:"m-article-card__picture-background",loading:"lazy",image:p,alt:""})),r.createElement(l.Link,{to:"/author/"+f.id,className:"m-article-card__author js-tooltip","aria-label":f.name},r.createElement(r.Fragment,null),r.createElement(i.Z,{content:"Posted by "+f.name},r.createElement("div",{style:{backgroundImage:"url("+(f.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}}))),u&&r.createElement(l.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__featured js-tooltip","aria-label":"Featured"},r.createElement("span",{className:"icon-star","aria-hidden":"true"}))),g?r.createElement("div",{className:"m-article-card__info"},r.createElement(l.Link,{to:"/tag/"+g.id,className:"m-article-card__tag"},g.name),E):r.createElement("div",{className:"m-article-card__info no-tag"},E))}},4366:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var r=a(7294),l=a(9675),n=a(4479),i=a(3559),s=a(5900),c=a.n(s),m=a(5444),d=a(8590),o=a(2361),u=a(6011);function f(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p=function(e){var t=e.posts;return(0,r.useEffect)((function(){var e=t.length,a=new o.ZP(".js-featured-slider",{type:"slider",rewind:!1,gap:0,swipeThreshold:!1,dragThreshold:!1,breakpoints:{768:{swipeThreshold:1!==e&&80,dragThreshold:1!==e&&120}}});a.on("mount.after",(function(){(0,u.Z)(".js-featured-article-title",200)})),a.mount({Controls:o.ZX,Swipe:o.oF,Breakpoints:o.u3,ArrowDisabler:function(t,a){var r="js-featured-slider-controls",l="js-featured-slider-previous",n="js-featured-slider-next";return{mount:function(){t.settings.rewind||1===e||t.on(["mount.after","run"],(function(){for(var e,i=f(a.Controls.items);!(e=i()).done;){var s=e.value;if(s.className.includes(r)){var c=s.querySelector("."+l);c&&(0===t.index?c.setAttribute("disabled",""):c.removeAttribute("disabled"));var m=s.querySelector("."+n);if(m)(t.settings.bound?t.index+(t.settings.perView-1):t.index)===a.Sizes.length-1?m.setAttribute("disabled",""):m.removeAttribute("disabled")}}}))}}}})}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"m-featured-slider glide js-featured-slider"},r.createElement("div",{className:"glide__track","data-glide-el":"track"},r.createElement("div",{className:"m-featured-slider__list glide__slides"},t.map((function(e){var t=e.node,a=t.frontmatter,l=a.tags,n=a.authors,i=a.title,s=a.published_at,o=a.feature_image,u=n[0],f=l[0],g=(0,d.d)(o);return r.createElement("div",{className:"m-featured-slider__list__item glide__slide js-featured-slide",key:t.fields.slug},r.createElement("article",{className:c()("m-featured-article",{"no-picture":!g})},r.createElement("div",{className:"m-featured-article__picture"},g&&r.createElement(r.Fragment,null,r.createElement(d.G,{loading:"lazy",image:g,alt:""}))),r.createElement("div",{className:"m-featured-article__meta"},r.createElement(m.Link,{to:"/author/"+u.id,className:"m-featured-article__author js-tooltip","aria-label":u.name},r.createElement("div",{style:{backgroundImage:"url("+(u.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}})),f&&r.createElement(m.Link,{to:"/tag/"+f.id,className:"m-featured-article__tag"},f.name)),r.createElement("div",{className:"m-featured-article__ribbon"},r.createElement("span",{className:"icon-star"}),r.createElement("span",null,"Featured")),r.createElement(m.Link,{to:"/blog"+t.fields.slug,className:"m-featured-article__content"},r.createElement("h2",{className:"m-featured-article__title js-featured-article-title",title:i},i),r.createElement("div",{className:"m-featured-article__timestamp"},r.createElement("span",null,s),r.createElement("span",null,"•"),r.createElement("span",null,t.timeToRead," min read")))))})))),r.createElement("div",{"data-glide-el":"controls",className:"glide__arrows js-featured-slider-controls"},r.createElement("button",{"data-glide-dir":"<",className:"m-icon-button in-featured-articles glide-prev js-featured-slider-previous","aria-label":"Previous"},r.createElement("span",{className:"icon-arrow-left","aria-hidden":"true"})),r.createElement("button",{"data-glide-dir":">",className:"m-icon-button in-featured-articles glide-next js-featured-slider-next","aria-label":"Next"},r.createElement("span",{className:"icon-arrow-right","aria-hidden":"true"})))))};function E(e){var t=e.data,a=t.posts,s=t.featuredPosts,c=t.coverImage,m=t.site.siteMetadata;return r.createElement(l.Z,null,r.createElement(r.Fragment,null,r.createElement("main",{className:"main-wrap"},r.createElement(n.Z,{source:c},r.createElement("div",{className:"m-hero__content","data-aos":"fade-down"},r.createElement("h1",{className:"m-hero-title bigger"},m.title),r.createElement("p",{className:"m-hero-description bigger"},m.description))),r.createElement("div",{className:"l-content"},r.createElement("div",{className:"l-wrapper","data-aos":"fade-up","data-aos-delay":"300"},r.createElement("div",{className:"l-grid centered"},s.edges.length>0?r.createElement(p,{posts:s.edges}):null,a.edges.map((function(e){var t=e.node;return r.createElement(i.Z,{post:t,key:t.fields.slug})}))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9a6e9151511236081fc8.js.map