(function (module) {
	return module.exports = function() {
		var ENV = "production";
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

var styles = (function (code) { return code; })("todo-header{display:block;background:#91a437;color:#e2f0a0;border-bottom:1px solid #495800;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5)}todo-header header{max-width:900px;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}todo-header .logo{text-shadow:1px 1px 1px #495800;font-family:sans-serif}@media screen and (max-width:686px){todo-header .logo{display:inline-block;width:auto;height:30px;background:url(/appicon.png) 0 no-repeat;background-size:contain;margin-left:3em;position:relative;padding-left:2em;line-height:30px}todo-header .logo:before{border-top:3px solid #000;height:13px;border-bottom:3px solid #000}todo-header .logo:after,todo-header .logo:before{content:\"\";display:inline-block;width:24px;margin-left:-2em;margin-top:5px;position:absolute;left:0}todo-header .logo:after{background:#000;height:3px;top:8px}}todo-header .login-trigger{border:1px solid #1e053e;cursor:pointer;background:#1e053e;color:#de94ab;border-radius:3px;text-shadow:1px 1px rgba(0,0,0,.25)}@media screen and (max-width:686px){todo-header .login-trigger{margin-right:1em}}todo-header .login-trigger:hover{background:#8b75a9;color:#1e053e;text-shadow:1px 1px hsla(0,0%,100%,.25)}todo-header .login-form{position:absolute;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);background:#fff;color:#333;max-width:320px;font-family:sans-serif;font-size:90%;top:3em;right:0}todo-header legend{font-size:120%}todo-header fieldset{border:0}todo-header label{width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:.25em 0;font-size:90%}todo-header .login-form__actions,todo-header label{display:-webkit-box;display:-ms-flexbox;display:flex}todo-header .login-form__actions{-ms-flex-pack:distribute;justify-content:space-around;margin-top:1em}todo-header button[type=submit]{border:1px solid #6c7e15;cursor:pointer;background:#495800;color:#e2f0a0;border-radius:3px;text-shadow:1px 1px hsla(0,0%,100%,.75)}todo-header button[type=submit]:hover{color:#6c7e15;background:#e2f0a0}todo-header .button-cancel{border:1px solid #b2b2b2;background:#e5e5e5;color:#4c4c4c;text-shadow:1px 1px hsla(0,0%,100%,.75)}", {});

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
				this.createNode( 'button', { class: "login-trigger js-trigger-form" }, data.props.credentials.name ? data.props.credentials.name : 'Login'),
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
		'.logo': {click: function click() {
			var event = new Event('logoaction', {
				bubbles: true,
				cancelable: false
			});
			this.getHost().dispatchEvent(event);
		}},
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
			var customEvent = new CustomEvent('login', {
				bubbles: true,
				cancelable: false,
				detail: credentials
			});
			this.getHost().dispatchEvent(customEvent);
		}}
	};
};

Object.defineProperties( TodoHeader.prototype, prototypeAccessors );

return TodoHeader;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvdG9kby1oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLWhlYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSGVhZGVyIHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgzIGNsYXNzPVwibG9nb1wiPlRvZG8gQm94PC9oMz5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImxvZ2luLXRyaWdnZXIganMtdHJpZ2dlci1mb3JtXCI+e2RhdGEucHJvcHMuY3JlZGVudGlhbHMubmFtZSA/IGRhdGEucHJvcHMuY3JlZGVudGlhbHMubmFtZSA6ICdMb2dpbid9PC9idXR0b24+XG5cdFx0XHRcdHtkYXRhLnByb3BzLmxvZ2luU2hvd24gPyAoXG5cdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQ+TG9naW48L2xlZ2VuZD5cblx0XHRcdFx0XHRcdFx0PHA+UGxlYXNlIGxvZ2luIHRvIHlvdXIgV2ViREFWIHByb3ZpZGVyLiBZb3VyIGNyZWRlbnRpYWxzIHdpbGwgb25seSBiZSB1c2VkIHRvIHRyYW5zZmVyIHlvdXIgdG9kb3MgYW5kIHdpbGwgb25seSBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0U2VydmljZSBOYW1lOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJCb3guY29tXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0V2ViREFWIEJhc2UgVVJMOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cIndlYmRhdkJhc2VcIiB2YWx1ZT1cImh0dHBzOi8vZGF2LmJveC5jb20vZGF2XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFBhdGggdG8gVG9kby50eHQ6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhdGhcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiL3RvZG8udHh0XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFVzZXIgTmFtZTpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInRlc3RAZXhhbXBsZS5vcmdcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZDpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtX19hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJqcy1sb2dpblwiPkxvZ2luPC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24tY2FuY2VsIGpzLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpIDogJyd9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdGNyZWRlbnRpYWxzOiB7fSxcblx0XHRcdGxvZ2luU2hvd246IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Jy5sb2dvJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2xvZ29hY3Rpb24nLCB7XG5cdFx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0XHR9fSxcblx0XHRcdCdidXR0b24uanMtdHJpZ2dlci1mb3JtJzoge2NsaWNrKCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbG9naW5TaG93bicsICF0aGlzLmdldEhvc3QoKS5wcm9wcy5sb2dpblNob3duKTtcblx0XHRcdH19LFxuXHRcdFx0J2J1dHRvbi5qcy1jYW5jZWwnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdsb2dpblNob3duJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQnZm9ybSc6IHtzdWJtaXQoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGV0IHVybCA9IHRoaXMud2ViZGF2QmFzZS52YWx1ZSArICh0aGlzLnBhdGgudmFsdWUgfHwgJy90b2RvLnR4dCcpO1xuXHRcdFx0XHRpZiAoIXVybC5tYXRjaCgvXFx3K1xcL1tcXHcrXVxcLnR4dCQvKSkge1xuXHRcdFx0XHRcdHVybCArPSAodXJsLnN1YnN0cigtMSkgPT09ICcvJyA/ICcnIDogJy8nKSArICd0b2RvLnR4dCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNyZWRlbnRpYWxzID0ge1xuXHRcdFx0XHRcdG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcblx0XHRcdFx0XHR1cmwsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRoaXMudXNlcm5hbWUudmFsdWUsXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQudmFsdWVcblx0XHRcdFx0fTtcblx0XHRcdFx0bGV0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdsb2dpbicsIHtcblx0XHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRcdGNhbmNlbGFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdGRldGFpbDogY3JlZGVudGlhbHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuXHRcdFx0fX1cblx0XHR9O1xuXHR9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBcUIsVUFBVSxHQUFDLG1CQXlDcEIsR0FBRztDQUNkLElBQUssS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDeEIsS0FBTSxDQUFDLEtBQUssR0FBRztFQUNkLFdBQVksRUFBRSxFQUFFO0VBQ2hCLFVBQVcsRUFBRSxLQUFLO0VBQ2pCLENBQUM7Q0FDRjs7bURBQUE7O0FBRUYscUJBaERDLE1BQU0sb0JBQUMsSUFBSSxFQUFFO0NBQ2I7RUFDQyxpQkFBRSxjQUFNO0lBQ04saUJBQUMsUUFBRyxLQUFLLEVBQUMsTUFBTSxFQUFBLEVBQUMsVUFBUSxDQUFLO0lBQzlCLGlCQUFDLFlBQU8sS0FBSyxFQUFDLCtCQUErQixFQUFBLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMs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
