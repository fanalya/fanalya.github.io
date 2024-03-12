<script lang="ts" setup>
import { ChevronRight } from "lucide-vue-next";
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-4">
    <TCard title="Card title">
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2" href="#">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
    <TCard title="Card title">
      <template #subtitle>
        <p class="text-xs font-medium uppercase">Card subtitle</p>
      </template>
      <p class="mt-2 text-slate-500 dark:text-zink-200">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2" href="#">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
    <TCard>
      <template #header>
        <div class="bg-slate-200 card-body rounded-t-md dark:bg-zink-600">
          <h6 class="text-15">Card title</h6>
        </div>
      </template>

      <h6 class="mb-4 text-15">Card title</h6>
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2" href="#">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
    <TCard title="Card title">
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2" href="#">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
      <template #action>
        <div class="bg-slate-200 card-body dark:bg-zink-600 rounded-b-md">
          <p class="text-slate-500 ext-sm dark:text-zink-200">
            Last updated 5 mins ago
          </p>
        </div>
      </template>
    </TCard>
  </div>
</template>
