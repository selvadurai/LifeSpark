<template>
   <div class="container-fluid">
     <br>
     <br>
     <br>
    <AppMenu></AppMenu>
  </div>
</template>

<script>
// @ is an alias to /src
import AppMenu from '@/components/AppMenu/AppMenu.vue'

export default {
  name: 'Home',
  components: {
    AppMenu
  }
}
</script>
