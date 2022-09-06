<template>

  <div class="flex flex-col grow ">
    <About/>
    <Projects ref="projects" />
      <Contact class=""/>
  </div>


</template>

<script>
import { mapStores } from 'pinia';
import { useActiveSectionStore } from '../stores/section';
import Contact from './Contact.vue';
import Projects from './Projects.vue';
import Intro from './Intro.vue';
import About from './About.vue';
export default {
  name: 'home-page',

  components: {
    Contact,
    Projects,
    Intro,
    About,
    About
},
  data: () => ({
    sectionObserver: null,
    observer: null,
    isActive: false
  }),
  methods: {
    intersectCallback() {

      const sectionCallback = (entries) => {
        entries.forEach((element) => {
          if (element.isIntersecting) {
            this.sectionStore.section = element.target.id;
          }
        });
      }


      let option = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
      }
      this.sectionObserver = new IntersectionObserver(sectionCallback, option);
      document.querySelectorAll('section').forEach(element => {
        this.sectionObserver.observe(element)
      });
    }

  },

  mounted() {
   this.intersectCallback();
  },
  computed: {
    ...mapStores(useActiveSectionStore),
  }
}
</script>
<style>
* {
  font-family: "JetBrains Mono", sans-serif;
}



p {
  color: #c4c4c4;
}

#app {
  background-color: black;
}

.red {
  background-color: #ff605c;
}

.orange {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

h3 {
  margin-top: -10px;
  font-family: "Montserrat", sans-serif;
  position: relative;
  font-weight: 300;
  padding: 0px 4px 0px 0px;
  width: max-content;
  color: white;

}

h1 {
  margin-top: -15px;
  font-size: 7em;
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