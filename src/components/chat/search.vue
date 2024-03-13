<script lang="ts" setup>
import { ref } from "vue";
import { ChevronsLeft, Plus, Search, X, ImagePlus } from "lucide-vue-next";

defineProps({
  title: {
    type: String
  },
  isCloseBtn: {
    type: Boolean,
    default: false
  }
});

const addContactModal = ref(false);
</script>
<template>
  <div class="flex items-center gap-3">
    <button
      class="inline-flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md shrink-0 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
    >
      <ChevronsLeft class="size-4 mx-auto" />
    </button>
    <h6 class="text-15 grow">{{ title }}</h6>
    <button
      v-if="isCloseBtn"
      @click="addContactModal = !addContactModal"
      class="inline-flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md shrink-0 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
    >
      <Plus class="mx-auto size-4" />
    </button>
  </div>
  <div class="relative mt-5">
    <input
      type="text"
      class="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
      placeholder="Search for ..."
      autocomplete="off"
    />
    <Search
      class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
    />
  </div>

  <TModal v-model="addContactModal">
    <template #content>
      <div
        class="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full"
      >
        <div
          class="flex items-center justify-between p-4 border-b dark:border-zink-500"
        >
          <h5 class="text-16">Add Contact</h5>
          <button
            @click="addContactModal = false"
            class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          >
            <X class="size-5" />
          </button>
        </div>
        <div
          class="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto p-4"
        >
          <form action="#!">
            <div
              class="relative size-24 mx-auto mb-4 rounded-full shadow-md bg-slate-100 profile-user dark:bg-zink-500"
            >
              <img
                src="@/assets/images/users/user-dummy-img.jpg"
                alt=""
                class="object-cover w-full h-full rounded-full user-profile-image"
              />
              <div
                class="absolute bottom-0 right-0 flex items-center justify-center size-8 rounded-full profile-photo-edit"
              >
                <input
                  id="profile-img-file-input"
                  type="file"
                  class="hidden profile-img-file-input"
                  required
                />
                <label
                  for="profile-img-file-input"
                  class="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit"
                >
                  <ImagePlus
                    class="size-4 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"
                  />
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label
                for="contactnameInput"
                class="inline-block mb-2 text-base font-medium"
                >Contact Name</label
              >
              <input
                type="text"
                id="contactnameInput"
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter Name"
                required
              />
            </div>
            <div class="mb-3">
              <label
                for="destinationInput"
                class="inline-block mb-2 text-base font-medium"
                >Destination</label
              >
              <input
                type="text"
                id="destinationInput"
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Destination"
                required
              />
            </div>
            <div class="flex justify-end gap-2 mt-4">
              <TButton
                variant="ghost"
                color="red"
                type="button"
                @click="addContactModal = false"
                >Cancel</TButton
              >
              <TButton color="custom" type="submit">Add Contact</TButton>
            </div>
          </form>
        </div>
      </div>
    </template> </TModal
  ><!--end modal-->
</template>
