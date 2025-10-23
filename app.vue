<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const frontendUrl = config.public.FRONTEND_URL;
const backendUrl = config.public.BACKEND_URL;

const data = await GqlSeo();
const seoData = data.global.defaultSeo;

onMounted(() => {
  console.log("SEO data:", seoData);
});

useSeoMeta({
  ogImage:
    `${backendUrl}${seoData?.shareImage?.url}` || "/images/social-preview.jpg",
  twitterImage:
    `${backendUrl}${seoData?.shareImage?.url}` || "/images/social-preview.jpg",
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
      href: `${backendUrl}${data.global?.favicon?.url}` || "/favicon.ico",
    },
  ],
});
</script>
