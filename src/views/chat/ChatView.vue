<template>
<ion-page>
   <ion-row>
      <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 46px;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
         </ion-col>
           <ion-col>
        <p style="color: #000;font-weight: 500;font-size: 20px;margin-top: 34px;" class="title">
          {{product_name}}
        </p>
        <p style="font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #5B716F;margin-top: -18px;">
         {{customer_name}}
        </p>
        </ion-col>
        <ion-col>
        <button v-if="exchange =='recibido' &&  !status" @click="redirect({name : 'request.accepted.rejected' , params : {productId : request_id} , query :{} })"  style="margin-left: 54%;margin-top: 41px;background: transparent;">
          <img src="/assets/ArrowsLeftRightGreenLow.png">
        </button>
      </ion-col>
    </ion-row>

    <ion-content id="chat-body" ref="scroll" :scroll-events="true">
   
          <div class="content"  style="float: left;width: 100%;">
              
              <div class="messages" id="chat">
               <small style="margin-top:2%"></small>
               <template v-for="message in messages" :key="message">
                <ul v-if="message.type == 'message'">
                  <li v-if="!message.is_file" :class="{'replies' :  getUser.id == message.id_sender ,'sent' : getUser.id == message.id_receiver}">
                    <p >{{message.message}}</p>
                   
                  </li>
                  <template v-else >
                   <img :class="{'img-right' :  getUser.id == message.id_sender ,'img-left' : getUser.id == message.id_receiver}" :src="BasePublic+message.message">

                  </template>
                </ul>
          
                <center v-else-if="message.type=='accepted'" >
                 <ion-badge style="background: rgba(50, 186, 176, 0.3);
                  border-radius: 10px;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;color: #5B716F;" color="primary">{{message.message}}</ion-badge>
                </center>
              </template> 
              </div>

            
            </div>

       
      <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
     <div class="message-input">
          <div class="wrap">
              <span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"  @click="setOpen(true)" style="margin-top: 18px;    margin-left: -43px;">
                <path d="M22.75 22.75H5.25C4.78587 22.75 4.34075 22.5656 4.01256 22.2374C3.68437 21.9092 3.5 21.4641 3.5 21V8.75C3.5 8.28587 3.68437 7.84075 4.01256 7.51256C4.34075 7.18437 4.78587 7 5.25 7H8.74936L10.4994 4.375H17.4994L19.2494 7H22.75C23.2141 7 23.6592 7.18437 23.9874 7.51256C24.3156 7.84075 24.5 8.28587 24.5 8.75V21C24.5 21.4641 24.3156 21.9092 23.9874 22.2374C23.6592 22.5656 23.2141 22.75 22.75 22.75Z" stroke="#5B716F" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 18.375C16.1746 18.375 17.9375 16.6121 17.9375 14.4375C17.9375 12.2629 16.1746 10.5 14 10.5C11.8254 10.5 10.0625 12.2629 10.0625 14.4375C10.0625 16.6121 11.8254 18.375 14 18.375Z" stroke="#5B716F" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
          <input type="text"  style="padding-right: 15%;" v-model="message" placeholder="Escribe algo" >
             
          <button style="background: #fff;"><img src="/assets/button-send.svg" @click="postMessage()" style="margin-left: -56px;margin-top: -13px;"></button>
          </div>
      </div>
    
        <ion-modal
        :is-open="isOpenRef"
        :enterAnimation="enterAnimation"
        :leaveAnimation="leaveAnimation"  
        css-class="my-custom-class"
        @didDismiss="setOpen(false)"
        @ionModalWillDismiss="setOpen(false)"
      >
    <ModalUpload @get="getPhoto($event)" @close="setOpen(false)" ></ModalUpload>
  </ion-modal>     
  </ion-page>  
</template>


<script >


import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  createAnimation,
  IonModal,
  IonPage
 } from '@ionic/vue';

import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';
import { defineComponent, ref } from 'vue';
import axios from 'axios'
import { mapGetters } from 'vuex'
import ModalUpload from '../products/ModalUpload'
import BasePublic from '@/plugins/store/utils'
import send_notification from '@/plugins/fcm/send_notification'
import io from 'socket.io-client'

