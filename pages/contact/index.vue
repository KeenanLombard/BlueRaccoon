<template lang="">
  <div>
    <img class="contact" src="~/assets/contact.png" alt="" />

    <div class="grid lg:grid-cols-3 md:grid-cols-1">
      <div
        v-for="item in data"
        class="block max-w-sm bg-white rounded-lg shadow-lg m-5">
        <div class="prt-6"></div>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {{ item.title }}
          </h5>
          <h5 class="mb-2 text-orange-300">
            {{ item.text }}
          </h5>
          <p class="mb-4 text-base text-sm text-neutral-600">
            {{ item.sub_text }}
          </p>
          <a :href="item.href">
            <button
              type="button"
              class="inline-block rounded bg-orange-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = ref([
  {
    title: "Self-Service Portal",
    text: "Self Help Service",
    sub_text:
      "Sign in to log queries/issues, manage payments, view documentation and other services.",
    href: "http://go.blueraccoon.co.za/portal",
  },
  {
    title: "Shoot us a message",
    text: "Email",
    sub_text:
      "Contact our support team if you are unsure of the services that u require",
    href: "http://blueraccoon.co.za/contact/message",
  },
  {
    title: "Book Demo",
    text: "Free Service",
    sub_text:
      "Have a discussion with one of our digital transformation consultants",
    href: "https://go.blueraccoon.co.za/FreeConsult",
  },
  {
    title: "Book Technical",
    text: "Technical Advice",
    sub_text: "Request a session with one of our technical consultants",
    href: "https://go.blueraccoon.co.za/TechnicalConsult",
  },
  {
    title: "Book Pre-Sales",
    text: "Partner Service",
    sub_text: "Asisstance with guiding through a customer opportunity",
    href: "https://go.blueraccoon.co.za/partnerconsult",
  },
  {
    title: "Book Demo",
    text: "Guided Service",
    sub_text:
      "One of our team membars will perform a demo and guide you through the process",
    href: "https://go.blueraccoon.co.za/demorequest",
  },
]);
</script>
<style>
@media only screen and (max-width: 1250px) {
  .wrap {
    flex-direction: column;
  }
}
.contact {
  width: 26rem;
}
</style>
