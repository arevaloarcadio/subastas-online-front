<template>

  <body class="dark-edition bg">

    <div class="container h-100 d-flex justify-content-center flex-column">
      <div class="jumbotron my-auto form-signin">
        
     <div class="p-2">
                <!--Form-->
                <div class="mb-4" data-wow-delay="0.3s">
                  <div class="card-body">
                   
                    <!--Body-->
                    <h1 class="h3 text-center" >Ingrese a su cuenta</h1>
                    <div class="md-form">
                       <ion-item>
                        <ion-label position="floating">Correo Electrónico</ion-label>
                        <ion-input v-model="email" ></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Contraseña</ion-label>
                        <ion-input v-model="password" type="password"></ion-input>
                      </ion-item>
                    </div>

                    <div class="text-center mt-4">
                      <input type="submit"  value="Ingresar" @click="login" class="btn btn-lg btn-primary btn-block"/>
                    </div>
                   
                    <p class="">¿Aún no tienes cuenta? Registrese  
                      <a href="/register" style="color:#1495aa;">Aqui</a> 
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
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";

export default defineComponent({
  components: { IonLabel, IonInput, IonItem },
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions([
                'setAuthUser',
            ]),
   async  login() {
     const loading = await loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por Favor Espere..',
         });

      await loading.present();

      let data = {
        email: this.email,
        password: this.password,
     };

    axios
      .post("/login",data)
      .then(res => {
        if(!res.data.error){
           this.openToast(res.data.data.message,'success')
           user.setUser(res.data.data.user)
           jwtToken.setToken(res.data.data.token);
           this.setAuthUser(res.data.data.user)
          this.$router.push({path: '/dashboard'});
        }
        else{
          this.openToast('Error Interno','warning')
        }
      })
      .catch(err => { 
        localStorage.removeItem('jwt_token_app')

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
    }
}
});
</script>


<style type="text/css">

</style>