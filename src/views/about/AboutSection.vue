<template>
    <div class="home" id="home">
        <div class="home-content">
            <div class="texts">
                <h1 id="company-name">Who are we ?</h1>
                <p id="description">Ghana's award winning agrochemical company...</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutSection",
        data() {
            return {

            }
        },
        created(){

        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .home{
        width: 100vw;
        height: 60vh;
        background-image: url('../../assets/AgroCar.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .home-content{
        width: 100vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(22, 128, 164, 0.2);
    }
    .texts{
        background-color: transparent;
        padding: 20px;
        color: #fff;
        background-color: rgba(0,0,0,.5);
        text-align: center;
    }
    #company-name{
        font-weight: bold;
        font-size: 3.5rem;
    }
    #description{
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }
    @media(max-width: 768px){
        #company-name{
            font-size: 35px;
        }
    }
    @media(max-width: 434px){
        .texts{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .texts h1, .texts p{
            text-align: center;
        }
    }
    @media(max-width: 285px){
        #description{
            font-size: 14px;
        }
    }

</style>