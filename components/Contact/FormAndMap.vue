<template>
  <section class="py-12 lg:py-20 bg-secondary/10 dark-bg relative">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-10">
        <!-- Contact Form -->
        <div class="text-white lg:pr-10">
          <h3 class="h3 mb-7 !text-primary">Get in Touch</h3>
          <form class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="hidden mb-2" for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-2 rounded-md bg-white/90 border border-white text-primary placeholder:text-primary/70 focus:placeholder:text-primary/50 focus:outline-accent transition-all duration-150"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label class="hidden mb-2" for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-2 rounded-md bg-white/90 border border-white text-primary placeholder:text-primary/70 focus:placeholder:text-primary/50 focus:outline-accent transition-all duration-150"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="hidden mb-2" for="package-requirements"
                  >Package Requirements</label
                >
                <input
                  type="text"
                  id="package-requirements"
                  class="w-full px-4 py-2 rounded-md bg-white/90 border border-white text-primary placeholder:text-primary/70 focus:placeholder:text-primary/50 focus:outline-accent transition-all duration-150"
                  placeholder="Package Requirements"
                />
              </div>
              <div>
                <label class="hidden mb-2" for="company-name"
                  >Company Name</label
                >
                <input
                  type="text"
                  id="company-name"
                  class="w-full px-4 py-2 rounded-md bg-white/90 border border-white text-primary placeholder:text-primary/70 focus:placeholder:text-primary/50 focus:outline-accent transition-all duration-150"
                  placeholder="Company Name"
                />
              </div>
            </div>

            <div>
              <label class="hidden mb-2" for="notes">Notes</label>
              <textarea
                id="notes"
                rows="4"
                class="w-full px-4 py-2 rounded-md bg-white/90 border border-white text-primary placeholder:text-primary/70 focus:placeholder:text-primary/50 focus:outline-accent transition-all duration-150"
                placeholder="Other Notes"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <!-- Google Map -->
        <div
          class="absolute top-[unset] bottom-0 lg:bottom-[unset] lg:top-0 right-0 w-full lg:w-1/2 h-80 lg:h-full"
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Unit%2015%20The%20Studios,%20%20Atlas%20Gardens%20Business%20Park,%20%20Contermanskloof%20Rd,%20Durbanville%20%20Cape%20Town,%207550+(Packaging%20Hub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            frameborder="0"
            style="border: 0"
            allowfullscreen="true"
          ></iframe>
        </div>

        <!-- placeholder div  for map spacing-->
        <div class="h-72 lg:hidden"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  form: {
    type: Object,
    required: false,
  },
});
</script>
