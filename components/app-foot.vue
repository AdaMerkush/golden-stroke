<template>
  <footer class="app-foot">
    <div class="app-foot__content">
      <app-foot-subscribe class="app-foot__subscribe" />
    </div>
  </footer>
</template>

<script>
  import AppFootSubscribe from '@/components/app-foot-subscribe';
  export default {
    name: 'AppFoot',
    components: { AppFootSubscribe }
  };
</script>

<style>
  .app-foot {
    background-color: var(--color-black-light);
  }
  .app-foot__content {
    align-items: center;
    display: grid;
    margin: 0 auto;
    max-width: 1188px; /* 1140px + 48px for padding */
    min-height: 500px;
    padding: 24px;
  }
</style>
