<template>
<div class="container-fluid">
 <!--Load Goals To Forum-->
 <form @submit="loadGoal()">
     <span>View Goal Cyle: </span> 
      <select  v-model="goalRef">
          <option value="">Goal Update</option>  
          <option v-for="n in goalList">{{n.title}}</option>  
      </select>
         <br>
        <input type="submit" value="Load Goal" >
       
  </form>  

  <br>

 <!--Start of Updata forum -->
 <form @submit="update()">


    <div v-for="n in stepList" class="list-group">
        <div class="list-group-item list-group-item-action">
            <div  class="d-flex w-100 justify-content-between">
             <input type="checkbox"  :value="n._id" v-model="n.check"> 
              &nbsp;
              <medium>{{n.task}}</medium>

                 <small>Days:{{n.dueDate}}</small>
             </div>

        </div>  
    </div>
    <br>
    <br>
    
     <span>Add Goal Note</span>
     <p>{{ note }}</p>
     <textarea v-model="note" cols="50" rows="3" placeholder="add multiple lines"></textarea>

     <br>
     <br>


     <input type="submit" value="Submit" >

  </form>  

   <!--End of Update Forum -->


    <br>
    <br>
    {{this.updateStatus}}

</div>

</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

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
     note:'',
  }
},
 async created () {
     var dateNow = new Date();
     var year= dateNow.getFullYear();
     console.log(dateNow.getTime());

       axios.get('http://localhost:8888/api/goals')
          .then(res => {
             const data = res.data
             var i;

             //Get Date and Full Year 
             var dateNow = new Date()
             var year= dateNow.getFullYear()

             //Get Goals from the Current Year                          
             for(i=0;i<data.length;i++){
                  if(data[i].year===year)
                     this.goalList.push(data[i])
             }       
             
         })
        .catch(error => console.log(error))
    
},
 methods:{
   //This Function Asyncronsously loads the goal
   async loadGoal(){    
            var i;
             
            for(i=0;i<this.goalList.length;i++){
                  //Find Goal select ID 
                  if(this.goalList[i].title===this.goalRef)
                     this.goalId=this.goalList[i]._id
             
             }
                
         //Load the steps related to the goal and refferences goalID
         axios.get('http://localhost:8888/api/goals/steps')
          .then(res => {
             const data = res.data
             var i;
                          
             for(i=0;i<data.length;i++){
                  if(data[i].goalID===this.goalId){
                     this.stepList.push(data[i])
                  }
             }       
         })
        .catch(error => console.log(error))
    }, 
       //Updates if Goal is Checked 
       update(){    
             var i;

             var dateNow = new Date();
             //start of loop
             for(i=0;i<this.stepList.length;i++){
                  //Update Steps if their checked off or Not
                  axios.post('http://localhost:8888/api/goals/steps/update', {
                       id:this.stepList[i]._id,
                       check:this.stepList[i].check          
                    })
                  .then(function( response ){
                    console.log("Goal Successfully Updated ");
                 }.bind(this));
                //If Check add 5 points
                 if(this.stepList[i].check===true){
                      this.add5Points();
                      this.getPoints();
                 }
            }//end of for loop


            //Add A note to the Notes Database
             if(this.note.length>0){
                axios.post('http://localhost:8888/api/goals/notes', {
                       goalId:this.goalId,
                       note:this.note,
                       date:dateNow
                    })
                  .then(function( response ){
                    console.log("Note Successfully Updated ");
                 }.bind(this));
               

             }            

            //Update Status is Uploaded after execution.
            this.updateStatus="Update done";
           location.reload();

    },//end of update() function

    //Function Adds 5 points if Goals is checked
    add5Points(){
          var point= 5;
         
         axios.post('http://localhost:8888/api/points/5', {
              //Fixed Object ID
               //Change if new Object is created
              objectId:"5ffba8632ca76f73e4bd3750",
              points:point
         })
          .then(function( response ){
                    console.log("point added ");
        }.bind(this));
    },

    //Gets the Current TOTAL Points
    getPoints(){
        axios.get('http://localhost:8888/api/points')
          .then(res => {
             const data = res.data
             this.points=data[0].points
             console.log(this.points);
             Vue.$cookies.set('points',data[0].points);
         })
        .catch(error => console.log(error))
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
