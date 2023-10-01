<template>
    <div class="main">
        <ContactHead/>
        <NavBar/>
        <ContactsBanner/>
        <OurLocation/>
        <ContactForm/>
        <MyFooter/>
        <MyBase/>
    </div>
</template>

<script>
import ContactHead from '@/components/ContactHead.vue';
import MyBase from '@/components/MyBase.vue';
import MyFooter from '@/components/MyFooter.vue';
import NavBar from '@/components/NavBar.vue';
import OurLocation from "./OurLocation.vue";
import ContactForm from "./ContactForm.vue";
import ContactsBanner from "./ContactsBanner.vue";

    export default {
        name: "MainContact",
        components: {
            ContactHead,
            MyBase,
            MyFooter,
            NavBar,
            ContactsBanner,
            OurLocation,
            ContactForm,
        }
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: auto;
    }
</style>