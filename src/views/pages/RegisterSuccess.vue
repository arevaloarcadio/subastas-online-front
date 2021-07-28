<template>
     <ion-content class="ion-padding"> 
      <br>
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <br><br>
  <p>
    <span class="text-control" style="font-weight: 500;font-size: 20px;line-height: 24px;">Te has registrado <br> exitosamente</span> 
  </p>
  <div align="center"> 
    <br>
    <img src="/assets/success.png">
  </div>
  <p>  
  <button type="button" class="btn-primary" @click="redirect()" style="width: 150px">

      Continuar
  </button>
  </p>
 </ion-content>     

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  name: "Register",
  data() {
    return {
      customer_id : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
    };
  },
  mounted(){
    this.customer_id = this.$route.query.customer_id;
  },
  methods: {
    redirect(){
      this.$router.push({path: 'select_category',query : {customer_id : this.customer_id}});
    },
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


