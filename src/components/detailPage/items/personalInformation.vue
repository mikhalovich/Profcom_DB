<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Личная информация студента</h6>
      </div>
      <div class="row">
        <div class="input-field col s3">
          <input id="number" type="number" class="validate" min="1" />
          <label for="number">{{ personall.id }}</label>
        </div>
        <div class="input-field col s9">
          <input id="name" type="text" class="validate" />
          <label for="name">{{ personall.personalInformation.fullName }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="date" type="text" class="datepicker validate" />
          <label for="date">{{ personall.personalInformation.dateOfBirth }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="address" type="text" class="validate" />
          <label for="address">{{ personall.personalInformation.address }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col l3 m6 s6">
          <input id="telNumberFirst" type="text" class="validate" />
          <label for="telNumberFirst">{{ personall.personalInformation.firstNumebr }}</label>
        </div>
        <div class="input-field col l3 m6 s6">
          <input id="telNumberSecond" type="text" class="validate" />
          <label for="telNumberSecond">{{ personall.personalInformation.secondNumber }}</label>
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
          <input id="seriesOfPassport" type="text" class="validate" />
          <label for="seriesOfPassport">{{ personall.personalInformation.passportSeries }}</label>
        </div>
        <div class="input-field col s4">
          <input id="numberOfPassport" type="text" class="validate" />
          <label for="numberOfPassport">{{ personall.personalInformation.passportID }}</label>
        </div>
        <div class="input-field col s6">
          <input id="issued" type="text" class="validate" />
          <label for="issued">{{ personall.personalInformation.issuedBy }}</label>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="dateIssued" type="text" class="datepicker validate" />
            <label for="dateIssued">{{ personall.personalInformation.dateOfIssue }}</label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    personall: {
      type: Object,
      required: true
    }
  }
};
</script>
