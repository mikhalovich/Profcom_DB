<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Профсоюзная информация о студенте</h6>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <select>
            <option value disabled selected>Членство в профсоюзе</option>
            <option value="1">Да</option>
            <option value="2">Нет</option>
          </select>
        </div>
        <div class="input-field col s6">
          <input id="numberOfTicket" type="text" class="validate" />
          <label for="numberOfTicket">Номер билета</label>
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
          <input id="position" type="text" class="validate" />
          <label for="position">Выборная должность</label>
        </div>
      </div>
    </div>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Оплата членских взносов</h6>
      </div>
      <div class="row">
        <label class="col s4">Вид оплаты:</label>

        <label class="col s3">
          <input name="group1" type="radio" checked />
          <span>наличными</span>
        </label>

        <label class="col s4">
          <input name="group1" type="radio" />
          <span>из стипендии</span>
        </label>
      </div>
      <div class="row">
        <div class="container">
          <div class="row">
            <table class="highlight">
              <thead>
                <tr>
                  <th>Период</th>
                  <th>Сумма</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>

                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>

                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>

                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <a href="#!" class="modal-close waves-effect btn-small col s2 offset-s3">Добавить</a>
            <a href="#!" class="modal-close waves-effect btn-small col s2 offset-s2">Удалить</a>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
