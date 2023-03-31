<template lang="">
  <div class="flex flex-col justify-center mx-auto wrap">
    <Head>
      <Title>Blue Raccoon - Solve & Simplify</Title>
      <Meta
        name="Home, About Us, Testemonials"
        content="Solve and simplify complex software problems, About us, testemonails" />
    </Head>

    <div class="mx-auto">
      <markets />
    </div>

    <div class="mx-auto">
      <clients class="mx-auto" />
    </div>
  </div>
</template>
<script>
import clients from "~/components/clients.vue";
export default {
  components: { clients },
};
</script>
<style lang=""></style>
