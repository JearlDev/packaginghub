<template>
  <div>
    <HomeHero :data="sections?.hero" />
    <HomeAbout :data="sections?.about" />
    <HomeFeaturedProducts :data="sections?.featuredProducts" />
    <HomeBanner :data="sections?.banner" />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";

const data = await GqlHome();

const sections = data.home;
const seoData = data?.home?.pageSEO;

const config = useRuntimeConfig();
const frontendUrl = config.public.FRONTEND_URL;
const defaultMetaTitle = config.public.DEFAULT_META_TITLE;
const defaultMetaDescription = config.public.DEFAULT_META_DESCRIPTION;
const route = useRoute();

const currentPath = route.path === "/" ? "" : route.path;

useSeoMeta({
  title: seoData?.metaTitle || defaultMetaTitle,
  description: seoData?.metaDescription || defaultMetaDescription,
  ogTitle: seoData?.metaTitle || defaultMetaTitle,
  ogDescription: seoData?.metaDescription || defaultMetaDescription,
  ogUrl: `${frontendUrl}${currentPath}`,
  twitterTitle: seoData?.metaTitle || defaultMetaTitle,
  twitterDescription: seoData?.metaDescription || defaultMetaDescription,
});

useHead({
  link: [{ rel: "canonical", href: `${frontendUrl}${currentPath}` }],
});

onMounted(() => {
  console.log("Home data:", data);
});
</script>
