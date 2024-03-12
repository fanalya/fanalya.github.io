<script lang="ts" setup>
import { colors } from "@/app/utils";
import { Frown, Gift, Mail } from "lucide-vue-next";
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
    <TCard title="Default Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel v-for="color in colors" :key="color.value" :color="color.value">
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Outline Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="outlined"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>

    <TCard title="Bordered Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="bordered"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Soft Outline Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="soft-outlined"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>

    <TCard title="Pills Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="pill"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Pills Outline Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="pill-outlined"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>

    <TCard title="Dismissible Badges">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          dismissible
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Dismissible Outline Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="outlined"
          dismissible
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Fill Badges">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="fill"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Dismissible Outline Badge">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="pill-outlined"
          dismissible
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Badge with Icon">
      <div class="flex gap-2 flex-wrap">
        <TLabel v-for="color in colors" :key="color.value" :color="color.value">
          <Frown class="size-3 ltr:mr-1 rtl:ml-1" />
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
    <TCard title="Badge with Indicator">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="outlined"
        >
          <span
            class="w-1.5 h-1.5 ltr:mr-1 rtl:ml-1 rounded-full inline-block"
            :class="`bg-${color.value}-500`"
          />
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>

    <TCard title="Badge with Icon Only">
      <div class="flex gap-2 flex-wrap">
        <TLabel icon>
          <Gift class="size-3" stroke-width="2" />
        </TLabel>
        <TLabel icon color="green" rounded>
          <Gift class="size-3" stroke-width="2" />
        </TLabel>
        <TLabel icon color="orange" variant="plain">
          <Gift class="size-3" stroke-width="2" />
        </TLabel>
      </div>
    </TCard>
    <TCard title="Badge with Button">
      <div class="flex gap-2 flex-wrap">
        <TButton>
          Custom Button
          <TLabel
            rounded
            class="size-5 text-[10px] shrink-0 bg-custom-400 ltr:ml-2 rtl:mr-2"
            variant="fill"
            >15
          </TLabel>
        </TButton>
        <TButton icon class="relative p-0 h-auto">
          <TLabel
            rounded
            color="red"
            variant="fill"
            class="absolute size-5 text-[11px] ltr:-right-2 rtl:-left-4 -top-2"
            >8
          </TLabel>
          <Mail class="size-4" />
        </TButton>
      </div>
    </TCard>

    <TCard title="Badges as Links">
      <div class="flex gap-2 flex-wrap">
        <TLabel
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          variant="link"
        >
          {{ color.title }}
        </TLabel>
      </div>
    </TCard>
  </div>
</template>
