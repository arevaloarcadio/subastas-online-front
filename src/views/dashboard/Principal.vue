<template>

  <ion-page>
      <div>
    <div style="text-align: center; margin-top: 2%">
      <ion-grid>
          <ion-row>
            <ion-col col-2 class="cursor">
                 
              <ion-fab-button @click="redirect({path : 'notification'})" id="fab-button-notifications" style="" color="light">
                 <ion-icon :icon="notifications"></ion-icon>.
              </ion-fab-button>
            </ion-col>
            <ion-col col-2 >
               <img src="/assets/logo-green.png">
            </ion-col>
          
            <ion-col col-2 class="cursor">
              <ion-fab style="margin-left: -33%;">
                <ion-fab-button color="light"> <ion-icon :icon="personOutline"></ion-icon></ion-fab-button>
                 <ion-fab-list side="bottom">
                  <ion-fab-button @click="redirect({path : 'profile'})"><ion-icon :icon="personOutline"></ion-icon></ion-fab-button>
                  <ion-fab-button @click="redirect({path : 'login'})"><ion-icon :icon="logOut"></ion-icon></ion-fab-button>
                </ion-fab-list>
              </ion-fab>
            </ion-col>
          </ion-row>
        </ion-grid>
           <center>
         <ion-searchbar style="color: #5B716F;background: rgba(233, 235, 235, 0.5);border-radius: 10px;" @click="openModal"></ion-searchbar>
      </center>
      </div> 
   </div>
    <ion-content class="ion-padding">
      <ion-list>
           <ion-row>
            <ion-col v-for="n in 6" :key="n"  size="6" size-sm >
                <ion-card class="cursor" @click="redirect_details(n)">
                  <div align="center" class="badge-2">   
                    <ion-icon :icon="repeat"></ion-icon>10
                  </div>
                  <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>

                  <ion-card-header>

                 <ion-card-subtitle  style="color: #000">
                    <ion-row> 
                      <b>Nombre {{n}}</b> 
                    </ion-row>  
                  </ion-card-subtitle>
                
                  </ion-card-header>

                  <ion-card-content><b>Ubicacion</b>
                </ion-card-content>

              </ion-card>
            </ion-col>
           </ion-row>
        </ion-list>
      <ion-infinite-scroll
        @ionInfinite="loadData($event)" 
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script >
import { repeat,notifications,personOutline,add,logOut } from 'ionicons/icons';
import ModalSearch from '@/views/dashboard/ModalSearch'
//import Header from '@/components/base/Header'
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  modalController,
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    //Header,
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
      repeat,
      notifications,
      personOutline,
      add,
      logOut
    }
  },
  methods:{
    redirect_details(id) {
      this.$router.push({name: 'details.product',params :{ productId : id}});
    },
    redirect(path) {
     this.$router.push(path);
    },
     async openModal() {
      const modal = await modalController
        .create({
          component: ModalSearch,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
  }
});

</script>
<style type="text/css">
@media (max-width: 1000px){
    #fab-button-notifications{
     margin-left: 35%;
    }
  }

  @media (min-width: 1000px){
    #fab-button-notifications{
     margin-left: 75%;
    }
  }
</style>