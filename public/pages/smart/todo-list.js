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

var styles = (function (code) { return code; })("todo-list .todo-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-list ul{list-style-type:none;margin:0;padding:8px 0;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}todo-list .todo-list__filter{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}todo-list li{margin:0;padding:10px 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:opacity .2s linear,max-height .2s linear,padding-top .2s linear,padding-bottom .2s linear;transition:opacity .2s linear,max-height .2s linear,padding-top .2s linear,padding-bottom .2s linear;max-height:7em}todo-list li.todo-editing{opacity:.5}todo-list li.leaving{opacity:0;max-height:0;padding-top:0;padding-bottom:0}todo-list li:hover{background:#f2f2f2}todo-list li button{margin-left:auto;background:#fff;-webkit-box-shadow:0 0 0 #fff;box-shadow:0 0 0 #fff;color:#4c4c4c;border:0;-ms-flex-item-align:center;align-self:center}todo-list li button:hover{background:#e5e5e5}todo-list .todo{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:48px;font-size:14px}todo-list .todo__checkbox{display:inline-block;border:1px solid #191919;background:#fff;border-radius:3px;width:17px;height:17px;margin-right:20px;margin-top:3px;-webkit-transition:all .2s linear;transition:all .2s linear}todo-list .todo__checkbox.checked{border-top-color:transparent;border-left-color:transparent;background:transparent;border-radius:0;width:12px;height:22px;-webkit-transform:rotate(40deg);transform:rotate(40deg)}todo-list .todo_text{display:block;font-size:16px;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}todo-list .todo[data-priority^=\"(\"]{color:#983351;font-weight:700}todo-list .todo[data-priority^=\"(A)\"]{font-size:120%}todo-list .todo[data-priority^=\"(B)\"]{font-size:110%}todo-list .todo[data-priority^=\"(C)\"]{font-size:100%}todo-list .todo[data-priority^=\"(D)\"]{font-size:90%}todo-list .todo[data-priority^=\"(E)\"]{font-size:80%}todo-list .todo_context{color:#369;font-weight:700;margin-right:.5em}todo-list .todo_project{color:#936;font-style:italic;margin-right:.5em}todo-list .todo_tag{border:1px solid #ccc;color:#4c4c4c;background:#e5e5e5;border-radius:3px;margin-right:.5em;padding:0 .25em}todo-list form{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:.5em;padding-bottom:.5em;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;position:relative;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}todo-list form label{display:block;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}todo-list form #suggestions,todo-list form calendar{position:absolute;left:1em;bottom:2em}todo-list form button[type=submit]{display:none}todo-list form input[type=text]{width:calc(100% - 50px);margin:10px 0;border:0;padding:10px 16px;background:#fff;-webkit-box-shadow:2px 0 6px rgba(0,0,0,.5);box-shadow:2px 0 6px rgba(0,0,0,.5);margin-bottom:0;border-bottom:3px solid #ccc;-webkit-transition:border-bottom-color .2s linear;transition:border-bottom-color .2s linear}todo-list form input[type=text]:focus{border-bottom:3px solid #694d8e}@media screen and (max-width:686px){todo-list{font-size:80%}todo-list ul{padding-bottom:4em}todo-list form{border-top:0;margin-bottom:0;padding-bottom:0;position:fixed;bottom:0;left:0;right:0}todo-list form input[type=text]{width:calc(100% - 32px)}}", {});

/**
 * animates a given element based on CSS transitions.
 *
 * @param {DOMElement|string} el the DOM node to be animated, if it's a string, you need to bind this function to a target element's parent and the el parameter will be interpreted as CSS selector
 * @param {string} action can either bei 'add', 'remove' or 'toggle'
 * @param {string} trigger the css class to be added to the DOM node to trigger the animation
 * @returns {Promise} resolves if the animation finishes, else will reject.
 */
function animate(el, action, triggerClass) {
	var this$1 = this;

	return new Promise(function (resolve) {
		if (typeof el === 'string') {
			el = this$1.querySelector(el);
		}
		el.classList[action](triggerClass);
		el.addEventListener('transitionend', el._transitionendlistener = function () {
			el.removeEventListener('transitionend', el._transitionendlistener);
			resolve();
		});
	});
}

var TodoList = function TodoList() {
	var _this = this || {};
	_this.props = {
		store: {},
		editing: null,
		tasks: [],
		projects: [],
		contexts: [],
		suggestions: [],
		filters: false
	};
};

var prototypeAccessors = { styles: {},events: {} };

