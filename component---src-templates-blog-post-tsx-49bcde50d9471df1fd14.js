(self.webpackChunkgeekscreed_com=self.webpackChunkgeekscreed_com||[]).push([[7],{7757:function(e,t,n){e.exports=n(5666)},6837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(3222);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,o,a=f(c);function c(){return s(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&l(t.prototype,n),o&&l(t,o),c}(r.default.Component);t.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},9888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,o,i=u(a);function a(){return c(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&s(t.prototype,n),o&&s(t,o),a}(r.default.Component);t.CommentEmbed=m,m.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},m.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},1629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(3222);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,o,a=d(c);function c(){return l(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),h.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",s({},this.props,{id:"disqus_thread"}))}}])&&u(t.prototype,n),o&&u(t,o),c}(r.default.Component);t.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},7202:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(6837),o=n(9888),i=n(1629);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed},3222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var s=r.value;if("object"===i(t[s])){if(e(t[s],n[s]))return!0}else if(t[s]!==n[s]&&!c(t[s]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},4479:function(e,t,n){"use strict";var r=n(7294),o=n(8590),i=n(5900),a=n.n(i);t.Z=function(e){var t=e.source,n=e.post,i=e.children,c=(0,o.d)(t);return t?r.createElement("section",{className:"m-hero with-picture","data-aos":"fade"},r.createElement("div",{className:a()("m-hero__picture",{"in-post":n})},r.createElement(o.G,{image:c,alt:"Plant"})),i):r.createElement("section",{className:"m-hero no-picture","data-aos":"fade"},i)}},3559:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=n(8590),a=n(4636);t.Z=function(e){var t=e.post,n=t.frontmatter,c=n.tags,s=n.authors,l=n.title,u=n.published_at,f=n.feature_image,d=n.featured,m=s[0],p=c[0],h=(0,i.d)(f),y=r.createElement(o.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__info-link","aria-label":l},r.createElement("div",null,r.createElement("h2",{className:"m-article-card__title js-article-card-title",title:l},l)),r.createElement("div",{className:"m-article-card__timestamp"},r.createElement("span",null,u),r.createElement("span",null,"•"),r.createElement("span",null,t.timeToRead," min read")));return r.createElement("article",{className:"m-article-card  post"},r.createElement("div",{className:"m-article-card__picture"},r.createElement(o.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__picture-link","aria-hidden":"true",tabIndex:-1},r.createElement(i.G,{className:"m-article-card__picture-background",loading:"lazy",image:h,alt:""})),r.createElement(o.Link,{to:"/author/"+m.id,className:"m-article-card__author js-tooltip","aria-label":m.name},r.createElement(r.Fragment,null),r.createElement(a.Z,{content:"Posted by "+m.name},r.createElement("div",{style:{backgroundImage:"url("+(m.profile_image||"/assets/images/default-avatar-square-small.jpg")+")"}}))),d&&r.createElement(o.Link,{to:"/blog"+t.fields.slug,className:"m-article-card__featured js-tooltip","aria-label":"Featured"},r.createElement("span",{className:"icon-star","aria-hidden":"true"}))),p?r.createElement("div",{className:"m-article-card__info"},r.createElement(o.Link,{to:"/tag/"+p.id,className:"m-article-card__tag"},p.name),y):r.createElement("div",{className:"m-article-card__info no-tag"},y))}},1681:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,o)}n.r(t),n.d(t,{default:function(){return C}});var o=n(7757),i=n.n(o),a=n(7294),c=n(5444),s=n(5414),l=n(8590);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=new Map,d=new Map,m=0;function p(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(d.has(n)||(m+=1,d.set(n,m.toString())),d.get(n)):"0":e[t]);var n})).toString()}function h(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=p(e),n=f.get(t);if(!n){var r,o=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=o.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:o},f.set(t,n)}return n}(n),o=r.id,i=r.observer,a=r.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),i.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),i.unobserve(e)),0===a.size&&(i.disconnect(),f.delete(o))}}function y(e){return"function"!=typeof e.children}var g=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),y(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.trackVisibility,i=e.delay;this._unobserveCb=h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!y(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,o=r.children,i=r.as,c=r.tag,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,a.createElement)(i||c||"div",u({ref:this.handleNode},s),o)},r}(a.Component);g.displayName="InView",g.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var v=n(7202),b=function(){var e=(0,a.useRef)(null),t=(0,a.useRef)(null),n=(0,a.useRef)(null),r=(0,a.useState)(0),o=r[0],i=r[1];(0,a.useEffect)((function(){return s(),window.addEventListener("scroll",s),function(){cancelAnimationFrame(e.current),window.removeEventListener("scroll",s)}}),[]),(0,a.useEffect)((function(){var e,r=t.current,o=r.parentElement.getBoundingClientRect().width,i=o/2,a=(void 0===e&&(e="768px"),window.matchMedia("(max-width: "+e+")").matches?2:3);r.parentElement.setAttribute("viewBox","0 0 "+o+" "+o),r.setAttribute("stroke-width",a),r.setAttribute("r",i-(a-1)),r.setAttribute("cx",i),r.setAttribute("cy",i);var c=2*i*Math.PI;r.style.strokeDasharray=c+" "+c,r.style.strokeDashoffset=c,n.current=c}),[]);var c=(0,a.useCallback)((function(){window.scroll({top:0,left:0,behavior:"smooth"})}),[]),s=(0,a.useCallback)((function(){e.current||(e.current=requestAnimationFrame((function(){var t=document.documentElement,r=Math.ceil(t.scrollTop/(t.scrollHeight-t.clientHeight)*100);i(n.current-r/100*n.current),e.current=null})))}),[]);return a.createElement("button",{className:"m-icon-button filled in-share progress js-scrolltop","aria-label":"Scroll to top",onClick:c},a.createElement("span",{className:"icon-arrow-top","aria-hidden":"true"}),a.createElement("svg",{"aria-hidden":"true",style:{opacity:1}},a.createElement("circle",{className:"progress-ring__circle js-progress",ref:t,fill:"transparent",style:{strokeDashoffset:o}})))},w=n(4479),E=n(9675),_=n(2361),k=n(6011),N=n(3559),S=function(e){var t=e.posts;return(0,a.useEffect)((function(){if((null==t?void 0:t.length)>0){var e=new _.ZP(".js-recommended-slider",{type:"slider",rewind:!1,perView:3,swipeThreshold:!1,dragThreshold:!1,gap:0,breakpoints:{1023:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},720:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},568:{type:"carousel",perView:1,swipeThreshold:80,dragThreshold:120}}});e.on("mount.after",(function(){(0,k.Z)(".js-article-card-title",100),(0,k.Z)(".js-article-card-title-no-image",250)})),e.on("length.change",(function(t){1===t&&e.update({type:"slider"})})),e.mount({Controls:_.ZX,Swipe:_.oF,Breakpoints:_.u3,Length:function(e,t,n){return{mount:function(){n.emit("length.change",t.Sizes.length)}}}})}}),[]),a.createElement("section",{className:"m-recommended"},a.createElement("div",{className:"l-wrapper in-recommended"},a.createElement("h3",{className:"m-section-title in-recommended"},"Recommended for you"),a.createElement("div",{className:"m-recommended-articles"},a.createElement("div",{className:"m-recommended-slider glide js-recommended-slider"},a.createElement("div",{className:"glide__track","data-glide-el":"track"},a.createElement("div",{className:"glide__slides"},(null==t?void 0:t.length)>0?t.map((function(e){var t=e.node;return a.createElement("div",{key:t.fields.slug,className:"m-recommended-slider__item glide__slide"},a.createElement(N.Z,{post:t}))})):a.createElement("div",{className:"m-recommended-slider__item glide__slide"},a.createElement("header",{className:"m-heading no-margin"},a.createElement("h3",null,"No posts found"),a.createElement("p",null,"Apparently there are no posts at the moment, check again later."))))),(null==t?void 0:t.length)>1&&a.createElement("div",{"data-glide-el":"controls",className:"glide__arrows js-controls"},a.createElement("button",{"data-glide-dir":"<",className:"m-icon-button filled in-recommended-articles glide-prev","aria-label":"Previous"},a.createElement("span",{className:"icon-arrow-left","aria-hidden":"true"})),a.createElement("button",{"data-glide-dir":">",className:"m-icon-button filled in-recommended-articles glide-next","aria-label":"Next"},a.createElement("span",{className:"icon-arrow-right","aria-hidden":"true"})))))))},j=n(4636),O=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==window.IntersectionObserver){e.next=3;break}return e.next=3,n.e(272).then(n.t.bind(n,2272,23));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),C=function(e){var t,n,r=e.data,o=r.post,i=r.relatedPosts,u=r.site.siteMetadata.siteUrl,f=o.frontmatter,d=f.tags,m=f.authors,p=f.published_at,y=f.feature_image,g=m[0],_=d[0],k=(0,a.useState)(!1),N=k[0],C=k[1],I=(0,a.useState)(!1),x=I[0],P=I[1];(0,a.useEffect)((function(){var e=setTimeout((function(){C(!0)}),1e3);return O(),function(){clearTimeout(e)}}),[]);var L=function(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,o=t.trackVisibility,i=t.rootMargin,c=t.root,s=t.triggerOnce,l=t.skip,u=t.initialInView,f=(0,a.useRef)(),d=(0,a.useState)({inView:!!u}),m=d[0],p=d[1],y=(0,a.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),l||e&&(f.current=h(e,(function(e,t){p({inView:e,entry:t}),t.isIntersecting&&s&&f.current&&(f.current(),f.current=void 0)}),{root:c,rootMargin:i,threshold:n,trackVisibility:o,delay:r}))}),[Array.isArray(n)?n.toString():n,c,i,s,l,o,r]);(0,a.useEffect)((function(){f.current||!m.entry||s||l||p({inView:!!u})}));var g=[y,m.inView,m.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}({triggerOnce:!0}),R=L.ref,D=L.inView,T=u+"/blog"+o.fields.slug,q=o.frontmatter.title,V="geekscreed",M=(0,a.useMemo)((function(){return{identifier:"/blog"+o.fields.slug,title:q,url:T}}),[T]),A=(0,l.d)(o.frontmatter.feature_image),U=""+u+(null==A||null===(t=A.images)||void 0===t||null===(n=t.fallback)||void 0===n?void 0:n.src),F=(0,a.useMemo)((function(){var e={"@context":"https://schema.org","@type":"Article",headline:q,image:[U],datePublished:o.frontmatter.published_at};return JSON.stringify(e)}),[]);return a.createElement(E.Z,{title:q},a.createElement(s.q,{meta:[{name:"twitter:creator",content:g.twitter&&"@"+g.twitter},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:T},{property:"og:type",content:"article"},{property:"og:title",content:q},{property:"og:description",content:o.excerpt},{property:"og:image",content:U}],link:[{rel:"canonical",href:T}]},a.createElement("script",{type:"application/ld+json"},F)),a.createElement("main",{className:"main-wrap"},a.createElement("article",null,a.createElement("div",{className:"l-content in-post"},a.createElement(w.Z,{source:y,post:!0}),a.createElement("div",{className:"l-wrapper in-post js-aos-wrapper","data-aos":N?void 0:"fade-up","data-aos-delay":"300"},a.createElement("div",{className:"l-post-content js-progress-content"},a.createElement("header",{className:"m-heading"},a.createElement("h1",{className:"m-heading__title in-post"},q),a.createElement("div",{className:"m-heading__meta"},_&&a.createElement(a.Fragment,null,a.createElement(c.Link,{to:"/tag/"+_.slug,className:"m-heading__meta__tag"},_.name),a.createElement("span",{className:"m-heading__meta__divider","aria-hidden":"true"},"•")),a.createElement("span",{className:"m-heading__meta__time"},p))),a.createElement("div",{className:"pos-relative js-post-content"},a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}),a.createElement("div",{className:"m-share"},a.createElement("div",{className:"m-share__content js-sticky"},a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+T,className:"m-icon-button filled in-share",target:"_blank",rel:"noopener","aria-label":"Facebook"},a.createElement("span",{className:"icon-facebook","aria-hidden":"true"})),a.createElement("a",{href:"https://twitter.com/intent/tweet?text="+q+"&url="+T,className:"m-icon-button filled in-share",target:"_blank",rel:"noopener","aria-label":"Twitter"},a.createElement("span",{className:"icon-twitter","aria-hidden":"true"})),a.createElement(b,null))),(null==d?void 0:d.length)>0&&a.createElement("section",{className:"m-tags in-post",ref:R},a.createElement("h3",{className:"m-submenu-title"},"Tags"),a.createElement("ul",null,null==d?void 0:d.map((function(e){return a.createElement("li",{key:e.id},a.createElement(c.Link,{to:"/tag/"+e.slug},e.name))}))))))),a.createElement("section",{className:"m-author"},a.createElement("div",{className:"m-author__content"},a.createElement("div",{className:"m-author__picture"},a.createElement(c.Link,{to:"/author/"+g.id,className:"m-author-picture","aria-label":g.name},a.createElement("div",{style:{backgroundImage:"url("+(g.profile_image||"/images/default-avatar-square-small.jpg")+")"}}))),a.createElement("div",{className:"m-author__info"},a.createElement("h4",{className:"m-author__name"},a.createElement(c.Link,{to:"/author/"+g.id},g.name)),g.bio&&a.createElement("p",{className:"m-author__bio"},g.bio),a.createElement("ul",{className:"m-author-links"},g.website&&a.createElement("li",null,a.createElement("a",{href:g.website,target:"_blank",rel:"noopener","aria-label":"Website"},a.createElement("span",{className:"icon-globe","aria-hidden":"true"}))),g.facebook&&a.createElement("li",null,a.createElement("a",{href:"https://facebook.com/"+g.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook"},a.createElement("span",{className:"icon-facebook","aria-hidden":"true"}))),g.twitter&&a.createElement("li",null,a.createElement("a",{href:"https://twitter.com/"+g.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter"},a.createElement("span",{className:"icon-twitter","aria-hidden":"true"}))),g.linkedin&&a.createElement("li",null,a.createElement("a",{href:"https://linkedin.com/in/"+g.linkedin,target:"_blank",rel:"noopener","aria-label":"Linkedin"},a.createElement("span",{className:"icon-linkedin","aria-hidden":"true"}))))))),a.createElement("section",{className:"m-comments"},a.createElement("div",{className:"m-load-comments "+(x?"hide":"")},a.createElement("div",{className:"m-load-comments__line"}),a.createElement(j.Z,{content:"Load comments"},a.createElement("button",{className:"m-icon-button filled as-load-comments js-tooltip js-load-comments","aria-label":"Load Comments",onClick:function(){P(!0),window.scroll({top:window.scrollY+100,behavior:"smooth"})}},a.createElement("span",{className:"icon-comments"})))),a.createElement("div",{className:"l-wrapper in-comments js-comments-iframe "+(x?"":"m-load-comments__iframe"),"data-aos":"fade-up"},D&&a.createElement("div",{id:"disqus_thread"},a.createElement(v.qw,{shortname:V,config:M})))),a.createElement(S,{posts:null==i?void 0:i.edges})))))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(P){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===m)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",m="executing",p="completed",h={};function y(){}function g(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==n&&r.call(E,i)&&(b=E);var _=v.prototype=y.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function I(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return g.prototype=_.constructor=v,v.constructor=g,g.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},k(N.prototype),N.prototype[a]=function(){return this},e.AsyncIterator=N,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new N(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(_),s(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-49bcde50d9471df1fd14.js.map