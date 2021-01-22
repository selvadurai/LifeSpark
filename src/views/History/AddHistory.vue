<template>
   <div class="container-fluid">
       <br>
      <Buttons></Buttons>
      <br>
      <HistoryForm></HistoryForm>
   </div>
</template>
<script>
import Buttons from '@/components/History/Buttons.vue'
import HistoryForm from '@/components/History/HistoryForm.vue'



export default {
  name: 'AddHistory',
  components: {
    Buttons,
    HistoryForm
  }

}
</script>