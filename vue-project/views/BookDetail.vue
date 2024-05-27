<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <img :src="bookCover" alt="Book Cover" v-if="bookCover">
    <p><strong>Average Rating:</strong> {{ book.average }}</p>
    <p><strong>Summary:</strong> {{ book.summary }}</p>
    <p><strong>Extract:</strong> {{ book.extract }}</p>
    <p><strong>Pages:</strong> {{ book.pages }}</p>
    <p><strong>Year:</strong> {{ book.year }}</p>
    <p><strong>Category:</strong> {{ book.t_category }}</p>
    <!-- Add more details as necessary -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BookDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      book: null,
    };
  },
  computed: {
    bookCover() {
      if (this.book && this.book.cover) {
        const base64String = btoa(
          new Uint8Array(this.book.cover.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        return `data:image/png;base64,${base64String}`;
      }
      return '';
    },
  },
  methods: {
    async fetchBookDetails() {
      try {
        let token = localStorage.getItem('jwtToken');

        let config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };

        const response = await axios.get(`http://localhost:3000/api/books/${this.id}`, config);
        this.book = response.data.message;
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du livre:', error);
      }
    },
  },
  created() {
    this.fetchBookDetails();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
