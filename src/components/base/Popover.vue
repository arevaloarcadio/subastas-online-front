<template>
<ion-content class="ion-padding">
<ion-row style="cursor: pointer;" @click="redirect('/')">
Cerrar Sesión
</ion-row>
</ion-content>
</template>

<script>
import { IonContent,popoverController  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
name: 'Popover',
components: { IonContent },
methods :{
async  redirect(path) {
const popover = await popoverController	
const { role } = await popover.dismiss();
console.log('onDidDismiss resolved with role', role);
location.href= path
//this.$router.push({path: path});
}
}
});
</script>