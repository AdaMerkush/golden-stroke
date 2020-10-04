<template>
  <div class="home-welcome-slider">
    <div class="home-welcome-slider__viewport">
      <ul
        class="home-welcome-slider__list"
        :style="{
          transform: `translateX(-${value * 100}vw)`,
          width: `${100 * slides.length}%`
        }"
      >
        <li class="home-welcome-slider__item" :key="slideIndex" v-for="(slide, slideIndex) in slides">
          <img class="home-welcome-slider__image" :src="slide.image" />
        </li>
      </ul>
    </div>
    <div class="home-welcome-slider__nav">
      <ol class="home-welcome-slider__nav-list">
        <li class="home-welcome-slider__nav-item" :key="slideIndex" v-for="(slide, slideIndex) in slides">
          <button
            class="home-welcome-slider__button"
            type="button"
            :class="{ 'home-welcome-slider__button_selected': slideIndex === value }"
            @click="$emit('change', slideIndex)"
          />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWelcomeSlider',
    model: {
      event: 'change',
      prop: 'value'
    },
    props: {
      slides: { required: true, type: Array },
      value: { required: true, type: Number }
    }
  };
</script>

<style>
  .home-welcome-slider {
    height: 100%;
    position: relative;
    width: 100%;
  }
  .home-welcome-slider__viewport {
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
  .home-welcome-slider__list {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    transition: transform 500ms ease;
    width: 100%;
    will-change: transform;
  }
  .home-welcome-slider__item {
    height: 100%;
    list-style: none;
    width: 100%;
  }
  .home-welcome-slider__image {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .home-welcome-slider__nav {
    left: calc(50vw - (1140px / 2));
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .home-welcome-slider__nav-list {
    display: inline-grid;
    gap: 15px;
    grid-auto-flow: row;
    margin: 0;
    padding: 0;
  }
  .home-welcome-slider__nav-item {
    list-style: none;
  }
  .home-welcome-slider__button {
    background-color: #fff;
    border: none;
    border-radius: 50%;
    display: block;
    height: 8px;
    opacity: 0.4;
    padding: 0;
    width: 8px;
  }
  .home-welcome-slider__button:focus {
    outline: none;
  }
  .home-welcome-slider__button_selected {
    opacity: 1;
  }
</style>
