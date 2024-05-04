<template>
  <div class="menu">
    <Menubar :model="items" />
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';
export default {
  components: {
    Menubar
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          url: '/'
        },
        {
          label: 'Login',
          icon: 'pi pi-user',
          url: '/login'
        },
        {
          label: 'Book',
          icon: 'pi pi-book',
          url: '/'
        }]
    };
  }
}
</script>

<style scoped></style>