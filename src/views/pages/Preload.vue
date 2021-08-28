<template>
  <ion-page>
      <ion-content class="ion-padding">
<div v-if="preload" class="preload" align="center" >
    <img src="/assets/logo-preload.svg" :style="style.img">
    <ion-grid>
      <ion-row>
        <ion-col col-6>
           <ion-spinner align="center" name="crescent" color="light"  ></ion-spinner> 
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  </ion-content>    
</ion-page>
</template>
<script>
import { IonSpinner,IonRow,IonGrid,IonCol } from '@ionic/vue';
export default {
  components: { IonSpinner,  IonGrid, IonRow,IonCol  },
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

    this.style.img['margin-top'] = (screen.height/3)+'px'

      var self = this;
        setTimeout(function() {
             self.preload = false;
        }, 2000);

    
  },
  methods: {
  
  }
};

/*<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '257722639528687',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   <fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}*/


</script>
</script>


<style type="text/css">
.preload{
  position: absolute;
width: 100%;
height: 100%;

/* Green Upgrap */

}

.preload img {
  vertical-align:middle;
}

</style>