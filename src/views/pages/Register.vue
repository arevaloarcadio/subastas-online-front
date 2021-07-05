<template>

  <ion-content class="ion-padding">
 <br>
 <br>
 <br>
   <span class="text-control" style="margin-left: 13%;font-size: 24px;">Registro </span> 
    <br>
     <p style="margin-left: 13%;float: left;"> 
    Crea tu cuenta
    </p>
    <br>
    <br>
    <br>
    <br>
    <p> 
    <ion-grid>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Nombre</ion-label>
              <ion-input ></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12>
            <ion-item v-if="type == 'email'">
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Email</ion-label>
              <ion-input ></ion-input>
            </ion-item>
            <ion-item v-else>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Teléfono</ion-label>
              <ion-input></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <span  style="margin-left: 90%;top: 46%; position: absolute;z-index: 500;cursor: pointer;"  @click="show_password =! show_password" v-if="show_password">
                <ion-icon :icon="eyeOutline"></ion-icon>
              </span>
              <span style="margin-left: 90%;top: 46%; position: absolute;z-index: 500; cursor: pointer;"    @click="show_password =! show_password" v-else >
                <ion-icon :icon="eyeOffOutline"></ion-icon>
              </span>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Contraseña</ion-label> 

              <ion-input :type="show_password ? 'text' : 'password'" v-model="password"></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12>
            <ion-item>
                <span  style="margin-left: 90%;top: 46%; position: absolute;z-index: 500;cursor: pointer;"  @click="show_password_confirmation =! show_password_confirmation" v-if="show_password_confirmation">
                <ion-icon :icon="eyeOutline"></ion-icon>
              </span>
              <span style="margin-left: 90%;top: 46%; position: absolute;z-index: 500; cursor: pointer;"    @click="show_password_confirmation =! show_password_confirmation" v-else >
                <ion-icon :icon="eyeOffOutline"></ion-icon>
              </span>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Confirmación de Contraseña</ion-label> 

              <ion-input :type="show_password_confirmation ? 'text' : 'password'" v-model="password_confirmacion"></ion-input>

            </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
  
    <br>
    <br>
      <button type="button" class="btn-primary" @click="redirect()" style="width: 300px">
        <ion-icon name="mail-outline"></ion-icon> 
          Registrarme
      </button>
      <br>
      <br>
      ¿Tienes una cuenta?
       <br>
       <a href="/login" class="text-control"> Inicia sesión aquí</a>
    </p>
    </ion-content>    
 
</template>

<script>
import { loadingController,toastController,IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';

export default defineComponent({
  components: { IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem},
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


