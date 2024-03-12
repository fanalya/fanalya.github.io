<script lang="ts" setup>
import { ref } from "vue";
import ModalDataDialogData from "@/components/uiComponents/modal/ModalDataDialog.vue";

const defaultModal = ref(false);
const topModal = ref(false);
const bottomModal = ref(false);
const xSmallModal = ref(false);
const smallModal = ref(false);
const largeModal = ref(false);
const xLargeModal = ref(false);
const fullModal = ref(false);
</script>
<template>
  <TCard title="Default">
    <div class="flex gap-2 flex-wrap">
      <TButton @click="defaultModal = !defaultModal"> Default Modal </TButton>
      <TButton @click="topModal = !topModal"> Top Modal </TButton>
      <TButton @click="bottomModal = !bottomModal"> Bottom Modal </TButton>
    </div>
  </TCard>
  <TCard title="Modal Sizes">
    <div class="flex gap-2 flex-wrap">
      <TButton @click="xSmallModal = !xSmallModal"> Extra Small Modal </TButton>
      <TButton @click="smallModal = !smallModal"> Small Modal </TButton>
      <TButton @click="defaultModal = !defaultModal"> Default Modal </TButton>
      <TButton @click="largeModal = !largeModal"> Large Modal </TButton>
      <TButton @click="xLargeModal = !xLargeModal"> Extra Large Modal </TButton>
      <TButton @click="fullModal = !fullModal"> Full Screen Modal </TButton>
    </div>
  </TCard>
  <TModal v-model="defaultModal">
    <template #content>
      <ModalDataDialogData @onClose="defaultModal = false" />
    </template>
  </TModal>
  <TModal v-model="topModal" location="modal-top">
    <template #content>
      <ModalDataDialogData @onClose="topModal = false" />
    </template>
  </TModal>
  <TModal v-model="bottomModal" location="modal-bottom">
    <template #content>
      <ModalDataDialogData @onClose="bottomModal = false" />
    </template>
  </TModal>
  <TModal v-model="xSmallModal" size="x-small">
    <template #content>
      <ModalDataDialogData @onClose="xSmallModal = false" />
    </template>
  </TModal>
  <TModal v-model="smallModal" size="small">
    <template #content>
      <ModalDataDialogData @onClose="smallModal = false" />
    </template>
  </TModal>
  <TModal v-model="largeModal" size="large">
    <template #content>
      <ModalDataDialogData @onClose="largeModal = false" />
    </template>
  </TModal>
  <TModal v-model="xLargeModal" size="x-large">
    <template #content>
      <ModalDataDialogData @onClose="xLargeModal = false" />
    </template>
  </TModal>
  <TModal v-model="fullModal" size="full">
    <template #content>
      <ModalDataDialogData @onClose="fullModal = false" />
    </template>
  </TModal>
</template>
