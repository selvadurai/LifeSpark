<template>

<div class="container-fluid">

  <vuetable ref="vuetable"
    api-url="http://localhost:8888/api/history"
    :fields="['eventDate', 'event','eventType' ]"
    data-path=""
    pagination-path=""
    :sort-order="sortOrder"

  ></vuetable>

</div>

</template>

<script>
//Uses Vuetable
import Vuetable from 'vuetable-2'


export default {

   data: {
    //...
    sortOrder: [
      {
        field: 'eventDate',
        direction: 'desc'
      }
    ]
  },

  components: {
    Vuetable
  }
}

</script>

<style>
.list-group{
  color:black;
}
h6{
  color:black;
}
.mb-1{
  color:black;
}
small{
  color:black;
}
.container-fluid{
    color:black;
}

.vuetable{
    color:black;
}

</style>