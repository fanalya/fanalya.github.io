<script lang="ts" setup>
import { ref } from "vue";
const defaultTime = ref("16:20");
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Time picker">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          noCalendar: true, enableTime: true
        </code>
        in config prop.
      </p>
      <TFlatPicker
        hide-details
        :config="{
          noCalendar: true,
          enableTime: true
        }"
      />
    </TCard>
    <TCard title="24-hour Time picker">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          noCalendar: true, enableTime: true, time_24hr: true
        </code>
        in config prop.
      </p>
      <TFlatPicker
        hide-details
        :config="{
          noCalendar: true,
          enableTime: true,
          time_24hr: true
        }"
      />
    </TCard>
    <TCard title="Time picker w/Limits">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          noCalendar: true, enableTime: true, minTime: 'Min Time', maxTime: 'Max
          Time'
        </code>
        in config prop.
      </p>
      <TFlatPicker
        hide-details
        :config="{
          noCalendar: true,
          enableTime: true,
          minTime: '16:00',
          maxTime: '22:00'
        }"
      />
    </TCard>
    <TCard title="Preloading Time">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          noCalendar: true, enableTime: true, minTime: 'Min Time', maxTime: 'Max
          Time'
        </code>
        in config prop.
      </p>
      <TFlatPicker
        v-model="defaultTime"
        hide-details
        :config="{
          noCalendar: true,
          enableTime: true
        }"
      />
    </TCard>
    <TCard title="Inline">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          noCalendar: true, enableTime: true, inline: true
        </code>
        in config prop.
      </p>
      <TFlatPicker
        hide-details
        :config="{
          noCalendar: true,
          enableTime: true,
          inline: true
        }"
      />
    </TCard>
  </div>
</template>
