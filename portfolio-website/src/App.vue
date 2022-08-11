<template>
  <div class="wrapper">
    <MenuHeader />
    <aside class="socials-container">
      <ul class="socials-list">
        <li>
          <a href="http://www.twitter.com/"
            ><svg
              fill="rgb(190, 190, 190)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="30px"
              height="30px"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
              </a>
        </li>
        <li>
          <svg
            fill="rgb(190, 190, 190)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="30px"
            height="30px"
          >
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z"
            />
          </svg>
        </li>
        <li>
          <svg
            fill="rgb(190, 190, 190)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
            />
          </svg>
        </li>
      </ul>
    </aside>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuHeader from "./components/Menu.vue";
import Preloader from "./views/Preloader.vue";

export default {
  name: "App",

  components: {
    MenuHeader,
    Preloader
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
    activateSidebar() {
      this.isActive = !this.isActive;
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
  },
  mounted() {
    setTimeout(() => this.typedLoopForward(), 700);
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
<style>
* {
  font-family: "JetBrains Mono", sans-serif;
  color: white;
  scroll-behavior: smooth;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0%;
}
body{
  margin: 0px;
  background-color: black;
  overflow-x: hidden;
}
body.menu-open{
    touch-action: none;
  }
#app {
  background: linear-gradient(0deg,hsla(0,0%,8%,0),#151515);
}

.socials-container {
  display: flex;
  position: fixed;
  width: 10%;
  flex-direction: column;
  flex: 1 10%;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.socials-list {
  list-style: none;
  position: absolute;
  bottom: 27%;
  padding-inline-start: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
}
.socials-list > li{
  transition: all 1s;
}
.socials-list > li:hover {
  color: white;
}

.main-wrapper {
  display: flex;
  flex: 1 100%;
  align-items: flex-start;
  padding: 0px 60px 0px 100px;
  justify-content: center;
  flex-direction: row;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
svg:hover{
  fill: white;
}
@media (max-width: 35em){
  .socials-container{
    display: none;
  }
  .main-wrapper{
    padding: 20px;
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
