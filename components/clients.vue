<template lang="">
  <div>
    <h1 class="text-center text-neutral-600 text-xl p-5">
      Some of our happy customers
    </h1>
    <hr class="m-5" />
    <div class="flex">
      <div class="flex flex-col clients lg:mx-20 md:mx-10 sm:mx-0">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/mtn.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/fair_cape.png" alt="" />
        </div>
      </div>
      <div class="flex flex-col clients lg:mx-20 md:mx-10 sm:mx-0">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/mercantile.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/parlement.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col clients lg:mx-20 md:mx-10 sm:mx-0">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/waltons.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/motus.png" alt="" />
        </div>
      </div>
      <div class="flex flex-col clients lg:mx-20 md:mx-10 sm:mx-0">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/standard_bank.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/waste_group.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 12rem;
  max-height: 6rem;
  border-radius: 10px;
  margin: 30px;
}
@media screen and (min-width: 1300px) {
  .clients {
    flex-direction: row;
  }
}
@media screen and (max-width: 700px) {
  .img {
    max-width: 5rem;
  }
}
</style>
