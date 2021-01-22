<template>
<div class="container-fluid">
 

 <form @submit="update()">


    <div v-for="n in this.habitList" class="list-group">
        <div class="list-group-item list-group-item-action">
            <div  class="d-flex w-100 justify-content-between">
             <input type="checkbox" :value="n._id" v-model="deleteCheck">  
             </div>
              <medium>{{n.habit}}</medium>

        </div>  
    </div>
    
    
     <input type="submit" value="Submit" >

  </form>  

  


</div>

</template>

<script>
import axios from 'axios'


export default {
  name: 'DeleteList',
data(){ 
  return { 
     deleteCheck:[],
     habitList:[],
     updateStatus:''
  }
},
 async created () {
    

       axios.get('http://localhost:8888/api/habits')
          .then(res => {
             const data = res.data
             var i;

                          
             for(i=0;i<data.length;i++){
                  this.habitList.push(data[i])
             }       
             
         })
        .catch(error => console.log(error))
    
},
 methods:{

       update(){    
             var i;

             for(i=0;i<this.deleteCheck.length;i++){
               
                   axios.post('http://localhost:8888/api/habits/delete', {
                       id:this.deleteCheck[i]
                    })
                  .then(function( response ){
                    console.log("Habit Successfully Deleted ");
                 }.bind(this));
                
             
            }//end of for loop

            this.$router.push('/habit');
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
