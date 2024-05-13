<template>

    <body>
        <div class="card">
            <Toolbar>
                <template #start>
                    <Button icon="pi pi-plus" class="mr-2" severity="secondary" />
                    <Button icon="pi pi-pencil" class="mr-2" severity="secondary" />
                    <Button icon="pi pi-upload" severity="secondary" />
                </template>

                <template #center>
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-search"></i>
                        </InputGroupAddon>
                        <AutoComplete v-model="researched" placeholder="Search" loading multiple
                            :suggestions="suggestions" @complete="search" />
                    </InputGroup>
                </template>

                <template #end>
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-book"></i>
                        </InputGroupAddon>
                        <MultiSelect v-model="selectedCategory" :options="categories" display="chip" filter
                            optionLabel="name" placeholder="Select categories" :maxSelectedLabels="3"
                            class="w-full md:w-20rem" @change="filter" />
                    </InputGroup>

                </template>
            </Toolbar>
        </div>
        <div v-if="filteredBook < 1" style="display: flex; flex-wrap: wrap;">
            <bookCard v-if="bookData" v-for="book in bookData" :dataTrue="1" :book="book"></bookCard>
            <div v-else style="display: flex; flex-wrap: wrap;">
                <bookCard v-for="n in 10" :dataTrue="dataTrue"></bookCard>
                <!-- Ajoutez autant de bookCard avec dataTrue que nécessaire pour afficher les skeletons -->
            </div>
        </div>
        <div v-else style="display: flex; flex-wrap: wrap; background-color: red;">
            <bookCard v-if="filteredBook" v-for="book in filteredBook" :dataTrue="1" :book="book"></bookCard>
            <div v-else style="display: flex; flex-wrap: wrap;">
                <bookCard v-for="n in 10" :dataTrue="dataTrue"></bookCard>
                <!-- Ajoutez autant de bookCard avec dataTrue que nécessaire pour afficher les skeletons -->
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios';
import bookCard from '../components/bookCard.vue';
import Toolbar from 'primevue/toolbar';
import TreeSelect from 'primevue/treeselect';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import SplitButton from 'primevue/splitbutton';
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import MultiSelect from 'primevue/multiselect';
import Listbox from 'primevue/listbox';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

