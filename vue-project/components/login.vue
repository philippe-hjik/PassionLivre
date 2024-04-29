<template>
  <div class="card flex justify-content-center align-items-center p-fluid">
    <h1>Login</h1>
    <div class="w-full" style="max-width: 40rem;">
      <div class="field">
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
        </IconField>
      </div>
      <div class="field">
        <Password v-model="password" placeholder="Password" autofocus />
      </div>
      <div class="field-checkbox">
        <Checkbox id="accept" style="margin-right: 10px;" v-model="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
      </div>
      <Button type="submit" label="Submit" class="mt-2" />
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

export default {
  components: {
    Button,
    InputText,
    Password,
    IconField,
    InputIcon,
    Checkbox,
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

.field, .field-checkbox{
  margin-bottom: 12px;
}

p {
    line-height: 1.75;
}
</style>