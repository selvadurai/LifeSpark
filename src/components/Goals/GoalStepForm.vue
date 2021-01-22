<template>
   <div class="container-fluid">

     <form @submit=submit()>
           <span>Which Goal You Want to Create a Step For?: </span> 
          <select  v-model="goalRef">
                <option value="">Goal Update</option>  
                <option v-for="n in goalList">{{n.title}}</option>  
           </select>
      <br>
      <br>
     <span>Enter Goal Step:</span>
     <br>
     <textarea v-model="task" placeholder="add multiple lines"></textarea>

     <br>
     <br>

      <br>
      <br>
     <span>Due Date:</span> 
     &nbsp;

     <br>
     <input type="date"  v-model="dueDate">
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
import Buttons from '@/components/Goals/Buttons.vue'
import axios from 'axios';

export default {
  name: 'GoalStep',
  data() {
     return{
         goalRef:'',
         goalList:[],
         task:'',
         goalID:'',
         dueDate:'',
         check:false

     }
  },
 async created () {
      //Gets Goals
       axios.get('http://localhost:8888/api/goals')
          .then(res => {

             //Get Goal Data
             const data = res.data
             var i;

             //Get data
             var dateNow = new Date()
             var year= dateNow.getFullYear()
            
             //Get goals referencing the current year              
             for(i=0;i<data.length;i++){
                  if(data[i].year===year)
                     this.goalList.push(data[i]);
             }       
             
         })
        .catch(error => console.log(error))      
 },
 methods:{
     //Add step to database
    submit(){
         var i;
            for(i=0;i<this.goalList.length;i++){
               //Find goal id
               if(this.goalList[i].title===this.goalRef){
                    this.goalID=this.goalList[i]._id;
                    i=this.goalList.length+1;
               }   
             }

                
         ///POST STEPS TO GOALS
         axios.post('http://localhost:8888/api/goals/steps', {
              task:this.task.trim(),
              goalID:this.goalID.trim(),
              dueDate:this.dueDate,
              check:false 
        })
          .then(function( response ){
              console.log("Step Added Successfully Updated ");
        }.bind(this)); 
       
        //Redirect to main goal page
        this.$router.push('/goal');
    },
  }
}
</script>