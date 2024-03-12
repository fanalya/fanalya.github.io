<script lang="ts" setup>
import { ref } from "vue";
import { Mail } from "lucide-vue-next";
import { colors } from "@/app/utils";
const field1 = ref("input value");
const field2 = ref("Readonly input");
const field3 = ref("Disabled input");
const field4 = ref("");
const field5 = ref("");
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
    <TCard title="Text">
      <form>
        <TInputField required />
        <TButton type="submit"> Submit </TButton>
      </form>
    </TCard>
    <TCard title="Password">
      <form>
        <TInputField required type="password" />
        <TButton type="submit"> Submit </TButton>
      </form>
    </TCard>
    <TCard title="Email Address">
      <form>
        <TInputField required type="email" />
        <TButton type="submit"> Submit </TButton>
      </form>
    </TCard>
    <TCard title="Input With Placeholder">
      <TInputField placeholder="placeholder" hide-details />
    </TCard>
    <TCard title="Input With Value">
      <TInputField v-model="field1" hide-details />
    </TCard>
    <TCard title="Readonly Plain Text Input">
      <TInputField v-model="field2" hide-details readonly :border="false" />
    </TCard>
    <TCard title="Readonly Input">
      <TInputField v-model="field2" hide-details readonly />
    </TCard>
    <TCard title="Disabled Input">
      <TInputField v-model="field3" hide-details disabled />
    </TCard>
    <TCard title="Input With Icon">
      <TInputField
        hide-details
        placeholder="Enter Your email"
        inputClass="ltr:pl-10 rtl:pr-10"
      >
        <template #prefix>
          <Mail class="size-4" />
        </template>
      </TInputField>
    </TCard>
    <TCard title="Input With Icon Right">
      <TInputField
        hide-details
        placeholder="Enter Your email"
        inputClass="ltr:pr-10 rtl:pl-10 "
      >
        <template #suffix>
          <Mail class="size-4" />
        </template>
      </TInputField>
    </TCard>
    <TCard title="Input Border Style">
      <TInputField
        hide-details
        placeholder="Enter Your text"
        inputClass="border-dashed"
      />
    </TCard>
    <TCard title="Rounded Input">
      <TInputField
        hide-details
        placeholder="Enter Your text"
        inputClass="rounded-full"
      />
    </TCard>
    <TCard title="Example Textarea">
      <TTextarea />
    </TCard>
    <TCard title="Form Text">
      <TInputField
        type="password"
        placeholder="Enter password"
        tipText="Must be 8-20 characters long."
      />
    </TCard>
    <TCard title="Valid Text">
      <TInputField v-model="field4" placeholder="Enter email" valid />
    </TCard>
    <TCard title="Invalid Text">
      <TInputField v-model="field5" placeholder="Enter email" invalid />
    </TCard>
  </div>
  <TCard title="Input Sizing">
    <div class="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
      <TInputField
        placeholder="Enter Your Name"
        inputClass="px-3 py-1 text-xs"
      />
      <TInputField placeholder="Enter Your Name" />
      <TInputField
        placeholder="Enter Your Name"
        inputClass="px-5 py-3 text-15"
      />
    </div>
  </TCard>
  <TCard title="Range Color Variant">
    <div class="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
      <div v-for="item in colors">
        <label class="inline-block mb-2 text-base font-medium">
          {{ item.title }} Range
        </label>
        <TInputRange :color="item.value" />
      </div>
    </div>
  </TCard>
  <TCard title="File Sizing">
    <div class="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
      <input
        type="file"
        class="cursor-pointer form-file form-file-sm border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
        placeholder="Enter your name"
      />
      <input
        type="file"
        class="cursor-pointer form-file border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
        placeholder="Enter your name"
      />
      <input
        type="file"
        class="cursor-pointer form-file form-file-lg border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
        placeholder="Enter your name"
      />
    </div>
  </TCard>
  <TCard title="Input Group">
    <div class="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
      <TInputField
        hide-details
        placeholder="@name"
        inputClass="ltr:pl-10 rtl:pr-10"
      >
        <template #prefix-outer>
          <div
            class="px-3 py-2 border ltr:border-r-1 rtl:border-l-1 border-slate-200 bg-slate-100 dark:border-zink-500 dark:bg-zink-600 ltr:rounded-l-md rtl:rounded-r-md"
          >
            @
          </div>
        </template>
      </TInputField>
      <TInputField
        hide-details
        type="number"
        placeholder="00.00"
        inputClass="ltr:pl-12 rtl:pr-12"
      >
        <template #prefix-outer>
          <div
            class="px-3 py-2 border ltr:border-r-1 rtl:border-l-1 border-slate-200 dark:border-zink-500 ltr:rounded-l-md rtl:rounded-r-md"
          >
            @
          </div>
        </template>
      </TInputField>
      <TInputField hide-details placeholder="@name">
        <template #suffix-outer>
          <div
            class="inline-block px-3 py-2 border border-l-1 border-slate-200 bg-slate-100 dark:border-zink-500 dark:bg-zink-600 ltr:rounded-r-md rtl:rounded-l-md"
          >
            @
          </div>
        </template>
      </TInputField>
    </div>
  </TCard>
</template>
