import { createRouter, createWebHashHistory, NavigationGuard, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Resource from '@/views/home/Resource.vue';
import Live from '@/views/home/Live.vue';
import Subscribe from '@/views/home/Subscribe.vue';
import Admin from '@/views/home/Admin.vue';
import Setting from '@/views/home/Setting.vue';
import { Api } from '@/api/api';
import Login from '@/views/Login.vue';
import SourceInfo from '@/views/home/subscribe/SourceDetail.vue';
import SourceRules from '@/views/home/subscribe/SourceRules.vue';
import SourceRawData from '@/views/home/subscribe/SourceRawData.vue';
import SourceFetchLogs from '@/views/home/subscribe/SourceFetchLogs.vue';
import SourceDownloadItems from '@/views/home/subscribe/SourceDownloadItems.vue';
import SeriesView from '@/views/home/resource/SeriesView.vue';
import MediasView from '@/views/home/resource/MediasView.vue';
import MediaPlay from '@/views/home/resource/media/MediaPlay.vue';

const LoginGuard: NavigationGuard = (to, from, next) => {
  if (!Api.isLogin) {
    next({
      path: '/login',
      query: {
        redirect_url: to.fullPath,
      },
    });
  } else {
    next();
  }
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/resource',
    children: [
      {
        path: '/resource',
        children: [
          {
            path: '/resource',
            component: Resource,
            redirect: '/media',
            children: [
              {
                path: '/media',
                component: MediasView,
              },
              {
                path: '/series',
                component: SeriesView,
              },
            ],
          },
          {
            path: '/media/:id',
            component: MediaPlay,
          },
        ],
      },
      {
        path: '/live',
        component: Live,
      },
      {
        path: '/subscribe',
        component: Subscribe,
        children: [
          {
            path: '/subscribe/:id',
            redirect: (to) => `/subscribe/${to.params.id}/detail`,
            children: [
              {
                path: '/subscribe/:id/detail',
                component: SourceInfo,
              },
              {
                path: '/subscribe/:id/rules',
                component: SourceRules,
              },
              {
                path: '/subscribe/:id/raw',
                component: SourceRawData,
              },
              {
                path: '/subscribe/:id/logs',
                component: SourceFetchLogs,
              },
              {
                path: '/subscribe/:id/downloads',
                component: SourceDownloadItems,
              },
            ],
          },
        ],
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '/setting',
        component: Setting,
      },
    ],
    beforeEnter: LoginGuard,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default () =>
  createRouter({
    history: createWebHashHistory(),
    routes,
  });
