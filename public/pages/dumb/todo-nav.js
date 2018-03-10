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

var styles = (function (code) { return code; })("todo-nav{display:block;background:#fff;-webkit-box-shadow:0 0 16px rgba(0,0,0,.25);box-shadow:0 0 16px rgba(0,0,0,.25);margin-right:1em;font-family:sans-serif}todo-nav nav{padding:1em}todo-nav .close-nav{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;color:transparent;background:#fff;width:24px;height:24px;position:relative;float:right}todo-nav .close-nav:before{content:\"\";border-left:3px solid #191919;border-bottom:3px solid #191919;display:inline-block;width:12px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:4px;margin-left:3px}todo-nav .close-nav:hover{color:transparent;background:#fff}todo-nav .close-nav:after{content:\"\";display:inline-block;width:24px;height:3px;background:#191919;position:absolute;top:10px;left:0}@media screen and (min-width:687px){todo-nav .close-nav{display:none}}todo-nav h3{font-size:16px;margin:0}todo-nav ul{list-style-type:none;padding:8px 0;margin:0;border-bottom:1px solid #e5e5e5;margin-bottom:1em}todo-nav li{line-height:32px;height:32px;padding:0;padding-left:24px;font-size:15px;cursor:pointer}todo-nav li.selected,todo-nav li:hover{background:#8b75a9;color:#fff;-webkit-box-shadow:0 0 3px rgba(0,0,0,.25);box-shadow:0 0 3px rgba(0,0,0,.25)}@media screen and (max-width:686px){todo-nav li{line-height:48px;height:48px;padding-left:16px;font-size:16px}}", {});

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
				this.createNode( 'button', { class: "close-nav", type: "button" }, "Close"),
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
		button: {click: function click() {
			var event = new Event('close', {
				bubbles: true,
				cancelable: false
			});
			this.getHost().dispatchEvent(event);
		}},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1uYXYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvdG9kby1uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLW5hdi5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTmF2IHtcblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNsb3NlLW5hdlwiIHR5cGU9XCJidXR0b25cIj5DbG9zZTwvYnV0dG9uPlxuXHRcdFx0XHQ8aDM+Q29udGV4dHM8L2gzPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjb250ZXh0c1wiPlxuXHRcdFx0XHRcdHtkYXRhLnByb3BzLmNvbnRleHRzLm1hcCgoY29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9e2RhdGEucHJvcHMuZmlsdGVycyAmJiBkYXRhLnByb3BzLmZpbHRlcnMuaW5kZXhPZihjb250ZXh0KSA+PSAwID8gJ3NlbGVjdGVkJyA6ICcnfT57Y29udGV4dH08L2xpPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8aDM+UHJvamVjdHM8L2gzPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJwcm9qZWN0c1wiPlxuXHRcdFx0XHRcdHtkYXRhLnByb3BzLnByb2plY3RzLm1hcCgocHJvamVjdCA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9e2RhdGEucHJvcHMuZmlsdGVycyAmJiBkYXRhLnByb3BzLmZpbHRlcnMuaW5kZXhPZihwcm9qZWN0KSA+PSAwID8gJ3NlbGVjdGVkJyA6ICcnfT57cHJvamVjdH08L2xpPlxuXHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YnV0dG9uOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCgnY2xvc2UnLCB7XG5cdFx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0XHR9fSxcblx0XHRcdGxpOiB7Y2xpY2soKSB7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnZmlsdGVyJywge1xuXHRcdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlubmVyVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHRzdG9yZTogbnVsbFxuXHRcdH07XG5cdH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFxQixPQUFPLEdBQUMsZ0JBMENqQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUN4QixLQUFNLENBQUMsS0FBSyxHQUFHO0VBQ2QsUUFBUyxFQUFFLEVBQUU7RUFDYixRQUFTLEVBQUUsRUFBRTtFQUNiLE9BQVEsRUFBRSxLQUFLO0VBQ2YsS0FBTSxFQUFFLElBQUk7RUFDWCxDQUFDO0NBQ0Y7O21EQUFBOztrQkFqREQsTUFBTSxvQkFBQyxJQUFJLEVBQUU7Q0FDYjtFQUNDLGlCQUFFLFdBQUc7SUFDSCxpQkFBQyxZQUFPLEtBQUssRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQSxFQUFDLE9BQUssQ0FBUztJQUN0RCxpQkFBQyxVQUFFLEVBQUMsVUFBUSxFQUFLO0lBQ2pCLGlCQUFDLFFBQUcsS0FBSyxFQUFDLFVBQVUsRUFBQTtLQUNuQixJQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFBLE9BQU8sRUFBQztLQUNsQyxpQkFBRSxRQUFHLEtBQUssRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUMsRUFBQyxPQUFRLENBQU07UUFDM0csRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVjtJQUNMLGlCQUFDLFVBQUUsRUFBQyxVQUFRLEVBQUs7SUFDakIsaUJBQUMsUUFBRyxLQUFLLEVBQUMsVUFBVSxFQUFBO0tBQ25CLElBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQUEsT0FBTyxFQUFDO0tBQ2xDLGlCQUFFLFFBQUcsS0FBSyxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBQyxFQUFDLE9BQVEsQ0FBTTtRQUMzRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNWO0lBQ0E7R0FDTDtDQUNGLENBQUE7O0FBRUYsbUJBQUMsTUFBVSxtQkFBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQTtBQUNoQyxtQkFBQyxNQUFVLG1CQUFHO0NBQ2IsT0FBUTtFQUNQLE1BQU8sRUFBRSxDQUFDLEtBQUssZ0JBQUEsR0FBRztHQUNqQixJQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7SUFDL0IsT0FBUSxFQUFFLElBQUk7SUFDZCxVQUFXLEVBQUUsS0FBSztJQUNqQixDQUFDLENBQUM7R0FDSixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ3BDLENBQUM7RUFDSCxFQUFHLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLEdBQUc7R0FDYixJQUFLLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7SUFDdEMsT0FBUSxFQUFFLElBQUk7SUFDZCxVQUFXLEVBQUUsS0FBSztJQUNsQixNQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7SUFDdEIsQ0FBQyxDQUFDO0dBQ0osSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUNwQyxDQUFDO0VBQ0YsQ0FBQztDQUNGLENBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
