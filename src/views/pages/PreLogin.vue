<template>
  <div>
    <div align="center" class="eclipse"> 
      <br>
      <img src="/assets/logo-white.png">
    </div>
     <p>
      <center>
       Regístrate o ingresa para comenzar
     </center>
     <br>
     <br>
      <button type="button" class="btn-primary" @click="redirect('select_type_register')"> <b>Registro</b></button>
     <br>
     <br>
      <button type="button" class="btn-line"  @click="redirect('login')"> <b>Iniciar Sesión</b></button>
      <br>
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
      <span class="text-control">
        Continuar como invitado
      </span>
    </p>
  </div>
</template>

<script>
import {  loadingController,toastController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";

export default defineComponent({
  name: "Login",
  data() {
    return {
       style : {
        img :{
          'margin-top'  : null
        }
       },
      email: '',
      password: '',
    };
  },
  mounted(){
 
  },
  methods: {
    redirect(page){
      this.$router.push({path: page});
    },

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
.preload{
  position: absolute;
width: 100%;
height: 100%;

/* Green Upgrap */

background: #32BAB0;
}

.preload img {
  vertical-align:middle;
}


</style>
