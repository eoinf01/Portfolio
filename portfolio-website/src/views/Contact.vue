<template>
            <h2 class="font-normal border-b-2 border-white my-[10px] text-xl">
           CONTACT ME
          </h2>
<div class="flex flex-row mt-[60px] w-full justify-between">
    <div class="w-full flex items-start justify-center p-[2%] basis-6/12">
        <h3 class="text-4xl">Get In Touch?</h3>
    </div>
    <Form id="form" action="https://public.herotofu.com/v1/14cecf90-1351-11ed-a231-a93ebcec281d" method="post" class="contact-form w-full flex flex-col justify-between items-start gap-[15px] basis-6/12" @submit="handleEmail" :validation-schema="emailSchema">
        <Field name="from_name" type="text" v-slot="{field,errorMessage}">
            <input type="text" placeholder="Enter your name" v-bind="field" class="border-b border-slate-400 w-full bg-transparent p-[5px]focus:border-b transition-all duration-300 my-[10px] outline-none focus:border-b focus:border-white"/>
        </Field>
        <ErrorMessage name="from_name" class="text-red-600 mt-[-20px] text-xs"/>
        <Field name="reply_to" type="email" v-slot="{field,errorMessage}">
            <input type="text" placeholder="Enter your email" v-bind="field" class="border-b border-slate-400 w-full bg-transparent p-[5px]focus:border-b transition-all duration-300 my-[10px] outline-none focus:border-white"/>
        </Field>
                <ErrorMessage name="reply_to" class="text-red-600 mt-[-20px] text-xs"/>

        <Field name="message" type="text" v-slot="{field,errorMessage, meta}">
            <input type="text" placeholder="Enter your message" v-bind="field" class="border-b border-slate-400 w-full bg-transparent p-[5px]focus:border-b transition-all duration-300 my-[10px] outline-none focus:border-white" />
        </Field>
                <ErrorMessage name="message" class="text-red-600 mt-[-20px] text-xs"/>

       
        <button class="form-button bg-black relative cursor-pointer py-[10px] px-[40px] border border-white border-solid text-white"><span class="button-text" id="button-text">Send</span></button>
        <p class="button-error" id="error-message"></p>
    </Form>
   
</div>
</template>
<script>
import emailjs from '@emailjs/browser';
import { Form, Field ,ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
 
export default{
    data(){
     const emailSchema = yup.object(
        {
            from_name: yup.string().required().label('Name'),
            reply_to: yup.string().required().email().label('Email address'),
            message: yup.string().required().label('Message')
        }
     )
     return{
        emailSchema
     }
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
    methods: {    
        async handleEmail(values){
            var text = document.getElementById('button-text');
            var button = document.getElementsByClassName('form-button')[0];
            var message = document.getElementById('error-message')
            button.classList.add('button-loading');
            await emailjs.sendForm('service_hays1go','contact_form','#form','2Om7pSy2Y6_rpXg2U').then((result)=>{
                console.log(result)
                button.classList.remove('button-loading');
                text.innerText = "Sent!"
            }).catch((error)=>{
                console.log(error);
                setTimeout(()=>{
                    button.classList.remove('button-loading')
                    message.innerText= "Error occured. Please try again."
                    },1500);

            })
            setTimeout(()=>{
                text.innerText = "Send"
            },5000)
        }
    },
    mounted(){

    }
}
</script>
<style>
.button-loading .button-text{
    visibility: hidden;
}
.form-button.button-loading::after{
      content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    aspect-ratio: 1;
    right: 0;
    left: 0;
    top: 0;
    border: 4px solid transparent;
        border-top: 3px solid white;
    transition: all 0.2 ease-in;
    border-radius: 50%;
    bottom: 0;
    margin: auto;
    animation: loader 1s linear 0s infinite;
}
.form-button::after{
    
}

.button-error{
    font-size: 0.8em;
    color: red;
}
@keyframes loader{
    0%{transform: rotate(0.2turn)}
    25%{transform: rotate(0.4turn)}
    50%{transform: rotate(0.6turn)}
    75%{transform: rotate(0.8turn)}
    100%{transform: rotate(1.2turn)}
}
</style>