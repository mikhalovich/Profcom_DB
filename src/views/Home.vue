<template>
  <div>
    <div class="container">
      <div class="row">
        <sort />
        <AmountOfRecords />
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
import sort from "@/components/homePage/sort";
import AmountOfRecords from "@/components/homePage/AmountOfRecords";
export default {
  name: "home",

  mounted() {
    M.FormSelect.init(document.querySelectorAll("select"), {});
  },
  components: {
    sort,
    AmountOfRecords
  }
};
</script>
