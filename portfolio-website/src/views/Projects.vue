<template>
    <div class="relative">
        <div
            class="bg-slate-500 rounded-full w-[50%] h-[40%]  blur-[500px] absolute top-[33%] left-[25%] z-0 opacity-[50%]" />
        <section class="grid grid-cols-12 gap-4 md:grid-cols-12 mt-[40px] px-[3%] sm:px-[10%] z-[2] mt-[100px]"
            id="projects">
            <div class="flex flex-row col-start-1 col-end-13 justify-center items-center mb-[20px] relative">
                <h2 class="font-bold text-white text-stroke relative text-6xl text-center ">
                    Projects.</h2>
            </div>
            <div class="flex col-start-1 col-end-7 hidden sm:flex" id="image-left">
                <div
                    class="flex relative before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:bg-white before:content-[''] p-[15px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md after:content-[''] after:absolute after:bg-black after:bottom-0 after:top-0 after:left-0 after:right-0 hover:after:left-[3px] hover:after:right-[3px] hover:after:top-[3px] hover:after:bottom-[3px] after:rounded-md after:transition-all duration-1000">
                    <div
                        class="bg-black opacity-[0%] absolute top-0 bottom-0 left-0 right-0 z-[20] transition-all hover:opacity-[20%]">
                    </div>
                    <img src="../assets/project2.png" class="object-fit max-w-full rounded-md z-[19] cursor-pointer" />
                </div>
            </div>
            <div id="project"
                class=" z-[2] flex flex-col gap-[15px] transition-all duration-1000 col-start-1 col-end-13 bg-[#1a1a1a] rounded-md sm:col-start-7 relative ">
                <div class="h-[25px] bg-mac-outer ">
                    <div class="flex h-full flex-row justify-start items-center gap-[10px] mx-[10px]">
                        <div class="h-[10px] w-[10px] rounded-full red" />
                        <div class="h-[10px] w-[10px] rounded-full orange" />
                        <div class="h-[10px] w-[10px] rounded-full green" />



                    </div>
                </div>
                <div class="flex flex-col p-[20px] gap-2">
                    <h4 class="text-white font-bold text-2xl">
                        COVID Close Contact Application
                    </h4>
                    <p class="text-sm">A Desktop application to create users and thus allow for registration of close
                        contacts between the users. Query the database for individuals/</p>
                    <h4 class="text-white font-bold text-lg">
                        Technologies
                    </h4>
                    <div class="flex flex-row gap-[10px]">
                        <div class="bg-tech-color p-[5px] rounded-lg text-sm hover:scale-105 cursor-pointer">
                            <p class="text-sm">Java</p>
                        </div>
                        <div class="bg-tech-color p-[5px] rounded-lg text-sm hover:scale-105 cursor-pointer" id="tech">
                            <p class="text-sm">JavaFX</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-[10px] mt-[20px]">
                        <p
                            class="flex flex-row cursor-pointer justify-center items-center gap-[5px] font-md transition-all duration-300 text-base text-light-grey hover:text-white">
                            View<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </p>

                        <p
                            class="group flex flex-row cursor-pointer justify-start items-center gap-[5px] transition-all duration-300 text-base text-light-grey hover:text-white">
                            Github<svg
                                class="group-hover:fill-white fill-light-grey cursor-pointer transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25px" height="25px">
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                            </svg>
                        </p>


                    </div>
                </div>
            </div>
            <div id="project"
                class="flex flex-col gap-[15px] transition-all duration-1000 rounded-md z-[2] col-start-1 col-end-13 bg-[#1a1a1a] rounded-md sm:col-end-7">
                <div class="h-[25px] bg-mac-outer ">
                    <div class="flex h-full flex-row justify-start items-center gap-[10px] mx-[10px]">
                        <div class="h-[10px] w-[10px] rounded-full red" />
                        <div class="h-[10px] w-[10px] rounded-full orange" />
                        <div class="h-[10px] w-[10px] rounded-full green" />



                    </div>
                </div>
                <div class="flex flex-col p-[20px] gap-2">
                    <h4 class="text-white font-bold text-lg">
                        COVID Close Contact Application
                    </h4>
                    <p class="text-sm">Application to create users and thus close contacts between the users.</p>
                    <h4 class="text-white font-bold text-md">
                        Technologies
                    </h4>
                    <div class="flex flex-row gap-[10px]">
                        <div class="bg-tech-color p-[5px] rounded-sm">
                            <p class="text-sm">Java</p>
                        </div>
                        <div class="bg-tech-color p-[5px] rounded-sm">
                            <p class="text-sm">JavaFX</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-[10px]">
                        <p
                            class="flex flex-row cursor-pointer justify-center items-center gap-[5px] transition-all duration-300 p-[10px] text-base text-light-grey hover:text-white">
                            View<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </p>

                        <p
                            class="group flex flex-row cursor-pointer justify-start items-center gap-[5px] transition-all duration-300 text-base text-light-grey hover:text-white">
                            Github<svg
                                class="group-hover:fill-white fill-light-grey cursor-pointer transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25px" height="25px">
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                            </svg>
                        </p>


                    </div>
                </div>
            </div>
            <div class="flex col-start-7 col-end-13 hidden sm:flex" id="image-right">
                
                <swiper  :pagination="true" :navigation="true">
                    <swiper-slide class="flex relative before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:bg-white before:content-[''] p-[15px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md after:content-[''] after:absolute after:bg-black after:bottom-0 after:top-0 after:left-0 after:right-0 hover:after:left-[3px] hover:after:right-[3px] hover:after:top-[3px] hover:after:bottom-[3px] after:rounded-md after:transition-all duration-1000">
                            <img src="../assets/project2.png"
                            class="object-fit max-w-full rounded-md z-[19] cursor-pointer" />
                    </swiper-slide>
                    <swiper-slide class="flex relative before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:bg-white before:content-[''] p-[15px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md after:content-[''] after:absolute after:bg-black after:bottom-0 after:top-0 after:left-0 after:right-0 hover:after:left-[3px] hover:after:right-[3px] hover:after:top-[3px] hover:after:bottom-[3px] after:rounded-md after:transition-all duration-1000"><img src="../assets/test.png"
                            class="object-cover max-w-full rounded-md z-[19] cursor-pointer" /></swiper-slide>
                    <swiper-slide class="flex relative before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:bg-white before:content-[''] p-[15px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md after:content-[''] after:absolute after:bg-black after:bottom-0 after:top-0 after:left-0 after:right-0 hover:after:left-[3px] hover:after:right-[3px] hover:after:top-[3px] hover:after:bottom-[3px] after:rounded-md after:transition-all duration-1000">Slide 3</swiper-slide>

                </swiper>
            </div>
            <div class="flex col-start-1 col-end-7 hidden sm:flex" id="image-left">
                <div
                    class="flex relative before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:bg-white before:content-[''] p-[20px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md after:content-[''] after:absolute after:bg-black after:bottom-0 after:top-0 after:left-0 after:right-0 hover:after:left-[2px] hover:after:right-[2px] hover:after:top-[2px] hover:after:bottom-[2px] after:rounded-md after:transition-all duration-1000">
                    <div
                        class="bg-black opacity-[20%] absolute top-0 bottom-0 left-0 right-0 z-[20] transition-all hover:opacity-[0%]">
                    </div>
                    <img src="../assets/project2.png" class="object-fit max-w-full rounded-md z-[19] cursor-pointer" />
                </div>
            </div>
            <div class="flex flex-col gap-[15px] transition-all duration-1000 rounded-md z-[2] col-start-1 col-end-13 bg-[#1a1a1a] rounded-md sm:col-start-7"
                id="project">
                <div class="h-[25px] bg-mac-outer ">
                    <div class="flex h-full flex-row justify-start items-center gap-[10px] mx-[10px]">
                        <div class="h-[10px] w-[10px] rounded-full red" />
                        <div class="h-[10px] w-[10px] rounded-full orange" />
                        <div class="h-[10px] w-[10px] rounded-full green" />



                    </div>
                </div>
                <div class="flex flex-col p-[20px] gap-2">
                    <h4 class="text-white font-bold text-lg">
                        COVID Close Contact Application
                    </h4>
                    <p class="text-sm">Application to create users and thus close contacts between the users.</p>
                    <h4 class="text-white font-bold text-md">
                        Technologies
                    </h4>
                    <div class="flex flex-row gap-[10px]">
                        <div class="bg-tech-color p-[5px] rounded-sm">
                            <p class="text-sm">Java</p>
                        </div>
                        <div class="bg-tech-color p-[5px] rounded-sm">
                            <p class="text-sm">JavaFX</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-[10px]">
                        <p
                            class="flex flex-row cursor-pointer justify-center items-center gap-[5px] transition-all duration-300 p-[10px] text-base text-light-grey hover:text-white">
                            View<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </p>

                        <p
                            class="group flex flex-row cursor-pointer justify-start items-center gap-[5px] transition-all duration-300 text-base text-light-grey hover:text-white">
                            Github<svg
                                class="group-hover:fill-white fill-light-grey cursor-pointer transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25px" height="25px">
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                            </svg>
                        </p>


                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation,Pagination } from "swiper";
SwiperCore.use([Pagination,Navigation])
import 'swiper/css';
  import 'swiper/css/navigation';
  import "swiper/css/pagination";  


// Import Swiper styles
import 'swiper/css';
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'project-component',
    components: {
        Swiper, SwiperSlide
    },
    
    mounted() {
        const projects = gsap.utils.toArray('#project');
        projects.forEach((project) => {
            gsap.from(project, { scrollTrigger: project, opacity: 0, duration: 0.2 })
        })
        const imageLeft = gsap.utils.toArray('#image-left');
        imageLeft.forEach((image) => {
            gsap.from(image, { scrollTrigger: image, opacity: 0, x: -100, duration: 0.5 })
        })
        const imageRight = gsap.utils.toArray('#image-right');
        imageRight.forEach((image) => {
            gsap.from(image, { scrollTrigger: image, opacity: 0, x: 100, duration: 0.5 })
        })

    }
}
</script>
<style>
.swiper-pagination-bullet{
    background-color: white;
}

</style>