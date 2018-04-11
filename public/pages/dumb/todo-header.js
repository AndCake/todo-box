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

var styles = (function (code) { return code; })("@-webkit-keyframes a{0%{right:100%}50%{right:50%}to{right:0}}@keyframes a{0%{right:100%}50%{right:50%}to{right:0}}todo-header{display:block;background:#91a437;color:#e2f0a0;border-bottom:1px solid #495800;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5)}todo-header header{max-width:900px;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}todo-header header:after{content:\"\";position:absolute;left:0;right:0;height:3px;border:1px solid transparent;-webkit-box-shadow:0 0 3px #191919;box-shadow:0 0 3px #191919;background:-webkit-gradient(linear,left top,right top,from(#8b75a9),color-stop(50%,#de94ab),to(#8b75a9));background:linear-gradient(90deg,#8b75a9 0,#de94ab 50%,#8b75a9);display:none;-webkit-transition:border-color .5s linear;transition:border-color .5s linear;bottom:0}todo-header header.is-active:after{border-color:#983351;-webkit-animation:a 2.55s infinite alternate;animation:a 2.55s infinite alternate;display:block}todo-header .logo{text-shadow:1px 1px 1px #495800;font-family:sans-serif}@media screen and (max-width:686px){todo-header .logo{display:inline-block;width:auto;height:30px;background:url(/appicon.png) 0 no-repeat;background-size:contain;margin-left:3em;position:relative;padding-left:2em;line-height:30px}todo-header .logo:before{border-top:3px solid #000;height:13px;border-bottom:3px solid #000}todo-header .logo:after,todo-header .logo:before{content:\"\";display:inline-block;width:24px;margin-left:-2em;margin-top:5px;position:absolute;left:0}todo-header .logo:after{background:#000;height:3px;top:8px}}todo-header .login-trigger{border:1px solid #1e053e;cursor:pointer;background:#1e053e;color:#de94ab;border-radius:3px;text-shadow:1px 1px rgba(0,0,0,.25)}@media screen and (max-width:686px){todo-header .login-trigger{margin-right:1em}}todo-header .login-trigger:hover{background:#8b75a9;color:#1e053e;text-shadow:1px 1px hsla(0,0%,100%,.25)}todo-header .login-form{position:absolute;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);background:#fff;color:#333;max-width:320px;font-family:sans-serif;font-size:90%;top:3em;right:0;z-index:1}todo-header legend{font-size:120%;padding-top:1em}todo-header fieldset{border:0}todo-header label{width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:.25em 0;font-size:90%}todo-header .login-form__actions,todo-header label{display:-webkit-box;display:-ms-flexbox;display:flex}todo-header .login-form__actions{-ms-flex-pack:distribute;justify-content:space-around;margin-top:1em}todo-header button[type=submit]{border:1px solid #6c7e15;cursor:pointer;background:#495800;color:#e2f0a0;border-radius:3px;text-shadow:1px 1px hsla(0,0%,100%,.75)}todo-header button[type=submit]:hover{color:#6c7e15;background:#e2f0a0}todo-header .button-cancel{border:1px solid #b2b2b2;background:#e5e5e5;color:#4c4c4c;text-shadow:1px 1px hsla(0,0%,100%,.75)}", {});

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
		this.createNode( 'header', { class: 'is-' + data.props.network },
				this.createNode( 'h3', { class: "logo" }, "Todo Box"),
				this.createNode( 'button', { class: "login-trigger js-trigger-form" }, data.props.credentials.name ? data.props.credentials.name : 'Connect'),
				data.props.loginShown ? (
				this.createNode( 'form', { class: "login-form" },
						this.createNode( 'fieldset', null,
							this.createNode( 'legend', null, "Connect to WebDAV Server" ),
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
								this.createNode( 'button', { type: "submit", class: "js-login" }, "Connect"), this.createNode( 'button', { type: "button", class: "button-cancel js-cancel" }, "Cancel")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvdG9kby1oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLWhlYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSGVhZGVyIHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBjbGFzcz17J2lzLScgKyBkYXRhLnByb3BzLm5ldHdvcmt9PlxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJsb2dvXCI+VG9kbyBCb3g8L2gzPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibG9naW4tdHJpZ2dlciBqcy10cmlnZ2VyLWZvcm1cIj57ZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lID8gZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lIDogJ0Nvbm5lY3QnfTwvYnV0dG9uPlxuXHRcdFx0XHR7ZGF0YS5wcm9wcy5sb2dpblNob3duID8gKFxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzPVwibG9naW4tZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kPkNvbm5lY3QgdG8gV2ViREFWIFNlcnZlcjwvbGVnZW5kPlxuXHRcdFx0XHRcdFx0XHQ8cD5QbGVhc2UgbG9naW4gdG8geW91ciBXZWJEQVYgcHJvdmlkZXIuIFlvdXIgY3JlZGVudGlhbHMgd2lsbCBvbmx5IGJlIHVzZWQgdG8gdHJhbnNmZXIgeW91ciB0b2RvcyBhbmQgd2lsbCBvbmx5IGJlIHNhdmVkIGluIHlvdXIgYnJvd3Nlci48L3A+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRTZXJ2aWNlIE5hbWU6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT1cIkJveC5jb21cIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRXZWJEQVYgQmFzZSBVUkw6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ1cmxcIiBuYW1lPVwid2ViZGF2QmFzZVwiIHZhbHVlPVwiaHR0cHM6Ly9kYXYuYm94LmNvbS9kYXZcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0UGF0aCB0byBUb2RvLnR4dDpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGF0aFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIvdG9kby50eHRcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0VXNlciBOYW1lOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwidGVzdEBleGFtcGxlLm9yZ1wiLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxvZ2luLWZvcm1fX2FjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImpzLWxvZ2luXCI+Q29ubmVjdDwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbCBqcy1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KSA6ICcnfVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRjcmVkZW50aWFsczoge30sXG5cdFx0XHRsb2dpblNob3duOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCcubG9nbyc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCdsb2dvYWN0aW9uJywge1xuXHRcdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2Vcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0fX0sXG5cdFx0XHQnYnV0dG9uLmpzLXRyaWdnZXItZm9ybSc6IHtjbGljaygpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2xvZ2luU2hvd24nLCAhdGhpcy5nZXRIb3N0KCkucHJvcHMubG9naW5TaG93bik7XG5cdFx0XHR9fSxcblx0XHRcdCdidXR0b24uanMtY2FuY2VsJzoge2NsaWNrKCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbG9naW5TaG93bicsIGZhbHNlKTtcblx0XHRcdH19LFxuXHRcdFx0J2Zvcm0nOiB7c3VibWl0KGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGxldCB1cmwgPSB0aGlzLndlYmRhdkJhc2UudmFsdWUgKyAodGhpcy5wYXRoLnZhbHVlIHx8ICcvdG9kby50eHQnKTtcblx0XHRcdFx0aWYgKCF1cmwubWF0Y2goL1xcdytcXC9bXFx3K11cXC50eHQkLykpIHtcblx0XHRcdFx0XHR1cmwgKz0gKHVybC5zdWJzdHIoLTEpID09PSAnLycgPyAnJyA6ICcvJykgKyAndG9kby50eHQnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjcmVkZW50aWFscyA9IHtcblx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG5cdFx0XHRcdFx0dXJsLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLnZhbHVlLFxuXHRcdFx0XHRcdHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLnZhbHVlXG5cdFx0XHRcdH07XG5cdFx0XHRcdGxldCBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnbG9naW4nLCB7XG5cdFx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRkZXRhaWw6IGNyZWRlbnRpYWxzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQXFCLFVBQVUsR0FBQyxtQkF5Q3BCLEdBQUc7Q0FDZCxJQUFLLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0NBQ3hCLEtBQU0sQ0FBQyxLQUFLLEdBQUc7RUFDZCxXQUFZLEVBQUUsRUFBRTtFQUNoQixVQUFXLEVBQUUsS0FBSztFQUNqQixDQUFDO0NBQ0Y7O21EQUFBOztBQUVGLHFCQWhEQyxNQUFNLG9CQUFDLElBQUksRUFBRTtDQUNiO0VBQ0MsaUJBQUUsWUFBTyxLQUFLLEVBQUMsS0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDO0lBQ3pDLGlCQUFDLFFBQUcsS0FBSyxFQUFDLE1BQU0sRUFBQSxFQUFDLFVBQVEs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
