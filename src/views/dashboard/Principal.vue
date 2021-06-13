<template>
<Header/>

<ion-grid>
    <ion-row>
      <ion-col v-for="n in 6" :key="n"  size="6" size-sm >
          <ion-card>

			<ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>

			<ion-card-header>

			<ion-card-subtitle>Card Subtitle {{n}}</ion-card-subtitle>
		
			</ion-card-header>

			<ion-card-content>Dron
			</ion-card-content>
			</ion-card>
      </ion-col>
    
    </ion-row> 
 </ion-grid>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '@/components/base/Header'

export default defineComponent({
  components: { Header },
  name: "Principal",
 
  data() {
    return {
    };
  },
  mounted(){
  },
  methods: {

  }
});
</script>



