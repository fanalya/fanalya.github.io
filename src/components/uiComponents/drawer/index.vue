<script lang="ts" setup>
import DrawerContent from "@/components/uiComponents/drawer/DrawerContent.vue";
import { ref } from "vue";
const drawer1 = ref(false);
const drawer2 = ref(false);
const drawer3 = ref(false);
const drawer4 = ref(false);
</script>
<template>
  <TCard title="Default">
    <div class="flex gap-2 flex-wrap">
      <TButton @click="drawer1 = !drawer1">End Drawer</TButton>
      <TButton @click="drawer2 = !drawer2">Start Drawer</TButton>
      <TButton @click="drawer3 = !drawer3">Bottom Drawer</TButton>
      <TButton @click="drawer4 = !drawer4">Top Drawer</TButton>
    </div>
  </TCard>
  <TDrawer v-model="drawer1" location="drawer-end">
    <template #title>
      <h5 class="mb-0 text-16 font-medium">Drawer Heading</h5>
    </template>
    <template #content> <DrawerContent /> </template>
  </TDrawer>
  <TDrawer v-model="drawer2" location="drawer-start">
    <template #title>
      <h5 class="mb-0 text-16 font-medium">Drawer Heading</h5>
    </template>
    <template #content> <DrawerContent /> </template>
  </TDrawer>
  <TDrawer v-model="drawer3" location="drawer-bottom">
    <template #title>
      <h5 class="mb-0 text-16 font-medium">Drawer Heading</h5>
    </template>
    <template #content> <DrawerContent /> </template>
  </TDrawer>
  <TDrawer v-model="drawer4" location="drawer-top">
    <template #title>
      <h5 class="mb-0 text-16 font-medium">Drawer Heading</h5>
    </template>
    <template #content> <DrawerContent /> </template>
  </TDrawer>
</template>
