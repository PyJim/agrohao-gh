<template>
    <div class="main">
        <h1>Awards</h1>
        <div class="awards">
            <div class="award">
                <div class="award-icon">
                    <font-awesome-icon :icon="['fas', 'trophy']" style="color: #33820D;" size="4x"/>
                </div>
                <div class="award-text">
                    <h3>Ministry of Agriculture</h3>
                    <p>Best Agrochemical Company - 2020</p>
                </div>
            </div>
            <div class="award">
                <div class="award-icon">
                    <font-awesome-icon :icon="['fas', 'trophy']" style="color: #33820D;" size="4x"/>
                </div>
                <div class="award-text">
                    <h3>Ministry of Agriculture</h3>
                    <p>Best Agrochemical Company - 2020</p>
                </div>
            </div>
            <div class="award">
                <div class="award-icon">
                    <font-awesome-icon :icon="['fas', 'trophy']" style="color: #33820D;" size="4x"/>
                </div>
                <div class="award-text">
                    <h3>Ministry of Agriculture</h3>
                    <p>Best Agrochemical Company - 2020</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AwardsSection",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 80px;
    }
    .awards{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .award{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 30px;
        padding: 40px;
        border-radius: 20px;
        border: 2px solid rgba(0, 0, 0, .06);
    }
    .award-icon{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px dashed #33820D;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
    }
    .award-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .award-text h3{
        font-size: 25px;
        margin-bottom: 20px;
        opacity: .7;
        text-align: center;
    }
    .award-text p{
        color: #8A91Ac;
        font-size: 18px;
        text-align: center;
    }
    @media(max-width: 976px){
        .awards{
            transform: scale(0.8);
        }
    }
    @media(max-width: 576px){
        .awards{
            transform: scale(0.6);
        }
    }
    @media(max-width: 797px){
        .awards{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: -80px 0;
        }
    }
    @media(max-width: 540px){
        .award{
            margin: 20px 5px;
        }
    }
    @media(max-width: 421px){
        .awards{
            grid-template-columns: 1fr;
            transform: scale(1);
            margin: 0;
        }
    }
    @media(max-width: 358px){
        .awards{
            transform: scale(0.8);
            margin: -100px 0;
        }
    }
</style>