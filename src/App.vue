<template>
  <header>
    <nav-bar />
  </header>
  <main class="flex-grow min-h-screen">
    <search-bar />
    <router-view :key="$route.fullPath" />
  </main>
  <footer-section />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';
import { onMounted } from 'vue';
import FooterSection from './components/FooterSection.vue';

onMounted(() => {
  document.title = 'Mau Kerja - Find your dream job';

  if (localStorage.getItem('locale') === null) {
    localStorage.setItem('locale', 'en');
  }
});
</script>

<style lang="scss">
*,
h1,
h2,
h3 {
  font-family: 'Open Sans';
}

h1 {
  @apply font-bold #{!important};
  color: #414141;
  font-size: 16pt;
}

h2 {
  @apply font-normal #{!important};
  color: #414141;
  font-size: 12pt;
}

h3 {
  @apply font-normal #{!important};
  color: #b2b2b2;
  font-size: 11pt;
}

#app {
  background-color: #f5f5f5;
  @apply min-h-screen dark:bg-gray-900;
}
</style>
