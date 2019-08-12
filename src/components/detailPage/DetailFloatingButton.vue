<template>
  <div class="fixed-action-btn floatingButton">
    <a class="btn-floating btn-large waves-effect waves-light teal lighten-2">
      <i class="large material-icons">edit</i>
    </a>
    <ul>
      <li>
        <a class="btn-floating green disabled">
          <i class="material-icons">save</i>
        </a>
      </li>
      <li>
        <a class="btn-floating red accent-4 disabled">
          <i class="material-icons">cancel</i>
        </a>
      </li>
      <li>
        <a class="btn-floating teal lighten-2">
          <i class="material-icons">edit</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.floatingB = M.FloatingActionButton.init(
      document.querySelectorAll(".fixed-action-btn"),
      { hoverEnabled: false }
    );
  }
};
</script>
