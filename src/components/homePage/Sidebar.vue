<template>
  <ul class="sidenav" id="mobile-demo">
    <li>
      <a class="modal-trigger waves-effect" href="#modal1">
        <i class="material-icons left">search</i>Поиск
      </a>
    </li>
    <li>
      <a class="waves-effect" href="#">
        <i class="material-icons left">arrow_upward</i>Выгрузить базу
      </a>
    </li>
    <li>
      <a href="#">
        <i class="material-icons left">autorenew</i>Обновить базу
      </a>
    </li>
    <li>
      <a href="input.html">
        <i class="material-icons left">exit_to_app</i>Выход
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
  }
};
</script>
