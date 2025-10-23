<template>
  <div>
    <h1>{{ article.title }}</h1>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";

const config = useRuntimeConfig();
const frontendUrl = config.public.FRONTEND_URL;
const route = useRoute();

const currentPath = route.path === "/" ? "" : route.path;

useHead({
  link: [{ rel: "canonical", href: `${frontendUrl}${currentPath}` }],
});

const slug = route.path.replace("/blog/", "");

// onMounted(() => {
//   console.log("Route query:", slug);
//   console.log("Route query:", data);
// });

const data = await GqlArticleSingle({
  slug: slug,
});

const article = data.articles[0];
</script>
