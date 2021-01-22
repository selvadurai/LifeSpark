<template>

<div class="container-fluid">


<h6><b><u>Health</u></b></h6>
 <ul v-for="n in healthList" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1"><b><u>{{n.title}}</u></b></h6>
      <small>Due Date:{{n.dueDate}}</small>
    </div>
    <p class="mb-1">{{n.description}}</p>
</ul>  

<h6><b><u>Financial</u></b></h6>
 <ul v-for="n in wealthList" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1"><b><u>{{n.title}}</u></b></h6>
      <small>Due Date:{{n.dueDate}}</small>
    </div>
    <p class="mb-1">{{n.description}}</p>
</ul>  


<h6><b><u>Technology/Career Goal</u></b></h6> 
 <ul v-for="n in techList" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1"><b><u>{{n.title}}</u></b></h6>
      <small>Due Date:{{n.dueDate}}</small>
    </div>
    <p class="mb-1">{{n.description}}</p>
</ul>  

<br>

<h6><b><u>Other</u></b></h6>
 <ul v-for="n in otherList" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1"><b><u>{{n.title}}</u></b></h6>
      <small>Due Date:{{n.dueDate}}</small>
    </div>
    <p class="mb-1">{{n.description}}</p>
</ul>  


</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Yearly',
data(){ 
  return { 
     wealthList:[ ],
     healthList:[],
     techList:[],
     otherList:[]
  }
},
 async created () {
       //Load yearly goals and divide them by category 
       axios.get('http://localhost:8888/api/goals')
          .then(res => {
             //reads data from api
             const data = res.data
             var i;

             //Get Year
             var dateNow = new Date()
             var year= dateNow.getFullYear()
                          
             for(i=0;i<data.length;i++){
                if(data[i].goalType==="Financial" && data[i].year===year)
                  this.wealthList.push(data[i])
                
                if(data[i].goalType==="Health" &&  data[i].year===year)
                  this.healthList.push(data[i]) 
                  
                if(data[i].goalType==="Technolgy" && data[i].year===year) 
                  this.techList.push(data[i]) 
                
                if(data[i].goalType==="Other" && data[i].year===year)  
                  this.otherList.push(data[i]) 

             }       
             
         })
        .catch(error => console.log(error))
      
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

</style>



