<template>
  <div
    class="flex backdrop bg-main fixed w-full flex-row items-center justify-end h-[80px] p-[10px] z-50 sm:hidden shadow-lg">
    <button class="" id="menu-toggle">
      <MenuOpenIcon :menuActive="menuActive"/>
      <MenuCloseIcon :menuActive="menuActive"/>
    </button>
  </div>
  <div
    class="bg-main fixed transition-all z-40 flex p-2 h-screen items-center top-0 w-full justify-center opacity-100 transition-all ease-in-out duration-300 sm:h-auto sm:backdrop-blur sm:flex-row sm:opacity-100 sm:translate-x-0 sm:fixed shadow-lg"
    id="menu" ref="menu" :class="
      scrollActive ? `-top-[${menuHeight}px]` : '',
      menuActive ? 'translate-x-0' : 'translate-x-full'
    ">
    <ul class="flex flex-col list-none sm:flex-row justify-between grow mx-10">
      <li>
        <a href="cv.pdf" download
          class="bg-main items-center justify-center flex-row p-2 rounded-sm gap-2 leading-relaxed border hidden sm:flex">
          <span>Resume</span>
          <DownloadIcon/>
        </a>
      </li>
      <div class="flex flex-col items-center gap-5 sm:flex-row sm:space-x-4">
        <li v-for="menu in menuItems" key="menu.to" class="flex relative flex-col transition-all duration-1000 hover:text-white">
          <router-link :to="{ name: 'home', hash: `#${menu.to}` }" class="menu-link">
            <MenuLink :heading="menu.heading" :subHeading="menu.subHeading" :to="menu.to" />
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import MenuLink from "./MenuLink.vue";
import MenuCloseIcon from "./svg/MenuCloseIcon.vue";
import MenuOpenIcon from "./svg/MenuOpenIcon.vue"
import DownloadIcon from "./svg/DownloadIcon.vue"

export default {
  name: "main-menu",

  components: {
    MenuLink,
    MenuCloseIcon,
    MenuOpenIcon,
    DownloadIcon
  },
  data: () => ({
    scrollActive: false,
    menuActive: false,
    menuItems: [
        { to: 'home', heading: 'Home', subHeading: 'Back to paradise' },
        { to: 'about', heading: 'About Me', subHeading: 'Learn about my boring life' },
        { to: 'projects', heading: 'Projects', subHeading: 'Check out all my projects' },
        { to: 'contact', heading: 'Contact', subHeading: 'Get in touch'}
      ],
    lastScrollTop: 0,
    menuHeight: 0
  }),
  methods: {
    handleMenuOpen(){
      if (this.menuActive) {
          window.document.body.classList.remove("menu-open");
          this.menuActive = false;
        } else {
          window.document.body.classList.add("menu-open");
          this.menuActive = true;
        }
    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      var w = document.documentElement.clientWidth || window.innerWidth;
      if (w > 640) {
        if (scrollTop > this.lastScrollTop && scrollTop > this.menuHeight) {
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
    this.menuHeight = this.$refs.menu.offsetHeight;
    var mobileToggle = document.getElementById("menu-toggle");
    var routes = document.getElementsByClassName("menu-link");
    Array.from(routes).forEach((element) => {
      element.addEventListener("click", ()=> this.handleMenuOpen());
    });
    mobileToggle.addEventListener("click", () => this.handleMenuOpen());
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", ()=> this.menuHeight = this.$refs.menu.offsetHeight);
  },
};
</script>
<style scoped>

.backdrop {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
