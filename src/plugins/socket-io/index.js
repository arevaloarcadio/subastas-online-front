import VueSocketIO from 'vue-socket.io'
import store from '@/plugins/store'
let socket = {};

export default {
  install: (app, { connection, options }) => {
	socket = new VueSocketIO({
		debug: true,
		connection:connection ,
		vuex: {
			store,
			actionPrefix: 'SOCKET_',
			mutationPrefix: 'SOCKET_'
		},
		allowEIO3: true ,// false by default
		options: options //Optional options
	});

    app.config.globalProperties.$socket = socket

    app.provide('socket', socket)
  },
  socket : () => {
	return socket
  }
 
}