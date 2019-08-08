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
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>
