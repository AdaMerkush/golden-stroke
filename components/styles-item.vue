<template>
  <div class="styles-item">
    <img class="styles-item__image" :src="image" />
    <div class="styles-item__content">
      <h5 class="styles-item__name">{{ name }}</h5>
      <nuxt-link class="styles-item__link" :to="route">Смотреть</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StylesItem',
    props: {
      image: { required: true, type: String },
      name: { required: true, type: String },
      route: { required: true, type: String }
    }
  };
</script>

<style>
  .styles-item {
    background: #eee;
    border: 5px solid var(--color-black-light);
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .styles-item__image {
    height: 100%;
    object-fit: contain;
    object-position: top center;
    width: 100%;
  }
  .styles-item__content {
    background: transparent url('../assets/images/background-authors-item-content.svg') top center / cover no-repeat;
    bottom: 0;
    left: 0;
    min-height: 100px;
    padding: 65px 15px 15px 15px;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .styles-item__name {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    margin: 0;
  }
  .styles-item__link {
    color: var(--color-gold);
    display: block;
    font-size: 16px;
    line-height: 22px;
    position: relative;
    text-decoration: none;
  }
  .styles-item__link::before {
    bottom: -1000px;
    content: '';
    left: -1000px;
    position: absolute;
    right: -1000px;
    top: -1000px;
  }
  .styles-item__link::after {
    bottom: 0;
    content: url('../assets/images/icon-link-arrow-gold.svg');
    display: block;
    height: 18px;
    position: absolute;
    right: 0;
  }
</style>
