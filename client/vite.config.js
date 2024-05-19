import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
//The constant __dirname replaced with import.meta.url. ECMAScript module does not have the specific constant.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@stores',
        replacement: fileURLToPath(new URL('./src/stores', import.meta.url)),
      },
    ],
  },
});
