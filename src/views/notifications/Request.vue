<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 27%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p style="color: #000" class="title">
            Solicitud
          </p>
          <p>
           ¡Alguien quiere intercambiar <br>contigo!
          </p>
      </ion-col>
      
    </ion-row>
    <ion-row>
      <ion-avatar style="margin-left: 5%">
        <img src="/assets/avatar.png">
      </ion-avatar>
      <ion-col style="margin-top: 2%">
          <span class="text-control">Nombre del Usuario</span> 
          <p class="p-no-center" style=" margin-top: 1%">
            Hace 5 min
          </p>

      </ion-col>
    </ion-row>
     <svg width="70" height="56" viewBox="0 0 70 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;margin-left: 41%;margin-top: 293px;z-index: 10000;">
            <g filter="url(#filter0_d)">
            <path d="M13.0998 27.0469C12.4271 27.0462 11.7725 27.2646 11.235 27.669C10.6974 28.0734 10.3062 28.6418 10.1204 29.2884C9.93466 29.9349 9.96446 30.6243 10.2053 31.2524C10.4462 31.8804 10.885 32.413 11.4554 32.7695L19.7793 41.0934C20.067 41.3809 20.4085 41.6089 20.7844 41.7644C21.1602 41.9199 21.563 41.9999 21.9697 41.9998C22.3765 41.9996 22.7792 41.9194 23.1549 41.7636C23.5307 41.6078 23.872 41.3795 24.1595 41.0918C24.447 40.8041 24.6751 40.4626 24.8306 40.0867C24.9861 39.7109 25.0661 39.3081 25.0659 38.9014C25.0658 38.4946 24.9855 38.0919 24.8297 37.7162C24.674 37.3404 24.4457 36.9991 24.158 36.7116L20.6866 33.2433H44.0664C44.8877 33.2433 45.6754 32.9171 46.2561 32.3363C46.8369 31.7556 47.1631 30.9679 47.1631 30.1466C47.1631 29.3254 46.8369 28.5377 46.2561 27.957C45.6754 27.3762 44.8877 27.05 44.0664 27.05H13.0998V27.0469Z" fill="#32BAB0"/>
            <path d="M56.4965 20.9529C57.1692 20.9536 57.8238 20.7352 58.3613 20.3308C58.8988 19.9264 59.2901 19.3579 59.4758 18.7114C59.6616 18.0649 59.6318 17.3755 59.3909 16.7474C59.1501 16.1193 58.7113 15.5868 58.1408 15.2302L49.817 6.9064C49.2359 6.32575 48.448 5.99971 47.6266 6C46.8051 6.00029 46.0174 6.32689 45.4368 6.90795C44.8561 7.48901 44.5301 8.27694 44.5303 9.09839C44.5306 9.91984 44.8572 10.7075 45.4383 11.2882L48.9097 14.7565H25.5298C24.7085 14.7565 23.9209 15.0827 23.3402 15.6634C22.7594 16.2442 22.4332 17.0318 22.4332 17.8531C22.4332 18.6744 22.7594 19.4621 23.3402 20.0428C23.9209 20.6235 24.7085 20.9498 25.5298 20.9498H56.4965V20.9529Z" fill="#32BAB0"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="69.5963" height="55.9998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>

    <ion-card class="cursor" style="width: 87%;left: 4%;height: 161px;">
       <ion-row>
   
             <img style="border-radius: 10px 10px 0px 0px;width: 132px;height: 120px;margin-left: 18px;margin-top: 19px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg">
     
         <ion-col>
       
         
      
        </ion-col>

          <img style="border-radius: 10px 10px 0px 0px;width: 132px;height: 120px;margin-right: 15px;margin-top: 19px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg">
   
      </ion-row>
     
      
      
    </ion-card>
    
    <p>  
      <ion-row>
        <ion-col>
           <button type="button" class="btn-line" style="width: 132px;" @click="redirect({name : 'add_message.requests'})" >
            Rechazar
          </button>
        </ion-col>
         <ion-col>
           <button type="button" class="btn-primary" style="width: 136px;" @click="redirect({name : 'add_message.requests'})" >
            Ver Oferta
          </button>
        </ion-col>
      </ion-row>
      <br><br><br>
      <a  class="text-control">Cambiar preferencias de chat</a>
    </p>
    <ion-content class="ion-padding">
      <ion-list >
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script >

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 

  modalController,
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
   
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
 .img-left{
  margin-left: -8%;
  width: 40%;
  height: 100%;
  float: left;
  border-radius: 30px 30px 30px 30px;
 }
 .img-right{
  margin-right: -8%;
  width: 40%;
  height: 100%;
  float: right;
  border-radius: 30px 30px 30px 30px;
 }

   @media (max-width: 1000px){
    .img-center{
     position: absolute;
     left:45%;
     top: 38%;
    }
  }

  @media (min-width: 1000px){
     .img-center{
     position: absolute;
     left:49%;
     top: 38%;
    }
  }

div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}



  @media (max-width: 1000px){
    .button-add{
      height:100%;
      width: 35%;
      position: absolute;
      background: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px; 
    }
    .img-add{
      margin-top: 17%;
    }
  }

  @media (min-width: 1000px){
    .button-add{
      height:100%;
      width: 35%;
      position: absolute;
      background: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px; 
    }
    .img-add{
      margin-top: 6%;
    }
  }
</style>