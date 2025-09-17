<template>
  <div>
    <h1>{{ article.title }}</h1>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
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
