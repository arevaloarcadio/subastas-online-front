<template>
        <ion-content class="ion-padding">
          <div align="center" >
            <br>
                <br>
                    <br>    <br>
            <img src="/assets/logo-green.png" >
          </div>
          <br><br><br>
         <span class="text-control" style="margin-left: 8%;font-style: normal;font-weight: 600;font-size: 24px;line-height: 29px;">Registro </span>
          <br>
           <p style="margin-left: 8%;float: left;font-weight: 500;">
          Elige como quieres registrarte
          </p>
          <br>
          <br>
          <p>
          <br>

             <button type="button" class="btn-primary" @click="redirect({path: 'register' , query : { type : 'email' }})" style="width: 86%;height:60px">
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: fixed;left:66px;margin-top: -15px;">
                <path d="M28 7L16 18L4 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.8182 16L4.30835 24.7174" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.6918 24.7174L18.1818 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style="position: fixed;left: 112px;margin-top: -7px;">
                Registro con email
                </span>
            </button>

          <br>
          <br>

            <button type="button" class="btn-primary" @click="redirect({name: 'register.phone'})" style="width: 86%;height:60px">
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: fixed;left: 66px;margin-top: -15px;">
                <path d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019V15.6019Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style="position: fixed;left: 112px;margin-top: -7px;">Registro con celular</span>

            </button>
              <!-- <input type="text" name="error" v-model="error">-->
           <br>
           <br> <br>
          <center> <p><b>o</b></p></center>
           <ion-grid  >
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
        toast.openToast("Error al regitrar con facebook","error",2000);
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
      toast.openToast("Error al regitrar con google","error",2000);
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
