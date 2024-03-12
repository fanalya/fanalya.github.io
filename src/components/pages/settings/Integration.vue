<script lang="ts" setup>
import { integrationData } from "@/components/pages/settings/utils.ts";
import { Cable } from "lucide-vue-next"
</script>

<template>
    <h6 class="mb-4 text-15">Connected Apps</h6>
    <div class="grid grid-cols-1 gap-x-5 sm:grid-cols-2 xl:grid-cols-4">
        <TCard v-for="(card, index) in integrationData" :key="index">
            <div class="flex gap-3 mb-5">
                <div class="grow">
                    <img :src="card.imageSrc" alt="" class="h-8">
                </div>
                <div class="shrink-0">
                    <TButton variant="dashed" classes="px-2 py-1.5 text-xs">
                        <Cable class="inline-block size-3 me-2" /> Connect
                    </TButton>
                </div>
            </div>
            <h6 class="mb-2 text-16">{{ card.brand }}</h6>
            <p class="text-slate-500 dark:text-zink-200">{{ card.description }}</p>
        </TCard>
    </div>
</template>