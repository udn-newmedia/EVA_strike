import Vue from 'vue';
import Router from 'vue-router';
import ContentA from '@/components/ContentA';
import ContentB from '@/components/ContentB';
import ContentC from '@/components/ContentC';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentA',
      component: ContentA,
    },
    {
      path: '/tourists',
      name: 'ContentA',
      component: ContentA,
    },
    {
      path: '/QA',
      name: 'ContentB',
      component: ContentB,
    },
    {
      path: '/flightattendants',
      name: 'ContentC',
      component: ContentC,
    },
  ],
});
