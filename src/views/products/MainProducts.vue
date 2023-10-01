<template>
    <div class="main">
        <ContactHead/>
        <NavBar/>
        <ProductsBanner/>
        <AllProducts/>
        <MyFooter/>
        <MyBase/>
    </div>
</template>

<script>
import ContactHead from "../../components/ContactHead.vue"
import NavBar from "../../components/NavBar.vue"
import MyFooter from "../../components/MyFooter.vue";
import MyBase from "../../components/MyBase.vue";
import AllProducts from "./AllProducts.vue";
import ProductsBanner from "./ProductsBanner.vue";


    export default {
        name: "MainProducts",
        components: {
            ContactHead,
            NavBar,
            MyFooter,
            MyBase,
            AllProducts,
            ProductsBanner,
        }
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: auto;
    }
    
</style>