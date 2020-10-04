<template>
  <div class="app">
    <app-head class="app__head" />
    <app-body class="app__body" />
    <app-foot class="app__foot" />
  </div>
</template>

<script>
  import AppBody from '@/components/app-body';
  import AppFoot from '@/components/app-foot';
  import AppHead from '@/components/app-head';

  export default {
    name: 'App',
    components: {
      AppBody,
      AppFoot,
      AppHead
    }
  };
</script>

<style>
  .app {
    display: grid;
    grid-template-areas:
      'head'
      'body'
      'foot';
    grid-template-columns: 100vw;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100vh;
  }
  .app__head {
    grid-area: head;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .app__body {
    grid-area: body;
  }
  .app__foot {
    grid-area: foot;
  }
</style>
