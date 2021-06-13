<template>
  <p> 
    Selecciona al menos 3 categorias de productos
  </p>
  <br>
  <br>
  <ion-content class="ion-padding">
    <a class="text-control" style="float: right;"  @click="redirect()" > Siguiente</a>
    <br>
    <br>
    <center>
      <button type="button" class="btn-category category-large" style="line-height: 250%;">
        Belleza
      </button>
    </center>
    <ion-grid>
      <ion-row>
        <ion-col>
           <button type="button" class="btn-category-active" style="margin: 2%;width: 90%;line-height: 250%">
            Deco
          </button>
        </ion-col>
        <ion-col >
           <button type="button" class="btn-category" style="margin: 2%;width: 90%;line-height: 250%">
            Tecnologia
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <center>
      <button type="button" class="btn-category-active category-large" style="margin: 2%;width: 90%;line-height: 250%">
        Accesorios
      </button>
    </center>
     <ion-grid>
      <ion-row>
        <ion-col>
           <button type="button" class="btn-category" style="margin: 2%;width: 90%;line-height: 250%">
            Calzado
          </button>
        </ion-col>
        <ion-col >
           <button type="button" class="btn-category" style="margin: 2%;width: 90%;line-height: 250%">
            Deportes
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <center>
      <button type="button" class="btn-category-active category-large" style="margin: 2%;width: 90%;line-height: 250%">
         Videojuegos
      </button>
    </center>
    <p>
    <center>Omitir</center>
    </p>
  </ion-content>
</template>

<script>
import { loadingController,toastController,IonRow,IonGrid,IonCol  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {IonRow,IonGrid,IonCol},
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
       this.$router.push({path: 'config_chat'});
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

.alert-radio-inner.sc-ion-alert-md{
  background-color : #32BAB0;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md {
    border-color: #32BAB0;
}

.alert-radio-label.sc-ion-alert-md{
  color: #5B716F;
}

[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{
    color: #5B716F;
}

.alert-button.sc-ion-alert-md{
  color : #32BAB0;
}

.category {
  margin: 2%;
  width: 90%;
  line-height: 250%;
  background: #E9EBEB;
  border-radius: 10px;
}

.category-large {
   margin: 2% !important;
   width: 94% !important;
   margin-left:-1% !important;
}
</style>


