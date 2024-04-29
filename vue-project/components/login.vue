<template>
 <h1>Login</h1>
  
  </template>
  
  <script>
  import axios from 'axios';
  import bookCard from '../components/bookCard.vue';
  import Button from 'primevue/button';
  import Menubar from 'primevue/menubar';
  
  export default {
    components: {
      bookCard,
      Button,
      Menubar
    },
    data() {
      return {
        // Initialiser bookData à null ou à un objet vide
        bookData: null,
        dataTrue: 0,
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
  
  <style>
  body {
    background-color: #f8fafc;
  }
  </style>
  