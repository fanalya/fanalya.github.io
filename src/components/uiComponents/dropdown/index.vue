<script lang="ts" setup>
import { ChevronUp, ChevronDown, MoveRight } from "lucide-vue-next";
import { colors } from "@/app/utils";
const dropdownData = [
  "Action",
  "Another Action",
  "Something else here",
  "Your Link"
];
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
    <TCard title="Basic Dropdown" class="relative">
      <div class="flex flex-wrap gap-2">
        <TList :items="dropdownData" placement="bottom-start">
          <template #title="{ isVisible, onClick }">
            <TButton class="gap-2 flex flex-wrap" @click="onClick">
              Dropdown Button
              <ChevronDown :size="16" v-if="!isVisible" />
              <ChevronUp :size="16" v-else />
            </TButton>
          </template>
        </TList>
        <TList :items="dropdownData" placement="bottom-start">
          <template #title="{ isVisible, onClick }">
            <TButton
              class="gap-2 flex flex-wrap"
              @click="onClick"
              variant="link"
            >
              Link Dropdown
              <ChevronDown :size="16" v-if="!isVisible" />
              <ChevronUp :size="16" v-else />
            </TButton>
          </template>
        </TList>
      </div>
    </TCard>
    <TCard title="Split Button Dropdowns">
      <div class="flex gap-2 flex-wrap">
        <TList :items="dropdownData" placement="bottom-start">
          <template #title="{ onClick }">
            <TButton
              class="rtl:pl-[calc(theme('spacing.2')_*_5.5)] ltr:pr-[calc(theme('spacing.2')_*_5.5)] relative"
            >
              <ChevronDown
                class="p-2 w-[34px] bg-white/10 h-full absolute flex rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
                @click="onClick"
              />
              Dropdown Split
            </TButton>
          </template>
        </TList>
        <TList :items="dropdownData" placement="bottom-start">
          <template #title="{ onClick }">
            <TButton
              class="ltr:pl-[calc(theme('spacing.2')_*_5.5)] rtl:pr-[calc(theme('spacing.2')_*_5.5)] relative"
            >
              <ChevronDown
                class="p-2 w-[34px] bg-white/10 h-full absolute flex ltr:-left-[1px] rtl:-right-[1px] bottom-0 top-0 items-center justify-center"
                @click="onClick"
              />

              Dropdown Split
            </TButton>
          </template>
        </TList>
      </div>
    </TCard>
  </div>
  <TCard title="Basic Dropdown">
    <div class="flex gap-2 flex-wrap">
      <TList
        :items="dropdownData"
        v-for="color in colors"
        :key="'color-dropdown-' + color.value"
        :color="color.value"
        placement="bottom-start"
      >
        <template #title="{ isVisible, onClick }">
          <TButton
            class="gap-2 flex flex-wrap"
            @click="onClick"
            :color="color.value"
          >
            {{ color.title }} Dropdown
            <ChevronDown :size="16" v-if="!isVisible" />
            <ChevronUp :size="16" v-else />
          </TButton>
        </template>
      </TList>
    </div>
  </TCard>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
    <TCard title="Dropdown Content" class="relative">
      <TMenu placement="bottom-start">
        <TButton class="gap-2 flex flex-wrap">
          Dropdown Button here
          <ChevronDown :size="16" />
        </TButton>
        <template #content>
          <form action="#!" class="p-4">
            <div class="mb-3 min-w-[14rem]">
              <label
                for="inputText"
                class="inline-block mb-2 text-base font-medium"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                type="email"
                id="inputText"
                class="form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 dark:bg-zink-600 dark:border-zink-500 dark:placeholder:text-zink-300"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="inputText"
                class="inline-block mb-2 text-base font-medium"
                >Password <span class="text-red-500">*</span></label
              >
              <input
                type="password"
                id="inputText"
                class="form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 dark:bg-zink-600 dark:border-zink-500 dark:placeholder:text-zink-300"
                placeholder="Password"
                required
              />
            </div>
            <div class="text-right">
              <button
                type="submit"
                class="py-1 text-xs px-1.5 text-white btn bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                Sign In
                <MoveRight class="inline-block size-3 ml-1" />
              </button>
            </div>
          </form>
        </template>
      </TMenu>
    </TCard>
  </div>
</template>
