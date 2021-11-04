import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      name: 'teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      alias: '/',
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      },
    },
    {
      path: '/:404(.*)',
      redirect: '/teams',
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  console.log('global after each');
  console.log(to, from);
});
const app = createApp(App);
app.use(router);
app.mount('#app');
