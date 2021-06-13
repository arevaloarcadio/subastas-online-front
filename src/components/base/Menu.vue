<template>
  <ion-menu  side="start" menu-id="first" content-id="main">
    <ion-content>
      <ion-list>
        <ion-item>Perfil</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

 
</template>


<script>
import { 
  IonContent, 
  //IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  //IonTitle, 
  //IonToolbar,
  menuController
  
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name : 'Menu',
  components: {
    IonContent, 
    //IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    //IonTitle, 
    //IonToolbar
  },
  mounted(){
    console.log(screen.width)
    if(screen.width > 750){
       menuController.enable(true, 'first');
      menuController.open('first');
    }
    console.log("Menu montado")
  },
});
</script>

<style>
.my-custom-menu {
  --width: 500px;
}
</style>