<template lang="">
  <div class="rounded shadow-xl p-10 mt-20">
    <img class="w-32 mx-auto" src="~/assets/logo_orange.svg" alt="" />
    <header class="text-xl mt-10 mb-10 text-center">
      Partner Portal Log-in
    </header>
    <div>
      <div class="flex flex-col">
        <label class="text-sm text-neutral-500" for="email">Email</label>
        <input
          v-model="email"
          class="p-2 border rounded"
          plaveholder="name@gmail.com"
          name="email"
          type="email" />
      </div>
      <div class="flex flex-col">
        <label class="text-sm text-neutral-500" for="password">Password</label>
        <input
          v-model="password"
          class="p-2 border rounded"
          name="password"
          type="password" />
      </div>
    </div>
    <div>
      <p class="text-center text-red-500">{{ error }}</p>
    </div>
    <div>
      <button
        @click="submitDetails()"
        class="text-center w-full bg-orange-500 mt-10 text-neutral-500 hover:bg-orange-600 hover:text-white rounded py-2">
        Login
      </button>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    submitDetails() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          this.error = "";
          alert("Being directed to sharepoint");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.error = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.error = "Account does not exist";
              break;
            case "auth/wrong-password":
              this.error = "Incorrect Password";
              break;
            default:
              this.error = "Email or Password incorrect";
              break;
          }
        });
    },
  },
};
</script>
<style lang=""></style>
