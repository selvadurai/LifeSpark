<template>
<div class="container-fluid">
    <div v-for="n in weeklyHabitList" class="list-group">
          <button :name="n._id"  @click="addPoint(n._id,n.habitPoints)"  type="button" class="list-group-item list-group-item-action">
             <div  class="d-flex w-100 justify-content-between">
               <h6 class="mb-1"><img  width="25" height="25" src="@/assets/checkMark.png"/> <b>{{n.habit}}</b> </h6>
               <medium>Check Num: {{n.habitPoints}}</medium>
               <small>Days: {{dateToDays(n.HabitEndDate)}}</small>
             </div>
          </button>     
    </div>
</div>

</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies)

export default {
  name: 'WeeklyHabits',
data(){ 
  return { 
     weeklyHabitList:[],
     daysList:[],
     habitDays:null,
     habitPoints:0
  }
},
 async created () {
     //Get Date
     var dateNow = new Date();
     var year= dateNow.getFullYear();
      
     //Load Weekly habits from Database 
     axios.get('http://localhost:8888/api/habits')
          .then(res => {
             const data = res.data
             var i;   

            for(i=0;i<data.length;i++){
                  var taskdate = new Date(data[i].HabitEndDate);      
                  if(taskdate >= dateNow && data[i].time==="Weekly"){
                     this.weeklyHabitList.push(data[i]);
                  }                  
            }    
         })
        .catch(error => console.log(error))
     //end Weekly
},
 methods:{
   //Convert Dates to days
    dateToDays(date){
        var dateNow = new Date();
        var taskdate = new Date(date);
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return  Math.round(Math.abs((taskdate - dateNow) / oneDay));
    },
    //Add Points 
     addPoint(id,point){
      this.habitPoints=point + 1;   
      var point=parseInt(Vue.$cookies.get('points')) + 1;

      //*********Add Point***************************** */
      axios.post('http://localhost:8888/api/habits/addPoint', {
             
             objectId:id,
             habitPoints:this.habitPoints
        })
          .then(function( response ){
                    console.log("Habit Successfully Transfered! ");
        }.bind(this));

      //*********End Add Point***************************** */


       //***********Add Points to Point database*************************************************/
       axios.post('http://localhost:8888/api/points', {
             //Fixed
             objectId:"5ffba8632ca76f73e4bd3750",
             points:point
        })
          .then(function( response ){
                    console.log("Habit Successfully Transfered! ");
        }.bind(this));
     //***********End Add Points to Point database*************************************************/

      //Refresh page
      location.reload();
     
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
