<template>
<ion-page>
  <br>
  <p style="color: #000" class="title">
   Publicaciones guardadas
  </p>
    <ion-content class="ion-padding">
     <ion-row style="width: 100%;">
       <ion-col v-for="(product,key) in products" :key="product"  size="6"  >
        <ion-card class="cursor" @click="redirect_details(product)" style="width: 98%;left: -8px;overflow-y: auto;">
          <div align="center" class="badge-2"  v-if="key%2!=0"> 
            <span style="position: absolute;left: 15%;top: 20%;">
            10
            </span>
            <svg  style="position: absolute;top: 15%;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 12.375L19.25 15.125L16.5 17.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.75 15.125H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.5 9.625L2.75 6.875L5.5 4.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.25 6.875H2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
           <img :src="BasePublic+product.photo" style="width: auto;height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">

            <ion-card-header>

         <ion-card-subtitle  style="color: #000">
            <ion-row style="margin-top: -14px;width: 90%;">
              <ion-col>
            <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;margin-left: -4px;"> 
               {{product.name}}
            </b>
            </ion-col>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;left: 87%;">
            <rect width="32" height="32" fill="white"/>
            <path d="M25 28L15.9991 23L7 28V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H24C24.2652 4 24.5196 4.10536 24.7071 4.29289C24.8946 4.48043 25 4.73478 25 5V28Z" fill="#32BAB0" stroke="#32BAB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </ion-row>  
          </ion-card-subtitle>
        
          </ion-card-header>

          <ion-card-content style="margin-top:-15px">{{product.pais}}, {{product.city}}
        </ion-card-content>
        <br>
      </ion-card>
    </ion-col>
  </ion-row>
       

 
    </ion-content>    
  </ion-page>  
</template>


<script >

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 

  modalController,
 
  IonPage
 } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

import { defineComponent, ref } from 'vue';
import axios from "axios"
import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
 
    IonContent, 

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
  data(){
    return{
      products :null
    }
  },
  created(){
    this.getProductsSaved()
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    redirect(path) {
      this.$router.push({path: path});
    },
    redirect_details(product) {
      this.$router.push({name: 'details.product',params :{ productId : product.id}, query : {...product}});
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
    getProductsSaved(){
     axios
      .get("/products/saved/"+this.getUser.id)
      .then(res => {
        this.products = res.data
       })
      .catch(err => {
        console.log(err)
      });
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


