!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n){e.exports=jQuery},function(e,n,t){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}t(2);var o=n(t(3)),i=n(t(4)),s=n(t(5));e(function(){(0,i.default)(),window.popupObj||(window.popupObj=new o.default),window.popupObj.init(),(0,s.default)()})}).call(n,t(0))},function(e,n){},function(e,n,t){"use strict";(function(e){function t(e){return"."+e.split(" ").join(".")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i={formClass:"overlay-form",submitText:"Отправить",submitClass:"overlay-form__input btn btn--primary btn--medium",onSubmitHandler:null},s={type:"text",placeholder:"",class:"input input--text input--fullwidth",name:"",value:"",required:!1},r=function(){function n(t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.defaultOptions={popupsContainerSelector:"body",popupCloseBtnClass:"popup__close-btn btn",popupTitleClass:"popup__title",popupContentClass:"popup__content",overlayCloseBtnClass:"overlay-close-btn",overlayTitleClass:"overlay__title",overlayContentClass:"overlay-content",activeClass:"active"},this.options=new Object,e.extend(this.options,this.defaultOptions,t)}return o(n,[{key:"init",value:function(){this.popupsContainer=e(this.options.popupsContainerSelector),this.popupElements=new Object,this._bindCommonHandlers()}},{key:"_bindCommonHandlers",value:function(){var n=this,o=t(this.options.popupCloseBtnClass)+","+t(this.options.overlayCloseBtnClass);this.popupsContainer.on("click",o,function(){var t=e(this).closest(".overlay")[0].id;n.hide(t)}),e("body").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",".overlay",function(){var t=e(this);t.hasClass("hiding")&&t.removeClass("hiding").removeClass(n.options.activeClass)})}},{key:"get",value:function(e){return this.popupElements[e]}},{key:"show",value:function(e){var n=e?this.popupElements[e]:this;n&&n.addClass(this.options.activeClass)}},{key:"hide",value:function(e){var n=e?this.popupElements[e]:this;n&&n.addClass("hiding")}},{key:"create",value:function(n){var t=this._renderPopup(n),o=e(t);return this.popupsContainer.append(o),this.popupElements[n.popupId]=o}},{key:"change",value:function(n){var o=n.popupId?this.popupElements[n.popupId]:this;if(o){this.popupsCache||(this.popupsCache=new Object);var i=this.popupsCache[n.popupId];i||(i=this.popupsCache[n.popupId]={title:e(t(this.options.popupTitleClass),o),content:e(t(this.options.popupContentClass),o)}),i.title.html(n.title),i.content.html(n.content)}return o}},{key:"createOrChange",value:function(e){if(!this.change(e))return this.create(e)}},{key:"createForm",value:function(n){n.formOptions=e.extend({},i,n.formOptions);var o=this._renderPopupForm(n),s=e(o);if(this.popupsContainer.append(s),n.popupId&&n.formOptions.formClass){var r="#"+n.popupId+" "+t(n.formOptions.formClass);this._bindPopupFormSubmitHandler(r,n.formOptions.onSubmitHandler)}return this.popupElements[n.popupId]=s}},{key:"_normalizeSerializedArray",value:function(n){var t=new Object;return e.each(n,function(e,n){t[n.name]=n.value}),t}},{key:"_bindPopupFormSubmitHandler",value:function(n,t){var o=this;return!(!n||"function"!=typeof t||(e(n).on("submit",function(n){var i=o._normalizeSerializedArray(e(n.target).serializeArray());return t(i),!1}),0))}},{key:"_renderPopup",value:function(e){var n="large"===e.popupSize?"popup--large":"popup--small";return'<div class="overlay overlay--center" id="'+e.popupId+'">\n                    <div class="overlay__popup-container">\n                        <div class="popup '+n+'">\n                            <div class="popup__header">\n                                <div class="'+this.options.popupTitleClass+'">'+e.title+'</div>\n                                <button class="'+this.options.popupCloseBtnClass+'"><i class="fa fa-times" aria-hidden="true"></i></button>\n                            </div>\n                            <div class="'+this.options.popupContentClass+'">'+e.content+"</div>\n                        </div>\n                    </div>\n                </div>"}},{key:"_renderFullOverlayPopup",value:function(e){return'<div class="overlay" id="'+e.popupId+'">\n                    <div class="overlay__container">\n                        <div class="wrapper">\n                            <div class="overlay-header grid-container grid-container--x-between grid-container--y-center">\n                                <a href="/" title="Главная" class="grid-column">\n                                    <img src="'+e.logo+'" alt="logo" class="overlay-header__logo">\n                                </a>\n                                <div class="grid-column">\n                                    <div class="overlay-close-btn overlay-close-btn--dark btn">\n                                        <div class="overlay-close-btn__box">\n                                            <span class="overlay-close-btn__line"></span>\n                                            <span class="overlay-close-btn__line"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="wrapper wrapper--small">\n                            <div class="overlay__title">'+e.title+"</div>\n                            "+e.content+"\n                        </div>\n                    </div>\n                </div>"}},{key:"_generateUID",value:function(){return"_"+Math.random().toString(12).substr(2,6)}},{key:"_renderInputs",value:function(n){var t=this,o="",i=void 0,r=void 0;return e.each(n,function(n,a){n=(a=e.extend({},s,a)).name||n,i=n+t._generateUID(),r="number"===a.type?' step="0.01"':"",o+='<div class="overlay-form__input '+a.class+'">\n                                <input type="'+a.type+'"'+r+' name="'+n+'" value="'+a.value+'" id="'+i+'" '+(a.required?"required":"")+'>\n                                <label for="'+i+'" class="input__label">'+(a.placeholder||n)+'<span class="accent">'+(a.required?"*":"")+'</span></label>\n                                <div class="input__error"></div>\n                            </div>'}),o}},{key:"_renderPopupForm",value:function(e){var n='<form class="overlay-content '+e.formOptions.formClass+'">\n                                '+this._renderInputs(e.inputs)+'\n                                <div class="overlay-form__btn-container text-align-center">\n                                    <button type="submit" class="'+e.formOptions.submitClass+'">'+e.formOptions.submitText+"</button>\n                                </div>\n                          </form>";return this._renderFullOverlayPopup({popupId:e.popupId,title:e.title,logo:e.logo,content:n})}},{key:"renderErrorsList",value:function(e){return'<ul class="errors-list">\n                    <li class="errors-list__item">\n                        '+e.join('</li><li class="errors-list__item">')+"\n                    </li>\n                </ul>"}}]),n}();n.default=r}).call(n,t(0))},function(e,n,t){"use strict";(function(e){function t(){var e=!1;a.on("click",function(n){return n.stopPropagation(),e?(a.removeClass("active"),r.removeClass("active"),i.removeClass("hidden-scroll"),e=!1):(a.addClass("active"),r.addClass("active"),i.addClass("hidden-scroll"),o.addClass("header--fixed"),e=!0),!1})}Object.defineProperty(n,"__esModule",{value:!0});var o=e("#main-header"),i=e("body"),s=e(window),r=e("#burger-menu"),a=e("#burger-btn");n.default=function(){t(),function(){function e(){s.scrollTop()>150?o.addClass("header--fixed"):o.removeClass("header--fixed")}s.on("scroll",e),e()}()}}).call(n,t(0))},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var n=e("#news-list"),t=n.children().length,o=0,i=1;n&&n.length&&t>1&&setInterval(function(){i>=t&&(i=0),o=36*i++,n.css({transform:"translate3d(0, -"+o+"px, 0)"})},5e3)}}).call(n,t(0))}]);
//# sourceMappingURL=index.7792e9de5a5f0275d87a.js.map