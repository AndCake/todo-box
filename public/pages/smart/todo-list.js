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

var styles = (function (code) { return code; })("todo-list ul{list-style-type:none;margin:0;padding:0}todo-list li{margin:0;padding:.25em 0;display:-webkit-box;display:-ms-flexbox;display:flex}todo-list li.todo-editing{opacity:.5}todo-list li:hover{background:#de94ab}todo-list li button{border:0;margin-left:auto}todo-list .todo{display:inline-block}todo-list .todo_text{display:block}todo-list .todo[data-priority^=\"(\"]{color:#983351;font-weight:700}todo-list .todo[data-priority^=\"(A)\"]{font-size:120%}todo-list .todo[data-priority^=\"(B)\"]{font-size:110%}todo-list .todo[data-priority^=\"(C)\"]{font-size:100%}todo-list .todo[data-priority^=\"(D)\"]{font-size:90%}todo-list .todo[data-priority^=\"(E)\"]{font-size:80%}todo-list .todo_context{color:#369;font-weight:700;margin-right:.5em}todo-list .todo_project{color:#936;font-style:italic;margin-right:.5em}todo-list .todo_tag{border:1px solid #ccc;color:#4c4c4c;background:#e5e5e5;border-radius:3px;margin-right:.5em;padding:0 .25em}todo-list form{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:.5em;border-top:1px solid #ccc;padding-top:.5em;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;position:relative}todo-list form label{display:block;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}todo-list form calendar{position:absolute;left:1em;bottom:2em}todo-list form input[type=text]{width:calc(100% - 10px)}", {});

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
							this.createNode( 'input', { type: "checkbox" }),
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
		}},
		'li .todo_text': {click: function click() {
			var taskId = this.parentNode.parentNode.dataset.id;
			var task = this.getHost().props.tasks.find(function (task) { return task.id === taskId; });
			this.getHost().setProps('editing', task);
			this.getHost().querySelector('form input').value = task.toString();
			this.getHost().querySelector('form input').focus();
		}},
		'li input': {change: function change() {
			var taskId = this.parentNode.dataset.id;
			var taskStore = this.getHost().props.store;
			this.checked = false;
			taskStore.do(taskId);
		}},
		'.js-delete': {click: function click() {
			var taskId = this.parentNode.dataset.id;
			var taskStore = this.getHost().props.store;
			taskStore.delete(taskId);
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
				this.getHost().props.editing = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlcy9zbWFydC90b2RvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLWxpc3QuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0c3RvcmU6IHt9LFxuXHRcdFx0ZWRpdGluZzogbnVsbCxcblx0XHRcdHRhc2tzOiBbXSxcblx0XHRcdHByb2plY3RzOiBbXSxcblx0XHRcdGNvbnRleHRzOiBbXSxcblx0XHRcdHN1Z2dlc3Rpb25zOiBbXSxcblx0XHRcdGZpbHRlcnM6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tbGlzdF9fZmlsdGVyXCI+XG5cdFx0XHRcdFx0e0FycmF5LmlzQXJyYXkoZGF0YS5wcm9wcy5maWx0ZXJzKSA/IGRhdGEucHJvcHMuZmlsdGVycy5tYXAoKGZpbHRlciA9PiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YWx1ZT17ZmlsdGVyfT57ZmlsdGVyID09PSB0cnVlID8gJ2RvbmUnIDogZmlsdGVyID09PSBmYWxzZSA/ICdvcGVuJyA6IGZpbHRlcn08L2J1dHRvbj5cblx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKSA6ICcnfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHtkYXRhLnByb3BzLnRhc2tzLm1hcCgodGFzayA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkgZGF0YS1pZD17dGFzay5pZH0gY2xhc3M9e2RhdGEucHJvcHMuZWRpdGluZyAmJiBkYXRhLnByb3BzLmVkaXRpbmcuaWQgPT09IHRhc2suaWQgPyAndG9kby1lZGl0aW5nJyA6ICcnfT5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvZG9cIiBkYXRhLXByaW9yaXR5PXt0YXNrLnByaW9yaXR5fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGV4dFwiPnt0YXNrLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY29udGV4dHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMubWFwKChjb250ZXh0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX2NvbnRleHRcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKGNvbnRleHQpID49IDAgPyAnJyA6IGNvbnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMubWFwKChwcm9qZWN0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX3Byb2plY3RcIj57ZGF0YS5wcm9wcy5maWx0ZXJzICYmIGRhdGEucHJvcHMuZmlsdGVycy5pbmRleE9mKHByb2plY3QpID49IDAgPyAnJyA6IHByb2plY3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGFnc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Rhc2sudGFncyAmJiB0YXNrLnRhZ3MubWFwKCh0YWcgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG9fdGFnIGpzLXRhZ1wiPnt0YWd9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImpzLWRlbGV0ZVwiPng8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSkuYmluZCh0aGlzKSl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyB0YXNrIGhlcmUuLi5cIiBhdXRvY29tcGxldGU9XCJvZmZcIi8+XG5cdFx0XHRcdFx0XHR7ZGF0YS5wcm9wcy5jYWxlbmRhciA/IChcblx0XHRcdFx0XHRcdFx0PGNhbGVuZGFyIGRhdGEtZGF0ZT17ZGF0YS5wcm9wcy5jYWxlbmRhcn0vPlxuXHRcdFx0XHRcdFx0KSA6IGRhdGEucHJvcHMuc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBzaXplPXtNYXRoLm1pbihkYXRhLnByb3BzLnN1Z2dlc3Rpb25zLmxlbmd0aCwgNSl9IGlkPVwic3VnZ2VzdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHR7ZGF0YS5wcm9wcy5zdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24gPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17c3VnZ2VzdGlvbn0+e3N1Z2dlc3Rpb259PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSl9XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0KSA6ICcnfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJqcy1hZGQtdGFza1wiPkFkZDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHN0eWxlcygpIHsgcmV0dXJuIHN0eWxlczsgfVxuXHRnZXQgZXZlbnRzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnLnRvZG9fY29udGV4dCwgLnRvZG9fcHJvamVjdCwgLnRvZG9fdGFnJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza1N0b3JlID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuc3RvcmU7XG5cdFx0XHRcdGxldCBmaWx0ZXIgPSB0aGlzLmlubmVyVGV4dDtcblx0XHRcdFx0aWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy10YWcnKSkge1xuXHRcdFx0XHRcdGZpbHRlciA9IGZpbHRlci5zcGxpdCgnOicpWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhc2tTdG9yZS5maWx0ZXIoZmlsdGVyKTtcblx0XHRcdH19LFxuXHRcdFx0Jy50b2RvLWxpc3RfX2ZpbHRlciBidXR0b24nOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0aWYgKFsnZmFsc2UnLCAndHJ1ZSddLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMCkge1xuXHRcdFx0XHRcdHRhc2tTdG9yZS5maWx0ZXIodHJ1ZSk7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcihmYWxzZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmZpbHRlcih0aGlzLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fX0sXG5cdFx0XHQnZm9ybSBpbnB1dCc6IHtrZXl1cChldmVudCkge1xuXHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzgpIHtcblx0XHRcdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5zZWxlY3RlZEluZGV4IC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcblx0XHRcdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5zZWxlY3RlZEluZGV4ICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCBbXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGNoYXIgPSB0aGlzLnZhbHVlLm1hdGNoKC8oWytAXVxcdyopJC9nKSB8fCAnJztcblx0XHRcdFx0XHRjaGFyID0gY2hhclswXSB8fCAnJztcblx0XHRcdFx0XHRpZiAoY2hhclswXSA9PT0gJysnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCB0aGlzLmdldEhvc3QoKS5wcm9wcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmluZGV4T2YoY2hhcikgPj0gMCkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2hhclswXSA9PT0gJ0AnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnc3VnZ2VzdGlvbnMnLCB0aGlzLmdldEhvc3QoKS5wcm9wcy5jb250ZXh0cy5maWx0ZXIoY29udGV4dCA9PiBjb250ZXh0LmluZGV4T2YoY2hhcikgPj0gMCkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy52YWx1ZS5tYXRjaCgvZHVlOltcXGRUOi1dKiQvZykpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjYWxlbmRhcicsIHRoaXMudmFsdWUubWF0Y2goL2R1ZTooW1xcZDotXSopLylbMV0gfHwgJzEnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZ2V0SG9zdCgpLnByb3BzLmNhbGVuZGFyICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NhbGVuZGFyJywgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwga2V5ZG93bihldmVudCkge1xuXHRcdFx0XHRpZiAoKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSAmJiB0aGlzLm5leHRFbGVtZW50U2libGluZyAmJiB0aGlzLm5leHRFbGVtZW50U2libGluZy5zZWxlY3RlZEluZGV4ID49IDApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoLyhbK0BdXFx3KikkLywgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUgfHwgJycpICsgJyAnO1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdzdWdnZXN0aW9ucycsIFtdKTtcblx0XHRcdFx0fVxuXHRcdFx0fX0sXG5cdFx0XHQnbGkgLnRvZG9fdGV4dCc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IHRhc2tJZCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0XHRcdGxldCB0YXNrID0gdGhpcy5nZXRIb3N0KCkucHJvcHMudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdlZGl0aW5nJywgdGFzayk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gaW5wdXQnKS52YWx1ZSA9IHRhc2sudG9TdHJpbmcoKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpLmZvY3VzKCk7XG5cdFx0XHR9fSxcblx0XHRcdCdsaSBpbnB1dCc6IHtjaGFuZ2UoKSB7XG5cdFx0XHRcdGxldCB0YXNrSWQgPSB0aGlzLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdFx0dGFza1N0b3JlLmRvKHRhc2tJZCk7XG5cdFx0XHR9fSxcblx0XHRcdCcuanMtZGVsZXRlJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgdGFza0lkID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0XHRcdGxldCB0YXNrU3RvcmUgPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5zdG9yZTtcblx0XHRcdFx0dGFza1N0b3JlLmRlbGV0ZSh0YXNrSWQpO1xuXHRcdFx0fX0sXG5cdFx0XHQnI3N1Z2dlc3Rpb25zJzoge2NsaWNrKCkge1xuXHRcdFx0XHR0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUgPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUucmVwbGFjZSgvKFsrQF1cXHcqKSQvLCB0aGlzLnZhbHVlKSArICcgJztcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ3N1Z2dlc3Rpb25zJywgW10pO1xuXHRcdFx0XHR0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcblx0XHRcdH19LFxuXHRcdFx0J2NhbGVuZGFyJzoge2RhdGVjaG9zZW4oZXZlbnQpIHtcblx0XHRcdFx0bGV0IGlucHV0ID0gdGhpcy5nZXRIb3N0KCkucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpO1xuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL2R1ZTpbXFxkVDotXSokLywgJ2R1ZTonICsgZXZlbnQuZGV0YWlsKSArICcgJztcblx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NhbGVuZGFyJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQnZm9ybSc6IHtzdWJtaXQoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGV0IHRhc2tTdG9yZSA9IHRoaXMuZ2V0SG9zdCgpLnByb3BzLnN0b3JlO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnRhc2sudmFsdWU7XG5cdFx0XHRcdGlmICh0aGlzLmdldEhvc3QoKS5wcm9wcy5lZGl0aW5nKSB7XG5cdFx0XHRcdFx0dGFza1N0b3JlLmRlbGV0ZSh0aGlzLmdldEhvc3QoKS5wcm9wcy5lZGl0aW5nLmlkKTtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5wcm9wcy5lZGl0aW5nID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrU3RvcmUuYWRkKHZhbHVlKTtcblx0XHRcdFx0dGhpcy50YXNrICYmICh0aGlzLnRhc2sudmFsdWUgPSAnJyk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL2NhbGVuZGFyLmpzJyk7XG5cdH1cbn0iXSwibmFtZXMiOlsidGhpcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFxQixRQUFRLEdBQUMsaUJBQ2xCLEdBQUc7Q0FDZCxJQUFLLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0NBQ3hCLEtBQU0sQ0FBQyxLQUFLLEdBQUc7RUFDZCxLQUFNLEVBQUUsRUFBRTtFQUNWLE9BQVEsRUFBRSxJQUFJO0VBQ2QsS0FBTSxFQUFFLEVBQUU7RUFDVixRQUFTLEVBQUUsRUFBRTtFQUNiLFFBQVMsRUFBRSxFQUFFO0VBQ2IsV0FBWSxFQUFFLEVBQUU7RUFDaEIsT0FBUSxFQUFFLEtBQUs7RUFDZCxDQUFDO0NBQ0Y7O21EQUFBOztBQUVGLG1CQUFDLE1BQU0sb0JBQUMsSUFBSSxFQUFFOzs7Q0FDYjtFQUND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
