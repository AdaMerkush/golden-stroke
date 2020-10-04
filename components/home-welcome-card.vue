<template>
  <div class="home-welcome-card">
    <h3 class="home-welcome-card__title h1">Добро&nbsp;пожаловать в&nbsp;галерею Золотой&nbsp;Мазок</h3>
    <nuxt-link class="button" to="/catalog">Смотреть картины</nuxt-link>
    <ol class="home-welcome-card__list">
      <li class="home-welcome-card__item" :key="slideIndex" v-for="(slide, slideIndex) in slides">
        <button
          class="home-welcome-card__button"
          type="button"
          :class="{ 'home-welcome-card__button_selected': slideIndex === value }"
          @click="$emit('change', slideIndex)"
        />
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'HomeWelcomeCard',
    model: {
      event: 'change',
      prop: 'value'
    },
    props: {
      slides: { required: true, type: Array },
      value: { required: true, type: Number }
    }
  };
</script>

<style>
  .home-welcome-card {
    background-color: var(--color-black-light);
    border-radius: var(--base-radius);
    padding: 70px 70px 119px 70px;
  }
  .home-welcome-card__title {
    color: #fff;
    margin: 0 0 88px 0;
  }
  .home-welcome-card__list {
    display: inline-grid;
    gap: 20px;
    grid-auto-flow: column;
    margin: 0 0 0 40px;
    padding: 8px;
    vertical-align: middle;
  }
  .home-welcome-card__item {
    list-style: none;
  }
  .home-welcome-card__button {
    background-color: #c4c4c4;
    border: none;
    border-radius: 50%;
    display: block;
    height: 32px;
    width: 32px;
  }
  .home-welcome-card__button:focus {
    outline: none;
  }
  .home-welcome-card__button_selected {
    background-color: #fff;
  }
</style>
