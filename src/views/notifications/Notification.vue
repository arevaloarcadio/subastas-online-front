<template>
<ion-page>
   <ion-row>
      <ion-col>
        <button @click="redirect({path :'/principal'})" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 52%;position: absolute;" ></ion-icon>
        </button>
        <p style="color: #000">
          Notificaciones
        </p>
      </ion-col>
    </ion-row>
    <ion-content>
      <ion-list>
        <br>
        <p v-if="nofitications.length == 0" style="font-weight: 400">
         Actualmente no hay notifaciones
        </p>
        <template v-else  v-for="nofitication in nofitications" :key="nofitication">
          <ion-card @click="redirect({name : nofitication.type , params : { productId : nofitication.id }})">
            <ion-row>
              <ion-col>
                <img style="border-radius: 15px 15px 15px 15px;" :src="nofitication.photo" >
              </ion-col>
              <ion-col style="margin-left: -40%;">
                <b style="color: #000;font-family: Montserrat; font-weight: 600">{{nofitication.data}}</b>
                <div style="position: absolute;top: 70px;">
                  {{nofitication.date_last_message}}
               </div>
               <div style="position: absolute;top: 70px;left: 150px;color: #FF0000">
                Eliminar
               </div>
              </ion-col>
            </ion-row>
          </ion-card>
        </template>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>    
  </ion-page>  
</template>


<script >

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,
  IonList,
  IonPage
 } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonList,
    IonPage
  },
  setup() {
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }

    const loadData = (ev) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    }

    pushData();

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
      repeat,
      arrowBack,
      camera
    }
  },
  data(){
    return {
      nofitications : 
      [
        {
          id : 1,
          photo : '/assets/products/product-2.png',
          data : 'Tu solicitud ha sido aceptada',
          date_last_message : 'Hace 30 minutos', 
          type : 'request'
          
        },
        {
          id : 2,
          photo :  '/assets/products/product-1.png',
          data : 'Has recibido una solicitud de cambio',
          date_last_message : '7 min',
          type : 'request.accepted'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tu solicitud ha sido rechazada',
          date_last_message : '1 hora',
          type : 'request.rejected'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tienes un nuevo mensaje de bateria',
          date_last_message : '1 hora',
          type : 'request.chat'
        },    
      ]
    }
  },
  mounted(){
    console.log(this.nofitications.length)
  },
  methods:{
    redirect(path) {
      console.log(path)
      this.$router.push(path);
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalDetail,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
    },
  }
});

</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}

.alert-radio-inner.sc-ion-alert-md{
  background-color : #32BAB0;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md {
    border-color: #32BAB0;
}

.alert-radio-label.sc-ion-alert-md{
  color: #5B716F;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{
    color: #5B716F;
}

.alert-button.sc-ion-alert-md{
  color : #32BAB0;
}
.radio-checked{
--color-checked :#32BAB0 !important; 


}
 .ion-activated{
--color-checked :#32BAB0; 
 }

.ion-color-success {
    --ion-color-base: #32BAB0 !important;
    --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;
    --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;
    --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;
    --ion-color-shade:  #32BAB0;
    --ion-color-tint: #32BAB0;
}
input[type="file"] {
  display: none;
}


   
</style>


