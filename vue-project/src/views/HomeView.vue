<template>
  <main>
    <div v-for="book in latestBooks">
      <h1>{{ book.title }}</h1>
      <p>{{ book.summary }}</p>
    </div>
  </main>
</template>

<script>
import { ref, onMounted, computed } from 'vue'; // Importer ref et onMounted depuis Vue

import axios from 'axios';

export default {
  setup() {
    // Utilisez ref pour créer des réactifs
    const responseData = ref([]); // Définissez un réactif pour stocker la réponse de l'API

    // Utilisez onMounted pour exécuter du code une fois que le composant est monté
    onMounted(() => {
      axios.get('http://localhost:3000/api/books')
        .then(response => {
          // Mettez à jour le réactif avec les données de la réponse
          responseData.value = response.data;
          console.log(responseData.value);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Gérer les erreurs ici
        });
    });

    // Créez une propriété calculée pour obtenir les 5 derniers livres
    const latestBooks = computed(() => {
      return responseData.value
        .sort((a, b) => new Date(b.created) - new Date(a.created)) // Triez par date de création décroissante
        .slice(0, 5); // Limitez aux 5 premiers livres
    });

    // Retournez les réactifs et les propriétés calculées que vous souhaitez exposer
    return {
      latestBooks
    };
  }
}
</script>
