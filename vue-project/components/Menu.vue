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
            route: '/asd'
          },
          {
            label: 'Features',
            icon: 'pi pi-user'
          }]
      };
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #f8fafc;
  }
  </style>
  