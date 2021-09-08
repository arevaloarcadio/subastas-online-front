<template>
 <div>
  <ion-page>
     <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Perfil
        </p>
      </ion-col>
    </ion-row>
    <ion-content>

        <ion-row>
          <ion-avatar v-if="invite != true" style="margin-left: 5%">
            <img :src="BasePublic+user?.photo">
          </ion-avatar>
           <ion-avatar v-else style="margin-left: 5%">
            <img :src="BasePublic+'default.png'">
          </ion-avatar>
          <ion-col style="margin-left: 7px;margin-top: 3px;" >

              <span class="text-control" v-if="invite != true" style="font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #32BAB0;">{{user?.name}}</span> 

              <span class="text-control" v-else style="font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #32BAB0;">Invitado</span> 
              

              <p class="p-no-center"  v-if="invite != true" @click="redirect({name : 'edit.profile'})"  style="cursor: pointer;margin-top: 4px;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;letter-spacing: 0.75px;color: #5B716F;">
                Editar perfil
              </p>

          </ion-col>
        </ion-row>

      <div class="hr"> </div>
    
          <ion-row style="margin-left: 5%">
            <img src="/assets/package-little.png"  v-if="invite != true" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center"  v-if="invite != true" @click="redirect({name : 'my.products'})" style="color: #000;margin-top: 0.2%;">Mis Productos</p>
          </ion-row>
   

          <ion-row style="margin-left: 5%">
            <img src="/assets/setting.png"   v-if="invite != true" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center"  v-if="invite != true" @click="redirect({name : 'setting'})" style="color: #000;margin-top: 0.2%;">Preferencias</p>
          </ion-row>
    

          <ion-row style="margin-left: 5%">
            <img src="/assets/SignOut.png" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center" @click="deleteFcm" style="color: #000;margin-top: 0.2%;"> Salir</p>
          </ion-row>
  

      </ion-content>
    </ion-page>  
 </div>

</template>


<script >
  
import { arrowBack } from 'ionicons/icons';
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'
import { mapGetters } from "vuex";
import BasePublic from '@/plugins/store/utils'
import jwtToken from '@/plugins/jwt/jwt-token';
import fcm_token from '@/plugins/fcm/fcm-token' ; 
import io from 'socket.io-client'
import toast from '@/toast'

var socket  = io(axios.defaults.baseURL,{
  cors: {
    origin: '*',
  },
  withCredentials : false
});

export default defineComponent({
   components: {
    IonContent, 

    IonPage
  },
  setup() {
    return {
      arrowBack,
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  data(){
    return{
      BasePublic,
      user : this.getUser,
      loading : null ,
      invite  : false
    }
  },
  created(){
    socket.emit('user_conected',this.getUser)
    this.invite = this.$route.query.invite == undefined ? false : true
    if(!this.invite){
      this.getCustomer()
    }
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    async deleteFcm(){
      socket.on("connection")
      socket.emit("user_inactive",this.getUser)

      this.loading = await toast.showLoading()
      
      this.loading.present(); 

      if(this.invite){
        return this.logout()
      }
      
      axios
        .delete("/fcm/"+this.getUser.id+"/"+fcm_token.getToken())
        .then(res => {
            this.loading.dismiss()
            console.log(res)
         })
        .catch(err => {
          console.log(err)
        }).finally(()=>{
          this.logout()
        });
    },
    logout(){
      jwtToken.removeToken();
      
      this.$store.dispatch('unsetAuthUser')
      .then(() => {
        this.$router.push({path: '/login'});
      });
   
      this.loading.dismiss()  
    },
    getCustomer(){
     axios
      .get("/customers/"+this.getUser.id)
      .then(res => {
        console.log(res)
        this.user = res.data
       })
      .catch(err => {
       console.log(err)
      });
    },
  }
});


</script>


<style type="text/css">

   
</style>


