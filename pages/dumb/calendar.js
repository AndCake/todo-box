import styles from './styles/calendar.css';

function getWeekDay(year, month, day) {
	let weekDay = new Date(year + '-' + month + '-' + day).getDay() - 1;
	if (weekDay < 0) weekDay = 6;
	return weekDay;
}

function calculateMonth(year, month) {
	let days = [];
	for (let day = 1; day < 32; day += 1) {
		if (Number.isNaN(new Date(year + '-' + month + '-' + day).getTime())) {
			break;
		}
		days.push(day);
	}
	for (let fillup = 0, upTo = getWeekDay(year, month, 1); fillup < upTo; fillup += 1) {
		days.unshift('');
	}

	for (let fillup = getWeekDay(year, month, days[days.length - 1]), upTo = 6; fillup < upTo; fillup += 1) {
		days.push('');
	}

	let weeks = new Array(Math.ceil(days.length / 7));
	for (let week = 0; week < weeks.length; week += 1) {
		weeks[week] = days.slice(week * 7, week * 7 + 7);
	}

	return weeks;
}

export default class Calendar {
	render(data) {
		let month = data.props.currentYear + '-' + data.props.currentMonth + '-';
		return (
			<div class="calendar">
				<div class="month-picker">
					<button type="button" class="previous-month">‹</button>
					{data.props.months[data.props.currentMonth]}
					<select name="year" size="1">
						{data.props.years.map((year => (
							<option value={year}>{year}</option>
						)).bind(this))}
					</select>
					<button type="button" class="next-month">›</button>
				</div>
				<table class="month" border="0">
					<thead>
						<tr>
							{data.props.weekDays.map((day => (
								<th>{day}</th>
							)).bind(this))}
						</tr>
					</thead>
					<tbody>
						{data.props.weeks.map((week => (
							<tr>
								{week.map((day => (
									<td class={data.props.now === (month + day) ? 'now' : ''}>{day}</td>
								)).bind(this))}
							</tr>
						)).bind(this))}
					</tbody>
				</table>
			</div>
		);
	}

	constructor() {
		let _this = this || {};
		_this.props = {
			weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			currentMonth: new Date().getMonth() + 1,
			currentYear: new Date().getFullYear(),
			currentDay: new Date().getDate(),
			now: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
			weeks: []
		};
	}

	get styles() { return styles; }
	get events() {
		return {
			select: {change() {
				this.getHost().props.weeks = calculateMonth(this.value, this.getHost().props.currentMonth);
				this.getHost().setProps('currentYear', this.value);
			}},
			'.previous-month': {click() {
				let month = this.getHost().props.currentMonth;
				month -= 1;
				if (month < 1) {
					month = 12;
					this.getHost().props.currentYear -= 1;
				}
				this.getHost().props.weeks = calculateMonth(this.getHost().props.currentYear, month);
				this.getHost().setProps('currentMonth', month);
			}},
			'.next-month': {click() {
				let month = this.getHost().props.currentMonth;
				month += 1;
				if (month > 12) {
					month = 1;
					this.getHost().props.currentYear += 1;
				}
				this.getHost().props.weeks = calculateMonth(this.getHost().props.currentYear, month);
				this.getHost().setProps('currentMonth', month);
			}},
			'.month td': {click(event) {
				event.preventDefault();
				event.stopPropagation();
				event.stopImmediatePropagation();
				let host = this.getHost();
				let now = host.props.currentYear + '-' + host.props.currentMonth + '-' + this.innerText;
				now = now.replace(/-([1-9]\b)/g, '-0$1');
				let customEvent = new CustomEvent('datechosen', {
					bubbles: true,
					cancelable: false,
					detail: now
				});
				this.getHost().dispatchEvent(customEvent);
			}}
		};
	}

	onrender() {
		this.querySelector('select').value = this.props.currentYear;
	}

	onmount() {
		if (this.props.date) {
			let [year, month, day] = this.props.date.split('-');
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
		for (let year = 0; year < 10; year += 1) {
			this.props.years[year] = year + new Date().getFullYear();
		}
	}
}