// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client"],

  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.GQL_HOST || "http://localhost:1337/graphql",
    },
  },
});
