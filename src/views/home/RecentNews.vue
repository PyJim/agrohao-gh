<template>
    <div class="main" id="news">
        <h1 id="news-header">News</h1>
        <div class="main-item">
            <div class="main-news">
                <VueCard/>
                <VueCard/>
                <VueCard/>
            </div>
            <div class="read-more">
                <a href="">Read More</a>
            </div>
        </div>
    </div>
</template>

<script>
import VueCard from "../../components/VueCard.vue"

    export default {
        name: "RecentNews",
        components: {
            VueCard,
        }
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        background-color: #F6FAF4;
    }
    .main-item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .main-news{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .read-more{
        background-color: transparent;
        padding: 10px 20px;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 20px;
        border: 2px solid #33820D;
    }
    .read-more a{
        color: #33820D;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
    }
    #news-header{
        position: relative;
    }
    #news-header::before{
        content: "";
        width: 50px;
        height: 3px;
        background-color: #33820D;
        position: absolute;
        top: 50%;
        left: -100%;
    }
    #news-header::after{
        content: "";
        width: 50px;
        height: 3px;
        background-color: #33820D;
        position: absolute;
        top: 50%;
        right: -100%;
    }
    @media(max-width: 768px){
        .main-news{
            flex-direction: column;
        }
    }
    @media(max-width: 600px){
        #news-header{
            font-size: 24px;
        }
    }
    @media(max-width: 434px){
        .main-news{
            transform: scale(0.8);
            margin: -100px 0;
        }
        .main-item{
            align-items: center;
        }
    }
</style>