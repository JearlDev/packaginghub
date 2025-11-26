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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3705516561604!2d18.515935950909046!3d-33.85433998056533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5ecbb800e041%3A0xe53399cfbf4308bf!2s5%2C%2025%20Stella%20Rd%2C%20Montague%20Gardens%2C%20Cape%20Town%2C%207441!5e0!3m2!1sen!2sza!4v1576832545896!5m2!1sen!2sza"
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
