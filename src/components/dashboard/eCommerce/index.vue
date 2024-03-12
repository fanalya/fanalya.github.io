<script lang="ts" setup>
import Widget from "@/components/dashboard/eCommerce/Widget.vue";
import SalesRevenue from "@/components/dashboard/eCommerce/SalesRevenue.vue";
import ProductOrders from "@/components/dashboard/eCommerce/ProductOrders.vue";
import CustomerService from "@/components/dashboard/eCommerce/CustomerService.vue"
</script>

<template>
    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
        <Widget />
        <SalesRevenue />
        <ProductOrders />
        <CustomerService />
    </div>
</template>
