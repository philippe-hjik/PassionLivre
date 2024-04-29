<template>
  <div class="card flex justify-content-center align-items-center p-fluid">
    <h1>Login</h1>
    <div class="w-full" style="max-width: 40rem;">
      <div class="field">
          <FloatLabel>
            <InputText id="input" v-model="name" type="text" autofocus />
            <label for="username">Username</label>
          </FloatLabel>
      </div>
      <div class="field">

        <FloatLabel>
          <Password v-model="password" inputId="password" toggleMask />
          <label for="password">Password</label>
        </FloatLabel>

      </div>
      <div class="field-checkbox" style="margin-top: 15px;">
        <Checkbox id="accept" style="margin-right: 10px;" v-model="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
      </div>
      <Button type="submit" label="S'inscrire" style="margin-top: 15px;" class="mt-2" severity="secondary"   />
      <Button type="submit" label="Se connecter" style="margin-top: 15px;" class="mt-2" raised />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Checkbox from 'primevue/checkbox';
import FloatLabel from 'primevue/floatlabel';


export default {
  components: {
    Button,
    InputText,
    Password,
    IconField,
    InputIcon,
    Checkbox,
    FloatLabel
  },
  data() {
    return {
      name: null,
      password: null,
      accept: false
    };
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