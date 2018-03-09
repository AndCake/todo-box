export default class TaskNotifier {
	constructor() {
		this.tasks = [];
		if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'denied') {
			Notification.requestPermission(permission => {
				if (permission === 'granted') {
					this.timeout = window.setTimeout(this.checkDueTasks.bind(this), 60000);
				}
			});
		}
	}

	checkDueTasks() {
		clearTimeout(this.timeout);
		let now = new Date().getTime() / 1000 / 60;
		let dueTasks = this.tasks.filter(task => {
			return task.tags && task.tags.find(tag => {
				let date = tag.split(':').slice(1).join(':');
				if (date.indexOf('T') < 0) {
					date = new Date(date + 'T09:00');
					// no time component, so alert a day early at 9 AM
					date = date.getTime() - 86400000;
				}
				let timeStamp = new Date(date).getTime();
				timeStamp = Math.round(timeStamp / 1000 / 60);
				if (timeStamp >= now - 1 && timeStamp <= now + 1) {
					return true;
				} else {
					return false;
				}
			}) || false;
		});
		dueTasks.forEach(task => {
			if (!task.notified) {
				task.notified = true;
				new Notification(task.text, {
					body: task.toString()
				});
			}
		});
		this.timeout = setTimeout(this.checkDueTasks.bind(this), 60000);
	}

	setTasks(tasks) {
		this.tasks = tasks;
		if (this.timeout && typeof window !== 'undefined') {
			clearTimeout(this.timeout);
			window.setTimeout(this.checkDueTasks.bind(this), 60000);
		}
	}
}