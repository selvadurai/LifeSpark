<template>
 <div class="container-fluid">


 <form @submit="submit()">

    <span>Goal Type</span> 
     &nbsp;
     <select v-model="data.goalType">
          <option disabled value="">Please select one</option>
          <option>Financial</option>
          <option>Health</option>
          <option>Technolgy</option>
          <option>Other</option>
      </select>
     
      <br>
      <br>

    <span>Time Frame</span> 
     &nbsp;
     <select v-model="data.time">
          <option disabled value="">Please select one</option>
          <option>Yearly</option>
          <option>Monthly</option>
      </select>
     
      <br>
      <br>

     <span>Title</span> 
     &nbsp;
     <input type="text" v-model="data.title">
    
      <br>
      <br>


    <span>Level Of Diffculty</span> 
     &nbsp;
     <select v-model="data.diffculty">
          <option disabled value="">Please select one</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
      </select>
     
      <br>
      <br>

     <span>Description</span>
     <p>{{ data.description }}</p>
     <textarea v-model="data.description" placeholder="add multiple lines"></textarea>

      <br>
      <span>Measureable Goal ?</span> 
       &nbsp;
      <input type="checkbox" v-model="data.measureable">

       <br>  
       <br> 
 
      <div v-if="data.measureable==true">
              <span>Current Number:</span> 
              &nbsp;
             <input type="number" v-model="data.curNum">
             <br>
             <br>
              <span>End Number:</span> 
              &nbsp;
             <input type="number" v-model="data.endNum">
      <br>
      </div>

      
     <span>Tags</span> 
     &nbsp;
     <input type="text" v-model="data.tags">
   
     <br>
     <br>

    <span>Due Date:</span> 
    &nbsp;
    <input type="date"  v-model="data.dueDate">
   
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
  name: 'GoalForm',
   data() {
   return{
     data:{  
       goalType :'',
       title : '',
       time:'',
       description:'',
       diffculty:'',
       measureable:false,
       curNum:0,
       endNum:0,
       tags:'',
       dueDate:null
     }
   }
 },
 methods:{
    submit(){
        //Year Stamp to Verify Goal
        var dateNow = new Date();
        var year= dateNow.getFullYear();

         axios.post('http://localhost:8888/api/goals', {
             goalType :this.data.goalType.trim(),
             title :this.data.title.trim(),
             time:this.data.time.trim(),
             description:this.data.description.trim,
             measureable:this.data.measureable,
             curNum:this.data.curNum,
             endNum:this.data.endNum,
             tags:this.data.tags,
             dueDate:this.data.dueDate,
             diffculty:this.data.diffculty.trim(),
             year:year
        })
          .then(function( response ){
                    console.log("Goal Successfully Transfered! ");
        }.bind(this)); 
       
        //Redirect to main goal page
        this.$router.push('/goal');
    }
 } 

}
</script>