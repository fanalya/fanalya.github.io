<script lang="ts" setup>
import { colors } from "@/app/utils";
import IconSwitches from "@/components/forms/switch/IconSwitches.vue";
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
    <TCard title="Default Switch">
      <div class="flex flex-col gap-3">
        <div v-for="(item, index) in colors">
          <TSwitch :color="item.value" checked :id="'default-switch-' + index">
            {{ item.title }} switch
          </TSwitch>
        </div>
      </div>
    </TCard>
    <TCard title="Squared Switch">
      <div class="flex flex-col gap-3">
        <div v-for="(item, index) in colors">
          <TSwitch
            :color="item.value"
            checked
            squared
            :id="'squared-switch-' + index"
          >
            {{ item.title }} switch
          </TSwitch>
        </div>
      </div>
    </TCard>
    <TCard title="Soft Switch">
      <div class="flex flex-col gap-3">
        <div v-for="(item, index) in colors">
          <TSwitch
            :color="item.value"
            checked
            variant="soft"
            :id="'soft-switch-' + index"
          >
            {{ item.title }} switch
          </TSwitch>
        </div>
      </div>
    </TCard>
    <TCard title="Outline Switch">
      <div class="flex flex-col gap-3">
        <div v-for="(item, index) in colors">
          <TSwitch
            :color="item.value"
            checked
            variant="outlined"
            :id="'outlined-switch-' + index"
          >
            {{ item.title }} switch
          </TSwitch>
        </div>
      </div>
    </TCard>
    <IconSwitches />
    <div>
      <TCard title="Size Switch">
        <div class="flex flex-col gap-3">
          <TSwitch id="switch-size-sm" size="small">Custom Switch</TSwitch>
          <TSwitch id="switch-size-default" color="green" checked
            >Custom Switch</TSwitch
          >
          <TSwitch id="switch-size-large" color="orange" size="large" checked>
            Custom Switch
          </TSwitch>
        </div>
      </TCard>
      <TCard title="Disabled Switch">
        <div class="flex flex-col gap-3">
          <TSwitch id="disabled-switch-sm" disabled size="small"
            >Custom Switch</TSwitch
          >
          <TSwitch id="disabled-switch-default" disabled color="green" checked
            >Custom Switch</TSwitch
          >
          <TSwitch
            id="disabled-switch-lg"
            disabled
            color="orange"
            size="large"
            checked
          >
            Custom Switch
          </TSwitch>
        </div>
      </TCard>
    </div>
  </div>
</template>
