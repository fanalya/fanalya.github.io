<script lang="ts" setup>
import { ref } from "vue";
const data1 = ref([
  { color: "custom", count: 50 },
  { color: "yellow", count: 19 },
  { color: "green", count: 33 },
  { color: "red", count: 10 },
  { color: "orange", count: 25 },
  { color: "purple", count: 10 },
  { color: "sky", count: 18 },
  { color: "slate", count: 18 }
]);
const data2 = ref([
  { color: "custom", count: 50 },
  { color: "yellow", count: 19 },
  { color: "green", count: 33 },
  { color: "red", count: 10 },
  { color: "orange", count: 25 },
  { color: "purple", count: 10 },
  { color: "sky", count: 18 },
  { color: "slate", count: 18 }
]);
const data3 = ref([
  { color: "custom", count: 50 },
  { color: "yellow", count: 19 },
  { color: "green", count: 33 },
  { color: "red", count: 10 },
  { color: "orange", count: 25 },
  { color: "purple", count: 10 },
  { color: "sky", count: 18 },
  { color: "slate", count: 18 }
]);
const data4 = ref([
  { color: "custom", count: 50 },
  { color: "yellow", count: 19 },
  { color: "green", count: 33 },
  { color: "red", count: 10 },
  { color: "orange", count: 25 },
  { color: "purple", count: 10 },
  { color: "sky", count: 18 },
  { color: "slate", count: 18 }
]);
</script>
<template>
  <TCard title="Basic Example">
    <div class="flex gap-3 flex-wrap">
      <span v-for="(item, index) in data1" :key="'basic-spin-' + index">
        <TNumberInputSpinner
          variant="soft"
          :color="item.color"
          v-model="item.count"
          @onAdd="item.count++"
          @onReduce="item.count--"
        />
      </span>
    </div>
  </TCard>
  <TCard title="Group Input Spin Example">
    <div class="flex gap-3 flex-wrap">
      <span v-for="(item, index) in data2" :key="'basic-spin-' + index">
        <TNumberInputSpinner
          group
          :color="item.color"
          v-model="item.count"
          @onAdd="item.count++"
          @onReduce="item.count--"
        />
      </span>
    </div>
  </TCard>
  <TCard title="Rounded Example">
    <div class="flex gap-3 flex-wrap">
      <span v-for="(item, index) in data3" :key="'basic-spin-' + index">
        <TNumberInputSpinner
          rounded
          variant="soft"
          :color="item.color"
          v-model="item.count"
          @onAdd="item.count++"
          @onReduce="item.count--"
        />
      </span>
    </div>
    <div class="flex gap-3 mt-4 flex-wrap">
      <span v-for="(item, index) in data4" :key="'basic-spin-' + index">
        <TNumberInputSpinner
          rounded
          group
          :color="item.color"
          v-model="item.count"
          @onAdd="item.count++"
          @onReduce="item.count--"
        />
      </span>
    </div>
  </TCard>
</template>
