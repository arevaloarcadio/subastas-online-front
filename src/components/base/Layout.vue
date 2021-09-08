<template>
 <transition name="slide-fade" >
    <router-view></router-view>
 </transition>
</template>
<script>
import { mapGetters } from 'vuex'

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
        self.$router.push({path: '/get_started'});
      }else if(self.getUser.get_started == false && self.getUser.id == null){
        self.preload = false; 
        self.$router.push({path: '/login'});
      }else{
        self.preload = false; 
        self.$router.push({path: '/principal'});
      } 
    }    
  },
  methods: {
  
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