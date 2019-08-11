<template>
  <div>
    <Navbar v-on:exit="logout" />
    <Sidebar v-on:exit="logout" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/homePage/Navbar";
import Sidebar from "@/components/homePage/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  }
};
</script>
