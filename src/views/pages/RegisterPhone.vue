<template>

       <ion-content class="ion-padding"> 
         <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 1%;top: 32%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
      </ion-col>
    </ion-row>
         <br> <br>
            <span class="text-control" style="margin-left: 5%;font-size: 24px; font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 24px;line-height: 29px;color: #32BAB0;">Registro </span> 
            <br>
             <p class="p-no-center" style="margin-left: 5%;float: left;font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;color: #5B716F;margin-top: 0%;"> 
            Ingresa tu número de teléfono, te enviaremos un código 
            </p>
            <br>
            <br>
            <br>
            <br>
            <div style="display: flex;justify-content: center;" >   
              <Phone></Phone>
            </div>
             
            
             <div style="display: flex;justify-content: center;margin-top: 50px" >   
                 <div style="display: flex;padding-right: 28px;    padding-top: 18px;height: 51px !important;background: #32BAB0;border-radius: 10px;color: #fff;font-family: Montserrat;width: 110px" @click="select()"> <img  :src="'https://www.countryflags.io/'+flag+'/flat/64.png'" style="width: 20px;height: 16px;margin-top: 1px;margin-left: 18px;color: #fff">   
                        &nbsp;{{code}}
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;margin-left: 84px;margin-top: 6px;">'+
                    <path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                  <div class="container1" >
                    <div  class="input-container1">
                      <input type="number"  v-model="phone" @input="maxlength" class="input-text1">
                    </div>
                  </div>  
            </div>
            <p> 
            <ion-select  id="ionSelectPhoneCode" :interface-options="customActionSheetOptions" @ionChange="getValueCode($event)" interface="action-sheet" style="display: none; height: 51px !important;background: #32BAB0;border-radius: 10px;color: #32BAB0;font-family: Montserrat;width: 90px"  ok-text="Seleccionar" cancel-text="Cerrar">
            <ion-select-option v-for="code in codes" :key="code" :value="code.value">{{code.text}}</ion-select-option>

            </ion-select>

           
             
            <!--<ion-grid>
               <ion-row style="margin-top: 3%;">
                
                  <ion-col size="4">
                     <div style="padding-right: 28px;height: 51px !important;background: #32BAB0;border-radius: 10px;color: #fff;font-family: Montserrat;width: 110px" @click="select()"> <img  :src="'https://www.countryflags.io/'+flag+'/flat/64.png'" style="width: 20px;height: 16px;    margin-top: 18px;margin-left: 12px;color: #fff">   
                        &nbsp;{{code}}
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;margin-left: 13px;margin-top: 25px;">'+
                    <path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                   
                
                </ion-col>
                <ion-col size="8">
                  <div class="container1" >
                    <div  class="input-container1">
                      <input type="number"  v-model="phone" @input="maxlength" class="input-text1">
                    </div>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>-->
          
            <br>
            <br>
              <button type="button" class="btn-primary" @click="signupPhone" style="width: 177px">
                  Verificar
              </button>
            <br>
            <br>
            <!--<a  @click="redirect({path: '/pre_login'})" class="text-control">Atras</a>-->
            </p>
      </ion-content>          

</template>

<script>
import { toastController,IonSelect, IonSelectOption  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import Phone from './Phone'
import toast from '@/toast'
import code_number from './code_number'
import '@capacitor/device';
import { Plugins } from '@capacitor/core'

export default defineComponent({
  components: { Phone,IonSelect, IonSelectOption},
  name: "Register",
  data() {
    return {
      code_number,
      countries : null,
      codes :null,
      flag : 'https://restcountries.eu/data/afg.svg',
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
      phone : null,
      showAppleSignIn : true
    };
  },
  created(){
     this.getCodes()
  },
  mounted(){
    this.type = this.$route.query.type;
   
    this.show_ios()
    //this.getCountry()
  },
  methods: {
    redirect(poth){
      this.$router.push(poth);
    },

    async show_ios(){
      let device = await Plugins.Device.getInfo();
      this.showAppleSignIn = device.platform === 'ios';
    },
    getCountry(){
      
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
    
        this.getCodes()
      })
      .catch(err => {
        console.log(err)
      });
    },
    select(){
 document.querySelector('#ionSelectPhoneCode').click()
    },
    getCodes(){

      this.codes = code_number.map(function(country) {
        return {
          value : country.dial_code, 
          text : country.dial_code+' - '+country.name,
          flag : country.code.toLowerCase()   
        }
      });
      this.code = this.codes[0].value
      this.flag =  this.codes[0].flag
      
      let svg = '<div class="select-text-2" part="text-2">'+this.codes[0].value+'</div>'+
       '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;margin-left: 28px;">'+
                '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'          
  console.log(svg)
   // document.querySelector('#ionSelectPhoneCode').shadowRoot.innerHTML = svg 
    },
    getValueCode($event){
      if($event.target.value !== ''){
          //document.querySelector('#ionSelectPhoneCode').shadowRoot.innerHTML = ''
        
        const code = code_number.filter(function(country) {
          
          if(country.dial_code == $event.target.value){
       
            return {
              text : country.dial_code,
              flag : country.flag
            }
          }
        });
        
      
          this.code = code[0].dial_code
        
          this.flag = code[0].code.toLowerCase()
          
          let svg = '<div class="select-text-2" part="text-2">'+code[0].dial_code+'<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;margin-left: 7px;margin-top: 6px;">'+
                    '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
                  '</svg></div>'         
          console.log(svg)
          document.querySelector('#ionSelectPhoneCode').shadowRoot.innerHTML = svg 
          document.querySelector('#ionSelectPhoneCode').style.height = "51px";

      }
    },
    async openToast(message,color) {
      const toast = await toastController
        .create({
          position : 'top',
          color : color,
          message: message,
          duration: 2000
        })

      return toast.present();
    },
    async signupPhone(){
      let loading = await toast.showLoading()

      await loading.present();
      
      axios
      .post("/signup/phone", {
        phone : this.code+this.phone
      })
      .then(res => {
        loading.dismiss()
        console.log(res)
        toast.openToast("Envio de código existoso","error",2000);
        this.$router.push({name:'verify.phone' , query : {id_user:res.data.id_user }})
      })
      .catch(err => {
         //toast.openToast("Error al Verificar","error",2000);
         loading.dismiss()
        console.log(err)
      });
    },
    maxlength() {
      if (this.phone.length > 10) this.phone = this.phone.slice(0,12);
    }
  }
});
</script>


<style scoped>



ion-select::part(text) {
    display: none;

}

ion-select::part(text-2) {
   
    padding: 5px 12px;
    background: #32BAB0;
    border: 1px solid #32BAB0;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-family: Montserrat;
  
}
ion-select::part(icon) {
 display: none;
}

.label-input1{
  color: #32BAB0;
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 20px;
    left: 27px;
    position: absolute;
    top: 0px;
    margin: 0px;
    padding: 0px 8px;
    z-index: 1;
    background-color: aliceblue;
    transition: color 0.3s ease-in-out 0s;
    font-size: 16px;
}

.container1{

   background-color: #F3F3F3;
    padding-top: 8px;
    position: relative;


}

.input-text1{
  background-color: transparent;
    color: rgb(60, 74, 91);
    font-family: Montserrat;
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

.container1-ios{
  margin-top: 5px;
}

/* Set the icon color and opacity */


</style>


