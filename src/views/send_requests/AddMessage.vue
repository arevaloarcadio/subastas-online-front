<template>
  <ion-page>
    <ion-row>
       <ion-col>
       <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 42%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p style="color: #000" class="title">
            Enviar solicitud
          </p>
      </ion-col>
      
    </ion-row>
   
     <ion-content>
      <br>
          <p class="sub-title" style="width: 80%;margin-left: 10%;font-weight: 500;">
           Agrega un mensaje que <br> describa tu oferta
          </p>
       <ion-card style="box-shadow: inherit;margin-top: 11%;width: 101%;margin-left: -1%">
      <img  :src="BasePublic+product_photo" class="img-left">
       <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="img-center">
      <path d="M36.75 27.5625L42.875 33.6875L36.75 39.8125" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.125 33.6875H42.875" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.25 21.4375L6.125 15.3125L12.25 9.1875" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M42.875 15.3125H6.125" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <img :src="BasePublic+product_select_photo" class="img-right">
    </ion-card>
   
        <p style="margin-top: -18px;">
          <br>
          <br>
        <ion-row>
        <ion-col>
          <div class="container" style="width: 93%;margin-left: 14px;">
            <label class="label-input">Mensaje</label>
            <div  class="input-container" >
              <textarea style="line-height: 38px;height: 120.55px" v-model="message" class="input-text" placeholder="Que tal si intercambiamos">  </textarea>
            </div>
          </div>
        </ion-col>
      </ion-row>
         
          <br>
          <button type="button" class="btn-primary" @click="sendRequest" style="width: 200px">
              Enviar Solicitud
          </button>
       </p>
  <br><br><br><br> 
    </ion-content>
  </ion-page>
</template>

<script >

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import BasePublic from '@/plugins/store/utils'
import { 
  IonContent, 
  modalController,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios'
import toast from '@/toast'
import send_notification from '@/plugins/fcm/send_notification'
import { mapGetters } from 'vuex'

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
      arrowBack
    }
  },
  data(){
    return{
      BasePublic,
      message : null,
      product_id : null,
      product_photo : null,
      product_id_user : null,  
      product_select_id : null,
      product_select_photo : null,  
      product_select_id_user : null,
      user : null
    }
  },
  created(){
    this.product_id = this.$route.query.product_id
    this.product_photo = this.$route.query.product_photo
    this.product_id_user = this.$route.query.product_id_user
    this.product_select_id = this.$route.query.product_select_id
    this.product_select_photo = this.$route.query.product_select_photo
    this.product_select_id_user = this.$route.query.product_select_id_user
  },
    computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    redirect(path) {
      //redirect({name : 'success.requests'})
      this.$router.push(path);
    },
    async sendRequest(){
      
      if( this.message == null ){
        toast.openToast("Por favor debe enviar un mensaje","error",2000);
        return;
      }
      let loading = await toast.showLoading()

      await loading.present(); 

      let data = {
        ...this.$route.query,
        message : this.message
      }

      axios
        .post("/requests",data)
        .then(res => {
          loading.dismiss()
          send_notification.send('Has Recibido una nueva solicitud',res.data.customer.name,{data : {path : {name : 'request', params : { requestId : res.data.request.id }}},message : 'Has Recibido una nueva solictud'},this.product_id_user)
          this.redirect({name : 'success.requests', query : {customer_name:res.data.customer.name}})

         })
        .catch(err => {
          loading.dismiss()
          console.log(err)
        });
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalDetail,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    }
  }
});

</script>
<style type="text/css">
 .img-left{
  margin-left: -58px;
  width: 50%;
height: 210px;
  float: left;
  border-radius: 30px 30px 30px 30px;

 }
 .img-right{
margin-right: -58px;
  width: 50%;
height: 210px;
  float: right;
  border-radius: 30px 30px 30px 30px;
 }
   .img-center{
    position: absolute;
    left: 44%;
    top: 80px;
    }


div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}



  @media (max-width: 1000px){
    .button-add{
      height:100%;
      width: 35%;
      position: absolute;
      background: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px; 
    }
    .img-add{
      margin-top: 17%;
    }
  }

  @media (min-width: 1000px){
    .button-add{
      height:100%;
      width: 35%;
      position: absolute;
      background: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 30px 30px 30px 30px; 
    }
    .img-add{
      margin-top: 6%;
    }
  }
</style>