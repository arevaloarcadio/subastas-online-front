<template>
  <ion-page>

    <div align="center" class="eclipse"> 
      <br>
      <img src="/assets/logo-white.png" style="margin-top: 38px;">
    </div>
     <p style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;text-align: center;">
      <center>
       Regístrate o ingresa para  <br> comenzar
     </center>
     <br>
     <br>
      <button type="button" class="btn-primary" @click="() => router.push('/select_type_register')" style="width: 170px">Registro</button>
     <br>
     <br>
      <button type="button" class="btn-line"  @click="() => router.push('/login')"  style="width: 170px">Iniciar Sesión</button>
      <br>
     <br>
     <br>
     <ion-grid>
      <ion-row>
        <ion-col col-4>
          <img src="/assets/icon-facebook.png" style="margin-left: 62%;" >

        </ion-col>
        <p><b>o</b></p>
        <ion-col col-4>
          <img src="/assets/icon-google.png" style="margin-right: 62%;margin-top: 2%;">
        </ion-col>
      </ion-row>
    </ion-grid>
    <br>
      <a class="text-control" style="font-weight: 600;font-size: 16px;line-height: 20px;"> Continuar como invitado</a>
    </p>  
 </ion-page> 
</template>

<script>
import {  loadingController,toastController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";
import { useRouter } from 'vue-router';
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
  setup() {
      const router = useRouter();
      return { router };
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
