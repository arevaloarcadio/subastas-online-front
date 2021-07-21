<template>
   <ion-page>

     <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Preferencias
        </p>
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding">

     
      <span style="font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #000000;"> Categorías</span>
       <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;" >
     

         Se optimizará la plataforma para mostrarte estos productos primero
     </p>
     <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 86%;position: absolute;margin-top: 2%;">
         <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
        </svg><br>
       <center><span class="text-control button-category-edit" > Belleza</span> </center>
     </div>
     <br>
      <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 86%;position: absolute;margin-top: 2%;">
         <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
        </svg><br>
       <center><span class="text-control button-category-edit"  > Deco</span> </center>
     </div>
     <br>
     <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 86%;position: absolute;margin-top: 2%;">
         <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
        </svg>
        <br>
       <center><span class="text-control button-category-edit" > Juguetes</span> </center>
     </div>
     <br>
      <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
       <br>
       <center>
        <span class="text-control" >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#32BAB0"/>
        </svg>
          </span> 
        </center>
     </div>
      <br>
       <span style="font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #000000;"> Solicitudes y respuestas</span>
    
       <br>
       <br>
      <p class="p-no-center" style="margin-left: 2px;margin-top: -12px"  >
       Decide como te pueden contactar
     </p>
      <ion-row>
          <ion-col>
            <p class="p-no-center text-edit-profile"  :class="{'checked': chat}">
              Habilitar el chat para <br>todas las propuestas
            </p>
          </ion-col>
          <ion-col size="2">
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 32%;">
                <input class="c-switch-input"  id="private" type="checkbox"  @click="checked('enable_chat')" v-model="chat"><span class="c-switch-slider" ></span>
              </label>
          </ion-col>
        </ion-row><br>
        <ion-row>
          <ion-col>
            <p class="p-no-center  text-edit-profile" :class="{'checked': proposal}">
             Decidir que propuestas <br> acepto
            </p>
          </ion-col>
          <ion-col size="2">
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 32%;">
                <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider"></span>
              </label>
          </ion-col>
        </ion-row>
    <br>
    <br><br>
    </ion-content>  
  </ion-page>  
</template>


<script>
  
import { arrowBack,closeSharp } from 'ionicons/icons';
import { defineComponent,ref } from 'vue';
import { 

  IonContent, 

  IonPage
 } from '@ionic/vue';

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
      arrowBack,
      closeSharp
    }
  },
  data(){
    return {
      chat : false,
      proposal : false
    }
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    checked (input){
      if(input == 'enable_chat' ){
        this.chat = !this.chat
      }else{
        this.proposal = !this.proposal 
      }
      console.log(event)

    }
  }
});


</script>


<style type="text/css">

   .checked{
    color: #32BAB0;
   }
   .button-category-edit {
    font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

align-items: center;
text-align: center;
letter-spacing: 0.75px;

color: #32BAB0;
   }

   .text-edit-profile{
    font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;margin-top: -1%;    margin-left: -1%;
   }
</style>


