import VueSocketIO from 'vue-socket.io'
import store from '@/plugins/store'

export default {
  install: (app, { connection, options }) => {

const socket = new VueSocketIO({
	debug: true,
	connection:connection ,
	vuex: {
		store,
		actionPrefix: 'SOCKET_',
		mutationPrefix: 'SOCKET_'
	},
	options: options //Optional options
});

    app.config.globalProperties.$socket = socket

    app.provide('socket', socket)
  }
}