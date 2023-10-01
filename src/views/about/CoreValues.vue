<template>
    <div class="main">
        <div class="core-values-img">
            <img src="../../assets/coreValues.jpg" alt="">
        </div>
        <div class="core-values-content">
            <h1>Core values</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat nostrum ducimus similique voluptatem velit placeat, nobis maxime veritatis atque unde nesciunt laboriosam, natus totam tempore, nihil accusantium quidem debitis obcaecati repudiandae! Saepe natus ipsum voluptatum veritatis dicta, rerum deserunt unde distinctio, a aut quibusdam dolores magnam exercitationem? Nesciunt, dignissimos!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoreValues",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #032D26;
    }
    .core-values-img, .core-values-content{
        width: 50%;
        height: 100%;
        padding: 0;
    }
    .core-values-img img{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .core-values-content{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
    }
    .core-values-content h1{
        margin-bottom: 25px;
        font-weight: bold;
        text-align: center;
    }
    .core-values-content p{
        font-size: 18px;
        text-align: center;
        letter-spacing: 1px;
        line-height: 1.5rem;
        opacity: 0.8;
    }
    @media(max-width: 890px){
        .main{
            flex-direction: column;
        }
        .core-values-content{
            padding: 50px 30px;
        }
        .core-values-img, .core-values-content{
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
        
    }
    @media(max-width: 520px){
        .core-values-content p{
            font-size: 16px;
        }
    }
</style>