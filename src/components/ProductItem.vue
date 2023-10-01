<template>
    <div class="card">
        <div class="overlay">
            <h3>KINGZINE</h3>
        </div>
        <div class="texts">
            <h3>KINGZINE</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore velit saepe ad consequatur debitis facilis odit corrupti autem vitae! Quis nemo facere atque fuga, sit nesciunt enim repellendus iusto cupiditate.</p>
            <a href="">view details</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
    }
</script>

<style scoped>
    .card {
        width: 100%;
        max-width: 350px;
        overflow: hidden;
        height: 400px;
        cursor: pointer;
        margin: 30px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-image: url('../assets/p.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: 1s;
        position: relative;
    }

    .overlay {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #066937A1;
        transition: 1s;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(0);
    }

    h3 {
        font-size: 28px;
        line-height: 1.1em;
        font-weight: 600;
        color: white;
        margin-bottom: 20px;
    }

    .texts {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: #032d26ee;
        align-items: flex-start;
        justify-content: center;
        padding: 30px;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(100%);
        transition: 1s;
    }
    .texts a{
        padding: 10px 30px;
        margin-top: 20px;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        border: 2px solid white;
    }

    .card:hover .overlay {
        transform: translateY(-100%);
    }

    .card:hover .texts {
        transform: translateY(0);
    }

</style>
