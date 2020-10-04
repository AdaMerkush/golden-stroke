<template>
  <section class="home-new-authors">
    <div class="home-new-authors__head container">
      <h2 class="home-new-authors__title h2">Новые авторы</h2>
    </div>
    <div class="home-new-authors__body container">
      <ul class="home-new-authors__list">
        <li class="home-new-authors__item" :key="author.name" v-for="author in authors">
          <authors-item
            :country="author.country"
            :image="author.image"
            :name="author.name"
            :profession="author.profession"
            :route="author.route"
          />
        </li>
      </ul>
    </div>
    <div class="home-new-authors__foot container">
      <nuxt-link class="button button_ghost" to="/authors">Смотреть всех</nuxt-link>
    </div>
  </section>
</template>

<script>
  import AuthorsItem from '@/components/authors-item';

  export default {
    name: 'HomeNewAuthors',
    components: {
      AuthorsItem
    },
    data() {
      return {
        authors: [
          { country: 'Израиль', image: '/images/author-1.jpg', name: 'Реми Меир', profession: 'Художник', route: '/' },
          {
            country: 'Россия',
            image: '/images/author-2.jpg',
            name: 'Александр Александрович',
            profession: 'Скульптор',
            route: '/'
          },
          {
            country: 'Украина',
            image: '/images/author-3.jpg',
            name: 'Богдан Богданович',
            profession: 'Фотограф',
            route: '/'
          },
          {
            country: 'Испания',
            image: '/images/author-4.jpg',
            name: 'Николя Фернандес',
            profession: 'Художник',
            route: '/'
          }
        ]
      };
    }
  };
</script>

<style>
  .home-new-authors {
    display: grid;
    gap: var(--base-gap);
    grid-auto-flow: row;
    padding: 50px 0;
  }
  .home-new-authors__head {
    text-align: center;
  }
  .home-new-authors__foot {
    text-align: center;
  }
  .home-new-authors__title {
    margin: 0;
  }
  .home-new-authors__list {
    display: grid;
    gap: var(--base-gap);
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
    padding: 0;
  }
  .home-new-authors__item {
    list-style: none;
  }
</style>
