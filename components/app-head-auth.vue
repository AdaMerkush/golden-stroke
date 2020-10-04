<template>
  <div class="app-head-auth">
    <ul class="app-head-auth__list">
      <li class="app-head-auth__item">
        <button class="app-head-auth__button" type="button">Вход</button>
      </li>
      <li class="app-head-auth__item">
        <button class="app-head-auth__button" type="button">Регистрация</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AppHeadAuth'
  };
</script>

<style scoped>
  .app-head-auth__list {
    display: grid;
    gap: var(--base-gap);
    grid-auto-flow: column;
    margin: 0;
    padding: 0;
  }
  .app-head-auth__item {
    list-style: none;
  }
  .app-head-auth__item + .app-head-auth__item {
    position: relative;
  }
  .app-head-auth__item + .app-head-auth__item::before {
    background-color: #fff;
    content: '';
    height: 15px;
    left: -20px;
    position: absolute;
    top: calc(50% - 7px);
    width: 1px;
  }
  .app-head-auth__button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 24px;
    margin: 0 -8px;
    padding: 8px;
    text-decoration: none;
  }
</style>
