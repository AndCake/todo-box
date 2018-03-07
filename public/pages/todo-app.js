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

var styles = (function (code) { return code; })("todo-app .todo-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-app todo-header{display:block;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}todo-app todo-list{display:block;-webkit-box-flex:1;-ms-flex:1 1 75%;flex:1 1 75%}todo-app todo-nav{-webkit-box-flex:1;-ms-flex:1 1 calc(25% - 1em);flex:1 1 calc(25% - 1em)}todo-app button{background:#495800;color:#e2f0a0;border:1px solid #6c7e15;border-radius:3px;cursor:pointer;margin:2px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.25);box-shadow:0 0 5px rgba(0,0,0,.25)}todo-app button:hover{color:#6c7e15;background:#e2f0a0}@media screen and (max-width:686px){todo-app todo-nav{display:none}todo-app todo-header{position:fixed;top:0;left:0;right:0}}", {});

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
		}}
	};
};

TodoApp.prototype.onmount = function onmount (z) {
		var this$1 = this;

	z.import('./smart/todo-header.js');
	z.import('./dumb/todo-nav.js');
	z.import('./smart/todo-list.js');

	this.taskStore = new TaskStore();
	this.userStore = new UserStore();

	this.taskStore.on('changed', this.tasksChanged = function (data) {
		this$1.getHost().setProps(data);
	});
	this.userStore.on('changed', this.usersChanged = function (data) {
		if (data && Object.keys(data).length > 0) {
			this$1.taskStore.setCredentials(data);
			this$1.props.credentials = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL3BhZ2VzL3RvZG8tYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBzY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsZXZlbnRSZWdpc3RyeT1zY29wZS5fX2V2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5fHx7fTtmdW5jdGlvbiB0cmlnZ2VyKHQsZSl7aWYoZXZlbnRSZWdpc3RyeVt0XSlmb3IodmFyIGEsbj0wLHI9ZXZlbnRSZWdpc3RyeVt0XS5sZW5ndGg7YT1ldmVudFJlZ2lzdHJ5W3RdW25dLG48cjtuKz0xKXtpZighMT09PWEoZSkpYnJlYWt9fWZ1bmN0aW9uIG9uKHQsZSl7ZXZlbnRSZWdpc3RyeVt0XXx8KGV2ZW50UmVnaXN0cnlbdF09W10pLGV2ZW50UmVnaXN0cnlbdF0ucHVzaChlKX1mdW5jdGlvbiBvZmYodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe3ZhciBhPWV2ZW50UmVnaXN0cnlbdF0uaW5kZXhPZihlKTthPj0wJiZldmVudFJlZ2lzdHJ5W3RdLnNwbGljZShhLDEpfWVsc2UgZXZlbnRSZWdpc3RyeVt0XT1bXX1mdW5jdGlvbiBvbmUodCxlKXt2YXIgYT1mdW5jdGlvbihuKXtvZmYodCxhKSxlKG4pfTtvbih0LGEpfXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZX0pLHNjb3BlJDE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhfHx7fSx0cmlnZ2VyJDE9dHJpZ2dlcjtmdW5jdGlvbiBtaXJyb3IoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBkZWVwRnJlZXplKHQpe2lmKG51bGw9PT10fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvSlN8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybiB0O2Zvcih2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSxhPXt0b0pTOnt2YWx1ZTptaXJyb3IuYmluZCh0KX19LG49ZnVuY3Rpb24odCxuKXthW2VbdF1dPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBkZWVwRnJlZXplKG4pfSxzZXQ6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2hhbmdlIHByb3BlcnR5IFwiJytlW3RdKydcIiB0byBcIicrYSsnXCIgb2YgYW4gaW1tdXRhYmxlIG9iamVjdCcpfX19LHI9MCxvPXZvaWQgMDtvPXRbZVtyXV0scjxlLmxlbmd0aDtyKz0xKW4ocixvKTtyZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSxhKSl9dmFyIFN0b3JlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztpZih0aGlzLm5hbWU9dHx8XCJ1bm5hbWVkXCIsdGhpcy50cmlnZ2VyZWQ9ITEsT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09ZnVuY3Rpb24oYSxuKXthLmluZGV4T2YoXCI6XCIpPj0wP2V2ZW50c1tlXShhLG4pOmV2ZW50c1tlXSh0K1wiLXN0b3JlOlwiK2Esbil9fSksXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHZhciBuPU9iamVjdC5rZXlzKGUpLHI9ZnVuY3Rpb24oZSxyKXthW25bZV1dPWZ1bmN0aW9uKGUpe3ZhciBhPXIoZGF0YVt0XS5jdXJyZW50RGF0YS50b0pTKCksZSx0aGlzLm5leHQuYmluZCh0aGlzKSk7YSYmdGhpcy5uZXh0KGEpfS5iaW5kKGEpfSxvPTAsaT12b2lkIDA7aT1lW25bb11dLG88bi5sZW5ndGg7bys9MSlyKG8saSk7dCYmKGRhdGFbdF09ZGF0YVt0XXx8e2xvYWRlZDohMSxjdXJyZW50RGF0YTpkZWVwRnJlZXplKFtdKSxoaXN0b3JpY0RhdGE6W119KX0scHJvdG90eXBlQWNjZXNzb3JzPXtkYXRhOntjb25maWd1cmFibGU6ITB9fTtwcm90b3R5cGVBY2Nlc3NvcnMuZGF0YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZGF0YVt0aGlzLm5hbWVdP2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCk6bnVsbH0sU3RvcmUucHJvdG90eXBlLmxvYWRlZD1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZGF0YVt0XS5sb2FkZWR9KS5sZW5ndGg7aWYodD09PU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCYmIXRoaXMudHJpZ2dlcmVkKXt2YXIgZT17fTtPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24odCl7ZVt0XT1kYXRhW3RdLmN1cnJlbnREYXRhLnRvSlMoKX0pLHRoaXMudHJpZ2dlcmVkPSEwLHRyaWdnZXIkMShcImdsb2JhbDpkYXRhLWxvYWRlZFwiLGUpfX0sU3RvcmUucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24odCl7aWYoZGF0YVt0aGlzLm5hbWVdLmxvYWRlZD0hMCwodD1kZWVwRnJlZXplKHQpKSE9PWRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSl7Zm9yKGRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucHVzaChkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEpO2RhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEubGVuZ3RoPjEwOylkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLnNoaWZ0KCk7ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPXQsdHJpZ2dlciQxKHRoaXMubmFtZStcIi1zdG9yZTpjaGFuZ2VkXCIsZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKSl9dGhpcy5sb2FkZWQoKX0sU3RvcmUucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKCl7ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5sZW5ndGg8MXx8KG5ld1N0YXRlPWRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEucG9wKCksZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhPW5ld1N0YXRlLHRyaWdnZXIkMSh0aGlzLm5hbWUrXCItc3RvcmU6Y2hhbmdlZFwiLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCkpKX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3RvcmUucHJvdG90eXBlLHByb3RvdHlwZUFjY2Vzc29ycyksbW9kdWxlLmV4cG9ydHM9U3RvcmU7XG4iLCJ2YXIgcmVqZWN0RGVmYXVsdCA9IGZ1bmN0aW9uIHJlamVjdERlZmF1bHQoZXJyb3Ipe1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IHByb21pc2U6ICcgKyBlcnJvcik7XG59O1xudmFyIGVtcHR5RnVuYyA9IGZ1bmN0aW9uKCl7fTtcblxuZnVuY3Rpb24gTm93UHJvbWlzZShmbikge1xuXHR2YXIgcmVzb2x2ZVZhbHVlLCByZWplY3RWYWx1ZTtcblxuXHR0aGlzLnRoZW4gPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0Rm47XG5cdFx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc0ZuLCByZWpGbikge1xuXHRcdFx0aWYgKHR5cGVvZiByZWpGbiAhPT0gJ2Z1bmN0aW9uJykgcmVqRm4gPSByZWplY3REZWZhdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiByZXNGbiAhPT0gJ2Z1bmN0aW9uJykgcmVzRm4gPSBlbXB0eUZ1bmM7XG5cdFx0XHRpZiAoIXJlamVjdFZhbHVlKSB7XG5cdFx0XHRcdHJlc0ZuKHJlc29sdmUocmVzb2x2ZVZhbHVlKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWplY3QocmVqZWN0VmFsdWUpO1xuXHRcdFx0XHRyZWpGbihyZWplY3RWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdHRoaXMuY2F0Y2ggPSBmdW5jdGlvbihyZWplY3QpIHtcblx0XHRpZiAocmVqZWN0VmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqZWN0ICE9PSAnZnVuY3Rpb24nKSByZWplY3QgPSByZWplY3REZWZhdWx0O1xuXHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZUZuKGRhdGEpIHtcblx0XHRyZXNvbHZlVmFsdWUgPSBkYXRhO1xuXHR9XG5cdGZ1bmN0aW9uIHJlamVjdEZuKGRhdGEpIHtcblx0XHRyZWplY3RWYWx1ZSA9IGRhdGEgfHwgJ0Vycm9yJztcblx0fVxuXHRmbihyZXNvbHZlRm4sIHJlamVjdEZuKTtcbn1cblxuTm93UHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHJlc29sdmUodmFsdWUpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UucmVqZWN0ID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHJlamVjdChlcnJvcik7XG5cdH0pO1xufTtcblxuTm93UHJvbWlzZS5hbGwgPSBmdW5jdGlvbih2YWx1ZXMpIHtcblx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuXHRcdFx0aWYgKGVudHJ5IGluc3RhbmNlb2YgTm93UHJvbWlzZSkge1xuXHRcdFx0XHRlbnRyeS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlKSB7IHJlamVjdChlKTsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChlbnRyeSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IHZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHR9XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyBOb3dQcm9taXNlIDogUHJvbWlzZTtcbm1vZHVsZS5leHBvcnRzLk5vd1Byb21pc2UgPSBOb3dQcm9taXNlOyIsInZhciBOb3dQcm9taXNlID0gcmVxdWlyZSgnbm93LXByb21pc2UnKTtcblxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZSgpIHtcblx0cmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyB8fCAhcHJvY2Vzcy5icm93c2VyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHR2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRib2R5OiBudWxsXG5cdH07XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRmb3IgKHZhciBhbGwgaW4gZGVmYXVsdE9wdGlvbnMpIHtcblx0XHRpZiAoIW9wdGlvbnNbYWxsXSkgb3B0aW9uc1thbGxdID0gZGVmYXVsdE9wdGlvbnNbYWxsXTtcblx0fVxuXHRpZiAoaXNCcm93c2VyKCkpIHtcblx0XHQvLyBicm93c2VyIGNvbnRleHRcblx0XHRpZiAob3B0aW9ucy5icm93c2VyQmFzZSkge1xuXHRcdFx0dXJsID0gb3B0aW9ucy5icm93c2VyQmFzZSArIHVybDtcblx0XHRcdGRlbGV0ZSBvcHRpb25zLmJyb3dzZXJCYXNlO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93LmZldGNoKHVybCwgb3B0aW9ucyk7XG5cdH0gZWxzZSBpZiAoaXNOb2RlKCkpIHtcblx0XHQvLyBub2RlSlMgY29udGV4dFxuXHRcdHZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuXHRcdHZhciBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5cdFx0aWYgKHVybC5tYXRjaCgvOlxcL1xcLy8pKSB7XG5cdFx0XHRvcHRpb25zLmhvc3RuYW1lID0gdXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcLyhbXjovXSspWy86XS4qJC8sICckMScpO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gcGFyc2VJbnQodXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcL1teOi9dKzooXFxkKylcXC8uKiQvLCAnJDEnKSB8fCB1cmwubWF0Y2goL15odHRwczovKSA/ICc0NDMnIDogJzgwJywgMTApO1xuXHRcdFx0b3B0aW9ucy5wYXRoID0gdXJsLnJlcGxhY2UoL15cXHcrOlxcL1xcL1teOi9dKyg/OjpcXGQrKT8oXFwvLiopJC8sICckMScpO1xuXHRcdFx0b3B0aW9ucy5wcm90b2NvbCA9IHVybC5yZXBsYWNlKC9eKFxcdys6KVxcL1xcLy4qJC8sICckMScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmhvc3RuYW1lID0gJ2xvY2FsaG9zdCc7XG5cdFx0XHRvcHRpb25zLnBvcnQgPSA4ODg4O1xuXHRcdFx0b3B0aW9ucy5wYXRoID0gdXJsO1xuXHRcdFx0b3B0aW9ucy5wcm90b2NvbCA9ICdodHRwOic7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZXEgPSAob3B0aW9ucy5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBodHRwcyA6IGh0dHApLnJlcXVlc3Qob3B0aW9ucywgKHJlcykgPT4ge1xuXHRcdFx0XHRsZXQgYm9keSA9ICcnO1xuXHRcdFx0XHRyZXMub24oJ2RhdGEnLCBjaHVuayA9PiBib2R5ICs9IGNodW5rKTtcblx0XHRcdFx0cmVzLm9uKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlIDwgMzAwICYmIHJlcy5zdGF0dXNDb2RlID49IDIwMCkge1xuXHRcdFx0XHRcdFx0bGV0IHJlc3BvbnNlID0ge1xuXHRcdFx0XHRcdFx0XHRqc29uOiAoKSA9PiBKU09OLnBhcnNlKGJvZHkpLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAoKSA9PiBib2R5LFxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2U6IHJlcy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAoKSA9PiBib2R5LFxuXHRcdFx0XHRcdFx0XHRqc29uOiAoKSA9PiBKU09OLnBhcnNlKGJvZHkpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXEub24oJ2Vycm9yJywgcmVqZWN0KTtcblx0XHRcdGlmIChvcHRpb25zLmJvZHkpIHtcblx0XHRcdFx0cmVxLndyaXRlKG9wdGlvbnMuYm9keSk7XG5cdFx0XHR9XG5cdFx0XHRyZXEuZW5kKCk7XG5cdFx0fSk7XG5cdH1cbn07IiwiaW1wb3J0IHJvdXRlSW1wb3J0cyBmcm9tICcuLi9yb3V0ZXMuanNvbic7XG5sZXQgcm91dGVzID0gcm91dGVJbXBvcnRzO1xubGV0IGN1cnJlbnRSb3V0ZSA9IG51bGw7XG5cbmZ1bmN0aW9uIG9wZW5QYWdlKHJvdXRlKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcblx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyb3V0ZS5jb21wb25lbnQpO1xuXHRlbC5wcm9wcyA9IHJvdXRlLmRhdGE7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChlbCk7XG5cdGlmIChyb3V0ZS50aXRsZSkge1xuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cudGl0bGUgPSByb3V0ZS50aXRsZSk7XG5cdH1cblxuXHR3aW5kb3cuWmluby5pbXBvcnQuY2FsbCh7fSwgJy8nICsgcm91dGUuY29tcG9uZW50ICsgJy5qcycpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5wb3BzdGF0ZUF0dGFjaGVkKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RhdGUgJiYgb3BlblBhZ2UoZXZlbnQuc3RhdGUpO1xuXHR9LCBmYWxzZSk7XG5cdHdpbmRvdy5wb3BzdGF0ZUF0dGFjaGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRSb3V0ZXMobmV3Um91dGVzKSB7XG5cdFx0cm91dGVzID0gbmV3Um91dGVzO1xuXHR9LFxuXG5cdHJvdXRlKHBhdGgpIHtcblx0XHQvLyBpZiB3ZSBoYXZlIGEgZGlyZWN0IG1hdGNoLCBqdXN0IHJldHVybiBpdFxuXHRcdGlmIChyb3V0ZXNbcGF0aF0pIHJldHVybiByb3V0ZXNbcGF0aF07XG5cblx0XHQvLyBpZiB3ZSBuZWVkIG1vcmUgZGV0YWlsZWQgZmlsdGVyaW5nLi4uXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKHJvdXRlID0+IHtcblx0XHRcdGxldCBuYW1lcyA9IFsnJ107XG5cdFx0XHRsZXQgcm91dGVFeHByZXNzaW9uID0gcm91dGUucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzooW2Etel0rKS9nLCAoZywgbmFtZSkgPT4ge1xuXHRcdFx0XHRuYW1lcy5wdXNoKG5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gJyguKj8pJztcblx0XHRcdH0pLnJlcGxhY2UoL1xcJHxcXF4vZywgJ1xcXFwkJicpO1xuXHRcdFx0cm91dGVFeHByZXNzaW9uID0gbmV3IFJlZ0V4cCgnXicgKyByb3V0ZUV4cHJlc3Npb24gKyAnJCcpO1xuXHRcdFx0bGV0IHJlc3VsdCA9IHJvdXRlRXhwcmVzc2lvbi5leGVjKHBhdGgpO1xuXHRcdFx0aWYgKCFyZXN1bHQpIHJldHVybiBmYWxzZTtcblx0XHRcdGxldCBkYXRhID0ge307XG5cdFx0XHRuYW1lcy5zbGljZSgxKS5mb3JFYWNoKChuYW1lLCBpZHgpID0+IHtcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHJlc3VsdFtpZHggKyAxXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdXRlc1tyb3V0ZV0sIHtkYXRhfSk7XG5cdFx0fSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQpWzBdIHx8IGZhbHNlO1xuXHR9LFxuXG5cdGdldEN1cnJlbnQoKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnRSb3V0ZTtcblx0fSxcblxuXHRnZXRVcmwobmFtZSwgZGF0YSkge1xuXHRcdGxldCByb3V0ZSA9IE9iamVjdC5rZXlzKHJvdXRlcykuZmlsdGVyKHJvdXRlID0+IHJvdXRlc1tyb3V0ZV0ubmFtZSA9PT0gbmFtZSlbMF07XG5cdFx0bGV0IHVybCA9IHJvdXRlO1xuXG5cdFx0aWYgKHJvdXRlKSB7XG5cdFx0XHR1cmwgPSByb3V0ZS5yZXBsYWNlKC86KFthLXpdKykvZywgKGcsIG5hbWUpID0+IGRhdGEgJiYgZGF0YVtuYW1lXSB8fCBudWxsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXJsO1xuXHR9LFxuXG5cdGdvdG8obmFtZSwgZGF0YSkge1xuXHRcdGxldCB1cmwgPSB0aGlzLmdldFVybChuYW1lLCBkYXRhKTtcblx0XHR0aGlzLm9wZW4odXJsKTtcblx0fSxcblxuXHRvcGVuKHVybCkge1xuXHRcdGxldCByb3V0ZSA9IHRoaXMucm91dGUodXJsKTtcblx0XHRjdXJyZW50Um91dGUgPSByb3V0ZTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHJvdXRlLCBudWxsLCB1cmwpO1xuXHRcdFx0b3BlblBhZ2Uocm91dGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBkbyBhIHJlZGlyZWN0XG5cdFx0XHQvLyAuLi5cblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IFN0b3JlIGZyb20gJ2dsYXNzYmlsJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi9saWIvZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9saWIvcm91dGVyJztcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgZmlsdGVycykge1xuXHRpZiAoIWZpbHRlcnMpIGZpbHRlcnMgPSBbZmFsc2VdO1xuXHRsZXQgcmVzdWx0ID0ge1xuXHRcdHRhc2tzLFxuXHRcdHByb2plY3RzOiBbXSxcblx0XHRkdWVUYXNrczogdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzICYmIHRhc2sudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpKSxcblx0XHRjb250ZXh0czogW10sXG5cdFx0ZmlsdGVyZWRUYXNrczogdGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIGZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAoZmlsdGVyID09PSB0cnVlICYmIHRhc2suZG9uZSkgfHwgKGZpbHRlciA9PT0gZmFsc2UgJiYgIXRhc2suZG9uZSkgfHwgKHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5pbmRleE9mKGZpbHRlcikgPj0gMCkgfHwgKHRhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5pbmRleE9mKGZpbHRlcikgPj0gMCkgfHwgKHRhc2sudGFnTmFtZXMgJiYgdGFzay50YWdOYW1lcy5pbmRleE9mKGZpbHRlcikgPj0gMCkpLmxlbmd0aCA9PT0gZmlsdGVycy5sZW5ndGg7XG5cdFx0fSksXG5cdFx0dGFnczogdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzKS5tYXAodGFzayA9PiB0YXNrLnRhZ3MubWFwKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXS50cmltKCkpLmpvaW4oJywnKSkuam9pbignLCcpLnNwbGl0KCcsJyksXG5cdFx0ZmlsdGVyc1xuXHR9O1xuXHRsZXQgcHJvamVjdHMgPSB7fTtcblx0bGV0IGNvbnRleHRzID0ge307XG5cdGxldCB0YWdzID0ge307XG5cblx0dGFza3MuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHR0YXNrLmlkID0gaWQudG9TdHJpbmcoKTtcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzW3Byb2plY3RdICs9IDEpO1xuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gY29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB0YWdzW3RhZ10gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcyA9IHJlc3VsdC5maWx0ZXJlZFRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuXHRcdGxldCBkdWVUYWdBID0gdGFza0EudGFncyAmJiB0YXNrQS50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJyk7XG5cdFx0bGV0IGR1ZVRhZ0IgPSB0YXNrQi50YWdzICYmIHRhc2tCLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRpZiAoZHVlVGFnQSkge1xuXHRcdFx0ZHVlVGFnQSA9IGR1ZVRhZ0Euc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdBID0gbmV3IERhdGUoZHVlVGFnQSkuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdBID0gOTMxMzQ3NDU2MDAwMDA7XG5cdFx0fVxuXHRcdGlmIChkdWVUYWdCKSB7XG5cdFx0XHRkdWVUYWdCID0gZHVlVGFnQi5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0IgPSBuZXcgRGF0ZShkdWVUYWdCKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0IgPSA5MzEzNDc0NTYwMDAwMDtcblx0XHR9XG5cdFx0cmV0dXJuIGR1ZVRhZ0EgLSBkdWVUYWdCO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSB7XG5cdGlmICghZG9uZU9ubHkgJiYgdGFzay5kb25lIHx8IGRvbmVPbmx5ICYmICF0YXNrLmRvbmUpIHJldHVybiAnJztcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCAnICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gOiAnJyxcblx0XHR0YXNrLnByaW9yaXR5IHx8ICcnLFxuXHRcdHRhc2sudGV4dC50cmltKCksXG5cdFx0dGFzay5saW5rcyAmJiB0YXNrLmxpbmtzLm1hcChsaW5rID0+IGxpbmsudXJsKS5qb2luKCcgJyksXG5cdFx0dGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmpvaW4oJyAnKSxcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuam9pbignICcpLFxuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3Muam9pbignICcpXG5cdF0uam9pbignICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHRhc2tzLCBkb25lT25seSkge1xuXHRyZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gc3RyaW5naWZ5VGFzayh0YXNrLCBkb25lT25seSkpLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhc2sodGFzaywgaWQpIHtcblx0bGV0IHByb2plY3RzID0gdGFzay5tYXRjaCgvXFxzKFxcK1xcdyspL2cpO1xuXHRsZXQgcHJpb3JpdHkgPSB0YXNrLm1hdGNoKC9cXHM/KFxcKFtBLVpdXFwpKVxccysvZyk7XG5cdGxldCBjb250ZXh0cyA9IHRhc2subWF0Y2goL1xccyhAXFx3KykvZyk7XG5cdGxldCB0YWdzID0gdGFzay5tYXRjaCgvXFxzKFxcdys6W1xcdyw6LV0rKS9nKTtcblx0bGV0IHRleHQgPSB0YXNrLnJlcGxhY2UoLyg/OlxccyooPzpcXChbQS1aXVxcKSlcXHMrKXwoPzpcXHNcXCtcXHcrKXwoPzpcXHNAXFx3Kyl8KD86XFxiKD86XFx3KzpbXFx3LDotXSspKS9nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0bGV0IGxpbmtzID0gdGV4dC5tYXRjaCgvXFxiaHR0cHM/OlxcL1xcL1teIF0rL2cpO1xuXHRwcm9qZWN0cyA9IHByb2plY3RzICYmIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0Y29udGV4dHMgPSBjb250ZXh0cyAmJiBjb250ZXh0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdHRhZ3MgPSB0YWdzICYmIHRhZ3MubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRsaW5rcyA9IGxpbmtzICYmIGxpbmtzLm1hcChsaW5rID0+IHtcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGxpbmssICcnKS50cmltKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogbGluayxcblx0XHRcdG5hbWU6IGxpbmsubWF0Y2goL2h0dHBzPzpcXC9cXC8oW14vXSspLylbMV1cblx0XHR9O1xuXHR9KSB8fCBbXTtcblx0bGV0IHRhc2tPYmplY3QgPSB7XG5cdFx0aWQsXG5cdFx0dGV4dCxcblx0XHRwcmlvcml0eTogcHJpb3JpdHkgJiYgcHJpb3JpdHkudG9TdHJpbmcoKS50cmltKCkgfHwgJycsXG5cdFx0cHJvamVjdHMsXG5cdFx0Y29udGV4dHMsXG5cdFx0dGFncyxcblx0XHR0YWdOYW1lczogdGFncyAmJiB0YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0pIHx8IFtdLFxuXHRcdGxpbmtzLFxuXHRcdHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdpZnlUYXNrKHRhc2tPYmplY3QpXG5cdH07XG5cblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdHRhc2tMaXN0LnNwbGl0KCdcXG4nKS5mb3JFYWNoKCh0YXNrLCBpZCkgPT4ge1xuXHRcdGlmICh0YXNrKSB7XG5cdFx0XHR0YXNrcy5wdXNoKHBhcnNlVGFzayh0YXNrLCBpZC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoY3JlZGVudGlhbHMpIHtcblx0XHRsZXQgX3RoaXM7XG5cdFx0c3VwZXIoJ3Rhc2snLCB7XG5cdFx0XHRhZGQoY3VycmVudFN0YXRlLCB0YXNrLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFzayA9IHBhcnNlVGFzayh0YXNrKTtcblx0XHRcdFx0dGFzay5pZCA9IGN1cnJlbnRTdGF0ZS50YXNrcy5sZW5ndGgudG9TdHJpbmcoKTtcblx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRmaWx0ZXIoY3VycmVudFN0YXRlLCBmaWx0ZXIsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS5maWx0ZXJzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmZpbHRlcnMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcG9zaXRpb24gPSBjdXJyZW50U3RhdGUuZmlsdGVycy5pbmRleE9mKGZpbHRlcik7XG5cdFx0XHRcdGlmIChwb3NpdGlvbiA+PSAwKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmZpbHRlcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuZmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZG8oY3VycmVudFN0YXRlLCB0YXNrSWQsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IGN1cnJlbnRTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHR0YXNrLmRvbmUgPSAhdGFzay5kb25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGUoY3VycmVudFN0YXRlLCB0YXNrRGF0YSwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrRGF0YS5pZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0dGFzayA9IE9iamVjdC5hc3NpZ24oe2lkOiB0YXNrLmlkfSwgcGFyc2VUYXNrKHRhc2tEYXRhLnRleHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlKGN1cnJlbnRTdGF0ZSwgdGFza0lkLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBjdXJyZW50U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzLnNwbGljZShjdXJyZW50U3RhdGUudGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG5cdFx0X3RoaXMgPSB0aGlzO1xuXG5cdFx0dGhpcy5sb2FkVGFza3MoKTtcblx0fVxuXG5cdHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHRcdGlmICghdGhpcy5kYXRhLnRhc2tzIHx8IHRoaXMuZGF0YS50YXNrcy5sZW5ndGggPD0gMCkge1xuXHRcdFx0dGhpcy5sb2FkVGFza3MoKTtcblx0XHR9XG5cdH1cblxuXHRsb2FkVGFza3MoKSB7XG5cdFx0bGV0IHRhc2tMaXN0ID0gJyc7XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcyk7XG5cdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdH1cblx0XHRmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1sb2FkJyksIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5jcmVkZW50aWFscylcblx0XHR9KS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHR0YXNrTGlzdCA9IGRhdGEudGFza3MgfHwgJyc7XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MpO1xuXHRcdFx0dGhpcy5uZXh0KG5ld1N0YXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdHNhdmVUYXNrcyhzdGF0ZSkge1xuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgZmlsZUNvbnRlbnQgPSBzdHJpbmdpZnkoc3RhdGUudGFza3MpO1xuXHRcdGxldCBvYmogPSB7Y3JlZGVudGlhbHM6IHRoaXMuY3JlZGVudGlhbHMsIGRhdGE6IGZpbGVDb250ZW50fTtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgZmlsZUNvbnRlbnQpO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VyKTtcblx0XHR0aGlzLmRlYm91bmNlciA9IHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLXNhdmUnKSwge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogYm9keVxuXHRcdFx0fSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoIWRhdGEudGFza3MpIHJldHVybjtcblx0XHRcdFx0bGV0IHRhc2tMaXN0ID0gZGF0YS50YXNrcyB8fCAnJztcblx0XHRcdFx0bGV0IHRhc2tzID0gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIHRoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdFx0dGhpcy5uZXh0KG5ld1N0YXRlKTtcblx0XHRcdH0pLmJpbmQodGhpcykpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXI6ICcsIGVycm9yKSk7XG5cdFx0fSkuYmluZCh0aGlzKSwgMjAwMCk7XG5cdH1cblxufSIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3VzZXInLCB7XG5cdFx0XHRzZXRVc2VyKGN1cnJlbnRTdGF0ZSwgZGF0YSkge1xuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50U3RhdGUsIGRhdGEpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3JlZGVudGlhbHMnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50U3RhdGUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHR9XG5cblx0bG9hZERhdGEoKSB7XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bGV0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NyZWRlbnRpYWxzJykgfHwgJ3t9Jztcblx0XHRcdFx0dGhpcy5uZXh0KEpTT04ucGFyc2UoY3JlZGVudGlhbHMpKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubmV4dCh7fSk7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90b2RvLWFwcC5jc3MnO1xuaW1wb3J0IFRhc2tTdG9yZSBmcm9tICcuLi9zdG9yZXMvdGFzay1zdG9yZSc7XG5pbXBvcnQgVXNlclN0b3JlIGZyb20gJy4uL3N0b3Jlcy91c2VyLXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0Ly8gZGVmaW5lIGluaXRpYWwgcHJvcHNcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdHRhc2tzOiBbXSxcblx0XHRcdGZpbHRlcmVkVGFza3M6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHRwcm9qZWN0czogW10sXG5cdFx0XHRkdWVUYXNrczogW10sXG5cdFx0XHRjb250ZXh0czogW10sXG5cdFx0XHR0YWdzOiBbXSxcblx0XHRcdGNyZWRlbnRpYWxzOiB7fVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1hcHBcIj5cblx0XHRcdFx0PHRvZG8taGVhZGVyIGRhdGEtY3JlZGVudGlhbHM9e2RhdGEucHJvcHMuY3JlZGVudGlhbHN9Lz5cblx0XHRcdFx0PHRvZG8tbmF2IGRhdGEtcHJvamVjdHM9e2RhdGEucHJvcHMucHJvamVjdHN9IGRhdGEtY29udGV4dHM9e2RhdGEucHJvcHMuY29udGV4dHN9IGRhdGEtdGFncz17ZGF0YS5wcm9wcy50YWdzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0XHQ8dG9kby1saXN0IGRhdGEtc3RvcmU9e3RoaXMudGFza1N0b3JlfSBkYXRhLXByb2plY3RzPXtkYXRhLnByb3BzLnByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmNvbnRleHRzfSBkYXRhLXRhc2tzPXtkYXRhLnByb3BzLmZpbHRlcmVkVGFza3N9IGRhdGEtZmlsdGVycz17ZGF0YS5wcm9wcy5maWx0ZXJzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHN0eWxlcygpIHsgcmV0dXJuIHN0eWxlczsgfVxuXHRnZXQgZXZlbnRzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQndG9kby1uYXYnOiB7ZmlsdGVyKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnRhc2tTdG9yZS5maWx0ZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxuXG5cdG9ubW91bnQoeikge1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8taGVhZGVyLmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdi5qcycpO1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8tbGlzdC5qcycpO1xuXG5cdFx0dGhpcy50YXNrU3RvcmUgPSBuZXcgVGFza1N0b3JlKCk7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSBuZXcgVXNlclN0b3JlKCk7XG5cblx0XHR0aGlzLnRhc2tTdG9yZS5vbignY2hhbmdlZCcsIHRoaXMudGFza3NDaGFuZ2VkID0gZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcyhkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLnVzZXJTdG9yZS5vbignY2hhbmdlZCcsIHRoaXMudXNlcnNDaGFuZ2VkID0gZGF0YSA9PiB7XG5cdFx0XHRpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMudGFza1N0b3JlLnNldENyZWRlbnRpYWxzKGRhdGEpO1xuXHRcdFx0XHR0aGlzLnByb3BzLmNyZWRlbnRpYWxzID0gZGF0YTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG9udW5tb3VudCgpIHtcblx0XHR0aGlzLnRhc2tTdG9yZS5vZmYoJ2NoYW5nZWQnLCB0aGlzLnRhc2tzQ2hhbmdlZCk7XG5cdFx0dGhpcy51c2VyU3RvcmUub2ZmKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQpO1xuXHR9XG59Il0sIm5hbWVzIjpbImdsb2JhbCIsIk5vd1Byb21pc2UiLCJjb25zdCIsImxldCIsInN1cGVyIiwiZmlsdGVyIiwidGhpcyIsIlN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPQSxjQUFNLENBQUNBLGNBQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLFNBQVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJ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QUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFBLENBQUMsR0FBQSxDQUFDO0VBQy9GLFFBQVEsRUFBRSxFQUFFO0VBQ1osYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLEVBQUM7R0FDaEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxFQUFDLFNBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUM7R0FDelMsQ0FBQztFQUNGLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLElBQUksR0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2hJLFNB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
