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

var styles = (function (code) { return code; })("todo-app .todo-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}todo-app todo-header{display:block;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;position:relative;z-index:1}todo-app todo-list{display:block;-webkit-box-flex:1;-ms-flex:1 1 75%;flex:1 1 75%;padding-top:1em}todo-app todo-nav{-webkit-box-flex:1;-ms-flex:1 1 calc(25% - 1em);flex:1 1 calc(25% - 1em)}todo-app button{background:#495800;color:#e2f0a0;border:1px solid #6c7e15;border-radius:3px;cursor:pointer;margin:2px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.25);box-shadow:0 0 5px rgba(0,0,0,.25)}todo-app button:hover{color:#6c7e15;background:#e2f0a0}@media screen and (max-width:686px){todo-app todo-nav{position:absolute;min-width:256px;max-width:calc(100% - 2em);left:-100%;opacity:0;z-index:2;-webkit-transition:left .2s ease-out,opacity .2s ease-out;transition:left .2s ease-out,opacity .2s ease-out}todo-app todo-nav.active{left:0;opacity:1}todo-app todo-header{position:fixed;top:0;left:0;right:0}todo-app todo-list{padding-top:5.5em}}", {});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main = createCommonjsModule(function (module) {
"use strict";var scope="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:{},eventRegistry=scope.__eventRegistry=scope.__eventRegistry||{};function trigger(e){var t=arguments;if(eventRegistry[e])for(var n,r=0,i=eventRegistry[e].length;n=eventRegistry[e][r],r<i;r+=1){if(!1===n.apply(this,Array.prototype.slice.call(t,1)))break}}function on(e,t){eventRegistry[e]||(eventRegistry[e]=[]),eventRegistry[e].push(t);}function off(e,t){if(eventRegistry[e])if("function"==typeof t){var n=eventRegistry[e].indexOf(t);n>=0&&eventRegistry[e].splice(n,1);}else eventRegistry[e]=[];}function one(e,t){var n=this,r=function(){off(e,r),t.apply(n,Array.prototype.slice.call(arguments));};on(e,r);}var events=Object.freeze({trigger:trigger,on:on,off:off,one:one}),scope$1="undefined"!=typeof window?window:{},data=scope$1.__glassbilStoreData=scope$1.__glassbilStoreData||{},trigger$1=trigger;function mirror(){return this}function deepFreeze(e){if(null===e||"function"==typeof e.toJS||"object"!=typeof e)return e;var t=Object.getOwnPropertyNames(e),n={toJS:{value:mirror.bind(e)}};Array.isArray(e)&&(e=e.slice(0).map(deepFreeze),["map","forEach","find","indexOf","filter","some","every","lastIndexOf","slice"].forEach(function(t){n[t]={value:function(){return deepFreeze(Array.prototype[t].apply(e,arguments))}};}));for(var r=function(e,r){n[t[e]]={enumerable:!0,get:function(){return deepFreeze(r)},set:function(n){throw new Error('Cannot change property "'+t[e]+'" to "'+n+'" of an immutable object')}};},i=0,a=void 0;a=e[t[i]],i<t.length;i+=1)r(i,a);return Object.freeze(Object.create(Object.getPrototypeOf(e),n))}function bind(e,t,n){return function(r){return e.call(t,r,n)}}var Store=function(e,t){var n=this;this.name=e||"Unnamed"+Object.keys(data).length,this.triggered=!1,Object.keys(events).forEach(function(t){n[t]=function(n,r){n.indexOf(":")>=0?events[t](n,r):events[t](e+"-store:"+n,r);};}),this.actions(t),e&&(data[e]=data[e]||{loaded:!1,currentData:deepFreeze([])});},prototypeAccessors={data:{configurable:!0}};Store.prototype.actions=function(e){var t=this;if(!e||"object"!=typeof e)return this.actionDefinitions&&Object.keys(this.actionDefinitions)||[];var n=Object.keys(e);this.actionDefinitions=Object.assign({},this.actionDefinitions||{},e);for(var r=function(e,r){(function(e){this[e]=function(t){var n=r.call(this,data[this.name].currentData,t,bind(this.setState,this,e));void 0!==n&&this.setState(n,e);}.bind(this);}).call(t,n[e]);},i=0,a=void 0;a=e[n[i]],i<n.length;i+=1)r(i,a);return Object.keys(this.actionDefinitions)},prototypeAccessors.data.get=function(){return data[this.name]&&data[this.name].loaded?data[this.name].currentData:null},Store.prototype.loaded=function(){var e=Object.keys(data).filter(function(e){return data[e].loaded}).length;if(e===Object.keys(data).length&&!data.__triggered){var t={};Object.keys(data).map(function(e){t[e]=data[e].currentData.toJS();}),data.__triggered=!0,trigger$1("global:data-loaded",t);}},Store.prototype.setState=function(e,t){void 0===t&&(t="setState"),data[this.name].loaded=!0,(e=deepFreeze(e))!==data[this.name].currentData&&(data[this.name].currentData=e,trigger$1(this.name+"-store:changed",data[this.name].currentData,t)),this.loaded();},Object.defineProperties(Store.prototype,prototypeAccessors),module.exports=Store;
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
		var thisEvening = new Date(new Date().toISOString().replace(/T\d{2}:\d{2}/g, 'T23:59')).getTime();
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
	if (!doneOnly && task.done || doneOnly && !task.done) { return ''; }
	return [
		task.done ? 'x ' + task.done.toISOString().split('T')[0] : '',
		task.priority || '',
		task.text.trim(),
		task.links && task.links.map(function (link) { return link.url; }).join(' '),
		task.projects && task.projects.join(' '),
		task.contexts && task.contexts.join(' '),
		task.tags && task.tags.join(' ')
	].join(' ').trim();
}

function stringify(tasks, doneOnly) {
	return tasks.map(function (task) { return stringifyTask(task, doneOnly); }).join('\n').replace(/\n+/g, '\n');
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

function parseDoneTask(task, id) {
	var doneRegEx = /^x\s+(\d+-\d+-\d+)\s+/;
	var doneDate = task.match(doneRegEx);
	var taskObject = parseTask(task.replace(doneDate && doneDate[0] || '__CANNOT_BE_FOUND_DEADBEEF__', ''), id);
	taskObject.done = doneDate && new Date(doneDate[1]) || false;
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

function parseDoneTaskList(taskList) {
	var tasks = [];
	if (!taskList) { return tasks; }
	taskList.split('\n').forEach(function (task, id) {
		if (task) {
			tasks.push(parseDoneTask(task, id.toString()));
		}
	});
	return tasks;
}

var TaskStore = (function (Store$$1) {
	function TaskStore(credentials) {
		Store$$1.call(this, 'task');

		var _this = this;
		this.actions({
			add: function add(currentState, task, next) {
				var newState = currentState.toJS();
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

			filter: function filter(currentState, filter$1, next) {
				var newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				if (!newState.filters) {
					newState.filters = [];
				}
				var position = newState.filters.indexOf(filter$1);
				if (position >= 0) {
					newState.filters.splice(position, 1);
				} else {
					newState.filters.push(filter$1);
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
			},

			do: function do$1(currentState, taskId, next) {
				var newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				var task = newState.tasks.find(function (task) { return task.id === taskId; });
				if (task) {
					task.done = task.done ? false : new Date();
					task.modified = +new Date;
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
			},

			update: function update(currentState, taskData, next) {
				var newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				}
				var task = newState.tasks.find(function (task) { return task.id === taskData.id; });
				if (task) {
					task = Object.assign({id: task.id}, parseTask(taskData.text));
					task.modified = +new Date;
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
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
		this.loadTasks();
		if (typeof window !== 'undefined') {
			if (window.taskStoreInterval) {
				clearInterval(window.taskStoreInterval);
			}
			window.taskStoreInterval = setInterval(this.loadTasks.bind(this), 60000);
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

	TaskStore.prototype.getCredentials = function getCredentials (type) {
		var target = Object.assign({}, this.credentials);
		if (type === 'done') {
			target.url = target.url.replace(/\/todo\.txt$/, '/done.txt');
		}
		return target;
	};

	TaskStore.prototype.loadTasks = function loadTasks () {
		var this$1 = this;

		var taskList = '';
		if (!this.credentials) {
			return;
		}
		if (!this.data.tasks && typeof localStorage !== 'undefined') {
			taskList = localStorage.getItem('todos');
			var tasks = parseTaskList(taskList);
			var newState = calculateDataObject(tasks, this.data.filters);
			this.setState(newState);
		}
		this.trigger('network-start');
		fetch(router.getUrl('tasks-load'), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(this.getCredentials())
		}).then(function (data) { return data.json(); }).then(function (openData) {
			return fetch(router.getUrl('tasks-load'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(this$1.getCredentials('done'))
			}).then(function (doneResponse) { return doneResponse.json(); }).then(function (doneData) { return openData.tasks + '\n' + doneData.tasks; });
		}).then(function (data) {
			taskList = data || '';
			var currentTasks = this$1.data.tasks;
			var tasks = parseDoneTaskList(taskList);
			var isMerged = false;
			tasks.forEach(function (task, idx) {
				var matchingTask = currentTasks.find(function (currentTask) { return currentTask.id === task.id; });
				if (task.modified < matchingTask.modified) {
					tasks[idx] = matchingTask;
					isMerged = true;
				}
			});
			var newState = calculateDataObject(tasks, this$1.data.filters);
			this$1.setState(newState);
			this$1.trigger('network-end');
			if (isMerged) {
				this$1.saveTasks(this$1.data);
			}
		});
	};

	TaskStore.prototype.saveTasks = function saveTasks (state) {
		var this$1 = this;

		if (typeof localStorage === 'undefined') { return; }
		if (!this.credentials) {
			return;
		}
		var fileContent = stringify(state.tasks);
		var obj = {credentials: this.getCredentials(), data: fileContent};
		var body = JSON.stringify(obj);
		localStorage.setItem('todos', fileContent);

		if (window.taskStoreInterval) {
			clearInterval(window.taskStoreInterval);
		}
		clearTimeout(this.debouncer);
		this.debouncer = setTimeout((function () {
			// save open tasks
			this$1.trigger('network-start');
			var openPromise = fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			}).then(function (response) { return response.json(); }).then((function () {
				clearInterval(window.taskStoreInterval);
				window.taskStoreInterval = setInterval(this$1.loadTasks.bind(this$1), 60000);
			}).bind(this$1)).catch(function (error) { return console.error('Unexpected response from server: ', error); });

			// save done tasks
			obj.credentials = this$1.getCredentials('done');
			obj.data = stringify(state.tasks, true);
			body = JSON.stringify(obj);
			var donePromise = fetch(router.getUrl('tasks-save'), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: body
			});
			Promise.all([openPromise, donePromise]).then(function () { return this$1.trigger('network-end'); });
		}).bind(this), 2000);
	};

	return TaskStore;
}(main));

var UserStore = (function (Store) {
	function UserStore() {
		Store.call(this, 'user', {
			setUser: function setUser(currentState, data) {
				var newState = Object.assign({}, currentState.toJS(), data);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('credentials', JSON.stringify(newState));
				}
				return newState;
			}
		});

		this.loadData();
	}

	if ( Store ) UserStore.__proto__ = Store;
	UserStore.prototype = Object.create( Store && Store.prototype );
	UserStore.prototype.constructor = UserStore;

	UserStore.prototype.loadData = function loadData () {
		var _this = this;
		if (typeof localStorage !== 'undefined') {
			setTimeout(function () {
				var credentials = localStorage.getItem('credentials') || '{}';
				_this.setState(JSON.parse(credentials));
			}, 100);
		} else {
			_this.setState({});
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
		navVisible: false,
		activeNetwork: false,
		filters: false,
		tasks: [],
		filteredTasks: [],
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
				this.createNode( 'todo-header', { 'data-credentials': data.props.credentials, 'data-network': data.props.activeNetwork ? 'active' : 'inactive' }),
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

	this.taskStore.on('network-start', this.networkStart = function () {
		this$1.getHost().setProps('activeNetwork', true);
	});
	this.taskStore.on('network-end', this.networkEnd = function () {
		this$1.getHost().setProps('activeNetwork', false);
	});
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
	if (this.userStore.data) {
		this.usersChanged(this.userStore.data);
	}
};

TodoApp.prototype.onunmount = function onunmount () {
	this.taskStore.off('changed', this.tasksChanged);
	this.userStore.off('changed', this.usersChanged);
	this.taskStore.off('network-start', this.networkStart);
	this.taskStore.off('network-end', this.networkEnd);
};

Object.defineProperties( TodoApp.prototype, prototypeAccessors );

return TodoApp;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL2xpYi90YXNrLW5vdGlmaWVyLmpzIiwiLi4vLi4vcGFnZXMvdG9kby1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNjb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGV2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5PXNjb3BlLl9fZXZlbnRSZWdpc3RyeXx8e307ZnVuY3Rpb24gdHJpZ2dlcihlKXt2YXIgdD1hcmd1bWVudHM7aWYoZXZlbnRSZWdpc3RyeVtlXSlmb3IodmFyIG4scj0wLGk9ZXZlbnRSZWdpc3RyeVtlXS5sZW5ndGg7bj1ldmVudFJlZ2lzdHJ5W2VdW3JdLHI8aTtyKz0xKXtpZighMT09PW4uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LDEpKSlicmVha319ZnVuY3Rpb24gb24oZSx0KXtldmVudFJlZ2lzdHJ5W2VdfHwoZXZlbnRSZWdpc3RyeVtlXT1bXSksZXZlbnRSZWdpc3RyeVtlXS5wdXNoKHQpfWZ1bmN0aW9uIG9mZihlLHQpe2lmKGV2ZW50UmVnaXN0cnlbZV0paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl7dmFyIG49ZXZlbnRSZWdpc3RyeVtlXS5pbmRleE9mKHQpO24+PTAmJmV2ZW50UmVnaXN0cnlbZV0uc3BsaWNlKG4sMSl9ZWxzZSBldmVudFJlZ2lzdHJ5W2VdPVtdfWZ1bmN0aW9uIG9uZShlLHQpe3ZhciBuPXRoaXMscj1mdW5jdGlvbigpe29mZihlLHIpLHQuYXBwbHkobixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07b24oZSxyKX12YXIgZXZlbnRzPU9iamVjdC5mcmVlemUoe3RyaWdnZXI6dHJpZ2dlcixvbjpvbixvZmY6b2ZmLG9uZTpvbmV9KSxzY29wZSQxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGRhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhPXNjb3BlJDEuX19nbGFzc2JpbFN0b3JlRGF0YXx8e30sdHJpZ2dlciQxPXRyaWdnZXI7ZnVuY3Rpb24gbWlycm9yKCl7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gZGVlcEZyZWV6ZShlKXtpZihudWxsPT09ZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZS50b0pTfHxcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gZTt2YXIgdD1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKSxuPXt0b0pTOnt2YWx1ZTptaXJyb3IuYmluZChlKX19O0FycmF5LmlzQXJyYXkoZSkmJihlPWUuc2xpY2UoMCkubWFwKGRlZXBGcmVlemUpLFtcIm1hcFwiLFwiZm9yRWFjaFwiLFwiZmluZFwiLFwiaW5kZXhPZlwiLFwiZmlsdGVyXCIsXCJzb21lXCIsXCJldmVyeVwiLFwibGFzdEluZGV4T2ZcIixcInNsaWNlXCJdLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT17dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZGVlcEZyZWV6ZShBcnJheS5wcm90b3R5cGVbdF0uYXBwbHkoZSxhcmd1bWVudHMpKX19fSkpO2Zvcih2YXIgcj1mdW5jdGlvbihlLHIpe25bdFtlXV09e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRlZXBGcmVlemUocil9LHNldDpmdW5jdGlvbihuKXt0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjaGFuZ2UgcHJvcGVydHkgXCInK3RbZV0rJ1wiIHRvIFwiJytuKydcIiBvZiBhbiBpbW11dGFibGUgb2JqZWN0Jyl9fX0saT0wLGE9dm9pZCAwO2E9ZVt0W2ldXSxpPHQubGVuZ3RoO2krPTEpcihpLGEpO3JldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLG4pKX1mdW5jdGlvbiBiaW5kKGUsdCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIGUuY2FsbCh0LHIsbil9fXZhciBTdG9yZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7dGhpcy5uYW1lPWV8fFwiVW5uYW1lZFwiK09iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCx0aGlzLnRyaWdnZXJlZD0hMSxPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT1mdW5jdGlvbihuLHIpe24uaW5kZXhPZihcIjpcIik+PTA/ZXZlbnRzW3RdKG4scik6ZXZlbnRzW3RdKGUrXCItc3RvcmU6XCIrbixyKX19KSx0aGlzLmFjdGlvbnModCksZSYmKGRhdGFbZV09ZGF0YVtlXXx8e2xvYWRlZDohMSxjdXJyZW50RGF0YTpkZWVwRnJlZXplKFtdKX0pfSxwcm90b3R5cGVBY2Nlc3NvcnM9e2RhdGE6e2NvbmZpZ3VyYWJsZTohMH19O1N0b3JlLnByb3RvdHlwZS5hY3Rpb25zPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLmFjdGlvbkRlZmluaXRpb25zJiZPYmplY3Qua2V5cyh0aGlzLmFjdGlvbkRlZmluaXRpb25zKXx8W107dmFyIG49T2JqZWN0LmtleXMoZSk7dGhpcy5hY3Rpb25EZWZpbml0aW9ucz1PYmplY3QuYXNzaWduKHt9LHRoaXMuYWN0aW9uRGVmaW5pdGlvbnN8fHt9LGUpO2Zvcih2YXIgcj1mdW5jdGlvbihlLHIpeyhmdW5jdGlvbihlKXt0aGlzW2VdPWZ1bmN0aW9uKHQpe3ZhciBuPXIuY2FsbCh0aGlzLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YSx0LGJpbmQodGhpcy5zZXRTdGF0ZSx0aGlzLGUpKTt2b2lkIDAhPT1uJiZ0aGlzLnNldFN0YXRlKG4sZSl9LmJpbmQodGhpcyl9KS5jYWxsKHQsbltlXSl9LGk9MCxhPXZvaWQgMDthPWVbbltpXV0saTxuLmxlbmd0aDtpKz0xKXIoaSxhKTtyZXR1cm4gT2JqZWN0LmtleXModGhpcy5hY3Rpb25EZWZpbml0aW9ucyl9LHByb3RvdHlwZUFjY2Vzc29ycy5kYXRhLmdldD1mdW5jdGlvbigpe3JldHVybiBkYXRhW3RoaXMubmFtZV0mJmRhdGFbdGhpcy5uYW1lXS5sb2FkZWQ/ZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhOm51bGx9LFN0b3JlLnByb3RvdHlwZS5sb2FkZWQ9ZnVuY3Rpb24oKXt2YXIgZT1PYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGRhdGFbZV0ubG9hZGVkfSkubGVuZ3RoO2lmKGU9PT1PYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgmJiFkYXRhLl9fdHJpZ2dlcmVkKXt2YXIgdD17fTtPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oZSl7dFtlXT1kYXRhW2VdLmN1cnJlbnREYXRhLnRvSlMoKX0pLGRhdGEuX190cmlnZ2VyZWQ9ITAsdHJpZ2dlciQxKFwiZ2xvYmFsOmRhdGEtbG9hZGVkXCIsdCl9fSxTdG9yZS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cInNldFN0YXRlXCIpLGRhdGFbdGhpcy5uYW1lXS5sb2FkZWQ9ITAsKGU9ZGVlcEZyZWV6ZShlKSkhPT1kYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEmJihkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9ZSx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEsdCkpLHRoaXMubG9hZGVkKCl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0b3JlLnByb3RvdHlwZSxwcm90b3R5cGVBY2Nlc3NvcnMpLG1vZHVsZS5leHBvcnRzPVN0b3JlO1xuIiwidmFyIHJlamVjdERlZmF1bHQgPSBmdW5jdGlvbiByZWplY3REZWZhdWx0KGVycm9yKXtcblx0dGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCBwcm9taXNlOiAnICsgZXJyb3IpO1xufTtcbnZhciBlbXB0eUZ1bmMgPSBmdW5jdGlvbigpe307XG5cbmZ1bmN0aW9uIE5vd1Byb21pc2UoZm4pIHtcblx0dmFyIHJlc29sdmVWYWx1ZSwgcmVqZWN0VmFsdWU7XG5cblx0dGhpcy50aGVuID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdEZuO1xuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNGbiwgcmVqRm4pIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqRm4gIT09ICdmdW5jdGlvbicpIHJlakZuID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdGlmICh0eXBlb2YgcmVzRm4gIT09ICdmdW5jdGlvbicpIHJlc0ZuID0gZW1wdHlGdW5jO1xuXHRcdFx0aWYgKCFyZWplY3RWYWx1ZSkge1xuXHRcdFx0XHRyZXNGbihyZXNvbHZlKHJlc29sdmVWYWx1ZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHRcdFx0cmVqRm4ocmVqZWN0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHR0aGlzLmNhdGNoID0gZnVuY3Rpb24ocmVqZWN0KSB7XG5cdFx0aWYgKHJlamVjdFZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlc29sdmVGbihkYXRhKSB7XG5cdFx0cmVzb2x2ZVZhbHVlID0gZGF0YTtcblx0fVxuXHRmdW5jdGlvbiByZWplY3RGbihkYXRhKSB7XG5cdFx0cmVqZWN0VmFsdWUgPSBkYXRhIHx8ICdFcnJvcic7XG5cdH1cblx0Zm4ocmVzb2x2ZUZuLCByZWplY3RGbik7XG59XG5cbk5vd1Byb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZXNvbHZlKHZhbHVlKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UuYWxsID0gZnVuY3Rpb24odmFsdWVzKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcblx0XHRcdGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vd1Byb21pc2UpIHtcblx0XHRcdFx0ZW50cnkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goZW50cnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gTm93UHJvbWlzZSA6IFByb21pc2U7XG5tb2R1bGUuZXhwb3J0cy5Ob3dQcm9taXNlID0gTm93UHJvbWlzZTsiLCJ2YXIgTm93UHJvbWlzZSA9IHJlcXVpcmUoJ25vdy1wcm9taXNlJyk7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUoKSB7XG5cdHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgfHwgIXByb2Nlc3MuYnJvd3Nlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Ym9keTogbnVsbFxuXHR9O1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Zm9yICh2YXIgYWxsIGluIGRlZmF1bHRPcHRpb25zKSB7XG5cdFx0aWYgKCFvcHRpb25zW2FsbF0pIG9wdGlvbnNbYWxsXSA9IGRlZmF1bHRPcHRpb25zW2FsbF07XG5cdH1cblx0aWYgKGlzQnJvd3NlcigpKSB7XG5cdFx0Ly8gYnJvd3NlciBjb250ZXh0XG5cdFx0aWYgKG9wdGlvbnMuYnJvd3NlckJhc2UpIHtcblx0XHRcdHVybCA9IG9wdGlvbnMuYnJvd3NlckJhc2UgKyB1cmw7XG5cdFx0XHRkZWxldGUgb3B0aW9ucy5icm93c2VyQmFzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIG9wdGlvbnMpO1xuXHR9IGVsc2UgaWYgKGlzTm9kZSgpKSB7XG5cdFx0Ly8gbm9kZUpTIGNvbnRleHRcblx0XHR2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblx0XHR2YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuXHRcdGlmICh1cmwubWF0Y2goLzpcXC9cXC8vKSkge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC8oW146L10rKVsvOl0uKiQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucG9ydCA9IHBhcnNlSW50KHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSs6KFxcZCspXFwvLiokLywgJyQxJykgfHwgdXJsLm1hdGNoKC9eaHR0cHM6LykgPyAnNDQzJyA6ICc4MCcsIDEwKTtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSsoPzo6XFxkKyk/KFxcLy4qKSQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSB1cmwucmVwbGFjZSgvXihcXHcrOilcXC9cXC8uKiQvLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9ICdsb2NhbGhvc3QnO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gODg4ODtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybDtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSAnaHR0cDonO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcblx0XHRcdFx0bGV0IGJvZHkgPSAnJztcblx0XHRcdFx0cmVzLm9uKCdkYXRhJywgY2h1bmsgPT4gYm9keSArPSBjaHVuayk7XG5cdFx0XHRcdHJlcy5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA8IDMwMCAmJiByZXMuc3RhdHVzQ29kZSA+PSAyMDApIHtcblx0XHRcdFx0XHRcdGxldCByZXNwb25zZSA9IHtcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXNNZXNzYWdlOiByZXMuc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmVxLm9uKCdlcnJvcicsIHJlamVjdCk7XG5cdFx0XHRpZiAob3B0aW9ucy5ib2R5KSB7XG5cdFx0XHRcdHJlcS53cml0ZShvcHRpb25zLmJvZHkpO1xuXHRcdFx0fVxuXHRcdFx0cmVxLmVuZCgpO1xuXHRcdH0pO1xuXHR9XG59OyIsImltcG9ydCByb3V0ZUltcG9ydHMgZnJvbSAnLi4vcm91dGVzLmpzb24nO1xubGV0IHJvdXRlcyA9IHJvdXRlSW1wb3J0cztcbmxldCBjdXJyZW50Um91dGUgPSBudWxsO1xuXG5mdW5jdGlvbiBvcGVuUGFnZShyb3V0ZSkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG5cdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocm91dGUuY29tcG9uZW50KTtcblx0ZWwucHJvcHMgPSByb3V0ZS5kYXRhO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoZWwpO1xuXHRpZiAocm91dGUudGl0bGUpIHtcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LnRpdGxlID0gcm91dGUudGl0bGUpO1xuXHR9XG5cblx0d2luZG93Llppbm8uaW1wb3J0LmNhbGwoe30sICcvJyArIHJvdXRlLmNvbXBvbmVudCArICcuanMnKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnN0YXRlICYmIG9wZW5QYWdlKGV2ZW50LnN0YXRlKTtcblx0fSwgZmFsc2UpO1xuXHR3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0Um91dGVzKG5ld1JvdXRlcykge1xuXHRcdHJvdXRlcyA9IG5ld1JvdXRlcztcblx0fSxcblxuXHRyb3V0ZShwYXRoKSB7XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGRpcmVjdCBtYXRjaCwganVzdCByZXR1cm4gaXRcblx0XHRpZiAocm91dGVzW3BhdGhdKSByZXR1cm4gcm91dGVzW3BhdGhdO1xuXG5cdFx0Ly8gaWYgd2UgbmVlZCBtb3JlIGRldGFpbGVkIGZpbHRlcmluZy4uLlxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcChyb3V0ZSA9PiB7XG5cdFx0XHRsZXQgbmFtZXMgPSBbJyddO1xuXHRcdFx0bGV0IHJvdXRlRXhwcmVzc2lvbiA9IHJvdXRlLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86KFthLXpdKykvZywgKGcsIG5hbWUpID0+IHtcblx0XHRcdFx0bmFtZXMucHVzaChuYW1lKTtcblx0XHRcdFx0cmV0dXJuICcoLio/KSc7XG5cdFx0XHR9KS5yZXBsYWNlKC9cXCR8XFxeL2csICdcXFxcJCYnKTtcblx0XHRcdHJvdXRlRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoJ14nICsgcm91dGVFeHByZXNzaW9uICsgJyQnKTtcblx0XHRcdGxldCByZXN1bHQgPSByb3V0ZUV4cHJlc3Npb24uZXhlYyhwYXRoKTtcblx0XHRcdGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRsZXQgZGF0YSA9IHt9O1xuXHRcdFx0bmFtZXMuc2xpY2UoMSkuZm9yRWFjaCgobmFtZSwgaWR4KSA9PiB7XG5cdFx0XHRcdGRhdGFbbmFtZV0gPSByZXN1bHRbaWR4ICsgMV07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3V0ZXNbcm91dGVdLCB7ZGF0YX0pO1xuXHRcdH0pLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0KVswXSB8fCBmYWxzZTtcblx0fSxcblxuXHRnZXRDdXJyZW50KCkge1xuXHRcdHJldHVybiBjdXJyZW50Um91dGU7XG5cdH0sXG5cblx0Z2V0VXJsKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgcm91dGUgPSBPYmplY3Qua2V5cyhyb3V0ZXMpLmZpbHRlcihyb3V0ZSA9PiByb3V0ZXNbcm91dGVdLm5hbWUgPT09IG5hbWUpWzBdO1xuXHRcdGxldCB1cmwgPSByb3V0ZTtcblxuXHRcdGlmIChyb3V0ZSkge1xuXHRcdFx0dXJsID0gcm91dGUucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiBkYXRhICYmIGRhdGFbbmFtZV0gfHwgbnVsbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVybDtcblx0fSxcblxuXHRnb3RvKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgdXJsID0gdGhpcy5nZXRVcmwobmFtZSwgZGF0YSk7XG5cdFx0dGhpcy5vcGVuKHVybCk7XG5cdH0sXG5cblx0b3Blbih1cmwpIHtcblx0XHRsZXQgcm91dGUgPSB0aGlzLnJvdXRlKHVybCk7XG5cdFx0Y3VycmVudFJvdXRlID0gcm91dGU7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShyb3V0ZSwgbnVsbCwgdXJsKTtcblx0XHRcdG9wZW5QYWdlKHJvdXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZG8gYSByZWRpcmVjdFxuXHRcdFx0Ly8gLi4uXG5cdFx0fVxuXHR9XG59OyIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vbGliL2ZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vbGliL3JvdXRlcic7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIGZpbHRlcnMpIHtcblx0aWYgKCFmaWx0ZXJzKSBmaWx0ZXJzID0gW2ZhbHNlXTtcblx0bGV0IHJlc3VsdCA9IHtcblx0XHR0YXNrcyxcblx0XHRwcm9qZWN0czogW10sXG5cdFx0ZHVlVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKSksXG5cdFx0Y29udGV4dHM6IFtdLFxuXHRcdGZpbHRlcmVkVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcblx0XHRcdHJldHVybiBmaWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlciA9PT0gdHJ1ZSAmJiB0YXNrLmRvbmUpIHx8IChmaWx0ZXIgPT09IGZhbHNlICYmICF0YXNrLmRvbmUpIHx8ICh0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnRhZ05hbWVzICYmIHRhc2sudGFnTmFtZXMuaW5kZXhPZihmaWx0ZXIpID49IDApKS5sZW5ndGggPT09IGZpbHRlcnMubGVuZ3RoO1xuXHRcdH0pLFxuXHRcdHRhZ3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncykubWFwKHRhc2sgPT4gdGFzay50YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0udHJpbSgpKS5qb2luKCcsJykpLmpvaW4oJywnKS5zcGxpdCgnLCcpLFxuXHRcdGZpbHRlcnNcblx0fTtcblx0bGV0IHByb2plY3RzID0ge307XG5cdGxldCBjb250ZXh0cyA9IHt9O1xuXHRsZXQgdGFncyA9IHt9O1xuXG5cdHRhc2tzLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0dGFzay5pZCA9IGlkLnRvU3RyaW5nKCk7XG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB0YWdzW3RhZ10gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdHRhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdHNbcHJvamVjdF0gKz0gMSk7XG5cdFx0dGFzay5jb250ZXh0cyAmJiB0YXNrLmNvbnRleHRzLmZvckVhY2goY29udGV4dCA9PiBjb250ZXh0c1tjb250ZXh0XSArPSAxKTtcblx0fSk7XG5cdHJlc3VsdC5maWx0ZXJlZFRhc2tzID0gcmVzdWx0LmZpbHRlcmVkVGFza3Muc29ydCgodGFza0EsIHRhc2tCKSA9PiB7XG5cdFx0bGV0IGR1ZVRhZ0EgPSB0YXNrQS50YWdzICYmIHRhc2tBLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRsZXQgZHVlVGFnQiA9IHRhc2tCLnRhZ3MgJiYgdGFza0IudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpO1xuXHRcdGxldCB0aGlzRXZlbmluZyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9UXFxkezJ9OlxcZHsyfS9nLCAnVDIzOjU5JykpLmdldFRpbWUoKTtcblx0XHRpZiAoZHVlVGFnQSkge1xuXHRcdFx0ZHVlVGFnQSA9IGR1ZVRhZ0Euc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdBID0gbmV3IERhdGUoZHVlVGFnQSkuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdBID0gdGhpc0V2ZW5pbmc7XG5cdFx0fVxuXHRcdGlmIChkdWVUYWdCKSB7XG5cdFx0XHRkdWVUYWdCID0gZHVlVGFnQi5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0IgPSBuZXcgRGF0ZShkdWVUYWdCKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0IgPSB0aGlzRXZlbmluZztcblx0XHR9XG5cdFx0cmV0dXJuIGR1ZVRhZ0EgLSBkdWVUYWdCO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSB7XG5cdGlmICghZG9uZU9ubHkgJiYgdGFzay5kb25lIHx8IGRvbmVPbmx5ICYmICF0YXNrLmRvbmUpIHJldHVybiAnJztcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCAnICsgdGFzay5kb25lLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA6ICcnLFxuXHRcdHRhc2sucHJpb3JpdHkgfHwgJycsXG5cdFx0dGFzay50ZXh0LnRyaW0oKSxcblx0XHR0YXNrLmxpbmtzICYmIHRhc2subGlua3MubWFwKGxpbmsgPT4gbGluay51cmwpLmpvaW4oJyAnKSxcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuam9pbignICcpLFxuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5qb2luKCcgJyksXG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5qb2luKCcgJylcblx0XS5qb2luKCcgJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodGFza3MsIGRvbmVPbmx5KSB7XG5cdHJldHVybiB0YXNrcy5tYXAodGFzayA9PiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSkuam9pbignXFxuJykucmVwbGFjZSgvXFxuKy9nLCAnXFxuJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFzayh0YXNrLCBpZCkge1xuXHRsZXQgcHJvamVjdHMgPSB0YXNrLm1hdGNoKC9cXHMoXFwrXFx3KykvZyk7XG5cdGxldCBwcmlvcml0eSA9IHRhc2subWF0Y2goL1xccz8oXFwoW0EtWl1cXCkpXFxzKy9nKTtcblx0bGV0IGNvbnRleHRzID0gdGFzay5tYXRjaCgvXFxzKEBcXHcrKS9nKTtcblx0bGV0IHRhZ3MgPSB0YXNrLm1hdGNoKC9cXHMoXFx3KzpbXFx3LDotXSspL2cpO1xuXHRsZXQgdGV4dCA9IHRhc2sucmVwbGFjZSgvKD86XFxzKig/OlxcKFtBLVpdXFwpKVxccyspfCg/Olxcc1xcK1xcdyspfCg/Olxcc0BcXHcrKXwoPzpcXGIoPzpcXHcrOltcXHcsOi1dKykpL2csICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuXHRsZXQgbGlua3MgPSB0ZXh0Lm1hdGNoKC9cXGJodHRwcz86XFwvXFwvW14gXSsvZyk7XG5cdHByb2plY3RzID0gcHJvamVjdHMgJiYgcHJvamVjdHMubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRjb250ZXh0cyA9IGNvbnRleHRzICYmIGNvbnRleHRzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0dGFncyA9IHRhZ3MgJiYgdGFncy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdGxpbmtzID0gbGlua3MgJiYgbGlua3MubWFwKGxpbmsgPT4ge1xuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UobGluaywgJycpLnRyaW0oKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXJsOiBsaW5rLFxuXHRcdFx0bmFtZTogbGluay5tYXRjaCgvaHR0cHM/OlxcL1xcLyhbXi9dKykvKVsxXVxuXHRcdH07XG5cdH0pIHx8IFtdO1xuXHRsZXQgdGFza09iamVjdCA9IHtcblx0XHRpZCxcblx0XHR0ZXh0LFxuXHRcdHByaW9yaXR5OiBwcmlvcml0eSAmJiBwcmlvcml0eS50b1N0cmluZygpLnRyaW0oKSB8fCAnJyxcblx0XHRwcm9qZWN0cyxcblx0XHRjb250ZXh0cyxcblx0XHR0YWdzLFxuXHRcdHRhZ05hbWVzOiB0YWdzICYmIHRhZ3MubWFwKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSkgfHwgW10sXG5cdFx0bGlua3MsXG5cdFx0dG9TdHJpbmc6ICgpID0+IHN0cmluZ2lmeVRhc2sodGFza09iamVjdClcblx0fTtcblxuXHRyZXR1cm4gdGFza09iamVjdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEb25lVGFzayh0YXNrLCBpZCkge1xuXHRsZXQgZG9uZVJlZ0V4ID0gL154XFxzKyhcXGQrLVxcZCstXFxkKylcXHMrLztcblx0bGV0IGRvbmVEYXRlID0gdGFzay5tYXRjaChkb25lUmVnRXgpO1xuXHRsZXQgdGFza09iamVjdCA9IHBhcnNlVGFzayh0YXNrLnJlcGxhY2UoZG9uZURhdGUgJiYgZG9uZURhdGVbMF0gfHwgJ19fQ0FOTk9UX0JFX0ZPVU5EX0RFQURCRUVGX18nLCAnJyksIGlkKTtcblx0dGFza09iamVjdC5kb25lID0gZG9uZURhdGUgJiYgbmV3IERhdGUoZG9uZURhdGVbMV0pIHx8IGZhbHNlO1xuXHRyZXR1cm4gdGFza09iamVjdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCkge1xuXHRsZXQgdGFza3MgPSBbXTtcblx0aWYgKCF0YXNrTGlzdCkgcmV0dXJuIHRhc2tzO1xuXHR0YXNrTGlzdC5zcGxpdCgnXFxuJykuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHRpZiAodGFzaykge1xuXHRcdFx0dGFza3MucHVzaChwYXJzZVRhc2sodGFzaywgaWQudG9TdHJpbmcoKSkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHRhc2tzO1xufVxuXG5mdW5jdGlvbiBwYXJzZURvbmVUYXNrTGlzdCh0YXNrTGlzdCkge1xuXHRsZXQgdGFza3MgPSBbXTtcblx0aWYgKCF0YXNrTGlzdCkgcmV0dXJuIHRhc2tzO1xuXHR0YXNrTGlzdC5zcGxpdCgnXFxuJykuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHRpZiAodGFzaykge1xuXHRcdFx0dGFza3MucHVzaChwYXJzZURvbmVUYXNrKHRhc2ssIGlkLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoY3JlZGVudGlhbHMpIHtcblx0XHRzdXBlcigndGFzaycpO1xuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR0aGlzLmFjdGlvbnMoe1xuXHRcdFx0YWRkKGN1cnJlbnRTdGF0ZSwgdGFzaywgbmV4dCkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGUudG9KUygpO1xuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrID0gcGFyc2VUYXNrKHRhc2spO1xuXHRcdFx0XHR0YXNrLmlkID0gbmV3U3RhdGUudGFza3MubGVuZ3RoLnRvU3RyaW5nKCk7XG5cdFx0XHRcdHRhc2subW9kaWZpZWQgPSArbmV3IERhdGU7XG5cdFx0XHRcdG5ld1N0YXRlLnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZmlsdGVyKGN1cnJlbnRTdGF0ZSwgZmlsdGVyLCBuZXh0KSB7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS50b0pTKCk7XG5cdFx0XHRcdGlmICghbmV3U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbmV3U3RhdGUuZmlsdGVycykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLmZpbHRlcnMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcG9zaXRpb24gPSBuZXdTdGF0ZS5maWx0ZXJzLmluZGV4T2YoZmlsdGVyKTtcblx0XHRcdFx0aWYgKHBvc2l0aW9uID49IDApIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5maWx0ZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuZmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KG5ld1N0YXRlLnRhc2tzLCBuZXdTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChuZXdTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkbyhjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGUudG9KUygpO1xuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IG5ld1N0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2suZG9uZSA9IHRhc2suZG9uZSA/IGZhbHNlIDogbmV3IERhdGUoKTtcblx0XHRcdFx0XHR0YXNrLm1vZGlmaWVkID0gK25ldyBEYXRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKGN1cnJlbnRTdGF0ZSwgdGFza0RhdGEsIG5leHQpIHtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLnRvSlMoKTtcblx0XHRcdFx0aWYgKCFuZXdTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBuZXdTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0RhdGEuaWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2sgPSBPYmplY3QuYXNzaWduKHtpZDogdGFzay5pZH0sIHBhcnNlVGFzayh0YXNrRGF0YS50ZXh0KSk7XG5cdFx0XHRcdFx0dGFzay5tb2RpZmllZCA9ICtuZXcgRGF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QobmV3U3RhdGUudGFza3MsIG5ld1N0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KG5ld1N0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKG5ld1N0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZShjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcy5zcGxpY2UoY3VycmVudFN0YXRlLnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QoY3VycmVudFN0YXRlLnRhc2tzLCBjdXJyZW50U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHRcdHRoaXMubG9hZFRhc2tzKCk7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRpZiAod2luZG93LnRhc2tTdG9yZUludGVydmFsKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwod2luZG93LnRhc2tTdG9yZUludGVydmFsKTtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubG9hZFRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0XHR9XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHRpZiAoIXRoaXMuZGF0YS50YXNrcyB8fCB0aGlzLmRhdGEudGFza3MubGVuZ3RoIDw9IDApIHtcblx0XHRcdHRoaXMubG9hZFRhc2tzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q3JlZGVudGlhbHModHlwZSkge1xuXHRcdHZhciB0YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNyZWRlbnRpYWxzKTtcblx0XHRpZiAodHlwZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHR0YXJnZXQudXJsID0gdGFyZ2V0LnVybC5yZXBsYWNlKC9cXC90b2RvXFwudHh0JC8sICcvZG9uZS50eHQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGxvYWRUYXNrcygpIHtcblx0XHRsZXQgdGFza0xpc3QgPSAnJztcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmRhdGEudGFza3MgJiYgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIHRoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIoJ25ldHdvcmstc3RhcnQnKTtcblx0XHRmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1sb2FkJyksIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRDcmVkZW50aWFscygpKVxuXHRcdH0pLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSkudGhlbihvcGVuRGF0YSA9PiB7XG5cdFx0XHRyZXR1cm4gZmV0Y2gocm91dGVyLmdldFVybCgndGFza3MtbG9hZCcpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldENyZWRlbnRpYWxzKCdkb25lJykpXG5cdFx0XHR9KS50aGVuKGRvbmVSZXNwb25zZSA9PiBkb25lUmVzcG9uc2UuanNvbigpKS50aGVuKGRvbmVEYXRhID0+IG9wZW5EYXRhLnRhc2tzICsgJ1xcbicgKyBkb25lRGF0YS50YXNrcyk7XG5cdFx0fSkudGhlbihkYXRhID0+IHtcblx0XHRcdHRhc2tMaXN0ID0gZGF0YSB8fCAnJztcblx0XHRcdGxldCBjdXJyZW50VGFza3MgPSB0aGlzLmRhdGEudGFza3M7XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZURvbmVUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRsZXQgaXNNZXJnZWQgPSBmYWxzZTtcblx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuXHRcdFx0XHRsZXQgbWF0Y2hpbmdUYXNrID0gY3VycmVudFRhc2tzLmZpbmQoY3VycmVudFRhc2sgPT4gY3VycmVudFRhc2suaWQgPT09IHRhc2suaWQpO1xuXHRcdFx0XHRpZiAodGFzay5tb2RpZmllZCA8IG1hdGNoaW5nVGFzay5tb2RpZmllZCkge1xuXHRcdFx0XHRcdHRhc2tzW2lkeF0gPSBtYXRjaGluZ1Rhc2s7XG5cdFx0XHRcdFx0aXNNZXJnZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIHRoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCduZXR3b3JrLWVuZCcpO1xuXHRcdFx0aWYgKGlzTWVyZ2VkKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZVRhc2tzKHRoaXMuZGF0YSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzYXZlVGFza3Moc3RhdGUpIHtcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGZpbGVDb250ZW50ID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzKTtcblx0XHRsZXQgb2JqID0ge2NyZWRlbnRpYWxzOiB0aGlzLmdldENyZWRlbnRpYWxzKCksIGRhdGE6IGZpbGVDb250ZW50fTtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgZmlsZUNvbnRlbnQpO1xuXG5cdFx0aWYgKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpO1xuXHRcdH1cblx0XHRjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZXIpO1xuXHRcdHRoaXMuZGVib3VuY2VyID0gc2V0VGltZW91dCgoKCkgPT4ge1xuXHRcdFx0Ly8gc2F2ZSBvcGVuIHRhc2tzXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ25ldHdvcmstc3RhcnQnKTtcblx0XHRcdGxldCBvcGVuUHJvbWlzZSA9IGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLXNhdmUnKSwge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogYm9keVxuXHRcdFx0fSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKCgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpO1xuXHRcdFx0XHR3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmxvYWRUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHJlc3BvbnNlIGZyb20gc2VydmVyOiAnLCBlcnJvcikpO1xuXG5cdFx0XHQvLyBzYXZlIGRvbmUgdGFza3Ncblx0XHRcdG9iai5jcmVkZW50aWFscyA9IHRoaXMuZ2V0Q3JlZGVudGlhbHMoJ2RvbmUnKTtcblx0XHRcdG9iai5kYXRhID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzLCB0cnVlKTtcblx0XHRcdGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXHRcdFx0bGV0IGRvbmVQcm9taXNlID0gZmV0Y2gocm91dGVyLmdldFVybCgndGFza3Mtc2F2ZScpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBib2R5XG5cdFx0XHR9KTtcblx0XHRcdFByb21pc2UuYWxsKFtvcGVuUHJvbWlzZSwgZG9uZVByb21pc2VdKS50aGVuKCgpID0+IHRoaXMudHJpZ2dlcignbmV0d29yay1lbmQnKSk7XG5cdFx0fSkuYmluZCh0aGlzKSwgMjAwMCk7XG5cdH1cblxufSIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3VzZXInLCB7XG5cdFx0XHRzZXRVc2VyKGN1cnJlbnRTdGF0ZSwgZGF0YSkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50U3RhdGUudG9KUygpLCBkYXRhKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NyZWRlbnRpYWxzJywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdH1cblxuXHRsb2FkRGF0YSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxldCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFscycpIHx8ICd7fSc7XG5cdFx0XHRcdF90aGlzLnNldFN0YXRlKEpTT04ucGFyc2UoY3JlZGVudGlhbHMpKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLnNldFN0YXRlKHt9KTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTm90aWZpZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2RlbmllZCcpIHtcblx0XHRcdE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuXHRcdFx0XHRcdHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2hlY2tEdWVUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrRHVlVGFza3MoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCAvIDYwO1xuXHRcdGxldCBkdWVUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4ge1xuXHRcdFx0XHRsZXQgZGF0ZSA9IHRhZy5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdFx0aWYgKGRhdGUuaW5kZXhPZignVCcpIDwgMCkge1xuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlICsgJ1QwOTowMCcpO1xuXHRcdFx0XHRcdC8vIG5vIHRpbWUgY29tcG9uZW50LCBzbyBhbGVydCBhIGRheSBlYXJseSBhdCA5IEFNXG5cdFx0XHRcdFx0ZGF0ZSA9IGRhdGUuZ2V0VGltZSgpIC0gODY0MDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcblx0XHRcdFx0dGltZVN0YW1wID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAgLyAxMDAwIC8gNjApO1xuXHRcdFx0XHRpZiAodGltZVN0YW1wID49IG5vdyAtIDEgJiYgdGltZVN0YW1wIDw9IG5vdyArIDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pIHx8IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGR1ZVRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cdFx0XHRpZiAoIXRhc2subm90aWZpZWQpIHtcblx0XHRcdFx0dGFzay5ub3RpZmllZCA9IHRydWU7XG5cdFx0XHRcdG5ldyBOb3RpZmljYXRpb24odGFzay50ZXh0LCB7XG5cdFx0XHRcdFx0Ym9keTogdGFzay50b1N0cmluZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0fVxuXG5cdHNldFRhc2tzKHRhc2tzKSB7XG5cdFx0dGhpcy50YXNrcyA9IHRhc2tzO1xuXHRcdGlmICh0aGlzLnRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tYXBwLmNzcyc7XG5pbXBvcnQgVGFza1N0b3JlIGZyb20gJy4uL3N0b3Jlcy90YXNrLXN0b3JlJztcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3VzZXItc3RvcmUnO1xuaW1wb3J0IFRhc2tOb3RpZmllciBmcm9tICcuLi9saWIvdGFzay1ub3RpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9BcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdC8vIGRlZmluZSBpbml0aWFsIHByb3BzXG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRuYXZWaXNpYmxlOiBmYWxzZSxcblx0XHRcdGFjdGl2ZU5ldHdvcms6IGZhbHNlLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHR0YXNrczogW10sXG5cdFx0XHRmaWx0ZXJlZFRhc2tzOiBbXSxcblx0XHRcdHByb2plY3RzOiBbXSxcblx0XHRcdGR1ZVRhc2tzOiBbXSxcblx0XHRcdGNvbnRleHRzOiBbXSxcblx0XHRcdHRhZ3M6IFtdLFxuXHRcdFx0Y3JlZGVudGlhbHM6IHt9XG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvLWFwcFwiPlxuXHRcdFx0XHQ8dG9kby1oZWFkZXIgZGF0YS1jcmVkZW50aWFscz17ZGF0YS5wcm9wcy5jcmVkZW50aWFsc30gZGF0YS1uZXR3b3JrPXtkYXRhLnByb3BzLmFjdGl2ZU5ldHdvcmsgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9Lz5cblx0XHRcdFx0PHRvZG8tbmF2IGNsYXNzPXtkYXRhLnByb3BzLm5hdlZpc2libGUgPyAnYWN0aXZlJyA6ICcnfSBkYXRhLXByb2plY3RzPXtkYXRhLnByb3BzLnByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmNvbnRleHRzfSBkYXRhLXRhZ3M9e2RhdGEucHJvcHMudGFnc30gZGF0YS1maWx0ZXJzPXtkYXRhLnByb3BzLmZpbHRlcnN9Lz5cblx0XHRcdFx0PHRvZG8tbGlzdCBkYXRhLXN0b3JlPXt0aGlzLnRhc2tTdG9yZX0gZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5wcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5jb250ZXh0c30gZGF0YS10YXNrcz17ZGF0YS5wcm9wcy5maWx0ZXJlZFRhc2tzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3RvZG8tbmF2Jzoge2ZpbHRlcihldmVudCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbmF2VmlzaWJsZScsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudGFza1N0b3JlLmZpbHRlcihldmVudC5kZXRhaWwpO1xuXHRcdFx0fSwgY2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQndG9kby1oZWFkZXInOiB7bG9naW4oZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudXNlclN0b3JlLnNldFVzZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH0sIGxvZ29hY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgdHJ1ZSk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8taGVhZGVyLmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdi5qcycpO1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8tbGlzdC5qcycpO1xuXG5cdFx0dGhpcy50YXNrU3RvcmUgPSBuZXcgVGFza1N0b3JlKCk7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSBuZXcgVXNlclN0b3JlKCk7XG5cdFx0dGhpcy5ub3RpZmllciA9IG5ldyBUYXNrTm90aWZpZXIoKTtcblxuXHRcdHRoaXMudGFza1N0b3JlLm9uKCduZXR3b3JrLXN0YXJ0JywgdGhpcy5uZXR3b3JrU3RhcnQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnYWN0aXZlTmV0d29yaycsIHRydWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMudGFza1N0b3JlLm9uKCduZXR3b3JrLWVuZCcsIHRoaXMubmV0d29ya0VuZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdhY3RpdmVOZXR3b3JrJywgZmFsc2UpO1xuXHRcdH0pO1xuXHRcdHRoaXMudGFza1N0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdHRoaXMubm90aWZpZXIuc2V0VGFza3MoZGF0YS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpKTtcblx0XHRcdHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YSk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpLCAxNTApO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YXNrU3RvcmUuc2V0Q3JlZGVudGlhbHMoZGF0YSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjcmVkZW50aWFscycsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLnVzZXJTdG9yZS5kYXRhKSB7XG5cdFx0XHR0aGlzLnVzZXJzQ2hhbmdlZCh0aGlzLnVzZXJTdG9yZS5kYXRhKTtcblx0XHR9XG5cdH1cblxuXHRvbnVubW91bnQoKSB7XG5cdFx0dGhpcy50YXNrU3RvcmUub2ZmKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQpO1xuXHRcdHRoaXMudXNlclN0b3JlLm9mZignY2hhbmdlZCcsIHRoaXMudXNlcnNDaGFuZ2VkKTtcblx0XHR0aGlzLnRhc2tTdG9yZS5vZmYoJ25ldHdvcmstc3RhcnQnLCB0aGlzLm5ldHdvcmtTdGFydCk7XG5cdFx0dGhpcy50YXNrU3RvcmUub2ZmKCduZXR3b3JrLWVuZCcsIHRoaXMubmV0d29ya0VuZCk7XG5cdH1cbn0iXSwibmFtZXMiOlsiZ2xvYmFsIiwiTm93UHJvbWlzZSIsImNvbnN0IiwibGV0Iiwic3VwZXIiLCJmaWx0ZXIiLCJ0aGlzIiwiU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU9BLGNBQU0sQ0FBQ0EsY0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLFNBQVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDOzs7QUNBcHRHLElBQUksYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLEtBQUssQ0FBQztDQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQzlDLENBQUM7QUFDRixJQUFJLFNBQVMsR0FBRyxVQUFVLEVBQUUsQ0FBQzs7QUFFN0IsU0FBUyxVQUFVLENBQUMsRUFBRSxFQUFFO0NBQ3ZCLElBQUksWUFBWSxFQUFFLFdBQVcsQ0FBQzs7Q0FFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDckMsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQztFQUNwRCxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtHQUM1QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDO0dBQ3ZELElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUM7R0FDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDN0IsTUFBTTtJQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkI7R0FDRCxDQUFDLENBQUM7RUFDSCxDQUFDO0NBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLE1BQU0sRUFBRTtFQUM3QixJQUFJLFdBQVcsRUFBRTtHQUNoQixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRSxNQUFNLEdBQUcsYUFBYSxDQUFDO0dBQ3pELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUNwQjtFQUNELENBQUM7O0NBRUYsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0VBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7RUFDcEI7Q0FDRCxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUU7RUFDdkIsV0FBVyxHQUFHLElBQUksSUFBSSxPQUFPLENBQUM7RUFDOUI7Q0FDRCxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVELFVBQVUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEVBQUU7Q0FDcEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxDQUFDO0NBQ0gsQ0FBQzs7QUFFRixVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxFQUFFO0NBQ25DLE9BQU8sSUFBSSxVQUFVLENBQUMsU0FBUyxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNkLENBQUMsQ0FBQztDQUNILENBQUM7O0FBRUYsVUFBVSxDQUFDLEdBQUcsR0FBRyxTQUFTLE1BQU0sRUFBRTtDQUNqQyxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtFQUMvQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7RUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRTtHQUM5QixJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7SUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRTtLQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO01BQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNoQjtLQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsTUFBTTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkI7R0FDRCxDQUFDLENBQUM7RUFDSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtHQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDaEI7RUFDRCxDQUFDLENBQUM7Q0FDSCxDQUFDOztBQUVGLGNBQWMsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUN2RSxnQkFBeUIsR0FBRyxVQUFVOzs7O0FDckV0QyxTQUFTLFNBQVMsR0FBRztDQUNwQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztDQUNyQzs7QUFFRCxTQUFTLE1BQU0sR0FBRztDQUNqQixPQUFPLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Q0FDMUQ7O0FBRUQsU0FBYyxHQUFHLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRTtDQUN2QyxJQUFJLGNBQWMsR0FBRztFQUNwQixNQUFNLEVBQUUsS0FBSztFQUNiLElBQUksRUFBRSxJQUFJO0VBQ1YsQ0FBQztDQUNGLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0NBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFO0VBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7RUFDdEQ7Q0FDRCxJQUFJLFNBQVMsRUFBRSxFQUFFOztFQUVoQixJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7R0FDeEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0dBQ2hDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQztHQUMzQjtFQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDbEMsTUFBTSxJQUFJLE1BQU0sRUFBRSxFQUFFOztFQUVwQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDM0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzdCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtHQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDakUsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDcEgsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN2RCxNQUFNO0dBQ04sT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7R0FDL0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDcEIsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7R0FDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7R0FDM0I7RUFDRCxPQUFPLElBQUlDLFVBQVUsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7R0FDdkNDLElBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFO0lBQ2pGQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLEtBQUssRUFBQyxTQUFHLElBQUksSUFBSSxLQUFLLEdBQUEsQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQUc7S0FDaEIsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtNQUNsREEsSUFBSSxRQUFRLEdBQUc7T0FDZCxJQUFJLEVBQUUsWUFBRyxTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUE7T0FDNUIsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLEdBQUE7T0FDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO09BQ3RCLENBQUM7TUFDRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7TUFDbEIsTUFBTTtNQUNOLE1BQU0sQ0FBQztPQUNOLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVTtPQUN0QixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWE7T0FDaEMsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLEdBQUE7T0FDaEIsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFBO09BQzVCLENBQUMsQ0FBQztNQUNIO0tBQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0dBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCO0dBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0dBQ1YsQ0FBQyxDQUFDO0VBQ0g7Q0FDRDs7Ozs7Ozs7QUNyRURBLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQztBQUMxQkEsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDOztBQUV4QixTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Q0FDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0NBQ3ZEQSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUNqRCxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Q0FDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDeEQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0VBQ2hCLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM5RDs7Q0FFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQzNEOztBQUVELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO0NBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxLQUFLLEVBQUU7RUFDbkQsS0FBSyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3JDLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDVixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0NBQy9COztBQUVELGFBQWU7Q0FDZCxTQUFTLG9CQUFBLENBQUMsU0FBUyxFQUFFO0VBQ3BCLE1BQU0sR0FBRyxTQUFTLENBQUM7RUFDbkI7O0NBRUQsS0FBSyxnQkFBQSxDQUFDLElBQUksRUFBRTs7RUFFWCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFBLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUE7OztFQUd0QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxFQUFDO0dBQ3BDQSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0dBQ2pCQSxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRTtJQUNqRixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sT0FBTyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDN0IsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDMURBLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBLE9BQU8sS0FBSyxDQUFDLEVBQUE7R0FDMUJBLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztHQUNkLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7R0FDSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNoRCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxFQUFDLFNBQUcsTUFBTSxHQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDeEM7O0NBRUQsVUFBVSxxQkFBQSxHQUFHO0VBQ1osT0FBTyxZQUFZLENBQUM7RUFDcEI7O0NBRUQsTUFBTSxpQkFBQSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDbEJBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxFQUFDLFNBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hGQSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7O0VBRWhCLElBQUksS0FBSyxFQUFFO0dBQ1YsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFBLENBQUMsQ0FBQztHQUMzRTs7RUFFRCxPQUFPLEdBQUcsQ0FBQztFQUNYOztDQUVELElBQUksZUFBQSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDaEJBLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDZjs7Q0FFRCxJQUFJLGVBQUEsQ0FBQyxHQUFHLEVBQUU7RUFDVEEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM1QixZQUFZLEdBQUcsS0FBSyxDQUFDO0VBQ3JCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0dBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztHQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDaEIsTUFBTTs7O0dBR047RUFDRDtDQUNEOztBQzdFRCxTQUFTLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7Q0FDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFBLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7Q0FDaENBLElBQUksTUFBTSxHQUFHO0VBQ1osT0FBQSxLQUFLO0VBQ0wsUUFBUSxFQUFFLEVBQUU7RUFDWixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLEdBQUEsQ0FBQztFQUMvRixRQUFRLEVBQUUsRUFBRTtFQUNaLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFDO0dBQ2hDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sRUFBQyxTQUFHLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLE1BQU0sS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0dBQ3pTLENBQUM7RUFDRixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUNoSSxTQUFBLE9BQU87RUFDUCxDQUFDO0NBQ0ZBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztDQUNsQkEsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0NBQ2xCQSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O0NBRWQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7RUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7RUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBQyxTQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0VBQ3RELENBQUMsQ0FBQztDQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFDO0VBQ2pDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUMsU0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztFQUMxRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFDLFNBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7RUFDMUUsQ0FBQyxDQUFDO0NBQ0gsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDL0RBLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLENBQUM7RUFDaEZBLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLENBQUM7RUFDaEZBLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0VBQ2xHLElBQUksT0FBTyxFQUFFO0dBQ1osT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNoRCxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDdEMsTUFBTTtHQUNOLE9BQU8sR0FBRyxXQUFXLENBQUM7R0FDdEI7RUFDRCxJQUFJLE9BQU8sRUFBRTtHQUNaLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDaEQsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ3RDLE1BQU07R0FDTixPQUFPLEdBQUcsV0FBVyxDQUFDO0dBQ3RCO0VBQ0QsT0FBTyxPQUFPLEdBQUcsT0FBTyxDQUFDO0VBQ3pCLENBQUMsQ0FBQzs7Q0FFSCxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDeEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztDQUV4QyxPQUFPLE1BQU0sQ0FBQztDQUNkOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7Q0FDdEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFBO0NBQ2hFLE9BQU87RUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO0VBQzdELElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtFQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtFQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4RCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4QyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNoQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNuQjs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ25DLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3pGOztBQUVELFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDNUJBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDeENBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztDQUNoREEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUN2Q0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBQzNDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdFQUF3RSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDbElBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztDQUM5QyxRQUFRLEdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLEVBQUMsU0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0NBQy9ELFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sRUFBQyxTQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7Q0FDL0QsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxFQUFDLFNBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQztDQUNuRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUM7RUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ3JDLE9BQU87R0FDTixHQUFHLEVBQUUsSUFBSTtHQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3pDLENBQUM7RUFDRixDQUFDLElBQUksRUFBRSxDQUFDO0NBQ1RBLElBQUksVUFBVSxHQUFHO0VBQ2hCLElBQUEsRUFBRTtFQUNGLE1BQUEsSUFBSTtFQUNKLFFBQVEsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDdEQsVUFBQSxRQUFRO0VBQ1IsVUFBQSxRQUFRO0VBQ1IsTUFBQSxJQUFJO0VBQ0osUUFBUSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLElBQUksRUFBRTtFQUMxRCxPQUFBLEtBQUs7RUFDTCxRQUFRLEVBQUUsWUFBRyxTQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBQTtFQUN6QyxDQUFDOztDQUVGLE9BQU8sVUFBVSxDQUFDO0NBQ2xCOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDaENBLElBQUksU0FBUyxHQUFHLHVCQUF1QixDQUFDO0NBQ3hDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQ3JDQSxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzVHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztDQUM3RCxPQUFPLFVBQVUsQ0FBQztDQUNsQjs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Q0FDaENBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0NBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN2QyxJQUFJLElBQUksRUFBRTtHQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQzNDO0VBQ0QsQ0FBQyxDQUFDOztDQUVILE9BQU8sS0FBSyxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7Q0FDcENBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0NBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN2QyxJQUFJLElBQUksRUFBRTtHQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQy9DO0VBQ0QsQ0FBQyxDQUFDO0NBQ0gsT0FBTyxLQUFLLENBQUM7Q0FDYjs7QUFFRCxJQUFxQixTQUFTO0NBQWUsa0JBQ2pDLENBQUMsV0FBVyxFQUFFO0VBQ3hCQyxRQUFLLEtBQUEsQ0FBQyxNQUFBLE1BQU0sQ0FBQyxDQUFDOztFQUVkRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztHQUNaLEdBQUcsY0FBQSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzdCQSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7S0FDcEIsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDcEI7SUFDRCxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCOztHQUVELE1BQU0saUJBQUEsQ0FBQyxZQUFZLEVBQUVFLFFBQU0sRUFBRSxJQUFJLEVBQUU7SUFDbENGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtLQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO0tBQ3RCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQ3RCO0lBQ0RBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDRSxRQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7S0FDbEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLE1BQU07S0FDTixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQ0EsUUFBTSxDQUFDLENBQUM7S0FDOUI7SUFDRCxRQUFRLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2Y7O0dBRUQsRUFBRSxlQUFBLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDOUJGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtLQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNEQSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxHQUFBLENBQUMsQ0FBQztJQUMzRCxJQUFJLElBQUksRUFBRTtLQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztLQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDMUI7SUFDRCxRQUFRLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQjs7R0FFRCxNQUFNLGlCQUFBLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDcENBLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtLQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNEQSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7SUFDaEUsSUFBSSxJQUFJLEVBQUU7S0FDVCxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztLQUMxQjtJQUNELFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCOztHQUVELE1BQU0sbUJBQUEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtJQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtLQUN4QixZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUN4QjtJQUNEQSxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxHQUFBLENBQUMsQ0FBQztJQUMvRCxJQUFJLElBQUksRUFBRTtLQUNULFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsWUFBWSxHQUFHLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCO0dBQ0QsQ0FBQyxDQUFDO0VBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7RUFDL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0VBQ2pCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0dBQ2xDLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO0lBQzdCLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QztHQUNELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDekU7RUFDRDs7Ozs2Q0FBQTs7Q0FFRCxvQkFBQSxjQUFjLDRCQUFDLFdBQVcsRUFBRTtFQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztFQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtHQUNwRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7R0FDakI7RUFDRCxDQUFBOztDQUVELG9CQUFBLGNBQWMsNEJBQUMsSUFBSSxFQUFFO0VBQ3BCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUNqRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7R0FDcEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7R0FDN0Q7RUFDRCxPQUFPLE1BQU0sQ0FBQztFQUNkLENBQUE7O0NBRUQsb0JBQUEsU0FBUyx5QkFBRzs7O0VBQ1hBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztFQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtHQUN0QixPQUFPO0dBQ1A7RUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFO0dBQzVELFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3pDQSxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7R0FDcENBLElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7R0FDeEI7RUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0VBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO0dBQ2xDLE1BQU0sRUFBRSxNQUFNO0dBQ2QsT0FBTyxFQUFFO0lBQ1IsY0FBYyxFQUFFLGlDQUFpQztJQUNqRDtHQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztHQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUM7R0FDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUN6QyxNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRTtLQUNSLGNBQWMsRUFBRSxpQ0FBaUM7S0FDakQ7SUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQ0csTUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsWUFBWSxFQUFDLFNBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUMsU0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FBQztHQUN0RyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFDO0dBQ1osUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7R0FDdEJILElBQUksWUFBWSxHQUFHRyxNQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztHQUNuQ0gsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7R0FDeENBLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztHQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN6QkEsSUFBSSxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsRUFBQyxTQUFHLFdBQVcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7SUFDaEYsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUU7S0FDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQztLQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0hBLElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRUcsTUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUM3REEsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUN4QkEsTUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUM1QixJQUFJLFFBQVEsRUFBRTtJQUNiQSxNQUFJLENBQUMsU0FBUyxDQUFDQSxNQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUI7R0FDRCxDQUFDLENBQUM7RUFDSCxDQUFBOztDQUVELG9CQUFBLFNBQVMsdUJBQUMsS0FBSyxFQUFFOzs7RUFDaEIsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUUsRUFBQSxPQUFPLEVBQUE7RUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7R0FDdEIsT0FBTztHQUNQO0VBQ0RILElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDekNBLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDbEVBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDL0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7O0VBRTNDLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO0dBQzdCLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztHQUN4QztFQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxZQUFHOztHQUUvQkcsTUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztHQUM5QkgsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDcEQsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUU7S0FDUixjQUFjLEVBQUUsaUNBQWlDO0tBQ2pEO0lBQ0QsSUFBSSxFQUFFLElBQUk7SUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFDLFNBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFHO0lBQzdDLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDRyxNQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQ0EsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsRUFBRSxJQUFJLENBQUNBLE1BQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxFQUFDLFNBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7OztHQUd6RixHQUFHLENBQUMsV0FBVyxHQUFHQSxNQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDM0JILElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQ3BELE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFO0tBQ1IsY0FBYyxFQUFFLGlDQUFpQztLQUNqRDtJQUNELElBQUksRUFBRSxJQUFJO0lBQ1YsQ0FBQyxDQUFDO0dBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFHLFNBQUdHLE1BQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0dBQ2hGLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3JCLENBQUE7OztFQWxNcUNDOztBQ3BJdkMsSUFBcUIsU0FBUztDQUFlLGtCQUNqQyxHQUFHO0VBQ2JILEtBQUssS0FBQSxDQUFDLE1BQUEsTUFBTSxFQUFFO0dBQ2IsT0FBTyxrQkFBQSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUU7SUFDM0JELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTtLQUN4QyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDOUQ7SUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNoQjtHQUNELENBQUMsQ0FBQzs7RUFFSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7RUFDaEI7Ozs7NkNBQUE7O0NBRUQsb0JBQUEsUUFBUSx3QkFBRztFQUNWQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7R0FDeEMsVUFBVSxDQUFDLFlBQUc7SUFDYkEsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDOUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsRUFBRSxHQUFHLENBQUMsQ0FBQztHQUNSLE1BQU07R0FDTixLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0dBQ25CO0VBQ0QsQ0FBQTs7O0VBekJxQ0k7O0FDRnhCLElBQU0sWUFBWSxHQUFDLHFCQUN0QixHQUFHOzs7Q0FDZCxJQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNqQixJQUFLLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxjQUFjLElBQUksTUFBTSxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO0VBQ3ZHLFlBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFBLFVBQVUsRUFBQztHQUMxQyxJQUFLLFVBQVUsS0FBSyxTQUFTLEVBQUU7SUFDOUIsTUFBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDRCxNQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQ0EsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkU7R0FDRCxDQUFDLENBQUM7RUFDSDtDQUNELENBQUE7O0FBRUYsdUJBQUMsYUFBYSw2QkFBRztDQUNoQixZQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzVCLElBQUssR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztDQUM1QyxJQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQztFQUN0QyxPQUFRLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUM7R0FDdkMsSUFBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzlDLElBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDM0IsSUFBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQzs7SUFFbEMsSUFBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDakM7R0FDRixJQUFLLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUMxQyxTQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0dBQy9DLElBQUssU0FBUyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7SUFDbEQsT0FBUSxJQUFJLENBQUM7SUFDWixNQUFNO0lBQ1AsT0FBUSxLQUFLLENBQUM7SUFDYjtHQUNELENBQUMsSUFBSSxLQUFLLENBQUM7RUFDWixDQUFDLENBQUM7Q0FDSixRQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFDO0VBQ3RCLElBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0dBQ3BCLElBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0dBQ3RCLElBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDNUIsSUFBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0dBQ0g7RUFDRCxDQUFDLENBQUM7Q0FDSixJQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNoRSxDQUFBOztBQUVGLHVCQUFDLFFBQVEsc0JBQUMsS0FBSyxFQUFFO0NBQ2hCLElBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3BCLElBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7RUFDbkQsWUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUM1QixNQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ3hEO0NBQ0QsQ0FBQTs7QUM1Q0YsSUFBcUIsT0FBTyxHQUFDLGdCQUNqQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Q0FFeEIsS0FBTSxDQUFDLEtBQUssR0FBRztFQUNkLFVBQVcsRUFBRSxLQUFLO0VBQ2xCLGFBQWMsRUFBRSxLQUFLO0VBQ3JCLE9BQVEsRUFBRSxLQUFLO0VBQ2YsS0FBTSxFQUFFLEVBQUU7RUFDVixhQUFjLEVBQUUsRUFBRTtFQUNsQixRQUFTLEVBQUUsRUFBRTtFQUNiLFFBQVMsRUFBRSxFQUFFO0VBQ2IsUUFBUyxFQUFFLEVBQUU7RUFDYixJQUFLLEVBQUUsRUFBRTtFQUNULFdBQVksRUFBRSxFQUFFO0VBQ2YsQ0FBQztDQUNGOzttREFBQTs7QUFFRixrQkFBQyxNQUFNLG9CQUFDLElBQUksRUFBRTtDQUNiO0VBQ0MsaUJBQUUsU0FBSSxLQUFLLEVBQUMsVUFBVSxFQUFBO0lBQ3BCLGlCQUFDLGlCQUFZLGtCQUFnQixFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGNBQVksRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsVUFBVSxFQUFDLENBQUU7SUFDeEgsaUJBQUMsY0FBUyxLQUFLLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLEVBQUUsRUFBRSxlQUFhLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsZUFBYSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVMsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxjQUFZLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBRTtJQUMvTCxpQkFBQyxlQUFVLFlBQVUsRUFBQyxJQUFLLENBQUMsU0FBUyxFQUFFLGVBQWEsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxlQUFhLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBVSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQVksRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFFO0lBQ25MO0dBQ0w7Q0FDRixDQUFBOztBQUVGLG1CQUFDLE1BQVUsbUJBQUcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUE7QUFDaEMsbUJBQUMsTUFBVSxtQkFBRztDQUNiLE9BQVE7RUFDUCxVQUFXLEVBQUUsQ0FBQyxNQUFNLGlCQUFBLENBQUMsS0FBSyxFQUFFO0dBQzNCLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzlDLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUM5QyxFQUFFLEtBQUssZ0JBQUEsR0FBRztHQUNYLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzdDLENBQUM7RUFDSCxhQUFjLEVBQUUsQ0FBQyxLQUFLLGdCQUFBLENBQUMsS0FBSyxFQUFFO0dBQzdCLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUMvQyxFQUFFLFVBQVUscUJBQUEsR0FBRztHQUNoQixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM1QyxDQUFDO0VBQ0YsQ0FBQztDQUNGLENBQUE7O0FBRUYsa0JBQUMsT0FBTyxxQkFBQyxDQUFDLEVBQUU7OztDQUNYLENBQUUsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztDQUNuQyxDQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Q0FDaEMsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztDQUVsQyxJQUFLLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7Q0FDbEMsSUFBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0NBQ2xDLElBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Q0FFcEMsSUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBRztFQUMxRCxNQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMvQyxDQUFDLENBQUM7Q0FDSixJQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFHO0VBQ3RELE1BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2hELENBQUMsQ0FBQztDQUNKLElBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQUEsSUFBSSxFQUFDO0VBQ3RELE1BQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsRUFBQyxTQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFBLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztFQUNwSCxVQUFXLENBQUMsQ0FBQyxZQUFHO0dBQ2YsTUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QixFQUFFLElBQUksQ0FBQ0EsTUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxDQUFDO0NBQ0osSUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBQSxJQUFJLEVBQUM7RUFDdEQsSUFBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0dBQzFDLE1BQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3JDLE1BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzdDO0VBQ0QsQ0FBQyxDQUFDO0NBQ0osSUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtFQUN6QixJQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkM7Q0FDRCxDQUFBOztBQUVGLGtCQUFDLFNBQVMseUJBQUc7Q0FDWixJQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQ2xELElBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDbEQsSUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUN4RCxJQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ25ELENBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
