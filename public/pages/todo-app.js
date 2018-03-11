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

var styles = (function (code) { return code; })("todo-app .todo-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-app todo-header{display:block;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;position:relative;z-index:1}todo-app todo-list{display:block;-webkit-box-flex:1;-ms-flex:1 1 75%;flex:1 1 75%;padding-top:1em}todo-app todo-nav{-webkit-box-flex:1;-ms-flex:1 1 calc(25% - 1em);flex:1 1 calc(25% - 1em)}todo-app button{background:#495800;color:#e2f0a0;border:1px solid #6c7e15;border-radius:3px;cursor:pointer;margin:2px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.25);box-shadow:0 0 5px rgba(0,0,0,.25)}todo-app button:hover{color:#6c7e15;background:#e2f0a0}@media screen and (max-width:686px){todo-app todo-nav{position:absolute;min-width:256px;max-width:calc(100% - 2em);left:-100%;opacity:0;z-index:2;-webkit-transition:left .2s ease-out,opacity .2s ease-out;transition:left .2s ease-out,opacity .2s ease-out}todo-app todo-nav.active{left:0;opacity:1}todo-app todo-header{position:fixed;top:0;left:0;right:0}todo-app todo-list{padding-top:5.5em}}", {});

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
		task.tags && task.tags.forEach(function (tag) { return tags[tag] += 1; });
	});
	result.filteredTasks.forEach(function (task) {
		task.projects && task.projects.forEach(function (project) { return projects[project] += 1; });
		task.contexts && task.contexts.forEach(function (context) { return contexts[context] += 1; });
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
		navVisible: false,
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
				this.createNode( 'todo-nav', { class: data.props.navVisible ? 'active' : '', 'data-projects': data.props.projects, 'data-contexts': data.props.contexts, 'data-tags': data.props.tags, 'data-filters': data.props.filters }),
				this.createNode( 'todo-list', { 'data-store': this.taskStore, 'data-projects': data.props.projects, 'data-contexts': data.props.contexts, 'data-tasks': data.props.filteredTasks, 'data-filters': data.props.filters })
			)
	);
};

