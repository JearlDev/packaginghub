<template>
  <header role="banner">
    <div
      :class="`fixed top-0 left-0 w-full z-[2] ${
        isScrolled ? '-translate-y-[36px]' : 'translate-y-0'
      } transition-all duration-300 ease-out`"
    >
      <div class="bg-accent text-white py-2 relative z-[3]">
        <ul class="container flex justify-start gap-5 text-sm">
          <li v-if="phone">
            <a :href="`tel:${phone}`" class="flex gap-2 items-center"
              ><img
                src="/icons/phone.svg"
                width="19"
                height="19"
                alt="phone icon"
              />
              <span>{{ phone }}</span></a
            >
          </li>
          <li v-if="email">
            <a :href="`mailto:${email}`" class="flex gap-2 items-center"
              ><img
                src="/icons/email.svg"
                width="19"
                height="19"
                alt="email icon"
              />
              <span>{{ email }}</span></a
            >
          </li>
        </ul>
      </div>
      <div
        :class="`${
          isScrolled ? 'h-28' : 'h-32'
        } border-b border-secondary/20 bg-white relative z-[3] transition-all duration-300 ease-out`"
      >
        <div class="h-full container flex items-center justify-between">
          <a href="/">
            <img
              :class="`${
                isScrolled ? 'h-20' : 'h-24'
              } object-contain transition-all duration-300 ease-out`"
              width="53"
              height="96"
              :src="getImageUrl(logo?.url) || '/images/logo.png'"
              :alt="logo?.alternativeText || 'Packaging Hub logo'"
            />
          </a>
          <div class="flex items-center gap-5 lg:gap-10">
            <!-- Mobile Menu Button -->
            <button
              aria-label="Toggle menu"
              class="lg:hidden relative w-9 h-9 flex items-center justify-center"
              @click="toggleMenu"
            >
              <div class="relative w-6 h-6">
                <span
                  class="absolute top-0 left-0 w-full h-0.5 bg-secondary transition-all duration-300"
                  :class="{ 'rotate-45 top-[45%]': menuOpen }"
                ></span>
                <span
                  class="absolute top-[45%] left-0 w-full h-0.5 bg-secondary transition-all duration-300"
                  :class="{ 'opacity-0': menuOpen }"
                ></span>
                <span
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-all duration-300"
                  :class="{ '-rotate-45 bottom-[45%]': menuOpen }"
                ></span>
              </div>
            </button>
            <nav
              role="navigation"
              v-if="mainMenu?.length"
              class="hidden lg:block h6"
            >
              <ul class="flex items-center gap-5 font-medium">
                <li v-for="(item, index) in mainMenu" :key="index">
                  <a
                    :href="item.link"
                    class="text-secondary hover:text-accent transition-colors"
                    >{{ item.text }}</a
                  >
                </li>
              </ul>
            </nav>
            <a v-if="mainCTA" :href="mainCTA.link" class="btn btn-primary">{{
              mainCTA.text
            }}</a>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        v-if="mainMenu?.length"
        class="lg:hidden bg-white shadow-md absolute z-[2] w-full left-0 right-0 duration-300 transition-all"
        :class="{
          'max-h-96 opacity-100': menuOpen,
          'max-h-0 opacity-0 overflow-hidden': !menuOpen,
          'top-[106px] pt-10': isScrolled,
          'top-[124px] pt-10': !isScrolled,
        }"
      >
        <ul
          :class="`flex flex-col py-6 container transition-all duration-300 ${
            menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-[20%]'
          }`"
        >
          <li
            v-for="(item, index) in mainMenu"
            :key="index"
            class="border-secondary/20 py-3 mb-1 !text-secondary h5"
            :class="{
              'border-b': index !== mainMenu.length - 1,
            }"
          >
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-[164px]"></div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const { getImageUrl } = useImageUrl();

const props = defineProps({
  logo: {
    type: Object,
    required: false,
  },
  mainMenu: {
    type: Array,
    required: false,
  },
  mainCTA: {
    type: Object,
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
});

// Mobile menu state
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Scroll state
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
