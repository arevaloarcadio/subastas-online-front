<template>

  <ion-page>
    <div>
    <div style="text-align: center; margin-top: 2%">
      <ion-grid>
        <ion-row>  
          <ion-col col-2 class="cursor">
            <button  @click="redirect({path : 'notification'})" v-if="!invite" style="background-color: #fff"> <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12.75C21 8.145 19.29 4.29 15 3.27V0H9V3.27C4.695 4.29 3 8.13 3 12.75L3 21L0 22.5V25.5H24V22.5L21 21L21 12.75ZM12.6 29.94C12.405 29.985 12.21 30 12 30C10.335 30 9.00001 28.65 8.98501 27H14.985C14.985 27.42 14.91 27.81 14.76 28.17C14.37 29.07 13.575 29.73 12.6 29.94Z" fill="#001D1B"/>
                </svg>
            </button>
            <button v-else @click="toast.openToast('Regístrese o inicie sesión para acceder a esta sección.','error',2000);" style="background-color: #fff"> <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12.75C21 8.145 19.29 4.29 15 3.27V0H9V3.27C4.695 4.29 3 8.13 3 12.75L3 21L0 22.5V25.5H24V22.5L21 21L21 12.75ZM12.6 29.94C12.405 29.985 12.21 30 12 30C10.335 30 9.00001 28.65 8.98501 27H14.985C14.985 27.42 14.91 27.81 14.76 28.17C14.37 29.07 13.575 29.73 12.6 29.94Z" fill="#001D1B"/>
                </svg>
            </button>
          </ion-col>
          <ion-col col-2 >
              <svg width="169" height="37.81" viewBox="0 0 260 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.4927 42.7557C23.4487 42.7557 28.1087 40.8325 31.5856 37.356C35.0623 33.8793 36.9854 29.2191 36.9854 24.263V1.03638H25.8897V24.263C25.8897 28.3314 22.5611 31.6601 18.4927 31.6601C14.4243 31.6601 11.0956 28.3314 11.0956 24.263V1.03638H0V24.263C0 29.2191 1.92324 33.879 5.39973 37.356C8.87638 40.8326 13.5366 42.7557 18.4927 42.7557Z" fill="#32BAB0"/>
              <path d="M85.8912 13.5362C84.7817 11.0212 83.3022 8.80206 81.379 6.80488C79.3818 4.88164 77.1626 3.40221 74.6477 2.29265C72.0587 1.18309 69.322 0.665283 66.4368 0.665283C63.6259 0.665283 60.815 1.18309 58.2259 2.29265C55.7109 3.40221 53.4918 4.88164 51.4946 6.80488C49.5713 8.72813 48.0919 11.0212 46.9823 13.5362C45.9468 16.1252 45.355 18.8619 45.355 21.7471V53.1846L56.4506 56.8832V40.3138C57.0423 40.6097 57.6341 40.9055 58.2259 41.1275C60.8149 42.237 63.6256 42.8288 66.4368 42.8288C69.2476 42.8288 72.0586 42.237 74.6477 41.1275C77.1627 40.0919 79.3818 38.6125 81.379 36.6153C83.3022 34.692 84.7817 32.4729 85.8912 29.958C87.0008 27.369 87.5186 24.5583 87.5186 21.7471C87.5186 18.8622 87.0008 16.1253 85.8912 13.5362ZM66.4371 31.7327C60.9634 31.7327 56.451 27.2205 56.451 21.7466C56.451 16.2727 60.9632 11.7604 66.4371 11.7604C71.9111 11.7604 76.4233 16.2727 76.4233 21.7466C76.4233 27.2205 71.9111 31.7327 66.4371 31.7327Z" fill="#32BAB0"/>
              <path d="M126.941 6.65683C123.02 2.7364 117.768 0.591309 112.295 0.591309C106.747 0.591309 101.495 2.73645 97.5746 6.65683C93.6541 10.5773 91.509 15.7551 91.509 21.3029C91.509 26.8507 93.6542 32.0289 97.5746 35.949C101.495 39.8694 106.747 42.0145 112.295 42.0145C115.549 42.0145 118.73 41.2748 121.541 39.8694C120.431 43.9378 116.659 46.8968 112.295 46.8968C109.78 46.8968 107.413 45.9352 105.637 44.2338L97.9442 52.2967C101.865 55.9952 106.894 57.9925 112.221 57.9925C117.768 57.9925 123.02 55.8474 126.941 51.927C130.861 48.0066 133.006 42.8287 133.006 37.2809V21.3033C133.006 15.7555 130.861 10.5774 126.941 6.65723V6.65683ZM112.295 30.9194C106.969 30.9194 102.605 26.6291 102.605 21.3034C102.605 15.9777 106.969 11.6134 112.295 11.6134C117.62 11.6134 121.911 15.9776 121.911 21.3034C121.911 26.6292 117.546 30.9194 112.295 30.9194Z" fill="#32BAB0"/>
              <path d="M152.63 42.2371V24.0405C152.63 16.9396 158.4 11.0956 165.575 11.0956V0C162.32 0 159.139 0.665731 156.181 1.92325C153.37 3.1068 150.781 4.88209 148.561 7.10141C146.342 9.24655 144.641 11.8355 143.383 14.7206C142.126 17.6794 141.534 20.7861 141.534 24.0409V42.2375L152.63 42.2371Z" fill="#32BAB0"/>
              <path d="M197.719 0.593262L197.793 2.96034C194.834 1.48093 191.579 0.667248 188.25 0.667248C185.439 0.667248 182.628 1.18506 180.039 2.29462C177.524 3.40418 175.305 4.8836 173.308 6.80685C171.385 8.7301 169.905 11.0232 168.796 13.5381C167.76 16.1271 167.168 18.9379 167.168 21.7491C167.168 24.5599 167.76 27.3709 168.796 29.96C169.905 32.475 171.385 34.6941 173.308 36.6913C175.305 38.6145 177.524 40.0939 180.039 41.2035C182.628 42.2391 185.439 42.8309 188.25 42.8309C191.579 42.8309 194.833 42.0172 197.793 40.5378L197.719 42.2391H208.814V0.593769L197.719 0.593262ZM193.28 30.3296C191.801 31.2173 190.026 31.7351 188.25 31.7351C182.777 31.7351 178.264 27.2228 178.264 21.7489C178.264 16.275 182.776 11.7628 188.25 11.7628C190.174 11.7628 192.097 12.2806 193.65 13.3901C195.277 14.3517 196.535 15.8311 197.275 17.5325C197.94 18.864 198.236 20.2694 198.236 21.7488C198.236 23.5241 197.792 25.2255 196.905 26.7788C196.017 28.2582 194.834 29.516 193.28 30.3296Z" fill="#32BAB0"/>
              <path d="M257.573 13.5362C256.463 11.0212 254.984 8.80206 253.061 6.80488C251.064 4.88164 248.844 3.40221 246.33 2.29265C243.741 1.18309 241.004 0.665283 238.119 0.665283C235.308 0.665283 232.497 1.18309 229.908 2.29265C227.393 3.40221 225.174 4.88164 223.176 6.80488C221.253 8.72813 219.774 11.0212 218.664 13.5362C217.629 16.1252 217.037 18.8619 217.037 21.7471V53.1846L228.132 56.8832V40.3138C228.724 40.6097 229.316 40.9055 229.908 41.1275C232.497 42.237 235.307 42.8288 238.119 42.8288C240.929 42.8288 243.74 42.237 246.33 41.1275C248.845 40.0919 251.064 38.6125 253.061 36.6153C254.984 34.692 256.463 32.4729 257.573 29.958C258.683 27.369 259.2 24.5583 259.2 21.7471C259.2 18.8622 258.683 16.1253 257.573 13.5362ZM238.119 31.7327C232.645 31.7327 228.133 27.2205 228.133 21.7466C228.133 16.2727 232.645 11.7604 238.119 11.7604C243.593 11.7604 248.105 16.2727 248.105 21.7466C248.105 27.2205 243.593 31.7327 238.119 31.7327Z" fill="#32BAB0"/>
              </svg>
              </ion-col>
        
          <ion-col col-2 class="cursor">
            <button  @click="redirect({path : 'profile',query : { invite : true }})" v-if="invite" style="background-color: #fff"> <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 0C7.97717 0 5.11111 2.83326 5.11111 6.31579C5.11111 9.79832 7.97717 12.6316 11.5 12.6316C15.0228 12.6316 17.8889 9.79832 17.8889 6.31579C17.8889 2.83326 15.0228 0 11.5 0ZM11.5 10.1053C9.38656 10.1053 7.66667 8.40505 7.66667 6.31579C7.66667 4.22653 9.38656 2.52632 11.5 2.52632C13.6134 2.52632 15.3333 4.22653 15.3333 6.31579C15.3333 8.40505 13.6134 10.1053 11.5 10.1053ZM23 24V22.7368C23 17.8623 18.9865 13.8947 14.0556 13.8947H8.94444C4.01222 13.8947 0 17.8623 0 22.7368V24H2.55556V22.7368C2.55556 19.2543 5.42161 16.4211 8.94444 16.4211H14.0556C17.5784 16.4211 20.4444 19.2543 20.4444 22.7368V24H23Z" fill="#001D1B"/>
              </svg>
              </button>
               <button  @click="redirect({path : 'profile'})" v-else style="background-color: #fff"> <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 0C7.97717 0 5.11111 2.83326 5.11111 6.31579C5.11111 9.79832 7.97717 12.6316 11.5 12.6316C15.0228 12.6316 17.8889 9.79832 17.8889 6.31579C17.8889 2.83326 15.0228 0 11.5 0ZM11.5 10.1053C9.38656 10.1053 7.66667 8.40505 7.66667 6.31579C7.66667 4.22653 9.38656 2.52632 11.5 2.52632C13.6134 2.52632 15.3333 4.22653 15.3333 6.31579C15.3333 8.40505 13.6134 10.1053 11.5 10.1053ZM23 24V22.7368C23 17.8623 18.9865 13.8947 14.0556 13.8947H8.94444C4.01222 13.8947 0 17.8623 0 22.7368V24H2.55556V22.7368C2.55556 19.2543 5.42161 16.4211 8.94444 16.4211H14.0556C17.5784 16.4211 20.4444 19.2543 20.4444 22.7368V24H23Z" fill="#001D1B"/>
              </svg>
              </button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <center>
        <br>
           <!--<ion-searchbar style="color: #5B716F;background: rgba(233, 235, 235, 0.5);border-radius: 10px;text-align: left;"  placeholder="Buscar" @click="openModal"></ion-searchbar>-->
            <div class="container1" style="width: 90%;">
              <div  class="input-container1" style="height: 55px;">
                <input type="text"  placeholder="Buscar"  class="input-text1" v-model="input_filter" @click="openModal" style="height: 55px;     padding-top: 3px;font-family: Montserrat;font-style: normal;font-weight: 300;font-size: 16px;color: #5B716F;">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 89%;margin-top: -9px;position: absolute;">
                  <path d="M18.2928 19.7071C18.6834 20.0976 19.3165 20.0976 19.707 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L18.2928 19.7071ZM14.1903 12.7761C13.7998 12.3856 13.1666 12.3856 12.7761 12.7761C12.3856 13.1666 12.3856 13.7998 12.7761 14.1903L14.1903 12.7761ZM19.7071 18.2929L14.1903 12.7761L12.7761 14.1903L18.2928 19.7071L19.7071 18.2929ZM14.1903 14.1903C15.6936 12.6871 16.625 10.6076 16.625 8.3125H14.625C14.625 10.0559 13.9196 11.6327 12.7761 12.7761L14.1903 14.1903ZM16.625 8.3125C16.625 3.72164 12.9034 0 8.31251 0V2C11.7989 2 14.625 4.8262 14.625 8.3125H16.625ZM8.31251 0C3.72164 0 0 3.72163 0 8.3125H2C2 4.8262 4.82621 2 8.31251 2V0ZM0 8.3125C0 12.9034 3.72164 16.625 8.31251 16.625V14.625C4.8262 14.625 2 11.7988 2 8.3125H0ZM8.31251 16.625C10.6076 16.625 12.6871 15.6935 14.1903 14.1903L12.7761 12.7761C11.6327 13.9196 10.0559 14.625 8.31251 14.625V16.625Z" fill="#96A7AF"/>
                  </svg>

            </div>
          </div>
        </center>
      </div> 
    </div>
    <ion-content class="ion-padding">
      

        <ion-row style="margin-top: -18px;">
            <ion-col v-for="product in products" :key="product"  size="6" >
                <div style="display: flex;justify-content: center;width: 112%;">  
                <ion-card class="cursor" @click="redirect_details(product)" style="width: 200px;left:-8px;">
                  <div v-show="product.requests != 0"  class="badge-2" style="padding-left: 18px;padding-top: 6.5px;"> 
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
             
                  <img :src="BasePublic+product.photo" style="width: auto;height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">
                <div :class="{'margin-ios' : showAppleSignIn}">  
                  <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b v-if="product.name.length > 15" style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;"> 
                       {{product.name.substr(0,15)+'...'}}
                    </b>
                    <b v-else  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;"> 
                       {{product.name}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content v-if="(product.pais+', '+product.city).length >15" style="margin-top:-15px">{{(product.pais+', '+product.city).substr(0,15)+'...'}}
                </ion-card-content>

                <ion-card-content v-else style="margin-top:-15px">{{product.pais+', '+product.city}}
                </ion-card-content>
              </div>  
              </ion-card>
                   </div>
            </ion-col>
           </ion-row>   
   
           

      <ion-infinite-scroll
        @ionInfinite="loadData($event)" 
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>




</template>

<script >
import { repeat,notifications,personOutline,add,logOut } from 'ionicons/icons';
import ModalSearch from '@/views/dashboard/ModalSearch'
import { mapGetters } from 'vuex'
import axios from 'axios'
import BasePublic from '@/plugins/store/utils'
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,

  IonPage
 } from '@ionic/vue';