TodoList.prototype.render = function render (data) {
		var this$1 = this;

	return (
		this.createNode( 'div', { class: "todo-list" },
				this.createNode( 'div', { class: "todo-list__filter" },
					Array.isArray(data.props.filters) ? data.props.filters.map((function (filter) { return (
					this.createNode( 'button', { type: "button", value: filter }, filter === true ? 'done' : filter === false ? 'open' : filter)
				); }).bind(this)) : ''
				),
				this.createNode( 'ul', null,
					data.props.tasks.map((function (task) { return (
					this.createNode( 'li', { 'data-id': task.id, class: data.props.editing && data.props.editing.id === task.id ? 'todo-editing' : '' },
							this.createNode( 'div', { class: "todo__checkbox" }),
							this.createNode( 'div', { class: "todo", 'data-priority': task.priority },
								this.createNode( 'span', { class: "todo_text" }, task.text),
								this.createNode( 'span', { class: "contexts" },
									task.contexts && task.contexts.map((function (context) { return (
									this.createNode( 'span', { class: "todo_context" }, data.props.filters && data.props.filters.indexOf(context) >= 0 ? '' : context)
								); }).bind(this$1)) || ''
								),
								this.createNode( 'span', { class: "projects" },
									task.projects && task.projects.map((function (project) { return (
									this.createNode( 'span', { class: "todo_project" }, data.props.filters && data.props.filters.indexOf(project) >= 0 ? '' : project)
								); }).bind(this$1)) || ''
								),
								this.createNode( 'span', { class: "tags" },
									task.tags && task.tags.map((function (tag) { return (
									this.createNode( 'span', { class: "todo_tag js-tag" }, tag)
								); }).bind(this$1)) || ''
								),
								this.createNode( 'span', { class: "links" },
									task.links && task.links.map((function (link) { return (
									this.createNode( 'a', { href: link.url, class: "todo_link" }, link.name)
								); }).bind(this$1))
								)
							),
							this.createNode( 'button', { class: "js-delete" }, "x")
						)
				); }).bind(this))
				),
				this.createNode( 'form', null,
					this.createNode( 'label', null,
						this.createNode( 'input', { type: "text", name: "task", value: "", placeholder: "Enter new task here...", autocomplete: "off" }),
						data.props.calendar ? (
						this.createNode( 'calendar', { 'data-date': data.props.calendar })
					) : data.props.suggestions.length > 0 ? (
						this.createNode( 'select', { size: Math.min(data.props.suggestions.length, 5), id: "suggestions" },
								data.props.suggestions.map((function (suggestion) { return (
								this.createNode( 'option', { value: suggestion }, suggestion)
							); }).bind(this))
							)
					) : ''
					),
					this.createNode( 'button', { type: "submit", class: "js-add-task" }, "Add")
				)
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		'.todo_context, .todo_project, .todo_tag': {click: function click() {
			var taskStore = this.getHost().props.store;
			var filter = this.innerText;
			if (this.classList.contains('js-tag')) {
				filter = filter.split(':')[0];
			}
			taskStore.filter(filter);
		}},
		'.todo-list__filter button': {click: function click() {
			var taskStore = this.getHost().props.store;
			if (['false', 'true'].indexOf(this.value) >= 0) {
				taskStore.filter(true);
				taskStore.filter(false);
			} else {
				taskStore.filter(this.value);
			}
		}},
		'form input': {keyup: function keyup(event) {
			if (event.keyCode === 38) {
				this.nextElementSibling.selectedIndex -= 1;
			} else if (event.keyCode === 40) {
				this.nextElementSibling.selectedIndex += 1;
			} else if (event.keyCode === 27) {
				this.getHost().setProps('suggestions', []);
			} else {
				var char = this.value.match(/([+@]\w*)$/g) || '';
				char = char[0] || '';
				if (char[0] === '+') {
					this.getHost().setProps('suggestions', this.getHost().props.projects.filter(function (project) { return project.indexOf(char) >= 0; }));
				} else if (char[0] === '@') {
					this.getHost().setProps('suggestions', this.getHost().props.contexts.filter(function (context) { return context.indexOf(char) >= 0; }));
				} else if (this.value.match(/due:[\dT:-]*$/g)) {
					this.getHost().setProps('calendar', this.value.match(/due:([\d:-]*)/)[1] || '1');
				} else if (this.getHost().props.calendar !== false) {
					this.getHost().setProps('calendar', false);
				}
			}
		}, keydown: function keydown(event) {
			if ((event.keyCode === 13 || event.keyCode === 32) && this.nextElementSibling && this.nextElementSibling.selectedIndex >= 0) {
				event.preventDefault();
				this.value = this.value.replace(/([+@]\w*)$/, this.nextElementSibling && this.nextElementSibling.value || '') + ' ';
				this.getHost().setProps('suggestions', []);
			}
		}, blur: function blur() {
				var this$1 = this;

			setTimeout(function () {
				this$1.getHost().setProps('suggestions', []);
			}, 500);
		}},
		'li .todo_text': {click: function click() {
			var taskId = this.parentNode.parentNode.dataset.id;
			var task = this.getHost().props.tasks.find(function (task) { return task.id === taskId; });
			this.getHost().setProps('editing', task);
			this.getHost().querySelector('form input').value = task.toString();
			this.getHost().querySelector('form input').focus();
		}},
		'li .todo__checkbox': {click: function click() {
				var this$1 = this;

			var taskId = this.parentNode.dataset.id;
			var taskStore = this.getHost().props.store;
			animate(this, 'toggle', 'checked').then(function () {
				return animate(this$1.parentNode, 'add', 'leaving');
			}).then(function () {
				taskStore.do(taskId);
			});
		}},
		'.js-delete': {click: function click() {
			var taskId = this.parentNode.dataset.id;
			var taskStore = this.getHost().props.store;
			animate(this.parentNode, 'add', 'leaving').then(function () {
				taskStore.delete(taskId);
			});
		}},
		'#suggestions': {click: function click() {
			this.previousElementSibling.value = this.previousElementSibling.value.replace(/([+@]\w*)$/, this.value) + ' ';
			this.getHost().setProps('suggestions', []);
			this.previousElementSibling.focus();
		}},
		'calendar': {datechosen: function datechosen(event) {
			var input = this.getHost().querySelector('form input');
			input.value = input.value.replace(/due:[\dT:-]*$/, 'due:' + event.detail) + ' ';
			input.focus();
			this.getHost().setProps('calendar', false);
		}},
		'form': {submit: function submit(event) {
			event.preventDefault();
			var taskStore = this.getHost().props.store;
			var value = this.task.value;
			if (this.getHost().props.editing) {
				taskStore.delete(this.getHost().props.editing.id);
				this.getHost().setProps('editing', null);
			}
			taskStore.add(value);
			this.task && (this.task.value = '');
		}}
	};
};

TodoList.prototype.onmount = function onmount (z) {
	z.import('./dumb/calendar.js');
};

Object.defineProperties( TodoList.prototype, prototypeAccessors );

return TodoList;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYW5pbWF0ZS5qcyIsIi4uLy4uLy4uL3BhZ2VzL3NtYXJ0L3RvZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFuaW1hdGVzIGEgZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiBDU1MgdHJhbnNpdGlvbnMuXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gZWwgdGhlIERPTSBub2RlIHRvIGJlIGFuaW1hdGVkLCBpZiBpdCdzIGEgc3RyaW5nLCB5b3UgbmVlZCB0byBiaW5kIHRoaXMgZnVuY3Rpb24gdG8gYSB0YXJnZXQgZWxlbWVudCdzIHBhcmVudCBhbmQgdGhlIGVsIHBhcmFtZXRlciB3aWxsIGJlIGludGVycHJldGVkIGFzIENTUyBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBjYW4gZWl0aGVyIGJlaSAnYWRkJywgJ3JlbW92ZScgb3IgJ3RvZ2dsZSdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIHRoZSBjc3MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIERPTSBub2RlIHRvIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuICogQHJldHVybnMge1Byb21pc2V9IHJlc29sdmVzIGlmIHRoZSBhbmltYXRpb24gZmluaXNoZXMsIGVsc2Ugd2lsbCByZWplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGUoZWwsIGFjdGlvbiwgdHJpZ2dlckNsYXNzKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRcdH1cblx0XHRlbC5jbGFzc0xpc3RbYWN0aW9uXSh0cmlnZ2VyQ2xhc3MpO1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlbC5fdHJhbnNpdGlvbmVuZGxpc3RlbmVyID0gKCkgPT4ge1xuXHRcdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGVsLl90cmFuc2l0aW9uZW5kbGlzdGVuZXIpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tbGlzdC5jc3MnO1xuaW1wb3J0IGFuaW1hdGUgZnJvbSAnLi4vLi4vbGliL2FuaW1hdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRzdG9yZToge30sXG5cdFx0XHRlZGl0aW5nOiBudWxsLFxuXHRcdFx0dGFza3M6IFtdLFxuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0c3VnZ2VzdGlvbnM6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1saXN0X19maWx0ZXJcIj5cblx0XHRcdFx0XHR7QXJyYXkuaXNBcnJheShkYXRhLnByb3BzLmZpbHRlcnMpID8gZGF0YS5wcm9wcy5maWx0ZXJzLm1hcCgoZmlsdGVyID0+IChcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHZhbHVlPXtmaWx0ZXJ9PntmaWx0ZXIgPT09IHRydWUgPyAnZG9uZScgOiBmaWx0ZXIgPT09IGZhbHNlID8gJ29wZW4nIDogZmlsdGVyfTwvYnV0dG9uPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpIDogJyd9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e2RhdGEucHJvcHMudGFza3MubWFwKCh0YXNrID0+IChcblx0XHRcdFx0XHRcdDxsaSBkYXRhLWlkPXt0YXNrLmlkfSBjbGFzcz17ZGF0YS5wcm9wcy5lZGl0aW5nICYmIGRhdGEucHJvcHMuZWRpdGluZy5pZCA9PT0gdGFzay5pZCA/ICd0b2RvLWVkaXRpbmcnIDogJyd9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9kb19fY2hlY2tib3hcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZG9cIiBkYXRhLXByaW9yaXR5PXt0YXNrLnByaW9yaXR5fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGV4dFwiPnt0YXNrLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY29udGV4dHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMubWFwKChjb250ZXh0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX2NvbnRleHRcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKGNvbnRleHQpID49IDAgPyAnJyA6IGNvbnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMubWFwKChwcm9qZWN0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX3Byb2plY3RcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKHByb2plY3QpID49IDAgPyAnJyA6IHByb2plY3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGFnc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2sudGFncyAmJiB0YXNrLnRhZ3MubWFwKCh0YWcgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGFnIGpzLXRhZ1wiPnt0YWd9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLmxpbmtzICYmIHRhc2subGlua3MubWFwKChsaW5rID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bGluay51cmx9IGNsYXNzPVwidG9kb19saW5rXCI+e2xpbmsubmFtZX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwianMtZGVsZXRlXCI+eDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHRhc2sgaGVyZS4uLlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cblx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLmNhbGVuZGFyID8gKFxuXHRcdFx0XHRcdFx0XHQ8Y2FsZW5kYXIgZGF0YS1kYXRlPXtkYXRhLnByb3BzLmNhbGVuZGFyfS8+XG5cdFx0XHRcdFx0XHQpIDogZGF0YS5wcm9wcy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IHNpemU9e01hdGgubWluKGRhdGEucHJvcHMuc3VnZ2VzdGlvbnMubGVuZ3RoLCA1KX0gaWQ9XCJzdWdnZXN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLnN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtzdWdnZXN0aW9ufT57c3VnZ2VzdGlvbn08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQpIDogJyd9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImpzLWFkZC10YXNrXCI+QWRkPC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCcudG9kb19jb250ZXh0LCAudG9kb19wcm9qZWN0LCAudG9kb190YWcnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0bGV0IGZpbHRlciA9IHRoaXMuaW5uZXJUZXh0O1xuXHRcdFx0XHRpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXRhZycpKSB7XG5cdFx0XHRcdFx0ZmlsdGVyID0gZmlsdGVyLnNwbGl0KCc6JylbMF07XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcihmaWx0ZXIpO1xuXHRcdFx0fX0sXG5cdFx0XHQnLnRvZG8tbGlzdF9fZmlsdGVyIGJ1dHRvbic6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRpZiAoWydmYWxzZScsICd0cnVlJ10uaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwKSB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcih0cnVlKTtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKGZhbHNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKHRoaXMudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9fSxcblx0XHRcdCdmb3JtIGlucHV0Jzoge2tleXVwKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xuXHRcdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA0MCkge1xuXHRcdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIFtdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgY2hhciA9IHRoaXMudmFsdWUubWF0Y2goLyhbK0BdXFx3KikkL2cpIHx8ICcnO1xuXHRcdFx0XHRcdGNoYXIgPSBjaGFyWzBdIHx8ICcnO1xuXHRcdFx0XHRcdGlmIChjaGFyWzBdID09PSAnKycpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIHRoaXMuZ2V0SG9zdCgpLnByb3BzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaW5kZXhPZihjaGFyKSA+PSAwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjaGFyWzBdID09PSAnQCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIHRoaXMuZ2V0SG9zdCgpLnByb3BzLmNvbnRleHRzLmZpbHRlcihjb250ZXh0ID0+IGNvbnRleHQuaW5kZXhPZihjaGFyKSA+PSAwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnZhbHVlLm1hdGNoKC9kdWU6W1xcZFQ6LV0qJC9nKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NhbGVuZGFyJywgdGhpcy52YWx1ZS5tYXRjaCgvZHVlOihbXFxkOi1dKikvKVsxXSB8fCAnMScpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5nZXRIb3N0KCkucHJvcHMuY2FsZW5kYXIgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY2FsZW5kYXInLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBrZXlkb3duKGV2ZW50KSB7XG5cdFx0XHRcdGlmICgoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpICYmIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nICYmIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvKFsrQF1cXHcqKSQvLCB0aGlzLm5leHRFbGVtZW50U2libGluZyAmJiB0aGlzLm5leHRFbGVtZW50U2libGluZy52YWx1ZSB8fCAnJykgKyAnICc7XG5cdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgW10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBibHVyKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCBbXSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9fSxcblx0XHRcdCdsaSAudG9kb190ZXh0Jzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza0lkID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRcdFx0bGV0IHRhc2sgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2VkaXRpbmcnLCB0YXNrKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpLnZhbHVlID0gdGFzay50b1N0cmluZygpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0JykuZm9jdXMoKTtcblx0XHRcdH19LFxuXHRcdFx0J2xpIC50b2RvX19jaGVja2JveCc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tJZCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGFuaW1hdGUodGhpcywgJ3RvZ2dsZScsICdjaGVja2VkJykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGFuaW1hdGUodGhpcy5wYXJlbnROb2RlLCAnYWRkJywgJ2xlYXZpbmcnKTtcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmRvKHRhc2tJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fX0sXG5cdFx0XHQnLmpzLWRlbGV0ZSc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tJZCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGFuaW1hdGUodGhpcy5wYXJlbnROb2RlLCAnYWRkJywgJ2xlYXZpbmcnKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZGVsZXRlKHRhc2tJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fX0sXG5cdFx0XHQnI3N1Z2dlc3Rpb25zJzoge2NsaWNrKCkge1xuXHRcdFx0XHR0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUgPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUucmVwbGFjZSgvKFsrQF1cXHcqKSQvLCB0aGlzLnZhbHVlKSArICcgJztcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgW10pO1xuXHRcdFx0XHR0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcblx0XHRcdH19LFxuXHRcdFx0J2NhbGVuZGFyJzoge2RhdGVjaG9zZW4oZXZlbnQpIHtcblx0XHRcdFx0bGV0IGlucHV0ID0gdGhpcy5nZXRIb3N0KCkucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpO1xuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL2R1ZTpbXFxkVDotXSokLywgJ2R1ZTonICsgZXZlbnQuZGV0YWlsKSArICcgJztcblx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NhbGVuZGFyJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQnZm9ybSc6IHtzdWJtaXQoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnRhc2sudmFsdWU7XG5cdFx0XHRcdGlmICh0aGlzLmdldEhvc3QoKS5wcm9wcy5lZGl0aW5nKSB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmRlbGV0ZSh0aGlzLmdldEhvc3QoKS5wcm9wcy5lZGl0aW5nLmlkKTtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnZWRpdGluZycsIG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhc2tTdG9yZS5hZGQodmFsdWUpO1xuXHRcdFx0XHR0aGlzLnRhc2sgJiYgKHRoaXMudGFzay52YWx1ZSA9ICcnKTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxuXG5cdG9ubW91bnQoeikge1xuXHRcdHouaW1wb3J0KCcuL2R1bWIvY2FsZW5kYXIuanMnKTtcblx0fVxufSJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVFBLEFBQWUsU0FBUyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7OztDQUN6RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFDO0VBQzFCLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO0dBQzNCLEVBQUUsR0FBR0EsTUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUM1QjtFQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDbkMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsc0JBQXNCLEdBQUcsWUFBRztHQUNuRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0dBQ25FLE9BQU8sRUFBRSxDQUFDO0dBQ1YsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDOzs7QUNmSixJQUFxQixRQUFRLEdBQUMsaUJBQ2xCLEdBQUc7Q0FDZCxJQUFLLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0NBQ3hCLEtBQU0sQ0FBQyxLQUFL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
