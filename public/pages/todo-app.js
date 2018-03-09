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

var styles = (function (code) { return code; })("todo-app .todo-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-app todo-header{display:block;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;position:relative;z-index:1}todo-app todo-list{display:block;-webkit-box-flex:1;-ms-flex:1 1 75%;flex:1 1 75%;padding-top:1em}todo-app todo-nav{-webkit-box-flex:1;-ms-flex:1 1 calc(25% - 1em);flex:1 1 calc(25% - 1em)}todo-app button{background:#495800;color:#e2f0a0;border:1px solid #6c7e15;border-radius:3px;cursor:pointer;margin:2px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.25);box-shadow:0 0 5px rgba(0,0,0,.25)}todo-app button:hover{color:#6c7e15;background:#e2f0a0}@media screen and (max-width:686px){todo-app todo-nav{display:none}todo-app todo-header{position:fixed;top:0;left:0;right:0}todo-app todo-list{padding-top:5.5em}}", {});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main = createCommonjsModule(function (module) {
"use strict";var scope="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:void 0,eventRegistry=scope.__eventRegistry=scope.__eventRegistry||{};function trigger(t,e){if(eventRegistry[t])for(var a,n=0,r=eventRegistry[t].length;a=eventRegistry[t][n],n<r;n+=1){if(!1===a(e))break}}function on(t,e){eventRegistry[t]||(eventRegistry[t]=[]),eventRegistry[t].push(e);}function off(t,e){if(eventRegistry[t])if("function"==typeof e){var a=eventRegistry[t].indexOf(e);a>=0&&eventRegistry[t].splice(a,1);}else eventRegistry[t]=[];}function one(t,e){var a=function(n){off(t,a),e(n);};on(t,a);}var events=Object.freeze({trigger:trigger,on:on,off:off,one:one}),scope$1="undefined"!=typeof window?window:{},data=scope$1.__glassbilStoreData=scope$1.__glassbilStoreData||{},trigger$1=trigger;function mirror(){return this}function deepFreeze(t){if(null===t||"function"==typeof t.toJS||"object"!=typeof t)return t;for(var e=Object.getOwnPropertyNames(t),a={toJS:{value:mirror.bind(t)}},n=function(t,n){a[e[t]]={enumerable:!0,get:function(){return deepFreeze(n)},set:function(a){throw new Error('Cannot change property "'+e[t]+'" to "'+a+'" of an immutable object')}};},r=0,o=void 0;o=t[e[r]],r<e.length;r+=1)n(r,o);return Object.freeze(Object.create(Object.getPrototypeOf(t),a))}var Store=function(t,e){var a=this;if(this.name=t||"unnamed",this.triggered=!1,Object.keys(events).forEach(function(e){a[e]=function(a,n){a.indexOf(":")>=0?events[e](a,n):events[e](t+"-store:"+a,n);};}),"object"==typeof e)for(var n=Object.keys(e),r=function(e,r){a[n[e]]=function(e){var a=r(data[t].currentData.toJS(),e,this.next.bind(this));a&&this.next(a);}.bind(a);},o=0,i=void 0;i=e[n[o]],o<n.length;o+=1)r(o,i);t&&(data[t]=data[t]||{loaded:!1,currentData:deepFreeze([]),historicData:[]});},prototypeAccessors={data:{configurable:!0}};prototypeAccessors.data.get=function(){return data[this.name]?data[this.name].currentData.toJS():null},Store.prototype.loaded=function(){var t=Object.keys(data).filter(function(t){return data[t].loaded}).length;if(t===Object.keys(data).length&&!this.triggered){var e={};Object.keys(data).map(function(t){e[t]=data[t].currentData.toJS();}),this.triggered=!0,trigger$1("global:data-loaded",e);}},Store.prototype.next=function(t){if(data[this.name].loaded=!0,(t=deepFreeze(t))!==data[this.name].currentData){for(data[this.name].historicData.push(data[this.name].currentData);data[this.name].historicData.length>10;)data[this.name].historicData.shift();data[this.name].currentData=t,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS());}this.loaded();},Store.prototype.previous=function(){data[this.name].historicData.length<1||(newState=data[this.name].historicData.pop(),data[this.name].currentData=newState,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS()));},Object.defineProperties(Store.prototype,prototypeAccessors),module.exports=Store;
});

var rejectDefault = function rejectDefault(error){
	throw new Error('Uncaught promise: ' + error);
};
var emptyFunc = function(){};

function NowPromise(fn) {
	var resolveValue, rejectValue;

	this.then = function(resolve, reject) {
		if (typeof reject !== 'function') reject = rejectFn;
		return new NowPromise(function(resFn, rejFn) {
			if (typeof rejFn !== 'function') rejFn = rejectDefault;
			if (typeof resFn !== 'function') resFn = emptyFunc;
			if (!rejectValue) {
				resFn(resolve(resolveValue));
			} else {
				reject(rejectValue);
				rejFn(rejectValue);
			}
		});
	};
	this.catch = function(reject) {
		if (rejectValue) {
			if (typeof reject !== 'function') reject = rejectDefault;
			reject(rejectValue);
		}
	};

	function resolveFn(data) {
		resolveValue = data;
	}
	function rejectFn(data) {
		rejectValue = data || 'Error';
	}
	fn(resolveFn, rejectFn);
}

NowPromise.resolve = function(value) {
	return new NowPromise(function(resolve, reject) {
		resolve(value);
	});
};

NowPromise.reject = function(error) {
	return new NowPromise(function(resolve, reject) {
		reject(error);
	});
};

NowPromise.all = function(values) {
	return new NowPromise(function(resolve, reject) {
		var result = [];
		values.forEach(function(entry) {
			if (entry instanceof NowPromise) {
				entry.then(function(value) {
					result.push(value);
					if (result.length === values.length) {
						resolve(result);
					}
				}).catch(function(e) { reject(e); });
			} else {
				result.push(entry);
			}
		});
		if (result.length === values.length) {
			resolve(result);
		}
	});
};

var nowPromise = typeof Promise === 'undefined' ? NowPromise : Promise;
var NowPromise_1 = NowPromise;

nowPromise.NowPromise = NowPromise_1;

function isBrowser() {
	return typeof window !== 'undefined';
}

function isNode() {
	return typeof process !== 'undefined' || !process.browser;
}

