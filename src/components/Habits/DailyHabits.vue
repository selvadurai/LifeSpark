<template>
<div class="container-fluid">
    <div v-for="n in dailyHabitList" class="list-group">
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
  name: 'DailyHabits',
data(){ 
  return { 
     dailyHabitList:[],
     daysList:[],
     habitDays:null,
     habitPoints:0
  }
},

 async created () {
     //Get Year 
     var dateNow = new Date();
     var year= dateNow.getFullYear();
     
     //Get Habits From API
     axios.get('http://localhost:8888/api/habits')
          .then(res => {
             //Read API Data
             const data = res.data
             
             var i;   
          
            //Load Daily Goals
            for(i=0;i<data.length;i++){
                  var taskdate = new Date(data[i].HabitEndDate);      
                  //if task is before enddate and it's daily load it
                  if(taskdate >= dateNow && data[i].time==="Daily"){
                     this.dailyHabitList.push(data[i]);
                  }                  
            }    
         })
     .catch(error => console.log(error))

},
 methods:{
   //Converts date to days
    dateToDays(date){
        var dateNow = new Date();
        var taskdate = new Date(date);
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return  Math.round(Math.abs((taskdate - dateNow) / oneDay));
    },
    //Adds Point to points database and add point to habit numcheck
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
      //************HabitPoints*************************************** */  

      //***********Add Points to Point database*************************************************/
       axios.post('http://localhost:8888/api/points', {
             //Fixed Object ID
             //Change if new Object is created
             objectId:"5ffba8632ca76f73e4bd3750",
             points:point
        })
          .then(function( response ){
                    console.log("Point Successfully Transfered! ");
        }.bind(this));
       //******************************************************************************************** */
     
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
