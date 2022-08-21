<template>
  <div class="flex fixed w-full flex-row items-center justify-end bg-black h-[50px] p-[10px] z-50 sm:hidden">
    <button class="" id="menu-toggle">
      <svg v-if="!menuActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd" />
      </svg>
      <svg v-if="menuActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div
    class="after:hidden fixed transition-all z-40 flex flex-col items-center h-screen top-0 w-full bg-black justify-center opacity-100 transition-all ease-in-out duration-300 sm:after:content[''] sm:after:absolute sm:after:h-[2px] sm:after:w-full sm:after:bottom-0 sm:after:bg-gradient-to-r from-cyan-500 to-blue-500 sm:justify-end sm:items-center sm:h-[50px] sm:flex-row sm:opacity-100 sm:translate-x-0 sm:after:block sm:flex"
    id="menu" :class="scrollActive ? 'hide' : '', menuActive ? 'translate-x-0' : 'translate-x-full'">
    <ul class="flex flex-col list-none gap-[25px] text-slate-200 relative sm:flex-row sm:mr-[20px]">
      <li class="flex relative flex-col transition-all duration-1000 hover:text-white">
        <router-link :to="{ name: 'home', hash: '#home' }" class="menu-link">
          <MenuLink heading="HOME" subHeading="Back to paradise" to="home" />
        </router-link>
      </li>
      <li class="flex relative flex-col transition-all duration-1000">
        <router-link :to="{ name: 'home', hash: '#about' }" class="menu-link">
          <MenuLink heading="ABOUT ME" subHeading="Learn about my boring life" to="about" />
        </router-link>
      </li>
      <li class="flex relative flex-col transition-all duration-1000">
        <router-link :to="{ name: 'home', hash: '#projects' }" class="menu-link">
          <MenuLink heading="PROJECTS" subHeading="Check out all my projects" to="projects" />
        </router-link>
      </li>
      <li class="flex relative flex-col transition-all duration-1000">
        <router-link :to="{ home: 'home', hash: '#contact' }" class="menu-link">
          <MenuLink heading="CONTACT ME" sub-heading="Write me a letter" to="/contact" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "../router";
import MenuLink from "./MenuLink.vue";

export default {
  name: "main-menu",

  components: {
    MenuLink,
  },
  data: () => ({
    scrollActive: false,
    menuActive: false,
    lastScrollTop: 0,
  }),
  methods: {

    activateMenu() {

    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      var menuHeight = document.getElementById('menu').clientHeight;
      var w = document.documentElement.clientWidth || window.innerWidth;
      if (w > 640) {
        if (scrollTop > this.lastScrollTop && scrollTop > menuHeight) {
          this.scrollActive = true;
        } else if (scrollTop < this.lastScrollTop) {
          this.scrollActive = false;
        }
        this.lastScrollTop = scrollTop;
      }
      else {
        this.scrollActive = false;
      }
    },
  },
  mounted() {

    var mobileToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');
    var routes = document.getElementsByClassName('menu-link');
    Array.from(routes).forEach((element) => {
      element.addEventListener('click', () => {
        if (this.menuActive) {
          window.document.body.classList.remove('menu-open')
          this.menuActive = false;
        }
        else {
          window.document.body.classList.add('menu-open')
          this.menuActive = true;
        }
      })
    })

    mobileToggle.addEventListener('click', () => {
      console.log(this.menuActive)
      if (this.menuActive) {
        window.document.body.classList.remove('menu-open')
        this.menuActive = false;
      }
      else {
        window.document.body.classList.add('menu-open')
        this.menuActive = true;
      }
    })

    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.hide {
  top: -50px;
}


@keyframes textcursoranim {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
