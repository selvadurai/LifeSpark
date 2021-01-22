<template>
<div class="container-fluid">
    <div v-for="n in dailyHabitList" class="list-group">
          <div class="list-group-item list-group-item-action">
             <div  class="d-flex w-100 justify-content-between">
               <h6 class="mb-1"> <b>{{n.habit}}</b> </h6>
               <medium>Check Num: {{n.habitPoints}}</medium>
               <small>Days: {{dateToDays(n.HabitEndDate)}}</small>
             </div>
          </div>     
    </div>
</div>

</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies)

export default {
  name: 'GoalDailyHabits',
data(){ 
  return { 
     dailyHabitList:[],
     daysList:[],
     habitDays:null,
     habitPoints:0
  }
},
//Loads Daily Habits Related to Goal Selected
 async created () {
     //Get Year and Date
     var dateNow = new Date();
     var year= dateNow.getFullYear();

     //Goal Get the Habits Refrencing Goals
     axios.get('http://localhost:8888/api/habits')
          .then(res => {
             const data = res.data
             var i; 

            //Get Daily Goals  Related Goals and is date before end of task date? 
            for(i=0;i<data.length;i++){
                  var taskdate = new Date(data[i].HabitEndDate);      
                  if(taskdate >= dateNow){
                     this.dailyHabitList.push(data[i]);
                  }                  
             }    
         })
      .catch(error => console.log(error))

},
 methods:{
   // Function Converts dates to Days
    dateToDays(date){
        var dateNow = new Date();
        var taskdate = new Date(date);
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return  Math.round(Math.abs((taskdate - dateNow) / oneDay));
    }
}


}
</script>

<style>
.list-group{
  color:black;

}
h6{
  color:black;
}
.mb-1{
  color:black;
}
small{
  color:black;
}
.list-group-item{
  color:black;
  font-size: 17px;
}
</style>
