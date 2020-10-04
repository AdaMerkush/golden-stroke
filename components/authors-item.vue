<template>
  <div class="authors-item">
    <img class="authors-item__image" :src="image" />
    <div class="authors-item__content">
      <h5 class="authors-item__name">{{ name }}</h5>
      <p class="authors-item__profession">{{ profession }}</p>
      <p class="authors-item__country">{{ country }}</p>
      <nuxt-link class="authors-item__link" :to="route" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthorsItem',
    props: {
      country: { required: true, type: String },
      image: { required: true, type: String },
      name: { required: true, type: String },
      profession: { required: true, type: String },
      route: { required: true, type: String }
    }
  };
</script>

<style>
  .authors-item {
    border-radius: var(--base-radius);
    min-height: 360px;
    overflow: hidden;
    position: relative;
  }
  .authors-item__image {
    height: 100%;
    object-fit: contain;
    object-position: top center;
    width: 100%;
  }
  .authors-item__content {
    background: transparent url('../assets/images/background-authors-item-content.svg') top center / cover no-repeat;
    bottom: 0;
    left: 0;
    min-height: 170px;
    padding: 42px 20px 20px 20px;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .authors-item__name {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    margin: 0 0 10px 0;
    width: 100px; /* Для принудительного переноса фамилии на 2 строку */
  }
  .authors-item__profession {
    color: #fff;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
  .authors-item__country {
    color: #fff;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
  .authors-item__link {
    bottom: 20px;
    color: var(--color-gold);
    display: block;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    right: 20px;
    text-decoration: none;
  }
  .authors-item__link::before {
    bottom: -1000px;
    content: '';
    left: -1000px;
    position: absolute;
    right: -1000px;
    top: -1000px;
  }
  .authors-item__link::after {
    content: url('../assets/images/icon-link-arrow-gold.svg');
    display: block;
    height: 18px;
  }
</style>
