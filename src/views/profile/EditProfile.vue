<template>
   <ion-page>
     <ion-row>
       <ion-col>
        <button @click="$router.push({path : '/profile'})" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 52%;position: absolute;" ></ion-icon>
        </button>
        <p style="color: #000">
          Editar Perfil
        </p>
        <button style="background: #fff; margin-left: 80%;top: 52%;position: absolute;" @click="$router.push({path : '/principal'})" >
          <img src="/assets/check.png">
        </button>
      </ion-col>
    </ion-row>
    <center>
      <ion-avatar >
        <img src="/assets/avatar.png">
      </ion-avatar>
      <span class="text-control" style="font-weight: 400;margin-top: 10px">Cambiar foto de perfil</span> 
    </center>
  <ion-content class="ion-padding">
    <ion-list>
       <ion-row>
          <ion-col>
            <ion-label  style="color: #32BAB0;">Nombre</ion-label>
              <ion-item>
                <ion-input :value="'Micaela  Rodriguez'"> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p style="font-size: 14px;font-weight: 100" >
                       Mostrar
                      </p>
                    </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                  </ion-row>
              </ion-item>
          </ion-col>
        </ion-row>
         <ion-row>
          <ion-col>
            <ion-label  style="color: #32BAB0;">Pais</ion-label>
              <ion-item>
                <ion-input> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p style="font-size: 14px;font-weight: 100">
                       Mostrar
                      </p>
                    </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                  </ion-row>
              </ion-item>
          </ion-col>
        </ion-row>
         <ion-row>
          <ion-col>
            <ion-label  style="color: #32BAB0;">Cuidad</ion-label>
            <ion-item>
              <ion-input> 
              </ion-input>
               <ion-row>
                 <ion-col>
                  <p style="font-size: 14px;font-weight: 100">
                   Mostrar
                  </p>
                  </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                  </ion-row>
              </ion-item>
          </ion-col>
        </ion-row>
         <ion-row>
          <ion-col>
            <ion-label  style="color: #32BAB0;">Dirección</ion-label>
              <ion-item>
                <ion-input> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p style="font-size: 14px;font-weight: 100">
                       Mostrar
                      </p>
                    </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                </ion-row>
            </ion-item>
          </ion-col>
         </ion-row>
         <ion-row>
          <ion-col>
            <ion-label  style="color: #32BAB0;">Telefono</ion-label>
              <ion-item>
              <ion-input> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p style="font-size: 14px;font-weight: 100">
                       Mostrar
                      </p>
                    </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                  </ion-row>
              </ion-item>
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


<script lang="ts">
  
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
  methods:{
    redirect(path) {
      this.$router.push(path);
    }
  }
});


</script>


<style type="text/css">

   .item-native{
        height: 0px;
   }
</style>


