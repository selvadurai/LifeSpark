<template>
 <div class="container-fluid">

 <form @submit="submit()">
      <br>

     <span>Habit:</span> 
     &nbsp;
     <input type="text" v-model="habit">
    
      <br>
      <br>

    <span>Habit Daily or Weekly ? </span> 
     &nbsp;
     <select v-model="time">
          <option disabled value="">Please select one</option>
          <option>Daily</option>
          <option>Weekly</option>
      </select>

     <br>
     <br>
      
    <span>Does Habit Refference Goal ?: </span> 
    <select  v-model="goalRef">
          <option value="">No Goal Refference</option>  
          <option v-for="n in goalList" >{{n.title}}</option>  
    </select>

     <br>
     <br>

    <span>How Long To Track Habit Until ?:</span> 
    &nbsp;
    <input type="date"  v-model="HabitEndDate">  
    
    <br>
    <br>

    <span> Is Habit being test out as a Experiment ?</span> 
       &nbsp;
    <input type="checkbox" v-model="experiment">

     <br>
     <br>
    

      <input
      type="submit"
      value="Submit"
    >


 </form>

</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'HabitForm',
   data() {
   return{
      habit:'',
      time:'',
      HabitEndDate:null,
      experiment:'',
      goalRef:'',
      goalList:[]
   }
 },
  async created () {
      //Gets Goals
       axios.get('http://localhost:8888/api/goals')
          .then(res => {
             const data = res.data
             var i;

             var dateNow = new Date()
             var year= dateNow.getFullYear()
                          
             for(i=0;i<data.length;i++){
                  if(data[i].year===year)
                     this.goalList.push(data[i])
             }       
             
         })
        .catch(error => console.log(error))

      
},
 methods:{
    submit(){
        //Year Stamp to Verify Goal
        var dateNow = new Date();
        var year= dateNow.getFullYear();
        var goalID="";
        var i;
         
         //*************Find Goal ID**************************** */
         for(i=0;i<this.goalList.length;i++){
                  if(this.goalList[i].title===this.goalRef){
                    goalID=this.goalList[i]._id;
                    i=this.goalList.length+1;
                  }  
          }      
         //************************************************************ */
         
       //***************Post Habits******************************************* */
        axios.post('http://localhost:8888/api/habits', {
             habit:this.habit,
             time:this.time,
             HabitEndDate:this.HabitEndDate,
             experiment:this.experiment,
             goalRefName:this.goalRef,
             goalID:goalID,
             habitPoints:0
        })
          .then(function( response ){
                    console.log("Habit Successfully Transfered! ");
        }.bind(this)); 
        //******************************************************************* */ 

        //Redirect to main goal page
        this.$router.push('/habit');
    
    },
   
 }
}
</script>