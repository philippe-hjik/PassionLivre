<template>
  <Card style="width: 100%; overflow: hidden; margin: 5px;">
    <template #title>
      <Skeleton width="100%" height="8rem" v-if="!dataTrue" />
      <template v-else>{{ book.title }}</template>
    </template>
    <template #subtitle>
      <Skeleton width="100%" height="2rem" v-if="!dataTrue" />
      <template v-else>{{ book.pages }} pages <br> categorie {{ book.fk_category }}</template>
    </template>
    <template #content>
      <Skeleton width="93%" height="1rem" class="mb-2" style="margin-bottom: 5px;" v-if="!dataTrue" />
      <Skeleton width="68%" height="1rem" class="mb-2" style="margin-bottom: 5px;" v-if="!dataTrue" />
      <Skeleton width="80%" height="1rem" class="mb-2" v-if="!dataTrue" />
      <template v-else>
        <p class="m-1">{{ book.summary }}</p>
      </template>
    </template>
  </Card>
  <img :src="imageUrl" alt="Image dynamique">
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';

export default {
  props: {
    book: {
      type: Object,
      required: false
    },
    dataTrue: {
      type: Number,
      required: true
    }
  },
  components: {
    Card,
    Button,
    Skeleton
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  mounted() {
    if (this.book) {
      // Simulons un tableau binaire d'image (ceci devrait venir de votre serveur ou autre source)
      const binaryData = this.book.cover.data;

      // Création d'un Blob à partir des données binaires
      const blob = new Blob([new Uint8Array(binaryData)], { type: 'image/jpeg' });

      // Création de l'URL de l'image
      this.imageUrl = URL.createObjectURL(blob);
    }

  }
}
</script>

<style scoped>
/* Styles CSS pour le composant de carte */
.p-card {
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
</style>
