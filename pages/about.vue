<template>
  <div>
    <h1>About page coming soon...</h1>
  </div>
</template>
<script setup>
// import { onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { useRoute } from "vue-router";

const config = useRuntimeConfig();
const frontendUrl = config.public.FRONTEND_URL;
const route = useRoute();

const currentPath = route.path === "/" ? "" : route.path;

useHead({
  link: [{ rel: "canonical", href: `${frontendUrl}${currentPath}` }],
});

// const data = await GqlHome();

// const sections = data.home;

// onMounted(() => {
//   console.log("Home data:", data);
// });
</script>
