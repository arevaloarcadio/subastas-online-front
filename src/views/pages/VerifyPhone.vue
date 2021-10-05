<template>

       <ion-content > 
                <br>
         <br>
         <br>
         <br>
               <span class="text-control" style="margin-left: 8%;font-size: 24px; font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 24px;line-height: 29px;color: #32BAB0;">Verificación </span> 
            <br>
             <p class="p-no-center" style="margin-left: 8%;float: left;font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;color: #5B716F;margin-top: 0%;"> 
            Hemos enviado un código a tu <br> telefono
            </p>

            <div style="display: flex;justify-content: center;" > 
              <Phone style="position: absolute;margin-left: -267px;margin-top: 85px;"></Phone>
            </div>
            <div  ref="footer" class="footer" style="position: inherit; background:#32BAB0;height: 290.21px; width: 100%;border-radius: 24px 24px 0 0 ;margin-top: 400px;">
              
              <input type="number" id="code-1" v-model="code_1" maxlength="1" v-on:keyup="change_input($event,1)" class="input-validate-code" style="margin-left: -2%"> 
              <input type="number" id="code-2" v-model="code_2" maxlength="1" v-on:keyup="change_input($event,2)" class="input-validate-code">
              <input type="number" id="code-3"  v-model="code_3" maxlength="1" v-on:keyup="change_input($event,3)" class="input-validate-code">
              <input type="number" id="code-4"  v-model="code_4" maxlength="1" v-on:keyup="change_input($event,4)" class="input-validate-code" >
              
              <p class="p-no-center" style="color: #fff; position: absolute;left: 33px;width: 312px;">
                Por favor, ingresa el codigo de 4 digitos que te enviamos por SMS
              </p>
             <br>
             <br>
             <br>
          
              <center><br><br><br><br>
                <button type="button" class="btn-line"  @click="verifyCode" style="width: 200px;">Verificar Código</button>
              </center>
            </div>
      </ion-content>          

</template>

<script>
import { toastController,IonContent  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import Phone from './Phone'
import toast from '@/toast'
import jwtToken from "@/plugins/jwt/jwt-token";
import {mapActions} from "vuex";
import user from "@/plugins/jwt/user";


export default defineComponent({
  components : {Phone,IonContent},
  name: "Register",
  data() {
    return {
      code_1 : null,
      code_2 : null,
      code_3 : null,
      code_4 : null,
      id_user : null
    };
  },
  mounted(){
    this.id_user = this.$route.query.id_user;
  },
  methods: {
    ...mapActions([
          'setAuthUser',
      ]),
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
    async verifyCode() {

      let loading = await toast.showLoading()

      await loading.present();
      
      axios
      .post("/signup/verify", {
        code : this.code_1+this.code_2+this.code_3+this.code_4,
        id_user : this.id_user
      })
      .then(res => {
        loading.dismiss()
        user.setUser(res.data.user)
        jwtToken.setToken(res.data.token);
        this.setAuthUser(res.data.user)
        toast.openToast("Por favor complete su perfil","success",10000);
        this.$router.push({path :'/edit/profile' , query : {complete_profile : true}})
      })
      .catch(err => {
        loading.dismiss()
        console.log(err)
      });
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


