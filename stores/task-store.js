import Store from 'glassbil';
import fetch from '../lib/fetch';
import router from '../lib/router';

function calculateDataObject(tasks, filters) {
	if (!filters) filters = [false];
	let result = {
		tasks,
		projects: [],
		dueTasks: tasks.filter(task => task.tags && task.tags.find(tag => tag.split(':')[0] === 'due')),
		contexts: [],
		filteredTasks: tasks.filter(task => {
			return filters.filter(filter => (filter === true && task.done) || (filter === false && !task.done) || (task.contexts && task.contexts.indexOf(filter) >= 0) || (task.projects && task.projects.indexOf(filter) >= 0) || (task.tagNames && task.tagNames.indexOf(filter) >= 0)).length === filters.length;
		}),
		tags: tasks.filter(task => task.tags).map(task => task.tags.map(tag => tag.split(':')[0].trim()).join(',')).join(',').split(','),
		filters
	};
	let projects = {};
	let contexts = {};
	let tags = {};

	tasks.forEach((task, id) => {
		task.id = id.toString();
		task.projects && task.projects.forEach(project => projects[project] += 1);
		task.contexts && task.contexts.forEach(context => contexts[context] += 1);
		task.tags && task.tags.forEach(tag => tags[tag] += 1);
	});
	result.filteredTasks = result.filteredTasks.sort((taskA, taskB) => {
		let dueTagA = taskA.tags && taskA.tags.find(tag => tag.split(':')[0] === 'due');
		let dueTagB = taskB.tags && taskB.tags.find(tag => tag.split(':')[0] === 'due');
		if (dueTagA) {
			dueTagA = dueTagA.split(':').slice(1).join(':');
			dueTagA = new Date(dueTagA).getTime();
		} else {
			dueTagA = 93134745600000;
		}
		if (dueTagB) {
			dueTagB = dueTagB.split(':').slice(1).join(':');
			dueTagB = new Date(dueTagB).getTime();
		} else {
			dueTagB = 93134745600000;
		}
		return dueTagA - dueTagB;
	});

	result.projects = Object.keys(projects);
	result.contexts = Object.keys(contexts);

	return result;
}

function stringifyTask(task, doneOnly) {
	if (!doneOnly && task.done || doneOnly && !task.done) return '';
	return [
		task.done ? 'x' : '',
		task.priority || '',
		task.text.trim(),
		task.projects && task.projects.join(' '),
		task.contexts && task.contexts.join(' '),
		task.tags && task.tags.join(' ')
	].join(' ').trim();
}

function stringify(tasks, doneOnly) {
	return tasks.map(task => stringifyTask(task, doneOnly)).join('\n');
}

function parseTask(task, id) {
	let projects = task.match(/(\+\w+)/g);
	let priority = task.match(/\s*(\([A-Z]\))\s+/g);
	let contexts = task.match(/(@\w+)/g);
	let tags = task.match(/\b(\w+:[\w,:-]+)/g);
	let text = task.replace(/(?:\s*(?:\([A-Z]\))\s+)|(?:\+\w+)|(?:@\w+)|(?:\b(?:\w+:[\w,:-]+))/g, '').replace(/\s+/g, ' ').trim();
	let taskObject = {
		id,
		text,
		priority: priority && priority.toString().trim() || '',
		projects,
		contexts,
		tags,
		tagNames: tags && tags.map(tag => tag.split(':')[0]) || [],
		toString: () => stringifyTask(taskObject)
	};

	return taskObject;
}

function parseTaskList(taskList) {
	let tasks = [];
	taskList.split('\n').forEach((task, id) => {
		if (task) {
			tasks.push(parseTask(task, id.toString()));
		}
	});

	return tasks;
}

export default class TaskStore extends Store {
	constructor(credentials) {
		let _this;
		super('task', {
			add(currentState, task, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				task = parseTask(task);
				task.id = currentState.tasks.length.toString();
				currentState.tasks.push(task);
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			},

			filter(currentState, filter, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				if (!currentState.filters) {
					currentState.filters = [];
				}
				let position = currentState.filters.indexOf(filter);
				if (position >= 0) {
					currentState.filters.splice(position, 1);
				} else {
					currentState.filters.push(filter);
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
			},

			do(currentState, taskId, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				let task = currentState.tasks.find(task => task.id === taskId);
				if (task) {
					task.done = !task.done;
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			},

			update(currentState, taskData, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				let task = currentState.tasks.find(task => task.id === taskData.id);
				if (task) {
					task = Object.assign({id: task.id}, parseTask(taskData.text));
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			},

			delete(currentState, taskId, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				let task = currentState.tasks.find(task => task.id === taskId);
				if (task) {
					currentState.tasks.splice(currentState.tasks.indexOf(task), 1);
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			}
		});
		this.credentials = credentials;
		_this = this;

		this.loadTasks();
	}

	setCredentials(credentials) {
		this.credentials = credentials;
		if (!this.data.tasks || this.data.tasks.length <= 0) {
			this.loadTasks();
		}
	}

	loadTasks() {
		let taskList = '';
		if (!this.credentials) {
			return;
		}
		if (typeof localStorage !== 'undefined') {
			taskList = localStorage.getItem('todos');
			let tasks = parseTaskList(taskList);
			let newState = calculateDataObject(tasks);
			this.next(newState);
		}
		fetch(router.getUrl('tasks-load'), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(this.credentials)
		}).then(data => data.json()).then(data => {
			taskList = data.tasks || '';
			let tasks = parseTaskList(taskList);
			let newState = calculateDataObject(tasks);
			this.next(newState);
		});
	}

	saveTasks(state) {
		if (typeof localStorage === 'undefined') return;
		if (!this.credentials) {
			return;
		}
		let fileContent = stringify(state.tasks);
		let obj = {credentials: this.credentials, data: fileContent};
		let body = JSON.stringify(obj);
		localStorage.setItem('todos', fileContent);

		clearTimeout(this.debouncer);
		this.debouncer = setTimeout((() => {
			fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			}).then(response => response.json()).then((data => {
				if (!data.tasks) return;
				let taskList = data.tasks || '';
				let tasks = parseTaskList(taskList);
				let newState = calculateDataObject(tasks, this.data.filters);
				this.next(newState);
			}).bind(this)).catch(error => console.error('Unexpected response from server: ', error));
		}).bind(this), 2000);
	}

}