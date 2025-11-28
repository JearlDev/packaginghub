<template>
  <section class="py-12 lg:py-20 overflow-hidden">
    <div class="container">
      <div class="max-w-[700px] mx-auto text-center fade-ani-above-fold">
        <h1 class="hidden-el">
          <span v-if="titleTextGreen" class="text-accent">{{
            titleTextGreen
          }}</span>
          {{ titleTextNormal }}
        </h1>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  titleTextGreen: {
    type: String,
    required: false,
  },
  titleTextNormal: {
    type: String,
    required: true,
  },
});
</script>
