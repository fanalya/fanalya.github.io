<script lang="ts" setup>
import { onMounted } from "vue"
import Navbar from "@/components/landing/products/Navbar.vue"
import Home from "@/components/landing/products/Home.vue"
import Product from "@/components/landing/products/Product.vue"
import Features from "@/components/landing/products/Features.vue"
import About from "@/components/landing/products/About.vue"
import Feedback from "@/components/landing/products/Feedback.vue"
import Contact from "@/components/landing/products/Contact.vue"

onMounted(() => {
    document.body.setAttribute(
        "class",
        "text-base bg-white text-body font-public dark:text-zink-50 dark:bg-zink-800"
    );
});
</script>

<template>
    <Navbar />
    <Home />
    <Product />
    <Features />
    <About />
    <Feedback />
    <Contact />
</template>