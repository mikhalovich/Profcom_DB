<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Информация о профнаправленности студента</h6>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Членство в профсоюзе</span>
          </label>
        </div>
        <div class="input-field col s4">
          <input id="numberOfTicket" type="text" class="validate" />
          <label for="numberOfTicket">Номер билета</label>
        </div>
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Выберите вариант</option>
            <option value="1">Наличными</option>
            <option value="2">Из степендии</option>
          </select>
          <label for>Оплата членского взноса</label>
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
        <h6 class="center">Социальная информация</h6>
      </div>
      <div class="container">
        <div class="row">
          <ul>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Сирота</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Многодетная семья</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Имеющие детей</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Семейные</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Инвалиды</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>ЧАЭС по статьям</span>
              </label>

              <div class="input-field">
                <select>
                  <option value disabled selected>Выберите вариант</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                </select>
                <label for>Статья</label>
              </div>
            </li>
          </ul>
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
            <option value disabled selected>Выберите вариант</option>
            <option value="1">Неизвестно</option>
            <option value="2">Городской</option>
            <option value="3">Лишен прав проживания в общежитии</option>
            <option value="4">Иногородний не в общежитии</option>
            <option value="5">Иногородний в общежитии</option>
          </select>
          <label for>Проживание</label>
        </div>
        <div class="input-field col s4">
          <input id="number" type="number" class="validate" disabled="disabled" min="1" />
          <label for="number">Номер общежития</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="remark" type="text" class="validate" />
          <label for="remark">Примечания</label>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <ul>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Получение материальной помощи</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Предоставление путёвки</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Предоставление льготных абонементов</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Выдача денег под отчет</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </form>
</template>