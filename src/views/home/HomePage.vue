<template>
    <div class="home" id="home">
        <div class="home-content">
            <div class="texts">
                <h1 id="company-name">Agrohao, Ghana</h1>
                <p id="description">herbicides, insecticides and fungicides indeed...</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
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
        height: 100vh;
        background-image: url('../../assets/agro.jpg');
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
    }
    #company-name{
        font-weight: bold;
        font-size: 3.5rem;
    }
    #description{
        font-size: 1.2rem;
        margin-top: 0.5rem;
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
</style>