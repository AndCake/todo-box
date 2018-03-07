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

var styles = (function (code) { return code; })("todo-header{display:block;background:#91a437;color:#e2f0a0;border-bottom:1px solid #495800;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5)}todo-header header{max-width:900px;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}todo-header .login-trigger{border:1px solid #1e053e;cursor:pointer;background:#1e053e;color:#de94ab;border-radius:3px;text-shadow:1px 1px rgba(0,0,0,.25)}todo-header .login-trigger:hover{background:#8b75a9;color:#1e053e;text-shadow:1px 1px hsla(0,0%,100%,.25)}todo-header .login-form{position:absolute;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);background:#fff;color:#333;max-width:320px;font-family:sans-serif;font-size:90%;top:3em;right:0}todo-header legend{font-size:120%}todo-header fieldset{border:0}todo-header label{width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:.25em 0;font-size:90%}todo-header .login-form__actions,todo-header label{display:-webkit-box;display:-ms-flexbox;display:flex}todo-header .login-form__actions{-ms-flex-pack:distribute;justify-content:space-around;margin-top:1em}todo-header button[type=submit]{border:1px solid #6c7e15;cursor:pointer;background:#495800;color:#e2f0a0;border-radius:3px;text-shadow:1px 1px hsla(0,0%,100%,.75)}todo-header button[type=submit]:hover{color:#6c7e15;background:#e2f0a0}todo-header .button-cancel{border:1px solid #b2b2b2;background:#e5e5e5;color:#4c4c4c;text-shadow:1px 1px hsla(0,0%,100%,.75)}", {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL3NtYXJ0L3RvZG8taGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdG9kby1oZWFkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0hlYWRlciB7XG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImxvZ29cIj5Ub2RvIEJveDwvaDM+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJsb2dpbi10cmlnZ2VyIGpzLXRyaWdnZXItZm9ybVwiPntkYXRhLnByb3BzLmNyZWRlbnRpYWxzLnVzZXJuYW1lIHx8ICdMb2dpbid9e2RhdGEucHJvcHMuY3JlZGVudGlhbHMubmFtZSA/ICdAJyArIGRhdGEucHJvcHMuY3JlZGVudGlhbHMubmFtZSA6ICcnfTwvYnV0dG9uPlxuXHRcdFx0XHR7ZGF0YS5wcm9wcy5sb2dpblNob3duID8gKFxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzPVwibG9naW4tZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kPkxvZ2luPC9sZWdlbmQ+XG5cdFx0XHRcdFx0XHRcdDxwPlBsZWFzZSBsb2dpbiB0byB5b3VyIFdlYkRBViBwcm92aWRlci4gWW91ciBjcmVkZW50aWFscyB3aWxsIG9ubHkgYmUgdXNlZCB0byB0cmFuc2ZlciB5b3VyIHRvZG9zIGFuZCB3aWxsIG9ubHkgYmUgc2F2ZWQgaW4geW91ciBicm93c2VyLjwvcD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFNlcnZpY2UgTmFtZTpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPVwiQm94LmNvbVwiLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFdlYkRBViBCYXNlIFVSTDpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInVybFwiIG5hbWU9XCJ3ZWJkYXZCYXNlXCIgdmFsdWU9XCJodHRwczovL2Rhdi5ib3guY29tL2RhdlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRQYXRoIHRvIFRvZG8udHh0OlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXRoXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIi90b2RvLnR4dFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRVc2VyIE5hbWU6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ0ZXN0QGV4YW1wbGUub3JnXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmQ6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibG9naW4tZm9ybV9fYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwianMtbG9naW5cIj5Mb2dpbjwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbCBqcy1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KSA6ICcnfVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRjcmVkZW50aWFsczoge30sXG5cdFx0XHRsb2dpblNob3duOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCdidXR0b24uanMtdHJpZ2dlci1mb3JtJzoge2NsaWNrKCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbG9naW5TaG93bicsICF0aGlzLmdldEhvc3QoKS5wcm9wcy5sb2dpblNob3duKTtcblx0XHRcdH19LFxuXHRcdFx0J2J1dHRvbi5qcy1jYW5jZWwnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdsb2dpblNob3duJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQnZm9ybSc6IHtzdWJtaXQoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGV0IHVybCA9IHRoaXMud2ViZGF2QmFzZS52YWx1ZSArICh0aGlzLnBhdGgudmFsdWUgfHwgJy90b2RvLnR4dCcpO1xuXHRcdFx0XHRpZiAoIXVybC5tYXRjaCgvXFx3K1xcL1tcXHcrXVxcLnR4dCQvKSkge1xuXHRcdFx0XHRcdHVybCArPSAodXJsLnN1YnN0cigtMSkgPT09ICcvJyA/ICcnIDogJy8nKSArICd0b2RvLnR4dCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNyZWRlbnRpYWxzID0ge1xuXHRcdFx0XHRcdG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcblx0XHRcdFx0XHR1cmwsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRoaXMudXNlcm5hbWUudmFsdWUsXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQudmFsdWVcblx0XHRcdFx0fTtcblx0XHRcdFx0bGV0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdsb2dpbicsIHtcblx0XHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRcdGNhbmNlbGFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdGRldGFpbDogY3JlZGVudGlhbHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuXHRcdFx0fX1cblx0XHR9O1xuXHR9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBcUIsVUFBVSxHQUFDLG1CQXlDcEIsR0FBRztDQUNkLElBQUssS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDeEIsS0FBTSxDQUFDLEtBQUssR0FBRztFQUNkLFdBQVksRUFBRSxFQUFFO0VBQ2hCLFVBQVcsRUFBRSxLQUFLO0VBQ2pCLENBQUM7Q0FDRjs7bURBQUE7O0FBRUYscUJBaERDLE1BQU0sb0JBQUMsSUFBSSxFQUFFO0NBQ2I7RUFDQyxpQkFBRSxjQUFNO0lBQ04saUJBQUMsUUFBRyxLQUFLLEVBQUMsTUFBTSxFQUFBLEVBQUMsVUFBUSxDQUFLO0lBQzlCLGlCQUFDLFlBQU8sS0FBSyxFQUFDLCtCQUErQixFQUFBLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLE9BQU8sRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQVU7SUFDekssSUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVO0lBQ3RCLGlCQUFFLFVBQUssS0FBSyxFQUFDLFlBQVks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
