<template>
   <ion-page>
     <ion-row style="margin-top: 24%;">
      <ion-col>
       
      </ion-col>
    </ion-row>
     <button @click="closeModal()" style="background: #fff;margin-left: 318px;margin-top: -88px;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.02962L17.18 0.292725L10 7.26113L2.82 0.292725L0 3.02962L7.18 9.99803L0 16.9664L2.82 19.7033L10 12.7349L17.18 19.7033L20 16.9664L12.82 9.99803L20 3.02962Z" fill="#5B716F" fill-opacity="0.5"/>
              </svg>
        </button>
          
    <p   style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #000000;">
      ¿Quien interambia este <br> producto?
    </p>
 

 <ion-content>
    <ion-row>
      <ion-avatar style="margin-left: 5%">
        <img src="/assets/avatar.png">
      </ion-avatar>
      <ion-col style="margin-top: 3%">
         <span  style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #32BAB0;margin-left: 10px;">Nombre del Usuario</span> 
      </ion-col>
    </ion-row>
    <div class="hr"> </div>
    <ion-row>
      <ion-col>
       <p class="p-no-center"  style="float: left;margin-left: 6%;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #000000;">
        Estado:
       </p> 
      </ion-col>
      <br>
      <ion-col> 
        <button type="button" class="tag-primary"  style="width: 180px;padding: 1px 2px;margin-left: -20px;">Producto Usado</button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <p class="p-no-center"    style="float: left;margin-left: 6%;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #000000;">
          Categoria:
        </p>
      </ion-col>
      <ion-col> 
        <button type="button" class="tag-primary" style="padding: 1px 2px;margin-left: 11px;"><ion-icon :icon="pricetag"></ion-icon> Tecnologia</button>
      </ion-col>
    </ion-row>  
 </ion-content>
 </ion-page>
</template>

<script>
import { IonContent,modalController,IonPage } from '@ionic/vue';
import { close,pricetag } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalDetails',

  components: { IonContent,IonPage },
  setup() {
    return { close,pricetag }
  },
  data() {
    return {
    
    }
  },
  methods: {
  async closeModal() {
      const modal = await modalController
      return modal.dismiss();
    },
  }
});
</script>