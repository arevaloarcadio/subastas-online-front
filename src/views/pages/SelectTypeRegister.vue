<template>
        <ion-content class="ion-padding">
          <div align="center" > 
            <br>
            <img src="/assets/logo-green.png" >
          </div>
          <br><br><br><br><br>
         <span class="text-control" style="margin-left: 13%">Registro </span> 
          <br>
           <p style="margin-left: 13%;float: left;"> 
          Elige como quieres registrarte
          </p>
          <br>
          <br>
          <p> 
          <br>
             <button type="button" class="btn-primary" @click="redirect({path: 'register' , query : { type : 'email' }})" style="width: 300px">
              <ion-icon :icon="mail"></ion-icon>  <b>Registro con email</b>
            </button>
        
          <br>
          <br>
            <button type="button" class="btn-primary" @click="redirect({path: 'register' , query : { type : 'cell' }})" style="width: 300px">
              <ion-icon :icon="callOutline"></ion-icon> <b>Registro con celular</b>
            </button>

           <br>
           <br>
           <ion-grid>
            <ion-row>
              <ion-col col-4>
                <img src="/assets/icon-facebook.png" >

              </ion-col>
                  <p><b>o</b></p>
              <ion-col col-4>
                <img src="/assets/icon-google.png" >
              </ion-col>
            </ion-row>
          </ion-grid>
           <br>
           <br>
            <a  @click="redirect({path: '/pre_login'})" class="text-control">Atras</a>
          </p>
      </ion-content>    

</template>

<script>
import { loadingController,toastController,IonIcon,IonRow,IonGrid,IonCol  } from '@ionic/vue';
import { mail,callOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonIcon,IonRow,IonGrid,IonCol},
  setup() {
    return { mail,callOutline }
  },
  name: "Register",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
    };
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


