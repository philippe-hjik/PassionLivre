<template>
    <div class="footer">
        <Menubar :model="items">
            <template #start>
                <span>Contact (Development Team)</span>
            </template>
            <template #item="{item}">
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
    #gridRow{
        display: grid;
        grid-auto-flow: row;
        justify-content: right;
        align-items: start;
    }
    #gridColumn{
        display: grid;
        grid-auto-flow:column;
    }
</style>