import styles from './styles/todo-nav.css';

export default class TodoNav {
	render(data) {
		return (
			<nav>
				<button class="close-nav" type="button">Close</button>
				<h3>Contexts</h3>
				<ul class="contexts">
					{data.props.contexts.map((context => (
						<li class={data.props.filters && data.props.filters.indexOf(context) >= 0 ? 'selected' : ''}>{context}</li>
					)).bind(this))}
				</ul>
				<h3>Projects</h3>
				<ul class="projects">
					{data.props.projects.map((project => (
						<li class={data.props.filters && data.props.filters.indexOf(project) >= 0 ? 'selected' : ''}>{project}</li>
					)).bind(this))}
				</ul>
			</nav>
		);
	}

	get styles() { return styles; }
	get events() {
		return {
			button: {click() {
				let event = new Event('close', {
					bubbles: true,
					cancelable: false
				});
				this.getHost().dispatchEvent(event);
			}},
			li: {click() {
				let event = new CustomEvent('filter', {
					bubbles: true,
					cancelable: false,
					detail: this.innerText
				});
				this.getHost().dispatchEvent(event);
			}}
		};
	}

	constructor() {
		let _this = this || {};
		_this.props = {
			projects: [],
			contexts: [],
			filters: false,
			store: null
		};
	}
}