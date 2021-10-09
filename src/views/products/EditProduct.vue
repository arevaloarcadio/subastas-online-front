<template>
<ion-page>
   <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 44%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <p style="color: #000" class="title">
            Editar producto
          </p>
          <!--<p class="sub-title">
            ¿Qué quieres cambiar?
          </p>-->
      </ion-col>
    </ion-row>
  <ion-content class="ion-padding">

        <ion-row> 
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Nombre</label>
            <div  class="input-container">
              <input type="text" name="" v-model="nombre" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
      
         <ion-row> 
        <ion-col col-12>
          <div class="container">
            <label class="label-input" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;color: #32BAB0;">Descripción</label>
            <div  class="input-container">
              <input type="text" name="" v-model="descripcion" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
       
          <ion-row v-show="!showAppleSignIn" style="margin-left: -10px;">
          <ion-col >
             <ion-radio-group value="Nuevo" v-model="estado">
              <ion-row>
                <ion-col>
                  <ion-item  lines="none">
                    <p class="text-radio">Nuevo</p>
                    <ion-radio  color="success" slot="start" value="Nuevo" @click="estado ='nuevo'"></ion-radio>
                    
                  </ion-item>
                    </ion-col>
                     <ion-col>
                  <ion-item  lines="none" style="margin-left: -27px;">
                    <p class="text-radio">Usado</p>
                    <ion-radio  color="success" slot="start"  value="Usado" @click="estado ='usado'"></ion-radio>
                  </ion-item>
                  </ion-col>
               </ion-row>
            </ion-radio-group>
          </ion-col>
        </ion-row>

        <ion-row v-show="showAppleSignIn" style="margin-top: 10px">
          <ion-col style="margin-left: 20px;">
            <input id="radio-1" class="radio-custom" name="radio-group" type="radio" @click="estado ='nuevo'" value="nuevo"  checked>
            <label for="radio-1" style="  font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;display: flex;align-items: center;letter-spacing: 0.75px;color: #5B716F;" class="radio-custom-label">Nuevo</label>
          </ion-col>
          <ion-col style="margin-left: -42px;">
             <input id="radio-2" class="radio-custom" name="radio-group"  type="radio" @click="estado ='usado'" value="usado">
            <label for="radio-2" style="  font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;display: flex;align-items: center;letter-spacing: 0.75px;color: #5B716F;" class="radio-custom-label">Usado</label>
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
                  <svg @click="takenImageUrl = null" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="z-index: 12;margin-left: 90%;position: absolute;margin-top: -156px;">
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
                  <input type="text" v-model="to_change" class="input-text">
                </div>
              </div>
            </ion-col>
          </ion-row>
        <br>
        <br>
        <center>
          <button type="button" class="btn-primary" @click="redirect()" style="width: 215px">
            <span style="position: fixed;margin-left:-76px;margin-top: -8px;font-style: normal;font-weight: 400;font-size: 16px;line-height: 20px;color: #FFFFFF;">Editar categoría</span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: fixed;margin-left: 68px;margin-top: -6px;">
              <path d="M0 9H12.17L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7H0V9Z" fill="#E6EFFF"/>
            </svg>
          </button>
         </center>    
         <br><br><br><br><br><br>    

 
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

  IonPage,
  createAnimation,
  IonModal
 } from '@ionic/vue';

import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';

import { defineComponent, ref } from 'vue';
import toast from '@/toast'
import BasePublic from '@/plugins/store/utils'
import { Plugins } from '@capacitor/core'
import '@capacitor/device';

export default defineComponent({
  components: {
    ModalUpload,
    IonContent, 
 
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
      BasePublic,
      takenImageUrl : null,
      estado : 'nuevo',
      nombre : null,
      descripcion : null,
      image : null,
      to_change : null,
      newFile : false,
      showAppleSignIn : true,
      show_direction  : false
    }
  },
  mounted(){
    this.estado = this.$route.query.estado
    this.nombre = this.$route.query.name
    this.descripcion = this.$route.query.description
    this.takenImageUrl = BasePublic+this.$route.query.photo
    this.image = BasePublic+this.$route.query.photo
    this.to_change = this.$route.query.change
    this.show_direction = this.$route.query.show_direction
    this.show_ios()
  },
  methods:{
    redirect() {

      if(this.estado == null || this.nombre == null || this.descripcion == null || this.image == null){
         toast.openToast("Complete los campos restantes","success",2000);
         return;
      }

      let data = {
        estado : this.estado,
        nombre: this.nombre,
        descripcion: this.descripcion,
        image: this.image,
        to_change : this.to_change == null ? '' : this.to_change,
        pais : this.$route.query.pais,
        address : this.$route.query.address,
        category : this.$route.query.category,
        city : this.$route.query.city,
        show_direction : this.$route.query.show_direction,
      };

      this.$router.push({name: 'edit.details.product' ,params :{ productId :this.$route.query.id,newFile : this.newFile} ,query : {...data}});
    },
    async show_ios(){
      let device = await Plugins.Device.getInfo();
      this.showAppleSignIn = device.platform === 'ios';
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
      console.log($event)
      this.newFile = true
      this.image = $event.dataUrl
      this.takenImageUrl = URL.createObjectURL(this.dataURLtoFile($event.dataUrl,'image'));
      this.setOpen(false)
    },
    dataURLtoFile : function(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    },
      b64toBlob (b64Data, contentType='', sliceSize=512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);

          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
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

ion-radio{
 border-style: solid;
  border-width: 6px;
  border-radius: 15px;
  color: #CEFFFB;
  height: 28px;
  width: 28px;

}

ion-radio::part(mark){

  width: 18px ;
  height: 14px ;
}


.checkbox-custom, .radio-custom {
    opacity: 0;
    position: absolute;   
}

.checkbox-custom, .checkbox-custom-label, .radio-custom, .radio-custom-label {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
}

.checkbox-custom-label, .radio-custom-label {
    position: relative;
}

.checkbox-custom + .checkbox-custom-label:before, .radio-custom + .radio-custom-label:before {
    content: '';
    background: #fff;
    border: 5px solid #CEFFFB;
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    padding: 2px;
    margin-right: 10px;
    text-align: center;
}

.checkbox-custom:checked + .checkbox-custom-label:before {
    background: rebeccapurple;
    box-shadow: inset 0px 0px 0px 4px #fff;
}

.radio-custom + .radio-custom-label:before {
    border-radius: 50%;
}

.radio-custom:checked + .radio-custom-label:before {
    background: #ccc;
    box-shadow: inset 0px 0px 0px 10px #32BAB0;
}


.checkbox-custom:focus + .checkbox-custom-label, .radio-custom:focus + .radio-custom-label {
  outline: 0px solid #ddd; /* focus style */
}


</style>


