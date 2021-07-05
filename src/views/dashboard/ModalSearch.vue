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
           <button type="button" @click="closeModal()" style="margin-left:75%;background-color: #fff;">
            <ion-icon :icon="close"></ion-icon> 
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-searchbar style="color: #5B716F;background: #fff;border-radius: 10px;text-align: left;"   placeholder="Buscar" @click="openModal"></ion-searchbar>
    
      <img src="/assets/tecnology-green.png" style="width:50%" @click="search('tecnologia')">
      <img src="/assets/beatiful-green.png" style="width:50%"  @click="search('belleza')">
      <center>
        <img src="/assets/tools-green.png" style="width:100%" @click="search('herramientas')">
      </center>
    
    
    <img  src="/assets/home-green.png" style="width: 46%;margin-left: 3%;margin-bottom: 3%;"  @click="search('hogar')">
    <img  src="/assets/collection-green.png" style="width:50%"  @click="search('coleccion')">
    <img  src="/assets/books-green.png" style="width:52%"   @click="search('libros')">
 </ion-content>
</template>

<script>
import { IonContent, IonHeader,modalController,IonSearchbar } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalSearch',

  components: { IonContent, IonHeader,IonSearchbar },
  setup() {
    return { close }
  },
  data() {
    return {
    
    }
  },
  methods: {
  search(filter){
    alert(filter)
  },  
  async closeModal() {
      const modal = await modalController
      return modal.dismiss();
    },
  }
});
</script>

<style scoped="">
  
  @media (max-width: 1000px){
    #img-search-home{
    position: relative;
    top: -2%;
    left: 5%;
    }
    #img-search-collection{
       position: relative;
    top: 21%;
    left: -42%;
    }
    #img-search-books{
    position: relative;
    left: 50%;
    top: -20%;
    }
  }

  @media (min-width: 1000px){
    #img-search-home{
        position: relative;
    top: -26%;
    left: 19%;
    }
    #img-search-collection{
    position: relative;
    top: 0%;
    left: -13%;
    }
    #img-search-books{
      left: -15%;
    position: relative;
    }
  }
</style>