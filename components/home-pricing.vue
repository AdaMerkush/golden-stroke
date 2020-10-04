<template>
  <section class="home-pricing">
    <div class="home-pricing__head container">
      <h2 class="home-pricing__title h2">Смотрите картины по цене</h2>
    </div>
    <div class="home-pricing__body container">
      <ul class="home-pricing__list">
        <li class="home-pricing__item" :key="price.title" v-for="price in pricing">
          <pricing-item :image="price.image" :route="price.route" :title="price.title" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import PricingItem from '@/components/pricing-item';

  export default {
    name: 'HomePricing',
    components: {
      PricingItem
    },
    data() {
      return {
        pricing: [
          { image: '/images/pricing-1.jpg', route: '/', title: 'до <strong>50 000</strong> RUB' },
          { image: '/images/pricing-2.jpg', route: '/', title: 'до <strong>200 000</strong> RUB' },
          { image: '/images/pricing-3.jpg', route: '/', title: 'до <strong>1 000 000</strong> RUB' },
          { image: '/images/pricing-4.jpg', route: '/', title: 'от <strong>1 000 000</strong> RUB' }
        ]
      };
    }
  };
</script>

<style>
  .home-pricing {
    display: grid;
    gap: var(--base-gap);
    grid-auto-flow: row;
    padding: 50px 0;
  }
  .home-pricing__head {
    text-align: center;
  }
  .home-pricing__title {
    margin: 0;
  }
  .home-pricing__list {
    display: grid;
    gap: var(--base-gap);
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
    padding: 0;
  }
  .home-pricing__item {
    list-style: none;
  }
</style>
