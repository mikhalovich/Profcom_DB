<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Социальные показатели</h6>
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
                  <option value disabled selected>Статья</option>
                  <option value="18"></option>
                  <option value="19"></option>
                  <option value="20"></option>
                  <option value="21"></option>
                  <option value="22"></option>
                  <option value="23"></option>
                  <option value="24"></option>
                  <option value="25"></option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Дети</h6>
      </div>
      <div class="row">
        <div class="container">
          <div class="row">
            <label>
              <input type="checkbox" class="filled-in" />
              <span>Имеющие детей</span>
            </label>
          </div>
          <div class="row">
            <table class="highlight">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Дата</th>
                </tr>
              </thead>

              <tbody></tbody>
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
