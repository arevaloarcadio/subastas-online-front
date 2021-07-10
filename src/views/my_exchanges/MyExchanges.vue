<template>
<ion-page>
   <ion-row>
       <ion-col>
        <button @click="redirect('/principal')" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 24%;position: absolute;" ></ion-icon>
        </button>
          
          <p style="color: #000">
           Mis intercambios
          </p>
          <p>
            <button style="background: #fff"> <img src="/assets/see_products.png"></button>
          </p>
      </ion-col>

    </ion-row>

    <ion-row>
      <ion-col size="8">
        <div style="margin-left: 10%">
        <small class="small-filters" v-for="filter in filters" :key="filter">{{filter}}<span style="color:  rgba(91, 113, 111, 0.6);" @click="removeFilter(filter)">x</span></small>&nbsp;&nbsp;
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-label style="color: #32BAB0;font-family: Montserrat; font-style: normal;color: #000" @click="() => $refs.ionSelectFilter.click()">Filtrar</ion-label>
      </ion-col>
    </ion-row>
    <ion-content>
      <ion-list>
        <ion-card style=" height: 20%;">
          <ion-row>
            <ion-col>
              <img style="border-radius: 15px 30px 15px 15px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg" >
            </ion-col>
            <ion-col><br>

            <b style="color: #000;font-family: Montserrat;">Nombre de producto</b><br>
            <small>Pais, Cuidad</small> <br>
            <span class="text-control" style="position: absolute;top: 76%;">Enviada</span>
            </ion-col>
          </ion-row>
          
        </ion-card>
        <ion-card style=" height: 25%;">
          <ion-row>
            <ion-col>
              <img style="border-radius: 15px 30px 15px 15px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg" >
            </ion-col>
            <ion-col><br>

            <b style="color: #000;font-family: Montserrat;">Nombre de producto</b><br>
            <small>Pais, Cuidad</small> <br>
            <span class="text-control" style="position: absolute;top: 76%;">Recibida</span>
            </ion-col>
          </ion-row>
          
        </ion-card>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>    
    <ion-select  ref="ionSelectFilter"   multiple="true" style="position: absolute;left: -15%;top: 164px;" v-show="false" @ionChange="filter_($event)" v-model="filter" ok-text="Seleccionar" cancel-text="Cerrar">
            <ion-select-option value="Enviadas">Enviadas</ion-select-option>
            <ion-select-option value="Recibidas">Recibidas</ion-select-option>
            <ion-select-option value="Rechazados">Rechazados</ion-select-option>
            <ion-select-option value="confirmar">Por confirmar</ion-select-option>
          </ion-select>
  </ion-page>  
</template>


<script >

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
  data(){
    return{
       filters : [] 
    }
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
    filter_(ev){
      this.filters = ev.target.value
      //this.$refs.ionSelectFilter.value = ''
    },
    removeFilter(filter){
      var index = this.filters.indexOf(filter);
      if (index !== -1) {
        this.filters.splice(index, 1);
        this.$refs.ionSelectFilter.value = this.filters
      }
    },
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


<style scoped>

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

   .hidden{
     display: none;
   }


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


.small-filters{
  width: auto;
   background: #FFFFFF;
   border: 1px solid #32BAB0;
   box-sizing: border-box;
   border-radius: 8px;
   margin-left: 1%;
}
</style>


