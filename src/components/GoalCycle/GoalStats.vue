<template>
<div class="container-fluid">
 

<!--Load Goal You Want To View-->
 <form @submit="loadGoal()">
     <span>View Goal Cyle: </span> 
      <select  v-model="goalRef">
          <option value="">Goal Update</option>  
          <option v-for="n in goalList">{{n.title}}</option>  
      </select>
         <br>
        <input type="submit" value="Load Goal" >
       
  </form>  
 <!--End Load Goal -->


  <br>

   <h2>{{this.goalRef}}</h2>
    <br>


<!--If the current goalCur<Goal end time then load goal progress bar -->
 <!--GOAL PROGRESS BAR -->  
<div v-if="parseInt(this.goalEnd)>parseInt(this.goalCur)" > 

<!-- Content Column -->
  <div class="col">
  <!-- Project Card Example -->
  <div class="card shadow mb-4">
      <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Progress</h6>
       </div>
                                
       <div class="card-body">
            <h4 class="small font-weight-bold">Progress {{this.goalCur}} <span class="float-right">{{this.goalEnd}}</span></h4>
                    <div class="progress mb-4">
                      <div class="progress-bar bg-danger" role="progressbar" :style="this.goalCurHtml"
                           :aria-valuenow="this.goalCur" :aria-valuemin="0" :aria-valuemax="this.goalEnd"></div>
                      </div>
     </div>     
   </div>
</div>

</div>
 <!--END GOAL PROGRESS BAR -->  


<!--STEPS BAR-->
  <!-- Content Column -->
<div class="col">

  <!-- Project Card Example -->
  <div class="card shadow mb-4">
      <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Goal Cycle</h6>
       </div>
                                
       <div class="card-body">
            <h4 class="small font-weight-bold">Steps Completed <span class="float-right">{{this.stepsPercentage}}%</span></h4>
                    <div class="progress mb-4">
                      <div class="progress-bar bg-danger" role="progressbar" :style="this.stepsBarProgress"
                           :aria-valuenow="this.stepsPercentage" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
      </div>
                      
   </div>

</div>
<!--END OF STEPS BAR-->


<!--HABITS RELATED TO GOALS-->
<h3>Habits Related to Goal</h3>
<div v-for="n in dailyHabitList" class="list-group">
          <div class="list-group-item list-group-item-action">
             <div  class="d-flex w-100 justify-content-between">
               <h6 class="mb-1"> <b>{{n.habit}}</b> </h6>
               <medium>Check Num: {{n.habitPoints}}</medium>
               <small>Days: {{dateToDays(n.HabitEndDate)}}</small>
             </div>
          </div>     
</div>
<!--HABITS RELATED TO GOALS-->



<br>
<br>

<!--Load Goal Notes-->
<h3>Goal Notes</h3>
<div v-for="n in notesList" class="list-group">
      <div class="list-group-item list-group-item-action">
            <small>{{n.date}}</small>
            <br>
             <textarea cols="50" rows="5">
                {{n.note}} 
             </textarea>
      </div>
</div>     
<!--End of Goal Notes -->

<!--End of Template-->
</div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

//Get Cookies
Vue.use(VueCookies)

export default {
 name: 'GoalCheckList',

data(){ 
  return { 
     stepList:[], 
     goalRef:null,
     goalList:[],
     goalId:'',
     updateStatus:'',
     points:null,
     stepsTotal:0,
     stepsCompleted:0,
     stepsPercentage:0,
     stepsBarProgress:'',

     dailyHabitList:[],
     daysList:[],
     habitDays:null,
     habitPoints:0,

     notesList:[],
     measureable:false,

     goalCur:'',
     goalEnd:'',
     goalCurHtml:'',
     goalPercentage:0

   }
},
 async created () {
     var dateNow = new Date();
     var year= dateNow.getFullYear();

      //Get Goals From API
      axios.get('http://localhost:8888/api/goals')
          .then(res => {
             //data reads from api 
             const data = res.data
             var i;

             //Get Date
             var dateNow = new Date()
             var year= dateNow.getFullYear()
             
             //Get Goals Referencing this Year              
             for(i=0;i<data.length;i++){
                  if(data[i].year===year)
                     this.goalList.push(data[i])
             }       
             
      })
      .catch(error => console.log(error));
    
},
 methods:{
   //This Function Loads Goal into the forum 
   async loadGoal(){    
            var i;

            //Get all Goal data and set goal progress on bar
            for(i=0;i<this.goalList.length;i++){
                  if(this.goalList[i].title===this.goalRef){
                    this.goalId=this.goalList[i]._id
                    this.measureable=this.goalList[i].measureable
                    this.goalCur=this.goalList[i].curNum
                    this.goalEnd=this.goalList[i].endNum

                    //Sets goal progress
                    this.goalPercentage=Math.round ( (this.goalCur/this.goalEnd)*100 );
                   
                   //Load to Html Progress Bar
                    this.goalCurHtml="width:"+this.goalPercentage+"%"

                    //Once found exit loop  
                    i=this.goalList.length;
                 }  

            }

         //****************GET STEPS************************************* */
         // Gets Steps Stats      
         axios.get('http://localhost:8888/api/goals/steps')
          .then(res => {
             //reads from data api
             const data = res.data
             var i;
             //Get the steps related o the goal             
             for(i=0;i<data.length;i++){
                  if(data[i].goalID===this.goalId){
                     this.stepList.push(data[i])
                     if(data[i].check==true){
                      this.stepsCompleted=+this.stepsCompleted + 1;
                     } 
                       
                  }
             }       
             
             //Convert steps to percentage
            this.stepsPercentage=Math.round ( (this.stepsCompleted/this.stepList.length)*100 );
            //Used in Progress bar
            this.stepsBarProgress="width:"+this.stepsPercentage+"%"

         })
        .catch(error => console.log(error))
      //*********************END OF STEPS******************************************************************/

       //*****************GET GOALS RELATED TO HABITS*********************************************** */

        axios.get('http://localhost:8888/api/habits')
          .then(res => {
             const data = res.data
             var i;   

            for(i=0;i<data.length;i++){
                  var taskdate = new Date(data[i].HabitEndDate); 
                  //Reference habits related to goals     
                  if(data[i].goalID===this.goalId){
                     this.dailyHabitList.push(data[i]);
                  }                  
             }    
         })
        .catch(error => console.log(error));
     //*********************END OF HABITS****************************************************************** */

    /*****************************GET GOAL NOTES****************************************************************/
         axios.get('http://localhost:8888/api/goals/notes')
          .then(res => {
             const data = res.data
             var i;   

            for(i=0;i<data.length;i++){

                  if(data[i].goalId===this.goalId){
                     this.notesList.push(data[i]);
                  }                  
             }    
         })
        .catch(error => console.log(error));
    /**************************END GOAL NOTES******************************************************************** */

    },
      
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
