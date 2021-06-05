<template>
    <body class="dark-edition">
    </body>	
</template>

<script>
import axios from 'axios';

export default {
name: 'Dashboard',
	data() {
	return {
		user : null
	};
},
mounted(){
	this.getUser()
},
methods: {
	getUser(){
		axios
			.get("/dashboard")
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				console.log(err.response)
			});
		}
	}
}
</script>

                 