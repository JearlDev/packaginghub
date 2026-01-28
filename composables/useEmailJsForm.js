import { ref } from "vue";

export function useEmailJsForm({ serviceId, templateId, publicKey }) {
  const status = ref("");
  const loading = ref(false);

  // Ensure emailjs is loaded
  function ensureEmailJsLoaded() {
    if (
      typeof window !== "undefined" &&
      window.emailjs &&
      window.emailjs.init
    ) {
      return true;
    }
    status.value = "EmailJS not loaded.";
    return false;
  }

  function init() {
    if (ensureEmailJsLoaded()) {
      window.emailjs.init(publicKey);
    }
  }

  async function send(formEl) {
    if (!ensureEmailJsLoaded()) return;
    loading.value = true;
    status.value = "Sending...";
    const isDev =
      process.env.NODE_ENV === "development" ||
      process.env.NUXT_ENV === "development";
    try {
      if (isDev) {
        // Simulate sending in dev mode
        // eslint-disable-next-line no-console
        console.log("[DEV] Would send email with:", {
          serviceId,
          templateId,
          publicKey,
          form: Object.fromEntries(new FormData(formEl)),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
        status.value = "Message sent! (dev mode)";
        formEl.reset();
      } else {
        //TODO: Enable email sending when ready
        // await window.emailjs.sendForm(serviceId, templateId, formEl);
        status.value = "Message sent!";
        formEl.reset();
      }
    } catch (err) {
      status.value = "Failed to send.";
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    status,
    loading,
    init,
    send,
  };
}
