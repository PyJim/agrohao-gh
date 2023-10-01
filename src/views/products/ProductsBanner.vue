<template>
    <div class="home" id="home">
        <div class="home-content">
            <div class="texts">
                <h1 id="company-name">Our products</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductsBanner",
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
        background-image: url('../../assets/prod.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
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
    }
    .texts{
        background-color: transparent;
        padding: 20px;
        color: #fff;
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