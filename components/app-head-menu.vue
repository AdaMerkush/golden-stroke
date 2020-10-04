<template>
  <nav class="app-head-menu">
    <ul class="app-head-menu__list">
      <li class="app-head-menu__item">
        <button class="app-head-menu__button">Каталог</button>
        <div class="app-head-menu__content">
          <app-head-menu-catalog />
        </div>
      </li>
      <li class="app-head-menu__item">
        <button class="app-head-menu__button">Авторы</button>
        <div class="app-head-menu__content">
          <app-head-menu-authors />
        </div>
      </li>
      <li class="app-head-menu__item">
        <button class="app-head-menu__button">О галерее</button>
        <div class="app-head-menu__content">
          <app-head-menu-about />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
  import AppHeadMenuAbout from '@/components/app-head-menu-about';
  import AppHeadMenuAuthors from '@/components/app-head-menu-authors';
  import AppHeadMenuCatalog from '@/components/app-head-menu-catalog';

  export default {
    name: 'AppHeadMenu',
    components: {
      AppHeadMenuAbout,
      AppHeadMenuAuthors,
      AppHeadMenuCatalog
    },
    data() {
      return {
        isShowAbout: false,
        isShowAuthors: false,
        isShowCatalog: false
      };
    },
    methods: {
      toggleAbout() {
        this.isShowAbout = !this.isShowAbout;
        this.isShowAuthors = false;
        this.isShowCatalog = false;
      },
      toggleAuthors() {
        this.isShowAbout = false;
        this.isShowAuthors = !this.isShowAuthors;
        this.isShowCatalog = false;
      },
      toggleCatalog() {
        this.isShowAbout = false;
        this.isShowAuthors = false;
        this.isShowCatalog = !this.isShowCatalog;
      }
    }
  };
</script>

<style>
  .app-head-menu__list {
    display: grid;
    gap: var(--base-gap);
    grid-auto-flow: column;
    margin: 0;
    padding: 0;
  }
  .app-head-menu__item {
    list-style: none;
  }
  .app-head-menu__button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 24px;
    margin: 0 -8px;
    padding: 8px 34px 8px 8px;
    position: relative;
    text-decoration: none;
  }
  .app-head-menu__button::after {
    background: transparent url('../assets/images/icon-arrow.svg') 50% 50% no-repeat;
    content: '';
    display: inline-block;
    height: 12px;
    position: absolute;
    right: 8px;
    top: calc(50% - 6px);
    transition: transform 500ms ease;
    width: 12px;
  }
  .app-head-menu__content {
    --menu-content-width: 1140px;

    background-color: var(--color-black-light);
    border-radius: 0 0 var(--base-radius) var(--base-radius);
    height: 520px;
    left: calc(50% - (var(--menu-content-width) / 2));
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: opacity 500ms ease, visibility 500ms ease;
    visibility: hidden;
    width: var(--menu-content-width);
  }

  .app-head-menu__item:hover .app-head-menu__button::after,
  .app-head-menu__item:focus-within .app-head-menu__button::after {
    transform: rotate(180deg);
  }

  .app-head-menu__item:hover .app-head-menu__content,
  .app-head-menu__item:focus-within .app-head-menu__content {
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  }
</style>
