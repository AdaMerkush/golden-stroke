<template>
  <section class="home-connect">
    <home-connect-card class="home-connect__card" />
  </section>
</template>

<script>
  import HomeConnectCard from '@/components/home-connect-card';
  export default {
    name: 'HomeConnect',
    components: { HomeConnectCard }
  };
</script>

<style>
  .home-connect {
    background: var(--color-grey) url('../assets/images/background-home-connect.jpg') 50% 50% / cover no-repeat;
    background-clip: content-box;
    min-height: 673px;
    padding-top: 173px;
    position: relative;
  }
  .home-connect__card {
    left: calc(50vw - (1140px / 2));
    position: absolute;
    top: 50px;
    width: 661px;
    z-index: 1;
  }
</style>
