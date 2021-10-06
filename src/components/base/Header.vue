<template>
<div>
    <div style="text-align: center; margin-top: 1%">
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
</template>

<script>

import { IonSearchbar,modalController,IonRow,IonGrid,IonCol ,IonFabList  } from '@ionic/vue';
import { defineComponent  } from 'vue';
import { notifications,personOutline,add,logOut } from 'ionicons/icons';
import ModalSearch from '@/views/dashboard/ModalSearch'

export default defineComponent({
  components: { IonSearchbar,IonRow,IonGrid,IonCol,IonFabList},
  name: "Header",
   setup() {

    return { notifications,personOutline,add,logOut}
  },
  data() {
    return {
    };
  },
  mounted(){
  },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalSearch,
          keyboardClose : true,
          cssClass: 'my-custom-class',
        })
      return modal.present();
    },
    redirect(path) {
      console.log(path)
     this.$router.push(path);
    }
  }, 
});
</script>


<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: white;
  text-align: center;
}
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


