<template>

        <div class="content-container flex flex-col">
          <section class="text-white flex flex-col relative justify-center items-start bg-transparent gap-[10px] h-screen" id="home">
            <div class="intro-item">
              <h1 class="text-4xl text-white">Hello,<br/> I'm Eoin Fehily.</h1>
              <h3 class="after:content-[''] after:bg-white after:absolute after:top-0 after:bottom-0 after:w-0.5 after:right-0">&nbsp;{{ typedText }}</h3>
            </div>
            <div class="flex flex-row">
              <button class="bg-white text-black p-[10px] flex flex-row relative justify-center items-center cursor-pointer border-2 border-black rounded-sm ml-[5px] gap-[5px] before:content-[''] before:w-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:transition-all before:hover:w-full">
                <p class="text-white mix-blend-difference	">Resume</p><svg class="mix-blend-difference text-color" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </button>
            </div>
          </section>
          <h2 class="section-heading">ABOUT ME</h2>
          <section class="h-screen flex" id="about">
            <div class="basis-6/12 flex items-center p-[30px] flex-col justify-start bg-slate-800">
              <div class="flex h-full relative basis-3/12">
                <img class="object-cover w-[195px] h-[195px] rounded-full border border-white" src="../assets/IMG_0439.png"/>
              </div>
              <div class="m-[5px] text-white flex flex-col justify-center">
                <p>Date Of Birth: 24th February 2001</p>
                <p>Height: 6ft king</p>
                <p>Bio: </p>
              </div>
            </div>
          </section>
            <Projects/>
            <section class="h-screen">
            <Contact/>
            </section>
            </div>
        
    
</template>

<script>
import {mapStores } from 'pinia';
import { useActiveSectionStore } from '../stores/section';
import Contact from './Contact.vue';
import ProjectsVue from './Projects.vue';
import Projects from './Projects.vue';
export default {
  name: 'home-page',

  components: {
    Contact,
    ProjectsVue,
    Projects
},
  data: () => ({
    text: ["Born in Ireland.", "Studying at MTU.", "A Software Development Student.",],
    typedText: " ",
    index: 0,
    listIndex: 0,
    animationlength: 100,
    animation: "",
    transition: "",
    transform: "",
    sectionObserver: null,
    observer: null,
    isActive: false
  }),
  methods: {
    typedLoopForward() {
      if (this.index < this.text[this.listIndex].length) {
        this.typedText = this.typedText + this.text[this.listIndex][this.index];
        this.index++;
        setTimeout(this.typedLoopForward, this.animationlength)
      }
      else if (this.listIndex < this.text.length - 1) {
        this.typedLoopBackwards()
      }
      else {
        this.animation = `fade 500ms ease 5 forwards`;
        setTimeout(() => {
          this.transition = "transform 1000ms ease";
          this.transform = "scaleY(0)"
        }, 2500)
      }

    },
    typedLoopBackwards() {
      if (this.index >= 0) {
        this.index--;
        this.typedText = this.typedText.slice(0, this.index);
        setTimeout(this.typedLoopBackwards, 100);
      }
      else if (this.index < 0 && this.listIndex < this.text.length) {
        this.index = 0;
        this.listIndex++;
        this.typedLoopForward();
      }
    },
    intersectCallback(){

      const sectionCallback = (entries) => {
        entries.forEach((element) => {
            if(element.isIntersecting){
              this.sectionStore.section = element.target.id;
            }
          });
      }

      const fadeCallback = (entries) =>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                
            }
            else{
                entry.target.classList.remove('active')
            }
        })
      }

      let option = {
          root: null,
          rootMargin: '0px',
          threshold: 0.25
        }
       this.sectionObserver = new IntersectionObserver(sectionCallback,option);
        document.querySelectorAll('section').forEach(element=>{
          this.sectionObserver.observe(element)});
          console.log(this.sectionObserver)

        this.observer = new IntersectionObserver(fadeCallback,{root: document.body,threshold: 0.4,rootMargin: "0px 0px -50px 0px"});
        document.querySelectorAll('.fade-in').forEach((element)=>{
            this.observer.observe(element);
        })
        }

    },
  
  mounted() {
    this.intersectCallback();
    setTimeout(() => this.typedLoopForward(), 700);
  },
  computed: {
    ...mapStores(useActiveSectionStore),
    typed() {
      return this.typedText;
    },
    // animation(){
    //   return `textcursoranim 500ms ease ${this.text.length + 2} forwards`;
    // }
  }
}
</script>
<style>
* {
  font-family: "JetBrains Mono", sans-serif;
}
img{
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
section{
  margin-top: 20px;
}
p{
  color: #c4c4c4;
}
#app {
  background-color: black;
}

.content-container{
    padding: 0.5rem calc((100vw - 1300px) /2);

}

.red{
  background-color: #ff605c;
}
.orange{
background-color: #ffbd44;
}
.green{
  background-color: #00ca4e;
}

.socials-list:hover .socials-container{
    height: 27%;
}

.socials-container::after{
    content: '';
    position: absolute;
    bottom: 0;
    height: 0%;
    width: 2px;
    background-color: white;
}

.socials-container::before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 27%;
  width: 2px;
  background-color: lightgrey;
}


.socials-list {
  list-style: none;
  position: absolute;
  bottom: 27%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
}

.socials-list>li:hover {
  transform: translateY(-2px);
  transition: all 1s;
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

h3:after {
  -webkit-transform: v-bind(transform);
  -moz-transform: v-bind(transform);
  -o-transform: v-bind(transform);
  -ms-transform: v-bind(transform);
  transform: v-bind(transform);
  -webkit-transition: v-bind(transition);
  -moz-transition: v-bind(transition);
  -o-transition: v-bind(transition);
  transition: v-bind(transition);
  animation: v-bind(animation);
}


.section-header{
  display: flex;
  justify-content: center;
  flex-direction: row;
}


li:hover {
  color: rgb(209, 209, 209);
}

.fade-in{
    transform: translateY(50%);
    opacity: 0;
    transition: all 500mw ease-in;
}

.fade-in.active{
    transform: translateY(0);
    opacity: 1;
}



@media (max-width: 35em) {

  h1{
    font-size: 4em;
  }
  .project-section{
    
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