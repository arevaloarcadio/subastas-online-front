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
            Publicar un producto
          </p>
          <!--<p class="sub-title"  style="margin-top: -3%;">
            Detalles del producto
          </p>-->
      </ion-col>
    </ion-row>
  <ion-content class="ion-padding">
  
     
        
         <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Seleccione una categoría</label>
              <div  class="input-container">
                 <input type="text" style="font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="category" class="input-text" readonly="" @click="openPopover($event)">
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4%;" @click="openPopover($event)">
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
                <input type="text" v-model="address" name="" class="input-text">
              </div>
            </div>
          </ion-col>
        </ion-row>
   
            <ion-row class="container" style="border-radius: 10px" >
              <div class="input-container" style="height: 55px; width: 97%;margin-left: 1.5%;">
              
                    <img :src="'https://www.countryflags.io/'+flag+'/flat/64.png'" class="select-country" style="width: 20px;height: 16px">
                    <ion-select id="ionSelectCountry" :interface-options="customActionSheetOptions" interface="action-sheet"  style="background: #32BAB0;border-radius: 10px;color: #32BAB0;font-family: Montserrat;width: 83px;height: 100%;margin-top: -1px;"  ok-text="Seleccionar" cancel-text="Cerrar" @ionChange="getCountry($event)">
                      <ion-select-option v-for="country in countries" :key="country" :value="country.country">{{country.country}}</ion-select-option>
                  </ion-select>
       
                <ion-col size="8">
                  <div style="margin-left: -13%;">
                    <div   >
                      <input type="text" style="padding-left: 14px;font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="country" class="input-text">
                    </div>
                  </div>
                </ion-col>
              </div>  
            </ion-row>
        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input" style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 28px;letter-spacing: 0.75px;color: #32BAB0;">Estado o Provincia</label>
              <div  class="input-container">
                <input type="text" style="font-size: 18px; font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;" v-model="city" class="input-text" >
                <ion-select  :interface-options="customActionSheetOptions" interface="action-sheet" v-model="select_city" style="color: #32BAB0;width: 20%;"  @ionChange="getCity($event)" >
                  <ion-select-option  v-for="state in state" :key="state" :value="state.name">{{state.name}}</ion-select-option>
              </ion-select>
               <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4%;" >
                 <path d="M21 1L11 11L1 1" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </ion-col>
        </ion-row> 

        
        <ion-row  v-show="!showAppleSignIn">
          <ion-col >
             <ion-radio-group>
              <ion-row>
                <ion-col>
                  <ion-item  lines="none" style="margin-left: -11px;">
                    <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;color: #5B716F;">Mostrar mi dirección solo al 
                      <br> aceptar el intercambio</p>
                    <ion-radio color="success" slot="start"  ref="show_direction"  @click="radio" style="margin-top: -3px;"></ion-radio>
                  </ion-item>
                </ion-col>
               </ion-row>
            </ion-radio-group>
          </ion-col>
        </ion-row> 
   <br>
     
         <ion-row  v-show="showAppleSignIn">

          <ion-col size="2">
              <input id="radio-2" style="margin-top: 13px;margin-left: 26px;z-index: 12;" class="radio-custom-2" name="radio-group" type="checkbox" @click="show_direction =! show_direction" v-model="show_direction" >
              <p for="radio-2" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 0px;line-height: 20px;align-items: center;color: #5B716F;text-align: left !important;padding-left: 13px;" class="radio-custom-label-2">M</p>
          </ion-col>
          <ion-col size="10">
             <p for="radio-2" @click="show_direction =! show_direction" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;color: #5B716F;text-align: left !important;margin-left: 17px;" class="radio-custom-label-2">Mostrar mi dirección solo al  <br>  aceptar el intercambio</p>
          </ion-col>
        </ion-row>
        <br>
        <br>
        <center>

          <button type="button" class="btn-primary" @click="editProduct()" style="width: 124px;">
            Publicar
          </button>
         </center> 
           <br><br><br><br><br><br>         
   
    </ion-content>   
 <!--<ion-popover
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
  
  </ion-popover>-->
  
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

  IonPage,
  popoverController
  //IonPopover 
 } from '@ionic/vue';

import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';
import { defineComponent, ref } from 'vue';
import toast from '@/toast'
import { mapGetters } from 'vuex'
import countries from '../pages/countries.json'
import states from '../pages/states.json'
import { Plugins } from '@capacitor/core'
import '@capacitor/device';