import fcm_token from '@/plugins/fcm/fcm-token' ; 
import toast from '@/toast'
import { defineComponent, ref } from 'vue';
import { createAnimation } from '@ionic/vue';
import filter from './filter'
import io from 'socket.io-client'
import '@capacitor/device';
import { Plugins } from '@capacitor/core'

var socket  = io(axios.defaults.baseURL,{
  cors: {
    origin: '*',
  },
  withCredentials : false
});

socket.on("connection")



export default defineComponent({

  components: {
 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    //Header,

    IonPage
  },
  setup() {

    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    

    return {
      isDisabled,
      toggleInfiniteScroll,
      repeat,
      notifications,
      personOutline,
      add,
      logOut
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  data(){
    return {
      toast,
      BasePublic,
      products :[],
      reload : 0,
      invite : null,
      input_filter : null,
      base64 : [],
      showAppleSignIn : true,
      filter : null
    }
  },
  mounted(){
    socket.emit('user_conected',this.getUser)
    this.invite = this.$route.query.invite == undefined ? false : true

    if(this.$route.query.set_fcm && this.getUser.id != null && fcm_token.getToken() != null) {
      this.setFcm()
    }
    this.input_filter = filter.get()
    this.filter = filter.get()
    console.log(this.filter )
    if(this.filter == null){
      this.getProducts(this.reload)
    }else{
      this.getProductsFilter()
    }
    
    this.show_ios()
  
  },
  methods:{
     getBase64Resize(url,id){
      var self = this
        window.Jimp.read(url).then(function (lenna) {
               lenna.resize(256, window.Jimp.AUTO)      // resize
                 .quality(60)                 // set JPEG quality
                 .getBase64(window.Jimp.AUTO, function (err, src) {
                
                     self.base64[id] = src;
                     console.log(self.base64[id])
                 });
        })

      return self.base64[id]
    },
    setFcm(){
      console.log(fcm_token.getToken())
        axios
        .post("/fcm",{customer_id : this.getUser.id , token : fcm_token.getToken()})
        .then(res => {
          console.log(res)
         })
        .catch(err => {
          console.log(err)
        });
      
    },
    async show_ios(){
      let device = await Plugins.Device.getInfo();
      this.showAppleSignIn = device.platform === 'ios';
    },
    redirect_details(product) {
      this.$router.push({name: 'details.product',params :{ productId : product.id}, query : {...product}});
    },
    redirect(path) {
     this.$router.push(path);
    },
     async openModal() {
    
      const modal = await modalController
        .create({
          component: ModalSearch,
          keyboardClose : true,
          enterAnimation: this.enterAnimation,
          leaveAnimation: this.leaveAnimation,
          componentProps : {props_filter : this.input_filter}
        })


   
      modal.present();

      modal.onDidDismiss().then((data) => {
   
        if(data.data['input']){
          this.input_filter = data.data.input_filter
          this.products = data.data.products
          if(this.products.length == 0 && this.input_filter != ''){
            console.log(this.input_filter)
            this.getProductsFilter()
            return
          }else{
            this.getProducts(this.reload)
            return
          }
        }
        if(data.data['select_filter']){
          this.input_filter = data.data.filter
          this.products = data.data.products
          return
        }
        console.log(data.data)
        this.filter = data.data
        this.input_filter = data.data
        filter.add(this.input_filter)
        this.reload=0;
        this.getProductsFilter();
      })

    },
    getProductsFilter(){
      axios
      .post("/products/filter",{filter : this.input_filter})
      .then(res => {
        console.log(res)
        this.products = res.data
       })
      .catch(err => {
        console.log(err)
      })
    },
    enterAnimation : function () {
      let baseEl = document
        const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return createAnimation()
            .addElement(baseEl)
            .easing('ease-out')
            .duration(500)
            .addAnimation([backdropAnimation, wrapperAnimation]);
    },
    leaveAnimation  : function () {
       return this.enterAnimation(document).direction('reverse');
    },
   getProducts(offset,reload = false){

    if(this.$route.query.invite){ 
      axios
        .post("/products/6/"+offset+"/invite",{filter : this.filter})
        .then(res => {
          reload == false ? this.products.push(...res.data) : this.products = res.data
         })
        .catch(err => {
          console.log(err)
        });
      }else{
        axios
        .post("/products/6/"+offset+"/"+this.getUser.id,{filter : this.filter})
        .then(res => {
          reload == false ? this.products.push(...res.data) : this.products = res.data
         })
        .catch(err => {
          console.log(err)
        });
      }
    },
    loadData (ev) {
      this.reload+=14;
      this.getProducts(this.reload);
      ev.target.complete();
      if (this.products.length == 150) {
        ev.target.disabled = true;
        this.isDisabled = ev.target.disabled 
      }
    }
  }
});

</script>
<style type="text/css">
@media (max-width: 1000px){
    #fab-button-notifications{
     margin-left: 35%;
    }
  }

  @media (min-width: 1000px){
    #fab-button-notifications{
     margin-left: 75%;
    }
  }
</style>

<style scoped>



.label-input1{
  color: #32BAB0;
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 20px;
    left: 27px;
    position: absolute;
    top: 0px;
    margin: 0px;
    padding: 0px 8px;
    z-index: 1;
    background-color: aliceblue;
    transition: color 0.3s ease-in-out 0s;
    font-size: 16px;
}

.container1{

   background-color: #F3F3F3;
    padding-top: 8px;
    position: relative;
     border-radius: 8px;

}

.input-text1{
  background-color: transparent;
 
    font-family: Montserrat;
    letter-spacing: 0.4px;

    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0px;
    padding: 12px 14px;
    transition: background-color 0.3s ease-in-out 0s;
    width: 100%;
    font-weight: 300;
    font-size: 16px;

    color: #5B716F;
}

.input-container1{
      border-color: rgb(188, 202, 216);
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out 0s;
    border: 0px solid rgba(91, 113, 111, 0.8);



}


.input-container1:hover{
  border-color: rgb(1 4 8);
}


/* Set the icon color and opacity */

ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}

.margin-ios{
  margin-top: -12px;
}

</style>