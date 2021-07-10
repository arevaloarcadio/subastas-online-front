<template>
<ion-page>
   <ion-row>
       <ion-col>
        <button @click="redirect()" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 52%;position: absolute;" ></ion-icon>
        </button>
          
          <p style="color: #000">
            Publicar un producto
          </p>
          <p>
            Detalles del producto
          </p>
      </ion-col>
    </ion-row>
  <ion-content>
      <ion-list>
     
        
         <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Seleccione una categoria</label>
              <div  class="input-container">
                <ion-select  :interface-options="customActionSheetOptions" interface="action-sheet"  class="input-text" style="color: #32BAB0;" >
                <ion-select-option value="Hogar">Hogar</ion-select-option>
                <ion-select-option value="Técnología">Técnología</ion-select-option>
                <ion-select-option value="Calzado">Calzado</ion-select-option>
                <ion-select-option value="Accesorios">Accesorios</ion-select-option>
                <ion-select-option value="Deportes">Deportes</ion-select-option>
                <ion-select-option value="Videojuegos">Videojuegos</ion-select-option>
              </ion-select>
              </div>
            </div>
          </ion-col>
        </ion-row> 


        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Dirección</label>
              <div  class="input-container">
                <input type="" name="" class="input-text">
              </div>
            </div>
          </ion-col>
        </ion-row>
   
        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Selecciona tu pais</label>
              <div  class="input-container">
                <ion-select  :interface-options="customActionSheetOptions" interface="action-sheet"  class="input-text" style="color: #32BAB0;" >
                <ion-select-option value="Peru">Peru</ion-select-option>
              </ion-select>
              </div>
            </div>
          </ion-col>
        </ion-row> 

        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Selecciona tu Provincia</label>
              <div  class="input-container">
                <ion-select  :interface-options="customActionSheetOptions" interface="action-sheet"  class="input-text" style="color: #32BAB0;" >
                <ion-select-option value="Peru">Peru</ion-select-option>
              </ion-select>
              </div>
            </div>
          </ion-col>
        </ion-row> 

        <ion-row>
          <ion-col >
             <ion-radio-group value="biff">
              <ion-row>
                <ion-col>
                  <ion-item  lines="none">
                    <p class="p-no-center">Mostrar mi dirección solo al aceptar el intercambio</p>
                    <ion-radio color="success" slot="start" value="biff"></ion-radio>
                  </ion-item>
                </ion-col>
               </ion-row>
            </ion-radio-group>
          </ion-col>
        </ion-row> 
        <br>
        <br>
        <center>
          <button type="button" class="btn-primary" @click="redirect()" style="width: 300px">
            Publicar
          </button>
         </center>     
      </ion-list>
      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>    
  </ion-page>  
</template>


<script lang="ts">

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
  methods:{
    redirect() {
      this.$router.push({path: '/create/product'});
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


