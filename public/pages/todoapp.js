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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main = createCommonjsModule(function (module) {
"use strict";var eventRegistry={};function trigger(t,e){if(eventRegistry[t])for(var r,a=0,n=eventRegistry[t].length;r=eventRegistry[t][a],a<n;a+=1){if(!1===r(e))break}}function on(t,e){eventRegistry[t]||(eventRegistry[t]=[]),eventRegistry[t].push(e);}function off(t,e){if(eventRegistry[t])if("function"==typeof e){var r=eventRegistry[t].indexOf(e);r>=0&&eventRegistry[t].splice(r,1);}else eventRegistry[t]=[];}function one(t,e){var r=function(a){off(t,r),e(a);};on(t,r);}var events=Object.freeze({trigger:trigger,on:on,off:off,one:one}),data={},trigger$1=trigger;function mirror(){return this}function deepFreeze(t){if(null===t||"function"==typeof t.toJS||"object"!=typeof t)return t;for(var e=Object.getOwnPropertyNames(t),r={toJS:{value:mirror.bind(t)}},a=function(t,a){r[e[t]]={enumerable:!0,get:function(){return deepFreeze(a)},set:function(r){throw new Error('Cannot change property "'+e[t]+'" to "'+r+'" of an immutable object')}};},n=0,o=void 0;o=t[e[n]],n<e.length;n+=1)a(n,o);return Object.freeze(Object.create(Object.getPrototypeOf(t),r))}var Store=function(t,e){var r=this;if(this.name=t||"unnamed",this.triggered=!1,Object.keys(events).forEach(function(e){r[e]=function(r,a){r.indexOf(":")>=0?events[e](r,a):events[e](t+"-store:"+r,a);};}),"object"==typeof e)for(var a=Object.keys(e),n=function(e,n){r[a[e]]=function(e){var r=n(data[t].currentData.toJS(),e,this.next.bind(this));r&&this.next(r);}.bind(r);},o=0,i=void 0;i=e[a[o]],o<a.length;o+=1)n(o,i);t&&(data[t]=data[t]||{loaded:!1,currentData:deepFreeze([]),historicData:[]});},prototypeAccessors={data:{configurable:!0}};prototypeAccessors.data.get=function(){return data[this.name]?data[this.name].currentData.toJS():null},Store.prototype.loaded=function(){var t=Object.keys(data).filter(function(t){return data[t].loaded}).length;if(t===Object.keys(data).length&&!this.triggered){var e={};Object.keys(data).map(function(t){e[t]=data[t].currentData.toJS();}),this.triggered=!0,trigger$1("global:data-loaded",e);}},Store.prototype.next=function(t){if(data[this.name].loaded=!0,(t=deepFreeze(t))!==data[this.name].currentData){for(data[this.name].historicData.push(data[this.name].currentData);data[this.name].historicData.length>10;)data[this.name].historicData.shift();data[this.name].currentData=t,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS());}this.loaded();},Store.prototype.previous=function(){data[this.name].historicData.length<1||(newState=data[this.name].historicData.pop(),data[this.name].currentData=newState,trigger$1(this.name+"-store:changed",data[this.name].currentData.toJS()));},Object.defineProperties(Store.prototype,prototypeAccessors),module.exports=Store;
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
					if (res.statusCode === 200) {
						var response = {
							json: function () { return JSON.parse(body); },
							text: function () { return body; }
						};
						resolve(response);
					} else {
						reject(body);
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
	"/": {"title":"Welcome!","component":"todoapp","name":"home"},
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

function calculateDataObject(tasks) {
	var result = {
		tasks: tasks,
		projects: [],
		dueTasks: tasks.filter(function (task) { return task.tags.find(function (tag) { return tag.due; }); }),
		contexts: [],
		tags: []
	};
	var projects = {};
	var contexts = {};
	var tags = {};

	tasks.forEach(function (task) {
		task.projects && task.projects.forEach(function (project) { return projects[project] += 1; });
		task.contexts && task.contexts.forEach(function (context) { return contexts[context] += 1; });
		task.tags && task.tags.forEach(function (tag) { return tags[tag] += 1; });
	});

	result.projects = Object.keys(projects);
	result.contexts = Object.keys(contexts);
	result.tags = Object.keys(tags);

	return result;
}

function stringifyTask(task) {
	return [
		task.done ? 'x' : '',
		task.priority || '',
		task.text,
		task.projects && task.projects.join(' '),
		task.contexts && task.contexts.join(' '),
		task.tags && task.tags.join(' ')
	].join(' ');
}

function stringify(tasks) {
	return tasks.map(function (task) { return stringifyTask(task); }).join('\n');
}

function parseTask(task) {
	var projects = task.match(/(\+\w+)/g);
	var priority = task.match(/\s*(\([A-Z]\))\s+/);
	var contexts = task.match(/(@\w+)/g);
	var tags = task.match(/\b(\w+):[\w,]+/g);
	var text = task.replace(/(?:\s*(?:\([A-Z]\))\s+)|(?:\+\w+)|(?:@\w+)|(?:\b(?:\w+):[\w,]+)/g, '');
	var taskObject = {
		text: text,
		priority: priority,
		projects: projects,
		contexts: contexts,
		tags: tags,
		toString: function () { return stringifyTask(taskObject); }
	};

	return taskObject;
}

function parseTaskList(taskList) {
	var tasks = [];
	taskList.split('\n').forEach(function (task) {
		if (task) {
			tasks.push(parseTask(task));
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
				task.id = currentState.tasks.length;
				currentState.tasks.push(task);
				currentState = calculateDataObject(currentState.tasks);
				_this.saveTasks(currentState);
				next(currentState);
			},

			do: function do$1(currentState, taskId, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				var task = currentState.tasks.find(function (task) { return task.id === taskId; });
				if (task) {
					task.done = true;
				}
				currentState = calculateDataObject(currentState.tasks);
				_this.saveTasks(currentState);
				next(currentState);
			},

			update: function update(currentState, taskData, next) {
				if (!currentState.tasks) {
					currentState.tasks = [];
				}
				var task = currentState.tasks.find(function (task) { return task.id === taskData.id; });
				if (task) {
					task = Object.assign({id: task.id}, parseTask(taskData.text));
				}
				currentState = calculateDataObject(currentState.tasks);
				_this.saveTasks(currentState);
				next(currentState);
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
		if (this.data.tasks.length > 0) {
			this.saveTasks(this.data);
		} else {
			this.loadTasks();
		}
	};

	TaskStore.prototype.loadTasks = function loadTasks () {
		var this$1 = this;

		var taskList = '';
		if (typeof window !== 'undefined') {
			taskList = localStorage.getItem('todos');
		}
		fetch(router.getUrl('tasks-load'), {method: 'post', body: JSON.stringify(this.credentials)}).then(function (data) { return data.text(); }).then(function (data) {
			taskList = data;
			var tasks = parseTaskList(taskList);
			var newState = calculateDataObject(tasks);
			this$1.saveTasks(newState);
			this$1.next(newState);
		});
	};

	TaskStore.prototype.saveTasks = function saveTasks (state) {
		var this$1 = this;

		var fileContent = stringify(state.tasks);
		localStorage.setItem('todos', fileContent);

		clearTimeout(this.debouncer);
		this.debouncer = setTimeout(function () {
			fetch(router.getUrl('tasks-save'), {method: 'post', body: JSON.stringify({credentials:this$1.credentials, data: fileContent})}).then(function (data) { return data.text(); }).then(function (data) {
				var taskList = data;
				var tasks = parseTaskList(taskList);
				var newState = calculateDataObject(tasks);
				this$1.next(newState);
			});
		}, 2000);
	};

	return TaskStore;
}(main));

var UserStore = (function (Store) {
	function UserStore() {
		Store.call(this, 'user', {
			setUser: function setUser(currentState, data) {
				currentState = Object.assign({}, currentState, data);
				return currentState;
			}
		});

		this.loadData();
	}

	if ( Store ) UserStore.__proto__ = Store;
	UserStore.prototype = Object.create( Store && Store.prototype );
	UserStore.prototype.constructor = UserStore;

	UserStore.prototype.loadData = function loadData () {
		if (typeof window !== 'undefined') {
			var credentials = localStorage.getItem('credentials') || '{}';
			this.next(JSON.parse(credentials));
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
		projects: [],
		dueTasks: [],
		contexts: [],
		tags: []
	};
};

TodoApp.prototype.render = function render (data) {
	return (
		this.createNode( 'div', { class: "todo-app" },
				this.createNode( 'todo-header', null ),
				this.createNode( 'todo-nav', { 'data-projects': data.props.projects, 'data-contexts': data.props.contexts, 'data-tags': data.props.tags }),
				this.createNode( 'todo-list', { 'data-tasks': data.props.filteredTasks })
			)
	);
};

TodoApp.prototype.onmount = function onmount (z) {
		var this$1 = this;

	z.import('./smart/todo-header');
	//z.import('./dumb/todo-nav');
	//z.import('./dumb/todo-list');

	var taskStore = new TaskStore();
	var userStore = new UserStore();

	taskStore.on('changed', function (data) {
		this$1.getHost().setProps(data);
	});
	userStore.on('changed', function (data) {
		if (data && Object.keys(data).length > 0) {
			taskStore.setCredentials(data);
		}
	});
};

return TodoApp;

}());
	return __resultComponent;
	}
}(typeof module !== 'undefined' ? module : {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2FwcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2dsYXNzYmlsL2Rpc3QvbWFpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9ub3ctcHJvbWlzZS9pbmRleC5qcyIsIi4uLy4uL2xpYi9mZXRjaC5qcyIsIi4uLy4uL2xpYi9yb3V0ZXIuanMiLCIuLi8uLi9zdG9yZXMvdGFzay1zdG9yZS5qcyIsIi4uLy4uL3N0b3Jlcy91c2VyLXN0b3JlLmpzIiwiLi4vLi4vcGFnZXMvdG9kb2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjt2YXIgZXZlbnRSZWdpc3RyeT17fTtmdW5jdGlvbiB0cmlnZ2VyKHQsZSl7aWYoZXZlbnRSZWdpc3RyeVt0XSlmb3IodmFyIHIsYT0wLG49ZXZlbnRSZWdpc3RyeVt0XS5sZW5ndGg7cj1ldmVudFJlZ2lzdHJ5W3RdW2FdLGE8bjthKz0xKXtpZighMT09PXIoZSkpYnJlYWt9fWZ1bmN0aW9uIG9uKHQsZSl7ZXZlbnRSZWdpc3RyeVt0XXx8KGV2ZW50UmVnaXN0cnlbdF09W10pLGV2ZW50UmVnaXN0cnlbdF0ucHVzaChlKX1mdW5jdGlvbiBvZmYodCxlKXtpZihldmVudFJlZ2lzdHJ5W3RdKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe3ZhciByPWV2ZW50UmVnaXN0cnlbdF0uaW5kZXhPZihlKTtyPj0wJiZldmVudFJlZ2lzdHJ5W3RdLnNwbGljZShyLDEpfWVsc2UgZXZlbnRSZWdpc3RyeVt0XT1bXX1mdW5jdGlvbiBvbmUodCxlKXt2YXIgcj1mdW5jdGlvbihhKXtvZmYodCxyKSxlKGEpfTtvbih0LHIpfXZhciBldmVudHM9T2JqZWN0LmZyZWV6ZSh7dHJpZ2dlcjp0cmlnZ2VyLG9uOm9uLG9mZjpvZmYsb25lOm9uZX0pLGRhdGE9e30sdHJpZ2dlciQxPXRyaWdnZXI7ZnVuY3Rpb24gbWlycm9yKCl7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gZGVlcEZyZWV6ZSh0KXtpZihudWxsPT09dHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdC50b0pTfHxcIm9iamVjdFwiIT10eXBlb2YgdClyZXR1cm4gdDtmb3IodmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkscj17dG9KUzp7dmFsdWU6bWlycm9yLmJpbmQodCl9fSxhPWZ1bmN0aW9uKHQsYSl7cltlW3RdXT17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZGVlcEZyZWV6ZShhKX0sc2V0OmZ1bmN0aW9uKHIpe3Rocm93IG5ldyBFcnJvcignQ2Fubm90IGNoYW5nZSBwcm9wZXJ0eSBcIicrZVt0XSsnXCIgdG8gXCInK3IrJ1wiIG9mIGFuIGltbXV0YWJsZSBvYmplY3QnKX19fSxuPTAsbz12b2lkIDA7bz10W2Vbbl1dLG48ZS5sZW5ndGg7bis9MSlhKG4sbyk7cmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkscikpfXZhciBTdG9yZT1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXM7aWYodGhpcy5uYW1lPXR8fFwidW5uYW1lZFwiLHRoaXMudHJpZ2dlcmVkPSExLE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbihlKXtyW2VdPWZ1bmN0aW9uKHIsYSl7ci5pbmRleE9mKFwiOlwiKT49MD9ldmVudHNbZV0ocixhKTpldmVudHNbZV0odCtcIi1zdG9yZTpcIityLGEpfX0pLFwib2JqZWN0XCI9PXR5cGVvZiBlKWZvcih2YXIgYT1PYmplY3Qua2V5cyhlKSxuPWZ1bmN0aW9uKGUsbil7clthW2VdXT1mdW5jdGlvbihlKXt2YXIgcj1uKGRhdGFbdF0uY3VycmVudERhdGEudG9KUygpLGUsdGhpcy5uZXh0LmJpbmQodGhpcykpO3ImJnRoaXMubmV4dChyKX0uYmluZChyKX0sbz0wLGk9dm9pZCAwO2k9ZVthW29dXSxvPGEubGVuZ3RoO28rPTEpbihvLGkpO3QmJihkYXRhW3RdPWRhdGFbdF18fHtsb2FkZWQ6ITEsY3VycmVudERhdGE6ZGVlcEZyZWV6ZShbXSksaGlzdG9yaWNEYXRhOltdfSl9LHByb3RvdHlwZUFjY2Vzc29ycz17ZGF0YTp7Y29uZmlndXJhYmxlOiEwfX07cHJvdG90eXBlQWNjZXNzb3JzLmRhdGEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGRhdGFbdGhpcy5uYW1lXT9kYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEudG9KUygpOm51bGx9LFN0b3JlLnByb3RvdHlwZS5sb2FkZWQ9ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIGRhdGFbdF0ubG9hZGVkfSkubGVuZ3RoO2lmKHQ9PT1PYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgmJiF0aGlzLnRyaWdnZXJlZCl7dmFyIGU9e307T2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKHQpe2VbdF09ZGF0YVt0XS5jdXJyZW50RGF0YS50b0pTKCl9KSx0aGlzLnRyaWdnZXJlZD0hMCx0cmlnZ2VyJDEoXCJnbG9iYWw6ZGF0YS1sb2FkZWRcIixlKX19LFN0b3JlLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKHQpe2lmKGRhdGFbdGhpcy5uYW1lXS5sb2FkZWQ9ITAsKHQ9ZGVlcEZyZWV6ZSh0KSkhPT1kYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEpe2ZvcihkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLnB1c2goZGF0YVt0aGlzLm5hbWVdLmN1cnJlbnREYXRhKTtkYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLmxlbmd0aD4xMDspZGF0YVt0aGlzLm5hbWVdLmhpc3RvcmljRGF0YS5zaGlmdCgpO2RhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YT10LHRyaWdnZXIkMSh0aGlzLm5hbWUrXCItc3RvcmU6Y2hhbmdlZFwiLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YS50b0pTKCkpfXRoaXMubG9hZGVkKCl9LFN0b3JlLnByb3RvdHlwZS5wcmV2aW91cz1mdW5jdGlvbigpe2RhdGFbdGhpcy5uYW1lXS5oaXN0b3JpY0RhdGEubGVuZ3RoPDF8fChuZXdTdGF0ZT1kYXRhW3RoaXMubmFtZV0uaGlzdG9yaWNEYXRhLnBvcCgpLGRhdGFbdGhpcy5uYW1lXS5jdXJyZW50RGF0YT1uZXdTdGF0ZSx0cmlnZ2VyJDEodGhpcy5uYW1lK1wiLXN0b3JlOmNoYW5nZWRcIixkYXRhW3RoaXMubmFtZV0uY3VycmVudERhdGEudG9KUygpKSl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0b3JlLnByb3RvdHlwZSxwcm90b3R5cGVBY2Nlc3NvcnMpLG1vZHVsZS5leHBvcnRzPVN0b3JlO1xuIiwidmFyIHJlamVjdERlZmF1bHQgPSBmdW5jdGlvbiByZWplY3REZWZhdWx0KGVycm9yKXtcblx0dGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCBwcm9taXNlOiAnICsgZXJyb3IpO1xufTtcbnZhciBlbXB0eUZ1bmMgPSBmdW5jdGlvbigpe307XG5cbmZ1bmN0aW9uIE5vd1Byb21pc2UoZm4pIHtcblx0dmFyIHJlc29sdmVWYWx1ZSwgcmVqZWN0VmFsdWU7XG5cblx0dGhpcy50aGVuID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiByZWplY3QgIT09ICdmdW5jdGlvbicpIHJlamVjdCA9IHJlamVjdEZuO1xuXHRcdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNGbiwgcmVqRm4pIHtcblx0XHRcdGlmICh0eXBlb2YgcmVqRm4gIT09ICdmdW5jdGlvbicpIHJlakZuID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdGlmICh0eXBlb2YgcmVzRm4gIT09ICdmdW5jdGlvbicpIHJlc0ZuID0gZW1wdHlGdW5jO1xuXHRcdFx0aWYgKCFyZWplY3RWYWx1ZSkge1xuXHRcdFx0XHRyZXNGbihyZXNvbHZlKHJlc29sdmVWYWx1ZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHJlamVjdFZhbHVlKTtcblx0XHRcdFx0cmVqRm4ocmVqZWN0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHR0aGlzLmNhdGNoID0gZnVuY3Rpb24ocmVqZWN0KSB7XG5cdFx0aWYgKHJlamVjdFZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlamVjdCAhPT0gJ2Z1bmN0aW9uJykgcmVqZWN0ID0gcmVqZWN0RGVmYXVsdDtcblx0XHRcdHJlamVjdChyZWplY3RWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlc29sdmVGbihkYXRhKSB7XG5cdFx0cmVzb2x2ZVZhbHVlID0gZGF0YTtcblx0fVxuXHRmdW5jdGlvbiByZWplY3RGbihkYXRhKSB7XG5cdFx0cmVqZWN0VmFsdWUgPSBkYXRhIHx8ICdFcnJvcic7XG5cdH1cblx0Zm4ocmVzb2x2ZUZuLCByZWplY3RGbik7XG59XG5cbk5vd1Byb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZXNvbHZlKHZhbHVlKTtcblx0fSk7XG59O1xuXG5Ob3dQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn07XG5cbk5vd1Byb21pc2UuYWxsID0gZnVuY3Rpb24odmFsdWVzKSB7XG5cdHJldHVybiBuZXcgTm93UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcblx0XHRcdGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vd1Byb21pc2UpIHtcblx0XHRcdFx0ZW50cnkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goZW50cnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gTm93UHJvbWlzZSA6IFByb21pc2U7XG5tb2R1bGUuZXhwb3J0cy5Ob3dQcm9taXNlID0gTm93UHJvbWlzZTsiLCJ2YXIgTm93UHJvbWlzZSA9IHJlcXVpcmUoJ25vdy1wcm9taXNlJyk7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUoKSB7XG5cdHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgfHwgIXByb2Nlc3MuYnJvd3Nlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Ym9keTogbnVsbFxuXHR9O1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Zm9yICh2YXIgYWxsIGluIGRlZmF1bHRPcHRpb25zKSB7XG5cdFx0aWYgKCFvcHRpb25zW2FsbF0pIG9wdGlvbnNbYWxsXSA9IGRlZmF1bHRPcHRpb25zW2FsbF07XG5cdH1cblx0aWYgKGlzQnJvd3NlcigpKSB7XG5cdFx0Ly8gYnJvd3NlciBjb250ZXh0XG5cdFx0aWYgKG9wdGlvbnMuYnJvd3NlckJhc2UpIHtcblx0XHRcdHVybCA9IG9wdGlvbnMuYnJvd3NlckJhc2UgKyB1cmw7XG5cdFx0XHRkZWxldGUgb3B0aW9ucy5icm93c2VyQmFzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIG9wdGlvbnMpO1xuXHR9IGVsc2UgaWYgKGlzTm9kZSgpKSB7XG5cdFx0Ly8gbm9kZUpTIGNvbnRleHRcblx0XHR2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblx0XHR2YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuXHRcdGlmICh1cmwubWF0Y2goLzpcXC9cXC8vKSkge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC8oW146L10rKVsvOl0uKiQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucG9ydCA9IHBhcnNlSW50KHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSs6KFxcZCspXFwvLiokLywgJyQxJykgfHwgdXJsLm1hdGNoKC9eaHR0cHM6LykgPyAnNDQzJyA6ICc4MCcsIDEwKTtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybC5yZXBsYWNlKC9eXFx3KzpcXC9cXC9bXjovXSsoPzo6XFxkKyk/KFxcLy4qKSQvLCAnJDEnKTtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSB1cmwucmVwbGFjZSgvXihcXHcrOilcXC9cXC8uKiQvLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5ob3N0bmFtZSA9ICdsb2NhbGhvc3QnO1xuXHRcdFx0b3B0aW9ucy5wb3J0ID0gODg4ODtcblx0XHRcdG9wdGlvbnMucGF0aCA9IHVybDtcblx0XHRcdG9wdGlvbnMucHJvdG9jb2wgPSAnaHR0cDonO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IE5vd1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcblx0XHRcdFx0bGV0IGJvZHkgPSAnJztcblx0XHRcdFx0cmVzLm9uKCdkYXRhJywgY2h1bmsgPT4gYm9keSArPSBjaHVuayk7XG5cdFx0XHRcdHJlcy5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7XG5cdFx0XHRcdFx0XHRcdGpzb246ICgpID0+IEpTT04ucGFyc2UoYm9keSksXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICgpID0+IGJvZHlcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGJvZHkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJlcS5vbignZXJyb3InLCByZWplY3QpO1xuXHRcdFx0aWYgKG9wdGlvbnMuYm9keSkge1xuXHRcdFx0XHRyZXEud3JpdGUob3B0aW9ucy5ib2R5KTtcblx0XHRcdH1cblx0XHRcdHJlcS5lbmQoKTtcblx0XHR9KTtcblx0fVxufTsiLCJpbXBvcnQgcm91dGVJbXBvcnRzIGZyb20gJy4uL3JvdXRlcy5qc29uJztcbmxldCByb3V0ZXMgPSByb3V0ZUltcG9ydHM7XG5sZXQgY3VycmVudFJvdXRlID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlblBhZ2Uocm91dGUpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuXHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJvdXRlLmNvbXBvbmVudCk7XG5cdGVsLnByb3BzID0gcm91dGUuZGF0YTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpLmFwcGVuZENoaWxkKGVsKTtcblx0aWYgKHJvdXRlLnRpdGxlKSB7XG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy50aXRsZSA9IHJvdXRlLnRpdGxlKTtcblx0fVxuXG5cdHdpbmRvdy5aaW5vLmltcG9ydC5jYWxsKHt9LCAnLycgKyByb3V0ZS5jb21wb25lbnQgKyAnLmpzJyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LnBvcHN0YXRlQXR0YWNoZWQpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdGF0ZSAmJiBvcGVuUGFnZShldmVudC5zdGF0ZSk7XG5cdH0sIGZhbHNlKTtcblx0d2luZG93LnBvcHN0YXRlQXR0YWNoZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcblx0XHRyb3V0ZXMgPSBuZXdSb3V0ZXM7XG5cdH0sXG5cblx0cm91dGUocGF0aCkge1xuXHRcdC8vIGlmIHdlIGhhdmUgYSBkaXJlY3QgbWF0Y2gsIGp1c3QgcmV0dXJuIGl0XG5cdFx0aWYgKHJvdXRlc1twYXRoXSkgcmV0dXJuIHJvdXRlc1twYXRoXTtcblxuXHRcdC8vIGlmIHdlIG5lZWQgbW9yZSBkZXRhaWxlZCBmaWx0ZXJpbmcuLi5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAocm91dGUgPT4ge1xuXHRcdFx0bGV0IG5hbWVzID0gWycnXTtcblx0XHRcdGxldCByb3V0ZUV4cHJlc3Npb24gPSByb3V0ZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOihbYS16XSspL2csIChnLCBuYW1lKSA9PiB7XG5cdFx0XHRcdG5hbWVzLnB1c2gobmFtZSk7XG5cdFx0XHRcdHJldHVybiAnKC4qPyknO1xuXHRcdFx0fSkucmVwbGFjZSgvXFwkfFxcXi9nLCAnXFxcXCQmJyk7XG5cdFx0XHRyb3V0ZUV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKCdeJyArIHJvdXRlRXhwcmVzc2lvbiArICckJyk7XG5cdFx0XHRsZXQgcmVzdWx0ID0gcm91dGVFeHByZXNzaW9uLmV4ZWMocGF0aCk7XG5cdFx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0bGV0IGRhdGEgPSB7fTtcblx0XHRcdG5hbWVzLnNsaWNlKDEpLmZvckVhY2goKG5hbWUsIGlkeCkgPT4ge1xuXHRcdFx0XHRkYXRhW25hbWVdID0gcmVzdWx0W2lkeCArIDFdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVzW3JvdXRlXSwge2RhdGF9KTtcblx0XHR9KS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdClbMF0gfHwgZmFsc2U7XG5cdH0sXG5cblx0Z2V0Q3VycmVudCgpIHtcblx0XHRyZXR1cm4gY3VycmVudFJvdXRlO1xuXHR9LFxuXG5cdGdldFVybChuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHJvdXRlID0gT2JqZWN0LmtleXMocm91dGVzKS5maWx0ZXIocm91dGUgPT4gcm91dGVzW3JvdXRlXS5uYW1lID09PSBuYW1lKVswXTtcblx0XHRsZXQgdXJsID0gcm91dGU7XG5cblx0XHRpZiAocm91dGUpIHtcblx0XHRcdHVybCA9IHJvdXRlLnJlcGxhY2UoLzooW2Etel0rKS9nLCAoZywgbmFtZSkgPT4gZGF0YSAmJiBkYXRhW25hbWVdIHx8IG51bGwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1cmw7XG5cdH0sXG5cblx0Z290byhuYW1lLCBkYXRhKSB7XG5cdFx0bGV0IHVybCA9IHRoaXMuZ2V0VXJsKG5hbWUsIGRhdGEpO1xuXHRcdHRoaXMub3Blbih1cmwpO1xuXHR9LFxuXG5cdG9wZW4odXJsKSB7XG5cdFx0bGV0IHJvdXRlID0gdGhpcy5yb3V0ZSh1cmwpO1xuXHRcdGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUocm91dGUsIG51bGwsIHVybCk7XG5cdFx0XHRvcGVuUGFnZShyb3V0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGRvIGEgcmVkaXJlY3Rcblx0XHRcdC8vIC4uLlxuXHRcdH1cblx0fVxufTsiLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL2xpYi9mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL2xpYi9yb3V0ZXInO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzKSB7XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0dGFza3M6IHRhc2tzLFxuXHRcdHByb2plY3RzOiBbXSxcblx0XHRkdWVUYXNrczogdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWdzLmZpbmQodGFnID0+IHRhZy5kdWUpKSxcblx0XHRjb250ZXh0czogW10sXG5cdFx0dGFnczogW11cblx0fTtcblx0bGV0IHByb2plY3RzID0ge307XG5cdGxldCBjb250ZXh0cyA9IHt9O1xuXHRsZXQgdGFncyA9IHt9O1xuXG5cdHRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cdFx0dGFzay5wcm9qZWN0cyAmJiB0YXNrLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0c1twcm9qZWN0XSArPSAxKTtcblx0XHR0YXNrLmNvbnRleHRzICYmIHRhc2suY29udGV4dHMuZm9yRWFjaChjb250ZXh0ID0+IGNvbnRleHRzW2NvbnRleHRdICs9IDEpO1xuXHRcdHRhc2sudGFncyAmJiB0YXNrLnRhZ3MuZm9yRWFjaCh0YWcgPT4gdGFnc1t0YWddICs9IDEpO1xuXHR9KTtcblxuXHRyZXN1bHQucHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cdHJlc3VsdC5jb250ZXh0cyA9IE9iamVjdC5rZXlzKGNvbnRleHRzKTtcblx0cmVzdWx0LnRhZ3MgPSBPYmplY3Qua2V5cyh0YWdzKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUYXNrKHRhc2spIHtcblx0cmV0dXJuIFtcblx0XHR0YXNrLmRvbmUgPyAneCcgOiAnJyxcblx0XHR0YXNrLnByaW9yaXR5IHx8ICcnLFxuXHRcdHRhc2sudGV4dCxcblx0XHR0YXNrLnByb2plY3RzICYmIHRhc2sucHJvamVjdHMuam9pbignICcpLFxuXHRcdHRhc2suY29udGV4dHMgJiYgdGFzay5jb250ZXh0cy5qb2luKCcgJyksXG5cdFx0dGFzay50YWdzICYmIHRhc2sudGFncy5qb2luKCcgJylcblx0XS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh0YXNrcykge1xuXHRyZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gc3RyaW5naWZ5VGFzayh0YXNrKSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFzayh0YXNrKSB7XG5cdGxldCBwcm9qZWN0cyA9IHRhc2subWF0Y2goLyhcXCtcXHcrKS9nKTtcblx0bGV0IHByaW9yaXR5ID0gdGFzay5tYXRjaCgvXFxzKihcXChbQS1aXVxcKSlcXHMrLyk7XG5cdGxldCBjb250ZXh0cyA9IHRhc2subWF0Y2goLyhAXFx3KykvZyk7XG5cdGxldCB0YWdzID0gdGFzay5tYXRjaCgvXFxiKFxcdyspOltcXHcsXSsvZyk7XG5cdGxldCB0ZXh0ID0gdGFzay5yZXBsYWNlKC8oPzpcXHMqKD86XFwoW0EtWl1cXCkpXFxzKyl8KD86XFwrXFx3Kyl8KD86QFxcdyspfCg/OlxcYig/OlxcdyspOltcXHcsXSspL2csICcnKTtcblx0bGV0IHRhc2tPYmplY3QgPSB7XG5cdFx0dGV4dCxcblx0XHRwcmlvcml0eSxcblx0XHRwcm9qZWN0cyxcblx0XHRjb250ZXh0cyxcblx0XHR0YWdzLFxuXHRcdHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdpZnlUYXNrKHRhc2tPYmplY3QpXG5cdH07XG5cblx0cmV0dXJuIHRhc2tPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFza0xpc3QodGFza0xpc3QpIHtcblx0bGV0IHRhc2tzID0gW107XG5cdHRhc2tMaXN0LnNwbGl0KCdcXG4nKS5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdGlmICh0YXNrKSB7XG5cdFx0XHR0YXNrcy5wdXNoKHBhcnNlVGFzayh0YXNrKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdG9yZSBleHRlbmRzIFN0b3JlIHtcblx0Y29uc3RydWN0b3IoY3JlZGVudGlhbHMpIHtcblx0XHRsZXQgX3RoaXM7XG5cdFx0c3VwZXIoJ3Rhc2snLCB7XG5cdFx0XHRhZGQoY3VycmVudFN0YXRlLCB0YXNrLCBuZXh0KSB7XG5cdFx0XHRcdGlmICghY3VycmVudFN0YXRlLnRhc2tzKSB7XG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRhc2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFzayA9IHBhcnNlVGFzayh0YXNrKTtcblx0XHRcdFx0dGFzay5pZCA9IGN1cnJlbnRTdGF0ZS50YXNrcy5sZW5ndGg7XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRjdXJyZW50U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KGN1cnJlbnRTdGF0ZS50YXNrcyk7XG5cdFx0XHRcdF90aGlzLnNhdmVUYXNrcyhjdXJyZW50U3RhdGUpO1xuXHRcdFx0XHRuZXh0KGN1cnJlbnRTdGF0ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkbyhjdXJyZW50U3RhdGUsIHRhc2tJZCwgbmV4dCkge1xuXHRcdFx0XHRpZiAoIWN1cnJlbnRTdGF0ZS50YXNrcykge1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50YXNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0YXNrID0gY3VycmVudFN0YXRlLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2suZG9uZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKGN1cnJlbnRTdGF0ZSwgdGFza0RhdGEsIG5leHQpIHtcblx0XHRcdFx0aWYgKCFjdXJyZW50U3RhdGUudGFza3MpIHtcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGFza3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFzayA9IGN1cnJlbnRTdGF0ZS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0RhdGEuaWQpO1xuXHRcdFx0XHRpZiAodGFzaykge1xuXHRcdFx0XHRcdHRhc2sgPSBPYmplY3QuYXNzaWduKHtpZDogdGFzay5pZH0sIHBhcnNlVGFzayh0YXNrRGF0YS50ZXh0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudFN0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdChjdXJyZW50U3RhdGUudGFza3MpO1xuXHRcdFx0XHRfdGhpcy5zYXZlVGFza3MoY3VycmVudFN0YXRlKTtcblx0XHRcdFx0bmV4dChjdXJyZW50U3RhdGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0XHRfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG5cdFx0aWYgKHRoaXMuZGF0YS50YXNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNhdmVUYXNrcyh0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRUYXNrcygpO1xuXHRcdH1cblx0fVxuXG5cdGxvYWRUYXNrcygpIHtcblx0XHRsZXQgdGFza0xpc3QgPSAnJztcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRhc2tMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG5cdFx0fVxuXHRcdGZldGNoKHJvdXRlci5nZXRVcmwoJ3Rhc2tzLWxvYWQnKSwge21ldGhvZDogJ3Bvc3QnLCBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmNyZWRlbnRpYWxzKX0pLnRoZW4oZGF0YSA9PiBkYXRhLnRleHQoKSkudGhlbihkYXRhID0+IHtcblx0XHRcdHRhc2tMaXN0ID0gZGF0YTtcblx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0bGV0IG5ld1N0YXRlID0gY2FsY3VsYXRlRGF0YU9iamVjdCh0YXNrcyk7XG5cdFx0XHR0aGlzLnNhdmVUYXNrcyhuZXdTdGF0ZSk7XG5cdFx0XHR0aGlzLm5leHQobmV3U3RhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2F2ZVRhc2tzKHN0YXRlKSB7XG5cdFx0bGV0IGZpbGVDb250ZW50ID0gc3RyaW5naWZ5KHN0YXRlLnRhc2tzKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBmaWxlQ29udGVudCk7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZXIpO1xuXHRcdHRoaXMuZGVib3VuY2VyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRmZXRjaChyb3V0ZXIuZ2V0VXJsKCd0YXNrcy1zYXZlJyksIHttZXRob2Q6ICdwb3N0JywgYm9keTogSlNPTi5zdHJpbmdpZnkoe2NyZWRlbnRpYWxzOnRoaXMuY3JlZGVudGlhbHMsIGRhdGE6IGZpbGVDb250ZW50fSl9KS50aGVuKGRhdGEgPT4gZGF0YS50ZXh0KCkpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdGxldCB0YXNrTGlzdCA9IGRhdGE7XG5cdFx0XHRcdGxldCB0YXNrcyA9IHBhcnNlVGFza0xpc3QodGFza0xpc3QpO1xuXHRcdFx0XHRsZXQgbmV3U3RhdGUgPSBjYWxjdWxhdGVEYXRhT2JqZWN0KHRhc2tzKTtcblx0XHRcdFx0dGhpcy5uZXh0KG5ld1N0YXRlKTtcblx0XHRcdH0pO1xuXHRcdH0sIDIwMDApO1xuXHR9XG5cbn0iLCJpbXBvcnQgU3RvcmUgZnJvbSAnZ2xhc3NiaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCd1c2VyJywge1xuXHRcdFx0c2V0VXNlcihjdXJyZW50U3RhdGUsIGRhdGEpIHtcblx0XHRcdFx0Y3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFN0YXRlLCBkYXRhKTtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMubG9hZERhdGEoKTtcblx0fVxuXG5cdGxvYWREYXRhKCkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0bGV0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NyZWRlbnRpYWxzJykgfHwgJ3t9Jztcblx0XHRcdHRoaXMubmV4dChKU09OLnBhcnNlKGNyZWRlbnRpYWxzKSk7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IFRhc2tTdG9yZSBmcm9tICcuLi9zdG9yZXMvdGFzay1zdG9yZSc7XG5pbXBvcnQgVXNlclN0b3JlIGZyb20gJy4uL3N0b3Jlcy91c2VyLXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXMgfHwge307XG5cdFx0Ly8gZGVmaW5lIGluaXRpYWwgcHJvcHNcblx0XHRfdGhpcy5wcm9wcyA9IHtcblx0XHRcdHRhc2tzOiBbXSxcblx0XHRcdGZpbHRlcmVkVGFza3M6IFtdLFxuXHRcdFx0cHJvamVjdHM6IFtdLFxuXHRcdFx0ZHVlVGFza3M6IFtdLFxuXHRcdFx0Y29udGV4dHM6IFtdLFxuXHRcdFx0dGFnczogW11cblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInRvZG8tYXBwXCI+XG5cdFx0XHRcdDx0b2RvLWhlYWRlciAvPlxuXHRcdFx0XHQ8dG9kby1uYXYgZGF0YS1wcm9qZWN0cz17ZGF0YS5wcm9wcy5wcm9qZWN0c30gZGF0YS1jb250ZXh0cz17ZGF0YS5wcm9wcy5jb250ZXh0c30gZGF0YS10YWdzPXtkYXRhLnByb3BzLnRhZ3N9Lz5cblx0XHRcdFx0PHRvZG8tbGlzdCBkYXRhLXRhc2tzPXtkYXRhLnByb3BzLmZpbHRlcmVkVGFza3N9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRvbm1vdW50KHopIHtcblx0XHR6LmltcG9ydCgnLi9zbWFydC90b2RvLWhlYWRlcicpO1xuXHRcdC8vei5pbXBvcnQoJy4vZHVtYi90b2RvLW5hdicpO1xuXHRcdC8vei5pbXBvcnQoJy4vZHVtYi90b2RvLWxpc3QnKTtcblxuXHRcdGxldCB0YXNrU3RvcmUgPSBuZXcgVGFza1N0b3JlKCk7XG5cdFx0bGV0IHVzZXJTdG9yZSA9IG5ldyBVc2VyU3RvcmUoKTtcblxuXHRcdHRhc2tTdG9yZS5vbignY2hhbmdlZCcsIGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5nZXRIb3N0KCkuc2V0UHJvcHMoZGF0YSk7XG5cdFx0fSk7XG5cdFx0dXNlclN0b3JlLm9uKCdjaGFuZ2VkJywgZGF0YSA9PiB7XG5cdFx0XHRpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRhc2tTdG9yZS5zZXRDcmVkZW50aWFscyhkYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSJdLCJuYW1lcyI6WyJOb3dQcm9taXNlIiwiY29uc3QiLCJsZXQiLCJzdXBlciIsInRoaXMiLCJTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZLENBQUMsSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLFNBQVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFD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
