<template>

       <ion-content class="ion-padding"> 
         <br>
         <br>
         <br>
          <br>
             <span class="text-control" style="margin-left: 4%;font-style: normal;font-weight: 600;font-size: 24px;line-height: 29px;">Registro </span> 
            <br>
             <p style="margin-left: 4%;margin-top: 1.5%; float: left;font-weight: 500;"> 
            Ubicación
            </p>
            <br>
            <br>
            <br>
            <br>
            <p> 
            <ion-grid>

                <ion-row>
                  <ion-col size="4">
                    <img :src="flag" class="select-country" style="width: 20px;height: 16px">
                    <ion-select id="ionSelectCountry" :interface-options="customActionSheetOptions" interface="action-sheet" style="background: #32BAB0;border-radius: 10px;color: #32BAB0;font-family: Montserrat;width: 81%;height: 100%;"  ok-text="Seleccionar" cancel-text="Cerrar" @ionChange="getCountry($event)">
                      <ion-select-option v-for="country in countries" :key="country" :value="country.name">{{country.name}}</ion-select-option>
                  </ion-select>
                </ion-col>
                <ion-col size="8">
                  <div class="container1" style="margin-left: -13%;">
                    <div  class="input-container1" >
                      <input type="text" style="font-size: 18px;" v-model="country" placeholder="Selecciona tu pais" class="input-text1">
                    </div>
                  </div>
                </ion-col>
              </ion-row>

                <ion-row>
                 
                <ion-col>
                 <ion-col size="8">
                  <div class="container1">
                    <div  class="input-container1">

                      <input type="text"  style="font-size: 18px;" v-model="city"  placeholder="Selecciona tu cuidad" class="input-text1">
                      <ion-select id="ionSelectCity" ref="ionSelectCity" v-model="filter"  :interface-options="customActionSheetOptions"  @ionChange="getCity($event)" interface="action-sheet" v-show="true"  ok-text="Seleccionar" cancel-text="Cerrar" style="width: 20%;" >
                        <ion-select-option value="Cuidad">Cuidad</ion-select-option>
                      </ion-select>
                    </div>
                  </div>
                </ion-col>
                </ion-col>
              </ion-row>
            </ion-grid>
            
            <br>
            <br>
              <button type="button" class="btn-primary" @click="redirect()" style="width: 138px">
                  Continuar
              </button>
        
            </p>
      </ion-content>          

</template>

<script >
import { loadingController,toastController,IonRow,IonGrid,IonCol,IonSelect, IonSelectOption  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'
//import { injectStyles } from 'shadow-dom-inject-styles';

export default defineComponent({
  components: { IonRow,IonGrid,IonCol,IonSelect, IonSelectOption},
  name: "Register",
  data() {
    return {
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
      country : null,
      city : null,
      countries : null,
      flag : 'https://restcountries.eu/data/afg.svg'
    };
  },
  mounted(){
    this.type = this.$route.query.type;
    
    let svgCity = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M11 1L6 6L1 1" stroke="#32BAB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'

    let svgCountry = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'          
    document.querySelector('#ionSelectCity').shadowRoot.innerHTML = svgCity 
    document.querySelector('#ionSelectCountry').shadowRoot.innerHTML =  svgCountry 

    this.getCountries()
  },
  methods: {
    redirect(){
       this.$router.push({path: 'success'});
    },
    getCountry(ev){
      const country_selected = this.countries.filter(function(country) {
        if(country.name == ev.target.value){
           return country
        }
      });
      this.flag = country_selected[0].flag
      this.country = ev.target.value;
    },
    getCity(ev){
      this.city = ev.target.value;
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
        this.flag = this.countries[0].flag
       })
      .catch(err => {
        console.log(err)
      });
    },
    async register() {

       const loading = await loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por Favor Espere..',
         });

      await loading.present();

     let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmacion: this.password_confirmacion,
     };

    axios
      .post("/register",data)
      .then(res => {
        if(!res.data.error)
          this.openToast(res.data.data,'success')
        else
          this.openToast('Error Interno','warning')
      })
      .catch(err => {
        if(err.response.type == 'validation'){
          this.openToast(err.response.data.data,'warning')
        }else{
           this.openToast(err.response.data.data,'danger')
        }
      });

     await loading.dismiss()
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
  }
});
</script>


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
    border-radius: 8px;

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

.select-country{
  z-index: 1000;position: absolute;top: 36%; left: 16%;


}



</style>


