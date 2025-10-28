// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {},
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 600, 700, 800, 900],
      "Open Sans": [200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  // TODO: update fallback for prod
  sitemap: {
    url: process.env.NUXT_SITE_URL || "https://site-packaginghub.netlify.app/",
    name: process.env.NUXT_SITE_NAME || "Packaging Hub",
    exclude: [
      "/blog/**", // Excludes all pages under /blog TODO: undo when blogs added
      "/blog", // Excludes a specific page TODO: undo when blogs added
    ],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      // TODO: Update fallbacks for production after go live
      GQL_HOST: process.env.NUXT_GQL_HOST || "http://localhost:1337/graphql",
      BACKEND_URL: process.env.NUXT_BACKEND_URL || "http://localhost:1337",
      FRONTEND_URL:
        process.env.NUXT_SITE_URL || "https://site-packaginghub.netlify.app/",
      SITE_NAME: process.env.NUXT_SITE_NAME || "Packaging Hub",
      DEFAULT_META_TITLE:
        process.env.NUXT_DEFAULT_META_TITLE ||
        "Packaging Hub | Your partners in packaging",
      DEFAULT_META_DESCRIPTION:
        process.env.NUXT_DEFAULT_META_DESCRIPTION ||
        "Welcome to Packaging Hub. Your partners in packaging.",
    },
  },
});
