<template>
  <Menu></Menu>
<RouterView></RouterView>
</template>

<script>
import Menu from '../components/Menu.vue';
export default {
  components: { 
    Menu
  },
}
</script>

<style>
body {
  background-color: #f8fafc;
}
</style>
