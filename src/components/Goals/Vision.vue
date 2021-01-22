<template>
  <div class="card-body">
    <h4 class="card-title"><b><u>Vision</u></b></h4>
    <p class="card-text"> <b>{{vision}}</b></p>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'Vision',
 data(){ 
  return { 
    vision:''
  }
 } ,
 async created () {

       axios.get('http://localhost:8888/api/vision')
          .then(res => {
             const data = res.data
             this.vision=data[data.length-1].vision                      
         })
        .catch(error => console.log(error))
    }
      
}
</script>

<style>
 .card-title{
   color:black;
 }
 .card-text{
   color:black;
 }
 .card-body{
     border-style: solid;
     border-color: black;
 }  


</style>