<template>
     <div class="container-fluid">
       <br>
       <br>
      <VisionUpload></VisionUpload>
   </div>
</template>
<script>
import Buttons from '@/components/Goals/Buttons.vue'
import VisionUpload from '@/components/VisionBoard/VisionUpload.vue'


export default {
  name: 'AddVisionBoard',
  components: {
    Buttons,
    VisionUpload
  }

}
</script>