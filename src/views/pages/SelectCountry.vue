<template>

       <ion-content class="ion-padding"> 
         <br>
         <br>
         <br>
           <span class="text-control" style="margin-left: 13%"><b>Registro</b> </span> 
            <br>
             <p style="margin-left: 13%;float: left;"> 
            Ubicación
            </p>
            <br>
            <br>
            <br>
            <br>
            <p> 
            <ion-grid>
              <ion-row>
                <ion-col col-12>
                     <ion-item>
                      <ion-label style="color: #32BAB0;font-family: Montserrat; font-style: normal;"><b>Selecciona tu pais</b></ion-label>
                      <ion-select style="color: #32BAB0;font-family: Montserrat; font-style: normal;" value="Peru" ok-text="Seleccionar" cancel-text="Cerrar">
                        <ion-select-option value="Peru">Peru</ion-select-option>
                      </ion-select>
                    </ion-item>
                  </ion-col>  
              </ion-row>
               <ion-row>
                <ion-col col-12>
                     <ion-item>
                      <ion-label style="color: #32BAB0;font-family: Montserrat; font-style: normal;"><b>Selecciona tu cuidad</b></ion-label>
                      <ion-select style="color: #32BAB0;font-family: Montserrat; font-style: normal;" value="Peru" ok-text="Seleccionar" cancel-text="Cerrar">
                        <ion-select-option value="Peru">Peru</ion-select-option>
                      </ion-select>
                    </ion-item>
                  </ion-col>  
              </ion-row>
            </ion-grid>
          
            <br>
            <br>
              <button type="button" class="btn-primary" @click="redirect()" style="width: 300px">
                <ion-icon name="mail-outline"></ion-icon> 
                  <b>Continuar</b>
              </button>
         <br>
            <br>
               ¿Tiene cuenta?
               <br>
               <a href="/login" class="text-control"> Iniciar Sesión</a>
            </p>
      </ion-content>          

</template>

<script>
import { loadingController,toastController,IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonItem,IonSelect, IonSelectOption  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonIcon,IonRow,IonGrid,IonCol,IonLabel, IonItem,IonSelect, IonSelectOption},
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
       this.$router.push({path: 'success'});
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
</style>


