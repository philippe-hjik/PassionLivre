<template>
  <main>
    <div v-for="book in responseData">
      <h1>{{ book.title }}</h1>
      <p>{{ book.summary }}</p>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'; // Importer ref et onMounted depuis Vue

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

    // Retournez les réactifs que vous souhaitez exposer
    return {
      responseData
    };
  }
}
</script>
