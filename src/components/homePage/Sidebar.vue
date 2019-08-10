<template>
  <ul class="sidenav" id="mobile-demo">
    <li>
      <router-link class="waves-effect" to="/search">
        <i class="material-icons left">search</i>Поиск
      </router-link>
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
      <a href="#" @click="$emit('exit')">
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
