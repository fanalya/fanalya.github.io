<script lang="ts" setup>
import { colors } from "@/app/utils";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
    <TCard title="Default Checkbox">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TCheckbox
            :color="item.value"
            :checked="index % 2 === 0"
            :id="'default-checkbox-' + index"
          >
            {{ item.title }}
          </TCheckbox>
        </div>
      </div>
    </TCard>
    <TCard title="Circle Checkbox">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TCheckbox
            :color="item.value"
            rounded
            :checked="index % 2 === 1"
            :id="'rounded-checkbox-' + index"
          >
            {{ item.title }}
          </TCheckbox>
        </div>
      </div>
    </TCard>
    <TCard title="Bordered Checkbox">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TCheckbox
            :color="item.value"
            variant="bordered"
            :rounded="index > 3"
            :checked="index % 2 === 1"
            :id="'bordered-checkbox-' + index"
          >
            {{ item.title }}
          </TCheckbox>
        </div>
      </div>
    </TCard>
    <TCard title="Soft Checkbox">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TCheckbox
            :color="item.value"
            variant="soft"
            :rounded="index > 3"
            :checked="index % 2 === 1"
            :id="'soft-checkbox-' + index"
          >
            {{ item.title }}
          </TCheckbox>
        </div>
      </div>
    </TCard>
    <TCard title="Outline Checkbox">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TCheckbox
            :color="item.value"
            variant="outlined"
            :rounded="index > 3"
            :checked="index % 2 === 1"
            :id="'outlined-checkbox-' + index"
          >
            {{ item.title }}
          </TCheckbox>
        </div>
      </div>
    </TCard>
    <TCard title="Default Radio">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TRadio
            :color="item.value"
            :checked="index % 2 === 1"
            :id="'default-radio-' + index"
          >
            {{ item.title }}
          </TRadio>
        </div>
      </div>
    </TCard>
    <TCard title="Square Radio">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TRadio
            :color="item.value"
            :checked="index % 2 === 1"
            squared
            :id="'squared-radio-' + index"
          >
            {{ item.title }}
          </TRadio>
        </div>
      </div>
    </TCard>
    <TCard title="Bordered Radio">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TRadio
            :color="item.value"
            :checked="index % 2 === 1"
            variant="bordered"
            :id="'bordered-radio-' + index"
          >
            {{ item.title }}
          </TRadio>
        </div>
      </div>
    </TCard>
    <TCard title="Soft Radio">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TRadio
            :color="item.value"
            :checked="index % 2 === 1"
            :squared="index < 4"
            variant="soft"
            :id="'soft-radio-' + index"
          >
            {{ item.title }}
          </TRadio>
        </div>
      </div>
    </TCard>
    <TCard title="Outline Radio">
      <div class="flex flex-col gap-2">
        <div v-for="(item, index) in colors">
          <TRadio
            :color="item.value"
            :checked="index % 2 === 1"
            :squared="index < 4"
            variant="outlined"
            :id="'outlined-radio-' + index"
          >
            {{ item.title }}
          </TRadio>
        </div>
      </div>
    </TCard>
    <div>
      <TCard title="Inline Checkbox">
        <div class="flex gap-3 flex-wrap">
          <div v-for="(item, index) in colors">
            <TCheckbox
              :color="item.value"
              :checked="index % 2 === 0"
              :id="'default-checkbox-' + index"
            >
              {{ item.title }}
            </TCheckbox>
          </div>
        </div>
      </TCard>
      <TCard title="Without Label Checkbox">
        <div class="flex gap-1 flex-wrap">
          <div v-for="(item, index) in colors">
            <TCheckbox
              :color="item.value"
              :checked="index % 2 === 0"
              :id="'default-checkbox-' + index"
            />
          </div>
        </div>
      </TCard>
      <TCard title="Disabled Checkbox">
        <div class="flex gap-3 flex-wrap">
          <TCheckbox disabled checked id="custom-disabled">
            Disabled Custom
          </TCheckbox>
          <TCheckbox disabled color="green" id="green-disabled">
            Disabled Green
          </TCheckbox>
          <TCheckbox disabled checked color="orange" id="orange-disabled">
            Disabled Orange
          </TCheckbox>
        </div>
      </TCard>
    </div>
    <div>
      <TCard title="Inline Radio">
        <div class="flex gap-2 flex-wrap">
          <div v-for="(item, index) in colors">
            <TRadio
              :color="item.value"
              :checked="index % 2 === 1"
              :id="'inline-radio-' + index"
            >
              {{ item.title }}
            </TRadio>
          </div>
        </div>
      </TCard>
      <TCard title="Without Label Radio">
        <div class="flex gap-2 flex-wrap">
          <div v-for="(item, index) in colors">
            <TRadio
              :color="item.value"
              :checked="index % 2 === 1"
              :id="'without label-radio-' + index"
            />
          </div>
        </div>
      </TCard>
      <TCard title="Disabled Radio">
        <div class="flex flex-wrap gap-2">
          <TRadio disabled checked id="custom-disabled">
            Disabled Custom
          </TRadio>
          <TRadio disabled color="green" id="green-disabled">
            Disabled Green
          </TRadio>
          <TRadio disabled checked color="orange" id="orange-disabled">
            Disabled Orange
          </TRadio>
        </div>
      </TCard>
    </div>
  </div>
</template>
