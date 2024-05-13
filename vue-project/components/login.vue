<template>
  <div class="card flex justify-content-center align-items-center p-fluid">
    <h1 style="margin-top: 0;">Login</h1>
    <div class="w-full" style="max-width: 25rem;">
      <div class="field">
        <FloatLabel>
          <InputText id="input" v-model="name" type="text" autofocus />
          <label for="username">Username</label>
        </FloatLabel>
      </div>
      <div class="field">

        <FloatLabel>
          <Password v-model="password" inputId="password" :feedback="false" toggleMask />
          <label for="password">Password</label>
        </FloatLabel>

      </div>
      <Button type="submit" label="Se connecter" icon="pi pi-user" class="mt-2" raised @click="sendLogin()" />
      <Divider>
        <b>Or</b>
      </Divider>
      <Button type="submit" label="S'inscrire" icon="pi pi-user-plus" class="mt-2" severity="success" />
    </div>
    <Message v-if="connected" severity="success">{{ message }}</Message>
    <Message v-else-if="connected == false" severity="error">{{ message }}</Message>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import FloatLabel from 'primevue/floatlabel';
import Message from 'primevue/message';
import Divider from 'primevue/divider';
import axios from 'axios';

export default {
  components: {
    Button,
    InputText,
    Password,
    IconField,
    InputIcon,
    FloatLabel,
    Message,
    Divider
  },
  data() {
    return {
      name: null,
      password: null,
      connected: null,
      message: null,
    };
  },
  methods: {
    sendLogin() {

      if (this.name == null || this.password == null) {
        this.connected = false;
        return this.message = "Veuillez remplir les champs";
      }

      if (this.name.length < 2) {
        this.connected = false;
        return this.message = "Minimum deux caractères pour le username";
      }
      if (this.password < 2) {
        this.connected = false;
        return this.message = "Minimum deux caractères pour le password";
      }

      axios.post('http://localhost:3000/api/login', {
        username: this.name,
        password: this.password
      })
        .then((response) => {

          this.connected = true;
          this.message = response.data.message;

          // Afficher la réponse du serveur dans la console
          console.log(response.data);

          let token = response.data.token;

          // Pour sauvegarder le token
          localStorage.setItem('jwtToken', token);

          // Pour récupérer le token
          const jwtToken = localStorage.getItem('jwtToken');

          if (jwtToken) {
            setTimeout(() => { this.$router.push('/book'); }, 2000);
            
          }
        })
        .catch((error) => {
          console.log(error);
          this.connected = false;
          this.message = error.response.data.message;
        });

    }
  }
};
</script>
<style scoped>
.card {
  display: flex;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--surface-card);
}

.field {
  margin-bottom: 15px;
}

p {
  line-height: 1.75;
}
</style>