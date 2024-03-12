<script lang="ts" setup></script>
<template>
  <div class="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
    <div>
      <TCard title="Basic">
        <iframe
          class="w-full rounded-md aspect-video"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
      <TCard title="Square">
        <iframe
          class="w-full rounded-md aspect-square"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
      <TCard title="Video-1/1">
        <iframe
          class="w-full rounded-md aspect-1/1"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
    </div>
    <div>
      <TCard title="Auto">
        <iframe
          class="w-full rounded-md aspect-auto"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
      <TCard title="Video-4/3">
        <iframe
          class="w-full rounded-md aspect-4/3"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
      <TCard title="Video-16/9">
        <iframe
          class="w-full rounded-md aspect-16/9"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
      <TCard title="Video-21/9">
        <iframe
          class="w-full rounded-md aspect-21/9"
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        ></iframe>
      </TCard>
    </div>
  </div>
</template>
