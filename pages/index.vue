<template>
  <div>
    <p>There are {{ data.articles.length }} articles.</p>
  </div>
</template>
<script setup>
const data = await GqlAllArticles();
</script>
