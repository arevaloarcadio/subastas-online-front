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
          Notificaciones
        </p>
      </ion-col>
    </ion-row>
    <ion-content>

        <br>
        <p v-if="notifications.length == 0" style="font-weight: 400">
         Actualmente no hay notificaciones
        </p>
        <template v-else  v-for="notification in notifications" :key="notification">
          <div style="box-shadow:inherit;margin-left: 0%;height: 99px">
            <ion-row>
              <ion-col>
                <img  @click="redirect({name : notification.type , params : { requestId : notification.request_id }})" style="border-radius: 15px 15px 15px 15px;width: 81px;height: 80px;" :src="BasePublic+notification.photo" >
                 <p  @click="redirect({name : notification.type , params : { requestId : notification.request_id }})" class="data-notification" style="text-align: left;margin-top: -77px;margin-left: 87px;width: 226px" >{{notification.data}}</p>
                <div class="last-message-notification" style="margin-left: 88px;margin-top: -3px;">
                   {{moment(notification.created_at, moment.ISO_8601).fromNow()}}
               </div>
               <p style="color: #FF0000;margin-top: -17px;     margin-right: 12px;  float: right;" @click="deleteNotification(notification.id)" class="delete p-no-center">
                Eliminar
               </p>
              </ion-col>
             
            </ion-row>
          </div>
        </template>

      <!--<ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>-->
    </ion-content>    
  </ion-page>  
</template>


<script >

import ModalDetail from '@/views/products/ModalDetail'
import { 
  IonContent, 
  //IonInfiniteScroll, 
  //IonInfiniteScrollContent,
  modalController,
  IonPage
 } from '@ionic/vue';



import { defineComponent } from 'vue';
import BasePublic from '@/plugins/store/utils'
import { mapGetters } from 'vuex'
import axios from 'axios'
import toast from '@/toast'
import moment from 'moment'
import io from 'socket.io-client'
import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';

moment.locale('es');

    var socket  = io(axios.defaults.baseURL,{
      cors: {
        origin: '*',
      },
      withCredentials : false
    });


    
export default defineComponent({
  components: {
    IonContent, 
    //IonInfiniteScroll, 
    //IonInfiniteScrollContent,
    IonPage
  },

  data(){
    return {
      moment,
      BasePublic,
      notifications : [],
      nofitications_example : 
      [
        {
          id : 1,
          photo : '/assets/products/product-2.png',
          data :  'Has recibido una solicitud de cambio',
          date_last_message : 'Hace 30 minutos', 
          type : 'request'
          
        },
        {
          id : 2,
          photo :  '/assets/products/product-1.png',
          data :  'Tu solicitud ha sido aceptada',
          date_last_message : 'Hace 30 minutos', 
          type : 'request.accepted'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tu solicitud ha sido rechazada',
          date_last_message : 'Hace 30 minutos', 
          type : 'request.rejected'
        },
        {
          id : 3,
          photo :  '/assets/products/product-3.png',
          data : 'Tienes un nuevo mensaje de bateria',
          date_last_message :'Hace 30 minutos', 
          type : 'request.chat'
        },    
      ]
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  created(){
    this.getNotifications()
  },
  mounted(){
      socket.on("connection")

    socket.on('notification', (message) => {
      if(message.notifiable_id == this.getUser.id)
        this.getNotifications()
      });
  },
  methods:{
    redirect(path) {
      console.log(path)
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
    getNotifications(){
    axios
      .get("/notifications/"+this.getUser.id)
      .then(res => {
   
        this.notifications = res.data
         console.log(this.notifications)
       })
      .catch(err => {
        console.log(err)
      });
    },
    async deleteNotification(uuid){
    let loading = await toast.showLoading()

    await loading.present(); 
    
    axios
      .delete("/notifications/"+uuid)
      .then(res => {
        loading.dismiss()
        toast.openToast("Notificación eliminado exitosamente","error",2000);
        this.getNotifications()
        console.log(res)
      })
      .catch(err => {
        loading.dismiss()
        console.log(err)
      });
    }
  }
});

</script>


<style scoped="">

input[type="file"] {
  display: none;
}


.data-notification{
    font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

align-items: center;
letter-spacing: 0.75px;

color: #000000;

   }
.last-message-notification{
   font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */


align-items: center;
letter-spacing: 0.75px;

color: #000000;
}

.delete{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
/* identical to box height */


align-items: center;
text-align: right;
letter-spacing: 0.75px;
}
</style>


