<template>
  <section id="products" class="py-12 lg:py-20">
    <div class="container">
      <div class="max-w-[700px] mx-auto text-center fade-ani-above-fold">
        <h2 v-if="data?.heading" class="hidden-el">{{ data.heading }}</h2>
        <div class="hidden-el">
          <ElementsRichText
            v-if="data?.description"
            :content="data.description"
          />
        </div>
      </div>
      <div
        v-if="data?.featuredProducts?.length"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 pt-7 md:pt-10 fade-ani-above-fold-three"
      >
        <div
          v-for="featuredProduct in data?.featuredProducts"
          :key="featuredProduct.documentId"
          class="hidden-el"
        >
          <div
            class="p-5 border border-secondary/20 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all duration-150 ease-out"
          >
            <img
              v-if="featuredProduct?.image"
              class="w-full max-h-56 object-contain"
              :src="getImageUrl(featuredProduct.image.url)"
              loading="lazy"
              width="433"
              height="224"
              :alt="
                featuredProduct.image.alternativeText || 'Packaging Hub product'
              "
            />
            <h3 v-if="featuredProduct?.title" class="h5 pt-4 !text-accent">
              {{ featuredProduct.title }}
            </h3>
            <p v-if="featuredProduct?.description">
              {{ featuredProduct.description }}
            </p>
            <div v-if="featuredProduct?.cta" class="pt-7 pb-3">
              <a :href="featuredProduct.cta.link" class="btn btn-primary">{{
                featuredProduct.cta.text
              }}</a>
            </div>
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
