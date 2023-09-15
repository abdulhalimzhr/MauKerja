<template>
  <section v-if="Object.keys(job).length > 0">
    <article class="job-card">
      <div class="job-card__header-image-wrapper">
        <!-- There is no header image from the API, so all i have is this icon image :) -->
        <img
          class="job-card__header-image"
          :src="props.job.company.logo"
          :alt="props.job.company.name"
        />
      </div>
      <div class="job-card__content">
        <div class="job-card__company">
          <div class="job-card__company-logo-wrapper">
            <img
              class="job-card__company-logo"
              :src="props.job.company.logo"
              :alt="props.job.company.name"
            />
          </div>
          <div class="job-card__company-detail">
            <h1 class="job-card__company-detail--position">
              {{ props.job.title }}
            </h1>
            <p class="job-card__company-detail--name">
              {{ props.job.company.name }}
            </p>
          </div>
        </div>
        <div class="job-card__company-points">
          <div class="w-1/2">
            <div class="point-left">
              <i class="fa fa-money-bill-wave"></i>
              <p>
                {{
                  `${props.job.salary.currency}${props.job.salary.min} - ${props.job.salary.currency}${props.job.salary.max}`
                }}
              </p>
            </div>
            <div class="point-left">
              <i class="fas fa-map-marker-alt"></i>
              <p>{{ props.job.location.city }}</p>
            </div>
          </div>
          <div class="w-1/2">
            <div class="point-right">
              <i class="fas fa-clock"></i>
              <p>{{ props.job.job_type }}</p>
            </div>
            <div class="point-right">
              <i class="fas fa-share-alt"></i>
              <p>{{ props.job.job_category }}</p>
            </div>
          </div>
        </div>
        <div class="job-card__description">
          <p class="job-card__description-text">
            {{ props.job.descriptions.requirements.substring(0, 200) }}
          </p>
        </div>
      </div>
      <div class="job-card__action">
        <div class="job-card__action-save">
          <button class="job-card__action-save-button">
            <i class="fa-solid fa-heart"></i>
            {{ $t('saveJob') }}
          </button>
        </div>
        <div class="job-card__action-apply">
          <button class="job-card__action-apply-button">
            <i class="fa-solid fa-briefcase"></i>
            {{ $t('applyNow') }}
          </button>
        </div>
      </div>
    </article>
    <article class="job-card">
      <div class="job-card__content border-b-2">
        <h1 class="text-bold">{{ $t('requirements') }}</h1>
      </div>
      <div class="job-card__content">
        <p class="job-card__description-text">
          {{ props.job.descriptions.requirements }}
        </p>
      </div>
    </article>
    <article class="job-card" v-if="props.job.descriptions.reponbilities">
      <div class="job-card__content border-b-2">
        <h1 class="text-bold">{{ $t('responsibilities') }}</h1>
      </div>
      <div class="job-card__content">
        <p class="job-card__description-text">
          {{ props.job.descriptions.reponbilities }}
        </p>
      </div>
    </article>
    <article class="job-card" v-if="props.job.descriptions.benefits">
      <div class="job-card__content border-b-2">
        <h1 class="text-bold">{{ $t('benefits') }}</h1>
      </div>
      <div class="job-card__content">
        <p class="job-card__description-text">
          {{ props.job.descriptions.benefits }}
        </p>
      </div>
    </article>
  </section>
  <section v-else>
    <div class="container mx-auto xl:px-72 py-10">
      <div class="flex justify-center items-center">
        <span class="sr-only">Loading...</span>
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { JobType } from '../types/jobTypes';

const props = defineProps({
  job: {
    type: Object as () => JobType,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.job-card {
  @apply mb-12;

  &__header-image-wrapper {
    @apply w-full h-40 rounded-tl-lg rounded-tr-lg overflow-hidden bg-white;
  }

  &__header-image {
    @apply w-full h-full object-cover;
  }

  &__content {
    border-bottom: 1px solid;
    @apply bg-white p-8 border-gray-200;
  }

  &__action {
    @apply bg-white p-4 rounded-bl-lg rounded-br-lg flex flex-wrap justify-between items-center;
    @apply text-xs md:text-sm;

    &-save {
      @apply w-1/2 text-center;
    }

    &-apply {
      @apply w-1/2 text-center;
    }

    & button {
      @apply text-gray-900;
    }
  }

  &__company {
    @apply flex md:flex-row flex-col  items-center justify-start md:items-start gap-3;

    &-logo {
      &-wrapper {
        @apply w-full flex md:w-1/12 items-center justify-center md:justify-start;
      }

      @apply w-auto h-10;
    }

    &-detail {
      @apply flex flex-col justify-start md:text-left text-center;

      &--position {
        @apply text-base font-semibold;
      }

      &--name {
        @apply text-sm text-gray-500;
      }
    }

    &-points {
      @apply flex items-center justify-between gap-3 mt-5 md:text-sm text-xs;

      i {
        @apply w-1 my-auto;
      }

      .point {
        &-left {
          @apply flex gap-5 mb-1 justify-start;
        }

        &-right {
          @apply flex gap-5 mb-1 justify-end md:justify-start;
        }
      }
    }
  }

  &__description {
    @apply mt-5;

    &-text {
      @apply text-xs text-gray-500 text-justify md:text-left;
    }
  }
}
</style>
