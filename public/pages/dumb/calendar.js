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

var styles = (function (code) { return code; })("calendar{display:inline-block;background:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);width:13em}calendar .month-picker{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}calendar table{width:100%}calendar table td,calendar table th{text-align:center}calendar table th{background:#e5e5e5}calendar table td{cursor:pointer}calendar table td:hover{color:#e2f0a0;background:#6c7e15}calendar table td.now{background:#de94ab}@media screen and (max-width:686px){calendar{font-size:130%}}", {});

function getWeekDay(year, month, day) {
	var weekDay = new Date(year + '-' + month + '-' + day).getDay() - 1;
	if (weekDay < 0) { weekDay = 6; }
	return weekDay;
}

function calculateMonth(year, month) {
	var days = [];
	for (var day = 1; day < 32; day += 1) {
		if (Number.isNaN(new Date(year + '-' + month + '-' + day).getTime())) {
			break;
		}
		days.push(day);
	}
	for (var fillup = 0, upTo = getWeekDay(year, month, 1); fillup < upTo; fillup += 1) {
		days.unshift('');
	}

	for (var fillup$1 = getWeekDay(year, month, days[days.length - 1]), upTo$1 = 6; fillup$1 < upTo$1; fillup$1 += 1) {
		days.push('');
	}

	var weeks = new Array(Math.ceil(days.length / 7));
	for (var week = 0; week < weeks.length; week += 1) {
		weeks[week] = days.slice(week * 7, week * 7 + 7);
	}

	return weeks;
}

var Calendar = function Calendar() {
	var _this = this || {};
	_this.props = {
		weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		currentMonth: new Date().getMonth() + 1,
		currentYear: new Date().getFullYear(),
		currentDay: new Date().getDate(),
		now: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
		weeks: []
	};
};

var prototypeAccessors = { styles: {},events: {} };

