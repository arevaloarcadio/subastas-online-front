<template>

     <ion-content class="ion-padding"> 

  <div align="center" style="margin-top: 38%"> 
   

    <img src="/assets/logo-success.png">
    <br><br><br><br>
  </div>
  <p style="font-family: Montserrat;font-style: normal;font-weight: 400;font-size: 16px;line-height: 22px;text-align: center;letter-spacing: -0.01em;color: #000000;">
 Recibirá un enlace para crear una nueva contraseña por correo electrónico.
   <br>  <br>
     <br>
    <button type="button" class="btn-primary" @click="() => router.push('/login')"   style="width: 140px">
       Regresar
    </button> 
   </p>


  
   </ion-content>    

</template>

<script>
import { loadingController,toastController} from '@ionic/vue';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "Register",
  setup() {
      const router = useRouter();
    return { eyeOutline,eyeOffOutline,router }
  },
  data() {
    return {
      email: null,
      password: 'password',
      show_password : false,
    };
  },

  mounted(){
    this.type = this.$route.query.type;
  },
  methods: {
    redirect(path){
      this.$router.push(path);
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


