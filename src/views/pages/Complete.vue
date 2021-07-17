<template>

      <div  class="preload" align="center" >

        <img src="/assets/logo-white.png" style="margin-top: 106px;width: 183.2px;height: 98.24px;">
        <br>
        <br>
        <br>
        <br>
        <img src="/assets/amico.png" ><br><br><br><br>
        <p style="font-size: 72px;font-family: Montserrat;color: #fff;" class="top">
          5462
        </p>
        <p class="inter" style="font-size: 20px;line-height: 24px;">
       
          Intercambios <br>disponibles<br><br>
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
      margin-top:-116px;
    }
    .inter{
      font-family: Montserrat;color: #fff;margin-top:-35px; 
    }
  }

  @media (min-width: 1000px){
    .top{
      margin-top:-116px; 
    }

     .inter{
      font-family: Montserrat;color: #fff;margin-top:-35px;
    }
  }
</style>