Calendar.prototype.render = function render (data) {
		var this$1 = this;

	var month = data.props.currentYear + '-' + data.props.currentMonth + '-';
	return (
		this.createNode( 'div', { class: "calendar" },
				this.createNode( 'div', { class: "month-picker" },
					this.createNode( 'button', { type: "button", class: "previous-month" }, "‹"),
					data.props.months[data.props.currentMonth],
					this.createNode( 'select', { name: "year", size: "1" },
						data.props.years.map((function (year) { return (
						this.createNode( 'option', { value: year }, year)
					); }).bind(this))
					),
					this.createNode( 'button', { type: "button", class: "next-month" }, "›")
				),
				this.createNode( 'table', { class: "month", border: "0" },
					this.createNode( 'thead', null,
						this.createNode( 'tr', null,
							data.props.weekDays.map((function (day) { return (
							this.createNode( 'th', null, day )
						); }).bind(this))
						)
					),
					this.createNode( 'tbody', null,
						data.props.weeks.map((function (week) { return (
						this.createNode( 'tr', null,
								week.map((function (day) { return (
								this.createNode( 'td', { class: data.props.now === (month + day) ? 'now' : '' }, day)
							); }).bind(this$1))
							)
					); }).bind(this))
					)
				)
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		select: {change: function change() {
			this.getHost().props.weeks = calculateMonth(this.value, this.getHost().props.currentMonth);
			this.getHost().setProps('currentYear', this.value);
		}},
		'.previous-month': {click: function click() {
			var month = this.getHost().props.currentMonth;
			month -= 1;
			if (month < 1) {
				month = 12;
				this.getHost().props.currentYear -= 1;
			}
			this.getHost().props.weeks = calculateMonth(this.getHost().props.currentYear, month);
			this.getHost().setProps('currentMonth', month);
		}},
		'.next-month': {click: function click() {
			var month = this.getHost().props.currentMonth;
			month += 1;
			if (month > 12) {
				month = 1;
				this.getHost().props.currentYear += 1;
			}
			this.getHost().props.weeks = calculateMonth(this.getHost().props.currentYear, month);
			this.getHost().setProps('currentMonth', month);
		}},
		'.month td': {click: function click(event) {
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			var host = this.getHost();
			var now = host.props.currentYear + '-' + host.props.currentMonth + '-' + this.innerText;
			now = now.replace(/-([1-9]\b)/g, '-0$1');
			var customEvent = new CustomEvent('datechosen', {
				bubbles: true,
				cancelable: false,
				detail: now
			});
			this.getHost().dispatchEvent(customEvent);
		}}
	};
};

Calendar.prototype.onrender = function onrender () {
	this.querySelector('select').value = this.props.currentYear;
};

Calendar.prototype.onmount = function onmount () {
		var this$1 = this;

	if (this.props.date) {
		var ref = this.props.date.split('-');
			var year = ref[0];
			var month = ref[1];
			var day = ref[2];
		if (year && year.length === 4) {
			this.props.currentYear = ~~year;
		}
		if (month && month.length === 2) {
			this.props.currentMonth = ~~month.replace(/^0/, '');
		}
		if (day && day.length === 2) {
			this.props.currentDay = ~~day.replace(/^0/, '');
		}
	}
	this.props.weeks = calculateMonth(this.props.currentYear, this.props.currentMonth);
	this.props.years = new Array(10);
	for (var year$1 = 0; year$1 < 10; year$1 += 1) {
		this$1.props.years[year$1] = year$1 + new Date().getFullYear();
	}
};

Object.defineProperties( Calendar.prototype, prototypeAccessors );

return Calendar;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL2R1bWIvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jYWxlbmRhci5jc3MnO1xuXG5mdW5jdGlvbiBnZXRXZWVrRGF5KHllYXIsIG1vbnRoLCBkYXkpIHtcblx0bGV0IHdlZWtEYXkgPSBuZXcgRGF0ZSh5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkpLmdldERheSgpIC0gMTtcblx0aWYgKHdlZWtEYXkgPCAwKSB3ZWVrRGF5ID0gNjtcblx0cmV0dXJuIHdlZWtEYXk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1vbnRoKHllYXIsIG1vbnRoKSB7XG5cdGxldCBkYXlzID0gW107XG5cdGZvciAobGV0IGRheSA9IDE7IGRheSA8IDMyOyBkYXkgKz0gMSkge1xuXHRcdGlmIChOdW1iZXIuaXNOYU4obmV3IERhdGUoeWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5KS5nZXRUaW1lKCkpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0ZGF5cy5wdXNoKGRheSk7XG5cdH1cblx0Zm9yIChsZXQgZmlsbHVwID0gMCwgdXBUbyA9IGdldFdlZWtEYXkoeWVhciwgbW9udGgsIDEpOyBmaWxsdXAgPCB1cFRvOyBmaWxsdXAgKz0gMSkge1xuXHRcdGRheXMudW5zaGlmdCgnJyk7XG5cdH1cblxuXHRmb3IgKGxldCBmaWxsdXAgPSBnZXRXZWVrRGF5KHllYXIsIG1vbnRoLCBkYXlzW2RheXMubGVuZ3RoIC0gMV0pLCB1cFRvID0gNjsgZmlsbHVwIDwgdXBUbzsgZmlsbHVwICs9IDEpIHtcblx0XHRkYXlzLnB1c2goJycpO1xuXHR9XG5cblx0bGV0IHdlZWtzID0gbmV3IEFycmF5KE1hdGguY2VpbChkYXlzLmxlbmd0aCAvIDcpKTtcblx0Zm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCB3ZWVrcy5sZW5ndGg7IHdlZWsgKz0gMSkge1xuXHRcdHdlZWtzW3dlZWtdID0gZGF5cy5zbGljZSh3ZWVrICogNywgd2VlayAqIDcgKyA3KTtcblx0fVxuXG5cdHJldHVybiB3ZWVrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIge1xuXHRyZW5kZXIoZGF0YSkge1xuXHRcdGxldCBtb250aCA9IGRhdGEucHJvcHMuY3VycmVudFllYXIgKyAnLScgKyBkYXRhLnByb3BzLmN1cnJlbnRNb250aCArICctJztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb250aC1waWNrZXJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByZXZpb3VzLW1vbnRoXCI+4oC5PC9idXR0b24+XG5cdFx0XHRcdFx0e2RhdGEucHJvcHMubW9udGhzW2RhdGEucHJvcHMuY3VycmVudE1vbnRoXX1cblx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJ5ZWFyXCIgc2l6ZT1cIjFcIj5cblx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLnllYXJzLm1hcCgoeWVhciA9PiAoXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3llYXJ9Pnt5ZWFyfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0KSkuYmluZCh0aGlzKSl9XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXh0LW1vbnRoXCI+4oC6PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJtb250aFwiIGJvcmRlcj1cIjBcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdHtkYXRhLnByb3BzLndlZWtEYXlzLm1hcCgoZGF5ID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8dGg+e2RheX08L3RoPlxuXHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7ZGF0YS5wcm9wcy53ZWVrcy5tYXAoKHdlZWsgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0e3dlZWsubWFwKChkYXkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPXtkYXRhLnByb3BzLm5vdyA9PT0gKG1vbnRoICsgZGF5KSA/ICdub3cnIDogJyd9PntkYXl9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpKS5iaW5kKHRoaXMpKX1cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdCkpLmJpbmQodGhpcykpfVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdHdlZWtEYXlzOiBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXSxcblx0XHRcdG1vbnRoczogWycnLCAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuXHRcdFx0Y3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxLFxuXHRcdFx0Y3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcblx0XHRcdGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxuXHRcdFx0bm93OiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAobmV3IERhdGUoKS5nZXRNb250aCgpICsgMSkgKyAnLScgKyBuZXcgRGF0ZSgpLmdldERhdGUoKSxcblx0XHRcdHdlZWtzOiBbXVxuXHRcdH07XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdDoge2NoYW5nZSgpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkucHJvcHMud2Vla3MgPSBjYWxjdWxhdGVNb250aCh0aGlzLnZhbHVlLCB0aGlzLmdldEhvc3QoKS5wcm9wcy5jdXJyZW50TW9udGgpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY3VycmVudFllYXInLCB0aGlzLnZhbHVlKTtcblx0XHRcdH19LFxuXHRcdFx0Jy5wcmV2aW91cy1tb250aCc6IHtjbGljaygpIHtcblx0XHRcdFx0bGV0IG1vbnRoID0gdGhpcy5nZXRIb3N0KCkucHJvcHMuY3VycmVudE1vbnRoO1xuXHRcdFx0XHRtb250aCAtPSAxO1xuXHRcdFx0XHRpZiAobW9udGggPCAxKSB7XG5cdFx0XHRcdFx0bW9udGggPSAxMjtcblx0XHRcdFx0XHR0aGlzLmdldEhvc3QoKS5wcm9wcy5jdXJyZW50WWVhciAtPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnByb3BzLndlZWtzID0gY2FsY3VsYXRlTW9udGgodGhpcy5nZXRIb3N0KCkucHJvcHMuY3VycmVudFllYXIsIG1vbnRoKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2N1cnJlbnRNb250aCcsIG1vbnRoKTtcblx0XHRcdH19LFxuXHRcdFx0Jy5uZXh0LW1vbnRoJzoge2NsaWNrKCkge1xuXHRcdFx0XHRsZXQgbW9udGggPSB0aGlzLmdldEhvc3QoKS5wcm9wcy5jdXJyZW50TW9udGg7XG5cdFx0XHRcdG1vbnRoICs9IDE7XG5cdFx0XHRcdGlmIChtb250aCA+IDEyKSB7XG5cdFx0XHRcdFx0bW9udGggPSAxO1xuXHRcdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnByb3BzLmN1cnJlbnRZZWFyICs9IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkucHJvcHMud2Vla3MgPSBjYWxjdWxhdGVNb250aCh0aGlzLmdldEhvc3QoKS5wcm9wcy5jdXJyZW50WWVhciwgbW9udGgpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnY3VycmVudE1vbnRoJywgbW9udGgpO1xuXHRcdFx0fX0sXG5cdFx0XHQnLm1vbnRoIHRkJzoge2NsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0bGV0IGhvc3QgPSB0aGlzLmdldEhvc3QoKTtcblx0XHRcdFx0bGV0IG5vdyA9IGhvc3QucHJvcHMuY3VycmVudFllYXIgKyAnLScgKyBob3N0LnByb3BzLmN1cnJlbnRNb250aCArICctJyArIHRoaXMuaW5uZXJUZXh0O1xuXHRcdFx0XHRub3cgPSBub3cucmVwbGFjZSgvLShbMS05XVxcYikvZywgJy0wJDEnKTtcblx0XHRcdFx0bGV0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdkYXRlY2hvc2VuJywge1xuXHRcdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGV0YWlsOiBub3dcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuXHRcdFx0fX1cblx0XHR9O1xuXHR9XG5cblx0b25yZW5kZXIoKSB7XG5cdFx0dGhpcy5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS52YWx1ZSA9IHRoaXMucHJvcHMuY3VycmVudFllYXI7XG5cdH1cblxuXHRvbm1vdW50KCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmRhdGUpIHtcblx0XHRcdGxldCBbeWVhciwgbW9udGgsIGRheV0gPSB0aGlzLnByb3BzLmRhdGUuc3BsaXQoJy0nKTtcblx0XHRcdGlmICh5ZWFyICYmIHllYXIubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuY3VycmVudFllYXIgPSB+fnllYXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9udGggJiYgbW9udGgubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuY3VycmVudE1vbnRoID0gfn5tb250aC5yZXBsYWNlKC9eMC8sICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChkYXkgJiYgZGF5Lmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHR0aGlzLnByb3BzLmN1cnJlbnREYXkgPSB+fmRheS5yZXBsYWNlKC9eMC8sICcnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wcm9wcy53ZWVrcyA9IGNhbGN1bGF0ZU1vbnRoKHRoaXMucHJvcHMuY3VycmVudFllYXIsIHRoaXMucHJvcHMuY3VycmVudE1vbnRoKTtcblx0XHR0aGlzLnByb3BzLnllYXJzID0gbmV3IEFycmF5KDEwKTtcblx0XHRmb3IgKGxldCB5ZWFyID0gMDsgeWVhciA8IDEwOyB5ZWFyICs9IDEpIHtcblx0XHRcdHRoaXMucHJvcHMueWVhcnNbeWVhcl0gPSB5ZWFyICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdH1cblx0fVxufSJdLCJuYW1lcyI6WyJsZXQiLCJmaWxsdXAiLCJ1cFRvIiwidGhpcyIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Q0FDckNBLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDcEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFBO0NBQzdCLE9BQU8sT0FBTyxDQUFDO0NBQ2Y7O0FBRUQsU0FBUyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUNwQ0EsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0NBQ2QsS0FBS0EsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtFQUNyQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7R0FDckUsTUFBTTtHQUNOO0VBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNmO0NBQ0QsS0FBS0EsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUU7RUFDbkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNqQjs7Q0FFRCxLQUFLQSxJQUFJQyxRQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRUMsTUFBSSxHQUFHLENBQUMsRUFBRUQsUUFBTSxHQUFHQyxNQUFJLEVBQUVELFFBQU0sSUFBSSxDQUFDLEVBQUU7RUFDdkcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNkOztDQUVERCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNsRCxLQUFLQSxJQUFJLElBQUksR0FB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
