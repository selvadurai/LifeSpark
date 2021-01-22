<template>  
     <div class="container-fluid">
      <button type="button"  @click="$router.push('/goal')" class="btn btn-primary">View Goals</button>
       &nbsp;
      <button type="button"  @click="$router.push('/AddGoal')" class="btn btn-secondary">Add Goal</button>
       &nbsp;
      <button type="button"  @click="$router.push('/UpdateGoal')" class="btn btn-secondary">Update Goal</button>
       &nbsp;
      <button type="button"  @click="$router.push('/AddVision')" class="btn btn-secondary">Update Vision</button>
         &nbsp;
      <button type="button"  @click="$router.push('/AddStep')" class="btn btn-secondary">Add Step</button>
       
     </div>
</template>
  