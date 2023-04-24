<template lang="">
  <!-- <div class="bg-gradient-to-br from-gray-300 to-zinc-500"> -->
  <div class="w-screen back-img">
    <nav>
      <navBar />
    </nav>
    <main class="mx-auto min-h-screen">
      <div class="flex items-center justify-center">
        <slot />
      </div>
    </main>
  </div>
</template>
<script>
import navBar from "~~/components/nav.vue";
export default {
  components: { navBar },
};
</script>

<style lang="css">
.back-img {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.51'%3E%3Cpolygon fill='%23ffe8cc' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23ffd199' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ffbb66' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ffa433' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23FF8D00' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
