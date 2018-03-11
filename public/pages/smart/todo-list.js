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

var styles = (function (code) { return code; })("todo-list .todo-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-list ul{list-style-type:none;margin:0;padding:8px 0;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}todo-list .todo-list__filter{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}todo-list .todo-list__filter,todo-list form,todo-list ul{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}todo-list li{margin:0;padding:10px 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:opacity .2s linear,max-height .5s linear,padding-top .5s linear,padding-bottom .5s linear;transition:opacity .2s linear,max-height .5s linear,padding-top .5s linear,padding-bottom .5s linear;max-height:10em}todo-list li.todo-editing{opacity:.5}todo-list li.leaving{opacity:0;max-height:0;padding-top:0;padding-bottom:0}todo-list li:hover{background:#f2f2f2}todo-list li button{margin-left:auto;background:#fff;-webkit-box-shadow:0 0 0 #fff;box-shadow:0 0 0 #fff;color:#4c4c4c;border:0;-ms-flex-item-align:center;align-self:center}todo-list li button:hover{background:#e5e5e5}todo-list .todo{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:48px;font-size:14px}todo-list .todo__checkbox{display:inline-block;border:1px solid #191919;background:#fff;border-radius:3px;width:17px;height:17px;margin-right:20px;margin-top:3px;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-box-flex:0;-ms-flex:0 0 17px;flex:0 0 17px}todo-list .todo__checkbox.checked{border-top-color:transparent;border-left-color:transparent;background:transparent;border-radius:0;width:12px;height:22px;-webkit-transform:rotate(40deg);transform:rotate(40deg)}todo-list .todo_text{display:block;font-size:16px;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}todo-list .todo[data-priority^=\"(\"]{color:#983351;font-weight:700}todo-list .todo[data-priority^=\"(A)\"]{font-size:120%}todo-list .todo[data-priority^=\"(B)\"]{font-size:110%}todo-list .todo[data-priority^=\"(C)\"]{font-size:100%}todo-list .todo[data-priority^=\"(D)\"]{font-size:90%}todo-list .todo[data-priority^=\"(E)\"]{font-size:80%}todo-list .contexts,todo-list .links,todo-list .projects,todo-list .tags{line-height:1.56em}todo-list .todo_context{color:#369;font-weight:700;margin-right:.5em}todo-list .todo_project{color:#936;font-style:italic;margin-right:.5em}todo-list .todo_tag{border:1px solid #ccc;color:#4c4c4c;background:#e5e5e5;border-radius:3px;margin-right:.5em;padding:0 .25em}todo-list form{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:.5em;padding-bottom:.5em;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}todo-list form label{display:block;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}todo-list form #suggestions,todo-list form calendar{position:absolute;left:1em;top:50px}todo-list form #suggestions{background:#fff;border:0;padding:5px 10px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5);-webkit-appearance:none;-moz-appearance:none;appearance:none}todo-list form button[type=submit]{display:none}todo-list form input[type=text]{width:calc(100% - 50px);margin:10px 0;border:0;padding:10px 16px;background:#fff;-webkit-box-shadow:2px 0 6px rgba(0,0,0,.5);box-shadow:2px 0 6px rgba(0,0,0,.5);margin-bottom:0;border-bottom:3px solid #ccc;-webkit-transition:border-bottom-color .2s linear;transition:border-bottom-color .2s linear}todo-list form input[type=text]:focus{border-bottom:3px solid #694d8e}@media screen and (max-width:686px){todo-list{font-size:80%}todo-list ul{padding-bottom:4em}todo-list form{border-top:0;margin-bottom:0;padding-bottom:0;position:fixed;bottom:0;left:0;right:0}todo-list form #suggestions,todo-list form calendar{bottom:40px;top:auto}todo-list form input[type=text]{width:calc(100% - 32px)}}", {});

