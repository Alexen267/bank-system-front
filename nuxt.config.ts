import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },
  svgo: {
    autoImportPath: '@/assets/img/',
    componentPrefix: 'i',
  },
  modules: ['nuxt-svgo', '@nuxt/icon'],
});
