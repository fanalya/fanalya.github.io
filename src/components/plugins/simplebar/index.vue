<script lang="ts" setup>
import { cards, cards1 } from "@/components/plugins/simplebar/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 lg:grid-cols-3">
    <div v-for="(card, index) in cards" :key="index">
      <TCard :title="card.title">
        <simplebar
          :style="{ maxHeight: card.maxHeight }"
          :class="card.classValue"
          :data-simplebar-auto-hide="card.autoHide"
          :data-simplebar-direction="card.direction"
        >
          <p
            class="mb-2"
            v-for="(paragraph, pIndex) in card.paragraphs"
            :key="pIndex"
            :class="card.classValue"
          >
            {{ paragraph.content }}
          </p>
        </simplebar>
      </TCard>
    </div>
  </div>

  <h5 class="mb-4 underline">Simplebar Track Color:</h5>

  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
    <div v-for="(card, index) in cards1" :key="index">
      <TCard :title="card.title">
        <simplebar
          :data-simplebar-track="card.track"
          :style="{ maxHeight: card.maxHeight }"
          :class="card.classValue"
        >
          <p
            v-for="(paragraph, idx) in card.paragraphs"
            :key="idx"
            class="mb-2"
          >
            {{ paragraph.content }}
          </p>
        </simplebar>
      </TCard>
    </div>
  </div>
</template>
