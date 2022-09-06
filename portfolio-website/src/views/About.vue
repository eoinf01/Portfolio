<template>
    <section class="h-auto flex mt-[100px] flex-col " id="about">
        <h2
            class="font-bold relative text-6xl text-center after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:w-[60px] after:h-[6px] after:bg-white after:rounded-md">
            About Me.</h2>
        <div class="flex flex-col mt-[30px] gap-10 px-[3%] sm:px-[10%] sm:flex-row bg-[#1f299c] py-[5%]" id="about">
            <div id="left-about"
                class="basis-full sm:basis-6/12 flex items-center flex-col justify-start bg-white rounded-md shadow-md shadow-[#3944c4] ">
                <div class="flex h-full relative basis-3/12 mt-[30px]">
                    <img class="object-cover w-[195px] h-[195px] rounded-full border-2 border-sky-500 scale-0"
                        src="../assets/IMG_0439.png" id="profile-pic"/>
                </div>
                <div class="flex flex-col divide-y w-full px-[3%] py-[3%] lg:flex-row lg:divide-x lg:divide-y-0">
                    <div class="flex flex-col w-full gap-2 items-center p-[5%] opacity-0" id="left-content">
                        <h2 class="text-xl text-black">PERSONAL INFO</h2>
                        <div class="text-black flex flex-col justify-start items-start grow ">
                            <p class="text-left flex flex-row gap-2 items-center justify-center text-black"><span><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="fill-black"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg></span>24th February, 2001</p>
                            <p class="text-left flex flex-row gap-2 items-center justify-center text-black"><span><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="fill-black">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg></span>Cork, Ireland</p>
                            <p class="text-left flex flex-row gap-2 items-center justify-center text-black"><span><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="fill-black">
                                        <path fill-rule="evenodd"
                                            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                            clip-rule="evenodd" />
                                    </svg></span>eoin.fehily@mycit.ie</p>
                        </div>
                    </div>
                    <div class="flex flex-col w-full gap-2 items-center p-[5%] opacity-0" id="left-content">
                        <h2 class="text-xl text-black">BIOGRAPHY</h2>
                        <div class="text-white flex flex-col justify-start items-center grow">
                            <p class="text-center text-black">I am a passionate person who becomes absorbed by my
                                interests and
                                gives
                                them my full attention. I always have had an interest in Software Development.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex basis-6/12  rounded-md shadow-lg p-[4%] bg-white flex-col gap-5 justify-between shadow-md shadow-[#3944c4]" id="right-about">
                <div class="flex flex-col w-full gap-2 items-center relative">
                    <h2 class="text-xl text-black opacity-0" id="titles">Education</h2>
                    <div
                        class="flex flex-row bg-white items-center w-full gap-2 rounded-md p-[4%] shadow-xl border border-1 opacity-0" id="container">
                        <img src="../assets/mtu.jpeg" class="border border-2 h-[50px] w-[50px] rounded-md" />
                        <div class="flex flex-col">
                            <h2 class="font-bold text-black">Present</h2>
                            <h2 class="text-black">Software Development at MTU</h2>
                        </div>

                    </div>
                </div>
                <div class="flex flex-col w-full gap-2 items-center relative">
                    <h2 class="text-xl text-black opacity-0" id="titles">Work</h2>
                    <div class="relative w-full flex flex-row items-center gap-5 opacity-0" id="container">

                        <div
                            class="flex flex-row bg-white items-center gap-2 rounded-md p-[4%] shadow-xl border grow border-1">
                            <img src="../assets/tanzu.png"
                                class="border border-2 h-[50px] w-[50px] rounded-md p-[5px]" />
                            <div class="flex flex-col">
                                <h2 class="font-bold text-black">2022</h2>
                                <h2 class="text-black">Technical Support Engineer at VMWare Tanzu</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <h2 class="text-xl text-black opacity-0" id="titles">Skills</h2>
                    <div
                        class="flex flex-row items-center justify-center border border-2 rounded-md shadow-xl w-full p-[4%] justify-between opacity-0" id="container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                            <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8" />
                            <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8" />
                        </svg>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48px"
                            height="48px">
                            <path
                                d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="goqfu1ZNmEnUrQDJEQ1bUa" x1="10.458" x2="26.314" y1="12.972" y2="26.277" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#26abe7"/><stop offset="1" stop-color="#086dbf"/></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUa)" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/><linearGradient id="goqfu1ZNmEnUrQDJEQ1bUb" x1="35.334" x2="23.517" y1="37.911" y2="21.034" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feb705"/><stop offset="1" stop-color="#ffda1c"/></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUb)" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"/><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"/><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"/><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"/><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"/><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"/><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                            <path
                                d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z"
                                fill="#68bd45" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
export default {
    name: 'about-section',
    mounted(){
        var containers = gsap.utils.toArray('#container')
        var titles = gsap.utils.toArray('#titles')

        var tl1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '#right-about',
                    normalize: true
                }
            }
        )
        tl1.from('#right-about',{duration:0.5,opacity:0,scale:0,ease:'power2.out()'})
        .to(titles,{opacity:1})
        .to(containers,{opacity:1,stagger: 0.3})
        
        var tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '#left-about',
                    normalize: true,
                }
            }
        )
        var leftContent = gsap.utils.toArray('#left-content')
        tl2.from('#left-about',{duration: 0.5,opacity:0,scale: 0,ease:'power2.out()'})
        .to('#profile-pic',{scale: 1,duration: 0.5,ease:'back.out(1.7)'})
        .to(leftContent,{opacity:1},)
        
    }
}
</script>