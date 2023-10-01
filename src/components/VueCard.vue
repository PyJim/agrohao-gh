<template>
    <div class="card">
        <div class="card-img">
            <img src="../assets/agrochem.png" alt="">
        </div>
        <div class="card-body">
            <h3>Agrohao launches new powerful fungicide</h3>
            <p>just now</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VueCard',
    }
</script>

<style scoped>
    .card{
        width: 100%;
        max-width: 380px;
        border-radius: 10px;
        overflow: hidden;
        min-height: 350px;
        cursor: pointer;
        margin: 30px 20px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    .card-img{
        max-height: 250px;
        overflow: hidden;
    }
    .card-img img{
        width: 100%;
    }
    .card-body{
        padding: 20px 30px;
        background-color: white;
    }
    .card-body h3{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        color: rgba(0,0,0,0.5);
    }
    .card-body p{
        color: #8A91Ac;
        line-height: 1em;
        margin-bottom: 10px;
        font-size: 15px;
    }
    @media(max-width: 825px){
        .card-body h3{
            font-size: 15px;
        }
    }
</style>