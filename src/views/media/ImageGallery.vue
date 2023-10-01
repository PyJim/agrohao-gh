<template>
    <div class="grid-wrapper">
        <div class="big">
            <img src="../../assets/agro.jpg" alt="">
        </div>
        <div>
            <img src="../../assets/AgroC.jpg" alt="">
        </div>
        <div>
            <img src="../../assets/AgroCar.jpg" alt="">
        </div>
        <div>
            <img src="../../assets/agrochem.jpg" alt="">
        </div>
        <div>
            <img src="../../assets/agrochem.png" alt="">
        </div>
        <div class="wide">
            <img src="../../assets/agrochemist.png" alt="">
        </div>
        <div>
            <img src="../../assets/home.png" alt="">
        </div>
        <div class="big">
            <img src="../../assets/human1.jpg" alt="">
        </div>
        <div class="big">
            <img src="../../assets/human2.jpg" alt="">
        </div>
        <div class="big">
            <img src="../../assets/human3.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageGallery",
    }
</script>

<style scoped>
    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        display: inline-block;
    }
    .grid-wrapper > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .grid-wrapper > div > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .grid-wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-flow: dense;
    }
    .grid-wrapper .wide {
        grid-column: span 2;
    }
    .grid-wrapper .tall {
        grid-row: span 2;
    }
    .grid-wrapper .big {
        grid-column: span 2;
        grid-row: span 2;
    }
</style>
With this change, the grid will dynam