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
		setTimeout(function () {
			el.addEventListener('transitionend', el._transitionendlistener = function () {
				resolve();
				el.removeEventListener('transitionend', el._transitionendlistener);
			}, false);
		}, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYW5pbWF0ZS5qcyIsIi4uLy4uLy4uL3BhZ2VzL3NtYXJ0L3RvZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFuaW1hdGVzIGEgZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiBDU1MgdHJhbnNpdGlvbnMuXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gZWwgdGhlIERPTSBub2RlIHRvIGJlIGFuaW1hdGVkLCBpZiBpdCdzIGEgc3RyaW5nLCB5b3UgbmVlZCB0byBiaW5kIHRoaXMgZnVuY3Rpb24gdG8gYSB0YXJnZXQgZWxlbWVudCdzIHBhcmVudCBhbmQgdGhlIGVsIHBhcmFtZXRlciB3aWxsIGJlIGludGVycHJldGVkIGFzIENTUyBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBjYW4gZWl0aGVyIGJlaSAnYWRkJywgJ3JlbW92ZScgb3IgJ3RvZ2dsZSdcbiAqIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyIHRoZSBjc3MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIERPTSBub2RlIHRvIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuICogQHJldHVybnMge1Byb21pc2V9IHJlc29sdmVzIGlmIHRoZSBhbmltYXRpb24gZmluaXNoZXMsIGVsc2Ugd2lsbCByZWplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGUoZWwsIGFjdGlvbiwgdHJpZ2dlckNsYXNzKSB7XG5cdGxldCBfdGhpcyA9IHRoaXM7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZWwgPSBfdGhpcy5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdFx0ZWwuY2xhc3NMaXN0W2FjdGlvbl0odHJpZ2dlckNsYXNzKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlbC5fdHJhbnNpdGlvbmVuZGxpc3RlbmVyID0gKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlbC5fdHJhbnNpdGlvbmVuZGxpc3RlbmVyKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9LCAyMCk7XG5cdH0pO1xufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdG9kby1saXN0LmNzcyc7XG5pbXBvcnQgYW5pbWF0ZSBmcm9tICcuLi8uLi9saWIvYW5pbWF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdHN0b3JlOiB7fSxcblx0XHRcdGVkaXRpbmc6IG51bGwsXG5cdFx0XHR0YXNrczogW10sXG5cdFx0XHRwcm9qZWN0czogW10sXG5cdFx0XHRjb250ZXh0czogW10sXG5cdFx0XHRzdWdnZXN0aW9uczogW10sXG5cdFx0XHRmaWx0ZXJzOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1saXN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvLWxpc3RfX2ZpbHRlclwiPlxuXHRcdFx0XHRcdHtBcnJheS5pc0FycmF5KGRhdGEucHJvcHMuZmlsdGVycykgPyBkYXRhLnByb3BzLmZpbHRlcnMubWFwKChmaWx0ZXIgPT4gKFxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e2ZpbHRlcn0+e2ZpbHRlciA9PT0gdHJ1ZSA/ICdkb25lJyA6IGZpbHRlciA9PT0gZmFsc2UgPyAnb3BlbicgOiBmaWx0ZXJ9PC9idXR0b24+XG5cdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgOiAnJ31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHR7ZGF0YS5wcm9wcy50YXNrcy5tYXAoKHRhc2sgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGRhdGEtaWQ9e3Rhc2suaWR9IGNsYXNzPXtkYXRhLnByb3BzLmVkaXRpbmcgJiYgZGF0YS5wcm9wcy5lZGl0aW5nLmlkID09PSB0YXNrLmlkID8gJ3RvZG8tZWRpdGluZycgOiAnJ30+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvX19jaGVja2JveFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9kb1wiIGRhdGEtcHJpb3JpdHk9e3Rhc2sucHJpb3JpdHl9PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidG9kb190ZXh0XCI+e3Rhc2sudGV4dH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjb250ZXh0c1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5tYXAoKGNvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fY29udGV4dFwiPntkYXRhLnByb3BzLmZpbHRlcnMgJiYgZGF0YS5wcm9wcy5maWx0ZXJzLmluZGV4T2YoY29udGV4dCkgPj0gMCA/ICcnIDogY29udGV4dH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKSB8fCAnJ31cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwcm9qZWN0c1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5tYXAoKHByb2plY3QgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fcHJvamVjdFwiPntkYXRhLnByb3BzLmZpbHRlcnMgJiYgZGF0YS5wcm9wcy5maWx0ZXJzLmluZGV4T2YocHJvamVjdCkgPj0gMCA/ICcnIDogcHJvamVjdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKSB8fCAnJ31cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0YWdzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGFzay50YWdzICYmIHRhc2sudGFncy5tYXAoKHRhZyA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidG9kb190YWcganMtdGFnXCI+e3RhZ308L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKSB8fCAnJ31cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsaW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2subGlua3MgJiYgdGFzay5saW5rcy5tYXAoKGxpbmsgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rLnVybH0gY2xhc3M9XCJ0b2RvX2xpbmtcIj57bGluay5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJqcy1kZWxldGVcIj54PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1wiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgdGFzayBoZXJlLi4uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIvPlxuXHRcdFx0XHRcdFx0e2RhdGEucHJvcHMuY2FsZW5kYXIgPyAoXG5cdFx0XHRcdFx0XHRcdDxjYWxlbmRhciBkYXRhLWRhdGU9e2RhdGEucHJvcHMuY2FsZW5kYXJ9Lz5cblx0XHRcdFx0XHRcdCkgOiBkYXRhLnByb3BzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3Qgc2l6ZT17TWF0aC5taW4oZGF0YS5wcm9wcy5zdWdnZXN0aW9ucy5sZW5ndGgsIDUpfSBpZD1cInN1Z2dlc3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2RhdGEucHJvcHMuc3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3N1Z2dlc3Rpb259PntzdWdnZXN0aW9ufTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdCkgOiAnJ31cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwianMtYWRkLXRhc2tcIj5BZGQ8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Jy50b2RvX2NvbnRleHQsIC50b2RvX3Byb2plY3QsIC50b2RvX3RhZyc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRsZXQgZmlsdGVyID0gdGhpcy5pbm5lclRleHQ7XG5cdFx0XHRcdGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnanMtdGFnJykpIHtcblx0XHRcdFx0XHRmaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoJzonKVswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKGZpbHRlcik7XG5cdFx0XHR9fSxcblx0XHRcdCcudG9kby1saXN0X19maWx0ZXIgYnV0dG9uJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGlmIChbJ2ZhbHNlJywgJ3RydWUnXS5pbmRleE9mKHRoaXMudmFsdWUpID49IDApIHtcblx0XHRcdFx0XHR0YXNrU3RvcmUuZmlsdGVyKHRydWUpO1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5maWx0ZXIoZmFsc2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5maWx0ZXIodGhpcy52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH19LFxuXHRcdFx0J2Zvcm0gaW5wdXQnOiB7a2V5dXAoZXZlbnQpIHtcblx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc2VsZWN0ZWRJbmRleCAtPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc2VsZWN0ZWRJbmRleCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgW10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBjaGFyID0gdGhpcy52YWx1ZS5tYXRjaCgvKFsrQF1cXHcqKSQvZykgfHwgJyc7XG5cdFx0XHRcdFx0Y2hhciA9IGNoYXJbMF0gfHwgJyc7XG5cdFx0XHRcdFx0aWYgKGNoYXJbMF0gPT09ICcrJykge1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgdGhpcy5nZXRIb3N0KCkucHJvcHMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pbmRleE9mKGNoYXIpID49IDApKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNoYXJbMF0gPT09ICdAJykge1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgdGhpcy5nZXRIb3N0KCkucHJvcHMuY29udGV4dHMuZmlsdGVyKGNvbnRleHQgPT4gY29udGV4dC5pbmRleE9mKGNoYXIpID49IDApKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudmFsdWUubWF0Y2goL2R1ZTpbXFxkVDotXSokL2cpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY2FsZW5kYXInLCB0aGlzLnZhbHVlLm1hdGNoKC9kdWU6KFtcXGQ6LV0qKS8pWzFdIHx8ICcxJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmdldEhvc3QoKS5wcm9wcy5jYWxlbmRhciAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjYWxlbmRhcicsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIGtleWRvd24oZXZlbnQpIHtcblx0XHRcdFx0aWYgKChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikgJiYgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC8oWytAXVxcdyopJC8sIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nICYmIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlIHx8ICcnKSArICcgJztcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCBbXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGJsdXIoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIFtdKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH19LFxuXHRcdFx0J2xpIC50b2RvX3RleHQnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCB0YXNrSWQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXHRcdFx0XHRsZXQgdGFzayA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnZWRpdGluZycsIHRhc2spO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0JykudmFsdWUgPSB0YXNrLnRvU3RyaW5nKCk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gaW5wdXQnKS5mb2N1cygpO1xuXHRcdFx0fX0sXG5cdFx0XHQnbGkgLnRvZG9fX2NoZWNrYm94Jzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza0lkID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0YW5pbWF0ZSh0aGlzLCAndG9nZ2xlJywgJ2NoZWNrZWQnKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYW5pbWF0ZShfdGhpcy5wYXJlbnROb2RlLCAnYWRkJywgJ2xlYXZpbmcnKTtcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0X3RoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLnBhcmVudE5vZGUpO1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5kbyh0YXNrSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH19LFxuXHRcdFx0Jy5qcy1kZWxldGUnOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCB0YXNrSWQgPSB0aGlzLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRhbmltYXRlKHRoaXMucGFyZW50Tm9kZSwgJ2FkZCcsICdsZWF2aW5nJykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmRlbGV0ZSh0YXNrSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH19LFxuXHRcdFx0JyNzdWdnZXN0aW9ucyc6IHtjbGljaygpIHtcblx0XHRcdFx0dGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlLnJlcGxhY2UoLyhbK0BdXFx3KikkLywgdGhpcy52YWx1ZSkgKyAnICc7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIFtdKTtcblx0XHRcdFx0dGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG5cdFx0XHR9fSxcblx0XHRcdCdjYWxlbmRhcic6IHtkYXRlY2hvc2VuKGV2ZW50KSB7XG5cdFx0XHRcdGxldCBpbnB1dCA9IHRoaXMuZ2V0SG9zdCgpLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gaW5wdXQnKTtcblx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKC9kdWU6W1xcZFQ6LV0qJC8sICdkdWU6JyArIGV2ZW50LmRldGFpbCkgKyAnICc7XG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjYWxlbmRhcicsIGZhbHNlKTtcblx0XHRcdH19LFxuXHRcdFx0J2Zvcm0nOiB7c3VibWl0KGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0bGV0IHZhbHVlID0gdGhpcy50YXNrLnZhbHVlO1xuXHRcdFx0XHRpZiAodGhpcy5nZXRIb3N0KCkucHJvcHMuZWRpdGluZykge1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5kZWxldGUodGhpcy5nZXRIb3N0KCkucHJvcHMuZWRpdGluZy5pZCk7XG5cdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2VkaXRpbmcnLCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrU3RvcmUuYWRkKHZhbHVlKTtcblx0XHRcdFx0dGhpcy50YXNrICYmICh0aGlzLnRhc2sudmFsdWUgPSAnJyk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL2NhbGVuZGFyLmpzJyk7XG5cdH1cbn0iXSwibmFtZXMiOlsibGV0IiwidGhpcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFRQSxBQUFlLFNBQVMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0NBQ3pEQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBQztFQUMxQixJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtHQUMzQixFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUM3QjtFQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDbkMsVUFBVSxDQUFDLFlBQUc7R0FDYixFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxZQUFHO0lBQ25FLE9BQU8sRUFBRSxDQUFDO0lBQ1YsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNuRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ1YsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUNQLENBQUMsQ0FBQzs7O0FDbEJKLElBQXFCLFFBQVEsR0FBQyxpQkFDbEIsR0FBRztDQUNkLElBQUssS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDeEIsS0FBTSxDQUFDLEtBQUssR0FBRztFQUNkLEtBQU0sRUFBRSxFQUFFO0VBQ1YsT0FBUSxFQUFFLElBQUk7RUFDZCxLQUFNLEVBQUUsRUFBRTtFQUNWLFFBQVMsRUFBRSxFQUFFO0VBQ2IsUUFBUyxFQUFFLEVBQUU7RUFDYixXQUFZLEVBQUUsRUFBRTtFQUNoQixPQUFRLEVBQUUsS0FBSztFQUNkLENBQUM7Q0FDRjs7bURBQUE7O0FBRUYsbUJBQUMsTUFBTSxvQkFBQyxJQUFJLEVBQUU7OztDQUNiO0VBQ0MsaUJBQUUsU0FBSSxLQUFLLEVBQUMsV0FBVyxFQUFBO0lBQ3JCLGlCQUFDLFNBQUksS0FBSyxFQUFDLG1CQUFtQixFQUFBO0tBQzdCLEtBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLE1BQU0sRUFBQztLQUNwRSxpQkFBRSxZQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLE1BQU8sRUFBQyxFQUFDLE1BQU8sS0FBSyxJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sS0FBSyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBVTtRQUM3RyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7S0FDZDtJQUNOLGlCQUFDLFVBQUU7S0FDRixJQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLElBQUksRUFBQztLQUM1QixpQkFBRSxRQUFHLFNBQU8sRUFBQyxJQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFDO09BQzFHLGlCQUFDLFNBQUksS0FBSyxFQUFDLGdCQUFnQixFQUFBLENBQU87T0FDbEMsaUJBQUMsU0FBSSxLQUFLLEVBQUMsTUFBTSxFQUFDLGVBQWEsRUFBQyxJQUFLLENBQUMsUUFBUSxFQUFDO1FBQzlDLGlCQUFDLFVBQUssS0FBSyxFQUFDLFdBQVcsRUFBQSxFQUFDLElBQUssQ0FBQyxJQUFJLENBQVE7UUFDMUMsaUJBQUMsVUFBSyxLQUFLLEVBQUMsVUFBVSxFQUFBO1NBQ3JCLElBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLE9BQU8sRUFBQztTQUM3QyxpQkFBRSxVQUFLLEtBQUssRUFBQyxjQUFjLEVBQUEsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQVE7WUFDakgsRUFBRSxJQUFJLENBQUNDLE1BQUksQ0FBQyxDQUFDLElBQUksRUFBRTtTQUNkO1FBQ1AsaUJBQUMsVUFBSyxLQUFLLEVBQUMsVUFBVSxFQUFBO1NBQ3JCLElBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLE9BQU8sRUFBQztTQUM3QyxpQkFBRSxVQUFLLEtBQUssRUFBQyxjQUFjLEVBQUEsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQVE7WUFDakgsRUFBRSxJQUFJLENBQUNBLE1BQUksQ0FBQyxDQUFDLElBQUksRUFBRTtTQUNkO1FBQ1AsaUJBQUMsVUFBSyxLQUFLLEVBQUMsTUFBTSxFQUFBO1NBQ2pCLElBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLEdBQUcsRUFBQztTQUNqQyxpQkFBRSxVQUFLLEtBQUssRUFBQyxpQkFBaUIsRUFBQSxFQUFDLEdBQUksQ0FBUTtZQUMxQyxFQUFFLElBQUksQ0FBQ0EsTUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ2Q7UUFDUCxpQkFBQyxVQUFLLEtBQUssRUFBQyxPQUFPLEVBQUE7U0FDbEIsSUFBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsSUFBSSxFQUFDO1NBQ3BDLGlCQUFFLE9BQUUsSUFBSSxFQUFDLElBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQSxFQUFDLElBQUssQ0FBQyxJQUFJLENBQUs7WUFDcEQsRUFBRSxJQUFJLENBQUNBLE1BQUksQ0FBQyxDQUFDO1NBQ1I7UUFDRjtPQUNOLGlCQUFDLFlBQU8sS0FBSyxFQUFDLFdBQVcsRUFBQSxFQUFDLEdBQUMsQ0FBUztPQUNoQztRQUNMLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1Y7SUFDTCxpQkFBQyxZQUFJO0tBQ0osaUJBQUMsYUFBSztNQUNMLGlCQUFDLFdBQU0sSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLHdCQUF3QixFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUEsQ0FBRTtNQUNqRyxJQUFLLENBQUMsS0FBSyxDQUFDLFFBQVE7TUFDcEIsaUJBQUUsY0FBUyxXQUFTLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBRTtTQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztNQUNyQyxpQkFBRSxZQUFPLElBQUksRUFBQyxJQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsYUFBYSxFQUFBO1FBQ3pFLElBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsVUFBVSxFQUFDO1FBQ3hDLGlCQUFFLFlBQU8sS0FBSyxFQUFDLFVBQVcsRUFBQyxFQUFDLFVBQVcsQ0FBVTtXQUNoRCxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNOO1NBQ04sRUFBRTtNQUNDO0tBQ1IsaUJBQUMsWUFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUEsRUFBQyxLQUFHLENBQVM7S0FDaEQ7SUFDRjtHQUNMO0NBQ0YsQ0FBQTs7QUFFRixtQkFBQyxNQUFVLG1CQUFHLEVBQUUsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFBO0FBQ2hDLG1CQUFDLE1BQVUsbUJBQUc7Q0FDYixPQUFRO0VBQ1AseUNBQTBDLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLEdBQUc7R0FDcEQsSUFBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7R0FDNUMsSUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztHQUM3QixJQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCO0dBQ0YsU0FBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUN6QixDQUFDO0VBQ0gsMkJBQTRCLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLEdBQUc7R0FDdEMsSUFBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7R0FDNUMsSUFBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoRCxTQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLFNBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsTUFBTTtJQUNQLFNBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCO0dBQ0QsQ0FBQztFQUNILFlBQWEsRUFBRSxDQUFDLEtBQUssZ0JBQUEsQ0FBQyxLQUFLLEVBQUU7R0FDNUIsSUFBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtJQUMxQixJQUFLLENBQUMsa0JBQWtCLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7SUFDakMsSUFBSyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO0lBQ2pDLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU07SUFDUCxJQUFLLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsSUFBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsSUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0tBQ3JCLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sRUFBQyxTQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO0tBQ3BILE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0tBQzVCLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sRUFBQyxTQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO0tBQ3BILE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0tBQy9DLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2pGLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7S0FDcEQsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFDRDtHQUNELEVBQUUsT0FBTyxrQkFBQSxDQUFDLEtBQUssRUFBRTtHQUNsQixJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO0lBQzdILEtBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixJQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDckgsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0M7R0FDRCxFQUFFLElBQUksZUFBQSxHQUFHOzs7R0FDVixVQUFXLENBQUMsWUFBRztJQUNkLE1BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDUixDQUFDO0VBQ0gsZUFBZ0IsRUFBRSxDQUFDLEtBQUssZ0JBQUEsR0FBRztHQUMxQixJQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0dBQ3BELElBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxHQUFBLENBQUMsQ0FBQztHQUN4RSxJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMxQyxJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7R0FDcEUsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNuRCxDQUFDO0VBQ0gsb0JBQXFCLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLEdBQUc7R0FDL0IsSUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0dBQ3pDLElBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0dBQzVDLElBQUssS0FBSyxHQUFHLElBQUksQ0FBQztHQUNsQixPQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBRztJQUMzQyxPQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQUc7SUFDWCxLQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNELFNBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0dBQ0gsQ0FBQztFQUNILFlBQWEsRUFBRSxDQUFDLEtBQUssZ0JBQUEsR0FBRztHQUN2QixJQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7R0FDekMsSUFBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7R0FDNUMsT0FBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFHO0lBQ25ELFNBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0dBQ0gsQ0FBQztFQUNILGNBQWUsRUFBRSxDQUFDLEtBQUssZ0JBQUEsR0FBRztHQUN6QixJQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO0dBQy9HLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQzVDLElBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNwQyxDQUFDO0VBQ0gsVUFBVyxFQUFFLENBQUMsVUFBVSxxQkFBQSxDQUFDLEtBQUssRUFBRTtHQUMvQixJQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ3hELEtBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0dBQ2pGLEtBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNmLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUM7RUFDSCxNQUFPLEVBQUUsQ0FBQyxNQUFNLGlCQUFBLENBQUMsS0FBSyxFQUFFO0dBQ3ZCLEtBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztHQUN4QixJQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztHQUM1QyxJQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztHQUM3QixJQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0lBQ2xDLFNBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekM7R0FDRixTQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ3RCLElBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7R0FDcEMsQ0FBQztFQUNGLENBQUM7Q0FDRixDQUFBOztBQUVGLG1CQUFDLE9BQU8scUJBQUMsQ0FBQyxFQUFFO0NBQ1gsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0NBQy9CLENBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
