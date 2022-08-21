<template>
    <section class="text-white flex flex-col relative justify-center items-start bg-transparent gap-[10px] h-screen grow"
        id="home">
        <div class="intro-item">
            <h1 class="text-5xl sm:text-6xl md:text-8xl text-white font-extralight">Hello,<br />I'm <span class=" heading-text font-bold">Eoin Fehily.</span></h1>
            <h3
                class="sub-text text-lg after:content-[''] after:bg-white after:absolute after:top-0 after:bottom-0 after:w-0.5 after:right-0">
                &nbsp;{{ typedText }}</h3>
        </div>
        <div class="flex flex-row">
            <button
                class="bg-white text-black px-[15px] py-[10px] flex flex-row relative justify-center items-center cursor-pointer transition-all rounded-md ml-[5px] gap-[5px] before:content-[''] before:absolute before:top-[0px] before:bottom-[0px] before:left-[0px] before:right-[0px] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:rounded-md after:content-[''] after:absolute after:bg-black after:top-[1px] after:bottom-[1px] after:left-[1px] after:right-[1px] after:rounded-md hover:after:bottom-[2px] hover:after:right-[2px] hover:after:left-[2px] hover:after:top-[2px] after:transition-all hover:after:bg-[#212121]">
                <p class="text-white mix-blend-difference z-[2]">Resume</p><svg class=" z-[2] text-color"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: '',
    data: () => ({
        text: ["Born in Ireland.", "Studying at MTU.", "A Software Development Student.",],
        typedText: " ",
        index: 0,
        listIndex: 0,
        animationlength: 100,
        animation: "",
        transition: "",
        transform: ""
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
    },
    mounted() {
        setTimeout(() => this.typedLoopForward(), 700);
    },
    computed: {
        typed() {
            return this.typedText;
        },
    }
}</script>
<style>
.heading-text{
    background-image: url('../assets/stacked-waves-haikei.png');
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  background-size: 100% 100%;
  -moz-text-fill-color: transparent;
  transition: all 250ms ease-in;
}
.sub-text:after{
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

</style>