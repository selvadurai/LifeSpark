<template>  
 <div class="row">

   <div class="col">
      <button type="button"  @click="$router.push('/habit')" class="btn btn-primary">Habits</button>
      &nbsp;
      <button type="button"  @click="$router.push('/AddHabit')" class="btn btn-secondary">Add Habits</button>
        &nbsp;
      <button type="button"  @click="$router.push('/RemoveHabit')" class="btn btn-secondary">Delete Habit</button>
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
name: 'HabitMenu',
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
  