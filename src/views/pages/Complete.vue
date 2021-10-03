<template>

  <ion-content>
    <div  id="content" style="height:100%">
        <div style="display: flex;justify-content: center;">
        <img src="/assets/logo-white.png" style="margin-top: 106px;width: 183.2px;height: 98.24px;">
         
   </div>  
    <div style="display: flex;justify-content: center;">
      <img src="/assets/amico.png" > 
   </div>  
   <br><br><br><br> 
   <div style="display: flex;justify-content: center;">
    <p style="font-size: 72px;font-family: Montserrat;color: #fff;" class="top">
            {{count}}
          </p>
   </div>  
   
   <div style="display: flex;justify-content: center;">
     <p class="inter" style="font-size: 20px;line-height: 24px;">
         
            Intercambios <br>disponibles<br><br>
            <button type="button" class="btn-line"  @click="redirect('login')"> Iniciar Sesión</button>
          </p>  
   </div>
   </div>      

  </ion-content>

</template>
<script>

import axios from 'axios';

export default {
  name: "Preload",
  data(){
    return{
      height : screen.height,
      style : {
        img :{
          'margin-top'  : null
        }
      },
      screen_height : 0,
      count : 0 
    }
  },
  created(){
    this.getCount()
    this.style.img['margin-top'] = (screen.height/6)+'px'
    this.screen_height = screen.height
  },
  methods: {
     redirect(page){
      this.$router.push({path: page});
    },
    getCount(){
      axios
      .get("/products/count")
      .then(res => {
         this.count = res.data.count
       })
      .catch(err => {
        console.log(err)
      });
    }
  }
};
</script>


<style scoped>

#content{
  background: #32BAB0;
}
.preload img {
  vertical-align:middle;
}


    .top{
      margin-top:-116px;
    }
    .inter{
      font-family: Montserrat;color: #fff;margin-top:-35px; 
    }

</style>