<template>
  <section class="home">
    <div class="container mx-auto xl:px-72 py-10">
      <job-card :job="job" :desc="true" v-for="(job, i) in jobs" :key="i" />
    </div>
  </section>
</template>

<script setup lang="ts">
import JobCard from '@/components/JobCard.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const jobs = computed(() => store.state.jobs);

onMounted(() => {
  store.dispatch('getJobs');
});
</script>

<style lang="scss" scoped>
.home {
  @apply h-full;
}
</style>
