import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AllJobs',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'JobDetail',
    component: DetailView
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'navbar__link-item--active'
});

export default router;