var fetch = function(url, options) {
	var defaultOptions = {
		method: 'GET',
		body: null
	};
	options = options || {};
	for (var all in defaultOptions) {
		if (!options[all]) { options[all] = defaultOptions[all]; }
	}
	if (isBrowser()) {
		// browser context
		if (options.browserBase) {
			url = options.browserBase + url;
			delete options.browserBase;
		}
		return window.fetch(url, options);
	} else if (isNode()) {
		// nodeJS context
		var http = require('http');
		var https = require('https');
		if (url.match(/:\/\//)) {
			options.hostname = url.replace(/^\w+:\/\/([^:/]+)[/:].*$/, '$1');
			options.port = parseInt(url.replace(/^\w+:\/\/[^:/]+:(\d+)\/.*$/, '$1') || url.match(/^https:/) ? '443' : '80', 10);
			options.path = url.replace(/^\w+:\/\/[^:/]+(?::\d+)?(\/.*)$/, '$1');
			options.protocol = url.replace(/^(\w+:)\/\/.*$/, '$1');
		} else {
			options.hostname = 'localhost';
			options.port = 8888;
			options.path = url;
			options.protocol = 'http:';
		}
		return new nowPromise(function (resolve, reject) {
			var req = (options.protocol === 'https:' ? https : http).request(options, function (res) {
				var body = '';
				res.on('data', function (chunk) { return body += chunk; });
				res.on('end', function () {
					if (res.statusCode < 300 && res.statusCode >= 200) {
						var response = {
							json: function () { return JSON.parse(body); },
							text: function () { return body; },
							status: res.statusCode
						};
						resolve(response);
					} else {
						reject({
							status: res.statusCode,
							statusMessage: res.statusMessage,
							text: function () { return body; },
							json: function () { return JSON.parse(body); }
						});
					}
				});
			});
			req.on('error', reject);
			if (options.body) {
				req.write(options.body);
			}
			req.end();
		});
	}
};

var routeImports = {
	"/": {"title":"Todo Box","component":"todo-app","name":"home"},
	"/tasks/load": {"name":"tasks-load","rest":"tasks:load"},
	"/tasks/save": {"name":"tasks-save","rest":"tasks:save"}
};

var routes = routeImports;
var currentRoute = null;

function openPage(route) {
	document.getElementById('page-content').innerHTML = '';
	var el = document.createElement(route.component);
	el.props = route.data;
	document.getElementById('page-content').appendChild(el);
	if (route.title) {
		typeof window !== 'undefined' && (window.title = route.title);
	}

	window.Zino.import.call({}, '/' + route.component + '.js');
}

if (typeof window !== 'undefined' && !window.popstateAttached) {
	window.addEventListener('popstate', function(event) {
		event.state && openPage(event.state);
	}, false);
	window.popstateAttached = true;
}

var router = {
	setRoutes: function setRoutes(newRoutes) {
		routes = newRoutes;
	},

	route: function route(path) {
		// if we have a direct match, just return it
		if (routes[path]) { return routes[path]; }

		// if we need more detailed filtering...
		return Object.keys(routes).map(function (route) {
			var names = [''];
			var routeExpression = route.replace(/\//g, '\\/').replace(/:([a-z]+)/g, function (g, name) {
				names.push(name);
				return '(.*?)';
			}).replace(/\$|\^/g, '\\$&');
			routeExpression = new RegExp('^' + routeExpression + '$');
			var result = routeExpression.exec(path);
			if (!result) { return false; }
			var data = {};
			names.slice(1).forEach(function (name, idx) {
				data[name] = result[idx + 1];
			});
			return Object.assign({}, routes[route], {data: data});
		}).filter(function (result) { return result; })[0] || false;
	},

	getCurrent: function getCurrent() {
		return currentRoute;
	},

	getUrl: function getUrl(name, data) {
		var route = Object.keys(routes).filter(function (route) { return routes[route].name === name; })[0];
		var url = route;

		if (route) {
			url = route.replace(/:([a-z]+)/g, function (g, name) { return data && data[name] || null; });
		}

		return url;
	},

	goto: function goto(name, data) {
		var url = this.getUrl(name, data);
		this.open(url);
	},

	open: function open(url) {
		var route = this.route(url);
		currentRoute = route;
		if (typeof window !== 'undefined') {
			history.pushState(route, null, url);
			openPage(route);
		} else {
			// do a redirect
			// ...
		}
	}
};

