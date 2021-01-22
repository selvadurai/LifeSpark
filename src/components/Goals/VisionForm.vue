<template>
 <div class="container-fluid">

 <form @submit="submit()">

     <span>Description</span>
     <p>{{vision}}</p>
     <textarea v-model="vision" placeholder="add multiple lines"></textarea>

     <br>
    <input type="submit" value="Submit">

 </form>

</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'VisionForm',
   data() {
   return{
       vision:''
   }
 },
 methods:{
    submit(){
        //Year Stamp to Verify Goal
        var dateNow = new Date();
        var year= dateNow.getFullYear();

         axios.post('http://localhost:8888/api/vision', {
             vision:this.vision,
             year:year   
        })
          .then(function( response ){
                    console.log("Data Successfully Transfered! ");
        }.bind(this)); 
       
        //Redirect to main goal page
        this.$router.push('/goal');
    }
 } 

}
</script>