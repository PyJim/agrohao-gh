<template>
    <div class="main" id="products">
        <div class="featured">
            <h1 id="featured-products">Featured Products</h1>
        </div>
        <div class="pinterest">
            <div class="image">
                <img src="../../assets/a.png" alt="">
                <div class="content">
                    <h1>HaoQuat</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="image">
                <img src="../../assets/d.png" alt="">
                <div class="content">
                    <h1>HaoNico</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="image">
                <img src="../../assets/e.png" alt="">
                <div class="content">
                    <h1>Glyphosate</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="image">
                <img src="../../assets/h.png" alt="">
                <div class="content">
                    <h1>Hao2,4D</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'FeaturedProducts',
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
    }
    .pinterest{
        width: 100%;
        display: flex;
        padding: 15px;
    }
    .pinterest img{
        width: 100%;
        margin-bottom: 15px;
        border-radius: 10px;
    }
    .image{
        position: relative;
    }
    .image img{
        width: 100%;
        display: block;
        margin: auto;
    }
    .content{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transition: 0.6s;
    }
    .content:hover{
        opacity: 1;
    }
    .content h1{
        color: white;
        font-size: 25px;
        margin-bottom: 15px;
        font-weight: bold;
    }
    .content p{
        font-size: 16px;
        color: white;
        text-align: center;
    }
    .content > *{
        transform: translateY(25px);
        transition: transform 0.6s;
    }
    .content:hover > *{
        transform: translateY(0px);
    }
    #featured-products{
        position: relative;
    }
    #featured-products::before{
        content: "";
        width: 50px;
        height: 3px;
        background-color: #33820D;
        position: absolute;
        top: 50%;
        left: -30%;
    }
    #featured-products::after{
        content: "";
        width: 50px;
        height: 3px;
        background-color: #33820D;
        position: absolute;
        top: 50%;
        right: -30%;
    }
    @media(max-width: 600px){
        #featured-products{
            font-size: 24px;
        }
    }
    @media(max-width: 630px){
        .content h1{
            font-size: 14px;
        }
        .content p{
            font-size: 12px;
        }
    }
</style>