<template>
  <nav-bar />
  <search-bar />
  <router-view />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<style lang="scss">
*,
h1,
h2,
h3 {
  font-family: 'Open Sans';
}

h1 {
  @apply font-bold;
  color: #414141;
  font-size: 16pt;
}

h2 {
  @apply font-normal;
  color: #414141;
  font-size: 12pt;
}

h3 {
  @apply font-normal;
  color: #b2b2b2;
  font-size: 11pt;
}

#app {
  background-color: #f5f5f5;
  @apply min-h-screen dark:bg-gray-900;
}
</style>
