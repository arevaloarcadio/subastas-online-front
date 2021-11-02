<template>
	<div style="margin-left: 5%;margin-top: 20px">	
		<!--<ion-row style="cursor: pointer;" @click="select('Hogar')" :class="{'item-popover' : true , 'active' : filters['Enviadas'] == true}">
			Hogar
		</ion-row>
		
		<ion-row style="cursor: pointer;" @click="select('Técnología')" :class="{'item-popover' : true , 'active' : filters['Recibidas'] == true}">
			Técnología
		</ion-row>
	
		<ion-row style="cursor: pointer;" @click="select('Calzado')" :class="{'item-popover' : true , 'active' : filters['Rechazados'] == true}">
			Calzado
		</ion-row>

		<ion-row style="cursor: pointer;" @click="select('Accesorios')" :class="{'item-popover' : true , 'active' : filters['Por confirmar'] == true}">
			Accesorios
		</ion-row>
	
		<ion-row style="cursor: pointer;" @click="select('Deportes')" :class="{'item-popover' : true , 'active' : filters['Por confirmar'] == true}">
			Deportes
		</ion-row>
	
		<ion-row style="cursor: pointer;" @click="select('Videojuegos')" :class="{'item-popover' : true , 'active' : filters['Por confirmar'] == true}">
			Videojuegos
		</ion-row>-->
		<ion-row style="cursor: pointer;" v-for="state in states" :key="state" @click="select(state)" class="item-popover">
			{{state.name}}
		</ion-row>
	</div>	
</template>

<script>

import { defineComponent } from 'vue';
import { popoverController } from '@ionic/vue';

export default defineComponent({
name: 'Popover',
props : ['states'],
data(){
	return{
		filters : {
			'Enviadas' : false,
			'Recibidas' : false,
			'Rechazados' : false,
			'Por confirmar' : false,
		}
	}
},
methods : {
async select(state) {
	const popover = await popoverController
    return popover.dismiss(state);
},
}
});
</script>

<style scoped="">
	.item-popover{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #32BAB0;

	}
	.active{
		font-weight: bold;
	}


</style>

<style type="text/css">
.my-class-state .popover-content{
  width: 88% !important;
  left: 6% !important;
  transform-origin: right top !important;
  height: 202px !important;
  border-radius: 10px !important;

}

.my-class-edit .popover-content{
  width: 88% !important;
  left: 6% !important;
  transform-origin: right top !important;
  height: 202px !important;
  border-radius: 10px !important;
  top: 169px !important;
}
</style>