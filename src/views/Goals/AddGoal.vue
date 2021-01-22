<template>
   <div class="container-fluid">
       <br>
      <Buttons></Buttons>
      <br>
      <GoalForm></GoalForm>
   </div>
</template>
<script>
import Buttons from '@/components/Goals/Buttons.vue'
import GoalForm from '@/components/Goals/GoalForm.vue'


export default {
  name: 'AddGoal',
  components: {
    Buttons,
    GoalForm
  }

}
</script>