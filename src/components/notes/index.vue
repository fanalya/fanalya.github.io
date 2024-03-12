<script lang="ts" setup>
import { ref, computed } from "vue";
import { NotesData } from "@/components/notes/utils.ts";
import {
  Plus,
  Trash2,
  MoreHorizontal,
  Search,
  FileEdit,
  Eye
} from "lucide-vue-next";
import OverviewModal from "@/components/notes/OverviewDialog.vue";
import EditDialog from "@/components/notes/EditDialog.vue";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const tab = ref("all");
const tabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent [&.active]:bg-custom-500 dar:[&.active]:bg-custom-500 [&.active]:text-white dark:[&.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]`;

const dropdownData = ["Personal", "Business", "Social", "Home"];

const overviewModal = ref(false);
const editModal = ref(false);
const deleteDialog = ref(false);
const cardActionList = [
  { icon: Eye, title: "Overview" },
  { icon: FileEdit, title: "Edit" },
  { icon: Trash2, title: "Delete" }
];

const filteredData = computed(() => {
  if (tab.value === "all") {
    return NotesData;
  } else if (tab.value === "contactList") {
    return NotesData.filter((item) => item.category === "business");
  } else if (tab.value === "botChat") {
    return NotesData.filter((item) => item.category === "social");
  } else if (tab.value === "profile") {
    return NotesData.filter((item) => item.category === "home");
  } else if (tab.value === "fileDocument") {
    return NotesData.filter((item) => item.category === "personal");
  }
});

const onSelect = (data: any) => {
  if (data.title === "Overview") {
    overviewModal.value = true;
  } else if (data.title == "Edit") {
    editModal.value = true;
  } else if (data.title == "Delete") {
    deleteDialog.value = true;
  }
};
</script>

<template>
  <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <TCard>
      <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div class="xl:col-span-4">
          <TTabs
            v-model="tab"
            class="flex flex-wrap w-full gap-2 text-sm font-medium text-center filter-btns"
            hideDetails
          >
            <TTab value="all" :tabClass="tabClass"> All </TTab>
            <TTab value="contactList" :tabClass="tabClass"> Business </TTab>
            <TTab value="botChat" :tabClass="tabClass"> Social </TTab>
            <TTab value="profile" :tabClass="tabClass"> Home </TTab>
            <TTab value="fileDocument" :tabClass="tabClass"> Personal </TTab>
          </TTabs>
        </div>

        <div class="xl:col-start-10 xl:col-span-3">
          <div class="flex gap-3">
            <div class="relative grow">
              <TInputField
                placeholder="Search for ..."
                inputClass="ltr:pl-8 rtl:pr-8"
                hide-details
              >
                <template #prefix>
                  <Search
                    class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                  />
                </template>
              </TInputField>
            </div>
            <div class="shrink-0">
              <TButton
                data-modal-target="addNotesModal"
                @click="editModal = true"
              >
                <Plus class="inline-block size-4" />
                <span class="align-middle">Add Note</span>
              </TButton>
            </div>
          </div>
        </div>
      </div>
    </TCard>

    <div>
      <div
        class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4"
        id="notes-list"
      >
        <template v-for="(item, index) in filteredData" :key="index">
          <TCard
            class="product-item personal"
            v-if="index <= 7"
            bodyClass="h-full"
          >
            <div class="flex flex-col h-full">
              <div>
                <TList
                  :items="cardActionList"
                  class="relative ltr:float-right rtl:float-left"
                  @onSelect="onSelect"
                  placement="bottom-start"
                >
                  <template #title>
                    <TButton
                      id="emailMainAction"
                      icon
                      class="p-0 !w-[30px] !h-[30px]"
                      variant="soft"
                      color="slate"
                    >
                      <MoreHorizontal class="size-3" />
                    </TButton>
                  </template>
                  <template #default="{ data }">
                    <component
                      :is="data.icon"
                      class="inline-block size-3 ltr:mr-1 rtl:ml-1"
                    />
                    <span class="align-middle">{{ data.title }}</span>
                  </template>
                </TList>
                <div class="flex items-center gap-2 mb-5">
                  <TList
                    :items="dropdownData"
                    placement="bottom-start"
                    class="relative"
                  >
                    <template #title>
                      <div
                        class="size-4 mt-1 border border-dashed rounded-full dropdown-toggle shrink-0 category-dropdown"
                        :class="{
                          'bg-sky-100 border-sky-500 dark:bg-sky-500/20':
                            item.category == 'personal',
                          'bg-orange-100 border-orange-500 dark:bg-orange-500/20':
                            item.category == 'business',
                          'bg-purple-100 border-purple-500 dark:bg-purple-500/20':
                            item.category == 'social',
                          'bg-green-100 border-green-500 dark:bg-green-500/20':
                            item.category == 'home'
                        }"
                      ></div>
                    </template>
                  </TList>
                  <h5 class="text-16 mt-1">{{ item.title }}</h5>
                </div>
              </div>

              <div
                class="js-read-smore"
                data-read-smore-words="40"
                data-read-smore-inline="true"
              >
                <p class="text-slate-500 dark:text-zink-200"></p>
                <div v-html="item.description"></div>
              </div>

              <div class="flex items-center justify-between gap-3 pt-4 mt-auto">
                <div class="shrink-0">
                  <a
                    href="#!"
                    class="group/item toggle-button group/item toggle-button active"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="star"
                      class="lucide lucide-star size-5 text-slate-500 dark:text-zink-200 dark:fill-zink-600 fill-slate-200 transition-all duration-150 ease-linear group-[.active]/item:text-yellow-500 dark:group-[.active]/item:text-yellow-500 group-[.active]/item:fill-yellow-200 dark:group-[.active]/item:fill-yellow-500/50 group-hover/item:text-yellow-500 dark:group-hover/item:text-yellow-500 group-hover/item:fill-yellow-200 dark:group-hover/item:fill-yellow-500/50"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon>
                    </svg>
                  </a>
                </div>
                <p class="text-slate-500 dark:text-zink-200 shrink-0">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </TCard>
        </template>
      </div>
    </div>

    <div
      class="flex flex-col items-center gap-5 mb-5 md:flex-row"
      id="paginationItems"
    >
      <div class="grow">
        <p class="text-slate-500 dark:text-zink-200">
          Showing <b>8</b> of <b>44</b> Results
        </p>
      </div>
      <TPagination
        pageClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
      />
    </div>
  </div>

  <EditDialog v-model="editModal" />
  <OverviewModal v-model="overviewModal" @onEdit="editModal = true" />
  <DeleteDialog v-model="deleteDialog" />
</template>
