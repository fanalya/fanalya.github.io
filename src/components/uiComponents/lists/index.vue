<script lang="ts" setup>
const listItems = [
  "Send the billing agreement",
  "Send over all the documentation",
  "Meeting with daron to review the intake form",
  "Check tailwick theme and give customer support"
];
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
    <TCard title="Basic List">
      <ul class="space-y-5 rounded-md">
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="Bullet List">
      <ul class="space-y-5 list-disc list-inside rounded-md">
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="List with Numbered">
      <ul class="space-y-5 list-decimal list-inside rounded-md">
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="Marker Colors">
      <ul
        class="space-y-5 list-disc list-inside rounded-md marker:text-red-500"
      >
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="Marker Colors">
      <ul
        class="space-y-5 list-decimal list-inside rounded-md marker:text-custom-500"
      >
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="Custom Square List">
      <ul class="list-[square] rounded-md list-inside space-y-5">
        <li v-for="item in listItems">{{ item }}</li>
      </ul>
    </TCard>
    <TCard title="Bordered List">
      <ul class="border rounded-md border-slate-200 dark:border-zink-500">
        <li
          v-for="(item, index) in listItems"
          class="px-3.5 py-2.5 border-b dark:border-zink-500"
          :class="{ 'text-custom-50 bg-custom-500': index === 1 }"
        >
          {{ item }}
        </li>
      </ul>
    </TCard>
    <TCard title="Flush List">
      <ul>
        <li
          class="px-3.5 py-2.5"
          v-for="(item, index) in listItems"
          :class="
            index < listItems.length - 1 ? 'border-b dark:border-zink-500' : ''
          "
        >
          {{ item }}
        </li>
      </ul>
    </TCard>
    <TCard title="List with Link">
      <div class="flex flex-col border rounded-md dark:border-zink-500">
        <a
          v-for="(item, index) in listItems"
          href="#!"
          class="block px-3.5 py-2.5 transition border-b dark:border-zink-500 hover:bg-slate-100 dark:hover:bg-zink-600"
          :class="{
            'pointer-events-none bg-custom-500 text-custom-50': index == 1,
            'pointer-events-none bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600':
              index == 3
          }"
          >{{ item }}</a
        >
      </div>
    </TCard>
    <TCard title="List with Checkbox">
      <div class="flex flex-col border rounded-md dark:border-zink-300/20">
        <label
          v-for="(item, index) in listItems"
          class="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2 flex-wrap"
        >
          <input
            class="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 ltr:mr-1 rtl:ml-1 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500"
            type="checkbox"
            value=""
            :checked="index === 0"
          />
          {{ item }}
        </label>
      </div>
    </TCard>
    <TCard title="List with Radio">
      <div class="flex flex-col border rounded-md dark:border-zink-300/20">
        <label
          v-for="(item, index) in listItems"
          class="px-3.5 py-2.5 border-b dark:border-zink-300/20 flex items-center gap-2 flex-wrap"
        >
          <input
            class="size-4 border rounded-full appearance-none bg-slate-100 border-slate-200 text-custom-600 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-600 dark:border-zink-500 dark:checked:bg-custom-500 dark:checked:border-custom-500"
            type="radio"
            name="listWithRadio"
            value=""
            :checked="index === 1"
          />
          {{ item }}
        </label>
      </div>
    </TCard>
  </div>
</template>
