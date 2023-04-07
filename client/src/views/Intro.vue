<template>
  <section
    class="text-white flex flex-col grow relative  max-w-5xl self-center justify-center items-start  h-[80vh] gap-[10px] px-[3%] sm:px-[10%]"
    id="home">
    
    <div class="flex flex-col justify-center items-center self-center text-xl gap-4 sm:text-3xl transition-all">
          <img class="object-cover w-[195px] h-[195px] rounded-full scale-0"
            src="../assets/IMG_0439.png" id="profile-pic" />
          <p class="text-sm text-my-grey-100">Hi, I'm Eoin!</p>
          <h3 id="subIntro"
          class="opacity-0 text-center max-w-sm sm:max-w-md lg:max-w-xl">
          &nbsp;{{ typedText }}
          <span class=" sub-text after:content-[''] relative after:absolute after:left-1 after:top-0 after:bottom-0 after:bg-my-grey-100 after:w-0.5 after:h-auto"> </span>
        </h3>
    </div>
    <div class="flex items-center justify-center flex-col absolute bottom-0 self-center opacity-0" id="scroll">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce stroke-black dark:stroke-white"
        viewBox="0 0 24 24" stroke="black dark:white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <p class="text-black dark:text-white">learn more</p>
    </div>
  </section>
</template>
<script>
import gsap from "gsap";
export default {
  name: "",
  components: {
    gsap,
  },
  data: () => ({
    text: "Explore my passion for coding and innovation through my portfolio as a software development student.",
    typedText: "",
    index: 0,
    animationlength: 40,
    animation: "",
    transition: "",
    transform: "",
  }),
  methods: {
    typedLoopForward() {
      if (this.index < this.text.length) {
        this.typedText = this.typedText + this.text[this.index];
        this.index++;
        setTimeout(this.typedLoopForward, this.animationlength);
      } else {
        this.animation = `fade 500ms ease 5 forwards`;
        setTimeout(() => {
          this.transition = "transform 1000ms ease";
          this.transform = "scaleY(0)";
        }, 2500);
      }
    },
  },
  mounted() {
    let timeline = gsap.timeline({});
    gsap.to("#profile-pic", { scale: 1, duration: 1, ease: "back.out(1.7)" })
    gsap.to("#scroll", { opacity: 1, duration: 1 });
    timeline
      .to("#subIntro", {
        opacity: 1,
        duration: 0.5,
        onComplete: this.typedLoopForward,
      })

    let fadeOut = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "60%",
        end: "bottom",
      },
      defaults: {
        overwrite: "auto",
      },
    });
    fadeOut.to("#scroll", { opacity: 0, duration: 1 });
  },
};
</script>
<style>
.sub-text:after {
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
.bg-svg {
  background-image: url("../assets/pattern.svg");
background-size: 100%;
background-color: rgba(255, 255, 255, 0);
}
</style>
