<template>
  <ion-content class="ion-padding">
    <button @click="closeModal()" style="background: #fff;margin-left: 90%;margin-top: 7px;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.02962L17.18 0.292725L10 7.26113L2.82 0.292725L0 3.02962L7.18 9.99803L0 16.9664L2.82 19.7033L10 12.7349L17.18 19.7033L20 16.9664L12.82 9.99803L20 3.02962Z" fill="#5B716F" fill-opacity="0.5"/>
              </svg>
        </button>
    <center> 
       <p   style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #000000;">
       Seleciona una foto
    </p>
      <button type="button" class="btn-primary" @click="takePhoto('camara')">Tomar una foto</button>
       <br>
       <br>
    <button type="button" class="btn-line" @click="takePhoto('photos')" >Subir una foto</button>
  </center>
 </ion-content>
</template>

<script>
import { IonContent/*, modalController*/ } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
//import axios from 'axios'

const { Camera } = Plugins;



export default defineComponent({
  name: 'ModalSearch',

  components: { IonContent },
  setup() {
    return { close }
  },
  data() {
    return {
    
    }
  },
  methods: {
  search(filter){
    alert(filter)
  },  
  async closeModal() {
      //const modal = await modalController
      //return modal.dismiss();
        this.$emit("close")
    },
    async takePhoto(source) {

      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: source == 'camara'  ? CameraSource.Camera  : CameraSource.Photos,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
      console.log(this.takenImageUrl )
      this.$emit("get",{takenImageUrl : this.takenImageUrl})
      this.closeModal()
    },
  }
});
</script>

<style scoped="">
  
  @media (max-width: 1000px){
    #img-search-home{
    position: relative;
    top: -2%;
    left: 5%;
    }
    #img-search-collection{
       position: relative;
    top: 21%;
    left: -42%;
    }
    #img-search-books{
    position: relative;
    left: 50%;
    top: -20%;
    }
  }

  @media (min-width: 1000px){
    #img-search-home{
        position: relative;
    top: -26%;
    left: 19%;
    }
    #img-search-collection{
    position: relative;
    top: 0%;
    left: -13%;
    }
    #img-search-books{
      left: -15%;
    position: relative;
    }
  }
</style>

<style scoped>



.label-input1{
  color: #32BAB0;
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 20px;
    left: 27px;
    position: absolute;
    top: 0px;
    margin: 0px;
    padding: 0px 8px;
    z-index: 1;
    background-color: aliceblue;
    transition: color 0.3s ease-in-out 0s;
    font-size: 16px;
}

.container1{

   background-color: #F3F3F3;
    padding-top: 8px;
    position: relative;
     border-radius: 8px;

}

.input-text1{
  background-color: transparent;
 
    font-family: Montserrat;
    letter-spacing: 0.4px;

    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0px;
    padding: 12px 14px;
    transition: background-color 0.3s ease-in-out 0s;
    width: 100%;
    font-weight: 300;
    font-size: 16px;

    color: #5B716F;
}

.input-container1{
      border-color: rgb(188, 202, 216);
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out 0s;
    border: 0px solid rgba(91, 113, 111, 0.8);



}


.input-container1:hover{
  border-color: rgb(1 4 8);
}


div.background {
  border: 0px solid black;

}


div.transbox p {
 

  
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.75px;

color: #EAFFFD;

}
/* Set the icon color and opacity */

.span-img{
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.75px;

color: #EAFFFD;
}

</style>