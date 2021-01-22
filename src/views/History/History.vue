<template>
   <div class="container-fluid">
     <br>
       <Buttons></Buttons>
       <br>
       <HistoryTable></HistoryTable>
   
  </div>
</template>

<script>
import Buttons from '@/components/History/Buttons.vue'
import HistoryTable from '@/components/History/HistoryTable.vue'



export default {
  name: 'History',
  components: {
    Buttons,
    HistoryTable
  }

}
</script>
<style>
 h4{
   color:black;
 }

</style>