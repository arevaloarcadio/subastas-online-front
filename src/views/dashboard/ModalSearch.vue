<template>
  <ion-header>
 
    

  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col col-2>
        </ion-col>
        <ion-col col-2>
        </ion-col>
        <ion-col col-2>
           <button type="button" @click="closeModal()" style="margin-left:75%;">
            <ion-icon :icon="close"></ion-icon> 
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-searchbar style="color: #5B716F;background: rgba(233, 235, 235, 0.5);border-radius: 10px;" @click="openModal"></ion-searchbar>
 </ion-content>
</template>

<script>
import { IonContent, IonHeader,modalController,IonSearchbar } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',

  components: { IonContent, IonHeader,IonSearchbar },
  setup() {
    return { close }
  },
  data() {
    return {
    
    }
  },
  methods: {
  async closeModal() {
      const modal = await modalController
      return modal.dismiss();
    },
  }
});
</script>