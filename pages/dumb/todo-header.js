import styles from './styles/todo-header.css';

export default class TodoHeader {
	render(data) {
		return (
			<header>
				<h3 class="logo">Todo Box</h3>
				<button class="login-trigger js-trigger-form">{data.props.credentials.name ? data.props.credentials.name : 'Connect'}</button>
				{data.props.loginShown ? (
					<form class="login-form">
						<fieldset>
							<legend>Connect to WebDAV Server</legend>
							<p>Please login to your WebDAV provider. Your credentials will only be used to transfer your todos and will only be saved in your browser.</p>
							<label>
								Service Name:
								<input type="text" name="name" value="Box.com"/>
							</label>
							<label>
								WebDAV Base URL:
								<input type="url" name="webdavBase" value="https://dav.box.com/dav" />
							</label>
							<label>
								Path to Todo.txt:
								<input type="text" name="path" value="" placeholder="/todo.txt" />
							</label>
							<label>
								User Name:
								<input type="email" name="username" value="" placeholder="test@example.org"/>
							</label>
							<label>
								Password:
								<input type="password" name="password" value=""/>
							</label>
							<div class="login-form__actions">
								<button type="submit" class="js-login">Connect</button><button type="button" class="button-cancel js-cancel">Cancel</button>
							</div>
						</fieldset>
					</form>
				) : ''}
			</header>
		);
	}

	constructor() {
		let _this = this || {};
		_this.props = {
			credentials: {},
			loginShown: false
		};
	}

	get styles() { return styles; }
	get events() {
		return {
			'.logo': {click() {
				let event = new Event('logoaction', {
					bubbles: true,
					cancelable: false
				});
				this.getHost().dispatchEvent(event);
			}},
			'button.js-trigger-form': {click() {
				this.getHost().setProps('loginShown', !this.getHost().props.loginShown);
			}},
			'button.js-cancel': {click() {
				this.getHost().setProps('loginShown', false);
			}},
			'form': {submit(event) {
				event.preventDefault();
				let url = this.webdavBase.value + (this.path.value || '/todo.txt');
				if (!url.match(/\w+\/[\w+]\.txt$/)) {
					url += (url.substr(-1) === '/' ? '' : '/') + 'todo.txt';
				}
				let credentials = {
					name: this.name.value,
					url,
					username: this.username.value,
					password: this.password.value
				};
				let customEvent = new CustomEvent('login', {
					bubbles: true,
					cancelable: false,
					detail: credentials
				});
				this.getHost().dispatchEvent(customEvent);
			}}
		};
	}
}