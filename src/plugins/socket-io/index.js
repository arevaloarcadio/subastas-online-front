import io from 'socket.io-client'
import axios from 'axios'

let socket_client = {};
let socket;

socket_client.connect = function(){
socket  = io(axios.defaults.baseURL,{
cors: {
origin: '*',
},
withCredentials : false
});
}

socket_client.connect_user = function(){
socket.on("connection")
console.log(socket)
}

socket_client.emit_conect_use = function(user){
socket.emit('user_conected',user)
}

export default socket_client