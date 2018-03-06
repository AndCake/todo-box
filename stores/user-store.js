import Store from 'glassbil';

export default class UserStore extends Store {
	constructor() {
		super('user', {
			setUser(currentState, data) {
				currentState = Object.assign({}, currentState, data);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('credentials', JSON.stringify(currentState));
				}
				return currentState;
			}
		});

		this.loadData();
	}

	loadData() {
		if (typeof localStorage !== 'undefined') {
			setTimeout(() => {
				let credentials = localStorage.getItem('credentials') || '{}';
				this.next(JSON.parse(credentials));
			}, 100);
		} else {
			this.next({});
		}
	}
}