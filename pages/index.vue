<template>
  <div class="index-page">
    <home-welcome />
    <home-new-arrivals />
    <home-styles />
    <home-pricing />
    <home-genres />
    <home-new-authors />
    <home-connect />
  </div>
</template>

<script>
  import HomeConnect from '@/components/home-connect';
  import HomeGenres from '@/components/home-genres';
  import HomeNewArrivals from '@/components/home-new-arrivals';
  import HomeNewAuthors from '@/components/home-new-authors';
  import HomePricing from '@/components/home-pricing';
  import HomeStyles from '@/components/home-styles';
  import HomeWelcome from '@/components/home-welcome';

  export default {
    name: 'IndexPage',
    components: {
      HomeConnect,
      HomeGenres,
      HomeNewArrivals,
      HomeNewAuthors,
      HomePricing,
      HomeStyles,
      HomeWelcome
    }
  };
</script>
