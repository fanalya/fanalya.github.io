<script lang="ts" setup>
import MarkerMap from "@/components/maps/google/Markermap.vue";
import Overlays from "@/components/maps/google/Overlays.vue";
import StreetView from "@/components/maps/google/Streetview.vue";
import MapType from "@/components/maps/google/MapType.vue";
</script>

<template>
  <div class="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
    <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
      <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <TCard title="Markers">
          <div id="gmaps-markers" class="gmaps">
            <MarkerMap />
          </div>
        </TCard>

        <TCard title="Overlays">
          <div id="gmaps-overlay" class="gmaps">
            <Overlays />
          </div>
        </TCard>

        <TCard title="Street View Panoramas">
          <div id="panorama" class="gmaps-panaroma">
            <StreetView />
          </div>
        </TCard>

        <TCard title="Map Types">
          <div id="gmaps-types" class="gmaps">
            <MapType />
          </div>
        </TCard>
      </div>
    </div>
  </div>
</template>
