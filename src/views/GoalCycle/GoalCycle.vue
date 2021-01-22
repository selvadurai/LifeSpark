<template>
   <div class="container-fluid">
    <br>
    <GoalCycleMenu></GoalCycleMenu>
    <br>
     <GoalCheckList></GoalCheckList>
     </div>
</template>

<script>
import GoalCycleMenu    from '@/components/GoalCycle/GoalCycleMenu.vue'
import GoalCheckList    from '@/components/GoalCycle/GoalCheckList.vue'
import GoalDailyHabits  from '@/components/GoalCycle/GoalDailyHabits.vue'

export default {
  name: 'GoalCycle',
  components: {
    GoalCheckList,
    GoalCycleMenu 
  }

}
</script>
<style>
 h4{
   color:black;
 }

</style>