<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Choices from "choices.js";

const field1 = ref("Paula");
const field2 = ref("Keenan");
const field3 = ref("+214 8456 8459 23");
const field4 = ref("richardmarshall@tailwick.com");
const field5 = ref("24 Oct, 2023");
const field6 = ref("30 Nov, 2023");
const field7 = ref("CEO & Founder");
const field8 = ref("www.themesdesign.in");
const field9 = ref(
  "w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
);
const multipleChoice = ref<any>(null);
const noSortingChoice = ref<any>(null);
const multipleDefault = ref<any>(null);
const citySelect = ref<any>(null);

onMounted(() => {
  // City
  const multipleElement: any = document.querySelector("#countrySelect");

  multipleChoice.value = new Choices(multipleElement, {
    allowHTML: true,
    searchEnabled: false
  });

  // Country
  const noSortingElement: any = document.querySelector("#zipSelect");
  noSortingChoice.value = new Choices(noSortingElement, {
    shouldSort: false,
    allowHTML: true
  });

  const multipleDefaultEle: any = document.querySelector(
    "#choices-multiple-default"
  );
  multipleDefault.value = new Choices(multipleDefaultEle, {
    shouldSort: false,
    allowHTML: true
  });

  const citySelectEle: any = document.querySelector("#city-select");
  citySelect.value = new Choices(citySelectEle, {
    shouldSort: false,
    allowHTML: true,
    searchEnabled: false
  });
});
</script>

<template>
  <TCard title="Personal Information">
    <p class="mb-4 text-slate-500 dark:text-zink-200">
      Update your photo and personal details here easily.
    </p>
    <form action="#!">
      <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div class="xl:col-span-6">
          <TInputField
            label="First Name"
            v-model="field1"
            placeholder="Enter your value"
            required
            type="text"
          />
        </div>
        <div class="xl:col-span-6">
          <TInputField
            label="Last Name"
            v-model="field2"
            placeholder="Enter your value"
            required
            type="text"
          />
        </div>
        <div class="xl:col-span-6">
          <TInputField
            label="Phone Number"
            v-model="field3"
            placeholder="+214 8456 8459 23"
            required
            type="text"
          />
        </div>
        <div class="xl:col-span-6">
          <TInputField
            label="Email Address"
            v-model="field4"
            placeholder="Enter your email address"
            required
            type="email"
          />
        </div>
        <div class="xl:col-span-6">
          <TFlatPicker
            hide-details
            :config="{ dateFormat: 'd M, Y' }"
            label="Birth of Date"
            v-model="field5"
          />
        </div>
        <div class="xl:col-span-6">
          <TFlatPicker
            hide-details
            :config="{ dateFormat: 'd M, Y' }"
            label="Joining Date"
            v-model="field6"
          />
        </div>
        <div class="xl:col-span-12">
          <label
            for="choices-multiple-default"
            class="inline-block mb-2 text-base font-medium"
            >Skill</label
          >
          <select
            class="form-input border-slate-300 focus:outline-none focus:border-custom-500"
            id="choices-multiple-default"
            data-choices
            name="choices-multiple-default"
            multiple
          >
            <option value="Choice 1" selected>Choice 1</option>
            <option value="Choice 2">Choice 2</option>
            <option value="Choice 3">Choice 3</option>
            <option value="Choice 2">Choice 4</option>
            <option value="Choice 3">Choice 5</option>
            <option value="Choice 4" disabled>Choice 4</option>
          </select>
        </div>
        <div class="xl:col-span-6">
          <TInputField
            label="Designation"
            v-model="field7"
            placeholder="Enter your value"
            required
            type="text"
          />
        </div>
        <div class="xl:col-span-6">
          <TInputField
            label="Website"
            v-model="field8"
            placeholder="Enter your value"
            required
            type="text"
          />
        </div>
        <div class="xl:col-span-4">
          <label
            for="city-select"
            class="inline-block mb-2 text-base font-medium"
            >City</label
          >
          <select
            class="form-input border-slate-300 focus:outline-none focus:border-custom-500"
            id="city-select"
            name="city-select"
            data-choices
            data-choices-sorting-false
          >
            <option value="Madrid">Madrid</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Paris">Paris</option>
            <option value="Malaga">Malaga</option>
            <option value="Washington" disabled>Washington</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Munich">Munich</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Berlin">Berlin</option>
            <option value="Montreal">Montreal</option>
            <option value="New York">New York</option>
            <option value="Michigan">Michigan</option>
          </select>
        </div>
        <div class="xl:col-span-4">
          <label
            for="countrySelect"
            class="inline-block mb-2 text-base font-medium"
            >Country</label
          >
          <select
            id="countrySelect"
            name="countrySelect"
            data-choices
            data-choices-sorting-false
          >
            <option value="Madrid">USA</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Paris">Paris</option>
            <option value="Malaga">Malaga</option>
            <option value="Washington" disabled>Washington</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Munich">Munich</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Berlin">Berlin</option>
            <option value="Montreal">Montreal</option>
            <option value="New York">New York</option>
            <option value="Michigan">Michigan</option>
          </select>
        </div>
        <div class="xl:col-span-4">
          <label
            for="inputValue"
            class="inline-block mb-2 text-base font-medium"
            >Zip Code</label
          >
          <select
            id="zipSelect"
            name="zipSelect"
            data-choices
            data-choices-sorting-false
          >
            <option value="Madrid">00012</option>
            <option value="Toronto">00014</option>
            <option value="Vancouver">00016</option>
            <option value="London">88800</option>
            <option value="Manchester">00100</option>
            <option value="Liverpool">00001</option>
          </select>
        </div>
        <div class="xl:col-span-12">
          <TTextarea
            label="Description"
            placeholder="Enter your description"
            v-model="field9"
          />
        </div>
      </div>
      <div class="flex justify-end mt-6 gap-x-4">
        <TButton> Updates </TButton>
        <TButton variant="soft" color="red"> Cancel </TButton>
      </div>
    </form>
  </TCard>
</template>