/**
 * animates a given element based on CSS transitions.
 *
 * @param {DOMElement|string} el the DOM node to be animated, if it's a string, you need to bind this function to a target element's parent and the el parameter will be interpreted as CSS selector
 * @param {string} action can either bei 'add', 'remove' or 'toggle'
 * @param {string} trigger the css class to be added to the DOM node to trigger the animation
 * @returns {Promise} resolves if the animation finishes, else will reject.
 */
function animate(el, action, triggerClass) {
	var _this = this;
	return new Promise(function (resolve) {
		if (typeof el === 'string') {
			el = _this.querySelector(el);
		}
		el.classList[action](triggerClass);
		requestAnimationFrame(function () {
			el.addEventListener('transitionend', el._transitionendlistener = function () {
				resolve();
				el.removeEventListener('transitionend', el._transitionendlistener);
			}, false);
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
			var taskId = this.parentNode.dataset.id;
			var taskStore = this.getHost().props.store;
			var _this = this;
			animate(this, 'toggle', 'checked').then(function () {
				return animate(_this.parentNode, 'add', 'leaving');
			}).then(function () {
				_this.parentNode.parentNode.removeChild(_this.parentNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYW5pbWF0ZS5qcyIsIi4uLy4uLy4uL3BhZ2VzL3NtYXJ0L3RvZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFuaW1hdGVzIGEgZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiBDU1MgdHJhbnNpdGlvbnMuXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gZWwgdGhlIERPTSBub2RlIHRvIGJlIGFuaW1hdGVkLCBpZiBpdCdzIGEgc3RyaW5nLCB5b3UgbmVlZCB0byBiaW5kIHRoaXMgZnVuY3Rpb24gdG8gYSB0YXJnZXQgZWxlbWVudCdzIHBhcmVudCBhbmQgdGhlIGVsIHBhcmFtZXRlciB3aWxsIGJlIGludGVycHJldGVkIGFzIENTUyBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBjYW4gZWl0aGVyIGJlaSAnYWRkJywgJ3JlbW92ZScgb3IgJ3RvZ2dsZSdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIHRoZSBjc3MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIERPTSBub2RlIHRvIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuICogQHJldHVybnMge1Byb21pc2V9IHJlc29sdmVzIGlmIHRoZSBhbmltYXRpb24gZmluaXNoZXMsIGVsc2Ugd2lsbCByZWplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGUoZWwsIGFjdGlvbiwgdHJpZ2dlckNsYXNzKSB7XG5cdGxldCBfdGhpcyA9IHRoaXM7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZWwgPSBfdGhpcy5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdFx0ZWwuY2xhc3NMaXN0W2FjdGlvbl0odHJpZ2dlckNsYXNzKTtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGVsLl90cmFuc2l0aW9uZW5kbGlzdGVuZXIgPSAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGVsLl90cmFuc2l0aW9uZW5kbGlzdGVuZXIpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdH0pO1xuXHR9KTtcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tbGlzdC5jc3MnO1xuaW1wb3J0IGFuaW1hdGUgZnJvbSAnLi4vLi4vbGliL2FuaW1hdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRzdG9yZToge30sXG5cdFx0XHRlZGl0aW5nOiBudWxsLFxuXHRcdFx0dGFza3M6IFtdLFxuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0c3VnZ2VzdGlvbnM6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1saXN0X19maWx0ZXJcIj5cblx0XHRcdFx0XHR7QXJyYXkuaXNBcnJheShkYXRhLnByb3BzLmZpbHRlcnMpID8gZGF0YS5wcm9wcy5maWx0ZXJzLm1hcCgoZmlsdGVyID0+IChcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHZhbHVlPXtmaWx0ZXJ9PntmaWx0ZXIgPT09IHRydWUgPyAnZG9uZScgOiBmaWx0ZXIgPT09IGZhbHNlID8gJ29wZW4nIDogZmlsdGVyfTwvYnV0dG9uPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpIDogJyd9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e2RhdGEucHJvcHMudGFza3MubWFwKCh0YXNrID0+IChcblx0XHRcdFx0XHRcdDxsaSBkYXRhLWlkPXt0YXNrLmlkfSBjbGFzcz17ZGF0YS5wcm9wcy5lZGl0aW5nICYmIGRhdGEucHJvcHMuZWRpdGluZy5pZCA9PT0gdGFzay5pZCA/ICd0b2RvLWVkaXRpbmcnIDogJyd9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9kb19fY2hlY2tib3hcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZG9cIiBkYXRhLXByaW9yaXR5PXt0YXNrLnByaW9yaXR5fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGV4dFwiPnt0YXNrLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY29udGV4dHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMubWFwKChjb250ZXh0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX2NvbnRleHRcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKGNvbnRleHQpID49IDAgPyAnJyA6IGNvbnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMubWFwKChwcm9qZWN0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX3Byb2plY3RcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKHByb2plY3QpID49IDAgPyAnJyA6IHByb2plY3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGFnc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2sudGFncyAmJiB0YXNrLnRhZ3MubWFwKCh0YWcgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGFnIGpzLXRhZ1wiPnt0YWd9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLmxpbmtzICYmIHRhc2subGlua3MubWFwKChsaW5rID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bGluay51cmx9IGNsYXNzPVwidG9kb19saW5rXCI+e2xpbmsubmFtZX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwianMtZGVsZXRlXCI+eDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHRhc2sgaGVyZS4uLlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cblx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLmNhbGVuZGFyID8gKFxuXHRcdFx0XHRcdFx0XHQ8Y2FsZW5kYXIgZGF0YS1kYXRlPXtkYXRhLnByb3BzLmNhbGVuZGFyfS8+XG5cdFx0XHRcdFx0XHQpIDogZGF0YS5wcm9wcy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IHNpemU9e01hdGgubWluKGRhdGEucHJvcHMuc3VnZ2VzdGlvbnMubGVuZ3RoLCA1KX0gaWQ9XCJzdWdnZXN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLnN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtzdWdnZXN0aW9ufT57c3VnZ2VzdGlvbn08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQpIDogJyd9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImpzLWFkZC10YXNrXCI+QWRkPC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCcudG9kb19jb250ZXh0LCAudG9kb19wcm9qZWN0LCAudG9kb190YWcnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0bGV0IGZpbHRlciA9IHRoaXMuaW5uZXJUZXh0O1xuXHRcdFx0XHRpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXRhZycpKSB7XG5cdFx0XHRcdFx0ZmlsdGVyID0gZmlsdGVyLnNwbGl0KCc6JylbMF07XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcihmaWx0ZXIpO1xuXHRcdFx0fX0sXG5cdFx0XHQnLnRvZG8tbGlzdF9fZmlsdGVyIGJ1dHRvbic6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRpZiAoWydmYWxzZScsICd0cnVlJ10uaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwKSB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcih0cnVlKTtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKGZhbHNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKHRoaXMudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9fSxcblx0XHRcdCdmb3JtIGlucHV0Jzoge2tleXVwKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xuXHRcdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA0MCkge1xuXHRcdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIFtdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgY2hhciA9IHRoaXMudmFsdWUubWF0Y2goLyhbK0BdXFx3KikkL2cpIHx8ICcnO1xuXHRcdFx0XHRcdGNoYXIgPSBjaGFyWzBdIHx8ICcnO1xuXHRcdFx0XHRcdGlmIChjaGFyWzBdID09PSAnKycpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIHRoaXMuZ2V0SG9zdCgpLnByb3BzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaW5kZXhPZihjaGFyKSA+PSAwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjaGFyWzBdID09PSAnQCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIHRoaXMuZ2V0SG9zdCgpLnByb3BzLmNvbnRleHRzLmZpbHRlcihjb250ZXh0ID0+IGNvbnRleHQuaW5kZXhPZihjaGFyKSA+PSAwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnZhbHVlLm1hdGNoKC9kdWU6W1xcZFQ6LV0qJC9nKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NhbGVuZGFyJywgdGhpcy52YWx1ZS5tYXRjaCgvZHVlOihbXFxkOi1dKikvKVsxXSB8fCAnMScpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5nZXRIb3N0KCkucHJvcHMuY2FsZW5kYXIgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY2FsZW5kYXInLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBrZXlkb3duKGV2ZW50KSB7XG5cdFx0XHRcdGlmICgoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpICYmIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nICYmIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnNlbGVjdGVkSW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvKFsrQF1cXHcqKSQvLCB0aGlzLm5leHRFbGVtZW50U2libGluZyAmJiB0aGlzLm5leHRFbGVtZW50U2libGluZy52YWx1ZSB8fCAnJykgKyAnICc7XG5cdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgW10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBibHVyKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCBbXSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9fSxcblx0XHRcdCdsaSAudG9kb190ZXh0Jzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza0lkID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRcdFx0bGV0IHRhc2sgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2VkaXRpbmcnLCB0YXNrKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpLnZhbHVlID0gdGFzay50b1N0cmluZygpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0JykuZm9jdXMoKTtcblx0XHRcdH19LFxuXHRcdFx0J2xpIC50b2RvX19jaGVja2JveCc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tJZCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdGFuaW1hdGUodGhpcywgJ3RvZ2dsZScsICdjaGVja2VkJykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGFuaW1hdGUoX3RoaXMucGFyZW50Tm9kZSwgJ2FkZCcsICdsZWF2aW5nJyk7XG5cdFx0XHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdF90aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5wYXJlbnROb2RlKTtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZG8odGFza0lkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9fSxcblx0XHRcdCcuanMtZGVsZXRlJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza0lkID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0YW5pbWF0ZSh0aGlzLnBhcmVudE5vZGUsICdhZGQnLCAnbGVhdmluZycpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5kZWxldGUodGFza0lkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9fSxcblx0XHRcdCcjc3VnZ2VzdGlvbnMnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZS5yZXBsYWNlKC8oWytAXVxcdyopJC8sIHRoaXMudmFsdWUpICsgJyAnO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCBbXSk7XG5cdFx0XHRcdHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5mb2N1cygpO1xuXHRcdFx0fX0sXG5cdFx0XHQnY2FsZW5kYXInOiB7ZGF0ZWNob3NlbihldmVudCkge1xuXHRcdFx0XHRsZXQgaW5wdXQgPSB0aGlzLmdldEhvc3QoKS5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0Jyk7XG5cdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvZHVlOltcXGRUOi1dKiQvLCAnZHVlOicgKyBldmVudC5kZXRhaWwpICsgJyAnO1xuXHRcdFx0XHRpbnB1dC5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY2FsZW5kYXInLCBmYWxzZSk7XG5cdFx0XHR9fSxcblx0XHRcdCdmb3JtJzoge3N1Ym1pdChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHRoaXMudGFzay52YWx1ZTtcblx0XHRcdFx0aWYgKHRoaXMuZ2V0SG9zdCgpLnByb3BzLmVkaXRpbmcpIHtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZGVsZXRlKHRoaXMuZ2V0SG9zdCgpLnByb3BzLmVkaXRpbmcuaWQpO1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdlZGl0aW5nJywgbnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFza1N0b3JlLmFkZCh2YWx1ZSk7XG5cdFx0XHRcdHRoaXMudGFzayAmJiAodGhpcy50YXNrLnZhbHVlID0gJycpO1xuXHRcdFx0fX1cblx0XHR9O1xuXHR9XG5cblx0b25tb3VudCh6KSB7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi9jYWxlbmRhci5qcycpO1xuXHR9XG59Il0sIm5hbWVzIjpbImxldCIsInRoaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBUUEsQUFBZSxTQUFTLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtDQUN6REEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0NBQ2pCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUM7RUFDMUIsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7R0FDM0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDN0I7RUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0VBQ25DLHFCQUFxQixDQUFDLFlBQUc7R0FDeEIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxF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
