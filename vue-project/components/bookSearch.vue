<template>
  
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import FloatLabel from 'primevue/floatlabel';
import Message from 'primevue/message';
import axios from 'axios';

export default {
  components: {
    Button,
    InputText,
    Password,
    IconField,
    InputIcon,
    FloatLabel,
    Message
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
            setTimeout(() => { this.$router.push('/'); }, 3000);
            
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
}

.field {
  margin-bottom: 15px;
}

p {
  line-height: 1.75;
}
</style>