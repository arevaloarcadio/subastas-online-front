<template>
<ion-page>
   <ion-row>
       <ion-col>
        <br>
          <p style="color: #000" class="title">
           Mis intercambios
          </p>
      </ion-col>
    </ion-row>
    
     <p>
      <button style="background: #fff;margin-left: -13px;"> 
        <SvgProducts></SvgProducts>  
      </button>
    </p>
    
    <ion-row style="    margin-top: -25px;" >
      <ion-col size="8">
        <div style="margin-left: 16px;width: 120%;">
        <ion-row  style="margin-left: -20px;">
        
          <span  v-for="filter in filters" :key="filter" class="small-filters" :style="styles[filter]"><span :style="styles[filter].span">{{filter}}</span><span style="color:  rgba(91, 113, 111, 0.6);" @click="removeFilter(filter)">
            <svg v-if="filter != 'Por confirmar'" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 8% 9% 8% 84%;">
              <path d="M9 1.269L7.731 0L4.5 3.231L1.269 0L0 1.269L3.231 4.5L0 7.731L1.269 9L4.5 5.769L7.731 9L9 7.731L5.769 4.5L9 1.269Z" fill="#5B716F" fill-opacity="0.6" />
            </svg>
            <svg v-else width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 7%;margin-left: 2%" >
              <path d="M9 1.269L7.731 0L4.5 3.231L1.269 0L0 1.269L3.231 4.5L0 7.731L1.269 9L4.5 5.769L7.731 9L9 7.731L5.769 4.5L9 1.269Z" fill="#5B716F" fill-opacity="0.6" />
            </svg>
          </span>
         </span>
        </ion-row>
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-label style="color: #32BAB0;font-style: normal;color: #000;margin-left: 50%;font-weight: 500"  @click="openPopover($event)">Filtrar</ion-label>
      </ion-col>
    </ion-row>
    <ion-content>
      <p v-if="products.length == 0">
         Actualmente no tiene registrado intercambios
        </p>
        <ion-card v-for="product in  products" :key="product" style="height: 138px;width: 95%; background: #FFFFFF;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);border-radius: 16px;">
          <ion-row >
            <ion-col>
              <img style="border-radius: 15px 30px 15px 15px;width: 177px;height: 209px;" :src="BasePublic+'uploads/'+product.photo" >
            </ion-col>
            <ion-col><br>

            <b style="color: #000;font-family: Montserrat;">{{product.name}}</b><br>
              <p class="p-no-center" style="margin-top: 2%; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 14px;line-height: 17px;letter-spacing: 0.75px;color: #001D1B;">{{product.pais}}, {{product.city}} </p> <br>
            <span class="text-control" style="position: absolute;top: 50%;font-weight: 500">{{product.status}}</span>
            </ion-col>
          </ion-row>
          
        </ion-card>
        <!--<ion-card style="height: 138px;width: 95%; background: #FFFFFF;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);border-radius: 16px;">
          <ion-row>
            <ion-col>
              <img style="border-radius: 15px 30px 15px 15px;width: 177px;height: 209px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg" >
            </ion-col>
            <ion-col><br>

            <b style="color: #000;font-family: Montserrat;">Nombre de producto</b><br>
            <p class="p-no-center" style="margin-top: 2%; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 14px;line-height: 17px;letter-spacing: 0.75px;color: #001D1B;">Pais, Cuidad </p><br>
            <span class="text-control"  style="position: absolute;top: 50%;font-weight: 500">Recibida</span>
            </ion-col>
          </ion-row>
          
        </ion-card>
          <ion-card style="height: 138px;width: 95%;box-shadow: inherit; background: #FFFFFF;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);border-radius: 16px;">
          <ion-row>
            <ion-col>
              <img style="border-radius: 15px 30px 15px 15px;width: 177px;height: 209px;" src="https://ionicframework.com/docs/demos/api/card/madison.jpg" >
            </ion-col>
            <ion-col><br>

            <b style="color: #000;font-family: Montserrat;">Nombre de producto</b><br>
              <p class="p-no-center" style="margin-top: 2%; font-size: 14px;line-height: 17px;letter-spacing: 0.75px;color: #001D1B;">Pais, Cuidad </p> <br>
            <span class="text-control"  style="position: absolute;top: 50%;font-weight: 500">Por Confirmar</span>
            </ion-col>
          </ion-row>
          
        </ion-card>-->

   
   <br><br><br><br>
    </ion-content>    
    <!--<ion-popover
    :is-open="isOpenRef"
    css-class="my-custom-class"
    :event="event"
    :translucent="true"
    :showBackdrop="false"
    :keyboardClose="true"
    :backdropDismiss="false"
    @ionPopoverWillDismiss="setOpen(false)"
    @ionPopoverDidDismiss="setOpen(false)"
    >

    <PopoverFilter  ref="PopoverFilter" @select="filter_($event)"></PopoverFilter>
  </ion-popover>-->
  </ion-page>  
