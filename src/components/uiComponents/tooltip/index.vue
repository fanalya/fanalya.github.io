<script lang="ts" setup>
const placements = [
  { position: "top-start", title: "Top Start" },
  { position: "top-end", title: "Top End" },
  { position: "bottom", title: "Bottom" },
  { position: "bottom-start", title: "Bottom Start" },
  { position: "bottom-end", title: "Right End" },
  { position: "right", title: "Right" },
  { position: "right-start", title: "Right Start" },
  { position: "right-end", title: "Right End" },
  { position: "left", title: "Left" },
  { position: "left-start", title: "Left Start" },
  { position: "left-end", title: "Left End" }
];
</script>
<template>
  <TCard title="Default">
    <TButton v-tippy="'hey there'"> Default Tooltip</TButton>
  </TCard>

  <TCard title="Placements">
    <div class="flex gap-2 flex-wrap">
      <TButton
        v-for="item in placements"
        :content="item.title"
        v-tippy="{ placement: `${item.position}` }"
      >
        {{ item.title }}
      </TButton>
    </div>
  </TCard>

  <TCard title="Triggers Tooltip">
    <div class="flex gap-2 flex-wrap">
      <TButton content="Click Tooltip" v-tippy="{ trigger: 'click' }">
        Click Tooltip
      </TButton>

      <TButton
        content="Focus Tooltip"
        v-tippy="{ trigger: 'focus', hideOnClick: false }"
      >
        Focus Tooltip
      </TButton>
    </div>
  </TCard>
  <TCard title="Follow Cursor">
    <div class="flex gap-2 flex-wrap">
      <TButton content="Follow Cursor" v-tippy="{ followCursor: true }">
        Follow Cursor
      </TButton>
      <TButton content="Horizontal" v-tippy="{ followCursor: 'horizontal' }">
        Horizontal
      </TButton>
      <TButton content="Vertical" v-tippy="{ followCursor: 'vertical' }">
        Vertical
      </TButton>
      <TButton v-tippy="'Initial Tooltip'"> Initial </TButton>
    </div>
  </TCard>
</template>
