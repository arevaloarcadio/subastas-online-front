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
          Chat
        </p>
      </ion-col>
    </ion-row>
    <ion-content>
   
    
        <p v-if="messages.length == 0">
         Cuando alguien inicie negociación por tu producto o tu inicies negociación se habilitará el chat
        </p>
        <template v-else>
          <ion-card style="box-shadow: inherit;width: 100%;left: -11px;height: 99px" v-for="(message,key) in messages" :key="message"  @click="redirect({name : 'request.chat' , params : { productId : message.productId }})">
            <ion-row :class="{'col'  : key%2 == 0}">
              <ion-col  >
                <img style="border-radius: 15px 15px 15px 15px;margin-left: 5px;margin-top: 6px;" :src="message.photo" >
                  <p class="p-no-center" style="margin-top: -82px; margin-left: 92px;position: absolute;font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;" >
                    {{message.product}} 
                    <img v-show="message.active"  src="/assets/active.png" ></p> 
                
                <span style="font-size: 16px;font-weight: 400;margin-top: 35px;position: absolute;    margin-left: 5px;">{{message.last_message}}</span>
              
              <span style="font-weight: 300;margin-top: 62px;margin-left: 61%;">7 min</span>
              </ion-col>

          
            </ion-row>
            
          </ion-card>
        </template>
  
    
    </ion-content>    
  </ion-page>  
</template>


<script>

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 

  modalController,

  IonPage
 } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
   
   
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
      messages : 
      [
        {
          productId : 1,
          photo : '/assets/Guitar.png',
          product : 'Camisa',
          last_message : 'Me gustaria intercambiar mi camisa...',
          date_last_message : '7 min', 
          active : true
        },
        {
          productId : 2,
          photo : '/assets/Guitar.png',
          product : 'Guitarra C-30',
          last_message : 'Me gustaria intercambiar mi camisa...',
          date_last_message : '7 min', 
          active : false
        }, 
      ]
    }
  },
  mounted(){
    console.log(this.messages.length)
  },
  methods:{
    redirect(path) {
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


  @media (max-width: 1000px){
     .col-chat{
    margin-left: -36%;margin-top:-6%
    }
  }

  .col{
    background: rgba(233, 235, 235, 0.5);
  }
</style>


