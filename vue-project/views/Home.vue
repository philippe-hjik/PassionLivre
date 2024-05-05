<template>
    <body>
      <div style="display: flex; flex-wrap: wrap;">
        <bookCard v-if="bookData" v-for="book in bookData" :dataTrue="1" :book="book"></bookCard>
        <div v-else style="display: flex; flex-wrap: wrap;">
          <bookCard v-for="n in 5" :dataTrue="dataTrue"></bookCard>
          <!-- Ajoutez autant de bookCard avec dataTrue que nécessaire pour afficher les skeletons -->
        </div>
      </div>
    </body>
  
  </template>
  
  <script>
  import axios from 'axios';
  import bookCard from '../components/bookCard.vue';  
  export default {
    components: {
      bookCard,
    },
    data() {
      return {
        // Initialiser bookData à null ou à un objet vide
        bookData: null,
        dataTrue: 0,
      };
    },
    mounted() {
      // Effectuer la requête Axios pour récupérer les données du livre
      axios.get('http://localhost:3000/api/books')
        .then(response => {
          // Trier les livres par ordre décroissant de leur date de création
          const sortedBooks = response.data.sort((a, b) => new Date(b.created) - new Date(a.created));
  
          // Prendre les 5 premiers livres du tableau trié
          const lastFiveBooks = sortedBooks.slice(0, 5);
  
          // Mettre à jour bookData avec les données des 5 derniers livres
          this.bookData = lastFiveBooks;
          this.dataTrue = 1;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données du livre:', error);
          this.dataTrue = 0;
        });
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #f8fafc;
  }
  </style>
  