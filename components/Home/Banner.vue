<template>
  <section
    class="bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage: `url(${
        getImageUrl(data?.image?.url) || '/images/custom-bg.webp'
      })`,
    }"
  >
    <div class="py-12 lg:py-40 bg-black/50">
      <div class="container">
        <div class="max-w-[700px] mx-auto text-center dark-bg fade-ani">
          <h2 v-if="data?.heading" class="hidden-el">{{ data.heading }}</h2>
          <p v-if="data?.description" class="hidden-el">
            {{ data.description }}
          </p>
          <div v-if="data?.cta" class="pt-7 hidden-el">
            <a :href="data?.cta?.link" class="btn btn-primary">
              {{ data?.cta?.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { getImageUrl } = useImageUrl();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
