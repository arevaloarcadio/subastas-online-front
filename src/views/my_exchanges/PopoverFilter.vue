<template>
	<div style="margin-left: 5%;margin-top: 5%">	
		<ion-row style="cursor: pointer;" @click="select('Aceptadas')" :class="{'item-popover' : true , 'active' : filters['Aceptada'] == true}">
			Aceptadas
		</ion-row>
		<br>
		<!--<ion-row style="cursor: pointer;" @click="select('Recibidas')" :class="{'item-popover' : true , 'active' : filters['Recibida'] == true}">
			Recibidas
		</ion-row><br>-->
		
		<ion-row style="cursor: pointer;" @click="select('Rechazados')" :class="{'item-popover' : true , 'active' : filters['Rechazado'] == true}">
			Rechazados
		</ion-row>
		<br>
		<ion-row style="cursor: pointer;" @click="select('Por confirmar')" :class="{'item-popover' : true , 'active' : filters['Por confirmar'] == true}">
			Por confirmar
		</ion-row>
	</div>	
</template>

<script>

import { defineComponent } from 'vue';
import { popoverController } from '@ionic/vue';

export default defineComponent({
name: 'Popover',
data(){
	return{
		filters : {
			'Aceptada' : false,
			'Rechazado' : false,
			'Por confirmar' : false,
		}
	}
},
methods : {
async select(filter) {
	const popover = await popoverController
    return popover.dismiss(filter);
}
}
});
</script>

<style scoped="">
	.item-popover{
		font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #5B716F;

	}
	.active{
		font-weight: bold;
	}
</style>