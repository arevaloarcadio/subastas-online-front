<template>
  <div>
    <transition name="slide-fade" >
        <router-view></router-view>
    </transition>

    <div :class="{'footer' :!showAppleSignIn ,'footer-ios' :showAppleSignIn} ">
     
    <ion-row>
        <ion-col class="cursor">
            <img src="/assets/Compass.svg" v-if="!invite" style="margin-bottom: -36px;" @click="redirect('/principal')">
            <img src="/assets/Compass.svg" v-else style="margin-bottom: -36px;" @click="$router.push({path: '/principal' , query : {invite : true }})" >
            <center>
               <svg class="active" v-show="path == '/principal'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
              </svg>
              
            </center>
        </ion-col>
        <ion-col col-2 class="cursor">
           <img src="/assets/tag.svg"  style="margin-bottom: -31px;" @click="redirect('/saved_posts')">
           <center>
             <svg class="active" v-show="path == '/saved_posts'"   width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
              </svg>
            </center>
        </ion-col>
        <ion-col col-2>
           <img src="/assets/plus_circle.svg" style="margin-bottom: -34px;" class="cursor" @click="redirect('/create/product')">
           <center>
            <svg class="active" v-show="path == '/create/product' || path == '/create/details/product'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
            </svg>
            </center>
        </ion-col>
        <ion-col col-2>
           <img src="/assets/ArrowsLeftRight.svg" style="margin-bottom: -34px;" class="cursor" @click="redirect('/my_exchanges')">
           <center>
             <svg class="active" v-show="path == '/my_exchanges'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
              </svg>
            </center>
        </ion-col>
        <ion-col col-2>
           <img src="/assets/ChatCircleDots.svg"   style="margin-bottom: -34px;" class="cursor" @click="redirect(chat)">
           <center>
              <svg class="active" v-show="path == '/chat'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
              </svg>
            </center>
        </ion-col>
      </ion-row>
  
    </div>
  </div>
</template>

<script>

import { IonRow,IonCol   } from '@ionic/vue';
import axios from 'axios'
import { mapGetters } from 'vuex'
import toast from '@/toast'
import { Plugins } from '@capacitor/core'
import '@capacitor/device';

let loading;

export default {
  components: { IonRow,IonCol },
  name: "LayoutDashboard",
 
  data() {
    return {
      path :null,
      from : null,
      chat : '/chat/policies/terms',
      inactive : null,
      loading : null,
      invite : null,
      showAppleSignIn : true
    };
  },
  mounted(){
    this.invite = this.$route.query.invite == undefined ? false : true
    this.path = this.$route.path
    if(!this.invite){
      this.getAcceptedTerms()
    }
    this.show_ios()
  },
  watch: {
    $route(to, from) {
      this.path = to.path
      this.from = from.path
  
        loading.dismiss()
    }
  },
 async beforeRouteUpdate (to, from, next) {
    loading = await toast.showLoading()
    await loading.present();
    next()
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods: {
    async show_ios(){
      let device = await Plugins.Device.getInfo();
     this.showAppleSignIn = device.platform === 'ios';
    },
    redirect(path) {
      if(this.getUser.id === null){
         toast.openToast("Regístrese o inicie sesión para acceder a esta sección.","error",2000);
         return
      }
      this.$router.push({path: path});

    },
    getAcceptedTerms(){
      axios
        .get("/chat/terms/"+this.getUser.id)
        .then(res => {
          if(res.data.terms_chat_accepted){
            this.chat = '/chat'
          }
         })
        .catch(err => {
          console.log(err)
        });
    } 
  }
};
</script>


<style>
.footer {
  position: fixed;
  left: 0;
  bottom: -5px;
  width: 100%;
  background-color: #fff;
  color: white;
  text-align: center;
  height: 87px;
}
.footer-ios {
  position: fixed;
  left: 0;
  bottom:  -5px;
  width: 100%;
  background-color: #fff;
  color: white;
  text-align: center;
  height: 110px;
}
div.scroll {
  overflow: auto;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.active{
  margin-bottom: -41px;
}
</style>
