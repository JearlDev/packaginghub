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
              ><img src="/icons/phone.svg" alt="phone icon" />
              <span>+21 555 3879</span></a
            >
          </li>
          <li>
            <a href="mailto:kevin@packhub.co.za" class="flex gap-2 items-center"
              ><img src="/icons/email.svg" alt="email icon" />
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
            <a href="#" class="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
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
    title: "Products",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];
</script>
