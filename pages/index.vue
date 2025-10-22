<template>
  <div>
    <Header />
    <HomeHero :data="sections?.hero" />
    <HomeAbout :data="sections?.about" />
    <HomeFeaturedProducts :data="sections?.featuredProducts" />
    <HomeBanner :data="sections?.banner" />
    <Footer />
  </div>
</template>
<script setup>
import { onMounted } from "vue";

const data = await GqlHome();

const sections = data.home;

onMounted(() => {
  console.log("Home data:", data);
});
</script>
