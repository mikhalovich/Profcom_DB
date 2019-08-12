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
          <tr v-for="(person, number) in persons" :key="person.id">
            <td>{{ number + 1 }}</td>
            <td>
              <router-link
                :to="{ path: 'detail', query: { id: `${person.id}` } }"
              >
                {{ person.personalInformation.fullName }}
              </router-link>
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
import { mapGetters } from "vuex";

export default {
  name: "home",

  mounted() {
    // eslint-disable-next-line
    M.FormSelect.init(document.querySelectorAll("select"), {});
    this.$store.dispatch("fetchPersons");
  },
  computed: {
    ...mapGetters(["persons"])
  },
  components: {
    sort,
    AmountOfRecords
  }
};
</script>
