<template>  
 <div class="row">

   <div class="col">
      <button type="button"  @click="$router.push('/GoalCycle')" class="btn btn-primary">Goal Cycle</button>
      &nbsp;
      <button type="button"  @click="$router.push('/GoalProgress')" class="btn btn-secondary">Goal Progress Chart</button>
   </div>  

   <div class="col-md-auto">
      Points:{{points}}
  </div>  
  
</div>
</template>
<script>
 import VueCookies from 'vue-cookies'
 import Vue from 'vue'
 import axios from 'axios'



 Vue.use(VueCookies)

export default {
name: 'GoalCycleMenu',
  data(){ 
  return { 
     points:''
   }
} ,
 async created () {
   Vue.$cookies.set('theme',10);
      axios.get('http://localhost:8888/api/points')
          .then(res => {
             const data = res.data
             this.points=data[0].points
             Vue.$cookies.set('points',data[0].points);
         })
        .catch(error => console.log(error))
 }
  
}
</script>
  