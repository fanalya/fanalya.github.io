<script lang="ts" setup>
import Gallery from "@/components/eCommerce/products/overview/Gallery.vue";
import { ref } from "vue";
import AskQuestionModal from "@/components/eCommerce/products/overview/AskQuestionModal.vue";
import ShareModal from "@/components/eCommerce/products/overview/ShareModal.vue";
import { Store, Star, MapPin } from "lucide-vue-next";
import Description from "@/components/eCommerce/products/overview/Description.vue";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const askQueModal = ref(false);
const shareModal = ref(false);
const deleteDialog = ref(false);
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
    <div class="xl:col-span-4">
      <div class="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
        <Gallery @openQuestionModal="askQueModal = true" @openShareModal="shareModal = true" />
        <div class="card">
          <div class="border-b card-body border-slate-200 dark:border-zink-500">
            <div class="flex">
              <h6 class="grow text-15">
                <Store class="inline-block size-4 ltr:mr-2 rtl:ml-2" />
                <span class="align-middle">Themesdesign</span>
              </h6>
              <div class="shrink-0">
                <Star class="inline-block size-4 text-yellow-500 ltr:mr-2 rtl:ml-2" />
                <span class="align-middle">(4.8)</span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="flex">
              <h6 class="grow text-15">
                <MapPin class="inline-block size-4 text-orange-500 ltr:mr-2 rtl:ml-2" />
                <span class="align-middle">California, USA</span>
              </h6>
              <div class="shrink-0">
                <TButton class="px-2.5 py-2 text-xs"> View Store </TButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:col-span-8">
      <Description @onDelete="deleteDialog = true" />
    </div>
  </div>
  <AskQuestionModal v-model="askQueModal" />
  <ShareModal v-model="shareModal" />
  <DeleteDialog v-model="deleteDialog" />
</template>
