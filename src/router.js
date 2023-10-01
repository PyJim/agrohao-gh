import { createRouter, createWebHistory } from 'vue-router';


import MainHome from "./views/home/MainHome.vue";
import MainAbout from "./views/about/MainAbout.vue";
import MainProducts from "./views/products/MainProducts.vue";
import MainMedia from "./views/media/MainMedia.vue";
import MainContact from "./views/contacts/MainContact.vue";




const routes = [
    { path: '/', component: MainHome },
    { path: '/about', component: MainAbout },
    { path: '/products', component: MainProducts },
    { path: '/media', component: MainMedia },
    { path: '/contacts', component: MainContact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
