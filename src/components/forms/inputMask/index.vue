<script lang="ts" setup>
import { ref } from "vue";
const val1 = ref("");
const val1Option = { mask: "##-##-####" };
const val2 = ref("");
const val2Option = { mask: "##/##" };
const val3 = ref("");
const val3Option = { mask: "##:##:##" };
const val4 = ref("");
const val4Option = { mask: "##:##" };
const val5 = ref("");
const val5Option = { mask: "#.## cm" };
const val6 = ref("");
const val6Option = { mask: "+1 (###) ###-####" };
const val7 = ref("");
const val7Option = { mask: "#### #### #### ####" };
const val8 = ref("");
const val8Option = { mask: "###.###.###.###" };
const val9 = ref("");
const val9Option = { mask: "###.###.###-##" };
</script>
<template>
  <TCard title="Date Formatting">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
      <TInputField
        v-model="val1"
        placeholder="DD-MM-YYYY"
        v-maska:[val1Option]
        label="Date"
      />
      <TInputField
        v-model="val2"
        placeholder="DD/MM"
        v-maska:[val2Option]
        label="Date Formatting"
      />
    </div>
  </TCard>
  <TCard title="Time Formatting">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
      <TInputField
        v-model="val3"
        placeholder="hh:mm:ss"
        v-maska:[val3Option]
        label="Time"
      />
      <TInputField
        v-model="val4"
        placeholder="hh:mm"
        v-maska:[val4Option]
        label="Time Formatting"
      />
    </div>
  </TCard>
  <TCard title="Custom Options">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
      <TInputField
        v-model="val5"
        placeholder="x.xx cm"
        v-maska:[val5Option]
        label="Dynamic mask"
      />
      <TInputField
        v-model="val6"
        placeholder="+1 (xxx) xxx-xxxx"
        v-maska:[val6Option]
        label="Phone with code"
      />
      <TInputField
        v-model="val7"
        placeholder="#### #### #### ####"
        v-maska:[val7Option]
        label="Credit card"
      />

      <TInputField
        v-model="val8"
        placeholder="xxx.xxx.xxx.xxx"
        v-maska:[val8Option]
        label="IP Address"
      />
      <TInputField
        v-model="val9"
        placeholder="###.###.###-##"
        v-maska:[val9Option]
        label="CPF/CNPJ"
      />
    </div>
  </TCard>
</template>
