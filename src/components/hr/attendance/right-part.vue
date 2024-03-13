<script lang="ts" setup>
import { AttendanceProfile } from "@/components/hr/hrmanagement.ts";
import { onMounted, ref, onBeforeUnmount } from "vue";
import Choices from "choices.js";

const deliveryStatus = ref<any>(null);

onMounted(() => {
  const deliveryStatusEle: any = document.querySelector(
    "#deliveryStatusSelect"
  );
  if (deliveryStatusEle) {
    deliveryStatus.value = new Choices(deliveryStatusEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  deliveryStatus.value.destroy();
});
</script>

<template>
  <div class="lg:col-span-12 xl:col-span-3 xl:row-span-2">
    <div class="mb-5">
      <label
        for="deliveryStatusSelect"
        class="inline-block mb-2 text-base font-medium"
      >
        Select Employee
      </label>
      <select
        class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
        name="deliveryStatusSelect"
        id="deliveryStatusSelect"
      >
        <option value="">Select Employee</option>
        <option value="Willie Torres">Willie Torres</option>
        <option value="Patricia Garcia">Patricia Garcia</option>
        <option value="Juliette Fecteau">Juliette Fecteau</option>
        <option value="Thomas Hatfield">Thomas Hatfield</option>
        <option value="Juliette Fecteau">Juliette Fecteau</option>
        <option value="Nancy Reynolds">Nancy Reynolds</option>
        <option value="Holly Kavanaugh">Holly Kavanaugh</option>
        <option value="Jonas Frederiksen">Jonas Frederiksen</option>
      </select>
      <!-- <TMultiSelect :options="employeeOptions" v-model="employee" /> -->
    </div>
    <TCard>
      <div class="text-center">
        <div
          class="size-20 mx-auto rounded-full bg-slate-100 dark:bg-zink-600"
        >
          <img
            src="@/assets/images/users/user-3.jpg"
            alt=""
            class="h-20 rounded-full"
          />
        </div>
        <h6 class="mt-3 mb-1 text-16"><a href="#!">Willie Torres</a></h6>
        <p class="text-slate-500 dark:text-zink-200">Product Designer</p>
      </div>

      <div class="mt-5 overflow-x-auto">
        <table class="w-full mb-0">
          <tbody>
            <tr v-for="(item, index) in AttendanceProfile" :key="index">
              <td
                class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200"
              >
                {{ item.label }}
              </td>
              <td
                class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold"
              >
                {{ item.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TCard>
  </div>
</template>
