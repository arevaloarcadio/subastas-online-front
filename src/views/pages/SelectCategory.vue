<template>

     <ion-content class="ion-padding"> 
  <p> 
    Selecciona al menos 3 categorias de productos
  </p>
  <br>
  <br>

    <a class="text-control" style="float: right;cursor: pointer;"  @click="redirect()"> Siguiente</a>
    <br>
    <br>
    <center>
      <button type="button" :class="{'category-large' : true,'btn-category-active':category.Belleza,'btn-category':!category.Belleza}"  @click="select_category('Belleza')" style="line-height: 250%;">
        Belleza
      </button>
    </center>
    <ion-grid>
      <ion-row>
        <ion-col>
           <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Deco,'btn-category':!category.Deco}"   @click="select_category('Deco')" >
            Deco
          </button>
        </ion-col>
        <ion-col >
           <button type="button" :class="{'category-large' : true,'btn-category-active':category.Tecnologia,'btn-category':!category.Tecnologia}"  @click="select_category('Tecnologia')" >
            Tecnologia
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <center>
      <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Accesorios,'btn-category':!category.Accesorios}"   @click="select_category('Accesorios')" >
        Accesorios
      </button>
    </center>
     <ion-grid>
      <ion-row>
        <ion-col>
           <button type="button" :class="{'category-large' : true,'btn-category-active':category.Calzado,'btn-category':!category.Calzado}"  @click="select_category('Calzado')">
            Calzado
          </button>
        </ion-col>
        <ion-col >
           <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Deportes,'btn-category':!category.Deportes}"  @click="select_category('Deportes')"  >
            Deportes
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <center>
      <button type="button" :class="{'category-large' : true,'btn-category-active':category.Videojuegos,'btn-category':!category.Videojuegos}"  @click="select_category('Videojuegos')" >
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
      category :{
        Belleza :false,
        Deco :false,
        Tecnologia :false,
        Accesorios :false,
        Calzado :false,
        Deportes :false,
        Videojuegos :false
      }
    };
  },
  mounted(){
    this.type = this.$route.query.type;
  },
  methods: {
    select_category(category){
      this.category[category] = this.category[category] ? false : true
    },
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


