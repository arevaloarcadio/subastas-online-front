<template>

    <br>
    <br>
    <br>
    <br>
    <br>
     <ion-content class="ion-padding"> 
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <p>
    <ion-checkbox color="primary"></ion-checkbox>
    Acepto las <a href="/">Políticas y Términos</a> <br>de uso de la aplicación
  </p>
  <div align="center"> 

  </div>
  <p>  
  <button type="button" class="btn-primary" @click="redirect({path : '/chat'})" style="width: 300px">

      Continuar
  </button>
  </p>
 </ion-content>     

</template>


<script >






import { defineComponent } from 'vue';

export default defineComponent({

  data(){
    return {
    }
  },
  mounted(){

  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
  }
});


</script>


<style type="text/css">

   
</style>


