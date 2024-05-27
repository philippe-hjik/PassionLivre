<template>
  <Menu></Menu>
<RouterView></RouterView>
  <Footer></Footer>
</template>

<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { 
    Menu,
    Footer
  },
}
</script>

<style>
body {
  background-color: #f8fafc;
}
</style>
