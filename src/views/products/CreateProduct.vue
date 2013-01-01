<template>
<ion-page>
   <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 32%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <p style="color: #000" class="title">
            Publicar un producto
          </p>
          <p class="sub-title">
            ¿Qué quieres cambiar?
          </p>
      </ion-col>
    </ion-row>
  <ion-content>
      <ion-list>
        <ion-row> 
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Nombre</label>
            <div  class="input-container">
              <input type="" name="" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
      
         <ion-row> 
        <ion-col col-12>
          <div class="container">
            <label class="label-input" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;color: #32BAB0;">Descripción</label>
            <div  class="input-container">
              <input type="" name="" class="input-text">
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
                    <p class="text-radio">Nuevo</p>
                    <ion-radio color="success" slot="start" value="biff"></ion-radio>
                  </ion-item>
                    </ion-col>
                     <ion-col>
                  <ion-item  lines="none" style="margin-left: -27px;">
                    <p class="text-radio">Usado</p>
                    <ion-radio color="success" slot="start" value="griff"></ion-radio>
                  </ion-item>
                  </ion-col>
               </ion-row>
            </ion-radio-group>
          </ion-col>
        </ion-row>


        <ion-row> 
            <ion-col col-12>
              <div class="container"   style="cursor: pointer;">
         
                <div  class="input-container" v-if="takenImageUrl == null">
                  <label class="label-input" style="margin-top: 16px;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 28px;letter-spacing: 0.75px;" @click="setOpen(true)">Selecciona una foto</label>
                  <img src="/assets/PlusCircle2.png" style="margin-left:85%" @click="setOpen(true)">
                  <input class="input-text">
                </div>
                <div  class="input-container" v-else>
                   <svg @click="takenImageUrl = null" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: fixed;margin-left: 88%;margin-top: -87px;z-index: 12;">
              <path d="M20 3.02962L17.18 0.292725L10 7.26113L2.82 0.292725L0 3.02962L7.18 9.99803L0 16.9664L2.82 19.7033L10 12.7349L17.18 19.7033L20 16.9664L12.82 9.99803L20 3.02962Z" fill="#000" fill-opacity="0.5"/>
              </svg>

                <img :src="takenImageUrl" style="height: 200px;width: 100%;">
                </div>
              </div>
            </ion-col>
          </ion-row>
          <br>
          <ion-row> 
            <ion-col col-12>
              <div class="container">
                <label class="label-input">¿Qué quieres a cambio? </label>
                <div  class="input-container">
                  <input type="" name="" class="input-text">
                </div>
              </div>
            </ion-col>
          </ion-row>
        <br>
        <br>
        <center>
          <button type="button" class="btn-primary" @click="redirect('/create/details/product')" style="width: 215px">
            <span style="position: fixed;margin-left:-76px;margin-top: -8px;">Añadir categoría</span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: fixed;margin-left: 68px;margin-top: -6px;">
              <path d="M0 9H12.17L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7H0V9Z" fill="#E6EFFF"/>
            </svg>
          </button>
         </center>    
         <br><br><br><br> 
      </ion-list>
 
    </ion-content>    

    <ion-modal
        :is-open="isOpenRef"
        :enterAnimation="enterAnimation"
        :leaveAnimation="leaveAnimation"  
        css-class="my-custom-class"
        @didDismiss="setOpen(false)"
        @ionModalWillDismiss="setOpen(false)"
      >
    <ModalUpload @get="getPhoto($event)" @close="setOpen(false)" ></ModalUpload>
  </ion-modal>
  </ion-page>  
</template>


<script >

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalUpload from './ModalUpload'
import { 

  IonContent, 

  modalController,
  IonList,
  IonPage,
  createAnimation,
  IonModal
 } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    ModalUpload,
    IonContent, 

    IonList,
    IonPage,
    IonModal
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
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;

    return {  
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
      repeat,
      arrowBack,
      camera,
      isOpenRef,
      setOpen
    }
  },
  data(){
    return{
      takenImageUrl : null
    }
  },
  methods:{
    redirect(path) {
      this.$router.push({path: path});
    },
    async openModal() {
    
      const modal = await modalController
        .create({
          component: ModalUpload,
          keyboardClose : true,
          enterAnimation: this.enterAnimation,
          leaveAnimation: this.leaveAnimation  
        })
      return modal.present();
    },
    enterAnimation : function () {
      let baseEl = document
        const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return createAnimation()
            .addElement(baseEl)
            .easing('ease-out')
            .duration(500)
            .addAnimation([backdropAnimation, wrapperAnimation]);
    },
    leaveAnimation  : function () {
       return this.enterAnimation(document).direction('reverse');
    }, 
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
    },
    getPhoto($event){
      this.takenImageUrl = $event.takenImageUrl;
      this.setOpen(false)
    }
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


