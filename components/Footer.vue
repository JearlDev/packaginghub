<template>
  <footer>
    <div class="py-12 lg:py-20 bg-secondary dark-bg">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Address & Hours  -->
          <div class="text-white">
            <div
              class="flex flex-col items-center md:items-start text-center md:text-left gap-10"
            >
              <div>
                <h3 class="h3 font-bold mb-2 !text-accent">Address</h3>
                <p>Unit 5 Henton Park,</p>
                <p>25 Stella Road,</p>
                <p>Montague Gardens.</p>
                <p>Cape Town</p>
              </div>

              <div>
                <h3 class="h3 font-bold mb-2 !text-accent">Office Hours</h3>
                <p>M-T: 8am – 4.30pm</p>
                <p>Friday: 8am – 3pm</p>
                <p>S-S: Closed</p>
              </div>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="text-white">
            <div
              class="flex flex-col items-center md:items-start text-center md:text-left gap-10"
            >
              <div>
                <h3 class="h3 font-bold mb-2 !text-accent">Contact</h3>
                <p><a href="tel:+27215553879">+27 21 555 3879</a></p>
                <p>
                  <a href="mailto:kevin@packhub.co.za">kevin@packhub.co.za</a>
                </p>
              </div>

              <div>
                <h3 class="h3 font-bold mb-2 !text-accent">Follow Us</h3>
                <div class="flex justify-center md:justify-start gap-4 mt-5">
                  <a
                    href="#"
                    class="hover:opacity-80 transition-opacity duration-150"
                    ><img
                      height="32"
                      width="32"
                      src="/icons/instagram.svg"
                      alt="instagram icon"
                  /></a>
                  <a
                    href="#"
                    class="hover:opacity-80 transition-opacity duration-150"
                    ><img
                      height="32"
                      width="32"
                      src="/icons/facebook.svg"
                      alt="facebook icon"
                  /></a>
                  <a
                    href="#"
                    class="hover:opacity-80 transition-opacity duration-150"
                    ><img
                      height="32"
                      width="32"
                      src="/icons/linkedin.svg"
                      alt="linkedin icon"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="text-white md:col-span-2 lg:col-span-2 mt-10 md:mt-0">
            <h3 class="h3 mb-7 !text-accent">Get in Touch</h3>
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
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary py-7 dark-bg">
      <div class="container">
        <div class="text-center text-white">
          &copy; {{ new Date().getFullYear() }} Packaging Hub. Designed &
          developed by
          <a href="https://joshearly.co.za" target="_blank">Josh Early</a>
        </div>
      </div>
    </div>
  </footer>
</template>
