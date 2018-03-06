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

var Zino;

var Home = function Home(x, zino) {
	var _this = this || {};
	Zino = zino;

	_this.props = {
		addition: ''
	};
};

Home.prototype.render = function render (data) {
	return (
		this.createNode( 'div', { class: "home" },
				this.createNode( 'h1', null, "Welcome!" ),
				this.createNode( 'p', null, "If you can see this text, then the zino base component code is running on your server-", data.props.addition, "side." )
			)
	);
};

Home.prototype.onmount = function onmount () {
		var this$1 = this;

	if (Zino.isBrowser) {
		setTimeout(function () {
			this$1.getHost().setProps('addition', ' and client-');
		}, 50);
	}
};

return Home;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2hvbWUuY3NzJztcblxubGV0IFppbm87XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuXHRjb25zdHJ1Y3Rvcih4LCB6aW5vKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRaaW5vID0gemlubztcblxuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0YWRkaXRpb246ICcnXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJob21lXCI+XG5cdFx0XHRcdDxoMT5XZWxjb21lITwvaDE+XG5cdFx0XHRcdDxwPklmIHlvdSBjYW4gc2VlIHRoaXMgdGV4dCwgdGhlbiB0aGUgemlubyBiYXNlIGNvbXBvbmVudCBjb2RlIGlzIHJ1bm5pbmcgb24geW91ciBzZXJ2ZXIte2RhdGEucHJvcHMuYWRkaXRpb259c2lkZS48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0b25tb3VudCgpIHtcblx0XHRpZiAoWmluby5pc0Jyb3dzZXIpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnYWRkaXRpb24nLCAnIGFuZCBjbGllbnQtJyk7XG5cdFx0XHR9LCA1MCk7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOlsibGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsSUFBSSxJQUFJLENBQUM7O0FBRVQsSUFBcUIsSUFBSSxHQUFDLGFBQ2QsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFO0NBQ3JCLElBQUssS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDeEIsSUFBSyxHQUFHLElBQUksQ0FBQzs7Q0FFYixLQUFNLENBQUMsS0FBSyxHQUFHO0VBQ2QsUUFBUyxFQUFFLEVBQUU7RUFDWixDQUFDO0NBQ0YsQ0FBQTs7QUFFRixlQUFDLE1BQU0sb0JBQUMsSUFBSSxFQUFFO0NBQ2I7RUFDQyxpQkFBRSxTQUFJLEtBQUssRUFBQyxNQUFNLEVBQUE7SUFDaEIsaUJBQUMsVUFBRSxFQUFDLFVBQVEsRUFBSztJQUNqQixpQkFBQyxTQUFDLEVBQUMsd0ZBQXNGLEVBQUEsSUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsT0FBSyxFQUFJO0lBQ2xIO0dBQ0w7Q0FDRixDQUFBOztBQUVGLGVBQUMsT0FBTyx1QkFBRzs7O0NBQ1YsSUFBSyxJQUFJLENBQUMsU0FBUyxFQUFFO0VBQ3BCLFVBQVcsQ0FBQyxZQUFHO0dBQ2QsTUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7R0FDcEQsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUNQO0NBQ0QsQ0FBQTs7Ozs7Ozs7Ozs7OzsifQ==
