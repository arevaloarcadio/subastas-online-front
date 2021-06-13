<template>
  <ion-app>
    <ion-router-outlet mode="out-in"
 enter-active-class="animate__animated animate__fadeIn"
 leave-active-class="animate__animated animate__fadeOut" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>