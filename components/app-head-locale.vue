<template>
  <div class="app-head-locale">
    <button class="app-head-locale__switch" type="button">RU</button>

    <div class="app-head-locale__content">
      <ul class="app-head-locale__list">
        <li class="app-head-locale__item">
          <button class="app-head-locale__button" type="button">RU</button>
        </li>
        <li class="app-head-locale__item">
          <button class="app-head-locale__button" type="button">EN</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeadLocale'
  };
</script>

<style>
  .app-head-locale {
    position: relative;
  }
  .app-head-locale__switch {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 24px;
    padding: 8px 24px 8px 8px;
    position: relative;
    text-decoration: none;
  }
  .app-head-locale__switch::after {
    background: transparent url('../assets/images/icon-arrow-2.svg') 50% 50% no-repeat;
    content: '';
    display: inline-block;
    height: 6px;
    position: absolute;
    right: 8px;
    top: calc(50% - 3px);
    transition: transform 500ms ease;
    width: 8px;
  }
  .app-head-locale__content {
    background-color: var(--color-black-light);
    border-radius: 0 0 var(--base-radius) var(--base-radius);
    left: 50%;
    opacity: 0;
    padding: 20px;
    pointer-events: none;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 500ms ease, visibility 500ms ease;
    visibility: hidden;
  }
  .app-head-locale__list {
    margin: 0;
    padding: 0;
  }
  .app-head-locale__item {
    list-style: none;
  }
  .app-head-locale__button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 24px;
    padding: 8px;
    text-decoration: none;
  }

  .app-head-locale:hover .app-head-locale__switch::after,
  .app-head-locale:focus-within .app-head-locale__switch::after {
    transform: rotate(180deg);
  }

  .app-head-locale:hover .app-head-locale__content,
  .app-head-locale:focus-within .app-head-locale__content {
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  }
</style>
