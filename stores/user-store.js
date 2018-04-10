import Store from 'glassbil';

export default class UserStore extends Store {
	constructor() {
		super('user', {
			setUser(currentState, data) {
				let newState = Object.assign({}, currentState.toJS(), data);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('credentials', JSON.stringify(newState));
				}
				return newState;
			}
		});

		this.loadData();
	}

	loadData() {
		let _this = this;
		if (typeof localStorage !== 'undefined') {
			setTimeout(() => {
				let credentials = localStorage.getItem('credentials') || '{}';
				_this.setState(JSON.parse(credentials));
			}, 100);
		} else {
			_this.setState({});
		}
	}
}