export default defineComponent({
  components: {
 
    IonContent, 

    IonPage,
    //IonPopover,

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
      city :'',
      category :null,
      category_id : null,
      flag : 'https://restcountries.eu/data/afg.svg',
      estado : null,
      nombre : null,
      descripcion : null,
      image : null,
      show_direction : null,
      address : null,
      categories : [],
      state : [],
      countries : countries,
      states : states.data,
      showAppleSignIn : true
    }
  },
  created(){
    this.getCategory()
    this.getCategories()
    this.estado = this.$route.query.estado;
    this.country = this.$route.query.pais;
    var ev = {
      target : {
        value : this.country 
      }
    }

    this.getCountry(ev)
    this.nombre = this.$route.query.nombre;
    this.descripcion = this.$route.query.descripcion;
    this.to_change = this.$route.query.to_change ?? null
    this.$route.params.newFile == 'true' ? this.image = this.dataURLtoFile(this.$route.query.image,'image/png') : this.image = this.$route.query.image
    
    this.show_direction = this.$route.query.show_direction 
    this.address = this.$route.query.address;
    this.city = this.$route.query.city;
  },
  mounted(){
   this.show_ios()
    let svg = '<svg style="margin-left:10px" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'
    document.querySelector('#ionSelectCountry').shadowRoot.innerHTML = svg 
   
    this.$route.query.show_direction ? this.$refs.show_direction.classList.add('radio-checked') : '';
    this.$refs.show_direction.checked = this.show_direction 

    this.$route.query.show_direction  ? this.$refs.show_direction.classList.add('radio-checked') : this.$refs.show_direction.classList.remove('radio-checked') 

   
 },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    async openPopover(Event) {
      const popover = await popoverController
        .create({
          event : Event,
          component: PopoverSelectCategory,
          translucent : true,
          showBackdrop : false,
          keyboardClose : false,
          backdropDismiss : true,
          cssClass : "my-class-edit",
          componentProps : {categories : this.categories}
        })

      await popover.present();

      popover.onDidDismiss().then((data) => { 
        let category = data.data
        this.category = category.name;
        this.category_id =  category.id
        this.setOpen(false)
      });
 
    },
    async show_ios(){
      let device = await Plugins.Device.getInfo();
      this.showAppleSignIn = device.platform === 'ios';
    },
      getPicture : function () {
      this.image = this.$refs.picture.files[0];
   
    },
    radio(){
      this.show_direction = this.$refs.show_direction.checked
      console.log(this.show_direction)
      this.$refs.show_direction.checked = !this.$refs.show_direction.checked
      this.$refs.show_direction.checked ? this.$refs.show_direction.classList.remove('radio-checked') : this.$refs.show_direction.classList.add('radio-checked')
    },
    redirect() {
      this.$router.push({path: '/principal'});
    },
    async editProduct(){

    let loading = await toast.showLoading()

    await loading.present(); 

    let formData = new FormData();

    formData.append('estado',this.estado);
    formData.append('nombre',this.nombre);
    formData.append('descripcion',this.descripcion);
    this.$route.params.newFile == 'true' ? formData.append('image',this.image) : null;
    formData.append('show_direction',this.show_direction);
    formData.append('category_id',this.category_id);
    formData.append('country',this.country);
    formData.append('city',this.city);
    formData.append('to_change',this.to_change);
    formData.append('address',this.address);
    formData.append('user_id',this.getUser.id);
  
    axios
      .put("/products/"+this.$route.params.productId,formData,{'Content-Type': 'multipart/form-data'})
      .then(res => {
        console.log(res.data)
        loading.dismiss()
        this.$router.push({path : '/principal'})
      })
      .catch(err => {
        console.log(err)
        loading.dismiss()
      });
    
    },
    getCategory(){
      axios
      .get("/categories/"+this.$route.query.category)
      .then(res => {
        this.category = res.data.name
        this.category_id = res.data.id
       
      })
      .catch(err => {
        console.log(err)
        
      });
    },
      getCategories(){
     axios
      .get("categories")
      .then(res => {
        this.categories = res.data
       })
      .catch(err => {
        console.log(err)
      });
    },
     getCountry(ev){
      this.city = null
      const country = this.countries.filter(function(country) {
        if(country.country == ev.target.value){
          return country
        }
      });
  
      this.flag = country[0].abbreviation.toLowerCase()
      this.country = ev.target.value;
      this.getCities()
    },
    getCities(){
      var country = this.states.find(country => {
        return country.name == this.country
      })
      this.state = country.states
    },
    getCity(ev){
      this.city = ev.target.value;
    },
    category_(category){
      this.category = category.name;
      this.category_id =  category.id
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
        this.getEditCountry(this.$route.query.pais) 
        //this.country = this.countries[0].name
        //this.flag = this.countries[0].flag
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

.checkbox-custom-2, .radio-custom-2 {
    opacity: 0;
    position: absolute;   
}

.checkbox-custom-2, .checkbox-custom-label-2, .radio-custom-2, .radio-custom-label-2 {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
}

.checkbox-custom-label-2, .radio-custom-label-2 {
    position: relative;
}

.checkbox-custom-2 + .checkbox-custom-2-label:before, .radio-custom-2 + .radio-custom-label-2:before {
    content: '';
    background: #fff;
    border: 8px solid #E9EBEB;
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    padding: 2px;
    margin-right: 10px;
    text-align: center;
}

.checkbox-custom-2:checked + .checkbox-custom-label-2:before {
    background: rebeccapurple;
    box-shadow: inset 0px 0px 0px 4px #fff;
}

.radio-custom-2 + .radio-custom-label-2:before {
    border-radius: 50%;

}

.radio-custom-2:checked + .radio-custom-label-2:before {
    background: #ccc;
    box-shadow: inset 0px 0px 0px 10px #32BAB0;
    border-radius: 99px;

}


.checkbox-custom-2:focus + .checkbox-custom-label-2, .radio-custom-2:focus + .radio-custom-label-2 {
  outline: 0px solid #ddd; /* focus style */
}
</style>



