<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)"  >
          
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 40%;position: absolute;" ></ion-icon>
        </button>
          
          <p>Mis Productos
          </p>
      </ion-col>
    </ion-row>
     <ion-content>
      <ion-list>
        <ion-row>
             <ion-col v-for="n in 3" :key="n"  size="6" size-sm >
                <ion-card>
                  <div align="center" class="badge-3"  @click="openPopover" ><img src="/assets/more_vertical.png" > </div>
                  <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>

                  <ion-card-header>
                 
                  <ion-card-subtitle  style="color: #000">
                    <ion-row> 
                      <b>Nombre {{n}}</b> 
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content>  <b>Ubicacion</b>
                </ion-card-content>

              </ion-card>
            </ion-col>
   
            <ion-col  size="6" size-sm >
              <ion-card style="height: 93%;">
                <div style="margin-top: 15%">
                 <center>
                  <button class="button-add-2"><img class="img-add-2" src="/assets/FAB.png">
                  </button>
                </center>
                </div>
              </ion-card>
            </ion-col>
          </ion-row>
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
import PopoverProduct from './PopoverProduct.vue'
import { 
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,
  IonList,
  IonPage,
  popoverController
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
    },
    async openPopover(Event) {
      const popover = await popoverController
        .create({
          component: PopoverProduct,
          cssClass: 'my-custom-class',
          event: Event,
          translucent: true
        })
      await popover.present();

      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
});

</script>
<style type="text/css">

  @media (max-width: 500px){
    .button-add-2{
      margin-left: 7%;
      background: #fff;
      margin-top: 4%;
    }
    .img-add-2{
      margin-left: 2%;
      margin-top: 40%;
    }
    .add{
       height: 90.5%;
    }
  }

  @media (min-width: 1000px){
    .button-add-2{
      width: 90%;
      height:90%;
      background: #fff;
      margin-top: 3%;
    }
    .img-add-2{
      margin-left: 2%;
      margin-top: 10%;
    }
    .add{
      margin-top: 92.5%;
    }
  }
</style>