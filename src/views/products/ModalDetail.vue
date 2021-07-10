<template>
   <ion-page>
     <ion-row>
      <ion-col>
        <button type="button" @click="closeModal()" style="position: absolute;top: 290%; left: 90%">
          <ion-icon :icon="close"></ion-icon> 
        </button>
      </ion-col>
    </ion-row>
    <p style="color: #000">
      ¿Quien interambia este producto?
    </p>
 
</ion-page>
 <ion-content>
    <ion-row>
      <ion-avatar style="margin-left: 5%">
        <img src="/assets/avatar.png">
      </ion-avatar>
      <ion-col style="margin-top: 3%">
         <span class="text-control">Nombre del Usuario</span> 
      </ion-col>
    </ion-row>
    <div class="hr"> </div>
    <ion-row>
      <ion-col>
       <p class="p-no-center"  style="float: left;margin-left: 6%">
        Estado:
       </p> 
      </ion-col>
      <br>
      <ion-col> 
        <button type="button" class="tag-primary" style="margin-left: -10%;width: 180px;padding: 1px 2px">Producto Usado</button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <p class="p-no-center"  style="float: left;margin-left: 6%">
          Categoria:
        </p>
      </ion-col>
      <ion-col> 
        <button type="button" class="tag-primary" style="padding: 1px 2px"><ion-icon :icon="pricetag"></ion-icon> Tecnologia</button>
      </ion-col>
    </ion-row>  
 </ion-content>
</template>

<script>
import { IonContent,modalController } from '@ionic/vue';
import { close,pricetag } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalDetails',

  components: { IonContent },
  setup() {
    return { close,pricetag }
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