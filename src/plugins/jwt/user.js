export default {
	setUser(user) {
		window.localStorage.setItem('user', JSON.stringify(user));
	},
	getUser() {
		return window.localStorage.getItem('user');
	},
	removeUser() {
		window.localStorage.removeItem('user');
	}
}