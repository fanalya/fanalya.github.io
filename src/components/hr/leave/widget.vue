<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  icon: {
    type: [Object, Function] as PropType<any>
  },
  count: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: null
  },
  iconBg: {
    type: String,
    default: "red"
  }
});
</script>

<template>
  <TCard>
    <div class="flex items-center gap-3">
      <div
        :class="`flex items-center justify-center size-12 text-${iconBg}-500 bg-${iconBg}-100 rounded-md text-15 dark:bg-${iconBg}-500/20 shrink-0`"
      >
        <icon />
      </div>
      <div class="grow">
        <h5 class="mb-1 text-16">
          <TCountTo :endVal="count" />
        </h5>
        <p class="text-slate-500 dark:text-zink-200">{{ text }}</p>
      </div>
    </div>
  </TCard>
</template>
