<template>
    <div class="main">
        <ContactHead/>
        <NavBar />
        <HomePage/>
        <AboutPage/>
        <AchievementsPage />
        <FeaturedProducts/>
        <ContactUs/>
        <RecentNews/>
        <MyFooter/>
        <MyBase/>
    </div>
</template>
    
<script>
    import NavBar from '../../components/NavBar.vue'
    import HomePage from './HomePage.vue'
    import AboutPage from './AboutPage.vue'
    import AchievementsPage from './AchievementsPage.vue'
    import FeaturedProducts from './FeaturedProducts.vue'
    import ContactUs from '../../components/ContactUs.vue'
    import RecentNews from './RecentNews.vue'
    import MyFooter from '../../components/MyFooter.vue'
    import MyBase from '../../components/MyBase.vue'
    import ContactHead from '../../components/ContactHead.vue'
    
    export default {
        name: 'MainHome',
        components: {
        ContactHead,
        NavBar,
        HomePage,
        AboutPage,
        AchievementsPage,
        FeaturedProducts,
        ContactUs,
        RecentNews,
        MyFooter,
        MyBase,
        }
    }
</script>
    
<style lang="css">
    .main {
        width: 100vw;
        min-width: 100%;
        background-color: #fff;
    }
</style>