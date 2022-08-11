<template>
<transition>
    <div class="preloader-container">
<h1 v-if="show">Loading..</h1>
    </div>
</transition>
</template>
<script>
    export default{
        data: ()=>({
            show: true
        }),
        methods: {
            showToggle(){
                setTimeout(()=>{
                    this.show = false;
                },5000)
            }
        },
        mounted(){
            this.showToggle()
        }
    }
</script>
<style>
.preloader-container{
    width: 100%;
    z-index: 2000;
    height: 100%;
}
</style>