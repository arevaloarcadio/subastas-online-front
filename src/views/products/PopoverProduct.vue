<template>
<ion-content class="ion-padding">
<ion-row style="cursor: pointer;" >
Editar
</ion-row>
<div class="hr"> </div>
<ion-row style="cursor: pointer;color: #FF0000;">
Eliminar
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
async  redirect() {
const popover = await popoverController	
await popover.onDidDismiss();

}
}
});
</script>