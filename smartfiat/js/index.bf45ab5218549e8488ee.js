!function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}a(2),a(3),a(4);var n=e(a(5)),r=e(a(6)),i=e(a(7)),s=e(a(8)),o=e(a(9)),c=e(a(10)),l=e(a(11));t(function(){t("body").removeClass("without-transition"),(0,o.default)(),(0,s.default)(),(0,s.default)(".header-notifications"),(0,i.default)(".overlay",".open-popup-btn",".popup__close-btn"),(0,c.default)(),new n.default(".input--text"),new r.default({tabsLabels:".tab-label",tabsContents:".tab-content",onChange:function(){}}),(0,l.default)()})}).call(e,a(0))},function(t,e){},function(t,e,a){"use strict";Array.prototype.find||(Array.prototype.find=function(t){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,a=Object(this),n=a.length>>>0,r=arguments[1],i=0;i<n;i++)if(e=a[i],t.call(r,e,i,a))return e})},function(t,e,a){"use strict";var n,r,i,s;Array.from||(Array.from=(n=Object.prototype.toString,r=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},i=Math.pow(2,53)-1,s=function(t){var e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e}(t);return Math.min(Math.max(e,0),i)},function(t){var e=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,n=arguments.length>1?arguments[1]:void 0;if(void 0!==n){if(!r(n))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var i,o=s(e.length),c=r(this)?Object(new this(o)):new Array(o),l=0;l<o;)i=e[l],c[l]=n?void 0===a?n(i,l):n.call(a,i,l):i,l+=1;return c.length=o,c}))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),n=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=document.querySelectorAll(t);this._selector=t,this._inputObjects=this._createInputObjects(a),this._bindHandlers(a)}return a(e,[{key:"_createInputObjects",value:function(t){var e={},a=0;return Array.from(t).forEach(function(t){var n=a++;e[n]={id:n,wrapper:t,input:t.querySelector("input, textarea"),label:t.querySelector(".input__label"),errorContainer:t.querySelector(".input__error"),regex:new RegExp(t.dataset.pattern),errorMessage:t.dataset.errorMessage},t.dataset.id=n,t.dataset.textField="true",""===e[n].input.value&&e[n].input.id!==document.activeElement.id||e[n].wrapper.classList.add("active")}),e}},{key:"_bindHandlers",value:function(e){var a=this;t(document).on("focus",this._selector,function(t){this.hasAttribute("data-text-field")&&this.classList.add("active")}),t(document).on("blur",this._selector,function(e){var n=t(this).data("id");if(void 0!==n){var r=a._inputObjects[n];r&&(""===r.input.value?(r.wrapper.classList.remove("active"),r.wrapper.classList.remove("invalid"),r.wrapper.classList.remove("valid"),r.errorContainer&&(r.errorContainer.innerHTML="")):(r.wrapper.classList.add("active"),a.validate(n)))}})}},{key:"validate",value:function(t){var e=this._inputObjects[t];e.regex.test(e.input.value)?(e.wrapper.classList.add("valid"),e.wrapper.classList.remove("invalid"),e.errorContainer&&(e.errorContainer.innerHTML="")):(e.wrapper.classList.remove("valid"),e.wrapper.classList.add("invalid"),e.errorContainer&&(e.errorContainer.innerHTML=e.errorMessage))}}]),e}();e.default=n}).call(e,a(0))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),n=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._tabsLabelsSelector=t.tabsLabels,this._tabsContentsSelector=t.tabsContents,this.onChange=t.onChange,this.prepareData(this._tabsLabelsSelector,this._tabsContentsSelector),this.attachEvents()}return a(e,[{key:"prepareData",value:function(e,a){var n=this,r=t(e),i=t(a);this._tabsLabels={},this._activeTabsLabels={},r.each(function(e){var a=t(this),i=a.data("tabGroup")||"default";n._tabsLabels[i]||(n._tabsLabels[i]=t([])),n._tabsLabels[i]=n._tabsLabels[i].add(this),a.hasClass("active")&&(n._activeTabsLabels[i]&&n._activeTabsLabels[i].removeClass("active"),a.addClass("active"),n._activeTabsLabels[i]=a),n._activeTabsLabels[i]||e+1!==r.length||(a.addClass("active"),n._activeTabsLabels[i]=a)}),this._tabsContents={},this._activeTabsContents={},i.each(function(e){var a=t(this),r=a.data("tabGroup")||"default";n._tabsContents[r]||(n._tabsContents[r]=t([])),n._tabsContents[r]=n._tabsContents[r].add(this),a.hasClass("active")&&(n._activeTabsContents[r]&&n._activeTabsContents[r].removeClass("active"),a.addClass("active"),n._activeTabsContents[r]=a),n._activeTabsContents[r]||e+1!==i.length||(a.addClass("active"),n._activeTabsContents[r]=a)})}},{key:"attachEvents",value:function(){var e=this;t(this._tabsLabelsSelector).on("click",function(){var a=t(this);return e.activate(a.data("tab"),a.data("tabGroup")),!1})}},{key:"deactivateActive",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";this._activeTabsLabels[t].removeClass("active"),this._activeTabsContents[t].removeClass("active")}},{key:"activate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&this.deactivateActive(e),this._activeTabsLabels[e]=this._tabsLabels[e].filter('[data-tab="'+t+'"]'),this._activeTabsContents[e]=this._tabsContents[e].filter('[data-tab="'+t+'"]'),this._activeTabsLabels[e].addClass("active"),this._activeTabsContents[e].addClass("active"),this.onChange(t)}}]),e}();e.default=n}).call(e,a(0))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,a,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:480,i=t(e),s=t(document),o=t("body"),c=void 0;s.on("click",a,function(){var e=t(this).data("popupId"),a=i.filter("#"+e);if(a&&a.length)return i.removeClass("active"),a.addClass("active"),o.addClass("hidden-scroll"),!1}),s.on("click",n,function(){var a=t(this).closest(e);return a.addClass("hiding"),o.removeClass("hidden-scroll"),clearTimeout(c),c=setTimeout(function(){a.removeClass("hiding"),a.removeClass("active")},r),!1})}}).call(e,a(0))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".dropdown-btn";t(e).on("click",function(e){e.stopPropagation(),t(this).toggleClass("active")}),t(document).on("click",function(){t(e).removeClass("active")})}}).call(e,a(0))},function(t,e,a){"use strict";(function(t){function a(){var t=!1;o.on("click",function(e){return e.stopPropagation(),t?(o.removeClass("active"),s.removeClass("active"),r.removeClass("hidden-scroll"),t=!1):(o.addClass("active"),s.addClass("active"),r.addClass("hidden-scroll"),n.addClass("header--fixed"),t=!0),!1})}Object.defineProperty(e,"__esModule",{value:!0});var n=t("#main-header"),r=t("body"),i=t(window),s=t("#burger-menu"),o=t("#burger-btn");e.default=function(){a(),function(){function t(){i.scrollTop()>64?n.addClass("header--fixed"):n.removeClass("header--fixed")}i.on("scroll",t),t()}()}}).call(e,a(0))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=t("#news-list"),a=e.children().length,n=0,r=1;e&&e.length&&a>1&&setInterval(function(){r>=a&&(r=0),n=36*r++,e.css({transform:"translateY(-"+n+"px)"})},5e3)}}).call(e,a(0))},function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=void 0;t(".spoiler-block__header").on("click",function(){(e=t(this).closest(".spoiler-block")).toggleClass("active"),e.children(".spoiler-block__content").stop(!0).slideToggle(320)})}}).call(e,a(0))}]);
//# sourceMappingURL=index.bf45ab5218549e8488ee.js.map