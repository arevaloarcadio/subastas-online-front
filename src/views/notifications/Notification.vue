<template>
<ion-page>
   <ion-row>
      <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Notificaciones
        </p>
      </ion-col>
    </ion-row>
    <ion-content>

        <br>
        <p v-if="nofitications.length == 0" style="font-weight: 400">
         Actualmente no hay notificaciones
        </p>
        <template v-else  v-for="nofitication in nofitications" :key="nofitication">
          <div style="box-shadow:inherit;margin-left: 0%;height: 99px" @click="redirect({name : nofitication.type , params : { productId : nofitication.id }})">
            <ion-row>
              <ion-col>
                <img style="border-radius: 15px 15px 15px 15px;" :src="nofitication.photo" >
                 <p class="p-no-center data-notification" style="margin-top: -77px; margin-left: 88px;position: absolute;" >{{nofitication.data}}</p>
                <div class="last-message-notification" style="position: absolute; margin-left: 88px;margin-top: -24px;">
                  {{nofitication.date_last_message}}
               </div>
               <div style="color: #FF0000;margin-top: -24px;position: absolute;    margin-left: 74%;" class="delete">
                Eliminar
               </div>
              </ion-col>
             
            </ion-row>
          </div>
        </template>

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
          data :  'Has recibido una solicitud de cambio',
          date_last_message : 'Hace 30 minutos', 
          type : 'request'
          
        },
        {
          id : 2,
          photo :  '/assets/products/product-1.png',
          data :  'Tu solicitud ha sido aceptada',
          date_last_message : 'Hace 30 minutos', 
          type : 'request.accepted'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tu solicitud ha sido rechazada',
          date_last_message : 'Hace 30 minutos', 
          type : 'request.rejected'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tienes un nuevo mensaje de bateria',
          date_last_message :'Hace 30 minutos', 
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


<style scoped="">

input[type="file"] {
  display: none;
}


.data-notification{
    font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

align-items: center;
letter-spacing: 0.75px;

color: #000000;

   }
.last-message-notification{
   font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */


align-items: center;
letter-spacing: 0.75px;

color: #000000;
}

.delete{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
/* identical to box height */


align-items: center;
text-align: right;
letter-spacing: 0.75px;
}
</style>


