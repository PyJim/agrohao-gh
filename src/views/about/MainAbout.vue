<template>
    <div class="main">
        <ContactHead/>
        <NavBar/>
        <AboutSection/>
        <IntroSession/>
        <MissionVision/>
        <CoreValues/>
        <TeamSection/>
        <AwardsSection/>
        <MyFooter/>
        <MyBase/>
    </div>
</template>

<script>
import ContactHead from "../../components/ContactHead.vue"
import NavBar from "../../components/NavBar.vue"
import MyFooter from "../../components/MyFooter.vue"
import MyBase from "../../components/MyBase.vue"
import AboutSection from "./AboutSection.vue"
import IntroSession from "./IntroSection.vue"
import MissionVision from "./MissionVision.vue"
import CoreValues from "./CoreValues.vue"
import TeamSection from "./TeamSection.vue"
import AwardsSection from "./AwardsSection.vue"

    export default {
        name: "MainAbout",
        components: {
            ContactHead,
            MyFooter,
            NavBar,
            MyBase,
            AboutSection,
            IntroSession,
            MissionVision,
            CoreValues,
            TeamSection,
            AwardsSection,
        }
    }
</script>

<style scoped>
    .main {
        width: 100vw;
        min-width: 100%;
    }
</style>