<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const data = await GqlSeo();
const seoData = data.global.defaultSeo;

onMounted(() => {
  console.log("SEO data:", seoData);
});

useHead({
  title: seoData?.metaTitle || "Packaging Hub | Your partners in packaging",
  meta: [
    {
      name: "description",
      content:
        seoData?.metaDescription ||
        "Welcome to Packaging Hub. Your partners in packaging.",
    },
    {
      property: "og:title",
      content:
        seoData?.metaTitle || "Your partners in packaging | Packaging Hub",
    },
    {
      property: "og:image",
      content: seoData?.shareImage?.url || "/images/social-preview.jpg",
    },
  ],
});
</script>
