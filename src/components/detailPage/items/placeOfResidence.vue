<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Место проживания</h6>
      </div>
      <div class="container">
        <ul>
          <li>
            <label>
              <input name="group2" type="radio" checked />
              <span>Неизвестно</span>
            </label>
          </li>
          <li>
            <label>
              <input name="group2" type="radio" checked />
              <span>Городской</span>
            </label>
          </li>
          <li>
            <label>
              <input name="group2" type="radio" checked />
              <span>Лишен прав проживания в общежитии</span>
            </label>
          </li>
          <li>
            <label>
              <input name="group2" type="radio" checked />
              <span>Иногородний не в общежитии</span>
            </label>
          </li>
          <li>
            <label>
              <input name="group2" type="radio" checked />
              <span>Иногородний в общежитии</span>
            </label>
          </li>
          <li>
            <div class="input-field">
              <input id="number" type="number" class="validate" disabled="disabled" min="1" />
              <label for="number">Номер общежития</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>
