<template>
  <main role="main">
    <section class="py-12 lg:py-20 overflow-hidden">
      <div class="container">
        <div class="max-w-[700px] mx-auto text-center fade-ani-above-fold">
          <h1 class="hidden-el"><span class="text-accent">Contact </span>Us</h1>
        </div>
      </div>
    </section>

    <ContactFormAndMap />
  </main>
</template>
<script setup>
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";

definePageMeta({
  layout: "contact", // e.g., 'custom'
});
// Get page content (sections) and SEO data
const data = await GqlContact();
const globalData = await GqlGlobal();

// const sections = data?.about;
const seoData = data?.contact?.pageSEO;

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
