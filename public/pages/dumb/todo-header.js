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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvdG9kby1oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLWhlYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSGVhZGVyIHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgzIGNsYXNzPVwibG9nb1wiPlRvZG8gQm94PC9oMz5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImxvZ2luLXRyaWdnZXIganMtdHJpZ2dlci1mb3JtXCI+e2RhdGEucHJvcHMuY3JlZGVudGlhbHMudXNlcm5hbWUgfHwgJ0xvZ2luJ317ZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lID8gJ0AnICsgZGF0YS5wcm9wcy5jcmVkZW50aWFscy5uYW1lIDogJyd9PC9idXR0b24+XG5cdFx0XHRcdHtkYXRhLnByb3BzLmxvZ2luU2hvd24gPyAoXG5cdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQ+TG9naW48L2xlZ2VuZD5cblx0XHRcdFx0XHRcdFx0PHA+UGxlYXNlIGxvZ2luIHRvIHlvdXIgV2ViREFWIHByb3ZpZGVyLiBZb3VyIGNyZWRlbnRpYWxzIHdpbGwgb25seSBiZSB1c2VkIHRvIHRyYW5zZmVyIHlvdXIgdG9kb3MgYW5kIHdpbGwgb25seSBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0U2VydmljZSBOYW1lOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJCb3guY29tXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0V2ViREFWIEJhc2UgVVJMOlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidXJsXCIgbmFtZT1cIndlYmRhdkJhc2VcIiB2YWx1ZT1cImh0dHBzOi8vZGF2LmJveC5jb20vZGF2XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFBhdGggdG8gVG9kby50eHQ6XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhdGhcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiL3RvZG8udHh0XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFVzZXIgTmFtZTpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInRlc3RAZXhhbXBsZS5vcmdcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRQYXNzd29yZDpcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtX19hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJqcy1sb2dpblwiPkxvZ2luPC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24tY2FuY2VsIGpzLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpIDogJyd9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdGNyZWRlbnRpYWxzOiB7fSxcblx0XHRcdGxvZ2luU2hvd246IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J2J1dHRvbi5qcy10cmlnZ2VyLWZvcm0nOiB7Y2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdsb2dpblNob3duJywgIXRoaXMuZ2V0SG9zdCgpLnByb3BzLmxvZ2luU2hvd24pO1xuXHRcdFx0fX0sXG5cdFx0XHQnYnV0dG9uLmpzLWNhbmNlbCc6IHtjbGljaygpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2xvZ2luU2hvd24nLCBmYWxzZSk7XG5cdFx0XHR9fSxcblx0XHRcdCdmb3JtJzoge3N1Ym1pdChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRsZXQgdXJsID0gdGhpcy53ZWJkYXZCYXNlLnZhbHVlICsgKHRoaXMucGF0aC52YWx1ZSB8fCAnL3RvZG8udHh0Jyk7XG5cdFx0XHRcdGlmICghdXJsLm1hdGNoKC9cXHcrXFwvW1xcdytdXFwudHh0JC8pKSB7XG5cdFx0XHRcdFx0dXJsICs9ICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nID8gJycgOiAnLycpICsgJ3RvZG8udHh0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY3JlZGVudGlhbHMgPSB7XG5cdFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLnZhbHVlLFxuXHRcdFx0XHRcdHVybCxcblx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VybmFtZS52YWx1ZSxcblx0XHRcdFx0XHRwYXNzd29yZDogdGhpcy5wYXNzd29yZC52YWx1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRsZXQgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xvZ2luJywge1xuXHRcdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGV0YWlsOiBjcmVkZW50aWFsc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFxQixVQUFVLEdBQUMsbUJBeUNwQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUN4QixLQUFNLENBQUMsS0FBSyxHQUFHO0VBQ2QsV0FBWSxFQUFFLEVBQUU7RUFDaEIsVUFBVyxFQUFFLEtBQUs7RUFDakIsQ0FBQztDQUNGOzttREFBQTs7QUFFRixxQkFoREMsTUFBTSxvQkFBQyxJQUFJLEVBQUU7Q0FDYjtFQUNDLGlCQUFFLGNBQU07SUFDTixpQkFBQyxRQUFHLEtBQUssRUFBQyxNQUFNLEVBQUEsRUFBQyxVQUFRLENBQUs7SUFDOUIsaUJBQUMsWUFBTyxLQUFLLEVBQUMsK0JBQStCLEVBQUEsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksT0FBTyxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBVTtJQUN6SyxJQUFLLENBQUMsS0FBSyxDQUFDLFVBQVU7SUFDdEIsaUJBQUUsVUFBSyxLQUFLLEVBQUMsWUFBWSxFQUFBO01BQ3ZCLGlCQUFDLGdCQUFRO09BQ1IsaUJBQUMsY0FBTSxFQUFDLE9BQUssRUFBUztPQUN0QixpQkFBQyxTQUFDLEVBQUMseUlBQXVJLEVBQUk7T0FDOUksaUJBQUMsYUFBSyxFQUFDLGdCQUVOLEVBQUEsaUJBQUMsV0FBTSxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQSxDQUFFO1FBQ3pDO09BQ1IsaUJBQUMsYUFBSyxFQUFDLG1CQUVOLEVBQUEsaUJBQUMsV0FBTSxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLHlCQUF5QixFQUFBLENBQUc7UUFDL0Q7T0FDUixpQkFBQyxhQUFLLEVBQUMsb0JBRU4sRUFBQSxpQkFBQyxXQUFNLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUEsQ0FBRztRQUMzRDtPQUNSLGlCQUFDLGFBQUssRUFBQyxhQUVOLEVBQUEsaUJBQUMsV0FBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUEsQ0FBRTtRQUN0RTtPQUNSLGlCQUFDLGFBQUssRUFBQyxZQUVOLEVBQUEsaUJBQUMsV0FBTSxJQUFJLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQSxDQUFFO1FBQzFDO09BQ1IsaUJBQUMsU0FBSSxLQUFLLEVBQUMscUJBQXFCLEVBQUE7UUFDL0IsaUJBQUMsWUFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUEsRUFBQyxPQUFLLENBQVMsRUFBQSxpQkFBQyxZQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLHlCQUF5QixFQUFBLEVBQUMsUUFBTSxDQUFTO1FBQ3JIO09BQ0k7TUFDTDtPQUNKLEVBQUU7SUFDRTtHQUNSO0NBQ0YsQ0FBQTs7bUJBVUQsTUFBVSxtQkFBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQTtBQUNoQyxtQkFBQyxNQUFVLG1CQUFHO0NBQ2IsT0FBUTtFQUNQLHdCQUF5QixFQUFFLENBQUMsS0FBSyxnQkFBQSxHQUFHO0dBQ25DLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztHQUN4RSxDQUFDO0VBQ0gsa0JBQW1CLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLEdBQUc7R0FDN0IsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQztFQUNILE1BQU8sRUFBRSxDQUFDLE1BQU0saUJBQUEsQ0FBQyxLQUFLLEVBQUU7R0FDdkIsS0FBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ3hCLElBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDO0dBQ3BFLElBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7SUFDcEMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQztJQUN4RDtHQUNGLElBQUssV0FBVyxHQUFHO0lBQ2xCLElBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDdEIsS0FBQyxHQUFHO0lBQ0osUUFBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztJQUM5QixRQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO0lBQzdCLENBQUM7R0FDSCxJQUFLLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7SUFDM0MsT0FBUSxFQUFFLElBQUk7SUFDZCxVQUFXLEVBQUUsS0FBSztJQUNsQixNQUFPLEVBQUUsV0FBVztJQUNuQixDQUFDLENBQUM7R0FDSixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzFDLENBQUM7RUFDRixDQUFDO0NBQ0YsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OyJ9
