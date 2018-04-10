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
		task.tags && task.tags.forEach(tag => tags[tag] += 1);
	});
	result.filteredTasks.forEach(task => {
		task.projects && task.projects.forEach(project => projects[project] += 1);
		task.contexts && task.contexts.forEach(context => contexts[context] += 1);
	});
	result.filteredTasks = result.filteredTasks.sort((taskA, taskB) => {
		let dueTagA = taskA.tags && taskA.tags.find(tag => tag.split(':')[0] === 'due');
		let dueTagB = taskB.tags && taskB.tags.find(tag => tag.split(':')[0] === 'due');
		let thisEvening = new Date(new Date().toISOString().replace(/T\d{2}:\d{2}/g, 'T23:59')).getTime();
		if (dueTagA) {
			dueTagA = dueTagA.split(':').slice(1).join(':');
			dueTagA = new Date(dueTagA).getTime();
		} else {
			dueTagA = thisEvening;
		}
		if (dueTagB) {
			dueTagB = dueTagB.split(':').slice(1).join(':');
			dueTagB = new Date(dueTagB).getTime();
		} else {
			dueTagB = thisEvening;
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
		task.done ? 'x ' + task.done.toISOString().split('T')[0] : '',
		task.priority || '',
		task.text.trim(),
		task.links && task.links.map(link => link.url).join(' '),
		task.projects && task.projects.join(' '),
		task.contexts && task.contexts.join(' '),
		task.tags && task.tags.join(' ')
	].join(' ').trim();
}

function stringify(tasks, doneOnly) {
	return tasks.map(task => stringifyTask(task, doneOnly)).join('\n').replace(/\n+/g, '\n');
}

function parseTask(task, id) {
	let projects = task.match(/\s(\+\w+)/g);
	let priority = task.match(/\s?(\([A-Z]\))\s+/g);
	let contexts = task.match(/\s(@\w+)/g);
	let tags = task.match(/\s(\w+:[\w,:-]+)/g);
	let text = task.replace(/(?:\s*(?:\([A-Z]\))\s+)|(?:\s\+\w+)|(?:\s@\w+)|(?:\b(?:\w+:[\w,:-]+))/g, '').replace(/\s+/g, ' ').trim();
	let links = text.match(/\bhttps?:\/\/[^ ]+/g);
	projects = projects && projects.map(project => project.trim());
	contexts = contexts && contexts.map(project => project.trim());
	tags = tags && tags.map(project => project.trim());
	links = links && links.map(link => {
		text = text.replace(link, '').trim();
		return {
			url: link,
			name: link.match(/https?:\/\/([^/]+)/)[1]
		};
	}) || [];
	let taskObject = {
		id,
		text,
		priority: priority && priority.toString().trim() || '',
		projects,
		contexts,
		tags,
		tagNames: tags && tags.map(tag => tag.split(':')[0]) || [],
		links,
		toString: () => stringifyTask(taskObject)
	};

	return taskObject;
}

function parseDoneTask(task, id) {
	let doneRegEx = /^x\s+(\d+-\d+-\d+)\s+/;
	let doneDate = task.match(doneRegEx);
	let taskObject = parseTask(task.replace(doneDate && doneDate[0] || '__CANNOT_BE_FOUND_DEADBEEF__', ''), id);
	taskObject.done = doneDate && new Date(doneDate[1]) || false;
	return taskObject;
}

function parseTaskList(taskList) {
	let tasks = [];
	if (!taskList) return tasks;
	taskList.split('\n').forEach((task, id) => {
		if (task) {
			tasks.push(parseTask(task, id.toString()));
		}
	});

	return tasks;
}

function parseDoneTaskList(taskList) {
	let tasks = [];
	if (!taskList) return tasks;
	taskList.split('\n').forEach((task, id) => {
		if (task) {
			tasks.push(parseDoneTask(task, id.toString()));
		}
	});
	return tasks;
}

export default class TaskStore extends Store {
	constructor(credentials) {
		super('task');

		let _this = this;
		this.actions({
			add(currentState, task, next) {
				let newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				task = parseTask(task);
				task.id = newState.tasks.length.toString();
				task.modified = +new Date;
				newState.tasks.push(task);
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
			},

			filter(currentState, filter, next) {
				let newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				if (!newState.filters) {
					newState.filters = [];
				}
				let position = newState.filters.indexOf(filter);
				if (position >= 0) {
					newState.filters.splice(position, 1);
				} else {
					newState.filters.push(filter);
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
			},

			do(currentState, taskId, next) {
				let newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				let task = newState.tasks.find(task => task.id === taskId);
				if (task) {
					task.done = task.done ? false : new Date();
					task.modified = +new Date;
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
			},

			update(currentState, taskData, next) {
				let newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				let task = newState.tasks.find(task => task.id === taskData.id);
				if (task) {
					task = Object.assign({id: task.id}, parseTask(taskData.text));
					task.modified = +new Date;
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
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
		this.loadTasks();
		if (typeof window !== 'undefined') {
			if (window.taskStoreInterval) {
				clearInterval(window.taskStoreInterval);
			}
			window.taskStoreInterval = setInterval(this.loadTasks.bind(this), 60000);
		}
	}

	setCredentials(credentials) {
		this.credentials = credentials;
		if (!this.data.tasks || this.data.tasks.length <= 0) {
			this.loadTasks();
		}
	}

	getCredentials(type) {
		var target = Object.assign({}, this.credentials);
		if (type === 'done') {
			target.url = target.url.replace(/\/todo\.txt$/, '/done.txt');
		}
		return target;
	}

	loadTasks() {
		let taskList = '';
		if (!this.credentials) {
			return;
		}
		if (!this.data.tasks && typeof localStorage !== 'undefined') {
			taskList = localStorage.getItem('todos');
			let tasks = parseTaskList(taskList);
			let newState = calculateDataObject(tasks, this.data.filters);
			this.setState(newState);
		}
		this.trigger('network-start');
		fetch(router.getUrl('tasks-load'), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(this.getCredentials())
		}).then(data => data.json()).then(openData => {
			return fetch(router.getUrl('tasks-load'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(this.getCredentials('done'))
			}).then(doneResponse => doneResponse.json()).then(doneData => openData.tasks + '\n' + doneData.tasks);
		}).then(data => {
			taskList = data || '';
			let currentTasks = this.data.tasks;
			let tasks = parseDoneTaskList(taskList);
			let isMerged = false;
			tasks.forEach((task, idx) => {
				let matchingTask = currentTasks.find(currentTask => currentTask.id === task.id);
				if (task.modified < matchingTask.modified) {
					tasks[idx] = matchingTask;
					isMerged = true;
				}
			});
			let newState = calculateDataObject(tasks, this.data.filters);
			this.setState(newState);
			this.trigger('network-end');
			if (isMerged) {
				this.saveTasks(this.data);
			}
		});
	}

	saveTasks(state) {
		if (typeof localStorage === 'undefined') return;
		if (!this.credentials) {
			return;
		}
		let fileContent = stringify(state.tasks);
		let obj = {credentials: this.getCredentials(), data: fileContent};
		let body = JSON.stringify(obj);
		localStorage.setItem('todos', fileContent);

		if (window.taskStoreInterval) {
			clearInterval(window.taskStoreInterval);
		}
		clearTimeout(this.debouncer);
		this.debouncer = setTimeout((() => {
			// save open tasks
			this.trigger('network-start');
			let openPromise = fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			}).then(response => response.json()).then((() => {
				clearInterval(window.taskStoreInterval);
				window.taskStoreInterval = setInterval(this.loadTasks.bind(this), 60000);
			}).bind(this)).catch(error => console.error('Unexpected response from server: ', error));

			// save done tasks
			obj.credentials = this.getCredentials('done');
			obj.data = stringify(state.tasks, true);
			body = JSON.stringify(obj);
			let donePromise = fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			});
			Promise.all([openPromise, donePromise]).then(() => this.trigger('network-end'));
		}).bind(this), 2000);
	}

}