<template>
	<ion-app v-if="route.meta.layout =='LayoutDashboard'">
		<LayoutDashboard></LayoutDashboard>
	</ion-app>
	<ion-app  v-if="route.meta.layout =='Layout'">
		<Layout></Layout>
	</ion-app>
	<ion-app v-else>
		<transition name="slide-fade">
			<router-view></router-view>
		</transition>
	</ion-app>
</template>

<script>
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import LayoutDashboard from './components/base/LayoutDashboard';
import Layout from './components/base/Layout';
import fcm_token from '@/plugins/fcm/fcm-token' ; 
import { Plugins } from '@capacitor/core';
const { PushNotifications } = Plugins;

export default defineComponent({
	name: 'App',
	components: {
		IonApp,
		LayoutDashboard,
		Layout
	},
	data(){
		return {
			route : this.$route
		}
	},
	mounted(){
	PushNotifications.register();

	PushNotifications.requestPermission().then(result => {
	alert("result " + JSON.stringify(result));
	fcm_token.set_token(result.token)
	});
	// Add registration error if there are.
	PushNotifications.addListener("registrationError", (error) => {
	console.log(`error on register ${JSON.stringify(error)}`);
	});
	// Add Notification received
	PushNotifications.addListener("pushNotificationReceived",(notification) => {
			console.log(`notification ${JSON.stringify(notification)}`);
	}
	);
	// Add Action performed
	PushNotifications.addListener(
	"pushNotificationActionPerformed",
	async (notification) => {
		alert("notification " + notification)
			console.log("notification succeeded");
	}
	);

}
});
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">