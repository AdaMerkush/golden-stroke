<template>
  <section class="home-genres">
    <h2 class="home-genres__title h2 visibility-hidden">Категории</h2>
    <ul class="home-genres__list">
      <li class="home-genres__item" :key="genre.route" v-for="(genre, genreIndex) in categories">
        <home-genres-item :image="genre.image" :order="genreIndex + 1" :route="genre.route" :title="genre.title" />
      </li>
    </ul>
  </section>
</template>

<script>
  import HomeGenresItem from '@/components/home-genres-item';

  export default {
    name: 'HomeGenres',
    components: {
      HomeGenresItem
    },
    data() {
      return {
        categories: [
          { image: '/images/genres-1.jpg', route: '/catalog/1', title: 'Портреты' },
          { image: '/images/genres-2.jpg', route: '/catalog/2', title: 'Пейзажи' },
          { image: '/images/genres-3.jpg', route: '/catalog/3', title: 'Бытовые' },
          { image: '/images/genres-all.jpg', route: '/catalog/4', title: 'Все жанры' }
        ]
      };
    }
  };
</script>

<style>
  .home-genres {
    padding: 50px 0;
  }
  .home-genres__list {
    margin: 0;
    padding: 0;
  }
  .home-genres__item {
    list-style: none;
  }
</style>
