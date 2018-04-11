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
"use strict";var scope="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:{},eventRegistry=scope.__eventRegistry=scope.__eventRegistry||{};function trigger(e){var t=arguments;if(eventRegistry[e])for(var n,r=0,o=eventRegistry[e].length;n=eventRegistry[e][r],r<o;r+=1){if(!1===n.apply(this,Array.prototype.slice.call(t,1)))break}}function on(e,t){eventRegistry[e]||(eventRegistry[e]=[]),eventRegistry[e].push(t);}function off(e,t){if(eventRegistry[e])if("function"==typeof t){var n=eventRegistry[e].indexOf(t);n>=0&&eventRegistry[e].splice(n,1);}else eventRegistry[e]=[];}function one(e,t){var n=this,r=function(){off(e,r),t.apply(n,Array.prototype.slice.call(arguments));};on(e,r);}function resetEvents(){eventRegistry=scope.__eventRegistry={};}var events=Object.freeze({trigger:trigger,on:on,off:off,one:one,resetEvents:resetEvents}),scope$1="undefined"!=typeof window?window:{},data=scope$1.__glassbilStoreData=scope$1.__glassbilStoreData||{},trigger$1=trigger;function mirror(){return this}function deepFreeze(e){if(null===e||void 0===e||"function"==typeof e.toJS||"object"!=typeof e)return e;var t=Object.getOwnPropertyNames(e),n={toJS:{value:mirror.bind(e)}};Array.isArray(e)&&(e=e.slice(0).map(deepFreeze),["map","forEach","find","indexOf","filter","some","every","lastIndexOf","slice"].forEach(function(t){n[t]={value:function(){return deepFreeze(Array.prototype[t].apply(e,arguments))}};}));for(var r=function(e,r){n[t[e]]={enumerable:!0,get:function(){return deepFreeze(r)},set:function(n){throw new Error('Cannot change property "'+t[e]+'" to "'+n+'" of an immutable object')}};},o=0,i=void 0;i=e[t[o]],o<t.length;o+=1)r(o,i);return Object.freeze(Object.create(Object.getPrototypeOf(e),n))}function bind(e,t,n){return function(r){return e.call(t,r,n)}}var Store=function(e,t){var n=this;this.name=e||"Unnamed"+Object.keys(data).length,Object.keys(events).forEach(function(t){"resetEvents"!==t&&(n[t]=function(n,r){n.indexOf(":")>=0?events[t](n,r):events[t](e+"-store:"+n,r);});}),this.actions(t),e&&(data[e]=data[e]||{loaded:!1,currentData:deepFreeze([])});},prototypeAccessors={data:{configurable:!0}};Store.prototype.actions=function(e){var t=this;if(!e||"object"!=typeof e)return this.actionDefinitions&&Object.keys(this.actionDefinitions)||[];var n=Object.keys(e);this.actionDefinitions=Object.assign({},this.actionDefinitions||{},e);for(var r=function(e,r){(function(e){this[e]=function(t){var n=r.call(this,data[this.name].currentData,t,bind(this.setState,this,e));void 0!==n&&this.setState(n,e);}.bind(this);}).call(t,n[e]);},o=0,i=void 0;i=e[n[o]],o<n.length;o+=1)r(o,i);return Object.keys(this.actionDefinitions)},prototypeAccessors.data.get=function(){return data[this.name]&&data[this.name].loaded?data[this.name].currentData:null},Store.prototype.loaded=function(){var e=Object.keys(data).filter(function(e){return data[e].loaded}).length;if(e===Object.keys(data).length&&!data.__triggered){var t={};Object.keys(data).map(function(e){t[e]=data[e].currentData.toJS();}),data.__triggered=!0,trigger$1("global:data-loaded",t);}},Store.prototype.reset=function(){return Object.getPrototypeOf(this)===Store.prototype&&(data=scope$1.__glassbilStoreData={},resetEvents(),!0)},Store.prototype.setState=function(e,t){void 0===t&&(t="setState"),data[this.name].loaded=!0,(e=deepFreeze(e))!==data[this.name].currentData&&(data[this.name].currentData=e,trigger$1(this.name+"-store:changed",data[this.name].currentData,t)),this.loaded();},Object.defineProperties(Store.prototype,prototypeAccessors),module.exports=Store;
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
	var filteredProjects = [];
	var filteredContexts = [];
	var tags = {};

	tasks.forEach(function (task, id) {
		task.id = id.toString();
		task.tags && task.tags.forEach(function (tag) { return tags[tag] += 1; });
	});
	result.tasks.forEach(function (task) {
		task.projects && task.projects.forEach(function (project) { return projects[project] += 1; });
		task.contexts && task.contexts.forEach(function (context) { return contexts[context] += 1; });
	});
	result.filteredTasks.forEach(function (task) {
		task.projects && task.projects.forEach(function (project) { return filteredProjects[project] += 1; });
		task.contexts && task.contexts.forEach(function (context) { return filteredContexts[context] += 1; });
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
	result.filteredProjects = Object.keys(filteredProjects);
	result.filteredContexts = Object.keys(filteredContexts);

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
				} else if (newState.filters.toJS) {
					newState.filters = newState.filters.toJS();
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
				var newState = currentState.toJS();
				if (!newState.tasks) {
					newState.tasks = [];
				} else if (newState.tasks.toJS) {
					newState.tasks = newState.tasks.toJS();
				}
				var task = newState.tasks.find(function (task) { return task.id === taskId; });
				if (task) {
					newState.tasks.splice(newState.tasks.indexOf(task), 1);
				}
				newState = calculateDataObject(newState.tasks, newState.filters);
				next(newState);
				_this.saveTasks(newState);
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

	var prototypeAccessors = { tasks: {} };

	prototypeAccessors.tasks.get = function () {
		if (this.data && this.data.tasks && this.data.tasks.length > 0) {
			return this.data.tasks;
		}
		return null;
	};

	TaskStore.prototype.setCredentials = function setCredentials (credentials) {
		this.credentials = credentials;
		if (!this.tasks) {
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
		var _this = this;
		if (!this.credentials) {
			return;
		}
		if (!this.tasks && typeof localStorage !== 'undefined') {
			taskList = localStorage.getItem('todos');
			var tasks = parseTaskList(taskList);
			var newState = calculateDataObject(tasks, this.data && this.data.filters);
			this.setState(newState, '@@INIT');
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
			var currentTasks = this$1.tasks || [];
			var tasks = parseDoneTaskList(taskList);
			var isMerged = false;
			tasks.forEach(function (task, idx) {
				var matchingTask = currentTasks.find(function (currentTask) { return currentTask.id === task.id; });
				if (matchingTask && task.modified < matchingTask.modified) {
					tasks[idx] = matchingTask;
					isMerged = true;
				}
			});
			var newState = calculateDataObject(tasks, _this.data && _this.data.filters);
			_this.setState(newState, '@@LOAD');
			_this.trigger('network-end');
			if (isMerged) {
				_this.saveTasks(newState);
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

	Object.defineProperties( TaskStore.prototype, prototypeAccessors );

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

function glassbilDevTools(store) {
	var extension = window.devToolsExtension || window.top.devToolsExtension;
	var ignoreState = false;

	if (!extension) {
		console.warn('Please install/enable the Redux devtools extension.');
		store.devtools = null;

		return store;
	}

	if (store.devtools) return store;
	store.devtools = extension.connect({
		name: store.name,
		features: {
			skip: false
		}
	});
	store.devtools.subscribe(function (message) {
		if (message.type === 'DISPATCH' && message.state) {
			if (message.payload.type === 'TOGGLE_ACTION') {
				console.warn('Skipping not implemented yet.');
				return;
			}
			ignoreState = message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE';
			if (message.state === '{"length":0}') message.state = '[]';
			store.setState(JSON.parse(message.state));
		}
	});
	store.devtools.init(store.data);
	store.on('changed', function (data, actionName) {
		actionName = actionName || 'setState';
		if (!ignoreState) {
			store.devtools.send(actionName, data.toJS());
		} else {
			ignoreState = false;
		}
	});

	return store;
}

var TodoApp = function TodoApp() {
	var _this = this || {};
	// define initial props
	_this.props = {
		navVisible: false,
		activeNetwork: false,
		filters: false,
		tasks: [],
		filteredTasks: [],
		filteredContexts: [],
		filteredProjects: [],
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
				this.createNode( 'todo-nav', { class: data.props.navVisible ? 'active' : '', 'data-projects': data.props.filteredProjects, 'data-contexts': data.props.filteredContexts, 'data-tags': data.props.tags, 'data-filters': data.props.filters }),
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

	var _this = this;

	this.taskStore = z.isBrowser ? glassbilDevTools(new TaskStore()) : new TaskStore();
	this.userStore = z.isBrowser ? glassbilDevTools(new UserStore()) : new UserStore();
	this.notifier = new TaskNotifier();

	this.taskStore.on('network-start', this.networkStart = function () {
		_this.getHost().setProps('activeNetwork', true);
	});
	this.taskStore.on('network-end', this.networkEnd = function () {
		_this.getHost().setProps('activeNetwork', false);
	});
	this.taskStore.on('changed', this.tasksChanged = function (data) {
		this$1.notifier.setTasks(data.tasks.toJS().filter(function (task) { return task.tags && task.tags.find(function (tag) { return tag.split(':')[0] === 'due'; }); }));
		setTimeout((function () {
			this$1.getHost().setProps(data.toJS());
		}).bind(_this), 150);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL2xpYi90YXNrLW5vdGlmaWVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2dsYXNzYmlsL2RldnRvb2xzLmpzIiwiLi4vLi4vcGFnZXMvdG9kby1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNjb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGV2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5PXNjb3BlLl9fZXZlbnRSZWdpc3RyeXx8e307ZnVuY3Rpb24gdHJpZ2dlcihlKXt2YXIgdD1hcmd1bWVudHM7aWYoZXZlbnRSZWdpc3RyeVtlXSlmb3IodmFyIG4scj0wLG89ZXZlbnRSZWdpc3RyeVtlXS5sZW5ndGg7bj1ldmVudFJlZ2lzdHJ5W2VdW3JdLHI8bztyKz0xKXtpZighMT09PW4uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LDEpKSlicmVha319ZnVuY3Rpb24gb24oZSx0KXtldmVudFJlZ2lzdHJ5W2VdfHwoZXZlbnRSZWdpc3RyeVtlXT1bXSksZXZlbnRSZWdpc3RyeVtlXS5wdXNoKHQpfWZ1bmN0aW9uIG9mZihlLHQpe2lmKGV2ZW50UmVnaXN0cnlbZV0paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl7dmFyIG49ZXZlbnRSZWdpc3RyeVtlXS5pbmRleE9mKHQpO24+PTAmJmV2ZW50UmVnaXN0cnlbZV0uc3BsaWNlKG4sMSl9ZWxzZSBldmVudFJlZ2lzdHJ5W2VdPVtdfWZ1bmN0aW9uIG9uZShlLHQpe3ZhciBuPXRoaXMscj1mdW5jdGlvbigpe29mZihlLHIpLHQuYXBwbHkobixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07b24oZSxyKX1mdW5jdGlvbiByZXNldEV2ZW50cygpe2V2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5PXt9fXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZSxyZXNldEV2ZW50czpyZXNldEV2ZW50c30pLHNjb3BlJDE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhfHx7fSx0cmlnZ2VyJDE9dHJpZ2dlcjtmdW5jdGlvbiBtaXJyb3IoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBkZWVwRnJlZXplKGUpe2lmKG51bGw9PT1lfHx2b2lkIDA9PT1lfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRvSlN8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiBlO3ZhciB0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLG49e3RvSlM6e3ZhbHVlOm1pcnJvci5iaW5kKGUpfX07QXJyYXkuaXNBcnJheShlKSYmKGU9ZS5zbGljZSgwKS5tYXAoZGVlcEZyZWV6ZSksW1wibWFwXCIsXCJmb3JFYWNoXCIsXCJmaW5kXCIsXCJpbmRleE9mXCIsXCJmaWx0ZXJcIixcInNvbWVcIixcImV2ZXJ5XCIsXCJsYXN0SW5kZXhPZlwiLFwic2xpY2VcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXt2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkZWVwRnJlZXplKEFycmF5LnByb3RvdHlwZVt0XS5hcHBseShlLGFyZ3VtZW50cykpfX19KSk7Zm9yKHZhciByPWZ1bmN0aW9uKGUscil7blt0W2VdXT17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZGVlcEZyZWV6ZShyKX0sc2V0OmZ1bmN0aW9uKG4pe3Rocm93IG5ldyBFcnJvcignQ2Fubm90IGNoYW5nZSBwcm9wZXJ0eSBcIicrdFtlXSsnXCIgdG8gXCInK24rJ1wiIG9mIGFuIGltbXV0YWJsZSBvYmplY3QnKX19fSxvPTAsaT12b2lkIDA7aT1lW3Rbb11dLG88dC5sZW5ndGg7bys9MSlyKG8saSk7cmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksbikpfWZ1bmN0aW9uIGJpbmQoZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZS5jYWxsKHQscixuKX19dmFyIFN0b3JlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt0aGlzLm5hbWU9ZXx8XCJVbm5hbWVkXCIrT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoLE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbih0KXtcInJlc2V0RXZlbnRzXCIhPT10JiYoblt0XT1mdW5jdGlvbihuLHIpe24uaW5kZXhPZihcIjpcIik+PTA/ZXZlbnRzW3RdKG4scik6ZXZlbnRzW3RdKGUrXCItc3RvcmU6XCIrbixyKX0pfSksdGhpcy5hY3Rpb25zKHQpLGUmJihkYXRhW2VdPWRhdGFbZV18fHtsb2FkZWQ6ITEsY3VycmVudERhdGE6ZGVlcEZyZWV6ZShbXSl9KX0scHJvdG90eXBlQWNjZXNzb3JzPXtkYXRhOntjb25maWd1cmFibGU6ITB9fTtTdG9yZS5wcm90b3R5cGUuYWN0aW9ucz1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKCFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5hY3Rpb25EZWZpbml0aW9ucyYmT2JqZWN0LmtleXModGhpcy5hY3Rpb25EZWZpbml0aW9ucyl8fFtdO3ZhciBuPU9iamVjdC5rZXlzKGUpO3RoaXMuYWN0aW9uRGVmaW5pdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmFjdGlvbkRlZmluaXRpb25zfHx7fSxlKTtmb3IodmFyIHI9ZnVuY3Rpb24oZSxyKXsoZnVuY3Rpb24oZSl7dGhpc1tlXT1mdW5jdGlvbih0KXt2YXIgbj1yLmNhbGwodGhpcyxkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEsdCxiaW5kKHRoaXMuc2V0U3RhdGUsdGhpcyxlKSk7dm9pZCAwIT09biYmdGhpcy5zZXRTdGF0ZShuLGUpfS5iaW5kKHRoaXMpfSkuY2FsbCh0LG5bZV0pfSxvPTAsaT12b2lkIDA7aT1lW25bb11dLG88bi5sZW5ndGg7bys9MSlyKG8saSk7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYWN0aW9uRGVmaW5pdGlvbnMpfSxwcm90b3R5cGVBY2Nlc3NvcnMuZGF0YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZGF0YVt0aGlzLm5hbWVdJiZkYXRhW3RoaXMubmFtZV0ubG9hZGVkP2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YTpudWxsfSxTdG9yZS5wcm90b3R5cGUubG9hZGVkPWZ1bmN0aW9uKCl7dmFyIGU9T2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBkYXRhW2VdLmxvYWRlZH0pLmxlbmd0aDtpZihlPT09T2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoJiYhZGF0YS5fX3RyaWdnZXJlZCl7dmFyIHQ9e307T2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGUpe3RbZV09ZGF0YVtlXS5jdXJyZW50RGF0YS50b0pTKCl9KSxkYXRhLl9fdHJpZ2dlcmVkPSEwLHRyaWdnZXIkMShcImdsb2JhbDpkYXRhLWxvYWRlZFwiLHQpfX0sU3RvcmUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKT09PVN0b3JlLnByb3RvdHlwZSYmKGRhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhPXt9LHJlc2V0RXZlbnRzKCksITApfSxTdG9yZS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cInNldFN0YXRlXCIpLGRhdGFbdGhpcy5uYW1lXS5sb2FkZWQ9ITAsKGU9ZGVlcEZyZWV6ZShlKSkhPT1kYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEmJihkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9ZSx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEsdCkpLHRoaXMubG9hZGVkKCl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0b3JlLnByb3RvdHlwZSxwcm90b3R5cGVBY2Nlc3NvcnMpLG1vZHVsZS5leHBvcnRzPVN0b3JlO1xuIiwidmFyIHJlamVjdERlZmF1bHQgPSBmdW5jdGlvbiByZWplY3REZWZhdWx0KGVycm9yKXtcblx0dGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCBwcm9taXNlOiAnICsgZXJyb3IpO1xufTtcbnZhciBlbXB0eUZ1bmMgPSBmdW5jdGlvbigpe307XG5cbmZ1bmN0aW9uIE5vd1Byb21pc2UoZm4pIHtcblx0dmFyIHJlc29sdmVWYWx1ZSwgcmVqZWN0VmFsdWU7XG5cblx0dGhpcy50aGVuID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdEZuO1xuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNGbiwgcmVqRm4pIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqRm4gIT09ICdmdW5jdGlvbicpIHJlakZuID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdGlmICh0eXBlb2YgcmVzRm4gIT09ICdmdW5jdGlvbicpIHJlc0ZuID0gZW1wdHlGdW5jO1xuXHRcdFx0aWYgKCFyZWplY3RWYWx1ZSkge1xuXHRcdFx0XHRyZXNGbihyZXNvbHZlKHJlc29sdmVWYWx1ZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHRcdFx0cmVqRm4ocmVqZWN0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHR0aGlzLmNhdGNoID0gZnVuY3Rpb24ocmVqZWN0KSB7XG5cdFx0aWYgKHJlamVjdFZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlc29sdmVGbihkYXRhKSB7XG5cdFx0cmVzb2x2ZVZhbHVlID0gZGF0YTtcblx0fVxuXHRmdW5jdGlvbiByZWplY3RGbihkYXRhKSB7XG5cdFx0cmVqZWN0VmFsdWUgPSBkYXRhIHx8ICdFcnJvcic7XG5cdH1cblx0Zm4ocmVzb2x2ZUZuLCByZWplY3RGbik7XG59XG5cbk5vd1Byb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZXNvbHZlKHZhbHVlKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UuYWxsID0gZnVuY3Rpb24odmFsdWVzKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcblx0XHRcdGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vd1Byb21pc2UpIHtcblx0XHRcdFx0ZW50cnkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goZW50cnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gTm93UHJvbWlzZSA6IFByb21pc2U7XG5tb2R1bGUuZXhwb3J0cy5Ob3dQcm9taXNlID0gTm93UHJvbWlzZTsiLCJ2YXIgTm93UHJvbWlzZSA9IHJlcXVpcmUoJ25vdy1wcm9taXNlJyk7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUoKSB7XG5cdHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgfHwgIXByb2Nlc3MuYnJvd3Nlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Ym9keTogbnVsbFxuXHR9O1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Zm9yICh2YXIgYWxsIGluIGRlZmF1bHRPcHRpb25zKSB7XG5cdFx0aWYgKCFvcHRpb25zW2FsbF0pIG9wdGlvbnNbYWxsXSA9IGRlZmF1bHRPcHRpb25zW2FsbF07XG5cdH1cblx0aWYgKGlzQnJvd3NlcigpKSB7XG5cdFx0Ly8gYnJvd3NlciBjb250ZXh0XG5cdFx0aWYgKG9wdGlvbnMuYnJvd3NlckJhc2UpIHtcblx0XHRcdHVybCA9IG9wdGlvbnMuYnJvd3NlckJhc2UgKyB1cmw7XG5cdFx0XHRkZWxldGUgb3B0aW9ucy5icm93c2VyQmFzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIG9wdGlvbnMpO1xuXHR9IGVsc2UgaWYgKGlzTm9kZSgpKSB7XG5cdFx0Ly8gbm9kZUpTIGNvbnRleHRcblx0XHR2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblx0XHR2YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuXHRcdGlmICh1cmwubWF0Y2goLzpcXC9cXC8vKSkge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC8oW146L10rKVsvOl0uKiQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucG9ydCA9IHBhcnNlSW50KHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSs6KFxcZCspXFwvLiokLywgJyQxJykgfHwgdXJsLm1hdGNoKC9eaHR0cHM6LykgPyAnNDQzJyA6ICc4MCcsIDEwKTtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSsoPzo6XFxkKyk/KFxcLy4qKSQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSB1cmwucmVwbGFjZSgvXihcXHcrOilcXC9cXC8uKiQvLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9ICdsb2NhbGhvc3QnO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gODg4ODtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybDtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSAnaHR0cDonO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcblx0XHRcdFx0bGV0IGJvZHkgPSAnJztcblx0XHRcdFx0cmVzLm9uKCdkYXRhJywgY2h1bmsgPT4gYm9keSArPSBjaHVuayk7XG5cdFx0XHRcdHJlcy5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA8IDMwMCAmJiByZXMuc3RhdHVzQ29kZSA+PSAyMDApIHtcblx0XHRcdFx0XHRcdGxldCByZXNwb25zZSA9IHtcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXNNZXNzYWdlOiByZXMuc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmVxLm9uKCdlcnJvcicsIHJlamVjdCk7XG5cdFx0XHRpZiAob3B0aW9ucy5ib2R5KSB7XG5cdFx0XHRcdHJlcS53cml0ZShvcHRpb25zLmJvZHkpO1xuXHRcdFx0fVxuXHRcdFx0cmVxLmVuZCgpO1xuXHRcdH0pO1xuXHR9XG59OyIsImltcG9ydCByb3V0ZUltcG9ydHMgZnJvbSAnLi4vcm91dGVzLmpzb24nO1xubGV0IHJvdXRlcyA9IHJvdXRlSW1wb3J0cztcbmxldCBjdXJyZW50Um91dGUgPSBudWxsO1xuXG5mdW5jdGlvbiBvcGVuUGFnZShyb3V0ZSkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG5cdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocm91dGUuY29tcG9uZW50KTtcblx0ZWwucHJvcHMgPSByb3V0ZS5kYXRhO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoZWwpO1xuXHRpZiAocm91dGUudGl0bGUpIHtcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LnRpdGxlID0gcm91dGUudGl0bGUpO1xuXHR9XG5cblx0d2luZG93Llppbm8uaW1wb3J0LmNhbGwoe30sICcvJyArIHJvdXRlLmNvbXBvbmVudCArICcuanMnKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnN0YXRlICYmIG9wZW5QYWdlKGV2ZW50LnN0YXRlKTtcblx0fSwgZmFsc2UpO1xuXHR3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0Um91dGVzKG5ld1JvdXRlcykge1xuXHRcdHJvdXRlcyA9IG5ld1JvdXRlcztcblx0fSxcblxuXHRyb3V0ZShwYXRoKSB7XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGRpcmVjdCBtYXRjaCwganVzdCByZXR1cm4gaXRcblx0XHRpZiAocm91dGVzW3BhdGhdKSByZXR1cm4gcm91dGVzW3BhdGhdO1xuXG5cdFx0Ly8gaWYgd2UgbmVlZCBtb3JlIGRldGFpbGVkIGZpbHRlcmluZy4uLlxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcChyb3V0ZSA9PiB7XG5cdFx0XHRsZXQgbmFtZXMgPSBbJyddO1xuXHRcdFx0bGV0IHJvdXRlRXhwcmVzc2lvbiA9IHJvdXRlLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86KFthLXpdKykvZywgKGcsIG5hbWUpID0+IHtcblx0XHRcdFx0bmFtZXMucHVzaChuYW1lKTtcblx0XHRcdFx0cmV0dXJuICcoLio/KSc7XG5cdFx0XHR9KS5yZXBsYWNlKC9cXCR8XFxeL2csICdcXFxcJCYnKTtcblx0XHRcdHJvdXRlRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoJ14nICsgcm91dGVFeHByZXNzaW9uICsgJyQnKTtcblx0XHRcdGxldCByZXN1bHQgPSByb3V0ZUV4cHJlc3Npb24uZXhlYyhwYXRoKTtcblx0XHRcdGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRsZXQgZGF0YSA9IHt9O1xuXHRcdFx0bmFtZXMuc2xpY2UoMSkuZm9yRWFjaCgobmFtZSwgaWR4KSA9PiB7XG5cdFx0XHRcdGRhdGFbbmFtZV0gPSByZXN1bHRbaWR4ICsgMV07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3V0ZXNbcm91dGVdLCB7ZGF0YX0pO1xuXHRcdH0pLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0KVswXSB8fCBmYWxzZTtcblx0fSxcblxuXHRnZXRDdXJyZW50KCkge1xuXHRcdHJldHVybiBjdXJyZW50Um91dGU7XG5cdH0sXG5cblx0Z2V0VXJsKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgcm91dGUgPSBPYmplY3Qua2V5cyhyb3V0ZXMpLmZpbHRlcihyb3V0ZSA9PiByb3V0ZXNbcm91dGVdLm5hbWUgPT09IG5hbWUpWzBdO1xuXHRcdGxldCB1cmwgPSByb3V0ZTtcblxuXHRcdGlmIChyb3V0ZSkge1xuXHRcdFx0dXJsID0gcm91dGUucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiBkYXRhICYmIGRhdGFbbmFtZV0gfHwgbnVsbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVybDtcblx0fSxcblxuXHRnb3RvKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgdXJsID0gdGhpcy5nZXRVcmwobmFtZSwgZGF0YSk7XG5cdFx0dGhpcy5vcGVuKHVybCk7XG5cdH0sXG5cblx0b3Blbih1cmwpIHtcblx0XHRsZXQgcm91dGUgPSB0aGlzLnJvdXRlKHVybCk7XG5cdFx0Y3VycmVudFJvdXRlID0gcm91dGU7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShyb3V0ZSwgbnVsbCwgdXJsKTtcblx0XHRcdG9wZW5QYWdlKHJvdXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZG8gYSByZWRpcmVjdFxuXHRcdFx0Ly8gLi4uXG5cdFx0fVxuXHR9XG59OyIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vbGliL2ZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vbGliL3JvdXRlcic7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIGZpbHRlcnMpIHtcblx0aWYgKCFmaWx0ZXJzKSBmaWx0ZXJzID0gW2ZhbHNlXTtcblx0bGV0IHJlc3VsdCA9IHtcblx0XHR0YXNrcyxcblx0XHRwcm9qZWN0czogW10sXG5cdFx0ZHVlVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKSksXG5cdFx0Y29udGV4dHM6IFtdLFxuXHRcdGZpbHRlcmVkVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcblx0XHRcdHJldHVybiBmaWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlciA9PT0gdHJ1ZSAmJiB0YXNrLmRvbmUpIHx8IChmaWx0ZXIgPT09IGZhbHNlICYmICF0YXNrLmRvbmUpIHx8ICh0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnRhZ05hbWVzICYmIHRhc2sudGFnTmFtZXMuaW5kZXhPZihmaWx0ZXIpID49IDApKS5sZW5ndGggPT09IGZpbHRlcnMubGVuZ3RoO1xuXHRcdH0pLFxuXHRcdHRhZ3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncykubWFwKHRhc2sgPT4gdGFzay50YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0udHJpbSgpKS5qb2luKCcsJykpLmpvaW4oJywnKS5zcGxpdCgnLCcpLFxuXHRcdGZpbHRlcnNcblx0fTtcblx0bGV0IHByb2plY3RzID0ge307XG5cdGxldCBjb250ZXh0cyA9IHt9O1xuXHRsZXQgZmlsdGVyZWRQcm9qZWN0cyA9IFtdO1xuXHRsZXQgZmlsdGVyZWRDb250ZXh0cyA9IFtdO1xuXHRsZXQgdGFncyA9IHt9O1xuXG5cdHRhc2tzLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0dGFzay5pZCA9IGlkLnRvU3RyaW5nKCk7XG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB0YWdzW3RhZ10gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzW3Byb2plY3RdICs9IDEpO1xuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gY29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdHRhc2sucHJvamVjdHMgJiYgdGFzay5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gZmlsdGVyZWRQcm9qZWN0c1twcm9qZWN0XSArPSAxKTtcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuZm9yRWFjaChjb250ZXh0ID0+IGZpbHRlcmVkQ29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcyA9IHJlc3VsdC5maWx0ZXJlZFRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuXHRcdGxldCBkdWVUYWdBID0gdGFza0EudGFncyAmJiB0YXNrQS50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJyk7XG5cdFx0bGV0IGR1ZVRhZ0IgPSB0YXNrQi50YWdzICYmIHRhc2tCLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRsZXQgdGhpc0V2ZW5pbmcgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVFxcZHsyfTpcXGR7Mn0vZywgJ1QyMzo1OScpKS5nZXRUaW1lKCk7XG5cdFx0aWYgKGR1ZVRhZ0EpIHtcblx0XHRcdGR1ZVRhZ0EgPSBkdWVUYWdBLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpO1xuXHRcdFx0ZHVlVGFnQSA9IG5ldyBEYXRlKGR1ZVRhZ0EpLmdldFRpbWUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZHVlVGFnQSA9IHRoaXNFdmVuaW5nO1xuXHRcdH1cblx0XHRpZiAoZHVlVGFnQikge1xuXHRcdFx0ZHVlVGFnQiA9IGR1ZVRhZ0Iuc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdCID0gbmV3IERhdGUoZHVlVGFnQikuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdCID0gdGhpc0V2ZW5pbmc7XG5cdFx0fVxuXHRcdHJldHVybiBkdWVUYWdBIC0gZHVlVGFnQjtcblx0fSk7XG5cblx0cmVzdWx0LnByb2plY3RzID0gT2JqZWN0LmtleXMocHJvamVjdHMpO1xuXHRyZXN1bHQuY29udGV4dHMgPSBPYmplY3Qua2V5cyhjb250ZXh0cyk7XG5cdHJlc3VsdC5maWx0ZXJlZFByb2plY3RzID0gT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9qZWN0cyk7XG5cdHJlc3VsdC5maWx0ZXJlZENvbnRleHRzID0gT2JqZWN0LmtleXMoZmlsdGVyZWRDb250ZXh0cyk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VGFzayh0YXNrLCBkb25lT25seSkge1xuXHRpZiAoIWRvbmVPbmx5ICYmIHRhc2suZG9uZSB8fCBkb25lT25seSAmJiAhdGFzay5kb25lKSByZXR1cm4gJyc7XG5cdHJldHVybiBbXG5cdFx0dGFzay5kb25lID8gJ3ggJyArIHRhc2suZG9uZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gOiAnJyxcblx0XHR0YXNrLnByaW9yaXR5IHx8ICcnLFxuXHRcdHRhc2sudGV4dC50cmltKCksXG5cdFx0dGFzay5saW5rcyAmJiB0YXNrLmxpbmtzLm1hcChsaW5rID0+IGxpbmsudXJsKS5qb2luKCcgJyksXG5cdFx0dGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmpvaW4oJyAnKSxcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuam9pbignICcpLFxuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3Muam9pbignICcpXG5cdF0uam9pbignICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHRhc2tzLCBkb25lT25seSkge1xuXHRyZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gc3RyaW5naWZ5VGFzayh0YXNrLCBkb25lT25seSkpLmpvaW4oJ1xcbicpLnJlcGxhY2UoL1xcbisvZywgJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhc2sodGFzaywgaWQpIHtcblx0bGV0IHByb2plY3RzID0gdGFzay5tYXRjaCgvXFxzKFxcK1xcdyspL2cpO1xuXHRsZXQgcHJpb3JpdHkgPSB0YXNrLm1hdGNoKC9cXHM/KFxcKFtBLVpdXFwpKVxccysvZyk7XG5cdGxldCBjb250ZXh0cyA9IHRhc2subWF0Y2goL1xccyhAXFx3KykvZyk7XG5cdGxldCB0YWdzID0gdGFzay5tYXRjaCgvXFxzKFxcdys6W1xcdyw6LV0rKS9nKTtcblx0bGV0IHRleHQgPSB0YXNrLnJlcGxhY2UoLyg/OlxccyooPzpcXChbQS1aXVxcKSlcXHMrKXwoPzpcXHNcXCtcXHcrKXwoPzpcXHNAXFx3Kyl8KD86XFxiKD86XFx3KzpbXFx3LDotXSspKS9nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0bGV0IGxpbmtzID0gdGV4dC5tYXRjaCgvXFxiaHR0cHM/OlxcL1xcL1teIF0rL2cpO1xuXHRwcm9qZWN0cyA9IHByb2plY3RzICYmIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0Y29udGV4dHMgPSBjb250ZXh0cyAmJiBjb250ZXh0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdHRhZ3MgPSB0YWdzICYmIHRhZ3MubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRsaW5rcyA9IGxpbmtzICYmIGxpbmtzLm1hcChsaW5rID0+IHtcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGxpbmssICcnKS50cmltKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogbGluayxcblx0XHRcdG5hbWU6IGxpbmsubWF0Y2goL2h0dHBzPzpcXC9cXC8oW14vXSspLylbMV1cblx0XHR9O1xuXHR9KSB8fCBbXTtcblx0bGV0IHRhc2tPYmplY3QgPSB7XG5cdFx0aWQsXG5cdFx0dGV4dCxcblx0XHRwcmlvcml0eTogcHJpb3JpdHkgJiYgcHJpb3JpdHkudG9TdHJpbmcoKS50cmltKCkgfHwgJycsXG5cdFx0cHJvamVjdHMsXG5cdFx0Y29udGV4dHMsXG5cdFx0dGFncyxcblx0XHR0YWdOYW1lczogdGFncyAmJiB0YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0pIHx8IFtdLFxuXHRcdGxpbmtzLFxuXHRcdHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdpZnlUYXNrKHRhc2tPYmplY3QpXG5cdH07XG5cblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRG9uZVRhc2sodGFzaywgaWQpIHtcblx0bGV0IGRvbmVSZWdFeCA9IC9eeFxccysoXFxkKy1cXGQrLVxcZCspXFxzKy87XG5cdGxldCBkb25lRGF0ZSA9IHRhc2subWF0Y2goZG9uZVJlZ0V4KTtcblx0bGV0IHRhc2tPYmplY3QgPSBwYXJzZVRhc2sodGFzay5yZXBsYWNlKGRvbmVEYXRlICYmIGRvbmVEYXRlWzBdIHx8ICdfX0NBTk5PVF9CRV9GT1VORF9ERUFEQkVFRl9fJywgJycpLCBpZCk7XG5cdHRhc2tPYmplY3QuZG9uZSA9IGRvbmVEYXRlICYmIG5ldyBEYXRlKGRvbmVEYXRlWzFdKSB8fCBmYWxzZTtcblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdGlmICghdGFza0xpc3QpIHJldHVybiB0YXNrcztcblx0dGFza0xpc3Quc3BsaXQoJ1xcbicpLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0aWYgKHRhc2spIHtcblx0XHRcdHRhc2tzLnB1c2gocGFyc2VUYXNrKHRhc2ssIGlkLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB0YXNrcztcbn1cblxuZnVuY3Rpb24gcGFyc2VEb25lVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdGlmICghdGFza0xpc3QpIHJldHVybiB0YXNrcztcblx0dGFza0xpc3Quc3BsaXQoJ1xcbicpLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0aWYgKHRhc2spIHtcblx0XHRcdHRhc2tzLnB1c2gocGFyc2VEb25lVGFzayh0YXNrLCBpZC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKGNyZWRlbnRpYWxzKSB7XG5cdFx0c3VwZXIoJ3Rhc2snKTtcblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5hY3Rpb25zKHtcblx0XHRcdGFkZChjdXJyZW50U3RhdGUsIHRhc2ssIG5leHQpIHtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLnRvSlMoKTtcblx0XHRcdFx0aWYgKCFuZXdTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFzayA9IHBhcnNlVGFzayh0YXNrKTtcblx0XHRcdFx0dGFzay5pZCA9IG5ld1N0YXRlLnRhc2tzLmxlbmd0aC50b1N0cmluZygpO1xuXHRcdFx0XHR0YXNrLm1vZGlmaWVkID0gK25ldyBEYXRlO1xuXHRcdFx0XHRuZXdTdGF0ZS50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QobmV3U3RhdGUudGFza3MsIG5ld1N0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KG5ld1N0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKG5ld1N0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlcihjdXJyZW50U3RhdGUsIGZpbHRlciwgbmV4dCkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGUudG9KUygpO1xuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5maWx0ZXJzID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV3U3RhdGUuZmlsdGVycy50b0pTKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuZmlsdGVycyA9IG5ld1N0YXRlLmZpbHRlcnMudG9KUygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBwb3NpdGlvbiA9IG5ld1N0YXRlLmZpbHRlcnMuaW5kZXhPZihmaWx0ZXIpO1xuXHRcdFx0XHRpZiAocG9zaXRpb24gPj0gMCkge1xuXHRcdFx0XHRcdG5ld1N0YXRlLmZpbHRlcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5maWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QobmV3U3RhdGUudGFza3MsIG5ld1N0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KG5ld1N0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdGRvKGN1cnJlbnRTdGF0ZSwgdGFza0lkLCBuZXh0KSB7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS50b0pTKCk7XG5cdFx0XHRcdGlmICghbmV3U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gbmV3U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0dGFzay5kb25lID0gdGFzay5kb25lID8gZmFsc2UgOiBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdHRhc2subW9kaWZpZWQgPSArbmV3IERhdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KG5ld1N0YXRlLnRhc2tzLCBuZXdTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChuZXdTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhuZXdTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGUoY3VycmVudFN0YXRlLCB0YXNrRGF0YSwgbmV4dCkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGUudG9KUygpO1xuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IG5ld1N0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrRGF0YS5pZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0dGFzayA9IE9iamVjdC5hc3NpZ24oe2lkOiB0YXNrLmlkfSwgcGFyc2VUYXNrKHRhc2tEYXRhLnRleHQpKTtcblx0XHRcdFx0XHR0YXNrLm1vZGlmaWVkID0gK25ldyBEYXRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlKGN1cnJlbnRTdGF0ZSwgdGFza0lkLCBuZXh0KSB7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS50b0pTKCk7XG5cdFx0XHRcdGlmICghbmV3U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld1N0YXRlLnRhc2tzLnRvSlMpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IG5ld1N0YXRlLnRhc2tzLnRvSlMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IG5ld1N0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzLnNwbGljZShuZXdTdGF0ZS50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QobmV3U3RhdGUudGFza3MsIG5ld1N0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KG5ld1N0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKG5ld1N0YXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG5cdFx0dGhpcy5sb2FkVGFza3MoKTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGlmICh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdFx0d2luZG93LnRhc2tTdG9yZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5sb2FkVGFza3MuYmluZCh0aGlzKSwgNjAwMDApO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0YXNrcygpIHtcblx0XHRpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS50YXNrcyAmJiB0aGlzLmRhdGEudGFza3MubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS50YXNrcztcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHRpZiAoIXRoaXMudGFza3MpIHtcblx0XHRcdHRoaXMubG9hZFRhc2tzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q3JlZGVudGlhbHModHlwZSkge1xuXHRcdHZhciB0YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNyZWRlbnRpYWxzKTtcblx0XHRpZiAodHlwZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHR0YXJnZXQudXJsID0gdGFyZ2V0LnVybC5yZXBsYWNlKC9cXC90b2RvXFwudHh0JC8sICcvZG9uZS50eHQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGxvYWRUYXNrcygpIHtcblx0XHRsZXQgdGFza0xpc3QgPSAnJztcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGFza3MgJiYgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuZmlsdGVycyk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlLCAnQEBJTklUJyk7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcignbmV0d29yay1zdGFydCcpO1xuXHRcdGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLWxvYWQnKSwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldENyZWRlbnRpYWxzKCkpXG5cdFx0fSkudGhlbihkYXRhID0+IGRhdGEuanNvbigpKS50aGVuKG9wZW5EYXRhID0+IHtcblx0XHRcdHJldHVybiBmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1sb2FkJyksIHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0Q3JlZGVudGlhbHMoJ2RvbmUnKSlcblx0XHRcdH0pLnRoZW4oZG9uZVJlc3BvbnNlID0+IGRvbmVSZXNwb25zZS5qc29uKCkpLnRoZW4oZG9uZURhdGEgPT4gb3BlbkRhdGEudGFza3MgKyAnXFxuJyArIGRvbmVEYXRhLnRhc2tzKTtcblx0XHR9KS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0dGFza0xpc3QgPSBkYXRhIHx8ICcnO1xuXHRcdFx0bGV0IGN1cnJlbnRUYXNrcyA9IHRoaXMudGFza3MgfHwgW107XG5cdFx0XHRsZXQgdGFza3MgPSBwYXJzZURvbmVUYXNrTGlzdCh0YXNrTGlzdCk7XG5cdFx0XHRsZXQgaXNNZXJnZWQgPSBmYWxzZTtcblx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuXHRcdFx0XHRsZXQgbWF0Y2hpbmdUYXNrID0gY3VycmVudFRhc2tzLmZpbmQoY3VycmVudFRhc2sgPT4gY3VycmVudFRhc2suaWQgPT09IHRhc2suaWQpO1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdUYXNrICYmIHRhc2subW9kaWZpZWQgPCBtYXRjaGluZ1Rhc2subW9kaWZpZWQpIHtcblx0XHRcdFx0XHR0YXNrc1tpZHhdID0gbWF0Y2hpbmdUYXNrO1xuXHRcdFx0XHRcdGlzTWVyZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzLCBfdGhpcy5kYXRhICYmIF90aGlzLmRhdGEuZmlsdGVycyk7XG5cdFx0XHRfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgJ0BATE9BRCcpO1xuXHRcdFx0X3RoaXMudHJpZ2dlcignbmV0d29yay1lbmQnKTtcblx0XHRcdGlmIChpc01lcmdlZCkge1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2F2ZVRhc2tzKHN0YXRlKSB7XG5cdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBmaWxlQ29udGVudCA9IHN0cmluZ2lmeShzdGF0ZS50YXNrcyk7XG5cdFx0bGV0IG9iaiA9IHtjcmVkZW50aWFsczogdGhpcy5nZXRDcmVkZW50aWFscygpLCBkYXRhOiBmaWxlQ29udGVudH07XG5cdFx0bGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIGZpbGVDb250ZW50KTtcblxuXHRcdGlmICh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwod2luZG93LnRhc2tTdG9yZUludGVydmFsKTtcblx0XHR9XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VyKTtcblx0XHR0aGlzLmRlYm91bmNlciA9IHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdC8vIHNhdmUgb3BlbiB0YXNrc1xuXHRcdFx0dGhpcy50cmlnZ2VyKCduZXR3b3JrLXN0YXJ0Jyk7XG5cdFx0XHRsZXQgb3BlblByb21pc2UgPSBmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1zYXZlJyksIHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IGJvZHlcblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKCgoKSA9PiB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwod2luZG93LnRhc2tTdG9yZUludGVydmFsKTtcblx0XHRcdFx0d2luZG93LnRhc2tTdG9yZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5sb2FkVGFza3MuYmluZCh0aGlzKSwgNjAwMDApO1xuXHRcdFx0fSkuYmluZCh0aGlzKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignVW5leHBlY3RlZCByZXNwb25zZSBmcm9tIHNlcnZlcjogJywgZXJyb3IpKTtcblxuXHRcdFx0Ly8gc2F2ZSBkb25lIHRhc2tzXG5cdFx0XHRvYmouY3JlZGVudGlhbHMgPSB0aGlzLmdldENyZWRlbnRpYWxzKCdkb25lJyk7XG5cdFx0XHRvYmouZGF0YSA9IHN0cmluZ2lmeShzdGF0ZS50YXNrcywgdHJ1ZSk7XG5cdFx0XHRib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcblx0XHRcdGxldCBkb25lUHJvbWlzZSA9IGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLXNhdmUnKSwge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogYm9keVxuXHRcdFx0fSk7XG5cdFx0XHRQcm9taXNlLmFsbChbb3BlblByb21pc2UsIGRvbmVQcm9taXNlXSkudGhlbigoKSA9PiB0aGlzLnRyaWdnZXIoJ25ldHdvcmstZW5kJykpO1xuXHRcdH0pLmJpbmQodGhpcyksIDIwMDApO1xuXHR9XG5cbn0iLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCd1c2VyJywge1xuXHRcdFx0c2V0VXNlcihjdXJyZW50U3RhdGUsIGRhdGEpIHtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFN0YXRlLnRvSlMoKSwgZGF0YSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcmVkZW50aWFscycsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHR9XG5cblx0bG9hZERhdGEoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsZXQgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3JlZGVudGlhbHMnKSB8fCAne30nO1xuXHRcdFx0XHRfdGhpcy5zZXRTdGF0ZShKU09OLnBhcnNlKGNyZWRlbnRpYWxzKSk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdGhpcy5zZXRTdGF0ZSh7fSk7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza05vdGlmaWVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3cgJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZW5pZWQnKSB7XG5cdFx0XHROb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbiA9PiB7XG5cdFx0XHRcdGlmIChwZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcblx0XHRcdFx0XHR0aGlzLnRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNoZWNrRHVlVGFza3MuYmluZCh0aGlzKSwgNjAwMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjaGVja0R1ZVRhc2tzKCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgLyA2MDtcblx0XHRsZXQgZHVlVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0YXNrID0+IHtcblx0XHRcdHJldHVybiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHtcblx0XHRcdFx0bGV0IGRhdGUgPSB0YWcuc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRcdGlmIChkYXRlLmluZGV4T2YoJ1QnKSA8IDApIHtcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSArICdUMDk6MDAnKTtcblx0XHRcdFx0XHQvLyBubyB0aW1lIGNvbXBvbmVudCwgc28gYWxlcnQgYSBkYXkgZWFybHkgYXQgOSBBTVxuXHRcdFx0XHRcdGRhdGUgPSBkYXRlLmdldFRpbWUoKSAtIDg2NDAwMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0aW1lU3RhbXAgPSBuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCk7XG5cdFx0XHRcdHRpbWVTdGFtcCA9IE1hdGgucm91bmQodGltZVN0YW1wIC8gMTAwMCAvIDYwKTtcblx0XHRcdFx0aWYgKHRpbWVTdGFtcCA+PSBub3cgLSAxICYmIHRpbWVTdGFtcCA8PSBub3cgKyAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSB8fCBmYWxzZTtcblx0XHR9KTtcblx0XHRkdWVUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdFx0aWYgKCF0YXNrLm5vdGlmaWVkKSB7XG5cdFx0XHRcdHRhc2subm90aWZpZWQgPSB0cnVlO1xuXHRcdFx0XHRuZXcgTm90aWZpY2F0aW9uKHRhc2sudGV4dCwge1xuXHRcdFx0XHRcdGJvZHk6IHRhc2sudG9TdHJpbmcoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuY2hlY2tEdWVUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdH1cblxuXHRzZXRUYXNrcyh0YXNrcykge1xuXHRcdHRoaXMudGFza3MgPSB0YXNrcztcblx0XHRpZiAodGhpcy50aW1lb3V0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2hlY2tEdWVUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2xhc3NiaWxEZXZUb29scyhzdG9yZSkge1xuXHR2YXIgZXh0ZW5zaW9uID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uIHx8IHdpbmRvdy50b3AuZGV2VG9vbHNFeHRlbnNpb247XG5cdHZhciBpZ25vcmVTdGF0ZSA9IGZhbHNlO1xuXG5cdGlmICghZXh0ZW5zaW9uKSB7XG5cdFx0Y29uc29sZS53YXJuKCdQbGVhc2UgaW5zdGFsbC9lbmFibGUgdGhlIFJlZHV4IGRldnRvb2xzIGV4dGVuc2lvbi4nKTtcblx0XHRzdG9yZS5kZXZ0b29scyA9IG51bGw7XG5cblx0XHRyZXR1cm4gc3RvcmU7XG5cdH1cblxuXHRpZiAoc3RvcmUuZGV2dG9vbHMpIHJldHVybiBzdG9yZTtcblx0c3RvcmUuZGV2dG9vbHMgPSBleHRlbnNpb24uY29ubmVjdCh7XG5cdFx0bmFtZTogc3RvcmUubmFtZSxcblx0XHRmZWF0dXJlczoge1xuXHRcdFx0c2tpcDogZmFsc2Vcblx0XHR9XG5cdH0pO1xuXHRzdG9yZS5kZXZ0b29scy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0XHRpZiAobWVzc2FnZS50eXBlID09PSAnRElTUEFUQ0gnICYmIG1lc3NhZ2Uuc3RhdGUpIHtcblx0XHRcdGlmIChtZXNzYWdlLnBheWxvYWQudHlwZSA9PT0gJ1RPR0dMRV9BQ1RJT04nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignU2tpcHBpbmcgbm90IGltcGxlbWVudGVkIHlldC4nKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWdub3JlU3RhdGUgPSBtZXNzYWdlLnBheWxvYWQudHlwZSA9PT0gJ0pVTVBfVE9fQUNUSU9OJyB8fCBtZXNzYWdlLnBheWxvYWQudHlwZSA9PT0gJ0pVTVBfVE9fU1RBVEUnO1xuXHRcdFx0aWYgKG1lc3NhZ2Uuc3RhdGUgPT09ICd7XCJsZW5ndGhcIjowfScpIG1lc3NhZ2Uuc3RhdGUgPSAnW10nO1xuXHRcdFx0c3RvcmUuc2V0U3RhdGUoSlNPTi5wYXJzZShtZXNzYWdlLnN0YXRlKSk7XG5cdFx0fVxuXHR9KTtcblx0c3RvcmUuZGV2dG9vbHMuaW5pdChzdG9yZS5kYXRhKTtcblx0c3RvcmUub24oJ2NoYW5nZWQnLCBmdW5jdGlvbiAoZGF0YSwgYWN0aW9uTmFtZSkge1xuXHRcdGFjdGlvbk5hbWUgPSBhY3Rpb25OYW1lIHx8ICdzZXRTdGF0ZSc7XG5cdFx0aWYgKCFpZ25vcmVTdGF0ZSkge1xuXHRcdFx0c3RvcmUuZGV2dG9vbHMuc2VuZChhY3Rpb25OYW1lLCBkYXRhLnRvSlMoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlnbm9yZVN0YXRlID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc3RvcmU7XG59XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RvZG8tYXBwLmNzcyc7XG5pbXBvcnQgVGFza1N0b3JlIGZyb20gJy4uL3N0b3Jlcy90YXNrLXN0b3JlJztcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3VzZXItc3RvcmUnO1xuaW1wb3J0IFRhc2tOb3RpZmllciBmcm9tICcuLi9saWIvdGFzay1ub3RpZmllcic7XG5pbXBvcnQgZGV2dG9vbHMgZnJvbSAnZ2xhc3NiaWwvZGV2dG9vbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcyB8fCB7fTtcblx0XHQvLyBkZWZpbmUgaW5pdGlhbCBwcm9wc1xuXHRcdF90aGlzLnByb3BzID0ge1xuXHRcdFx0bmF2VmlzaWJsZTogZmFsc2UsXG5cdFx0XHRhY3RpdmVOZXR3b3JrOiBmYWxzZSxcblx0XHRcdGZpbHRlcnM6IGZhbHNlLFxuXHRcdFx0dGFza3M6IFtdLFxuXHRcdFx0ZmlsdGVyZWRUYXNrczogW10sXG5cdFx0XHRmaWx0ZXJlZENvbnRleHRzOiBbXSxcblx0XHRcdGZpbHRlcmVkUHJvamVjdHM6IFtdLFxuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0ZHVlVGFza3M6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0dGFnczogW10sXG5cdFx0XHRjcmVkZW50aWFsczoge31cblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tYXBwXCI+XG5cdFx0XHRcdDx0b2RvLWhlYWRlciBkYXRhLWNyZWRlbnRpYWxzPXtkYXRhLnByb3BzLmNyZWRlbnRpYWxzfSBkYXRhLW5ldHdvcms9e2RhdGEucHJvcHMuYWN0aXZlTmV0d29yayA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ30vPlxuXHRcdFx0XHQ8dG9kby1uYXYgY2xhc3M9e2RhdGEucHJvcHMubmF2VmlzaWJsZSA/ICdhY3RpdmUnIDogJyd9IGRhdGEtcHJvamVjdHM9e2RhdGEucHJvcHMuZmlsdGVyZWRQcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5maWx0ZXJlZENvbnRleHRzfSBkYXRhLXRhZ3M9e2RhdGEucHJvcHMudGFnc30gZGF0YS1maWx0ZXJzPXtkYXRhLnByb3BzLmZpbHRlcnN9Lz5cblx0XHRcdFx0PHRvZG8tbGlzdCBkYXRhLXN0b3JlPXt0aGlzLnRhc2tTdG9yZX0gZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5wcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5jb250ZXh0c30gZGF0YS10YXNrcz17ZGF0YS5wcm9wcy5maWx0ZXJlZFRhc2tzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzdHlsZXMoKSB7IHJldHVybiBzdHlsZXM7IH1cblx0Z2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3RvZG8tbmF2Jzoge2ZpbHRlcihldmVudCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS5zZXRQcm9wcygnbmF2VmlzaWJsZScsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudGFza1N0b3JlLmZpbHRlcihldmVudC5kZXRhaWwpO1xuXHRcdFx0fSwgY2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgZmFsc2UpO1xuXHRcdFx0fX0sXG5cdFx0XHQndG9kby1oZWFkZXInOiB7bG9naW4oZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkudXNlclN0b3JlLnNldFVzZXIoZXZlbnQuZGV0YWlsKTtcblx0XHRcdH0sIGxvZ29hY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgdHJ1ZSk7XG5cdFx0XHR9fVxuXHRcdH07XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8taGVhZGVyLmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdi5qcycpO1xuXHRcdHouaW1wb3J0KCcuL3NtYXJ0L3RvZG8tbGlzdC5qcycpO1xuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMudGFza1N0b3JlID0gei5pc0Jyb3dzZXIgPyBkZXZ0b29scyhuZXcgVGFza1N0b3JlKCkpIDogbmV3IFRhc2tTdG9yZSgpO1xuXHRcdHRoaXMudXNlclN0b3JlID0gei5pc0Jyb3dzZXIgPyBkZXZ0b29scyhuZXcgVXNlclN0b3JlKCkpIDogbmV3IFVzZXJTdG9yZSgpO1xuXHRcdHRoaXMubm90aWZpZXIgPSBuZXcgVGFza05vdGlmaWVyKCk7XG5cblx0XHR0aGlzLnRhc2tTdG9yZS5vbignbmV0d29yay1zdGFydCcsIHRoaXMubmV0d29ya1N0YXJ0ID0gKCkgPT4ge1xuXHRcdFx0X3RoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdhY3RpdmVOZXR3b3JrJywgdHJ1ZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy50YXNrU3RvcmUub24oJ25ldHdvcmstZW5kJywgdGhpcy5uZXR3b3JrRW5kID0gKCkgPT4ge1xuXHRcdFx0X3RoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdhY3RpdmVOZXR3b3JrJywgZmFsc2UpO1xuXHRcdH0pO1xuXHRcdHRoaXMudGFza1N0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdHRoaXMubm90aWZpZXIuc2V0VGFza3MoZGF0YS50YXNrcy50b0pTKCkuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzICYmIHRhc2sudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpKSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKGRhdGEudG9KUygpKTtcblx0XHRcdH0pLmJpbmQoX3RoaXMpLCAxNTApO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQgPSBkYXRhID0+IHtcblx0XHRcdGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YXNrU3RvcmUuc2V0Q3JlZGVudGlhbHMoZGF0YSk7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCdjcmVkZW50aWFscycsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLnVzZXJTdG9yZS5kYXRhKSB7XG5cdFx0XHR0aGlzLnVzZXJzQ2hhbmdlZCh0aGlzLnVzZXJTdG9yZS5kYXRhKTtcblx0XHR9XG5cdH1cblxuXHRvbnVubW91bnQoKSB7XG5cdFx0dGhpcy50YXNrU3RvcmUub2ZmKCdjaGFuZ2VkJywgdGhpcy50YXNrc0NoYW5nZWQpO1xuXHRcdHRoaXMudXNlclN0b3JlLm9mZignY2hhbmdlZCcsIHRoaXMudXNlcnNDaGFuZ2VkKTtcblx0XHR0aGlzLnRhc2tTdG9yZS5vZmYoJ25ldHdvcmstc3RhcnQnLCB0aGlzLm5ldHdvcmtTdGFydCk7XG5cdFx0dGhpcy50YXNrU3RvcmUub2ZmKCduZXR3b3JrLWVuZCcsIHRoaXMubmV0d29ya0VuZCk7XG5cdH1cbn0iXSwibmFtZXMiOlsiZ2xvYmFsIiwiTm93UHJvbWlzZSIsImNvbnN0IiwibGV0Iiwic3VwZXIiLCJmaWx0ZXIiLCJ0aGlzIiwiU3RvcmUiLCJkZXZ0b29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBT0EsY0FBTSxDQUFDQSxjQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsU0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDOzs7QUNBeDhHLElBQUksYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLEtBQUssQ0FBQztDQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQzlDLENBQUM7QUFDRixJQUFJLFNBQVMsR0FBRyxVQUFVLEVBQUUsQ0FBQzs7QUFFN0IsU0FBUyxVQUFVLENBQUMsRUFBRSxFQUFFO0NBQ3ZCLElBQUksWUFBWSxFQUFFLFdBQVcsQ0FBQzs7Q0FFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDckMsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQztFQUNwRCxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtHQUM1QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDO0dBQ3ZELElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUM7R0FDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDN0IsTUFBTTtJQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkI7R0FDRCxDQUFDLENBQUM7RUFDSCxDQUFDO0NBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLE1BQU0sRUFBRTtFQUM3QixJQUFJLFdBQVcsRUFBRTtHQUNoQixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRSxNQUFNLEdBQUcsYUFBYSxDQUFDO0dBQ3pELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUNwQjtFQUNELENBQUM7O0NBRUYsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0VBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7RUFDcEI7Q0FDRCxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUU7RUFDdkIsV0FBVyxHQUFHLElBQUksSUFBSSxPQUFPLENBQUM7RUFDOUI7Q0FDRCxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVELFVBQVUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEVBQUU7Q0FDcEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxDQUFDO0NBQ0gsQ0FBQzs7QUFFRixVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxFQUFFO0NBQ25DLE9BQU8sSUFBSSxVQUFVLENBQUMsU0FBUyxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNkLENBQUMsQ0FBQztDQUNILENBQUM7O0FBRUYsVUFBVSxDQUFDLEdBQUcsR0FBRyxTQUFTLE1BQU0sRUFBRTtDQUNqQyxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtFQUMvQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7RUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRTtHQUM5QixJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7SUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRTtLQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO01BQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNoQjtLQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsTUFBTTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkI7R0FDRCxDQUFDLENBQUM7RUFDSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtHQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDaEI7RUFDRCxDQUFDLENBQUM7Q0FDSCxDQUFDOztBQUVGLGNBQWMsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUN2RSxnQkFBeUIsR0FBRyxVQUFVOzs7O0FDckV0QyxTQUFTLFNBQVMsR0FBRztDQUNwQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztDQUNyQzs7QUFFRCxTQUFTLE1BQU0sR0FBRztDQUNqQixPQUFPLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Q0FDMUQ7O0FBRUQsU0FBYyxHQUFHLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRTtDQUN2QyxJQUFJLGNBQWMsR0FBRztFQUNwQixNQUFNLEVBQUUsS0FBSztFQUNiLElBQUksRUFBRSxJQUFJO0VBQ1YsQ0FBQztDQUNGLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0NBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFO0VBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7RUFDdEQ7Q0FDRCxJQUFJLFNBQVMsRUFBRSxFQUFFOztFQUVoQixJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7R0FDeEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0dBQ2hDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQztHQUMzQjtFQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDbEMsTUFBTSxJQUFJLE1BQU0sRUFBRSxFQUFFOztFQUVwQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDM0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzdCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtHQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDakUsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDcEgsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN2RCxNQUFNO0dBQ04sT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7R0FDL0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDcEIsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7R0FDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7R0FDM0I7RUFDRCxPQUFPLElBQUlDLFVBQVUsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7R0FDdkNDLElBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFO0lBQ2pGQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLEtBQUssRUFBQyxTQUFHLElBQUksSUFBSSxLQUFLLEdBQUEsQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQUc7S0FDaEIsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtNQUNsREEsSUFBSSxRQUFRLEdBQUc7T0FDZCxJQUFJLEVBQUUsWUFBRyxTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUE7T0FDNUIsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLEdBQUE7T0FDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO09BQ3RCLENBQUM7TUFDRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7TUFDbEIsTUFBTTtNQUNOLE1BQU0sQ0FBQztPQUNOLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVTtPQUN0QixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWE7T0FDaEMsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLEdBQUE7T0FDaEIsSUFBSSxFQUFFLFlBQUcsU0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFBO09BQzVCLENBQUMsQ0FBQztNQUNIO0tBQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0dBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCO0dBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0dBQ1YsQ0FBQyxDQUFDO0VBQ0g7Q0FDRDs7Ozs7Ozs7QUNyRURBLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQztBQUMxQkEsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDOztBQUV4QixTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Q0FDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0NBQ3ZEQSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUNqRCxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Q0FDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDeEQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0VBQ2hCLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM5RDs7Q0FFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQzNEOztBQUVELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO0NBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxLQUFLLEVBQUU7RUFDbkQsS0FBSyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3JDLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDVixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0NBQy9COztBQUVELGFBQWU7Q0FDZCxTQUFTLG9CQUFBLENBQUMsU0FBUyxFQUFFO0VBQ3BCLE1BQU0sR0FBRyxTQUFTLENBQUM7RUFDbkI7O0NBRUQsS0FBSyxnQkFBQSxDQUFDLElBQUksRUFBRTs7RUFFWCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFBLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUE7OztFQUd0QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxFQUFDO0dBQ3BDQSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0dBQ2pCQSxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRTtJQUNqRixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sT0FBTyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDN0IsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDMURBLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBLE9BQU8sS0FBSyxDQUFDLEVBQUE7R0FDMUJBLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztHQUNkLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7R0FDSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNoRCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxFQUFDLFNBQUcsTUFBTSxHQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDeEM7O0NBRUQsVUFBVSxxQkFBQSxHQUFHO0VBQ1osT0FBTyxZQUFZLENBQUM7RUFDcEI7O0NBRUQsTUFBTSxpQkFBQSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDbEJBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxFQUFDLFNBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hGQSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7O0VBRWhCLElBQUksS0FBSyxFQUFFO0dBQ1YsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFBLENBQUMsQ0FBQztHQUMzRTs7RUFFRCxPQUFPLEdBQUcsQ0FBQztFQUNYOztDQUVELElBQUksZUFBQSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDaEJBLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDZjs7Q0FFRCxJQUFJLGVBQUEsQ0FBQyxHQUFHLEVBQUU7RUFDVEEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM1QixZQUFZLEdBQUcsS0FBSyxDQUFDO0VBQ3JCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0dBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztHQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDaEIsTUFBTTs7O0dBR047RUFDRDtDQUNEOztBQzdFRCxTQUFTLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7Q0FDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFBLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7Q0FDaENBLElBQUksTUFBTSxHQUFHO0VBQ1osT0FBQSxLQUFLO0VBQ0wsUUFBUSxFQUFFLEVBQUU7RUFDWixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLEdBQUEsQ0FBQztFQUMvRixRQUFRLEVBQUUsRUFBRTtFQUNaLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFDO0dBQ2hDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sRUFBQyxTQUFHLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLE1BQU0sS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0dBQ3pTLENBQUM7RUFDRixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUNoSSxTQUFBLE9BQU87RUFDUCxDQUFDO0NBQ0ZBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztDQUNsQkEsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0NBQ2xCQSxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztDQUMxQkEsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Q0FDMUJBLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7Q0FFZCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUN4QixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7RUFDdEQsQ0FBQyxDQUFDO0NBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUM7RUFDekIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBQyxTQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0VBQzFFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUMsU0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztFQUMxRSxDQUFDLENBQUM7Q0FDSCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBQztFQUNqQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFDLFNBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztFQUNsRixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFDLFNBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztFQUNsRixDQUFDLENBQUM7Q0FDSCxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUMvREEsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsRUFBQyxTQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFBLENBQUMsQ0FBQztFQUNoRkEsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsRUFBQyxTQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFBLENBQUMsQ0FBQztFQUNoRkEsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7RUFDbEcsSUFBSSxPQUFPLEVBQUU7R0FDWixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2hELE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUN0QyxNQUFNO0dBQ04sT0FBTyxHQUFHLFdBQVcsQ0FBQztHQUN0QjtFQUNELElBQUksT0FBTyxFQUFFO0dBQ1osT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNoRCxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDdEMsTUFBTTtHQUNOLE9BQU8sR0FBRyxXQUFXLENBQUM7R0FDdEI7RUFDRCxPQUFPLE9BQU8sR0FBRyxPQUFPLENBQUM7RUFDekIsQ0FBQyxDQUFDOztDQUVILE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN4QyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDeEMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztDQUN4RCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztDQUV4RCxPQUFPLE1BQU0sQ0FBQztDQUNkOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7Q0FDdEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFBO0NBQ2hFLE9BQU87RUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO0VBQzdELElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtFQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtFQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4RCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN4QyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNoQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNuQjs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ25DLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3pGOztBQUVELFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDNUJBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDeENBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztDQUNoREEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUN2Q0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBQzNDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdFQUF3RSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDbElBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztDQUM5QyxRQUFRLEdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLEVBQUMsU0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0NBQy9ELFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sRUFBQyxTQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7Q0FDL0QsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxFQUFDLFNBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQztDQUNuRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUM7RUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ3JDLE9BQU87R0FDTixHQUFHLEVBQUUsSUFBSTtHQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3pDLENBQUM7RUFDRixDQUFDLElBQUksRUFBRSxDQUFDO0NBQ1RBLElBQUksVUFBVSxHQUFHO0VBQ2hCLElBQUEsRUFBRTtFQUNGLE1BQUEsSUFBSTtFQUNKLFFBQVEsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7RUFDdEQsVUFBQSxRQUFRO0VBQ1IsVUFBQSxRQUFRO0VBQ1IsTUFBQSxJQUFJO0VBQ0osUUFBUSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxFQUFDLFNBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLElBQUksRUFBRTtFQUMxRCxPQUFBLEtBQUs7RUFDTCxRQUFRLEVBQUUsWUFBRyxTQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBQTtFQUN6QyxDQUFDOztDQUVGLE9BQU8sVUFBVSxDQUFDO0NBQ2xCOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDaENBLElBQUksU0FBUyxHQUFHLHVCQUF1QixDQUFDO0NBQ3hDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQ3JDQSxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzVHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztDQUM3RCxPQUFPLFVBQVUsQ0FBQztDQUNsQjs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Q0FDaENBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0NBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN2QyxJQUFJLElBQUksRUFBRTtHQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQzNDO0VBQ0QsQ0FBQyxDQUFDOztDQUVILE9BQU8sS0FBSyxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7Q0FDcENBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0NBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN2QyxJQUFJLElBQUksRUFBRTtHQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQy9DO0VBQ0QsQ0FBQyxDQUFDO0NBQ0gsT0FBTyxLQUFLLENBQUM7Q0FDYjs7QUFFRCxJQUFxQixTQUFTO0NBQWUsa0JBQ2pDLENBQUMsV0FBVyxFQUFFO0VBQ3hCQyxRQUFLLEtBQUEsQ0FBQyxNQUFBLE1BQU0sQ0FBQyxDQUFDOztFQUVkRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztHQUNaLEdBQUcsY0FBQSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzdCQSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7S0FDcEIsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDcEI7SUFDRCxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCOztHQUVELE1BQU0saUJBQUEsQ0FBQyxZQUFZLEVBQUVFLFFBQU0sRUFBRSxJQUFJLEVBQUU7SUFDbENGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtLQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO0tBQ3RCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQ3RCLE1BQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtLQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDM0M7SUFDREEsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUNFLFFBQU0sQ0FBQyxDQUFDO0lBQ2hELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtLQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckMsTUFBTTtLQUNOLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDQSxRQUFNLENBQUMsQ0FBQztLQUM5QjtJQUNELFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZjs7R0FFRCxFQUFFLGVBQUEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtJQUM5QkYsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO0tBQ3BCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO0lBQ0RBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEdBQUEsQ0FBQyxDQUFDO0lBQzNELElBQUksSUFBSSxFQUFFO0tBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztLQUMxQjtJQUNELFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCOztHQUVELE1BQU0saUJBQUEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNwQ0EsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO0tBQ3BCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO0lBQ0RBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFDLFNBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQztJQUNoRSxJQUFJLElBQUksRUFBRTtLQUNULElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQzFCO0lBQ0QsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNmLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUI7O0dBRUQsTUFBTSxtQkFBQSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2xDQSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7S0FDcEIsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDcEIsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO0tBQy9CLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2QztJQUNEQSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxHQUFBLENBQUMsQ0FBQztJQUMzRCxJQUFJLElBQUksRUFBRTtLQUNULFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEO0lBQ0QsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNmLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUI7R0FDRCxDQUFDLENBQUM7RUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztFQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7RUFDakIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7R0FDbEMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDN0IsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hDO0dBQ0QsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztHQUN6RTtFQUNEOzs7Ozs7d0NBQUE7O0NBRUQsbUJBQUEsS0FBUyxtQkFBRztFQUNYLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0dBQy9ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7R0FDdkI7RUFDRCxPQUFPLElBQUksQ0FBQztFQUNaLENBQUE7O0NBRUQsb0JBQUEsY0FBYyw0QkFBQyxXQUFXLEVBQUU7RUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7RUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7R0FDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0dBQ2pCO0VBQ0QsQ0FBQTs7Q0FFRCxvQkFBQSxjQUFjLDRCQUFDLElBQUksRUFBRTtFQUNwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDakQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO0dBQ3BCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0dBQzdEO0VBQ0QsT0FBTyxNQUFNLENBQUM7RUFDZCxDQUFBOztDQUVELG9CQUFBLFNBQVMseUJBQUc7OztFQUNYQSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7RUFDbEJBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtHQUN0QixPQUFPO0dBQ1A7RUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7R0FDdkQsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDekNBLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUNwQ0EsSUFBSSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztHQUNsQztFQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7RUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7R0FDbEMsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLEVBQUU7SUFDUixjQUFjLEVBQUUsaUNBQWlDO0lBQ2pEO0dBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBQztHQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFO0tBQ1IsY0FBYyxFQUFFLGlDQUFpQztLQUNqRDtJQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDRyxNQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxZQUFZLEVBQUMsU0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBQyxTQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUEsQ0FBQyxDQUFDO0dBQ3RHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUM7R0FDWixRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztHQUN0QkgsSUFBSSxZQUFZLEdBQUdHLE1BQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0dBQ3BDSCxJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUN4Q0EsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0dBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3pCQSxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVyxFQUFDLFNBQUcsV0FBVyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQztJQUNoRixJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUU7S0FDMUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQztLQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0hBLElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDNUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7R0FDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUM3QixJQUFJLFFBQVEsRUFBRTtJQUNiLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUI7R0FDRCxDQUFDLENBQUM7RUFDSCxDQUFBOztDQUVELG9CQUFBLFNBQVMsdUJBQUMsS0FBSyxFQUFFOzs7RUFDaEIsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUUsRUFBQSxPQUFPLEVBQUE7RUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7R0FDdEIsT0FBTztHQUNQO0VBQ0RBLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDekNBLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDbEVBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDL0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7O0VBRTNDLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO0dBQzdCLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztHQUN4QztFQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxZQUFHOztHQUUvQkcsTUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztHQUM5QkgsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDcEQsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUU7S0FDUixjQUFjLEVBQUUsaUNBQWlDO0tBQ2pEO0lBQ0QsSUFBSSxFQUFFLElBQUk7SUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFDLFNBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFHO0lBQzdDLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDRyxNQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQ0EsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsRUFBRSxJQUFJLENBQUNBLE1BQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxFQUFDLFNBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7OztHQUd6RixHQUFHLENBQUMsV0FBVyxHQUFHQSxNQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDM0JILElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQ3BELE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFO0tBQ1IsY0FBYyxFQUFFLGlDQUFpQztLQUNqRDtJQUNELElBQUksRUFBRSxJQUFJO0lBQ1YsQ0FBQyxDQUFDO0dBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFHLFNBQUdHLE1BQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0dBQ2hGLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3JCLENBQUE7Ozs7O0VBL01xQ0M7O0FDNUl2QyxJQUFxQixTQUFTO0NBQWUsa0JBQ2pDLEdBQUc7RUFDYkgsS0FBSyxLQUFBLENBQUMsTUFBQSxNQUFNLEVBQUU7R0FDYixPQUFPLGtCQUFBLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtJQUMzQkQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELElBQUksT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFO0tBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5RDtJQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2hCO0dBQ0QsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUNoQjs7Ozs2Q0FBQTs7Q0FFRCxvQkFBQSxRQUFRLHdCQUFHO0VBQ1ZBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNqQixJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTtHQUN4QyxVQUFVLENBQUMsWUFBRztJQUNiQSxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM5RCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQ1IsTUFBTTtHQUNOLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDbkI7RUFDRCxDQUFBOzs7RUF6QnFDSTs7QUNGeEIsSUFBTSxZQUFZLEdBQUMscUJBQ3RCLEdBQUc7OztDQUNkLElBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0NBQ2pCLElBQUssT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLGNBQWMsSUFBSSxNQUFNLElBQUksWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7RUFDdkcsWUFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQUEsVUFBVSxFQUFDO0dBQzFDLElBQUssVUFBVSxLQUFLLFNBQVMsRUFBRTtJQUM5QixNQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUNELE1BQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDQSxNQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RTtHQUNELENBQUMsQ0FBQztFQUNIO0NBQ0QsQ0FBQTs7QUFFRix1QkFBQyxhQUFhLDZCQUFHO0NBQ2hCLFlBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDNUIsSUFBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0NBQzVDLElBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFDO0VBQ3RDLE9BQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsRUFBQztHQUN2QyxJQUFLLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDOUMsSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUMzQixJQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDOztJQUVsQyxJQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUNqQztHQUNGLElBQUssU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQzFDLFNBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7R0FDL0MsSUFBSyxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtJQUNsRCxPQUFRLElBQUksQ0FBQztJQUNaLE1BQU07SUFDUCxPQUFRLEtBQUssQ0FBQztJQUNiO0dBQ0QsQ0FBQyxJQUFJLEtBQUssQ0FBQztFQUNaLENBQUMsQ0FBQztDQUNKLFFBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUM7RUFDdEIsSUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7R0FDcEIsSUFBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7R0FDdEIsSUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtJQUM1QixJQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUNyQixDQUFDLENBQUM7R0FDSDtFQUNELENBQUMsQ0FBQztDQUNKLElBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2hFLENBQUE7O0FBRUYsdUJBQUMsUUFBUSxzQkFBQyxLQUFLLEVBQUU7Q0FDaEIsSUFBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEIsSUFBSyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNuRCxZQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzVCLE1BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDeEQ7Q0FDRCxDQUFBOztBQ2pEYSxTQUFTLGdCQUFnQixDQUFDLEtBQUssRUFBRTtDQUMvQyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztDQUN6RSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O0NBRXhCLElBQUksQ0FBQyxTQUFTLEVBQUU7RUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7RUFDcEUsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0VBRXRCLE9BQU8sS0FBSyxDQUFDO0VBQ2I7O0NBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sS0FBSyxDQUFDO0NBQ2pDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztFQUNsQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7RUFDaEIsUUFBUSxFQUFFO0dBQ1QsSUFBSSxFQUFFLEtBQUs7R0FDWDtFQUNELENBQUMsQ0FBQztDQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsT0FBTyxFQUFFO0VBQzNDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtHQUNqRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtJQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDOUMsT0FBTztJQUNQO0dBQ0QsV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQztHQUNwRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0dBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztHQUMxQztFQUNELENBQUMsQ0FBQztDQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNoQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLElBQUksRUFBRSxVQUFVLEVBQUU7RUFDL0MsVUFBVSxHQUFHLFVBQVUsSUFBSSxVQUFVLENBQUM7RUFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRTtHQUNqQixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7R0FDN0MsTUFBTTtHQUNOLFdBQVcsR0FBRyxLQUFLLENBQUM7R0FDcEI7RUFDRCxDQUFDLENBQUM7O0NBRUgsT0FBTyxLQUFLLENBQUM7Q0FDYjs7QUNsQ0QsSUFBcUIsT0FBTyxHQUFDLGdCQUNqQixHQUFHO0NBQ2QsSUFBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Q0FFeEIsS0FBTSxDQUFDLEtBQUssR0FBRztFQUNkLFVBQVcsRUFBRSxLQUFLO0VBQ2xCLGFBQWMsRUFBRSxLQUFLO0VBQ3JCLE9BQVEsRUFBRSxLQUFLO0VBQ2YsS0FBTSxFQUFFLEVBQUU7RUFDVixhQUFjLEVBQUUsRUFBRTtFQUNsQixnQkFBaUIsRUFBRSxFQUFFO0VBQ3JCLGdCQUFpQixFQUFFLEVBQUU7RUFDckIsUUFBUyxFQUFFLEVBQUU7RUFDYixRQUFTLEVBQUUsRUFBRTtFQUNiLFFBQVMsRUFBRSxFQUFFO0VBQ2IsSUFBSyxFQUFFLEVBQUU7RUFDVCxXQUFZLEVBQUUsRUFBRTtFQUNmLENBQUM7Q0FDRjs7bURBQUE7O0FBRUYsa0JBQUMsTUFBTSxvQkFBQyxJQUFJLEVBQUU7Q0FDYjtFQUNDLGlCQUFFLFNBQUksS0FBSyxFQUFDLFVBQVUsRUFBQTtJQUNwQixpQkFBQyxpQkFBWSxrQkFBZ0IsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxjQUFZLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsRUFBQyxDQUFFO0lBQ3hILGlCQUFDLGNBQVMsS0FBSyxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsR0FBRyxFQUFFLEVBQUUsZUFBYSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBYSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBUyxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGNBQVksRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFFO0lBQy9NLGlCQUFDLGVBQVUsWUFBVSxFQUFDLElBQUssQ0FBQyxTQUFTLEVBQUUsZUFBYSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQWEsRUFBQyxJQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFVLEVBQUMsSUFBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsY0FBWSxFQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLENBQUU7SUFDbkw7R0FDTDtDQUNGLENBQUE7O0FBRUYsbUJBQUMsTUFBVSxtQkFBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQTtBQUNoQyxtQkFBQyxNQUFVLG1CQUFHO0NBQ2IsT0FBUTtFQUNQLFVBQVcsRUFBRSxDQUFDLE1BQU0saUJBQUEsQ0FBQyxLQUFLLEVBQUU7R0FDM0IsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDOUMsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLEVBQUUsS0FBSyxnQkFBQSxHQUFHO0dBQ1gsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQztFQUNILGFBQWMsRUFBRSxDQUFDLEtBQUssZ0JBQUEsQ0FBQyxLQUFLLEVBQUU7R0FDN0IsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQy9DLEVBQUUsVUFBVSxxQkFBQSxHQUFHO0dBQ2hCLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzVDLENBQUM7RUFDRixDQUFDO0NBQ0YsQ0FBQTs7QUFFRixrQkFBQyxPQUFPLHFCQUFDLENBQUMsRUFBRTs7O0NBQ1gsQ0FBRSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0NBQ25DLENBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztDQUNoQyxDQUFFLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0NBRWxDLElBQUssS0FBSyxHQUFHLElBQUksQ0FBQzs7Q0FFbEIsSUFBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHRSxnQkFBUSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0NBQzVFLElBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBR0EsZ0JBQVEsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztDQUM1RSxJQUFLLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0NBRXBDLElBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQUc7RUFDMUQsS0FBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDaEQsQ0FBQyxDQUFDO0NBQ0osSUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBRztFQUN0RCxLQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNqRCxDQUFDLENBQUM7Q0FDSixJQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFBLElBQUksRUFBQztFQUN0RCxNQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBQyxTQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUMsU0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7RUFDM0gsVUFBVyxDQUFDLENBQUMsWUFBRztHQUNmLE1BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7R0FDckMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDckIsQ0FBQyxDQUFDO0NBQ0osSUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBQSxJQUFJLEVBQUM7RUFDdEQsSUFBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0dBQzFDLE1BQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3JDLE1BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzdDO0VBQ0QsQ0FBQyxDQUFDO0NBQ0osSUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtFQUN6QixJQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkM7Q0FDRCxDQUFBOztBQUVGLGtCQUFDLFNBQVMseUJBQUc7Q0FDWixJQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQ2xELElBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDbEQsSUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUN4RCxJQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ25ELENBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
