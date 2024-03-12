<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, CustomMarker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, CustomMarker },
  setup() {
    const center = { lat: -12.043333, lng: -77.028333 };
    return { center };
  }
});
</script>

<template>
  <GoogleMap
    api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
    style="width: 100%; height: 300px"
    :center="center"
    :zoom="15"
  >
    <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
      <div style="text-align: center">
        <div class="gmaps-overlay">
          Lima
          <div class="gmaps-overlay_arrow above"></div>
        </div>
      </div>
    </CustomMarker>
  </GoogleMap>
</template>
