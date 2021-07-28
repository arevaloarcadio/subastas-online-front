<template>

<ion-content class="ion-padding"> 
  <br><br><br>
  <div align="center">
    <span class="text-control" style="font-weight: 500;font-size: 20px;line-height: 24px;">¿Cómo quieres que funcione <br>el chat?  </span> 
    <br><br><br> <br>
    <ion-grid>
        <ion-row>
          <ion-col>
            <p class="p-no-center" style="margin-left: 10%;width: 110%;">
              Habilitar el chat para todas las propuestas
            </p>
          </ion-col>
          <ion-col>
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 50%;">
                <input class="c-switch-input"  id="private" type="checkbox" checked="true" v-model="enable_chat_all_proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
              </label>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <p class="p-no-center" style="margin-left: 10%;width: 110%;">
             Decidir que propuestas acepto
            </p>
          </ion-col>
          <ion-col>
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 50%;">
                <input class="c-switch-input"  id="private" type="checkbox"   v-model="decide_proposal_accept"><span class="c-switch-slider" style="margin-top: 40%;"></span>
              </label>
          </ion-col>
        </ion-row>
       </ion-grid>
       <button type="button" class="btn-primary" @click="register()" >
          Continuar
      </button>
    </div>
   </ion-content>     
  
</template>

<script>

import { defineComponent } from 'vue';
import {IonRow,IonGrid,IonCol } from '@ionic/vue';
import axios from 'axios';
import toast from '@/toast'

export default defineComponent({
  components: { IonGrid, IonRow,IonCol  },
  name: "Chat",
  data() {
    return {
      decide_proposal_accept : false,
      enable_chat_all_proposal : true,
      customer_id : null
    };
  },
  mounted(){
     this.customer_id = this.$route.query.customer_id;
  },
  methods: {
    async register(){
      let loading = await toast.showLoading()

      await loading.present(); 
      
      axios
      .post("/chat/config",{
        decide_proposal_accept : this.decide_proposal_accept,
        enable_chat_all_proposal : this.enable_chat_all_proposal,
        customer_id : this.customer_id
       })
      .then(res => {
        console.log(res)
        loading.dismiss()
        this.$router.push({path: 'complete'});
      })
      .catch(err => {
        console.log(err)
        loading.dismiss()
      });
    }
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


