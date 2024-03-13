<script lang="ts" setup>
const defaultProgress = [
  { color: "custom", width: 25 },
  { color: "orange", width: 25 },
  { color: "yellow", width: 50 },
  { color: "purple", width: 50 },
  { color: "green", width: 75 },
  { color: "sky", width: 75 },
  { color: "red", width: 100 },
  { color: "slate", width: 100 }
];
</script>
<template>
  <TCard title="Default & Color Variants">
    <div class="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
      <TProgressBar
        v-for="(data, index) in defaultProgress"
        :key="'progress-' + index"
        :color="data.color"
        :width="data.width"
        class="mb-4"
      />
    </div>
  </TCard>
  <div class="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
    <TCard title="Progress with Label">
      <TProgressBar
        class="mb-7 mt-7"
        color="custom"
        :width="25"
        label
        animate
      />
      <TProgressBar class="mb-7" color="green" :width="70" label animate />
      <TProgressBar color="orange" :width="40" label animate />
    </TCard>
    <TCard title="Animated Progress">
      <TProgressBar class="mb-4" color="yellow" :width="25" animate />
      <TProgressBar class="mb-4" color="red" :width="50" animate />
      <TProgressBar class="mb-4" color="purple" :width="75" animate />
      <TProgressBar color="slate" :width="100" animate />
    </TCard>
  </div>
  <TCard title="Progress Sizes">
    <TProgressBar class="mb-4" :width="25" :height="1.5" />
    <TProgressBar class="mb-4" :width="25" :height="2" />
    <TProgressBar class="mb-4" :width="25" :height="3" />
    <TProgressBar class="mb-4" :width="25" :height="3.5" />
    <TProgressBar class="mb-4" :width="25" :height="5" />
    <TProgressBar :width="25" :height="6" />
  </TCard>
  <TCard title="Progress with Content">
    <div class="flex items-center justify-between mb-2">
      <h6 class="mb-0">Tailwick - Admin & Dashboard</h6>
      <h6 class="mb-0 text-custom-500">24%</h6>
    </div>
    <TProgressBar class="mb-4" :width="25" />
    <div class="flex items-center justify-between mb-2">
      <h6 class="mb-0">Nazox - Admin & Dashboard</h6>
      <h6 class="mb-0 text-green-500">66%</h6>
    </div>
    <TProgressBar color="green" class="mb-4" :width="25" />
  </TCard>
  <TCard title="With Label Inside">
    <TProgressBar width="24" height="3" class="mb-4">
      <template #inside>
        <span class="text-[8px]">24%</span>
      </template>
    </TProgressBar>
    <TProgressBar :height="3.5" class="mb-4">
      <template #inside>
        <span class="text-[10px]">25%</span>
      </template>
    </TProgressBar>
    <TProgressBar :height="5">
      <template #inside>
        <span class="text-xs">25%</span>
      </template>
    </TProgressBar>
  </TCard>
</template>
