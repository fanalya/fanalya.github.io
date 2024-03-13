<script lang="ts" setup></script>
<template>
  <TCard title="Tostify Notification">
    <div class="flex gap-2 flex-wrap">
      <TNotification variant="default" #default="{ onClick }">
        <TButton @click="onClick" color="light">Default</TButton>
      </TNotification>
      <TNotification variant="success" #default="{ onClick }">
        <TButton @click="onClick" color="light">Success</TButton>
      </TNotification>
      <TNotification variant="warning" #default="{ onClick }">
        <TButton @click="onClick" color="light">Warning</TButton>
      </TNotification>
      <TNotification variant="error" #default="{ onClick }">
        <TButton @click="onClick" color="light">Error</TButton>
      </TNotification>
      <TNotification variant="info" #default="{ onClick }">
        <TButton @click="onClick" color="light">Info</TButton>
      </TNotification>
    </div>
  </TCard>
  <TCard title="Display Position">
    <div class="flex gap-2 flex-wrap">
      <TNotification position="top-left" #default="{ onClick }">
        <TButton @click="onClick" color="light">Top Left</TButton>
      </TNotification>
      <TNotification position="top-center" #default="{ onClick }">
        <TButton @click="onClick" color="light">Top Center</TButton>
      </TNotification>
      <TNotification position="top-right" #default="{ onClick }">
        <TButton @click="onClick" color="light">Top Right</TButton>
      </TNotification>
      <TNotification position="bottom-left" #default="{ onClick }">
        <TButton @click="onClick" color="light">Bottom Left</TButton>
      </TNotification>
      <TNotification position="bottom-center" #default="{ onClick }">
        <TButton @click="onClick" color="light">Bottom Center</TButton>
      </TNotification>
      <TNotification position="bottom-right" #default="{ onClick }">
        <TButton @click="onClick" color="light">Bottom Right</TButton>
      </TNotification>
    </div>
  </TCard>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
    <TCard title="Offset Position">
      <TNotification offset #default="{ onClick }">
        <TButton @click="onClick" color="light">Click Me</TButton>
      </TNotification>
    </TCard>
    <TCard title="Close icon Display">
      <TNotification show-close #default="{ onClick }">
        <TButton @click="onClick" color="light">Click Me</TButton>
      </TNotification>
    </TCard>
    <TCard title="Duration">
      <TNotification show-progress #default="{ onClick }">
        <TButton @click="onClick" color="light">Click Me</TButton>
      </TNotification>
    </TCard>
  </div>
</template>
