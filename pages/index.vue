<template>
  <div>
    <Header />
    <Hero />
    <section class="pb-12 md:py-12 lg:py-20 bg-secondary/5 relative">
      <div class="container grid grid-cols-4 gap-7 md:gap-14 items-center">
        <img
          class="absolute top-0 right-0 md:relative h-72 md:h-[450px] w-full object-cover md:rounded-lg col-span-4 md:col-span-2"
          src="/images/campaign-creators-e6n7uoEnYbA-unsplash (2).jpg"
          alt="packaginghub packaging"
        />
        <div class="h-72 md:hidden"></div>
        <!-- <img
          class="w-full md:w-auto md:h-[44vw] lg:h-[40vw] xl:h-[35vw] object-contain col-span-5 md:col-span-2"
          src="/images/about-main.png"
          alt="packaginghub packaging"
        /> -->
        <div class="col-span-4 md:col-span-2">
          <div class="max-w-[700px]">
            <h2>A dynamic print company</h2>
            <p>
              Packaging Hub is a dynamic packaging Company originally
              established to help small to medium-size businesses with all their
              packaging needs, concentrating mainly on the manufacturing of
              folded cartons.
            </p>
            <p>
              We are a phone call away to help you source packaging that will
              give your products the shelf shout it deserves.
            </p>
            <p>
              Feel free to call us on
              <a href="tel:0215553879">021 555 3879</a> or email us
              <a href="mailto:sales@pakhub.co.za">sales@pakhub.co.za</a>
            </p>
            <div class="pt-7">
              <a href="/about" class="btn btn-secondary">Learn More</a>
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
              <a href="/about" class="btn btn-primary">Get a Quote</a>
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
  </div>
</template>
