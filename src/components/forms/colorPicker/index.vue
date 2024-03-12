<script lang="ts" setup>
const classicConfig = {
  default: "rgba(156, 39, 176, 0.9)",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)"
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsva: true,
      input: true,
      clear: true,
      save: true
    }
  }
};

const nanoConfig = {
  default: "#3577f1",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)"
  ],
  defaultRepresentation: "HEXA",
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: false,
      rgba: false,
      hsva: false,
      input: true,
      clear: true,
      save: true
    }
  }
};

const optionDemoConfig = {
  default: "#3b82f6",
  components: {
    preview: true,
    interaction: {
      clear: true,
      save: true
    }
  }
};

const switchConfig = {
  default: "#3577f1",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)"
  ],
  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      clear: true,
      save: true
    }
  }
};

const opacityAndHueConfig = {
  default: "#0ab39c",
  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      clear: true,
      save: true
    }
  }
};

const pickerWithInputConfig = {
  default: "#f7b84b",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)"
  ],
  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      input: true,
      clear: true,
      save: true
    }
  }
};

const pickerFormatConfig = {
  default: "#f06548",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)"
  ],
  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsva: true,
      input: true,
      clear: true,
      save: true
    }
  }
};
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
    <TCard title="Monolith Demo">
      <p class="mb-4">
        Use
        <code class="text-xs text-pink-500 select-all">theme="monolith"</code>
        prop and followed config in
        <code class="text-xs text-pink-500 select-all">config</code> prop.
      </p>

      <TColorPicker theme="monolith" />
    </TCard>
    <TCard title="Classic Demo">
      <p class="mb-4">
        Use
        <code class="text-xs text-pink-500 select-all">theme="classic"</code>
        prop and followed config in
        <code class="text-xs text-pink-500 select-all">config</code> prop.
      </p>

      <TColorPicker theme="classic" :config="classicConfig" />
    </TCard>
    <TCard title="Nano Demo">
      <p class="mb-4">
        Use
        <code class="text-xs text-pink-500 select-all">theme="nano"</code>
        prop and followed config in
        <code class="text-xs text-pink-500 select-all">config</code> prop.
      </p>

      <TColorPicker theme="nano" :config="nanoConfig" />
    </TCard>
    <TCard title="Option Demo">
      <p class="mb-4">
        Give proper options in
        <code class="text-xs text-pink-500 select-all">config</code>
        prop.
      </p>
      <TColorPicker theme="monolith" :config="optionDemoConfig" />
    </TCard>
    <TCard title="Switches">
      <p class="mb-4">
        Give proper options in
        <code class="text-xs text-pink-500 select-all">config</code>
        prop.
      </p>
      <TColorPicker theme="monolith" :config="switchConfig" />
    </TCard>
    <TCard title="Picker with opacity & hue">
      <p class="mb-4">
        Give proper options in
        <code class="text-xs text-pink-500 select-all">config</code>
        prop.
      </p>
      <TColorPicker theme="monolith" :config="opacityAndHueConfig" />
    </TCard>
    <TCard title="Picker with Input">
      <p class="mb-4">
        Give proper options in
        <code class="text-xs text-pink-500 select-all">config</code>
        prop.
      </p>
      <TColorPicker theme="monolith" :config="pickerWithInputConfig" />
    </TCard>
    <TCard title="Color Format">
      <p class="mb-4">
        Give proper options in
        <code class="text-xs text-pink-500 select-all">config</code>
        prop.
      </p>
      <TColorPicker theme="monolith" :config="pickerFormatConfig" />
    </TCard>
  </div>
</template>
