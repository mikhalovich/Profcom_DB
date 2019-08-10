<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Информация о профнаправленности студента</h6>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Членство в профсоюзе</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <div class="input-field col s4">
          <input id="numberOfTicket" type="text" class="validate" />
          <label for="numberOfTicket">Номер билета</label>
        </div>
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Оплата членского взноса</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="dateOfIssuedByTicket" type="text" class="datepicker validate" />
          <label for="dateOfIssuedByTicket">Дата выдачи профбилета</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="cashPayment" type="text" class="validate" />
          <label for="cashPayment">Оплата наличными</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="position" type="text" class="validate" />
          <label for="position">Выборная должность</label>
        </div>
      </div>
    </div>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Социальная информация</h6>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Сирота</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Многодетная семья</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <div class="input-field col s4">
          <select>
            <option value disabled selected>ЧАЭС по статьям</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <select>
            <option value disabled selected>Семейные</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <div class="input-field col s6">
          <select>
            <option value disabled selected>Инвалиды</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <select>
            <option value disabled selected>Диспансерный учет по профилю</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <select>
            <option value disabled selected>Имеющие детей</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
    </div>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Остальное</h6>
      </div>
      <div class="row">
        <div class="input-field col s8">
          <select>
            <option value disabled selected>Проживание</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <div class="input-field col s4">
          <select disabled>
            <option value disabled selected>№ общежития</option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="remark" type="text" class="validate" />
          <label for="remark">Примечания</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="materialAid" type="text" class="validate" />
          <label for="materialAid">Получение материальной помощи</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="vacationTicket" type="text" class="validate" />
          <label for="vacationTicket">Предоставление путёвки</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="discountSubscriptions" type="text" class="validate" />
          <label for="discountSubscriptions">Предоставление льготных абонементов</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="moneyOnReport" type="text" class="validate" />

          <label for="moneyOnReport">Выдача денег под отчет</label>
        </div>
      </div>
    </div>
  </form>
</template>