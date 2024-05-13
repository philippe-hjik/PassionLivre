<template>
    <div class="card flex justify-content-center">
        <Stepper>
            <StepperPanel header="Auteur">
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="flex-auto flex justify-content-center align-items-center font-medium">
                            <div class="field p-fluid">
                                <InputGroup class="field">
                                    <InputGroupAddon>
                                        <i class="pi pi-book"></i>
                                    </InputGroupAddon>
                                    <InputText id="input" v-model="title" type="text" placeholder="Titre" />
                                </InputGroup>
                                <InputGroup class="field">
                                    <InputGroupAddon>
                                        <i class="pi pi-sort-numeric-down"></i>
                                    </InputGroupAddon>
                                    <InputText v-model="pages" type="number" placeholder="Pages" />
                                </InputGroup>
                                <label for="first">Auteur</label>
                                <InputGroup class="field">
                                    <InputGroupAddon>
                                        <InputText v-model="author.firstName" style="margin-right: 10px;" type="text" placeholder="Prénom" />
                                        <InputText v-model="author.lastName"type="text" placeholder="Nom de famille" />
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup class="field">
                                    <InputGroupAddon>
                                        <i class="pi pi-calendar"></i>
                                    </InputGroupAddon>
                                    <Calendar dateFormat="yy-mm-dd" v-model="createDate" placeholder="Date de création" />
                                </InputGroup>
                                <Divider>
                                    <b>Or</b>
                                </Divider>
                                <div class="flex-auto flex justify-content-center align-items-center font-medium">
                                    <FileUpload mode="basic" name="demo[]" accept=".epub" :maxFileSize="10000000"
                                        chooseLabel="Choose epub file" customUpload @uploader="onFileChange"
                                        :auto="true">
                                    </FileUpload>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Extrait">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">

                        <Textarea v-model="summary" placeholder="Extrait" rows="5" cols="20"
                            class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></Textarea>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Maison d'édition">
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-12rem">
                        <div
                            class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            Content III</div>
                    </div>
                    <div class="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>

<script>
import axios from 'axios';

import Textarea from 'primevue/textarea';
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
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import FileUpload from 'primevue/fileupload';
import ePub from 'epubjs';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';

export default {
    components: {
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
        InputGroupAddon,
        Stepper,
        StepperPanel,
        TreeSelect,
        FileUpload,
        Textarea,
        Divider,
        Calendar
    },
    data() {
        return {
            // Initialiser bookData à null ou à un objet vide
            title: null,
            author: {
                firstName: null,
                lastName: null,
            },
            summary: null,
            publisher: null,
            createDate: null,
            pages: null,
            category: null,
        };
    },
    mounted() {

    },
    methods: {
        onFileChange(event) {
            //url="http://localhost:3000/api/books"
            console.log(event.files);
            const files = event.files;
            if (files && files.length > 0) {
                const file = files[0];

                const reader = new FileReader();
                reader.onload = async () => {
                    const url = reader.result;

                    const book = ePub(url);
                    await book.ready;

                    // Accéder aux métadonnées du livre pour obtenir le titre
                    this.title = book.package.metadata.title;
                    this.author = book.package.metadata.creator.split(' ', [2]);
                    this.author.firstName = this.author[0];
                    this.author.lastName = this.author[1];
                    this.summary = book.package.metadata.description;
                    this.createDate = book.package.metadata.pubdate;

                    console.log("Titre du livre:", book.package.metadata);
                };
                reader.readAsArrayBuffer(file);
            }
        }
    }
}
</script>

<style scoped>
.p-stepper {
    flex-basis: 50rem;
}

.field {
    margin-bottom: 15px;
}
</style>