<template>

      <div  class="preload" align="center" >
        <img src="/assets/logo-white.png" :style="style.img">
        <br>
        <br>
        <br>
        <img src="/assets/amico.png" >
        <p style="font-size: 72px;font-family: Montserrat;color: #fff;" class="top">
          5462
        </p>
        <p class="inter">
       
          Intercambios disponibles<br><br>
          <button type="button" class="btn-line"  @click="redirect('login')"> Iniciar Sesión</button>
        </p>
      </div> 

</template>
<script>
export default {
  name: "Preload",
  data(){
    return{
      height : screen.height,
      style : {
        img :{
          'margin-top'  : null
        }
      }
    }
  },
  created(){

    this.style.img['margin-top'] = (screen.height/6)+'px'
  },
  methods: {
     redirect(page){
      this.$router.push({path: page});
    },
  }
};
</script>


<style type="text/css">
.preload{
  position: absolute;
width: 100%;
height: 100%;

/* Green Upgrap */

background: #32BAB0;
}

.preload img {
  vertical-align:middle;
}


  @media (max-width: 1000px){
    .top{
      margin-top:-30%;
    }
    .inter{
      font-family: Montserrat;color: #fff;margin-top:-13%; 
    }
  }

  @media (min-width: 1000px){
    .top{
      margin-top:-5%; 
    }

     .inter{
      font-family: Montserrat;color: #fff;margin-top:-2%;
    }
  }
</style>