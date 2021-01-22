<template>
   <div class="container-fluid">
     <br>
      <HabitMenu></HabitMenu>
       <br>
      <h3><b><u>Daily Habits</u></b></h3>
      <DailyHabits></DailyHabits>
       <br>
      <h3><b><u>Weekly Habits</u></b></h3>
      <WeeklyHabits></WeeklyHabits>
  </div>
</template>

<script>
import DailyHabits from '@/components/Habits/DailyHabits.vue'
import WeeklyHabits from '@/components/Habits/WeeklyHabits.vue'
import HabitMenu   from '@/components/Habits/HabitMenu.vue'


export default {
  name: 'Habits',
  components: {
    DailyHabits,
    HabitMenu,
    WeeklyHabits 
  }

}


</script>
<style>
 h3{
   color:black;
 }

</style>