<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 2%;top: 23%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p style="color: #000" class="title">
           Respuesta de solicitud
          </p>
            <p style="margin-top: 49px;">
          <span class="text-control" style="font-weight: 600;font-size: 22px;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #32BAB0;">
                Usuario
              </span>
          </p>
          <p style="margin-top: -3%;">
        Ha rechazado tu oferta
          </p>
         
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding">
     
        <p style="margin-top: 6%;">
          <svg width="130" height="116" viewBox="0 0 130 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.7778 65.25H72.2222V21.75H57.7778V65.25ZM130 0H86.6667V43.5L102.844 27.26C110.971 35.4114 115.543 46.4674 115.556 58C115.556 66.9896 112.777 75.7578 107.603 83.0947C102.428 90.4317 95.1132 95.976 86.6667 98.9625V114.115C111.583 107.662 130 85.0425 130 58C130 41.9775 123.428 27.55 112.956 17.11L130 0ZM57.7778 94.25H72.2222V79.75H57.7778V94.25ZM0 58C0 74.0225 6.57222 88.45 17.0444 98.89L0 116H43.3333V72.5L27.1556 88.74C19.0287 80.5886 14.4569 69.5326 14.4444 58C14.4441 49.0104 17.2229 40.2423 22.3973 32.9053C27.5717 25.5682 34.8868 20.024 43.3333 17.0375V1.885C18.4167 8.3375 0 30.9575 0 58Z" fill="#5B716F"/>
          </svg>

          <br>
          <br>
          <br>
          <br>
            Ofrécele algo <br> mejor
       
          <br>
          <br>
          <br>
          <button type="button" class="btn-primary" @click="redirect({path : '/principal'})" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;width: 150px;color: #FFFFFF;">
             Renegociar
          </button>
        </p>

      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script >

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 

  modalController,
 
  IonPage
 } from '@ionic/vue';
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
      arrowBack
    }
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
    }
  }
});

</script>
<style type="text/css">

</style>