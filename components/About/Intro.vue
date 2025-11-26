<template>
  <section class="pb-12 md:pb-20">
    <div
      class="container grid grid-cols-4 gap-7 md:gap-14 items-center relative z-[3]"
    >
      <img
        v-if="data?.image"
        class="absolute top-0 right-0 md:relative h-72 md:h-[450px] w-full object-cover md:rounded-lg col-span-4 md:col-span-2 md:order-1 fade-img-two"
        width="712"
        height="450"
        :src="getImageUrl(data.image.url)"
        :alt="data.image.alternativeText || 'Packaging Hub About Us Image'"
      />
      <div class="h-72 md:hidden"></div>
      <!-- <img
          class="w-full md:w-auto md:h-[44vw] lg:h-[40vw] xl:h-[35vw] object-contain col-span-5 md:col-span-2"
          src="/images/about-main.png"
          alt="packaginghub packaging"
        /> -->
      <div class="col-span-4 md:col-span-2 md:order-2">
        <div class="max-w-[700px] fade-ani-above-fold-three">
          <h2 class="hidden-el" v-if="data?.heading">
            {{ data.heading }}
          </h2>
          <div class="hidden-el">
            <ElementsRichText
              v-if="data?.description"
              :content="data.description"
            />
          </div>

          <div
            v-if="data?.cta[0]"
            class="pt-7 flex flex-col lg:flex-row gap-2 justify-start hidden-el"
          >
            <a
              :href="data.cta[0].link"
              :target="data.cta[0].openInNewTab ? '_blank' : '_self'"
              class="btn btn-secondary"
              >{{ data.cta[0].text }}</a
            >
            <a
              v-if="data?.cta[1]"
              :href="data.cta[1].link"
              :target="data.cta[1].openInNewTab ? '_blank' : '_self'"
              class="btn btn-tertiary"
              >{{ data.cta[1].text }}</a
            >
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
