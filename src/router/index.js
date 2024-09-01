import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../pages/master/DashboardView.vue'; 
import PricesView from '@/pages/PricesView.vue';
import  HomeView from '../pages/HomeView.vue'; 
import ProfileView from '../pages/ProfileView.vue';

const routes = [
  {
    name: 'DashboardView',
    path: '/dashboard',
    component: DashboardView,
  },

  {
    name: 'HomeView',
  path:'/',
component: HomeView,  },
{
  name:'ProfileView',
  path:'/profile',
  component: ProfileView
},
{
  name:'PricesView',
  path:'/prices',
  component: PricesView
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
