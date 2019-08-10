<template>
  <form>
    <div class="row z-depth-1">
      <div class="row">
        <h6 class="center">Информация об учебе студента в университете</h6>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <select>
            <option value disabled selected>Выберите вариант</option>
            <option value="1">Военный</option>
            <option value="2">Инженерно-строительный</option>
            <option value="3">Педагогический</option>
            <option value="4">Биологии и экологии</option>
            <option value="5">Инновационных технологий машиностроения</option>
            <option value="6">Искусств и дизайна</option>
            <option value="7">Истории,коммуникации и туризма</option>
            <option value="8">Математики и информатики</option>
            <option value="9">Психологии</option>
            <option value="10">Физической культуры</option>
            <option value="11">Экономики и управления</option>
            <option value="12">Физико-технический</option>
            <option value="13">Филологический</option>
            <option value="14">Юридический</option>
          </select>
          <label>Факультет</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col l2 s6">
          <input id="stage" type="text" class="validate" />
          <label for="stage">Курс</label>
        </div>
        <div class="input-field col l2 s6">
          <input id="group" type="text" class="validate" />
          <label for="group">Группа</label>
        </div>
        <div class="input-field col s4">
          <select>
            <option value disabled selected>Выберите вариант</option>
            <option value="1">Бюджетная</option>
            <option value="2">Платная</option>
          </select>
          <label>Форма обучения</label>
        </div>
        <div class="input-field col s4">
          <input id="numberRecordBook" type="text" class="validate" />
          <label for="numberRecordBook">Номер зачетки</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="specialty" type="text" class="validate" />
          <label for="specialty">Специальность</label>
        </div>
      </div>
    </div>
  </form>
</template>
