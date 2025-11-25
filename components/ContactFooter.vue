<template>
  <footer role="contentinfo">
    <div class="py-12 lg:py-20 bg-secondary dark-bg">
      <div class="container">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 items-center md:items-start text-center md:text-left gap-10 text-white"
        >
          <!-- Address & Hours  -->
          <div v-if="address">
            <h3 class="h3 font-bold mb-2 !text-accent">Address</h3>
            <ElementsRichText v-if="address" :content="address" />
          </div>

          <div v-if="officeHours">
            <h3 class="h3 font-bold mb-2 !text-accent">Office Hours</h3>
            <ElementsRichText v-if="officeHours" :content="officeHours" />
          </div>

          <div v-if="phone || email">
            <h3 class="h3 font-bold mb-2 !text-accent">Contact</h3>
            <p>
              <a :href="`tel:${phone}`">{{ phone }}</a>
            </p>
            <p>
              <a :href="`mailto:${email}`">{{ email }}</a>
            </p>
          </div>

          <div
            v-if="
              socials &&
              (socials.instagramLink ||
                socials.facebookLink ||
                socials.linkedinLink ||
                socials.twitterLink ||
                socials.youtubeLink ||
                socials.tiktokLink)
            "
          >
            <h3 class="h3 font-bold mb-2 !text-accent">Follow Us</h3>
            <div class="flex justify-center md:justify-start gap-4 mt-5">
              <a
                v-if="socials.instagramLink"
                :href="socials.instagramLink"
                class="hover:opacity-80 transition-opacity duration-150"
                ><img
                  height="32"
                  width="32"
                  loading="lazy"
                  src="/icons/instagram.svg"
                  alt="instagram icon"
              /></a>
              <a
                v-if="socials.facebookLink"
                :href="socials.facebookLink"
                class="hover:opacity-80 transition-opacity duration-150"
                ><img
                  height="32"
                  width="32"
                  loading="lazy"
                  src="/icons/facebook.svg"
                  alt="facebook icon"
              /></a>
              <a
                v-if="socials.whatsappLink"
                :href="socials.whatsappLink"
                class="hover:opacity-80 transition-opacity duration-150"
                ><img
                  height="32"
                  width="32"
                  loading="lazy"
                  src="/icons/whatsapp.svg"
                  alt="whatsapp icon"
              /></a>
              <a
                v-if="socials.linkedinLink"
                :href="socials.linkedinLink"
                class="hover:opacity-80 transition-opacity duration-150"
                ><img
                  height="32"
                  width="32"
                  loading="lazy"
                  src="/icons/linkedin.svg"
                  alt="linkedin icon"
              /></a>
              <a
                v-if="socials.tiktokLink"
                :href="socials.tiktokLink"
                class="hover:opacity-80 pt-[1px] transition-opacity duration-150"
                ><img
                  height="31"
                  width="31"
                  loading="lazy"
                  src="/icons/tiktok.svg"
                  alt="tiktok icon"
              /></a>
              <a
                v-if="socials.twitterLink"
                :href="socials.twitterLink"
                class="hover:opacity-80 pt-[1.5px] transition-opacity duration-150"
                ><img
                  height="31"
                  width="31"
                  loading="lazy"
                  src="/icons/x.svg"
                  alt="x icon"
              /></a>
              <a
                v-if="socials.youtubeLink"
                :href="socials.youtubeLink"
                class="hover:opacity-80 pt-[1px] transition-opacity duration-150"
                ><img
                  height="32"
                  width="42"
                  loading="lazy"
                  src="/icons/youtube.svg"
                  alt="youtube icon"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary py-7 dark-bg">
      <div class="container">
        <div class="text-center text-white">
          &copy; {{ new Date().getFullYear() }}
          {{ siteName || "Packaging Hub" }}. Designed & developed by
          <a href="https://joshearly.co.za" target="_blank">Josh Early</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const props = defineProps({
  siteName: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: Array,
    required: false,
  },
  officeHours: {
    type: Array,
    required: false,
  },
  socials: {
    type: Object,
    required: false,
  },
  form: {
    type: Object,
    required: false,
  },
});
</script>
