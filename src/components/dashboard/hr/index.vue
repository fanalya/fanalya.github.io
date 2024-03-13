<script lang="ts" setup>
import Widget from "@/components/dashboard/hr/Widget.vue";
import EmpolyeePerformance from "@/components/dashboard/hr/EmployeePerformance.vue";
import Schedual from "@/components/dashboard/hr/Scheduled.vue";
import Projects from "@/components/dashboard/hr/projects.vue"
</script>

<template>
    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
        <Widget />
        <EmpolyeePerformance />
        <Schedual />
        <projects />
    </div>
</template>