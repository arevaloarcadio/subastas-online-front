<template>
  
  <ion-content class="ion-padding">
    <ion-row>
       <ion-col>
        <button @click="$router.push({path: '/select_type_register'})">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 1%;top: 32%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
      </ion-col>
    </ion-row>
   <br><br> 
   <span class="text-control" style="margin-left: 4%;font-style: normal;font-weight: 600;font-size: 24px;line-height: 29px;">Registro </span> 
    <br>
     <p style="margin-left: 4%;margin-top: 1.5%; float: left;font-weight: 500;"> 
    Crea tu cuenta
    </p>
    <br>
    <br>
    <br>
    <br>
   
    <ion-grid >
        <ion-row>
        <ion-col col-12>
          <div class="container">
            <label class="label-input">Nombre</label>
            <div  class="input-container">
              <input type="text" v-model="name" class="input-text">
            </div>
          </div>
        </ion-col>
      </ion-row>
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
        <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Contraseña</label>
              <div  class="input-container">
                <input :type="show_password ? 'text' : 'password'"  class="input-text" v-model="password">
                 <span  style="z-index: 500;cursor: pointer;left: 90%; position: absolute;"  @click="show_password =! show_password" v-if="show_password">
                    <img src="assets/show.svg">
                  </span>
                  <span style="z-index: 500;cursor: pointer;left: 90%; position: absolute;" @click="show_password =! show_password" v-else >
                    <img src="assets/hide.svg">
                  </span>
              </div>
            </div>
          </ion-col>
      </ion-row>
       <ion-row>
          <ion-col col-12>
            <div class="container">
              <label class="label-input">Confirmación Contraseña</label>
              <div  class="input-container">
                <input :type="show_password_confirmation ? 'text' : 'password'"  class="input-text" v-model="password_confirmacion">
                 <span  style="z-index: 500;cursor: pointer;left: 90%; position: absolute;"  @click="show_password_confirmation =! show_password_confirmation" v-if="show_password_confirmation">
                    <img src="assets/show.svg">
                  </span>
                  <span style="z-index: 500;cursor: pointer;left: 90%; position: absolute;" @click="show_password_confirmation =! show_password_confirmation" v-else >
                     <img src="assets/hide.svg">
                  </span>
              </div>
            </div>
          </ion-col>
      </ion-row>
    </ion-grid>
     <p> 
      <button type="button" class="btn-primary" @click="register()" style="width: 200px;margin-top: 1%">
      
          Registrarme
      </button>
      <br>
      <br><br>
    </p>
    <center>
      <span style="color: #000 ;font-weight: 400;line-height: 40px;" >
      ¿Tienes una cuenta?
      </span>

       <br>        
       <a  @click="() => $router.push({path : '/login'})" class="text-control" style="font-weight: 600"> Inicia sesión aquí</a>
       </center> 

    </ion-content>    
 
</template>

<script>
import { IonRow,IonGrid,IonCol  } from '@ionic/vue';
import { defineComponent } from 'vue';
//import axios from 'axios';
import { eyeOutline,eyeOffOutline } from 'ionicons/icons';
import toast from '@/toast'

export default defineComponent({
  components: { IonRow,IonGrid,IonCol },
  name: "Register",
  setup(){
    return{
      eyeOutline,eyeOffOutline
    }
  },
  data() {
    return {
      type : null,
      name : null,
      email: null,
      password: null,
      password_confirmacion: null,
      show_password : false,
      show_password_confirmation : false,
    };
  },
  mounted(){
    this.type = this.$route.query.type;
    this.name = this.$route.query.name;
    this.email = this.$route.query.email;
    this.password = this.$route.query.password;
    this.password_confirmacion = this.$route.query.password;
  },
  methods: {
    redirect(){
      this.$router.push({path: 'select_country'});
    },
    async register() {
    
    if(this.name == null || this.email  == null || this.password  == null || this.password_confirmacion == null){
      toast.openToast("Complete los campos restante","success",2000);
      return;
    }

    if( this.password  != this.password_confirmacion){
      toast.openToast("Contraseña no coincide","success",2000);
      return;
    }

    let data = {
        name : this.name,
        email: this.email,
        password: this.password,
     };

      this.$router.push({path: 'select_country' , query :{...data}});
    }
  }
});
</script>


<style type="text/css">

.item-has-focus{

  --highlight-background :#32BAB0 ;
}
</style>


