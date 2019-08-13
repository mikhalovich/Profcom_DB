<template>
  <div>
    <ReturnFloatingButton />
    <DetailFloatingButton />
    <div class="container">
      <div class="row">
        <i class="material-icons left md-40">assignment_ind</i>
        <h4>Информация о студенте</h4>
      </div>

      <ul class="collapsible popout">
        <li>
          <div class="collapsible-header">Личная информация</div>
          <div class="collapsible-body">
            <personalInfo :persInfo="personal" />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Профессиональная направленность</div>
          <div class="collapsible-body">
            <professionalOrientation />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Профсоюзная ориентированность</div>
          <div class="collapsible-body">
            <profcomInformation />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Социальные показатели</div>
          <div class="collapsible-body">
            <socialIndicators />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Проживание</div>
          <div class="collapsible-body">
            <placeOfResidence />
          </div>
        </li>

        <li>
          <div class="collapsible-header">Материальная помощь</div>
          <div class="collapsible-body">
            <materialAid />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Путёвки</div>
          <div class="collapsible-body">
            <travelTickets />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Льготные абонементы</div>
          <div class="collapsible-body">
            <privileges />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Деньги под отчет</div>
          <div class="collapsible-body">
            <money />
          </div>
        </li>
        <li>
          <div class="collapsible-header">Примечания</div>
          <div class="collapsible-body">
            <notes />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DetailFloatingButton from "@/components/detailPage/DetailFloatingButton";
import personalInfo from "@/components/detailPage/items/personalInformation";
import professionalOrientation from "@/components/detailPage/items/professionalOrientation";
import profcomInformation from "@/components/detailPage/items/profcomInformation";
import socialIndicators from "@/components/detailPage/items/socialIndicators";
import placeOfResidence from "@/components/detailPage/items/placeOfResidence";
import travelTickets from "@/components/detailPage/items/travelTickets";
import materialAid from "@/components/detailPage/items/materialAid";
import money from "@/components/detailPage/items/money";
import notes from "@/components/detailPage/items/notes";
import privileges from "@/components/detailPage/items/privileges";
import Datepicker from "../utils/Datepicker";
import ReturnFloatingButton from "../components/ReturnFloatingButton";
export default {
  mounted() {
    // eslint-disable-next-line
    M.Collapsible.init(document.querySelectorAll(".collapsible"), {});
    // eslint-disable-next-line
    M.FormSelect.init(document.querySelectorAll("select"), {});

    Datepicker.InitDatepicker();
  },
  components: {
    DetailFloatingButton,
    personalInfo,
    professionalOrientation,
    profcomInformation,
    socialIndicators,
    placeOfResidence,
    travelTickets,
    materialAid,
    money,
    notes,
    privileges,
    ReturnFloatingButton
  },
  computed: {
    personal() {
      for (let i = 0; i <= this.$store.getters.persons.length; i++ ) {
        if (this.$store.getters.persons[i].id == this.$route.params['id']) {
          return this.$store.getters.persons[i];
        }
      }
      return {};
    }
  }
};
</script>
