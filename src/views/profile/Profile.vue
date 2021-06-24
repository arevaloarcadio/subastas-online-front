<template>
   <ion-page>
     <ion-row>
       <ion-col>
        <button @click="$router.push({path : '/principal'})" >
          <ion-icon :icon="arrowBack" style="margin-left: 5%;top: 40%;position: absolute;" ></ion-icon>
        </button>
        <p style="color: #000">
          Perfil
        </p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-avatar style="margin-left: 5%">
        <img src="/assets/avatar.png">
      </ion-avatar>
      <ion-col style="margin-top: 2%">
          <span class="text-control">Nombre del Usuario</span> 
          <p class="p-no-center" @click="redirect({name : 'edit.profile'})"  style="cursor: pointer; margin-top: 1%">
            Editar perfil
          </p>

      </ion-col>
    </ion-row>
    <div class="hr"> </div>
      <ul style="cursor: pointer;">
        <ion-row>
          <img src="/assets/package-little.png" style="height: 10%;">&nbsp;&nbsp;
          <p class="p-no-center" @click="redirect({name : 'my.products'})" style="color: #000;margin-top: 0.2%;"><b>Mis Productos</b></p>
        </ion-row>
      </ul>
       <ul  style="cursor: pointer;">
        <ion-row>
          <img src="/assets/setting.png" style="height: 10%;">&nbsp;&nbsp;
          <p class="p-no-center" @click="redirect({name : 'setting'})" style="color: #000;margin-top: 0.2%;"><b>Preferencia</b></p>
        </ion-row>
      </ul>
       <ul  style="cursor: pointer;">
        <ion-row>
          <img src="/assets/SignOut.png" style="height: 10%;">&nbsp;&nbsp;
          <p class="p-no-center" @click="redirect()" style="color: #000;margin-top: 0.2%;"><b> Salir</b></p>
        </ion-row>
      </ul>
    <ion-list>
    </ion-list>
  </ion-page>  
</template>


<script lang="ts">
  
import { arrowBack } from 'ionicons/icons';

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      arrowBack
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

   
</style>


