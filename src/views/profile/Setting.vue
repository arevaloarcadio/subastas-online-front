<template>
   <ion-page>
      <ion-row>
       <ion-col>
        <button @click="$router.go(-1)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Preferencias
        </p>
      </ion-col>
    </ion-row>
    <ion-content class="ion-padding">

     
      <span style="font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #000000;"> Categorías</span>
       <p class="p-no-center" style="font-family: Montserrat;font-style: normal;font-weight: normal;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #5B716F;" >
     

         Se optimizará la plataforma para mostrarte estos productos primero
     </p>
     <template  v-for="category in categories"  :key="category" >
       <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
          <!--<svg @click="deleteCategory(category)" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"  style="float: right;margin-right: 8px; margin-top: 6px;">
            <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
          </svg>-->
           <svg @click="deleteCategory(category)" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  style="float: right;margin-right: 8px; margin-top: 6px;">
            <path d="M20 3.02962L17.18 0.292725L10 7.26113L2.82 0.292725L0 3.02962L7.18 9.99803L0 16.9664L2.82 19.7033L10 12.7349L17.18 19.7033L20 16.9664L12.82 9.99803L20 3.02962Z" fill="#000" fill-opacity="0.5"/>
            </svg>
          <br>
          <center>
            <span class="text-control button-category-edit">{{category.name}}</span> 
          </center>
        <br>
       </div>
       <br>
     </template>
    
      <!--<div style="background: #E9EBEB;border-radius: 10px; height: 55px">
         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 86%;position: absolute;margin-top: 2%;">
         <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
        </svg><br>
       <center><span class="text-control button-category-edit">Deco</span> </center>
     </div>
     <br>
     <div style="background: #E9EBEB;border-radius: 10px; height: 55px">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 86%;position: absolute;margin-top: 2%;">
         <path d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z" fill="#5B716F" fill-opacity="0.5"/>
        </svg>
        <br>
       <center><span class="text-control button-category-edit">Juguetes</span> </center>
     </div>
     <br>-->
      <div style="background: #E9EBEB;border-radius: 10px; height: 55px" @click="() => $router.push({name: 'edit.categories' ,params : { userId : getUser.id } })">
       <br>
       <center>
        <span class="text-control"  >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#32BAB0"/>
        </svg>
          </span> 
        </center>
     </div>
      <br>
       <span style="font-weight: 500;font-size: 16px;line-height: 20px;align-items: center;letter-spacing: 0.75px;color: #000000;"> Solicitudes y respuestas</span>
    
       <br>
       <br>
      <p class="p-no-center" style="margin-left: -1px;margin-top: -12px"  >
       Decide como te pueden contactar
     </p>
      <ion-row>
          <ion-col>
            <p class="p-no-center text-edit-profile"  :class="{'checked': enable_chat_all_proposal}">
              Habilitar el chat para <br>todas las propuestas
            </p>
          </ion-col>
          <ion-col size="2">
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 32%;">
                <input class="c-switch-input" id="private" type="checkbox"  @click="enable_chat_all_proposal=!enable_chat_all_proposal;updateConfigChat()" v-model="enable_chat_all_proposal"><span class="c-switch-slider"></span>
              </label>
          </ion-col>
        </ion-row><br>
        <ion-row>
          <ion-col>
            <p class="p-no-center  text-edit-profile" :class="{'checked': decide_proposal_accept}">
             Decidir que propuestas <br> acepto
            </p>
          </ion-col>
          <ion-col size="2">
              <label class="c-switch c-switch-3d c-switch-primary" style="margin-left: 32%;">
                <input class="c-switch-input"  id="private" type="checkbox" @click="decide_proposal_accept=!decide_proposal_accept;updateConfigChat()" v-model="decide_proposal_accept"><span class="c-switch-slider"></span>
              </label>
          </ion-col>
        </ion-row>
    <br>
    <br><br>
    </ion-content>
  </ion-page>  
</template>


<script>
  
import { defineComponent,ref} from 'vue';
import { IonContent, IonPage} from '@ionic/vue';
import { mapGetters } from 'vuex'
import axios from 'axios'

export default defineComponent({
  components: {
    IonContent, 
    IonPage,

  },
  data(){
    return {
      enable_chat_all_proposal : false,
      decide_proposal_accept : false,
      categories : [],
      created : true
    }
  },
  setup(){
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    
    return {
      isOpenRef,
      setOpen
    }
  },
  created(){
    this.getCategories()
    this.getConfigChat()
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    redirect(path) {
      this.$router.push(path);
    },
    getConfigChat(){
      axios
        .get("/chat/config/"+this.getUser.id)
        .then(res => {
          if (res.data === '') {
            this.created = false
            this.decide_proposal_accept = false
            this.enable_chat_all_proposal = false
          }else{
            this.decide_proposal_accept = res.data.decide_proposal_accept
            this.enable_chat_all_proposal = res.data.enable_chat_all_proposal
          }
        })
        .catch(err => {
          console.log(err)
        });
    },
    getCategory($event){
      console.log($event)
    },
    getCategories(){
      axios
        .get("/categories/customer/"+this.getUser.id)
        .then(res => {
            this.categories = res.data
         })
        .catch(err => {
          console.log(err)
        });
    },
    deleteCategory(category){
      axios
        .delete("/categories/customer/"+category.id+"/"+this.getUser.id)
        .then(res => {
            console.log(res)
            this.getCategories()
         })
        .catch(err => {
          console.log(err)
        });
    },
    updateConfigChat(){
      if(this.created){
        axios
        .put("/chat/config/"+this.getUser.id,{decide_proposal_accept : this.decide_proposal_accept,enable_chat_all_proposal : this.enable_chat_all_proposal})
        .then(res => {
            console.log(res)
            this.getConfigChat()
         })
        .catch(err => {
          console.log(err)
        });
      }else{
         axios
          .post("/chat/config",{
            decide_proposal_accept : this.decide_proposal_accept,
            enable_chat_all_proposal : this.enable_chat_all_proposal,
            customer_id : this.getUser.id
           })
          .then(res => {
            console.log(res)
            this.created = true
          })
          .catch(err => {
            console.log(err)
          });
      }
     
    },
  
  }
});
</script>
<style type="text/css">
  .checked{
    color: #32BAB0;
  }

  .button-category-edit {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    color: #32BAB0;
  }

  .text-edit-profile{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.75px; 
    margin-top: -5px;
    margin-left: -5px;
  }
</style>


