<script setup>
import LoginForm from "@/components/account/LoginForm.vue";
import { LAYOUT_TYPES } from "@/layouts/types.js";

defineProps({
  layout: {
    default: LAYOUT_TYPES.BASIC
  }
});
</script>
<template>
  <LoginForm :layout="layout" />
</template>
