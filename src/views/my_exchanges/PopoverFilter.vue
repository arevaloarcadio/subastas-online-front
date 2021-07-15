<template>
	<div style="margin-left: 5%;margin-top: 5%">	
		<ion-row style="cursor: pointer;" @click="select('Enviadas')" :class="{'item-popover' : true , 'active' : filters['Enviadas'] == true}">
			Enviadas
		</ion-row>
		<br>
		<ion-row style="cursor: pointer;" @click="select('Recibidas')" :class="{'item-popover' : true , 'active' : filters['Recibidas'] == true}">
			Recibidas
		</ion-row>
		<br>
		<ion-row style="cursor: pointer;" @click="select('Rechazados')" :class="{'item-popover' : true , 'active' : filters['Rechazados'] == true}">
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


export default defineComponent({
name: 'Popover',
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
select(filter) {

this.$emit("select",{filter: filter})
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