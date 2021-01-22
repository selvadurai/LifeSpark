<template>
   <div class="container-fluid">
       <br>
      <Buttons></Buttons>
      <br>
      <GoalStepForm></GoalStepForm>
   </div>
</template>
<script>
import Buttons from '@/components/Goals/Buttons.vue'
import GoalStepForm from '@/components/Goals/GoalStepForm.vue'

export default {
  name: 'GoalStep',
  components: {
    Buttons,
    GoalStepForm
  }

}
</script>