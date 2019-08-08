<template>
  <div>
    <Navbar />
    <Sidebar />
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
  }
};
</script>
