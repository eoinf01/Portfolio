<template>

  <div class="flex flex-col grow">
    <Intro />
    <About/>
    <Projects />
    <section class="h-screen">
      <Contact />
    </section>
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

      const fadeCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');

          }
          else {
            entry.target.classList.remove('active')
          }
        })
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
      console.log(this.sectionObserver)

      this.observer = new IntersectionObserver(fadeCallback, { root: document.body, threshold: 0.4, rootMargin: "0px 0px -50px 0px" });
      document.querySelectorAll('.fade-in').forEach((element) => {
        this.observer.observe(element);
      })
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


section {
  margin-top: 20px;
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

.menu-button {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0px;
  font-size: 2em;
  color: rgb(178, 178, 178);
  border-radius: 10px;
  border: 1px solid rgb(113, 113, 113);
}

.menu-button.active {
  right: 0;
}


.section-header {
  display: flex;
  justify-content: center;
  flex-direction: row;
}


li:hover {
  color: rgb(209, 209, 209);
}

.fade-in {
  transform: translateY(50%);
  opacity: 0;
  transition: all 500mw ease-in;
}

.fade-in.active {
  transform: translateY(0);
  opacity: 1;
}



@media (max-width: 35em) {

  h1 {
    font-size: 4em;
  }

  .project-section {

    flex-wrap: wrap;
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