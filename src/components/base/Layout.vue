<template>

  <div v-if="preload && $route.path == '/'" class="preload" align="center" >
    <img src="/assets/logo-preload.png" :style="style.img">
    <ion-grid>
      <ion-row>
        <ion-col col-6>
           <ion-spinner align="center" name="crescent" color="light"  ></ion-spinner> 
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
       <transition name="slide-fade" >
        <router-view></router-view>
      </transition>
</template>
<script>
  import { IonSpinner,IonRow,IonGrid,IonCol } from '@ionic/vue';
export default {
  components: { IonSpinner,  IonGrid, IonRow,IonCol  },
  name :'Layout',
  data(){
    return{
      height : screen.height,
      style : {
        img :{
          'margin-top'  : null
        }
      },
      preload : true,
    }
  },
  created(){
    if(this.$route.path == '/'){
      this.style.img['margin-top'] = (screen.height/3)+'px'
      var self = this;
          setTimeout(function() {
                self.preload = false; 
               self.$router.push({path: '/pre_login'});
          }, 2000);
    }else{
      this.preload = false; 
    }    
  },
  methods: {
  
  }
};
</script>

<style type="text/css">
.preload{
  position: absolute;
width: 100%;
height: 100%;

/* Green Upgrap */

background: #32BAB0;
}

.preload img {
  vertical-align:middle;
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