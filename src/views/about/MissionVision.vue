<template>
    <div class="main" id="mission-vision">
        <div class="main-item">
            <h1 id="mv-header">Mission</h1>
            <div class="mission-vision">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto est illo officiis asperiores ut explicabo voluptatem cupiditate in aut? Doloribus repellendus libero quisquam corrupti beatae, fuga, a veritatis debitis consequatur mollitia odio saepe minus amet, quos culpa ipsa eveniet quis? Similique dolorem ea deleniti. Eaque ipsum nulla accusamus ad laudantium.</p>
            </div>
            
        </div>
        <div class="main-item">
            <h1 id="mv-header">Vision</h1>
            <div class="mission-vision">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia laboriosam nobis possimus neque corrupti temporibus deserunt dolores itaque, ad maiores! Esse ipsa dolores, expedita dolor, quis vel fugiat deserunt suscipit at natus magni nihil excepturi id commodi quam! Pariatur voluptates cupiditate qui eligendi. Aliquam ad earum vel dicta velit consequatur!</p>
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        name: "MissionVision",
        components: {

        }
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 80px;
        background-color: #F6FAF4;
    }
    .main-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 50px;
    }
    .mission-vision p{
        margin-top: 30px;
        color: #8A91Ac;
        text-align: center;
    }
    .mission-vision{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 890px){
        .main{
            flex-direction: column;
        }
    }
    @media(max-width: 625px){
        .main{
            padding: 30px 40px;
        }
        .mission-vision p{
            font-size: 15px;
        }
    }
    @media(max-width: 477px){
        .main{
            padding: 30px 5px;
        }
        .main-item{
            margin: 30px 10px;
        }
    }
</style>