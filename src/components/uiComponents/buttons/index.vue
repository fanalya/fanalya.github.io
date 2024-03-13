<script lang="ts" setup>
import { colors } from "@/app/utils";
import CircularLoader from "@/assets/images/animation/CircularLoader.vue";
</script>
<template>
  <TCard title="Basic Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton>Custom Button</TButton>
      <TButton variant="soft">Soft Button</TButton>
      <TButton variant="dashed">Dashed Button</TButton>
      <TButton variant="outlined">Outline Button</TButton>
      <TButton variant="ghost">Ghost Button</TButton>
      <TButton variant="link">Btn Link</TButton>
    </div>
  </TCard>
  <TCard title="Basic Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton v-for="color in colors" :key="color.value" :color="color.value">
        {{ color.title }}
      </TButton>
      <button
        type="button"
        class="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
      >
        Light
      </button>
    </div>
  </TCard>
  <TCard title="Soft Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton
        v-for="color in colors"
        :key="color.value"
        :color="color.value"
        variant="soft"
        >{{ color.title }}
      </TButton>
    </div>
  </TCard>
  <TCard title="Dashed Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton
        v-for="color in colors"
        :key="color.value"
        :color="color.value"
        variant="dashed"
        >{{ color.title }}
      </TButton>
    </div>
  </TCard>
  <TCard title="Outline Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton
        v-for="color in colors"
        :key="color.value"
        :color="color.value"
        variant="outlined"
        >{{ color.title }}
      </TButton>
    </div>
  </TCard>
  <TCard title="Ghost Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton
        v-for="color in colors"
        :key="color.value"
        :color="color.value"
        variant="ghost"
        >{{ color.title }}
      </TButton>
    </div>
  </TCard>
  <TCard title="Animation Buttons">
    <div class="flex flex-wrap gap-3">
      <TButton icon class="p-0"> <CircularLoader /></TButton>
      <TButton>
        <CircularLoader class="ltr:mr-2 rtl:ml-2" /> Processing...
      </TButton>
      <TButton variant="dashed" classes="relative">
        <span class="absolute flex size-2 -top-1 ltr:-right-1 rtl:-left-1">
          <span
            class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"
          />
          <span class="relative inline-flex size-2 rounded-full bg-sky-500" />
        </span>
        Dashed Button
      </TButton>
      <TButton
        rounded
        icon
        variant="outlined"
        color="green"
        classes=" animate-bounce"
      >
        <i class="ri-download-2-line" />
      </TButton>
    </div>
  </TCard>
  <TCard title="Icon Buttons">
    <div class="grid grid-cols-1 mb-5 gap-7 lg:grid-cols-2">
      <div class="flex gap-2 flex-wrap">
        <TButton icon> <i class="ri-download-2-line" /> </TButton>
        <TButton icon variant="outlined" color="green">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon variant="dashed" color="yellow">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon variant="soft" color="sky">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon variant="ghost" color="red">
          <i class="ri-download-2-line" />
        </TButton>
      </div>
      <div class="flex gap-2 flex-wrap">
        <TButton
          v-for="color in colors"
          :key="color.value"
          :color="color.value"
          icon
        >
          <i class="ri-download-2-line" />
        </TButton>
      </div>
    </div>
  </TCard>
  <TCard title="Buttons Sizes">
    <div class="flex gap-2 items-center flex-wrap">
      <TButton class="py-1 text-xs px-1.5">Custom Button</TButton>
      <TButton class="px-2 py-1.5 text-xs">Custom Button</TButton>
      <TButton class="px-2.5 py-2 text-xs">Custom Button</TButton>
      <TButton>Custom Button</TButton>
      <TButton class="px-4 py-2.5 text-15">Custom Button</TButton>
    </div>
  </TCard>
  <TCard title="Rounded Buttons">
    <div class="grid grid-cols-1 mb-5 gap-7 lg:grid-cols-2">
      <div class="flex gap-2 items-center flex-wrap">
        <TButton rounded>Custom Button</TButton>
        <TButton rounded variant="soft">Custom Button</TButton>
        <TButton rounded variant="dashed">Custom Button</TButton>
        <TButton rounded variant="outlined">Custom Button</TButton>
        <TButton rounded variant="ghost">Custom Button</TButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <TButton icon rounded> <i class="ri-download-2-line" /> </TButton>
        <TButton rounded icon variant="outlined" color="green">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon rounded variant="dashed" color="yellow">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon rounded variant="soft" color="sky">
          <i class="ri-download-2-line" />
        </TButton>
        <TButton icon rounded variant="ghost" color="red">
          <i class="ri-download-2-line" />
        </TButton>
      </div>
    </div>
  </TCard>
  <TCard title="Label Buttons">
    <div class="grid grid-cols-1 mb-5 gap-7 lg:grid-cols-2">
      <div class="flex gap-2 items-center flex-wrap">
        <TButton
          class="py-1 text-xs ltr:pl-[calc(theme('spacing.1')_+_26px)] rtl:pr-[calc(theme('spacing.1')_+_26px)] relative"
        >
          <i
            class="ri-download-2-line w-[26px] bg-white/10 flex absolute ltr:-left-[1px] rtl:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />
          Download
        </TButton>
        <TButton
          class="px-2 py-1.5 text-xs ltr:pl-[calc(theme('spacing.2')_+_30px)] rtl:pr-[calc(theme('spacing.2')_+_30px)] relative"
          ><i
            class="ri-download-2-line w-[30px] bg-white/10 flex absolute ltr:-left-[1px] rtl:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />
          Download
        </TButton>
        <TButton
          class="px-2.5 py-2 text-xs ltr:pl-[calc(theme('spacing.2')_*_5.5)] rtl:pr-[calc(theme('spacing.2')_*_5.5)] relative"
          ><i
            class="ri-download-2-line w-[34px] bg-white/10 flex absolute ltr:-left-[1px] rtl:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
        <TButton
          class="relative ltr:pl-[calc(theme('spacing.3')_*_4.2)] rtl:pr-[calc(theme('spacing.3')_*_4.2)]"
          ><i
            class="ri-download-2-line w-[37.5px] bg-white/10 flex absolute ltr:-left-[1px] rtl:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
        <TButton
          class="px-4 py-2.5 text-15 relative ltr:pl-[calc(theme('spacing.4')_+_44.5px)] rtl:pr-[calc(theme('spacing.4')_+_44.5px)]"
          ><i
            class="ri-download-2-line w-[44.5px] bg-white/10 flex absolute ltr:-left-[1px] rtl:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <TButton
          class="py-1 text-xs rtl:pl-[calc(theme('spacing.1')_+_26px)] ltr:pr-[calc(theme('spacing.1')_+_26px)] relative"
        >
          <i
            class="ri-download-2-line w-[26px] bg-white/10 flex absolute rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />
          Download
        </TButton>
        <TButton
          class="px-2 py-1.5 text-xs rtl:pl-[calc(theme('spacing.2')_+_30px)] ltr:pr-[calc(theme('spacing.2')_+_30px)] relative"
          ><i
            class="ri-download-2-line w-[30px] bg-white/10 flex absolute rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />
          Download
        </TButton>
        <TButton
          class="px-2.5 py-2 text-xs rtl:pl-[calc(theme('spacing.2')_*_5.5)] ltr:pr-[calc(theme('spacing.2')_*_5.5)] relative"
          ><i
            class="ri-download-2-line w-[34px] bg-white/10 flex absolute rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
        <TButton
          class="relative rtl:pl-[calc(theme('spacing.3')_*_4.2)] ltr:pr-[calc(theme('spacing.3')_*_4.2)]"
          ><i
            class="ri-download-2-line w-[37.5px] bg-white/10 flex absolute rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
        <TButton
          class="px-4 py-2.5 text-15 relative rtl:pl-[calc(theme('spacing.4')_+_44.5px)] ltr:pr-[calc(theme('spacing.4')_+_44.5px)]"
          ><i
            class="ri-download-2-line w-[44.5px] bg-white/10 flex absolute rtl:-left-[1px] ltr:-right-[1px] -bottom-[1px] -top-[1px] items-center justify-center"
          />Download
        </TButton>
      </div>
    </div>
  </TCard>
  <TCard title="Icon with Buttons">
    <div class="flex flex-wrap gap-2">
      <TButton>
        <i class="ri-download-2-line ltr:pr-2 rtl:pl-2" />Download
      </TButton>
      <TButton color="red" variant="soft">
        Close<i class="ri-close-line ltr:pl-2 rtl:pr-2" />
      </TButton>
      <TButton variant="dashed" color="sky">
        <i class="ri-refresh-line ltr:pr-2 rtl:pl-2" />Progress
      </TButton>
    </div>
  </TCard>
</template>
