<template lang="">
  <div>
    <h1 class="text-center text-xl p-5">
      <strong>Some of our happy customers</strong>
    </h1>
    <hr class="m-5" />
    <div class="flex">
      <div class="flex flex-col clients">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/mtn.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/fair_cape.png" alt="" />
        </div>
      </div>
      <div class="flex flex-col clients">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/mercantile.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/parlement.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col clients">
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/waltons.png" alt="" />
        </div>
        <div class="p-1 m-5 sm:m-0">
          <img class="img" src="~/assets/motus.png" alt="" />
        </div>
      </div>
      <div class="flex flex-col clients">
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
  max-width: 12rem;
  border-radius: 10px;
  margin: 30px;
}
@media screen and (max-width: 900px) {
  .clients {
    flex-direction: column;
  }
}
</style>
