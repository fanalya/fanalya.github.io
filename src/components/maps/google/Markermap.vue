<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker as Markers } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Markers },
  setup() {
    const markerClick = () => alert("You clicked in this marker");
    const center = { lat: -12.043333, lng: -77.028333 };
    const markerOptions = { position: center, label: "L", title: "Lima" };

    return { center, markerOptions, markerClick };
  }
});
</script>

<template>
  <GoogleMap
    api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
    style="width: 100%; height: 300px"
    :center="{ lat: -12.043333, lng: -77.028333 }"
    :zoom="15"
  >
    <Markers :options="markerOptions" @click="markerClick" />
  </GoogleMap>
</template>
