<template>
  <form class="inputForm container z-depth-3" @submit.prevent="submitHandler">
    <div class="row">
      <h5 class="center">
        Профсоюзный комитет
        <br />ГрГУ им.Я.Купалы
      </h5>
    </div>
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input
          type="text"
          id="email"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        />
        <label for="email">Почта</label>
        <small
          class="helper-text invalid"
          v-if="($v.email.$dirty && !$v.email.required)"
        >Поле не должно быть пустым</small>
        <small
          class="helper-text invalid"
          v-else-if="($v.email.$dirty && !$v.email.email)"
        >Введите корректный Email</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input
          type="password"
          id="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required)}"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="($v.password.$dirty && !$v.password.required)"
        >Поле не должно быть пустым</small>
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="btn waves-effect btn-large">
        <strong>Вход</strong>
      </button>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import messages from "@/utils/messages";
export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>
