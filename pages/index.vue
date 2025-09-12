<template>
  <div>
    <p>There are {{ dataSingle }} articles.</p>
  </div>
</template>
<script setup>
// const data = await GqlArticles();

const dataSingle = await GqlArticleSingle({
  documentId: "r6r9nthsjhh8b6sznjuq25j4",
  status: "PUBLISHED",
});
</script>
