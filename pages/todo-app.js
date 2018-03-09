import styles from './styles/todo-app.css';
import TaskStore from '../stores/task-store';
import UserStore from '../stores/user-store';
import TaskNotifier from '../lib/task-notifier';

export default class TodoApp {
	constructor() {
		let _this = this || {};
		// define initial props
		_this.props = {
			tasks: [],
			filteredTasks: [],
			filters: false,
			projects: [],
			dueTasks: [],
			contexts: [],
			tags: [],
			credentials: {}
		};
	}

	render(data) {
		return (
			<div class="todo-app">
				<todo-header data-credentials={data.props.credentials}/>
				<todo-nav data-projects={data.props.projects} data-contexts={data.props.contexts} data-tags={data.props.tags} data-filters={data.props.filters}/>
				<todo-list data-store={this.taskStore} data-projects={data.props.projects} data-contexts={data.props.contexts} data-tasks={data.props.filteredTasks} data-filters={data.props.filters}/>
			</div>
		);
	}

	get styles() { return styles; }
	get events() {
		return {
			'todo-nav': {filter(event) {
				this.getHost().taskStore.filter(event.detail);
			}},
			'todo-header': {login(event) {
				this.getHost().userStore.setUser(event.detail);
			}}
		};
	}

	onmount(z) {
		z.import('./dumb/todo-header.js');
		z.import('./dumb/todo-nav.js');
		z.import('./smart/todo-list.js');

		this.taskStore = new TaskStore();
		this.userStore = new UserStore();
		this.notifier = new TaskNotifier();

		this.taskStore.on('changed', this.tasksChanged = data => {
			this.notifier.setTasks(data.tasks.filter(task => task.tags && task.tags.find(tag => tag.split(':')[0] === 'due')));
			setTimeout((() => {
				this.getHost().setProps(data);
			}).bind(this), 150);
		});
		this.userStore.on('changed', this.usersChanged = data => {
			if (data && Object.keys(data).length > 0) {
				this.taskStore.setCredentials(data);
				this.getHost().setProps('credentials', data);
			}
		});
	}

	onunmount() {
		this.taskStore.off('changed', this.tasksChanged);
		this.userStore.off('changed', this.usersChanged);
	}
}