<template lang="">
  <div>
    <section class="gradient-form rounded h-full">
      <div class="container h-full md:p-5 sm:p-0 sm:p-5">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div class="w-full">
            <div class="block rounded-lg bg-white shadow-lg">
              <div class="g-0 lg:flex lg:flex-wrap">
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <div class="text-center mx-20">
                      <img
                        class="mx-auto w-52 h-25 mx-auto m-10"
                        src="../assets/mail-vector.svg"
                        alt="logo" />
                    </div>
                    <form>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                          id="exampleFormControlInput1"
                          v-model="name"
                          placeholder="Name" />
                      </div>
                      <div class="text-neutral-400">
                        <div class="mb-3">
                          <select
                            class="w-full h-full border rounded border-2 p-2"
                            v-model="intrest">
                            <option value="">I am interested in:</option>
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
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          v-model="message"
                          placeholder="Your message"></textarea>
                      </div>
                      <div class="mb-12 pt-1 pb-1 text-center">
                        <button
                          class="bg-gradient-to-r from-orange-600 to-orange-500 mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          @click="sendMail()"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none contact-img">
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <img src="../assets/logo.svg" class="image mb-10" alt="" />
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

<style lang="css">
.contact-img {
  background: url(~/assets/info/1.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
