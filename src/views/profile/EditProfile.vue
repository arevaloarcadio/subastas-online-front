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
      </ion-avatar><br>
      <span class="text-control" style="font-weight: 400;">Cambiar foto de perfil</span> 
    </center>
  <ion-content class="ion-padding">
    <ion-row>
      <ion-col>
       <label  class="label-edit-profile">Nombre</label>
       <ion-input class="input-text-edit-profile"  :value="'Micaela  Rodriguez'"> </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -37px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div> 
    <ion-row>
      <ion-col>
       <label  class="label-edit-profile">Pais</label>
       <ion-input class="input-text-edit-profile"  :value="'Holanda'"> </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
    <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label  class="label-edit-profile">Cuidad</label>
       <ion-input class="input-text-edit-profile"  :value="'Roterdam'"> </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label  class="label-edit-profile">Dirección</label>
       <ion-input class="input-text-edit-profile"  :value="'Calle independecia'"> </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label  class="label-edit-profile">Teléfono</label>
       <ion-input class="input-text-edit-profile"  :value="'+51 978 6787888'"> </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
       <!--<ion-row>
          <ion-col>
            <label  class="label-edit-profile">Nombre</label>
              <ion-item>
                <ion-input class="input-text-edit-profile"  :value="'Micaela  Rodriguez'"> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p class="show-input" >
                       Mostrar
                      </p>
                    </ion-col>
                    <ion-col>
                        <label class="c-switch c-switch-3d c-switch-primary">
                          <input class="c-switch-input "  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: 40%;"></span>
                        </label>
                    </ion-col>
                  </ion-row>
              </ion-item>
          </ion-col>
        </ion-row>
         <ion-row>
          <ion-col>
            <label   class="label-edit-profile">Pais</label>
              <ion-item>
                <ion-input > 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p class="show-input">
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
            <label  class="label-edit-profile">Cuidad</label>
            <ion-item>
              <ion-input> 
              </ion-input>
               <ion-row>
                 <ion-col>
                  <p  class="show-input">
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
            <label   class="label-edit-profile">Dirección</label>
              <ion-item>
                <ion-input> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p class="show-input">
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
            <label  class="label-edit-profile">Telefono</label>
              <ion-item>
              <ion-input> 
                </ion-input>
                 <ion-row>
                    <ion-col>
                      <p class="show-input">
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
        </ion-row>-->
  
    </ion-content>    
  </ion-page>  
</template>


<script >
  
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
   .label-edit-profile{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #5B716F;
    margin-left: -2%;
   }

.input-text-edit-profile{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


align-items: center;
letter-spacing: 0.75px;

color: #000000;
    margin-left: -15px;
    margin-top: -3px;
   }

   .show-input{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #5B716F;
    margin-top: 27px;

    margin-left: -88px;

   }

.hr-black {
  border-bottom: 1px solid #000;
  margin: 10px 0;
  width: 100%;
  margin-top: -37px;

}
</style>


