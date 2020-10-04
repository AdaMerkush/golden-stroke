<template>
  <div class="app-foot-subscribe">
    <form class="app-foot-subscribe__form" action="/subscribe" method="POST">
      <h4 class="app-foot-subscribe__title">Подпишитесь на E-mail<br />оповещение о важных событиях</h4>
      <input class="app-foot-subscribe__email text-field" name="email" placeholder="Введите свой E-mail" type="email" />
      <button class="app-foot-subscribe__submit button" type="submit">Подписаться</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AppFootSubscribe'
  };
</script>

<style>
  .app-foot-subscribe__title {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    line-height: 27px;
    margin: 0 0 40px 0;
  }
  .app-foot-subscribe__email {
    margin-right: 20px;
    width: 280px;
  }
</style>
