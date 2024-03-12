<script lang="ts" setup>
import { ref } from "vue";
import { Heart, ShoppingCart, MoreHorizontal } from "lucide-vue-next";
import { cardAction } from "@/components/eCommerce/products/gridView/utils.ts";
import { useRouter } from "vue-router";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const router = useRouter();
const deleteDialog = ref(false);
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
});

const cardData = ref(props.data);
const onSelect = (data: any) => {
  if (data.value === "overview") {
    router.push("/ecommerce/product-overview");
  } else if (data.value == "edit") {
    router.push("/ecommerce/product-create");
  } else if (data.value == "delete") {
    deleteDialog.value = true;
  }
};
</script>
<template>
  <div class="card md:group-[.gridView]:flex relative">
    <div class="relative group-[.gridView]:static p-8 group-[.gridView]:p-5">
      <a
        href="#!"
        class="absolute group/item toggle-button top-6 ltr:right-6 rtl:left-6"
        :class="cardData.isLiked ? 'active' : ''"
        @click="cardData.isLiked = !cardData.isLiked"
        ><Heart
          class="size-5 text-slate-400 fill-slate-200 transition-all duration-150 ease-linear dark:text-zink-200 dark:fill-zink-600 group-[.active]/item:text-red-500 dark:group-[.active]/item:text-red-500 group-[.active]/item:fill-red-200 dark:group-[.active]/item:fill-red-500/20 group-hover/item:text-red-500 dark:group-hover/item:text-red-500 group-hover/item:fill-red-200 dark:group-hover/item:fill-red-500/20"
      /></a>
      <div
        class="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md"
      >
        <img :src="cardData.src" alt="" class="group-[.gridView]:h-16" />
      </div>
    </div>
    <div
      class="card-body !pt-0 md:group-[.gridView]:flex group-[.gridView]:!p-5 group-[.gridView]:gap-3 group-[.gridView]:grow"
    >
      <div class="group-[.gridView]:grow">
        <h6
          class="mb-1 truncate transition-all duration-200 ease-linear text-15 hover:text-custom-500"
        >
          <router-link to="/ecommerce/product-overview">{{
            data.title
          }}</router-link>
        </h6>

        <div class="flex items-center text-slate-500 dark:text-zink-200">
          <div
            class="ltr:mr-1 rtl:ml-1 flex gap-1 text-yellow-500 shrink-0 text-15"
          >
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
          </div>
          ({{ data.ratingCount }})
        </div>
        <h5 class="mt-4 text-16">
          {{ data.discountPrice }}
          <small
            class="font-normal line-through text-slate-500 dark:text-zink-200"
          >
            {{ data.totalPrice }}
          </small>
        </h5>
      </div>

      <div
        class="flex items-center gap-2 mt-4 group-[.gridView]:mt-0 group-[.gridView]:self-end"
      >
        <TButton class="w-full" variant="dashed" color="slate">
          <span>
            <ShoppingCart class="inline-block size-3 ltr:mr-1 rtl:ml-1" />
            <span class="align-middle">Add to Cart</span>
          </span>
        </TButton>
        <span class="relative">
          <TList
            :items="cardAction"
            @onSelect="onSelect"
            placement="bottom-start"
          >
            <template #title>
              <TButton icon class="p-0" color="slate" variant="soft">
                <MoreHorizontal class="size-3" />
              </TButton>
            </template>
            <template #default="{ data }">
              <span class="flex gap-1 items-center">
                <component
                  :is="data.icon"
                  class="inline-block size-3 ltr:mr-1 rtl:ml-1"
                />
                <span class="align-middle">{{ data.title }}</span>
              </span>
            </template>
          </TList>
        </span>
      </div>
    </div>
  </div>
  <DeleteDialog v-if="deleteDialog" v-model="deleteDialog" />
</template>