function calculateDataObject(tasks, filters) {
	if (!filters) { filters = [false]; }
	var result = {
		tasks: tasks,
		projects: [],
		dueTasks: tasks.filter(function (task) { return task.tags && task.tags.find(function (tag) { return tag.split(':')[0] === 'due'; }); }),
		contexts: [],
		filteredTasks: tasks.filter(function (task) {
			return filters.filter(function (filter) { return (filter === true && task.done) || (filter === false && !task.done) || (task.contexts && task.contexts.indexOf(filter) >= 0) || (task.projects && task.projects.indexOf(filter) >= 0) || (task.tagNames && task.tagNames.indexOf(filter) >= 0); }).length === filters.length;
		}),
		tags: tasks.filter(function (task) { return task.tags; }).map(function (task) { return task.tags.map(function (tag) { return tag.split(':')[0].trim(); }).join(','); }).join(',').split(','),
		filters: filters
	};
	var projects = {};
	var contexts = {};
	var tags = {};

	tasks.forEach(function (task, id) {
		task.id = id.toString();
		task.projects && task.projects.forEach(function (project) { return projects[project] += 1; });
		task.contexts && task.contexts.forEach(function (context) { return contexts[context] += 1; });
		task.tags && task.tags.forEach(function (tag) { return tags[tag] += 1; });
	});
	result.filteredTasks = result.filteredTasks.sort(function (taskA, taskB) {
		var dueTagA = taskA.tags && taskA.tags.find(function (tag) { return tag.split(':')[0] === 'due'; });
		var dueTagB = taskB.tags && taskB.tags.find(function (tag) { return tag.split(':')[0] === 'due'; });
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
	if (!doneOnly && task.done || doneOnly && !task.done) { return ''; }
	return [
		task.done ? 'x ' + new Date().toISOString().split('T')[0] : '',
		task.priority || '',
		task.text.trim(),
		task.links && task.links.map(function (link) { return link.url; }).join(' '),
		task.projects && task.projects.join(' '),
		task.contexts && task.contexts.join(' '),
		task.tags && task.tags.join(' ')
	].join(' ').trim();
}

function stringify(tasks, doneOnly) {
	return tasks.map(function (task) { return stringifyTask(task, doneOnly); }).join('\n');
}

function parseTask(task, id) {
	var projects = task.match(/\s(\+\w+)/g);
	var priority = task.match(/\s?(\([A-Z]\))\s+/g);
	var contexts = task.match(/\s(@\w+)/g);
	var tags = task.match(/\s(\w+:[\w,:-]+)/g);
	var text = task.replace(/(?:\s*(?:\([A-Z]\))\s+)|(?:\s\+\w+)|(?:\s@\w+)|(?:\b(?:\w+:[\w,:-]+))/g, '').replace(/\s+/g, ' ').trim();
	var links = text.match(/\bhttps?:\/\/[^ ]+/g);
	projects = projects && projects.map(function (project) { return project.trim(); });
	contexts = contexts && contexts.map(function (project) { return project.trim(); });
	tags = tags && tags.map(function (project) { return project.trim(); });
	links = links && links.map(function (link) {
		text = text.replace(link, '').trim();
		return {
			url: link,
			name: link.match(/https?:\/\/([^/]+)/)[1]
		};
	}) || [];
	var taskObject = {
		id: id,
		text: text,
		priority: priority && priority.toString().trim() || '',
		projects: projects,
		contexts: contexts,
		tags: tags,
		tagNames: tags && tags.map(function (tag) { return tag.split(':')[0]; }) || [],
		links: links,
		toString: function () { return stringifyTask(taskObject); }
	};

	return taskObject;
}

function parseTaskList(taskList) {
	var tasks = [];
	if (!taskList) { return tasks; }
	taskList.split('\n').forEach(function (task, id) {
		if (task) {
			tasks.push(parseTask(task, id.toString()));
		}
	});

	return tasks;
}

var TaskStore = (function (Store$$1) {
	function TaskStore(credentials) {
		var _this;
		Store$$1.call(this, 'task', {
			add: function add(currentState, task, next) {
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

			filter: function filter(currentState, filter$1, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				if (!currentState.filters) {
					currentState.filters = [];
				}
				var position = currentState.filters.indexOf(filter$1);
				if (position >= 0) {
					currentState.filters.splice(position, 1);
				} else {
					currentState.filters.push(filter$1);
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
			},

			do: function do$1(currentState, taskId, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				var task = currentState.tasks.find(function (task) { return task.id === taskId; });
				if (task) {
					task.done = !task.done;
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			},

			update: function update(currentState, taskData, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				var task = currentState.tasks.find(function (task) { return task.id === taskData.id; });
				if (task) {
					task = Object.assign({id: task.id}, parseTask(taskData.text));
				}
				currentState = calculateDataObject(currentState.tasks, currentState.filters);
				next(currentState);
				_this.saveTasks(currentState);
			},

			delete: function delete$1(currentState, taskId, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				var task = currentState.tasks.find(function (task) { return task.id === taskId; });
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
		if (typeof window !== 'undefined') {
			if (window.taskStoreInterval) {
				clearInterval(window.taskStoreInterval);
			}
			window.taskStoreInterval = setInterval(this.loadTasks.bind(this), 300000);
		}
	}

	if ( Store$$1 ) TaskStore.__proto__ = Store$$1;
	TaskStore.prototype = Object.create( Store$$1 && Store$$1.prototype );
	TaskStore.prototype.constructor = TaskStore;

	TaskStore.prototype.setCredentials = function setCredentials (credentials) {
		this.credentials = credentials;
		if (!this.data.tasks || this.data.tasks.length <= 0) {
			this.loadTasks();
		}
	};

	TaskStore.prototype.loadTasks = function loadTasks () {
		var this$1 = this;

		var taskList = '';
		if (!this.credentials) {
			return;
		}
		if (typeof localStorage !== 'undefined') {
			taskList = localStorage.getItem('todos');
			var tasks = parseTaskList(taskList);
			var newState = calculateDataObject(tasks, this.data.filters);
			this.next(newState);
		}
		fetch(router.getUrl('tasks-load'), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(this.credentials)
		}).then(function (data) { return data.json(); }).then(function (data) {
			taskList = data.tasks || '';
			var tasks = parseTaskList(taskList);
			var newState = calculateDataObject(tasks, this$1.data.filters);
			this$1.next(newState);
		});
	};

	TaskStore.prototype.saveTasks = function saveTasks (state) {
		var this$1 = this;

		if (typeof localStorage === 'undefined') { return; }
		if (!this.credentials) {
			return;
		}
		var fileContent = stringify(state.tasks);
		var obj = {credentials: this.credentials, data: fileContent};
		var body = JSON.stringify(obj);
		localStorage.setItem('todos', fileContent);

		clearTimeout(this.debouncer);
		this.debouncer = setTimeout((function () {
			fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			}).then(function (response) { return response.json(); }).then((function (data) {
				if (!data.tasks) { return; }
				var taskList = data.tasks || '';
				var tasks = parseTaskList(taskList);
				var newState = calculateDataObject(tasks, this$1.data.filters);
				this$1.next(newState);
			}).bind(this$1)).catch(function (error) { return console.error('Unexpected response from server: ', error); });
		}).bind(this), 2000);
	};

	return TaskStore;
}(main));

var UserStore = (function (Store) {
	function UserStore() {
		Store.call(this, 'user', {
			setUser: function setUser(currentState, data) {
				currentState = Object.assign({}, currentState, data);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('credentials', JSON.stringify(currentState));
				}
				return currentState;
			}
		});

		this.loadData();
	}

	if ( Store ) UserStore.__proto__ = Store;
	UserStore.prototype = Object.create( Store && Store.prototype );
	UserStore.prototype.constructor = UserStore;

	UserStore.prototype.loadData = function loadData () {
		var this$1 = this;

		if (typeof localStorage !== 'undefined') {
			setTimeout(function () {
				var credentials = localStorage.getItem('credentials') || '{}';
				this$1.next(JSON.parse(credentials));
			}, 100);
		} else {
			this.next({});
		}
	};

	return UserStore;
}(main));

var TaskNotifier = function TaskNotifier() {
	var this$1 = this;

	this.tasks = [];
	if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			if (permission === 'granted') {
				this$1.timeout = window.setTimeout(this$1.checkDueTasks.bind(this$1), 60000);
			}
		});
	}
};

TaskNotifier.prototype.checkDueTasks = function checkDueTasks () {
	clearTimeout(this.timeout);
	var now = new Date().getTime() / 1000 / 60;
	var dueTasks = this.tasks.filter(function (task) {
		return task.tags && task.tags.find(function (tag) {
			var date = tag.split(':').slice(1).join(':');
			if (date.indexOf('T') < 0) {
				date = new Date(date + 'T09:00');
				// no time component, so alert a day early at 9 AM
				date = date.getTime() - 86400000;
			}
			var timeStamp = new Date(date).getTime();
			timeStamp = Math.round(timeStamp / 1000 / 60);
			if (timeStamp >= now - 1 && timeStamp <= now + 1) {
				return true;
			} else {
				return false;
			}
		}) || false;
	});
	dueTasks.forEach(function (task) {
		if (!task.notified) {
			task.notified = true;
			new Notification(task.text, {
				body: task.toString()
			});
		}
	});
	this.timeout = setTimeout(this.checkDueTasks.bind(this), 60000);
};

TaskNotifier.prototype.setTasks = function setTasks (tasks) {
	this.tasks = tasks;
	if (this.timeout && typeof window !== 'undefined') {
		clearTimeout(this.timeout);
		window.setTimeout(this.checkDueTasks.bind(this), 60000);
	}
};

var TodoApp = function TodoApp() {
	var _this = this || {};
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
};

var prototypeAccessors = { styles: {},events: {} };

TodoApp.prototype.render = function render (data) {
	return (
		this.createNode( 'div', { class: "todo-app" },
				this.createNode( 'todo-header', { 'data-credentials': data.props.credentials }),
				this.createNode( 'todo-nav', { 'data-projects': data.props.projects, 'data-contexts': data.props.contexts, 'data-tags': data.props.tags, 'data-filters': data.props.filters }),
				this.createNode( 'todo-list', { 'data-store': this.taskStore, 'data-projects': data.props.projects, 'data-contexts': data.props.contexts, 'data-tasks': data.props.filteredTasks, 'data-filters': data.props.filters })
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		'todo-nav': {filter: function filter(event) {
			this.getHost().taskStore.filter(event.detail);
		}},
		'todo-header': {login: function login(event) {
			this.getHost().userStore.setUser(event.detail);
		}}
	};
};

TodoApp.prototype.onmount = function onmount (z) {
		var this$1 = this;

	z.import('./dumb/todo-header.js');
	z.import('./dumb/todo-nav.js');
	z.import('./smart/todo-list.js');

	this.taskStore = new TaskStore();
	this.userStore = new UserStore();
	this.notifier = new TaskNotifier();

	this.taskStore.on('changed', this.tasksChanged = function (data) {
		this$1.notifier.setTasks(data.tasks.filter(function (task) { return task.tags && task.tags.find(function (tag) { return tag.split(':')[0] === 'due'; }); }));
		setTimeout((function () {
			this$1.getHost().setProps(data);
		}).bind(this$1), 150);
	});
	this.userStore.on('changed', this.usersChanged = function (data) {
		if (data && Object.keys(data).length > 0) {
			this$1.taskStore.setCredentials(data);
			this$1.getHost().setProps('credentials', data);
		}
	});
};

TodoApp.prototype.onunmount = function onunmount () {
	this.taskStore.off('changed', this.tasksChanged);
	this.userStore.off('changed', this.usersChanged);
};

Object.defineProperties( TodoApp.prototype, prototypeAccessors );

return TodoApp;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL2xpYi90YXNrLW5vdGlmaWVyLmpzIiwiLi4vLi4vcGFnZXMvdG9kby1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNjb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCxldmVudFJlZ2lzdHJ5PXNjb3BlLl9fZXZlbnRSZWdpc3RyeT1zY29wZS5fX2V2ZW50UmVnaXN0cnl8fHt9O2Z1bmN0aW9uIHRyaWdnZXIodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWZvcih2YXIgYSxuPTAscj1ldmVudFJlZ2lzdHJ5W3RdLmxlbmd0aDthPWV2ZW50UmVnaXN0cnlbdF1bbl0sbjxyO24rPTEpe2lmKCExPT09YShlKSlicmVha319ZnVuY3Rpb24gb24odCxlKXtldmVudFJlZ2lzdHJ5W3RdfHwoZXZlbnRSZWdpc3RyeVt0XT1bXSksZXZlbnRSZWdpc3RyeVt0XS5wdXNoKGUpfWZ1bmN0aW9uIG9mZih0LGUpe2lmKGV2ZW50UmVnaXN0cnlbdF0paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7dmFyIGE9ZXZlbnRSZWdpc3RyeVt0XS5pbmRleE9mKGUpO2E+PTAmJmV2ZW50UmVnaXN0cnlbdF0uc3BsaWNlKGEsMSl9ZWxzZSBldmVudFJlZ2lzdHJ5W3RdPVtdfWZ1bmN0aW9uIG9uZSh0LGUpe3ZhciBhPWZ1bmN0aW9uKG4pe29mZih0LGEpLGUobil9O29uKHQsYSl9dmFyIGV2ZW50cz1PYmplY3QuZnJlZXplKHt0cmlnZ2VyOnRyaWdnZXIsb246b24sb2ZmOm9mZixvbmU6b25lfSksc2NvcGUkMT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxkYXRhPXNjb3BlJDEuX19nbGFzc2JpbFN0b3JlRGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGF8fHt9LHRyaWdnZXIkMT10cmlnZ2VyO2Z1bmN0aW9uIG1pcnJvcigpe3JldHVybiB0aGlzfWZ1bmN0aW9uIGRlZXBGcmVlemUodCl7aWYobnVsbD09PXR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudG9KU3x8XCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7Zm9yKHZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLGE9e3RvSlM6e3ZhbHVlOm1pcnJvci5iaW5kKHQpfX0sbj1mdW5jdGlvbih0LG4pe2FbZVt0XV09e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRlZXBGcmVlemUobil9LHNldDpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjaGFuZ2UgcHJvcGVydHkgXCInK2VbdF0rJ1wiIHRvIFwiJythKydcIiBvZiBhbiBpbW11dGFibGUgb2JqZWN0Jyl9fX0scj0wLG89dm9pZCAwO289dFtlW3JdXSxyPGUubGVuZ3RoO3IrPTEpbihyLG8pO3JldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLGEpKX12YXIgU3RvcmU9ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2lmKHRoaXMubmFtZT10fHxcInVubmFtZWRcIix0aGlzLnRyaWdnZXJlZD0hMSxPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXT1mdW5jdGlvbihhLG4pe2EuaW5kZXhPZihcIjpcIik+PTA/ZXZlbnRzW2VdKGEsbik6ZXZlbnRzW2VdKHQrXCItc3RvcmU6XCIrYSxuKX19KSxcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodmFyIG49T2JqZWN0LmtleXMoZSkscj1mdW5jdGlvbihlLHIpe2FbbltlXV09ZnVuY3Rpb24oZSl7dmFyIGE9cihkYXRhW3RdLmN1cnJlbnREYXRhLnRvSlMoKSxlLHRoaXMubmV4dC5iaW5kKHRoaXMpKTthJiZ0aGlzLm5leHQoYSl9LmJpbmQoYSl9LG89MCxpPXZvaWQgMDtpPWVbbltvXV0sbzxuLmxlbmd0aDtvKz0xKXIobyxpKTt0JiYoZGF0YVt0XT1kYXRhW3RdfHx7bG9hZGVkOiExLGN1cnJlbnREYXRhOmRlZXBGcmVlemUoW10pLGhpc3RvcmljRGF0YTpbXX0pfSxwcm90b3R5cGVBY2Nlc3NvcnM9e2RhdGE6e2NvbmZpZ3VyYWJsZTohMH19O3Byb3RvdHlwZUFjY2Vzc29ycy5kYXRhLmdldD1mdW5jdGlvbigpe3JldHVybiBkYXRhW3RoaXMubmFtZV0/ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKTpudWxsfSxTdG9yZS5wcm90b3R5cGUubG9hZGVkPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBkYXRhW3RdLmxvYWRlZH0pLmxlbmd0aDtpZih0PT09T2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoJiYhdGhpcy50cmlnZ2VyZWQpe3ZhciBlPXt9O09iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbih0KXtlW3RdPWRhdGFbdF0uY3VycmVudERhdGEudG9KUygpfSksdGhpcy50cmlnZ2VyZWQ9ITAsdHJpZ2dlciQxKFwiZ2xvYmFsOmRhdGEtbG9hZGVkXCIsZSl9fSxTdG9yZS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbih0KXtpZihkYXRhW3RoaXMubmFtZV0ubG9hZGVkPSEwLCh0PWRlZXBGcmVlemUodCkpIT09ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhKXtmb3IoZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5wdXNoKGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSk7ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5sZW5ndGg+MTA7KWRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEuc2hpZnQoKTtkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9dCx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEudG9KUygpKX10aGlzLmxvYWRlZCgpfSxTdG9yZS5wcm90b3R5cGUucHJldmlvdXM9ZnVuY3Rpb24oKXtkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLmxlbmd0aDwxfHwobmV3U3RhdGU9ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5wb3AoKSxkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9bmV3U3RhdGUsdHJpZ2dlciQxKHRoaXMubmFtZStcIi1zdG9yZTpjaGFuZ2VkXCIsZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKSkpfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTdG9yZS5wcm90b3R5cGUscHJvdG90eXBlQWNjZXNzb3JzKSxtb2R1bGUuZXhwb3J0cz1TdG9yZTtcbiIsInZhciByZWplY3REZWZhdWx0ID0gZnVuY3Rpb24gcmVqZWN0RGVmYXVsdChlcnJvcil7XG5cdHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgcHJvbWlzZTogJyArIGVycm9yKTtcbn07XG52YXIgZW1wdHlGdW5jID0gZnVuY3Rpb24oKXt9O1xuXG5mdW5jdGlvbiBOb3dQcm9taXNlKGZuKSB7XG5cdHZhciByZXNvbHZlVmFsdWUsIHJlamVjdFZhbHVlO1xuXG5cdHRoaXMudGhlbiA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICh0eXBlb2YgcmVqZWN0ICE9PSAnZnVuY3Rpb24nKSByZWplY3QgPSByZWplY3RGbjtcblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzRm4sIHJlakZuKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlakZuICE9PSAnZnVuY3Rpb24nKSByZWpGbiA9IHJlamVjdERlZmF1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIHJlc0ZuICE9PSAnZnVuY3Rpb24nKSByZXNGbiA9IGVtcHR5RnVuYztcblx0XHRcdGlmICghcmVqZWN0VmFsdWUpIHtcblx0XHRcdFx0cmVzRm4ocmVzb2x2ZShyZXNvbHZlVmFsdWUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0XHRcdHJlakZuKHJlamVjdFZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0dGhpcy5jYXRjaCA9IGZ1bmN0aW9uKHJlamVjdCkge1xuXHRcdGlmIChyZWplY3RWYWx1ZSkge1xuXHRcdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdERlZmF1bHQ7XG5cdFx0XHRyZWplY3QocmVqZWN0VmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRmdW5jdGlvbiByZXNvbHZlRm4oZGF0YSkge1xuXHRcdHJlc29sdmVWYWx1ZSA9IGRhdGE7XG5cdH1cblx0ZnVuY3Rpb24gcmVqZWN0Rm4oZGF0YSkge1xuXHRcdHJlamVjdFZhbHVlID0gZGF0YSB8fCAnRXJyb3InO1xuXHR9XG5cdGZuKHJlc29sdmVGbiwgcmVqZWN0Rm4pO1xufVxuXG5Ob3dQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdH0pO1xufTtcblxuTm93UHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbihlcnJvcikge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVqZWN0KGVycm9yKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLmFsbCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XG5cdFx0XHRpZiAoZW50cnkgaW5zdGFuY2VvZiBOb3dQcm9taXNlKSB7XG5cdFx0XHRcdGVudHJ5LnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IHZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHsgcmVqZWN0KGUpOyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGVudHJ5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IE5vd1Byb21pc2UgOiBQcm9taXNlO1xubW9kdWxlLmV4cG9ydHMuTm93UHJvbWlzZSA9IE5vd1Byb21pc2U7IiwidmFyIE5vd1Byb21pc2UgPSByZXF1aXJlKCdub3ctcHJvbWlzZScpO1xuXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNOb2RlKCkge1xuXHRyZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnIHx8ICFwcm9jZXNzLmJyb3dzZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGJvZHk6IG51bGxcblx0fTtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdGZvciAodmFyIGFsbCBpbiBkZWZhdWx0T3B0aW9ucykge1xuXHRcdGlmICghb3B0aW9uc1thbGxdKSBvcHRpb25zW2FsbF0gPSBkZWZhdWx0T3B0aW9uc1thbGxdO1xuXHR9XG5cdGlmIChpc0Jyb3dzZXIoKSkge1xuXHRcdC8vIGJyb3dzZXIgY29udGV4dFxuXHRcdGlmIChvcHRpb25zLmJyb3dzZXJCYXNlKSB7XG5cdFx0XHR1cmwgPSBvcHRpb25zLmJyb3dzZXJCYXNlICsgdXJsO1xuXHRcdFx0ZGVsZXRlIG9wdGlvbnMuYnJvd3NlckJhc2U7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cuZmV0Y2godXJsLCBvcHRpb25zKTtcblx0fSBlbHNlIGlmIChpc05vZGUoKSkge1xuXHRcdC8vIG5vZGVKUyBjb250ZXh0XG5cdFx0dmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cdFx0dmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcblx0XHRpZiAodXJsLm1hdGNoKC86XFwvXFwvLykpIHtcblx0XHRcdG9wdGlvbnMuaG9zdG5hbWUgPSB1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvKFteOi9dKylbLzpdLiokLywgJyQxJyk7XG5cdFx0XHRvcHRpb25zLnBvcnQgPSBwYXJzZUludCh1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvW146L10rOihcXGQrKVxcLy4qJC8sICckMScpIHx8IHVybC5tYXRjaCgvXmh0dHBzOi8pID8gJzQ0MycgOiAnODAnLCAxMCk7XG5cdFx0XHRvcHRpb25zLnBhdGggPSB1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvW146L10rKD86OlxcZCspPyhcXC8uKikkLywgJyQxJyk7XG5cdFx0XHRvcHRpb25zLnByb3RvY29sID0gdXJsLnJlcGxhY2UoL14oXFx3KzopXFwvXFwvLiokLywgJyQxJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMuaG9zdG5hbWUgPSAnbG9jYWxob3N0Jztcblx0XHRcdG9wdGlvbnMucG9ydCA9IDg4ODg7XG5cdFx0XHRvcHRpb25zLnBhdGggPSB1cmw7XG5cdFx0XHRvcHRpb25zLnByb3RvY29sID0gJ2h0dHA6Jztcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHJlcSA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdChvcHRpb25zLCAocmVzKSA9PiB7XG5cdFx0XHRcdGxldCBib2R5ID0gJyc7XG5cdFx0XHRcdHJlcy5vbignZGF0YScsIGNodW5rID0+IGJvZHkgKz0gY2h1bmspO1xuXHRcdFx0XHRyZXMub24oJ2VuZCcsICgpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPCAzMDAgJiYgcmVzLnN0YXR1c0NvZGUgPj0gMjAwKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7XG5cdFx0XHRcdFx0XHRcdGpzb246ICgpID0+IEpTT04ucGFyc2UoYm9keSksXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICgpID0+IGJvZHksXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGVcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0XHRcdFx0c3RhdHVzTWVzc2FnZTogcmVzLnN0YXR1c01lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICgpID0+IGJvZHksXG5cdFx0XHRcdFx0XHRcdGpzb246ICgpID0+IEpTT04ucGFyc2UoYm9keSlcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJlcS5vbignZXJyb3InLCByZWplY3QpO1xuXHRcdFx0aWYgKG9wdGlvbnMuYm9keSkge1xuXHRcdFx0XHRyZXEud3JpdGUob3B0aW9ucy5ib2R5KTtcblx0XHRcdH1cblx0XHRcdHJlcS5lbmQoKTtcblx0XHR9KTtcblx0fVxufTsiLCJpbXBvcnQgcm91dGVJbXBvcnRzIGZyb20gJy4uL3JvdXRlcy5qc29uJztcbmxldCByb3V0ZXMgPSByb3V0ZUltcG9ydHM7XG5sZXQgY3VycmVudFJvdXRlID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlblBhZ2Uocm91dGUpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuXHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJvdXRlLmNvbXBvbmVudCk7XG5cdGVsLnByb3BzID0gcm91dGUuZGF0YTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmFwcGVuZENoaWxkKGVsKTtcblx0aWYgKHJvdXRlLnRpdGxlKSB7XG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy50aXRsZSA9IHJvdXRlLnRpdGxlKTtcblx0fVxuXG5cdHdpbmRvdy5aaW5vLmltcG9ydC5jYWxsKHt9LCAnLycgKyByb3V0ZS5jb21wb25lbnQgKyAnLmpzJyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LnBvcHN0YXRlQXR0YWNoZWQpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdGF0ZSAmJiBvcGVuUGFnZShldmVudC5zdGF0ZSk7XG5cdH0sIGZhbHNlKTtcblx0d2luZG93LnBvcHN0YXRlQXR0YWNoZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcblx0XHRyb3V0ZXMgPSBuZXdSb3V0ZXM7XG5cdH0sXG5cblx0cm91dGUocGF0aCkge1xuXHRcdC8vIGlmIHdlIGhhdmUgYSBkaXJlY3QgbWF0Y2gsIGp1c3QgcmV0dXJuIGl0XG5cdFx0aWYgKHJvdXRlc1twYXRoXSkgcmV0dXJuIHJvdXRlc1twYXRoXTtcblxuXHRcdC8vIGlmIHdlIG5lZWQgbW9yZSBkZXRhaWxlZCBmaWx0ZXJpbmcuLi5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAocm91dGUgPT4ge1xuXHRcdFx0bGV0IG5hbWVzID0gWycnXTtcblx0XHRcdGxldCByb3V0ZUV4cHJlc3Npb24gPSByb3V0ZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiB7XG5cdFx0XHRcdG5hbWVzLnB1c2gobmFtZSk7XG5cdFx0XHRcdHJldHVybiAnKC4qPyknO1xuXHRcdFx0fSkucmVwbGFjZSgvXFwkfFxcXi9nLCAnXFxcXCQmJyk7XG5cdFx0XHRyb3V0ZUV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKCdeJyArIHJvdXRlRXhwcmVzc2lvbiArICckJyk7XG5cdFx0XHRsZXQgcmVzdWx0ID0gcm91dGVFeHByZXNzaW9uLmV4ZWMocGF0aCk7XG5cdFx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0bGV0IGRhdGEgPSB7fTtcblx0XHRcdG5hbWVzLnNsaWNlKDEpLmZvckVhY2goKG5hbWUsIGlkeCkgPT4ge1xuXHRcdFx0XHRkYXRhW25hbWVdID0gcmVzdWx0W2lkeCArIDFdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVzW3JvdXRlXSwge2RhdGF9KTtcblx0XHR9KS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdClbMF0gfHwgZmFsc2U7XG5cdH0sXG5cblx0Z2V0Q3VycmVudCgpIHtcblx0XHRyZXR1cm4gY3VycmVudFJvdXRlO1xuXHR9LFxuXG5cdGdldFVybChuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHJvdXRlID0gT2JqZWN0LmtleXMocm91dGVzKS5maWx0ZXIocm91dGUgPT4gcm91dGVzW3JvdXRlXS5uYW1lID09PSBuYW1lKVswXTtcblx0XHRsZXQgdXJsID0gcm91dGU7XG5cblx0XHRpZiAocm91dGUpIHtcblx0XHRcdHVybCA9IHJvdXRlLnJlcGxhY2UoLzooW2Etel0rKS9nLCAoZywgbmFtZSkgPT4gZGF0YSAmJiBkYXRhW25hbWVdIHx8IG51bGwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1cmw7XG5cdH0sXG5cblx0Z290byhuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHVybCA9IHRoaXMuZ2V0VXJsKG5hbWUsIGRhdGEpO1xuXHRcdHRoaXMub3Blbih1cmwpO1xuXHR9LFxuXG5cdG9wZW4odXJsKSB7XG5cdFx0bGV0IHJvdXRlID0gdGhpcy5yb3V0ZSh1cmwpO1xuXHRcdGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUocm91dGUsIG51bGwsIHVybCk7XG5cdFx0XHRvcGVuUGFnZShyb3V0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGRvIGEgcmVkaXJlY3Rcblx0XHRcdC8vIC4uLlxuXHRcdH1cblx0fVxufTsiLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL2xpYi9mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL2xpYi9yb3V0ZXInO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCBmaWx0ZXJzKSB7XG5cdGlmICghZmlsdGVycykgZmlsdGVycyA9IFtmYWxzZV07XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0dGFza3MsXG5cdFx0cHJvamVjdHM6IFtdLFxuXHRcdGR1ZVRhc2tzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpLFxuXHRcdGNvbnRleHRzOiBbXSxcblx0XHRmaWx0ZXJlZFRhc2tzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG5cdFx0XHRyZXR1cm4gZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IChmaWx0ZXIgPT09IHRydWUgJiYgdGFzay5kb25lKSB8fCAoZmlsdGVyID09PSBmYWxzZSAmJiAhdGFzay5kb25lKSB8fCAodGFzay5jb250ZXh0cyAmJiB0YXNrLmNvbnRleHRzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSB8fCAodGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSB8fCAodGFzay50YWdOYW1lcyAmJiB0YXNrLnRhZ05hbWVzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSkubGVuZ3RoID09PSBmaWx0ZXJzLmxlbmd0aDtcblx0XHR9KSxcblx0XHR0YWdzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MpLm1hcCh0YXNrID0+IHRhc2sudGFncy5tYXAodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdLnRyaW0oKSkuam9pbignLCcpKS5qb2luKCcsJykuc3BsaXQoJywnKSxcblx0XHRmaWx0ZXJzXG5cdH07XG5cdGxldCBwcm9qZWN0cyA9IHt9O1xuXHRsZXQgY29udGV4dHMgPSB7fTtcblx0bGV0IHRhZ3MgPSB7fTtcblxuXHR0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZCkgPT4ge1xuXHRcdHRhc2suaWQgPSBpZC50b1N0cmluZygpO1xuXHRcdHRhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdHNbcHJvamVjdF0gKz0gMSk7XG5cdFx0dGFzay5jb250ZXh0cyAmJiB0YXNrLmNvbnRleHRzLmZvckVhY2goY29udGV4dCA9PiBjb250ZXh0c1tjb250ZXh0XSArPSAxKTtcblx0XHR0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZvckVhY2godGFnID0+IHRhZ3NbdGFnXSArPSAxKTtcblx0fSk7XG5cdHJlc3VsdC5maWx0ZXJlZFRhc2tzID0gcmVzdWx0LmZpbHRlcmVkVGFza3Muc29ydCgodGFza0EsIHRhc2tCKSA9PiB7XG5cdFx0bGV0IGR1ZVRhZ0EgPSB0YXNrQS50YWdzICYmIHRhc2tBLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRsZXQgZHVlVGFnQiA9IHRhc2tCLnRhZ3MgJiYgdGFza0IudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpO1xuXHRcdGlmIChkdWVUYWdBKSB7XG5cdFx0XHRkdWVUYWdBID0gZHVlVGFnQS5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0EgPSBuZXcgRGF0ZShkdWVUYWdBKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0EgPSA5MzEzNDc0NTYwMDAwMDtcblx0XHR9XG5cdFx0aWYgKGR1ZVRhZ0IpIHtcblx0XHRcdGR1ZVRhZ0IgPSBkdWVUYWdCLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpO1xuXHRcdFx0ZHVlVGFnQiA9IG5ldyBEYXRlKGR1ZVRhZ0IpLmdldFRpbWUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZHVlVGFnQiA9IDkzMTM0NzQ1NjAwMDAwO1xuXHRcdH1cblx0XHRyZXR1cm4gZHVlVGFnQSAtIGR1ZVRhZ0I7XG5cdH0pO1xuXG5cdHJlc3VsdC5wcm9qZWN0cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcblx0cmVzdWx0LmNvbnRleHRzID0gT2JqZWN0LmtleXMoY29udGV4dHMpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVRhc2sodGFzaywgZG9uZU9ubHkpIHtcblx0aWYgKCFkb25lT25seSAmJiB0YXNrLmRvbmUgfHwgZG9uZU9ubHkgJiYgIXRhc2suZG9uZSkgcmV0dXJuICcnO1xuXHRyZXR1cm4gW1xuXHRcdHRhc2suZG9uZSA/ICd4ICcgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA6ICcnLFxuXHRcdHRhc2sucHJpb3JpdHkgfHwgJycsXG5cdFx0dGFzay50ZXh0LnRyaW0oKSxcblx0XHR0YXNrLmxpbmtzICYmIHRhc2subGlua3MubWFwKGxpbmsgPT4gbGluay51cmwpLmpvaW4oJyAnKSxcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuam9pbignICcpLFxuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5qb2luKCcgJyksXG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5qb2luKCcgJylcblx0XS5qb2luKCcgJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodGFza3MsIGRvbmVPbmx5KSB7XG5cdHJldHVybiB0YXNrcy5tYXAodGFzayA9PiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFzayh0YXNrLCBpZCkge1xuXHRsZXQgcHJvamVjdHMgPSB0YXNrLm1hdGNoKC9cXHMoXFwrXFx3KykvZyk7XG5cdGxldCBwcmlvcml0eSA9IHRhc2subWF0Y2goL1xccz8oXFwoW0EtWl1cXCkpXFxzKy9nKTtcblx0bGV0IGNvbnRleHRzID0gdGFzay5tYXRjaCgvXFxzKEBcXHcrKS9nKTtcblx0bGV0IHRhZ3MgPSB0YXNrLm1hdGNoKC9cXHMoXFx3KzpbXFx3LDotXSspL2cpO1xuXHRsZXQgdGV4dCA9IHRhc2sucmVwbGFjZSgvKD86XFxzKig/OlxcKFtBLVpdXFwpKVxccyspfCg/Olxcc1xcK1xcdyspfCg/Olxcc0BcXHcrKXwoPzpcXGIoPzpcXHcrOltcXHcsOi1dKykpL2csICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuXHRsZXQgbGlua3MgPSB0ZXh0Lm1hdGNoKC9cXGJodHRwcz86XFwvXFwvW14gXSsvZyk7XG5cdHByb2plY3RzID0gcHJvamVjdHMgJiYgcHJvamVjdHMubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRjb250ZXh0cyA9IGNvbnRleHRzICYmIGNvbnRleHRzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0dGFncyA9IHRhZ3MgJiYgdGFncy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdGxpbmtzID0gbGlua3MgJiYgbGlua3MubWFwKGxpbmsgPT4ge1xuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UobGluaywgJycpLnRyaW0oKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXJsOiBsaW5rLFxuXHRcdFx0bmFtZTogbGluay5tYXRjaCgvaHR0cHM/OlxcL1xcLyhbXi9dKykvKVsxXVxuXHRcdH07XG5cdH0pIHx8IFtdO1xuXHRsZXQgdGFza09iamVjdCA9IHtcblx0XHRpZCxcblx0XHR0ZXh0LFxuXHRcdHByaW9yaXR5OiBwcmlvcml0eSAmJiBwcmlvcml0eS50b1N0cmluZygpLnRyaW0oKSB8fCAnJyxcblx0XHRwcm9qZWN0cyxcblx0XHRjb250ZXh0cyxcblx0XHR0YWdzLFxuXHRcdHRhZ05hbWVzOiB0YWdzICYmIHRhZ3MubWFwKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSkgfHwgW10sXG5cdFx0bGlua3MsXG5cdFx0dG9TdHJpbmc6ICgpID0+IHN0cmluZ2lmeVRhc2sodGFza09iamVjdClcblx0fTtcblxuXHRyZXR1cm4gdGFza09iamVjdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCkge1xuXHRsZXQgdGFza3MgPSBbXTtcblx0aWYgKCF0YXNrTGlzdCkgcmV0dXJuIHRhc2tzO1xuXHR0YXNrTGlzdC5zcGxpdCgnXFxuJykuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHRpZiAodGFzaykge1xuXHRcdFx0dGFza3MucHVzaChwYXJzZVRhc2sodGFzaywgaWQudG9TdHJpbmcoKSkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKGNyZWRlbnRpYWxzKSB7XG5cdFx0bGV0IF90aGlzO1xuXHRcdHN1cGVyKCd0YXNrJywge1xuXHRcdFx0YWRkKGN1cnJlbnRTdGF0ZSwgdGFzaywgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhc2sgPSBwYXJzZVRhc2sodGFzayk7XG5cdFx0XHRcdHRhc2suaWQgPSBjdXJyZW50U3RhdGUudGFza3MubGVuZ3RoLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZmlsdGVyKGN1cnJlbnRTdGF0ZSwgZmlsdGVyLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUuZmlsdGVycykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5maWx0ZXJzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHBvc2l0aW9uID0gY3VycmVudFN0YXRlLmZpbHRlcnMuaW5kZXhPZihmaWx0ZXIpO1xuXHRcdFx0XHRpZiAocG9zaXRpb24gPj0gMCkge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5maWx0ZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmZpbHRlcnMucHVzaChmaWx0ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGRvKGN1cnJlbnRTdGF0ZSwgdGFza0lkLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBjdXJyZW50U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0dGFzay5kb25lID0gIXRhc2suZG9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKGN1cnJlbnRTdGF0ZSwgdGFza0RhdGEsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IGN1cnJlbnRTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0RhdGEuaWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2sgPSBPYmplY3QuYXNzaWduKHtpZDogdGFzay5pZH0sIHBhcnNlVGFzayh0YXNrRGF0YS50ZXh0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZShjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcy5zcGxpY2UoY3VycmVudFN0YXRlLnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHRcdF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMubG9hZFRhc2tzKCk7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRpZiAod2luZG93LnRhc2tTdG9yZUludGVydmFsKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwod2luZG93LnRhc2tTdG9yZUludGVydmFsKTtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubG9hZFRhc2tzLmJpbmQodGhpcyksIDMwMDAwMCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG5cdFx0aWYgKCF0aGlzLmRhdGEudGFza3MgfHwgdGhpcy5kYXRhLnRhc2tzLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHRcdH1cblx0fVxuXG5cdGxvYWRUYXNrcygpIHtcblx0XHRsZXQgdGFza0xpc3QgPSAnJztcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0YXNrTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuXHRcdFx0bGV0IHRhc2tzID0gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCB0aGlzLmRhdGEuZmlsdGVycyk7XG5cdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdH1cblx0XHRmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1sb2FkJyksIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5jcmVkZW50aWFscylcblx0XHR9KS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHR0YXNrTGlzdCA9IGRhdGEudGFza3MgfHwgJyc7XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIHRoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdHRoaXMubmV4dChuZXdTdGF0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRzYXZlVGFza3Moc3RhdGUpIHtcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGZpbGVDb250ZW50ID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzKTtcblx0XHRsZXQgb2JqID0ge2NyZWRlbnRpYWxzOiB0aGlzLmNyZWRlbnRpYWxzLCBkYXRhOiBmaWxlQ29udGVudH07XG5cdFx0bGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIGZpbGVDb250ZW50KTtcblxuXHRcdGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlcik7XG5cdFx0dGhpcy5kZWJvdW5jZXIgPSBzZXRUaW1lb3V0KCgoKSA9PiB7XG5cdFx0XHRmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1zYXZlJyksIHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IGJvZHlcblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChkYXRhID0+IHtcblx0XHRcdFx0aWYgKCFkYXRhLnRhc2tzKSByZXR1cm47XG5cdFx0XHRcdGxldCB0YXNrTGlzdCA9IGRhdGEudGFza3MgfHwgJyc7XG5cdFx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCB0aGlzLmRhdGEuZmlsdGVycyk7XG5cdFx0XHRcdHRoaXMubmV4dChuZXdTdGF0ZSk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHJlc3BvbnNlIGZyb20gc2VydmVyOiAnLCBlcnJvcikpO1xuXHRcdH0pLmJpbmQodGhpcyksIDIwMDApO1xuXHR9XG5cbn0iLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCd1c2VyJywge1xuXHRcdFx0c2V0VXNlcihjdXJyZW50U3RhdGUsIGRhdGEpIHtcblx0XHRcdFx0Y3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFN0YXRlLCBkYXRhKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NyZWRlbnRpYWxzJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMubG9hZERhdGEoKTtcblx0fVxuXG5cdGxvYWREYXRhKCkge1xuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxldCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFscycpIHx8ICd7fSc7XG5cdFx0XHRcdHRoaXMubmV4dChKU09OLnBhcnNlKGNyZWRlbnRpYWxzKSk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm5leHQoe30pO1xuXHRcdH1cblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tOb3RpZmllciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ05vdGlmaWNhdGlvbicgaW4gd2luZG93ICYmIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZGVuaWVkJykge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb24gPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG5cdFx0XHRcdFx0dGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tEdWVUYXNrcygpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblx0XHRsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwIC8gNjA7XG5cdFx0bGV0IGR1ZVRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIodGFzayA9PiB7XG5cdFx0XHRyZXR1cm4gdGFzay50YWdzICYmIHRhc2sudGFncy5maW5kKHRhZyA9PiB7XG5cdFx0XHRcdGxldCBkYXRlID0gdGFnLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpO1xuXHRcdFx0XHRpZiAoZGF0ZS5pbmRleE9mKCdUJykgPCAwKSB7XG5cdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUgKyAnVDA5OjAwJyk7XG5cdFx0XHRcdFx0Ly8gbm8gdGltZSBjb21wb25lbnQsIHNvIGFsZXJ0IGEgZGF5IGVhcmx5IGF0IDkgQU1cblx0XHRcdFx0XHRkYXRlID0gZGF0ZS5nZXRUaW1lKCkgLSA4NjQwMDAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGltZVN0YW1wID0gbmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpO1xuXHRcdFx0XHR0aW1lU3RhbXAgPSBNYXRoLnJvdW5kKHRpbWVTdGFtcCAvIDEwMDAgLyA2MCk7XG5cdFx0XHRcdGlmICh0aW1lU3RhbXAgPj0gbm93IC0gMSAmJiB0aW1lU3RhbXAgPD0gbm93ICsgMSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSkgfHwgZmFsc2U7XG5cdFx0fSk7XG5cdFx0ZHVlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblx0XHRcdGlmICghdGFzay5ub3RpZmllZCkge1xuXHRcdFx0XHR0YXNrLm5vdGlmaWVkID0gdHJ1ZTtcblx0XHRcdFx0bmV3IE5vdGlmaWNhdGlvbih0YXNrLnRleHQsIHtcblx0XHRcdFx0XHRib2R5OiB0YXNrLnRvU3RyaW5nKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmNoZWNrRHVlVGFza3MuYmluZCh0aGlzKSwgNjAwMDApO1xuXHR9XG5cblx0c2V0VGFza3ModGFza3MpIHtcblx0XHR0aGlzLnRhc2tzID0gdGFza3M7XG5cdFx0aWYgKHRoaXMudGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNoZWNrRHVlVGFza3MuYmluZCh0aGlzKSwgNjAwMDApO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdG9kby1hcHAuY3NzJztcbmltcG9ydCBUYXNrU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3Rhc2stc3RvcmUnO1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvdXNlci1zdG9yZSc7XG5pbXBvcnQgVGFza05vdGlmaWVyIGZyb20gJy4uL2xpYi90YXNrLW5vdGlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0Ly8gZGVmaW5lIGluaXRpYWwgcHJvcHNcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdHRhc2tzOiBbXSxcblx0XHRcdGZpbHRlcmVkVGFza3M6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHRwcm9qZWN0czogW10sXG5cdFx0XHRkdWVUYXNrczogW10sXG5cdFx0XHRjb250ZXh0czogW10sXG5cdFx0XHR0YWdzOiBbXSxcblx0XHRcdGNyZWRlbnRpYWxzOiB7fVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1hcHBcIj5cblx0XHRcdFx0PHRvZG8taGVhZGVyIGRhdGEtY3JlZGVudGlhbHM9e2RhdGEucHJvcHMuY3JlZGVudGlhbHN9Lz5cblx0XHRcdFx0PHRvZG8tbmF2IGRhdGEtcHJvamVjdHM9e2RhdGEucHJvcHMucHJvamVjdHN9IGRhdGEtY29udGV4dHM9e2RhdGEucHJvcHMuY29udGV4dHN9IGRhdGEtdGFncz17ZGF0YS5wcm9wcy50YWdzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0XHQ8dG9kby1saXN0IGRhdGEtc3RvcmU9e3RoaXMudGFza1N0b3JlfSBkYXRhLXByb2plY3RzPXtkYXRhLnByb3BzLnByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmNvbnRleHRzfSBkYXRhLXRhc2tzPXtkYXRhLnByb3BzLmZpbHRlcmVkVGFza3N9IGRhdGEtZmlsdGVycz17ZGF0YS5wcm9wcy5maWx0ZXJzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHN0eWxlcygpIHsgcmV0dXJuIHN0eWxlczsgfVxuXHRnZXQgZXZlbnRzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQndG9kby1uYXYnOiB7ZmlsdGVyKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnRhc2tTdG9yZS5maWx0ZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH19LFxuXHRcdFx0J3RvZG8taGVhZGVyJzoge2xvZ2luKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnVzZXJTdG9yZS5zZXRVc2VyKGV2ZW50LmRldGFpbCk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8taGVhZGVyLmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdi5qcycpO1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8tbGlzdC5qcycpO1xuXG5cdFx0dGhpcy50YXNrU3RvcmUgPSBuZXcgVGFza1N0b3JlKCk7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSBuZXcgVXNlclN0b3JlKCk7XG5cdFx0dGhpcy5ub3RpZmllciA9IG5ldyBUYXNrTm90aWZpZXIoKTtcblxuXHRcdHRoaXMudGFza1N0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdHRoaXMubm90aWZpZXIuc2V0VGFza3MoZGF0YS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpKTtcblx0XHRcdHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YSk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpLCAxNTApO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YXNrU3RvcmUuc2V0Q3JlZGVudGlhbHMoZGF0YSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjcmVkZW50aWFscycsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b251bm1vdW50KCkge1xuXHRcdHRoaXMudGFza1N0b3JlLm9mZignY2hhbmdlZCcsIHRoaXMudGFza3NDaGFuZ2VkKTtcblx0XHR0aGlzLnVzZXJTdG9yZS5vZmYoJ2NoYW5nZWQnLCB0aGlzLnVzZXJzQ2hhbmdlZCk7XG5cdH1cbn0iXSwibmFtZXMiOlsiZ2xvYmFsIiwiTm93UHJvbWlzZSIsImNvbnN0IiwibGV0Iiwic3VwZXIiLCJmaWx0ZXIiLCJ0aGlzIiwiU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU9BLGNBQU0sQ0FBQ0EsY0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsU0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFD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
