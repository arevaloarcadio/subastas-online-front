<template>
<ion-page>
   <ion-row>
      <ion-col>
        <button @click="redirect('/principal')" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 52%;position: absolute;" ></ion-icon>
        </button>
          <p style="color: #000">
           Publicaciones guardadas
          </p>
      </ion-col>
    </ion-row>
    
    <ion-content>
      <ion-list>
        <ion-row>
             <ion-col v-for="n in 2" :key="n"  size="6" size-sm >
                <ion-card>
                  <div align="center" class="badge-2">   <ion-icon :icon="repeat"></ion-icon>10</div>
                  <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>

                  <ion-card-header>
                  <img style="float: right;" src="/assets/Tag-Green-2.png">
                  <ion-card-subtitle  style="color: #000">
                    <ion-row> 
                      Nombre {{n}}
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content>  Ubicación
                </ion-card-content>

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
    redirect(path) {
      this.$router.push({path: path});
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
/* Set the width to the full container and center the content */
ion-select {
  width: 100%;

  justify-content: center;
}

/* Set the flex in order to size the text width to its content */
ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

/* Set the placeholder color and opacity */
ion-select::part(placeholder) {
  color: #20a08a;
  opacity: 1;
}

/*
 * Set the font of the first letter of the placeholder
 * Shadow parts work with pseudo-elements, too!
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
 */
ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

/* Set the text color */
ion-select::part(text) {
    padding: 10px 20px;
    background: #fff;
    border: 1px solid #32BAB0;
    box-sizing: border-box;
    border-radius: 10px;
    color: #000;
    font-family: Montserrat;

}

/* Set the icon color and opacity */
ion-select::part(icon) {
  color: #32BAB0;
  opacity: 1;
}
   
</style>


