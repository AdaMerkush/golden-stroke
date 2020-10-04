<template>
  <div class="app-head-logo">
    <nuxt-link class="app-head-logo__link" to="/">
      <img class="app-head-logo__image" src="@/assets/images/logo.png" />
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'AppHeadLogo'
  };
</script>

<style>
  .app-head-logo__link {
    cursor: pointer;
    display: block;
  }
  .app-head-logo__image {
    display: block;
  }
</style>
