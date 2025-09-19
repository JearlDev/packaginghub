<template>
  <div>
    <header class="h-32 bg-secondary/10">
      <div class="h-full container flex items-center justify-between">
        <img
          class="h-24 object-contain"
          src="/images/logo.png"
          alt="packaginghub logo"
        />
        <div class="flex lg:items-center gap-10">
          <nav class="hidden lg:block h6">
            <ul class="flex items-center gap-5 font-medium">
              <li>
                <a href="/" class="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" class="hover:text-accent transition-colors"
                  >About</a
                >
              </li>
              <li>
                <a href="/services" class="hover:text-accent transition-colors"
                  >Services</a
                >
              </li>
              <li>
                <a href="/contact" class="hover:text-accent transition-colors"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
          <a href="/contact" class="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </header>
    <section class="py-10 lg:py-20">
      <div class="container">
        <h1>Welcome to <span class="text-accent">Packaging Hub</span></h1>
        <p>Your partners in packaging</p>
      </div>
    </section>
  </div>
</template>
<script setup></script>
