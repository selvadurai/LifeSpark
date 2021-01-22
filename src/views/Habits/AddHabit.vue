<template>
   <div class="container-fluid">
       <br>
      <HabitMenu></HabitMenu>
      <br>
      <HabitForm></HabitForm>
   </div>
</template>
<script>
import HabitMenu from '@/components/Habits/HabitMenu.vue'
import HabitForm from '@/components/Habits/HabitForm.vue'


export default {
  name: 'AddHabit',
  components: {
    HabitMenu,
    HabitForm
  }

}
</script>