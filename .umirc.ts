import { defineConfig } from 'umi';

export default defineConfig({
  base: '/ddn.link',
  favicon: '/favicon.ico',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
