<template>
  <header>
    <div
      :class="`fixed top-0 left-0 w-full z-[2] ${
        isScrolled ? '-translate-y-[36px]' : 'translate-y-0'
      } transition-all duration-300 ease-out`"
    >
      <div class="bg-accent text-white py-2 relative z-[3]">
        <ul class="container flex justify-start gap-5 text-sm">
          <li>
            <a href="tel:0215553879" class="flex gap-2 items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="currentColor"
                    d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                  />
                </g>
              </svg>
              <span>+21 555 3879</span></a
            >
          </li>
          <li>
            <a href="mailto:kevin@packhub.co.za" class="flex gap-2 items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z"
                />
              </svg>
              <span>kevin@packhub.co.za</span></a
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
              src="/images/logo.png"
              alt="packaginghub logo"
            />
          </a>
          <div class="flex items-center gap-5 lg:gap-10">
            <!-- Mobile Menu Button -->
            <button
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
            <nav class="hidden lg:block h6">
              <ul class="flex items-center gap-5 font-medium">
                <li v-for="(item, index) in navItems" :key="index">
                  <a
                    :href="item.link"
                    class="text-secondary hover:text-accent transition-colors"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </nav>
            <a href="/contact" class="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        class="lg:hidden bg-white shadow-md absolute z-[2] w-full left-0 right-0 duration-300 transition-all"
        :class="{
          'max-h-96': menuOpen,
          'max-h-0 overflow-hidden': !menuOpen,
          'top-[148px]': isScrolled,
          'top-[164px]': !isScrolled,
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
            v-for="(item, index) in navItems"
            :key="index"
            class="border-secondary/20 py-3 mb-1 !text-secondary h5"
            :class="{
              'border-b': index !== navItems.length - 1,
            }"
          >
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-[164px]"></div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const menuOpen = ref(false);
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

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
</script>
