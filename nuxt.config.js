// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Blue Raccoon - Solve & Simplify",
      meta: [
        {
          name: "Home",
          content:
            "Solve & Simplify Complex process challenges using custom software solutions and business automation, serves all aspects of software development lifecycle",
        },
      ],
    },
  },
});
