<template>
  <ion-page>
  
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" menu-id="first" content-id="main" @click="menu()" >
          <ion-icon name="menu-outline"></ion-icon>
        </ion-buttons>


        <ion-title>{{  $route.name }}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end">{{  user.first_name +' '+user.last_name }}</slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <Menu></Menu>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import Menu from './Menu'
import user from '@/plugins/jwt/user' ; 

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  //IonBackButton,
  IonButtons,
  menuController
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    //IonBackButton,
    IonButtons,
    Menu
  },
  data(){
    return{
      open_menu : false,
      user: JSON.parse(user.getUser())
    }
  },
  methods: {
    open() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    close() {
      menuController.enable(true, 'first');
      menuController.close('first');
    },
    menu(){
      this.open_menu = this.open_menu ? false : true
      if( this.open_menu){
        this.open() 
      }else{
        this.close() 
      }
    }
  },
};
</script>