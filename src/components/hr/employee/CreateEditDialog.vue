<script lang="ts" setup>
import { computed } from "vue";
import { X, ImagePlus } from "lucide-vue-next";
import { userDummyImg } from "@/assets/images/users/utils";

const emit = defineEmits(["update:modelValue", "handleSubmit"]);

const designationOptions = [
  { value: "Angular Developer", label: "Angular Developer" },
  { value: "React Developer", label: "React Developer" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "Web Designer", label: "Web Designer" },
  { value: "Team Leader", label: "Team Leader" },
  { value: "VueJs Developer", label: "VueJs Developer" },
  { value: "NodeJS Developer", label: "NodeJS Developer" },
  { value: "ASP.Net Developer", label: "ASP.Net Developer" },
  { value: "UI / UX Designer", label: "UI / UX Designer" }
];

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  dataEdit: {
    type: Boolean,
    default: false
  }
});

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: Boolean) {
    emit("update:modelValue", newVal);
  }
});
</script>
<template>
  <TModal v-model="showModal">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-500"
      >
        <h5 class="text-16" id="addEmployeeLabel">
          {{ dataEdit ? "Edit Employee" : "Create Employee" }}
        </h5>
        <button
          @click="showModal = false"
          id="addEmployee"
          class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <X class="size-5" />
        </button>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form @submit.prevent="" class="create-form" id="create-form">
          <div class="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <div class="xl:col-span-12">
              <div
                class="relative size-24 mx-auto mb-4 rounded-full shadow-md bg-slate-100 profile-user dark:bg-zink-500"
              >
                <img
                  :src="userDummyImg"
                  alt=""
                  class="object-cover w-full h-full rounded-full user-profile-image"
                />
                <div
                  class="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit"
                >
                  <input
                    id="profile-img-file-input"
                    name="profile-img-file-input"
                    type="file"
                    class="hidden profile-img-file-input"
                    accept="image/png, image/gif, image/jpeg"
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
            </div>
            <div class="xl:col-span-12">
              <TInputField
                id="employeeId"
                disabled
                label="Employee ID"
                :modelValue="'#TWE1023872'"
                hide-details
              />
            </div>
            <div class="xl:col-span-12">
              <TInputField
                label="Name"
                placeholder="Employee name"
                hide-details
                required
              />
            </div>

            <div class="xl:col-span-12">
              <TInputField
                label="Email"
                type="email"
                placeholder="example@tailwick.com"
                hide-details
                required
              />
            </div>
            <div class="xl:col-span-6">
              <TInputField
                label="Phone Number"
                placeholder="Enter phone number"
                hide-details
                required
              />
            </div>
            <div class="xl:col-span-6">
              <TInputField
                label="Location"
                placeholder="Enter Location"
                hide-details
                required
              />
            </div>
            <div class="xl:col-span-6">
              <TFlatPicker label="Joining Date" />
            </div>
            <div class="xl:col-span-6">
              <TInputField
                label="Experience"
                placeholder="0.0"
                hide-details
                required
                type="number"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="designationSelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Designation
              </label>
              <TMultiSelect :options="designationOptions" />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              variant="ghost"
              color="red"
              id="close-modal"
              @click="showModal = false"
            >
              Cancel
            </TButton>
            <TButton type="submit">
              {{ dataEdit ? "Save" : "Create Employee" }}
            </TButton>
          </div>
        </form>
      </div>
    </template>
  </TModal>
</template>
