<template>
    <div class="about" id="about">
        
        <div class="about-page-items">
            <div class="texts">
                <h1 id="about-us">About Us</h1>
            </div>
            <div class="about-content">
                <div class="about-content-text">
                    <h1 class="text-title">Agrohao, Ghana</h1>
                    <p>Vivamus id ligula nec tortor commodo mollis nec ut mauris. Vestibulum blandit lacus nec nunc pretium, auctor porttitor tortor auctor. Etiam dictum luctus metus in dictum. Donec elit metus, tincidunt eget nisl eget, vestibulum eleifend massa.</p>
                    <br>
                    <p>Blandit lacus nec nunc pretium, auctor porttitor tortor auctor. Etiam dictum luctus metus in dictum. Donec elit metus, tincidunt eget nisl eget, vestibulum eleifend massa.</p>
                    <br>
                    <p>Blandit lacus nec nunc pretium, auctor porttitor tortor auctor. Etiam dictum luctus metus in dictum. Donec elit metus, tincidunt eget nisl eget, vestibulum eleifend massa.</p>
                    <br>
                    <p>Blandit lacus nec nunc pretium, auctor porttitor tortor auctor. Etiam dictum luctus metus in dictum. Donec elit metus, tincidunt eget nisl eget, vestibulum eleifend massa.</p>
                </div>
                <div class="about-content-image">
                    <img src="../../assets/homeImage.png" alt="">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutPage",
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
    .about{
        width: 100vw;
        background-color: white;
        padding: 150px 80px 80px;
        display: flex;
        align-self: center;
        justify-content: center;
    }
    .about-page-items{
        width: 80%;
        height: 100%;
        background-color: white;
        align-self: center;
        display: flex;
        flex-direction: column;
        padding: 0;

    }
    .about-content{
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-self: center;
    }
    .about-content-text{
        width: 58%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .about-content-image{
        width: 450px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
    }
    
    .about-content-image img{
        width: 100%;
    }
    #about-us{
        font-weight: bold;
        font-size: 1.25rem;
        color: #33820D;
        margin-bottom: 15px;
    }
    .text-title{
        margin-bottom: 30px;
    }
    .about-content-text p{
        color: #8A91Ac;
        line-height: 1.5em;
        margin-bottom: 10px;
    }
    .about-content-text .read-more{
        background-color: #33820D;
        padding: 10px 20px;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .about-content-text .read-more a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
    }
    @media(max-width: 1015px){
        .about-content{
            flex-direction: column;
        }
        .about-content-text, .about-content-image{
            width: 100%;
            margin: 0;
        }
        .about-content-image{
            height: 50vh;
        }
        .about-content-image img{
            margin: 0;
            height: 100%;
        }
        
    }
    @media(max-width: 625px){
        .about{
            padding: 150px 40px;
        }
    }
    @media(max-width: 477px){
        .about{
            padding: 150px 10px;
        }
        .about-content-image{
            height: 200px;
        }
    }
</style>