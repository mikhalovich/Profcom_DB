<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <div class="container">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
              <a class="waves-effect" href="#">
                <i class="material-icons left">autorenew</i>Обновить
                базу
              </a>
            </li>
            <li>
              <a class="waves-effect" href="#" @click.prevent="$emit('exit')">
                <i class="material-icons left">exit_to_app</i>Выход
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
