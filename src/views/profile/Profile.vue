<template>
   <ion-page>
     <ion-row>
       <ion-col>
        <button @click="redirect('/')" >
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
          <p class="p-no-center" style="margin-top: 1%">
            Editar perfil
          </p>

      </ion-col>
    </ion-row>
    <div class="hr"> </div>
    <ion-list>
      <ion-item  lines="none">
        <p class="p-no-center" style="color: #000"><b>Editar perfil</b></p>
      </ion-item>
      <ion-item  lines="none">
        <p class="p-no-center" style="color: #000"><b> Editar perfil</b></p>
      </ion-item>
      <ion-item  lines="none">
        <p class="p-no-center" style="color: #000"><b>Editar perfil</b></p>
      </ion-item>
    </ion-list>
  </ion-page>  
</template>


<script lang="ts">



</script>


<style type="text/css">

   
</style>


