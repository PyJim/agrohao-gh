<template>
    <div class="main">
        <div class="footer-container">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="footer-container">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/products" class="link">Products</router-link>
            <router-link to="/media" class="link">Media</router-link>
            <router-link to="/contacts" class="link">Contact</router-link>
        </div>
        <div class="footer-container" id="reach-out">
            <h1>Reach Out</h1>
            <p>agrohao@gmail.com</p>
            <p>P.O.Box KK 1234</p>
            <p>Kentinkrono, Kumasi</p>
            <p>0234567890</p>
        </div>
        <div class="footer-container" id="socials">
            <h1>Social Media</h1>
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'facebook-f']" />  <em>@agrohao_gh</em></a>
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'instagram']" />   <em>@agrohao_gh</em></a>
            <a href="" class="social-icon"><font-awesome-icon :icon="['fab', 'x-twitter']" />   <em>@agrohao_gh</em></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: auto;
        padding: 80px 20px;
        background-color: #032D26;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .footer-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: #fff;
        width: auto;
    }
    .footer-container img{
        width: 150px;
    }
    .footer-container a{
        text-decoration: none;
        font-size: 18px;
        color: white;
        margin: 10px;
    }
    .footer-container a:hover, a.router-link-exact-active{
        color: #33820D;
    }
    .footer-container h1{
        font-size: 25px;
        font-weight: bold;
        margin: 15px 0;
    }
    .footer-container p{
        font-size: 20px;
        opacity: 0.8;
        margin: 5px 0;
    }
    .footer-container a em{
        font-size: 15px;
    }
    #socials{
        justify-content: center;
    }
    @media(max-width: 915px){
        .main{
            padding: 0 auto;
        }
        .footer-container img{
            width: 100px;
        }
        .footer-container a{
            font-size: 18px;
            margin: 5px;
        }
        .footer-container h1{
            font-size: 20px;
            margin: 8px 0;
        }
        .footer-container p{
            font-size: 16px;
            opacity: 0.8;
            margin: 2.5px 0;
        }
        .footer-container a em{
            font-size: 8px;
        }
    }
    @media(max-width: 566px){
        .main{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-container{
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }
        .footer-container a{
            font-size: 16px;
        }
    }
    @media(max-width: 364px){
        .main{
            grid-template-columns: 1fr;
            padding: 20px 20px;
        }
    }
</style>