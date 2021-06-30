<template>
     <ion-content class="ion-padding"> 
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <p>
    <span class="text-control" ><b>Te has registrado exitosamente</b> </span> 
  </p>
  <div align="center"> 
    <br>
    <img src="/assets/success.png">
  </div>
  <p>  
  <button type="button" class="btn-primary" @click="redirect()" style="width: 300px">
    <ion-icon name="mail-outline"></ion-icon> 
      <b>Continuar</b>
  </button>
  </p>
 </ion-content>     

</template>

<script>
import { loadingController,toastController,IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonIcon},
  name: "Register",
  data() {
    return {
      type : null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmacion: null,
    };
  },
  mounted(){
    this.type = this.$route.query.type;
  },
  methods: {
    redirect(){
      this.$router.push({path: 'select_category'});
    },
    async register() {

       const loading = await loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por Favor Espere..',
         });

      await loading.present();

     let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmacion: this.password_confirmacion,
     };

    axios
      .post("/register",data)
      .then(res => {
        if(!res.data.error)
          this.openToast(res.data.data,'success')
        else
          this.openToast('Error Interno','warning')
      })
      .catch(err => {
        if(err.response.type == 'validation'){
          this.openToast(err.response.data.data,'warning')
        }else{
           this.openToast(err.response.data.data,'danger')
        }
      });

     await loading.dismiss()
    },
    async openToast(message,color) {
      const toast = await toastController
        .create({
          position : 'top',
          color : color,
          message: message,
          duration: 2000
        })

      return toast.present();
    },
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


