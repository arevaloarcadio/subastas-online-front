<template>

       <ion-content class="ion-padding"> 
        
            <span class="text-control" style="margin-left: 5%;font-size: 24px;">Verificación </span> 
            <br>
             <p class="p-no-center" style="margin-left: 5%;float: left;"> 
           Hemos enviado un codigo a tu telefono
            </p>
            <br>
            <br>
            <p> 
              <img src="/assets/phone.png">
    

            </p>
            <div  ref="footer" class="footer" style="background:#32BAB0;height: 45%; width: 100%;border-radius: 24px 24px 0 0 ;">
              
              <input type="number" id="code-1" maxlength="1" v-on:keyup="change_input($event,1)" class="input-validate-code" style="margin-left: -2%"> 
              <input type="number" id="code-2"  maxlength="1" v-on:keyup="change_input($event,2)" class="input-validate-code">
              <input type="number" id="code-3"   maxlength="1" v-on:keyup="change_input($event,3)" class="input-validate-code">
              <input type="number" id="code-4"   maxlength="1" v-on:keyup="change_input($event,4)" class="input-validate-code" >
              
              <p class="p-no-center" style="color: #fff; position: absolute;left: 33px;width: 312px;">
                Por favor, ingresa el codigo de 4 digitos que te enviamos por SMS
              </p>
             <br>
             <br>
             <br>
          
              <center><br><br><br><br>
                <button type="button" class="btn-line"  @click="redirect({path :'/login'})" style="width: 200px;">Verificar Código</button>
              </center>
            </div>
      </ion-content>          

</template>

<script>
import { loadingController,toastController  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({

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
    footer(){

     this.$refs.footer.style.display == 'none' ? this.$refs.footer.style.display = '' : this.$refs.footer.style.display = 'none' 
    },
    change_input(event,input){
      console.log(event.target.value.length)
      if(event.target.value.length > 1){
          let val = event.target.value.toString().slice(0,-1);
          event.target.value = parseInt(val);
      }

       let next = input + 1;
      document.getElementById("code-"+next).focus();
    },
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

.input-validate-code{
font-size: 24px;text-align: center; border: 0px;background:#32BAB0; border-bottom:  2px solid #fff; height: 60px; width: 60px; margin-left:5%
}

</style>


