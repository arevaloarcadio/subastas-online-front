<template>

     <ion-content class="ion-padding">
       <br> 
  <p class="p-no-center"  style="margin-top: 8%;font-weight: 500;font-size: 20px;line-height: 24px;color: #001D1B;" > 
    Selecciona al menos 3 categorías de productos
  </p>
  <br>

    <a class="text-control" style="float: right;cursor: pointer;font-weight: 600"  @click="redirect()"> Siguiente</a>
  <div te style="left:1%;top:1%;position: absolute;">
      <button type="button" :class="{'category-large' : true,'btn-category-active':category.Belleza,'btn-category':!category.Belleza}"  @click="select_category('Belleza')" :style="styles.belleza">
        Belleza
      </button>
  
    
           <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Deco,'btn-category':!category.Deco}"   @click="select_category('Deco')" 
           :style="styles.deco" >
            Deco
          </button>
     
           <button type="button" :class="{'category-large' : true,'btn-category-active':category.Tecnologia,'btn-category':!category.Tecnologia}"  @click="select_category('Tecnologia')"  :style="styles.tecnologia">
            Tecnologia
          </button>
       
  
          <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Accesorios,'btn-category':!category.Accesorios}"   @click="select_category('Accesorios')" :style="styles.accesorios">
            Accesorios
          </button>
 
    
           <button type="button" :class="{'category-large' : true,'btn-category-active':category.Calzado,'btn-category':!category.Calzado}"  @click="select_category('Calzado')" :style="styles.calzado">
            Calzado
          </button>
        
           <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Deportes,'btn-category':!category.Deportes}"  @click="select_category('Deportes')"  :style="styles.deportes">
            Deportes
          </button>
  
   
      <button type="button" :class="{'category-large' : true,'btn-category-active':category.Videojuegos,'btn-category':!category.Videojuegos}"  @click="select_category('Videojuegos')" :style="styles.videojuegos" >
         Videojuegos
      </button>
 </div>
  <div align="center" style="margin-top:613px">
   Omitir
  </div>
  </ion-content>
   
 
</template>

<script>
import { loadingController,toastController  } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  //components: {IonRow,IonGrid,IonCol},
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
      },
      styles : {
        belleza : {
          'position': 'absolute',
          'width': '339px',
          'height': '94px',
          'left': '16px',
          'top': '193px'
        },
        deco : {
          'position': 'absolute',
          'width': '167px',
          'height': '94px',
          'left': '16px',
          'top': '298px'
        },
        tecnologia : {
          'position': 'absolute',
          'width': '167px',
          'height': '202px',
          'left': '194px',
          'top': '298px'
        },
        accesorios : {
          'position': 'absolute',
          'width': '167px',
          'height': '94px',
          'left': '16px',
          'top': '406px'
        },
        calzado : {
          'position': 'absolute',
          'width': '167px',
          'height': '94px',
          'left': '194px',
          'top': '511px'
        },
        deportes : {
          'position': 'absolute',
          'width': '167px',
          'height': '94px',
          'left': '194px',
          'top': '615px'
        },
        videojuegos : {
          'position': 'absolute',
          'width': '167px',
          'height': '198px',
          'left': '16px',
          'top': '511px'
        }
      },
    };
  },
  created(){

  },
  mounted(){
    this.type = this.$route.query.type;
    const width = window.screen.width;
    const styles = this.styles;

    styles.belleza['width'] =  width * 0.92 +'px'
    styles.deco['width'] =  width * 0.4453 +'px'
    styles.tecnologia['width'] =  width * 0.4453 +'px'
    
    styles.accesorios['width'] =   width * 0.4453 +'px'
    styles.deportes['width'] =  width * 0.4453 +'px'
    styles.calzado['width'] =  width * 0.4453 +'px'
    styles.videojuegos['width'] = width * 0.4453 +'px'

    styles.tecnologia['left'] =   width * 0.5173 +'px'
    styles.deportes['left'] =  width * 0.5173 +'px'
    styles.calzado['left'] =  width * 0.5173 +'px'

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
   margin-left:-1%;
}


</style>


