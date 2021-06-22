<template>

  <ion-page>
      <Header/>
    <ion-content class="ion-padding">
      <ion-list>
           <ion-row>
            <ion-col v-for="n in 6" :key="n"  size="6" size-sm >
                <ion-card class="cursor" @click="redirect(n)">
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

<script lang="ts">

import { repeat } from 'ionicons/icons';
import Header from '@/components/base/Header'
import { 

  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    Header,
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
      items,repeat
    }
  },
  methods:{
    redirect(id) {
      this.$router.push({name: 'details.product',params :{ productId : id}});
    }
  }
});

</script>
<style type="text/css">

</style>