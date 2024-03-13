<script lang="ts" setup>
import {
  InboxIcon,
  Star,
  PenSquare,
  StepForward,
  AlertOctagon,
  UserCircle,
  RadioTower,
  Squirrel,
  FileText,
  Tag,
  CircleDot,
  Trash2,
  Plus,
  X,
} from "lucide-vue-next";

const sidebarClass =
  "transition-all duration-300 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 inline-block py-2 [&.active]:text-custom-500 dark:[&.active]:text-custom-500";

const sidebarIconClass = "inline-block size-4 align-middle rtl:ml-2 ltr:mr-2";

import { ref } from "vue";

const addEmailModal = ref(false);
const selectedEmails = ref(["tailwick@themesdesign.com"]);
const emailOptions = [
  { value: "tailwick@themesdesign.com", label: "tailwick@themesdesign.com" },
];
</script>

<template>
  <div class="col-span-12 lg:col-span-3 2xl:col-span-2 shrink-0 card">
    <div class="card-body">
      <TButton
        color="red"
        type="button"
        @click="addEmailModal = !addEmailModal"
        class="w-full"
      >
        <Plus class="inline-block size-4 mr-2" /><span class="align-middle"
          >Compose Email</span
        >
      </TButton>
      <ul class="mt-4">
        <li>
          <a href="#!" :class="sidebarClass">
            <InboxIcon :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Inbox</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <Star :class="sidebarIconClass" /><span class="align-middle ms-1"
              >Starred</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <PenSquare :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Draft</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <StepForward :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Important</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <AlertOctagon :class="sidebarIconClass" />
            <span class="align-middle ms-1">Spam</span>
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <UserCircle :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Contacts</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <Trash2 :class="sidebarIconClass" /><span class="align-middle ms-1"
              >Trash</span
            >
          </a>
        </li>
        <li class="py-3">
          <p class="text-sm uppercase">Category</p>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <RadioTower :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Social</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <Squirrel :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Updates</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <FileText :class="sidebarIconClass" /><span
              class="align-middle ms-1"
              >Forums</span
            >
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <Tag :class="sidebarIconClass" /><span class="align-middle ms-1"
              >Promotions</span
            >
          </a>
        </li>
        <li class="py-3">
          <p class="text-sm uppercase">Label</p>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <CircleDot
              class="inline-block size-4 text-red-500 align-middle rtl:ml-2 ltr:mr-2"
            />
            <span class="align-middle ms-1">Support</span>
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <CircleDot
              class="inline-block size-4 text-purple-500 align-middle rtl:ml-2 ltr:mr-2"
            />
            <span class="align-middle ms-1">Freelance</span>
          </a>
        </li>
        <li>
          <a href="#!" :class="sidebarClass">
            <CircleDot class="text-sky-500" :class="sidebarIconClass" />
            <span class="align-middle ms-1">Personal</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!--end-->

  <TModal v-model="addEmailModal" size="x-large">
    <template #content>
      <div
        class="flex items-center justify-between p-5 border-b dark:border-zink-500"
      >
        <h5 class="text-16">New Message</h5>
        <button
          @click="addEmailModal = false"
          class="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
        >
          <X class="size-5" />
        </button>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-5 overflow-y-auto"
      >
        <form action="#!">
          <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div class="xl:col-span-12">
              <div class="flex items-center gap-3 mb-2">
                <label
                  for="emailTo"
                  class="inline-block text-base font-medium grow"
                  >To</label
                >
                <div>
                  <a href="#!" class="mr-1 inlin-block">Cc</a>
                  <a href="#!">Bcc</a>
                </div>
              </div>
              <TMultiSelect
                :options="emailOptions"
                mode="tags"
                v-model="selectedEmails"
              />
            </div>
            <div class="xl:col-span-12">
              <div>
                <TInputField label="Subject" required value="Subject" />
              </div>
            </div>
            <div class="xl:col-span-12">
              <div>
                <TTextarea label="Example Textarea" />
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <TButton variant="ghost" color="red" @click="addEmailModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="custom">Send</TButton>
          </div>
        </form>
      </div>
    </template>
  </TModal>
</template>
