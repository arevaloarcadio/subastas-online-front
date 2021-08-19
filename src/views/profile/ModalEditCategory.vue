<template>

    
     <ion-content class="ion-padding">
       <br> 
  <p class="p-no-center"  style="margin-top: 35px;padding-left: 9px;font-weight: 500;font-size: 20px;line-height: 24px;color: #001D1B;" > 
    Selecciona al menos 3 categorías de productos
  </p>
  <br>

    <a class="text-control" style="float: right;cursor: pointer;font-weight: 600"  @click="updateCategories()"> Guardar</a>
  <div  style="left:1%;top:1%;position: absolute;">
      <button type="button" :class="{'category-large' : true,'btn-category-active':category.Belleza,'btn-category':!category.Belleza}"  @click="select_category('Belleza')" :style="styles.belleza">
        Belleza
      </button>
  
    
           <button type="button"  :class="{'category-large' : true,'btn-category-active':category.Deco,'btn-category':!category.Deco}"   @click="select_category('Deco')" 
           :style="styles.deco" >
            Deco
          </button>
     
           <button type="button" :class="{'category-large' : true,'btn-category-active':category.Tecnologia,'btn-category':!category.Tecnologia}"  @click="select_category('Tecnologia')"  :style="styles.tecnologia">
            Tecnología
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
  <div align="center" style="margin-top:613px" @click="$router.go(-1)">
   Atras
  </div>
  </ion-content>
   
 
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import toast from '@/toast'


export default defineComponent({
  //components: {IonRow,IonGrid,IonCol},
  name: "Register",
  data() {
    return {
      customer_id : null,
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
      categories : [],
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
    this.customer_id = this.$route.params.userId
    this.getCategories()
  },
  setup() {
    return { close }
  },
  mounted(){
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
      
      let deleted = false;
      
      for (var i = 0; i < this.categories.length; i++) {
        if(category == this.categories[i]){
           this.categories.splice(i,true)
           deleted = true
        }
      }
      if(!deleted){
        this.categories.push(category)
      }
      console.log(this.categories)
    },
    redirect(){
       this.$router.push({path: 'config_chat'});
    },
    getCategories(){
      axios
        .get("/categories/customer/"+this.customer_id)
        .then(res => {
          const categories = res.data
          categories.forEach((category) => {
            this.category[category.name] = true
            this.categories.push(category.name)
          })
        })
        .catch(err => {
          console.log(err)
        }).finally(()=> {
           
        });
    },
    async updateCategories() {

      if(this.categories.length < 3){
        toast.openToast("Selecciona al menos 3 categorías de productos","error",2000);
        return;
      }
  
      let loading = await toast.showLoading()

      await loading.present();

     axios
      .put("/categories/customer/"+this.customer_id,{
        categories_ids : this.categories,
       })
      .then(res => {
        console.log(res)
        loading.dismiss()
        toast.openToast("Modificación de categoria exitoso","success",2000);
        this.$router.go(-1);
      })
      .catch(err => {
        console.log(err)
        loading.dismiss()
      });


    }
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


