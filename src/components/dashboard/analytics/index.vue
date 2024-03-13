<script lang="ts" setup>
import Widget from "@/components/dashboard/analytics/Widget.vue";
import LocationBaseTime from "@/components/dashboard/analytics/LocationBaseTime.vue";
import UserDevice from "@/components/dashboard/analytics/UserDevice.vue";
import ProductsStatistics from "@/components/dashboard/analytics/ProductsStatistics.vue";
import AnalyticsReports from "@/components/dashboard/analytics/AnalyticsReports.vue";
</script>

<template>
    <div class="grid grid-cols-12 gap-x-5">
        <Widget />
        <LocationBaseTime />
        <UserDevice />
        <ProductsStatistics />
        <AnalyticsReports />
    </div>
</template> 
