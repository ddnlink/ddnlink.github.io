import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/favicon.ico',
  routes: [
    { path: '/', component: './index' },
    { path: '/product', component: './Product/wallet' },
  ],
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
});
