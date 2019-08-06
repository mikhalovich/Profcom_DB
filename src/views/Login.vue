<template>
  <form class="inputForm container z-depth-3">
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input type="email" id="email" required class="validate" />
        <label for="email">Почта</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s10 offset-s1">
        <input type="password" id="password" required class="validate" />
        <label for="password">Пароль</label>
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="btn waves-effect btn-large">Вход</button>
    </div>
  </form>
</template>
