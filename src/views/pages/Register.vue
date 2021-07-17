<template>

  <ion-content class="ion-padding">
 <br>
 <br>
 <br> <br> 
   <span class="text-control" style="margin-left: 4%;font-style: normal;font-weight: 600;font-size: 24px;line-height: 29px;">Registro </span> 
    <br>
     <p style="margin-left: 4%;margin-top: 1.5%; float: left;font-weight: 500;"> 
    Crea tu cuenta
    </p>
    <br>
    <br>
    <br>
    <br>
   
    <ion-grid>
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
            <label class="label-input">Email</label>
            <div  class="input-container">
              <input type="" name="" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Contraseña</label>
              <div  class="input-container">
                <input :type="show_password ? 'text' : 'password'"  class="input-text" v-model="password">
                 <span  style="z-index: 500;cursor: pointer;left: 90%; position: absolute;"  @click="show_password =! show_password" v-if="!show_password">
                    <img src="assets/hide.svg">
                  </span>
                  <span style="z-index: 500;cursor: pointer;left: 90%; position: absolute;" @click="show_password =! show_password" v-else >
                    <img src="assets/show.svg">
                  </span>
              </div>
            </div>
          </ion-col>
      </ion-row>
       <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Confirmación Contraseña</label>
              <div  class="input-container">
                <input :type="show_password_confirmation ? 'text' : 'password'"  class="input-text" v-model="password_confirmacion">
                 <span  style="z-index: 500;cursor: pointer;left: 90%; position: absolute;"  @click="show_password_confirmation =! show_password_confirmation" v-if="show_password_confirmation">
                    <img src="assets/hide.svg">
                  </span>
                  <span style="z-index: 500;cursor: pointer;left: 90%; position: absolute;" @click="show_password_confirmation =! show_password_confirmation" v-else >
                     <img src="assets/show.svg">
                  </span>
              </div>
            </div>
          </ion-col>
      </ion-row>
    </ion-grid>
     <p> 
      <button type="button" class="btn-primary" @click="redirect()" style="width: 200px;margin-top: 1%">
      
          Registrarme
      </button>
      <br>
      <br><br>
    </p>
    <center>
      <span style="color: #000 ;font-weight: 400;line-height: 40px;" >
      ¿Tienes una cuenta?
      </span>

       <br>        
       <a  @click="() => $router.push({path : '/login'})" class="text-control" style="font-weight: 600"> Inicia sesión aquí</a>
       </center> 

    </ion-content>    
 
</template>

<script>
import { loadingController,toastController,IonRow,IonGrid,IonCol  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';

export default defineComponent({
  components: { IonRow,IonGrid,IonCol },
  name: "Register",
  setup(){
    return{
      eyeOutline,eyeOffOutline
    }
  },
  data() {
    return {
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
      show_password : false,
      show_password_confirmation : false,
    };
  },
  mounted(){
    this.type = this.$route.query.type;
  },
  methods: {
    redirect(){
      this.$router.push({path: 'select_country'});
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


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


