<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Личная информация студента</h6>
      </div>
      <div class="row">
        <div class="input-field col s3">
          <input id="number" type="number" class="validate" min="1" v-model="persInfo.id"/>
          <label for="number">Номер</label>
        </div>
        <div class="input-field col s9">
          <input id="name" type="text" class="validate" v-model="persInfo.personalInformation.fullName"/>
          <label for="name">ФИО</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="date" type="text" class="datepicker validate" v-model="persInfo.personalInformation.dateOfBirth"/>
          <label for="date">Дата рождения</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="address" type="text" class="validate" v-model="persInfo.personalInformation.address"/>
          <label for="address">Адрес</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col l3 m6 s6">
          <input id="telNumberFirst" type="text" class="validate" v-model="persInfo.personalInformation.firstNumebr"/>
          <label for="telNumberFirst">Телефон №1</label>
        </div>
        <div class="input-field col l3 m6 s6">
          <input id="telNumberSecond" type="text" class="validate" v-model="persInfo.personalInformation.secondNumber"/>
          <label for="telNumberSecond">Телефон №2</label>
        </div>
        <div class="input-field col s6">
          <select>
            <option value disabled selected>Выберите вариант</option>
            <option value="1">Нет</option>
            <option value="2">В отпуске</option>
            <option value="3">Отчислен</option>
            <option value="4">Военная служба</option>
            <option value="5">Учится</option>
          </select>
          <label for>Статус</label>
        </div>
      </div>
    </div>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Паспортные данные студента</h6>
      </div>
      <div class="row">
        <div class="input-field col s2">
          <input id="seriesOfPassport" type="text" class="validate" v-model="persInfo.personalInformation.passportSeries"/>
          <label for="seriesOfPassport">Серия</label>
        </div>
        <div class="input-field col s4">
          <input id="numberOfPassport" type="text" class="validate" v-model="persInfo.personalInformation.passportID"/>
          <label for="numberOfPassport">Номер</label>
        </div>
        <div class="input-field col s6">
          <input id="issued" type="text" class="validate" v-model="persInfo.personalInformation.issuedBy"/>
          <label for="issued">Орган выдачи</label>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="dateIssued" type="text" class="datepicker validate" v-model="persInfo.personalInformation.dateOfIssue"/>
            <label for="dateIssued">Дата выдачи</label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    persInfo: {
      type: Object,
      required: true  
    }
  },
  mounted() {
    M.updateTextFields()
  }
};
</script>
