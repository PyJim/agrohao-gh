<template>
    <header :class="{'scrolled-nav' : scrolledNav}">
        <nav>
            <div class="branding">
                <img src="../assets/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link to="/" class="link">Home</router-link></li>
                <li><router-link to="/about" class="link">About</router-link></li>
                <li><router-link to="/products" class="link">Products</router-link></li>
                <li><router-link to="/media" class="link">Media</router-link></li>
                <li><router-link to="/contacts" class="link">Contact</router-link></li>
            </ul>
            <div class="icon">
                
                <font-awesome-icon style="{
                    cursor: pointer;
                    font-size: 24px;
                    transition: .8s ease all;
                }" v-show="mobile" icon="bars" @click="toggleMobileNav" :class="{'icon-active' : mobileNav}"/>
            </div>
            <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li><img src="../assets/logo.png" alt=""></li>
                <li><router-link to="/" class="link">Home</router-link></li>
                <li><router-link to="/about" class="link">About</router-link></li>
                <li><router-link to="/products" class="link">Products</router-link></li>
                <li><router-link to="/media" class="link">Media</router-link></li>
                <li><router-link to="/contacts" class="link">Contact</router-link></li>
            </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                scrolledNav: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            }
        },
        created(){
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        mounted(){
            window.addEventListener('scroll', this.updateScroll);
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav;
            },
            updateScroll(){
                const scrollPosition = window.scrollY;
                if(scrollPosition > 50){
                    this.scrolledNav = true;
                    return;
                }
                this.scrolledNav = false;
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if(this.windowWidth < 750){
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },

    }
</script>

<style scoped>
    header{
        background-color: #fff;
        z-index: 99;
        width: 100%;
        transition: .5s ease all;
        color: #33820D;
        opacity: 1;
    }
    header nav{
        display: flex;
        position: relative;
        flex-direction: row;
        transition: .5 ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1140px;
        }
    }
    header nav ul,
    .link{
        font-weight: bold;
        color: #fff;
        list-style: none;
        text-decoration: none;
    }
    li{
        text-transform: uppercase;
        padding: 16px;
        margin-left: 16px;
        color: #fff;
    }
    .link{
        font-size: 18px;
        line-height: 1px;
        text-transform: capitalize;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        color: #000;
    }
    .link:hover, a.router-link-exact-active{
        font-weight: bold;
        border-color: #33820D;
        color: #33820D;
    }
    .branding{
        display: flex;
        align-items: center;
    }
    img{
        width: 80px;
        transform: .5s ease all;
    }
    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }
    .icon{
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
    }
    .icon-active{
        transform: rotate(180deg);
    }

    .dropdown-nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        width: 100%;
        max-width: 200px;
        height: 100%;
        background-color: #032D26;
        top: 0;
        left: 0;
    }
    .dropdown-nav li{
        margin-left: 0;
        color: white;
    }
    .dropdown-nav li img{
        width: 150px;
    }
    .dropdown-nav li .link{
        color: white;
    }
    .dropdown-nav li .link:hover, .dropdown-nav li a.router-link-exact-active{
        color: #33820D;
    }
    .scrolled-nav{
        background-color: #032D26;
        opacity: 1;
        position: fixed;
        top: 0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    
    .scrolled-nav nav .branding img{
        width: 60px;
    }
    .scrolled-nav nav ul li,
    .scrolled-nav nav ul li a{
        color: white;
    }
    .scrolled-nav nav ul li a.router-link-exact-active{
        color: #33820D;
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to{
        transform: translateX(0);
    }
</style>