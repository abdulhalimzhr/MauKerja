<template>
  <section class="job-detail" v-if="job !== null">
    <div class="container mx-auto xl:px-72 py-10">
      <job-detail :job="job" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '@/router';
import store from '@/store';
import JobDetail from '@/components/JobDetail.vue';
import { JobType } from '../types/jobTypes';

const job = ref<null | JobType>(null);

const fetchJob = async () => {
  const jobId = router.currentRoute.value.params.id;
  await store.dispatch('getJobById', jobId);

  job.value = store.state.job;
};

onMounted(() => {
  fetchJob();
});
</script>
