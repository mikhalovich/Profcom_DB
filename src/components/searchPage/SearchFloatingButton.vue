<template>
  <div class="fixed-action-btn floatingButton">
    <a class="btn-floating btn-large waves-effect waves-light teal lighten-2">
      <i class="large material-icons">search</i>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    M.FloatingActionButton.init(
      document.querySelectorAll(".fixed-action-btn"),
      { hoverEnabled: false }
    );
  }
};
</script>