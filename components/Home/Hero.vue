<template>
  <section class="py-12 lg:py-20 overflow-hidden">
    <div
      class="container relative md:h-[270px] lg:h-[25vw] xl:h-[23vw] 2xl:h-[24vw]"
    >
      <div class="max-w-[700px]">
        <h1><span class="text-accent">Packaging </span>Hub</h1>
        <p v-if="data?.description" class="lg:text-xl max-w-56 lg:max-w-[unset]">
          {{data.description}}
        </p>
        <div v-if="data?.cta" class="pt-6 md:pt-10">
          <a :href="data.cta.link" :target="data.cta.openInNewTab ? '_blank' : '_self'" class="btn btn-primary">{{data.cta.text}}</a>
        </div>
      </div>
      <img
        src="/images/homepage-bg-2.png"
        alt="Packaging Hub"
        class="hidden md:block absolute rotate-[-33deg] md:rotate-[-10deg] lg:rotate-[unset] -right-16 top-20 md:top-7 lg:top-10 xl:top-0 md:right-0 h-[36vw] md:h-[25vw] object-contain"
      />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