prototypeAccessors.styles.get = function () { return styles; };
prototypeAccessors.events.get = function () {
	return {
		'todo-nav': {filter: function filter(event) {
			this.getHost().setProps('navVisible', false);
			this.getHost().taskStore.filter(event.detail);
		}, close: function close() {
			this.getHost().setProps('navVisible', false);
		}},
		'todo-header': {login: function login(event) {
			this.getHost().userStore.setUser(event.detail);
		}, logoaction: function logoaction() {
			this.getHost().setProps('navVisible', true);
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

	if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
		window.addEventListener('load', function () {
			navigator.serviceWorker.register('/sw.js');
		});
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL2xpYi90YXNrLW5vdGlmaWVyLmpzIiwiLi4vLi4vcGFnZXMvdG9kby1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNjb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCxldmVudFJlZ2lzdHJ5PXNjb3BlLl9fZXZlbnRSZWdpc3RyeT1zY29wZS5fX2V2ZW50UmVnaXN0cnl8fHt9O2Z1bmN0aW9uIHRyaWdnZXIodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWZvcih2YXIgYSxuPTAscj1ldmVudFJlZ2lzdHJ5W3RdLmxlbmd0aDthPWV2ZW50UmVnaXN0cnlbdF1bbl0sbjxyO24rPTEpe2lmKCExPT09YShlKSlicmVha319ZnVuY3Rpb24gb24odCxlKXtldmVudFJlZ2lzdHJ5W3RdfHwoZXZlbnRSZWdpc3RyeVt0XT1bXSksZXZlbnRSZWdpc3RyeVt0XS5wdXNoKGUpfWZ1bmN0aW9uIG9mZih0LGUpe2lmKGV2ZW50UmVnaXN0cnlbdF0paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7dmFyIGE9ZXZlbnRSZWdpc3RyeVt0XS5pbmRleE9mKGUpO2E+PTAmJmV2ZW50UmVnaXN0cnlbdF0uc3BsaWNlKGEsMSl9ZWxzZSBldmVudFJlZ2lzdHJ5W3RdPVtdfWZ1bmN0aW9uIG9uZSh0LGUpe3ZhciBhPWZ1bmN0aW9uKG4pe29mZih0LGEpLGUobil9O29uKHQsYSl9dmFyIGV2ZW50cz1PYmplY3QuZnJlZXplKHt0cmlnZ2VyOnRyaWdnZXIsb246b24sb2ZmOm9mZixvbmU6b25lfSksc2NvcGUkMT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxkYXRhPXNjb3BlJDEuX19nbGFzc2JpbFN0b3JlRGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGF8fHt9LHRyaWdnZXIkMT10cmlnZ2VyO2Z1bmN0aW9uIG1pcnJvcigpe3JldHVybiB0aGlzfWZ1bmN0aW9uIGRlZXBGcmVlemUodCl7aWYobnVsbD09PXR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudG9KU3x8XCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7Zm9yKHZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLGE9e3RvSlM6e3ZhbHVlOm1pcnJvci5iaW5kKHQpfX0sbj1mdW5jdGlvbih0LG4pe2FbZVt0XV09e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRlZXBGcmVlemUobil9LHNldDpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjaGFuZ2UgcHJvcGVydHkgXCInK2VbdF0rJ1wiIHRvIFwiJythKydcIiBvZiBhbiBpbW11dGFibGUgb2JqZWN0Jyl9fX0scj0wLG89dm9pZCAwO289dFtlW3JdXSxyPGUubGVuZ3RoO3IrPTEpbihyLG8pO3JldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLGEpKX12YXIgU3RvcmU9ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2lmKHRoaXMubmFtZT10fHxcInVubmFtZWRcIix0aGlzLnRyaWdnZXJlZD0hMSxPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXT1mdW5jdGlvbihhLG4pe2EuaW5kZXhPZihcIjpcIik+PTA/ZXZlbnRzW2VdKGEsbik6ZXZlbnRzW2VdKHQrXCItc3RvcmU6XCIrYSxuKX19KSxcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodmFyIG49T2JqZWN0LmtleXMoZSkscj1mdW5jdGlvbihlLHIpe2FbbltlXV09ZnVuY3Rpb24oZSl7dmFyIGE9cihkYXRhW3RdLmN1cnJlbnREYXRhLnRvSlMoKSxlLHRoaXMubmV4dC5iaW5kKHRoaXMpKTthJiZ0aGlzLm5leHQoYSl9LmJpbmQoYSl9LG89MCxpPXZvaWQgMDtpPWVbbltvXV0sbzxuLmxlbmd0aDtvKz0xKXIobyxpKTt0JiYoZGF0YVt0XT1kYXRhW3RdfHx7bG9hZGVkOiExLGN1cnJlbnREYXRhOmRlZXBGcmVlemUoW10pLGhpc3RvcmljRGF0YTpbXX0pfSxwcm90b3R5cGVBY2Nlc3NvcnM9e2RhdGE6e2NvbmZpZ3VyYWJsZTohMH19O3Byb3RvdHlwZUFjY2Vzc29ycy5kYXRhLmdldD1mdW5jdGlvbigpe3JldHVybiBkYXRhW3RoaXMubmFtZV0/ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKTpudWxsfSxTdG9yZS5wcm90b3R5cGUubG9hZGVkPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBkYXRhW3RdLmxvYWRlZH0pLmxlbmd0aDtpZih0PT09T2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoJiYhdGhpcy50cmlnZ2VyZWQpe3ZhciBlPXt9O09iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbih0KXtlW3RdPWRhdGFbdF0uY3VycmVudERhdGEudG9KUygpfSksdGhpcy50cmlnZ2VyZWQ9ITAsdHJpZ2dlciQxKFwiZ2xvYmFsOmRhdGEtbG9hZGVkXCIsZSl9fSxTdG9yZS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbih0KXtpZihkYXRhW3RoaXMubmFtZV0ubG9hZGVkPSEwLCh0PWRlZXBGcmVlemUodCkpIT09ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhKXtmb3IoZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5wdXNoKGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSk7ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5sZW5ndGg+MTA7KWRhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEuc2hpZnQoKTtkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9dCx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEudG9KUygpKX10aGlzLmxvYWRlZCgpfSxTdG9yZS5wcm90b3R5cGUucHJldmlvdXM9ZnVuY3Rpb24oKXtkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLmxlbmd0aDwxfHwobmV3U3RhdGU9ZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5wb3AoKSxkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9bmV3U3RhdGUsdHJpZ2dlciQxKHRoaXMubmFtZStcIi1zdG9yZTpjaGFuZ2VkXCIsZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhLnRvSlMoKSkpfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTdG9yZS5wcm90b3R5cGUscHJvdG90eXBlQWNjZXNzb3JzKSxtb2R1bGUuZXhwb3J0cz1TdG9yZTtcbiIsInZhciByZWplY3REZWZhdWx0ID0gZnVuY3Rpb24gcmVqZWN0RGVmYXVsdChlcnJvcil7XG5cdHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgcHJvbWlzZTogJyArIGVycm9yKTtcbn07XG52YXIgZW1wdHlGdW5jID0gZnVuY3Rpb24oKXt9O1xuXG5mdW5jdGlvbiBOb3dQcm9taXNlKGZuKSB7XG5cdHZhciByZXNvbHZlVmFsdWUsIHJlamVjdFZhbHVlO1xuXG5cdHRoaXMudGhlbiA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGlmICh0eXBlb2YgcmVqZWN0ICE9PSAnZnVuY3Rpb24nKSByZWplY3QgPSByZWplY3RGbjtcblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzRm4sIHJlakZuKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlakZuICE9PSAnZnVuY3Rpb24nKSByZWpGbiA9IHJlamVjdERlZmF1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIHJlc0ZuICE9PSAnZnVuY3Rpb24nKSByZXNGbiA9IGVtcHR5RnVuYztcblx0XHRcdGlmICghcmVqZWN0VmFsdWUpIHtcblx0XHRcdFx0cmVzRm4ocmVzb2x2ZShyZXNvbHZlVmFsdWUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0XHRcdHJlakZuKHJlamVjdFZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0dGhpcy5jYXRjaCA9IGZ1bmN0aW9uKHJlamVjdCkge1xuXHRcdGlmIChyZWplY3RWYWx1ZSkge1xuXHRcdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdERlZmF1bHQ7XG5cdFx0XHRyZWplY3QocmVqZWN0VmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRmdW5jdGlvbiByZXNvbHZlRm4oZGF0YSkge1xuXHRcdHJlc29sdmVWYWx1ZSA9IGRhdGE7XG5cdH1cblx0ZnVuY3Rpb24gcmVqZWN0Rm4oZGF0YSkge1xuXHRcdHJlamVjdFZhbHVlID0gZGF0YSB8fCAnRXJyb3InO1xuXHR9XG5cdGZuKHJlc29sdmVGbiwgcmVqZWN0Rm4pO1xufVxuXG5Ob3dQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdH0pO1xufTtcblxuTm93UHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbihlcnJvcikge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0cmVqZWN0KGVycm9yKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLmFsbCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuXHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XG5cdFx0XHRpZiAoZW50cnkgaW5zdGFuY2VvZiBOb3dQcm9taXNlKSB7XG5cdFx0XHRcdGVudHJ5LnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IHZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHsgcmVqZWN0KGUpOyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGVudHJ5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IE5vd1Byb21pc2UgOiBQcm9taXNlO1xubW9kdWxlLmV4cG9ydHMuTm93UHJvbWlzZSA9IE5vd1Byb21pc2U7IiwidmFyIE5vd1Byb21pc2UgPSByZXF1aXJlKCdub3ctcHJvbWlzZScpO1xuXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNOb2RlKCkge1xuXHRyZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnIHx8ICFwcm9jZXNzLmJyb3dzZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGJvZHk6IG51bGxcblx0fTtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdGZvciAodmFyIGFsbCBpbiBkZWZhdWx0T3B0aW9ucykge1xuXHRcdGlmICghb3B0aW9uc1thbGxdKSBvcHRpb25zW2FsbF0gPSBkZWZhdWx0T3B0aW9uc1thbGxdO1xuXHR9XG5cdGlmIChpc0Jyb3dzZXIoKSkge1xuXHRcdC8vIGJyb3dzZXIgY29udGV4dFxuXHRcdGlmIChvcHRpb25zLmJyb3dzZXJCYXNlKSB7XG5cdFx0XHR1cmwgPSBvcHRpb25zLmJyb3dzZXJCYXNlICsgdXJsO1xuXHRcdFx0ZGVsZXRlIG9wdGlvbnMuYnJvd3NlckJhc2U7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cuZmV0Y2godXJsLCBvcHRpb25zKTtcblx0fSBlbHNlIGlmIChpc05vZGUoKSkge1xuXHRcdC8vIG5vZGVKUyBjb250ZXh0XG5cdFx0dmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cdFx0dmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcblx0XHRpZiAodXJsLm1hdGNoKC86XFwvXFwvLykpIHtcblx0XHRcdG9wdGlvbnMuaG9zdG5hbWUgPSB1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvKFteOi9dKylbLzpdLiokLywgJyQxJyk7XG5cdFx0XHRvcHRpb25zLnBvcnQgPSBwYXJzZUludCh1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvW146L10rOihcXGQrKVxcLy4qJC8sICckMScpIHx8IHVybC5tYXRjaCgvXmh0dHBzOi8pID8gJzQ0MycgOiAnODAnLCAxMCk7XG5cdFx0XHRvcHRpb25zLnBhdGggPSB1cmwucmVwbGFjZSgvXlxcdys6XFwvXFwvW146L10rKD86OlxcZCspPyhcXC8uKikkLywgJyQxJyk7XG5cdFx0XHRvcHRpb25zLnByb3RvY29sID0gdXJsLnJlcGxhY2UoL14oXFx3KzopXFwvXFwvLiokLywgJyQxJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMuaG9zdG5hbWUgPSAnbG9jYWxob3N0Jztcblx0XHRcdG9wdGlvbnMucG9ydCA9IDg4ODg7XG5cdFx0XHRvcHRpb25zLnBhdGggPSB1cmw7XG5cdFx0XHRvcHRpb25zLnByb3RvY29sID0gJ2h0dHA6Jztcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBOb3dQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHJlcSA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdChvcHRpb25zLCAocmVzKSA9PiB7XG5cdFx0XHRcdGxldCBib2R5ID0gJyc7XG5cdFx0XHRcdHJlcy5vbignZGF0YScsIGNodW5rID0+IGJvZHkgKz0gY2h1bmspO1xuXHRcdFx0XHRyZXMub24oJ2VuZCcsICgpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPCAzMDAgJiYgcmVzLnN0YXR1c0NvZGUgPj0gMjAwKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7XG5cdFx0XHRcdFx0XHRcdGpzb246ICgpID0+IEpTT04ucGFyc2UoYm9keSksXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICgpID0+IGJvZHksXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGVcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0XHRcdFx0c3RhdHVzTWVzc2FnZTogcmVzLnN0YXR1c01lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICgpID0+IGJvZHksXG5cdFx0XHRcdFx0XHRcdGpzb246ICgpID0+IEpTT04ucGFyc2UoYm9keSlcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJlcS5vbignZXJyb3InLCByZWplY3QpO1xuXHRcdFx0aWYgKG9wdGlvbnMuYm9keSkge1xuXHRcdFx0XHRyZXEud3JpdGUob3B0aW9ucy5ib2R5KTtcblx0XHRcdH1cblx0XHRcdHJlcS5lbmQoKTtcblx0XHR9KTtcblx0fVxufTsiLCJpbXBvcnQgcm91dGVJbXBvcnRzIGZyb20gJy4uL3JvdXRlcy5qc29uJztcbmxldCByb3V0ZXMgPSByb3V0ZUltcG9ydHM7XG5sZXQgY3VycmVudFJvdXRlID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlblBhZ2Uocm91dGUpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuXHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJvdXRlLmNvbXBvbmVudCk7XG5cdGVsLnByb3BzID0gcm91dGUuZGF0YTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmFwcGVuZENoaWxkKGVsKTtcblx0aWYgKHJvdXRlLnRpdGxlKSB7XG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy50aXRsZSA9IHJvdXRlLnRpdGxlKTtcblx0fVxuXG5cdHdpbmRvdy5aaW5vLmltcG9ydC5jYWxsKHt9LCAnLycgKyByb3V0ZS5jb21wb25lbnQgKyAnLmpzJyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LnBvcHN0YXRlQXR0YWNoZWQpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdGF0ZSAmJiBvcGVuUGFnZShldmVudC5zdGF0ZSk7XG5cdH0sIGZhbHNlKTtcblx0d2luZG93LnBvcHN0YXRlQXR0YWNoZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcblx0XHRyb3V0ZXMgPSBuZXdSb3V0ZXM7XG5cdH0sXG5cblx0cm91dGUocGF0aCkge1xuXHRcdC8vIGlmIHdlIGhhdmUgYSBkaXJlY3QgbWF0Y2gsIGp1c3QgcmV0dXJuIGl0XG5cdFx0aWYgKHJvdXRlc1twYXRoXSkgcmV0dXJuIHJvdXRlc1twYXRoXTtcblxuXHRcdC8vIGlmIHdlIG5lZWQgbW9yZSBkZXRhaWxlZCBmaWx0ZXJpbmcuLi5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAocm91dGUgPT4ge1xuXHRcdFx0bGV0IG5hbWVzID0gWycnXTtcblx0XHRcdGxldCByb3V0ZUV4cHJlc3Npb24gPSByb3V0ZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiB7XG5cdFx0XHRcdG5hbWVzLnB1c2gobmFtZSk7XG5cdFx0XHRcdHJldHVybiAnKC4qPyknO1xuXHRcdFx0fSkucmVwbGFjZSgvXFwkfFxcXi9nLCAnXFxcXCQmJyk7XG5cdFx0XHRyb3V0ZUV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKCdeJyArIHJvdXRlRXhwcmVzc2lvbiArICckJyk7XG5cdFx0XHRsZXQgcmVzdWx0ID0gcm91dGVFeHByZXNzaW9uLmV4ZWMocGF0aCk7XG5cdFx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0bGV0IGRhdGEgPSB7fTtcblx0XHRcdG5hbWVzLnNsaWNlKDEpLmZvckVhY2goKG5hbWUsIGlkeCkgPT4ge1xuXHRcdFx0XHRkYXRhW25hbWVdID0gcmVzdWx0W2lkeCArIDFdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVzW3JvdXRlXSwge2RhdGF9KTtcblx0XHR9KS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdClbMF0gfHwgZmFsc2U7XG5cdH0sXG5cblx0Z2V0Q3VycmVudCgpIHtcblx0XHRyZXR1cm4gY3VycmVudFJvdXRlO1xuXHR9LFxuXG5cdGdldFVybChuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHJvdXRlID0gT2JqZWN0LmtleXMocm91dGVzKS5maWx0ZXIocm91dGUgPT4gcm91dGVzW3JvdXRlXS5uYW1lID09PSBuYW1lKVswXTtcblx0XHRsZXQgdXJsID0gcm91dGU7XG5cblx0XHRpZiAocm91dGUpIHtcblx0XHRcdHVybCA9IHJvdXRlLnJlcGxhY2UoLzooW2Etel0rKS9nLCAoZywgbmFtZSkgPT4gZGF0YSAmJiBkYXRhW25hbWVdIHx8IG51bGwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1cmw7XG5cdH0sXG5cblx0Z290byhuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHVybCA9IHRoaXMuZ2V0VXJsKG5hbWUsIGRhdGEpO1xuXHRcdHRoaXMub3Blbih1cmwpO1xuXHR9LFxuXG5cdG9wZW4odXJsKSB7XG5cdFx0bGV0IHJvdXRlID0gdGhpcy5yb3V0ZSh1cmwpO1xuXHRcdGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUocm91dGUsIG51bGwsIHVybCk7XG5cdFx0XHRvcGVuUGFnZShyb3V0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGRvIGEgcmVkaXJlY3Rcblx0XHRcdC8vIC4uLlxuXHRcdH1cblx0fVxufTsiLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL2xpYi9mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL2xpYi9yb3V0ZXInO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCBmaWx0ZXJzKSB7XG5cdGlmICghZmlsdGVycykgZmlsdGVycyA9IFtmYWxzZV07XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0dGFza3MsXG5cdFx0cHJvamVjdHM6IFtdLFxuXHRcdGR1ZVRhc2tzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpLFxuXHRcdGNvbnRleHRzOiBbXSxcblx0XHRmaWx0ZXJlZFRhc2tzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG5cdFx0XHRyZXR1cm4gZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IChmaWx0ZXIgPT09IHRydWUgJiYgdGFzay5kb25lKSB8fCAoZmlsdGVyID09PSBmYWxzZSAmJiAhdGFzay5kb25lKSB8fCAodGFzay5jb250ZXh0cyAmJiB0YXNrLmNvbnRleHRzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSB8fCAodGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSB8fCAodGFzay50YWdOYW1lcyAmJiB0YXNrLnRhZ05hbWVzLmluZGV4T2YoZmlsdGVyKSA+PSAwKSkubGVuZ3RoID09PSBmaWx0ZXJzLmxlbmd0aDtcblx0XHR9KSxcblx0XHR0YWdzOiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MpLm1hcCh0YXNrID0+IHRhc2sudGFncy5tYXAodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdLnRyaW0oKSkuam9pbignLCcpKS5qb2luKCcsJykuc3BsaXQoJywnKSxcblx0XHRmaWx0ZXJzXG5cdH07XG5cdGxldCBwcm9qZWN0cyA9IHt9O1xuXHRsZXQgY29udGV4dHMgPSB7fTtcblx0bGV0IHRhZ3MgPSB7fTtcblxuXHR0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZCkgPT4ge1xuXHRcdHRhc2suaWQgPSBpZC50b1N0cmluZygpO1xuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZm9yRWFjaCh0YWcgPT4gdGFnc1t0YWddICs9IDEpO1xuXHR9KTtcblx0cmVzdWx0LmZpbHRlcmVkVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzW3Byb2plY3RdICs9IDEpO1xuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gY29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcyA9IHJlc3VsdC5maWx0ZXJlZFRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuXHRcdGxldCBkdWVUYWdBID0gdGFza0EudGFncyAmJiB0YXNrQS50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJyk7XG5cdFx0bGV0IGR1ZVRhZ0IgPSB0YXNrQi50YWdzICYmIHRhc2tCLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRpZiAoZHVlVGFnQSkge1xuXHRcdFx0ZHVlVGFnQSA9IGR1ZVRhZ0Euc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdBID0gbmV3IERhdGUoZHVlVGFnQSkuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdBID0gOTMxMzQ3NDU2MDAwMDA7XG5cdFx0fVxuXHRcdGlmIChkdWVUYWdCKSB7XG5cdFx0XHRkdWVUYWdCID0gZHVlVGFnQi5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0IgPSBuZXcgRGF0ZShkdWVUYWdCKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0IgPSA5MzEzNDc0NTYwMDAwMDtcblx0XHR9XG5cdFx0cmV0dXJuIGR1ZVRhZ0EgLSBkdWVUYWdCO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSB7XG5cdGlmICghZG9uZU9ubHkgJiYgdGFzay5kb25lIHx8IGRvbmVPbmx5ICYmICF0YXNrLmRvbmUpIHJldHVybiAnJztcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCAnICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gOiAnJyxcblx0XHR0YXNrLnByaW9yaXR5IHx8ICcnLFxuXHRcdHRhc2sudGV4dC50cmltKCksXG5cdFx0dGFzay5saW5rcyAmJiB0YXNrLmxpbmtzLm1hcChsaW5rID0+IGxpbmsudXJsKS5qb2luKCcgJyksXG5cdFx0dGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmpvaW4oJyAnKSxcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuam9pbignICcpLFxuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3Muam9pbignICcpXG5cdF0uam9pbignICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHRhc2tzLCBkb25lT25seSkge1xuXHRyZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gc3RyaW5naWZ5VGFzayh0YXNrLCBkb25lT25seSkpLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhc2sodGFzaywgaWQpIHtcblx0bGV0IHByb2plY3RzID0gdGFzay5tYXRjaCgvXFxzKFxcK1xcdyspL2cpO1xuXHRsZXQgcHJpb3JpdHkgPSB0YXNrLm1hdGNoKC9cXHM/KFxcKFtBLVpdXFwpKVxccysvZyk7XG5cdGxldCBjb250ZXh0cyA9IHRhc2subWF0Y2goL1xccyhAXFx3KykvZyk7XG5cdGxldCB0YWdzID0gdGFzay5tYXRjaCgvXFxzKFxcdys6W1xcdyw6LV0rKS9nKTtcblx0bGV0IHRleHQgPSB0YXNrLnJlcGxhY2UoLyg/OlxccyooPzpcXChbQS1aXVxcKSlcXHMrKXwoPzpcXHNcXCtcXHcrKXwoPzpcXHNAXFx3Kyl8KD86XFxiKD86XFx3KzpbXFx3LDotXSspKS9nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0bGV0IGxpbmtzID0gdGV4dC5tYXRjaCgvXFxiaHR0cHM/OlxcL1xcL1teIF0rL2cpO1xuXHRwcm9qZWN0cyA9IHByb2plY3RzICYmIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0Y29udGV4dHMgPSBjb250ZXh0cyAmJiBjb250ZXh0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdHRhZ3MgPSB0YWdzICYmIHRhZ3MubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRsaW5rcyA9IGxpbmtzICYmIGxpbmtzLm1hcChsaW5rID0+IHtcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGxpbmssICcnKS50cmltKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogbGluayxcblx0XHRcdG5hbWU6IGxpbmsubWF0Y2goL2h0dHBzPzpcXC9cXC8oW14vXSspLylbMV1cblx0XHR9O1xuXHR9KSB8fCBbXTtcblx0bGV0IHRhc2tPYmplY3QgPSB7XG5cdFx0aWQsXG5cdFx0dGV4dCxcblx0XHRwcmlvcml0eTogcHJpb3JpdHkgJiYgcHJpb3JpdHkudG9TdHJpbmcoKS50cmltKCkgfHwgJycsXG5cdFx0cHJvamVjdHMsXG5cdFx0Y29udGV4dHMsXG5cdFx0dGFncyxcblx0XHR0YWdOYW1lczogdGFncyAmJiB0YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0pIHx8IFtdLFxuXHRcdGxpbmtzLFxuXHRcdHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdpZnlUYXNrKHRhc2tPYmplY3QpXG5cdH07XG5cblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdGlmICghdGFza0xpc3QpIHJldHVybiB0YXNrcztcblx0dGFza0xpc3Quc3BsaXQoJ1xcbicpLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0aWYgKHRhc2spIHtcblx0XHRcdHRhc2tzLnB1c2gocGFyc2VUYXNrKHRhc2ssIGlkLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1N0b3JlIGV4dGVuZHMgU3RvcmUge1xuXHRjb25zdHJ1Y3RvcihjcmVkZW50aWFscykge1xuXHRcdGxldCBfdGhpcztcblx0XHRzdXBlcigndGFzaycsIHtcblx0XHRcdGFkZChjdXJyZW50U3RhdGUsIHRhc2ssIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrID0gcGFyc2VUYXNrKHRhc2spO1xuXHRcdFx0XHR0YXNrLmlkID0gY3VycmVudFN0YXRlLnRhc2tzLmxlbmd0aC50b1N0cmluZygpO1xuXHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MucHVzaCh0YXNrKTtcblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlcihjdXJyZW50U3RhdGUsIGZpbHRlciwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuZmlsdGVycyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBwb3NpdGlvbiA9IGN1cnJlbnRTdGF0ZS5maWx0ZXJzLmluZGV4T2YoZmlsdGVyKTtcblx0XHRcdFx0aWYgKHBvc2l0aW9uID49IDApIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuZmlsdGVycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5maWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkbyhjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2suZG9uZSA9ICF0YXNrLmRvbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MsIGN1cnJlbnRTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZShjdXJyZW50U3RhdGUsIHRhc2tEYXRhLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBjdXJyZW50U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tEYXRhLmlkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHR0YXNrID0gT2JqZWN0LmFzc2lnbih7aWQ6IHRhc2suaWR9LCBwYXJzZVRhc2sodGFza0RhdGEudGV4dCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGUoY3VycmVudFN0YXRlLCB0YXNrSWQsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IGN1cnJlbnRTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3Muc3BsaWNlKGN1cnJlbnRTdGF0ZS50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcywgY3VycmVudFN0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHRfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmxvYWRUYXNrcy5iaW5kKHRoaXMpLCAzMDAwMDApO1xuXHRcdH1cblx0fVxuXG5cdHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHRcdGlmICghdGhpcy5kYXRhLnRhc2tzIHx8IHRoaXMuZGF0YS50YXNrcy5sZW5ndGggPD0gMCkge1xuXHRcdFx0dGhpcy5sb2FkVGFza3MoKTtcblx0XHR9XG5cdH1cblxuXHRsb2FkVGFza3MoKSB7XG5cdFx0bGV0IHRhc2tMaXN0ID0gJyc7XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgdGhpcy5kYXRhLmZpbHRlcnMpO1xuXHRcdFx0dGhpcy5uZXh0KG5ld1N0YXRlKTtcblx0XHR9XG5cdFx0ZmV0Y2gocm91dGVyLmdldFVybCgndGFza3MtbG9hZCcpLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuY3JlZGVudGlhbHMpXG5cdFx0fSkudGhlbihkYXRhID0+IGRhdGEuanNvbigpKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0dGFza0xpc3QgPSBkYXRhLnRhc2tzIHx8ICcnO1xuXHRcdFx0bGV0IHRhc2tzID0gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCB0aGlzLmRhdGEuZmlsdGVycyk7XG5cdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2F2ZVRhc2tzKHN0YXRlKSB7XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBmaWxlQ29udGVudCA9IHN0cmluZ2lmeShzdGF0ZS50YXNrcyk7XG5cdFx0bGV0IG9iaiA9IHtjcmVkZW50aWFsczogdGhpcy5jcmVkZW50aWFscywgZGF0YTogZmlsZUNvbnRlbnR9O1xuXHRcdGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBmaWxlQ29udGVudCk7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZXIpO1xuXHRcdHRoaXMuZGVib3VuY2VyID0gc2V0VGltZW91dCgoKCkgPT4ge1xuXHRcdFx0ZmV0Y2gocm91dGVyLmdldFVybCgndGFza3Mtc2F2ZScpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBib2R5XG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSA9PiB7XG5cdFx0XHRcdGlmICghZGF0YS50YXNrcykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgdGFza0xpc3QgPSBkYXRhLnRhc2tzIHx8ICcnO1xuXHRcdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgdGhpcy5kYXRhLmZpbHRlcnMpO1xuXHRcdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdFx0fSkuYmluZCh0aGlzKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignVW5leHBlY3RlZCByZXNwb25zZSBmcm9tIHNlcnZlcjogJywgZXJyb3IpKTtcblx0XHR9KS5iaW5kKHRoaXMpLCAyMDAwKTtcblx0fVxuXG59IiwiaW1wb3J0IFN0b3JlIGZyb20gJ2dsYXNzYmlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN0b3JlIGV4dGVuZHMgU3RvcmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndXNlcicsIHtcblx0XHRcdHNldFVzZXIoY3VycmVudFN0YXRlLCBkYXRhKSB7XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRTdGF0ZSwgZGF0YSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcmVkZW50aWFscycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRTdGF0ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdH1cblxuXHRsb2FkRGF0YSgpIHtcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsZXQgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3JlZGVudGlhbHMnKSB8fCAne30nO1xuXHRcdFx0XHR0aGlzLm5leHQoSlNPTi5wYXJzZShjcmVkZW50aWFscykpO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5uZXh0KHt9KTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTm90aWZpZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2RlbmllZCcpIHtcblx0XHRcdE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuXHRcdFx0XHRcdHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2hlY2tEdWVUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrRHVlVGFza3MoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCAvIDYwO1xuXHRcdGxldCBkdWVUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4ge1xuXHRcdFx0XHRsZXQgZGF0ZSA9IHRhZy5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdFx0aWYgKGRhdGUuaW5kZXhPZignVCcpIDwgMCkge1xuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlICsgJ1QwOTowMCcpO1xuXHRcdFx0XHRcdC8vIG5vIHRpbWUgY29tcG9uZW50LCBzbyBhbGVydCBhIGRheSBlYXJseSBhdCA5IEFNXG5cdFx0XHRcdFx0ZGF0ZSA9IGRhdGUuZ2V0VGltZSgpIC0gODY0MDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcblx0XHRcdFx0dGltZVN0YW1wID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAgLyAxMDAwIC8gNjApO1xuXHRcdFx0XHRpZiAodGltZVN0YW1wID49IG5vdyAtIDEgJiYgdGltZVN0YW1wIDw9IG5vdyArIDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pIHx8IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGR1ZVRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cdFx0XHRpZiAoIXRhc2subm90aWZpZWQpIHtcblx0XHRcdFx0dGFzay5ub3RpZmllZCA9IHRydWU7XG5cdFx0XHRcdG5ldyBOb3RpZmljYXRpb24odGFzay50ZXh0LCB7XG5cdFx0XHRcdFx0Ym9keTogdGFzay50b1N0cmluZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0fVxuXG5cdHNldFRhc2tzKHRhc2tzKSB7XG5cdFx0dGhpcy50YXNrcyA9IHRhc2tzO1xuXHRcdGlmICh0aGlzLnRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tYXBwLmNzcyc7XG5pbXBvcnQgVGFza1N0b3JlIGZyb20gJy4uL3N0b3Jlcy90YXNrLXN0b3JlJztcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3VzZXItc3RvcmUnO1xuaW1wb3J0IFRhc2tOb3RpZmllciBmcm9tICcuLi9saWIvdGFzay1ub3RpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9BcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdC8vIGRlZmluZSBpbml0aWFsIHByb3BzXG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHR0YXNrczogW10sXG5cdFx0XHRuYXZWaXNpYmxlOiBmYWxzZSxcblx0XHRcdGZpbHRlcmVkVGFza3M6IFtdLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHRwcm9qZWN0czogW10sXG5cdFx0XHRkdWVUYXNrczogW10sXG5cdFx0XHRjb250ZXh0czogW10sXG5cdFx0XHR0YWdzOiBbXSxcblx0XHRcdGNyZWRlbnRpYWxzOiB7fVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1hcHBcIj5cblx0XHRcdFx0PHRvZG8taGVhZGVyIGRhdGEtY3JlZGVudGlhbHM9e2RhdGEucHJvcHMuY3JlZGVudGlhbHN9Lz5cblx0XHRcdFx0PHRvZG8tbmF2IGNsYXNzPXtkYXRhLnByb3BzLm5hdlZpc2libGUgPyAnYWN0aXZlJyA6ICcnfSBkYXRhLXByb2plY3RzPXtkYXRhLnByb3BzLnByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmNvbnRleHRzfSBkYXRhLXRhZ3M9e2RhdGEucHJvcHMudGFnc30gZGF0YS1maWx0ZXJzPXtkYXRhLnByb3BzLmZpbHRlcnN9Lz5cblx0XHRcdFx0PHRvZG8tbGlzdCBkYXRhLXN0b3JlPXt0aGlzLnRhc2tTdG9yZX0gZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5wcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5jb250ZXh0c30gZGF0YS10YXNrcz17ZGF0YS5wcm9wcy5maWx0ZXJlZFRhc2tzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3RvZG8tbmF2Jzoge2ZpbHRlcihldmVudCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbmF2VmlzaWJsZScsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudGFza1N0b3JlLmZpbHRlcihldmVudC5kZXRhaWwpO1xuXHRcdFx0fSwgY2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQndG9kby1oZWFkZXInOiB7bG9naW4oZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudXNlclN0b3JlLnNldFVzZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH0sIGxvZ29hY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgdHJ1ZSk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8taGVhZGVyLmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdi5qcycpO1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8tbGlzdC5qcycpO1xuXG5cdFx0dGhpcy50YXNrU3RvcmUgPSBuZXcgVGFza1N0b3JlKCk7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSBuZXcgVXNlclN0b3JlKCk7XG5cdFx0dGhpcy5ub3RpZmllciA9IG5ldyBUYXNrTm90aWZpZXIoKTtcblxuXHRcdHRoaXMudGFza1N0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdHRoaXMubm90aWZpZXIuc2V0VGFza3MoZGF0YS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpKTtcblx0XHRcdHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YSk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpLCAxNTApO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YXNrU3RvcmUuc2V0Q3JlZGVudGlhbHMoZGF0YSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjcmVkZW50aWFscycsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvbnVubW91bnQoKSB7XG5cdFx0dGhpcy50YXNrU3RvcmUub2ZmKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQpO1xuXHRcdHRoaXMudXNlclN0b3JlLm9mZignY2hhbmdlZCcsIHRoaXMudXNlcnNDaGFuZ2VkKTtcblx0fVxufSJdLCJuYW1lcyI6WyJnbG9iYWwiLCJOb3dQcm9taXNlIiwiY29uc3QiLCJsZXQiLCJzdXBlciIsImZpbHRlciIsInRoaXMiLCJTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBT0EsY0FBTSxDQUFDQSxjQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFD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LENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0NBRXhDLE9BQU8sTUFBTSxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtDQUN0QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUE7Q0FDaEUsT0FBTztFQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7RUFDOUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFO0VBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0VBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJLENBQUMsR0FBRyxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3hELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3hDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3hDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQ25COztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7Q0FDbkMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsYUFBYSxDQUFD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
