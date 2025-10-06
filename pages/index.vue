<template>
  <div>
    <Header />
    <HomeHero />
    <!-- image-content / about section -->
    <section class="pb-12 md:py-12 lg:py-20 bg-secondary/5 relative">
      <div class="container grid grid-cols-4 gap-7 md:gap-14 items-center">
        <img
          class="absolute top-0 right-0 md:relative h-72 md:h-[450px] w-full object-cover md:rounded-lg col-span-4 md:col-span-2 md:order-1"
          src="/images/campaign-creators-e6n7uoEnYbA-unsplash (2).jpg"
          alt="packaginghub packaging"
        />
        <div class="h-72 md:hidden"></div>
        <!-- <img
          class="w-full md:w-auto md:h-[44vw] lg:h-[40vw] xl:h-[35vw] object-contain col-span-5 md:col-span-2"
          src="/images/about-main.png"
          alt="packaginghub packaging"
        /> -->
        <div class="col-span-4 md:col-span-2 md:order-2">
          <div class="max-w-[700px]">
            <h2 v-if="sections?.about?.heading">
              {{ sections.about.heading }}
            </h2>
            <ElementsRichText
              v-if="sections?.about?.description"
              :content="sections.about.description"
            />
            <div class="pt-7">
              <a href="#" class="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 lg:py-20">
      <div class="container">
        <div class="max-w-[700px] mx-auto text-center">
          <h2>Featured Products</h2>
          <p>
            All our products are made to the highest standard ensuring that all
            board and inks are FDA® accredited. We also have a FSC®
            certification allowing our clients to print the FSC® logo on their
            cartons. Our licence number is FSC -C161939. This will show your
            customers that all board sourced for your packaging comes from
            sustainable forestry, meaning you are doing your bit to ensure our
            forests are alive for years to come.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 pt-7 md:pt-10">
          <div
            v-for="i in 6"
            :key="i"
            class="p-5 border border-secondary/20 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all duration-150 ease-out"
          >
            <img
              class="w-full max-h-56 object-contain"
              src="/images/about-main.png"
              alt="packaginghub packaging"
            />
            <h3 class="h5 pt-4 !text-accent">Litho Laminated Cartons</h3>
            <p>
              We mount printed sheets to fluted board to create your classic
              litho laminated cartons.
            </p>
            <div class="pt-7 pb-3">
              <a href="#" class="btn btn-primary">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-cover bg-no-repeat bg-center"
      style="background-image: url('/images/custom-bg.webp')"
    >
      <div class="py-12 lg:py-40 bg-black/50">
        <div class="container">
          <div class="max-w-[700px] mx-auto text-center dark-bg">
            <h2>Custom Designs</h2>
            <p>
              All our products are manufactured to each client’s specific needs
              and designs. We will engineer cartons that fit your product and to
              the shape that you require. Plain samples will be supplied for
              your approval before going to production.
            </p>
            <div class="pt-7">
              <a href="#" class="btn btn-primary">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
import { onMounted } from "vue";

const data = await GqlHome();

const sections = data.home;

onMounted(() => {
  console.log("Home data:", sections.about.description);
});
</script>
