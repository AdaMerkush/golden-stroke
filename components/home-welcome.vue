<template>
  <section class="home-welcome">
    <home-welcome-slider class="home-welcome__slider" :slides="slides" v-model="currentSlide" />
    <home-welcome-card class="home-welcome__card" :slides="slides" v-model="currentSlide" />
  </section>
</template>

<script>
  import HomeWelcomeCard from '@/components/home-welcome-card';
  import HomeWelcomeSlider from '@/components/home-welcome-slider';

  export default {
    name: 'HomeWelcome',
    components: {
      HomeWelcomeCard,
      HomeWelcomeSlider
    },
    data() {
      return {
        currentSlide: 0,
        slides: [
          { image: '/images/welcome-slide-1.jpg' },
          { image: '/images/welcome-slide-2.jpg' },
          { image: '/images/welcome-slide-3.jpg' },
          { image: '/images/welcome-slide-4.jpg' }
        ]
      };
    }
  };
</script>

<style>
  .home-welcome {
    padding-bottom: 169px;
    position: relative;
  }
  .home-welcome__slider {
    background-color: var(--color-gold);
    height: 728px;
    padding-bottom: 48px;
  }
  .home-welcome__card {
    bottom: 50px;
    position: absolute;
    right: calc(50vw - (1140px / 2));
    width: 821px;
    z-index: 1;
  }
</style>
