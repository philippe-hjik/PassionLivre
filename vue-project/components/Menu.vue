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
          items: [
            {
                label: 'Nouveau Livre',
                icon: 'pi pi-plus-circle'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            }]
        }]
    };
  }
}
</script>

<style scoped></style>