<template>
<br><br><br><br><br><br><br>
<ion-content class="ion-padding"> 
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>

  <ion-row>
    <ion-col size="2">
      <ion-checkbox color="primary" style="margin-top: 27px;margin-left: 25px;"></ion-checkbox>
    </ion-col>

    <ion-col >
      <p class="p-no-center">
        Acepto las <span class="text-control" @click="openModal"><u>Políticas y Términos</u></span> <br>de uso de la aplicación
      </p>
    </ion-col>

  </ion-row>
 

  <p>  
  <button type="button" class="btn-primary" @click="redirect({path : '/chat'})" style="width: 138px;">

      Continuar
  </button>
  </p>
</ion-content>     

</template>


<script >






import { defineComponent } from 'vue';
import {  modalController } from '@ionic/vue';
import Popover from './PopoverTerms.vue'

export default defineComponent({

  data(){
    return {
    }
  },
  mounted(){

  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
      async openModal() {
      const modal = await modalController
        .create({
          component: Popover,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
  }
});


</script>


<style type="text/css">

   
</style>