export default {
    components: {
        bookCard,
        TreeSelect,
        Toolbar,
        InputText,
        IconField,
        InputIcon,
        Button,
        SplitButton,
        Dropdown,
        AutoComplete,
        MultiSelect,
        Listbox,
        InputGroup,
        InputGroupAddon
    },
    data() {
        return {
            // Initialiser bookData à null ou à un objet vide
            researched: '',
            bookData: null,
            lastFiveBooks: null,
            titles: null,
            authors: null,
            suggestions: [],
            dataTrue: 0,
            nodes: null,
            selectedValue: null,
            selectedCategory: null,
            filteredBook: [],
            categories: [
                { name: 'Roman' },
                { name: 'Nouvelle' },
                { name: 'Science-fiction' },
                { name: 'Fantastique' },
                { name: 'Policier' },
                { name: 'Thriller' },
                { name: 'Romance' },
                { name: 'Littérature classique' },
                { name: 'Biographie' },
                { name: 'Mémoires' },
                { name: 'Histoire' },
                { name: 'Politique' },
                { name: 'Sciences' },
                { name: 'Psychologie' },
                { name: 'Développement personnel' },
                { name: 'Voyage' },
                { name: 'Cuisine' },
                { name: 'Art et photographie' },
                { name: 'Poésie' },
                { name: 'Théâtre' },
                { name: 'Bandes dessinées / Comics' },
                { name: 'Livres académiques / Universitaires' },
                { name: 'Livres religieux / Spirituels' },
                { name: 'Hard science-fiction' },
                { name: 'Space opera' },
                { name: 'Dystopie' },
                { name: 'Uchronie' },
                { name: 'High fantasy' },
                { name: 'Low fantasy' },
                { name: 'Fantaisie urbaine' },
                { name: 'Fantaisie historique' },
                { name: 'Enquêtes classiques' },
                { name: 'Polars nordiques' },
                { name: 'Polars historiques' },
                { name: 'Thrillers psychologiques' },
                { name: 'Romance contemporaine' },
                { name: 'Romance historique' },
                { name: 'Romance érotique' },
                { name: 'Romance fantastique' },
                { name: 'Œuvres antiques' },
                { name: 'Classiques français' },
                { name: 'Classiques anglais' },
                { name: 'Classiques russes' },
                { name: 'Physique' },
                { name: 'Chimie' },
                { name: 'Biologie' },
                { name: 'Astronomie' },
                { name: 'Psychologie clinique' },
                { name: 'Psychologie sociale' },
                { name: 'Psychologie du développement' },
                { name: 'Psychologie cognitive' },
                { name: 'Récits de voyage' },
                { name: 'Guides de voyage' },
                { name: 'Aventures de voyage' },
                { name: 'Recettes du monde' },
                { name: 'Cuisine régionale' },
                { name: 'Cuisine santé' },
                { name: 'Cuisine gastronomique' },
                { name: 'Histoire de l\'art' },
                { name: 'Techniques artistiques' },
                { name: 'Photographie de paysage' },
                { name: 'Photographie documentaire' }
            ]
        };
    },
    mounted() {
        // Effectuer la requête Axios pour récupérer les données du livre
        axios.get('http://localhost:3000/api/books')
            .then(response => {
                // Trier les livres par ordre décroissant de leur date de création
                const sortedBooks = response.data.sort((a, b) => new Date(b.created) - new Date(a.created));
                console.log(response);
                // Prendre les 5 premiers livres du tableau trié
                this.lastFiveBooks = sortedBooks.slice(0, 5);

                this.titles = response.data.map((book) => book.title);

                // Mettre à jour bookData avec les données des 5 derniers livres
                this.bookData = response.data;
                this.dataTrue = 1;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données du livre:', error);
                this.dataTrue = 0;
            });
    },
    methods: {
        search(event) {
            // Initialisez votre tableau de livres filtrés
            this.filteredBook = [];

            // Filtrer les titres des livres qui correspondent à la recherche de l'utilisateur
            this.suggestions = this.titles.filter(title => title.toLowerCase().includes((event.query.toLowerCase())));

            if (this.researched == '') {
                // Filtrez les livres en fonction des catégories sélectionnées
                this.bookData.forEach((book) => {
                    // Vérifiez si le livre correspond à au moins une des catégories sélectionnées
                    if (this.suggestions.some((name) => book.title == name)) {
                        // Si le livre correspond à une catégorie sélectionnée, ajoutez-le au tableau des livres filtrés
                        this.filteredBook.push(book);
                    }
                });
            }
            else {
                // Filtrez les livres en fonction des catégories sélectionnées
                this.bookData.forEach((book) => {
                    // Vérifiez si le livre correspond à au moins une des catégories sélectionnées
                    if (this.researched.some((name) => book.title == name)) {
                        // Si le livre correspond à une catégorie sélectionnée, ajoutez-le au tableau des livres filtrés
                        this.filteredBook.push(book);
                    }
                });
            }


        },
        filter() {
            // Initialisez votre tableau de livres filtrés
            this.filteredBook = [];

            // Filtrez les livres en fonction des catégories sélectionnées
            this.bookData.forEach((book) => {
                // Vérifiez si le livre correspond à au moins une des catégories sélectionnées
                if (this.selectedCategory.some((category) => book.t_category.name === category.name)) {
                    // Si le livre correspond à une catégorie sélectionnée, ajoutez-le au tableau des livres filtrés
                    this.filteredBook.push(book);
                }
            });
            console.log(this.filteredBook);
        }
    }
}
</script>

<style scoped></style>