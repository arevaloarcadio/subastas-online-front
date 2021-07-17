<template>

       <ion-content class="ion-padding"> 
         <br>
         <br>
         <br>
            <span class="text-control" style="margin-left: 5%;font-size: 24px; font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 24px;line-height: 29px;color: #32BAB0;">Registro </span> 
            <br>
             <p class="p-no-center" style="margin-left: 5%;float: left;font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;color: #5B716F;margin-top: 0%;"> 
            Ingresa tu número de teléfono, te enviaremos un código 
            </p>
            <br>
            <br>
            <br>
            <br>
            <p> 
              <Phone></Phone>

             
            <ion-grid>
               <ion-row style="margin-top: 3%;">
                  <ion-col size="4">
                    <img src="/assets/Bitmap.png" style="z-index: 1000;z-index: 1000;position: absolute;top: 36%; left: 18%;">
                    <ion-select id="ionSelectPhoneCode" :interface-options="customActionSheetOptions" interface="action-sheet" style="background: #32BAB0;border-radius: 10px;color: #32BAB0;font-family: Montserrat;width: 110%" value="+31" ok-text="Seleccionar" cancel-text="Cerrar">
                    <ion-select-option value="+56">+56</ion-select-option>
                    <ion-select-option value="+31">+31</ion-select-option>
                  </ion-select>
                </ion-col>
                <ion-col size="8">
                  <div class="container1">
                    <div  class="input-container1">
                      <input type="number" value="12655465498" class="input-text1">
                    </div>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
          
            <br>
            <br>
              <button type="button" class="btn-primary" @click="redirect({name : 'verify.phone'})" style="width: 177px">
                  Verificar
              </button>
            <br>
            <br>
            <!--<a  @click="redirect({path: '/pre_login'})" class="text-control">Atras</a>-->
            </p>
      </ion-content>          

</template>

<script>
import { loadingController,toastController,IonRow,IonGrid,IonCol,IonSelect, IonSelectOption  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import Phone from './Phone'

export default defineComponent({
  components: { Phone,IonRow,IonGrid,IonCol,IonSelect, IonSelectOption},
  name: "Register",
  data() {
    return {
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
    };
  },
  mounted(){
    this.type = this.$route.query.type;
    
    let svg = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;margin-left: 48px">'+
                '<path d="M11 1L6 6L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
              '</svg>'          
    document.querySelector('#ionSelectPhoneCode').shadowRoot.innerHTML = svg 
  },
  methods: {
    redirect(poth){
      this.$router.push(poth);
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


<style scoped>



ion-select::part(text) {
    padding: 5px 12px;
    background: #32BAB0;
    border: 1px solid #32BAB0;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-family: Montserrat;
    margin-left: 58%;
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



/* Set the icon color and opacity */


</style>


