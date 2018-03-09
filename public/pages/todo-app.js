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
			var newState = calculateDataObject(tasks);
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
			var newState = calculateDataObject(tasks);
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

	this.taskStore.on('changed', this.tasksChanged = function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL3BhZ2VzL3RvZG8tYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBzY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsZXZlbnRSZWdpc3RyeT1zY29wZS5fX2V2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5fHx7fTtmdW5jdGlvbiB0cmlnZ2VyKHQsZSl7aWYoZXZlbnRSZWdpc3RyeVt0XSlmb3IodmFyIGEsbj0wLHI9ZXZlbnRSZWdpc3RyeVt0XS5sZW5ndGg7YT1ldmVudFJlZ2lzdHJ5W3RdW25dLG48cjtuKz0xKXtpZighMT09PWEoZSkpYnJlYWt9fWZ1bmN0aW9uIG9uKHQsZSl7ZXZlbnRSZWdpc3RyeVt0XXx8KGV2ZW50UmVnaXN0cnlbdF09W10pLGV2ZW50UmVnaXN0cnlbdF0ucHVzaChlKX1mdW5jdGlvbiBvZmYodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe3ZhciBhPWV2ZW50UmVnaXN0cnlbdF0uaW5kZXhPZihlKTthPj0wJiZldmVudFJlZ2lzdHJ5W3RdLnNwbGljZShhLDEpfWVsc2UgZXZlbnRSZWdpc3RyeVt0XT1bXX1mdW5jdGlvbiBvbmUodCxlKXt2YXIgYT1mdW5jdGlvbihuKXtvZmYodCxhKSxlKG4pfTtvbih0LGEpfXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZX0pLHNjb3BlJDE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhfHx7fSx0cmlnZ2VyJDE9dHJpZ2dlcjtmdW5jdGlvbiBtaXJyb3IoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBkZWVwRnJlZXplKHQpe2lmKG51bGw9PT10fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvSlN8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybiB0O2Zvcih2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSxhPXt0b0pTOnt2YWx1ZTptaXJyb3IuYmluZCh0KX19LG49ZnVuY3Rpb24odCxuKXthW2VbdF1dPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBkZWVwRnJlZXplKG4pfSxzZXQ6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2hhbmdlIHByb3BlcnR5IFwiJytlW3RdKydcIiB0byBcIicrYSsnXCIgb2YgYW4gaW1tdXRhYmxlIG9iamVjdCcpfX19LHI9MCxvPXZvaWQgMDtvPXRbZVtyXV0scjxlLmxlbmd0aDtyKz0xKW4ocixvKTtyZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSxhKSl9dmFyIFN0b3JlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztpZih0aGlzLm5hbWU9dHx8XCJ1bm5hbWVkXCIsdGhpcy50cmlnZ2VyZWQ9ITEsT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09ZnVuY3Rpb24oYSxuKXthLmluZGV4T2YoXCI6XCIpPj0wP2V2ZW50c1tlXShhLG4pOmV2ZW50c1tlXSh0K1wiLXN0b3JlOlwiK2Esbil9fSksXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHZhciBuPU9iamVjdC5rZXlzKGUpLHI9ZnVuY3Rpb24oZSxyKXthW25bZV1dPWZ1bmN0aW9uKGUpe3ZhciBhPXIoZGF0YVt0XS5jdXJyZW50RGF0YS50b0pTKCksZSx0aGlzLm5leHQuYmluZCh0aGlzKSk7YSYmdGhpcy5uZXh0KGEpfS5iaW5kKGEpfSxvPTAsaT12b2lkIDA7aT1lW25bb11dLG88bi5sZW5ndGg7bys9MSlyKG8saSk7dCYmKGRhdGFbdF09ZGF0YVt0XXx8e2xvYWRlZDohMSxjdXJyZW50RGF0YTpkZWVwRnJlZXplKFtdKSxoaXN0b3JpY0RhdGE6W119KX0scHJvdG90eXBlQWNjZXNzb3JzPXtkYXRhOntjb25maWd1cmFibGU6ITB9fTtwcm90b3R5cGVBY2Nlc3NvcnMuZGF0YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZGF0YVt0aGlzLm5hbWVdP2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCk6bnVsbH0sU3RvcmUucHJvdG90eXBlLmxvYWRlZD1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZGF0YVt0XS5sb2FkZWR9KS5sZW5ndGg7aWYodD09PU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCYmIXRoaXMudHJpZ2dlcmVkKXt2YXIgZT17fTtPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24odCl7ZVt0XT1kYXRhW3RdLmN1cnJlbnREYXRhLnRvSlMoKX0pLHRoaXMudHJpZ2dlcmVkPSEwLHRyaWdnZXIkMShcImdsb2JhbDpkYXRhLWxvYWRlZFwiLGUpfX0sU3RvcmUucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24odCl7aWYoZGF0YVt0aGlzLm5hbWVdLmxvYWRlZD0hMCwodD1kZWVwRnJlZXplKHQpKSE9PWRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSl7Zm9yKGRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucHVzaChkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEpO2RhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEubGVuZ3RoPjEwOylkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLnNoaWZ0KCk7ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPXQsdHJpZ2dlciQxKHRoaXMubmFtZStcIi1zdG9yZTpjaGFuZ2VkXCIsZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKSl9dGhpcy5sb2FkZWQoKX0sU3RvcmUucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKCl7ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5sZW5ndGg8MXx8KG5ld1N0YXRlPWRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucG9wKCksZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPW5ld1N0YXRlLHRyaWdnZXIkMSh0aGlzLm5hbWUrXCItc3RvcmU6Y2hhbmdlZFwiLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCkpKX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3RvcmUucHJvdG90eXBlLHByb3RvdHlwZUFjY2Vzc29ycyksbW9kdWxlLmV4cG9ydHM9U3RvcmU7XG4iLCJ2YXIgcmVqZWN0RGVmYXVsdCA9IGZ1bmN0aW9uIHJlamVjdERlZmF1bHQoZXJyb3Ipe1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IHByb21pc2U6ICcgKyBlcnJvcik7XG59O1xudmFyIGVtcHR5RnVuYyA9IGZ1bmN0aW9uKCl7fTtcblxuZnVuY3Rpb24gTm93UHJvbWlzZShmbikge1xuXHR2YXIgcmVzb2x2ZVZhbHVlLCByZWplY3RWYWx1ZTtcblxuXHR0aGlzLnRoZW4gPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0Rm47XG5cdFx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc0ZuLCByZWpGbikge1xuXHRcdFx0aWYgKHR5cGVvZiByZWpGbiAhPT0gJ2Z1bmN0aW9uJykgcmVqRm4gPSByZWplY3REZWZhdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiByZXNGbiAhPT0gJ2Z1bmN0aW9uJykgcmVzRm4gPSBlbXB0eUZ1bmM7XG5cdFx0XHRpZiAoIXJlamVjdFZhbHVlKSB7XG5cdFx0XHRcdHJlc0ZuKHJlc29sdmUocmVzb2x2ZVZhbHVlKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWplY3QocmVqZWN0VmFsdWUpO1xuXHRcdFx0XHRyZWpGbihyZWplY3RWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdHRoaXMuY2F0Y2ggPSBmdW5jdGlvbihyZWplY3QpIHtcblx0XHRpZiAocmVqZWN0VmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqZWN0ICE9PSAnZnVuY3Rpb24nKSByZWplY3QgPSByZWplY3REZWZhdWx0O1xuXHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZUZuKGRhdGEpIHtcblx0XHRyZXNvbHZlVmFsdWUgPSBkYXRhO1xuXHR9XG5cdGZ1bmN0aW9uIHJlamVjdEZuKGRhdGEpIHtcblx0XHRyZWplY3RWYWx1ZSA9IGRhdGEgfHwgJ0Vycm9yJztcblx0fVxuXHRmbihyZXNvbHZlRm4sIHJlamVjdEZuKTtcbn1cblxuTm93UHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHJlc29sdmUodmFsdWUpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UucmVqZWN0ID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHJlamVjdChlcnJvcik7XG5cdH0pO1xufTtcblxuTm93UHJvbWlzZS5hbGwgPSBmdW5jdGlvbih2YWx1ZXMpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuXHRcdFx0aWYgKGVudHJ5IGluc3RhbmNlb2YgTm93UHJvbWlzZSkge1xuXHRcdFx0XHRlbnRyeS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlKSB7IHJlamVjdChlKTsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChlbnRyeSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IHZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHR9XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyBOb3dQcm9taXNlIDogUHJvbWlzZTtcbm1vZHVsZS5leHBvcnRzLk5vd1Byb21pc2UgPSBOb3dQcm9taXNlOyIsInZhciBOb3dQcm9taXNlID0gcmVxdWlyZSgnbm93LXByb21pc2UnKTtcblxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZSgpIHtcblx0cmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyB8fCAhcHJvY2Vzcy5icm93c2VyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHR2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRib2R5OiBudWxsXG5cdH07XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRmb3IgKHZhciBhbGwgaW4gZGVmYXVsdE9wdGlvbnMpIHtcblx0XHRpZiAoIW9wdGlvbnNbYWxsXSkgb3B0aW9uc1thbGxdID0gZGVmYXVsdE9wdGlvbnNbYWxsXTtcblx0fVxuXHRpZiAoaXNCcm93c2VyKCkpIHtcblx0XHQvLyBicm93c2VyIGNvbnRleHRcblx0XHRpZiAob3B0aW9ucy5icm93c2VyQmFzZSkge1xuXHRcdFx0dXJsID0gb3B0aW9ucy5icm93c2VyQmFzZSArIHVybDtcblx0XHRcdGRlbGV0ZSBvcHRpb25zLmJyb3dzZXJCYXNlO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93LmZldGNoKHVybCwgb3B0aW9ucyk7XG5cdH0gZWxzZSBpZiAoaXNOb2RlKCkpIHtcblx0XHQvLyBub2RlSlMgY29udGV4dFxuXHRcdHZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuXHRcdHZhciBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5cdFx0aWYgKHVybC5tYXRjaCgvOlxcL1xcLy8pKSB7XG5cdFx0XHRvcHRpb25zLmhvc3RuYW1lID0gdXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcLyhbXjovXSspWy86XS4qJC8sICckMScpO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gcGFyc2VJbnQodXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcL1teOi9dKzooXFxkKylcXC8uKiQvLCAnJDEnKSB8fCB1cmwubWF0Y2goL15odHRwczovKSA/ICc0NDMnIDogJzgwJywgMTApO1xuXHRcdFx0b3B0aW9ucy5wYXRoID0gdXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcL1teOi9dKyg/OjpcXGQrKT8oXFwvLiopJC8sICckMScpO1xuXHRcdFx0b3B0aW9ucy5wcm90b2NvbCA9IHVybC5yZXBsYWNlKC9eKFxcdys6KVxcL1xcLy4qJC8sICckMScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmhvc3RuYW1lID0gJ2xvY2FsaG9zdCc7XG5cdFx0XHRvcHRpb25zLnBvcnQgPSA4ODg4O1xuXHRcdFx0b3B0aW9ucy5wYXRoID0gdXJsO1xuXHRcdFx0b3B0aW9ucy5wcm90b2NvbCA9ICdodHRwOic7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZXEgPSAob3B0aW9ucy5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBodHRwcyA6IGh0dHApLnJlcXVlc3Qob3B0aW9ucywgKHJlcykgPT4ge1xuXHRcdFx0XHRsZXQgYm9keSA9ICcnO1xuXHRcdFx0XHRyZXMub24oJ2RhdGEnLCBjaHVuayA9PiBib2R5ICs9IGNodW5rKTtcblx0XHRcdFx0cmVzLm9uKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlIDwgMzAwICYmIHJlcy5zdGF0dXNDb2RlID49IDIwMCkge1xuXHRcdFx0XHRcdFx0bGV0IHJlc3BvbnNlID0ge1xuXHRcdFx0XHRcdFx0XHRqc29uOiAoKSA9PiBKU09OLnBhcnNlKGJvZHkpLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAoKSA9PiBib2R5LFxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2U6IHJlcy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAoKSA9PiBib2R5LFxuXHRcdFx0XHRcdFx0XHRqc29uOiAoKSA9PiBKU09OLnBhcnNlKGJvZHkpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXEub24oJ2Vycm9yJywgcmVqZWN0KTtcblx0XHRcdGlmIChvcHRpb25zLmJvZHkpIHtcblx0XHRcdFx0cmVxLndyaXRlKG9wdGlvbnMuYm9keSk7XG5cdFx0XHR9XG5cdFx0XHRyZXEuZW5kKCk7XG5cdFx0fSk7XG5cdH1cbn07IiwiaW1wb3J0IHJvdXRlSW1wb3J0cyBmcm9tICcuLi9yb3V0ZXMuanNvbic7XG5sZXQgcm91dGVzID0gcm91dGVJbXBvcnRzO1xubGV0IGN1cnJlbnRSb3V0ZSA9IG51bGw7XG5cbmZ1bmN0aW9uIG9wZW5QYWdlKHJvdXRlKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcblx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyb3V0ZS5jb21wb25lbnQpO1xuXHRlbC5wcm9wcyA9IHJvdXRlLmRhdGE7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChlbCk7XG5cdGlmIChyb3V0ZS50aXRsZSkge1xuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cudGl0bGUgPSByb3V0ZS50aXRsZSk7XG5cdH1cblxuXHR3aW5kb3cuWmluby5pbXBvcnQuY2FsbCh7fSwgJy8nICsgcm91dGUuY29tcG9uZW50ICsgJy5qcycpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5wb3BzdGF0ZUF0dGFjaGVkKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RhdGUgJiYgb3BlblBhZ2UoZXZlbnQuc3RhdGUpO1xuXHR9LCBmYWxzZSk7XG5cdHdpbmRvdy5wb3BzdGF0ZUF0dGFjaGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRSb3V0ZXMobmV3Um91dGVzKSB7XG5cdFx0cm91dGVzID0gbmV3Um91dGVzO1xuXHR9LFxuXG5cdHJvdXRlKHBhdGgpIHtcblx0XHQvLyBpZiB3ZSBoYXZlIGEgZGlyZWN0IG1hdGNoLCBqdXN0IHJldHVybiBpdFxuXHRcdGlmIChyb3V0ZXNbcGF0aF0pIHJldHVybiByb3V0ZXNbcGF0aF07XG5cblx0XHQvLyBpZiB3ZSBuZWVkIG1vcmUgZGV0YWlsZWQgZmlsdGVyaW5nLi4uXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKHJvdXRlID0+IHtcblx0XHRcdGxldCBuYW1lcyA9IFsnJ107XG5cdFx0XHRsZXQgcm91dGVFeHByZXNzaW9uID0gcm91dGUucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzooW2Etel0rKS9nLCAoZywgbmFtZSkgPT4ge1xuXHRcdFx0XHRuYW1lcy5wdXNoKG5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gJyguKj8pJztcblx0XHRcdH0pLnJlcGxhY2UoL1xcJHxcXF4vZywgJ1xcXFwkJicpO1xuXHRcdFx0cm91dGVFeHByZXNzaW9uID0gbmV3IFJlZ0V4cCgnXicgKyByb3V0ZUV4cHJlc3Npb24gKyAnJCcpO1xuXHRcdFx0bGV0IHJlc3VsdCA9IHJvdXRlRXhwcmVzc2lvbi5leGVjKHBhdGgpO1xuXHRcdFx0aWYgKCFyZXN1bHQpIHJldHVybiBmYWxzZTtcblx0XHRcdGxldCBkYXRhID0ge307XG5cdFx0XHRuYW1lcy5zbGljZSgxKS5mb3JFYWNoKChuYW1lLCBpZHgpID0+IHtcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHJlc3VsdFtpZHggKyAxXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdXRlc1tyb3V0ZV0sIHtkYXRhfSk7XG5cdFx0fSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQpWzBdIHx8IGZhbHNlO1xuXHR9LFxuXG5cdGdldEN1cnJlbnQoKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnRSb3V0ZTtcblx0fSxcblxuXHRnZXRVcmwobmFtZSwgZGF0YSkge1xuXHRcdGxldCByb3V0ZSA9IE9iamVjdC5rZXlzKHJvdXRlcykuZmlsdGVyKHJvdXRlID0+IHJvdXRlc1tyb3V0ZV0ubmFtZSA9PT0gbmFtZSlbMF07XG5cdFx0bGV0IHVybCA9IHJvdXRlO1xuXG5cdFx0aWYgKHJvdXRlKSB7XG5cdFx0XHR1cmwgPSByb3V0ZS5yZXBsYWNlKC86KFthLXpdKykvZywgKGcsIG5hbWUpID0+IGRhdGEgJiYgZGF0YVtuYW1lXSB8fCBudWxsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXJsO1xuXHR9LFxuXG5cdGdvdG8obmFtZSwgZGF0YSkge1xuXHRcdGxldCB1cmwgPSB0aGlzLmdldFVybChuYW1lLCBkYXRhKTtcblx0XHR0aGlzLm9wZW4odXJsKTtcblx0fSxcblxuXHRvcGVuKHVybCkge1xuXHRcdGxldCByb3V0ZSA9IHRoaXMucm91dGUodXJsKTtcblx0XHRjdXJyZW50Um91dGUgPSByb3V0ZTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHJvdXRlLCBudWxsLCB1cmwpO1xuXHRcdFx0b3BlblBhZ2Uocm91dGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBkbyBhIHJlZGlyZWN0XG5cdFx0XHQvLyAuLi5cblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IFN0b3JlIGZyb20gJ2dsYXNzYmlsJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi9saWIvZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9saWIvcm91dGVyJztcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgZmlsdGVycykge1xuXHRpZiAoIWZpbHRlcnMpIGZpbHRlcnMgPSBbZmFsc2VdO1xuXHRsZXQgcmVzdWx0ID0ge1xuXHRcdHRhc2tzLFxuXHRcdHByb2plY3RzOiBbXSxcblx0XHRkdWVUYXNrczogdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzICYmIHRhc2sudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpKSxcblx0XHRjb250ZXh0czogW10sXG5cdFx0ZmlsdGVyZWRUYXNrczogdGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIGZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAoZmlsdGVyID09PSB0cnVlICYmIHRhc2suZG9uZSkgfHwgKGZpbHRlciA9PT0gZmFsc2UgJiYgIXRhc2suZG9uZSkgfHwgKHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5pbmRleE9mKGZpbHRlcikgPj0gMCkgfHwgKHRhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5pbmRleE9mKGZpbHRlcikgPj0gMCkgfHwgKHRhc2sudGFnTmFtZXMgJiYgdGFzay50YWdOYW1lcy5pbmRleE9mKGZpbHRlcikgPj0gMCkpLmxlbmd0aCA9PT0gZmlsdGVycy5sZW5ndGg7XG5cdFx0fSksXG5cdFx0dGFnczogdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzKS5tYXAodGFzayA9PiB0YXNrLnRhZ3MubWFwKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXS50cmltKCkpLmpvaW4oJywnKSkuam9pbignLCcpLnNwbGl0KCcsJyksXG5cdFx0ZmlsdGVyc1xuXHR9O1xuXHRsZXQgcHJvamVjdHMgPSB7fTtcblx0bGV0IGNvbnRleHRzID0ge307XG5cdGxldCB0YWdzID0ge307XG5cblx0dGFza3MuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHR0YXNrLmlkID0gaWQudG9TdHJpbmcoKTtcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzW3Byb2plY3RdICs9IDEpO1xuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gY29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB0YWdzW3RhZ10gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcyA9IHJlc3VsdC5maWx0ZXJlZFRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuXHRcdGxldCBkdWVUYWdBID0gdGFza0EudGFncyAmJiB0YXNrQS50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJyk7XG5cdFx0bGV0IGR1ZVRhZ0IgPSB0YXNrQi50YWdzICYmIHRhc2tCLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRpZiAoZHVlVGFnQSkge1xuXHRcdFx0ZHVlVGFnQSA9IGR1ZVRhZ0Euc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdBID0gbmV3IERhdGUoZHVlVGFnQSkuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdBID0gOTMxMzQ3NDU2MDAwMDA7XG5cdFx0fVxuXHRcdGlmIChkdWVUYWdCKSB7XG5cdFx0XHRkdWVUYWdCID0gZHVlVGFnQi5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0IgPSBuZXcgRGF0ZShkdWVUYWdCKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0IgPSA5MzEzNDc0NTYwMDAwMDtcblx0XHR9XG5cdFx0cmV0dXJuIGR1ZVRhZ0EgLSBkdWVUYWdCO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSB7XG5cdGlmICghZG9uZU9ubHkgJiYgdGFzay5kb25lIHx8IGRvbmVPbmx5ICYmICF0YXNrLmRvbmUpIHJldHVybiAnJztcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCAnICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gOiAnJyxcblx0XHR0YXNrLnByaW9yaXR5IHx8ICcnLFxuXHRcdHRhc2sudGV4dC50cmltKCksXG5cdFx0dGFzay5saW5rcyAmJiB0YXNrLmxpbmtzLm1hcChsaW5rID0+IGxpbmsudXJsKS5qb2luKCcgJyksXG5cdFx0dGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmpvaW4oJyAnKSxcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuam9pbignICcpLFxuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3Muam9pbignICcpXG5cdF0uam9pbignICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHRhc2tzLCBkb25lT25seSkge1xuXHRyZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gc3RyaW5naWZ5VGFzayh0YXNrLCBkb25lT25seSkpLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhc2sodGFzaywgaWQpIHtcblx0bGV0IHByb2plY3RzID0gdGFzay5tYXRjaCgvXFxzKFxcK1xcdyspL2cpO1xuXHRsZXQgcHJpb3JpdHkgPSB0YXNrLm1hdGNoKC9cXHM/KFxcKFtBLVpdXFwpKVxccysvZyk7XG5cdGxldCBjb250ZXh0cyA9IHRhc2subWF0Y2goL1xccyhAXFx3KykvZyk7XG5cdGxldCB0YWdzID0gdGFzay5tYXRjaCgvXFxzKFxcdys6W1xcdyw6LV0rKS9nKTtcblx0bGV0IHRleHQgPSB0YXNrLnJlcGxhY2UoLyg/OlxccyooPzpcXChbQS1aXVxcKSlcXHMrKXwoPzpcXHNcXCtcXHcrKXwoPzpcXHNAXFx3Kyl8KD86XFxiKD86XFx3KzpbXFx3LDotXSspKS9nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0bGV0IGxpbmtzID0gdGV4dC5tYXRjaCgvXFxiaHR0cHM/OlxcL1xcL1teIF0rL2cpO1xuXHRwcm9qZWN0cyA9IHByb2plY3RzICYmIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0Y29udGV4dHMgPSBjb250ZXh0cyAmJiBjb250ZXh0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdHRhZ3MgPSB0YWdzICYmIHRhZ3MubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRsaW5rcyA9IGxpbmtzICYmIGxpbmtzLm1hcChsaW5rID0+IHtcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGxpbmssICcnKS50cmltKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogbGluayxcblx0XHRcdG5hbWU6IGxpbmsubWF0Y2goL2h0dHBzPzpcXC9cXC8oW14vXSspLylbMV1cblx0XHR9O1xuXHR9KSB8fCBbXTtcblx0bGV0IHRhc2tPYmplY3QgPSB7XG5cdFx0aWQsXG5cdFx0dGV4dCxcblx0XHRwcmlvcml0eTogcHJpb3JpdHkgJiYgcHJpb3JpdHkudG9TdHJpbmcoKS50cmltKCkgfHwgJycsXG5cdFx0cHJvamVjdHMsXG5cdFx0Y29udGV4dHMsXG5cdFx0dGFncyxcblx0XHR0YWdOYW1lczogdGFncyAmJiB0YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0pIHx8IFtdLFxuXHRcdGxpbmtzLFxuXHRcdHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdpZnlUYXNrKHRhc2tPYmplY3QpXG5cdH07XG5cblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdGlmICghdGFza0xpc3QpIHJldHVybiB0YXNrcztcblx0dGFza0xpc3Quc3BsaXQoJ1xcbicpLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0aWYgKHRhc2spIHtcblx0XHRcdHRhc2tzLnB1c2gocGFyc2VUYXNrKHRhc2ssIGlkLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1N0b3JlIGV4dGVuZHMgU3RvcmUge1xuXHRjb25zdHJ1Y3RvcihjcmVkZW50aWFscykge1xuXHRcdGxldCBfdGhpcztcblx0XHRzdXBlcigndGFzaycsIHtcblx0XHRcdGFkZChjdXJyZW50U3RhdGUsIHRhc2ssIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrID0gcGFyc2VUYXNrKHRhc2spO1xuXHRcdFx0XHR0YXNrLmlkID0gY3VycmVudFN0YXRlLnRhc2tzLmxlbmd0aC50b1N0cmluZygpO1xuXHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MucHVzaCh0YXNrKTtcblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlcihjdXJyZW50U3RhdGUsIGZpbHRlciwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuZmlsdGVycyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBwb3NpdGlvbiA9IGN1cnJlbnRTdGF0ZS5maWx0ZXJzLmluZGV4T2YoZmlsdGVyKTtcblx0XHRcdFx0aWYgKHBvc2l0aW9uID49IDApIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuZmlsdGVycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5maWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkbyhjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2suZG9uZSA9ICF0YXNrLmRvbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZShjdXJyZW50U3RhdGUsIHRhc2tEYXRhLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBjdXJyZW50U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tEYXRhLmlkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHR0YXNrID0gT2JqZWN0LmFzc2lnbih7aWQ6IHRhc2suaWR9LCBwYXJzZVRhc2sodGFza0RhdGEudGV4dCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGUoY3VycmVudFN0YXRlLCB0YXNrSWQsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IGN1cnJlbnRTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3Muc3BsaWNlKGN1cnJlbnRTdGF0ZS50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHRfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG5cdFx0aWYgKCF0aGlzLmRhdGEudGFza3MgfHwgdGhpcy5kYXRhLnRhc2tzLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHRcdH1cblx0fVxuXG5cdGxvYWRUYXNrcygpIHtcblx0XHRsZXQgdGFza0xpc3QgPSAnJztcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0YXNrTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuXHRcdFx0bGV0IHRhc2tzID0gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzKTtcblx0XHRcdHRoaXMubmV4dChuZXdTdGF0ZSk7XG5cdFx0fVxuXHRcdGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLWxvYWQnKSwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmNyZWRlbnRpYWxzKVxuXHRcdH0pLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSkudGhlbihkYXRhID0+IHtcblx0XHRcdHRhc2tMaXN0ID0gZGF0YS50YXNrcyB8fCAnJztcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcyk7XG5cdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2F2ZVRhc2tzKHN0YXRlKSB7XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBmaWxlQ29udGVudCA9IHN0cmluZ2lmeShzdGF0ZS50YXNrcyk7XG5cdFx0bGV0IG9iaiA9IHtjcmVkZW50aWFsczogdGhpcy5jcmVkZW50aWFscywgZGF0YTogZmlsZUNvbnRlbnR9O1xuXHRcdGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBmaWxlQ29udGVudCk7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZXIpO1xuXHRcdHRoaXMuZGVib3VuY2VyID0gc2V0VGltZW91dCgoKCkgPT4ge1xuXHRcdFx0ZmV0Y2gocm91dGVyLmdldFVybCgndGFza3Mtc2F2ZScpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBib2R5XG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSA9PiB7XG5cdFx0XHRcdGlmICghZGF0YS50YXNrcykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgdGFza0xpc3QgPSBkYXRhLnRhc2tzIHx8ICcnO1xuXHRcdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgdGhpcy5kYXRhLmZpbHRlcnMpO1xuXHRcdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdFx0fSkuYmluZCh0aGlzKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignVW5leHBlY3RlZCByZXNwb25zZSBmcm9tIHNlcnZlcjogJywgZXJyb3IpKTtcblx0XHR9KS5iaW5kKHRoaXMpLCAyMDAwKTtcblx0fVxuXG59IiwiaW1wb3J0IFN0b3JlIGZyb20gJ2dsYXNzYmlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN0b3JlIGV4dGVuZHMgU3RvcmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndXNlcicsIHtcblx0XHRcdHNldFVzZXIoY3VycmVudFN0YXRlLCBkYXRhKSB7XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRTdGF0ZSwgZGF0YSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcmVkZW50aWFscycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRTdGF0ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdH1cblxuXHRsb2FkRGF0YSgpIHtcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsZXQgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3JlZGVudGlhbHMnKSB8fCAne30nO1xuXHRcdFx0XHR0aGlzLm5leHQoSlNPTi5wYXJzZShjcmVkZW50aWFscykpO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5uZXh0KHt9KTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tYXBwLmNzcyc7XG5pbXBvcnQgVGFza1N0b3JlIGZyb20gJy4uL3N0b3Jlcy90YXNrLXN0b3JlJztcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3VzZXItc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHQvLyBkZWZpbmUgaW5pdGlhbCBwcm9wc1xuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0dGFza3M6IFtdLFxuXHRcdFx0ZmlsdGVyZWRUYXNrczogW10sXG5cdFx0XHRmaWx0ZXJzOiBmYWxzZSxcblx0XHRcdHByb2plY3RzOiBbXSxcblx0XHRcdGR1ZVRhc2tzOiBbXSxcblx0XHRcdGNvbnRleHRzOiBbXSxcblx0XHRcdHRhZ3M6IFtdLFxuXHRcdFx0Y3JlZGVudGlhbHM6IHt9XG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvLWFwcFwiPlxuXHRcdFx0XHQ8dG9kby1oZWFkZXIgZGF0YS1jcmVkZW50aWFscz17ZGF0YS5wcm9wcy5jcmVkZW50aWFsc30vPlxuXHRcdFx0XHQ8dG9kby1uYXYgZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5wcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5jb250ZXh0c30gZGF0YS10YWdzPXtkYXRhLnByb3BzLnRhZ3N9IGRhdGEtZmlsdGVycz17ZGF0YS5wcm9wcy5maWx0ZXJzfS8+XG5cdFx0XHRcdDx0b2RvLWxpc3QgZGF0YS1zdG9yZT17dGhpcy50YXNrU3RvcmV9IGRhdGEtcHJvamVjdHM9e2RhdGEucHJvcHMucHJvamVjdHN9IGRhdGEtY29udGV4dHM9e2RhdGEucHJvcHMuY29udGV4dHN9IGRhdGEtdGFza3M9e2RhdGEucHJvcHMuZmlsdGVyZWRUYXNrc30gZGF0YS1maWx0ZXJzPXtkYXRhLnByb3BzLmZpbHRlcnN9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc3R5bGVzKCkgeyByZXR1cm4gc3R5bGVzOyB9XG5cdGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCd0b2RvLW5hdic6IHtmaWx0ZXIoZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudGFza1N0b3JlLmZpbHRlcihldmVudC5kZXRhaWwpO1xuXHRcdFx0fX0sXG5cdFx0XHQndG9kby1oZWFkZXInOiB7bG9naW4oZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudXNlclN0b3JlLnNldFVzZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxuXG5cdG9ubW91bnQoeikge1xuXHRcdHouaW1wb3J0KCcuL2R1bWIvdG9kby1oZWFkZXIuanMnKTtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8tbmF2LmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vc21hcnQvdG9kby1saXN0LmpzJyk7XG5cblx0XHR0aGlzLnRhc2tTdG9yZSA9IG5ldyBUYXNrU3RvcmUoKTtcblx0XHR0aGlzLnVzZXJTdG9yZSA9IG5ldyBVc2VyU3RvcmUoKTtcblxuXHRcdHRoaXMudGFza1N0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YSk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpLCAxNTApO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YXNrU3RvcmUuc2V0Q3JlZGVudGlhbHMoZGF0YSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjcmVkZW50aWFscycsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b251bm1vdW50KCkge1xuXHRcdHRoaXMudGFza1N0b3JlLm9mZignY2hhbmdlZCcsIHRoaXMudGFza3NDaGFuZ2VkKTtcblx0XHR0aGlzLnVzZXJTdG9yZS5vZmYoJ2NoYW5nZWQnLCB0aGlzLnVzZXJzQ2hhbmdlZCk7XG5cdH1cbn0iXSwibmFtZXMiOlsiZ2xvYmFsIiwiTm93UHJvbWlzZSIsImNvbnN0IiwibGV0Iiwic3VwZXIiLCJmaWx0ZXIiLCJ0aGlzIiwiU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU9BLGNBQU0sQ0FBQ0EsY0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsU0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdB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LENBQUMsQ0FBQyxFQUFBO0NBQ2hDQSxJQUFJLE1BQU0sR0FBRztFQUNaLE9BQUEsS0FBSztFQUNMLFFBQVEsRUFBRSxFQUFFO0VBQ1osUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEdBQUEsQ0FBQyxHQUFBLENBQUM7RUFDL0YsUUFBUSxFQUFFLEVBQUU7RUFDWixhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQztHQUNoQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLEVBQUMsU0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxNQUFNLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztHQUN6UyxDQUFDO0VBQ0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJ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
