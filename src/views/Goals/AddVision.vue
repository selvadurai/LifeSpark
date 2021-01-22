<template>
     <div class="container-fluid">
       <br>
      <Buttons></Buttons>
      <br>
      <VisionForm></VisionForm>
   </div>
</template>
<script>
import Buttons from '@/components/Goals/Buttons.vue'
import VisionForm from '@/components/Goals/VisionForm.vue'


export default {
  name: 'AddVision',
  components: {
    Buttons,
    VisionForm
  }

}
</script>