<template>

<div  class="preload" align="center" >
  <img src="/assets/logo-white.png" :style="style.img">
  <br>
  <br>
  <br>
  <img src="/assets/amico.png" >
  <p style="font-size: 72px;font-family: Montserrat;color: #fff;margin-top:-3% ">
    5462
  </p>
  <p style="font-family: Montserrat;color: #fff;margin-top:-3%;font-weight: 600 ">
 
    Intercambios disponibles
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

</style>