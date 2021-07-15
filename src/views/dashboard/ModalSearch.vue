<template>
  <ion-header>
 
    

  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col col-2>
        </ion-col>
        <ion-col col-2>
        </ion-col>
        <ion-col col-2>
           <button type="button" @click="closeModal()" style="margin-left:75%;background-color: #fff;">
            <ion-icon :icon="close"></ion-icon> 
          </button>
        </ion-col>
      </ion-row>
    </ion-grid>
       <div class="container1" style="width: 100%;">
              <div  class="input-container1">
                <input type="text"  placeholder="Buscar"  class="input-text1" style="margin-top: -2%;margin-top: -3%;height: 65.1px;">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8%" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.1837C9.13616 10.1837 7.57006 8.67483 7.12602 6.63272H0V4.26538H7.12602C7.57006 2.22327 9.13616 0.714355 11 0.714355C13.2091 0.714355 15 2.83415 15 5.44905C15 8.06395 13.2091 10.1837 11 10.1837ZM13 5.44905C13 6.7565 12.1046 7.8164 11 7.8164C9.89543 7.8164 9 6.7565 9 5.44905C9 4.1416 9.89543 3.0817 11 3.0817C12.1046 3.0817 13 4.1416 13 5.44905Z" fill="#5B716F"/>
                  <path d="M16 4.26538H20V6.63272H16V4.26538Z" fill="#5B716F"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 19.6531C4.13616 19.6531 2.57006 18.1442 2.12602 16.1021H0V13.7348H2.12602C2.57006 11.6927 4.13616 10.1837 6 10.1837C8.20914 10.1837 10 12.3035 10 14.9184C10 17.5333 8.20914 19.6531 6 19.6531ZM8 14.9184C8 16.2259 7.10457 17.2858 6 17.2858C4.89543 17.2858 4 16.2259 4 14.9184C4 13.611 4.89543 12.5511 6 12.5511C7.10457 12.5511 8 13.611 8 14.9184Z" fill="#5B716F"/>
                  <path d="M11 16.1021H20V13.7348H11V16.1021Z" fill="#5B716F"/>
                  </svg>

            </div>
          </div>

          <div class="row">
            <div class="col"  style="width:50%;">
               <img src="/assets/tecnology.svg" style="width:100%;" @click="search('tecnologia')">
            </div>
              <div class="col" style="width:50%;">
               <img src="/assets/beatiful.svg"   style="width:100%;" @click="search('tecnologia')">
            </div>
              
          </div>
        <div class="row">
          
          <img src="/assets/tools.svg" style="width:100%;margin-top: -5%;" @click="search('herramientas')">
        </div>
        <div class="row top-xs">
          <div class="col-xs-6"  style="width:50%;margin-top: -1%;">
              <div class="box">
                     <img  src="/assets/home.svg" style="width: 115%;max-width: 115%;margin-left: -5%;" @click="search('hogar')">
              </div>
               <div class="box" >
                 <img  src="/assets/collection.svg"  style="width: 129%;max-width: 129%;margin-left: -11%;" @click="search('collecion')">
                    
              </div>
          </div>
          <img src="/assets/books.svg" style="width:50%;margin-top: -2%;" @click="search('libros')">
      </div>
   
 </ion-content>
</template>

<script>
import { IonContent, IonHeader,modalController } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalSearch',

  components: { IonContent, IonHeader },
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
      const modal = await modalController
      return modal.dismiss();
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