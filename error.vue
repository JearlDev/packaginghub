<template>
  <NuxtLayout>
    <main role="main">
      <section class="py-24 lg:py-40 text-center">
        <div class="container flex flex-col items-center">
          <h1 class="text-accent font-semibold text-lg">404</h1>
          <p class="h4 text-secondary">Page Not Found</p>
          <p class="text-secondary/70 max-w-md">
            We could not find the page you were looking for.
          </p>
          <a href="/" class="btn btn-primary mt-4">Go Back Home</a>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup>
import globalData from "~/content/global.json";

defineProps({
  error: {
    type: Object,
    required: false,
  },
});

useSeoMeta({
  title: `Page Not Found | ${globalData.data.global.siteName}`,
});
</script>
