<template>
 <div>
  <ion-page>
     <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Perfil
        </p>
      </ion-col>
    </ion-row>
    <ion-content>

        <ion-row>
          <ion-avatar style="margin-left: 5%">
            <img :src="BasePublic+user?.photo">
          </ion-avatar>
          <ion-col style="margin-left: 7px;margin-top: 3px;" >
              <span class="text-control" style="font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #32BAB0;">{{user?.name}}</span> 
              <p class="p-no-center" @click="redirect({name : 'edit.profile'})"  style="cursor: pointer;margin-top: 4px;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;letter-spacing: 0.75px;color: #5B716F;">
                Editar perfil
              </p>

          </ion-col>
        </ion-row>

      <div class="hr"> </div>
    
          <ion-row style="margin-left: 5%">
            <img src="/assets/package-little.png" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center" @click="redirect({name : 'my.products'})" style="color: #000;margin-top: 0.2%;">Mis Productos</p>
          </ion-row>
   

          <ion-row style="margin-left: 5%">
            <img src="/assets/setting.png" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center" @click="redirect({name : 'setting'})" style="color: #000;margin-top: 0.2%;">Preferencia</p>
          </ion-row>
    

          <ion-row style="margin-left: 5%">
            <img src="/assets/SignOut.png" style="height: 10%;color :#001D1B">&nbsp;&nbsp;
            <p class="p-no-center" @click="redirect({path : '/login'})" style="color: #000;margin-top: 0.2%;"> Salir</p>
          </ion-row>
  

      </ion-content>
    </ion-page>  
 </div>

</template>


<script >
  
import { arrowBack } from 'ionicons/icons';
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'
import { mapGetters } from "vuex";
import BasePublic from '@/plugins/store/utils'

export default defineComponent({
   components: {
    IonContent, 

    IonPage
  },
  setup() {
    return {
      arrowBack
    }
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  data(){
    return{
      BasePublic,
      user : this.getUser 
    }
  },
  created(){
    this.getCustomer()
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    getCustomer(){
     axios
      .get("/customers/"+this.getUser.id)
      .then(res => {
        console.log(res)
        this.user = res.data
       })
      .catch(err => {
       console.log(err)
      });
    },
  }
});


</script>


<style type="text/css">

   
</style>


