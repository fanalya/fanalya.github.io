<script lang="ts" setup>
import LeftSidebar from "@/components/dashboard/social-media/LeftSidebar.vue";
import Content from "@/components/dashboard/social-media/Content.vue";
import RightSidebar from "@/components/dashboard/social-media/RightSidebar.vue"
</script>

<template>
    <div class="grid grid-cols-12 mt-5 gap-x-5">
        <div class="col-span-12 lg:col-span-5 xl:col-span-3 shrink-0 lg:block">
            <LeftSidebar />
        </div>
        <Content />
        <RightSidebar />
    </div>
</template>