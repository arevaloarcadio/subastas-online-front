<template>

       <ion-content class="ion-padding"> 
         <br>
         <br>
         <br>
            <span class="text-control" style="margin-left: 5%;font-size: 24px;">Registro </span> 
            <br>
             <p class="p-no-center" style="margin-left: 5%;float: left;"> 
            Ingresa tu número de teléfono, te enviaremos un código 
            </p>
            <br>
            <br>
            <br>
            <br>
            <p> 
              <img src="/assets/phone.png">
            <ion-grid>
              <ion-row>
                <ion-col  size="4">
                     <ion-item>
                      <ion-select class="cut" style="color: #32BAB0;font-family: Montserrat; font-style: normal;" value="+31" ok-text="Seleccionar" cancel-text="Cerrar">
                        <ion-select-option value="+56">+56</ion-select-option>
                         <ion-select-option value="+31">+31</ion-select-option>
                      </ion-select>
                    </ion-item>
                  </ion-col>
                  <ion-col  size="8">
                     <ion-item>
                        <ion-input placeholder="Ingrese el número" style="margin-top: 7%;"></ion-input>
                    </ion-item>
                  </ion-col>    
              </ion-row>
            </ion-grid>
          
            <br>
            <br>
              <button type="button" class="btn-primary" @click="redirect({name : 'verify.phone'})" style="width: 150px">
                  Verificar
              </button>
            <br>
            <br>
            <a  @click="redirect({path: '/pre_login'})" class="text-control">Atras</a>
            </p>
      </ion-content>          

</template>

<script>
import { loadingController,toastController,IonRow,IonGrid,IonCol, IonItem,IonSelect, IonSelectOption  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonRow,IonGrid,IonCol, IonItem,IonSelect, IonSelectOption},
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
    redirect(poth){
      this.$router.push(poth);
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


<style scoped>

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

ion-select::part(text) {
    padding: 5px 12px;
    background: #32BAB0;
    border: 1px solid #32BAB0;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-family: Montserrat;

}
</style>


