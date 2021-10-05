<template>
   <ion-page>
     <ion-row>
       <ion-col>
        <button @click="$router.go(-1)" v-show="!complete">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3%;top: 43%;position: absolute;">
              <path d="M27 16H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7L5 16L14 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        <p style="color: #000" class="title">
          Editar Perfil
        </p>
        <button style="background: #fff; margin-left: 80%;top: 52%;position: absolute;" @click="updateProfile" >
          <img src="/assets/check.png">
        </button>
      </ion-col>

    </ion-row>
    <center>
      <ion-avatar>
        <img :src="user?.photo">
      </ion-avatar><br>
      <span class="text-control" style="font-weight: 400;" @click="setOpen(true)">Cambiar foto de perfil</span> 
    </center>
  <br>
  <ion-content class="ion-padding">
    <ion-row>
      <ion-col>
       <label  style="margin-left: -5px" class="label-edit-profile">Nombre</label>
       <ion-input class="input-text-edit-profile" style="width: 68%;"  @ionBlur="event($event)" id="name" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -37px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div> 
   <ion-row>
      <ion-col>
       <label  style="margin-left: -5px" class="label-edit-profile">Correo Electrónico</label>
       <ion-input class="input-text-edit-profile" style="width: 68%;"  @ionBlur="event($event)" id="email" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -37px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div> 
    <ion-row>
      <ion-col>
       <label   style="margin-left: -5px" class="label-edit-profile">Pais</label>
       <ion-input class="input-text-edit-profile" id="pais" style="width: 68%;" inputmode="text" @ionBlur="event($event)" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
    <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label   style="margin-left: -5px" class="label-edit-profile">Cuidad</label>
       <ion-input class="input-text-edit-profile"  id="city" style="width: 68%;" inputmode="text" @ionBlur="event($event)" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label   style="margin-left: -5px"  class="label-edit-profile">Dirección</label>
       <ion-input class="input-text-edit-profile" style="width: 68%;" id="dir" inputmode="text"  @ionBlur="event($event)" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label  style="margin-left: -5px"  class="label-edit-profile">Teléfono</label>
       <ion-input class="input-text-edit-profile" id="phone" style="width: 68%;" inputmode="text" @ionBlur="event($event)" > </ion-input>

      </ion-col>
      <ion-col size="2">
        <p class="show-input" >
          Mostrar
        </p>
          <label class="c-switch c-switch-3d c-switch-primary">
            <input  class="c-switch-input"  id="private" type="checkbox" @click="checked('proposal')" v-model="proposal"><span class="c-switch-slider" style="margin-top: -34px;margin-left: -2px;"></span>
          </label>
      </ion-col>

    </ion-row>
   <div class="hr-black"> </div>
    <ion-row>
      <ion-col>
       <label  style="margin-left: -5px"  class="label-edit-profile">Contraseña</label>
       <ion-input class="input-text-edit-profile" id="password" style="width: 100%;" type="password" @ionBlur="event($event)" > </ion-input>
      <br>
      <br>
      </ion-col>
  

    </ion-row>
   <div class="hr-black"> </div>
     <ion-row>
      <ion-col>
       <label  style="margin-left: -5px"  class="label-edit-profile">Confirmar Contraseña</label>

       <ion-input class="input-text-edit-profile" id="password_confirmed" style="width: 100%;padding-left: 9px;" type="password" @ionBlur="event($event)" > </ion-input>
    <br>
    <br>
        
      </ion-col>
   

    </ion-row>
   <div class="hr-black"> </div>
   <br><br><br><br>
    </ion-content>
        <ion-modal
        :is-open="isOpenRef"
        :enterAnimation="enterAnimation"
        :leaveAnimation="leaveAnimation"  
        css-class="my-custom-class"
        @didDismiss="setOpen(false)"
        @ionModalWillDismiss="setOpen(false)"
      >
    <ModalUpload @get="getPhoto($event)" @close="setOpen(false)" ></ModalUpload>
  </ion-modal>    
  </ion-page>  
</template>


<script >
  
import { defineComponent,ref } from 'vue';
import { 
  IonContent, 
  IonPage,
  createAnimation,
  IonModal
 } from '@ionic/vue';
import axios from 'axios'
import toast from '@/toast'
import {mapActions,mapGetters} from "vuex";
import ModalUpload from '../products/ModalUpload'
import BasePublic from '@/plugins/store/utils'


