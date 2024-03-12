<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import Choices from "choices.js";
const selectItems = [
  { title: "Open this select menu" },
  { value: "1", title: "One" },
  { value: "2", title: "Two" },
  { value: "3", title: "Three" }
];
const defaultChoices = ref<any>(null);
const singleGroupChoice = ref<any>(null);
const noSearchChoice = ref<any>(null);
const noSortingChoice = ref<any>(null);
const multipleChoice = ref<any>(null);
const multipleRemoveChoice = ref<any>(null);
const multipleGroupChoice = ref<any>(null);
const limitMultipleChoice = ref<any>(null);
const uniqueValueChoice = ref<any>(null);
const disabledChoice = ref<any>(null);
onMounted(() => {
  // default
  const defaultElement: any = document.querySelector("#choices-single-default");
  defaultChoices.value = new Choices(defaultElement, { allowHTML: true });
  //   single group
  const singleGroupElement: any = document.querySelector(
    "#choices-single-groups"
  );
  singleGroupChoice.value = new Choices(singleGroupElement, {
    allowHTML: true
  });
  //   disable search
  const noSearchElement: any = document.querySelector(
    "#choices-single-no-search"
  );
  noSearchChoice.value = new Choices(noSearchElement, {
    searchEnabled: false,
    allowHTML: true
  });
  //   disable sorting
  const noSortingElement: any = document.querySelector(
    "#choices-single-no-sorting"
  );
  noSortingChoice.value = new Choices(noSortingElement, {
    shouldSort: false,
    allowHTML: true
  });
  //   select multiple
  const multipleElement: any = document.querySelector(
    "#choices-multiple-default"
  );
  multipleChoice.value = new Choices(multipleElement, { allowHTML: true });
  //   select multiple, remove btn
  const multipleRemoveElement: any = document.querySelector(
    "#choices-multiple-remove-button"
  );
  multipleRemoveChoice.value = new Choices(multipleRemoveElement, {
    removeItemButton: true,
    allowHTML: true
  });
  //  select multiple group selection
  const multipleGroupElement: any = document.querySelector(
    "#choices-multiple-groups"
  );
  multipleGroupChoice.value = new Choices(multipleGroupElement, {
    allowHTML: true
  });
  //   choices-limit-multiple
  const limitMultipleElement: any = document.querySelector(
    "#choices-limit-multiple"
  );
  limitMultipleChoice.value = new Choices(limitMultipleElement, {
    maxItemCount: 3,
    removeItemButton: true,
    allowHTML: true
  });
  //   unique Value Choice
  const uniqueValueElement: any = document.querySelector(
    "#choices-text-unique-values"
  );
  uniqueValueChoice.value = new Choices(uniqueValueElement, {
    uniqueItemText: "Only unique values can be added",
    allowHTML: true,
    duplicateItemsAllowed: false,
    paste: false
  });
  //   choices-text-disabled
  const disabledElement: any = document.querySelector("#choices-text-disabled");
  disabledChoice.value = new Choices(disabledElement, { allowHTML: true });
  disabledChoice.value.disable();
});
onBeforeUnmount(() => {
  defaultChoices.value.destroy();
  singleGroupChoice.value.destroy();
  noSearchChoice.value.destroy();
  noSortingChoice.value.destroy();
  multipleChoice.value.destroy();
  multipleRemoveChoice.value.destroy();
  multipleGroupChoice.value.destroy();
  limitMultipleChoice.value.destroy();
  disabledChoice.value.destroy();
});
</script>
<template>
  <TCard title="Default Select">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <TSelect :items="selectItems" id="defaultSelect" />
      <TSelect :items="selectItems" rounded id="roundedSelect" />
      <TSelect :items="selectItems" disabled id="disabledSelect" />
    </div>
  </TCard>
  <TCard title="Select Size">
    <div
      class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 items-center"
    >
      <TSelect
        :items="selectItems"
        selectClass="py-1 pl-3 text-xs h-fit"
        id="smallSizeSelect"
      />
      <TSelect :items="selectItems" id="defaultSizeSelect" />
      <TSelect
        :items="selectItems"
        selectClass="py-3 pl-5 pr-8 text-15"
        id="largeSizeSelect"
      />
    </div>
  </TCard>

  <h5 class="mb-5 underline">Choices</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
    <TCard title="Default Single Select">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Add Simple
        <code class="text-xs text-pink-500 select-all">select</code> component
        with <code class="text-xs text-pink-500 select-all">id</code> and init
        in <code class="text-xs text-pink-500 select-all">onMounted</code>.
      </p>
      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        name="choices-single-default"
        id="choices-single-default"
      >
        <option value="">This is a placeholder</option>
        <option value="Choice 1">Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
      </select>
    </TCard>
    <TCard title="Option Groups">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Add Simple
        <code class="text-xs text-pink-500 select-all">select</code> component
        with <code class="text-xs text-pink-500 select-all">id</code> and init
        in <code class="text-xs text-pink-500 select-all">onMounted</code>.
      </p>
      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-single-groups"
        data-placeholder="Select City"
        name="choices-single-groups"
      >
        <option value="">Choose a city</option>
        <optgroup label="UK">
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Liverpool">Liverpool</option>
        </optgroup>
        <optgroup label="FR">
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
        </optgroup>
        <optgroup label="DE" disabled>
          <option value="Hamburg">Hamburg</option>
          <option value="Munich">Munich</option>
          <option value="Berlin">Berlin</option>
        </optgroup>
        <optgroup label="US">
          <option value="New York">New York</option>
          <option value="Washington" disabled>Washington</option>
          <option value="Michigan">Michigan</option>
        </optgroup>
        <optgroup label="SP">
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Malaga">Malaga</option>
        </optgroup>
        <optgroup label="CA">
          <option value="Montreal">Montreal</option>
          <option value="Toronto">Toronto</option>
          <option value="Vancouver">Vancouver</option>
        </optgroup>
      </select>
    </TCard>
    <TCard title="Options added via config with no search">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all">
          searchEnabled: false
        </code>
        in initialization time.
      </p>

      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-single-no-search"
        name="choices-single-no-search"
      >
        <option value="Zero">Zero</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Four">Four</option>
        <option value="Five">Five</option>
        <option value="Six">Six</option>
      </select>
    </TCard>

    <TCard title="Options added via config with no sorting">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all">
          shouldSort: false
        </code>
        in initialization time.
      </p>

      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-single-no-sorting"
        name="choices-single-no-sorting"
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
    </TCard>
    <TCard title="Default Multiple Select">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Add Simple
        <code class="text-xs text-pink-500 select-all">select</code> component
        with <code class="text-xs text-pink-500 select-all">id</code> and init
        in <code class="text-xs text-pink-500 select-all">onMounted</code>.
      </p>
      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-multiple-default"
        name="choices-multiple-default"
        multiple
      >
        <option value="Choice 1" selected>Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
        <option value="Choice 4" disabled>Choice 4</option>
      </select>
    </TCard>
    <TCard title="With Remove Button">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all">
          removeItemButton: true
        </code>
        in initialization time.
      </p>
      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-multiple-remove-button"
        name="choices-multiple-remove-button"
        multiple
      >
        <option value="Choice 1" selected>Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
        <option value="Choice 4">Choice 4</option>
      </select>
    </TCard>
    <TCard title="Option Groups Multiple">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Add Simple
        <code class="text-xs text-pink-500 select-all">select</code> component
        with <code class="text-xs text-pink-500 select-all">id</code> and init
        in <code class="text-xs text-pink-500 select-all">onMounted</code>.
      </p>
      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-multiple-groups"
        name="choices-multiple-groups"
        multiple
      >
        <option value="">Choose a city</option>
        <optgroup label="UK">
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Liverpool">Liverpool</option>
        </optgroup>
        <optgroup label="FR">
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
        </optgroup>
        <optgroup label="DE" disabled>
          <option value="Hamburg">Hamburg</option>
          <option value="Munich">Munich</option>
          <option value="Berlin">Berlin</option>
        </optgroup>
        <optgroup label="US">
          <option value="New York">New York</option>
          <option value="Washington" disabled>Washington</option>
          <option value="Michigan">Michigan</option>
        </optgroup>
        <optgroup label="SP">
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Malaga">Malaga</option>
        </optgroup>
        <optgroup label="CA">
          <option value="Montreal">Montreal</option>
          <option value="Toronto">Toronto</option>
          <option value="Vancouver">Vancouver</option>
        </optgroup>
      </select>
    </TCard>
    <TCard title="Set limit values with remove button">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all">
          renderChoiceLimit: 3, removeItemButton: true
        </code>
        in initialization time.
      </p>

      <input
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-limit-multiple"
        type="text"
        value="Task-1"
      />
    </TCard>
    <TCard title="Unique values only, no pasting">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all">
          uniqueItemText: "Only unique values can be added"
        </code>
        in initialization time.
      </p>
      <input
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-text-unique-values"
        type="text"
        value="Task-1"
      />
    </TCard>
    <TCard title="Disabled">
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        Set
        <code class="text-xs text-pink-500 select-all"> disable() </code>
        in initialization time.
      </p>

      <select
        class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
        id="choices-text-disabled"
        name="choices-text-disabled"
        multiple
      >
        <option value="Choice 1" selected>Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
        <option value="Choice 4">Choice 4</option>
      </select>
    </TCard>
  </div>
</template>
