(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HSia:function(e,a,t){},HbxI:function(e,a,t){},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var r=t("q1tI"),l=t.n(r),n=t("soUV"),i=t("dhsJ"),s=t("j8Pq"),c=t("TSYQ"),m=t.n(c),d=t("Wbzz"),o=t("e2Ho"),u=t("ouDc"),f=t("eh6K");function g(e,a){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return p(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function p(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}var E=function(e){var a=e.posts;return Object(r.useEffect)((function(){var e=a.length,t=new u.d(".js-featured-slider",{type:"slider",rewind:!1,gap:0,swipeThreshold:!1,dragThreshold:!1,breakpoints:{768:{swipeThreshold:1!==e&&80,dragThreshold:1!==e&&120}}});t.on("mount.after",(function(){Object(f.a)(".js-featured-article-title",200)})),t.mount({Controls:u.b,Swipe:u.c,Breakpoints:u.a,ArrowDisabler:function(a,t){var r="js-featured-slider-controls",l="js-featured-slider-previous",n="js-featured-slider-next";return{mount:function(){a.settings.rewind||1===e||a.on(["mount.after","run"],(function(){for(var e,i=g(t.Controls.items);!(e=i()).done;){var s=e.value;if(s.className.includes(r)){var c=s.querySelector("."+l);c&&(0===a.index?c.setAttribute("disabled",""):c.removeAttribute("disabled"));var m=s.querySelector("."+n);if(m)(a.settings.bound?a.index+(a.settings.perView-1):a.index)===t.Sizes.length-1?m.setAttribute("disabled",""):m.removeAttribute("disabled")}}}))}}}})}),[]),l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"m-featured-slider glide js-featured-slider"},l.a.createElement("div",{className:"glide__track","data-glide-el":"track"},l.a.createElement("div",{className:"m-featured-slider__list glide__slides"},a.map((function(e){var a=e.node,t=a.frontmatter,n=t.tags,i=t.authors,s=t.title,c=t.published_at,u=t.feature_image,f=i[0],g=n[0],p=Object(o.j)(u);return l.a.createElement("div",{className:"m-featured-slider__list__item glide__slide js-featured-slide",key:a.fields.slug},l.a.createElement("article",{className:m()("m-featured-article",{"no-picture":!p})},l.a.createElement("div",{className:"m-featured-article__picture"},p&&l.a.createElement(r.Fragment,null,l.a.createElement(o.a,{loading:"lazy",image:p,alt:""}))),l.a.createElement("div",{className:"m-featured-article__meta"},l.a.createElement(d.Link,{to:"/author/"+f.id,className:"m-featured-article__author js-tooltip","aria-label":f.name},l.a.createElement("div",{style:{backgroundImage:"url("+(f.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}})),g&&l.a.createElement(d.Link,{to:"/tag/"+g.id,className:"m-featured-article__tag"},g.name)),l.a.createElement("div",{className:"m-featured-article__ribbon"},l.a.createElement("span",{className:"icon-star"}),l.a.createElement("span",null,"Featured")),l.a.createElement(d.Link,{to:"/blog"+a.fields.slug,className:"m-featured-article__content"},l.a.createElement("h2",{className:"m-featured-article__title js-featured-article-title",title:s},s),l.a.createElement("div",{className:"m-featured-article__timestamp"},l.a.createElement("span",null,c),l.a.createElement("span",null,"•"),l.a.createElement("span",null,a.timeToRead," min read")))))})))),l.a.createElement("div",{"data-glide-el":"controls",className:"glide__arrows js-featured-slider-controls"},l.a.createElement("button",{"data-glide-dir":"<",className:"m-icon-button in-featured-articles glide-prev js-featured-slider-previous","aria-label":"Previous"},l.a.createElement("span",{className:"icon-arrow-left","aria-hidden":"true"})),l.a.createElement("button",{"data-glide-dir":">",className:"m-icon-button in-featured-articles glide-next js-featured-slider-next","aria-label":"Next"},l.a.createElement("span",{className:"icon-arrow-right","aria-hidden":"true"})))))};t("HSia"),t("HbxI");function _(e){var a=e.data,t=a.posts,c=a.featuredPosts,m=a.coverImage,d=a.site.siteMetadata;return l.a.createElement(n.a,null,l.a.createElement(r.Fragment,null,l.a.createElement("main",{className:"main-wrap"},l.a.createElement(i.a,{source:m},l.a.createElement("div",{className:"m-hero__content","data-aos":"fade-down"},l.a.createElement("h1",{className:"m-hero-title bigger"},d.title),l.a.createElement("p",{className:"m-hero-description bigger"},d.description))),l.a.createElement("div",{className:"l-content"},l.a.createElement("div",{className:"l-wrapper","data-aos":"fade-up","data-aos-delay":"300"},l.a.createElement("div",{className:"l-grid centered"},c.edges.length>0?l.a.createElement(E,{posts:c.edges}):null,t.edges.map((function(e){var a=e.node;return l.a.createElement(s.a,{post:a,key:a.fields.slug})}))))))))}},dhsJ:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("e2Ho"),i=t("TSYQ"),s=t.n(i);a.a=function(e){var a=e.source,t=e.post,r=e.children,i=Object(n.j)(a);return a?l.a.createElement("section",{className:"m-hero with-picture","data-aos":"fade"},l.a.createElement("div",{className:s()("m-hero__picture",{"in-post":t})},l.a.createElement(n.a,{image:i,alt:"Plant"})),r):l.a.createElement("section",{className:"m-hero no-picture","data-aos":"fade"},r)}},j8Pq:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),i=t("e2Ho"),s=t("FIZb");a.a=function(e){var a=e.post,t=a.frontmatter,c=t.tags,m=t.authors,d=t.title,o=t.published_at,u=t.feature_image,f=t.featured,g=m[0],p=c[0],E=Object(i.j)(u),_=l.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__info-link","aria-label":d},l.a.createElement("div",null,l.a.createElement("h2",{className:"m-article-card__title js-article-card-title",title:d},d)),l.a.createElement("div",{className:"m-article-card__timestamp"},l.a.createElement("span",null,o),l.a.createElement("span",null,"•"),l.a.createElement("span",null,a.timeToRead," min read")));return l.a.createElement("article",{className:"m-article-card  post"},l.a.createElement("div",{className:"m-article-card__picture"},l.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__picture-link","aria-hidden":"true",tabIndex:-1},l.a.createElement(i.a,{className:"m-article-card__picture-background",loading:"lazy",image:E,alt:""})),l.a.createElement(n.Link,{to:"/author/"+g.id,className:"m-article-card__author js-tooltip","aria-label":g.name},l.a.createElement(r.Fragment,null),l.a.createElement(s.a,{content:"Posted by "+g.name},l.a.createElement("div",{style:{backgroundImage:"url("+(g.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}}))),f&&l.a.createElement(n.Link,{to:"/blog"+a.fields.slug,className:"m-article-card__featured js-tooltip","aria-label":"Featured"},l.a.createElement("span",{className:"icon-star","aria-hidden":"true"}))),p?l.a.createElement("div",{className:"m-article-card__info"},l.a.createElement(n.Link,{to:"/tag/"+p.id,className:"m-article-card__tag"},p.name),_):l.a.createElement("div",{className:"m-article-card__info no-tag"},_))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-78855a3a878569328717.js.map