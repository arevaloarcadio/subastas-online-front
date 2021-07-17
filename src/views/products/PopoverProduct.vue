<template>
<ion-content class="ion-padding">
<!--<div align="center" class="points"  style="margin-left: 63%;background:transparent;" @click="openPopover($event,n)" >
<svg width="7" height="28" viewBox="0 0 7 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7C5.425 7 7 5.425 7 3.5C7 1.575 5.425 0 3.5 0C1.575 0 0 1.575 0 3.5C0 5.425 1.575 7 3.5 7Z" fill="#32BAB0"/>
<path d="M3.5 10.5C1.575 10.5 0 12.075 0 14C0 15.925 1.575 17.5 3.5 17.5C5.425 17.5 7 15.925 7 14C7 12.075 5.425 10.5 3.5 10.5Z" fill="#32BAB0"/>
<path d="M0 24.5C0 22.575 1.575 21 3.5 21C5.425 21 7 22.575 7 24.5C7 26.425 5.425 28 3.5 28C1.575 28 0 26.425 0 24.5Z" fill="#32BAB0"/>
</svg>
</div>-->
<ion-row style="cursor: pointer;" >
Editar
</ion-row>
<br>
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