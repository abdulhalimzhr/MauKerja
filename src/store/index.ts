import { createStore } from 'vuex';
import { JobType } from '../types/jobTypes';
import axios from 'axios';

export default createStore({
  state: {
    jobs: [],
    job: {}
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
    getJobById(state) {
      return state.job;
    }
  },
  mutations: {
    setJobs(state, payload) {
      state.jobs = payload;
    },
    setJobById(state, payload) {
      state.job = payload;
    }
  },
  actions: {
    async getJobById(context, id: string) {
      await context.dispatch('getJobs').then(() => {
        context.commit(
          'setJobById',
          context.getters.getJobs.find(
            (job: JobType) => job.id === parseInt(id)
          )
        );
      });
    },
    async getJobs(context) {
      await axios
        .get(`${process.env.VUE_APP_API_BASE_URL}/jobs`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((response) => {
          context.commit('setJobs', response.data.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    async filterJobs(context, payload) {
      const params = Object.assign(
        {},
        payload.jobTitle && { 'filter[title]': payload.jobTitle },
        payload.location && { 'filter[state]': payload.location },
        payload.company && { 'filter[company]': payload.company },
        payload.salary &&
          payload.salary.min !== undefined && {
            'filter[salary_min]': payload.salary.min
          },
        payload.salary &&
          payload.salary.max !== undefined && {
            'filter[salary_max]': payload.salary.max
          }
      );

      await axios
        .get(`${process.env.VUE_APP_API_BASE_URL}/jobs`, {
          params,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((response) => {
          context.commit('setJobs', response.data.data);
        })
        .catch(() => {
          context.commit('setJobs', []);
        });
    }
  },
  modules: {}
});
