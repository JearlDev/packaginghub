<template>
  <main role="main">
    <ProductsListing :data="sections?.featuredProducts" />
    <HomeBanner :data="sections?.banner" />
  </main>
</template>
<script setup>
import { useRuntimeConfig } from "#app";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// Get page content (sections) and SEO data
//TODO: Re-add GraphQL query when CMS is ready
// const data = await GqlProducts();
// const dataSections = await GqlHome();
import productsData from "~/content/products.json";
import homeData from "~/content/home.json";
const data = productsData.data;
const dataSections = homeData.data;

const sections = dataSections?.home;
const seoData = data?.productListing?.pageSEO;

// Setup for SEO meta tags and canonical URL
const config = useRuntimeConfig();

const frontendUrl = config.public.FRONTEND_URL;
const defaultMetaTitle = config.public.DEFAULT_META_TITLE;
const defaultMetaDescription = config.public.DEFAULT_META_DESCRIPTION;

const route = useRoute();

const capitalizedRouteName = computed(() => {
  return route.name
    ? route.name.charAt(0).toUpperCase() + route.name.slice(1)
    : "";
});

const currentPath = route.path === "/" ? "" : route.path;

useSeoMeta({
  title:
    seoData?.metaTitle || `${capitalizedRouteName.value} | ${defaultMetaTitle}`,
  description: seoData?.metaDescription || defaultMetaDescription,
  ogTitle:
    seoData?.metaTitle || `${capitalizedRouteName.value} | ${defaultMetaTitle}`,
  ogDescription: seoData?.metaDescription || defaultMetaDescription,
  ogUrl: `${frontendUrl}${currentPath}`,
  twitterTitle:
    seoData?.metaTitle || `${capitalizedRouteName.value} | ${defaultMetaTitle}`,
  twitterDescription: seoData?.metaDescription || defaultMetaDescription,
});

useHead({
  link: [{ rel: "canonical", href: `${frontendUrl}${currentPath}` }],
});
</script>
