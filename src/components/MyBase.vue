<template>
    <div class="main">
        <h3>Copyright © 2023 Agrohao Ghana</h3>
        <h5>Designed by JEK IT Services</h5>
    </div>
</template>

<script>
    export default {
        name: "MyBase",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 50px;
    }
    .main h3, h5{
        color: white;
        margin: 10px;
    }
    @media(max-width: 915px){
        .main h3{
            font-size: 18px;
        }
    }
    @media(max-width: 566px){
        .main{
            flex-direction: column;
            padding: 20px 0;
        }
        .main h3{
            font-size: 16px;
        }
    }
    @media(max-width: 285px){
        .main h3{
            font-size: 14px;
        }
        .main h5{
            font-size: 10px;
        }
    }
</style>