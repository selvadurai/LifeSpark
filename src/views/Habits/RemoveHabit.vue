<template>
   <div class="container-fluid">
       <br>
      <HabitMenu></HabitMenu>
      <br>
      <DeleteHabit></DeleteHabit>
   </div>
</template>
<script>
import HabitMenu from '@/components/Habits/HabitMenu.vue'
import DeleteHabit from '@/components/Habits/DeleteHabit.vue'


export default {
  name: 'RemoveHabit',
  components: {
    HabitMenu,
    DeleteHabit
  }

}
</script>