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
                <input class="c-switch-input"  id="private" type="checkbox" checked="" v-model="group_private"><span class="c-switch-slider" style="margin-top: 40%;"></span>
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
                <input class="c-switch-input"  id="private" type="checkbox" v-model="group_private"><span class="c-switch-slider" style="margin-top: 40%;"></span>
              </label>
          </ion-col>
        </ion-row>
       </ion-grid>
       <button type="button" class="btn-primary" @click="redirect()" >
          Continuar
      </button>
    </div>
   </ion-content>     
  
</template>

<script>

import { defineComponent } from 'vue';

import {IonRow,IonGrid,IonCol } from '@ionic/vue';

export default defineComponent({
  components: { IonGrid, IonRow,IonCol  },
  name: "Chat",
  data() {
    return {
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
    };
  },
  mounted(){

  },
  methods: {
    redirect(){
      this.$router.push({path: 'complete'});
    }
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


