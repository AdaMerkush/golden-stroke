<template>
  <div class="paintings-item">
    <div class="paintings-item__head">
      <img class="paintings-item__image" :src="image" />
      <button class="paintings-item__cart" />
      <button class="paintings-item__favorite" />
      <span class="paintings-item__new">New</span>
    </div>
    <div class="paintings-item__body">
      <h5 class="paintings-item__author">{{ author }}</h5>
      <p class="paintings-item__title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaintingsItem',
    props: {
      author: { required: true, type: String },
      image: { required: true, type: String },
      route: { required: true, type: String },
      title: { required: true, type: String }
    }
  };
</script>

<style>
  .paintings-item__head {
    position: relative;
  }
  .paintings-item__body {
    margin-top: 20px;
  }
  .paintings-item__image {
    border: 5px solid var(--color-black-light);
    height: 361px;
  }
  .paintings-item__author {
    color: #4a4a4a;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    margin: 0;
  }
  .paintings-item__title {
    color: #4a4a4a;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }

  .paintings-item__cart {
    background: var(--color-black-light) url('../assets/images/icon-cart.svg') 50% 50% no-repeat;
    border: none;
    border-radius: 50%;
    height: 32px;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 32px;
  }
  .paintings-item__favorite {
    background: var(--color-black-light) url('../assets/images/icon-favorite.svg') 50% 50% no-repeat;
    border: none;
    border-radius: 50%;
    height: 32px;
    position: absolute;
    right: 62px;
    top: 20px;
    width: 32px;
  }
  .paintings-item__new {
    background: var(--color-gold);
    border-radius: 0 20px 0 0;
    bottom: 5px;
    color: #fff;
    font-size: 16px;
    height: 32px;
    left: 5px;
    line-height: 22px;
    padding: 5px;
    position: absolute;
    text-align: center;
    width: 76px;
  }
</style>