export default defineComponent({
   components: {
    IonContent, 
    IonPage,
    ModalUpload,
    IonModal
  },
  data(){
    return {
      BasePublic,
      user :{
        name : '',
        city : '',
        dir : '',
        pais : '',
        phone : '',
        photo : '',
        email : '',
        password : '',
        password_confirmed : ''
      },
      photo : '',
      complete : false
    }
  },
  setup(){
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    return{
      isOpenRef,
      setOpen
    }
  },
  created(){
    /*this.user.name = this.getUser.name
    this.user.city = this.getUser.city
    this.user.dir = this.getUser.dir
    this.user.pais = this.getUser.pais
    this.user.phone = this.getUser.phone
    this.user.photo = this.BasePublic+this.getUser.photo*/
  
  },
  mounted(){
    this.$route.query.complete_profile ? this.complete = true :  this.complete = false
     console.log(this.complete)
    /*document.getElementById('name').value = this.user.name
    document.getElementById('city').value = this.user.city
    document.getElementById('dir').value = this.user.dir
    document.getElementById('pais').value = this.user.pais
    document.getElementById('phone').value = this.user.phone*/
     this.getCustomer()
  },
  computed : {
    ...mapGetters([
        'getUser'
    ]),
  },
  methods:{
    ...mapActions([
          'setAuthUser',
      ]),
    redirect(path) {
      this.$router.push(path);
    },
    async updateProfile(){

    let loading = await toast.showLoading()
      if(this.photo == null){
       
        if (this.complete) {
       
          if (this.user.name == null || this.user.city == null || this.user.dir == null || this.user.pais == null || this.user.phone == null || this.user.password == null || this.user.password_confirmed == null) {
              loading.dismiss()
              toast.openToast("Complete los campos","error",2000);
              return
          }
        }
      
        if (this.user.password != this.user.password_confirmed) {
            loading.dismiss()
            toast.openToast("La contraseña no coinciden","error",2000);
            return
        }

        axios
        .put("/customers/"+this.getUser.id+"/mobile" , {...this.user,complete : this.complete} )
        .then(res => {
          console.log(res)
            loading.dismiss()
            toast.openToast("Modificación exitosa","success",2000);
         })
        .catch(err => {
          loading.dismiss()
          console.log(err)
        });
      }else{

        if (this.complete) {

          console.log("aqui con foto")
          if (this.user.name == null || this.user.city == null || this.user.dir == null || this.user.pais == null || this.user.phone == null || this.user.password == null || this.user.password_confirmed == null) {
              loading.dismiss()
              toast.openToast("Complete los campos","error",2000);
              return
          }
        }
          console.log(this.user.password+' !='+ this.user.password_confirmed)
        if (this.user.password != this.user.password_confirmed) {
            loading.dismiss()
            toast.openToast("La contraseña no coinciden","error",2000);
            return
        }
         
        
        let formData = new FormData();
       
        formData.append('name', this.user.name);
        formData.append('email', this.user.email);
        formData.append('city',this.user.city);
        formData.append('dir',this.user.dir);
        formData.append('pais',this.user.pais);
        formData.append('phone',this.user.phone);
        formData.append('password',this.user.password);
        formData.append('photo',this.photo);
        formData.append('complete',this.complete);

        axios
          .put("/customers/"+this.getUser.id+"/mobile" ,formData,{'Content-Type': 'multipart/form-data'})
          .then(res => {
            console.log(res)
              loading.dismiss()
              toast.openToast("Modificación exitosa","success",2000);
              if(this.complete){
                this.$router.push({path: '/principal' , query : {set_fcm : true }});
              }
           })
          .catch(err => {
            loading.dismiss()
            console.log(err)
          });
      }
    },
    event($event){
      this.user[$event.target.id] = $event.target.value
    },
    getPhoto($event){
      this.photo = this.dataURLtoFile($event.dataUrl,'image/png')
      this.user.photo = URL.createObjectURL(this.dataURLtoFile($event.dataUrl,'image/png'));
      this.setOpen(false)
    },
    getCustomer(){
     axios
      .get("/customers/"+this.getUser.id)
      .then(res => {
        console.log(res)

        this.user = res.data
        this.user.password = ''
        this.user.password_confirmed = ''
        this.user.photo = this.BasePublic+res.data.photo   
        document.getElementById('name').value = this.user.name
        document.getElementById('email').value = this.user.email
        document.getElementById('city').value = this.user.city
        document.getElementById('dir').value = this.user.dir
        document.getElementById('pais').value = this.user.pais
        document.getElementById('phone').value = this.user.phone
       })
      .catch(err => {
       console.log(err)
      });
    },
     enterAnimation : function () {
      let baseEl = document
        const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return createAnimation()
            .addElement(baseEl)
            .easing('ease-out')
            .duration(500)
            .addAnimation([backdropAnimation, wrapperAnimation]);
    },
    leaveAnimation  : function () {
       return this.enterAnimation(document).direction('reverse');
    },
    dataURLtoFile : function(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }, 
  }
});


</script>


<style type="text/css">

   .item-native{
        height: 0px;
   }
   .label-edit-profile{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #5B716F;
    margin-left: -2%;
   }

.input-text-edit-profile{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


align-items: center;
letter-spacing: 0.75px;

color: #000000;
    margin-left: -15px;
    margin-top: -3px;
   }

   .show-input{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.75px;

color: #5B716F;
    margin-top: 27px;

    margin-left: -88px;

   }

.hr-black {
  border-bottom: 1px solid #000;
  margin: 10px 0;
  width: 100%;
  margin-top: -37px;

}
</style>


