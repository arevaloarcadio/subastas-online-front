<template>
 <transition name="slide-fade" >
    <router-view  ></router-view>
 </transition>

</template>

<script>
import { mapGetters } from 'vuex'
import '@capacitor/app';
import { Plugins } from '@capacitor/core'
const { App } = Plugins

export default {
  name :'Layout',
  data(){
    return{
      height : screen.height,
      style : {
        img :{
          'margin-top'  : (screen.height/3)+'px'
        }
      },
      preload : false,
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  created(){
    if(this.$route.path == '/'){
      var self = this;
      if(self.getUser.get_started){
        self.preload = false; 
        this.set_first_route('/get_started')
        self.$router.push({path: '/get_started'});
      }else if(self.getUser.get_started == false && self.getUser.id == null){
        self.preload = false; 
        this.set_first_route('/login')
        self.$router.push({path: '/login'});
      }else{
        self.preload = false; 
        this.set_first_route('/principal')
        self.$router.push({path: '/principal' , query : {set_fcm : true }});
      } 
    }    
  },
 methods:{
  set_first_route(path){
  var self = this;
    document.addEventListener('ionBackButton', (ev) => {
      ev.detail.register(1, () => {
        if (self.$route.path == path) {
          App.exitApp();
        }else{
          this.$router.go(-1)
        }
      });
    });
  },
 }
};
</script>

<style scoped="">
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