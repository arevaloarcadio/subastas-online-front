<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 40%;position: absolute;" ></ion-icon>
        </button>
          <p style="color: #000">
            Enviar solicitud
          </p>
          <p>
           Selecciona uno o más de tus productos
          </p>
      </ion-col>
      
    </ion-row>
    <ion-card style=" height: 25%;">
      <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" class="img-left">
      <img src="/assets/ArrowsLeftRight.png" class="img-center">
      <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" class="img-right">
    </ion-card>
    <p>  

   
    </p>
    <ion-content class="ion-padding">
      <ion-list>
        <p>
          <ion-item>
            <ion-label style="color:#32BAB0">Mensaje</ion-label>
            <ion-textarea rows="6" cols="20" placeholder="Que tal si intercambiamos..." style="font-family: Montserrat"></ion-textarea>
          </ion-item>
          <br>
          <button type="button" class="btn-primary" @click="redirect({name : 'success.requests'})" style="width: 300px">
              <b>Enviar Solicitud</b>
          </button>
       </p>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,
  IonList,
  IonPage
 } from '@ionic/vue';
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