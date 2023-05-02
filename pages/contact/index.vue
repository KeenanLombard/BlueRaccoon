<template lang="">
  <div>
    <div class="flex mx-10 py-10">
      <div>
        <a @click="sendMail()"
          ><img class="icon" src="~/assets/icons/11.png" alt=""
        /></a>
      </div>
      <div>
        <a href=""><img class="icon" src="~/assets/icons/12.png" alt="" /></a>
      </div>
      <div>
        <a href="https://www.youtube.com/@BlueRaccoonSoftware"
          ><img class="icon" src="~/assets/icons/13.png" alt=""
        /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/blue-raccoon-pty-ltd/"
          ><img class="icon" src="~/assets/icons/14.png" alt=""
        /></a>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/Blue+Mountain+Blvd,+George,+6530/@-33.981921,22.4944945,17z/data=!3m1!4b1!4m6!3m5!1s0x1dd61b1666a1c51b:0xd4fb91cb3f28bbdd!8m2!3d-33.981921!4d22.4944945!16s%2Fg%2F11fk3yw37k?hl=en"
          ><img class="icon" src="~/assets/icons/15.png" alt=""
        /></a>
      </div>
    </div>

    <div class="grid gap-3 lg:grid-cols-3 md:grid-cols-1">
      <div
        v-for="item in data"
        class="block max-w-sm bg-gray-100 rounded-lg shadow-lg m-5 mx-auto">
        <div class="prt-6"></div>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {{ item.title }}
          </h5>
          <h5 class="mb-2 text-orange-500">
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

    <div>
      <contact />
    </div>
  </div>
</template>
<script setup>
const sendMail = () => {
  window.open(`mailto:info@blueraccoon.co.za`);
};

const data = ref([
  {
    title: "Self-Service Portal",
    text: "Self Help Service",
    sub_text:
      "Sign in to log queries, manage payments, view documentation and other services.",
    href: "http://go.blueraccoon.co.za/portal",
  },
  {
    title: "Book Consultation",
    text: "Free Service",
    sub_text:
      "Have a discussion with one of our digital transformation consultants",
    href: "https://go.blueraccoon.co.za/FreeConsult",
  },
  {
    title: "Become a partner",
    text: "Free Service",
    sub_text:
      "As a partner, you'll have access to our industry-leading technology and resources.",
    href: "https://go.blueraccoon.co.za/FreeConsult",
  },
]);
</script>
<style>
@media only screen and (max-width: 1550px) {
  .wrap {
    flex-direction: column;
  }
}
.contact {
  width: 26rem;
}
.icon {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 16rem;
  transition: 0.4s ease;
}
.icon:hover {
  /* width: 17rem; */
  border-bottom: 1px solid orange;
  width: 17rem;
  transition: 1s ease;
  cursor: pointer;
}
</style>
