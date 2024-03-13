<script lang="ts" setup></script>
<template>
  <h5 class="mb-5 underline">Card Animation</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard
      class="block overflow-hidden transition group/card hover:shadow-lg"
      title="Card title"
    >
      <template #header>
        <div class="relative">
          <img
            class="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-t-md"
            src="@/assets/images/small/img-4.jpg"
            alt="Image"
          />
        </div>
      </template>
      <p class="mt-2 text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </TCard>
    <TCard
      class="block overflow-hidden transition group/card hover:shadow-lg"
      title="Card title"
    >
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <template #action>
        <div class="relative">
          <img
            class="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-b-md"
            src="@/assets/images/small/img-9.jpg"
            alt="Image"
          />
        </div>
      </template>
    </TCard>
    <TCard
      class="block overflow-hidden transition hover:shadow-lg"
      title="Card title"
    >
      <template #header>
        <img
          class="rounded-t-md"
          src="@/assets/images/small/img-10.jpg"
          alt="Image"
        />
      </template>
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </TCard>
    <TCard
      class="block overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
      title="Card title"
    >
      <template #header>
        <img
          class="rounded-t-md"
          src="@/assets/images/small/img-10.jpg"
          alt="Image"
        />
      </template>
      <p class="text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </TCard>
  </div>
</template>
