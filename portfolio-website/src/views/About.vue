<template>
    <h2 class="font-normal border-b-2 border-white my-[10px] text-xl">ABOUT ME</h2>
    <section class="h-auto flex" id="about">
        <div
            class="basis-full sm:basis-6/12 flex items-center flex-col justify-start bg-[#202022] rounded-md shadow-lg ">
            <div class="flex h-full relative basis-3/12 mt-[30px]">
                <img class="object-cover w-[195px] h-[195px] rounded-full border-2 border-sky-500"
                    src="../assets/IMG_0439.png" />
            </div>
            <div class="flex flex-col sm:divide-x w-full px-[3%] py-[3%] sm:flex-row">
                <div class="flex flex-col w-full gap-2 items-center p-[5%]">
                    <h2 class="text-xl">PERSONAL INFO</h2>
                    <div class="text-white flex flex-col justify-start items-start grow ">
                        <p class="text-left"><span>D.O.B: </span>24th February, 2001</p>
                        <p class="text-left"><span>Location: </span>Cork, Ireland</p>
                        <p class="text-left"><span>Email: </span>eoin.fehily@mycit.ie</p>
                    </div>
                </div>
                <div class="flex flex-col w-full gap-2 items-center p-[5%]">
                    <h2 class="text-xl">BIOGRAPHY</h2>
                    <div class="text-white flex flex-col justify-start items-center grow">
                        <p class="text-justify">I am a passionate person who becomes absorbed by my interests and gives
                            them my full attention. I always have had an interest in Software Development.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'about-section'
}
</script>