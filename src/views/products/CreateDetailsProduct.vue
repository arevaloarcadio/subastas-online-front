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
          <p class="sub-title"  style="margin-top: -3%;">
            Detalles del producto
          </p>
      </ion-col>
    </ion-row>
  <ion-content>
      <ion-list>
     
        
         <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Seleccione una categoría</label>
              <div  class="input-container">
                 <input type="text" style="font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="category" class="input-text" readonly="" @click="setOpen(true, $event)">
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4%;" @click="setOpen(true, $event)">
                 <path d="M21 1L11 11L1 1" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </ion-col>
        </ion-row> 


        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input" style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 28px;letter-spacing: 0.75px;color: #32BAB0;">Dirección</label>
              <div  class="input-container">
                <input type="" name="" class="input-text">
              </div>
            </div>
          </ion-col>
        </ion-row>
   
            <ion-row class="container" style="border-radius: 10px" >
              <div class="input-container" style="height: 55px; width: 97%;margin-left: 1.5%;">
              
                    <img :src="flag" class="select-country" style="width: 20px;height: 16px">
                    <ion-select id="ionSelectCountry" :interface-options="customActionSheetOptions" interface="action-sheet" style="background: #32BAB0;border-radius: 10px;color: #32BAB0;font-family: Montserrat;width: 83px;height: 100%;"  ok-text="Seleccionar" cancel-text="Cerrar" @ionChange="getCountry($event)">
                      <ion-select-option v-for="country in countries" :key="country" :value="country.name">{{country.name}}</ion-select-option>
                  </ion-select>
       
                <ion-col size="8">
                  <div style="margin-left: -13%;">
                    <div   >
                      <input type="text" style="font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="country" class="input-text">
                    </div>
                  </div>
                </ion-col>
              </div>  
            </ion-row>
        <ion-row>
          <ion-col col-12>
            <div class="container">
              <div  class="input-container">
                 <input type="text" style="font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="city" class="input-text" >
                <ion-select  :interface-options="customActionSheetOptions" interface="action-sheet" v-model="select_city" style="color: #32BAB0;width: 20%;"  @ionChange="getCity($event)" >
                <ion-select-option value="Roterdam">Roterdam</ion-select-option>
                <ion-select-option value="Rote">Rote</ion-select-option>
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
                    <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;color: #5B716F;">Mostrar mi dirección solo al 
                      <br> aceptar el intercambio</p>
                    <ion-radio color="success" slot="start" value="biff" style="margin-top: -3px;"></ion-radio>
                  </ion-item>
                </ion-col>
               </ion-row>
            </ion-radio-group>
          </ion-col>
        </ion-row> 
        <br>
        <br>
        <center>
          <button type="button" class="btn-primary" @click="redirect()" style="width: 124px;">
            Publicar
          </button>
         </center> 
           <br><br><br><br>     
      </ion-list>

    </ion-content>   
 <ion-popover
    :is-open="isOpenRef"
    css-class="my-class"
    :event="event"
    :translucent="true"
    :showBackdrop="false"
    :keyboardClose="true"
    :backdropDismiss="false"
    @ionPopoverWillDismiss="setOpen(false)"
    @ionPopoverDidDismiss="setOpen(false)"
    >
    <PopoverSelectCategory  @category="category_($event)"></PopoverSelectCategory> 
  
  </ion-popover>
  
  </ion-page>  
</template>


<script>

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import PopoverSelectCategory from './PopoverSelectCategory'
import axios from 'axios'
import { 

  IonContent, 
 
  modalController,
  IonList,
  IonPage,
  IonPopover 
 } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
    PopoverSelectCategory,
    IonList,
    IonPage,
    IonPopover,

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
    const event_ref = ref();
    const setOpen = (state,event = null) => {
     
      event_ref.value = event; 
      isOpenRef.value = state;
      
    }

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
      repeat,
      arrowBack,
      camera,
      isOpenRef, 
      setOpen, 
      event
    }
  },
  data(){
    return{
      country : null,
      city :'Roterdam',
      category :null,
      flag : 'https://restcountries.eu/data/afg.svg'
    }
  },
  mounted(){

    let svg = '<svg style="margin-left:14px" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'


    document.querySelector('#ionSelectCountry').shadowRoot.innerHTML = svg 
  
    this.getCountries()
   

  },
  methods:{
    redirect() {
      this.$router.push({path: '/principal'});
    },
    getCountry(ev){
      this.country = ev.target.value;
    },
    getCity(ev){
      console.log(ev)
      this.city = ev.target.value;
    },
    category_(category){
      console.log(category)
      this.category = category.category;
      this.setOpen(false)
    },
    getCountries(){
      
      const awsAxios = axios.create({
          transformRequest: (data, headers) => {
              // Remove all shared headers
              delete headers.common;
              // or just the auth header
              delete headers['auth-token']
          }
      });

      awsAxios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        this.countries = res.data
        this.country = this.countries[0].name
        this.flag = this.countries[0].flag
       })
      .catch(err => {
        console.log(err)
      });
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


<style scoped="">

ion-select::part(text) {
  display: none;
    padding: 5px 12px;
    background: #32BAB0;
    border: 1px solid #32BAB0;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-family: Montserrat;
    margin-left: 50%
}

ion-select::part(icon) {
   display: none;
}
.ion-select2 {
    color: #32BAB0;
    opacity: 1;

    left: 65%;
    position: absolute;
}



.container1{

   background-color: #F3F3F3;
    padding-top: 8px;
    position: relative;
    border-radius: 8px;

}

.input-text1{
  background-color: transparent;
    color: rgb(60, 74, 91);

    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 3px;
    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0px;
    padding: 12px 14px;
    transition: background-color 0.3s ease-in-out 0s;
    width: 100%;

/* identical to box height */



}

.input-container1{
      border-color: rgb(188, 202, 216);
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out 0s;
    border: 0px solid rgba(91, 113, 111, 0.8);
}


.input-container1:hover{
  border-color: rgb(1 4 8);
}

.select-country{
  z-index: 1000;position: absolute;top: 36%; left: 15px;


}

ion-alert{
  display: none;
}

ion-radio {
  color: transparent;
}
ion-radio::part(mark){

 height: 14px;
  width: 14px;
  background: #32BAB0;
/* Shadow Blue · 16dp */
box-sizing: border-box;
box-shadow: 0px 16px 24px rgba(54, 123, 245, 0.2);
border-radius: 99px;

}
ion-radio::part(container){
    border: 0.5px solid #5B716F;
background: #E9EBEB;
  color: #CEFFFB;
  height: 28px;
  width: 28px;
   border-width: 1px;

}

</style>



