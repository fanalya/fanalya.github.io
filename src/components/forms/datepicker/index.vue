<script lang="ts" setup>
import { ref } from "vue";
import { getAfterDateFromDay } from "@/app/common/dateFormate.ts";

const today = new Date();
const endDay = getAfterDateFromDay({ endDay: 10 });
const defaultDate = ref(today);
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic Example">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          dateFormat: 'd M, Y'
        </code>
        in config Prop.
      </p>

      <TFlatPicker hide-details :config="{ dateFormat: 'd M, Y' }" />
    </TCard>
    <TCard title="Date Time">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">enableTime: true</code>
        in config Prop.
      </p>

      <TFlatPicker
        hide-details
        :config="{ dateFormat: 'd.m.y H:i', enableTime: true }"
      />
    </TCard>
    <TCard title="Human-Friendly Dates">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          dateFormat: 'F j, Y'
        </code>
        in config Prop.
      </p>

      <TFlatPicker hide-details :config="{ dateFormat: 'F j, Y' }" />
    </TCard>
    <TCard title="Min Date and Max Date">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          minDate: 'Min date here', maxDate: 'Max date here'
        </code>
        in config Prop. It will be String/Date.
      </p>
      <TFlatPicker
        hide-details
        :config="{
          dateFormat: 'd M, Y',
          minDate: today,
          maxDate: endDay
        }"
      />
    </TCard>
    <TCard title="Default Date">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all"> v-model </code>
        value.
      </p>
      <TFlatPicker
        v-model="defaultDate"
        hide-details
        :config="{
          dateFormat: 'd M, Y'
        }"
      />
    </TCard>
    <TCard title="Selecting Multiple Dates">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all"> mode: 'multiple' </code>
        in config prop. By default mode is
        <code class="text-xs text-pink-500 select-all">single</code>.
      </p>
      <TFlatPicker hide-details :config="{ mode: 'multiple' }" />
    </TCard>
    <TCard title="Range">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all"> mode: 'range' </code>
        in config prop. By default mode is
        <code class="text-xs text-pink-500 select-all">single</code>.
      </p>
      <TFlatPicker hide-details :config="{ mode: 'range' }" />
    </TCard>
    <TCard title="Week Numbers">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all">
          weekNumbers: true
        </code>
        in config prop.
      </p>
      <TFlatPicker hide-details :config="{ weekNumbers: true }" />
    </TCard>
    <TCard title="Inline">
      <p class="mb-4">
        Set
        <code class="text-xs text-pink-500 select-all"> inline: true </code>
        in config prop.
      </p>
      <TFlatPicker hide-details :config="{ inline: true }" />
    </TCard>
  </div>
</template>
