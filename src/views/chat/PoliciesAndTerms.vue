<template>
  <br><br><br><br><br><br><br>
  <ion-content class="ion-padding"> 
    <div align="center"> 
      <br>
      <img src="/assets/logo-success.png">
    </div>
    <div style="display: flex;justify-content: center;">
    <ion-row>
      <ion-col size="2">
        <ion-checkbox color="primary" @click="accepted =! accepted" style="margin-top: 20px;margin-left: 16px;"></ion-checkbox>
      </ion-col>
      <ion-col >
        <p class="p-no-center">
          Acepto las <span class="text-control" @click="openModal();"><u>Políticas y Términos <br>de uso</u></span> de la aplicación
        </p>
      </ion-col>
   </ion-row>
   </div>
   <p>  
    <button type="button" class="btn-primary" @click="acceptTerms" style="width: 138px;">
      Continuar
    </button>
    </p>
  </ion-content>     
</template>
<script>

import { defineComponent } from 'vue';
import {  modalController } from '@ionic/vue';
import Popover from './PopoverTerms.vue'
import axios from 'axios';
import toast from '@/toast'
import { mapGetters } from 'vuex'

export default defineComponent({
 data(){
    return {
      accepted : false,
      read : false
    }
  },
  mounted(){

  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
      async openModal() {
      this.read = true
      const modal = await modalController
        .create({
          component: Popover,
          keyboardClose : true,
        })
      return modal.present();
    },
    async acceptTerms(){

      if(this.accepted == false){
        toast.openToast("Por favor acepte los terminos antes de continuar","error",2000);
        return;
      }
       if(this.read == false ){
        toast.openToast("Por favor leer los terminos","error",2000);
        return;
      }

      let loading = await toast.showLoading()

      await loading.present(); 

       axios
        .post("/chat/terms",{user_id : this.getUser.id})
        .then(res => {
          console.log(res)
            loading.dismiss()
            this.redirect({path : '/chat'})
         })
        .catch(err => {
          loading.dismiss()
          console.log(err)
        });
    } 
  }
});


</script>


<style type="text/css">

   
</style>


