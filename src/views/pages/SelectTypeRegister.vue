<template>
        <ion-content class="ion-padding">
          <ion-row>
       <ion-col>
        <button @click="$router.push({path : '/pre_login'})">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 4%;top: 32%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
      </ion-col>
    </ion-row>
          <div align="center" >
            <br>
                <br>
                    <br>    <br>
            <img src="/assets/logo-green.png" >
          </div>
          <br><br><br>
         <span class="text-control" style="margin-left: 8%;font-style: normal;font-weight: 600;font-size: 24px;line-height: 29px;">Registro</span>
          <br>
           <p style="margin-left: 8%;float: left;font-weight: 500;">
          Elige como quieres registrarte
          </p>
          <br>
          <br>
          <p>
          <br>

           
              <img src="assets/email.svg"  @click="redirect({path: 'register' , query : { type : 'email' }})">
           
          <br>
          <br>

           <img src="assets/phone.svg"  @click="redirect({name: 'register.phone'})">

          
              <!-- <input type="text" name="error" v-model="error">-->
           <br>
           <br> <br>
          <center> <p><b>o</b></p></center>
           <ion-grid  v-show="!showAppleSignIn">
            <ion-row>

              <ion-col>
                <img src="/assets/icon-facebook.png" @click="registerFacebook" style="margin-left: 62%;" >

              </ion-col>
               <ion-col v-show="showAppleSignIn">
                <img src="/assets/icon-apple.png" @click="registerApple" style="height:47px;width:38px;margin-top:-8px;">
              </ion-col>
              <ion-col>
                <img src="/assets/icon-google.png" @click="registerGoogle" style="margin-right: 62%;margin-top: 4px;">
              </ion-col>
            </ion-row>
          </ion-grid>
          <br>
           <br>
            <a style="font-family: Montserrat;font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;" class="text-control" @click="$router.push({path: '/principal' , query : {invite : true }})">Continuar como invitado</a>
          </p>
      </ion-content>

</template>

<script>
import { IonRow,IonGrid,IonCol } from '@ionic/vue';
import { mail,callOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import toast from '@/toast'
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";
import { Plugins } from '@capacitor/core'
import { FacebookLogin } from '@capacitor-community/facebook-login';
import '@codetrix-studio/capacitor-google-auth';
import '@capacitor/device';

export default defineComponent({
  components: { IonRow,IonGrid,IonCol},
  setup() {
    return { mail,callOutline }
  },
  name: "Register",
  data() {
    return {
      error : null,
      user : null,
      showAppleSignIn : false
    };
  },
  mounted(){
    //Plugins.GoogleAuth.init(); // or await GoogleAuth.init()
   console.log(Plugins)

    this.show_ios()
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
    ...mapActions([
      'setAuthUser',
    ]),
    redirect(poth){
      this.$router.push(poth);
    },
    async show_ios(){
      let device = await Plugins.Device.getInfo();
      this.showAppleSignIn = device.platform === 'ios';
    },
    async registerFacebook(){

        const FACEBOOK_PERMISSIONS = ['email'];
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

      if (result.accessToken) {
        this.token = result.accessToken;
      }else{
        toast.openToast("Error al registrar con facebook","error",2000);
        return
      }

      //alert(JSON.stringify(result))
      var loading = await toast.showLoading()

      await loading.present();

      const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),email&access_token=${this.token.token}`;

      axios
      .get(url)
      .then(res => {
        this.fb_user = res.data

        axios
          .post("/signup/mobile/facebook",{name :this.fb_user.name,email : this.fb_user.email})
          .then(res => {
            loading.dismiss()
            user.setUser(res.data.user)
            jwtToken.setToken(res.data.token);
            this.setAuthUser(res.data.user)
            this.$router.push({path: '/principal' , query : {set_fcm : true }});
          })
          .catch(err => {
            loading.dismiss()
            console.log(err.response)
            /*if(err.response.data?.message){
              toast.openToast(err.response.data.message,"error",2000);
            }else{
              toast.openToast("Ha ocurrido un error","error",2000);
            }*/
         })
      })
      .catch(err => {
        console.log(err)
        loading.dismiss()
        //toast.openToast("Ha ocurrido un error","error",2000);
      })
    },
    async registerGoogle(){

    const googleUser = await Plugins.GoogleAuth.signIn();

    console.log('my user: ', googleUser);

    if(!googleUser?.email){
      toast.openToast("Error al registrar con google","error",2000);
      return
    }

    var loading = await toast.showLoading()

    await loading.present();

    let data = {
      email : googleUser.email,
       name : googleUser.name,
    }

    axios
      .post("/signup/mobile/google",data)
      .then(async res =>  {
        loading.dismiss()
        user.setUser(res.data.user)
        jwtToken.setToken(res.data.token);
        this.setAuthUser(res.data.user)
        await Plugins.GoogleAuth.signOut();
        this.$router.push({path: '/principal' , query : {set_fcm : true }});
      })
      .catch(err => {
        loading.dismiss()
        console.log(err.response)
        /*if(err.response.data?.message){
          toast.openToast(err.response.data.message,"error",2000);
        }else{
          toast.openToast("Ha ocurrido un error","error",2000);
        }*/
      });
    },
    async registerApple() {

    let result = await Plugins.SignInWithApple.authorize()

    if(!result?.email){
      toast.openToast("Error al obtener datos de Apple, intente nuevamente","error",2000);
      return
    }

    var loading = await toast.showLoading()

    await loading.present();

    let data = {
      email : result.response.email,
      name : result.response.givenName+' '+result.response.familyName,
    }

    axios
      .post("/signup/mobile/apple",data)
      .then(async res =>  {
        loading.dismiss()
        user.setUser(res.data.user)
        jwtToken.setToken(res.data.token);
        this.setAuthUser(res.data.user)
        await Plugins.GoogleAuth.signOut();
        this.$router.push({path: '/principal' , query : {set_fcm : true }});
      })
      .catch(err => {
        loading.dismiss()
        console.log(err.response)
        /*if(err.response.data?.message){
          toast.openToast(err.response.data.message,"error",2000);
        }else{
          toast.openToast("Ha ocurrido un error","error",2000);
        }*/
      });
    }
  }
});
</script>