var ChatView

    var socket  = io(axios.defaults.baseURL,{
      cors: {
        origin: '*',
      },
      withCredentials : false
    });

    socket.on("connection")
    console.log(socket.on("connection"))
    socket.on('new_message', (message) => {
      if(message.id_sender == ChatView.getUser.id || message.id_receiver == ChatView.getUser.id)
        ChatView.getMessages()
        document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    });
    
export default defineComponent({
  components: {
    IonModal,
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    ModalUpload,
    IonPage
  },
   setup(){
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    return{
      isOpenRef,
      setOpen
    }
  },
  data(){
    return {
      BasePublic,
      socket : null,
      user_auth :   {id : 1 ,imagen : '/assets/products/product-3.png'},
      user_chat :  {id : 2 ,imagen : '/assets/products/product-1.png'},
      messages : 
      [
        {
          user_sent_id : 2 ,
          user_replies_id  : 1,
          data : 'Me gustaria intercambiar mi camisa'
        },
        {
          user_sent_id : 1,
          user_replies_id  : 2,
          data : 'Creo que es muy poco por el ukelele'
        },
      ],
      online : '',
      data : '',
      customer_name  : null,
      product_name : null,
      customer_id : null,
      message : null,
      file : null,
      request_id : null,
      exchange : null,
      product_user : null,
      request : null,
      status : false
    }
  },
  created(){
     ChatView = this

    this.customer_name  = this.$route.query.customer_name
    this.product_name  = this.$route.query.product_name
    this.customer_id  = this.$route.query.customer_id
    this.request_id = this.$route.query.request_id
    this.product_customer_id = this.$route.query.product_customer_id
    this.product_user_id = this.$route.query.product_user_id
    this.exchange = this.$route.query.exchange
    this.message_last_message_id = this.$route.query.message_last_message_id
    this.getMessages()
    this.getRequest()
    this.getProductEstatus()
    this.updateReadAtLastMessage()
  },
  mounted(){
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
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
    },
    getProductEstatus(){
       axios
        .get("/chat/status/"+this.getUser.id+"/"+this.customer_id)
        .then(res => {
          this.status = res.data.product_accepted_rejeted
          console.log(this.status)
         })
        .catch(err => {
          console.log(err)
        })
    },
    getMessages(){
      axios
        .get("/chat/"+this.getUser.id+'/'+this.customer_id)
        .then(res => {
          this.messages = res.data
         })
        .catch(err => {
          console.log(err)
        }).finally(()=> {
            document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
          setTimeout(function () {
             document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
          },500)
        
        });
    }, 
    getPhoto($event){
      this.file = this.dataURLtoFile($event.dataUrl,'image/png')
     // this.user.photo = URL.createObjectURL(this.dataURLtoFile($event.dataUrl,'image/png'));
      this.setOpen(false)
      this.postMessage(true)
    },
    updateReadAtLastMessage(){
       axios
        .put("/chat/read_at/"+this.message_last_message_id)
        .then(res => {
          console.log(res)
         })
        .catch(err => {
          console.log(err)
        })
    },
    postMessage(is_file = false){
      if(this.message == null && is_file == false){
        return;
      }
      
      let new_message = {
        id_sender : this.getUser.id,
        id_receiver :   this.customer_id,
        message :  'Has recibido un nuevo mensaje de '+ this.getUser.name+' - '+ this.product_user.name,
        is_file : is_file,
        type : 'message'
      }
      
      socket.emit('chat_message',new_message);
      
      let data;
      
      if(is_file){
        data = new FormData();
        data.append('id_sender',this.getUser.id);
        data.append('id_receiver', this.customer_id);
        data.append('message',this.file);
        data.append('is_file',is_file);
        data.append('type', 'message');    
      }else{
        data = {
          id_sender : this.getUser.id,
          id_receiver :   this.customer_id,
          message : this.message,
          is_file : is_file,
          type : 'message'
        }
      }
      
      axios.
       post('/chat/message',data,{'Content-Type': 'multipart/form-data'})
        .then(() => {
           this.message = null
           this.getMessages()
           this.customer_name  = this.$route.query.customer_name

            this.product_name  = this.$route.query.product_name
            this.customer_id  = this.$route.query.customer_id
            this.request_id = this.$route.query.request_id
            this.product_customer_id = this.$route.query.product_customer_id
            this.product_user_id = this.$route.query.product_user_id
            this.exchange = this.$route.query.exchange

           send_notification.send('Nuevo Mensaje',
            new_message.message,
            {data : {path : {name : 'request.chat' , params : { productId : this.request.product_user_id } , query : { customer_name : this.getUser.name,product_name : this.product_user.name,customer_id : this.getUser.id,request_id :this.$route.query.request_id,exchange : this.$route.query.exchange == 'recibido' ? 'enviado' : 'recibido' }}}},
            this.customer_id)
          })
        .catch(err => {
          console.log(err)
        });
    },
     getRequest(){
      axios
      .get("/requests/"+this.$route.query.request_id)
      .then(res => {
        this.request = res.data
       
      })
      .catch(err => {
        console.log(err)
      }).finally(() => {
        this.getProductCustomer()
      });
    },
    getProductCustomer(){
      axios
        .get("/products/"+this.request.product_user_id)
        .then(res => {
          this.product_user = res.data
           console.log(this.product_user )
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
    dataURLtoFile : function(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }, 
  }
});

</script>


<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #E2E2E2;
  font-family: "proxima-nova", "Source Sans Pro", sans-serif;
  font-size: 1em;
  letter-spacing: 0.1px;
  color: #32465a;
  text-rendering: optimizeLegibility;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  -webkit-font-smoothing: antialiased;
}

#app {
  width: 95%;
  min-width: 360px;
  max-width: 1000px;
  height: 92vh;
  min-height: 300px;
  max-height: 720px;
  background: #E2E2E2;
}
@media screen and (max-width: 360px) {
  #app {
    width: 100%;
    height: 100vh;
  }
}
#app #sidepanel {
  float: left;
  min-width: 280px;
  max-width: 340px;
  width: 40%;
  height: 100%;
  background: #2c3e50;
  color: #f5f5f5;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 735px) {
  #app #sidepanel {
    width: 58px;
    min-width: 58px;
  }
}
#app #sidepanel #profile {
  width: 80%;
  margin: 25px auto;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile {
    width: 100%;
    margin: 0 auto;
    padding: 5px 0 0 0;
    background: #32465a;
  }
}
#app #sidepanel #profile.expanded .wrap {
  height: 210px;
  line-height: initial;
}
#app #sidepanel #profile.expanded .wrap p {
  margin-top: 20px;
}
#app #sidepanel #profile.expanded .wrap i.expand-button {
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
#app #sidepanel #profile .wrap {
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  -moz-transition: 0.3s height ease;
  -o-transition: 0.3s height ease;
  -webkit-transition: 0.3s height ease;
  transition: 0.3s height ease;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap {
    height: 55px;
  }
}
#app #sidepanel #profile .wrap img {
  width: 50px;
  border-radius: 50%;
  padding: 3px;
  border: 2px solid #e74c3c;
  height: auto;
  float: left;
  cursor: pointer;
  -moz-transition: 0.3s border ease;
  -o-transition: 0.3s border ease;
  -webkit-transition: 0.3s border ease;
  transition: 0.3s border ease;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap img {
    width: 40px;
    margin-left: 4px;
  }
}
#app #sidepanel #profile .wrap img.online {
  border: 2px solid #2ecc71;
}
#app #sidepanel #profile .wrap img.away {
  border: 2px solid #f1c40f;
}
#app #sidepanel #profile .wrap img.busy {
  border: 2px solid #e74c3c;
}
#app #sidepanel #profile .wrap img.offline {
  border: 2px solid #95a5a6;
}
#app #sidepanel #profile .wrap p {
  float: left;
  margin-left: 15px;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap p {
    display: none;
  }
}
#app #sidepanel #profile .wrap i.expand-button {
  float: right;
  margin-top: 23px;
  font-size: 0.8em;
  cursor: pointer;
  color: #32BAB0;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap i.expand-button {
    display: none;
  }
}
#app #sidepanel #profile .wrap #status-options {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 150px;
  margin: 70px 0 0 0;
  border-radius: 6px;
  z-index: 99;
  line-height: initial;
  background: #32BAB0;
  -moz-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options {
    width: 58px;
    margin-top: 57px;
  }
}
#app #sidepanel #profile .wrap #status-options.active {
  opacity: 1;
  visibility: visible;
  margin: 75px 0 0 0;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options.active {
    margin-top: 62px;
  }
}
#app #sidepanel #profile .wrap #status-options:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 8px solid #32BAB0;
  margin: -8px 0 0 24px;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options:before {
    margin-left: 23px;
  }
}
#app #sidepanel #profile .wrap #status-options ul {
  overflow: hidden;
  border-radius: 6px;
}
#app #sidepanel #profile .wrap #status-options ul li {
  padding: 15px 0 30px 18px;
  display: block;
  cursor: pointer;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options ul li {
    padding: 15px 0 35px 22px;
  }
}
#app #sidepanel #profile .wrap #status-options ul li:hover {
  background: #496886;
}
#app #sidepanel #profile .wrap #status-options ul li span.status-circle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px 0 0 0;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options ul li span.status-circle {
    width: 14px;
    height: 14px;
  }
}
#app #sidepanel #profile .wrap #status-options ul li span.status-circle:before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  margin: -3px 0 0 -3px;
  background: transparent;
  border-radius: 50%;
  z-index: 0;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options ul li span.status-circle:before {
    height: 18px;
    width: 18px;
  }
}
#app #sidepanel #profile .wrap #status-options ul li p {
  padding-left: 12px;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #profile .wrap #status-options ul li p {
    display: none;
  }
}
#app #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {
  background: #2ecc71;
}
#app #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {
  border: 1px solid #2ecc71;
}
#app #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {
  background: #f1c40f;
}
#app #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {
  border: 1px solid #f1c40f;
}
#app #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {
  background: #e74c3c;
}
#app #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {
  border: 1px solid #e74c3c;
}
#app #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {
  background: #95a5a6;
}
#app #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {
  border: 1px solid #95a5a6;
}
#app #sidepanel #profile .wrap #expanded {
  padding: 100px 0 0 0;
  display: block;
  line-height: initial !important;
}
#app #sidepanel #profile .wrap #expanded label {
  float: left;
  clear: both;
  margin: 0 8px 5px 0;
  padding: 5px 0;
}
#app #sidepanel #profile .wrap #expanded input {
  border: none;
  margin-bottom: 6px;
  background: #32465a;
  border-radius: 3px;
  color: #f5f5f5;
  padding: 7px;
  width: calc(100% - 43px);
}
#app #sidepanel #profile .wrap #expanded input:focus {
  outline: none;
  background: #32BAB0;
}
#app #sidepanel #search {
  border-top: 1px solid #32465a;
  border-bottom: 1px solid #32465a;
  font-weight: 300;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #search {
    display: none;
  }
}
#app #sidepanel #search label {
  position: absolute;
  margin: 10px 0 0 20px;
}
#app #sidepanel #search input {
  font-family: "proxima-nova",  "Source Sans Pro", sans-serif;
  padding: 10px 0 10px 46px;
  width: calc(100% - 25px);
  border: none;
  background: #32465a;
  color: #f5f5f5;
}
#app #sidepanel #search input:focus {
  outline: none;
  background: #32BAB0;
}
#app #sidepanel #search input::-webkit-input-placeholder {
  color: #f5f5f5;
}
#app #sidepanel #search input::-moz-placeholder {
  color: #f5f5f5;
}
#app #sidepanel #search input:-ms-input-placeholder {
  color: #f5f5f5;
}
#app #sidepanel #search input:-moz-placeholder {
  color: #f5f5f5;
}
#app #sidepanel #contacts {
  height: calc(100% - 177px);
  overflow-y: scroll;
  overflow-x: hidden;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #contacts {
    height: calc(100% - 149px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
  #app #sidepanel #contacts::-webkit-scrollbar {
    display: none;
  }
}
#app #sidepanel #contacts.expanded {
  height: calc(100% - 334px);
}
#app #sidepanel #contacts::-webkit-scrollbar {
  width: 8px;
  background: #2c3e50;
}
#app #sidepanel #contacts::-webkit-scrollbar-thumb {
  background-color: #243140;
}
#app #sidepanel #contacts ul li.contact {
  position: relative;
  padding: 10px 0 15px 0;
  font-size: 0.9em;
  cursor: pointer;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #contacts ul li.contact {
    padding: 6px 0 46px 8px;
  }
}
#app #sidepanel #contacts ul li.contact:hover {
  background: #32465a;
}
#app #sidepanel #contacts ul li.contact.active {
  background: #32465a;
  border-right: 5px solid #32BAB0;
}
#app #sidepanel #contacts ul li.contact.active span.contact-status {
  border: 2px solid #32465a !important;
}
#app #sidepanel #contacts ul li.contact .wrap {
  width: 88%;
  margin: 0 auto;
  position: relative;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #contacts ul li.contact .wrap {
    width: 100%;
  }
}
#app #sidepanel #contacts ul li.contact .wrap span {
  position: absolute;
  left: 0;
  margin: -2px 0 0 -2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #2c3e50;
  background: #95a5a6;
}
#app #sidepanel #contacts ul li.contact .wrap span.online {
  background: #2ecc71;
}
#app #sidepanel #contacts ul li.contact .wrap span.away {
  background: #f1c40f;
}
#app #sidepanel #contacts ul li.contact .wrap span.busy {
  background: #e74c3c;
}
#app #sidepanel #contacts ul li.contact .wrap img {
  width: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #contacts ul li.contact .wrap img {
    margin-right: 0px;
  }
}
#app #sidepanel #contacts ul li.contact .wrap .meta {
  padding: 5px 0 0 0;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #contacts ul li.contact .wrap .meta {
    display: none;
  }
}
#app #sidepanel #contacts ul li.contact .wrap .meta .name {
  font-weight: 600;
}
#app #sidepanel #contacts ul li.contact .wrap .meta .preview {
  margin: 5px 0 0 0;
  padding: 0 0 1px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -moz-transition: 1s all ease;
  -o-transition: 1s all ease;
  -webkit-transition: 1s all ease;
  transition: 1s all ease;
}
#app #sidepanel #contacts ul li.contact .wrap .meta .preview span {
  position: initial;
  border-radius: initial;
  background: none;
  border: none;
  padding: 0 2px 0 0;
  margin: 0 0 0 1px;
  opacity: .5;
}
#app #sidepanel #bottom-bar {
  position: absolute;
  width: 100%;
  bottom: 0;
}
#app #sidepanel #bottom-bar button {
  float: left;
  border: none;
  width: 50%;
  padding: 10px 0;
  background: #32465a;
  color: #f5f5f5;
  cursor: pointer;
  font-size: 0.85em;
  font-family: "proxima-nova",  "Source Sans Pro", sans-serif;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #bottom-bar button {
    float: none;
    width: 100%;
    padding: 15px 0;
  }
}
#app #sidepanel #bottom-bar button:focus {
  outline: none;
}
#app #sidepanel #bottom-bar button:nth-child(1) {
  border-right: 1px solid #2c3e50;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #bottom-bar button:nth-child(1) {
    border-right: none;
    border-bottom: 1px solid #2c3e50;
  }
}
#app #sidepanel #bottom-bar button:hover {
  background: #32BAB0;
}
#app #sidepanel #bottom-bar button i {
  margin-right: 3px;
  font-size: 1em;
}
@media screen and (max-width: 735px) {
  #app #sidepanel #bottom-bar button i {
    font-size: 1.3em;
  }
}
@media screen and (max-width: 735px) {
  #app #sidepanel #bottom-bar button span {
    display: none;
  }
}
#app .content {
  float: right;
  width: 60%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 735px) {
  #app .content {
    width: calc(100% - 58px);
    min-width: 300px !important;
  }
}
@media screen and (min-width: 900px) {
  #app .content {
    width: calc(100% - 340px);
  }
}
#app .content .contact-profile {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #f5f5f5;
}
#app .content .contact-profile img {
  width: 40px;
  border-radius: 50%;
  float: left;
  margin: 9px 12px 0 9px;
}
#app .content .contact-profile p {
  float: left;
}
#app .content .contact-profile .social-media {
  float: right;
}
#app .content .contact-profile .social-media i {
  margin-left: 14px;
  cursor: pointer;
}
#app .content .contact-profile .social-media i:nth-last-child(1) {
  margin-right: 20px;
}
#app .content .contact-profile .social-media i:hover {
  color: #32BAB0;
}
#app .content .messages {
  height: auto;
  min-height: calc(100% - 93px);
  max-height: calc(100% - 93px);
  overflow-y: scroll;
  overflow-x: hidden;
}
@media screen and (max-width: 735px) {
  #app .content .messages {
    max-height: calc(100% - 105px);
  }
}
#app .content .messages::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
#app .content .messages::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
}
#app .content .messages ul li {
  display: inline-block;
  clear: both;
  float: left;
  margin: 15px 15px 5px 15px;
  width: calc(100% - 25px);
  font-size: 0.9em;
}
#app .content .messages ul li:nth-last-child(1) {

}
#app .content .messages ul li.sent img {
  margin: 6px 8px 0 0;
}
#app .content .messages ul li.sent p {
  background: #E9EBEB;
  color: #f5f5f5;
   margin-left: -44px;
     width: auto;
  height: auto;
   text-align: revert;
   color: #000;
   border-radius: 10px 10px 10px 0px;
   margin-top: -5%;
       padding-top: 6px;

}
#app .content .messages ul li.replies img {
  float: right;
  margin: 6px 0 0 8px;
}
#app .content .messages ul li.replies p {
  background: #E9EBEB;
  float: right;
  width: auto;
  height: auto;
