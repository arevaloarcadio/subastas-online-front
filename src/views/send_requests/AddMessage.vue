<template>
  <ion-page>
    <ion-row>
       <ion-col>
       <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 22%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p style="color: #000" class="title">
            Enviar solicitud
          </p><br>
          <p class="sub-title" style="width: 80%;margin-left: 10%;font-weight: 500;">
           Agrega un mensaje que describa tu oferta
          </p>
      </ion-col>
      
    </ion-row>
   
    <ion-content class="ion-padding">
       <ion-card style="box-shadow: inherit;margin-top: 10%;width: 101%;margin-left: -1%">
      <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" class="img-left">
      <img src="/assets/ArrowsLeftRight.png" class="img-center">
      <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" class="img-right">
    </ion-card>
    <p>  

   
    </p>
        <p style="margin-top: -18px;">
        <ion-row>
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Mensaje</label>
            <div  class="input-container">
              <textarea style="line-height: 38px;height: 120.55px" class="input-text" placeholder="Que tal si intercambiamos">  </textarea>
            </div>
          </div>
        </ion-col>
      </ion-row>
         
          <br>
          <button type="button" class="btn-primary" @click="redirect({name : 'success.requests'})" style="width: 200px">
              Enviar Solicitud
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
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,
  IonPage
 } from '@ionic/vue';
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
margin-left: -15%;
 width: 181px;
height: 210px;
  float: left;
  border-radius: 30px 30px 30px 30px;

 }
 .img-right{
margin-right: -15%;
  width: 181px;
height: 210px;
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