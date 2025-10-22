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
      Montserrat: [200, 300, 400, 500, 600, 700, 800, 900],
      "Open Sans": [200, 300, 400, 500, 600, 700, 800, 900],
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
      GQL_HOST: process.env.GQL_HOST || "http://localhost:1337/graphql",
      BACKEND_URL: process.env.BACKEND_URL || "http://localhost:1337",
    },
  },
});
