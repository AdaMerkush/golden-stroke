<template>
  <section class="home-styles">
    <div class="home-styles__head container">
      <h2 class="home-styles__title h2">Откройте для себя мир<br />оригинального искусства</h2>
      <nuxt-link class="button" to="/">Смотреть все</nuxt-link>
    </div>
    <div class="home-styles__body container">
      <ul class="home-styles__list" :class="`home-styles__list_variant_${styles.length % 3}`">
        <li class="home-styles__item" :key="style.id" v-for="style in styles">
          <styles-item :image="style.image" :name="style.name" :route="style.route" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import StylesItem from '@/components/styles-item';

  export default {
    name: 'HomeStyles',
    components: {
      StylesItem
    },
    data() {
      return {
        styles: [
          { image: '/images/style-1.jpg', name: 'Живопись', route: '/' },
          { image: '/images/style-2.jpg', name: 'Скульптура', route: '/' },
          { image: '/images/style-3.jpg', name: 'Фотография', route: '/' },
          { image: '/images/style-1.jpg', name: 'Графика', route: '/' },
          { image: '/images/style-1.jpg', name: 'Остальное', route: '/' }
        ]
      };
    }
  };
</script>

<style>
  .home-styles {
    display: grid;
    gap: 100px;
    grid-auto-flow: row;
    padding: 50px 0;
  }
  .home-styles__title {
    margin: 0 0 var(--base-gap) 0;
  }
  .home-styles__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 45px;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }
  .home-styles__item {
    height: 350px;
    list-style: none;
    width: 350px;
  }
  .home-styles__item:nth-child(2) .styles-item,
  .home-styles__item:nth-child(3n + 2) .styles-item {
    transform: translateY(-108px);
  }
  .home-styles__item:nth-child(3n) .styles-item {
    transform: translateY(-283px);
  }

  .home-styles__list_variant_1 .home-styles__item:nth-last-child(1) .styles-item {
    transform: translateY(-283px);
  }

  .home-styles__list_variant_2 .home-styles__item:nth-last-child(2) .styles-item {
    transform: translateY(-108px);
  }
  .home-styles__list_variant_2 .home-styles__item:nth-last-child(1) .styles-item {
    transform: translateY(-283px);
  }
</style>
