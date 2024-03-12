<script lang="ts" setup>
import { ref } from "vue";
import {
  basicSelectData,
  multiSelectWithGroup
} from "@/components/forms/multiSelect/utils";

const defaultValue = ref(["Apple", "Blueberry", "Cherry"]);
const multiGroupValue = ref(["Batman"]);
const searchableValue = ref(["Apple"]);
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic Example">
      <TMultiSelect
        v-model="defaultValue"
        :options="basicSelectData"
        multiple
        mode="tags"
      />
    </TCard>
    <TCard title="Headers Multi Select">
      <TMultiSelect
        v-model="multiGroupValue"
        :options="multiSelectWithGroup"
        multiple
        mode="tags"
        groups
      />
    </TCard>
    <TCard title="Searchable Select">
      <TMultiSelect
        v-model="searchableValue"
        :options="basicSelectData"
        multiple
        mode="tags"
        searchable
      />
    </TCard>
  </div>
</template>
