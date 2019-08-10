<template>
  <div class="container">
    <SearchFloatingButton />
    <div class="row">
      <i class="material-icons left md-40">search</i>
      <h4>Поиск студентов по критериям</h4>
    </div>

    <ul class="collapsible popout">
      <li>
        <div class="collapsible-header">Основная информация о студенте</div>
        <div class="collapsible-body">
          <BasicInformation />
        </div>
      </li>
      <li>
        <div class="collapsible-header">Дополнительная информация о студенте</div>
        <div class="collapsible-body">
          <AdditionalInformation />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchFloatingButton from "@/components/searchPage/SearchFloatingButton";
import BasicInformation from "../components/searchPage/items/BasicInformation";
import AdditionalInformation from "../components/searchPage/items/AdditionalInformation";
import Datepicker from "../utils/Datepicker";
export default {
  mounted() {
    M.Collapsible.init(document.querySelectorAll(".collapsible"), {});
    M.FormSelect.init(document.querySelectorAll("select"), {});
    Datepicker.InitDatepicker();
  },
  components: {
    SearchFloatingButton,
    BasicInformation,
    AdditionalInformation
  }
};
</script>
