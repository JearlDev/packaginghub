<template>
  <div>
    <h1>Blogs page</h1>

    <div class="grid lg:grid-cols-3 gap-7">
      <div
        v-for="article in data.articles"
        :key="article.documentId"
        class="border border-gray-300 rounded-lg p-5"
      >
        <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
        <p class="text-gray-600 mb-4">By {{ article.author.name }}</p>
        <nuxt-link
          :to="{
            path: `/blog/${article.slug}`,
          }"
          class="text-blue-500 hover:underline"
          >Read More</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const data = await GqlArticles();
</script>
