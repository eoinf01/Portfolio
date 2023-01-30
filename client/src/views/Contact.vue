<template>
  <section class="mt-[60px] bg-[#111112]" id="contact">
    <div
      class="flex flex-col mt-[60px] justify-center px-[3%] sm:px-[10%] py-[5%]"
    >
      <div class="flex flex-col self-center items-center justify-center">
        <h3 class="text-4xl sm:text-5xl">Let's get in touch.</h3>
        <p class="text-md">Hit me up if you want to chat!</p>
      </div>
      <Form
        id="form"
        action="https://public.herotofu.com/v1/14cecf90-1351-11ed-a231-a93ebcec281d"
        method="post"
        class="m-auto mt-[60px] w-[70%] self-center flex flex-col justify-between items-center gap-[30px]"
        @submit="handleEmail"
        :validation-schema="emailSchema"
      >
        <div class="flex flex-col sm:flex-row gap-[20px] grow w-full">
          <div class="flex flex-col basis-6/12">
            <p class="text-xs">Name</p>
            <Field
              name="from_name"
              type="text"
              v-slot="{ field, errorMessage }"
            >
              <input
                type="text"
                placeholder="Enter your name"
                v-bind="field"
                class="focus:placeholder:text-white border-b border-[#b5b5b5] transition-all duration-300 outline-none focus:border-white focus:border-b bg-transparent"
              />
            </Field>
            <ErrorMessage name="from_name" class="text-red-600 text-xs" />
          </div>
          <div class="flex flex-col basis-6/12">
            <p class="text-xs">Email</p>
            <Field
              name="reply_to"
              type="email"
              v-slot="{ field, errorMessage }"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                v-bind="field"
                class="w-full focus:placeholder:text-white border-b border-[#b5b5b5] transition-all duration-300 outline-none focus:border-white focus:border-b bg-transparent"
              />
            </Field>
            <ErrorMessage name="reply_to" class="text-red-600 text-xs" />
          </div>
        </div>
        <div class="flex flex-col w-full">
          <p class="text-xs">Message</p>
          <Field
            name="message"
            type="text"
            v-slot="{ field, errorMessage, meta }"
          >
            <input
              type="text"
              placeholder="Enter your message"
              v-bind="field"
              class="w-full border-b focus:placeholder:text-white border-[#b5b5b5] transition-all duration-300 outline-none focus:border-white focus:border-b bg-transparent"
            />
          </Field>
          <ErrorMessage name="message" class="text-red-600 text-xs" />
        </div>
        <div
          class="flex flex-row opacity-0 items-center mt-[30px] w-full justify-center items-center"
          id="button"
        >
          <button
            class="form-button bg-white text-black px-[40px] py-[10px] flex flex-row relative justify-center items-center cursor-pointer transition-all ml-[5px] gap-[5px] before:content-[''] before:absolute before:top-[0px] before:bottom-[0px] before:left-[0px] before:right-[0px] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all after:content-[''] after:absolute after:bg-black after:top-[1px] after:bottom-[1px] after:left-[1px] after:right-[1px] hover:after:bottom-[2px] hover:after:right-[2px] hover:after:left-[2px] hover:after:top-[2px] after:transition-all hover:after:bg-[#212121]"
          >
            <span class="button-text z-[2]" id="button-text">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="fill-white"
              class="w-6 h-6 text-white fill-white z-[2]"
            >
              <path
                fill-rule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p class="button-error" id="error-message"></p>
      </Form>
      
    </div>
  </section>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha';
import emailjs from "@emailjs/browser";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  data() {
    const emailSchema = yup.object({
      from_name: yup.string().required().label("Name"),
      reply_to: yup.string().required().email().label("Email address"),
      message: yup.string().required().label("Message"),
    });
    return {
      emailSchema,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    VueRecaptcha
  },
  methods: {
    async handleEmail(values) {
      var text = document.getElementById("button-text");
      var button = document.getElementsByClassName("form-button")[0];
      var message = document.getElementById("error-message");
      button.classList.add("button-loading");
      await emailjs
        .sendForm(
          "service_hays1go",
          "contact_form",
          "#form",
          "2Om7pSy2Y6_rpXg2U"
        )
        .then((result) => {
          let sound = new Audio("src/assets/sent.wav");
          sound.play();
          console.log(result);
          button.classList.remove("button-loading");
          text.innerText = "Sent!";
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => {
            button.classList.remove("button-loading");
            message.innerText = "Error occured. Please try again.";
          }, 1500);
        });
      setTimeout(() => {
        text.innerText = "Send";
      }, 5000);
    },
  },
  mounted() {},
};
</script>
<style>
.new-bg {
  background: radial-gradient(100% 225% at 0% 100%, #ff04f5 0%, #001aff 100%),
    linear-gradient(270deg, #fb00a5 50%, #0400cb 100%),
    linear-gradient(300deg, #8dada4 0%, #32de81 100%),
    linear-gradient(7deg, #1dadfe 0%, #16009a 50%);
  background-blend-mode: color-dodge, color-burn, color-burn, normal;
}

.button-loading .button-text {
  visibility: hidden;
}

.form-button.button-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  aspect-ratio: 1;
  right: 0;
  left: 0;
  top: 0;
  border: 4px solid transparent;
  border-top: 3px solid white;
  transition: all 0.2 ease-in;
  border-radius: 50%;
  bottom: 0;
  margin: auto;
  animation: loader 1s linear 0s infinite;
}

.form-button::after {
}

.button-error {
  font-size: 0.8em;
  color: red;
}

@keyframes loader {
  0% {
    transform: rotate(0.2turn);
  }

  25% {
    transform: rotate(0.4turn);
  }

  50% {
    transform: rotate(0.6turn);
  }

  75% {
    transform: rotate(0.8turn);
  }

  100% {
    transform: rotate(1.2turn);
  }
}
</style>