text-align: revert;
color: #000;
border-radius: 10px 10px 0px 10px;
margin-top: -18px;
    padding-top: 6px;
}
#app .content .messages ul li img {
  width: 30px;
  height: 30px;
  width: 22px;
  border-radius: 50%;
  float: left;
}
#app .content .messages ul li p {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 269px;
  line-height: 130%;
}
@media screen and (min-width: 1000px) {
  #app .content .messages ul li p {
    max-width: 300px;
  }
}
 .message-input {
  position: absolute;
  
 bottom: -8px;
  width: 100%;
  z-index: 99;
  margin-left: 3%;
}
 .message-input .wrap {
  position: relative;
}
 .message-input .wrap input {
  font-family: "Montserrat";
  float: left;
  border: none;
  width: calc(100% - 90px);
  padding: 11px 32px 10px 8px;
  font-size: 0.8em;
  color: #000000;
  padding-left: 6%;
  background: #E9EBEB;
border-radius: 30px;
width: 284px;
height: 53px;
margin-left: 12px

}
@media screen and (max-width: 1000px) {

  .message-input .wrap input {
        margin-top: 3%;
      padding-left: 6%;
      margin-left: 2px;
  background: #E9EBEB;
border-radius: 30px;
margin-top: 1%;
    padding-left: 5%;
    width: 78%;
  }
   .message-input {
  position: absolute;
  
  bottom: -8px;
  width: 100%;
  z-index: 99;
}
}
@media screen and (min-width: 1000px) {
  .message-input .wrap input {
    
    padding-left: 3%;
    margin-left: 2%;
    background: #E9EBEB;
    border-radius: 30px;
      bottom: 10%;
        width: 78%;
  }
}
 .message-input .wrap input:focus {
  outline: none;
}
.message-input .wrap .attachment {
  position: absolute;
  right: 60px;
  z-index: 4;
  margin-top: 10px;
  font-size: 1.1em;
  color: #32BAB0;
  opacity: .5;
  cursor: pointer;
}
@media screen and (max-width: 735px) {
 .message-input .wrap .attachment {
    margin-top: 17px;
    right: 65px;
  }
}

 .message-input .wrap button {
  float: right;
  border: none;
  width: 50px;
  padding: 12px 0;
  cursor: pointer;
  background: #fff;
  color: #f5f5f5;
}
@media screen and (max-width: 735px) {
 .message-input .wrap button {
    padding: 16px 0;
  }
}

.message-input .wrap button:focus {
  outline: none;
}

.img-right{
      height: 168px;
    width: auto;
    float: right;
      margin-right: 15px;
      border-radius: 10px 10px 10px 10px;
}

.img-left{
  height: 168px;
  width: auto;
  float: left;
  margin-left: 15px;
  border-radius: 10px 10px 10px 10px;
}

</style>


