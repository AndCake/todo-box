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
		task.projects.forEach(function (project) { return filteredProjects[project] += 1; });
		task.contexts.forEach(function (context) { return filteredContexts[context] += 1; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1hcHAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9nbGFzc2JpbC9kaXN0L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm93LXByb21pc2UvaW5kZXguanMiLCIuLi8uLi9saWIvZmV0Y2guanMiLCIuLi8uLi9saWIvcm91dGVyLmpzIiwiLi4vLi4vc3RvcmVzL3Rhc2stc3RvcmUuanMiLCIuLi8uLi9zdG9yZXMvdXNlci1zdG9yZS5qcyIsIi4uLy4uL2xpYi90YXNrLW5vdGlmaWVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2dsYXNzYmlsL2RldnRvb2xzLmpzIiwiLi4vLi4vcGFnZXMvdG9kby1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNjb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGV2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5PXNjb3BlLl9fZXZlbnRSZWdpc3RyeXx8e307ZnVuY3Rpb24gdHJpZ2dlcihlKXt2YXIgdD1hcmd1bWVudHM7aWYoZXZlbnRSZWdpc3RyeVtlXSlmb3IodmFyIG4scj0wLG89ZXZlbnRSZWdpc3RyeVtlXS5sZW5ndGg7bj1ldmVudFJlZ2lzdHJ5W2VdW3JdLHI8bztyKz0xKXtpZighMT09PW4uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LDEpKSlicmVha319ZnVuY3Rpb24gb24oZSx0KXtldmVudFJlZ2lzdHJ5W2VdfHwoZXZlbnRSZWdpc3RyeVtlXT1bXSksZXZlbnRSZWdpc3RyeVtlXS5wdXNoKHQpfWZ1bmN0aW9uIG9mZihlLHQpe2lmKGV2ZW50UmVnaXN0cnlbZV0paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl7dmFyIG49ZXZlbnRSZWdpc3RyeVtlXS5pbmRleE9mKHQpO24+PTAmJmV2ZW50UmVnaXN0cnlbZV0uc3BsaWNlKG4sMSl9ZWxzZSBldmVudFJlZ2lzdHJ5W2VdPVtdfWZ1bmN0aW9uIG9uZShlLHQpe3ZhciBuPXRoaXMscj1mdW5jdGlvbigpe29mZihlLHIpLHQuYXBwbHkobixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07b24oZSxyKX1mdW5jdGlvbiByZXNldEV2ZW50cygpe2V2ZW50UmVnaXN0cnk9c2NvcGUuX19ldmVudFJlZ2lzdHJ5PXt9fXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZSxyZXNldEV2ZW50czpyZXNldEV2ZW50c30pLHNjb3BlJDE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZGF0YT1zY29wZSQxLl9fZ2xhc3NiaWxTdG9yZURhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhfHx7fSx0cmlnZ2VyJDE9dHJpZ2dlcjtmdW5jdGlvbiBtaXJyb3IoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBkZWVwRnJlZXplKGUpe2lmKG51bGw9PT1lfHx2b2lkIDA9PT1lfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRvSlN8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiBlO3ZhciB0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLG49e3RvSlM6e3ZhbHVlOm1pcnJvci5iaW5kKGUpfX07QXJyYXkuaXNBcnJheShlKSYmKGU9ZS5zbGljZSgwKS5tYXAoZGVlcEZyZWV6ZSksW1wibWFwXCIsXCJmb3JFYWNoXCIsXCJmaW5kXCIsXCJpbmRleE9mXCIsXCJmaWx0ZXJcIixcInNvbWVcIixcImV2ZXJ5XCIsXCJsYXN0SW5kZXhPZlwiLFwic2xpY2VcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXt2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkZWVwRnJlZXplKEFycmF5LnByb3RvdHlwZVt0XS5hcHBseShlLGFyZ3VtZW50cykpfX19KSk7Zm9yKHZhciByPWZ1bmN0aW9uKGUscil7blt0W2VdXT17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZGVlcEZyZWV6ZShyKX0sc2V0OmZ1bmN0aW9uKG4pe3Rocm93IG5ldyBFcnJvcignQ2Fubm90IGNoYW5nZSBwcm9wZXJ0eSBcIicrdFtlXSsnXCIgdG8gXCInK24rJ1wiIG9mIGFuIGltbXV0YWJsZSBvYmplY3QnKX19fSxvPTAsaT12b2lkIDA7aT1lW3Rbb11dLG88dC5sZW5ndGg7bys9MSlyKG8saSk7cmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksbikpfWZ1bmN0aW9uIGJpbmQoZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZS5jYWxsKHQscixuKX19dmFyIFN0b3JlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt0aGlzLm5hbWU9ZXx8XCJVbm5hbWVkXCIrT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoLE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbih0KXtcInJlc2V0RXZlbnRzXCIhPT10JiYoblt0XT1mdW5jdGlvbihuLHIpe24uaW5kZXhPZihcIjpcIik+PTA/ZXZlbnRzW3RdKG4scik6ZXZlbnRzW3RdKGUrXCItc3RvcmU6XCIrbixyKX0pfSksdGhpcy5hY3Rpb25zKHQpLGUmJihkYXRhW2VdPWRhdGFbZV18fHtsb2FkZWQ6ITEsY3VycmVudERhdGE6ZGVlcEZyZWV6ZShbXSl9KX0scHJvdG90eXBlQWNjZXNzb3JzPXtkYXRhOntjb25maWd1cmFibGU6ITB9fTtTdG9yZS5wcm90b3R5cGUuYWN0aW9ucz1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKCFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5hY3Rpb25EZWZpbml0aW9ucyYmT2JqZWN0LmtleXModGhpcy5hY3Rpb25EZWZpbml0aW9ucyl8fFtdO3ZhciBuPU9iamVjdC5rZXlzKGUpO3RoaXMuYWN0aW9uRGVmaW5pdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmFjdGlvbkRlZmluaXRpb25zfHx7fSxlKTtmb3IodmFyIHI9ZnVuY3Rpb24oZSxyKXsoZnVuY3Rpb24oZSl7dGhpc1tlXT1mdW5jdGlvbih0KXt2YXIgbj1yLmNhbGwodGhpcyxkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEsdCxiaW5kKHRoaXMuc2V0U3RhdGUsdGhpcyxlKSk7dm9pZCAwIT09biYmdGhpcy5zZXRTdGF0ZShuLGUpfS5iaW5kKHRoaXMpfSkuY2FsbCh0LG5bZV0pfSxvPTAsaT12b2lkIDA7aT1lW25bb11dLG88bi5sZW5ndGg7bys9MSlyKG8saSk7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYWN0aW9uRGVmaW5pdGlvbnMpfSxwcm90b3R5cGVBY2Nlc3NvcnMuZGF0YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZGF0YVt0aGlzLm5hbWVdJiZkYXRhW3RoaXMubmFtZV0ubG9hZGVkP2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YTpudWxsfSxTdG9yZS5wcm90b3R5cGUubG9hZGVkPWZ1bmN0aW9uKCl7dmFyIGU9T2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBkYXRhW2VdLmxvYWRlZH0pLmxlbmd0aDtpZihlPT09T2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoJiYhZGF0YS5fX3RyaWdnZXJlZCl7dmFyIHQ9e307T2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGUpe3RbZV09ZGF0YVtlXS5jdXJyZW50RGF0YS50b0pTKCl9KSxkYXRhLl9fdHJpZ2dlcmVkPSEwLHRyaWdnZXIkMShcImdsb2JhbDpkYXRhLWxvYWRlZFwiLHQpfX0sU3RvcmUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKT09PVN0b3JlLnByb3RvdHlwZSYmKGRhdGE9c2NvcGUkMS5fX2dsYXNzYmlsU3RvcmVEYXRhPXt9LHJlc2V0RXZlbnRzKCksITApfSxTdG9yZS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cInNldFN0YXRlXCIpLGRhdGFbdGhpcy5uYW1lXS5sb2FkZWQ9ITAsKGU9ZGVlcEZyZWV6ZShlKSkhPT1kYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEmJihkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGE9ZSx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEsdCkpLHRoaXMubG9hZGVkKCl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0b3JlLnByb3RvdHlwZSxwcm90b3R5cGVBY2Nlc3NvcnMpLG1vZHVsZS5leHBvcnRzPVN0b3JlO1xuIiwidmFyIHJlamVjdERlZmF1bHQgPSBmdW5jdGlvbiByZWplY3REZWZhdWx0KGVycm9yKXtcblx0dGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCBwcm9taXNlOiAnICsgZXJyb3IpO1xufTtcbnZhciBlbXB0eUZ1bmMgPSBmdW5jdGlvbigpe307XG5cbmZ1bmN0aW9uIE5vd1Byb21pc2UoZm4pIHtcblx0dmFyIHJlc29sdmVWYWx1ZSwgcmVqZWN0VmFsdWU7XG5cblx0dGhpcy50aGVuID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdEZuO1xuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNGbiwgcmVqRm4pIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqRm4gIT09ICdmdW5jdGlvbicpIHJlakZuID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdGlmICh0eXBlb2YgcmVzRm4gIT09ICdmdW5jdGlvbicpIHJlc0ZuID0gZW1wdHlGdW5jO1xuXHRcdFx0aWYgKCFyZWplY3RWYWx1ZSkge1xuXHRcdFx0XHRyZXNGbihyZXNvbHZlKHJlc29sdmVWYWx1ZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHRcdFx0cmVqRm4ocmVqZWN0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHR0aGlzLmNhdGNoID0gZnVuY3Rpb24ocmVqZWN0KSB7XG5cdFx0aWYgKHJlamVjdFZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlc29sdmVGbihkYXRhKSB7XG5cdFx0cmVzb2x2ZVZhbHVlID0gZGF0YTtcblx0fVxuXHRmdW5jdGlvbiByZWplY3RGbihkYXRhKSB7XG5cdFx0cmVqZWN0VmFsdWUgPSBkYXRhIHx8ICdFcnJvcic7XG5cdH1cblx0Zm4ocmVzb2x2ZUZuLCByZWplY3RGbik7XG59XG5cbk5vd1Byb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZXNvbHZlKHZhbHVlKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UuYWxsID0gZnVuY3Rpb24odmFsdWVzKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcblx0XHRcdGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vd1Byb21pc2UpIHtcblx0XHRcdFx0ZW50cnkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goZW50cnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gTm93UHJvbWlzZSA6IFByb21pc2U7XG5tb2R1bGUuZXhwb3J0cy5Ob3dQcm9taXNlID0gTm93UHJvbWlzZTsiLCJ2YXIgTm93UHJvbWlzZSA9IHJlcXVpcmUoJ25vdy1wcm9taXNlJyk7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUoKSB7XG5cdHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgfHwgIXByb2Nlc3MuYnJvd3Nlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Ym9keTogbnVsbFxuXHR9O1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Zm9yICh2YXIgYWxsIGluIGRlZmF1bHRPcHRpb25zKSB7XG5cdFx0aWYgKCFvcHRpb25zW2FsbF0pIG9wdGlvbnNbYWxsXSA9IGRlZmF1bHRPcHRpb25zW2FsbF07XG5cdH1cblx0aWYgKGlzQnJvd3NlcigpKSB7XG5cdFx0Ly8gYnJvd3NlciBjb250ZXh0XG5cdFx0aWYgKG9wdGlvbnMuYnJvd3NlckJhc2UpIHtcblx0XHRcdHVybCA9IG9wdGlvbnMuYnJvd3NlckJhc2UgKyB1cmw7XG5cdFx0XHRkZWxldGUgb3B0aW9ucy5icm93c2VyQmFzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIG9wdGlvbnMpO1xuXHR9IGVsc2UgaWYgKGlzTm9kZSgpKSB7XG5cdFx0Ly8gbm9kZUpTIGNvbnRleHRcblx0XHR2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblx0XHR2YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuXHRcdGlmICh1cmwubWF0Y2goLzpcXC9cXC8vKSkge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC8oW146L10rKVsvOl0uKiQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucG9ydCA9IHBhcnNlSW50KHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSs6KFxcZCspXFwvLiokLywgJyQxJykgfHwgdXJsLm1hdGNoKC9eaHR0cHM6LykgPyAnNDQzJyA6ICc4MCcsIDEwKTtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSsoPzo6XFxkKyk/KFxcLy4qKSQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSB1cmwucmVwbGFjZSgvXihcXHcrOilcXC9cXC8uKiQvLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9ICdsb2NhbGhvc3QnO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gODg4ODtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybDtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSAnaHR0cDonO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcblx0XHRcdFx0bGV0IGJvZHkgPSAnJztcblx0XHRcdFx0cmVzLm9uKCdkYXRhJywgY2h1bmsgPT4gYm9keSArPSBjaHVuayk7XG5cdFx0XHRcdHJlcy5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA8IDMwMCAmJiByZXMuc3RhdHVzQ29kZSA+PSAyMDApIHtcblx0XHRcdFx0XHRcdGxldCByZXNwb25zZSA9IHtcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXNNZXNzYWdlOiByZXMuc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dGV4dDogKCkgPT4gYm9keSxcblx0XHRcdFx0XHRcdFx0anNvbjogKCkgPT4gSlNPTi5wYXJzZShib2R5KVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmVxLm9uKCdlcnJvcicsIHJlamVjdCk7XG5cdFx0XHRpZiAob3B0aW9ucy5ib2R5KSB7XG5cdFx0XHRcdHJlcS53cml0ZShvcHRpb25zLmJvZHkpO1xuXHRcdFx0fVxuXHRcdFx0cmVxLmVuZCgpO1xuXHRcdH0pO1xuXHR9XG59OyIsImltcG9ydCByb3V0ZUltcG9ydHMgZnJvbSAnLi4vcm91dGVzLmpzb24nO1xubGV0IHJvdXRlcyA9IHJvdXRlSW1wb3J0cztcbmxldCBjdXJyZW50Um91dGUgPSBudWxsO1xuXG5mdW5jdGlvbiBvcGVuUGFnZShyb3V0ZSkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG5cdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocm91dGUuY29tcG9uZW50KTtcblx0ZWwucHJvcHMgPSByb3V0ZS5kYXRhO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoZWwpO1xuXHRpZiAocm91dGUudGl0bGUpIHtcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LnRpdGxlID0gcm91dGUudGl0bGUpO1xuXHR9XG5cblx0d2luZG93Llppbm8uaW1wb3J0LmNhbGwoe30sICcvJyArIHJvdXRlLmNvbXBvbmVudCArICcuanMnKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnN0YXRlICYmIG9wZW5QYWdlKGV2ZW50LnN0YXRlKTtcblx0fSwgZmFsc2UpO1xuXHR3aW5kb3cucG9wc3RhdGVBdHRhY2hlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0Um91dGVzKG5ld1JvdXRlcykge1xuXHRcdHJvdXRlcyA9IG5ld1JvdXRlcztcblx0fSxcblxuXHRyb3V0ZShwYXRoKSB7XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGRpcmVjdCBtYXRjaCwganVzdCByZXR1cm4gaXRcblx0XHRpZiAocm91dGVzW3BhdGhdKSByZXR1cm4gcm91dGVzW3BhdGhdO1xuXG5cdFx0Ly8gaWYgd2UgbmVlZCBtb3JlIGRldGFpbGVkIGZpbHRlcmluZy4uLlxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcChyb3V0ZSA9PiB7XG5cdFx0XHRsZXQgbmFtZXMgPSBbJyddO1xuXHRcdFx0bGV0IHJvdXRlRXhwcmVzc2lvbiA9IHJvdXRlLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86KFthLXpdKykvZywgKGcsIG5hbWUpID0+IHtcblx0XHRcdFx0bmFtZXMucHVzaChuYW1lKTtcblx0XHRcdFx0cmV0dXJuICcoLio/KSc7XG5cdFx0XHR9KS5yZXBsYWNlKC9cXCR8XFxeL2csICdcXFxcJCYnKTtcblx0XHRcdHJvdXRlRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoJ14nICsgcm91dGVFeHByZXNzaW9uICsgJyQnKTtcblx0XHRcdGxldCByZXN1bHQgPSByb3V0ZUV4cHJlc3Npb24uZXhlYyhwYXRoKTtcblx0XHRcdGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRsZXQgZGF0YSA9IHt9O1xuXHRcdFx0bmFtZXMuc2xpY2UoMSkuZm9yRWFjaCgobmFtZSwgaWR4KSA9PiB7XG5cdFx0XHRcdGRhdGFbbmFtZV0gPSByZXN1bHRbaWR4ICsgMV07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3V0ZXNbcm91dGVdLCB7ZGF0YX0pO1xuXHRcdH0pLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0KVswXSB8fCBmYWxzZTtcblx0fSxcblxuXHRnZXRDdXJyZW50KCkge1xuXHRcdHJldHVybiBjdXJyZW50Um91dGU7XG5cdH0sXG5cblx0Z2V0VXJsKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgcm91dGUgPSBPYmplY3Qua2V5cyhyb3V0ZXMpLmZpbHRlcihyb3V0ZSA9PiByb3V0ZXNbcm91dGVdLm5hbWUgPT09IG5hbWUpWzBdO1xuXHRcdGxldCB1cmwgPSByb3V0ZTtcblxuXHRcdGlmIChyb3V0ZSkge1xuXHRcdFx0dXJsID0gcm91dGUucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiBkYXRhICYmIGRhdGFbbmFtZV0gfHwgbnVsbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVybDtcblx0fSxcblxuXHRnb3RvKG5hbWUsIGRhdGEpIHtcblx0XHRsZXQgdXJsID0gdGhpcy5nZXRVcmwobmFtZSwgZGF0YSk7XG5cdFx0dGhpcy5vcGVuKHVybCk7XG5cdH0sXG5cblx0b3Blbih1cmwpIHtcblx0XHRsZXQgcm91dGUgPSB0aGlzLnJvdXRlKHVybCk7XG5cdFx0Y3VycmVudFJvdXRlID0gcm91dGU7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShyb3V0ZSwgbnVsbCwgdXJsKTtcblx0XHRcdG9wZW5QYWdlKHJvdXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZG8gYSByZWRpcmVjdFxuXHRcdFx0Ly8gLi4uXG5cdFx0fVxuXHR9XG59OyIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vbGliL2ZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vbGliL3JvdXRlcic7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIGZpbHRlcnMpIHtcblx0aWYgKCFmaWx0ZXJzKSBmaWx0ZXJzID0gW2ZhbHNlXTtcblx0bGV0IHJlc3VsdCA9IHtcblx0XHR0YXNrcyxcblx0XHRwcm9qZWN0czogW10sXG5cdFx0ZHVlVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKSksXG5cdFx0Y29udGV4dHM6IFtdLFxuXHRcdGZpbHRlcmVkVGFza3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcblx0XHRcdHJldHVybiBmaWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlciA9PT0gdHJ1ZSAmJiB0YXNrLmRvbmUpIHx8IChmaWx0ZXIgPT09IGZhbHNlICYmICF0YXNrLmRvbmUpIHx8ICh0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuaW5kZXhPZihmaWx0ZXIpID49IDApIHx8ICh0YXNrLnRhZ05hbWVzICYmIHRhc2sudGFnTmFtZXMuaW5kZXhPZihmaWx0ZXIpID49IDApKS5sZW5ndGggPT09IGZpbHRlcnMubGVuZ3RoO1xuXHRcdH0pLFxuXHRcdHRhZ3M6IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFncykubWFwKHRhc2sgPT4gdGFzay50YWdzLm1hcCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0udHJpbSgpKS5qb2luKCcsJykpLmpvaW4oJywnKS5zcGxpdCgnLCcpLFxuXHRcdGZpbHRlcnNcblx0fTtcblx0bGV0IHByb2plY3RzID0ge307XG5cdGxldCBjb250ZXh0cyA9IHt9O1xuXHRsZXQgZmlsdGVyZWRQcm9qZWN0cyA9IFtdO1xuXHRsZXQgZmlsdGVyZWRDb250ZXh0cyA9IFtdO1xuXHRsZXQgdGFncyA9IHt9O1xuXG5cdHRhc2tzLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG5cdFx0dGFzay5pZCA9IGlkLnRvU3RyaW5nKCk7XG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB0YWdzW3RhZ10gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzW3Byb2plY3RdICs9IDEpO1xuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gY29udGV4dHNbY29udGV4dF0gKz0gMSk7XG5cdH0pO1xuXHRyZXN1bHQuZmlsdGVyZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdHRhc2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IGZpbHRlcmVkUHJvamVjdHNbcHJvamVjdF0gKz0gMSk7XG5cdFx0dGFzay5jb250ZXh0cy5mb3JFYWNoKGNvbnRleHQgPT4gZmlsdGVyZWRDb250ZXh0c1tjb250ZXh0XSArPSAxKTtcblx0fSk7XG5cdHJlc3VsdC5maWx0ZXJlZFRhc2tzID0gcmVzdWx0LmZpbHRlcmVkVGFza3Muc29ydCgodGFza0EsIHRhc2tCKSA9PiB7XG5cdFx0bGV0IGR1ZVRhZ0EgPSB0YXNrQS50YWdzICYmIHRhc2tBLnRhZ3MuZmluZCh0YWcgPT4gdGFnLnNwbGl0KCc6JylbMF0gPT09ICdkdWUnKTtcblx0XHRsZXQgZHVlVGFnQiA9IHRhc2tCLnRhZ3MgJiYgdGFza0IudGFncy5maW5kKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSA9PT0gJ2R1ZScpO1xuXHRcdGxldCB0aGlzRXZlbmluZyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9UXFxkezJ9OlxcZHsyfS9nLCAnVDIzOjU5JykpLmdldFRpbWUoKTtcblx0XHRpZiAoZHVlVGFnQSkge1xuXHRcdFx0ZHVlVGFnQSA9IGR1ZVRhZ0Euc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jyk7XG5cdFx0XHRkdWVUYWdBID0gbmV3IERhdGUoZHVlVGFnQSkuZ2V0VGltZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdWVUYWdBID0gdGhpc0V2ZW5pbmc7XG5cdFx0fVxuXHRcdGlmIChkdWVUYWdCKSB7XG5cdFx0XHRkdWVUYWdCID0gZHVlVGFnQi5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdGR1ZVRhZ0IgPSBuZXcgRGF0ZShkdWVUYWdCKS5nZXRUaW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGR1ZVRhZ0IgPSB0aGlzRXZlbmluZztcblx0XHR9XG5cdFx0cmV0dXJuIGR1ZVRhZ0EgLSBkdWVUYWdCO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblx0cmVzdWx0LmZpbHRlcmVkUHJvamVjdHMgPSBPYmplY3Qua2V5cyhmaWx0ZXJlZFByb2plY3RzKTtcblx0cmVzdWx0LmZpbHRlcmVkQ29udGV4dHMgPSBPYmplY3Qua2V5cyhmaWx0ZXJlZENvbnRleHRzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSB7XG5cdGlmICghZG9uZU9ubHkgJiYgdGFzay5kb25lIHx8IGRvbmVPbmx5ICYmICF0YXNrLmRvbmUpIHJldHVybiAnJztcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCAnICsgdGFzay5kb25lLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA6ICcnLFxuXHRcdHRhc2sucHJpb3JpdHkgfHwgJycsXG5cdFx0dGFzay50ZXh0LnRyaW0oKSxcblx0XHR0YXNrLmxpbmtzICYmIHRhc2subGlua3MubWFwKGxpbmsgPT4gbGluay51cmwpLmpvaW4oJyAnKSxcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuam9pbignICcpLFxuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5qb2luKCcgJyksXG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5qb2luKCcgJylcblx0XS5qb2luKCcgJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodGFza3MsIGRvbmVPbmx5KSB7XG5cdHJldHVybiB0YXNrcy5tYXAodGFzayA9PiBzdHJpbmdpZnlUYXNrKHRhc2ssIGRvbmVPbmx5KSkuam9pbignXFxuJykucmVwbGFjZSgvXFxuKy9nLCAnXFxuJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFzayh0YXNrLCBpZCkge1xuXHRsZXQgcHJvamVjdHMgPSB0YXNrLm1hdGNoKC9cXHMoXFwrXFx3KykvZyk7XG5cdGxldCBwcmlvcml0eSA9IHRhc2subWF0Y2goL1xccz8oXFwoW0EtWl1cXCkpXFxzKy9nKTtcblx0bGV0IGNvbnRleHRzID0gdGFzay5tYXRjaCgvXFxzKEBcXHcrKS9nKTtcblx0bGV0IHRhZ3MgPSB0YXNrLm1hdGNoKC9cXHMoXFx3KzpbXFx3LDotXSspL2cpO1xuXHRsZXQgdGV4dCA9IHRhc2sucmVwbGFjZSgvKD86XFxzKig/OlxcKFtBLVpdXFwpKVxccyspfCg/Olxcc1xcK1xcdyspfCg/Olxcc0BcXHcrKXwoPzpcXGIoPzpcXHcrOltcXHcsOi1dKykpL2csICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuXHRsZXQgbGlua3MgPSB0ZXh0Lm1hdGNoKC9cXGJodHRwcz86XFwvXFwvW14gXSsvZyk7XG5cdHByb2plY3RzID0gcHJvamVjdHMgJiYgcHJvamVjdHMubWFwKHByb2plY3QgPT4gcHJvamVjdC50cmltKCkpO1xuXHRjb250ZXh0cyA9IGNvbnRleHRzICYmIGNvbnRleHRzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudHJpbSgpKTtcblx0dGFncyA9IHRhZ3MgJiYgdGFncy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRyaW0oKSk7XG5cdGxpbmtzID0gbGlua3MgJiYgbGlua3MubWFwKGxpbmsgPT4ge1xuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UobGluaywgJycpLnRyaW0oKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXJsOiBsaW5rLFxuXHRcdFx0bmFtZTogbGluay5tYXRjaCgvaHR0cHM/OlxcL1xcLyhbXi9dKykvKVsxXVxuXHRcdH07XG5cdH0pIHx8IFtdO1xuXHRsZXQgdGFza09iamVjdCA9IHtcblx0XHRpZCxcblx0XHR0ZXh0LFxuXHRcdHByaW9yaXR5OiBwcmlvcml0eSAmJiBwcmlvcml0eS50b1N0cmluZygpLnRyaW0oKSB8fCAnJyxcblx0XHRwcm9qZWN0cyxcblx0XHRjb250ZXh0cyxcblx0XHR0YWdzLFxuXHRcdHRhZ05hbWVzOiB0YWdzICYmIHRhZ3MubWFwKHRhZyA9PiB0YWcuc3BsaXQoJzonKVswXSkgfHwgW10sXG5cdFx0bGlua3MsXG5cdFx0dG9TdHJpbmc6ICgpID0+IHN0cmluZ2lmeVRhc2sodGFza09iamVjdClcblx0fTtcblxuXHRyZXR1cm4gdGFza09iamVjdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEb25lVGFzayh0YXNrLCBpZCkge1xuXHRsZXQgZG9uZVJlZ0V4ID0gL154XFxzKyhcXGQrLVxcZCstXFxkKylcXHMrLztcblx0bGV0IGRvbmVEYXRlID0gdGFzay5tYXRjaChkb25lUmVnRXgpO1xuXHRsZXQgdGFza09iamVjdCA9IHBhcnNlVGFzayh0YXNrLnJlcGxhY2UoZG9uZURhdGUgJiYgZG9uZURhdGVbMF0gfHwgJ19fQ0FOTk9UX0JFX0ZPVU5EX0RFQURCRUVGX18nLCAnJyksIGlkKTtcblx0dGFza09iamVjdC5kb25lID0gZG9uZURhdGUgJiYgbmV3IERhdGUoZG9uZURhdGVbMV0pIHx8IGZhbHNlO1xuXHRyZXR1cm4gdGFza09iamVjdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUYXNrTGlzdCh0YXNrTGlzdCkge1xuXHRsZXQgdGFza3MgPSBbXTtcblx0aWYgKCF0YXNrTGlzdCkgcmV0dXJuIHRhc2tzO1xuXHR0YXNrTGlzdC5zcGxpdCgnXFxuJykuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHRpZiAodGFzaykge1xuXHRcdFx0dGFza3MucHVzaChwYXJzZVRhc2sodGFzaywgaWQudG9TdHJpbmcoKSkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHRhc2tzO1xufVxuXG5mdW5jdGlvbiBwYXJzZURvbmVUYXNrTGlzdCh0YXNrTGlzdCkge1xuXHRsZXQgdGFza3MgPSBbXTtcblx0aWYgKCF0YXNrTGlzdCkgcmV0dXJuIHRhc2tzO1xuXHR0YXNrTGlzdC5zcGxpdCgnXFxuJykuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcblx0XHRpZiAodGFzaykge1xuXHRcdFx0dGFza3MucHVzaChwYXJzZURvbmVUYXNrKHRhc2ssIGlkLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoY3JlZGVudGlhbHMpIHtcblx0XHRzdXBlcigndGFzaycpO1xuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR0aGlzLmFjdGlvbnMoe1xuXHRcdFx0YWRkKGN1cnJlbnRTdGF0ZSwgdGFzaywgbmV4dCkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGUudG9KUygpO1xuXHRcdFx0XHRpZiAoIW5ld1N0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXNrID0gcGFyc2VUYXNrKHRhc2spO1xuXHRcdFx0XHR0YXNrLmlkID0gbmV3U3RhdGUudGFza3MubGVuZ3RoLnRvU3RyaW5nKCk7XG5cdFx0XHRcdHRhc2subW9kaWZpZWQgPSArbmV3IERhdGU7XG5cdFx0XHRcdG5ld1N0YXRlLnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZmlsdGVyKGN1cnJlbnRTdGF0ZSwgZmlsdGVyLCBuZXh0KSB7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS50b0pTKCk7XG5cdFx0XHRcdGlmICghbmV3U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbmV3U3RhdGUuZmlsdGVycykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLmZpbHRlcnMgPSBbXTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdTdGF0ZS5maWx0ZXJzLnRvSlMpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5maWx0ZXJzID0gbmV3U3RhdGUuZmlsdGVycy50b0pTKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHBvc2l0aW9uID0gbmV3U3RhdGUuZmlsdGVycy5pbmRleE9mKGZpbHRlcik7XG5cdFx0XHRcdGlmIChwb3NpdGlvbiA+PSAwKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuZmlsdGVycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5ld1N0YXRlLmZpbHRlcnMucHVzaChmaWx0ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZG8oY3VycmVudFN0YXRlLCB0YXNrSWQsIG5leHQpIHtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLnRvSlMoKTtcblx0XHRcdFx0aWYgKCFuZXdTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhc2sgPSBuZXdTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHR0YXNrLmRvbmUgPSB0YXNrLmRvbmUgPyBmYWxzZSA6IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0dGFzay5tb2RpZmllZCA9ICtuZXcgRGF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QobmV3U3RhdGUudGFza3MsIG5ld1N0YXRlLmZpbHRlcnMpO1xuXHRcdFx0XHRuZXh0KG5ld1N0YXRlKTtcblx0XHRcdFx0X3RoaXMuc2F2ZVRhc2tzKG5ld1N0YXRlKTtcblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZShjdXJyZW50U3RhdGUsIHRhc2tEYXRhLCBuZXh0KSB7XG5cdFx0XHRcdGxldCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS50b0pTKCk7XG5cdFx0XHRcdGlmICghbmV3U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gbmV3U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tEYXRhLmlkKTtcblx0XHRcdFx0aWYgKHRhc2spIHtcblx0XHRcdFx0XHR0YXNrID0gT2JqZWN0LmFzc2lnbih7aWQ6IHRhc2suaWR9LCBwYXJzZVRhc2sodGFza0RhdGEudGV4dCkpO1xuXHRcdFx0XHRcdHRhc2subW9kaWZpZWQgPSArbmV3IERhdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KG5ld1N0YXRlLnRhc2tzLCBuZXdTdGF0ZS5maWx0ZXJzKTtcblx0XHRcdFx0bmV4dChuZXdTdGF0ZSk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhuZXdTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGUoY3VycmVudFN0YXRlLCB0YXNrSWQsIG5leHQpIHtcblx0XHRcdFx0bGV0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLnRvSlMoKTtcblx0XHRcdFx0aWYgKCFuZXdTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV3U3RhdGUudGFza3MudG9KUykge1xuXHRcdFx0XHRcdG5ld1N0YXRlLnRhc2tzID0gbmV3U3RhdGUudGFza3MudG9KUygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gbmV3U3RhdGUudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cdFx0XHRcdGlmICh0YXNrKSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUudGFza3Muc3BsaWNlKG5ld1N0YXRlLnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChuZXdTdGF0ZS50YXNrcywgbmV3U3RhdGUuZmlsdGVycyk7XG5cdFx0XHRcdG5leHQobmV3U3RhdGUpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MobmV3U3RhdGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmxvYWRUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHRhc2tzKCkge1xuXHRcdGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnRhc2tzICYmIHRoaXMuZGF0YS50YXNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnRhc2tzO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHRcdGlmICghdGhpcy50YXNrcykge1xuXHRcdFx0dGhpcy5sb2FkVGFza3MoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRDcmVkZW50aWFscyh0eXBlKSB7XG5cdFx0dmFyIHRhcmdldCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3JlZGVudGlhbHMpO1xuXHRcdGlmICh0eXBlID09PSAnZG9uZScpIHtcblx0XHRcdHRhcmdldC51cmwgPSB0YXJnZXQudXJsLnJlcGxhY2UoL1xcL3RvZG9cXC50eHQkLywgJy9kb25lLnR4dCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0bG9hZFRhc2tzKCkge1xuXHRcdGxldCB0YXNrTGlzdCA9ICcnO1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKCF0aGlzLmNyZWRlbnRpYWxzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50YXNrcyAmJiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFza0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcywgdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsICdAQElOSVQnKTtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKCduZXR3b3JrLXN0YXJ0Jyk7XG5cdFx0ZmV0Y2gocm91dGVyLmdldFVybCgndGFza3MtbG9hZCcpLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0Q3JlZGVudGlhbHMoKSlcblx0XHR9KS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpLnRoZW4ob3BlbkRhdGEgPT4ge1xuXHRcdFx0cmV0dXJuIGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLWxvYWQnKSwge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRDcmVkZW50aWFscygnZG9uZScpKVxuXHRcdFx0fSkudGhlbihkb25lUmVzcG9uc2UgPT4gZG9uZVJlc3BvbnNlLmpzb24oKSkudGhlbihkb25lRGF0YSA9PiBvcGVuRGF0YS50YXNrcyArICdcXG4nICsgZG9uZURhdGEudGFza3MpO1xuXHRcdH0pLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHR0YXNrTGlzdCA9IGRhdGEgfHwgJyc7XG5cdFx0XHRsZXQgY3VycmVudFRhc2tzID0gdGhpcy50YXNrcyB8fCBbXTtcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlRG9uZVRhc2tMaXN0KHRhc2tMaXN0KTtcblx0XHRcdGxldCBpc01lcmdlZCA9IGZhbHNlO1xuXHRcdFx0dGFza3MuZm9yRWFjaCgodGFzaywgaWR4KSA9PiB7XG5cdFx0XHRcdGxldCBtYXRjaGluZ1Rhc2sgPSBjdXJyZW50VGFza3MuZmluZChjdXJyZW50VGFzayA9PiBjdXJyZW50VGFzay5pZCA9PT0gdGFzay5pZCk7XG5cdFx0XHRcdGlmIChtYXRjaGluZ1Rhc2sgJiYgdGFzay5tb2RpZmllZCA8IG1hdGNoaW5nVGFzay5tb2RpZmllZCkge1xuXHRcdFx0XHRcdHRhc2tzW2lkeF0gPSBtYXRjaGluZ1Rhc2s7XG5cdFx0XHRcdFx0aXNNZXJnZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IGNhbGN1bGF0ZURhdGFPYmplY3QodGFza3MsIF90aGlzLmRhdGEgJiYgX3RoaXMuZGF0YS5maWx0ZXJzKTtcblx0XHRcdF90aGlzLnNldFN0YXRlKG5ld1N0YXRlLCAnQEBMT0FEJyk7XG5cdFx0XHRfdGhpcy50cmlnZ2VyKCduZXR3b3JrLWVuZCcpO1xuXHRcdFx0aWYgKGlzTWVyZ2VkKSB7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhuZXdTdGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzYXZlVGFza3Moc3RhdGUpIHtcblx0XHRpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGZpbGVDb250ZW50ID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzKTtcblx0XHRsZXQgb2JqID0ge2NyZWRlbnRpYWxzOiB0aGlzLmdldENyZWRlbnRpYWxzKCksIGRhdGE6IGZpbGVDb250ZW50fTtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgZmlsZUNvbnRlbnQpO1xuXG5cdFx0aWYgKHdpbmRvdy50YXNrU3RvcmVJbnRlcnZhbCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpO1xuXHRcdH1cblx0XHRjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZXIpO1xuXHRcdHRoaXMuZGVib3VuY2VyID0gc2V0VGltZW91dCgoKCkgPT4ge1xuXHRcdFx0Ly8gc2F2ZSBvcGVuIHRhc2tzXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ25ldHdvcmstc3RhcnQnKTtcblx0XHRcdGxldCBvcGVuUHJvbWlzZSA9IGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLXNhdmUnKSwge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogYm9keVxuXHRcdFx0fSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKCgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwpO1xuXHRcdFx0XHR3aW5kb3cudGFza1N0b3JlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmxvYWRUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHJlc3BvbnNlIGZyb20gc2VydmVyOiAnLCBlcnJvcikpO1xuXG5cdFx0XHQvLyBzYXZlIGRvbmUgdGFza3Ncblx0XHRcdG9iai5jcmVkZW50aWFscyA9IHRoaXMuZ2V0Q3JlZGVudGlhbHMoJ2RvbmUnKTtcblx0XHRcdG9iai5kYXRhID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzLCB0cnVlKTtcblx0XHRcdGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXHRcdFx0bGV0IGRvbmVQcm9taXNlID0gZmV0Y2gocm91dGVyLmdldFVybCgndGFza3Mtc2F2ZScpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBib2R5XG5cdFx0XHR9KTtcblx0XHRcdFByb21pc2UuYWxsKFtvcGVuUHJvbWlzZSwgZG9uZVByb21pc2VdKS50aGVuKCgpID0+IHRoaXMudHJpZ2dlcignbmV0d29yay1lbmQnKSk7XG5cdFx0fSkuYmluZCh0aGlzKSwgMjAwMCk7XG5cdH1cblxufSIsImltcG9ydCBTdG9yZSBmcm9tICdnbGFzc2JpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3VzZXInLCB7XG5cdFx0XHRzZXRVc2VyKGN1cnJlbnRTdGF0ZSwgZGF0YSkge1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50U3RhdGUudG9KUygpLCBkYXRhKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NyZWRlbnRpYWxzJywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdH1cblxuXHRsb2FkRGF0YSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxldCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFscycpIHx8ICd7fSc7XG5cdFx0XHRcdF90aGlzLnNldFN0YXRlKEpTT04ucGFyc2UoY3JlZGVudGlhbHMpKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLnNldFN0YXRlKHt9KTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTm90aWZpZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2RlbmllZCcpIHtcblx0XHRcdE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuXHRcdFx0XHRcdHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2hlY2tEdWVUYXNrcy5iaW5kKHRoaXMpLCA2MDAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrRHVlVGFza3MoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCAvIDYwO1xuXHRcdGxldCBkdWVUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZmluZCh0YWcgPT4ge1xuXHRcdFx0XHRsZXQgZGF0ZSA9IHRhZy5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKTtcblx0XHRcdFx0aWYgKGRhdGUuaW5kZXhPZignVCcpIDwgMCkge1xuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlICsgJ1QwOTowMCcpO1xuXHRcdFx0XHRcdC8vIG5vIHRpbWUgY29tcG9uZW50LCBzbyBhbGVydCBhIGRheSBlYXJseSBhdCA5IEFNXG5cdFx0XHRcdFx0ZGF0ZSA9IGRhdGUuZ2V0VGltZSgpIC0gODY0MDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcblx0XHRcdFx0dGltZVN0YW1wID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAgLyAxMDAwIC8gNjApO1xuXHRcdFx0XHRpZiAodGltZVN0YW1wID49IG5vdyAtIDEgJiYgdGltZVN0YW1wIDw9IG5vdyArIDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pIHx8IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGR1ZVRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cdFx0XHRpZiAoIXRhc2subm90aWZpZWQpIHtcblx0XHRcdFx0dGFzay5ub3RpZmllZCA9IHRydWU7XG5cdFx0XHRcdG5ldyBOb3RpZmljYXRpb24odGFzay50ZXh0LCB7XG5cdFx0XHRcdFx0Ym9keTogdGFzay50b1N0cmluZygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0fVxuXG5cdHNldFRhc2tzKHRhc2tzKSB7XG5cdFx0dGhpcy50YXNrcyA9IHRhc2tzO1xuXHRcdGlmICh0aGlzLnRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5jaGVja0R1ZVRhc2tzLmJpbmQodGhpcyksIDYwMDAwKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnbGFzc2JpbERldlRvb2xzKHN0b3JlKSB7XG5cdHZhciBleHRlbnNpb24gPSB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gfHwgd2luZG93LnRvcC5kZXZUb29sc0V4dGVuc2lvbjtcblx0dmFyIGlnbm9yZVN0YXRlID0gZmFsc2U7XG5cblx0aWYgKCFleHRlbnNpb24pIHtcblx0XHRjb25zb2xlLndhcm4oJ1BsZWFzZSBpbnN0YWxsL2VuYWJsZSB0aGUgUmVkdXggZGV2dG9vbHMgZXh0ZW5zaW9uLicpO1xuXHRcdHN0b3JlLmRldnRvb2xzID0gbnVsbDtcblxuXHRcdHJldHVybiBzdG9yZTtcblx0fVxuXG5cdGlmIChzdG9yZS5kZXZ0b29scykgcmV0dXJuIHN0b3JlO1xuXHRzdG9yZS5kZXZ0b29scyA9IGV4dGVuc2lvbi5jb25uZWN0KHtcblx0XHRuYW1lOiBzdG9yZS5uYW1lLFxuXHRcdGZlYXR1cmVzOiB7XG5cdFx0XHRza2lwOiBmYWxzZVxuXHRcdH1cblx0fSk7XG5cdHN0b3JlLmRldnRvb2xzLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdGlmIChtZXNzYWdlLnR5cGUgPT09ICdESVNQQVRDSCcgJiYgbWVzc2FnZS5zdGF0ZSkge1xuXHRcdFx0aWYgKG1lc3NhZ2UucGF5bG9hZC50eXBlID09PSAnVE9HR0xFX0FDVElPTicpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdTa2lwcGluZyBub3QgaW1wbGVtZW50ZWQgeWV0LicpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZ25vcmVTdGF0ZSA9IG1lc3NhZ2UucGF5bG9hZC50eXBlID09PSAnSlVNUF9UT19BQ1RJT04nIHx8IG1lc3NhZ2UucGF5bG9hZC50eXBlID09PSAnSlVNUF9UT19TVEFURSc7XG5cdFx0XHRpZiAobWVzc2FnZS5zdGF0ZSA9PT0gJ3tcImxlbmd0aFwiOjB9JykgbWVzc2FnZS5zdGF0ZSA9ICdbXSc7XG5cdFx0XHRzdG9yZS5zZXRTdGF0ZShKU09OLnBhcnNlKG1lc3NhZ2Uuc3RhdGUpKTtcblx0XHR9XG5cdH0pO1xuXHRzdG9yZS5kZXZ0b29scy5pbml0KHN0b3JlLmRhdGEpO1xuXHRzdG9yZS5vbignY2hhbmdlZCcsIGZ1bmN0aW9uIChkYXRhLCBhY3Rpb25OYW1lKSB7XG5cdFx0YWN0aW9uTmFtZSA9IGFjdGlvbk5hbWUgfHwgJ3NldFN0YXRlJztcblx0XHRpZiAoIWlnbm9yZVN0YXRlKSB7XG5cdFx0XHRzdG9yZS5kZXZ0b29scy5zZW5kKGFjdGlvbk5hbWUsIGRhdGEudG9KUygpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWdub3JlU3RhdGUgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBzdG9yZTtcbn1cbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdG9kby1hcHAuY3NzJztcbmltcG9ydCBUYXNrU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3Rhc2stc3RvcmUnO1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvdXNlci1zdG9yZSc7XG5pbXBvcnQgVGFza05vdGlmaWVyIGZyb20gJy4uL2xpYi90YXNrLW5vdGlmaWVyJztcbmltcG9ydCBkZXZ0b29scyBmcm9tICdnbGFzc2JpbC9kZXZ0b29scyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9BcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzIHx8IHt9O1xuXHRcdC8vIGRlZmluZSBpbml0aWFsIHByb3BzXG5cdFx0X3RoaXMucHJvcHMgPSB7XG5cdFx0XHRuYXZWaXNpYmxlOiBmYWxzZSxcblx0XHRcdGFjdGl2ZU5ldHdvcms6IGZhbHNlLFxuXHRcdFx0ZmlsdGVyczogZmFsc2UsXG5cdFx0XHR0YXNrczogW10sXG5cdFx0XHRmaWx0ZXJlZFRhc2tzOiBbXSxcblx0XHRcdGZpbHRlcmVkQ29udGV4dHM6IFtdLFxuXHRcdFx0ZmlsdGVyZWRQcm9qZWN0czogW10sXG5cdFx0XHRwcm9qZWN0czogW10sXG5cdFx0XHRkdWVUYXNrczogW10sXG5cdFx0XHRjb250ZXh0czogW10sXG5cdFx0XHR0YWdzOiBbXSxcblx0XHRcdGNyZWRlbnRpYWxzOiB7fVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1hcHBcIj5cblx0XHRcdFx0PHRvZG8taGVhZGVyIGRhdGEtY3JlZGVudGlhbHM9e2RhdGEucHJvcHMuY3JlZGVudGlhbHN9IGRhdGEtbmV0d29yaz17ZGF0YS5wcm9wcy5hY3RpdmVOZXR3b3JrID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfS8+XG5cdFx0XHRcdDx0b2RvLW5hdiBjbGFzcz17ZGF0YS5wcm9wcy5uYXZWaXNpYmxlID8gJ2FjdGl2ZScgOiAnJ30gZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5maWx0ZXJlZFByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmZpbHRlcmVkQ29udGV4dHN9IGRhdGEtdGFncz17ZGF0YS5wcm9wcy50YWdzfSBkYXRhLWZpbHRlcnM9e2RhdGEucHJvcHMuZmlsdGVyc30vPlxuXHRcdFx0XHQ8dG9kby1saXN0IGRhdGEtc3RvcmU9e3RoaXMudGFza1N0b3JlfSBkYXRhLXByb2plY3RzPXtkYXRhLnByb3BzLnByb2plY3RzfSBkYXRhLWNvbnRleHRzPXtkYXRhLnByb3BzLmNvbnRleHRzfSBkYXRhLXRhc2tzPXtkYXRhLnByb3BzLmZpbHRlcmVkVGFza3N9IGRhdGEtZmlsdGVycz17ZGF0YS5wcm9wcy5maWx0ZXJzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHN0eWxlcygpIHsgcmV0dXJuIHN0eWxlczsgfVxuXHRnZXQgZXZlbnRzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQndG9kby1uYXYnOiB7ZmlsdGVyKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuZ2V0SG9zdCgpLnNldFByb3BzKCduYXZWaXNpYmxlJywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS50YXNrU3RvcmUuZmlsdGVyKGV2ZW50LmRldGFpbCk7XG5cdFx0XHR9LCBjbG9zZSgpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ25hdlZpc2libGUnLCBmYWxzZSk7XG5cdFx0XHR9fSxcblx0XHRcdCd0b2RvLWhlYWRlcic6IHtsb2dpbihldmVudCkge1xuXHRcdFx0XHR0aGlzLmdldEhvc3QoKS51c2VyU3RvcmUuc2V0VXNlcihldmVudC5kZXRhaWwpO1xuXHRcdFx0fSwgbG9nb2FjdGlvbigpIHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ25hdlZpc2libGUnLCB0cnVlKTtcblx0XHRcdH19XG5cdFx0fTtcblx0fVxuXG5cdG9ubW91bnQoeikge1xuXHRcdHouaW1wb3J0KCcuL2R1bWIvdG9kby1oZWFkZXIuanMnKTtcblx0XHR6LmltcG9ydCgnLi9kdW1iL3RvZG8tbmF2LmpzJyk7XG5cdFx0ei5pbXBvcnQoJy4vc21hcnQvdG9kby1saXN0LmpzJyk7XG5cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXG5cdFx0dGhpcy50YXNrU3RvcmUgPSB6LmlzQnJvd3NlciA/IGRldnRvb2xzKG5ldyBUYXNrU3RvcmUoKSkgOiBuZXcgVGFza1N0b3JlKCk7XG5cdFx0dGhpcy51c2VyU3RvcmUgPSB6LmlzQnJvd3NlciA/IGRldnRvb2xzKG5ldyBVc2VyU3RvcmUoKSkgOiBuZXcgVXNlclN0b3JlKCk7XG5cdFx0dGhpcy5ub3RpZmllciA9IG5ldyBUYXNrTm90aWZpZXIoKTtcblxuXHRcdHRoaXMudGFza1N0b3JlLm9uKCduZXR3b3JrLXN0YXJ0JywgdGhpcy5uZXR3b3JrU3RhcnQgPSAoKSA9PiB7XG5cdFx0XHRfdGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2FjdGl2ZU5ldHdvcmsnLCB0cnVlKTtcblx0XHR9KTtcblx0XHR0aGlzLnRhc2tTdG9yZS5vbignbmV0d29yay1lbmQnLCB0aGlzLm5ldHdvcmtFbmQgPSAoKSA9PiB7XG5cdFx0XHRfdGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2FjdGl2ZU5ldHdvcmsnLCBmYWxzZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy50YXNrU3RvcmUub24oJ2NoYW5nZWQnLCB0aGlzLnRhc2tzQ2hhbmdlZCA9IGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5ub3RpZmllci5zZXRUYXNrcyhkYXRhLnRhc2tzLnRvSlMoKS5maWx0ZXIodGFzayA9PiB0YXNrLnRhZ3MgJiYgdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5zcGxpdCgnOicpWzBdID09PSAnZHVlJykpKTtcblx0XHRcdHNldFRpbWVvdXQoKCgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YS50b0pTKCkpO1xuXHRcdFx0fSkuYmluZChfdGhpcyksIDE1MCk7XG5cdFx0fSk7XG5cdFx0dGhpcy51c2VyU3RvcmUub24oJ2NoYW5nZWQnLCB0aGlzLnVzZXJzQ2hhbmdlZCA9IGRhdGEgPT4ge1xuXHRcdFx0aWYgKGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLnRhc2tTdG9yZS5zZXRDcmVkZW50aWFscyhkYXRhKTtcblx0XHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoJ2NyZWRlbnRpYWxzJywgZGF0YSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMudXNlclN0b3JlLmRhdGEpIHtcblx0XHRcdHRoaXMudXNlcnNDaGFuZ2VkKHRoaXMudXNlclN0b3JlLmRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdG9udW5tb3VudCgpIHtcblx0XHR0aGlzLnRhc2tTdG9yZS5vZmYoJ2NoYW5nZWQnLCB0aGlzLnRhc2tzQ2hhbmdlZCk7XG5cdFx0dGhpcy51c2VyU3RvcmUub2ZmKCdjaGFuZ2VkJywgdGhpcy51c2Vyc0NoYW5nZWQpO1xuXHRcdHRoaXMudGFza1N0b3JlLm9mZignbmV0d29yay1zdGFydCcsIHRoaXMubmV0d29ya1N0YXJ0KTtcblx0XHR0aGlzLnRhc2tTdG9yZS5vZmYoJ25ldHdvcmstZW5kJywgdGhpcy5uZXR3b3JrRW5kKTtcblx0fVxufSJdLCJuYW1lcyI6WyJnbG9iYWwiLCJOb3dQcm9taXNlIiwiY29uc3QiLCJsZXQiLCJzdXBlciIsImZpbHRlciIsInRoaXMiLCJTdG9yZSIsImRldnRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPQSxjQUFNLENBQUNBLGNBQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENB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
