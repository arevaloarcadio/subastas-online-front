<template>
<div>
    <div style="text-align: center; margin-top: 2%">
      <ion-grid>
          <ion-row>
            <ion-col col-2 class="cursor">
                 <ion-icon :icon="notifications"></ion-icon>
            </ion-col>
            <ion-col col-2 >
               <img src="/assets/logo-green.png">
            </ion-col>
            <ion-col col-2 class="cursor"  @click="openPopover">
               <ion-icon :icon="personOutline"></ion-icon>
            </ion-col>
          </ion-row>
        </ion-grid>
           <center>
         <ion-searchbar style="color: #5B716F;background: rgba(233, 235, 235, 0.5);border-radius: 10px;" @click="openModal"></ion-searchbar>
      </center>
      </div> 
   </div>
</template>

<script>

import { IonSearchbar,modalController,IonRow,IonGrid,IonCol ,popoverController  } from '@ionic/vue';
import { defineComponent  } from 'vue';
import { notifications,personOutline } from 'ionicons/icons';
import ModalSearch from '@/views/dashboard/ModalSearch'
import Popover from './Popover.vue'

export default defineComponent({
  components: { IonSearchbar,IonRow,IonGrid,IonCol},
  name: "Header",
   setup() {

    return { notifications,personOutline}
  },
  data() {
    return {
    };
  },
  mounted(){
  },
  methods: {
  async openModal() {
      const modal = await modalController
        .create({
          component: ModalSearch,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
    async openPopover(Event) {
      const popover = await popoverController
        .create({
          component: Popover,
          cssClass: 'my-custom-class',
          event: Event,
          translucent: true
        })
      await popover.present();

      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
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
</style>


