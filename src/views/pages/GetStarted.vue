<template>

   <ion-content>
    
 <ion-slides pager="true" :options="slideOpts">
    <ion-slide >
    
        <span class="text-control" style="position: absolute;width: 254px;height: 48px;top: 13%;font-weight: 400;font-size: 20px;"> Conecta con personas alrededor del mundo</span>

 
        <img src="assets/amigos.svg" style="margin-top: 5%;">

    </ion-slide>
    <ion-slide >
         <span class="text-control" style="position: absolute;width: 254px;height: 72px;top: 13%;font-weight: 400;font-size: 20px;">¡Intercambia lo que no utilizas por algo que si quieras utilizar!</span>
    
<img src="assets/get_started.svg" style="margin-top: 80px;">

    </ion-slide>
     <ion-slide >
        <span class="text-control" style="position: absolute;width: 254px;height: 72px;top: 13%;font-weight: 400;font-size: 20px;">
        Upgrap es 100% gratuito no pagas ni compras nada, solo intercambias!<br>
        <br>

         <span class="text-control" style="width: 320px;height: 48px;font-weight: 500;font-size: 20px;">
             ¡Comienza a intercambiar!
        </span>
        </span>
        
  
        <img src="assets/get_started-2.svg" style="margin-top: 92px;margin-left: 8px;">
   

        <button type="button"  style="position: absolute;top: 72%;" class="btn-primary" @click="() => router.push('/pre_login')"  >
          Lets trade!
        </button>
    </ion-slide>
  </ion-slides>    
</ion-content>

</template>

<script>
import { IonSlides, IonSlide,IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonSlides, IonSlide,IonContent },
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


<style>

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

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 45px;
    left: 0;
    width: 100%;
}

.swiper-pagination-bullet-active {
    background: #5B716F  !important;
}

.swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    display: inline-block;
    border-radius: 100%;
    background: #32BAB0;
    opacity: inherit;
}
</style>


