<template>
  <ion-page>
    <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 89px;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <p style="color: #000" class="title">
            Detalle del producto
          </p>
      </ion-col>
    </ion-row>
    <ion-content >
  
        <ion-card style="width: 95%;">
            <div align="center" class="badge-2" style="top: 5%;left: 79%;"> 
                    <span style="position: absolute;left: 15%;top: 20%;">
                    10
                    </span>
                    <svg  style="position: absolute;top: 15%;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12.375L19.25 15.125L16.5 17.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.75 15.125H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 9.625L2.75 6.875L5.5 4.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.25 6.875H2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </div>
        <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" style="width: 112%;height: 257px;">
        </ion-card>
         <ion-row>
             <ion-col>
              <span class="text-control" style="margin-left: 8px;position: absolute;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;color: #32BAB0;">
                Nombre de Producto
              </span>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 87%;">
            <path d="M25 28L15.9991 23L7 28V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H24C24.2652 4 24.5196 4.10536 24.7071 4.29289C24.8946 4.48043 25 4.73478 25 5V28Z" stroke="#32BAB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </ion-col>
           

          </ion-row>
          <p style="float: left;margin-left: 4%;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;    margin-top: -2%; ">
            Dirección, Pais
          </p>
          <br>
          <span class="text-control" style="margin-left: 4%; font-weight: 400;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #32BAB0;margin-left: -129px;">
             Descripción 
          </span>
          <br>
          <p class="p-no-center" style="float: left;margin-left: 4%;font-size: 16px;line-height: 20px;letter-spacing: 0.02em;color: #5B716F;margin-top: 6px;">
            bicicleta especial para adultos mayores con poco uso bicicleta especial para adultos mayores con poco uso
          </p>
          <div align="center" class="buttons-details">
          <ion-row>
              <ion-col   size="6">  
                <button type="button" class="btn-line"  style="width: 151px" @click="openModal">Mas Información</button>
              </ion-col>
              <ion-col   size="6" >  
                <button type="button" class="btn-primary" style="width: 151px" @click="redirect({ name : 'select_product.requests',params : { productId : 1} })" >Me Interesa</button>
              </ion-col>
            </ion-row>
           
          </div>

       <p class="p-no-center"  style="float: left;margin-left: 2%;font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #000000;">
              Te puede interesar...
            </p>
        
            <ion-row style="position: absolute;margin-top: 8%;">
               <ion-col v-for="n in 2" :key="n"  size="6"  >
                <ion-card class="cursor" @click="redirect_details(n)" style="width: 100%;left: -5%;">
                  <!--<div align="center" class="badge-2"> 
                    <span style="position: absolute;left: 15%;top: 20%;">
                    10
                    </span>
                    <svg  style="position: absolute;top: 15%;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12.375L19.25 15.125L16.5 17.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.75 15.125H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 9.625L2.75 6.875L5.5 4.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.25 6.875H2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </div>-->
                   <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" style="width: auto;height: 143px;border-radius: 0px 10px 0px 0px;width: 100%;">

                    <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row>
                    <b  style="font-family: Montserrat;font-style: normal;font-weight: bold;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #001D1B;margin-top: -15px;"> 
                      Nombre {{n}}
                    </b>
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content style="margin-top:-15px">Ubicación
                </ion-card-content>
                <br>
              </ion-card>
            </ion-col>
          </ion-row>

    </ion-content>
  </ion-page>
</template>

<script >

import { repeat,arrowBack } from 'ionicons/icons';
import ModalDetail from '@/views/products/ModalDetail'
import { 

  IonContent, 
  modalController,

  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
 
  
    IonPage
  },
  setup() {
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }

    const loadData = (ev) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    }

    pushData();

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
      repeat,
      arrowBack
    }
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalDetail,
          keyboardClose : true,
        })
      return modal.present();
    }
  }
});

</script>
<style scoped="">
ion-card{

width: 345px;
height: 257px;


background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
border-radius: 10px;
}
</style>