<template lang="">
  <div class="mx-auto main">
    <Head>
      <Title>Blue Raccoon - Solve & Simplify</Title>
      <Meta
        name="Home, About Us, Testemonials"
        content="Solve and simplify complex software problems, About us, testemonails" />
    </Head>

    <div
      class="relative text-center overflow-hidden bg-no-repeat bg-cover vid"
      style="background-position: 20%; height: 500px"></div>
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
      <div class="text-center text-gray-800">
        <div
          class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
          style="
            margin-top: -170px;
            background: hsla(0, 0%, 100%, 0.7);
            backdrop-filter: blur(30px);
          ">
          <h1
            class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
            Digital Solutions to, <br /><span class="text-orange-500"
              >Solve & Simplify</span
            >
            <br />Complex Process Challenges
          </h1>
          <nuxt-link
            class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            to="/process"
            role="button"
            >Learn More</nuxt-link
          >
          <div class="m-10">
            <h1 class="text-center text-neutral-600 text-xl">
              <strong>Master Distributer</strong>
            </h1>
            <p class="text-center text-neutral-500">for SADC Region</p>
            <div>
              <img class="ol mx-auto" src="~/assets/ol.png" alt="" />
              <img class="ul mx-auto" src="~/assets/4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto rounded shadow-xl sm:mx-20 p-20 m-20 bg-white">
      <ol
        class="border-l border-slate-500 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        <li>
          <div class="flex-start flex items-center pt-2 md:block md:pt-0">
            <div
              class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
            <p class="mt-2 text-sm text-neutral-500">2008</p>
          </div>
          <div class="mt-2 ml-4 pb-5 md:ml-0">
            <h4 class="mb-1.5 text-xl font-semibold">Our origin</h4>
            <p class="mb-3 text-neutral-600">
              Blue Raccoon was founded in 2020 however its history dates back to
              2008 when Objectif Lune Inc established its presence in South
              Africa. Objectif Lune South Africa directly served the African
              Continent consulting, supplying and implementing Objectif Lune
              Software and services.
            </p>
          </div>
        </li>
        <li>
          <div class="flex-start flex items-center pt-2 md:block md:pt-0">
            <div
              class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
            <p class="mt-2 text-sm text-neutral-500">2020</p>
          </div>
          <div class="mt-2 ml-4 pb-5 md:ml-0">
            <h4 class="mb-1.5 text-xl font-semibold">The Evolution</h4>
            <p class="mb-3 text-neutral-600">
              Since then we continued to trade as Objectif Lune South Africa
              growing, our partner and install base. The OL Connect software
              suite with advanced data-mapping capabilities and a world class
              workflow engine broadened our base to system integration and
              process automation partners.
            </p>
          </div>
        </li>
        <li>
          <div class="flex-start flex items-center pt-2 md:block md:pt-0">
            <div
              class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
            <p class="mt-2 text-sm text-neutral-500">2023</p>
          </div>
          <div class="mt-2 ml-4 pb-5 md:ml-0">
            <h4 class="mb-1.5 text-xl font-semibold">Where we are today...</h4>
            <p class="mb-3 text-neutral-600">
              Positioned as Blue Raccoon (PTY) Ltd, a business focusing on
              process orientated solutions, on a mission to solve and simplify
              complex business processes. Through years of experience in
              consulting and implementation, we pride ourselves in remaining
              customer centric and respecting the strategic goals of our
              clients.
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="css">
.vid {
  background: linear-gradient(rgba(0, 0, 0, 0.174), rgba(0, 0, 0, 0.1)),
    url(~/assets/peoples.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ol {
  width: 20rem;
  transition: 0.5s ease;
}
.ul {
  width: 10rem;
  transition: 0.5s ease;
}
.ol:hover {
  width: 22rem;
  transition: 0.5s ease;
  cursor: pointer;
}
.ul:hover {
  width: 12rem;
  transition: 0.5s ease;
  cursor: pointer;
}
</style>
