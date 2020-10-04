<template>
  <div class="pricing-item">
    <img class="pricing-item__image" :src="image" />
    <div class="pricing-item__content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h5 class="pricing-item__title" v-html="title" />
      <nuxt-link class="pricing-item__link" :to="route" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PricingItem',
    props: {
      image: { required: true, type: String },
      route: { required: true, type: String },
      title: { required: true, type: String }
    }
  };
</script>

<style>
  .pricing-item {
    border: 5px solid var(--color-black-light);
    min-height: 520px;
    overflow: hidden;
    position: relative;
  }
  .pricing-item__image {
    height: 100%;
    object-fit: contain;
    object-position: top center;
    width: 100%;
  }
  .pricing-item__content {
    background: transparent url('../assets/images/background-authors-item-content.svg') top center / cover no-repeat;
    bottom: 0;
    left: 0;
    min-height: 130px;
    padding: 70px 15px 15px 15px;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 1;
  }
  .pricing-item__title {
    color: var(--color-gold);
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    margin: 0 0 10px 0;
    text-align: center;
  }
  .pricing-item__title strong {
    font-size: 20px;
  }
  .pricing-item__link {
    color: var(--color-gold);
    display: block;
    font-size: 16px;
    line-height: 22px;
    position: relative;
    text-align: center;
    text-decoration: none;
  }
  .pricing-item__link::before {
    bottom: -1000px;
    content: '';
    left: -1000px;
    position: absolute;
    right: -1000px;
    top: -1000px;
  }
  .pricing-item__link::after {
    content: url('../assets/images/icon-link-arrow-white.svg');
    display: block;
    height: 18px;
  }
</style>
