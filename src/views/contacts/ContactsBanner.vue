<template>
    <div class="home" id="home">
        <div class="home-content">
            <div class="texts">
                <h1 id="company-name">Contact Us</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactsBanner",
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
        background-image: url('../../assets/contactus.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .home-content{
        margin-top: 100px;
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
        background: #032D26;
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