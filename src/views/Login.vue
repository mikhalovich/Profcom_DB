<template>
  <form class="inputForm container z-depth-3" @submit.prevent="submitHandler">
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input type="text" id="email" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }" />
        <label for="email">Почта</label>
        <small class="helper-text invalid" v-if="($v.email.$dirty && !$v.email.required)">Поле не должно быть пустым</small>
        <small class="helper-text invalid" v-else-if="($v.email.$dirty && !$v.email.email)">Введите корректный Email</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input type="password" id="password"  v-model.trim="password"  :class="{invalid: ($v.password.$dirty && !$v.password.required)}"  />
        <label for="password">Пароль</label>
          <small class="helper-text invalid" v-if="($v.password.$dirty && !$v.password.required)">Поле не должно быть пустым</small>
        
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="btn waves-effect btn-large">Вход</button>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
export default {
  name: "login",
  data:()=>({
    email: '',
    password:''
  }),
  validations: {
    email: {email, required},
    password: {required}
  },
  methods: {
    submitHandler() {
        if (this.$v.$invalid){
            this.$v.$touch()
            return
        }
        const formData = {
            email: this.email,
            password: this.password
        }
      this.$router.push('/');
    }
  }
};
</script>
