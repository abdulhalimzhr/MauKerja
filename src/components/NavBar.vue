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
              {{ $t('allJob') }}
            </router-link>
          </li>
          <li>
            <a href="#" class="navbar__link-item">{{ $t('tools') }}</a>
          </li>
          <li>
            <a href="#" class="navbar__link-item">{{ $t('help') }}</a>
          </li>
          <li>
            <a href="#" class="navbar__link-item">{{ $t('blog') }}</a>
          </li>
          <li class="navbar__btn-switch navbar__btn-switch--mobile p-4">
            <button
              type="button"
              @click="toggleDarkMode"
              class="btn__toggle-switch"
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
            <button
              class="btn-locale"
              :class="
                currentLocale == 'en' ? 'btn-locale--ms' : 'btn-locale--en'
              "
              @click="toggleLanguage"
            ></button>
          </li>
        </ul>
      </div>
      <div class="navbar__btn-switch p-4">
        <button
          type="button"
          @click="toggleDarkMode"
          class="btn__toggle-switch"
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
        <button
          class="btn-locale"
          :class="currentLocale == 'en' ? 'btn-locale--ms' : 'btn-locale--en'"
          @click="toggleLanguage"
        ></button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });

const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true' || false);
const currentLocale = ref(localStorage.getItem('locale') || 'en');

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

const toggleLanguage = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'ms' : 'en';
  locale.value = currentLocale.value;
  localStorage.setItem('locale', currentLocale.value);
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
    @apply md:w-1/6 mt-auto;
    @apply hidden md:flex md:items-center md:justify-end;
    @apply items-center justify-center;

    &--mobile {
      @apply flex md:hidden;
    }
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
    @apply dark:bg-gray-500 dark:text-white bg-gray-200;
    @apply relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent;
    @apply transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1;
  }

  &-locale {
    @apply bg-white hover:bg-blue-200 py-3 px-3 rounded-full ml-4;

    &--ms {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd' viewBox='0 0 512 512'%3E%3Cpath fill='%23999' fill-rule='nonzero' d='M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z'/%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z'/%3E%3Cpath fill='none' d='m239.83 471.81-.47-.03-2.34-.22C127.44 460.42 41.96 367.91 41.96 255.41c0-85.69 49.6-159.77 121.65-195.14 28.03-13.25 59.34-20.68 92.39-20.68 119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-5.44 0-10.81-.2-16.17-.6z'/%3E%3Cpath fill='%23CC0001' fill-rule='nonzero' d='M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z'/%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M156.47 448.2h199.06c-29.8 15.45-63.64 24.21-99.53 24.21-35.88 0-69.72-8.76-99.53-24.21zm-74.89-64.11h348.84a219.606 219.606 0 0 1-28.86 32.06H110.45a219.674 219.674 0 0 1-28.87-32.06zm-32.37-64.1h413.58c-3.43 11.1-7.76 21.8-12.84 32.05H62.06a215.431 215.431 0 0 1-12.85-32.05zm-9.61-64.22h432.81v.22c0 10.82-.8 21.45-2.33 31.84H41.93a217.052 217.052 0 0 1-2.33-31.84v-.22zm9.71-64.1H462.7a214 214 0 0 1 7.32 32.05H41.99c1.63-10.98 4.09-21.68 7.32-32.05zm32.53-64.11h348.33c7.43 10.06 14 20.78 19.62 32.05H62.22a216.782 216.782 0 0 1 19.62-32.05zm75.28-64.1h197.77a216.855 216.855 0 0 1 46.29 32.05H110.83a216.855 216.855 0 0 1 46.29-32.05z'/%3E%3Cpath fill='%23010066' fill-rule='nonzero' d='M274.63 40.4v215.37H39.6C39.73 136.35 136.57 39.59 256 39.59c6.28 0 12.48.29 18.63.81z'/%3E%3Cpath fill='%23FC0' fill-rule='nonzero' d='M159.34 115.46c-29.22 0-53.01 23.65-53.01 52.8 0 29.16 23.79 52.81 53.01 52.81 10.55 0 20.41-3.11 28.65-8.37a47.783 47.783 0 0 1-15.38 2.53c-25.91 0-47-20.97-47-46.86 0-25.83 21-46.83 47-46.83 5.73 0 11.26 1.03 16.33 2.93-8.44-5.7-18.6-9.01-29.6-9.01zm87.87 80.32-22.29-11.64 6.62 23.84-14.94-19.96-4.65 24.28-4.63-24.28-14.93 19.91 6.67-23.85-22.36 11.56 16.56-18.61-25.27.95 23.26-9.72-23.26-9.85 25.35 1.03-16.6-18.69 22.32 11.69-6.54-23.83 14.87 19.89 4.72-24.26 4.54 24.32 14.98-19.95-6.63 23.83 22.36-11.55-16.66 18.6 25.29-.94-23.27 9.79 23.27 9.79-25.29-1.03 16.51 18.68z'/%3E%3C/svg%3E");
    }

    &--en {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd' viewBox='0 0 512 512'%3E%3Cg fill-rule='nonzero'%3E%3Cpath fill='%23999' d='M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z'/%3E%3Cpath fill='%23fff' d='M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z'/%3E%3Cpath fill='%23FEFEFE' d='M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z'/%3E%3Cpath fill='%23012169' d='M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z'/%3E%3Cpath fill='%23C8102E' d='M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z'/%3E%3C/g%3E%3C/svg%3E");
    }
  }
}
</style>
