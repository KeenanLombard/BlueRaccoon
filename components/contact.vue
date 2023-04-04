<template lang="">
  <div>
    <section class="gradient-form rounded h-full bg-neutral-200">
      <div class="container h-full md:p-5 sm:p-0 sm:p-5">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div class="w-full">
            <div class="block rounded-lg bg-white shadow-lg">
              <div class="g-0 lg:flex lg:flex-wrap">
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <div class="text-center">
                      <img
                        class="mx-auto w-25 h-25"
                        src="../assets/mail-vector.svg"
                        alt="logo" />
                      <h5
                        class="mt-1 mb-12 pb-1 text-xl font-semibold text-orange-400">
                        BlueRaccoon (PTY) Ltd
                      </h5>
                    </div>
                    <form>
                      <p class="mb-4 text-neutral-500">Shoot us a message</p>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                          id="exampleFormControlInput1"
                          v-model="name"
                          placeholder="Name" />
                      </div>
                      <div class="text-neutral-400">
                        <div class="mb-3">
                          <select
                            class="w-full h-full border rounded border-2 p-2"
                            v-model="intrest">
                            <option value="Workflow">Workflow</option>
                            <option value="Security">Security</option>
                            <option value="Automation">Automation</option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Applications Development">
                              Applications Development
                            </option>
                            <option value="Consulting">Consulting</option>
                            <option value="Microsoft Services">
                              Microsoft Services
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <textarea
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          v-model="message"
                          placeholder="Your message"></textarea>
                      </div>
                      <div class="mb-12 pt-1 pb-1 text-center">
                        <button
                          class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          @click="sendMail()"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style="
                            background: linear-gradient(
                              to right,
                              #ee7724,
                              #d8363a,
                              #dd3675,
                              #b44593
                            );
                          ">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-orange-600 to-orange-500">
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <img src="../assets/logo.svg" class="image mb-10" alt="" />
                    <h4 class="mb-6 text-center">
                      Email:
                      <a @click="sendMail()" class="hover:text-orange-300"
                        >info@blueraccoon.co.za</a
                      >
                    </h4>
                    <h4 class="mb-6 text-center">
                      Phone:
                      <a class="hover:text-orange-300">082-923-4004</a>
                    </h4>
                    <div class="flex justify-between">
                      <a
                        href="https://www.linkedin.com/company/blue-raccoon-pty-ltd/">
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="0 0 552.77 552.77"
                          xml:space="preserve">
                          <g>
                            <g>
                              <path
                                d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95
			C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z" />
                              <path
                                d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95
			C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z" />
                              <path
                                d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846
			c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192
			c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666
			c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343
			c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627
			c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48
			S535.836,228.581,525.732,215.282z" />
                            </g>
                          </g>
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@Objectiflune">
                        <svg
                          class="w-6 h-6"
                          fill="#000000"
                          width="800px"
                          height="800px"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.google.com/maps/place/Blue+Mountain+Blvd,+George,+6530/@-33.981921,22.4944945,17z/data=!3m1!4b1!4m6!3m5!1s0x1dd61b1666a1c51b:0xd4fb91cb3f28bbdd!8m2!3d-33.981921!4d22.4944945!16s%2Fg%2F11fk3yw37k?hl=en">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-black">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      intrest: "",
    };
  },
  methods: {
    sendMail() {
      window.open(
        `mailto:info@blueraccoon.co.za?subject=${this.name}, ${this.intrest}&body=${this.message}`
      );
    },
    sendEmail() {
      //send mail
    },
  },
};
</script>

<style lang=""></style>
