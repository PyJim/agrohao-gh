<template>
    <div class="main">
        <div class="main-item">
            <h1>Do you have any questions or inquires? </h1>
            <div class="link">
                <a href="#">contact us</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: 30vh;
        background-image: url('../assets/agrochem.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-item{
        width: 100%;
        height: 100%;
        background-color: rgba(2, 66, 12, 0.881);
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 20px;
    }
    .main-item h1{
        font-size: 35px;
        color: white;
    }
    .link{
        width: 150px;
        height: 50px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .link a{
        text-decoration: none;
        color: #33820D;
        font-size: 20px;
    }
    @media(max-width: 927px){
        .main-item h1{
            font-size: 25px;
        }
        .main-item .link{
            transform: scale(0.8);
        }
    }
    @media(max-width: 610px){
        .main-item h1{
            font-size: 20px;
        }
        .main-item .link{
            transform: scale(0.6);
        }
    }
    @media(max-width: 285px){
        .main-item{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .main-item .link{
            width: 180px;
            text-align: center;
        }
        .main-item h1{
            font-size: 15px;
            text-align: center;
        }
    }
</style>