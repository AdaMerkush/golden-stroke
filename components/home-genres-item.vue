<template>
  <div class="home-genres-item">
    <img class="home-genres-item__image" :alt="title" :src="image" />
    <div class="home-genres-item__block" :class="`home-genres-item__block_${order % 2 ? 'odd' : 'even'}`">
      <h5 class="home-genres-item__title">{{ title }}</h5>
      <nuxt-link class="home-genres-item__button button button_ghost" :to="route">Смотреть</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeGenresItem',
    props: {
      image: { required: true, type: String },
      order: { required: true, type: Number },
      route: { required: true, type: String },
      title: { required: true, type: String }
    }
  };
</script>

<style>
  .home-genres-item {
    position: relative;
  }
  .home-genres-item__image {
    display: block;
    height: 350px;
    object-fit: cover;
    width: 100%;
  }
  .home-genres-item__block {
    align-content: center;
    background-color: #fff;
    bottom: 0;
    display: grid;
    flex-flow: column;
    justify-items: center;
    position: absolute;
    top: 0;
    width: 256px;
  }
  .home-genres-item__block_even {
    left: calc(50vw - (1140px / 2));
  }
  .home-genres-item__block_odd {
    right: calc(50vw - (1140px / 2));
  }
  .home-genres-item__title {
    font-family: var(--font-family-title);
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    margin: 0 0 20px 0;
  }
  .home-genres-item__button {
    width: 160px;
  }
</style>
