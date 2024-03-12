<script type="ts" setup>
import Basic from "@/components/maps/amcharts/Basic.vue";
import Mapline from "@/components/maps/amcharts/Mapline.vue";
import Pacific from "@/components/maps/amcharts/Pacific.vue";
</script>

<template>
  <div
    class="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative"
  >
    <div class="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
      <div
        class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto"
      >
        <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
          <TCard title="Basic map">
            <Basic />
          </TCard>

          <TCard title="Line With Point">
            <Mapline />
          </TCard>

          <TCard title="Pacific Map">
            <Pacific />
          </TCard>
        </div>
      </div>
    </div>
  </div>
</template>
