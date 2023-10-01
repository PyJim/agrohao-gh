<template>
    <div class="main">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.033962794516!2d-1.4814164630883908!3d6.79920979116898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbc1f0a06cf101%3A0x7d43c6c513948d59!2sAGROHAO%20GHANA%20COMPANY%20LIMITED!5e0!3m2!1sen!2sgh!4v1695259070169!5m2!1sen!2sgh" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact-form">
            <h1>Connect with us: </h1>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea name="" id="" placeholder="Your message here"></textarea>
            <button>Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactForm",
    }
</script>

<style scoped>
    .main{
        width: 100%;
        height: auto;
        display: flex;
        background-color: #032D26;
    }
    .map, .contact-form{
        width: 50%;
    }
    .contact-form{
        display: flex;
        flex-direction: column;
        padding: 50px;
        color: white;
    }
    .contact-form h1{
        margin-bottom: 20px;
        font-size: 35px;
        text-align: center;
    }
    .contact-form input{
        color: rgba(255, 255, 255, 0.5);
        height: 50px;
        border-radius: 20px;
        padding: 10px 20px;
        margin-bottom: 10px;
        border: 1px solid white;
        font-size: 18px;
        background-color: transparent;
    }
    .contact-form textarea{
        height: 150px;
        border-radius: 30px;
        margin-bottom: 20px;
        padding: 10px 20px;
        border: 1px solid white;
        font-size: 18px;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.5);

    }
    button{
        height: 60px;
        border-radius: 20px;
        font-size: 25px;
        color: white;
        border: 1px solid white;
        background-color: transparent;
        font-weight: 600;
    }
    @media(max-width: 655px){
        .main{
            flex-direction: column;
        }
        .map, .contact-form{
        width: 100%;
        }
    }
    @media(max-width: 355px){
        .contact-form{
            transform: scale(0.8);
            padding: 0;
        }
    }
</style>