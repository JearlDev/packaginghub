<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from "#app";

// Set default SEO meta tags and favicon site-wide
const config = useRuntimeConfig();
const backendUrl = config.public.BACKEND_URL;

//TODO: Re-add GraphQL query when CMS is ready
// const data = await GqlSeo();
import seoData from "~/content/seo.json";
const data = seoData.data;

useSeoMeta({
  ogImage:
    //TODO: Re-add GraphQL query when CMS is ready
    // `${backendUrl}${seoData?.shareImage?.url}` || "/images/social-preview.jpg",
    "/uploads/packaging_hub_share_image_56a498a542.png",
  twitterImage:
    //TODO: Re-add GraphQL query when CMS is ready
    // `${backendUrl}${seoData?.shareImage?.url}` || "/images/social-preview.jpg",
    "/uploads/packaging_hub_share_image_56a498a542.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      //TODO: Re-add GraphQL query when CMS is ready
      // href: `${backendUrl}${data.global?.favicon?.url}` || "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
});
</script>
