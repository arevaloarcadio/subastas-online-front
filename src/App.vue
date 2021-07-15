<template>
<ion-app v-if="route.meta.layout =='LayoutDashboard'">
	
	<LayoutDashboard></LayoutDashboard>
<!--<transition name="slide-fade">

<ion-router-outlet/>
</transition>-->
</ion-app>

<ion-app  v-if="route.meta.layout =='Layout'">

<!--<transition name="slide-fade">

<ion-router-outlet/>
</transition>-->
<Layout></Layout>
</ion-app>

<ion-app v-else>
<transition name="slide-fade" >
<router-view></router-view>
</transition>
</ion-app>


</template>

<script>
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import LayoutDashboard from './components/base/LayoutDashboard';
import Layout from './components/base/Layout';

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
console.log(this.$route.meta.layout)
}
});
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">