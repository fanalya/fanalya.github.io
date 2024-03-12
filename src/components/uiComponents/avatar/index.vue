<script lang="ts" setup>
import {
  avatar2,
  user2 as avatarUser2,
  user1,
  user3,
  user4
} from "@/assets/images/users/utils";
import {
  sizes,
  contentWithFontSize
} from "@/components/uiComponents/avatar/utils";
import { User2 } from "lucide-vue-next";
import { colors } from "@/app/utils";

const groupContentData = [
  {
    text: "TG",
    class:
      "bg-custom-100 text-custom-500 dark:border-zink-700 dark:bg-custom-950"
  },
  {
    text: "PI",
    class: "bg-green-100 text-green-500 dark:border-zink-700 dark:bg-green-900"
  },
  {
    text: "AU",
    class: "text-purple-500 bg-purple-100 dark:border-zink-700"
  },
  {
    src: user3,
    class: "dark:border-zink-700"
  },
  {
    text: "SS",
    class:
      "text-yellow-500 bg-yellow-100 dark:bg-yellow-950 dark:border-zink-700"
  }
];

const groupAvatarWithTooltipData = [
  { src: user1, content: "Jose White" },
  { src: avatarUser2, content: "Patricia Garcia" },
  { src: user3, content: "Tonya Johnson" },
  { src: user4, content: "Paula Keenan" }
];

const groupContentAvatarWithTooltip = [
  {
    text: "TG",
    content: "TG",
    class:
      "bg-custom-100 text-custom-500 dark:border-zink-700 dark:bg-custom-950"
  },
  {
    text: "PI",
    content: "PI",
    class: "bg-green-100 text-green-500 dark:border-zink-700 dark:bg-green-900"
  },
  {
    text: "AU",
    content: "AU",
    class: "text-purple-500 bg-purple-100 dark:border-zink-700"
  },
  {
    src: user3,
    content: "User 3",
    class: "dark:border-zink-700"
  },
  {
    text: "SS",
    content: "SS",
    class:
      "text-yellow-500 bg-yellow-100 dark:bg-yellow-950 dark:border-zink-700"
  }
];
</script>

<template>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <TCard title="Square Avatar With Radius">
      <div class="flex items-center gap-4 flex-wrap">
        <TAvatar
          v-for="size in sizes"
          :key="'size-' + size"
          :src="avatar2"
          :height="size"
        />
      </div>
    </TCard>
    <TCard title="Circular Avatar">
      <div class="flex items-center gap-4 flex-wrap">
        <TAvatar
          v-for="size in sizes"
          :key="'size-' + size"
          :src="avatar2"
          :height="size"
          rounded
        />
      </div>
    </TCard>
  </div>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <TCard title="Square Avatar with Content">
      <div class="flex items-center gap-4 flex-wrap">
        <TAvatar
          v-for="item in contentWithFontSize"
          :key="'size-' + item.size"
          :height="item.size"
          :width="item.size"
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
          :class="item.fontSize"
        >
          A
        </TAvatar>
      </div>
    </TCard>
    <TCard title="Circular Avatar with Content">
      <div class="flex items-center gap-4 flex-wrap">
        <TAvatar
          v-for="item in contentWithFontSize"
          :key="'size-' + item.size"
          :height="item.size"
          :width="item.size"
          rounded
          :class="item.fontSize"
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
        >
          A
        </TAvatar>
      </div>
    </TCard>
  </div>
  <TCard title="Bordered Avatar">
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <div class="flex gap-4">
        <TAvatar :src="avatar2" bordered :height="10" />
        <TAvatar :src="avatar2" bordered :height="10" rounded />
      </div>
      <div class="flex gap-4">
        <TAvatar
          bordered
          :height="10"
          :width="10"
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
        >
          A
        </TAvatar>
        <TAvatar
          bordered
          :height="10"
          :width="10"
          rounded
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
        >
          A
        </TAvatar>
      </div>
    </div>
  </TCard>
  <TCard title="Placeholder Icon Avatar">
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <div class="flex gap-4 flex-wrap">
        <TAvatar
          v-for="color in colors"
          :key="'color-' + color.value"
          :height="10"
          :width="10"
          rounded
          :color="color.value"
        >
          <User2 :size="40" stroke-width="1" />
        </TAvatar>
      </div>
      <div class="flex gap-4 flex-wrap">
        <TAvatar
          v-for="color in colors"
          :key="'color-' + color.value"
          :height="10"
          :width="10"
          :color="color.value"
        >
          <User2 :size="45" stroke-width="1" />
        </TAvatar>
      </div>
    </div>
  </TCard>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <TCard title="Square Avatar with Status">
      <div class="flex gap-4 items-center flex-wrap">
        <TAvatar
          v-for="size in sizes"
          :key="'size-' + size"
          :height="size"
          :width="size"
          :src="avatarUser2"
          badge
        />
      </div>
    </TCard>
    <TCard title="Circular Avatar with Status">
      <div class="flex gap-4 items-center flex-wrap">
        <TAvatar
          v-for="size in sizes"
          :key="'size-' + size"
          :height="size"
          :width="size"
          :src="avatarUser2"
          badge
          rounded
        />
      </div>
    </TCard>
  </div>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <TCard title="Avatar Content with Status">
      <div class="flex gap-4 items-center flex-wrap">
        <TAvatar
          v-for="item in contentWithFontSize"
          :key="'size-' + item.size"
          :height="item.size"
          :width="item.size"
          badge
          red-badge
          :class="item.fontSize"
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
          >A
        </TAvatar>
      </div>
    </TCard>
    <TCard title="Circular Avatar Content with Status">
      <div class="flex gap-4 items-center flex-wrap">
        <TAvatar
          v-for="item in contentWithFontSize"
          :key="'size-' + item.size"
          :height="item.size"
          :width="item.size"
          badge
          rounded
          red-badge
          :class="item.fontSize"
          class="bg-custom-100 text-custom-500 dark:bg-custom-950"
          >A
        </TAvatar>
      </div>
    </TCard>
  </div>
  <TCard title="Avatar Group">
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-3">
      <TAvatarGroup :images="[user1, avatarUser2, user3, user4]" />
      <TAvatarGroup
        :images="[user1, avatarUser2, user3, user4]"
        :content="'99+'"
      />
      <TAvatarGroup :content-avatar="groupContentData" />
    </div>
  </TCard>

  <TCard title="Avatar Group with Tooltip">
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-3">
      <TAvatarGroupWithTooltip :images="groupAvatarWithTooltipData" />
      <TAvatarGroupWithTooltip
        :images="groupAvatarWithTooltipData"
        :content="'99+'"
      />
      <TAvatarGroupWithTooltip
        :content-avatar="groupContentAvatarWithTooltip"
      />
    </div>
  </TCard>
</template>
