<template>
   <ion-page>
     <ion-row style="    margin-top: 90px;">
      <ion-col>
       
      </ion-col>
    </ion-row>
     <button @click="closeModal()" style="background: #fff;margin-left: 89%;margin-top: -88px;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.02962L17.18 0.292725L10 7.26113L2.82 0.292725L0 3.02962L7.18 9.99803L0 16.9664L2.82 19.7033L10 12.7349L17.18 19.7033L20 16.9664L12.82 9.99803L20 3.02962Z" fill="#5B716F" fill-opacity="0.5"/>
              </svg>
        </button>
          
    <p   style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: center;letter-spacing: 0.75px;color: #000000;">
      ¿Quién intercambia este <br> producto?
    </p>
 

 <ion-content>
    <ion-row>
      <ion-avatar style="margin-left: 5%">
        <img :src="BasePublic+user?.photo">
      </ion-avatar>
      <ion-col style="margin-top: 15px;">
         <span  style="font-family: Montserrat;font-style: normal;font-weight: 500;font-size: 20px;line-height: 24px;align-items: center;text-align: left;letter-spacing: 0.75px;color: #32BAB0;">{{user.name}}</span> 
      </ion-col>
    </ion-row>
    <div class="hr"> </div>
    <ion-row>
      <ion-col>
       <p class="p-no-center"  style="float: left;margin-left: 6%;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #000000;">
        Estado:
       </p> 
      </ion-col>
      <br>
      <ion-col> 

         <div style="display: flex;flex-direction: row;align-items: center;padding: 4px 4px;">
        <div style="background: #EAEAEA;border-radius: 10px;padding: 10px 22px;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;margin-left: -14px;text-align: center;color: #FFFFFF;background:#32BAB0;">
          Producto {{product.estado}} 
        </div>
    </div>
        <!--<button type="button" class="tag-primary"  style="width: 180px;padding: 1px 2px;margin-left: -20px;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;text-align: center;color: #FFFFFF;">Producto {{product.estado}}</button>-->
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <p class="p-no-center"    style="float: left;margin-left: 6%;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 20px;line-height: 24px;color: #000000;">
          Categoría:
        </p>
      </ion-col>
      <ion-col> 
        
          <div style="display: flex;flex-direction: row;align-items: center;padding: 4px 4px;">
        <div style="background: #EAEAEA;border-radius: 10px;padding: 7px  22px;font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;margin-left: 0px;text-align: center;color: #FFFFFF;background:#32BAB0;">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z" stroke="white" stroke-width="1.5"/>
          <circle cx="8.83789" cy="8.47266" r="0.625" stroke="white" stroke-width="1.5"/>
          </svg> 
        {{category.name}}
        </div>
    </div>
        <!--<button type="button" class="tag-primary" style="padding: 1px 2px;margin-left: 11px;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;text-align: center;color: #FFFFFF;">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z" stroke="white" stroke-width="1.5"/>
          <circle cx="8.83789" cy="8.47266" r="0.625" stroke="white" stroke-width="1.5"/>
          </svg> 
        {{category.name}}
      </button>-->
      </ion-col>
    </ion-row>  
 </ion-content>
 </ion-page>
</template>

<script>
import { IonContent,modalController,IonPage } from '@ionic/vue';
import { close,pricetag } from 'ionicons/icons';
import { defineComponent } from 'vue';
import BasePublic from '@/plugins/store/utils'

export default defineComponent({
  name: 'ModalDetails',
  props : ['user','category','product'],
  components: { IonContent,IonPage },
  setup() {
    return { close,pricetag }
  },
  data() {
    return {
      BasePublic
    }
  },
  methods: {
  async closeModal() {
      const modal = await modalController
      return modal.dismiss();
    },
  }
});
</script>