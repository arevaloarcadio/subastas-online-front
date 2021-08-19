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
          
          <p  style="color: #000" class="title">
            Mis Productos
          </p>
      </ion-col>
    </ion-row>
     <ion-content class="ion-padding">
    
        <ion-row>
             <ion-col v-for="product in products" :key="product"  size="6"  >
              
                <ion-card style="width: 100%;left:-8px;overflow-y: auto;">
                  <div align="center" class="points"  style="background:transparent;" @click="openPopover($event,n,product)" >
                    <svg width="7" height="28" viewBox="0 0 7 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 7C5.425 7 7 5.425 7 3.5C7 1.575 5.425 0 3.5 0C1.575 0 0 1.575 0 3.5C0 5.425 1.575 7 3.5 7Z" fill="#32BAB0"/>
                    <path d="M3.5 10.5C1.575 10.5 0 12.075 0 14C0 15.925 1.575 17.5 3.5 17.5C5.425 17.5 7 15.925 7 14C7 12.075 5.425 10.5 3.5 10.5Z" fill="#32BAB0"/>
                    <path d="M0 24.5C0 22.575 1.575 21 3.5 21C5.425 21 7 22.575 7 24.5C7 26.425 5.425 28 3.5 28C1.575 28 0 26.425 0 24.5Z" fill="#32BAB0"/>
                    </svg>
                     </div>
                  
                  <img :src="BasePublic+product.photo" style="width: 100%;height: 143px;">

                   <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;"> 
                     {{product.name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content style="margin-top: -15px;"> {{product.pais}}, {{product.city}}
                </ion-card-content>

              </ion-card>
          
            </ion-col>
   
            <ion-col  size="6">
              <ion-card class="card" style="width: 95%;" @click="() => $router.push({path : '/create/product'})">
                <center>
                  <br><br>
                 <span style="font-style: normal;font-weight: 400;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;">Agregar</span><br><br>
                 <img src="assets/button-add.svg" @click="() => $router.push({path : '/create/product'})">
                </center>
             </ion-card>
            </ion-col>
          </ion-row>
      <br>     <br>
    </ion-content> 
  </ion-page>
</template>

<script>

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import PopoverProduct from './PopoverProduct.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
import { 
  IonContent, 
  modalController,
  IonPage,
  popoverController
 } from '@ionic/vue';
import BasePublic from '@/plugins/store/utils'
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
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  data(){
    return {
      BasePublic,
      products : []
    }
  },
  mounted(){
    this.getProducts()
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
    async openPopover($event,num,product) {

     let position;
      if (num%2 ==0) {
        position = "dere"
      }else{
        position = "izq"
      }
      const popover = await popoverController
        .create({
          event : $event,
          component: PopoverProduct,
          cssClass: position == 'dere' ? 'my-products-class-rigth' : 'my-products-class-left' ,
          translucent: true,
          componentProps : {
            product : product
          }
        })
  
      await popover.present();

      var self = this
      popover.onDidDismiss().then((data) => {
        console.log(data)
        if(data.data.methods == 'edit'){
          self.$router.push({name: 'edit.product', params : {productId :data.data.product.id },query : {...data.data.product}})
        }else{
          axios
            .delete("/products/"+data.data.product_id)
            .then(res => {
              console.log(res)
              this.getProducts()
              toast.openToast("Producto eliminado exitosamente","success",2000);
             })
            .catch(err => {
              console.log(err)
      });
        }
      })

    }
  }
});

</script>
<style type="text/css">

  @media (max-width: 1000px){
    .button-add-2{
      margin-left: 7%;
      background: #fff;
      margin-top: 4%;
    }
    .img-add-2{
          margin-left: -7%;
          margin-top: 6%;
    }
    .add{
       height: 90.5%;
    }
   
  }
   .card{
          height: 210px;
    }
  
  @media (min-width: 1000px){
    .button-add-2{
      width: 90%;
      height:90%;
      background: #fff;
      margin-top: 3%;
    }
    .img-add-2{
      margin-left: 2%;
      margin-top: 10%;
    }
    .add{
      margin-top: 92.5%;
    }
   
  }

  .text-add{
        top: 13%;
        left: 53px;
    position: absolute;
    font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;
  }

.my-products-class-rigth .popover-content{
  width: 154px !important;
 
  transform-origin: right top !important;
  height: 95px !important;
  border-radius: 15px !important;
}

.my-products-class-left .popover-content{
  width: 154px !important;
  left: 30px  !important;
  transform-origin: right top !important;
  height: 97px !important;
  border-radius: 15px !important;
}

.points{
    background: rgba(50, 186, 176, 0.6);
    border-radius: 4px;
    position: absolute;
    width: 57px;
    height: 31px;
    color: #fff;
    top: 4%;
    font-weight: 500;
    margin-left: 75%;


}


</style>