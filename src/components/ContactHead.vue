<template>
    <div class="main">
        <div class="mail-loc">
            <div class="mail">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
                <h3>agrohao@gmail.com</h3>
            </div>
            <div class="loc">
                <font-awesome-icon :icon="['fas', 'location-crosshairs']" />
                <h3>Bonwire, A/R</h3>
            </div>
        </div>
        <div class="socials">
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactHead",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: 50px;
        background-color: #032D26;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
    }
    .main h3, h4{
        color: white;
        margin: 0 10px;
    }
    .mail,.loc{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-right: 50px;
    }
    .mail-loc{
        display: flex;
    }
    .socials{
        height: 100%;
        padding: 20px 50px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    a{
        text-decoration: none;
        color: #032D26;
        margin: 0 10px;
    }
    @media(max-width: 768px){
        .mail-loc{
            display: none;
        }
    }
    
</style>