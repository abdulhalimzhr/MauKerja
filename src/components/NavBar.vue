<template>
  <nav class="navbar border-gray-200 dark:bg-gray-900">
    <div class="navbar__wrapper">
      <div class="navbar__logo">
        <div
          class="flex items-center cursor-pointer"
          @click="
            () => {
              router.push('/');
            }
          "
        >
          <img
            :src="require('@/assets/maukerja-logo.png')"
            class="h-8 mr-3"
            alt="mau kerja"
          />
        </div>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="navbar__btn-mobile-menu"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="navbar__links-wrapper hidden" id="navbar-default">
        <ul class="navbar__links">
          <li>
            <router-link :to="'/'" :class="'navbar__link-item'">
              All Job
            </router-link>
          </li>
          <li>
            <a href="#" class="navbar__link-item">Tools</a>
          </li>
          <li>
            <a href="#" class="navbar__link-item">Help</a>
          </li>
          <li>
            <a href="#" class="navbar__link-item">Blog</a>
          </li>
        </ul>
      </div>
      <div class="navbar__btn-switch p-4">
        <button
          type="button"
          @click="toggleDarkMode"
          class="btn__toggle-switch dark:bg-gray-500 dark:text-white bg-gray-200"
          role="switch"
          aria-checked="false"
        >
          <span class="sr-only">Dark mode toggle</span>
          <span
            :class="
              isDarkMode
                ? 'translate-x-5 bg-gray-700'
                : 'translate-x-0 bg-white'
            "
            class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
          >
            <span
              :class="
                isDarkMode
                  ? 'opacity-0 ease-out duration-100'
                  : 'opacity-100 ease-in duration-200'
              "
              class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              aria-hidden="true"
            >
              <i class="fa-solid fa-moon"></i>
            </span>
            <span
              :class="
                isDarkMode
                  ? 'opacity-100 ease-in duration-200'
                  : 'opacity-0 ease-out duration-100'
              "
              class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              aria-hidden="true"
            >
              <i class="fa-solid fa-sun"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, watch } from 'vue';
import { ref } from 'vue';

const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true' || false);

const toggleMobileMenu = () => {
  const navbar = document.getElementById('navbar-default');
  const btnMobileMenu = document.querySelector('.navbar__btn-mobile-menu');

  if (navbar?.classList.contains('hidden')) {
    navbar?.classList.remove('hidden');
    btnMobileMenu?.setAttribute('aria-expanded', 'true');
  } else {
    navbar?.classList.add('hidden');
    btnMobileMenu?.setAttribute('aria-expanded', 'false');
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('isDarkMode', String(isDarkMode.value));
  checkDarkMode(isDarkMode.value);
};

const checkDarkMode = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

watch(isDarkMode, (newValue) => {
  checkDarkMode(newValue);
});

onMounted(() => {
  checkDarkMode(isDarkMode.value);
});
</script>

<style lang="scss" scoped>
a {
  font-family: 'PT Sans';
  @apply font-semibold;
}
.navbar {
  background-color: #e23f5a;

  &__logo {
    @apply md:w-1/6;
  }

  &__wrapper {
    @apply w-full max-w-screen-xl flex flex-wrap items-center md:justify-start justify-between mx-auto md:px-16 lg:px-10 px-5;
  }

  &__btn-mobile-menu {
    @apply inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-white focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-600;
  }

  &__btn-switch {
    @apply hidden md:block md:w-1/6 mt-auto;
  }

  &__links {
    &-wrapper {
      @apply w-full md:flex md:w-4/6 mb-8 md:mb-0;
    }

    @apply font-medium flex flex-col p-4 md:p-0 mt-4 border-gray-100;
    @apply md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700;

    a {
      @apply block py-5 pl-3 pr-4 text-white h-full;
    }
  }

  &__link-item {
    @apply block py-5 pl-3 pr-4 text-white;

    &--active {
      background-color: #be2c43;
      @apply dark:bg-gray-600;
    }
  }
}
.btn {
  &__toggle-switch {
    @apply relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent;
    @apply transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1;
  }
}
</style>
