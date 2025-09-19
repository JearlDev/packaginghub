// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: true,
      "Open Sans": true,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client", "@nuxtjs/google-fonts"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.GQL_HOST || "http://localhost:1337/graphql",
    },
  },
});
