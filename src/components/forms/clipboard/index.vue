<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ClipboardList, Scissors } from "lucide-vue-next";
import ClipboardJS from "clipboard";

const input1 = ref("Welcome to Tailwick😊");
const input2 = ref("Welcome to Tailwick😊");

const clipboard = ref(new ClipboardJS("#copyButton, #cutButton"));

onMounted(() => {
  clipboard.value.on("success", (e: any) => {
    alert("Copied text: " + e.text);
  });

  clipboard.value.on("error", () => {
    alert("Copy/Cut failed");
  });
});
</script>
<template>
  <TCard title="Basic Clipboard Copy">
    <div class="flex">
      <input
        v-model="input1"
        type="text"
        id="clipboard"
        class="ltr:rounded-r-none rtl:rounded-l-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
      />
      <button
        type="button"
        id="copyButton"
        data-clipboard-action="copy"
        data-clipboard-target="#clipboard"
        class="flex items-center justify-center w-[39px] h-[39px] ltr:rounded-l-none rtl:rounded-r-none p-0 text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
      >
        <ClipboardList class="inline-block size-4" />
      </button>
    </div>
  </TCard>
  <TCard title="Basic Clipboard Cut">
    <div class="flex">
      <input
        v-model="input2"
        type="text"
        id="clipboard1"
        aria-describedby="button-addon"
        class="ltr:rounded-r-none rtl:rounded-l-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        placeholder=""
      />
      <button
        type="button"
        id="cutButton"
        data-clipboard-action="cut"
        data-clipboard-target="#clipboard1"
        class="flex items-center justify-center w-[39px] h-[39px] ltr:rounded-l-none rtl:rounded-r-none p-0 text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
      >
        <Scissors class="inline-block size-4" />
      </button>
    </div>
  </TCard>
</template>
