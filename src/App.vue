<template>
	<ion-app  :class="{ 'ios' : showAppleSignIn }" v-if="route.meta.layout =='LayoutDashboard'">
		<LayoutDashboard></LayoutDashboard>
	</ion-app>
	<ion-app  :class="{ 'ios' : showAppleSignIn }"  v-if="route.meta.layout =='Layout'">
		<Layout></Layout>
	</ion-app>
	<ion-app :class="{ 'ios' : showAppleSignIn }"  v-else>
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

//import { FCM } from '@capacitor-community/fcm';
import fcm_token from '@/plugins/fcm/fcm-token' ; 
//import fcm_token from '@/plugins/fcm/fcm-token' ; 
import { Plugins } from '@capacitor/core'
import '@capacitor/push-notifications';
import '@capacitor/device';
import toast from '@/toast'
const {PushNotifications}  = Plugins


export default defineComponent({
	name: 'App',
	components: {
		IonApp,
		LayoutDashboard,
		Layout
	},
	data(){
		return {
			route : this.$route,
			showAppleSignIn : true
			//fcm: new FCM()
		}
	},
	mounted(){
		console.log(Plugins)
		this.initPushNotification()
		this.show_ios()
	},
	methods : {
	async show_ios(){
      //let device = await Plugins.Device.getInfo();
     //this.showAppleSignIn = device.platform === 'ios';
    },
	async initPushNotification(){

	// Register with Apple / Google to receive push via APNS/FCM
	PushNotifications.register();

	// On success, we should be able to receive notifications
	PushNotifications.addListener('registration', 
	(token) => {
	fcm_token.setToken(token.value)
	//alert('Push received: ' + JSON.stringify(token));
	}
	);

	// Some issue with our setup and push will not work
	PushNotifications.addListener('registrationError', 
	(error) => {
	alert('Error on registration: ' + JSON.stringify(error));
	}
	);

	// Show us the notification payload if the app is open on our device
	PushNotifications.addListener('pushNotificationReceived', 
	(notification) => {
	/*if (notification['path']) {
		this.$router.push(notification.path)
	}*/
	if(notification.data['message']){
	toast.openToast(notification['message'],"error",2000);
	}
	//alert('Push received: ' + JSON.stringify(notification));
	}
	);

	// Method called when tapping on a notification
	PushNotifications.addListener('pushNotificationActionPerformed', 
	(notification) => {
	if (notification.data['path']) {
		this.$router.push(notification.path)
	}
	}
	);
	}
	}
});

//591791636275-45hoofl1j9jcdbkfmv2cc88a51i2ahtl.apps.googleusercontent.com mi token
//oficial de upgrap 404466753320-8ob9c44f8na5ajcr317p25qv92juvv6e.apps.googleusercontent.com
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">
<style type="text/css">
	.ios{
		margin-top: 2.5% ;
	}
</style>