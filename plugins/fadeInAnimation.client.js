export default defineNuxtPlugin((nuxtApp) => {
  const createObserver = (options, delay = 0) => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              entry.target
                .querySelectorAll(".hidden-el")
                .forEach((el) => el.classList.add("show"));
              entry.target.classList.add("observed");
            }, delay);
          } else {
            entry.target
              .querySelectorAll(".hidden-el")
              .forEach((el) => el.classList.add("show"));
            entry.target.classList.add("observed");
          }
        }
      });
    }, options);
  };

  // Image observers with delay
  const createImgObserver = (delay = 0) => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, delay);
            } else {
              entry.target.classList.add("show");
            }
          }
        });
      },
      {
        rootMargin: "0px 0px",
        threshold: 0,
      }
    );
  };

  const imgObserver = createImgObserver(0);
  const imgObserverTwo = createImgObserver(200);
  const imgObserverThree = createImgObserver(400);
  const imgObserverFour = createImgObserver(600);

  const observers = {
    default: createObserver({
      rootMargin: "-200px 0px",
      threshold: 0,
    }),
    aboveFold: createObserver({
      rootMargin: "0px 0px",
      threshold: 0,
    }),
    aboveFoldTwo: createObserver(
      {
        rootMargin: "0px 0px",
        threshold: 0,
      },
      200
    ),
    aboveFoldThree: createObserver(
      {
        rootMargin: "0px 0px",
        threshold: 0,
      },
      400
    ),
  };

  const observeElements = () => {
    document.querySelectorAll(".fade-ani").forEach((container) => {
      observers.default.observe(container);
    });

    document.querySelectorAll(".fade-ani-above-fold").forEach((container) => {
      observers.aboveFold.observe(container);
    });

    document
      .querySelectorAll(".fade-ani-above-fold-two")
      .forEach((container) => {
        observers.aboveFoldTwo.observe(container);
      });

    document
      .querySelectorAll(".fade-ani-above-fold-three")
      .forEach((container) => {
        observers.aboveFoldThree.observe(container);
      });

    // Observe images with fade-img classes
    document.querySelectorAll(".fade-img").forEach((img) => {
      imgObserver.observe(img);
    });
    document.querySelectorAll(".fade-img-two").forEach((img) => {
      imgObserverTwo.observe(img);
    });
    document.querySelectorAll(".fade-img-three").forEach((img) => {
      imgObserverThree.observe(img);
    });
    document.querySelectorAll(".fade-img-four").forEach((img) => {
      imgObserverFour.observe(img);
    });
  };

  window.addEventListener("DOMContentLoaded", observeElements);
  nuxtApp.hook("page:finish", observeElements);
});
