<template>
  <section class="home">
    <div class="container mx-auto xl:px-72 py-10" v-if="jobs.length > 0">
      <job-card :job="job" :desc="true" v-for="(job, i) in jobs" :key="i" />
    </div>
    <div class="container mx-auto xl:px-72 py-10" v-else>
      <div class="flex justify-center items-center">
        <h1 class="dark:text-white">{{ $t('searchNotFound') }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import JobCard from '@/components/JobCard.vue';
import router from '@/router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const jobs = computed(() => store.state.jobs || null);
const isSearch = computed(
  () => Object.keys(router.currentRoute.value.query).length > 0
);

const checkSearch = () => {
  const { query } = router.currentRoute.value;

  if (Object.keys(query).length > 0) {
    const { jobTitle, location, salary } = query;

    const parsedSalary = salary ? JSON.parse(salary) : salary;

    store.dispatch('filterJobs', {
      jobTitle,
      location,
      salary: parsedSalary
    });
  }
};

onMounted(() => {
  if (!isSearch.value) {
    store.dispatch('getJobs');
  }

  checkSearch();
});
</script>

<style lang="scss" scoped>
.home {
  @apply h-full;
}
</style>
