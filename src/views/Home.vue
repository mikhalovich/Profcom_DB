<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="input-field col l3 s6">
          <select>
            <option value disabled selected>Сортировать</option>
            <option value="1">По имени</option>
            <option value="2">По номеру</option>
          </select>
        </div>
        <div class="input-field col l3 s6">
          <select>
            <option value disabled selected>Нет в АСУ</option>
            <option value="1">Показывать</option>
            <option value="2">Не показывать</option>
          </select>
        </div>
        <div class="col l4 offset-l2">
          <label for>
            <h5>Количество записей: 123456789</h5>
          </label>
        </div>
      </div>
    </div>

    <div class="container">
      <table class="highlight z-depth-1">
        <thead>
          <tr>
            <th>Номер</th>
            <th>ФИО</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>123123</td>
            <td>
              <router-link class="modal-trigger" to="/detail">Иванов Иван Иванович</router-link>
            </td>
          </tr>
          <tr>
            <td>345212</td>
            <td>
              <router-link class="modal-trigger" to="/detail">Иванов Иван Иванович</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  mounted() {
    M.FormSelect.init(document.querySelectorAll("select"), {});
  }
};
</script>
