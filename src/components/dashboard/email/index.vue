<script lang="ts" setup>
import Widget from "@/components/dashboard/email/Widget.vue";
import EmailData from "@/components/dashboard/email/EmailData.vue";
import EmailPerformance from "@/components/dashboard/email/EmailPerformance.vue";
</script>

<template>
    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
        <Widget />
        <EmailData />
        <EmailPerformance />
    </div>
</template>