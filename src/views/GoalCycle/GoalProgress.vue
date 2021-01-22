<template>
   <div class="container-fluid">
    <br>
    <GoalCycleMenu></GoalCycleMenu>
    <br>
     <GoalStats></GoalStats>
  </div>
</template>

<script>
import GoalCycleMenu  from '@/components/GoalCycle/GoalCycleMenu.vue'
import GoalStats  from '@/components/GoalCycle/GoalStats.vue'


export default {
  name: 'GoalCycle',
  components: {
    GoalStats,
    GoalCycleMenu
  }

}
</script>
<style>
 h4{
   color:black;
 }

</style>