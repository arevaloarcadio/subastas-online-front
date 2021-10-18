<template>
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
    <center>
      <img :src="BasePublic+img" style="width: 350px;height: 600px">
    </center>
 </ion-content>
</template>

<script>
import { IonContent,modalController } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';
import BasePublic from '@/plugins/store/utils'

export default defineComponent({
  name: 'ModalSearch',
  props :['img'],
  components: { IonContent },
  setup() {
    return { close }
  },
  data() {
    return {
      BasePublic,
    }
  },
  mounted(){
  
  },
  methods: {
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

  .item-popover{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #32BAB0;

  }

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