<template>
  <div class="dark overflow-hidden">
    <div class="flex flex-col w-full h-full bg-white dark:bg-[#030303]">
      <div class="flex flex-col h-screen">
        <MenuHeader />
        <Intro />
      </div>
      <div class="flex items-start justify-center flex-col">
        <Home />
      </div>
      <aside id="socials"
        class="before:hidden before:bg-black hidden dark:before:bg-white socials-container flex flex-row sm:fixed sm:w-[10%] sm:flex-col sm:flex sm:left-0 items-center justify-center sm:h-full sm:basis-[10%] lg:flex sm:before:flex">
        <h2
          class="hidden font-bold text-transparent text-stroke absolute text-2xl text-center ml-[-30px] bottom-[10%] opacity-[75%] rotate-[-90deg] leading-none text-black sm:flex">
          socials.
        </h2>
        <ul
          class="socials-list list-none sm:absolute flex flex-row items-center sm:flex-col gap-1 sm:bottom-[28%] content-center">
          <li class="transition-all hover:text-white hover:translate-y-[-2px] cursor-pointer">
            <a href="https://github.com/eoinf01" target="_blank"><svg id="logo"
                class="scale-0 hover:fill-white fill-black dark:fill-white" fill="rgb(190, 190, 190)"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path
                  d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
          </li>
          <li class="transition-all hover:text-white hover:translate-y-[-2px] cursor-pointer">
            <a href="https://www.linkedin.com/in/eoinfehily/" target="_blank">
              <svg id="logo" class="scale-0 fill-black dark:fill-white hover:fill-white" fill="rgb(190, 190, 190)"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z" />
              </svg>
            </a>
          </li>
          <li class="transition-all hover:text-white hover:translate-y-[-2px] cursor-pointer">
            <a href="https://www.instagram.com/eoinyf/" target="_blank">
              <svg id="logo" class="scale-0 fill-black dark:fill-white hover:fill-white" width="25" height="25"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="currentColor" />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="currentColor" />
              </svg>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
// don't forget to register plugins
import MenuHeader from "./components/Menu.vue";
import Home from "./views/Home.vue";
import gsap from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Intro from "./views/Intro.vue";
gsap.registerPlugin(CSSRulePlugin);

export default {
  name: "App",

  components: {
    MenuHeader,
    Home,
    Intro,
  },
  data: () => ({
    text: [
      "Born in Ireland.",
      "Studying at MTU.",
      "A Software Development Student.",
    ],
    typedText: " ",
    index: 0,
    listIndex: 0,
    animationlength: 100,
    animation: "",
    transition: "",
    transform: "",
    isActive: false,
  }),
  mounted() {
    let tl = gsap.timeline()
    let rule = CSSRulePlugin.getRule('.socials-container:before');
    tl.from(rule, { duration: 1, height: '0%' })
    const logos = gsap.utils.toArray('#logo')
    logos.forEach((logo) => {
      tl.to(logo, { scale: 1 })
    })

  }
};
</script>
<style>
cursor {
  cursor: none;
}

.socials-container::before {
  content: '';
  height: 27%;
  position: absolute;
  width: 2px;
  bottom: 0px;
  opacity: 1;
}

* {
  font-family: "Poppins", sans-serif;
  color: white;
  scroll-behavior: smooth;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0%;
}

.text-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

body {
  margin: 0px;
  background-color: black;
  overflow-x: hidden;
}

body.menu-open {
  touch-action: none;
}
</style>
