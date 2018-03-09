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

var styles = (function (code) { return code; })("todo-nav{display:block;background:#fff;-webkit-box-shadow:0 0 16px rgba(0,0,0,.25);box-shadow:0 0 16px rgba(0,0,0,.25);margin-right:1em;font-family:sans-serif}todo-nav nav{padding:1em}todo-nav h3{font-size:16px;margin:0}todo-nav ul{list-style-type:none;padding:8px 0;margin:0;border-bottom:1px solid #e5e5e5;margin-bottom:1em}todo-nav li{line-height:32px;height:32px;padding:0;padding-left:24px;font-size:15px;cursor:pointer}todo-nav li.selected,todo-nav li:hover{background:#8b75a9;color:#fff;-webkit-box-shadow:0 0 3px rgba(0,0,0,.25);box-shadow:0 0 3px rgba(0,0,0,.25)}@media screen and (max-width:686px){todo-nav li{line-height:48px;height:48px;padding-left:16px;font-size:16px}}", {});

var TodoNav = function TodoNav() {
	var _this = this || {};
	_this.props = {
		projects: [],
		contexts: [],
		filters: false,
		store: null
	};
};

var prototypeAccessors = { styles: {},events: {} };

TodoNav.prototype.render = function render (data) {
	return (
		this.createNode( 'nav', null,
				this.createNode( 'h3', null, "Contexts" ),
				this.createNode( 'ul', { class: "contexts" },
					data.props.contexts.map((function (context) { return (
					this.createNode( 'li', { class: data.props.filters && data.props.filters.indexOf(context) >= 0 ? 'selected' : '' }, context)
				); }).bind(this))
				),
				this.createNode( 'h3', null, "Projects" ),
				this.createNode( 'ul', { class: "projects" },
					data.props.projects.map((function (project) { return (
					this.createNode( 'li', { class: data.props.filters && data.props.filters.indexOf(project) >= 0 ? 'selected' : '' }, project)
				); }).bind(this))
				)
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		li: {click: function click() {
			var event = new CustomEvent('filter', {
				bubbles: true,
				cancelable: false,
				detail: this.innerText
			});
			this.getHost().dispatchEvent(event);
		}}
	};
};

Object.defineProperties( TodoNav.prototype, prototypeAccessors );

return TodoNav;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1uYXYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvdG9kby1uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLW5hdi5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTmF2IHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PGgzPkNvbnRleHRzPC9oMz5cblx0XHRcdFx0PHVsIGNsYXNzPVwiY29udGV4dHNcIj5cblx0XHRcdFx0XHR7ZGF0YS5wcm9wcy5jb250ZXh0cy5tYXAoKGNvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPXtkYXRhLnByb3BzLmZpbHRlcnMgJiYgZGF0YS5wcm9wcy5maWx0ZXJzLmluZGV4T2YoY29udGV4dCkgPj0gMCA/ICdzZWxlY3RlZCcgOiAnJ30+e2NvbnRleHR9PC9saT5cblx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PGgzPlByb2plY3RzPC9oMz5cblx0XHRcdFx0PHVsIGNsYXNzPVwicHJvamVjdHNcIj5cblx0XHRcdFx0XHR7ZGF0YS5wcm9wcy5wcm9qZWN0cy5tYXAoKHByb2plY3QgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPXtkYXRhLnByb3BzLmZpbHRlcnMgJiYgZGF0YS5wcm9wcy5maWx0ZXJzLmluZGV4T2YocHJvamVjdCkgPj0gMCA/ICdzZWxlY3RlZCcgOiAnJ30+e3Byb2plY3R9PC9saT5cblx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxpOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnZmlsdGVyJywge1xuXHRcdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlubmVyVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHRzdG9yZTogbnVsbFxuXHRcdH07XG5cdH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFxQixPQUFPLEdBQUMsZ0JBa0NqQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUN4QixLQUFNLENBQUMsS0FBSyxHQUFHO0VBQ2QsUUFBUyxFQUFFLEVBQUU7RUFDYixRQUFTLEVBQUUsRUFBRTtFQUNiLE9BQVEsRUFBRSxLQUFLO0VBQ2YsS0FBTSxFQUFFLElBQUk7RUFDWCxDQUFDO0NBQ0Y7O21EQUFBOztrQkF6Q0QsTUFBTSxvQkFBQyxJQUFJLEVBQUU7Q0FDYjtFQUNDLGlCQUFFLFdBQUc7SUFDSCxpQkFBQyxVQUFFLEVBQUMsVUFBUSxFQUFLO0lBQ2pCLGlCQUFDLFFBQUcsS0FBSyxFQUFDLFVBQVUsRUFBQTtLQUNuQixJQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLE9BQU8sRUFBQztLQUNsQyxpQkFBRSxRQUFHLEtBQUssRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUMsRUFBQyxPQUFRLENBQU07UUFDM0csRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVjtJQUNMLGlCQUFDLFVBQUUsRUFBQyxVQUFRLEVBQUs7SUFDakIsaUJBQUMsUUFBRyxLQUFLLEVBQUMsVUFBVSxFQUFBO0tBQ25CLElBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsT0FBTyxFQUFDO0tBQ2xDLGlCQUFFLFFBQUcsS0FBSyxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBQyxFQUFDLE9BQVEsQ0FBTTtRQUMzRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNWO0lBQ0E7R0FDTDtDQUNGLENBQUE7O0FBRUYsbUJBQUMsTUFBVSxtQkFBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQTtBQUNoQyxtQkFBQyxNQUFVLG1CQUFHO0NBQ2IsT0FBUTtFQUNQLEVBQUcsRUFBRSxDQUFDLEtBQUssZ0JBQUEsR0FBRztHQUNiLElBQUssS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtJQUN0QyxPQUFRLEVBQUUsSUFBSTtJQUNkLFVBQVcsRUFBRSxLQUFLO0lBQ2xCLE1BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztJQUN0QixDQUFDLENBQUM7R0FDSixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ3BDLENBQUM7RUFDRixDQUFDO0NBQ0YsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OyJ9
