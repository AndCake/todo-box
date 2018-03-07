import styles from './styles/todo-app.css';
import TaskStore from '../stores/task-store';
import UserStore from '../stores/user-store';

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
		z.import('./smart/todo-header.js');
		z.import('./dumb/todo-nav.js');
		z.import('./smart/todo-list.js');

		this.taskStore = new TaskStore();
		this.userStore = new UserStore();

		this.taskStore.on('changed', this.tasksChanged = data => {
			this.getHost().setProps(data);
		});
		this.userStore.on('changed', this.usersChanged = data => {
			if (data && Object.keys(data).length > 0) {
				this.taskStore.setCredentials(data);
				this.props.credentials = data;
			}
		});
	}

	onunmount() {
		this.taskStore.off('changed', this.tasksChanged);
		this.userStore.off('changed', this.usersChanged);
	}
}