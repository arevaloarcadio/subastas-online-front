<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)"  >
          
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 52%;position: absolute;" ></ion-icon>
        </button>
          
          <p>
            Detalle del producto
          </p>
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-card>
          <div align="center" class="badge"><ion-icon :icon="repeat"></ion-icon>10</div>
          <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>
        </ion-card>
         <ion-row>
             <ion-col>
              <span class="text-control" style="margin-left: 2%;font-weight: 600">
                Nombre de Producto
              </span>
            </ion-col>
            <img src="/assets/Tag-Green.png">
          </ion-row>
          <p style="float: left;margin-left: 2%; font-weight: 150 !important;">
            Dirección, Pais
          </p>
          <br>
          <br>
          <br>
          <span class="text-control" style="margin-left: 2%; font-weight: 400">
             Descripción del producto
          </span>
          <br>
          <p class="p-no-center" style="float: left;margin-left: 2%">
            Bicicleta especial para adultos mayores con poco uso bicicleta especial para adultos mayores con poco uso
          </p>
          <div align="center" class="buttons-details">
          <ion-row >
              <ion-col   size="6" size-sm >  
                <button type="button" class="btn-line"  style="width: 140px" @click="openModal">Mas Información</button>
              </ion-col>
              <ion-col   size="6" size-sm >  
                <button type="button" class="btn-primary" style="width: 140px" @click="redirect({ name : 'select_product.requests',params : { productId : 1} })" >Me Interesa</button>
              </ion-col>
            </ion-row>
            <p class="p-no-center"  style="float: left;margin-left: 2%">
              Te puede interesar...
            </p>
            <br><br><br>  
            <ion-row>
             <ion-col v-for="n in 6" :key="n"  size="6" size-sm >
                <ion-card>
                  <div align="center" class="badge-2">   <ion-icon :icon="repeat"></ion-icon>10</div>
                  <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>

                  <ion-card-header>

                    <ion-card-subtitle  style="color: #000">
                    <ion-row> 
                    Nombre {{n}}
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content>  <p class="p-no-center">Ubicación</p>
                </ion-card-content>

              </ion-card>
            </ion-col>
          </ion-row>
          </div>
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

</style>