</template>


<script >

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import BasePublic from '@/plugins/store/utils'
import { 

  IonContent, 

  modalController,
  popoverController,
  IonPage,
 } from '@ionic/vue';
import PopoverFilter from './PopoverFilter.vue'

import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';

import { defineComponent, ref } from 'vue';
import SvgProducts from './SvgProducts'
import axios from 'axios'
import { mapGetters } from 'vuex'
import io from 'socket.io-client'

var socket  = io(axios.defaults.baseURL,{
  cors: {
    origin: '*',
  },
  withCredentials : false
});

socket.on("connection")

export default defineComponent({
  components: {
    SvgProducts,
    IonContent, 

    IonPage
  },
  data(){
    return{
       width : screen.width,
       margin_top_active : null,
       BasePublic,
       filters : [] ,
       products : [],
       post_filters : [],
       products_values :{ 
        'Aceptadas' : {
          name : 'Aceptada'
        },
        'Recibidas' : {
          name : 'Recibida'
        },
        'Rechazados' : {
          name : 'Rechazado'
        },
        'Por confirmar' : {
          name : 'Por confirmar'
        }
      },
       styles : {
        'Aceptadas' : {
          value :  'Aceptada',
          'width' : '110px', 
          span :{
            'position': 'absolute',
            'margin': '4px',
            'margin-left': '3%'
          }
        },
        'Recibidas' : {
          value :  'Recibida',
          'width' : '102px', 
          span :{
            'position': 'absolute',
            'margin': '4px',
            'margin-left': '3%'
          }
        },
        'Rechazados' : {
          value :  'Rechazado',
          'width' : '118px' , 
          span :{
            'position': 'absolute',
            'margin': '4px',
             'margin-left': '3%'
          }
        },
        'Por confirmar' : {
          value :  'Por confirmar',
          'width' : '128px' , 
          span : {    
            'margin-left': '7%',
            //'margin': '-6px',
            //'margin-top': '1%',
            //'margin-left': '1%'
          }
        },
      }
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
      isOpenRef, setOpen, event
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  created(){
    
socket.emit('user_conected',this.getUser)

    this.getProducts()
  },
  methods:{
    filter_(filter){
  
    let value =  filter
    var index = this.filters.indexOf(value);
    if (index !== -1) {
    
      this.filters.splice(index, 1);
    
      if(this.margin_top_active != null){
        delete this.styles[this.margin_top_active]['margin-top'] 
        this.margin_top_active = null
      }
    
    }else{
      this.filters.push(value)
      this.post_filters.push(this.products_values[value].name)

      if(this.width <= 505 &&  this.filters.length > 2){
        this.margin_top_active = value
        console.log( this.margin_top_active)
        this.styles[value]['margin-top'] =  '10px'
      }

    }
    this.getProducts()
    this.setOpen(false)
    //this.$refs.ionSelectFilter.value = ''
    },
    removeFilter(filter){

      var index = this.filters.indexOf(filter);
      var index1= this.post_filters.indexOf(this.products_values[filter].name);3
      if(this.margin_top_active != null){
        delete this.styles[this.margin_top_active]['margin-top'] 
        this.margin_top_active = null
      }
      
      if (index !== -1 || index1 !== -1) {
        this.filters.splice(index, 1);
        this.post_filters.splice(index1, 1);
      }
      this.getProducts()
    },
    redirect(path) {
      this.$router.push({path: path});
    },
    async openPopover(Event) {
      const popover = await popoverController
        .create({
          event : Event,
          component: PopoverFilter,
          translucent : true,
          showBackdrop : false,
          keyboardClose : false,
          backdropDismiss : true,
          cssClass : "my-custom-class",
        })

      await popover.present();

      popover.onDidDismiss().then((data) => { 
        console.log(data)
        if(data.role != 'backdrop')
          this.filter_(data.data)
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
    getProducts(){
      
      axios
        .post("/exchanges/user/"+this.getUser.id,{
        filters : this.post_filters
        })
        .then(res => {
          console.log(res.data)
          this.products = res.data
         })
        .catch(err => {
          console.log(err)
        });
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
  background: #FFFFFF;
  border: 1px solid #32BAB0;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 1%;
  height: 27px;
  font-weight: 400;
  font-size: 14px;
  margin-left: 4%;
}



</style>


<style type="text/css">
.my-custom-class .popover-content{
  top: 203.5px !important;
  width: 160px !important;
  left: 189.5px !important;
  transform-origin: right top !important;
  height: 125px !important;
  border-radius: 15px !important;
}

</style>