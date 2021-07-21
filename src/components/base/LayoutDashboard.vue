<template>
  <div>
    <transition name="slide-fade" >
        <router-view></router-view>
    </transition>

    <div class="footer">
      <ion-grid>
        <ion-row>
          <ion-col col-2 class="cursor">
          
              <img src="/assets/Compass.svg" @click="redirect('/principal')">
              <center>
                 <svg v-show="path == '/principal'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
                </svg>
                
              </center>
          </ion-col>
          <ion-col col-2 class="cursor">
             <img src="/assets/tag.svg" style="margin-top: 5%;" @click="redirect('/saved_posts')">
             <center>
               <svg v-show="path == '/saved_posts'"   width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
                </svg>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/plus_circle.svg" class="cursor" @click="redirect('/create/product')">
             <center>
              <svg v-show="path == '/create/product' || path == '/create/details/product'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
              </svg>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ArrowsLeftRight.svg" class="cursor" @click="redirect('/my_exchanges')">
             <center>
               <svg v-show="path == '/my_exchanges'"  width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
                </svg>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ChatCircleDots.svg" class="cursor" @click="redirect('/chat/policies/terms')">
             <center>
                <svg v-show="path == '/chat'"   width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24.9998C0 13.678 9.17816 0 20.5 0C31.8218 0 41 13.678 41 24.9998C41 36.3217 31.8218 16.5 20.5 16.5C9.17816 16.5 0 36.3217 0 24.9998Z" fill="#32BAB0"/>
                </svg>
              </center>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script>

import { IonRow,IonGrid,IonCol   } from '@ionic/vue';



export default {
  components: { IonRow,IonGrid,IonCol },
  name: "LayoutDashboard",
 
  data() {
    return {
      path :null,
      from : null
    };
  },
  mounted(){
    this.path = this.$route.path
  },
   watch: {
    $route(to, from) {
      this.path = to.path
      this.from = from.path
    }
  },
  methods: {
    redirect(path) {
      this.$router.push({path: path});
    }
  }
};
</script>


<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: white;
  text-align: center;
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
</style>
