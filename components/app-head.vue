<template>
  <header class="app-head">
    <div class="app-head__content">
      <app-head-logo class="app-head__logo" />
      <app-head-menu class="app-head__menu" />
      <app-head-locale class="app-head__locale" />
      <app-head-search class="app-head__search" />
      <app-head-auth class="app-head__auth" />
      <app-head-cart class="app-head__cart" />
    </div>
  </header>
</template>

<script>
  import AppHeadAuth from '@/components/app-head-auth';
  import AppHeadCart from '@/components/app-head-cart';
  import AppHeadLocale from '@/components/app-head-locale';
  import AppHeadLogo from '@/components/app-head-logo';
  import AppHeadMenu from '@/components/app-head-menu';
  import AppHeadSearch from '@/components/app-head-search';

  export default {
    name: 'AppHead',
    components: {
      AppHeadAuth,
      AppHeadCart,
      AppHeadLocale,
      AppHeadLogo,
      AppHeadMenu,
      AppHeadSearch
    }
  };
</script>

<style>
  .app-head {
    background-color: var(--color-black-light);
  }
  .app-head__content {
    align-items: center;
    display: grid;
    gap: var(--base-gap);
    grid-template-areas: 'logo . menu . locale search auth cart';
    grid-template-columns: max-content 1fr max-content 130px max-content max-content max-content max-content;
    margin: 0 auto;
    max-width: 1668px; /* 1620px + 48px for padding */
    min-height: 80px;
    padding: 16px 24px;
    position: relative;
  }
  .app-head__logo {
    grid-area: logo;
  }
  .app-head__menu {
    grid-area: menu;
  }
  .app-head__locale {
    grid-area: locale;
  }
  .app-head__search {
    grid-area: search;
  }
  .app-head__auth {
    grid-area: auth;
  }
  .app-head__cart {
    grid-area: cart;
  }
</style>
