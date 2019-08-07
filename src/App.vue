<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import LoginLayout from "./layouts/LoginLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "login") + "-layout";
    }
  },
  components: {
    LoginLayout
  }
};
</script>


<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/stylePage.css";
</style>


