<template lang="">
  <!-- <div class="bg-gradient-to-br from-gray-300 to-zinc-500"> -->
  <div class="w-screen">
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
