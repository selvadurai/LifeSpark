<template>
   <div class="container-fluid">
     <br>
       <Buttons></Buttons>
       <br>
     <br>
    <vision></vision>
    <br>
    <h4><b><u>Yearly Goals</u></b></h4>
    <Yearly></Yearly>
   
  </div>
</template>

<script>

import Yearly from '@/components/Goals/Yearly.vue'
import Vision from '@/components/Goals/Vision.vue'
import Buttons from '@/components/Goals/Buttons.vue'



export default {
  name: 'Goals',
  components: {
    Yearly,
    Vision,
    Buttons
  }

}
</script>
<style>
 h4{
   color:black;
 }

</style>