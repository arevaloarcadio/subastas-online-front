<template>
   <ion-page>

     <ion-row>
       <ion-col>
        <button @click="$router.go(-1)" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 40%;position: absolute;" ></ion-icon>
        </button>
        <p style="color: #000">
          Preferencias
        </p>
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding">
     <ion-list>
     <p class="p-no-center" >
       <b style="color: #000">Categorias</b>
       <br>
       <br>
       Se optimizará la plataforma para mostrarte estos productos primero
     </p>
     <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
       <ion-icon :icon="closeSharp" style="float: right;" ></ion-icon><br>
       <center><span class="text-control" > Belleza</span> </center>
     </div>
     <br>
      <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
       <ion-icon :icon="closeSharp" style="float: right;" ></ion-icon><br>
       <center><span class="text-control" > Deco</span> </center>
     </div>
     <br>
     <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
       <ion-icon :icon="closeSharp" style="float: right;" ></ion-icon><br>
       <center><span class="text-control" > Juguetes</span> </center>
     </div>
     <br>
      <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
       <br>
       <center><span class="text-control" > <b>+</b></span> </center>
     </div>
     <p class="p-no-center" >
       <b style="color: #000">Solicitudes y respuestas</b>
       <br>
       <br>
       Decide como te pueden contactar
     </p>
      <ion-row>
          <ion-col>
            <p class="p-no-center"  :class="{'checked': chat}">
              Habilitar el chat para todas las propuestas
            </p>
          </ion-col>
          <ion-col>
              <label class="c-switch c-switch-3d c-switch-primary">
                <input class="c-switch-input"  id="private" type="checkbox"  @click="checked('enable_chat')" v-model="chat"><span class="c-switch-slider" style="margin-top: 40%;"></span>
              </label>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <p class="p-no-center" :class="{'checked': proposal}">
             Decidir que propuestas acepto
            </p>
          </ion-col>
          <ion-col>
              <label class="c-switch c-switch-3d c-switch-primary">
                <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
              </label>
          </ion-col>
        </ion-row>
     </ion-list>
         <ion-infinite-scroll @ionInfinite="loadData($event)" threshold="100px"  id="infinite-scroll" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>  
  </ion-page>  
</template>


<script lang="ts" >
  
import { arrowBack,closeSharp } from 'ionicons/icons';
import { defineComponent,ref } from 'vue';
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  IonList,
  IonPage
 } from '@ionic/vue';

export default defineComponent({
  components: {
 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonList,
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
</style>


