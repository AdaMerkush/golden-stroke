<template>
  <div class="app-head-search">
    <form class="app-head-search__form" action="/search" method="GET">
      <label class="app-head-search__label visibility-hidden" for="app-head-search-query">Поисковый запрос</label>
      <svg class="app-head-search__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.7906 22.7761L17.9582 16.9437C19.5227 15.145 20.4699 12.7982 20.4699 10.2333C20.4699 4.58714 15.8775 0 10.2367 0C4.59056 0 0.00341797 4.59246 0.00341797 10.2333C0.00341797 15.8741 4.59588 20.4665 10.2367 20.4665C12.8016 20.4665 15.1484 19.5193 16.9471 17.9548L22.7795 23.7871C22.9178 23.9255 23.1041 24 23.285 24C23.4659 24 23.6522 23.9308 23.7906 23.7871C24.0673 23.5104 24.0673 23.0528 23.7906 22.7761ZM1.4349 10.2333C1.4349 5.38004 5.38346 1.43681 10.2314 1.43681C15.0846 1.43681 19.0278 5.38537 19.0278 10.2333C19.0278 15.0812 15.0846 19.035 10.2314 19.035C5.38346 19.035 1.4349 15.0865 1.4349 10.2333Z"
          fill="currentColor"
        />
      </svg>
      <input
        class="app-head-search__query"
        id="app-head-search-query"
        name="q"
        placeholder="Поиск"
        required
        type="search"
        v-model="query"
      />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AppHeadSearch',
    data() {
      return {
        query: ''
      };
    }
  };
</script>

<style>
  .app-head-search__form {
    position: relative;
    width: 120px;
  }
  .app-head-search__icon {
    color: #fff;
    content: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version="1.1"%20viewBox="0%2F0%2F24%2F24"%20xmlns="http:%2F%2Fwww.w3.org%2F2000%2Fsvg"%3E%3Cpath%20d="M23.7906%2F22.7761L17.9582%2F16.9437C19.5227%2F15.145%2F20.4699%2F12.7982%2F20.4699%2F10.2333C20.4699%2F4.58714%2F15.8775%2F0%2F10.2367%2F0C4.59056%2F0%2F0.00341797%2F4.59246%2F0.00341797%2F10.2333C0.00341797%2F15.8741%2F4.59588%2F20.4665%2F10.2367%2F20.4665C12.8016%2F20.4665%2F15.1484%2F19.5193%2F16.9471%2F17.9548L22.7795%2F23.7871C22.9178%2F23.9255%2F23.1041%2F24%2F23.285%2F24C23.4659%2F24%2F23.6522%2F23.9308%2F23.7906%2F23.7871C24.0673%2F23.5104%2F24.0673%2F23.0528%2F23.7906%2F22.7761ZM1.4349%2F10.2333C1.4349%2F5.38004%2F5.38346%2F1.43681%2F10.2314%2F1.43681C15.0846%2F1.43681%2F19.0278%2F5.38537%2F19.0278%2F10.2333C19.0278%2F15.0812%2F15.0846%2F19.035%2F10.2314%2F19.035C5.38346%2F19.035%2F1.4349%2F15.0865%2F1.4349%2F10.2333Z"%20fill="#fff"%2F%3E%3C%2Fsvg%3E');
    display: block;
    height: 24px;
    left: 8px;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transition: color 500ms ease;
    width: 24px;
  }
  .app-head-search__form:focus-within .app-head-search__icon {
    color: var(--color-gold);
  }
  .app-head-search__query {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    height: 40px;
    padding: 12px 12px 12px 40px;
    transition: background-color 500ms ease, margin 500ms ease, width 500ms ease;
    width: 100%;
  }
  .app-head-search__query::placeholder {
    color: #fff;
  }
  .app-head-search__query:focus {
    background-color: rgba(255, 255, 255, 1);
    cursor: text;
    outline: none;
    width: 338px;
  }
  .app-head-search__query:focus::placeholder {
    color: transparent;
  }
</style>
