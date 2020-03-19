import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/favicon.ico',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
