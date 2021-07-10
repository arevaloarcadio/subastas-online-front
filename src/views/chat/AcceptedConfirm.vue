<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 42%;position: absolute;" ></ion-icon>
        </button>
          <p style="color: #000;width: 80%;margin-left: 10%" >
            ¿Estas seguro de aceptar el cambio?
          </p>
      </ion-col>
      
    </ion-row>
    
    <ion-card>
       <ion-row>
        <ion-col>
             <img style="border-radius: 10px 10px 0px 0px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg">
        </ion-col>
         <ion-col>
          <center>
          <img src="/assets/ArrowsLeftRightGreen.png">
          </center>
        </ion-col>
         <ion-col>
          <img style="border-radius: 10px 10px 0px 0px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg">
        </ion-col>
      </ion-row>
     
      
      
    </ion-card>
    
    <p>  
       <button type="button" class="btn-primary" style="line-height: 15px;width: 200px;" @click="redirect({name : 'add_message.requests'})" >
        Si, estoy seguro
      </button>
      <br>
    </p>
    <ion-content class="ion-padding">
      <ion-list >
      </ion-list>
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