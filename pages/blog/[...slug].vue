<template>
  <div>
    <h1>{{ data.article.title }}</h1>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const documentId = route.query.id;

const data = await GqlArticleSingle({
  documentId: documentId,
  status: "PUBLISHED",
});
</script>
