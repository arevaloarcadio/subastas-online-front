<template>
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
          Chat
        </p>
      </ion-col>
    </ion-row>
    <ion-content :class="{'ion-padding' : messages.length == 0}">
        <p v-if="messages.length == 0">
          Cuando alguien inicie negociación por tu producto o tu inicies negociación se habilitará el chat
        </p>
        <template v-else>
          <ion-card style="margin: 0px 0px 0px 12px;box-shadow: inherit;width: 100%;left: -11px;height: 115px;" v-for="message in messages" :key="message"  @click="redirect({name : 'request.chat' , params : { productId : message.product_id } , query : { customer_name : message.customer.name,product_name : message.product_name,customer_id : message.product_id_user,request_id : message.id_request,exchange :message.exchange,message_last_message_id  : message.last_message.id  }})" :class="{'col'  :  message.last_message.read_at == null}">
            <ion-row >
              <ion-col >
                <img style="border-radius: 15px 15px 15px 15px;margin-left: 5px;margin-top: 6px;width: 81px;height: 80px;" :src="BasePublic+message.photo" >
                  <p class="p-no-center" style="margin-top: -82px; margin-left: 92px;font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;" >
                    {{message.product_name}} 
                    <img v-show="user_online[message.product_id_user]"  src="/assets/active.png" >
                  </p> 
                <p class="p-no-center" style="font-size: 16px;font-weight: 400;margin-left: 92px;margin-top: -14px; ">
                  {{message.last_message.message}}
                </p>
                <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: 300;font-size: 16px;line-height: 20px;text-align: right;    margin-top: -16px;margin-right: 20px; ">
                  {{moment(message.last_message.fecha, moment.ISO_8601).fromNow()}}
                </p>
              </ion-col>
            </ion-row>
          </ion-card>
        </template>
    </ion-content>    
  </ion-page>  
</template>


<script>

import { repeat,arrowBack,camera } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import BasePublic from '@/plugins/store/utils'
import { 
  IonContent, 
  modalController,
  IonPage
 } from '@ionic/vue';
import moment from 'moment'
moment.locale('es');
import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';

import { defineComponent, ref } from 'vue';
import axios from 'axios'
import { mapGetters } from 'vuex'
import io from 'socket.io-client'
import users_conected from '@/plugins/store/users_conected'

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
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }

    const loadData = (ev) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    }

    pushData();

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
      repeat,
      arrowBack,
      camera
    }
  },
  data(){
    return {
      moment,
      BasePublic,
      messages : [],
      user_online : [],
      inactive : null
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  created(){
    this.getChats()
  },
  mounted(){
    socket.on("connection")

    socket.emit('user_conected',this.getUser)
    
    users_conected.all().forEach((user) =>{
      this.user_online[user.id] = true
    })
    
    socket.on('new_message', (message) => {
      if(message.id_sender == this.getUser.id || message.id_receiver == this.getUser.id)
        this.getChats()
    });
    
    socket.on('users_conected', (user) => {
      console.log(user)
       users_conected.add(user)
       console.log(users_conected.all())
       this.user_online[user.id] = true
    });
    
    socket.on('users_inactive', (user) => {
      users_conected.remove(user)
      this.user_online[user.id] = false
    });

       this.inactive = setTimeout(function() {
        socket.emit('user_inactive',this.getUser)
      },60000)
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalDetail,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
    },
    getChats(){
      axios
        .get("/chats/"+this.getUser.id)
        .then(res => {
          this.messages = res.data
          console.log(this.messages)
         })
        .catch(err => {
          console.log(err)
        });
    } 
  }
});

</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}

.alert-radio-inner.sc-ion-alert-md{
  background-color : #32BAB0;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md {
    border-color: #32BAB0;
}

.alert-radio-label.sc-ion-alert-md{
  color: #5B716F;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{
    color: #5B716F;
}

.alert-button.sc-ion-alert-md{
  color : #32BAB0;
}
.radio-checked{
--color-checked :#32BAB0 !important; 


}
 .ion-activated{
--color-checked :#32BAB0; 
 }

.ion-color-success {
    --ion-color-base: #32BAB0 !important;
    --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;
    --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;
    --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;
    --ion-color-shade:  #32BAB0;
    --ion-color-tint: #32BAB0;
}
input[type="file"] {
  display: none;
}


  @media (max-width: 1000px){
     .col-chat{
    margin-left: -36%;margin-top:-6%
    }
  }

  .col{
    background: rgba(233, 235, 235, 0.5);
  }
</style>


