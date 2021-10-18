<template>
  <ion-page>
    <ion-row>
       <ion-col>
          <!--<button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>-->
          
          <p style="color: #000;width: 80%;margin-left: 10%;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;text-align: center;color: #000000;"  class="title">
            ¿Estás seguro de  <br>rechazar el cambio?
          </p>
      </ion-col>
      
    </ion-row>
  
       <br>
    <div style="display: flex;justify-content: center;">
      <img style="border-radius: 10px 10px 0px 0px;width: 84px;height: 77px;margin-left: 59px;"  :src="BasePublic+product_customer?.photo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;margin-top: 17px;">
        <g filter="url(#filter0_d)">
        <path d="M13.3322 23.4951C12.7854 23.4946 12.2532 23.6721 11.8162 24.0009C11.3791 24.3297 11.0611 24.7918 10.91 25.3174C10.759 25.843 10.7832 26.4035 10.9791 26.9142C11.1749 27.4248 11.5317 27.8578 11.9954 28.1476L18.7627 34.9149C18.9966 35.1486 19.2742 35.334 19.5798 35.4604C19.8853 35.5869 20.2128 35.6519 20.5435 35.6518C20.8742 35.6517 21.2016 35.5864 21.5071 35.4598C21.8125 35.3331 22.09 35.1475 22.3238 34.9136C22.5575 34.6797 22.7429 34.402 22.8694 34.0965C22.9958 33.7909 23.0608 33.4635 23.0607 33.1328C23.0606 32.8021 22.9953 32.4747 22.8687 32.1692C22.742 31.8638 22.5564 31.5862 22.3225 31.3525L19.5003 28.5328H38.5081C39.1758 28.5328 39.8161 28.2676 40.2883 27.7954C40.7604 27.3233 41.0256 26.6829 41.0256 26.0152C41.0256 25.3475 40.7604 24.7072 40.2883 24.235C39.8161 23.7629 39.1758 23.4976 38.5081 23.4976H13.3322V23.4951Z" fill="#32BAB0"/>
        <path d="M48.6142 18.5404C49.1611 18.541 49.6932 18.3635 50.1303 18.0347C50.5673 17.7059 50.8854 17.2437 51.0364 16.7181C51.1874 16.1925 51.1632 15.632 50.9674 15.1214C50.7715 14.6108 50.4148 14.1778 49.951 13.888L43.1838 7.12069C42.7114 6.64863 42.0708 6.38355 41.4029 6.38379C40.7351 6.38403 40.0947 6.64955 39.6226 7.12195C39.1506 7.59435 38.8855 8.23493 38.8857 8.90277C38.886 9.57061 39.1515 10.211 39.6239 10.6831L42.4461 13.5028H23.4384C22.7707 13.5028 22.1303 13.768 21.6582 14.2401C21.186 14.7123 20.9208 15.3526 20.9208 16.0203C20.9208 16.688 21.186 17.3284 21.6582 17.8005C22.1303 18.2727 22.7707 18.5379 23.4384 18.5379H48.6142V18.5404Z" fill="#32BAB0"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0.812134" y="0.383789" width="60.3222" height="49.268" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
        </svg>

       <img style="border-radius: 10px 10px 0px 0px;width: 84px;height: 77px;margin-right: 59px;" :src="BasePublic+product_user?.photo">
    </div>  
    <br><br>
    <div  style="display: flex;justify-content: center;">
       <button type="button"  class="btn-line" style="line-height: 15px;width: 71px;" @click="rejectedProduct()" >
            Si
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button"  class="btn-primary" style="width: 71px;" @click="$router.push({path : '/chat'})" >
            No
      </button>
    </div>

    
    

    <ion-content class="ion-padding">
      <ion-list >
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script >

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 

  modalController,
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import BasePublic from '@/plugins/store/utils'
import toast from '@/toast'
import { mapGetters } from 'vuex'
import send_notification from '@/plugins/fcm/send_notification'

export default defineComponent({
  components: {
 
    IonContent, 
 
    IonList,
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
      request_id : null,
      request : null,
      product_customer : null,
      product_user : null 
    }
  },
  created(){
    this.request_id = this.$route.params.productId
    this.getRequest()
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
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
    getRequest(){
      axios
        .get("/requests/"+this.request_id)
        .then(res => {
          this.request = res.data
          console.log(res.data)
         })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.getProductUser()
          this.getProductCustomer()
        });
    },
    getProductUser(){
      axios
        .get("/products/"+this.request.product_user_id)
        .then(res => {
          this.product_user = res.data
         })
        .catch(err => {
          console.log(err)
        });
    },
    getProductCustomer(){
      axios
         .get("/products/"+this.request.product_customer_id)
        .then(res => {
          this.product_customer = res.data
         })
        .catch(err => {
          console.log(err)
        });
    },
    async rejectedProduct(){
       if(this.product_customer == null || this.request == null){
      return
    }  
      let loading = await toast.showLoading()

      await loading.present(); 

      axios
        .put("/exchanges/"+this.request_id+"/Rechazado",{
          user_id : this.getUser.id
        })
        .then(res => {
          loading.dismiss()
          console.log(res)
          toast.openToast("Producto rechazado existosamente","success",2000);
          send_notification.send('Tu Producto ha sido rechazado',this.product_customer.name,{data: {path : {name :'request.rejected' , params : { requestId : this.request_id }}}},this.request.id_user)
          this.$router.push({path : '/principal'})
         })
        .catch(err => {
          loading.dismiss()
          console.log(err)
        });
    }
  }
});

</script>
<style type="text/css">
 .img-left{
  margin-left: -8%;
  width: 40%;
  height: 100%;
  float: left;
  border-radius: 30px 30px 30px 30px;
 }
 .img-right{
  margin-right: -8%;
  width: 40%;
  height: 100%;
  float: right;
  border-radius: 30px 30px 30px 30px;
 }

   @media (max-width: 1000px){
    .img-center{
     position: absolute;
     left:45%;
     top: 38%;
    }
  }

  @media (min-width: 1000px){
     .img-center{
     position: absolute;
     left:49%;
     top: 38%;
    }
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