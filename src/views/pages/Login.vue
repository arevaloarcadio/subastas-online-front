<template>
  <ion-page>  
     <ion-content class="ion-padding"> 
 <br>
 <br>
 <br>
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <p>
   <span class="text-control"><b>Estamos felices de verte otra vez</b> </span> 
   </p>
    <br>
    <br>
    <br>
    <p> 
    <ion-grid>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;"><b>Emial o Teléfono</b></ion-label>
              <ion-input ></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;"><b>Contraseña</b></ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
    <br>
      <a href="/login" class="text-control"> ¿Olvidaste tu contraseña?</a>
    <br>
    <br>
    <button type="button" class="btn-primary" @click="redirect()" style="width: 300px">
      <ion-icon name="mail-outline"></ion-icon> 
        <b>Iniciar Sesión</b>
    </button>
  </p>
   </ion-content>    
 </ion-page> 
</template>

<script>
import { loadingController,toastController,IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem  } from '@ionic/vue';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem},
  name: "Register",
  setup() {
    return { eyeOutline,eyeOffOutline }
  },
  data() {
    return {
      email: null,
      password: null,
      show_password : true
    };
  },
  mounted(){
    this.type = this.$route.query.type;
  },
  methods: {
    redirect(){
      this.$router.push({path: 'principal'});
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


