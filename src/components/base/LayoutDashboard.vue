<template>
  <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    <div class="footer">
      <ion-grid>
        <ion-row>
          <ion-col col-2>
              <img src="/assets/Compass.png">
          </ion-col>
          <ion-col col-2>
             <img src="/assets/Tag.png">
          </ion-col>
          <ion-col col-2>
             <img src="/assets/PlusCircle.png">
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ArrowsLeftRight.png">
          </ion-col>
          <ion-col col-2>
             <img src="/assets/ChatCircleDots.png">
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
    };
  },
  mounted(){
  },
  methods: {
 
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
