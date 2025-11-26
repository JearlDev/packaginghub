<template>
  <main role="main">
    <section class="py-12 lg:py-20 overflow-hidden">
      <div class="container">
        <div class="max-w-[700px] mx-auto text-center fade-ani-above-fold">
          <h1 class="hidden-el"><span class="text-accent">About </span>Us</h1>
        </div>
      </div>
    </section>
    <AboutIntro :data="sections?.about" />
    <section
      class="bg-cover bg-no-repeat bg-center"
      :style="{
        backgroundImage: `url('/images/custom-bg.webp')`,
      }"
    >
      <div class="py-12 lg:py-20 bg-white/90">
        <div class="container">
          <div class="max-w-[700px] mx-auto text-center fade-ani">
            <h2 class="hidden-el">Since 2014</h2>
            <p class="hidden-el">
              Packaging Hub is a dedicated team who believe is offering the best
              customer service to our clients. In the many years of operation
              our staff compliment has hardly changed, showing the loyalty and
              dedication among our people, representing the ethos of our Company
              which spills through to the service we give our customers on a
              daily basis.
            </p>
            <div class="pt-7 hidden-el">
              <a href="/contact" class="btn btn-primary"> Get in Touch </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 lg:py-20 bg-white/90">
      <div class="container">
        <div class="mx-auto text-center">
          <div class="fade-ani"><h2 class="hidden-el">Why Choose Us</h2></div>
          <div class="grid md:grid-cols-2 gap-7 md:gap-20 pt-4 fade-ani">
            <div class="flex flex-col items-center max-w-md mx-auto hidden-el">
              <img
                src="/icons/trophy.svg"
                width="96"
                height="96"
                class="py-2"
                alt="trophy icon"
              />
              <h5>A Wealth of Experience</h5>
              <p>
                Packaging Hub has a collective wealth of experience. We deal
                with many of the large corporates as well as smaller business.
              </p>
            </div>
            <div class="flex flex-col items-center max-w-md mx-auto hidden-el">
              <img
                src="/icons/gift.svg"
                width="96"
                height="96"
                class="py-2"
                alt="gift icon"
              />
              <h5>Custom Everything</h5>
              <p>
                We are not set on doing standard print runs so we can
                manufacture anything (within reason) that you would like to
                create in print form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";

// Get page content (sections) and SEO data
const data = await GqlAbout();

const sections = data?.about;
const seoData = data?.pageSEO;

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
