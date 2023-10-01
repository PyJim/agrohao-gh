<template>
    <div class="main">
        <div class="all-products">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    </div>
</template>

<script>
import ProductItem from "../../components/ProductItem.vue";

    export default {
        name: "AllProducts",
        components: {
            ProductItem,
        }
    }
</script>

<style scoped>
    .main{
        width: 100vh;
        height: auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .all-products{
        margin: 20px auto;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 880px){
        .all-products{
            transform: scale(0.8);
            flex-wrap: nowrap;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: -200px 0;
            justify-items: center;
        }
        .main{
            padding: 0;
        }
    }
    @media(max-width: 762px){
        .all-products{
            transform: scale(0.8);
            margin-top: -300px 0;
        }
    }
    @media(max-width: 730px){
        .all-products{
            grid-template-columns: 1fr;
            transform: scale(1);
            margin: 0;
        }
    };
    @media(max-width: 371px){
        .all-products{
            transform: scale(0.8);
            margin: -350px;
        }
    }
</style>