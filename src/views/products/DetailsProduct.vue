<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 40px;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <p style="color: #000" class="title">
            Detalle del producto
          </p>
      </ion-col>
    </ion-row>
    <ion-content id="content" class="ion-padding">
         <div style="display: flex;justify-content: center;">  
        <ion-card style="width:345px;">
       
        <div v-show="product.requests != 0"  class="badge" style="padding-left: 18px;padding-top: 6.5px;    margin-left: 80%;"> 
              <span  style="">
              {{product.requests}}
              </span>
              <svg  style="position: absolute;top: 15%;left: 30px;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 12.375L19.25 15.125L16.5 17.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.75 15.125H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 9.625L2.75 6.875L5.5 4.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.25 6.875H2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
        <img :src="BasePublic+product.photo" style="width: 112%;height: 257px;border-radius: 10px;">
        </ion-card>
          </div>
         <ion-row style="margin-top: -13px;">
            <ion-col size="8">
              <p class="p-no-center" style="padding-left: 1px;">
                <span class="text-control" style="font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;color: #32BAB0;">
                 {{product.name}}
                </span>
              </p>
          </ion-col>
            <ion-col  size="2">
            
               <svg v-if="!saved" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="savePost()" style="margin-left: 132%;margin-top: 14px;">
                <path d="M25 28L15.9991 23L7 28V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H24C24.2652 4 24.5196 4.10536 24.7071 4.29289C24.8946 4.48043 25 4.73478 25 5V28Z" stroke="#32BAB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg v-if="saved" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="deletePost()" style="margin-left: 132%;margin-top: 14px;">
                  <rect width="32" height="32" fill="white"/>
                  <path d="M25 28L15.9991 23L7 28V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H24C24.2652 4 24.5196 4.10536 24.7071 4.29289C24.8946 4.48043 25 4.73478 25 5V28Z" fill="#32BAB0" stroke="#32BAB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </ion-col>
          </ion-row>
          
          <p  class="p-no-center" style="margin-left: 5px;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;margin-top: -15px; ">
            {{ product.show_direction == 'true' ? product.pais+',' : 'No se muestra la dirección por decisión del usuario' }} {{  product.show_direction  == 'true' ? product.city : ''}}
             <br><br>  
          <span class="text-control" style=" font-weight: 400;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #32BAB0;">
             Descripción 
          </span><br>
          <span>
           {{product.description}}
         </span>
          </p>
          <div align="center">
          <ion-row >
              <ion-col   size="6"> 
                <button  type="button" class="btn-line"  style="width: 151px;" @click="openModal">Más Información</button>
              </ion-col>
              <ion-col   size="6" >  
                  <button v-show="getUser.id != product.id_user" type="button" class="btn-primary" style="width: 151px"   @click="redirect({ name : 'select_product.requests',params : { productId : product.id}, query : { ...product } })" >Me Interesa</button>
              </ion-col>
            </ion-row>
           
          </div>

        <p class="p-no-center"  style="font-style: normal;font-weight: bold;font-size: 16px;line-height: 18px;align-items: center;letter-spacing: 0.75px;color: #000000;margin-left: 4px;">
              Te puede interesar...
        </p>
     
          <ion-slides pager="true" :options="slideOpts" v-if="productsByCategory">
            <ion-slide>
              <div style="display: flex;justify-content: center;">  
                <ion-card class="cursor"  @click="redirect_details(productsByCategory[0])" style="width: 160px;overflow-y: auto;">
                  <img :src="BasePublic+productsByCategory[0].photo" style="width: auto;height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">
                  <ion-card-header>

                   <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;text-align: left;"> 
                       {{productsByCategory[0].name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>
                
                  
                  <ion-card-content style="margin-top:-15px;text-align: left;">{{productsByCategory[0].pais}}, {{productsByCategory[1].city}}
                </ion-card-content>

              </ion-card>
            </div>
                <div style="display: flex;justify-content: center;">  
              <ion-card class="cursor" style="width:160px;overflow-y: auto;" @click="redirect_details(productsByCategory[0])">
                  <img :src="BasePublic+productsByCategory[1].photo" style="height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">
                  <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;text-align: left;"> 
                      {{productsByCategory[1].name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content style="margin-top:-15px;text-align: left;">{{productsByCategory[1].pais}}, {{productsByCategory[1].city}}
                </ion-card-content>

              </ion-card>
                </div>
            </ion-slide>
            <ion-slide>
                  <div style="display: flex;justify-content: center;">  
               <ion-card class="cursor" style="width:160px;overflow-y: auto;" @click="redirect_details(productsByCategory[2])">
                  <img :src="BasePublic+productsByCategory[2].photo" style="height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">
                  <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;text-align: left;"> 
                    {{productsByCategory[2].name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content style="margin-top:-15px;text-align: left;">{{productsByCategory[2].pais}}, {{productsByCategory[2].city}}
                </ion-card-content>

              </ion-card>
                </div>
                  <div style="display: flex;justify-content: center;">  
              <ion-card class="cursor"  style="width:160px;overflow-y: auto;" @click="redirect_details(productsByCategory[3])">
                  <img :src="BasePublic+productsByCategory[3].photo" style="height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">
                  <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;text-align: left;"> 
                    {{productsByCategory[3].name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content style="margin-top:-15px;text-align: left;">{{productsByCategory[3].pais}}, {{productsByCategory[3].city}}
                </ion-card-content>

              </ion-card>
                </div>
            </ion-slide>

          </ion-slides>
          <br><br> <br><br>
    </ion-content>

  </ion-page>
</template>

<script >

import ModalDetail from '@/views/products/ModalDetail'
import { 
  IonContent, 
  modalController,
  IonPage,
 // IonSlides,
  //IonSlide,
 } from '@ionic/vue';
import BasePublic from '@/plugins/store/utils'
import { defineComponent } from 'vue';
import axios from 'axios';
import { mapGetters } from 'vuex'
import toast from '@/toast'

export default defineComponent({
  components: {
    IonContent, 
    //IonSlides,
    //IonSlide,
    IonPage
  },
  data(){
    return{
      BasePublic,
      product : null,
      productsByCategory : null,
      saved: false,
      category : null,
      user : null,
      show_name : true,
      show_city: true,
      show_pais: true
    }
  },
  created(){
    this.product = this.$route.query
    this.getCustomer()
    this.getCustomerSetting()
    this.getCategory()
    this.getProductsByCategories()
    if(this.getUser.d != null) {
      this.getSavePost()
    }
    console.log(this.getUser.id === null)
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  watch :{
    '$route.params.productId'(){
      this.product = this.$route.query
      if(this.product.category !== undefined){
        this.getCustomer()
        this.getCustomerSetting()
        this.getCategory()
        this.getProductsByCategories()
        if(this.getUser.id != null) {
          this.getSavePost()
            let shadowRoot = document.querySelector('#content').shadowRoot
            shadowRoot.querySelector('.scroll-y').scrollTop = 0
        }
      }
    }
  },
  methods:{
    redirect(path) {
      if(this.getUser.id === null){
         toast.openToast("Regístrese o inicie sesión para acceder a esta sección.","error",2000);
         return
      }
      this.$router.push(path);
    },
    redirect_details(product) {
      this.$router.push({name: 'details.product',params :{ productId : product.id}, query : {...product}});
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalDetail,
          keyboardClose : true,
          componentProps: {
            user : this.show_name ? this.user : '' ,
            category : this.category,
            product : this.product
          },
        })
      return modal.present();
    },  
    getCustomerSetting(){
     axios
      .get("/customers/setting/"+this.product.id_user)
      .then(res => {
        if (res.data.length != 0) {
          this.show_name = res.data.show_name
          this.show_city = res.data.show_city 
          this.show_pais = res.data.show_pais  
        }
      })
      .catch(err => {
       console.log(err)
      });
    },
    getProductsByCategories(){
     axios
      .get("/products/category/"+this.product.category)
      .then(res => {
        this.productsByCategory = res.data
       })
      .catch(err => {
        console.log(err)
      });
    },
    async savePost(){
    if(this.getUser.id === null){
     toast.openToast("Regístrese o inicie sesión para acceder a esta sección.","error",2000);
     return
    }
    var loading = await toast.showLoading()
    await loading.present();
     axios
      .post("/products/save/post",{
        product_id : this.product.id,
        user_id : this.getUser.id
      })
      .then(res => {
        console.log(res)
          this.saved = true
          loading.dismiss()
          toast.openToast("Publicación guardada exitosamente","error",2000);
       })
      .catch(err => {
        loading.dismiss()
        console.log(err)
      });
    },
    async deletePost(){
    if(this.getUser.id === null){
     toast.openToast("Regístrese o inicie sesión para acceder a esta sección.","error",2000);
     return
    }
    var loading = await toast.showLoading()
    await loading.present();
     axios
      .delete("/products/saved/"+this.getUser.id+"/"+this.product.id)
      .then(res => {
        this.saved = false
        console.log(res)
        toast.openToast("Publicación guardada eliminada exitosamente","error",2000);
        loading.dismiss()
       })
      .catch(err => {
        loading.dismiss()
        console.log(err)
      });
    },
    getSavePost(){
     axios
      .get("/products/saved/"+this.getUser.id+"/"+this.product.id)
      .then(res => {

        if(res.data != [])
          this.saved = true
        else
          this.saved = false
       })
      .catch(err => {
        console.log(err)
      });
    },
    getCustomer(){
     axios
      .get("/customers/"+this.product.id_user)
      .then(res => {
        this.user = res.data
        console.log(this.user )
       })
      .catch(err => {
        console.log(err)
      });
    },
    getCategory(){
     axios
      .get("/categories/"+this.product.category)
      .then(res => {
        this.category = res.data
       })
      .catch(err => {
        console.log(err)
      });
    }
  }
});

</script>
<style >


.swiper-container {
     height: 270px;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 45px;
    left: 0;
    width: 100%;
    display: none !important;
}

.swiper-pagination-bullet-active {
    background: #5B716F  !important;
}

.swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    display: inline-block;
    border-radius: 100%;
    background: #32BAB0;
    opacity: inherit;
  
}
.swiper-wrapper{
    margin-top: -29px !important;
}
</style>