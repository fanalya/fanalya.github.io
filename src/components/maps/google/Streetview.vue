<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap },
  setup() {
    const center = { lat: 42.3455, lng: -71.0983 };
    return { center };
  }
});
</script>

<template>
  <GoogleMap
    api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
    style="width: 100%; height: 300px"
    :center="center"
    :zoom="13"
  >
  </GoogleMap>
</template>
