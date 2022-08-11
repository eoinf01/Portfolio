<template>
  <div class="mobile-menu flex fixed w-full flex-row items-end justify-end bg-black h-auto p-[10px] z-50 sm:hidden">
    <button class="mobile-menu-toggle" id="menu-toggle">

    </button>
  </div>
  <div
    class="menu after:hidden fixed transition-all z-40 flex flex-col items-center h-screen top-0 w-full bg-black justify-center opacity-100 transition-all ease-in-out duration-300 sm:after:content[''] sm:after:absolute sm:after:h-[2px] sm:after:w-full sm:after:bottom-0 sm:after:bg-gradient-to-r from-cyan-500 to-blue-500 sm:justify-end sm:items-center sm:h-[50px] sm:flex-row sm:opacity-100 sm:translate-x-0 sm:after:block sm:flex"
    id="menu" :class="scrollActive ? 'hide' : '', menuActive ? 'translate-x-0' : 'translate-x-full'">
    <ul class="flex flex-col list-none gap-[25px] text-slate-200 relative sm:flex-row">
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
    text: [
      "Born in Ireland.",
      "Studying at MTU.",
      "A Software Development Student.",
    ],
    typedText: " ",
    index: 0,
    listIndex: 0,
    scrollActive: false,
    menuActive: false,
    animationlength: 100,
    animation: "",
    transition: "",
    transform: "",
    lastScrollTop: 0,
  }),
  methods: {
    typedLoopForward() {
      if (this.index < this.text[this.listIndex].length) {
        this.typedText = this.typedText + this.text[this.listIndex][this.index];
        this.index++;
        setTimeout(this.typedLoopForward, this.animationlength);
      } else if (this.listIndex < this.text.length - 1) {
        this.typedLoopBackwards();
      } else {
        this.animation = `fade 500ms ease 5 forwards`;
        setTimeout(() => {
          this.transition = "transform 1000ms ease";
          this.transform = "scaleY(0)";
        }, 2500);
      }
    },
    typedLoopBackwards() {
      if (this.index >= 0) {
        this.index--;
        this.typedText = this.typedText.slice(0, this.index);
        setTimeout(this.typedLoopBackwards, 100);
      } else if (this.index < 0 && this.listIndex < this.text.length) {
        this.index = 0;
        this.listIndex++;
        this.typedLoopForward();
      }
    },
    activateMenu() {

    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      var menuHeight = document.getElementsByClassName('menu')[0].clientHeight;
      var w = document.documentElement.clientWidth || window.innerWidth;
      if(w > 640){
          if (scrollTop > this.lastScrollTop && scrollTop > menuHeight) {
          this.scrollActive = true;
        } else if (scrollTop < this.lastScrollTop) {
          this.scrollActive = false;
        }
        this.lastScrollTop = scrollTop;
      }
      else{
        this.scrollActive = false;
      }
    },
  },
  mounted() {
    setTimeout(() => this.typedLoopForward(), 700);

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
  computed: {
    typed() {
      return this.typedText;
    },
    // animation(){
    //   return `textcursoranim 500ms ease ${this.text.length + 2} forwards`;
    // }
  },
};
</script>
<style scoped>
.hide {
  top: -50px;
}

@media (max-width: 35em) {
  .mobile-menu-toggle {
    width: 1em;
    background-color: white;
    aspect-ratio: 1;
    z-index: 1000;
    margin: 0px 10px;
  }
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
