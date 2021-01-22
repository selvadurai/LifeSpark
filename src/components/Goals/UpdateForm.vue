<template>
 <div class="container-fluid">
 <form @submit="loadGoal()">
     <span>Which Goal You Want to Update?: </span> 
      <select  v-model="goalRef">
          <option value="">Goal Update</option>  
          <option v-for="n in goalList">{{n.title}}</option>  
      </select>
    
        <br>
         <input
          type="submit"
          value="Update Goal"
         >

  </form>  
    
    
      <br>
     <br>

   
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
  name: 'UpdateForm',
   data() {
   return{
     goalRef:'',
     goalList:[],
     id:'',
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
 async created () {
      //Gets Goals
       axios.get('http://localhost:8888/api/goals')
          .then(res => {
             const data = res.data
             var i;

             var dateNow = new Date()
             var year= dateNow.getFullYear()
             console.log(data);
                          
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

        //Updates current and modifies database
         axios.post('http://localhost:8888/api/goals/update', {
             id:this.id,
             goalType :this.data.goalType,
             title :this.data.title,
             time:this.data.time,
             description:this.data.description,
             measureable:this.data.measureable,
             curNum:this.data.curNum,
             endNum:this.data.endNum,
             tags:this.data.tags,
             dueDate:this.data.dueDate,
             diffculty:this.data.diffculty
        })
          .then(function( response ){
                    console.log("Goal Successfully Updated ");
        }.bind(this)); 
       
        //Redirect to main goal page
        this.$router.push('/goal');
    },
     //Loads this years Goals and assigns values to them
     loadGoal(){
       var i;
       for(i=0;i<this.goalList.length;i++){
                  if(this.goalList[i].title===this.goalRef){
                     this.id=this.goalList[i]._id
                     this.data.goalType=this.goalList[i].goalType
                     this.data.title=this.goalList[i].title
                     this.data.time=this.goalList[i].time
                     this.data.description=this.goalList[i].description
                     this.data.measureable=this.goalList[i].measureable
                     this.data.curNum=this.goalList[i].curNum
                     this.data.endNum=this.goalList[i].endNum
                     this.data.tags=this.goalList[i].tags
                     this.data.dueDate=this.goalList[i].dueDate
                     this.data.diffculty=this.goalList[i].diffculty
             
                  }
             
             }    
       }


} 

}
</script>