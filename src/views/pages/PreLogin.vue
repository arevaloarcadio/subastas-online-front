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
          <img src="/assets/icon-facebook.png" @click="loginFacebook" style="margin-left: 62%;" >

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
import { defineComponent } from 'vue';



import { useRouter } from 'vue-router';
import { FacebookLogin } from '@capacitor-community/facebook-login';

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

  window.fbAsyncInit = function() {
    window.FB.init({
      appId: '891037061645114',
      cookie: true, // enable cookies to allow the server to access the session
      xfbml: true, // parse social plugins on this page
      version: 'v11.0' // use graph api current version
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  },
  methods: {

    redirect(page){
      this.$router.push({path: page});
    },
    async loginFacebook(){

      const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

      if (result.accessToken) {
        console.log(`Facebook access token is ${result.accessToken.token}`);
      }
    },
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
