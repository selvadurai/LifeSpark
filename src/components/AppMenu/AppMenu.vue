<template>
  
 <!--<div class="row"> -->
  <div class="d-flex align-items-center justify-content-center" >

  <div class="row" >

  <div class="col-md-auto">
      <router-link
          to="/goal"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
        <img  align="middle" width="100" height="100" src="@/assets/goal.png"/>
        <p  style="text-align:center"><b>Goals</b></p>
         </router-link>    

  </div>

   <div class="col-md-auto">
        <router-link
          to="/habit"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          <img  align="middle" width="100" height="100" src="@/assets/habit.png"/> 
           <p  style="text-align:center"><b>Habit Tracker</b></p>
        </router-link>    
   </div>    
  
   <div class="col-md-auto">
        <router-link
          to="/GoalCycle"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          <img  align="middle" width="100" height="100" src="@/assets/cycle.png"/> 
           <p  style="text-align:center"><b>Goal Cycle</b></p>
        </router-link>     
  </div>  
  

  <div class="w-100"></div>

   <div class="col-md-auto">
        <router-link
          to="/VisionUpload"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          <img  align="middle" width="100" height="100" src="@/assets/vision.png"/> 
           <p  style="text-align:center"><b>Vision Board</b></p>
        </router-link>     
     </div>  
  
   

     <div class="col-md-auto">
        <router-link
          to="/History"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          <img  align="middle" width="100" height="100" src="@/assets/history.png"/> 
           <p  style="text-align:center"><b>History</b></p>
        </router-link>     
     </div>  
  
      <div class="col-md-auto">
        <router-link
          to="/Demo"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          <img  align="middle" width="100" height="100" src="@/assets/demo.png"/> 
           <p  style="text-align:center"><b>Demo</b></p>
        </router-link>     
     </div>  


    </div>

 </div>

</template>

<style >
  .col-sm-3{
      border-style: solid;
      border-color: black; 
      border-radius: 25px;
  }
</style>