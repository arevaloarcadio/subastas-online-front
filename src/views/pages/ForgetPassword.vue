<template>

     <ion-content class="ion-padding"> 

  <div align="center"> 
    <br>
    <img src="/assets/logo-green.png">
  </div>
  <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 24px;line-height: 36px;color: #001211;margin-left: 2%;">
  Recuperación de contraseña
   </p>

   <p class="p-no-center" style="margin-left: 2%;margin-top: -13px;" >Por favor, introduzca su dirección de correo electrónico. </p>
   
    <p> 
    <ion-grid>
 
        <ion-row>
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Email</label>
            <div  class="input-container">
              <input type="text" v-model="email" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
    
    <br>
    <button type="button" class="btn-primary" @click="forget_password"   style="width: 100px">
       Enviar
    </button> <br><br>
    <a   @click="() => router.push('/pre_login')" class="text-control">Atras</a>
  </p>
   </ion-content>    

</template>

<script>
import { IonRow,IonGrid,IonCol,  } from '@ionic/vue';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import toast from '@/toast'

export default defineComponent({
  components: { IonRow,IonGrid,IonCol},
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
    async forget_password() {
    var loading = await toast.showLoading()

    await loading.present();

    axios
      .post("/password",{email : this.email})
      .then(res => {
         loading.dismiss()
        console.log(res)
        this.$router.push('/forget_password/send')
      })
      .catch(err => {
        console.log(err)
          loading.dismiss()
        toast.openToast("Ha ocurrido un error","error",2000);
      });

   
    }
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


