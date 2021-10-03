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
        <br><br>
          <p class="sub-title" style="width: 80%;margin-left: 10%;font-weight: 500;">
           Selecciona uno o  más <br> de tus productos
          </p>
     <ion-card style="box-shadow: inherit;margin-top: 8%;width: 101%;margin-left: -1%">
      <img :src="BasePublic+product.photo" class="img-left">
      <div style="display: flex;justify-content: center;">
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="img-center">
        <path d="M36.75 27.5625L42.875 33.6875L36.75 39.8125" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.125 33.6875H42.875" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.25 21.4375L6.125 15.3125L12.25 9.1875" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42.875 15.3125H6.125" stroke="#5B716F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>  
      <div v-show="product_select == null" class="img-right" style="background: #6ACFC7;"></div>
      <img v-show="product_select != null" class="img-right" :src="BasePublic+product_select?.photo">

    </ion-card>
    <br><br>
    <ion-card style=" height: 149px; width: 100%; overflow: auto;white-space: nowrap;box-shadow: inherit;margin-left: 0%;" >
     
      <template v-for="product in products" :key="product"> 
          <img :src="BasePublic+product.photo" @click="product_select = product" style="border-radius: 30px 30px 30px 30px; width: 128px;height: 149px;" >&nbsp;
      </template>
      &nbsp;
       <button class="button-add"><img class="img-add" src="/assets/FAB.png" @click="$router.push({path : '/create/product'})">
       </button>
    </ion-card>
    <br>
    <p>  
      <button type="button" class="btn-primary" @click="redirect()" style="width: 181px">
        Enviar Mensaje
      </button>
    </p>
  <br><br><br><br> 
  
    </ion-content>
  </ion-page>
</template>

<script>

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import axios from 'axios'
import { mapGetters } from 'vuex'
import BasePublic from '@/plugins/store/utils'
import { 
  IonContent, 
  modalController,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import toast from '@/toast'

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
      products : [],
      product_select : null,
      product :  null
    }
  },
  created(){
    this.getProducts()
    this.product = this.$route.query


  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    redirect() {
      if(this.product_select== null){
         toast.openToast("Debe seleccionar un producto","error",2000);
         return;
      }
      var path = {
          name : 'add_message.requests' ,
          query : {
            product_id : this.product.id ,
            product_photo :  this.product.photo,
            product_id_user :  this.product.id_user ,
            product_select_id : this.product_select.id ,
            product_select_photo : this.product_select.photo,
            product_select_id_user : this.product_select.id_user 
          }
        };

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
    getProducts(){
      axios
        .get("/products/user/"+this.getUser.id)
        .then(res => {
          this.products = res.data
         })
        .catch(err => {
          console.log(err)
        });
    },
  }
});

</script>
<style type="text/css">
 .img-left{
  margin-left: -58px;
  width: 215px;
height: 210px;
  float: left;
  border-radius: 30px 30px 30px 30px;

 }
 .img-right{
margin-right: -58px;
  width: 215px;
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
      width: 128px;
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
     width: 128px;
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