import styles from './styles/todo-list.css';

export default class TodoList {
	constructor() {
		let _this = this || {};
		_this.props = {
			store: {},
			editing: null,
			tasks: [],
			projects: [],
			contexts: [],
			suggestions: [],
			filters: false
		};
	}

	render(data) {
		return (
			<div class="todo-list">
				<div class="todo-list__filter">
					{Array.isArray(data.props.filters) ? data.props.filters.map((filter => (
						<button type="button" value={filter}>{filter === true ? 'done' : filter === false ? 'open' : filter}</button>
					)).bind(this)) : ''}
				</div>
				<ul>
					{data.props.tasks.map((task => (
						<li data-id={task.id} class={data.props.editing && data.props.editing.id === task.id ? 'todo-editing' : ''}>
							<input type="checkbox"/>
							<div class="todo" data-priority={task.priority}>
								<span class="todo_text">{task.text}</span>
								<span class="contexts">
									{task.contexts && task.contexts.map((context => (
										<span class="todo_context">{data.props.filters && data.props.filters.indexOf(context) >= 0 ? '' : context}</span>
									)).bind(this)) || ''}
								</span>
								<span class="projects">
									{task.projects && task.projects.map((project => (
										<span class="todo_project">{data.props.filters && data.props.filters.indexOf(project) >= 0 ? '' : project}</span>
									)).bind(this)) || ''}
								</span>
								<span class="tags">
									{task.tags && task.tags.map((tag => (
										<span class="todo_tag js-tag">{tag}</span>
									)).bind(this)) || ''}
								</span>
								<span class="links">
									{task.links && task.links.map((link => (
										<a href={link.url} class="todo_link">{link.name}</a>
									)).bind(this))}
								</span>
							</div>
							<button class="js-delete">x</button>
						</li>
					)).bind(this))}
				</ul>
				<form>
					<label>
						<input type="text" name="task" value="" placeholder="Enter new task here..." autocomplete="off"/>
						{data.props.calendar ? (
							<calendar data-date={data.props.calendar}/>
						) : data.props.suggestions.length > 0 ? (
							<select size={Math.min(data.props.suggestions.length, 5)} id="suggestions">
								{data.props.suggestions.map((suggestion => (
									<option value={suggestion}>{suggestion}</option>
								)).bind(this))}
							</select>
						) : ''}
					</label>
					<button type="submit" class="js-add-task">Add</button>
				</form>
			</div>
		);
	}

	get styles() { return styles; }
	get events() {
		return {
			'.todo_context, .todo_project, .todo_tag': {click() {
				let taskStore = this.getHost().props.store;
				let filter = this.innerText;
				if (this.classList.contains('js-tag')) {
					filter = filter.split(':')[0];
				}
				taskStore.filter(filter);
			}},
			'.todo-list__filter button': {click() {
				let taskStore = this.getHost().props.store;
				if (['false', 'true'].indexOf(this.value) >= 0) {
					taskStore.filter(true);
					taskStore.filter(false);
				} else {
					taskStore.filter(this.value);
				}
			}},
			'form input': {keyup(event) {
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
						this.getHost().setProps('suggestions', this.getHost().props.projects.filter(project => project.indexOf(char) >= 0));
					} else if (char[0] === '@') {
						this.getHost().setProps('suggestions', this.getHost().props.contexts.filter(context => context.indexOf(char) >= 0));
					} else if (this.value.match(/due:[\dT:-]*$/g)) {
						this.getHost().setProps('calendar', this.value.match(/due:([\d:-]*)/)[1] || '1');
					} else if (this.getHost().props.calendar !== false) {
						this.getHost().setProps('calendar', false);
					}
				}
			}, keydown(event) {
				if ((event.keyCode === 13 || event.keyCode === 32) && this.nextElementSibling && this.nextElementSibling.selectedIndex >= 0) {
					event.preventDefault();
					this.value = this.value.replace(/([+@]\w*)$/, this.nextElementSibling && this.nextElementSibling.value || '') + ' ';
					this.getHost().setProps('suggestions', []);
				}
			}, blur() {
				setTimeout(() => {
					this.getHost().setProps('suggestions', []);
				}, 500);
			}},
			'li .todo_text': {click() {
				let taskId = this.parentNode.parentNode.dataset.id;
				let task = this.getHost().props.tasks.find(task => task.id === taskId);
				this.getHost().setProps('editing', task);
				this.getHost().querySelector('form input').value = task.toString();
				this.getHost().querySelector('form input').focus();
			}},
			'li input': {change() {
				let taskId = this.parentNode.dataset.id;
				let taskStore = this.getHost().props.store;
				this.checked = false;
				taskStore.do(taskId);
			}},
			'.js-delete': {click() {
				let taskId = this.parentNode.dataset.id;
				let taskStore = this.getHost().props.store;
				taskStore.delete(taskId);
			}},
			'#suggestions': {click() {
				this.previousElementSibling.value = this.previousElementSibling.value.replace(/([+@]\w*)$/, this.value) + ' ';
				this.getHost().setProps('suggestions', []);
				this.previousElementSibling.focus();
			}},
			'calendar': {datechosen(event) {
				let input = this.getHost().querySelector('form input');
				input.value = input.value.replace(/due:[\dT:-]*$/, 'due:' + event.detail) + ' ';
				input.focus();
				this.getHost().setProps('calendar', false);
			}},
			'form': {submit(event) {
				event.preventDefault();
				let taskStore = this.getHost().props.store;
				let value = this.task.value;
				if (this.getHost().props.editing) {
					taskStore.delete(this.getHost().props.editing.id);
					this.getHost().setProps('editing', null);
				}
				taskStore.add(value);
				this.task && (this.task.value = '');
			}}
		};
	}

	onmount(z) {
		z.import('./dumb/calendar.js');
	}
}