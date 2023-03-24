<template lang="">
  <div>
    <Head>
      <Title>Blue Raccoon - Solve & Simplify</Title>
      <Meta
        name="Home, About Us, Testemonials"
        content="Solve and simplify complex software problems, About us, testemonails" />
    </Head>

    <div>
      <div
        class="quote w-screen text-center text-white flex flex-col mx-auto"></div>
    </div>

    <div class="p-10">
      <timeline />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="css">
.quote {
    background: linear-gradient(rgba(0, 0, 0, 0.274), rgba(0, 0, 0, 0.7)),
    url(~/assets/back.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 15rem 1rem;
}
</style>
