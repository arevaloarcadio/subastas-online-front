<template>
  <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>

    <div class="footer">
      <ion-grid>
        <ion-row>
          <ion-col col-2 class="cursor">
          
              <img src="/assets/Compass.png" @click="redirect('/principal')">
              <center>
                <div v-show="path == '/principal'" style="background:#32BAB0;height: 13px; width: 50%;border-radius: 100px 100px 0 0 ;"></div>
              </center>
          </ion-col>
          <ion-col col-2 class="cursor">
             <img src="/assets/Tag.png" style="margin-top: 5%;" @click="redirect('/principal')">
             <center>
                <div v-show="path == '/'" style="background:#32BAB0;height: 13px; width: 50%;border-radius: 100px 100px 0 0 ;"></div>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/PlusCircle.png" class="cursor" @click="redirect('/create/product')">
             <center>
                <div v-show="path == '/create/product' || path == '/create/details/product'" style="background:#32BAB0;height: 13px; width: 50%;border-radius: 100px 100px 0 0 ;"></div>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ArrowsLeftRight.png" class="cursor" @click="redirect('/my_exchanges')">
             <center>
                <div v-show="path == '/my_exchanges'" style="background:#32BAB0;height: 13px; width: 50%;border-radius: 100px 100px 0 0 ;"></div>
              </center>
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ChatCircleDots.png" class="cursor" @click="redirect('/principal')">
             <center>
                <div v-show="path == '/'" style="background:#32BAB0;height: 13px; width: 50%;border-radius: 100px 100px 0 0 ;"></div>
              </center>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script>

import { IonRow,IonGrid,IonCol   } from '@ionic/vue';
import { defineComponent  } from 'vue';


export default defineComponent({
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
});
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
</style>
