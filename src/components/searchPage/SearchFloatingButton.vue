<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">list</i>
    </a>
    <ul>
     
      <li>
        <a class="btn-floating yellow darken-1">
          <i class="material-icons">search</i>
        </a>
      </li>
      <li>
        <router-link to="/" class="btn-floating deep-purple darken-4">
          <i class="material-icons">arrow_back</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    M.FloatingActionButton.init(
      document.querySelectorAll(".fixed-action-btn"),
      {}
    );
  }
};
</script>