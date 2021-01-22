<template>
 <div class="container-fluid">


 <form @submit="submit()">
    <br>
    <br>

    <span>History Type</span> 
     &nbsp;
     <select v-model="eventType">
          <option disabled value="">Please select one</option>
          <option>Event</option>
          <option>Social</option>
          <option>Health</option>
          <option>Technolgy</option>
          <option>School</option>
          <option>Fishing</option>
      </select>
     
      <br>
      <br>

     <span>Enter Historical Event</span>
     <p>{{ event }}</p>
     <textarea v-model="event" cols="35" rows="3" placeholder="add multiple lines"></textarea>

     <br>
     <br>

    <span>Date of Event:</span> 
    &nbsp;
    <input type="date"  v-model="eventDate">
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
  name: 'HistoryForm',
   data() {
   return{ 
       eventType :'',
       event : '',
       eventDate:null
     
   }
 },
 methods:{
    submit(){
      
         axios.post('http://localhost:8888/api/history', {
             eventType :this.eventType.trim(),
             event :this.event.trim(),
             eventDate:this.eventDate.trim(),
        })
          .then(function( response ){
                    console.log("History Successfully Transfered! ");
        }.bind(this)); 
       
        //Redirect to main goal page
        this.$router.push('/history');
    }
 } 

}
</script>