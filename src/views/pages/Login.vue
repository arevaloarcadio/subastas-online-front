<template>

     <ion-content class="ion-padding"> 
 <br>
 <br>
 <br>
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <p>
   <span class="text-control" style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;">Estamos felices de verte <br> otra vez </span> 
   </p>
    <p> 
    <ion-grid>
      <ion-row>
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Email</label>
            <div  class="input-container">
              <input type="text" name="" v-model="email" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col col-12>
          
          <div class="container">
            <label class="label-input">Contraseña</label>
            <div  class="input-container">
              <input :type="show_password ? 'text' : 'password'"  class="input-text" v-model="password">
               <span  style="z-index: 500;cursor: pointer;left: 90%; position: absolute;"  @click="show_password =! show_password" v-if="show_password">
                 
                  <img src="assets/show.svg">
                </span>
                <span style="z-index: 500;cursor: pointer;left: 90%; position: absolute;" @click="show_password =! show_password" v-else >
                  <img src="assets/hide.svg">
                </span>
            </div>
          </div>
        </ion-col>
      </ion-row>

    </ion-grid>
    <br>
      <a @click="() => router.push('/forget_password')"  style="color : #5B716F" class="text-control"> ¿Olvidaste tu contraseña?</a>
    <br>
    <br>
    <button type="button" class="btn-primary" @click="signIn"   style="width: 180px">
        Iniciar Sesión
    </button> <br><br>
    <a   @click="() => router.push('/pre_login')" class="text-control">Atras</a>
  </p>
   </ion-content>    

</template>

<script>
import { IonRow,IonGrid,IonCol  } from '@ionic/vue';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import toast from '@/toast'
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";
//import { FCM } from '@capacitor-community/fcm';
//import fcm_token from '@/plugins/fcm/fcm-token' ; 
//import { PushNotifications } from '@capacitor/push-notifications';


export default defineComponent({
  components: { IonRow,IonGrid,IonCol},
  name: "Register",
  setup() {
      const router = useRouter();
    return { eyeOutline,eyeOffOutline,router }
  },
  data() {
    return {
      email: null,
      password: null,
      show_password : false,
    };
  },
  mounted(){
      //this.initPushNotification()
    },
  methods: {
  ...mapActions([
          'setAuthUser',
      ]),
    async signIn() {

    let loading = await toast.showLoading()

    await loading.present(); 

      axios
      .post("/signin/mobile",{
        email : this.email,
        password : this.password
       })
      .then(res => {
        console.log(res.data)
        loading.dismiss()
        user.setUser(res.data.user)
        jwtToken.setToken(res.data.token);
        this.setAuthUser(res.data.user)
        this.$router.push({path: '/principal' , query : {set_fcm : true }});
      })
      .catch(err => {
        toast.openToast("Autenticación fallida","error",2000);
        console.log(err)
        loading.dismiss()
      });
    },
    
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}



</style>


