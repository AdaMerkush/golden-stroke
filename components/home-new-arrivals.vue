<template>
  <section class="home-new-arrivals">
    <div class="home-new-arrivals__head">
      <h2 class="home-new-arrivals__title h2">Новые поступления</h2>
    </div>
    <div class="home-new-arrivals__body">
      <client-only>
        <slick ref="slick" :options="slickOptions">
          <div class="home-new-arrivals__item" :key="paintingIndex" v-for="(painting, paintingIndex) in paintings">
            <paintings-item
              :author="painting.author"
              :image="painting.image"
              :route="painting.route"
              :title="painting.title"
            />
          </div>
        </slick>
      </client-only>

      <button class="home-new-arrivals__prev" type="button" @click="prev" />
      <button class="home-new-arrivals__next" type="button" @click="next" />
    </div>
  </section>
</template>

<script>
  import PaintingsItem from '@/components/paintings-item';

  export default {
    name: 'HomeNewArrivals',
    components: {
      PaintingsItem
    },
    data() {
      return {
        paintings: [
          { author: 'Александр Александрович', image: '/images/painting-1.jpg', route: '/', title: 'Пейзаж' },
          { author: 'Реми Меир', image: '/images/painting-2.jpg', route: '/', title: 'Драгоценное время' },
          { author: 'Александр Александрович', image: '/images/painting-3.jpg', route: '/', title: 'Пейзаж' },
          { author: 'Реми Меир', image: '/images/painting-4.jpg', route: '/', title: 'Драгоценное время' },
          { author: 'Радригес Хола', image: '/images/painting-5.jpg', route: '/', title: 'Ты счастлив?' }
        ],
        slickOptions: {
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      };
    },
    methods: {
      next() {
        this.$refs.slick.next();
      },
      prev() {
        this.$refs.slick.prev();
      }
    }
  };
</script>

<style>
  .home-new-arrivals {
    padding: 50px 0;
  }
  .home-new-arrivals__body {
    position: relative;
  }
  .home-new-arrivals__title {
    margin: 0 0 40px 0;
    text-align: center;
  }
  .home-new-arrivals__item {
    padding: 0 25px;
  }
  .home-new-arrivals__prev,
  .home-new-arrivals__next {
    background-color: var(--color-black-light);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    height: 54px;
    position: absolute;
    top: calc(180px - 27px);
    width: 54px;
    z-index: 1;
  }
  .home-new-arrivals__prev {
    background-image: url('../assets/images/icon-arrow-left.svg');
    left: calc(50vw - (1140px / 2));
  }
  .home-new-arrivals__next {
    background-image: url('../assets/images/icon-arrow-right.svg');
    right: calc(50vw - (1140px / 2));
  }
  .home-new-arrivals__prev:focus,
  .home-new-arrivals__next:focus {
    outline: none;
  }
</style>
