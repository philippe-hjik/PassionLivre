<template>
  <Button label="Back" severity="secondary" text raised icon="pi pi-arrow-left" style="margin-top: 25px;"
    @click="this.$router.push('/book/');" />
  <Button label="Ajouter un commentaire" severity="info" text raised icon="pi pi-arrow-right" iconPos="right"
    style="margin-top: 25px; margin-left: 25px;" @click="visible = true" />
  <Toast />
  <div v-if="book" class="book-detail">
    <h1>{{ book.title }}</h1>
    <img :src="bookCover" alt="Book Cover" v-if="bookCover">
    <p><strong>Author:</strong> {{ book.t_author.firstName }} {{ book.t_author.lastName }}</p>
    <p><strong>Average Rating:</strong> {{ book.average }}</p>
    <ProgressBar :value="book.average * 20">{{ book.average }}/5</ProgressBar>
    <p><strong>Summary:</strong> {{ book.summary }}</p>
    <p><strong>Extract:</strong> {{ book.extract }}</p>
    <p><strong>Pages:</strong> {{ book.pages }}</p>
    <p><strong>Year:</strong> {{ book.year }}</p>
    <p><strong>Category:</strong> {{ book.t_category.name }}</p>
    <p><strong>Publisher:</strong> {{ book.t_publisher.name }}</p>
    <p><strong>Uploaded By:</strong> {{ book.t_user.username }}</p>
  </div>
  <div v-else>
    <ProgressSpinner style="display: flex; justify-content: center; align-items: center;" />
  </div>

  <Dialog v-model:visible="visible" modal header="Commentaire" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Ajouter une appréciation</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="note" class="font-semibold w-6rem">Note</label>
      <Rating v-model="rating" :cancel="false" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="comment" class="font-semibold w-6rem">Commentaire</label>
      <Textarea v-model="comment" rows="2" cols="30" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" @click="addComment"></Button>
    </div>
  </Dialog>
</template>

<script>
import axios from 'axios';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';


export default {
  name: "BookDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    ProgressBar,
    ProgressSpinner,
    Button,
    Dialog,
    Rating,
    Textarea,
    Toast,
  },
  data() {
    return {
      book: null,
      visible: null,
      rating: null,
      comment: null,
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
    bookFile() {
      return `http://localhost:3000/${this.book.upload}`;
    }
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
        console.log(this.book);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du livre:', error);
      }
    },
    async addComment() {

      this.visible = false;

      try {
        let token = localStorage.getItem('jwtToken');
        let config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };

        console.log(config);
        const response = await axios.post(`http://localhost:3000/api/comments/`, {

          fk_book: this.id,
          fk_user: 1,
          note: this.rating,
          text: this.comment,

        }, config);

        axios.get(`http://localhost:3000/api/comments/`, config).then((response) => {

          // Assuming this.id0 contains the fk_book value you want to filter by
          const filteredComments = response.data.filter(comment => comment.fk_book == this.id);

          let sum = 0;

          filteredComments.forEach(num => {
            sum += parseInt(num.note);
          });

          let rating = (sum / filteredComments.length).toFixed(1);

          console.log(`Average note for fk_book ${this.id}:`, rating);

          axios.put(`http://localhost:3000/api/books/${this.id}`, {
            average: rating
          }, config).then((response) => {

            let message = response.data.message;
            this.$toast.add({ severity: 'success', summary: 'Info', detail: message, life: 3000 });

          }).catch((error) => {

            let message = error.response.data;
            this.$toast.add({ severity: 'error', summary: 'Info', detail: message, life: 3000 });

          });

        }).catch((error) => {

          let message = error.response.data;
          this.$toast.add({ severity: 'error', summary: 'Info', detail: message, life: 3000 });
        });

        console.log(response);

      } catch (error) {
        console.error('Erreur lors de la création du commentaire', error);
        let message = error.response.data;
        this.$toast.add({ severity: 'error', summary: 'Info', detail: message, life: 10000 });
      }

    },
  },
  created() {
    this.fetchBookDetails();
  },
};
</script>

<style scoped>
.book-detail {
  padding: 20px;
}

.book-detail h1 {
  margin-bottom: 20px;
}

.book-detail img {
  max-width: 200px;
  margin-bottom: 20px;
}

.book-detail p {
  margin-bottom: 10px;
}

.book-detail a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.book-detail a:hover {
  background-color: #0056b3;
}
</style>
