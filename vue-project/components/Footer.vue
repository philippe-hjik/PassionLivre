<template>
  <div class="footer">
    <Menubar :model="items">
      <template #start>
        <span>Contact (Development Team)</span>
      </template>
      <template #item="{ item }">
        <a :href="'mailto:' + item.mail">{{ item.name }}</a>
      </template>
      <template #end>
        <span>All rights reserved</span>
      </template>
    </Menubar>
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
          name: 'Philippe Heijkoop',
          mail: 'philippe.heijkoop@eduvaud.ch'
        },
        {
          name: 'Aloïs Menoud',
          mail: 'alois.menoud@eduvaud.ch'
        }
      ]
    };
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  bottom: 0;
}

.footer a {
  color: #007bff;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer a:hover {
  text-decoration: underline;
}

.footer span {
  margin: 0 0.5rem;
}
</style>
