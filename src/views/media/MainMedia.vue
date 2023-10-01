<template>
    <div class="main">
        <ContactHead/>
        <NavBar/>
        <MediaBanner/>
        <ImageGallery/>
        <MyFooter/>
        <MyBase/>
    </div>
</template>

<script>
import ContactHead from '@/components/ContactHead.vue';
import NavBar from '@/components/NavBar.vue';
import MyFooter from '@/components/MyFooter.vue';
import MyBase from '@/components/MyBase.vue';
import ImageGallery from './ImageGallery.vue';
import MediaBanner from './MediaBanner';


    export default {
        name: "MainMedia",
        components: {
            ContactHead,
            NavBar,
            MyFooter,
            MyBase,
            ImageGallery,
            MediaBanner,
        }
    }
</script>

<style scoped>
    .main{
        width: 100%;
        height: auto;
    }
</style>