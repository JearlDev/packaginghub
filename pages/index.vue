<template>
  <main role="main">
    <HomeHero :data="sections?.hero" />
    <HomeAbout :data="sections?.about" />
    <HomeFeaturedProducts :data="sections?.featuredProducts" />
    <HomeBanner :data="sections?.banner" />
  </main>
</template>
<script setup>
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";
import homeData from "~/content/home.json";

// Get page content (sections) and SEO data
// TODO: Re-add GraphQL query when CMS is ready
// const data = await GqlHome();
const data = homeData.data;

const sections = data.home;
const seoData = data?.home?.pageSEO;

// Setup for SEO meta tags and canonical URL
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
</script>
