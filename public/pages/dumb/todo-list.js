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

var TodoList = function TodoList() {
	var _this = this || {};
	_this.props = {
		tasks: []
	};
};

TodoList.prototype.render = function render (data) {
		var this$1 = this;

	return (
		this.createNode( 'div', { class: "todo-list" },
				this.createNode( 'ul', null,
					data.props.tasks.map((function (task, id) { return (
					this.createNode( 'li', { 'data-id': id },
							this.createNode( 'input', { type: "checkbox" }),
							this.createNode( 'div', { class: "todo", 'data-priority': task.priority },
								this.createNode( 'span', { class: "todo_text" }, task.text),
								this.createNode( 'span', { class: "contexts" },
									task.contexts && task.contexts.map((function (context) { return (
									this.createNode( 'span', { class: "todo_context" }, context)
								); }).bind(this$1)) || ''
								),
								this.createNode( 'span', { class: "projects" },
									task.projects && task.projects.map((function (project) { return (
									this.createNode( 'span', { class: "todo_project" }, project)
								); }).bind(this$1)) || ''
								),
								this.createNode( 'span', { class: "tags" },
									task.tags && task.tags.map((function (tag) { return (
									this.createNode( 'span', { class: "todo_tag" }, tag)
								); }).bind(this$1)) || ''
								)
							)
						)
				); }).bind(this))
				),
				this.createNode( 'form', null,
					this.createNode( 'label', null,
						this.createNode( 'input', { type: "text", value: "", placeholder: "Enter new task here..." })
					)
				)
			)
	);
};

return TodoList;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlcy9kdW1iL3RvZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHR0YXNrczogW11cblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e2RhdGEucHJvcHMudGFza3MubWFwKCgodGFzaywgaWQpID0+IChcblx0XHRcdFx0XHRcdDxsaSBkYXRhLWlkPXtpZH0+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvXCIgZGF0YS1wcmlvcml0eT17dGFzay5wcmlvcml0eX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX3RleHRcIj57dGFzay50ZXh0fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNvbnRleHRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGFzay5jb250ZXh0cyAmJiB0YXNrLmNvbnRleHRzLm1hcCgoY29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidG9kb19jb250ZXh0XCI+e2NvbnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSkgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicHJvamVjdHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMubWFwKChwcm9qZWN0ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b2RvX3Byb2plY3RcIj57cHJvamVjdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKSB8fCAnJ31cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0YWdzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGFzay50YWdzICYmIHRhc2sudGFncy5tYXAoKHRhZyA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidG9kb190YWdcIj57dGFnfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkpLmJpbmQodGhpcykpIHx8ICcnfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHRhc2sgaGVyZS4uLlwiLz5cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59Il0sIm5hbWVzIjpbInRoaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLElBQU0sUUFBUSxHQUFDLGlCQUNsQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUN4QixLQUFNLENBQUMsS0FBSyxHQUFHO0VBQ2QsS0FBTSxFQUFFLEVBQUU7RUFDVCxDQUFDO0NBQ0YsQ0FBQTs7QUFFRixtQkFBQyxNQUFNLG9CQUFDLElBQUksRUFBRTs7O0NBQ2I7RUFDQyxpQkFBRSxTQUFJLEtBQUssRUFBQyxXQUFXLEVBQUE7SUFDckIsaUJBQUMsVUFBRTtLQUNGLElBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtLQUNsQyxpQkFBRSxRQUFHLFNBQU8sRUFBQyxFQUFHLEVBQUM7T0FDZixpQkFBQyxXQUFNLElBQUksRUFBQyxVQUFVLEVBQUEsQ0FBRTtPQUN4QixpQkFBQyxTQUFJLEtBQUssRUFBQyxNQUFNLEVBQUMsZUFBYSxFQUFDLElBQUssQ0FBQyxRQUFRLEVBQUM7UUFDOUMsaUJBQUMsVUFBSyxLQUFLLEVBQUMsV0FBVyxFQUFBLEVBQUMsSUFBSyxDQUFDLElBQUksQ0FBUTtRQUMxQyxpQkFBQyxVQUFLLEtBQUssRUFBQyxVQUFVLEVBQUE7U0FDckIsSUFBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsT0FBTyxFQUFDO1NBQzdDLGlCQUFFLFVBQUssS0FBSyxFQUFDLGNBQWMsRUFBQSxFQUFDLE9BQVEsQ0FBUTtZQUMzQyxFQUFFLElBQUksQ0FBQ0EsTUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ2Q7UUFDUCxpQkFBQyxVQUFLLEtBQUssRUFBQyxVQUFVLEVBQUE7U0FDckIsSUFBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsT0FBTyxFQUFDO1NBQzdDLGlCQUFFLFVBQUssS0FBSyxFQUFDLGNBQWMsRUFBQSxFQUFDLE9BQVEsQ0FBUTtZQUMzQyxFQUFFLElBQUksQ0FBQ0EsTUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ2Q7UUFDUCxpQkFBQyxVQUFLLEtBQUssRUFBQyxNQUFNLEVBQUE7U0FDakIsSUFBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsR0FBRyxFQUFDO1NBQ2pDLGlCQUFFLFVBQUssS0FBSyxFQUFDLFVBQVUsRUFBQSxFQUFDLEdBQUksQ0FBUTtZQUNuQyxFQUFFLElBQUksQ0FBQ0EsTUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ2Q7UUFDRjtPQUNGO1FBQ0wsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVjtJQUNMLGlCQUFDLFlBQUk7S0FDSixpQkFBQyxhQUFLO01BQ0wsaUJBQUMsV0FBTSxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLHdCQUF3QixFQUFBLENBQUU7TUFDM0Q7S0FDRjtJQUNGO0dBQ0w7Q0FDRixDQUFBOzs7Ozs7Ozs7Ozs7OyJ9
