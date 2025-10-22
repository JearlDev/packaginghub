<template>
  <section class="pb-12 md:py-12 lg:py-20 bg-secondary/5 relative">
      <div class="container grid grid-cols-4 gap-7 md:gap-14 items-center">
        <img v-if="data?.image"
          class="absolute top-0 right-0 md:relative h-72 md:h-[450px] w-full object-cover md:rounded-lg col-span-4 md:col-span-2 md:order-1"
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
          <div class="max-w-[700px]">
            <h2 v-if="data?.heading">
              {{ data.heading }}
            </h2>
            <ElementsRichText
              v-if="data?.description"
              :content="data.description"
            />
            <div v-if="data?.cta[0]" class="pt-7 flex flex-col lg:flex-row gap-2 justify-start">
              <a :href="data.cta[0].link" :target="data.cta[0].openInNewTab ? '_blank' : '_self'" class="btn btn-secondary">{{data.cta[0].text}}</a>
              <a v-if="data?.cta[1]" :href="data.cta[1].link" :target="data.cta[1].openInNewTab ? '_blank' : '_self'" class="btn btn-tertiary">{{data.cta[1].text}}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
const { getImageUrl } = useImage();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
