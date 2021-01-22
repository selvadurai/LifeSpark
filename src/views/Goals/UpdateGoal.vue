<template>
   <div class="container-fluid">
       <br>
      <Buttons></Buttons>
      <br>
      <UpdateForm></UpdateForm>
   </div>
</template>
<script>
import Buttons from '@/components/Goals/Buttons.vue'
import UpdateForm from '@/components/Goals/UpdateForm.vue'

export default {
  name:'UpdateGoal',
  components: {
    Buttons,
    UpdateForm
  }

}
</script>