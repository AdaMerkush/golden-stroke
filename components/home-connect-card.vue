<template>
  <div class="home-connect-card">
    <h2 class="home-connect-card__title h2">
      Получите бесплатную<br />
      консультацию от наших<br />
      экспертов арт-консультантов
    </h2>
    <p class="home-connect-card__intro p">
      Откройте для себя нашу онлайн-галерею<br />
      с бесплатной консультацией!
    </p>
    <nuxt-link class="button" to="/catalog">Связаться</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeConnectCard'
  };
</script>

<style>
  .home-connect-card {
    background-color: var(--color-black-light);
    border-radius: var(--base-radius);
    padding: 70px 60px 30px 60px;
  }
  .home-connect-card__title {
    color: #fff;
    margin: 0 0 20px 0;
  }
  .home-connect-card__intro {
    color: #fff;
    margin: 0 0 40px 0;
  }
</style>
