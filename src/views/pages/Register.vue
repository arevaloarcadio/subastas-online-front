<template>

  <body class="dark-edition bg">

    <div class="container h-100 d-flex justify-content-center flex-column">
      <div class="jumbotron my-auto form-signin">
        
     <div class="p-2">
                <!--Form-->
                <div class="mb-4" data-wow-delay="0.3s">
                  <div class="card-body">
                   
                    <!--Body-->
              
                       <h3 class="text-center" >Ingrese a su cuenta</h3>
                    <div class="md-form">
                      
                       <ion-item>
                        <ion-label position="floating">Nombre</ion-label>
                        <ion-input v-model="first_name"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating">Apellido</ion-label>
                        <ion-input  v-model="last_name"></ion-input>
                      </ion-item>
                        <ion-item>
                        <ion-label position="floating">Correo Electronico</ion-label>
                        <ion-input  v-model="email" type="email"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating">Contraseña</ion-label>
                        <ion-input v-model="password" type="password"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating">Confirmar Contraseña</ion-label>
                        <ion-input  v-model="password_confirmacion" type="password"></ion-input>
                      </ion-item>
                    </div>

                    <div class="text-center mt-4">
                      <input type="button" @click="register" value="Ingresar" class="btn btn-lg btn-primary btn-block"/>
                    </div>
                   <p class="">¿Ya tienes cuenta? Inicia sesión 
                      <a href="/login" style="color:#1495aa;">Aqui</a> 
                    </p> 
                    
                    <!--<p class="" >Recuperar Contraseña, Ingrese <a href="" style="color:#1495aa;">Aqui</a></p>-->
                  </div>
                </div>
        </div>
      </div>
   </div>
</body>
  
</template>

<script>
import { IonLabel, IonInput, IonItem,loadingController,toastController  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonLabel, IonInput, IonItem },
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


@media (max-width: 576px){
  div.container   {
    overflow: scroll;
  }
}


</style>