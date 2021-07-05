<template>

     <ion-content class="ion-padding"> 
 <br>
 <br>
 <br>
  <div align="center"> 
    <br>
    <img src="/assets/logo-success.png">
  </div>
  <p>
   <span class="text-control">Estamos felices de verte otra vez </span> 
   </p>
    <br>
    <br>
    <br>
    <p> 
    <ion-grid>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Email o Teléfono</ion-label>
              <ion-input ></ion-input>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12>
            <ion-item>
              <span  style="margin-left: 90%;top: 46%; position: absolute;z-index: 500;cursor: pointer;"  @click="show_password =! show_password" v-if="show_password">
                <ion-icon :icon="eyeOutline"></ion-icon>
              </span>
              <span style="margin-left: 90%;top: 46%; position: absolute;z-index: 500; cursor: pointer;"    @click="show_password =! show_password" v-else >
                <ion-icon :icon="eyeOffOutline"></ion-icon>
              </span>
              <ion-label position="floating" style="color: #32BAB0;font-family: Montserrat; font-style: normal;">Contraseña</ion-label> 

              <ion-input :type="show_password ? 'text' : 'password'" v-model="password"></ion-input>

            </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
    <br>
      <a @click="() => router.push('/forget_password')"  class="text-control"> ¿Olvidaste tu contraseña?</a>
    <br>
    <br>
    <button type="button" class="btn-primary" @click="() => router.push('/principal')"   style="width: 300px">
        Iniciar Sesión
    </button> <br><br>
    <a   @click="() => router.push('/pre_login')" class="text-control">Atras</a>
  </p>
   </ion-content>    

</template>

<script>
import { loadingController,toastController,IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem  } from '@ionic/vue';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: { IonRow,IonGrid,IonCol,IonLabel, IonInput, IonItem},
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


