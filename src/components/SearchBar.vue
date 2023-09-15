<template>
  <section class="search-bar">
    <div class="container search-bar__wrapper">
      <div class="search-bar__content">
        <form class="search-bar__form">
          <div class="search-bar__form-input">
            <input
              type="text"
              id="job-title"
              :placeholder="`${$t('jobTitle')}, ${$t('company')}`"
              required
            />
          </div>
          <div class="search-bar__form-input">
            <input
              type="text"
              id="location"
              :placeholder="$t('location')"
              required
            />
          </div>
          <div class="search-bar__form-input">
            <select name="" id="min-salary">
              <option value="" disabled selected>
                Min {{ $t('salary') }} (MYR)
              </option>
              <option
                value="salary.value"
                v-for="(salary, i) in minSalary"
                :key="i"
              >
                {{ salary.label }}
              </option>
            </select>
          </div>
          <div class="search-bar__form-input">
            <button class="search-bar__form-button">
              <i class="fas fa-search"></i>
              {{ $t('findJob') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const minSalary = ref([
  {
    value: 0,
    label: '0 - RM 1000'
  },
  {
    value: 1,
    label: 'RM 1000 - RM 4000'
  },
  {
    value: 2,
    label: 'RM 4000 -  RM 7000'
  },
  {
    value: 3,
    label: '> RM 7000'
  }
]);
</script>

<style lang="scss" scoped>
.search-bar {
  @apply w-full bg-white dark:bg-gray-800;

  &__wrapper {
    @apply container mx-auto lg:px-28 py-10 align-middle;
  }

  &__content {
    @apply w-full;
  }

  &__form {
    @apply flex flex-wrap justify-between;

    &-input {
      @apply flex flex-wrap justify-between lg:w-72 flex-auto my-2;

      & input,
      select {
        @apply text-xs md:text-sm;
        @apply w-full px-5 mx-3;
        @apply bg-gray-50 border border-gray-300 text-gray-900 rounded-full block w-full py-2.5;
        @apply dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white;
      }

      & select {
        @apply pr-5;

        & option {
          font-family: 'Open Sans', sans-serif;
          @apply text-xs md:text-sm;
        }
      }

      button {
        @apply text-xs md:text-sm;
        background-color: #ed3554;
        @apply rounded-full lg:px-5 py-2.5 text-white focus:outline-none text-center w-full mx-3 dark:bg-gray-700;

        &:hover {
          background-color: #d12a47;
        }
      }
    }
  }
}
</style>
