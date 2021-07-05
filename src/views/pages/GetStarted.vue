<template>
 <ion-slides pager="true" :options="slideOpts">
    <ion-slide >
    
        <span class="text-control" style="position: absolute;width: 254px;height: 48px;top: 124px;"> Conecta con personas alrededor del mundo</span>
        <img src="assets/friends.png" style="margin-top: 25%;">
    
    </ion-slide>
    <ion-slide >
         <span class="text-control" style="position: absolute;width: 254px;height: 72px;top: 124px;">¡Intercambia lo que no utilizas por algo que si quieras utilizar!</span>
         <img src="assets/freepik.png" style=" position: absolute;left: 54.67%;right: 10.86%;top: 31.35%;">
         <img src="assets/guitar-2.png" style=" position: absolute;left: 41.51px;top: 199px;">
         <img src="assets/Device.png" style=" position: absolute;left: 51.2%;right: 14.76%;top: 53.38%;bottom: 40.34%;">
         <img src="assets/freepik-2.png" style="position: absolute;left: 9.6%;right: 61.56%;top: 60.54%;">
    </ion-slide>
     <ion-slide >
        <span class="text-control" style="position: absolute;width: 254px;height: 72px;top: 124px;">
        Upgrap es 100% gratuito no pagas ni compras nada, solo intercambias!
        </span>
         <span class="text-control" style="position: absolute;width: 320px;height: 48px;top: 246px;">
             ¡Comienza a intercambiar!
        </span>
        <img src="/assets/Device-2.png" style="position: absolute;left: 12.87%;right: 59.02%;top: 50.49%;bottom: 37.37%;">
        <img src="/assets/icon-get-started.png" style="position: absolute;left: 43.47%;right: 43.31%;top: 54.43%;bottom: 41.13%;">
        <img src="/assets/Headphones.png" style="position: absolute;left: 60.33%;right: 14.56%;top: 46.43%;bottom: 36.62%;">
        <button type="button" class="btn-primary" @click="() => router.push('/pre_login')"   style="width: 150px;margin-top: 106%;">
          Lets trade!
        </button>
    </ion-slide>
  </ion-slides>    

</template>

<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    const router = useRouter();
    return { slideOpts,router }
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
.swiper-slide{
    width: 100% !important;
    height: 100%   !important;
}

.swiper-container {
  height: 100%
}
</style>


