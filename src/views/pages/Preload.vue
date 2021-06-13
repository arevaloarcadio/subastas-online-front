<template>

<div v-if="preload" class="preload" align="center" >
    <img src="/assets/logo-preload.png" :style="style.img">
    <ion-grid>
      <ion-row>
        <ion-col col-6>
           <ion-spinner align="center" name="crescent" color="light"  ></ion-spinner> 
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>


</template>
<script>
import { IonSpinner,IonRow,IonGrid,IonCol } from '@ionic/vue';
export default {
  components: { IonSpinner,  IonGrid, IonRow,IonCol  },
  name: "Preload",
  data(){
    return{
      height : screen.height,
      style : {
        img :{
          'margin-top'  : null
        }
      }
    }
  },
  created(){

    this.style.img['margin-top'] = (screen.height/3)+'px'

      var self = this;
        setTimeout(function() {
             self.preload = false;
        }, 2000);
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

</style>