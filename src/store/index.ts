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
        console.log('Jobs fetched');
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
        .get('/jobs', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((response) => {
          context.commit('setJobs', response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  modules: {}
});
