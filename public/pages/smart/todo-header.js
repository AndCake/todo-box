(function (module) {
	return module.exports = function() {
		var ENV = "development";
var __resultComponent = (function () {
'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var styles = (function (code) { return code; })("todo-header{display:block;background:#91a437;color:#e2f0a0;border-bottom:1px solid #495800;-webkit-box-shadow:0 0 5px rgba(0,0,0,.25);box-shadow:0 0 5px rgba(0,0,0,.25)}todo-header header{max-width:900px;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}todo-header .login-trigger{border:1px solid #1e053e;cursor:pointer;background:#1e053e;color:#de94ab;border-radius:3px;text-shadow:1px 1px rgba(0,0,0,.25)}todo-header .login-trigger:hover{background:#8b75a9;color:#1e053e;text-shadow:1px 1px hsla(0,0%,100%,.25)}todo-header .login-form{position:absolute;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);background:#fff;color:#333;max-width:320px;font-family:sans-serif;font-size:90%;top:3em;right:0}todo-header legend{font-size:120%}todo-header fieldset{border:0}todo-header label{width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:.25em 0;font-size:90%}todo-header .login-form__actions,todo-header label{display:-webkit-box;display:-ms-flexbox;display:flex}todo-header .login-form__actions{-ms-flex-pack:distribute;justify-content:space-around;margin-top:1em}todo-header button[type=submit]{border:1px solid #6c7e15;cursor:pointer;background:#495800;color:#e2f0a0;border-radius:3px;text-shadow:1px 1px hsla(0,0%,100%,.75)}todo-header button[type=submit]:hover{color:#6c7e15;background:#e2f0a0}todo-header .button-cancel{border:1px solid #b2b2b2;background:#e5e5e5;color:#4c4c4c;text-shadow:1px 1px hsla(0,0%,100%,.75)}", {});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main = createCommonjsModule(function (module) {
"use strict";var scope="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:void 0,eventRegistry=scope.__eventRegistry=scope.__eventRegistry||{};function trigger(t,e){if(eventRegistry[t])for(var a,n=0,r=eventRegistry[t].length;a=eventRegistry[t][n],n<r;n+=1){if(!1===a(e))break}}function on(t,e){eventRegistry[t]||(eventRegistry[t]=[]),eventRegistry[t].push(e);}function off(t,e){if(eventRegistry[t])if("function"==typeof e){var a=eventRegistry[t].indexOf(e);a>=0&&eventRegistry[t].splice(a,1);}else eventRegistry[t]=[];}function one(t,e){var a=function(n){off(t,a),e(n);};on(t,a);}var events=Object.freeze({trigger:trigger,on:on,off:off,one:one}),scope$1="undefined"!=typeof window?window:{},data=scope$1.__glassbilStoreData=scope$1.__glassbilStoreData||{},trigger$1=trigger;function mirror(){return this}function deepFreeze(t){if(null===t||"function"==typeof t.toJS||"object"!=typeof t)return t;for(var e=Object.getOwnPropertyNames(t),a={toJS:{value:mirror.bind(t)}},n=function(t,n){a[e[t]]={enumerable:!0,get:function(){return deepFreeze(n)},set:function(a){throw new Error('Cannot change property "'+e[t]+'" to "'+a+'" of an immutable object')}};},r=0,o=void 0;o=t[e[r]],r<e.length;r+=1)n(r,o);return Object.freeze(Object.create(Object.getPrototypeOf(t),a))}var Store=function(t,e){var a=this;if(this.name=t||"unnamed",this.triggered=!1,Object.keys(events).forEach(function(e){a[e]=function(a,n){a.indexOf(":")>=0?events[e](a,n):events[e](t+"-store:"+a,n);};}),"object"==typeof e)for(var n=Object.keys(e),r=function(e,r){a[n[e]]=function(e){var a=r(data[t].currentData.toJS(),e,this.next.bind(this));a&&this.next(a);}.bind(a);},o=0,i=void 0;i=e[n[o]],o<n.length;o+=1)r(o,i);t&&(data[t]=data[t]||{loaded:!1,currentData:deepFreeze([]),historicData:[]});},prototypeAccessors={data:{configurable:!0}};prototypeAccessors.data.get=function(){return data[this.name]?data[this.name].currentData.toJS():null},Store.prototype.loaded=function(){var t=Object.keys(data).filter(function(t){return data[t].loaded}).length;if(t===Object.keys(data).length&&!this.triggered){var e={};Object.keys(data).map(function(t){e[t]=data[t].currentData.toJS();}),this.triggered=!0,trigger$1("global:data-loaded",e);}},Store.prototype.next=function(t){if(data[this.name].loaded=!0,(t=deepFreeze(t))!==data[this.name].currentData){for(data[this.name].historicData.push(data[this.name].currentData);data[this.name].historicData.length>10;)data[this.name].historicData.shift();data[this.name].currentData=t,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS());}this.loaded();},Store.prototype.previous=function(){data[this.name].historicData.length<1||(newState=data[this.name].historicData.pop(),data[this.name].currentData=newState,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS()));},Object.defineProperties(Store.prototype,prototypeAccessors),module.exports=Store;
});

var UserStore = (function (Store$$1) {
	function UserStore() {
		Store$$1.call(this, 'user', {
			setUser: function setUser(currentState, data) {
				currentState = Object.assign({}, currentState, data);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('credentials', JSON.stringify(currentState));
				}
				return currentState;
			}
		});

		this.loadData();
	}

	if ( Store$$1 ) UserStore.__proto__ = Store$$1;
	UserStore.prototype = Object.create( Store$$1 && Store$$1.prototype );
	UserStore.prototype.constructor = UserStore;

	UserStore.prototype.loadData = function loadData () {
		var this$1 = this;

		if (typeof localStorage !== 'undefined') {
			setTimeout(function () {
				var credentials = localStorage.getItem('credentials') || '{}';
				this$1.next(JSON.parse(credentials));
			}, 100);
		} else {
			this.next({});
		}
	};

	return UserStore;
}(main));

var TodoHeader = function TodoHeader() {
	var _this = this || {};
	_this.props = {
		credentials: {},
		loginShown: false
	};
};

var prototypeAccessors = { styles: {},events: {} };

TodoHeader.prototype.render = function render (data) {
	return (
		this.createNode( 'header', null,
				this.createNode( 'h3', { class: "logo" }, "Todo Box"),
				this.createNode( 'button', { class: "login-trigger js-trigger-form" }, data.props.credentials.username || 'Login', data.props.credentials.name ? '@' + data.props.credentials.name : ''),
				data.props.loginShown ? (
				this.createNode( 'form', { class: "login-form" },
						this.createNode( 'fieldset', null,
							this.createNode( 'legend', null, "Login" ),
							this.createNode( 'p', null, "Please login to your WebDAV provider. Your credentials will only be used to transfer your todos and will only be saved in your browser." ),
							this.createNode( 'label', null, "Service Name: ", this.createNode( 'input', { type: "text", name: "name", value: "Box.com" })
							),
							this.createNode( 'label', null, "WebDAV Base URL: ", this.createNode( 'input', { type: "url", name: "webdavBase", value: "https://dav.box.com/dav" })
							),
							this.createNode( 'label', null, "Path to Todo.txt: ", this.createNode( 'input', { type: "text", name: "path", value: "", placeholder: "/todo.txt" })
							),
							this.createNode( 'label', null, "User Name: ", this.createNode( 'input', { type: "email", name: "username", value: "", placeholder: "test@example.org" })
							),
							this.createNode( 'label', null, "Password: ", this.createNode( 'input', { type: "password", name: "password", value: "" })
							),
							this.createNode( 'div', { class: "login-form__actions" },
								this.createNode( 'button', { type: "submit", class: "js-login" }, "Login"), this.createNode( 'button', { type: "button", class: "button-cancel js-cancel" }, "Cancel")
							)
						)
					)
			) : ''
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		'button.js-trigger-form': {click: function click() {
			this.getHost().setProps('loginShown', !this.getHost().props.loginShown);
		}},
		'button.js-cancel': {click: function click() {
			this.getHost().setProps('loginShown', false);
		}},
		'form': {submit: function submit(event) {
			event.preventDefault();
			var url = this.webdavBase.value + (this.path.value || '/todo.txt');
			if (!url.match(/\w+\/[\w+]\.txt$/)) {
				url += (url.substr(-1) === '/' ? '' : '/') + 'todo.txt';
			}
			var credentials = {
				name: this.name.value,
				url: url,
				username: this.username.value,
				password: this.password.value
			};
			this.getHost().setProps('credentials', credentials);
			var userStore = new UserStore();
			userStore.setUser(credentials);
		}}
	};
};

Object.defineProperties( TodoHeader.prototype, prototypeAccessors );

return TodoHeader;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uLy4uL3BhZ2VzL3NtYXJ0L3RvZG8taGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBzY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsZXZlbnRSZWdpc3RyeT1zY29wZS5fX2V2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5fHx7fTtmdW5jdGlvbiB0cmlnZ2VyKHQsZSl7aWYoZXZlbnRSZWdpc3RyeVt0XSlmb3IodmFyIGEsbj0wLHI9ZXZlbnRSZWdpc3RyeVt0XS5sZW5ndGg7YT1ldmVudFJlZ2lzdHJ5W3RdW25dLG48cjtuKz0xKXtpZighMT09PWEoZSkpYnJlYWt9fWZ1bmN0aW9uIG9uKHQsZSl7ZXZlbnRSZWdpc3RyeVt0XXx8KGV2ZW50UmVnaXN0cnlbdF09W10pLGV2ZW50UmVnaXN0cnlbdF0ucHVzaChlKX1mdW5jdGlvbiBvZmYodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe3ZhciBhPWV2ZW50UmVnaXN0cnlbdF0uaW5kZXhPZihlKTthPj0wJiZldmVudFJlZ2lzdHJ5W3RdLnNwbGljZShhLDEpfWVsc2UgZXZlbnRSZWdpc3RyeVt0XT1bXX1mdW5jdGlvbiBvbmUodCxlKXt2YXIgYT1mdW5jdGlvbihuKXtvZmYodCxhKSxlKG4pfTtvbih0LGEpfXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZX0pLHNjb3BlJDE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhfHx7fSx0cmlnZ2VyJDE9dHJpZ2dlcjtmdW5jdGlvbiBtaXJyb3IoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBkZWVwRnJlZXplKHQpe2lmKG51bGw9PT10fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvSlN8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybiB0O2Zvcih2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSxhPXt0b0pTOnt2YWx1ZTptaXJyb3IuYmluZCh0KX19LG49ZnVuY3Rpb24odCxuKXthW2VbdF1dPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBkZWVwRnJlZXplKG4pfSxzZXQ6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2hhbmdlIHByb3BlcnR5IFwiJytlW3RdKydcIiB0byBcIicrYSsnXCIgb2YgYW4gaW1tdXRhYmxlIG9iamVjdCcpfX19LHI9MCxvPXZvaWQgMDtvPXRbZVtyXV0scjxlLmxlbmd0aDtyKz0xKW4ocixvKTtyZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSxhKSl9dmFyIFN0b3JlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztpZih0aGlzLm5hbWU9dHx8XCJ1bm5hbWVkXCIsdGhpcy50cmlnZ2VyZWQ9ITEsT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09ZnVuY3Rpb24oYSxuKXthLmluZGV4T2YoXCI6XCIpPj0wP2V2ZW50c1tlXShhLG4pOmV2ZW50c1tlXSh0K1wiLXN0b3JlOlwiK2Esbil9fSksXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHZhciBuPU9iamVjdC5rZXlzKGUpLHI9ZnVuY3Rpb24oZSxyKXthW25bZV1dPWZ1bmN0aW9uKGUpe3ZhciBhPXIoZGF0YVt0XS5jdXJyZW50RGF0YS50b0pTKCksZSx0aGlzLm5leHQuYmluZCh0aGlzKSk7YSYmdGhpcy5uZXh0KGEpfS5iaW5kKGEpfSxvPTAsaT12b2lkIDA7aT1lW25bb11dLG88bi5sZW5ndGg7bys9MSlyKG8saSk7dCYmKGRhdGFbdF09ZGF0YVt0XXx8e2xvYWRlZDohMSxjdXJyZW50RGF0YTpkZWVwRnJlZXplKFtdKSxoaXN0b3JpY0RhdGE6W119KX0scHJvdG90eXBlQWNjZXNzb3JzPXtkYXRhOntjb25maWd1cmFibGU6ITB9fTtwcm90b3R5cGVBY2Nlc3NvcnMuZGF0YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZGF0YVt0aGlzLm5hbWVdP2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCk6bnVsbH0sU3RvcmUucHJvdG90eXBlLmxvYWRlZD1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZGF0YVt0XS5sb2FkZWR9KS5sZW5ndGg7aWYodD09PU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCYmIXRoaXMudHJpZ2dlcmVkKXt2YXIgZT17fTtPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24odCl7ZVt0XT1kYXRhW3RdLmN1cnJlbnREYXRhLnRvSlMoKX0pLHRoaXMudHJpZ2dlcmVkPSEwLHRyaWdnZXIkMShcImdsb2JhbDpkYXRhLWxvYWRlZFwiLGUpfX0sU3RvcmUucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24odCl7aWYoZGF0YVt0aGlzLm5hbWVdLmxvYWRlZD0hMCwodD1kZWVwRnJlZXplKHQpKSE9PWRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSl7Zm9yKGRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucHVzaChkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEpO2RhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEubGVuZ3RoPjEwOylkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLnNoaWZ0KCk7ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPXQsdHJpZ2dlciQxKHRoaXMubmFtZStcIi1zdG9yZTpjaGFuZ2VkXCIsZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKSl9dGhpcy5sb2FkZWQoKX0sU3RvcmUucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKCl7ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5sZW5ndGg8MXx8KG5ld1N0YXRlPWRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucG9wKCksZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPW5ld1N0YXRlLHRyaWdnZXIkMSh0aGlzLm5hbWUrXCItc3RvcmU6Y2hhbmdlZFwiLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCkpKX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3RvcmUucHJvdG90eXBlLHByb3RvdHlwZUFjY2Vzc29ycyksbW9kdWxlLmV4cG9ydHM9U3RvcmU7XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCd1c2VyJywge1xuXHRcdFx0c2V0VXNlcihjdXJyZW50U3RhdGUsIGRhdGEpIHtcblx0XHRcdFx0Y3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFN0YXRlLCBkYXRhKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NyZWRlbnRpYWxzJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMubG9hZERhdGEoKTtcblx0fVxuXG5cdGxvYWREYXRhKCkge1xuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxldCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFscycpIHx8ICd7fSc7XG5cdFx0XHRcdHRoaXMubmV4dChKU09OLnBhcnNlKGNyZWRlbnRpYWxzKSk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm5leHQoe30pO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdG9kby1oZWFkZXIuY3NzJztcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL3VzZXItc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSGVhZGVyIHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgzIGNsYXNzPVwibG9nb1wiPlRvZG8gQm94PC9oMz5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImxvZ2luLXRyaWdnZXIganMtdHJpZ2dlci1mb3JtXCI+e2RhdGEucHJvcHMuY3JlZGVudGlhbHMudXNlcm5hbWUgfHwgJ0xvZ2luJ317ZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lID8gJ0AnICsgZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lIDogJyd9PC9idXR0b24+XG5cdFx0XHRcdHtkYXRhLnByb3BzLmxvZ2luU2hvd24gPyAoXG5cdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQ+TG9naW48L2xlZ2VuZD5cblx0XHRcdFx0XHRcdFx0PHA+UGxlYXNlIGxvZ2luIHRvIHlvdXIgV2ViREFWIHByb3ZpZGVyLiBZb3VyIGNyZWRlbnRpYWxzIHdpbGwgb25seSBiZSB1c2VkIHRvIHRyYW5zZmVyIHlvdXIgdG9kb3MgYW5kIHdpbGwgb25seSBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0U2VydmljZSBOYW1lOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJCb3guY29tXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0V2ViREFWIEJhc2UgVVJMOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cIndlYmRhdkJhc2VcIiB2YWx1ZT1cImh0dHBzOi8vZGF2LmJveC5jb20vZGF2XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFBhdGggdG8gVG9kby50eHQ6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhdGhcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiL3RvZG8udHh0XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFVzZXIgTmFtZTpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInRlc3RAZXhhbXBsZS5vcmdcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZDpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtX19hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJqcy1sb2dpblwiPkxvZ2luPC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24tY2FuY2VsIGpzLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpIDogJyd9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdGNyZWRlbnRpYWxzOiB7fSxcblx0XHRcdGxvZ2luU2hvd246IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J2J1dHRvbi5qcy10cmlnZ2VyLWZvcm0nOiB7Y2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdsb2dpblNob3duJywgIXRoaXMuZ2V0SG9zdCgpLnByb3BzLmxvZ2luU2hvd24pO1xuXHRcdFx0fX0sXG5cdFx0XHQnYnV0dG9uLmpzLWNhbmNlbCc6IHtjbGljaygpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2xvZ2luU2hvd24nLCBmYWxzZSk7XG5cdFx0XHR9fSxcblx0XHRcdCdmb3JtJzoge3N1Ym1pdChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRsZXQgdXJsID0gdGhpcy53ZWJkYXZCYXNlLnZhbHVlICsgKHRoaXMucGF0aC52YWx1ZSB8fCAnL3RvZG8udHh0Jyk7XG5cdFx0XHRcdGlmICghdXJsLm1hdGNoKC9cXHcrXFwvW1xcdytdXFwudHh0JC8pKSB7XG5cdFx0XHRcdFx0dXJsICs9ICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nID8gJycgOiAnLycpICsgJ3RvZG8udHh0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY3JlZGVudGlhbHMgPSB7XG5cdFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLnZhbHVlLFxuXHRcdFx0XHRcdHVybCxcblx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VybmFtZS52YWx1ZSxcblx0XHRcdFx0XHRwYXNzd29yZDogdGhpcy5wYXNzd29yZC52YWx1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY3JlZGVudGlhbHMnLCBjcmVkZW50aWFscyk7XG5cdFx0XHRcdGxldCB1c2VyU3RvcmUgPSBuZXcgVXNlclN0b3JlKCk7XG5cdFx0XHRcdHVzZXJTdG9yZS5zZXRVc2VyKGNyZWRlbnRpYWxzKTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxufSJdLCJuYW1lcyI6WyJnbG9iYWwiLCJzdXBlciIsImxldCIsInRoaXMiLCJTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBT0EsY0FBTSxDQUFDQSxjQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJ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
